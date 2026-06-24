import {
  getServicePath,
  type Locale,
  type ServiceKey,
  services,
} from '@/lib/siteArchitecture';

export const serviceCopy = {
  'conservative-dentistry-endodontics': {
    summary: {
      it: 'Prevenzione e trattamento delle lesioni dentali causate da carie o traumi.',
      en: 'Prevention and treatment of tooth lesions caused by caries or trauma.',
    },
    details: {
      it: 'Terapie conservative mininvasive e endodonzia con materiali biocompatibili di prima scelta.',
      en: 'Minimally invasive restorative treatments and endodontics using first-choice biocompatible materials.',
    },
  },
  'oral-surgery-implantology': {
    summary: {
      it: 'Sostituzione dei denti mancanti con radici artificiali in titanio.',
      en: 'Replacement of missing teeth with titanium artificial roots.',
    },
    details: {
      it: 'Piani chirurgici personalizzati, con opzioni di implantologia e carico immediato.',
      en: 'Personalized surgical plans, including implantology and immediate loading options.',
    },
  },
  orthodontics: {
    summary: {
      it: 'Allineamento dentale con apparecchi fissi o allineatori trasparenti.',
      en: 'Tooth alignment with fixed appliances or clear aligners.',
    },
    details: {
      it: 'Trattamenti ortodontici tradizionali e invisibili costruiti sul singolo caso clinico.',
      en: 'Traditional and invisible orthodontic treatments tailored to the individual case.',
    },
  },
  'dental-aesthetics': {
    summary: {
      it: 'Miglioramento dell aspetto del sorriso con trattamenti conservativi ed estetici.',
      en: 'Improvement of the smile appearance through conservative and aesthetic treatments.',
    },
    details: {
      it: 'Sbiancamento, faccette, corone e ricostruzioni estetiche mirate.',
      en: 'Whitening, veneers, crowns, and targeted cosmetic reconstructions.',
    },
  },
  'oral-hygiene-prevention': {
    summary: {
      it: 'Sedute professionali di pulizia e prevenzione personalizzate.',
      en: 'Professional cleaning sessions and personalized prevention plans.',
    },
    details: {
      it: 'Rimozione di placca e tartaro con cadenza consigliata di una o due volte l anno.',
      en: 'Plaque and tartar removal, typically recommended once or twice per year.',
    },
  },
} as const satisfies Record<
  ServiceKey,
  {
    summary: Record<Locale, string>;
    details: Record<Locale, string>;
  }
>;

export function getLocalizedServices(locale: Locale) {
  return Object.entries(services).map(([key, service]) => {
    const serviceKey = key as ServiceKey;

    return {
      key: serviceKey,
      label: service.labels[locale],
      slug: service.slugs[locale],
      href: getServicePath(serviceKey, locale),
      summary: serviceCopy[serviceKey].summary[locale],
      details: serviceCopy[serviceKey].details[locale],
    };
  });
}
