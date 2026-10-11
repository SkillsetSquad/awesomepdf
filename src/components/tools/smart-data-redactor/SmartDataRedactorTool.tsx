'use client';


import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

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
import { redactSmartData } from '@/lib/pdf/processors/smart-data-redactor';
import type { ProcessOutput } from '@/types/pdf';
import { ShieldCheck, EyeOff, HelpCircle } from 'lucide-react';

export interface SmartDataRedactorToolProps {
  className?: string;
}

export function SmartDataRedactorTool({ className = '' }: SmartDataRedactorToolProps) {
  const t = useTranslations('common');
  const tRedaction = useTranslations('tools.trueRedaction');
  const [file, setFile] = useState<File | null>(null);
  const [emailRedact, setEmailRedact] = useState(true);
  const [phoneRedact, setPhoneRedact] = useState(true);
  const [idRedact, setIdRedact] = useState(false);
  const [customKeywords, setCustomKeywords] = useState('');

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

  const handleRedact = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    const patterns: ('email' | 'phone' | 'idcard' | 'custom')[] = [];
    if (emailRedact) patterns.push('email');
    if (phoneRedact) patterns.push('phone');
    if (idRedact) patterns.push('idcard');

    const keywords = customKeywords
      .split(',')
      .map(k => k.trim())
      .filter(k => k.length > 0);

    if (keywords.length > 0) {
      patterns.push('custom');
    }

    try {
      const output: ProcessOutput = await redactSmartData(
        [file],
        {
          patterns,
          customKeywords: keywords,
          redactColor: { r: 0, g: 0, b: 0 },
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Masking privacy records...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (`${file.name.replace(/\.pdf$/i, '')}_redacted.pdf`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to apply automatic redaction.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error applying redactor.');
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
          label={t('smartDataRedactor.uploadLabel')}
          description={t('smartDataRedactor.uploadDescription')}
        /></div>
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          {error}
        </AlertDescription></Alert>
      )}

      {file && (
        <p className="text-sm text-muted-foreground" role="note">{tRedaction('description')} {tRedaction('cleanup')}</p>
      )}
      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 min-w-0 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('smartDataRedactor.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('smartDataRedactor.optionsTitle')}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <Checkbox

                      id="email"
                      checked={emailRedact}
                      onCheckedChange={(checked) => { resetOutput(); setEmailRedact((checked === true)); }}
                       aria-label={t('smartDataRedactor.emailRedactLabel')} disabled={status === 'processing'}
                    />
                    <Label htmlFor="email" className="">
                      {t('smartDataRedactor.emailRedactLabel')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Checkbox

                      id="phone"
                      checked={phoneRedact}
                      onCheckedChange={(checked) => { resetOutput(); setPhoneRedact((checked === true)); }}
                       aria-label={t('smartDataRedactor.phoneRedactLabel')} disabled={status === 'processing'}
                    />
                    <Label htmlFor="phone" className="">
                      {t('smartDataRedactor.phoneRedactLabel')}
                    </Label>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Checkbox

                      id="idcard"
                      checked={idRedact}
                      onCheckedChange={(checked) => { resetOutput(); setIdRedact((checked === true)); }}
                       aria-label={t('smartDataRedactor.idRedactLabel')} disabled={status === 'processing'}
                    />
                    <Label htmlFor="idcard" className="">
                      {t('smartDataRedactor.idRedactLabel')}
                    </Label>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1">
                      {t('smartDataRedactor.customKeywordsLabel')}
                      <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                    </Label>
                    <Input
                      type="text"
                      value={customKeywords}
                      onChange={(e) => { resetOutput(); setCustomKeywords(e.target.value); }}
                      placeholder={t('smartDataRedactor.customKeywordsPlaceholder')}
                      className="w-full" disabled={status === 'processing'}
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
                    onClick={handleRedact}
                    disabled={status === 'processing'}
                  >
                    {t('smartDataRedactor.processButton')}
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

export default SmartDataRedactorTool;
