'use client';


import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PDFPagePreview } from '../PDFPagePreview';
import { TextFilePreview } from '../TextFilePreview';
import { exportAnnotations } from '@/lib/pdf/processors/annotation-exporter';
import type { ProcessOutput } from '@/types/pdf';
import { BookOpen, CheckSquare } from 'lucide-react';

export interface AnnotationExporterToolProps {
  className?: string;
}

export function AnnotationExporterTool({ className = '' }: AnnotationExporterToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<'md' | 'json'>('md');
  const [incHighlights, setIncHighlights] = useState(true);
  const [incNotes, setIncNotes] = useState(true);
  const [incUnderlines, setIncUnderlines] = useState(true);

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

  const handleExport = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await exportAnnotations(
        [file],
        {
          format,
          includeHighlights: incHighlights,
          includeNotes: incNotes,
          includeUnderlines: incUnderlines,
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Extracting comments...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (format === 'json' ? `${file.name.replace(/\.pdf$/i, '')}_notes.json` : `${file.name.replace(/\.pdf$/i, '')}_notes.md`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to parse page annotations.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error extracting annotations.');
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
          label={t('annotationExporter.uploadLabel')}
          description={t('annotationExporter.uploadDescription')}
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
                  <BookOpen className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('annotationExporter.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{t('documentPreview.source')}</p><PDFPagePreview file={file} label={t('documentPreview.source')} /></div>
              {resultBlob && <TextFilePreview file={resultBlob} label={t('documentPreview.result')} />}
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('annotationExporter.optionsTitle')}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Checkbox

                      id="highlights"
                      checked={incHighlights}
                      onCheckedChange={(checked) => { resetOutput(); setIncHighlights((checked === true)); }}
                       aria-label={t('annotationExporter.incHighlightsLabel')} disabled={status === 'processing'}
                    />
                    <Label htmlFor="highlights" className="">
                      {t('annotationExporter.incHighlightsLabel')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Checkbox

                      id="notes"
                      checked={incNotes}
                      onCheckedChange={(checked) => { resetOutput(); setIncNotes((checked === true)); }}
                       aria-label={t('annotationExporter.incNotesLabel')} disabled={status === 'processing'}
                    />
                    <Label htmlFor="notes" className="">
                      {t('annotationExporter.incNotesLabel')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5"><Checkbox id="underlines" checked={incUnderlines} onCheckedChange={checked => { resetOutput(); setIncUnderlines(checked === true); }} disabled={status === 'processing'} /><Label htmlFor="underlines">{t('annotationExporter.incUnderlinesLabel')}</Label></div>

                  <div className="space-y-2">
                    <Label className="">{t('annotationExporter.formatLabel')}</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={format === 'md' ? 'default' : 'secondary'}
                        size="sm"
                        onClick={() => { resetOutput(); setFormat('md'); }} disabled={status === 'processing'} aria-pressed={format === 'md'}
                        className="text-xs"
                      >
                        {t('annotationExporter.formatMd')}
                      </Button>
                      <Button
                        variant={format === 'json' ? 'default' : 'secondary'}
                        size="sm"
                        onClick={() => { resetOutput(); setFormat('json'); }} disabled={status === 'processing'} aria-pressed={format === 'json'}
                        className="text-xs"
                      >
                        {t('annotationExporter.formatJson')}
                      </Button>
                    </div>
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
                    onClick={handleExport}
                    disabled={status === 'processing'}
                  >
                    {t('annotationExporter.processButton')}
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

export default AnnotationExporterTool;
