import {
  sectionRoutes,
  type Locale,
} from '@/lib/siteArchitecture';
import { commonLabels } from '@/content/common';

export const navigationContent = {
  primary: {
    it: [
      { label: 'Home', href: sectionRoutes.home.it },
      { label: 'Chi siamo', href: sectionRoutes.about.it },
      { label: 'Servizi', href: sectionRoutes.servicesOverview.it },
      { label: 'Contatti', href: sectionRoutes.contact.it },
      { label: 'Prima / Dopo', href: sectionRoutes.beforeAfter.it },
    ],
    en: [
      { label: 'Home', href: sectionRoutes.home.en },
      { label: 'About', href: sectionRoutes.about.en },
      { label: 'Services', href: sectionRoutes.servicesOverview.en },
      { label: 'Contact', href: sectionRoutes.contact.en },
      { label: 'Before / After', href: sectionRoutes.beforeAfter.en },
    ],
  },
  footer: {
    it: [
      { label: 'Home', href: sectionRoutes.home.it },
      { label: 'Chi siamo', href: sectionRoutes.about.it },
      { label: 'Servizi', href: sectionRoutes.servicesOverview.it },
      { label: 'Contatti', href: sectionRoutes.contact.it },
      { label: 'Prima / Dopo', href: sectionRoutes.beforeAfter.it },
    ],
    en: [
      { label: 'Home', href: sectionRoutes.home.en },
      { label: 'About', href: sectionRoutes.about.en },
      { label: 'Services', href: sectionRoutes.servicesOverview.en },
      { label: 'Contact', href: sectionRoutes.contact.en },
      { label: 'Before / After', href: sectionRoutes.beforeAfter.en },
    ],
  },
  legal: {
    it: [
      { label: commonLabels.privacyPolicy.it, href: `${sectionRoutes.contact.it}#privacy-policy` },
      { label: commonLabels.cookiePolicy.it, href: `${sectionRoutes.contact.it}#cookie-policy` },
    ],
    en: [
      { label: commonLabels.privacyPolicy.en, href: `${sectionRoutes.contact.en}#privacy-policy` },
      { label: commonLabels.cookiePolicy.en, href: `${sectionRoutes.contact.en}#cookie-policy` },
    ],
  },
  languageSwitcher: {
    it: { label: 'Italiano', href: sectionRoutes.home.it },
    en: { label: 'English', href: sectionRoutes.home.en },
  },
} as const satisfies {
  primary: Record<Locale, Array<{ label: string; href: string }>>;
  footer: Record<Locale, Array<{ label: string; href: string }>>;
  legal: Record<Locale, Array<{ label: string; href: string }>>;
  languageSwitcher: Record<Locale, { label: string; href: string }>;
};
