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
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroNote: string;
  storyEyebrow: string;
  storyTitle: string;
  storyBody: string;
  storyHighlight: string;
  trustEyebrow: string;
  trustTitle: string;
  trustPoints: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  reviewsEyebrow: string;
  reviewsTitle: string;
  reviewsIntro: string;
  reviewsOfficialLabel: string;
  reviewsOfficialHref: string;
  reviewsOfficialNote: string;
  reviewsMissingNote: string;
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
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

type ContactPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  addressLabel: string;
  addressLine: string;
  fullAddress: string;
  cityLine: string;
  directionsLabel: string;
  directionsHref: string;
  directionsNote: string;
  phoneLabel: string;
  phoneHref: string;
  whatsappLabel: string;
  whatsappHref: string;
  emailLabel: string;
  emailHref: string;
  hoursLabel: string;
  openingHours: Array<{
    day: string;
    hours: string;
  }>;
  mapEyebrow: string;
  mapTitle: string;
  mapIntro: string;
  mapIframeTitle: string;
  mapEmbedUrl: string | null;
  mapListingLabel: string;
  mapListingHref: string;
  mapFallbackNote: string;
  facebookEyebrow: string;
  facebookTitle: string;
  facebookIntro: string;
  facebookPageHref: string | null;
  facebookIframeTitle: string;
  facebookListingLabel: string;
  facebookFallbackNote: string;
  facebookMissingNote: string;
  missingNote: string;
};

type TeamMemberContent = {
  name?: string;
  role: string;
  summary: string;
  photoSrc: string;
  photoAlt: string;
};

