import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Gift, ShieldCheck, Zap, type LucideIcon } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

const ITEMS: { key: 'private' | 'free' | 'simple'; icon: LucideIcon }[] = [
  { key: 'private', icon: ShieldCheck },
  { key: 'free', icon: Gift },
  { key: 'simple', icon: Zap },
];

export function TrustSection({ locale }: { locale: Locale }) {
  const t = useTranslations('home.trust');
  const linkClass = 'rounded-sm font-medium text-primary underline underline-offset-4 hover:no-underline';

  return (
    <section aria-labelledby="trust-title" className="border-y bg-surface py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-2">
          <h2 id="trust-title" className="text-2xl font-semibold tracking-tight md:text-3xl">{t('title')}</h2>
          <p className="text-muted-foreground">{t('description')}</p>
        </div>
        <ul className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-3">
          {ITEMS.map(({ key, icon: Icon }) => (
            <li key={key} className="flex gap-4 rounded-xl border bg-card p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <h3 className="font-semibold leading-snug">{t(`items.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`items.${key}.description`)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          {t('note')}{' '}
          <Link href={`/${locale}/privacy`} className={linkClass}>{t('privacyLink')}</Link>
          {' · '}
          <Link href={`/${locale}/open-source#source-code`} className={linkClass}>{t('sourceLink')}</Link>
        </p>
      </div>
    </section>
  );
}

export default TrustSection;
