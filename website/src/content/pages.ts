import { commonLabels } from '@/content/common';
import { ctaCopy } from '@/content/ctas';
import { navigationContent } from '@/content/navigation';
import { pageMetadata } from '@/content/metadata';
import { getLocalizedServices } from '@/content/services';
import {
  localeMeta,
  primaryLocale,
  rootRouteBehavior,
  sectionRoutes,
  type Locale,
  type SiteSectionKey,
} from '@/lib/siteArchitecture';

type RootGatewayPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryPathLabel: string;
  secondaryPathLabel: string;
  localePathLabel: string;
  urlMapTitle: string;
  navigationTitle: string;
  serviceTitle: string;
  internalLinksTitle: string;
  rootTitle: string;
  plannedPagesTitle: string;
  defaultPathNote: string;
};

type HomePageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  homePathLabel: string;
  navigationTitle: string;
  routeLabel: string;
};

type NotFoundPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
};

type SectionPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  body: string;
  ctaLabel: string;
};

export const rootGatewayPageContent: Record<Locale, RootGatewayPageContent> = {
  it: {
    eyebrow: 'Architettura informativa',
    title: 'Struttura del sito Regola D\'arte',
    intro:
      'L italiano resta l esperienza principale e la root mantiene una porta statica verso il percorso bilingue.',
    primaryPathLabel: 'Percorso predefinito',
    secondaryPathLabel: 'Percorso secondario',
    localePathLabel: 'Percorso lingua',
    urlMapTitle: commonLabels.routeMap.it,
    navigationTitle: 'Navigazione',
    serviceTitle: 'Servizi previsti',
    internalLinksTitle: commonLabels.internalLinks.it,
    rootTitle: 'Comportamento root',
    plannedPagesTitle: 'Pagine previste',
    defaultPathNote: 'La root route indirizza verso la home italiana e conserva il sito static-friendly.',
  },
  en: {
    eyebrow: 'Information architecture',
    title: 'Regola D\'arte site structure',
    intro:
      'Italian remains the primary experience and the root acts as a static gateway to the bilingual route set.',
    primaryPathLabel: 'Primary path',
    secondaryPathLabel: 'Secondary path',
    localePathLabel: 'Language path',
    urlMapTitle: commonLabels.routeMap.en,
    navigationTitle: 'Navigation',
    serviceTitle: 'Planned services',
    internalLinksTitle: commonLabels.internalLinks.en,
    rootTitle: 'Root behavior',
    plannedPagesTitle: 'Planned pages',
    defaultPathNote: 'The root route points to the Italian home and keeps the site static-friendly.',
  },
};

export const homePageContent: Record<Locale, HomePageContent> = {
  it: {
    eyebrow: 'Homepage italiana',
    title: 'Regola D\'arte',
    intro:
      'Questa pagina esiste come punto di ingresso per il percorso italiano e rimanda alla navigazione principale del sito.',
    homePathLabel: 'Home',
    navigationTitle: commonLabels.primaryNavigation.it,
    routeLabel: 'Percorso italiano',
  },
  en: {
    eyebrow: 'Italian home',
    title: 'Regola D\'arte',
    intro:
      'This page serves as the entry point for the English route set and links back to the localized navigation.',
    homePathLabel: 'Home',
    navigationTitle: commonLabels.primaryNavigation.en,
    routeLabel: 'English route',
  },
};

export const notFoundPageContent: Record<Locale, NotFoundPageContent> = {
  it: {
    eyebrow: '404',
    title: 'Pagina non trovata',
    intro:
      'La pagina richiesta non fa ancora parte della mappa URL pubblicata. Usa la home italiana o la versione inglese per continuare.',
    primaryButtonLabel: ctaCopy.backHome.it,
    secondaryButtonLabel: 'Vai alla home inglese',
  },
  en: {
    eyebrow: '404',
    title: 'Page not found',
    intro:
      'The requested page is not part of the published URL map yet. Use the Italian home or the English version to continue.',
    primaryButtonLabel: ctaCopy.backHome.en,
    secondaryButtonLabel: 'Go to the Italian home',
  },
};

