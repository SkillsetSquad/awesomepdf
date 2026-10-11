import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/i18n/config';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HOME_FAQ_KEYS } from './faq-items';

export function FaqSection({ locale, toolCount }: { locale: Locale; toolCount: number }) {
  const t = useTranslations('home.faq');

  return (
    <section aria-labelledby="faq-title" className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="space-y-2 text-center">
          <h2 id="faq-title" className="text-2xl font-semibold tracking-tight md:text-3xl">{t('title')}</h2>
          <p className="text-muted-foreground">{t('description')}</p>
        </div>
        <Accordion type="single" collapsible className="mt-8 rounded-xl border bg-card px-5">
          {HOME_FAQ_KEYS.map((key) => (
            // Answers stay in the markup (hidden while closed) so they remain readable without scripts and match the structured data.
            <AccordionItem key={key} value={key} className="[&>[data-slot=accordion-content][data-state=closed]]:hidden">
              <AccordionTrigger className="items-center text-base">{t(`items.${key}.question`)}</AccordionTrigger>
              <AccordionContent forceMount className="text-base text-muted-foreground">
                {t(`items.${key}.answer`, { count: toolCount })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-center text-sm">
          <Link href={`/${locale}/faq`} className="rounded-sm font-medium text-primary underline underline-offset-4 hover:no-underline">{t('seeAll')}</Link>
        </p>
      </div>
    </section>
  );
}

export default FaqSection;
