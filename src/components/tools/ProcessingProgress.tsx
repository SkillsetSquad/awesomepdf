'use client';

import React from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export type ProcessingStatus = 'idle' | 'uploading' | 'processing' | 'complete' | 'error';

export interface ProcessingProgressProps {
  /** Current progress (0-100) */
  progress: number;
  /** Current processing status */
  status: ProcessingStatus;
  /** Current step message */
  message?: string;
  /** Estimated time remaining in seconds */
  estimatedTime?: number;
  /** Custom class name */
  className?: string;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Show estimated time */
  showEstimatedTime?: boolean;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
}

/** Shared progress, status and cancellation controls for local PDF processing. */
export const ProcessingProgress: React.FC<ProcessingProgressProps> = ({
  progress, status, message, estimatedTime, className = '',
  showPercentage = true, showEstimatedTime = true, onCancel,
}) => {
  const t = useTranslations('common');
  const clampedProgress = Number.isFinite(progress) ? Math.max(0, Math.min(100, progress)) : 0;
  const active = status === 'uploading' || status === 'processing';
  const statusText = t(`status.${status}`);
  let formattedTime: string | null = null;
  if (estimatedTime && estimatedTime > 0 && Number.isFinite(estimatedTime)) {
    const seconds = Math.ceil(estimatedTime);
    if (seconds < 60) formattedTime = t('processingTime.seconds', { seconds });
    else if (seconds < 3600) formattedTime = t('processingTime.minutes', { minutes: Math.floor(seconds / 60), seconds: seconds % 60 });
    else formattedTime = t('processingTime.hours', { hours: Math.floor(seconds / 3600), minutes: Math.floor((seconds % 3600) / 60) });
  }
  if (status === 'idle') return null;
  const Icon = active ? Loader2 : status === 'complete' ? CheckCircle2 : AlertCircle;
  return (
    <div className={`w-full space-y-3 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div role="status" aria-live="polite" aria-atomic="true" className="min-w-0 space-y-1">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Icon aria-hidden="true" className={`size-4 shrink-0 ${active ? 'animate-spin' : status === 'error' ? 'text-destructive' : 'text-primary'}`} />
            <span>{statusText}</span>
          </div>
          {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </div>
        {showPercentage && <span className="text-sm tabular-nums text-muted-foreground">{Math.round(clampedProgress)}%</span>}
      </div>
      <Progress value={clampedProgress} aria-label={`${statusText}: ${clampedProgress}%`} className={status === 'error' ? '[&>[data-slot=progress-indicator]]:bg-destructive' : undefined} />
      {(onCancel && active || showEstimatedTime && formattedTime && active) && <div className="flex flex-wrap items-center justify-between gap-3">
        {showEstimatedTime && formattedTime && active && <span className="text-xs text-muted-foreground">{formattedTime}</span>}
        {onCancel && active && <Button variant="outline" size="sm" onClick={onCancel}>{t('buttons.cancel')}</Button>}
      </div>}
    </div>
  );
};

export default ProcessingProgress;
