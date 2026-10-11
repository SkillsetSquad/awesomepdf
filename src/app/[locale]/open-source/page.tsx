import { PageSeo } from '@/components/seo/PageSeo';
import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Github, Download } from 'lucide-react';
import { locales, type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import { withBasePath } from '@/lib/utils/path';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SourceCodeDownload } from '@/components/common/SourceCodeDownload';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common.footer' });
  return generateBaseMetadata({ locale: locale as Locale, path: '/open-source', title: t('openSource'), description: t('sourceDescription') });
}

export default async function OpenSourcePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('common.footer');
  const [license, manifestText] = await Promise.all([
    readFile(path.join(process.cwd(), 'LICENSE'), 'utf8'),
    readFile(path.join(process.cwd(), 'public/source-manifest.json'), 'utf8'),
  ]);
  const manifest: { generatedAt: string } = JSON.parse(manifestText);

  return <div className="flex min-h-screen flex-col">
    <PageSeo locale={locale as Locale} path="/open-source" title={t('openSource')} description={t('sourceDescription')} />
    <Header locale={locale as Locale} />
    <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-4 pb-12 pt-24">
      <div className="space-y-2"><h1 className="text-3xl font-semibold tracking-tight">{t('openSource')}</h1><p className="text-muted-foreground" lang="en">A brand of Skillset Squad Private Limited.</p></div>
      <Card id="source-code" className="scroll-mt-24">
        <CardHeader><CardTitle><h2>{t('sourceCode')}</h2></CardTitle><CardDescription>{t('sourceDescription')}</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          <SourceCodeDownload archiveId={manifest.generatedAt} />
          <Button variant="outline" asChild><a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />GitHub</a></Button>
          <p className="text-sm text-muted-foreground">{t('basedOn')} <a href={siteConfig.links.upstream} target="_blank" rel="noopener noreferrer" className="rounded-sm underline underline-offset-4">PDFCraft</a></p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle><h2>{t('license')}</h2></CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" asChild><a href={withBasePath('/LICENSE.txt')} download><Download aria-hidden="true" />{t('license')}</a></Button>
          <ScrollArea className="h-96 rounded-md border" tabIndex={0} aria-label={t('license')}><pre lang="en" dir="ltr" className="whitespace-pre-wrap break-words p-4 text-xs">{license}</pre></ScrollArea>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle><h2>{t('openSource')}</h2></CardTitle></CardHeader>
        <CardContent><Button variant="outline" asChild><a href={withBasePath('/THIRD_PARTY_NOTICES.txt')} download><Download aria-hidden="true" />{t('openSource')}</a></Button></CardContent>
      </Card>
    </main>
    <Footer locale={locale as Locale} />
  </div>;
}
