import type { Locale } from '@/lib/siteArchitecture';

type LocalizedText = Record<Locale, string>;

export const brandCopy = {
  name: {
    it: 'Regola D\'arte',
    en: 'Regola D\'arte',
  },
  tagline: {
    it: 'il vostro sorriso, la nostra arte',
    en: 'your smile, our art',
  },
  description: {
    it: 'Studio dentistico che unisce competenza clinica, estetica e attenzione alla persona.',
    en: 'A dental clinic that combines clinical expertise, aesthetics, and patient care.',
  },
} as const satisfies Record<string, LocalizedText>;

type CommonLabels = {
  skipLink: LocalizedText;
  languageSwitcher: LocalizedText;
  localeCardPrimary: LocalizedText;
  localeCardSecondary: LocalizedText;
  primaryNavigation: LocalizedText;
  footerNavigation: LocalizedText;
  footerContactTitle: LocalizedText;
  footerContactNote: LocalizedText;
  footerLegalTitle: LocalizedText;
  mobileMenu: LocalizedText;
  privacyPolicy: LocalizedText;
  cookiePolicy: LocalizedText;
  routeMap: LocalizedText;
  serviceIndex: LocalizedText;
  routeItems: Record<string, LocalizedText>;
  internalLinks: LocalizedText;
  rootGateway: LocalizedText;
  notFound: LocalizedText;
};

export const commonLabels = {
  skipLink: {
    it: 'Vai al contenuto principale',
    en: 'Skip to content',
  },
  languageSwitcher: {
    it: 'Lingua',
    en: 'Language',
  },
  localeCardPrimary: {
    it: 'Percorso predefinito',
    en: 'Primary path',
  },
  localeCardSecondary: {
    it: 'Percorso secondario',
    en: 'Secondary path',
  },
  primaryNavigation: {
    it: 'Navigazione principale',
    en: 'Primary navigation',
  },
  footerNavigation: {
    it: 'Navigazione nel footer',
    en: 'Footer navigation',
  },
  footerContactTitle: {
    it: 'Contatti studio',
    en: 'Practice contact',
  },
  footerContactNote: {
    it: 'I dettagli di contatto sono raccolti nella pagina contatti.',
    en: 'Contact details are collected on the contact page.',
  },
  footerLegalTitle: {
    it: 'Legale',
    en: 'Legal',
  },
  mobileMenu: {
    it: 'Menu',
    en: 'Menu',
  },
  privacyPolicy: {
    it: 'Privacy',
    en: 'Privacy policy',
  },
  cookiePolicy: {
    it: 'Cookie',
    en: 'Cookie policy',
  },
  routeMap: {
    it: 'Mappa URL',
    en: 'URL map',
  },
  serviceIndex: {
    it: 'Indice servizi',
    en: 'Service index',
  },
  routeItems: {
    home: {
      it: 'Home',
      en: 'Home',
    },
    about: {
      it: 'Chi siamo',
      en: 'About',
    },
    servicesOverview: {
      it: 'Servizi',
      en: 'Services',
    },
    contact: {
      it: 'Contatti',
      en: 'Contact',
    },
    notFound: {
      it: '404',
      en: '404',
    },
  },
  internalLinks: {
    it: 'Link interni',
    en: 'Internal links',
  },
  rootGateway: {
    it: 'Porta lingua',
    en: 'Language gateway',
  },
  notFound: {
    it: 'Pagina non trovata',
    en: 'Page not found',
  },
} as const satisfies CommonLabels;
