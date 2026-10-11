import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { HOME_POPULAR_TOOLS, HOME_SHORTCUT_IDS } from '@/config/home';
import { getToolById } from '@/config/tools';
import type { Locale } from '@/lib/i18n/config';
import { toolHref } from '@/lib/routes';
import { getToolSummaries } from '@/lib/tool-summaries';
import { getUploadAccept } from '@/lib/home/upload-analysis';
import { HeroUploader } from './HeroUploader';

/** Tools that can be suggested after a file is chosen; the uploader needs only their names. */
const UPLOAD_SUGGESTION_IDS = ['compress-pdf', 'edit-pdf', 'split-pdf', 'sign-pdf', 'organize-pdf', 'merge-pdf', 'pdf-multi-tool', 'image-to-pdf'];

export function HeroSection({ locale }: { locale: Locale }) {
  const t = useTranslations('home');
  const summaries = getToolSummaries(locale);
  const iconFor = new Map(HOME_POPULAR_TOOLS.map((tool) => [tool.id, tool.icon]));

  // Document converters are suggested by the registry, so every converter's name is needed too.
  const toolTitles: Record<string, string> = {};
  for (const [id, summary] of Object.entries(summaries)) {
    const tool = getToolById(id);
    if (tool && (tool.category === 'convert-to-pdf' || UPLOAD_SUGGESTION_IDS.includes(id))) toolTitles[id] = summary.title;
  }

  return (
    <section aria-labelledby="hero-title" className="pb-8 pt-8 md:pb-10 md:pt-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1 id="hero-title" className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
          {t('hero.title')}
        </h1>
        <p className="mx-auto mt-2.5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">{t('hero.subtitle')}</p>
        <div className="mt-6">
          <HeroUploader locale={locale} accept={getUploadAccept()} toolTitles={toolTitles} />
        </div>
        <nav aria-label={t('upload.shortcuts')} className="mt-4">
          <ul className="flex flex-wrap justify-center gap-2">
            {HOME_SHORTCUT_IDS.flatMap((id) => {
              const tool = getToolById(id);
              const Icon = iconFor.get(id);
              if (!tool) return [];
              return [
                <li key={id}>
                  <Link
                    href={toolHref(locale, tool.slug)}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border bg-background px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-accent focus-visible:outline-2"
                  >
                    {Icon && <Icon className="size-4 text-primary" aria-hidden="true" />}
                    {summaries[id]?.title ?? id}
                  </Link>
                </li>,
              ];
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
