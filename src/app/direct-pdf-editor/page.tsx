import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { DirectEditorClient } from '@/components/editor/DirectEditorClient';

export const metadata: Metadata = {
  title: 'PDF Editor | AwesomePDF',
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
