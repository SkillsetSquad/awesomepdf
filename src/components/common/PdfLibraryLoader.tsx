/**
 * PdfLibraryLoader Component
 * Requirements: 8.2 - Lazy loading for PDF libraries
 * 
 * A wrapper component that handles lazy loading of PDF libraries
 * and shows a loading state while libraries are being loaded.
 */

'use client';

import React from 'react';
import { usePdfLibrary, type LibraryType } from '@/lib/hooks/usePdfLibrary';
import { Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export interface PdfLibraryLoaderProps {
  /** Which library to load */
  library: LibraryType;
  /** Content to render when library is loaded */
  children: React.ReactNode;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Custom error component */
  errorComponent?: (error: Error, retry: () => void) => React.ReactNode;
  /** Loading message */
  loadingMessage?: string;
}

/**
 * Default loading component
 */
const DefaultLoading: React.FC<{ message?: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center p-8 gap-4" role="status">
    <Loader2 className="size-6 animate-spin" aria-hidden="true" />
    <p className="text-sm text-muted-foreground">
      {message || 'Loading PDF tools...'}
    </p>
  </div>
);

/**
 * Default error component
 */
const DefaultError: React.FC<{ error: Error; retry: () => void }> = ({ error, retry }) => (
  <Alert variant="destructive">
    <AlertCircle aria-hidden="true" />
    <AlertTitle>Failed to load PDF tools</AlertTitle>
    <AlertDescription className="space-y-3">
      <p>{error.message}</p>
      <Button variant="outline" onClick={retry}>Try Again</Button>
    </AlertDescription>
  </Alert>
);

/**
 * PdfLibraryLoader wraps tool components and handles library loading
 * 
 * @example
 * ```tsx
 * <PdfLibraryLoader library="pdf-lib">
 *   <MergePDFTool />
 * </PdfLibraryLoader>
 * ```
 */
export const PdfLibraryLoader: React.FC<PdfLibraryLoaderProps> = ({
  library,
  children,
  loadingComponent,
  errorComponent,
  loadingMessage,
}) => {
  const { isLoaded, isLoading, error, load } = usePdfLibrary({
    library,
    loadOnMount: true,
  });

  if (isLoading) {
    return loadingComponent || <DefaultLoading message={loadingMessage} />;
  }

  if (error) {
    return errorComponent ? (
      errorComponent(error, load)
    ) : (
      <DefaultError error={error} retry={load} />
    );
  }

  if (!isLoaded) {
    return loadingComponent || <DefaultLoading message={loadingMessage} />;
  }

  return <>{children}</>;
};

export default PdfLibraryLoader;
