import { cn } from '@/lib/utils';

/** The AwsomePDF "P" mark, drawn with the theme's primary colour (same shape as favicon.svg). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={cn('size-8 shrink-0', className)}>
      <rect width="32" height="32" rx="7" className="fill-primary" />
      <path d="M8 8h10a4 4 0 010 8H8V8z" className="fill-primary-foreground" />
      <path d="M8 16h6v8H8v-8z" className="fill-primary-foreground" />
    </svg>
  );
}

export default BrandMark;
