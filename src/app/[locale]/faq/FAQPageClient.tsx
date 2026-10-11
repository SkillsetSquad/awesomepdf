'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { type Locale } from '@/lib/i18n/config';
import { FAQ_CATEGORY_ITEMS as categoryItems, getFaqValues } from '@/config/faq';

export default function FAQPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations('faqPage');
  const common = useTranslations('common');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const values = getFaqValues();
  const faqs = Object.entries(categoryItems).flatMap(([category, keys]) => keys.map(key => ({
    id: `${category}-${key}`, category, categoryLabel: t(`categories.${category}`),
    question: t(`sections.${category}.${key}.question`, values), answer: t(`sections.${category}.${key}.answer`, values),
  })));
  const query = searchQuery.trim().toLocaleLowerCase(locale);
  const filteredFaqs = faqs.filter(faq => (selectedCategory === 'all' || faq.category === selectedCategory) && (!query || `${faq.question} ${faq.answer}`.toLocaleLowerCase(locale).includes(query)));
  return (
    <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 space-y-8 px-4 pt-24 pb-12 sm:px-6">
      <div className="space-y-3"><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('title')}</h1><p className="text-muted-foreground">{t('subtitle', { brand: common('brand') })}</p></div>
      <Card><CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="faq-search">{t('searchPlaceholder')}</Label><div className="relative"><Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><Input id="faq-search" type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder={t('searchPlaceholder')} className="ps-9" /></div></div>
        <div className="space-y-2 [&>[data-slot=native-select-wrapper]]:w-full"><Label htmlFor="faq-category">{common('navigation.faq')}</Label><NativeSelect id="faq-category" value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}>{['all', ...Object.keys(categoryItems)].map(key => <NativeSelectOption key={key} value={key}>{t(`categories.${key}`)}</NativeSelectOption>)}</NativeSelect></div>
      </CardContent></Card>
      <div className="flex flex-wrap gap-2"><Button variant="outline" size="sm" onClick={() => setExpandedItems(filteredFaqs.map(faq => faq.id))}>{t('expandAll')}</Button><Button variant="ghost" size="sm" onClick={() => setExpandedItems([])}>{t('collapseAll')}</Button></div>
      {filteredFaqs.length ? <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems}>
        {filteredFaqs.map(faq => <AccordionItem key={faq.id} value={faq.id} className="[&>[data-slot=accordion-content][data-state=closed]]:hidden">
          <AccordionTrigger><span className="space-y-1 text-start"><span className="block text-xs text-muted-foreground">{faq.categoryLabel}</span><span className="block">{faq.question}</span></span></AccordionTrigger>
          <AccordionContent forceMount className="text-muted-foreground">{faq.answer}</AccordionContent>
        </AccordionItem>)}
      </Accordion> : <Card><CardContent role="status" className="text-center text-muted-foreground">{t('noResults')}</CardContent></Card>}
      <Separator />
      <section className="space-y-4"><h2 className="text-2xl font-semibold tracking-tight">{t('cta.title')}</h2><p className="text-muted-foreground">{t('cta.description')}</p><Button asChild><Link href={`/${locale}/contact`}>{t('cta.button')}<ArrowRight aria-hidden="true" className="rtl:rotate-180" /></Link></Button></section>
    </main>
  );
}
