'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { logger } from '@/lib/utils/logger';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    logger.error('Page error:', error);
  }, [error]);

  const t = useTranslations('errors');
  const locale = useLocale();
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader><AlertTriangle className="size-6 text-destructive" aria-hidden="true" /><CardTitle><h1>{t('pageError')}</h1></CardTitle><CardDescription>{t('pageErrorDescription')}</CardDescription></CardHeader>
        {error.digest && <CardContent><p className="break-all font-mono text-xs text-muted-foreground">{error.digest}</p></CardContent>}
        <CardFooter className="flex flex-wrap gap-3"><Button onClick={reset}><RefreshCw aria-hidden="true" />{t('tryAgain')}</Button><Button variant="outline" asChild><Link href={`/${locale}`}><Home aria-hidden="true" />{t('goHome')}</Link></Button></CardFooter>
      </Card>
    </main>
  );
}
