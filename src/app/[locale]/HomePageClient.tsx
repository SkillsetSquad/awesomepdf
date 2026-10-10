import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Zap, Wrench, Lock, Edit, FileInput, FileOutput, FolderOpen, Settings, ShieldCheck, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getAllTools, getToolsByCategory, getPopularTools } from '@/config/tools';
import { type Locale, locales } from '@/lib/i18n/config';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';

interface HomePageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

// Static home content stays on the server; favorites and navigation own their client behavior.
export default function HomePageClient({ locale, localizedToolContent }: HomePageClientProps) {
  const t = useTranslations();
  const allTools = getAllTools();
  const features = [
    { icon: ShieldCheck, key: 'privacy' },
    { icon: Zap, key: 'free' },
    { icon: Wrench, key: 'powerful' },
  ] as const;
  const categoryIcons = { 'edit-annotate': Edit, 'convert-to-pdf': FileInput, 'convert-from-pdf': FileOutput, 'organize-manage': FolderOpen, 'optimize-repair': Settings, 'secure-pdf': ShieldCheck };
  const categoryKeys: Record<ToolCategory, string> = { 'edit-annotate': 'editAnnotate', 'convert-to-pdf': 'convertToPdf', 'convert-from-pdf': 'convertFromPdf', 'organize-manage': 'organizeManage', 'optimize-repair': 'optimizeRepair', 'secure-pdf': 'securePdf' };
  const stats = [
    { value: `${allTools.length}+`, label: 'pdfTools' },
    { value: '100%', label: 'freeToUse' },
    { value: locales.length, label: 'languages' },
    { value: 0, label: 'filesUploaded' },
  ];

  return <div className="flex min-h-screen flex-col">
    <Header locale={locale} />
    <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-7xl flex-1 space-y-12 px-4 pb-12 pt-24">
      <section aria-labelledby="hero-title" className="mx-auto max-w-3xl space-y-5 py-6 text-center sm:py-10">
        <Badge variant="secondary">{t('home.hero.highlight')}</Badge>
        <h1 id="hero-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('home.hero.title')}</h1>
        <p className="text-muted-foreground sm:text-lg">{t('home.hero.subtitle')}</p>
        <Button size="lg" asChild><Link href={`/${locale}/tools`}>{t('home.hero.cta')}<ArrowRight className="rtl:rotate-180" aria-hidden="true" /></Link></Button>
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground"><Lock className="size-4 shrink-0" aria-hidden="true" />{t('common.footer.privacyBadge')}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3" aria-label={t('home.features.powerful.title')}>
        {features.map(({ icon: Icon, key }) => <Card key={key}>
          <CardHeader><Icon className="mb-2 size-5 text-primary" aria-hidden="true" /><CardTitle><h2>{t(`home.features.${key}.title`)}</h2></CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">{t(`home.features.${key}.description`)}</CardContent>
        </Card>)}
      </section>
      <section aria-labelledby="popular-tools-heading" className="space-y-6">
        <div className="space-y-2"><Badge variant="secondary"><Star className="size-3" aria-hidden="true" />{t('home.popularTools.badge')}</Badge><h2 id="popular-tools-heading" className="text-2xl font-semibold tracking-tight">{t('home.popularTools.title')}</h2><p className="text-muted-foreground">{t('home.popularTools.description')}</p></div>
        <ToolGrid tools={getPopularTools()} locale={locale} localizedToolContent={localizedToolContent} />
      </section>
      <section aria-labelledby="featured-tools-heading" className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2"><h2 id="featured-tools-heading" className="text-2xl font-semibold tracking-tight">{t('home.categories.organizeManage')}</h2><p className="text-muted-foreground">{t('home.categoriesDescription.organizeManage')}</p></div>
          <Button variant="outline" asChild><Link href={`/${locale}/tools`}>{t('common.navigation.tools')}<ArrowRight className="rtl:rotate-180" aria-hidden="true" /></Link></Button>
        </div>
        <ToolGrid tools={getToolsByCategory('organize-manage').slice(0, 8)} locale={locale} localizedToolContent={localizedToolContent} />
      </section>
      <section aria-labelledby="categories-heading" className="space-y-6">
        <div className="space-y-2"><h2 id="categories-heading" className="text-2xl font-semibold tracking-tight">{t('home.categoriesSection.title')}</h2><p className="text-muted-foreground">{t('home.categoriesSection.description', { count: allTools.length })}</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category];
            const key = categoryKeys[category];
            return <Link key={category} href={`/${locale}/tools?category=${category}`} className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Card className="h-full"><CardHeader><Icon className="mb-2 size-5 text-primary" aria-hidden="true" /><CardTitle><h3>{t(`home.categories.${key}`)}</h3></CardTitle><CardDescription>{t(`home.categoriesDescription.${key}`)}</CardDescription></CardHeader><CardContent><Badge variant="secondary">{t('home.categoriesSection.toolsCount', { count: getToolsByCategory(category).length })}</Badge></CardContent></Card>
            </Link>;
          })}
        </div>
      </section>
      <Separator />
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map(({ value, label }) => <div key={label} className="space-y-1"><dt className="text-sm text-muted-foreground">{t(`home.stats.${label}`)}</dt><dd className="text-2xl font-semibold">{value}</dd></div>)}
      </dl>
    </main>
    <Footer locale={locale} />
  </div>;
}
