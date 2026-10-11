'use client';

import { useState, type ComponentProps } from 'react';
import Link from 'next/link';

/**
 * `next/link` that prefetches its destination when the visitor shows intent
 * (pointer over it, keyboard focus or a touch) instead of whenever it scrolls
 * into view. Tool pages share a very large bundle, so prefetching a page full of
 * tool links on load would download and run it for people who never open a tool.
 */
export function IntentLink({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof Link>) {
  const [intent, setIntent] = useState(false);
  return (
    <Link
      {...props}
      prefetch={prefetch ?? (intent ? null : false)}
      onMouseEnter={(event) => { setIntent(true); onMouseEnter?.(event); }}
      onFocus={(event) => { setIntent(true); onFocus?.(event); }}
      onTouchStart={(event) => { setIntent(true); onTouchStart?.(event); }}
    />
  );
}

export default IntentLink;
