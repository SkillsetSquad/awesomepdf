'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Download, AlertCircle } from 'lucide-react';
import { fetchAssembledBlob } from '@/lib/utils/asset-loader';
import { withBasePath } from '@/lib/utils/path';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function SourceCodeDownload({ archiveId }: { archiveId: string }) {
  const t = useTranslations('common');
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  const download = async () => {
    setBusy(true);
    setFailed(false);
    setProgress(0);
    try {
      // Version the URL so persistent WASM-asset caching cannot return an older source archive.
      const blob = await fetchAssembledBlob(`${withBasePath('/source-code.zip')}?v=${encodeURIComponent(archiveId)}`, ({ loadedBytes, totalBytes }) => {
        setProgress(totalBytes > 0 ? Math.min(100, loadedBytes / totalBytes * 100) : 0);
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'awsomepdf-source.zip';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  return <div className="space-y-3">
    <Button onClick={download} loading={busy}><Download aria-hidden="true" />{t('footer.sourceCode')} (ZIP)</Button>
    {busy && <div role="status" className="space-y-2 text-sm text-muted-foreground">
      <p>{t('status.loading')} {Math.round(progress)}%</p>
      <Progress value={progress} aria-label={t('footer.sourceCode')} />
    </div>}
    {failed && <Alert variant="destructive"><AlertCircle aria-hidden="true" /><AlertDescription>{t('footer.downloadError')}</AlertDescription></Alert>}
  </div>;
}
