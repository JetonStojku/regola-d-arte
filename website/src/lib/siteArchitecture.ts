export const supportedLocales = ['it', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const primaryLocale: Locale = 'it';

export const localeMeta: Record<
  Locale,
  {
    label: string;
    routePrefix: string;
    isPrimary: boolean;
    ogLocale: string;
  }
> = {
  it: {
    label: 'Italiano',
    routePrefix: '/it',
    isPrimary: true,
    ogLocale: 'it_IT',
  },
  en: {
    label: 'English',
    routePrefix: '/en',
    isPrimary: false,
    ogLocale: 'en_US',
  },
};

export type SiteSectionKey =
  | 'home'
  | 'about'
  | 'servicesOverview'
  | 'beforeAfter'
  | 'contact'
  | 'notFound';

export const sectionRoutes: Record<SiteSectionKey, Record<Locale, string>> = {
  home: {
    it: '/it/',
    en: '/en/',
  },
  about: {
    it: '/it/chi-siamo/',
    en: '/en/about/',
  },
  servicesOverview: {
    it: '/it/servizi/',
    en: '/en/services/',
  },
  beforeAfter: {
    it: '/it/prima-dopo/',
    en: '/en/before-after/',
  },
  contact: {
    it: '/it/contatti/',
    en: '/en/contact/',
  },
  notFound: {
    it: '/404/',
    en: '/404/',
  },
};

export type ServiceKey =
  | 'conservative-dentistry-endodontics'
  | 'oral-surgery-implantology'
  | 'orthodontics'
  | 'dental-aesthetics'
  | 'oral-hygiene-prevention';

export const services: Record<
  ServiceKey,
  {
    labels: Record<Locale, string>;
    slugs: Record<Locale, string>;
    paths: Record<Locale, string>;
  }
> = {
  'conservative-dentistry-endodontics': {
    labels: {
      it: 'Odontoiatria conservativa ed endodonzia',
      en: 'Conservative dentistry and endodontics',
    },
    slugs: {
      it: 'odontoiatria-conservativa-endodonzia',
      en: 'conservative-dentistry-endodontics',
    },
    paths: {
      it: '/it/servizi/odontoiatria-conservativa-endodonzia/',
      en: '/en/services/conservative-dentistry-endodontics/',
    },
  },
  'oral-surgery-implantology': {
    labels: {
      it: 'Chirurgia orale e implantologia',
      en: 'Oral surgery and implantology',
    },
    slugs: {
      it: 'chirurgia-orale-implantologia',
      en: 'oral-surgery-implantology',
    },
    paths: {
      it: '/it/servizi/chirurgia-orale-implantologia/',
      en: '/en/services/oral-surgery-implantology/',
    },
  },
  orthodontics: {
    labels: {
      it: 'Ortodonzia',
      en: 'Orthodontics',
    },
    slugs: {
      it: 'ortodonzia',
      en: 'orthodontics',
    },
    paths: {
      it: '/it/servizi/ortodonzia/',
      en: '/en/services/orthodontics/',
    },
  },
  'dental-aesthetics': {
    labels: {
      it: 'Estetica dentale',
      en: 'Dental aesthetics',
    },
    slugs: {
      it: 'estetica-dentale',
      en: 'dental-aesthetics',
    },
    paths: {
      it: '/it/servizi/estetica-dentale/',
      en: '/en/services/dental-aesthetics/',
    },
  },
  'oral-hygiene-prevention': {
    labels: {
      it: 'Igiene orale e prevenzione',
      en: 'Oral hygiene and prevention',
    },
    slugs: {
      it: 'igiene-prevenzione',
      en: 'oral-hygiene-prevention',
    },
    paths: {
      it: '/it/servizi/igiene-prevenzione/',
      en: '/en/services/oral-hygiene-prevention/',
    },
  },
};

export function isLocale(value: string): value is Locale {
  return (supportedLocales as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined, fallback: Locale = primaryLocale): Locale {
  return value && isLocale(value) ? value : fallback;
}

export function getSectionPath(section: SiteSectionKey, locale: Locale): string {
  return sectionRoutes[section][locale];
}

export function getServicePath(serviceKey: ServiceKey, locale: Locale): string {
  return services[serviceKey].paths[locale];
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === 'it' ? 'en' : 'it';
}

export function getLocalizedPath<T extends Record<Locale, string>>(
  paths: T,
  locale: Locale,
): string {
  return paths[locale];
}

export function getLanguageSwitcherLinks(
  section: SiteSectionKey,
  currentLocale: Locale,
): Array<{
  locale: Locale;
  label: string;
  href: string;
  isCurrent: boolean;
}> {
  return supportedLocales.map((locale) => ({
    locale,
    label: localeMeta[locale].label,
    href: getSectionPath(section, locale),
    isCurrent: locale === currentLocale,
  }));
}

export function getSeoAlternateLinks<T extends Record<Locale, string>>(
  paths: T,
  currentLocale: Locale,
  options?: {
    includeXDefault?: boolean;
    xDefaultLocale?: Locale;
  },
): Array<{
  hreflang: Locale | 'x-default';
  href: string;
}> {
  const includeXDefault = options?.includeXDefault ?? true;
  const xDefaultLocale = options?.xDefaultLocale ?? primaryLocale;

  const links = supportedLocales.map((locale) => ({
    hreflang: locale,
    href: paths[locale],
  }));

  if (!includeXDefault) {
    return links;
  }

  return [
    ...links,
    {
      hreflang: 'x-default',
      href: paths[xDefaultLocale ?? currentLocale],
    },
  ];
}

export function getAlternateLocalePath(
  section: SiteSectionKey,
  currentLocale: Locale,
): string {
  return getSectionPath(section, getOtherLocale(currentLocale));
}

export function getLocalizedServiceLinks(locale: Locale) {
  return Object.entries(services).map(([key, service]) => ({
    key: key as ServiceKey,
    label: service.labels[locale],
    slug: service.slugs[locale],
    href: service.paths[locale],
  }));
}

export const rootRouteBehavior = {
  path: '/',
  defaultLanguage: primaryLocale,
  destination: sectionRoutes.home.it,
  type: 'static-language-gateway',
} as const;
