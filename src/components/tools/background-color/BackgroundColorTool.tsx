'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { addBackgroundColor } from '@/lib/pdf/processors/background-color';
import type { ProcessOutput } from '@/types/pdf';

export interface BackgroundColorToolProps { className?: string; }

export function BackgroundColorTool({ className = '' }: BackgroundColorToolProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState('#fffde7');
  const cancelledRef = useRef(false);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16) / 255, g: parseInt(result[2], 16) / 255, b: parseInt(result[3], 16) / 255 } : { r: 1, g: 1, b: 0.9 };
  };

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null);
    try {
      const output: ProcessOutput = await addBackgroundColor(file, { color: hexToRgb(color), pages: 'all' }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) { setResult(output.result as Blob); setStatus('complete'); }
      else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, color]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} onFilesSelected={(files) => { if (files.length > 0) { setFile(files[0]); setError(null); setResult(null); } }} onError={setError} disabled={isProcessing} label="Upload PDF File" description="Drag and drop a PDF file here." />}
      {error && <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription><p className="text-sm">{error}</p></AlertDescription></Alert>}
      {file && (
        <>
          <Card className="p-6" ><div className="flex items-center justify-between"><p className="font-medium">{file.name}</p><Button variant="ghost" size="sm" onClick={() => { setFile(null); setResult(null); }} disabled={isProcessing}>Remove</Button></div></Card>
          <Card className="p-6"  >
            <Label className="block mb-2" htmlFor="backgroundcolortool-field-1">Background Color</Label>
            <div className="flex items-center gap-4">
              <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-16 h-10 cursor-pointer" disabled={isProcessing} id="backgroundcolortool-field-1" aria-label={"Background Color"} />
              <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} className="w-32" disabled={isProcessing} aria-label={"Background Color"} />
            </div>
          </Card>
        </>
      )}
      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}
      {file && <div className="flex flex-wrap items-center gap-4"><Button variant="default" size="lg" onClick={handleProcess} disabled={!file || isProcessing} loading={isProcessing}>{isProcessing ? 'Processing...' : 'Add Background'}</Button>{result && <DownloadButton file={result} filename={file.name.replace('.pdf', '_background.pdf')} variant="secondary" size="lg" showFileSize />}</div>}
      {status === 'complete' && result && <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription><p className="text-sm font-medium">Background color added!</p></AlertDescription></Alert>}
    </div>
  );
}

export default BackgroundColorTool;
