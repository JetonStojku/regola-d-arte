import { ctaCopy } from '@/content/ctas';
import {
  getServicePath,
  services,
  type Locale,
  type ServiceKey,
} from '@/lib/siteArchitecture';

export type SeoMetadata = {
  title: string;
  description: string;
};

export type LocalizedString = Record<Locale, string>;

export type ServiceSection = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
  bullets?: Record<Locale, string[]>;
};

export type ServiceFaq = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type ServiceImageReference = {
  src: string;
  alt: LocalizedString;
};

export type ServiceLocalizedContent = {
  summary: string;
  details: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  ctas: {
    primary: string;
    secondary: string;
    related: string;
  };
  relatedServices: ServiceKey[];
};

export type ServiceCatalogEntry = {
  key: ServiceKey;
  labels: LocalizedString;
  slugs: LocalizedString;
  paths: LocalizedString;
  metadata: Record<Locale, SeoMetadata>;
  images: {
    hero: ServiceImageReference;
  };
  content: Record<Locale, ServiceLocalizedContent>;
};

export type ServiceOverviewCard = {
  key: ServiceKey;
  label: string;
  slug: string;
  href: string;
  summary: string;
  details: string;
  metadata: SeoMetadata;
  image: ServiceImageReference;
  relatedServices: ServiceKey[];
};

