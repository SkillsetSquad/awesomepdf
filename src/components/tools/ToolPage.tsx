import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Tool, ToolContent, ToolCategory } from '@/types/tool';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { getToolById } from '@/config/tools';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { type Locale } from '@/lib/i18n/config';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { getToolIcon } from '@/config/icons';
import { FavoriteButton } from '@/components/ui/FavoriteButton';
import { ToolGrid } from './ToolGrid';
import { sanitizeHtml } from '@/lib/utils/html-sanitizer';

export interface ToolPageProps {
  tool: Tool;
  content: ToolContent;
  locale: string;
  children?: React.ReactNode;
  localizedRelatedTools?: Record<string, { title: string; description: string }>;
}
const categoryKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate', 'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf', 'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair', 'secure-pdf': 'securePdf',
};

export function ToolPage({ tool, content, locale, children, localizedRelatedTools = {} }: ToolPageProps) {
  const t = useTranslations();
  const relatedTools = tool.relatedTools.map(getToolById).filter((related): related is Tool => related !== undefined);
  const name = content.title || tool.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const Icon = getToolIcon(tool.icon);
  return (
    <div className="flex min-h-screen flex-col bg-background" data-testid="tool-page">
      <Header locale={locale as Locale} />
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-7xl flex-1 space-y-10 px-4 pt-24 pb-12 sm:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/${locale}`}>{t('common.navigation.home')}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className="rtl:rotate-180" />
            <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/${locale}/tools`}>{t('common.navigation.tools')}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className="rtl:rotate-180" />
            <BreadcrumbItem><BreadcrumbLink asChild><Link href={`/${locale}/tools/category/${tool.category}`}>{t(`home.categories.${categoryKeys[tool.category]}`)}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator className="rtl:rotate-180" />
            <BreadcrumbItem><BreadcrumbPage>{name}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <header className="space-y-3" data-testid="tool-page-header" itemScope itemType="https://schema.org/SoftwareApplication">
          <meta itemProp="applicationCategory" content="UtilitiesApplication" />
          <meta itemProp="operatingSystem" content="Web Browser" />
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer"><meta itemProp="price" content="0" /><meta itemProp="priceCurrency" content="USD" /></div>
          <div className="flex flex-wrap items-center gap-3">
            <Icon className="size-7 text-primary" aria-hidden="true" />
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl" data-testid="tool-page-title" itemProp="name">{name}</h1>
            <FavoriteButton toolId={tool.id} toolName={name} showLabel />
          </div>
          <p className="max-w-3xl text-muted-foreground" data-testid="tool-page-subtitle" itemProp="description">{content.metaDescription}</p>
        </header>
        <ToolProvider toolSlug={tool.slug} toolName={name}>
          <section data-testid="tool-page-interface" aria-label={name}>{children}</section>
        </ToolProvider>
        {content.description && <section data-testid="tool-page-description" aria-labelledby="description-heading" className="space-y-4">
          <h2 id="description-heading" className="text-2xl font-semibold tracking-tight">{t('tools.about')}</h2>
          <Card><CardContent className="space-y-4 text-muted-foreground [&_p]:mb-3 [&_ul]:list-disc [&_ul]:ps-5 [&_ol]:list-decimal [&_ol]:ps-5 [&_a]:text-primary [&_a]:underline [&_strong]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:text-lg [&_h3]:font-semibold" dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.description) }} /></Card>
        </section>}
        {!!content.howToUse?.length && <section data-testid="tool-page-how-to-use" aria-labelledby="how-to-use-heading" itemScope itemType="https://schema.org/HowTo" className="space-y-4">
          <h2 id="how-to-use-heading" itemProp="name" className="text-2xl font-semibold tracking-tight">{t('tools.howToUse')}</h2>
          <ol className="grid gap-4 md:grid-cols-3" data-testid="how-to-use-steps">
            {content.howToUse.map(step => <li key={step.step} id={`step-${step.step}`} data-testid={`how-to-step-${step.step}`} itemScope itemProp="step" itemType="https://schema.org/HowToStep">
              <meta itemProp="position" content={String(step.step)} />
              <Card className="h-full"><CardHeader>
                <Badge variant="secondary" aria-hidden="true">{step.step}</Badge>
                <CardTitle><h3 itemProp="name" className="leading-snug">{step.title}</h3></CardTitle>
                <CardDescription itemProp="text">{step.description}</CardDescription>
              </CardHeader></Card>
            </li>)}
          </ol>
        </section>}
        {!!content.useCases?.length && <section data-testid="tool-page-use-cases" aria-labelledby="use-cases-heading" className="space-y-4">
          <h2 id="use-cases-heading" className="text-2xl font-semibold tracking-tight">{t('tools.useCases')}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-testid="use-cases-grid">
            {content.useCases.map((useCase, index) => <Card key={index} data-testid={`use-case-${index}`}><CardHeader>
              <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
              <CardTitle><h3 className="leading-snug">{useCase.title}</h3></CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader></Card>)}
          </div>
        </section>}
        {!!content.faq?.length && <section data-testid="tool-page-faq" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage" className="space-y-4">
          <h2 id="faq-heading" className="text-2xl font-semibold tracking-tight">{t('tools.faq')}</h2>
          <Accordion type="multiple" data-testid="faq-list">
            {content.faq.map((item, index) => <AccordionItem key={index} value={`faq-${index}`} className="[&>[data-slot=accordion-content][data-state=closed]]:hidden" data-testid={`faq-item-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <AccordionTrigger><span itemProp="name">{item.question}</span></AccordionTrigger>
              <AccordionContent forceMount className="text-muted-foreground"><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{item.answer}</p></div></AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </section>}
        {!!relatedTools.length && <section data-testid="tool-page-related-tools" aria-labelledby="related-tools-heading" className="space-y-4">
          <h2 id="related-tools-heading" className="text-2xl font-semibold tracking-tight">{t('tools.relatedTools')}</h2>
          <div data-testid="related-tools-grid"><ToolGrid tools={relatedTools} locale={locale} localizedToolContent={localizedRelatedTools} /></div>
        </section>}
      </main>
      <Footer locale={locale as Locale} />
    </div>
  );
}

export default ToolPage;
