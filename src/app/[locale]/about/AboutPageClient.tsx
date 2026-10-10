import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Shield, Zap, Globe, Heart, Code, Users, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { type Locale } from '@/lib/i18n/config';
import { getAllTools } from '@/config/tools';

export default function AboutPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations('aboutPage');
  const brand = useTranslations('common')('brand');
  const count = getAllTools().length;
  const values = [['privacy', Shield], ['fast', Zap], ['accessible', Globe], ['free', Heart], ['openSource', Code], ['community', Users]] as const;
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale} />
      <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 space-y-10 px-4 pt-24 pb-12 sm:px-6">
        <div className="max-w-3xl space-y-3"><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('title', { brand })}</h1><p className="text-muted-foreground">{t('description', { brand, count })}</p></div>
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{t('mission.title')}</h2>
          {['p1', 'p2', 'p3'].map(key => <p key={key} className="text-muted-foreground">{t(`mission.${key}`, { brand })}</p>)}
        </section>
        <Separator />
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{t('values.title')}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{values.map(([key, Icon]) => <Card key={key}><CardHeader>
            <Icon className="size-5 text-primary" aria-hidden="true" />
            <CardTitle><h3>{t(`values.${key}.title`)}</h3></CardTitle>
            <CardDescription>{t(`values.${key}.description`)}</CardDescription>
          </CardHeader></Card>)}</div>
        </section>
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{t('technology.title')}</h2>
          <p className="text-muted-foreground">{t('technology.description', { brand })}</p>
          <ul className="list-disc space-y-2 ps-6 text-muted-foreground">{['nextjs', 'wasm', 'workers', 'pdflib', 'indexeddb'].map(key => <li key={key}>{t.rich(`technology.list.${key}`, { strong1: chunks => <strong className="text-foreground">{chunks}</strong> })}</li>)}</ul>
          <p className="text-muted-foreground">{t('technology.summary')}</p>
        </section>
        <Separator />
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">{t('cta.title')}</h2>
          <p className="text-muted-foreground">{t('cta.description', { brand, count })}</p>
          <Button asChild><Link href={`/${locale}/tools`}>{t('cta.button')}<ArrowRight aria-hidden="true" className="rtl:rotate-180" /></Link></Button>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
