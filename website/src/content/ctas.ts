import type { Locale } from '@/lib/siteArchitecture';

export const ctaCopy = {
  primary: {
    it: 'Prenota una visita',
    en: 'Book a visit',
  },
  secondary: {
    it: 'Scopri i servizi',
    en: 'Explore services',
  },
  backHome: {
    it: 'Torna alla home',
    en: 'Return home',
  },
  switchLanguage: {
    it: 'Cambia lingua',
    en: 'Switch language',
  },
} as const satisfies Record<string, Record<Locale, string>>;
