'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export function EditorNotifications({ direction = 'ltr' }: { direction?: 'ltr' | 'rtl' }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const syncTheme = () => setDark(document.documentElement.classList.contains('dark'));
    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const notify = (event: Event) => {
      const message = (event as CustomEvent<{ message?: string }>).detail?.message;
      if (typeof message === 'string' && message) toast(message, { id: 'direct-editor-notice', duration: 2200 });
    };
    window.addEventListener('AWSOMEPDF_EDITOR_NOTICE', notify);
    return () => {
      observer.disconnect();
      window.removeEventListener('AWSOMEPDF_EDITOR_NOTICE', notify);
      toast.dismiss('direct-editor-notice');
    };
  }, []);
  return <Toaster theme={dark ? 'dark' : 'light'} dir={direction} />;
}
