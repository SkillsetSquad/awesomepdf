'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Menu, X, Github } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { UpdateCheckButton } from '@/components/common/UpdateCheckButton';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet';

export interface MobileMenuProps {
  locale: Locale;
}

const categories = [
  ['edit-annotate', 'editAnnotate'],
  ['convert-to-pdf', 'convertToPdf'],
  ['convert-from-pdf', 'convertFromPdf'],
  ['organize-manage', 'organizeManage'],
  ['optimize-repair', 'optimizeRepair'],
  ['secure-pdf', 'securePdf'],
] as const;

export function MobileMenu({ locale }: MobileMenuProps) {
  const t = useTranslations('home.categories');
  const tCommon = useTranslations('common');
  const direction = localeConfig[locale].direction;

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
            <SheetClose asChild><Button variant="ghost" className="justify-start" asChild><Link href={`/${locale}`}>{tCommon('navigation.home')}</Link></Button></SheetClose>
            <Accordion type="single" collapsible>
              <AccordionItem value="tools" className="border-0">
                <AccordionTrigger className="px-3 py-2 hover:no-underline">{tCommon('navigation.tools')}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-1 ps-3">
                  <SheetClose asChild><Button variant="ghost" className="justify-start" asChild><Link href={`/${locale}/tools`}>{tCommon('navigation.tools')}</Link></Button></SheetClose>
                  {categories.map(([id, key]) => <SheetClose asChild key={id}>
                    <Button variant="ghost" className="h-auto justify-start whitespace-normal py-2 text-start" asChild>
                      <Link href={`/${locale}/tools?category=${id}`}>{t(key)}</Link>
                    </Button>
                  </SheetClose>)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {(['workflow', 'about', 'faq', 'privacy', 'contact'] as const).map((item) => (
              <SheetClose asChild key={item}><Button variant="ghost" className="justify-start" asChild>
                <Link href={`/${locale}/${item}`}>{tCommon(`navigation.${item}`)}</Link>
              </Button></SheetClose>
            ))}
            <div className="flex items-center justify-between border-t py-2">
              <span className="px-3 text-sm">{tCommon('theme.toggle')}</span><ThemeToggle />
            </div>
            <div className="px-3 py-2 sm:hidden"><UpdateCheckButton /></div>
            <SheetClose asChild><Button variant="ghost" className="justify-start" asChild>
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />GitHub</a>
            </Button></SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
