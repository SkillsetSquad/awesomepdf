'use client';

import { ArrowLeft, FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function PageNotFound({ locale = 'en' }: { locale?: string }) {
  return (
    <main id="main-content" lang="en" dir="ltr" className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <FileQuestion className="size-6 text-muted-foreground" aria-hidden="true" />
          <CardTitle><h1>Page not found</h1></CardTitle>
          <CardDescription>The page you&apos;re looking for doesn&apos;t exist or has been moved.</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-3">
          <Button asChild><Link href={`/${locale}/`}><Home aria-hidden="true" />Go home</Link></Button>
          <Button variant="outline" onClick={() => window.history.back()}><ArrowLeft aria-hidden="true" />Go back</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