type TeamSectionContent = {
  eyebrow: string;
  title: string;
  intro: string;
  fallbackNote: string;
  members: TeamMemberContent[];
  missingNote: string;
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
    eyebrow: 'Studio dentistico premium',
    title: 'Cura clinica precisa, estetica naturale, accoglienza attenta.',
    intro:
      'Regola D\'arte unisce odontoiatria conservativa, chirurgia, implantologia, ortodonzia ed estetica in un percorso chiaro e personalizzato.',
    heroPrimaryCta: ctaCopy.primary.it,
    heroSecondaryCta: ctaCopy.secondary.it,
    heroNote: 'Accesso diretto ai servizi confermati e ai contatti dello studio.',
    storyEyebrow: 'Posizionamento',
    storyTitle: 'Un approccio che mette insieme funzione, comfort e precisione.',
    storyBody:
      'Il sito presenta un brand dentistico contemporaneo, fondato su contenuti verificabili, routing bilingue e una gerarchia informativa semplice da esplorare.',
    storyHighlight: 'Trattamenti presentati con chiarezza, senza promesse generiche o elementi decorativi superflui.',
    trustEyebrow: 'Affidabilità',
    trustTitle: 'I segnali di fiducia sono concreti, non inventati.',
    trustPoints: [
      'Percorsi bilingui con contenuti locali coerenti.',
      'Servizi e slug derivati dai dati di contenuto.',
      'Uso di immagini reali dello studio e del team.',
    ],
    servicesEyebrow: 'Servizi principali',
    servicesTitle: 'Una panoramica dei trattamenti più richiesti.',
    servicesIntro:
      'Ogni servizio ha una scheda dedicata e viene presentato con una sintesi comprensibile sia in italiano sia in inglese.',
    reviewsEyebrow: 'Recensioni',
    reviewsTitle: 'Nessuna recensione pubblica è stata confermata nei materiali disponibili.',
    reviewsIntro:
      'Per restare fedeli alle fonti, non mostriamo testimonianze inventate o widget a pagamento.',
    reviewsOfficialLabel: 'Apri la scheda ufficiale su Google Maps',
    reviewsOfficialHref: 'https://maps.app.goo.gl/2ZjG2JtEFgHTv8vb6',
    reviewsOfficialNote:
      'Il link porta alla scheda mappa ufficiale condivisa nei materiali; non è stato fornito un profilo Google Business separato.',
    reviewsMissingNote:
      'Da confermare: eventuali snippet di recensioni, nome del profilo Google Business e permessi di pubblicazione.',
    contactEyebrow: 'Contatti',
    contactTitle: 'Prenota un primo confronto o approfondisci un trattamento specifico.',
    contactIntro:
      'La call to action porta alla pagina contatti localizzata, mentre i servizi rimandano alla panoramica completa.',
    homePathLabel: 'Home',
    navigationTitle: commonLabels.primaryNavigation.it,
    routeLabel: 'Percorso italiano',
  },
  en: {
    eyebrow: 'Premium dental clinic',
    title: 'Precise clinical care, natural aesthetics, attentive hospitality.',
    intro:
      'Regola D\'arte combines restorative dentistry, oral surgery, implantology, orthodontics, and aesthetics in a clear, personalized patient journey.',
    heroPrimaryCta: ctaCopy.primary.en,
    heroSecondaryCta: ctaCopy.secondary.en,
    heroNote: 'Direct access to confirmed services and the practice contact page.',
    storyEyebrow: 'Positioning',
    storyTitle: 'An approach that brings together function, comfort, and precision.',
    storyBody:
      'The site presents a contemporary dental brand built on verifiable content, bilingual routing, and a simple information hierarchy.',
    storyHighlight: 'Treatments are presented clearly, without generic claims or unnecessary decoration.',
    trustEyebrow: 'Trust signals',
    trustTitle: 'The trust cues are concrete, not invented.',
    trustPoints: [
      'Bilingual routes with consistent local content.',
      'Services and slugs derived from content data.',
      'Real clinic and team imagery instead of stock visuals.',
    ],
    servicesEyebrow: 'Core services',
    servicesTitle: 'An overview of the most requested treatments.',
    servicesIntro:
      'Each service has its own page and is introduced with concise copy in both Italian and English.',
    reviewsEyebrow: 'Reviews',
    reviewsTitle: 'No public reviews have been confirmed in the available materials.',
    reviewsIntro:
      'To stay source-backed, we do not show invented testimonials or paid review widgets.',
    reviewsOfficialLabel: 'Open the official Google Maps listing',
    reviewsOfficialHref: 'https://maps.app.goo.gl/2ZjG2JtEFgHTv8vb6',
    reviewsOfficialNote:
      'This link points to the official map listing shared in the materials; no separate Google Business profile URL was provided.',
    reviewsMissingNote:
      'Still to confirm: any review snippets, the Google Business profile URL, and publication permissions.',
    contactEyebrow: 'Contact',
    contactTitle: 'Book an initial consultation or ask about a specific treatment.',
    contactIntro:
      'The primary CTA links to the localized contact page, and services lead to the full overview.',
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

export const contactPageContent: Record<Locale, ContactPageContent> = {
  it: {
    eyebrow: 'Contatti',
    title: 'Dove trovarci e come raggiungerci',
    intro:
      'La sede dello studio è a Lecce e i riferimenti utili sono raccolti qui in una forma chiara, bilingue e verificabile.',
    addressLabel: 'Indirizzo',
    addressLine: 'Via Taranto, 237',
    fullAddress: 'Via Taranto, 237, 73100 Lecce LE, Italy',
    cityLine: 'Lecce - LE, Italy',
    directionsLabel: 'Indicazioni stradali',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=Via%20Taranto%2C%20237%2C%2073100%20Lecce%20LE%2C%20Italy',
    directionsNote:
      'Apri le indicazioni su Google Maps per avviare subito il percorso verso lo studio.',
    phoneLabel: 'Telefono',
    phoneHref: 'tel:+393279747044',
    whatsappLabel: 'WhatsApp',
    whatsappHref: 'https://wa.me/393279747044',
    emailLabel: 'Email',
    emailHref: 'mailto:info@regola-darte.it',
    hoursLabel: 'Orari di apertura',
    openingHours: [
      { day: 'Lunedì', hours: '9:00 - 20:00' },
      { day: 'Martedì', hours: 'Chiuso' },
      { day: 'Mercoledì', hours: 'Chiuso' },
      { day: 'Giovedì', hours: '9:00 - 20:00' },
      { day: 'Venerdì', hours: 'Chiuso' },
      { day: 'Sabato', hours: '9:00 - 19:00' },
      { day: 'Domenica', hours: 'Chiuso' },
    ],
    mapEyebrow: 'Mappa',
    mapTitle: 'Apri la posizione dello studio su Google Maps',
    mapIntro:
      'L embed usa un iframe gratuito basato sull indirizzo confermato, senza chiavi API o widget a pagamento.',
    mapIframeTitle: 'Mappa Google Maps dello studio Regola D\'arte a Lecce',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Via%20Taranto%2C%20237%2C%2073100%20Lecce%20LE%2C%20Italy&output=embed',
    mapListingLabel: 'Apri la scheda su Google Maps',
    mapListingHref: 'https://maps.app.goo.gl/2ZjG2JtEFgHTv8vb6',
    mapFallbackNote:
      'La mappa non è disponibile al momento. Usa il link della scheda Google Maps per raggiungere lo studio.',
    facebookEyebrow: 'Facebook',
    facebookTitle: 'Apri la pagina Facebook ufficiale dello studio',
    facebookIntro:
      'Il plugin ufficiale gratuito di Meta mostra la pagina e la timeline pubblica, con un link di fallback per aprire il profilo direttamente.',
    facebookPageHref:
      'https://www.facebook.com/profile.php?id=61558839905177&ref=NONE_xav_ig_profile_page_web#',
    facebookIframeTitle: 'Pagina Facebook ufficiale di Regola D\'arte',
    facebookListingLabel: 'Apri la pagina Facebook',
    facebookFallbackNote:
      'L embed Facebook non Ã¨ disponibile al momento. Usa il link della pagina ufficiale per aprirla direttamente.',
    facebookMissingNote:
      'Da confermare solo se il profilo Facebook ufficiale venisse rimosso dai materiali o sostituito con un nuovo URL.',
    missingNote:
      'Da confermare in futuro: eventuali variazioni di orario, policy di emergenza o contatti fuori orario.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Find us and plan your visit',
    intro:
      'The practice is located in Lecce, and the useful contact details are collected here in a clear, bilingual, source-backed format.',
    addressLabel: 'Address',
    addressLine: 'Via Taranto, 237',
    fullAddress: 'Via Taranto, 237, 73100 Lecce LE, Italy',
    cityLine: 'Lecce - LE, Italy',
    directionsLabel: 'Get directions',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=Via%20Taranto%2C%20237%2C%2073100%20Lecce%20LE%2C%20Italy',
    directionsNote:
      'Open Google Maps directions to start the route to the clinic right away.',
    phoneLabel: 'Phone',
    phoneHref: 'tel:+393279747044',
    whatsappLabel: 'WhatsApp',
    whatsappHref: 'https://wa.me/393279747044',
    emailLabel: 'Email',
    emailHref: 'mailto:info@regola-darte.it',
    hoursLabel: 'Opening hours',
    openingHours: [
      { day: 'Monday', hours: '9:00 AM - 8:00 PM' },
      { day: 'Tuesday', hours: 'Closed' },
      { day: 'Wednesday', hours: 'Closed' },
      { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    mapEyebrow: 'Map',
    mapTitle: 'Open the clinic location on Google Maps',
    mapIntro:
      'The embed uses a free iframe based on the confirmed address, with no API key or paid widget involved.',
    mapIframeTitle: 'Google Maps location for Regola D\'arte clinic in Lecce',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Via%20Taranto%2C%20237%2C%2073100%20Lecce%20LE%2C%20Italy&output=embed',
    mapListingLabel: 'Open the Google Maps listing',
    mapListingHref: 'https://maps.app.goo.gl/2ZjG2JtEFgHTv8vb6',
    mapFallbackNote:
      'The map is currently unavailable. Use the Google Maps listing link to reach the clinic.',
    facebookEyebrow: 'Facebook',
    facebookTitle: 'Open the clinic’s official Facebook page',
    facebookIntro:
      'The free official Meta plugin shows the public page timeline, with a fallback link if the embed cannot load.',
    facebookPageHref:
      'https://www.facebook.com/profile.php?id=61558839905177&ref=NONE_xav_ig_profile_page_web#',
    facebookIframeTitle: 'Official Facebook page for Regola D\'arte',
    facebookListingLabel: 'Open the Facebook page',
    facebookFallbackNote:
      'The Facebook embed is currently unavailable. Use the official page link to open it directly.',
    facebookMissingNote:
      'Only needed if the official Facebook profile is removed from the materials or replaced with a new URL.',
    missingNote:
      'Still to confirm in the future: any opening-hour changes, emergency policy, or after-hours contact details.',
  },
};

export const teamSectionContent: Record<Locale, TeamSectionContent> = {
  it: {
    eyebrow: 'Team',
    title: 'Persone e competenze presentate solo quando confermate',
    intro:
      'Al momento possiamo pubblicare soltanto il nome del medico confermato dai materiali disponibili, senza aggiungere ruoli o credenziali non verificati.',
    fallbackNote:
      'Le immagini della sezione mostrano il contesto umano dello studio, con didascalie descrittive e non identificative quando il materiale non specifica ulteriori dettagli.',
    members: [
      {
        name: 'Dott. Genti Dylgjeri',
        role: 'Medico confermato dai materiali disponibili',
        summary:
          'Nome pubblicabile con cautela, in attesa di conferma per qualifiche, specializzazioni e testo biografico.',
        photoSrc: '/brand/about-doctor.jpg',
        photoAlt: 'Ritratto di un medico dello studio in un contesto professionale odontoiatrico',
      },
      {
        role: 'Collaborazione di studio',
        summary:
          'Ulteriori ruoli del team non sono ancora confermati nei materiali forniti e restano volutamente generici.',
        photoSrc: '/brand/about-clinic.jpg',
        photoAlt: 'Interno dello studio dentistico con atmosfera professionale e accogliente',
      },
    ],
    missingNote:
      'Da confermare: ruoli del team, qualifiche, eventuali bio pubbliche e identità aggiuntive del personale.',
  },
  en: {
    eyebrow: 'Team',
    title: 'People and expertise are shown only when confirmed',
    intro:
      'For now we can only publish the doctor name confirmed in the available materials, without adding unverified titles or credentials.',
    fallbackNote:
      'The section imagery shows the human context of the practice, with descriptive and non-identifying captions whenever the source material does not specify more detail.',
    members: [
      {
        name: 'Dott. Genti Dylgjeri',
        role: 'Doctor confirmed by the available materials',
        summary:
          'Publicly usable name, pending confirmation of qualifications, specializations, and biography copy.',
        photoSrc: '/brand/about-doctor.jpg',
        photoAlt: 'Portrait of a clinic doctor in a professional dental setting',
      },
      {
        role: 'Practice collaboration',
        summary:
          'Additional team roles are not yet confirmed in the provided materials and remain intentionally generic.',
        photoSrc: '/brand/about-clinic.jpg',
        photoAlt: 'Interior view of the dental clinic with a welcoming professional atmosphere',
      },
    ],
    missingNote:
      'Still to confirm: team roles, qualifications, public bios, and any additional staff identities.',
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
