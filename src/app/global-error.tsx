'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { withBasePath } from '@/lib/utils/path';
import './globals.css';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <main className="flex min-h-screen items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader><AlertTriangle className="size-6 text-destructive" aria-hidden="true" /><CardTitle><h1>Something went wrong</h1></CardTitle><CardDescription>A critical error occurred. Please try again.</CardDescription></CardHeader>
            {error.digest && <CardContent><p className="break-all font-mono text-xs text-muted-foreground">Error ID: {error.digest}</p></CardContent>}
            <CardFooter className="flex flex-wrap gap-3"><Button onClick={reset}><RefreshCw aria-hidden="true" />Try again</Button><Button variant="outline" asChild><a href={withBasePath('/')}><Home aria-hidden="true" />Go home</a></Button></CardFooter>
          </Card>
        </main>
      </body>
    </html>
  );
}