const serviceCatalogEntries = {
  'conservative-dentistry-endodontics': {
    key: 'conservative-dentistry-endodontics',
    labels: services['conservative-dentistry-endodontics'].labels,
    slugs: services['conservative-dentistry-endodontics'].slugs,
    paths: services['conservative-dentistry-endodontics'].paths,
    metadata: {
      it: {
        title: "Odontoiatria conservativa ed endodonzia | Regola D'arte",
        description:
          'Prevenzione e trattamento delle lesioni dentali causate da carie o trauma, con terapie conservative mininvasive e endodonzia con materiali biocompatibili.',
      },
      en: {
        title: "Conservative dentistry and endodontics | Regola D'arte",
        description:
          'Prevention and treatment of tooth lesions caused by caries or trauma, with minimally invasive restorative care and endodontics using biocompatible materials.',
      },
    },
    images: {
      hero: {
        src: '/services-photos/Odontoiatria conservativa ed endodonzia.jpg',
        alt: {
          it: 'Immagine del servizio odontoiatria conservativa ed endodonzia',
          en: 'Image for conservative dentistry and endodontics',
        },
      },
    },
    content: {
      it: {
        summary: 'Prevenzione e trattamento delle lesioni dentali causate da carie o traumi.',
        details:
          'Terapie conservative mininvasive, otturazioni e endodonzia con materiali biocompatibili di prima scelta.',
        sections: [
          {
            eyebrow: {
              it: 'Prevenzione',
              en: 'Prevention',
            },
            title: {
              it: 'Lesioni da carie o trauma',
              en: 'Lesions caused by caries or trauma',
            },
            body: {
              it:
                'L odontoiatria conservativa ed endodonzia si occupano di prevenire e trattare i danni che colpiscono il dente, con l obiettivo di preservarne quanto piu possibile la struttura naturale.',
              en:
                'Conservative dentistry and endodontics focus on preventing and treating damage to the tooth, with the goal of preserving as much natural structure as possible.',
            },
          },
          {
            eyebrow: {
              it: 'Conservativa mininvasiva',
              en: 'Minimally invasive restorative care',
            },
            title: {
              it: 'Otturazioni e ricostruzioni del dente',
              en: 'Fillings and tooth reconstruction',
            },
            body: {
              it:
                'Il trattamento conservativo mira a rimuovere il tessuto danneggiato e a ricostruire la cavita con materiali restaurativi selezionati in base al caso clinico.',
              en:
                'Restorative care aims to remove damaged tissue and rebuild the cavity with restorative materials selected according to the clinical case.',
            },
            bullets: {
              it: [
                'Minima invasivita quando il quadro clinico lo consente.',
                'Otturazioni con materiali restaurativi come amalgama e compositi.',
                'Ricostruzione del dente dal punto di vista morfologico, estetico e funzionale.',
              ],
              en: [
                'Minimal invasiveness when the clinical picture allows it.',
                'Fillings with restorative materials such as amalgam and composites.',
                'Rebuild the tooth morphologically, aesthetically, and functionally.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Endodonzia',
              en: 'Endodontics',
            },
            title: {
              it: 'Quando la carie coinvolge la polpa',
              en: 'When caries reaches the pulp',
            },
            body: {
              it:
                'Se la malattia cariosa coinvolge anche la polpa dentaria, alla rimozione del tessuto duro si associa la terapia canalare, eseguita con materiali biocompatibili di prima scelta.',
              en:
                'If caries also involves the dental pulp, the removal of the hard tissue is combined with root canal treatment, performed with first-choice biocompatible materials.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: "Quando serve l endodonzia?",
              en: 'When is endodontic treatment needed?',
            },
            answer: {
              it:
                'Serve quando la carie o un trauma coinvolgono la polpa del dente e non basta un semplice trattamento conservativo.',
              en:
                'It is needed when caries or trauma involve the tooth pulp and a simple restorative treatment is no longer sufficient.',
            },
          },
          {
            question: {
              it: 'Qual e l obiettivo del trattamento conservativo?',
              en: 'What is the goal of restorative treatment?',
            },
            answer: {
              it:
                'L obiettivo e ripristinare il dente dal punto di vista morfologico, estetico e funzionale, preservando il piu possibile il tessuto sano.',
              en:
                'The goal is to restore the tooth morphologically, aesthetically, and functionally while preserving as much healthy tissue as possible.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.it,
          secondary: ctaCopy.secondary.it,
          related: 'Servizi correlati',
        },
        relatedServices: ['oral-hygiene-prevention', 'dental-aesthetics'],
      },
      en: {
        summary: 'Prevention and treatment of tooth lesions caused by caries or trauma.',
        details:
          'Minimally invasive restorative care, fillings, and endodontics using first-choice biocompatible materials.',
        sections: [
          {
            eyebrow: {
              it: 'Prevention',
              en: 'Prevention',
            },
            title: {
              it: 'Lesioni da carie o trauma',
              en: 'Lesions caused by caries or trauma',
            },
            body: {
              it:
                'L odontoiatria conservativa ed endodonzia si occupano di prevenire e trattare i danni che colpiscono il dente, con l obiettivo di preservarne quanto piu possibile la struttura naturale.',
              en:
                'Conservative dentistry and endodontics focus on preventing and treating damage to the tooth, with the goal of preserving as much natural structure as possible.',
            },
          },
          {
            eyebrow: {
              it: 'Conservativa mininvasiva',
              en: 'Minimally invasive restorative care',
            },
            title: {
              it: 'Fillings and tooth reconstruction',
              en: 'Fillings and tooth reconstruction',
            },
            body: {
              it:
                'Il trattamento conservativo mira a rimuovere il tessuto danneggiato e a ricostruire la cavita con materiali restaurativi selezionati in base al caso clinico.',
              en:
                'Restorative care aims to remove damaged tissue and rebuild the cavity with restorative materials selected according to the clinical case.',
            },
            bullets: {
              it: [
                'Minima invasivita quando il quadro clinico lo consente.',
                'Otturazioni con materiali restaurativi come amalgama e compositi.',
                'Ricostruzione del dente dal punto di vista morfologico, estetico e funzionale.',
              ],
              en: [
                'Minimal invasiveness when the clinical picture allows it.',
                'Fillings with restorative materials such as amalgam and composites.',
                'Rebuild the tooth morphologically, aesthetically, and functionally.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Endodonzia',
              en: 'Endodontics',
            },
            title: {
              it: 'Quando la carie coinvolge la polpa',
              en: 'When caries reaches the pulp',
            },
            body: {
              it:
                'Se la malattia cariosa coinvolge anche la polpa dentaria, alla rimozione del tessuto duro si associa la terapia canalare, eseguita con materiali biocompatibili di prima scelta.',
              en:
                'If caries also involves the dental pulp, the removal of the hard tissue is combined with root canal treatment, performed with first-choice biocompatible materials.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: "Quando serve l endodonzia?",
              en: 'When is endodontic treatment needed?',
            },
            answer: {
              it:
                'Serve quando la carie o un trauma coinvolgono la polpa del dente e non basta un semplice trattamento conservativo.',
              en:
                'It is needed when caries or trauma involve the tooth pulp and a simple restorative treatment is no longer sufficient.',
            },
          },
          {
            question: {
              it: 'Qual e l obiettivo del trattamento conservativo?',
              en: 'What is the goal of restorative treatment?',
            },
            answer: {
              it:
                'L obiettivo e ripristinare il dente dal punto di vista morfologico, estetico e funzionale, preservando il piu possibile il tessuto sano.',
              en:
                'The goal is to restore the tooth morphologically, aesthetically, and functionally while preserving as much healthy tissue as possible.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.en,
          secondary: ctaCopy.secondary.en,
          related: 'Related services',
        },
        relatedServices: ['oral-hygiene-prevention', 'dental-aesthetics'],
      },
    },
  },
  'oral-surgery-implantology': {
    key: 'oral-surgery-implantology',
    labels: services['oral-surgery-implantology'].labels,
    slugs: services['oral-surgery-implantology'].slugs,
    paths: services['oral-surgery-implantology'].paths,
    metadata: {
      it: {
        title: "Chirurgia orale e implantologia | Regola D'arte",
        description:
          'Sostituzione dei denti mancanti con radici artificiali in titanio, piani chirurgici personalizzati, carico immediato e supporto all ansia del paziente.',
      },
      en: {
        title: "Oral surgery and implantology | Regola D'arte",
        description:
          'Replacement of missing teeth with titanium artificial roots, personalized surgical planning, immediate loading, and support for anxious patients.',
      },
    },
    images: {
      hero: {
        src: '/services-photos/Chirurgia orale e implantologia.jpg',
        alt: {
          it: 'Immagine del servizio chirurgia orale e implantologia',
          en: 'Image for oral surgery and implantology',
        },
      },
    },
    content: {
      it: {
        summary: 'Sostituzione dei denti mancanti con radici artificiali in titanio.',
        details: 'Piani chirurgici personalizzati, con opzioni di implantologia e carico immediato.',
        sections: [
          {
            eyebrow: {
              it: 'Implantologia',
              en: 'Implantology',
            },
            title: {
              it: 'Radici artificiali in titanio e osteointegrazione',
              en: 'Titanium artificial roots and osseointegration',
            },
            body: {
              it:
                'L implantologia dentale consente di sostituire uno o piu elementi dentari persi con radici artificiali in titanio che, grazie all osteointegrazione, permettono l applicazione di una protesi fissa.',
              en:
                'Dental implantology replaces one or more missing teeth with titanium artificial roots that, through osseointegration, can support a fixed prosthesis.',
            },
          },
          {
            eyebrow: {
              it: 'Comfort e sicurezza',
              en: 'Comfort and safety',
            },
            title: {
              it: 'Anestesia locale e supporto per il paziente ansioso',
              en: 'Local anesthesia and support for anxious patients',
            },
            body: {
              it:
                'Al momento dell inserimento dell impianto viene utilizzata l anestesia locale per ridurre il disagio; nei pazienti particolarmente ansiosi possono essere somministrati ansiolitici e, dopo l intervento, vengono prescritti i farmaci necessari per il controllo del dolore post-operatorio.',
              en:
                'Local anesthesia is used during implant placement to reduce discomfort; in particularly anxious patients, anxiolytics may be prescribed and, after surgery, the necessary medications are provided to manage postoperative pain.',
            },
          },
          {
            eyebrow: {
              it: 'Carico immediato',
              en: 'Immediate loading',
            },
            title: {
              it: 'Protesi provvisoria entro 36 ore',
              en: 'Temporary prosthesis within 36 hours',
            },
            body: {
              it:
                'L implantologia a carico immediato prevede l inserimento contemporaneo degli impianti e della corona provvisoria entro 36 ore, mentre la protesi definitiva viene posizionata dopo circa 3-4 mesi, quando i tessuti hanno completato la guarigione.',
              en:
                'Immediate-loading implantology places the implants and the temporary crown together, with the provisional prosthesis delivered within 36 hours and the definitive prosthesis positioned after about 3 to 4 months, once healing is complete.',
            },
            bullets: {
              it: [
                'Tecnica spesso associata all All on Four.',
                'Indicata per la riabilitazione di pazienti edentuli in una o entrambe le arcate.',
                'Il piano chirurgico va sempre valutato sul singolo caso.',
              ],
              en: [
                'Technique often associated with All-on-Four.',
                'Used to rehabilitate edentulous patients in one or both arches.',
                'The surgical plan must always be evaluated case by case.',
              ],
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'L implantologia e dolorosa?',
              en: 'Is implantology painful?',
            },
            answer: {
              it:
                'Il trattamento viene eseguito con anestesia locale per ridurre il dolore e, se necessario, con supporto farmacologico prima o dopo l intervento. Il livello di comfort puo variare da caso a caso.',
              en:
                'The treatment is performed with local anesthesia to reduce pain and, when needed, with medication support before or after surgery. Comfort can vary from case to case.',
            },
          },
          {
            question: {
              it: 'Che cosa significa carico immediato?',
              en: 'What does immediate loading mean?',
            },
            answer: {
              it:
                'Significa che la protesi provvisoria viene applicata entro 36 ore dall inserimento degli impianti, mentre la protesi definitiva arriva dopo la guarigione dei tessuti.',
              en:
                'It means the temporary prosthesis is applied within 36 hours after implant placement, while the final prosthesis is delivered after the tissues have healed.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.it,
          secondary: ctaCopy.secondary.it,
          related: 'Servizi correlati',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'oral-hygiene-prevention'],
      },
      en: {
        summary: 'Replacement of missing teeth with titanium artificial roots.',
        details: 'Personalized surgical plans, including implantology and immediate loading options.',
        sections: [
          {
            eyebrow: {
              it: 'Implantology',
              en: 'Implantology',
            },
            title: {
              it: 'Titanium artificial roots and osseointegration',
              en: 'Titanium artificial roots and osseointegration',
            },
            body: {
              it:
                'L implantologia dentale consente di sostituire uno o piu elementi dentari persi con radici artificiali in titanio che, grazie all osteointegrazione, permettono l applicazione di una protesi fissa.',
              en:
                'Dental implantology replaces one or more missing teeth with titanium artificial roots that, through osseointegration, can support a fixed prosthesis.',
            },
          },
          {
            eyebrow: {
              it: 'Comfort and safety',
              en: 'Comfort and safety',
            },
            title: {
              it: 'Local anesthesia and support for anxious patients',
              en: 'Local anesthesia and support for anxious patients',
            },
            body: {
              it:
                'Al momento dell inserimento dell impianto viene utilizzata l anestesia locale per ridurre il disagio; nei pazienti particolarmente ansiosi possono essere somministrati ansiolitici e, dopo l intervento, vengono prescritti i farmaci necessari per il controllo del dolore post-operatorio.',
              en:
                'Local anesthesia is used during implant placement to reduce discomfort; in particularly anxious patients, anxiolytics may be prescribed and, after surgery, the necessary medications are provided to manage postoperative pain.',
            },
          },
          {
            eyebrow: {
              it: 'Immediate loading',
              en: 'Immediate loading',
            },
            title: {
              it: 'Temporary prosthesis within 36 hours',
              en: 'Temporary prosthesis within 36 hours',
            },
            body: {
              it:
                'L implantologia a carico immediato prevede l inserimento contemporaneo degli impianti e della corona provvisoria entro 36 ore, mentre la protesi definitiva viene posizionata dopo circa 3-4 mesi, quando i tessuti hanno completato la guarigione.',
              en:
                'Immediate-loading implantology places the implants and the temporary crown together, with the provisional prosthesis delivered within 36 hours and the definitive prosthesis positioned after about 3 to 4 months, once healing is complete.',
            },
            bullets: {
              it: [
                'Tecnica spesso associata all All on Four.',
                'Indicata per la riabilitazione di pazienti edentuli in una o entrambe le arcate.',
                'Il piano chirurgico va sempre valutato sul singolo caso.',
              ],
              en: [
                'Often associated with the All-on-Four technique, which uses four strategically placed implants.',
                'Can be used to rehabilitate edentulous patients in one or both arches.',
                'The surgical plan must always be evaluated case by case.',
              ],
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'L implantologia e dolorosa?',
              en: 'Is implantology painful?',
            },
            answer: {
              it:
                'Il trattamento viene eseguito con anestesia locale per ridurre il dolore e, se necessario, con supporto farmacologico prima o dopo l intervento. Il livello di comfort puo variare da caso a caso.',
              en:
                'The treatment is performed with local anesthesia to reduce pain and, when needed, with medication support before or after surgery. Comfort can vary from case to case.',
            },
          },
          {
            question: {
              it: 'Che cosa significa carico immediato?',
              en: 'What does immediate loading mean?',
            },
            answer: {
              it:
                'Significa che la protesi provvisoria viene applicata entro 36 ore dall inserimento degli impianti, mentre la protesi definitiva arriva dopo la guarigione dei tessuti.',
              en:
                'It means the temporary prosthesis is applied within 36 hours after implant placement, while the final prosthesis is delivered after the tissues have healed.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.en,
          secondary: ctaCopy.secondary.en,
          related: 'Related services',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'oral-hygiene-prevention'],
      },
    },
  },
  orthodontics: {
    key: 'orthodontics',
    labels: services.orthodontics.labels,
    slugs: services.orthodontics.slugs,
    paths: services.orthodontics.paths,
    metadata: {
      it: {
        title: "Ortodonzia | Regola D'arte",
        description:
          'Allineamento dentale con apparecchi fissi o allineatori trasparenti, valutando vantaggi, limiti e complessita del singolo caso clinico.',
      },
      en: {
        title: "Orthodontics | Regola D'arte",
        description:
          'Tooth alignment with fixed appliances or clear aligners, considering benefits, limitations, and the complexity of each individual case.',
      },
    },
    images: {
      hero: {
        src: '/services-photos/ortodonzia-service.jpg',
        alt: {
          it: 'Immagine del servizio ortodonzia',
          en: 'Image for orthodontics',
        },
      },
    },
    content: {
      it: {
        summary: 'Allineamento dentale con apparecchi fissi o allineatori trasparenti.',
        details:
          'Trattamenti ortodontici tradizionali e invisibili costruiti sul singolo caso clinico.',
        sections: [
          {
            eyebrow: {
              it: 'Ortodonzia tradizionale',
              en: 'Traditional orthodontics',
            },
            title: {
              it: 'Apparecchio fisso con brackets e fili metallici',
              en: 'Fixed appliance with brackets and metal wires',
            },
            body: {
              it:
                'L apparecchio fisso usa brackets e fili metallici per esercitare forze che spostano i denti; e spesso piu efficace nei movimenti ortodontici complessi e nelle malocclusioni importanti.',
              en:
                'Fixed orthodontics uses brackets and metal wires to apply forces that move the teeth; it is often more effective for complex movements and significant malocclusions.',
            },
            bullets: {
              it: [
                'Puo essere piu efficace nei casi complessi.',
                'Rende i movimenti dentali piu controllabili.',
                'Richiede visite di regolazione piu frequenti.',
              ],
              en: [
                'May be more effective in complex cases.',
                'Makes tooth movements more controllable.',
                'Usually requires more frequent adjustment visits.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Ortodonzia invisibile',
              en: 'Invisible orthodontics',
            },
            title: {
              it: 'Allineatori trasparenti',
              en: 'Clear aligners',
            },
            body: {
              it:
                'Gli allineatori trasparenti sono mascherine in plastica discrete, comode e facili da pulire; offrono maggiore liberta alimentare, ma possono non essere efficaci in tutti i casi complessi.',
              en:
                'Clear aligners are discreet plastic trays that are comfortable and easy to clean; they offer greater dietary freedom, but they may not be effective for every complex case.',
            },
            bullets: {
              it: [
                'Più discreti dell apparecchio fisso.',
                'Facili da pulire e da gestire nella routine quotidiana.',
                'Non sempre la soluzione migliore nei casi complessi.',
              ],
              en: [
                'More discreet than fixed braces.',
                'Easy to clean and manage in daily routines.',
                'Not always the best solution for complex cases.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Scelta del trattamento',
              en: 'Choosing the treatment',
            },
            title: {
              it: 'La soluzione dipende dal caso clinico',
              en: 'The solution depends on the clinical case',
            },
            body: {
              it:
                'Ortodonzia tradizionale e invisibile sono entrambe opzioni valide: la scelta va costruita sul singolo paziente, bilanciando complessita del movimento, estetica e comfort.',
              en:
                'Traditional and invisible orthodontics are both valid options: the choice should be built around the individual patient, balancing movement complexity, aesthetics, and comfort.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Un tipo di ortodonzia e sempre migliore dell altro?',
              en: 'Is one orthodontic option always better than the other?',
            },
            answer: {
              it:
                'No. La scelta dipende dal caso clinico, dalla complessita dei movimenti e dalle esigenze del paziente.',
              en:
                'No. The choice depends on the clinical case, movement complexity, and the patient needs.',
            },
          },
          {
            question: {
              it: 'Gli allineatori sono meno visibili?',
              en: 'Are clear aligners less visible?',
            },
            answer: {
              it:
                'Sì, sono pensati per essere piu discreti rispetto all apparecchio fisso e risultano spesso piu facili da integrare nella vita quotidiana.',
              en:
                'Yes, they are designed to be more discreet than fixed braces and are often easier to fit into daily life.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.it,
          secondary: ctaCopy.secondary.it,
          related: 'Servizi correlati',
        },
        relatedServices: ['dental-aesthetics', 'oral-hygiene-prevention'],
      },
      en: {
        summary: 'Tooth alignment with fixed appliances or clear aligners.',
        details:
          'Traditional and invisible orthodontic treatments tailored to the individual case.',
        sections: [
          {
            eyebrow: {
              it: 'Ortodonzia tradizionale',
              en: 'Traditional orthodontics',
            },
            title: {
              it: 'Apparecchio fisso con brackets e fili metallici',
              en: 'Fixed appliance with brackets and metal wires',
            },
            body: {
              it:
                'L apparecchio fisso usa brackets e fili metallici per esercitare forze che spostano i denti; e spesso piu efficace nei movimenti ortodontici complessi e nelle malocclusioni importanti.',
              en:
                'Fixed orthodontics uses brackets and metal wires to apply forces that move the teeth; it is often more effective for complex movements and significant malocclusions.',
            },
            bullets: {
              it: [
                'Puo essere piu efficace nei casi complessi.',
                'Rende i movimenti dentali piu controllabili.',
                'Richiede visite di regolazione piu frequenti.',
              ],
              en: [
                'May be more effective in complex cases.',
                'Makes tooth movements more controllable.',
                'Usually requires more frequent adjustment visits.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Ortodonzia invisibile',
              en: 'Invisible orthodontics',
            },
            title: {
              it: 'Allineatori trasparenti',
              en: 'Clear aligners',
            },
            body: {
              it:
                'Gli allineatori trasparenti sono mascherine in plastica discrete, comode e facili da pulire; offrono maggiore liberta alimentare, ma possono non essere efficaci in tutti i casi complessi.',
              en:
                'Clear aligners are discreet plastic trays that are comfortable and easy to clean; they offer greater dietary freedom, but they may not be effective for every complex case.',
            },
            bullets: {
              it: [
                'Più discreti dell apparecchio fisso.',
                'Facili da pulire e da gestire nella routine quotidiana.',
                'Non sempre la soluzione migliore nei casi complessi.',
              ],
              en: [
                'More discreet than fixed braces.',
                'Easy to clean and manage in daily routines.',
                'Not always the best solution for complex cases.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Scelta del trattamento',
              en: 'Choosing the treatment',
            },
            title: {
              it: 'La soluzione dipende dal caso clinico',
              en: 'The solution depends on the clinical case',
            },
            body: {
              it:
                'Ortodonzia tradizionale e invisibile sono entrambe opzioni valide: la scelta va costruita sul singolo paziente, bilanciando complessita del movimento, estetica e comfort.',
              en:
                'Traditional and invisible orthodontics are both valid options: the choice should be built around the individual patient, balancing movement complexity, aesthetics, and comfort.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Un tipo di ortodonzia e sempre migliore dell altro?',
              en: 'Is one orthodontic option always better than the other?',
            },
            answer: {
              it:
                'No. La scelta dipende dal caso clinico, dalla complessita dei movimenti e dalle esigenze del paziente.',
              en:
                'No. The choice depends on the clinical case, movement complexity, and the patient needs.',
            },
          },
          {
            question: {
              it: 'Gli allineatori sono meno visibili?',
              en: 'Are clear aligners less visible?',
            },
            answer: {
              it:
                'Sì, sono pensati per essere piu discreti rispetto all apparecchio fisso e risultano spesso piu facili da integrare nella vita quotidiana.',
              en:
                'Yes, they are designed to be more discreet than fixed braces and are often easier to fit into daily life.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.en,
          secondary: ctaCopy.secondary.en,
          related: 'Related services',
        },
        relatedServices: ['dental-aesthetics', 'oral-hygiene-prevention'],
      },
    },
  },
  'dental-aesthetics': {
    key: 'dental-aesthetics',
    labels: services['dental-aesthetics'].labels,
    slugs: services['dental-aesthetics'].slugs,
    paths: services['dental-aesthetics'].paths,
    metadata: {
      it: {
        title: "Estetica dentale | Regola D'arte",
        description:
          'Miglioramento dell aspetto del sorriso con trattamenti conservativi ed estetici, incluse faccette, corone e ricostruzioni mirate.',
      },
      en: {
        title: "Dental aesthetics | Regola D'arte",
        description:
          'Improving smile appearance through conservative and aesthetic treatments, including veneers, crowns, and targeted reconstructions.',
      },
    },
    images: {
      hero: {
        src: '/services-photos/Estetica dentale.jpg',
        alt: {
          it: 'Immagine del servizio estetica dentale',
          en: 'Image for dental aesthetics',
        },
      },
    },
    content: {
      it: {
        summary: 'Miglioramento dell aspetto del sorriso con trattamenti conservativi ed estetici.',
        details: 'Sbiancamento, faccette, corone e ricostruzioni estetiche mirate.',
        sections: [
          {
            eyebrow: {
              it: 'Aspetto del sorriso',
              en: 'Smile appearance',
            },
            title: {
              it: 'Denti, gengive e armonia complessiva',
              en: 'Teeth, gums, and overall harmony',
            },
            body: {
              it:
                'L estetica dentale mira a migliorare l aspetto dei denti, delle gengive e del sorriso, correggendo imperfezioni di colore, forma o simmetria quando il caso clinico lo consente.',
              en:
                'Dental aesthetics aims to improve the appearance of the teeth, gums, and smile by correcting imperfections in color, shape, or symmetry when the clinical case allows it.',
            },
            bullets: {
              it: [
                'Correzione di denti storti, macchiati, ingialliti o danneggiati.',
                'Ricostruzioni con materiali compositi o ceramici.',
                'Obiettivo di un sorriso piu sano, bello e armonioso.',
              ],
              en: [
                'Correction of crooked, stained, yellowed, or damaged teeth.',
                'Reconstruction with composite or ceramic materials.',
                'Goal of a smile that looks healthier, more balanced, and harmonious.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Faccette',
              en: 'Veneers',
            },
            title: {
              it: 'Rivestimento sottile sulla parte anteriore del dente',
              en: 'Thin front-surface covering',
            },
            body: {
              it:
                'Le faccette dentali sono sottili rivestimenti applicati sul lato anteriore del dente per correggere piccoli difetti di forma e colore; possono essere realizzate in ceramica, resina o composito e richiedono in genere una preparazione minima.',
              en:
                'Dental veneers are thin coverings placed on the front surface of the tooth to correct small defects in shape and color; they can be made of ceramic, resin, or composite and usually require minimal preparation.',
            },
          },
          {
            eyebrow: {
              it: 'Corone',
              en: 'Crowns',
            },
            title: {
              it: 'Copertura completa del dente',
              en: 'Full-tooth coverage',
            },
            body: {
              it:
                'Le corone dentali avvolgono l intero dente e sono usate per ripristinare forma, funzione ed estetica, spesso con una preparazione piu estesa rispetto alle faccette.',
              en:
                'Dental crowns cover the entire tooth and are used to restore shape, function, and aesthetics, often requiring a more extensive preparation than veneers.',
            },
            bullets: {
              it: [
                'Più resistenti e durevoli delle faccette.',
                'Utili per denti molto danneggiati o trattati endodonticamente.',
                'La scelta dipende dal caso clinico e dalla quantità di tessuto residuo.',
              ],
              en: [
                'More resistant and durable than veneers.',
                'Useful for heavily damaged or endodontically treated teeth.',
                'The choice depends on the clinical case and remaining tooth structure.',
              ],
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Le faccette sono sempre la soluzione meno invasiva?',
              en: 'Are veneers always the least invasive solution?',
            },
            answer: {
              it:
                'In genere richiedono una preparazione minima, ma la loro indicazione va valutata caso per caso; non sono la scelta giusta per ogni situazione.',
              en:
                'They usually require minimal preparation, but the indication must be evaluated case by case; they are not the right choice for every situation.',
            },
          },
          {
            question: {
              it: 'Le corone servono solo per estetica?',
              en: 'Are crowns only for aesthetics?',
            },
            answer: {
              it:
                'No. Le corone servono a ripristinare anche funzione e protezione del dente, oltre all aspetto estetico.',
              en:
                'No. Crowns are also used to restore function and protect the tooth, in addition to improving appearance.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.it,
          secondary: ctaCopy.secondary.it,
          related: 'Servizi correlati',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'orthodontics'],
      },
      en: {
        summary: 'Improvement of the smile appearance through conservative and aesthetic treatments.',
        details: 'Whitening, veneers, crowns, and targeted cosmetic reconstructions.',
        sections: [
          {
            eyebrow: {
              it: 'Aspetto del sorriso',
              en: 'Smile appearance',
            },
            title: {
              it: 'Denti, gengive e armonia complessiva',
              en: 'Teeth, gums, and overall harmony',
            },
            body: {
              it:
                'L estetica dentale mira a migliorare l aspetto dei denti, delle gengive e del sorriso, correggendo imperfezioni di colore, forma o simmetria quando il caso clinico lo consente.',
              en:
                'Dental aesthetics aims to improve the appearance of the teeth, gums, and smile by correcting imperfections in color, shape, or symmetry when the clinical case allows it.',
            },
            bullets: {
              it: [
                'Correzione di denti storti, macchiati, ingialliti o danneggiati.',
                'Ricostruzioni con materiali compositi o ceramici.',
                'Obiettivo di un sorriso piu sano, bello e armonioso.',
              ],
              en: [
                'Correction of crooked, stained, yellowed, or damaged teeth.',
                'Reconstruction with composite or ceramic materials.',
                'Goal of a smile that looks healthier, more balanced, and harmonious.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Faccette',
              en: 'Veneers',
            },
            title: {
              it: 'Rivestimento sottile sulla parte anteriore del dente',
              en: 'Thin front-surface covering',
            },
            body: {
              it:
                'Le faccette dentali sono sottili rivestimenti applicati sul lato anteriore del dente per correggere piccoli difetti di forma e colore; possono essere realizzate in ceramica, resina o composito e richiedono in genere una preparazione minima.',
              en:
                'Dental veneers are thin coverings placed on the front surface of the tooth to correct small defects in shape and color; they can be made of ceramic, resin, or composite and usually require minimal preparation.',
            },
          },
          {
            eyebrow: {
              it: 'Corone',
              en: 'Crowns',
            },
            title: {
              it: 'Copertura completa del dente',
              en: 'Full-tooth coverage',
            },
            body: {
              it:
                'Le corone dentali avvolgono l intero dente e sono usate per ripristinare forma, funzione ed estetica, spesso con una preparazione piu estesa rispetto alle faccette.',
              en:
                'Dental crowns cover the entire tooth and are used to restore shape, function, and aesthetics, often requiring a more extensive preparation than veneers.',
            },
            bullets: {
              it: [
                'Più resistenti e durevoli delle faccette.',
                'Utili per denti molto danneggiati o trattati endodonticamente.',
                'La scelta dipende dal caso clinico e dalla quantità di tessuto residuo.',
              ],
              en: [
                'More resistant and durable than veneers.',
                'Useful for heavily damaged or endodontically treated teeth.',
                'The choice depends on the clinical case and remaining tooth structure.',
              ],
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Le faccette sono sempre la soluzione meno invasiva?',
              en: 'Are veneers always the least invasive solution?',
            },
            answer: {
              it:
                'In genere richiedono una preparazione minima, ma la loro indicazione va valutata caso per caso; non sono la scelta giusta per ogni situazione.',
              en:
                'They usually require minimal preparation, but the indication must be evaluated case by case; they are not the right choice for every situation.',
            },
          },
          {
            question: {
              it: 'Le corone servono solo per estetica?',
              en: 'Are crowns only for aesthetics?',
            },
            answer: {
              it:
                'No. Le corone servono a ripristinare anche funzione e protezione del dente, oltre all aspetto estetico.',
              en:
                'No. Crowns are also used to restore function and protect the tooth, in addition to improving appearance.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.en,
          secondary: ctaCopy.secondary.en,
          related: 'Related services',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'orthodontics'],
      },
    },
  },
  'oral-hygiene-prevention': {
    key: 'oral-hygiene-prevention',
    labels: services['oral-hygiene-prevention'].labels,
    slugs: services['oral-hygiene-prevention'].slugs,
    paths: services['oral-hygiene-prevention'].paths,
    metadata: {
      it: {
        title: "Igiene orale e prevenzione | Regola D'arte",
        description:
          'Sedute professionali di pulizia e programmi di prevenzione personalizzati per ridurre placca, tartaro e rischi di carie o gengivite.',
      },
      en: {
        title: "Oral hygiene and prevention | Regola D'arte",
        description:
          'Professional cleaning sessions and personalized prevention programs to reduce plaque, tartar, and the risk of caries or gingivitis.',
      },
    },
    images: {
      hero: {
        src: '/services-photos/Igiene orale e prevenzione.jpg',
        alt: {
          it: 'Immagine del servizio igiene orale e prevenzione',
          en: 'Image for oral hygiene and prevention',
        },
      },
    },
    content: {
      it: {
        summary: 'Sedute professionali di pulizia e prevenzione personalizzate.',
        details:
          'Rimozione di placca e tartaro con cadenza consigliata di una o due volte l anno.',
        sections: [
          {
            eyebrow: {
              it: 'Pulizia professionale',
              en: 'Professional cleaning',
            },
            title: {
              it: 'Placca, tartaro e salute gengivale',
              en: 'Plaque, tartar, and gum health',
            },
            body: {
              it:
                'L igiene orale professionale rimuove placca e tartaro che non possono essere eliminati con l igiene domiciliare quotidiana, contribuendo a prevenire carie, gengiviti e altre infiammazioni gengivali.',
              en:
                'Professional oral hygiene removes plaque and tartar that cannot be eliminated through daily home care, helping prevent caries, gingivitis, and other gum inflammation.',
            },
            bullets: {
              it: [
                'Rimozione di depositi sopragengivali e sottogengivali.',
                'Supporto alla prevenzione di carie e gengiviti.',
                'Focus sulla salute gengivale nel tempo.',
              ],
              en: [
                'Removal of supra- and subgingival deposits.',
                'Support for preventing caries and gingivitis.',
                'Focus on long-term gum health.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Tecnica',
              en: 'Technique',
            },
            title: {
              it: 'Manuale, ultrasuoni o combinazione dei due',
              en: 'Manual, ultrasonic, or a combination',
            },
            body: {
              it:
                'La pulizia puo essere effettuata manualmente o con strumento a ultrasuoni, oppure con una combinazione dei due metodi; il trattamento non danneggia smalto dentale e gengive quando eseguito correttamente.',
              en:
                'Cleaning can be performed manually or with an ultrasonic instrument, or with a combination of both methods; when done correctly, the treatment does not damage tooth enamel or gums.',
            },
          },
          {
            eyebrow: {
              it: 'Prevenzione personalizzata',
              en: 'Personalized prevention',
            },
            title: {
              it: 'Una o due sedute all anno, secondo il consiglio del dentista',
              en: 'One or two visits per year, depending on the dentist advice',
            },
            body: {
              it:
                'La cadenza consigliata dipende dallo stato della bocca e dal parere del dentista, ma in generale si programmano una o due sedute all anno per mantenere la prevenzione sotto controllo.',
              en:
                'The recommended frequency depends on the condition of the mouth and the dentist advice, but in general one or two visits per year are scheduled to keep prevention under control.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Ogni quanto serve l igiene professionale?',
              en: 'How often is professional cleaning needed?',
            },
            answer: {
              it:
                'In genere una o due volte l anno, ma la frequenza va adattata alla situazione del paziente e al consiglio del dentista.',
              en:
                'In general, once or twice a year, but the frequency should be adapted to the patient situation and the dentist advice.',
            },
          },
          {
            question: {
              it: 'L ultrasuono danneggia denti o gengive?',
              en: 'Does ultrasonic cleaning damage teeth or gums?',
            },
            answer: {
              it:
                'No, quando il trattamento e eseguito correttamente l ultrasuono serve a frammentare il tartaro e a rimuovere le incrostazioni senza danneggiare smalto e gengive.',
              en:
                'No, when the procedure is performed correctly, ultrasound helps break up tartar and remove deposits without damaging enamel or gums.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.it,
          secondary: ctaCopy.secondary.it,
          related: 'Servizi correlati',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'orthodontics'],
      },
      en: {
        summary: 'Professional cleaning sessions and personalized prevention plans.',
        details:
          'Plaque and tartar removal, typically recommended once or twice per year.',
        sections: [
          {
            eyebrow: {
              it: 'Pulizia professionale',
              en: 'Professional cleaning',
            },
            title: {
              it: 'Placca, tartaro e salute gengivale',
              en: 'Plaque, tartar, and gum health',
            },
            body: {
              it:
                'L igiene orale professionale rimuove placca e tartaro che non possono essere eliminati con l igiene domiciliare quotidiana, contribuendo a prevenire carie, gengiviti e altre infiammazioni gengivali.',
              en:
                'Professional oral hygiene removes plaque and tartar that cannot be eliminated through daily home care, helping prevent caries, gingivitis, and other gum inflammation.',
            },
            bullets: {
              it: [
                'Rimozione di depositi sopragengivali e sottogengivali.',
                'Supporto alla prevenzione di carie e gengiviti.',
                'Focus sulla salute gengivale nel tempo.',
              ],
              en: [
                'Removal of supra- and subgingival deposits.',
                'Support for preventing caries and gingivitis.',
                'Focus on long-term gum health.',
              ],
            },
          },
          {
            eyebrow: {
              it: 'Tecnica',
              en: 'Technique',
            },
            title: {
              it: 'Manuale, ultrasuoni o combinazione dei due',
              en: 'Manual, ultrasonic, or a combination',
            },
            body: {
              it:
                'La pulizia puo essere effettuata manualmente o con strumento a ultrasuoni, oppure con una combinazione dei due metodi; il trattamento non danneggia smalto dentale e gengive quando eseguito correttamente.',
              en:
                'Cleaning can be performed manually or with an ultrasonic instrument, or with a combination of both methods; when done correctly, the treatment does not damage tooth enamel or gums.',
            },
          },
          {
            eyebrow: {
              it: 'Prevenzione personalizzata',
              en: 'Personalized prevention',
            },
            title: {
              it: 'Una o due sedute all anno, secondo il consiglio del dentista',
              en: 'One or two visits per year, depending on the dentist advice',
            },
            body: {
              it:
                'La cadenza consigliata dipende dallo stato della bocca e dal parere del dentista, ma in generale si programmano una o due sedute all anno per mantenere la prevenzione sotto controllo.',
              en:
                'The recommended frequency depends on the condition of the mouth and the dentist advice, but in general one or two visits per year are scheduled to keep prevention under control.',
            },
          },
        ],
        faqs: [
          {
            question: {
              it: 'Ogni quanto serve l igiene professionale?',
              en: 'How often is professional cleaning needed?',
            },
            answer: {
              it:
                'In genere una o due volte l anno, ma la frequenza va adattata alla situazione del paziente e al consiglio del dentista.',
              en:
                'In general, once or twice a year, but the frequency should be adapted to the patient situation and the dentist advice.',
            },
          },
          {
            question: {
              it: 'L ultrasuono danneggia denti o gengive?',
              en: 'Does ultrasonic cleaning damage teeth or gums?',
            },
            answer: {
              it:
                'No, quando il trattamento e eseguito correttamente l ultrasuono serve a frammentare il tartaro e a rimuovere le incrostazioni senza danneggiare smalto e gengive.',
              en:
                'No, when the procedure is performed correctly, ultrasound helps break up tartar and remove deposits without damaging enamel or gums.',
            },
          },
        ],
        ctas: {
          primary: ctaCopy.primary.en,
          secondary: ctaCopy.secondary.en,
          related: 'Related services',
        },
        relatedServices: ['conservative-dentistry-endodontics', 'orthodontics'],
      },
    },
  },
} satisfies Record<ServiceKey, ServiceCatalogEntry>;

export const serviceCatalog = serviceCatalogEntries;

export const serviceCopy = Object.fromEntries(
  (Object.keys(serviceCatalogEntries) as ServiceKey[]).map((serviceKey) => {
    const service = serviceCatalogEntries[serviceKey];

    return [
      serviceKey,
      {
        summary: {
          it: service.content.it.summary,
          en: service.content.en.summary,
        },
        details: {
          it: service.content.it.details,
          en: service.content.en.details,
        },
      },
    ];
  }),
) as Record<
  ServiceKey,
  {
    summary: LocalizedString;
    details: LocalizedString;
  }
>;

export function getServiceEntry(serviceKey: ServiceKey): ServiceCatalogEntry {
  return serviceCatalog[serviceKey];
}

export function getLocalizedServiceContent(serviceKey: ServiceKey, locale: Locale) {
  return serviceCatalog[serviceKey].content[locale];
}

export function getLocalizedServices(locale: Locale): ServiceOverviewCard[] {
  return (Object.keys(serviceCatalog) as ServiceKey[]).map((serviceKey) => {
    const service = serviceCatalog[serviceKey];
    const content = service.content[locale];

    return {
      key: serviceKey,
      label: service.labels[locale],
      slug: service.slugs[locale],
      href: getServicePath(serviceKey, locale),
      summary: content.summary,
      details: content.details,
      metadata: service.metadata[locale],
      image: service.images.hero,
      relatedServices: content.relatedServices,
    };
  });
}

export function getServiceKeyByLocalizedSlug(slug: string, locale: Locale): ServiceKey | undefined {
  return (Object.keys(serviceCatalog) as ServiceKey[]).find(
    (serviceKey) => serviceCatalog[serviceKey].slugs[locale] === slug,
  );
}