export const sectionPageContent: Record<
  Exclude<SiteSectionKey, 'home' | 'notFound'>,
  Record<Locale, SectionPageContent>
> = {
  about: {
    it: {
      eyebrow: 'Chi siamo',
      title: 'Competenza clinica, estetica e precisione',
      intro:
        'Lo studio unisce competenza clinica e attenzione alla persona, con piani di trattamento personalizzati e diagnosi accurata.',
      body:
        'Il posizionamento del brand insiste sulla qualità dei materiali, sulla biomeccanica, sull occlusione, sulla funzione e sull estetica.',
      ctaLabel: ctaCopy.primary.it,
    },
    en: {
      eyebrow: 'About',
      title: 'Clinical expertise, aesthetics, and precision',
      intro:
        'The clinic combines clinical expertise and patient care with personalized treatment plans and accurate diagnosis.',
      body:
        'The brand narrative emphasizes material quality, biomechanics, occlusion, function, and aesthetics.',
      ctaLabel: ctaCopy.primary.en,
    },
  },
  servicesOverview: {
    it: {
      eyebrow: 'Servizi',
      title: 'Panoramica dei trattamenti',
      intro:
        'I servizi coprono conservativa, chirurgia orale, implantologia, ortodonzia, estetica dentale e igiene preventiva.',
      body:
        'Le card dei servizi e i relativi slug vengono costruiti dai dati di contenuto, non dentro i componenti.',
      ctaLabel: ctaCopy.secondary.it,
    },
    en: {
      eyebrow: 'Services',
      title: 'Treatment overview',
      intro:
        'Services include restorative dentistry, oral surgery, implantology, orthodontics, dental aesthetics, and preventive hygiene.',
      body:
        'Service cards and slugs are generated from content data rather than being hardcoded in components.',
      ctaLabel: ctaCopy.secondary.en,
    },
  },
  contact: {
    it: {
      eyebrow: 'Contatti',
      title: 'Parliamo del tuo caso',
      intro:
        'I contatti e gli orari sono centralizzati nei dati di contenuto per mantenere il routing e le informazioni coerenti.',
      body:
        'La pagina contatti potra riusare gli stessi dati in italiano e inglese senza duplicare la logica di presentazione.',
      ctaLabel: ctaCopy.primary.it,
    },
    en: {
      eyebrow: 'Contact',
      title: 'Discuss your case',
      intro:
        'Contact details and opening hours are centralized in content data to keep routing and information consistent.',
      body:
        'The contact page can reuse the same data in Italian and English without duplicating presentation logic.',
      ctaLabel: ctaCopy.primary.en,
    },
  },
};

export const serviceOverviewCardList = {
  it: getLocalizedServices('it'),
  en: getLocalizedServices('en'),
} as const;

export const routeSummary = {
  home: sectionRoutes.home,
  about: sectionRoutes.about,
  servicesOverview: sectionRoutes.servicesOverview,
  contact: sectionRoutes.contact,
  notFound: sectionRoutes.notFound,
} as const;

export const languageSwitcherContent = {
  it: {
    label: navigationContent.languageSwitcher.it.label,
    href: navigationContent.languageSwitcher.it.href,
  },
  en: {
    label: navigationContent.languageSwitcher.en.label,
    href: navigationContent.languageSwitcher.en.href,
  },
} as const;

export const metaContent = pageMetadata;

export const brandContent = {
  name: {
    it: 'Regola D\'arte',
    en: 'Regola D\'arte',
  },
  tagline: {
    it: 'il vostro sorriso, la nostra arte',
    en: 'your smile, our art',
  },
  defaultLocale: primaryLocale,
  primaryLocaleLabel: localeMeta[primaryLocale].label,
} as const;
