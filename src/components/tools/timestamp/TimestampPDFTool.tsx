'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Clock as UIClock, FileText as UIFileText, Layers as UILayers, Lock as UILock } from 'lucide-react';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PDFPagePreview } from '../PDFPagePreview';
import { timestampPDF } from '@/lib/pdf/processors/timestamp';
import type { ProcessOutput } from '@/types/pdf';

export interface TimestampPDFToolProps {
  className?: string;
}

interface AuditLog {
  tsaAuthority: string;
  hash: string;
  timestamp: string;
  serial: string;
}

const TSA_SERVERS = [
  { id: 'MeSign', name: 'MeSign TSA', speedKey: 'fast' },
  { id: 'DigiCert', name: 'DigiCert TSA', speedKey: 'blazing' },
  { id: 'Sectigo', name: 'Sectigo TSA', speedKey: 'blazing' },
  { id: 'SSL.com', name: 'SSL.com TSA', speedKey: 'stable' },
  { id: 'FreeTSA', name: 'FreeTSA.org', speedKey: 'medium' },
];

export function TimestampPDFTool({ className = '' }: TimestampPDFToolProps) {
  const t = useTranslations('common');

  // File State
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Settings
  const [selectedTSA, setSelectedTSA] = useState<string>('MeSign');

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [auditLog, setAuditLog] = useState<AuditLog | null>(null);

  // Cancellation ref
  const cancelledRef = useRef(false);
  const operationRef = useRef(0);
  useEffect(() => () => { operationRef.current += 1; }, []);

  /**
   * Load PDF metadata on selection
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    const operation = ++operationRef.current;
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setResult(null);
    setAuditLog(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      if (operation !== operationRef.current) return;
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      if (operation !== operationRef.current) return;
      console.error(err);
      setError('Failed to parse PDF metadata. The file may be corrupt.');
    } finally {
      if (operation === operationRef.current) setIsLoadingMetadata(false);
    }
  }, []);

  const handleClearFile = () => {
    operationRef.current += 1;
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setAuditLog(null);
    setStatus('idle');
    setIsLoadingMetadata(false);
  };

  /**
   * Trigger timestamp signing processor
   */
  const handleTimestampProcess = async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    const operation = ++operationRef.current;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setAuditLog(null);

    try {
      const output: ProcessOutput = await timestampPDF(
        [file],
        { tsaServer: selectedTSA },
        (prog, message) => {
          if (!cancelledRef.current && operation === operationRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Preparing local timestamp...');
          }
        }
      );

      if (cancelledRef.current || operation !== operationRef.current) return;

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
        
        // Save audit logs metadata returned from cryptographic signer
        if (output.metadata) {
          setAuditLog({
            tsaAuthority: output.metadata.tsaAuthority as string,
            hash: output.metadata.hash as string,
            timestamp: output.metadata.timestamp as string,
            serial: output.metadata.serial as string,
          });
        }
      } else {
        setError(output.error?.message || 'Failed to apply local timestamp.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current && operation === operationRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
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
      
      {/* File Upload Zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('timestamp.localUploadLabel')}
          description={t('timestamp.localUploadDescription')}
        />
      )}

      {/* Error Block */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-semibold">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File Metadata Overview */}
      {file && (
        <Card  className="p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <UIFileText className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground truncate max-w-[280px]" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {totalPages > 0 ? t('accessibility.pageOf', { current: 1, total: totalPages }) : t('status.loading')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFile}
            disabled={isProcessing}
          >
            {t('buttons.remove')}
          </Button>
        </Card>
      )}

      {file && <Alert><UIClock aria-hidden="true" /><AlertDescription>{t('timestamp.localNotice')}</AlertDescription></Alert>}

      {/* Timestamp settings and document preview */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: TSA Authority Selection Hub */}
          <div className="lg:col-span-6 flex flex-col">
            <Card  className="flex-1 p-6 gap-6 border flex flex-col justify-between">
              <div className="space-y-4">
                <div className="border-b border-border pb-3">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <UILayers className="w-5 h-5 text-primary" aria-hidden="true" />
                    {t('timestamp.selectedAuthority')}
                  </h3>
                </div>

                <div role="group" aria-label={t('timestamp.selectedAuthority')} className="space-y-2">
                  {TSA_SERVERS.map((tsa) => (
                    <Button key={tsa.id} variant={selectedTSA === tsa.id ? 'default' : 'outline'}
                      className="w-full justify-start" aria-pressed={selectedTSA === tsa.id}
                      disabled={isProcessing} onClick={() => setSelectedTSA(tsa.id)}>{tsa.name}</Button>
                  ))}
                </div>
              </div>

              {/* Timestamp action button */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleTimestampProcess}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <UILock className="w-5 h-5" aria-hidden="true" />
                  {t('timestamp.localProcessButton')}
                </Button>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-6 min-w-0 p-4 space-y-4">
            <Tabs defaultValue="source">
              <TabsList>
                <TabsTrigger value="source">{t('documentPreview.source')}</TabsTrigger>
                <TabsTrigger value="result" disabled={!result}>{t('documentPreview.result')}</TabsTrigger>
              </TabsList>
              <TabsContent value="source"><PDFPagePreview file={file} label={t('documentPreview.source')} /></TabsContent>
              {result && <TabsContent value="result"><PDFPagePreview file={result} label={t('documentPreview.result')} /></TabsContent>}
            </Tabs>
            {auditLog && <div className="space-y-4 border-t pt-4">
              <h3 className="font-semibold">{t('timestamp.localCertificateTitle')}</h3>
              <dl className="space-y-3 text-sm">
                <div><dt className="text-muted-foreground">{t('timestamp.deviceTime')}</dt><dd>{new Date(auditLog.timestamp).toLocaleString()}</dd></div>
                <div><dt className="text-muted-foreground">{t('timestamp.tsaHash')}</dt><dd className="break-all font-mono text-xs" dir="ltr">{auditLog.hash}</dd></div>
                <div><dt className="text-muted-foreground">{t('timestamp.selectedAuthority')}</dt><dd className="break-words">{auditLog.tsaAuthority}</dd></div>
                <div><dt className="text-muted-foreground">{t('timestamp.tsaSerial')}</dt><dd className="break-all font-mono">{auditLog.serial}</dd></div>
              </dl>
              {result && <DownloadButton file={result} filename={file.name.replace(/\.pdf$/i, '_timestamped.pdf')} showFileSize />}
            </div>}
          </Card>

        </div>
      )}

      {/* Processing Progress */}
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

export default TimestampPDFTool;
