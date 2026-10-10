import { Suspense } from 'react';
import type { Metadata } from 'next';
import { DirectEditorClient } from '@/components/editor/DirectEditorClient';

export const metadata: Metadata = {
  title: 'PDF Editor | AwesomePDF',
  robots: { index: false, follow: false },
};

export default function DirectEditorPage() {
  return <Suspense><DirectEditorClient /></Suspense>;
}
