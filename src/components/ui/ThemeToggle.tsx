'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations('common');
  return <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" aria-label={t('theme.toggle')} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
    <Sun className="size-4 dark:hidden" aria-hidden="true" /><Moon className="hidden size-4 dark:block" aria-hidden="true" />
  </Button></TooltipTrigger><TooltipContent>{t('theme.toggle')}</TooltipContent></Tooltip>;
}
