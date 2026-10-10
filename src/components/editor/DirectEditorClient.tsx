'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { DirectEditorControls } from './DirectEditorControls';
import { isValidLocale } from '@/lib/i18n/config';
import { withBasePath } from '@/lib/utils/path';
import english from '../../../messages/en.json';

export function DirectEditorClient() {
  const params = useSearchParams();
  const language = params.get('lang') || 'en';
  const locale = isValidLocale(language) ? language : 'en';
  const [labels, setLabels] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const catalog = await import(`../../../messages/${locale}.json`).catch(() => ({ default: english }));
      if (active) {
        const { common, tools } = catalog.default as typeof english;
        setLabels({
          tipBackToUpload: common.buttons.back,
          close: common.buttons.close,
          export: common.buttons.download,
          tipExportS: common.buttons.download,
          tipUndoZ: common.editPdf.undo,
          tipRedoZ: common.editPdf.redo,
          tipPreviousPage: common.buttons.previous,
          tipNextPage: common.buttons.next,
          tipDelete: common.buttons.delete,
          tipDuplicate: common.buttons.duplicate,
          color: tools.watermark.color,
          tipFontSize: tools.watermark.fontSize,
          tipCustomTextColor: tools.watermark.color,
          tipCustomTextOutlineColor: tools.watermark.color,
          dirAuto: common.options.auto,
          emptyState: tools.editPdf.uploadDescription,
          choosePdf: tools.editPdf.uploadLabel,
        });
      }
    };
    void load();
    return () => { active = false; };
  }, [locale]);

  return <>
    <link rel="stylesheet" href={withBasePath('/direct-pdf-editor/styles.css')} />
    {labels ? <DirectEditorControls labels={labels} locale={locale} /> : <div role="status" className="flex h-screen items-center justify-center gap-2"><Loader2 aria-hidden="true" className="size-5 animate-spin" />{english.common.status.loading}</div>}
  </>;
}
