import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Mail, MessageSquare, Github, ExternalLink } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';

export default function ContactPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations('contactPage');
  const common = useTranslations('common');
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale} />
      <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-4 pt-24 pb-12 sm:px-6">
        <div className="space-y-3"><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('hero.title')}</h1><p className="text-muted-foreground">{t('hero.description')}</p></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card><CardHeader><Github className="size-5 text-primary" aria-hidden="true" /><CardTitle><h2>{t('methods.github.title')}</h2></CardTitle><CardDescription>{t('methods.github.description')}</CardDescription></CardHeader><CardFooter className="mt-auto"><Button asChild><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">{t('methods.github.action')}<ExternalLink aria-hidden="true" /></a></Button></CardFooter></Card>
          {siteConfig.contactEmail && <Card><CardHeader><Mail className="size-5 text-primary" aria-hidden="true" /><CardTitle><h2>{t('methods.email.title')}</h2></CardTitle><CardDescription>{t('hero.description')}</CardDescription></CardHeader><CardFooter className="mt-auto"><Button variant="outline" asChild className="max-w-full"><a href={`mailto:${siteConfig.contactEmail}`} className="whitespace-normal break-all">{siteConfig.contactEmail}</a></Button></CardFooter></Card>}
          <Card><CardHeader><MessageSquare className="size-5 text-primary" aria-hidden="true" /><CardTitle><h2>{t('faq.title')}</h2></CardTitle><CardDescription>{t('faq.description', { brand: common('brand') })}</CardDescription></CardHeader><CardFooter className="mt-auto"><Button variant="outline" asChild><Link href={`/${locale}/faq`}>{t('faq.button')}</Link></Button></CardFooter></Card>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
