'use client';

import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isValidLocale(params.locale) ? params.locale : 'en';
  return (
    <main id="main-content" lang="en" dir="ltr" className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader><FileQuestion className="size-6 text-muted-foreground" aria-hidden="true" /><CardTitle><h1>Page not found</h1></CardTitle><CardDescription>The page you&apos;re looking for doesn&apos;t exist or has been moved.</CardDescription></CardHeader>
        <CardFooter className="flex flex-wrap gap-3"><Button asChild><Link href={`/${locale}`}><Home aria-hidden="true" />Go home</Link></Button><Button variant="outline" onClick={() => window.history.back()}><ArrowLeft aria-hidden="true" />Go back</Button></CardFooter>
      </Card>
    </main>
  );
}
