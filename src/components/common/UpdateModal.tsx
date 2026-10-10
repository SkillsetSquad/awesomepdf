'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Download, ExternalLink, CheckCircle2, AlertCircle, RefreshCw, Copy, Check, X } from 'lucide-react';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UpdateCheckResult, ReleaseAsset } from '@/types/updater';
import { ignoreVersion, GITHUB_REPO } from '@/lib/updater';
import { openExternalUrl } from '@/lib/tauri-bridge';
import { localeConfig, type Locale } from '@/lib/i18n/config';

export interface UpdateModalProps {
  onClose: () => void;
  result: UpdateCheckResult | null;
  loading: boolean;
  onRetry: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({
  onClose,
  result,
  loading,
  onRetry,
}) => {
  const t = useTranslations('common');
  const locale = useLocale() as Locale;
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<{
    status: 'opening' | 'success' | 'failed';
    text: string;
  } | null>(null);

  const getMsg = (
    key: string,
    fallback: string,
    values?: Record<string, string | number>
  ): string => {
    try {
      const fullKey = `updater.${key}`;
      const msg = t(fullKey, values);
      if (
        msg &&
        !msg.startsWith('common.') &&
        !msg.startsWith('updater.') &&
        !msg.includes(`.${key}`) &&
        msg !== fullKey &&
        msg !== key
      ) {
        return msg;
      }
    } catch {
      // fallback
    }
    if (values) {
      let res = fallback;
      for (const [k, v] of Object.entries(values)) {
        res = res.replace(`{${k}}`, String(v));
      }
      return res;
    }
    return fallback;
  };

  const formatFileSize = (bytes: number): string => {
    if (!bytes) return '';
    const mb = bytes / (1024 * 1024);
    return `(${mb.toFixed(1)} MB)`;
  };

  const getAssetLabel = (asset: ReleaseAsset): string => {
    switch (asset.platformType) {
      case 'windows-portable':
        return getMsg('downloadPortable', 'Windows 便携版 (ZIP)');
      case 'windows-installer':
        return getMsg('downloadInstaller', 'Windows 安装包 (.exe / .msi)');
      case 'macos-dmg':
        return getMsg('downloadMac', 'macOS 安装包 (.dmg)');
      case 'linux-appimage':
        return getMsg('downloadAppImage', 'Linux AppImage (便携版)');
      case 'linux-deb':
        return getMsg('downloadDeb', 'Linux Debian 安装包 (.deb)');
      default:
        return asset.name;
    }
  };

  const handleDownload = async (asset: ReleaseAsset, useMirror = false) => {
    const url = useMirror && asset.mirrorDownloadUrl ? asset.mirrorDownloadUrl : asset.browserDownloadUrl;
    setDownloadNotice({
      status: 'opening',
      text: getMsg('openingBrowser', '正在打开系统浏览器...'),
    });

    const success = await openExternalUrl(url);
    if (success) {
      setDownloadNotice({
        status: 'success',
        text: getMsg(
          'downloadStartedNotice',
          '已唤起浏览器开始下载！若未自动弹出，可点击右侧按钮复制直链并在浏览器中粘贴。'
        ),
      });
    } else {
      setDownloadNotice({
        status: 'failed',
        text: getMsg(
          'downloadFailedNotice',
          '无法自动打开浏览器，请点击复制按钮手动在浏览器中粘贴下载。'
        ),
      });
    }
  };

  const handleCopyLink = async (url: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2500);
      setDownloadNotice({
        status: 'success',
        text: getMsg('linkCopied', '下载链接已复制到剪贴板！'),
      });
    } catch {
      // fallback
    }
  };

  const handleOpenGitHub = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const url = result?.release?.htmlUrl || `https://github.com/${GITHUB_REPO}/releases`;
    openExternalUrl(url);
  };

  const handleSkipVersion = () => {
    if (result?.latestVersion) {
      ignoreVersion(result.latestVersion);
    }
    onClose();
  };

  const renderAsset = (asset: ReleaseAsset, primary = false) => (
    <div key={asset.name} className="flex min-w-0 items-start gap-2">
      <Button variant={primary ? 'default' : 'outline'} className="h-auto min-w-0 flex-1 justify-start whitespace-normal py-2 text-start" onClick={() => handleDownload(asset)}>
        <Download aria-hidden="true" />
        <span className="min-w-0 break-words">{getAssetLabel(asset)} <span className="text-xs opacity-75">{formatFileSize(asset.size)}</span></span>
      </Button>
      <Button variant="outline" size="icon" aria-label={`${getMsg('copyLink', 'Copy link')}: ${asset.name}`} onClick={() => handleCopyLink(asset.browserDownloadUrl)}>
        {copiedUrl === asset.browserDownloadUrl ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      </Button>
    </div>
  );

  return (
      <DialogContent dir={localeConfig[locale]?.direction} className="max-h-[90dvh] overflow-y-auto" showCloseButton={false}>
        <DialogHeader className="pe-8">
          <DialogTitle>{getMsg('title', 'Application update')}</DialogTitle>
          <DialogDescription>{getMsg('currentVersion', 'Current')}: {result?.currentVersion || process.env.NEXT_PUBLIC_APP_VERSION}</DialogDescription>
        </DialogHeader>
        <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-3 top-3" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
        {loading && <div role="status" className="flex items-center justify-center gap-2 py-8 text-sm text-muted-foreground"><RefreshCw className="animate-spin" aria-hidden="true" />{getMsg('checking', 'Checking for updates...')}</div>}
        {!loading && result?.error && <>
          <Alert variant="destructive"><AlertCircle aria-hidden="true" /><AlertTitle>{getMsg('errorTitle', 'Unable to check for updates')}</AlertTitle><AlertDescription className="break-words">{result.error}</AlertDescription></Alert>
          <DialogFooter><Button variant="outline" onClick={onRetry}><RefreshCw aria-hidden="true" />{getMsg('retry', 'Retry')}</Button><Button onClick={handleOpenGitHub}><ExternalLink aria-hidden="true" />{getMsg('viewOnGithub', 'View on GitHub')}</Button></DialogFooter>
        </>}
        {!loading && !result?.error && !result?.hasUpdate && <>
          <Alert><CheckCircle2 aria-hidden="true" /><AlertTitle>{getMsg('latest', 'You are up to date!')}</AlertTitle><AlertDescription>{getMsg('latestDesc', 'AwesomePDF is at the latest version ({version}).', { version: result?.currentVersion || '' })}</AlertDescription></Alert>
          <DialogFooter><Button onClick={onClose}>{getMsg('close', 'Close')}</Button></DialogFooter>
        </>}
        {!loading && !result?.error && result?.hasUpdate && <>
          <div className="flex flex-wrap items-center gap-2"><h3 className="font-medium">{getMsg('available', 'New Version Available')}</h3><Badge variant="secondary">{result.latestVersion}</Badge>
            {result.release?.publishedAt && <span className="text-xs text-muted-foreground">{getMsg('released', 'Released')}: {new Date(result.release.publishedAt).toLocaleDateString(locale)}</span>}
          </div>
          {result.release?.body && <div className="space-y-2"><h3 className="text-sm font-medium">{getMsg('releaseNotes', 'Release Notes')}</h3><div className="max-h-48 overflow-y-auto whitespace-pre-wrap break-words rounded-md border p-3 text-sm">{result.release.body}</div></div>}
          <div className="space-y-3">
            {result.matchedAssets.primary && renderAsset(result.matchedAssets.primary, true)}
            {result.matchedAssets.secondary && renderAsset(result.matchedAssets.secondary)}
            {downloadNotice && <Alert variant={downloadNotice.status === 'failed' ? 'destructive' : 'default'}>
              {downloadNotice.status === 'opening' ? <RefreshCw className="animate-spin" aria-hidden="true" /> : downloadNotice.status === 'failed' ? <AlertCircle aria-hidden="true" /> : <CheckCircle2 aria-hidden="true" />}
              <AlertDescription>{downloadNotice.text}</AlertDescription>
            </Alert>}
            {result.matchedAssets.primary?.mirrorDownloadUrl && <div className="flex flex-wrap gap-2">
              <Button variant="link" size="sm" onClick={() => handleDownload(result.matchedAssets.primary!, true)}><Download aria-hidden="true" />{getMsg('mirrorDownload', 'Download from mirror')}</Button>
              <Button variant="ghost" size="sm" onClick={() => handleCopyLink(result.matchedAssets.primary!.mirrorDownloadUrl!)}><Copy aria-hidden="true" />{getMsg('copyMirrorLink', 'Copy mirror link')}</Button>
            </div>}
            {result.matchedAssets.all.length > 0 && <Accordion type="single" collapsible><AccordionItem value="assets"><AccordionTrigger>{getMsg('allDownloads', 'All downloads')}</AccordionTrigger><AccordionContent className="space-y-2">{result.matchedAssets.all.map((asset) => renderAsset(asset))}</AccordionContent></AccordionItem></Accordion>}
          </div>
          <Button variant="link" className="h-auto justify-start px-0" onClick={handleOpenGitHub}><ExternalLink aria-hidden="true" />{getMsg('viewOnGithub', 'View on GitHub')}</Button>
          <DialogFooter className="flex-wrap"><Button variant="ghost" onClick={handleSkipVersion}>{getMsg('skipVersion', 'Skip this version')}</Button><Button variant="outline" onClick={onClose}>{getMsg('remindLater', 'Remind later')}</Button></DialogFooter>
        </>}
      </DialogContent>
  );
};
