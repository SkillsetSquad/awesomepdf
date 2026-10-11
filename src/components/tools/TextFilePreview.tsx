'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Alert, AlertDescription } from '@/components/ui/alert';

/** Show the produced Markdown/JSON as text, without interpreting document HTML. */
export function TextFilePreview({ file, label }: { file: Blob; label: string }) {
  const tErrors = useTranslations('errors');
  const [content, setContent] = useState<{ file: Blob; text: string } | null>(null);
  const [failed, setFailed] = useState<Blob | null>(null);
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => setContent({ file, text: String(reader.result ?? '') });
    reader.onerror = () => setFailed(file);
    reader.readAsText(file);
    return () => { reader.onload = null; reader.onerror = null; reader.abort(); };
  }, [file]);
  return failed === file
    ? <Alert variant="destructive"><AlertDescription>{tErrors('processingFailed')}</AlertDescription></Alert>
    : <pre aria-label={label} className="max-h-[600px] overflow-auto whitespace-pre-wrap break-words rounded-md border bg-muted p-4 text-sm">{content?.file === file ? content.text : ''}</pre>;
}
