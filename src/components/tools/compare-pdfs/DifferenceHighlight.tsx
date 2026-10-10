'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export interface DifferenceHighlightData {
  type: 'added' | 'deleted' | 'modified' | 'moved';
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const colors = { added: '16, 185, 129', deleted: '239, 68, 68', modified: '245, 158, 11', moved: '168, 85, 247' };

export function DifferenceHighlight({ highlight, label }: { highlight: DifferenceHighlightData; label: string }) {
  const color = colors[highlight.type];
  return <Tooltip>
    <TooltipTrigger asChild>
      <Button type="button" variant="ghost" aria-label={label} className="pointer-events-auto absolute h-auto w-auto rounded-sm p-0"
        style={{ left: highlight.x, top: highlight.y, width: highlight.w, height: highlight.h,
          background: `rgba(${color}, 0.18)`, border: `1px ${highlight.type === 'moved' ? 'dashed' : 'solid'} rgba(${color}, ${highlight.type === 'moved' ? '0.6' : '0.4'})`,
          boxShadow: `0 0 4px rgba(${color}, 0.15)` }} />
    </TooltipTrigger>
    <TooltipContent className="max-w-sm break-words">
      <p className="font-medium">{label}</p><p>{highlight.text}</p>
    </TooltipContent>
  </Tooltip>;
}
