'use client';


import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PDFPagePreview } from '../PDFPagePreview';
import { generateInteractiveToc } from '@/lib/pdf/processors/interactive-toc-generator';
import type { ProcessOutput } from '@/types/pdf';
import { Layers, Sliders } from 'lucide-react';

export interface InteractiveTocGeneratorToolProps {
  className?: string;
}

export function InteractiveTocGeneratorTool({ className = '' }: InteractiveTocGeneratorToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('Table of Contents');
  const [insertIndex, setInsertIndex] = useState(0);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('output.pdf');
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);
  const resetOutput = () => { processingRun.current++; setResultBlob(null); setStatus('idle'); setError(null); };

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    processingRun.current++;
    setStatus('idle');
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleGenerate = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await generateInteractiveToc(
        [file],
        {
          title,
          insertIndex,
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Weaving interactive paths...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (`${file.name.replace(/\.pdf$/i, '')}_toc_interactive.pdf`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to generate interactive TOC.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error generating TOC.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    focusUpload.current = true;
    resetOutput();
    setFile(null);
    setResultBlob(null);
    setStatus('idle');
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <div ref={uploadRegion} tabIndex={-1}><FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('interactiveTocGenerator.uploadLabel')}
          description={t('interactiveTocGenerator.uploadDescription')}
        /></div>
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          {error}
        </AlertDescription></Alert>
      )}

      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 min-w-0 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('interactiveTocGenerator.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('interactiveTocGenerator.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="interactivetocgeneratortool-field-1">{t('interactiveTocGenerator.tocTitleLabel')}</Label>
                    <Input
                      type="text"
                      value={title}
                      onChange={(e) => { resetOutput(); setTitle(e.target.value); }}
                      placeholder="Table of Contents"
                      className="w-full" id="interactivetocgeneratortool-field-1" aria-label={t('interactiveTocGenerator.tocTitleLabel')} disabled={status === 'processing'}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="" htmlFor="interactivetocgeneratortool-field-2">{t('interactiveTocGenerator.insertPageLabel')}</Label>
                    <Input
                      type="number"
                      value={insertIndex}
                      onChange={(e) => { resetOutput(); setInsertIndex(parseInt(e.target.value) || 0); }}
                      className="w-full" id="interactivetocgeneratortool-field-2" aria-label={t('interactiveTocGenerator.insertPageLabel')} disabled={status === 'processing'}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={filename}
                    variant="default"
                    size="lg"
                    className="w-full py-4"
                    showFileSize
                  />
                ) : (
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full py-4"
                    onClick={handleGenerate}
                    disabled={status === 'processing'}
                  >
                    {t('interactiveTocGenerator.processButton')}
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {status === 'processing' && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { resetOutput(); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default InteractiveTocGeneratorTool;
