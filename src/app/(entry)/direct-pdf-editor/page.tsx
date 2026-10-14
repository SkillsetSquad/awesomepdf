import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { DirectEditorClient } from '@/components/editor/DirectEditorClient';
import { getAbsoluteUrl } from '@/lib/seo/urls';

export const metadata: Metadata = {
  title: 'PDF Editor | AwsomePDF',
  description: 'Private PDF editing workspace. Open a document to edit text and images in your browser.',
  alternates: { canonical: getAbsoluteUrl('/direct-pdf-editor', true) },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
};

export default function DirectEditorPage() {
  return <Suspense><DirectEditorClient /></Suspense>;
}
