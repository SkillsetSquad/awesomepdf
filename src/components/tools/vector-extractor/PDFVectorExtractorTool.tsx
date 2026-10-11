'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { FileText as UIFileText } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { extractVectors } from '@/lib/pdf/processors/vector-extractor';
import { saveBlobFile } from '@/lib/tauri-bridge';
import type { ProcessOutput } from '@/types/pdf';
import {
  Layers,
  Settings2,
  Copy,
  Download,
  Check,
  Palette,
  Search
} from 'lucide-react';

export interface PDFVectorExtractorToolProps {
  className?: string;
}

function removeInspectorAttributes(element: Element) {
  for (const node of [element, ...Array.from(element.querySelectorAll('*'))]) {
    node.removeAttribute('tabindex'); node.removeAttribute('role'); node.removeAttribute('aria-label');
  }
}

function selectedGeometry(shape: SVGElement, root: SVGSVGElement) {
  let fragment = shape.cloneNode(true) as Element;
  let ancestor: Element | null = shape.parentElement;
  // Preserve inherited transforms, clipping and opacity from the original document.
  while (ancestor && ancestor !== root) {
    const wrapper = ancestor.cloneNode(false) as Element;
    wrapper.appendChild(fragment); fragment = wrapper; ancestor = ancestor.parentElement;
  }
  removeInspectorAttributes(fragment);
  return fragment.outerHTML;
}

