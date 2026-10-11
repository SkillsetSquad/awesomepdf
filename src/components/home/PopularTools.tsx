import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { HOME_POPULAR_TOOLS } from '@/config/home';
import { getToolById } from '@/config/tools';
import type { Locale } from '@/lib/i18n/config';
import { allToolsHref, toolHref } from '@/lib/routes';
import { getToolSummaries } from '@/lib/tool-summaries';
import { Button } from '@/components/ui/button';

export function PopularTools({ locale }: { locale: Locale }) {
  const t = useTranslations('home.popularTools');
  const summaries = getToolSummaries(locale);

  return (
    <section aria-labelledby="popular-tools-title" className="pb-12 pt-10 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="max-w-2xl space-y-2">
            <h2 id="popular-tools-title" className="text-2xl font-semibold tracking-tight md:text-3xl">{t('title')}</h2>
            <p className="text-muted-foreground">{t('description')}</p>
          </div>
          <Button variant="outline" asChild>
            <Link href={allToolsHref(locale)}>{t('viewAll')}<ArrowRight className="rtl:rotate-180" aria-hidden="true" /></Link>
          </Button>
        </div>
        <ul className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {HOME_POPULAR_TOOLS.flatMap(({ id, icon: Icon }) => {
            const tool = getToolById(id);
            if (!tool) return [];
            return [
              <li
                key={id}
                className="group relative flex h-full flex-col gap-3 rounded-xl border bg-card p-5 transition-[border-color,box-shadow] hover:border-primary/40 hover:shadow-sm has-[a:focus-visible]:border-primary has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring/50"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold leading-snug">
                  <Link href={toolHref(locale, tool.slug)} className="outline-none after:absolute after:inset-0 after:rounded-xl">
                    {summaries[id]?.title ?? id}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{t(`items.${id}`)}</p>
                <ArrowRight className="absolute end-5 top-5 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 rtl:rotate-180" aria-hidden="true" />
              </li>,
            ];
          })}
        </ul>
      </div>
    </section>
  );
}

export default PopularTools;
