export const supportedLocales = ['it', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const primaryLocale: Locale = 'it';

export const localeMeta: Record<
  Locale,
  {
    label: string;
    routePrefix: string;
    isPrimary: boolean;
  }
> = {
  it: {
    label: 'Italiano',
    routePrefix: '/it',
    isPrimary: true,
  },
  en: {
    label: 'English',
    routePrefix: '/en',
    isPrimary: false,
  },
};

export type SiteSectionKey =
  | 'home'
  | 'about'
  | 'servicesOverview'
  | 'contact'
  | 'notFound';

export const sectionRoutes: Record<
  SiteSectionKey,
  Record<Locale, string>
> = {
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

export const navigation = {
  primary: {
    it: [
      { label: 'Chi siamo', href: sectionRoutes.about.it },
      { label: 'Servizi', href: sectionRoutes.servicesOverview.it },
      { label: 'Contatti', href: sectionRoutes.contact.it },
    ],
    en: [
      { label: 'About', href: sectionRoutes.about.en },
      { label: 'Services', href: sectionRoutes.servicesOverview.en },
      { label: 'Contact', href: sectionRoutes.contact.en },
    ],
  },
  footer: {
    it: [
      { label: 'Home', href: sectionRoutes.home.it },
      { label: 'Chi siamo', href: sectionRoutes.about.it },
      { label: 'Servizi', href: sectionRoutes.servicesOverview.it },
      { label: 'Contatti', href: sectionRoutes.contact.it },
    ],
    en: [
      { label: 'Home', href: sectionRoutes.home.en },
      { label: 'About', href: sectionRoutes.about.en },
      { label: 'Services', href: sectionRoutes.servicesOverview.en },
      { label: 'Contact', href: sectionRoutes.contact.en },
    ],
  },
};

export const internalLinkStrategy = {
  home: {
    it: [
      sectionRoutes.about.it,
      sectionRoutes.servicesOverview.it,
      sectionRoutes.contact.it,
    ],
    en: [
      sectionRoutes.about.en,
      sectionRoutes.servicesOverview.en,
      sectionRoutes.contact.en,
    ],
  },
  about: {
    it: [sectionRoutes.home.it, sectionRoutes.servicesOverview.it, sectionRoutes.contact.it],
    en: [sectionRoutes.home.en, sectionRoutes.servicesOverview.en, sectionRoutes.contact.en],
  },
  servicesOverview: {
    it: [
      sectionRoutes.about.it,
      sectionRoutes.contact.it,
      ...Object.values(services).map((service) => service.paths.it),
    ],
    en: [
      sectionRoutes.about.en,
      sectionRoutes.contact.en,
      ...Object.values(services).map((service) => service.paths.en),
    ],
  },
  servicePages: {
    it: [sectionRoutes.servicesOverview.it, sectionRoutes.about.it, sectionRoutes.contact.it],
    en: [sectionRoutes.servicesOverview.en, sectionRoutes.about.en, sectionRoutes.contact.en],
  },
  contact: {
    it: [sectionRoutes.home.it, sectionRoutes.servicesOverview.it],
    en: [sectionRoutes.home.en, sectionRoutes.servicesOverview.en],
  },
} as const;

export const rootRouteBehavior = {
  path: '/',
  defaultLanguage: primaryLocale,
  destination: sectionRoutes.home.it,
  type: 'static-language-gateway',
} as const;
