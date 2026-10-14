'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { PDFDocumentLoadingTask, RenderTask } from 'pdfjs-dist';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
import { CircleAlert, FileCheck, FileText, Info, Loader2, Stamp } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { loadPdfjs } from '@/lib/pdf/loader';
import { encryptAndSignCert, type CertCryptorOptions } from '@/lib/pdf/processors/cert-cryptor';

type WaxColor = CertCryptorOptions['waxColor'];
type Preview = { dataUrl: string; viewport: PageViewport; pageCount: number };
const initialPosition = { x: 40, y: 37.5 };
const clamp = (value: number) => Math.max(0, Math.min(100, value));

export function CertCryptorTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.certCryptor');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [waxColor, setWaxColor] = useState<WaxColor>('gold');
  const [pfxPassword, setPfxPassword] = useState('');
  const [encryptWithCert, setEncryptWithCert] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [certificate, setCertificate] = useState<Blob | null>(null);
  const [certificateFilename, setCertificateFilename] = useState('certificate.p12');
  const [encryptedResult, setEncryptedResult] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);

  useEffect(() => {
    if (!file) return;
    let active = true;
    let loadingTask: PDFDocumentLoadingTask | undefined;
    let renderTask: RenderTask | undefined;
    const destroyDocument = () => { const task = loadingTask; loadingTask = undefined; if (task) void task.destroy().catch(() => {}); };
    setIsLoadingPreview(true); setPreview(null);
    const render = async () => {
      try {
        const pdfjs = await loadPdfjs();
        const data = new Uint8Array(await file.arrayBuffer());
        if (!active) return;
        loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        if (!active) return;
        const page = await pdf.getPage(1);
        if (!active) return;
        const viewport = page.getViewport({ scale: 1 });
        const renderViewport = page.getViewport({ scale: Math.min(1, 600 / viewport.width) });
        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(renderViewport.width); canvas.height = Math.ceil(renderViewport.height);
        const canvasContext = canvas.getContext('2d');
        if (!canvasContext) throw new Error(tErrors('processingFailed'));
        renderTask = page.render({ canvasContext, viewport: renderViewport });
        await renderTask.promise;
        if (active) setPreview({ dataUrl: canvas.toDataURL('image/png'), viewport, pageCount: pdf.numPages });
      } catch (err) {
        if (active) { setPreview(null); setError(err instanceof Error ? err.message : tErrors('processingFailed')); }
      } finally {
        if (active) setIsLoadingPreview(false);
        renderTask = undefined;
        destroyDocument();
      }
    };
    void render();
    return () => { active = false; renderTask?.cancel(); destroyDocument(); };
  }, [file, tErrors]);

  const clearOutput = () => { processingRun.current++; setResult(null); setCertificate(null); setError(null); setStatus('idle'); setProgress(0); setProgressMessage(''); };
  const handleUpload = (files: File[]) => { if (files[0]) { clearOutput(); setPreview(null); setPosition(initialPosition); setFile(files[0]); } };
  const handleReset = () => { clearOutput(); setFile(null); setPreview(null); setIsLoadingPreview(false); setPosition(initialPosition); };
  const point = preview?.viewport.convertToPdfPoint(position.x / 100 * preview.viewport.width, position.y / 100 * preview.viewport.height);
  const handleProcess = async () => {
    if (!file || !preview || !point || isLoadingPreview || status === 'processing') return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setError(null); setResult(null); setCertificate(null);
    try {
      const output = await encryptAndSignCert(file, { waxColor, sealPage: 0, sealX: point[0], sealY: point[1],
        pfxPassword: certificateFile ? pfxPassword : pfxPassword || 'awsomepdf', encryptWithCert, certificateFile: certificateFile || undefined }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setStatus('complete'); setEncryptedResult(output.metadata?.encrypted === true);
        setCertificate(output.metadata?.certificate instanceof Blob ? output.metadata.certificate : null);
        setCertificateFilename(typeof output.metadata?.certificateFilename === 'string' ? output.metadata.certificateFilename : 'certificate.p12');
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) { if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); } }
  };
  const isProcessing = status === 'processing';
  const colors = [['gold', 'goldWax'], ['red', 'redWax'], ['bronze', 'bronzeWax']] as const;

  return <div className="space-y-6">
    {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} onFilesSelected={handleUpload} onError={setError}
      label={tTools('uploadLabel')} description={tTools('uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <Card className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
        <div className="min-w-0"><p className="truncate text-sm font-medium" title={file.name}>{file.name}</p>
          {preview && <p className="text-sm text-muted-foreground">{t('removeBlankPages.pagesCount', { count: preview.pageCount, size: (file.size / (1024 * 1024)).toFixed(2) })}</p>}</div>
      </div>
      <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>{t('buttons.reset')}</Button>
    </Card>}
    {isLoadingPreview && <div role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{t('status.loading')}</div>}
    {file && status !== 'complete' && <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-base font-semibold">{tTools('optionsTitle')}</h3>
        <div className="space-y-3"><Label id={`${id}-wax`}>{tTools('waxColor')}</Label>
          <RadioGroup value={waxColor} onValueChange={value => { if (value === 'gold' || value === 'red' || value === 'bronze') setWaxColor(value); }}
            aria-labelledby={`${id}-wax`} disabled={isProcessing} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {colors.map(([color, label]) => <div key={color} className="flex items-center gap-2"><RadioGroupItem id={`${id}-${color}`} value={color} />
              <Label htmlFor={`${id}-${color}`}>{t(`certCryptor.${label}`)}</Label></div>)}
          </RadioGroup>
        </div>
        {certificateFile ? <div className="flex items-center justify-between gap-3"><span className="min-w-0 truncate text-sm" title={certificateFile.name}>{certificateFile.name}</span>
          <Button variant="outline" size="sm" disabled={isProcessing} aria-label={t('certCryptor.removeCertificate')} onClick={() => { setCertificateFile(null); setPfxPassword(''); }}>{t('buttons.remove')}</Button></div>
          : <FileUploader accept={['.p12', '.pfx']} multiple={false} maxFiles={1} disabled={isProcessing} label={t('certCryptor.certificateLabel')}
            description={t('certCryptor.certificateDescription')} onError={setError} onFilesSelected={files => { if (files[0]) { setCertificateFile(files[0]); setPfxPassword(''); setError(null); } }} />}
        <div className="space-y-2"><Label htmlFor={`${id}-password`}>{t('certCryptor.decryptPasswordHelp')}</Label>
          <Input id={`${id}-password`} type="password" autoComplete="off" value={pfxPassword} placeholder={certificateFile ? undefined : t('certCryptor.passwordPlaceholder')}
            disabled={isProcessing} onChange={event => setPfxPassword(event.target.value)} aria-describedby={`${id}-password-help`} />
          <p id={`${id}-password-help`} className="text-sm text-muted-foreground">{t('certCryptor.passwordHelp')}</p>
        </div>
        <div className="flex items-start gap-3"><Checkbox id={`${id}-encryption`} checked={encryptWithCert} onCheckedChange={checked => setEncryptWithCert(checked === true)}
          disabled={isProcessing} aria-describedby={`${id}-encryption-help`} />
          <div className="space-y-1"><Label htmlFor={`${id}-encryption`}>{t('certCryptor.enableDoubleKey')}</Label>
            <p id={`${id}-encryption-help`} className="text-sm text-muted-foreground">{t('certCryptor.encryptedHelp')}</p></div>
        </div>
        {!certificateFile && <Alert role="note"><Info aria-hidden="true" /><AlertDescription>{t('certCryptor.localCertificateHelp')}</AlertDescription></Alert>}
        <Button className="w-full whitespace-normal sm:w-fit" onClick={handleProcess} disabled={isProcessing || isLoadingPreview || !preview} loading={isProcessing}><Stamp aria-hidden="true" />{tTools('processButton')}</Button>
      </Card>
      <Card className="p-6" role="region" aria-labelledby={`${id}-preview-title`}>
        <h3 id={`${id}-preview-title`} className="text-base font-semibold">{t('certCryptor.previewTitle')}</h3>
        {preview && <>
          <p id={`${id}-preview-help`} className="text-sm text-muted-foreground">{t('certCryptor.clickToReposition')}</p>
          <Button variant="ghost" className="relative block h-auto w-full overflow-hidden rounded-none p-0" disabled={isProcessing} dir="ltr"
            aria-label={t('certCryptor.previewTitle')} aria-describedby={`${id}-preview-help`} style={{ aspectRatio: preview.viewport.width / preview.viewport.height }}
            onClick={event => {
              if (event.detail === 0) return;
              const rect = event.currentTarget.getBoundingClientRect();
              if (rect.width && rect.height) setPosition({ x: clamp((event.clientX - rect.left) / rect.width * 100), y: clamp((event.clientY - rect.top) / rect.height * 100) });
            }} onKeyDown={event => {
              const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
              if (!(event.key in directions)) return;
              event.preventDefault();
              const [dx, dy] = directions[event.key as keyof typeof directions];
              setPosition(previous => ({ x: clamp(previous.x + dx), y: clamp(previous.y + dy) }));
            }}>
            <img src={preview.dataUrl} alt="" className="block h-full w-full object-contain" />
            <span className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${position.x}%`, top: `${position.y}%`, width: `${90 / preview.viewport.width * 100}%`, height: `${90 / preview.viewport.height * 100}%` }}>
              <SealPreview color={waxColor} rotation={preview.viewport.rotation} />
            </span>
          </Button>
          <div className="grid grid-cols-2 gap-4">{(['x', 'y'] as const).map(axis => <div key={axis} className="space-y-2">
            <Label id={`${id}-${axis}`}>{t(axis === 'x' ? 'certCryptor.positionX' : 'certCryptor.positionY')}<span className="ms-auto tabular-nums">{position[axis]}%</span></Label>
            <Slider aria-labelledby={`${id}-${axis}`} min={0} max={100} step={0.5} value={[position[axis]]} disabled={isProcessing} dir="ltr"
              onValueChange={([value]) => setPosition(previous => ({ ...previous, [axis]: value }))} />
          </div>)}</div>
          {point && <p aria-live="polite" className="text-sm tabular-nums text-muted-foreground">{t('certCryptor.sealCoordinates', { x: point[0].toFixed(1), y: point[1].toFixed(1) })}</p>}
        </>}
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setStatus('idle'); setProgress(0); setProgressMessage(''); }} />}
    {status === 'complete' && result && <Card className="p-6">
      <div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><p className="text-sm">{tTools('successMessage')}</p></div>
      {encryptedResult && <Alert role="note"><Info aria-hidden="true" /><AlertDescription>{t('certCryptor.encryptedHelp')}</AlertDescription></Alert>}
      <div className="flex flex-wrap gap-3"><DownloadButton file={result} filename={file?.name.replace(/\.pdf$/i, '_signed.pdf') || 'signed.pdf'} showFileSize />
        {certificate && <DownloadButton variant="outline" file={certificate} filename={certificateFilename} label={t('certCryptor.certificateDownload')} showFileSize />}</div>
    </Card>}
  </div>;
}

/** This SVG previews document content drawn by the processor, rather than application UI decoration. */
function SealPreview({ color, rotation }: { color: WaxColor; rotation: number }) {
  const [base, shadow, highlight] = color === 'gold' ? ['#d9a626', '#8c660d', '#ffd966'] : color === 'red' ? ['#b31a1a', '#660505', '#e64d4d'] : ['#996633', '#593314', '#cc9966'];
  return <svg aria-hidden="true" viewBox="-45 -45 90 90" className="h-full w-full" style={{ transform: `rotate(${rotation}deg)` }}>
    {Array.from({ length: 8 }, (_, index) => {
      const angle = index * 2 * Math.PI / 8, radius = 35 * (1 + Math.sin(index * 3.5) * 0.08);
      const x = Math.cos(angle) * 35 * 0.15, y = -Math.sin(angle) * 35 * 0.15;
      return <g key={index}><circle cx={x} cy={y} r={radius} fill={base} /><circle cx={x - 1.5} cy={y - 1.5} r={radius - 1.5} fill={highlight} /><circle cx={x + 1} cy={y + 1} r={radius - 2.5} fill={shadow} /></g>;
    })}
    <circle r={35 * 0.75} fill={base} /><circle cx={1.5} cy={1.5} r={35 * 0.73} fill={shadow} /><circle cx={-1} cy={-1} r={35 * 0.71} fill={highlight} /><circle r={35 * 0.68} fill={base} />
    <rect x={-6.125} y={-4.9} width={12.25} height={11.025} stroke={highlight} strokeWidth={1.5} fill="none" />
    <path d="M 0 -6.125 V 6.125 M -6.125 0 H 6.125" stroke={highlight} />
    <rect x={-5.125} y={-3.9} width={12.25} height={11.025} stroke={shadow} fill="none" />
  </svg>;
}

export default CertCryptorTool;
