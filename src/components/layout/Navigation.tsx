'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export interface NavigationProps {
  locale: Locale;
  currentPath: string;
}

const categories = [
  ['edit-annotate', 'editAnnotate'],
  ['convert-to-pdf', 'convertToPdf'],
  ['convert-from-pdf', 'convertFromPdf'],
  ['organize-manage', 'organizeManage'],
  ['optimize-repair', 'optimizeRepair'],
  ['secure-pdf', 'securePdf'],
] as const;

export function Navigation({ locale, currentPath }: NavigationProps) {
  const t = useTranslations('home.categories');
  const tCommon = useTranslations('common');
  const isActive = (href: string) => href === `/${locale}`
    ? currentPath === href || currentPath === `${href}/`
    : currentPath.startsWith(href);
  const items = ['home', 'tools', 'about', 'faq'] as const;

  return (
    <nav className="hidden items-center gap-1 xl:flex" aria-label={tCommon('navigation.mainMenu')}>
      {items.map((item) => {
        const href = item === 'home' ? `/${locale}` : `/${locale}/${item}`;
        const variant = isActive(href) ? 'secondary' : 'ghost';
        if (item === 'tools') return (
          <DropdownMenu key={item} dir={localeConfig[locale].direction}>
            <DropdownMenuTrigger asChild>
              <Button variant={variant} size="sm">
                {tCommon('navigation.tools')}<ChevronDown aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              <DropdownMenuItem asChild><Link href={href}>{tCommon('navigation.tools')}</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              {categories.map(([id, key]) => (
                <DropdownMenuItem key={id} asChild>
                  <Link href={`/${locale}/tools?category=${id}`}>{t(key)}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
        return <Button key={item} variant={variant} size="sm" asChild>
          <Link href={href} aria-current={isActive(href) ? 'page' : undefined}>{tCommon(`navigation.${item}`)}</Link>
        </Button>;
      })}
    </nav>
  );
}

export default Navigation;
