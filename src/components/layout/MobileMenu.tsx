'use client';

import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { Menu, X, Github } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { CATEGORY_MESSAGE_KEYS } from '@/types/tool';
import { siteConfig } from '@/config/site';
import { shareSectionHref } from '@/lib/routes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';
import { LanguageSelector } from './LanguageSelector';
import type { NavGroupData, NavigationData } from './navigation-data';

export interface MobileMenuProps {
  locale: Locale;
  navigation: NavigationData;
}

const rowLink = 'h-auto min-h-11 justify-start whitespace-normal py-2 text-start';

/** Drawer navigation for screens too narrow for the desktop bar. */
export function MobileMenu({ locale, navigation }: MobileMenuProps) {
  const t = useTranslations('common.navigation');
  const tCategories = useTranslations('home.categories');
  const tCommon = useTranslations('common');
  const direction = localeConfig[locale].direction;
  const categoryName = (category: NavGroupData['category']) => tCategories(CATEGORY_MESSAGE_KEYS[category]);

  const closeLink = (href: string, label: string, extra?: React.ReactNode) => (
    <SheetClose asChild>
      <Button variant="ghost" className={rowLink} asChild>
        <Link href={href}>{label}{extra}</Link>
      </Button>
    </SheetClose>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden" aria-label={tCommon('navigation.openMenu')}>
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side={direction === 'rtl' ? 'left' : 'right'} dir={direction} showCloseButton={false}>
        <SheetHeader className="border-b pe-14">
          <SheetTitle>{tCommon('navigation.mainMenu')}</SheetTitle>
          <SheetDescription>{tCommon('brand')}</SheetDescription>
        </SheetHeader>
        <SheetClose asChild>
          <Button variant="ghost" size="icon" className="absolute end-3 top-3" aria-label={tCommon('buttons.close')}><X aria-hidden="true" /></Button>
        </SheetClose>
        <nav className="min-h-0 flex-1 overflow-y-auto px-4 pb-4" aria-label={tCommon('navigation.mainMenu')}>
          <div className="flex flex-col gap-1">
            <Accordion type="single" collapsible>
              <AccordionItem value="allTools" className="border-0">
                <AccordionTrigger className="min-h-11 items-center px-3 py-2 hover:no-underline">{t('allTools')}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-0.5 ps-3">
                  {closeLink(navigation.allToolsHref, t('browseAll', { count: navigation.totalTools }))}
                  {navigation.categories.map((category) => (
                    <SheetClose asChild key={category.category}>
                      <Button variant="ghost" className={`${rowLink} justify-between`} asChild>
                        <Link href={category.href}>
                          <span>{categoryName(category.category)}</span>
                          <span className="text-xs text-muted-foreground">{category.count}</span>
                        </Link>
                      </Button>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
              {navigation.menus.map((menu) => (
                <AccordionItem key={menu.id} value={menu.id} className="border-0">
                  <AccordionTrigger className="min-h-11 items-center px-3 py-2 hover:no-underline">{t(menu.id)}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-0.5 ps-3">
                    {menu.groups.map((group) => (
                      <div key={group.category} className="flex flex-col gap-0.5 pb-2">
                        <SheetClose asChild>
                          <Button variant="ghost" className={`${rowLink} justify-between font-semibold`} asChild>
                            <Link href={group.href}>
                              <span>{categoryName(group.category)}</span>
                              <span className="text-xs font-normal text-muted-foreground">{group.count}</span>
                            </Link>
                          </Button>
                        </SheetClose>
                        {group.tools.map((tool) => <div key={tool.id} className="ps-3">{closeLink(tool.href, tool.title)}</div>)}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {closeLink(
              shareSectionHref(locale),
              t('shareFiles'),
              <Badge variant="outline" className="px-1.5 text-xs font-medium text-primary">{t('comingSoon')}</Badge>,
            )}

            <Separator className="my-2" />
            {(['about', 'faq', 'contact', 'privacy'] as const).map((item) => (
              <div key={item}>{closeLink(`/${locale}/${item}`, tCommon(`navigation.${item}`))}</div>
            ))}
            <SheetClose asChild>
              <Button variant="ghost" className={rowLink} asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />GitHub</a>
              </Button>
            </SheetClose>

            <Separator className="my-2" />
            <div className="flex items-center justify-between gap-2 px-3">
              <span className="text-sm">{t('language')}</span>
              <LanguageSelector currentLocale={locale} />
            </div>
            <div className="flex items-center justify-between gap-2 px-3">
              <span className="text-sm">{tCommon('theme.toggle')}</span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
