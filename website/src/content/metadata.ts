import type { Locale } from '@/lib/siteArchitecture';
import { serviceCatalog, type SeoMetadata } from '@/content/services';
import { type ServiceKey } from '@/lib/siteArchitecture';

type LocalizedSeoMetadata = Record<Locale, SeoMetadata>;

function buildServiceMetadata(serviceKey: ServiceKey): LocalizedSeoMetadata {
  const service = serviceCatalog[serviceKey];

  return {
    it: {
      title: service.metadata.it.title,
      description: service.metadata.it.description,
    },
    en: {
      title: service.metadata.en.title,
      description: service.metadata.en.description,
    },
  };
}

export const pageMetadata = {
  rootGateway: {
    it: {
      title: 'Regola D\'arte | Porta lingua',
      description:
        'Porta statica verso il percorso bilingue del sito Regola D\'arte, con accesso diretto alle versioni italiana e inglese.',
    },
    en: {
      title: 'Regola D\'arte | Language gateway',
      description:
        'Static gateway to the bilingual Regola D\'arte website, with direct access to the Italian and English routes.',
    },
  },
  home: {
    it: {
      title: 'Regola D\'arte | Home italiana',
      description:
        'Homepage italiana dello studio Regola D\'arte, con accesso alla navigazione principale e ai servizi confermati.',
    },
    en: {
      title: 'Regola D\'arte | English home',
      description:
        'English homepage for Regola D\'arte, with access to the main navigation and confirmed services.',
    },
  },
  notFound: {
    it: {
      title: 'Regola D\'arte | Pagina non trovata',
      description:
        'La pagina richiesta non è disponibile. Usa la home italiana o la versione inglese per continuare la navigazione.',
    },
    en: {
      title: 'Regola D\'arte | Page not found',
      description:
        'The requested page is not available yet. Use the Italian home or the English version to continue browsing.',
    },
  },
  about: {
    it: {
      title: 'Regola D\'arte | Chi siamo',
      description:
        'Chi siamo dello studio dentistico Regola D\'arte, con competenze cliniche, attenzione alla persona e piani su misura.',
    },
    en: {
      title: 'Regola D\'arte | About',
      description:
        'About Regola D\'arte dental clinic, with clinical expertise, patient care, and tailored treatment planning.',
    },
  },
  servicesOverview: {
    it: {
      title: 'Regola D\'arte | Servizi',
      description:
        'Panoramica dei servizi odontoiatrici confermati, dalla conservativa all implantologia, con un approccio clinico accurato.',
    },
    en: {
      title: 'Regola D\'arte | Services',
      description:
        'Overview of the confirmed dental services, from restorative care to implantology, with careful clinical planning.',
    },
  },
  prices: {
    it: {
      title: 'Regola D\'arte | Listino prezzi',
      description:
        'Listino prezzi dei trattamenti confermati dello studio Regola D\'arte, presentato in modo chiaro per consultazione rapida.',
    },
    en: {
      title: 'Regola D\'arte | Prices',
      description:
        'Price list for the confirmed treatments at Regola D\'arte, presented clearly for quick consultation.',
    },
  },
  beforeAfter: {
    it: {
      title: 'Regola D\'arte | Prima / Dopo',
      description:
        'Galleria dei casi prima e dopo di Regola D\'arte, con immagini composite approvate e senza separare i due momenti clinici.',
    },
    en: {
      title: 'Regola D\'arte | Before / After',
      description:
        'Regola D\'arte before/after case gallery, with approved composite images that keep the clinical before and after together.',
    },
  },
  contact: {
    it: {
      title: 'Regola D\'arte | Contatti',
      description:
        'Contatti, orari e modulo di richiesta dello studio Regola D\'arte, con fallback email se non è configurato un provider statico.',
    },
    en: {
      title: 'Regola D\'arte | Contact',
      description:
        'Contact details, opening hours, and a request form for Regola D\'arte, with an email fallback if no static provider is configured.',
    },
  },
} as const satisfies Record<
  string,
  Record<Locale, SeoMetadata>
>;

export const serviceMetadata = {
  'conservative-dentistry-endodontics': buildServiceMetadata('conservative-dentistry-endodontics'),
  'oral-surgery-implantology': buildServiceMetadata('oral-surgery-implantology'),
  'zygomatic-implantology': buildServiceMetadata('zygomatic-implantology'),
  orthodontics: buildServiceMetadata('orthodontics'),
  'dental-aesthetics': buildServiceMetadata('dental-aesthetics'),
  'oral-hygiene-prevention': buildServiceMetadata('oral-hygiene-prevention'),
} as const satisfies Record<ServiceKey, LocalizedSeoMetadata>;
