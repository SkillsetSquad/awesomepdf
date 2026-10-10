'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { UpdateCheckResult } from '@/types/updater';

export interface UpdateNotificationToastProps {
  isOpen: boolean;
  result: UpdateCheckResult | null;
  onOpenModal: () => void;
  onSnooze: () => void;
  onIgnore: () => void;
  onClose: () => void;
}

export function UpdateNotificationToast({ isOpen, result, onOpenModal, onSnooze, onIgnore, onClose }: UpdateNotificationToastProps) {
  const t = useTranslations('common.updater');
  useEffect(() => {
    const id = 'application-update';
    if (!isOpen || !result?.hasUpdate) return;
    toast(`${t('available')}: ${result.latestVersion}`, {
      id,
      duration: Infinity,
      closeButton: true,
      description: <div className="space-y-2"><p>{t('toastPrompt')}</p><Button variant="link" size="sm" className="h-auto px-0" onClick={() => { onIgnore(); toast.dismiss(id); }}>{t('skipVersion')}</Button></div>,
      action: { label: t('viewDetails'), onClick: onOpenModal },
      cancel: { label: t('remindLater'), onClick: onSnooze },
      onDismiss: onClose,
    });
    return () => { toast.dismiss(id); };
  }, [isOpen, result, t, onOpenModal, onSnooze, onIgnore, onClose]);
  return null;
}
