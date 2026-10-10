'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpCircle } from 'lucide-react';
import {
  checkUpdate,
  isVersionIgnored,
  shouldCheckUpdate,
  isUpdateSnoozedInSession,
  snoozeUpdateInSession,
  ignoreVersion,
} from '@/lib/updater';
import { isTauri } from '@/lib/tauri-bridge';
import { UpdateCheckResult } from '@/types/updater';
import { UpdateModal } from './UpdateModal';
import { UpdateNotificationToast } from './UpdateNotificationToast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export interface UpdateCheckButtonProps {
  className?: string;
}

export const UpdateCheckButton: React.FC<UpdateCheckButtonProps> = ({ className = '' }) => {
  const t = useTranslations('common');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UpdateCheckResult | null>(null);
  const [hasNotification, setHasNotification] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const getMsg = (key: string, fallback: string): string => {
    try {
      const fullKey = `updater.${key}`;
      const msg = t(fullKey);
      if (
        msg &&
        !msg.startsWith('common.') &&
        !msg.startsWith('updater.') &&
        !msg.includes(`.${key}`) &&
        msg !== fullKey &&
        msg !== key
      ) {
        return msg;
      }
    } catch {
      // fallback
    }
    return fallback;
  };

  const checkBtnLabel = getMsg('checkBtn', '检查更新');

  // Background auto-check on mount
  useEffect(() => {
    let isMounted = true;

    const performBackgroundCheck = async () => {
      const desktop = isTauri();
      // In Tauri desktop, always verify update status on startup without 24h block;
      // In browser, check if auto-check interval has elapsed.
      if (shouldCheckUpdate() || desktop) {
        try {
          const res = await checkUpdate({ force: desktop, isDesktop: desktop });
          if (isMounted && res.hasUpdate && !isVersionIgnored(res.latestVersion)) {
            setResult(res);
            setHasNotification(true);
            if (!isUpdateSnoozedInSession(res.latestVersion)) {
              setShowToast(true);
            }
          }
        } catch {
          // Silent failure in background
        }
      }
    };

    // Small delay on initial startup to avoid contending with page hydration
    const timer = setTimeout(() => {
      performBackgroundCheck();
    }, 2500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleManualCheck = useCallback(async () => {
    setShowToast(false);
    setIsOpen(true);
    setLoading(true);
    try {
      const res = await checkUpdate({ force: true });
      setResult(res);
      if (res.hasUpdate && !isVersionIgnored(res.latestVersion)) {
        setHasNotification(true);
      } else {
        setHasNotification(false);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModalFromToast = () => {
    setShowToast(false);
    setIsOpen(true);
  };

  const handleSnoozeToast = () => {
    if (result?.latestVersion) {
      snoozeUpdateInSession(result.latestVersion);
    }
    setShowToast(false);
  };

  const handleIgnoreToast = () => {
    if (result?.latestVersion) {
      ignoreVersion(result.latestVersion);
    }
    setShowToast(false);
    setHasNotification(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild><Button variant={hasNotification ? 'secondary' : 'ghost'} size="icon" loading={loading} onClick={handleManualCheck} className={className} aria-label={hasNotification ? `${getMsg('available', 'New Version Available')}: ${result?.latestVersion}` : checkBtnLabel}>
            <ArrowUpCircle aria-hidden="true" />
          </Button></DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>{hasNotification ? `${getMsg('available', 'New Version Available')}: ${result?.latestVersion}` : checkBtnLabel}</TooltipContent>
      </Tooltip>

      {/* Floating proactive toast card */}
      <UpdateNotificationToast
        isOpen={showToast}
        result={result}
        onOpenModal={handleOpenModalFromToast}
        onSnooze={handleSnoozeToast}
        onIgnore={handleIgnoreToast}
        onClose={() => setShowToast(false)}
      />

      {/* Full update modal dialog */}
      <UpdateModal
        onClose={handleCloseModal}
        result={result}
        loading={loading}
        onRetry={handleManualCheck}
      />
    </Dialog>
  );
};
