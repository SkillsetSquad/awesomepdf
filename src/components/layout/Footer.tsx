import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FileText, ShieldCheck } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils/path';
import { Separator } from '@/components/ui/separator';
import { LanguageSelector } from './LanguageSelector';

export interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('common');
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 rounded-md font-semibold" aria-label={`${t('brand')} - ${t('navigation.home')}`}>
              <FileText className="size-5 text-primary" aria-hidden="true" /><span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-sm text-muted-foreground" lang="en">A brand of Skillset Squad Private Limited.</p>
            <p className="flex items-start gap-2 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{t('footer.privacyBadge')}</p>
          </div>
          <nav aria-label={t('footer.resources')} className="space-y-3">
            <h2 className="text-sm font-medium">{t('footer.resources')}</h2>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {(['about', 'faq', 'privacy', 'contact'] as const).map((item) => <li key={item}>
                <Link href={`/${locale}/${item}`} className="rounded-sm hover:text-foreground hover:underline">{t(`navigation.${item}`)}</Link>
              </li>)}
            </ul>
          </nav>
          <nav aria-label={t('footer.openSource')} className="space-y-3">
            <h2 className="text-sm font-medium">{t('footer.openSource')}</h2>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              <li><Link href={`/${locale}/open-source#source-code`} className="rounded-sm hover:text-foreground hover:underline">{t('footer.sourceCode')}</Link></li>
              <li><a href={withBasePath('/LICENSE.txt')} className="rounded-sm hover:text-foreground hover:underline">{t('footer.license')}</a></li>
              <li><Link href={`/${locale}/open-source`} className="rounded-sm hover:text-foreground hover:underline">{t('footer.openSource')}</Link></li>
              <li>{t('footer.basedOn')} <a href={siteConfig.links.upstream} target="_blank" rel="noopener noreferrer" className="rounded-sm underline underline-offset-4">PDFCraft</a></li>
            </ul>
          </nav>
        </div>
        <Separator />
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <LanguageSelector currentLocale={locale} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
