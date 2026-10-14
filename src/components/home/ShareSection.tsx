import { useTranslations } from 'next-intl';
import { ArrowLeftRight, CloudOff, Laptop, LockKeyhole, Smartphone, UserX, type LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BENEFITS: { key: 'direct' | 'noAccount' | 'noStorage'; icon: LucideIcon }[] = [
  { key: 'direct', icon: ArrowLeftRight },
  { key: 'noAccount', icon: UserX },
  { key: 'noStorage', icon: CloudOff },
];

function DeviceNode({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex w-20 flex-col items-center gap-2 text-center">
      <span className="grid size-14 place-items-center rounded-xl border bg-background text-foreground">
        <Icon className="size-7" aria-hidden="true" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

/**
 * Preview of AwsomePDF Share. The feature does not exist yet: this section has
 * no working control, makes no links and shows no transfer in progress.
 */
export function ShareSection() {
  const t = useTranslations('home.share');

  return (
    <section id="share" aria-labelledby="share-title" className="scroll-mt-16 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="min-w-0 space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-primary">{t('name')}</p>
            <h2 id="share-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t('title')}
              {/* Inline so the status stays attached to the heading text at any width, and is read with it. */}
              <Badge className="ms-3 px-2.5 py-1 align-middle text-xs">{t('badge')}</Badge>
            </h2>
            <p className="text-muted-foreground">{t('subtitle')}</p>
          </div>

          <ul className="space-y-4">
            {BENEFITS.map(({ key, icon: Icon }) => (
              <li key={key} className="flex gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">{t(`benefits.${key}.title`)}</p>
                  <p className="text-sm text-muted-foreground">{t(`benefits.${key}.description`)}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <Button size="lg" variant="outline" disabled aria-disabled="true" className="h-auto min-h-11 max-w-full border-dashed bg-muted px-6 py-2 text-center text-base whitespace-normal text-muted-foreground disabled:opacity-100">
              {t('cta')}
            </Button>
            <p className="max-w-xl text-sm text-muted-foreground">{t('note')}</p>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border bg-surface p-5 sm:p-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">{t('preview')}</p>

          <div role="img" aria-label={t('illustration')} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5">
            <DeviceNode icon={Laptop} label={t('sender')} />
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full">
                <div className="border-t-2 border-dashed border-primary/40" />
                <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-card text-primary">
                  <LockKeyhole className="size-4" aria-hidden="true" />
                </span>
              </div>
              <span className="text-center text-xs text-muted-foreground">{t('connection')}</span>
            </div>
            <DeviceNode icon={Smartphone} label={t('receiver')} />
          </div>

          <div className="mt-7 border-t pt-5">
            <h3 className="text-sm font-semibold">{t('stepsTitle')}</h3>
            <ol className="mt-3 space-y-3">
              {(['choose', 'link', 'open'] as const).map((step, index) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border bg-card text-xs font-medium" aria-hidden="true">{index + 1}</span>
                  <span className="text-muted-foreground">{t(`steps.${step}`)}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs text-muted-foreground">{t('planned')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
