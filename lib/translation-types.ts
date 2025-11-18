/**
 * Translation Type Definitions
 *
 * Auto-generated type definitions for translation keys.
 * This ensures type safety when accessing translation strings.
 */

export interface TranslationMessages {
  common: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    learnMore: string;
    readMore: string;
    getQuote: string;
    copyright: string;
    loading: string;
    error: string;
    notFound: string;
  };
  navigation: {
    mainMenu: string;
    skipToContent: string;
  };
  homepage: {
    hero: {
      title: string;
      tagline: string;
      subtitle: string;
      description: string;
      cta: string;
      ctaSecondary: string;
    };
    stats: {
      experience: string;
      projects: string;
      countries: string;
      software: string;
    };
    software: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    services: {
      title: string;
      subtitle: string;
      description: string;
    };
    projects: {
      title: string;
      subtitle: string;
      description: string;
      viewAll: string;
    };
    cta: {
      consultation: {
        title: string;
        description: string;
        button: string;
      };
      demo: {
        title: string;
        description: string;
        button: string;
      };
    };
  };
  footer: {
    company: string;
    tagline: string;
    address: string;
    phone: string;
    email: string;
    followUs: string;
  };
  language: {
    switchTo: string;
    en: string;
    uk: string;
  };
  pages: {
    about: {
      title: string;
      description: string;
      subtitle: string;
    };
    services: {
      title: string;
      description: string;
      subtitle: string;
      cta: string;
    };
    projects: {
      title: string;
      description: string;
      subtitle: string;
      cta: string;
    };
    equipment: {
      title: string;
      description: string;
      subtitle: string;
      content: string;
      cta: string;
    };
    whatIsRas: {
      title: string;
      description: string;
      subtitle: string;
      content: string;
      benefits: {
        title: string;
        waterEfficiency: string;
        yearRound: string;
        biosecurity: string;
        environmental: string;
      };
      cta: string;
    };
    contact: {
      title: string;
      description: string;
      subtitle: string;
    };
  };
  contact: {
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
}

/**
 * Translation key paths as string literals
 * Use this for dynamic key access with type safety
 */
export type TranslationKeyPath =
  | `common.${keyof TranslationMessages['common']}`
  | `navigation.${keyof TranslationMessages['navigation']}`
  | `homepage.hero.${keyof TranslationMessages['homepage']['hero']}`
  | `homepage.stats.${keyof TranslationMessages['homepage']['stats']}`
  | `homepage.software.${keyof TranslationMessages['homepage']['software']}`
  | `homepage.services.${keyof TranslationMessages['homepage']['services']}`
  | `homepage.projects.${keyof TranslationMessages['homepage']['projects']}`
  | `homepage.cta.consultation.${keyof TranslationMessages['homepage']['cta']['consultation']}`
  | `homepage.cta.demo.${keyof TranslationMessages['homepage']['cta']['demo']}`
  | `footer.${keyof TranslationMessages['footer']}`
  | `language.${keyof TranslationMessages['language']}`
  | `pages.about.${keyof TranslationMessages['pages']['about']}`
  | `pages.services.${keyof TranslationMessages['pages']['services']}`
  | `pages.projects.${keyof TranslationMessages['pages']['projects']}`
  | `pages.equipment.${keyof TranslationMessages['pages']['equipment']}`
  | `pages.whatIsRas.${keyof TranslationMessages['pages']['whatIsRas']}`
  | `pages.whatIsRas.benefits.${keyof TranslationMessages['pages']['whatIsRas']['benefits']}`
  | `pages.contact.${keyof TranslationMessages['pages']['contact']}`
  | `contact.form.${keyof TranslationMessages['contact']['form']}`
  | `contact.info.${keyof TranslationMessages['contact']['info']}`;
