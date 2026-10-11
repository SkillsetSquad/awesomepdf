'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { Label } from '@/components/ui/label';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PDFPagePreview } from '../PDFPagePreview';
import { optimizeEink } from '@/lib/pdf/processors/eink-optimizer';
import {
  SunMoon,
  Sliders,
  Sparkles,
  Settings,
  BookOpen
} from 'lucide-react';

export function EinkOptimizerTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.einkOptimizer');

  const [file, setFile] = useState<File | null>(null);
  const [contrastOffset, setContrastOffset] = useState(0); // -50 to 50
  const [dilationAmount, setDilationAmount] = useState(0); // 0 (none), 1 (light), 2 (strong)

  const operationRef = useRef(0);
  useEffect(() => () => { operationRef.current += 1; }, []);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = (uploadedFiles: File[]) => {
    if (uploadedFiles.length > 0) {
      setFile(uploadedFiles[0]);
      setResult(null);
      setError(null);
      setStatus('idle');
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    const operation = ++operationRef.current;
    setStatus('processing');
    setProgress(15);
    setError(null);
    setResult(null);

    try {
      const output = await optimizeEink(
        file,
        { contrastOffset, dilationAmount },
        (p) => { if (operation === operationRef.current) setProgress(p); }
      );

      if (operation !== operationRef.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to optimize PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (operation !== operationRef.current) return;
      setError(err instanceof Error ? err.message : 'An error occurred.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    operationRef.current += 1;
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setContrastOffset(0);
    setDilationAmount(0);
  };

  const handleCancel = () => { operationRef.current += 1; setStatus('idle'); setProgress(0); };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-md bg-muted text-muted-foreground">
          <SunMoon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {tTools('optionsTitle')}
          </h2>
          <p className="text-xs text-muted-foreground">
            {tTools('uploadDescription')}
          </p>
        </div>
      </div>

      {!file ? (
        <FileUploader
          accept={['.pdf']}
          onFilesSelected={handleUpload}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-muted border border-border">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium truncate max-w-md min-w-0">{file.name}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              disabled={status === 'processing'}
              className="text-xs"
            >
              {t('buttons.reset')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control Panel */}
            <div className="space-y-6">
              {/* Contrast Threshold Offset Slider */}
              <div className="space-y-3 p-4 rounded-md bg-muted border border-border">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Label htmlFor="eink-contrast-offset" className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-muted-foreground" />
                    {t('einkOptimizer.otsueThresholdSuffix')}
                  </Label>
                  <span className="font-mono text-muted-foreground">{contrastOffset > 0 ? `+${contrastOffset}` : contrastOffset}</span>
                </div>
                <Slider
                  min={-50}
                  max={50}
                  value={[contrastOffset]}
                  onValueChange={(values) => setContrastOffset(parseInt(String(values[0])))}
                  disabled={status === 'processing'}
                  className="w-full" id="eink-contrast-offset" aria-label={t('einkOptimizer.otsueThresholdSuffix')}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  {t('einkOptimizer.keepStrokes')}
                  {t('einkOptimizer.stripBackground')}
                </div>
              </div>

              {/* Text Dilation Amount */}
              <div role="group" aria-labelledby="eink-dilation-label" className="space-y-3 p-4 rounded-md bg-muted border border-border">
                <p id="eink-dilation-label" className="text-sm font-medium flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-muted-foreground" />
                  {t('einkOptimizer.dilationSuffix')}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 0, label: t('einkOptimizer.originalStroke') },
                    { val: 1, label: t('einkOptimizer.microDilation') },
                    { val: 2, label: t('einkOptimizer.strongDilation') }
                  ].map((option) => (
                    <Button size="sm" variant={dilationAmount === option.val ? 'default' : 'outline'} aria-pressed={dilationAmount === option.val}
                      key={option.val}
                      onClick={() => setDilationAmount(option.val)}
                      disabled={status === 'processing'}
                      className="h-auto min-h-8 whitespace-normal px-2 text-center"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {status !== 'processing' && (
                <Button
                  onClick={handleProcess}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {tTools('processButton')}
                </Button>
              )}

              {status === 'processing' && (
                <ProcessingProgress progress={progress} status={status} onCancel={handleCancel} />
              )}

              {status === 'complete' && result && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                    {tTools('successMessage')}
                  </div>
                  <DownloadButton
                    file={result}
                    filename={file.name.replace(/\.pdf$/i, '_eink.pdf')}
                    className="w-full"
                  />
                </div>
              )}

              {status === 'error' && error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                  {error}
                </AlertDescription></Alert>
              )}
            </div>

            <Card className="min-w-0 p-4">
              <Tabs defaultValue="source">
                <TabsList>
                  <TabsTrigger value="source">{t('documentPreview.source')}</TabsTrigger>
                  <TabsTrigger value="result" disabled={!result}>{t('documentPreview.result')}</TabsTrigger>
                </TabsList>
                <TabsContent value="source"><PDFPagePreview file={file} label={t('documentPreview.source')} /></TabsContent>
                {result && <TabsContent value="result"><PDFPagePreview file={result} label={t('documentPreview.result')} /></TabsContent>}
              </Tabs>
            </Card>
          </div>
        </div>
      )}
    </Card>
  );
}

export default EinkOptimizerTool;
