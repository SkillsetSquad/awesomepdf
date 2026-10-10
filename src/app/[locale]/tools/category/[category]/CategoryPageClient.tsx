import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { getToolsByCategory } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';
import { type ToolCategory } from '@/types/tool';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface CategoryPageClientProps {
    locale: Locale;
    category: ToolCategory;
    localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function CategoryPageClient({ locale, category, localizedToolContent }: CategoryPageClientProps) {
    const t = useTranslations();
    const tools = getToolsByCategory(category);

    // Map categories to translation keys (matching ToolsPage structure)
    const categoryTranslationKeys: Record<ToolCategory, string> = {
        'edit-annotate': 'editAnnotate',
        'convert-to-pdf': 'convertToPdf',
        'convert-from-pdf': 'convertFromPdf',
        'organize-manage': 'organizeManage',
        'optimize-repair': 'optimizeRepair',
        'secure-pdf': 'securePdf',
    };

    const categoryName = t(`home.categories.${categoryTranslationKeys[category]}`);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header locale={locale} />

            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6">
                    <Breadcrumb className="mb-6">
                        <BreadcrumbList>
                            <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/${locale}`}>{t('common.navigation.home')}</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator className="rtl:rotate-180" />
                            <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/${locale}/tools`}>{t('common.navigation.tools')}</Link></BreadcrumbLink></BreadcrumbItem>
                            <BreadcrumbSeparator className="rtl:rotate-180" />
                            <BreadcrumbItem><BreadcrumbPage>{categoryName}</BreadcrumbPage></BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    {/* Page Header */}
                    <section className="mb-8 space-y-2">
                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            {categoryName}
                        </h1>
                        <p className="text-muted-foreground">
                            {t(`home.categoriesDescription.${categoryTranslationKeys[category]}`)}
                        </p>
                    </section>

                    {/* Tools Grid */}
                    <ToolGrid
                        tools={tools}
                        locale={locale}
                        localizedToolContent={localizedToolContent}
                    />
                </div>
            </main>

            <Footer locale={locale} />
        </div>
    );
}