export function PDFVectorExtractorTool({ className = '' }: PDFVectorExtractorToolProps) {
  const t = useTranslations('common');

  // File states
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [targetPage, setTargetPage] = useState<number>(1);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [svgContent, setSvgContent] = useState<string>('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Selection states
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);
  const [selectedElementHtml, setSelectedElementHtml] = useState<string | null>(null);
  const [elementColor, setElementColor] = useState<string>('#3b82f6');
  const [copied, setCopied] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);
  const operationRef = useRef(0);
  const selectedElementRef = useRef<SVGElement | null>(null);
  const selectedIndexRef = useRef<number | null>(null);
  const [selectedSvg, setSelectedSvg] = useState('');
  const [selectedViewBox, setSelectedViewBox] = useState('0 0 1 1');
  useEffect(() => () => { operationRef.current += 1; }, []);

  /**
   * Handle file upload and trigger parser
   */
  const handleFileSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    const operation = ++operationRef.current;
    setTargetPage(1);
    setTotalPages(0);
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setSvgContent('');
    setResultBlob(null);
    setSelectedElementHtml(null);
    selectedElementRef.current = null;
    selectedIndexRef.current = null;

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      if (operation !== operationRef.current) return;
      setTotalPages(pdf.getPageCount());
      setIsLoadingMetadata(false);

      await handleExtract(selectedFile, 1);

    } catch (err) {
      if (operation !== operationRef.current) return;
      console.error(err);
      setError('Failed to load PDF file. The file structure might be encrypted or broken.');
    } finally {
      if (operation === operationRef.current) setIsLoadingMetadata(false);
    }
  };

  /**
   * Run Vector Extraction Processor
   */
  const handleExtract = async (targetFile: File, pageNum: number) => {
    const operation = ++operationRef.current;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setSvgContent('');
    setResultBlob(null);
    setSelectedElementHtml(null);
    selectedElementRef.current = null;
    selectedIndexRef.current = null;

    try {
      const output: ProcessOutput = await extractVectors(
        targetFile,
        {
          pageNum,
          cleanGrid: true,
        },
        (prog, message) => {
          if (!cancelledRef.current && operation === operationRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Compiling path coordinates...');
          }
        }
      );

      if (cancelledRef.current || operation !== operationRef.current) return;

      if (output.success && output.result && output.metadata) {
        setSvgContent(output.metadata.svgContent as string);
        setResultBlob(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to extract vector details.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current && operation === operationRef.current) {
        setError(err instanceof Error ? err.message : 'Error extracting vector paths.');
        setStatus('error');
      }
    }
  };

  /**
   * Trigger manual page change re-extract
   */
  const handlePageChange = (newPage: number) => {
    if (!file) return;
    const boundedPage = Math.min(Math.max(1, newPage), totalPages);
    setTargetPage(boundedPage);
    handleExtract(file, boundedPage);
  };

  // Inspect the actual generated SVG. Selection styling stays outside the exported geometry.
  useEffect(() => {
    const container = containerRef.current;
    if (!svgContent || !container) return;
    // React owns the empty wrapper; this local SVG adapter owns its children.
    // Inspector state changes must not replace focused shapes or their native listeners.
    container.innerHTML = svgContent;
    const shapes = Array.from(container.querySelectorAll<SVGElement>('path,rect,circle,ellipse,polygon,polyline,text,g'))
      .filter(shape => !shape.closest('defs,clipPath,mask'));
    const select = (shape: SVGElement) => {
      selectedElementRef.current = shape;
      const root = container.querySelector('svg');
      if (!root) return;
      const geometry = selectedGeometry(shape, root);
      const viewBox = root.getAttribute('viewBox') || `0 0 ${root.getAttribute('width') || 1} ${root.getAttribute('height') || 1}`;
      const definitions = Array.from(root.querySelectorAll('defs')).map(node => node.outerHTML).join('');
      setSelectedViewBox(viewBox);
      setSelectedElementHtml(geometry);
      setSelectedSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${definitions}${geometry}</svg>`);
      const fill = shape.getAttribute('fill') || shape.style.fill;
      if (/^#[0-9a-f]{6}$/i.test(fill)) setElementColor(fill);
      else if (/^#[0-9a-f]{3}$/i.test(fill)) setElementColor('#' + [...fill.slice(1)].map(c => c + c).join(''));
    };
    const cleanup: (() => void)[] = [];
    shapes.forEach((shape, index) => {
      shape.setAttribute('tabindex', '0'); shape.setAttribute('role', 'button');
      shape.setAttribute('aria-label', `${t('vectorExtractor.propertiesTitle')}: ${shape.tagName} ${index + 1}`);
      const click = (event: Event) => { event.stopPropagation(); selectedIndexRef.current = index; select(shape); };
      const keyboard = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); selectedIndexRef.current = index; select(shape); }
      };
      const focus = () => setHoveredElementId(shape.id || shape.tagName);
      const blur = () => setHoveredElementId(null);
      shape.addEventListener('click', click); shape.addEventListener('keydown', keyboard);
      shape.addEventListener('focus', focus); shape.addEventListener('blur', blur);
      shape.addEventListener('mouseenter', focus); shape.addEventListener('mouseleave', blur);
      cleanup.push(() => {
        shape.removeEventListener('click', click); shape.removeEventListener('keydown', keyboard);
        shape.removeEventListener('focus', focus); shape.removeEventListener('blur', blur);
        shape.removeEventListener('mouseenter', focus); shape.removeEventListener('mouseleave', blur);
      });
    });
    const selected = selectedIndexRef.current;
    if (selected !== null && shapes[selected]) select(shapes[selected]);
    return () => cleanup.forEach(remove => remove());
  }, [svgContent, t]);

  const handleColorChange = (color: string) => {
    setElementColor(color);
    const shape = selectedElementRef.current;
    if (!shape) return;
    shape.setAttribute('fill', color);
    if (shape.style.fill) shape.style.fill = color;
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;
    const clone = svg.cloneNode(true) as SVGElement;
    removeInspectorAttributes(clone);
    // Rebuild from the edited source so full-page download and selected code agree.
    const updated = clone.outerHTML;
    setSvgContent(updated);
    setResultBlob(new Blob([updated], { type: 'image/svg+xml;charset=utf-8' }));
    const geometry = selectedGeometry(shape, svg);
    setSelectedElementHtml(geometry);
    const definitions = Array.from(clone.querySelectorAll('defs')).map(node => node.outerHTML).join('');
    setSelectedSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${selectedViewBox}">${definitions}${geometry}</svg>`);
  };

  /**
   * Action: Copy SVG Code to clipboard
   */
  const handleCopyCode = () => {
    if (!selectedElementHtml) return;
    void navigator.clipboard.writeText(selectedElementHtml).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    }).catch(err => setError(err instanceof Error ? err.message : t('vectorExtractor.copyCode')));
  };

  /**
   * Action: Download single selected SVG element
   */
  const handleDownloadSelected = async () => {
    if (!selectedElementHtml) return;

    const blob = new Blob([selectedSvg], { type: 'image/svg+xml;charset=utf-8' });
    await saveBlobFile(blob, 'extracted_vector_asset.svg');
  };

  const handleClearFile = () => {
    operationRef.current += 1;
    setIsLoadingMetadata(false);
    setError(null);
    setFile(null);
    setTotalPages(0);
    setTargetPage(1);
    setSvgContent('');
    setSelectedElementHtml(null);
    setStatus('idle');
  };

  const handleCancel = () => {
    operationRef.current += 1;
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>

      {/* File Upload zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('vectorExtractor.uploadLabel')}
          description={t('vectorExtractor.uploadDescription')}
        />
      )}

      {/* Error alert */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-semibold">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* Metadata bar */}
      {file && (
        <Card  className="p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <UIFileText className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground truncate max-w-[280px]" title={file.name}>
                {file.name}
              </p>
              <div className="flex items-center gap-4 mt-0.5">
                <span className="text-xs text-muted-foreground">
                  {totalPages > 0 ? t('accessibility.pageOf', { current: targetPage, total: totalPages }) : t('status.loading')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
                </span>

                {/* Page Selector */}
                {totalPages > 1 && (
                  <div className="flex items-center gap-1.5 border border-border rounded-lg px-2 py-0.5 bg-background">
                    <Button variant="ghost" size="icon-sm"
                      onClick={() => handlePageChange(targetPage - 1)}
                      disabled={isProcessing || targetPage <= 1} aria-label={t('buttons.previous')}
                      className="opacity-60"
                    >
                      ◀
                    </Button>
                    <span className="text-sm font-semibold">{t('vectorExtractor.pageLabel', { page: targetPage })}</span>
                    <Button variant="ghost" size="icon-sm"
                      onClick={() => handlePageChange(targetPage + 1)}
                      disabled={isProcessing || targetPage >= totalPages} aria-label={t('buttons.next')}
                      className="opacity-60"
                    >
                      ▶
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
            {t('buttons.remove')}
          </Button>
        </Card>
      )}

      {/* Main Workspace */}
      {file && !svgContent && !isProcessing && !isLoadingMetadata && (
        <Button onClick={() => handleExtract(file, targetPage)}>{t('buttons.process')}</Button>
      )}
      {file && svgContent && status !== 'processing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: SVG Display Canvas */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <Card  className="p-4 flex-1 flex flex-col justify-between border-2 min-h-[480px]">

              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  {t('vectorExtractor.previewHelp')}
                </span>
                <span className="text-xs text-muted-foreground">
                  {hoveredElementId || t('vectorExtractor.emptyPropertiesTitle')}
                </span>
              </div>

              <div className="flex-1 min-w-0 overflow-auto rounded-md border bg-white p-4" dir="ltr">
                <div ref={containerRef} className="w-full [&_svg]:h-auto [&_svg]:max-w-full [&_[role=button]]:cursor-pointer [&_[role=button]]:focus-visible:outline [&_[role=button]]:focus-visible:outline-2 [&_[role=button]]:focus-visible:outline-primary [&_[role=button]]:hover:outline [&_[role=button]]:hover:outline-1 [&_[role=button]]:hover:outline-primary" />
              </div>

            </Card>
          </div>

          {/* RIGHT: Inspector & Export Options */}
          <div className="lg:col-span-4 flex flex-col space-y-6">

            {/* Inspector Panel */}
            <Card  className="flex-1 p-6 border flex flex-col justify-between">

              <div className="space-y-6">
                <div className="border-b border-border pb-3">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-primary" />
                    {t('vectorExtractor.propertiesTitle')}
                  </h3>
                </div>

                {!selectedElementHtml ? (
                  <div className="text-center p-6 text-muted-foreground space-y-2">
                    <Layers className="w-12 h-12 text-muted-foreground mx-auto opacity-50" />
                    <h4 className="text-xs font-semibold text-foreground">{t('vectorExtractor.emptyPropertiesTitle')}</h4>
                    <p className="text-xs">{t('vectorExtractor.emptyPropertiesDesc')}</p>
                  </div>
                ) : (
                  <div className="space-y-5">

                    {/* SVG Preview Box */}
                    <div className="border rounded-md p-4 bg-white flex items-center justify-center aspect-video shadow-sm relative overflow-hidden">
                      <div className="absolute top-2 start-2 text-xs text-gray-600">{t('documentPreview.result')}</div>
                      <div
                        className="w-20 h-20 flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: selectedSvg }}
                      />
                    </div>

                    {/* Recolor panel */}
                    <div className="space-y-2">
                      <Label className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Palette className="w-4 h-4" /> {t('vectorExtractor.rgbColor')}
                      </Label>
                      <div className="flex items-center gap-3">
                        <Input
                          type="color"
                          value={elementColor}
                          onChange={(e) => handleColorChange(e.target.value)} aria-label={t('vectorExtractor.rgbColor')}
                          className="w-10 h-10 cursor-pointer"
                        />
                        <code className="text-xs font-mono font-semibold">{elementColor}</code>
                      </div>
                    </div>

                    {/* Actions list */}
                    <div className="space-y-2.5 pt-2 border-t border-border">

                      {/* Copy Code */}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full flex items-center justify-center gap-2 text-sm"
                        onClick={handleCopyCode}
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        {copied ? t('vectorExtractor.codeCopied') : t('vectorExtractor.copyCode')}
                      </Button>

                      {/* Download element */}
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full flex items-center justify-center gap-2 text-sm"
                        onClick={handleDownloadSelected}
                      >
                        <Download className="w-4 h-4" />
                        {t('vectorExtractor.downloadSvg')}
                      </Button>

                    </div>

                  </div>
                )}
              </div>

              {/* Complete Page Downloader */}
              <div className="pt-6 border-t border-border mt-6">
                {resultBlob && (
                  <DownloadButton
                    file={resultBlob}
                    filename={file.name.replace(/\.pdf$/i, `_page_${targetPage}.svg`)}
                    variant="default"
                    size="lg"
                    className="w-full"
                    showFileSize
                  />
                )}
              </div>

            </Card>

          </div>

        </div>
      )}

      {/* Progress view */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={handleCancel}
          showPercentage
        />
      )}

    </div>
  );
}

export default PDFVectorExtractorTool;
