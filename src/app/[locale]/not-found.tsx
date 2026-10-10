'use client';

import { useParams } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';
import { PageNotFound } from '@/components/common/PageNotFound';

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isValidLocale(params.locale) ? params.locale : 'en';
  return <PageNotFound locale={locale} />;
}
