'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, FileArchive, Files, Trash2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUploader } from '../FileUploader';
import { PDFPagePreview } from '../PDFPagePreview';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { compressPDF, type CompressionQuality, type CompressionAlgorithm } from '@/lib/pdf/processors/compress';
import { useBatchProcessing } from '@/lib/hooks/useBatchProcessing';
import { formatFileSize } from '@/lib/storage/recent-files';

export interface CompressPDFToolProps { className?: string }
const titleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const outputName = (name: string) => `${name.replace(/\.[^/.]+$/, '')}_compressed.pdf`;

export function CompressPDFTool({ className = '' }: CompressPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.compressPdf');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [algorithm, setAlgorithm] = useState<CompressionAlgorithm>('condense');
  const [quality, setQuality] = useState<CompressionQuality>('medium');
  const [removeMetadata, setRemoveMetadata] = useState(false);
  const [optimizeImages, setOptimizeImages] = useState(true);
  const [photonDpi, setPhotonDpi] = useState(150);
  const [error, setError] = useState<string | null>(null);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [previewTab, setPreviewTab] = useState('source');
  const [isSavingZip, setIsSavingZip] = useState(false);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const fileButtons = useRef(new Map<string, HTMLButtonElement>());
  const focusTarget = useRef<string | null>(null);
  const { files, isProcessing, overallProgress, completedCount, addFiles, removeFile, clearFiles, resetFiles, startProcessing, cancelProcessing, downloadAsZip } = useBatchProcessing({ maxConcurrent: 2 });
  const busy = isProcessing || isSavingZip;
  const selected = files.find(file => file.id === selectedFileId) || files[0];
  const hasPendingFiles = files.some(file => file.status === 'pending' || file.status === 'error');
  useEffect(() => {
    if (focusTarget.current) { const target = focusTarget.current; focusTarget.current = null; if (target === 'upload') uploadRegion.current?.focus(); else fileButtons.current.get(target)?.focus(); }
  }, [files]);
  const changeOptions = () => { resetFiles(); setPreviewTab('source'); setError(null); };
  const handleCompress = async () => {
    if (!files.length || busy || !hasPendingFiles) return;
    setError(null);
    try {
      await startProcessing(async (file, onProgress) => {
        const output = await compressPDF(file, { algorithm, quality, removeMetadata, optimizeImages, removeUnusedObjects: true, photonDpi, photonFormat: 'jpeg', photonQuality: quality === 'low' ? 60 : quality === 'medium' ? 75 : 85 }, value => onProgress(value));
        if (output.success && output.result) return output.result as Blob;
        throw new Error(output.error?.details || output.error?.message || tErrors('processingFailed'));
      });
    } catch (err) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); }
  };
  const saveZip = async () => {
    if (!completedCount || busy) return;
    setIsSavingZip(true); setError(null);
    try { await downloadAsZip('compressed-pdfs.zip'); } catch (err) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); } finally { setIsSavingZip(false); }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!files.length && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple maxFiles={10} disabled={busy}
      onFilesSelected={selectedFiles => { if (selectedFiles.length) { addFiles(selectedFiles); setSelectedFileId(null); setPreviewTab('source'); setError(null); } }} onError={setError} label={tTools('uploadLabel')} description={tTools('batchUploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {files.length > 0 && <>
      <Card role="region" aria-labelledby={`${id}-files-title`}>
        <CardHeader><h3 id={`${id}-files-title`} className="font-semibold">{tTools('filesTitle')}</h3><CardDescription>{t('compress.waitingFiles', { count: files.length })}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={busy} onClick={() => { focusTarget.current = 'upload'; clearFiles(); setSelectedFileId(null); setPreviewTab('source'); setError(null); }}>{t('buttons.clearAll')}</Button></CardAction>
        </CardHeader><CardContent><ul className="space-y-3">{files.map((file, index) => <li key={file.id} className="space-y-3 rounded-md border p-3">
          <div className="flex items-start gap-3"><Files aria-hidden="true" className="mt-2 size-4 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1 space-y-1"><Button ref={button => { if (button) fileButtons.current.set(file.id, button); else fileButtons.current.delete(file.id); }} variant="ghost" className="h-auto max-w-full justify-start whitespace-normal px-2 py-1 text-start" aria-pressed={selected?.id === file.id} onClick={() => { setSelectedFileId(file.id); setPreviewTab('source'); }}><span className="break-words">{file.file.name}</span></Button>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><span>{tTools('originalSize')} {formatFileSize(file.file.size)}</span><Badge variant={file.status === 'error' ? 'destructive' : 'secondary'}>{t(`batchProcessing.${file.status}`)}</Badge></div>
            </div>
            <Button variant="ghost" size="icon-sm" disabled={busy} aria-label={`${t('buttons.remove')}: ${file.file.name}`} onClick={() => { const next = files[index + 1] || files[index - 1]; focusTarget.current = next?.id || 'upload'; if (selected?.id === file.id) { setSelectedFileId(next?.id || null); setPreviewTab('source'); } removeFile(file.id); }}><Trash2 aria-hidden="true" /></Button>
          </div>
          {file.status === 'processing' && <p className="text-xs tabular-nums text-muted-foreground">{Math.round(file.progress)}%</p>}
          {file.status === 'error' && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{file.error || tErrors('processingFailed')}</AlertDescription></Alert>}
          {file.status === 'completed' && file.result && <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted-foreground">{tTools('compressedSize')} {formatFileSize(file.result.size)}</p><DownloadButton file={file.result} filename={outputName(file.file.name)} aria-label={`${t('buttons.download')}: ${outputName(file.file.name)}`} variant="outline" size="sm" /></div>}
        </li>)}</ul></CardContent>
        {completedCount > 0 && <CardFooter><Button variant="outline" disabled={busy} onClick={saveZip}><FileArchive aria-hidden="true" />{t('compress.zipDownload', { count: completedCount })}</Button></CardFooter>}
      </Card>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <Card role="region" aria-labelledby={`${id}-settings-title`}>
          <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{tTools('optionsTitle')}</h3></CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2"><Label htmlFor={`${id}-algorithm`}>{tTools('algorithmLabel')}</Label><NativeSelect id={`${id}-algorithm`} value={algorithm} disabled={busy} className="w-full" aria-describedby={`${id}-algorithm-help`} onChange={event => { changeOptions(); setAlgorithm(event.target.value as CompressionAlgorithm); }}>
              {(['standard', 'condense', 'photon'] as const).map(value => <NativeSelectOption key={value} value={value}>{tTools(`algorithm${titleCase(value)}`)}</NativeSelectOption>)}
            </NativeSelect><p id={`${id}-algorithm-help`} className="text-sm text-muted-foreground">{tTools(`algorithm${titleCase(algorithm)}Desc`)}</p></div>
            {algorithm === 'photon' && <div className="space-y-2"><p className="text-sm text-muted-foreground">{tTools('photonWarning')}</p><Label htmlFor={`${id}-dpi`}>{tTools('photonDpiLabel')}</Label><NativeSelect id={`${id}-dpi`} value={photonDpi} disabled={busy} className="w-full" onChange={event => { changeOptions(); setPhotonDpi(Number(event.target.value)); }}>
              {[72, 150, 300, 600].map(dpi => <NativeSelectOption key={dpi} value={dpi}>{dpi} DPI</NativeSelectOption>)}
            </NativeSelect><p className="text-sm text-muted-foreground">{tTools('photonDpiDesc')}</p></div>}
            <div className="space-y-2"><Label htmlFor={`${id}-quality`}>{tTools('qualityLabel')}</Label><NativeSelect id={`${id}-quality`} value={quality} disabled={busy} className="w-full" onChange={event => { changeOptions(); setQuality(event.target.value as CompressionQuality); }}>
              {(['low', 'medium', 'high', 'maximum'] as const).map(value => <NativeSelectOption key={value} value={value}>{tTools(`quality${titleCase(value)}`)}</NativeSelectOption>)}
            </NativeSelect></div>
            <div className="flex items-start gap-3"><Checkbox id={`${id}-images`} checked={optimizeImages} disabled={busy} onCheckedChange={value => { changeOptions(); setOptimizeImages(value === true); }} /><Label htmlFor={`${id}-images`}>{tTools('optimizeImages')}</Label></div>
            <div className="flex items-start gap-3"><Checkbox id={`${id}-metadata`} checked={removeMetadata} disabled={busy} onCheckedChange={value => { changeOptions(); setRemoveMetadata(value === true); }} /><Label htmlFor={`${id}-metadata`}>{tTools('removeMetadata')}</Label></div>
          </CardContent><CardFooter><Button onClick={handleCompress} disabled={busy || !hasPendingFiles}><FileArchive aria-hidden="true" />{tTools('compressButton')}</Button></CardFooter>
        </Card>
        {selected && <Card className="min-w-0" role="region" aria-labelledby={`${id}-preview-title`}>
          <CardHeader><h3 id={`${id}-preview-title`} className="font-semibold">{t('compress.previewTitle')}</h3><CardDescription className="break-words">{selected.file.name}</CardDescription><CardDescription>{t('compress.previewHelp')}</CardDescription></CardHeader>
          <CardContent><Tabs value={previewTab} onValueChange={setPreviewTab}>
            <TabsList aria-label={t('compress.previewTitle')} className="max-w-full"><TabsTrigger value="source">{t('compress.sourcePreview')}</TabsTrigger><TabsTrigger value="result" disabled={!selected.result}>{t('compress.resultPreview')}</TabsTrigger></TabsList>
            <TabsContent value="source"><PDFPagePreview file={selected.file} label={t('compress.sourcePreview')} /></TabsContent>
            <TabsContent value="result">{selected.result && <PDFPagePreview file={selected.result} label={t('compress.resultPreview')} />}</TabsContent>
          </Tabs></CardContent>
        </Card>}
      </div>
    </>}
    {isProcessing && <ProcessingProgress progress={overallProgress} status="processing" message={t('compress.processingButton')} onCancel={cancelProcessing} />}
  </div>;
}
export default CompressPDFTool;
