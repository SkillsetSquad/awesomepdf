import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { Github } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { allToolsHref, categoryHref, toolHref } from '@/lib/routes';
import { getToolSummaries } from '@/lib/tool-summaries';
import { withBasePath } from '@/lib/utils/path';
import { getToolById } from '@/config/tools';
import { Separator } from '@/components/ui/separator';
import { BrandMark } from './BrandMark';

export interface FooterProps {
  locale: Locale;
}

const FOOTER_TOOL_IDS = ['merge-pdf', 'compress-pdf', 'edit-pdf'] as const;
const linkClass = 'rounded-sm text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4';

function LinkColumn({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <nav aria-label={heading} className="space-y-4">
      <h2 className="text-sm font-semibold">{heading}</h2>
      <ul className="grid gap-2.5 text-sm">{children}</ul>
    </nav>
  );
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');
  const summaries = getToolSummaries(locale);

  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 rounded-md text-lg font-semibold tracking-tight" aria-label={`${t('brand')} - ${t('navigation.home')}`}>
              <BrandMark />
              <span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-sm font-medium">{t('footer.brandOf')}</p>
            <p className="max-w-sm text-sm text-muted-foreground">{t('footer.description')}</p>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex size-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:text-foreground">
              <Github className="size-4" aria-hidden="true" />
            </a>
          </div>

          <LinkColumn heading={t('footer.toolsHeading')}>
            {FOOTER_TOOL_IDS.flatMap((id) => {
              const tool = getToolById(id);
              return tool ? [<li key={id}><Link href={toolHref(locale, tool.slug)} className={linkClass}>{summaries[id]?.title ?? id}</Link></li>] : [];
            })}
            <li><Link href={categoryHref(locale, 'convert-from-pdf')} className={linkClass}>{t('footer.convertPdf')}</Link></li>
            <li><Link href={allToolsHref(locale)} className={linkClass}>{t('navigation.allTools')}</Link></li>
          </LinkColumn>

          <LinkColumn heading={t('footer.companyHeading')}>
            <li><Link href={`/${locale}/about`} className={linkClass}>{t('navigation.about')}</Link></li>
            <li><Link href={`/${locale}/faq`} className={linkClass}>{t('navigation.faq')}</Link></li>
            <li><Link href={`/${locale}/contact`} className={linkClass}>{t('navigation.contact')}</Link></li>
            <li><Link href={`/${locale}/privacy`} className={linkClass}>{t('footer.privacyPolicy')}</Link></li>
          </LinkColumn>

          <LinkColumn heading={t('footer.legalHeading')}>
            <li><Link href={`/${locale}/open-source#source-code`} className={linkClass}>{t('footer.sourceCode')}</Link></li>
            <li><a href={withBasePath('/LICENSE.txt')} className={linkClass}>{t('footer.license')}</a></li>
            <li><Link href={`/${locale}/open-source`} className={linkClass}>{t('footer.openSource')}</Link></li>
            <li>
              <span className="text-muted-foreground">{t('footer.basedOn')}{' '}</span>
              <a href={siteConfig.links.upstream} target="_blank" rel="noopener noreferrer" className="rounded-sm underline underline-offset-4 hover:text-foreground">PDFCraft</a>
            </li>
          </LinkColumn>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">{t('footer.copyrightLine', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
