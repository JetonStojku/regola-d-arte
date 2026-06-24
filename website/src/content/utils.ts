import { localeMeta, type Locale } from '@/lib/siteArchitecture';

export function missingTranslationPlaceholder(label: string, locale: Locale): string {
  return `[translation missing: ${label}.${localeMeta[locale].label}]`;
}

export function readLocalizedValue<T>(
  values: Partial<Record<Locale, T>>,
  locale: Locale,
  label: string,
): T | string {
  return values[locale] ?? missingTranslationPlaceholder(label, locale);
}

export function readLocalizedRecord<T>(
  values: Partial<Record<Locale, T>>,
  locale: Locale,
  label: string,
): T {
  const value = values[locale];

  if (value === undefined) {
    throw new Error(missingTranslationPlaceholder(label, locale));
  }

  return value;
}
