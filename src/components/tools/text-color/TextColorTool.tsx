'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Slider } from '@/components/ui/slider';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { changeTextColor } from '@/lib/pdf/processors/text-color';
import type { ProcessOutput } from '@/types/pdf';

export interface TextColorToolProps { className?: string; }

export function TextColorTool({ className = '' }: TextColorToolProps) {
  const t = useTranslations('tools.textColor');
  const tCommon = useTranslations('common.buttons');

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState('#0000ff');
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [threshold, setThreshold] = useState(128);
  const cancelledRef = useRef(false);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16) / 255, g: parseInt(result[2], 16) / 255, b: parseInt(result[3], 16) / 255 } : { r: 0, g: 0, b: 0 };
  };

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null);
    try {
      const output: ProcessOutput = await changeTextColor(file, {
        color: hexToRgb(color),
        pages: 'all',
        mode,
        threshold,
      }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) { setResult(output.result as Blob); setStatus('complete'); }
      else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, color, mode, threshold]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={(files) => { if (files.length > 0) { setFile(files[0]); setError(null); setResult(null); } }}
          onError={setError}
          disabled={isProcessing}
          label={t('uploadLabel')}
          description={t('uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {file && (
        <>
          <Card className="p-6" >
            <div className="flex items-center justify-between">
              <p className="font-medium">{file.name}</p>
              <Button variant="ghost" size="sm" onClick={() => { setFile(null); setResult(null); }} disabled={isProcessing}>
                {tCommon('remove')}
              </Button>
            </div>
          </Card>

          <Card className="p-6"  >
            <div className="space-y-4">
              <div>
                <Label className="block mb-2" htmlFor="textcolortool-field-1">{t('colorLabel')}</Label>
                <div className="flex items-center gap-4">
                  <Input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-16 h-10 cursor-pointer"
                    disabled={isProcessing} id="textcolortool-field-1" aria-label={t('colorLabel')}
                  />
                  <Input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-32"
                    disabled={isProcessing} aria-label={t('colorLabel')}
                  />
                </div>
              </div>

              <div>
                <Label className="block mb-2">{t('modeLabel') || 'Mode'}</Label>
                <RadioGroup className="flex flex-wrap gap-4" name="mode" value={mode} onValueChange={(value) => setMode(value === 'light' ? 'light' : 'dark')} aria-label={t('modeLabel')} orientation="horizontal">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="mode-dark">
                    <RadioGroupItem
                      value="dark"
                      disabled={isProcessing} id="mode-dark"
                    />
                    <span className="text-sm">{t('modeDark') || 'Dark text (light background)'}</span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="mode-light">
                    <RadioGroupItem
                      value="light"
                      disabled={isProcessing} id="mode-light"
                    />
                    <span className="text-sm">{t('modeLight') || 'Light text (dark background)'}</span>
                  </Label>
                </RadioGroup>
              </div>

              <div>
                <Label className="block mb-2" htmlFor="textcolortool-slider-1">
                  {t('thresholdLabel') || 'Threshold'}: {threshold}
                </Label>
                <Slider
                  min={0}
                  max={255}
                  value={[threshold]}
                  onValueChange={(values) => setThreshold(Number(String(values[0])))}
                  className="w-full"
                  disabled={isProcessing} id="textcolortool-slider-1" aria-label={t('thresholdLabel')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('thresholdHint') || 'Adjust to control which pixels are affected'}
                </p>
              </div>
            </div>
          </Card>
        </>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}

      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default" size="lg" onClick={handleProcess} disabled={!file || isProcessing} loading={isProcessing}>
            {isProcessing ? tCommon('process') + '...' : t('applyButton')}
          </Button>
          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', '_textcolor.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">{t('successMessage')}</p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default TextColorTool;
