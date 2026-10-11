'use client';

import type { ReactNode } from 'react';
import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { CATEGORY_MESSAGE_KEYS } from '@/types/tool';
import { shareSectionHref } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import type { NavGroupData, NavigationData } from './navigation-data';

export interface NavigationProps {
  locale: Locale;
  navigation: NavigationData;
}

const itemLink = 'flex w-full min-w-0 items-center gap-2';

function NavDropdown({ label, direction, className, children }: {
  label: string;
  direction: 'ltr' | 'rtl';
  className?: string;
  children: ReactNode;
}) {
  return (
    <DropdownMenu dir={direction}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 px-2.5 data-[state=open]:bg-accent">
          {label}<ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className={cn('p-1.5', className)}>{children}</DropdownMenuContent>
    </DropdownMenu>
  );
}

function CategoryLink({ group, name }: { group: Pick<NavGroupData, 'href' | 'count'>; name: string }) {
  return (
    <DropdownMenuItem asChild className="font-semibold">
      <Link href={group.href} className={itemLink}>
        <span className="min-w-0 flex-1">{name}</span>
        <span className="text-xs font-normal text-muted-foreground">{group.count}</span>
      </Link>
    </DropdownMenuItem>
  );
}

/** Desktop navigation: All Tools, Edit, Convert, Organize and the Share Files preview. */
export function Navigation({ locale, navigation }: NavigationProps) {
  const t = useTranslations('common.navigation');
  const tCategories = useTranslations('home.categories');
  const tCommon = useTranslations('common');
  const direction = localeConfig[locale].direction;
  const categoryName = (category: NavGroupData['category']) => tCategories(CATEGORY_MESSAGE_KEYS[category]);

  return (
    <nav className="hidden items-center justify-center gap-0.5 xl:flex" aria-label={tCommon('navigation.mainMenu')}>
      <NavDropdown label={t('allTools')} direction={direction} className="w-72 max-w-[calc(100vw-2rem)]">
        <DropdownMenuItem asChild className="font-semibold">
          <Link href={navigation.allToolsHref} className={itemLink}>{t('browseAll', { count: navigation.totalTools })}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {navigation.categories.map((category) => (
          <DropdownMenuItem key={category.category} asChild>
            <Link href={category.href} className={itemLink}>
              <span className="min-w-0 flex-1">{categoryName(category.category)}</span>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </NavDropdown>

      {navigation.menus.map((menu) => {
        const twoColumns = menu.groups.length === 2;
        return (
          <NavDropdown
            key={menu.id}
            label={t(menu.id)}
            direction={direction}
            className={twoColumns ? 'w-[34rem] max-w-[calc(100vw-2rem)]' : 'w-72 max-w-[calc(100vw-2rem)]'}
          >
            <div className={cn(twoColumns && 'grid grid-cols-2 gap-x-2')}>
              {menu.groups.map((group, index) => (
                <DropdownMenuGroup key={group.category}>
                  {index > 0 && !twoColumns && <DropdownMenuSeparator />}
                  <CategoryLink group={group} name={categoryName(group.category)} />
                  {group.tools.map((tool) => (
                    <DropdownMenuItem key={tool.id} asChild>
                      <Link href={tool.href} className={itemLink}>{tool.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              ))}
            </div>
          </NavDropdown>
        );
      })}

      <Button variant="ghost" size="sm" className="gap-2 px-2.5 text-muted-foreground" asChild>
        <Link href={shareSectionHref(locale)}>
          {t('shareFiles')}
          <Badge variant="outline" className="px-1.5 text-xs font-medium text-primary">{t('comingSoon')}</Badge>
        </Link>
      </Button>
    </nav>
  );
}

export default Navigation;
