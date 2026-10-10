import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateBaseMetadata } from '@/lib/seo';
import WorkflowPageClient from './WorkflowPageClient';
import Link from 'next/link';
import { Home, Wrench, HelpCircle, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils/path';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

interface WorkflowPageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: WorkflowPageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
    const t = await getTranslations({ locale: validLocale, namespace: 'common' });

    return generateBaseMetadata({
        locale: validLocale,
        path: '/workflow',
        title: t('navigation.workflow') || 'Workflow',
        description: t('tagline') || 'Professional, secure, and free PDF tools for everyone.',
    });
}

export default async function WorkflowPage({ params }: WorkflowPageProps) {
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    const [t, tWorkflow] = await Promise.all([
        getTranslations({ locale, namespace: 'common' }),
        getTranslations({ locale, namespace: 'workflow' }),
    ]);
    const navigation = [
        { key: 'home', path: '', icon: Home }, { key: 'tools', path: '/tools', icon: Wrench },
        { key: 'about', path: '/about', icon: Info }, { key: 'faq', path: '/faq', icon: HelpCircle },
    ] as const;
    return <div className="flex h-dvh min-h-0 flex-col bg-background">
        <header className="flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2">
            <Link href={`/${locale}/`} className="flex shrink-0 items-center gap-2 text-sm font-semibold" aria-label={t('brand')}>
                <FileText className="size-5 text-primary" aria-hidden="true" />{t('brand')}
            </Link>
            <h1 className="sr-only md:not-sr-only md:truncate md:text-sm md:font-medium">{tWorkflow('title')}</h1>
            <nav className="flex shrink-0 items-center gap-1" aria-label={tWorkflow('title')}>
                {navigation.map(({ key, path, icon: Icon }) => <Button key={key} asChild variant="ghost" size="icon-sm">
                    <Link href={`/${locale}${path}/`} aria-label={t(`navigation.${key}`)} title={t(`navigation.${key}`)}><Icon aria-hidden="true" /></Link>
                </Button>)}
                <ThemeToggle />
            </nav>
        </header>
        <main id="main-content" className="min-h-0 flex-1 overflow-hidden" tabIndex={-1}><WorkflowPageClient /></main>
        <footer className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t px-3 py-2 text-xs text-muted-foreground">
            <span lang="en">A brand of Skillset Squad Private Limited.</span>
            <nav className="flex flex-wrap gap-3" aria-label={t('footer.openSource')}>
                <Link href={`/${locale}/open-source#source-code`} className="hover:underline">{t('footer.sourceCode')}</Link>
                <a href={withBasePath('/LICENSE.txt')} className="hover:underline">{t('footer.license')}</a>
                <Link href={`/${locale}/open-source`} className="hover:underline">{t('footer.openSource')}</Link>
                <span>{t('footer.basedOn')} <a href={siteConfig.links.upstream} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">PDFCraft</a></span>
            </nav>
        </footer>
    </div>;
}
