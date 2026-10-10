'use client';

import { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { reflowPDF, type ReflowParagraph } from '@/lib/pdf/processors/ai-pdf-reflower';
import { saveBlobFile } from '@/lib/tauri-bridge';
import type { ProcessOutput } from '@/types/pdf';
import { Settings2, FileText, Download, Type, AlignLeft, Compass, BookOpen, CircleAlert, Loader2 } from 'lucide-react';

export interface AIPDFReflowerToolProps {
  className?: string;
}

export function AIPDFReflowerTool({ className = '' }: AIPDFReflowerToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const tTools = useTranslations('tools');

  // File states
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Layout states
  const [theme, setTheme] = useState<'sepia' | 'dark' | 'green' | 'light'>('sepia');
  const [fontSize, setFontSize] = useState<number>(16);

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [paragraphs, setParagraphs] = useState<ReflowParagraph[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [isExporting, setIsExporting] = useState(false);

  const cancelledRef = useRef(false);

  /**
   * Run Reflow Processor
   */
  const handleReflow = useCallback(async (targetFile: File) => {
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await reflowPDF(
        targetFile,
        {
          theme,
          fontSize,
          exportFormat: 'markdown', // default format to markdown
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Extracting semantic blocks...');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setStatus('complete');

        if (output.metadata && output.metadata.paragraphs) {
          setParagraphs(output.metadata.paragraphs as ReflowParagraph[]);
        }
      } else {
        setError(output.error?.message || 'Failed to analyze and reflow PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Reflowing processing failed.');
        setStatus('error');
      }
    }
  }, [theme, fontSize]);

  /**
   * Handle File Selection
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setParagraphs([]);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setTotalPages(pdf.getPageCount());

      await handleReflow(selectedFile);

    } catch (err) {
      console.error(err);
      setError('Failed to parse PDF file metadata. Ensure it is not corrupted.');
    } finally {
      setIsLoadingMetadata(false);
    }
  }, [handleReflow]);

  /**
   * Export to specific format dynamically in front-end
   */
  const handleExportFormat = async (format: 'markdown' | 'epub' | 'json') => {
    if (!file || paragraphs.length === 0) return;

    setIsExporting(true);
    setError(null);
    try {

      let exportBlob: Blob;
      let ext = '.md';

      if (format === 'markdown') {
        const mdText = paragraphs.map((p) => {
          switch (p.type) {
            case 'h1': return `# ${p.text}\n`;
            case 'h2': return `## ${p.text}\n`;
            case 'h3': return `### ${p.text}\n`;
            case 'li': return `* ${p.text}`;
            default: return `${p.text}\n`;
          }
        }).join('\n');
        exportBlob = new Blob([mdText], { type: 'text/markdown;charset=utf-8' });
        ext = '.md';
      } else if (format === 'epub') {
        const htmlText = `
        <?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <title>${file.name.replace(/\.pdf$/i, '')}</title>
          <style>
            body { font-family: sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; margin-top: 1.5em; }
            h2 { color: #555; margin-top: 1.3em; }
            p { margin-bottom: 1em; text-indent: 2em; }
            li { margin-bottom: 0.5em; }
          </style>
        </head>
        <body>
          ${paragraphs.map((p) => {
            if (p.type === 'li') return `<li>${p.text}</li>`;
            return `<${p.type}>${p.text}</${p.type}>`;
          }).join('\n')}
        </body>
        </html>`;
        exportBlob = new Blob([htmlText], { type: 'application/epub+zip' });
        ext = '.epub';
      } else {
        const jsonText = JSON.stringify(paragraphs, null, 2);
        exportBlob = new Blob([jsonText], { type: 'application/json' });
        ext = '.json';
      }

      // Download trigger
      const downloadName = `${file.name.replace(/\.pdf$/i, '')}_reflowed${ext}`;
      await saveBlobFile(exportBlob, downloadName);
    } catch (err) {
      setError(err instanceof Error ? err.message : tErrors('processingFailed'));
    } finally {
      setIsExporting(false);
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setParagraphs([]);
    setStatus('idle');
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  // Theme Styles mapping
  const getThemeClass = () => {
    switch (theme) {
      case 'dark':
        return 'bg-zinc-900 text-zinc-100 border-zinc-800';
      case 'green':
        return 'bg-[#e2edd9] text-[#1c3016] border-[#ccdcb9]';
      case 'light':
        return 'bg-white text-zinc-800 border-zinc-200';
      case 'sepia':
      default:
        return 'bg-[#f4ebd0] text-[#5b4636] border-[#e7d8b5]';
    }
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>

      {/* Upload files */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('aiPdfReflower.uploadLabel')}
          description={t('aiPdfReflower.uploadDescription')}
        />
      )}

      {/* Error Block */}
      {error && (
        <Alert variant="destructive" ><CircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-semibold">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File metadata status block */}
      {file && (
        <Card className="flex-row items-center justify-between gap-3 p-4">
          <div className="flex min-w-0 items-center gap-3">
            <FileText className="size-8 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div className="min-w-0">
              <p className="break-all text-sm font-medium" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {totalPages > 0 ? `${totalPages} ${tTools('nUpPdf.pagesLabel')}` : t('aiPdfReflower.scanningMetadata')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFile}
            disabled={isProcessing || isLoadingMetadata || isExporting}
          >
            {t('buttons.remove') || 'Remove'}
          </Button>
        </Card>
      )}

      {/* Primary Workspace */}
      {file && paragraphs.length > 0 && status !== 'processing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            <Card  className="p-6 border gap-6">
              <div className="border-b border-border pb-3">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Settings2 className="w-5 h-5 text-primary" />
                  {t('aiPdfReflower.optionsTitle')}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('aiPdfReflower.optionsHelp')}
                </p>
              </div>

              {/* Theme selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  {t('aiPdfReflower.themeLabel')}
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    { id: 'sepia', name: t('aiPdfReflower.themeSepia') },
                    { id: 'light', name: t('aiPdfReflower.themeLight') },
                    { id: 'green', name: t('aiPdfReflower.themeGreen') },
                    { id: 'dark', name: t('aiPdfReflower.themeDark') },
                  ] as const).map((thm) => (
                    <Button size="sm" variant={theme === thm.id ? 'default' : 'outline'} aria-pressed={theme === thm.id}
                      key={thm.id}
                      onClick={() => setTheme(thm.id)}
                      className="h-auto min-h-8 whitespace-normal text-center"
                    >
                      {thm.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Font Size adjustments */}
              <div className="space-y-2">
                <Label className="flex items-center justify-between" htmlFor="aipdfreflowertool-slider-1">
                  <span className="flex items-center gap-1.5"><Type className="w-4 h-4" /> {t('aiPdfReflower.fontSizeLabel')}</span>
                  <span className="text-sm text-muted-foreground">{fontSize}px</span>
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    aria-label={`${t('aiPdfReflower.fontSizeLabel')}: −1`}
                    onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                  >
                    A-
                  </Button>
                  <Slider
                    min={12}
                    max={28}
                    value={[fontSize]}
                    onValueChange={([value]) => setFontSize(value)}
                    className="flex-[2] cursor-pointer" id="aipdfreflowertool-slider-1" aria-label={t('aiPdfReflower.fontSizeLabel')}
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                    aria-label={`${t('aiPdfReflower.fontSizeLabel')}: +1`}
                    onClick={() => setFontSize(Math.min(28, fontSize + 1))}
                  >
                    A+
                  </Button>
                </div>
              </div>

              {/* Export formats */}
              <div className="border-t border-border pt-6 space-y-4 relative">
                <Label className="flex items-center gap-1.5">
                  <Download className="w-4 h-4" />
                  {t('buttons.download')}
                </Label>

                <div className="flex flex-wrap gap-2" aria-busy={isExporting}>
                  <Button variant="outline" disabled={isExporting} onClick={() => handleExportFormat('markdown')}>
                    <FileText aria-hidden="true" />
                    Markdown
                  </Button>
                  <Button variant="outline" disabled={isExporting} onClick={() => handleExportFormat('epub')}>
                    <BookOpen aria-hidden="true" />
                    EPUB
                  </Button>
                  <Button variant="outline" disabled={isExporting} onClick={() => handleExportFormat('json')}>
                    <AlignLeft aria-hidden="true" />
                    JSON
                  </Button>
                </div>

                {isExporting && <p className="flex items-center gap-2 text-sm text-muted-foreground" role="status"><Loader2 className="size-4 animate-spin" aria-hidden="true" />{t('status.processing')}</p>}
              </div>
            </Card>
          </div>

          <Card className="min-w-0 lg:col-span-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="size-4" aria-hidden="true" />{t('aiPdfReflower.previewTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`max-h-[640px] overflow-y-auto rounded-md border p-5 ${getThemeClass()}`} role="region" aria-label={t('aiPdfReflower.previewTitle')} tabIndex={0} style={{ fontSize: `${fontSize}px` }}>
                <div className="space-y-4">
                  {paragraphs.map((paragraph, index) => {
                    if (paragraph.type === 'li') return <ul key={index} className="list-disc ps-5"><li className="leading-relaxed">{paragraph.text}</li></ul>;
                    const Tag = paragraph.type;
                    const heading = paragraph.type !== 'p';
                    return <Tag key={index} className={heading ? 'font-semibold leading-snug' : 'leading-relaxed'}>{paragraph.text}</Tag>;
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      )}

      {/* Progress indicators */}
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

export default AIPDFReflowerTool;
