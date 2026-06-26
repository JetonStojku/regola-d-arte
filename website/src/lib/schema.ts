import { resolveCanonicalUrl } from '@/lib/seo';
import { sectionRoutes, type Locale, type ServiceKey } from '@/lib/siteArchitecture';
import { serviceCatalog } from '@/content/services';

export type JsonLdValue = Record<string, unknown>;

const clinicFacts = {
  name: "Regola D'arte",
  website: 'https://regola-darte.it/',
  email: 'info@regola-darte.it',
  telephone: '+393279747044',
  streetAddress: 'Via Taranto, 237',
  postalCode: '73100',
  addressLocality: 'Lecce',
  addressRegion: 'LE',
  addressCountry: 'IT',
  sameAs: [
    'https://www.instagram.com/regoladarte_studiodentistico/',
    'https://www.facebook.com/profile.php?id=61558839905177&ref=NONE_xav_ig_profile_page_web#',
  ],
  hasMap: 'https://maps.app.goo.gl/2ZjG2JtEFgHTv8vb6',
  logoPath: '/brand/regola-d-arte-logo.svg',
  imagePath: '/brand/homepage-hero.jpg',
  openingHours: [
    { dayOfWeek: 'https://schema.org/Monday', opens: '09:00', closes: '20:00' },
    { dayOfWeek: 'https://schema.org/Thursday', opens: '09:00', closes: '20:00' },
    { dayOfWeek: 'https://schema.org/Saturday', opens: '09:00', closes: '19:00' },
  ],
} as const;

function buildOpeningHoursSpecification() {
  return clinicFacts.openingHours.map((entry) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: entry.dayOfWeek,
    opens: entry.opens,
    closes: entry.closes,
  }));
}

export function buildClinicSchema(
  locale: Locale,
  description: string,
  options?: {
    site?: string | URL;
    imagePath?: string;
  },
): JsonLdValue {
  const site = options?.site;
  const imagePath = options?.imagePath ?? clinicFacts.imagePath;
  const localizedHomeUrl = resolveCanonicalUrl(sectionRoutes.home[locale], site);
  const businessId = `${resolveCanonicalUrl(sectionRoutes.home.it, site)}#local-business`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': businessId,
    name: clinicFacts.name,
    url: localizedHomeUrl,
    description,
    logo: resolveCanonicalUrl(clinicFacts.logoPath, site),
    image: resolveCanonicalUrl(imagePath, site),
    telephone: clinicFacts.telephone,
    email: clinicFacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicFacts.streetAddress,
      addressLocality: clinicFacts.addressLocality,
      addressRegion: clinicFacts.addressRegion,
      postalCode: clinicFacts.postalCode,
      addressCountry: clinicFacts.addressCountry,
    },
    sameAs: clinicFacts.sameAs,
    hasMap: clinicFacts.hasMap,
    openingHoursSpecification: buildOpeningHoursSpecification(),
  };
}

export function buildServiceSchema(
  serviceKey: ServiceKey,
  locale: Locale,
  description: string,
  options?: {
    site?: string | URL;
  },
): JsonLdValue {
  const service = serviceCatalog[serviceKey];
  const site = options?.site;
  const serviceUrl = resolveCanonicalUrl(service.paths[locale], site);
  const businessId = `${resolveCanonicalUrl(sectionRoutes.home.it, site)}#local-business`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.labels[locale],
    description,
    url: serviceUrl,
    image: resolveCanonicalUrl(service.images.hero.src, site),
    provider: {
      '@id': businessId,
    },
    mainEntityOfPage: serviceUrl,
    serviceType: service.labels[locale],
  };
}

export function serializeJsonLd(value: JsonLdValue): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function serializeJsonLdCollection(values: JsonLdValue[]): string[] {
  return values.map((value) => serializeJsonLd(value));
}
