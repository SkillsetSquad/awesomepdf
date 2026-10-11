import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { CATEGORY_MESSAGE_KEYS, TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import { getToolsByCategory } from '@/config/tools';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import CategoryPageClient from './CategoryPageClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        TOOL_CATEGORIES.map((category) => ({
            locale,
            category,
        }))
    );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
    const { locale, category } = await params;
    if (!TOOL_CATEGORIES.includes(category as ToolCategory)) return {};

    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
    const t = await getTranslations({ locale: validLocale });
    const key = CATEGORY_MESSAGE_KEYS[category as ToolCategory];
    const count = getToolsByCategory(category as ToolCategory).length;

    return generateBaseMetadata({
        locale: validLocale,
        path: `/tools/category/${category}`,
        title: `${t(`home.categories.${key}`)} - ${t('metadata.tools.title')}`,
        description: `${t(`home.categoriesDescription.${key}`)} · ${t('home.directory.toolsCount', { count })}`,
        keywords: [t(`home.categories.${key}`)],
    });
}

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
    const { locale, category } = await params;

    // Validate category
    if (!TOOL_CATEGORIES.includes(category as ToolCategory)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    // Get localized content for tools
    const { tools } = await import('@/config/tools');
    const { getToolContent } = await import('@/config/tool-content');

    const localizedToolContent = tools.reduce((acc, tool) => {
        const content = getToolContent(locale as Locale, tool.id);
        if (content) {
            acc[tool.id] = {
                title: content.title,
                description: content.metaDescription
            };
        }
        return acc;
    }, {} as Record<string, { title: string; description: string }>);

    return (
        <CategoryPageClient
            locale={locale as Locale}
            category={category as ToolCategory}
            localizedToolContent={localizedToolContent}
        />
    );
}
