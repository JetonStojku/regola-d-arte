import type { Locale } from '@/lib/siteArchitecture';

export const pageMetadata = {
  rootGateway: {
    it: {
      title: 'Regola D\'arte | Porta lingua',
      description: 'Porta statica per la struttura bilingue del sito Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | Language gateway',
      description: 'Static gateway for the bilingual structure of the Regola D\'arte website.',
    },
  },
  home: {
    it: {
      title: 'Regola D\'arte | Home italiana',
      description: 'Homepage italiana del sito Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | English home',
      description: 'English homepage for the Regola D\'arte website.',
    },
  },
  notFound: {
    it: {
      title: 'Regola D\'arte | Pagina non trovata',
      description: 'Pagina 404 statica per il sito Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | Page not found',
      description: 'Static 404 page for the Regola D\'arte website.',
    },
  },
  about: {
    it: {
      title: 'Regola D\'arte | Chi siamo',
      description: 'Chi siamo dello studio dentistico Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | About',
      description: 'About the Regola D\'arte dental clinic.',
    },
  },
  servicesOverview: {
    it: {
      title: 'Regola D\'arte | Servizi',
      description: 'Panoramica dei servizi dello studio dentistico Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | Services',
      description: 'Service overview for the Regola D\'arte dental clinic.',
    },
  },
  contact: {
    it: {
      title: 'Regola D\'arte | Contatti',
      description: 'Contatti e orari dello studio dentistico Regola D\'arte.',
    },
    en: {
      title: 'Regola D\'arte | Contact',
      description: 'Contact details and opening hours for Regola D\'arte.',
    },
  },
} as const satisfies Record<
  string,
  Record<Locale, { title: string; description: string }>
>;
