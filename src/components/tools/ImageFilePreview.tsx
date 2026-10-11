'use client';

import { useEffect, useState } from 'react';

/** An actual local source/result image, with its URL released on replacement. */
export function ImageFilePreview({ file, label }: { file: Blob; label: string }) {
  const [image, setImage] = useState<{ file: Blob; url: string } | null>(null);
  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImage({ file, url });
    return () => URL.revokeObjectURL(url);
  }, [file]);
  return <div className="flex min-h-48 items-center justify-center overflow-hidden rounded-md border bg-muted p-4">
    {image?.file === file && <img src={image.url} alt={label} className="max-h-[600px] max-w-full object-contain" />}
  </div>;
}
