export type SiteTarget = 'benelux' | 'europe';

export interface SiteMeta {
  id: SiteTarget;
  name: string;
  shortName: string;
  tagline: string;
  domain: string;
  baseUrl: string;
  language: string; // 'nl-NL' | 'en'
  currency: string; // '€'
  legalDisclaimer: string;
  copyrightHolder: string;
}

export interface NavItemConfig {
  id: string;
  label: string;
  slug: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
}

export interface HeroConfig {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaCalculator: string;
  ctaWizard: string;
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
}

export interface WizardConfig {
  badge: string;
  title: string;
  subtitle: string;
  openButtonText: string;
  stepIndicator: string;
  questions: {
    q1: {
      title: string;
      description: string;
      optA_title: string;
      optA_desc: string;
      optB_title: string;
      optB_desc: string;
    };
    q2: {
      title: string;
      description: string;
      optA_title: string;
      optA_desc: string;
      optB_title: string;
      optB_desc: string;
    };
    q3: {
      title: string;
      description: string;
      optA_title: string;
      optA_desc: string;
      optB_title: string;
      optB_desc: string;
    };
  };
  results: {
    green_sep: {
      title: string;
      subtitle: string;
      summary: string;
      bullets: string[];
    };
    exempt: {
      title: string;
      subtitle: string;
      summary: string;
      bullets: string[];
    };
    red_ped4: {
      title: string;
      subtitle: string;
      summary: string;
      bullets: string[];
    };
    critical_violation: {
      title: string;
      subtitle: string;
      summary: string;
      bullets: string[];
    };
  };
}

export interface TcoConfig {
  title: string;
  subtitle: string;
  calculatorTitle: string;
  description: string;
  defaults: {
    machineCount: number;
    years: number;
    kviCostPerMachine: number;
    periodicInspectionCost: number;
    downtimeDaysPerKeuring: number;
    downtimeCostPerDay: number;
    partsCostDifferenceAnnual: number;
    inspectionIntervalMonths: number;
  };
  labels: {
    machineCount: string;
    years: string;
    initialInspection: string;
    periodicInspection: string;
    downtimeDays: string;
    downtimeCost: string;
    partsMarkup: string;
    totalSavingsTitle: string;
    totalCat4CostTitle: string;
    totalSepCostTitle: string;
  };
}

export interface FaqItemConfig {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ChecklistItemConfig {
  id: string;
  phase: string;
  title: string;
  description: string;
  requirement: string;
  criticality: 'Verplicht' | 'Aandachtspunt' | 'Aanbevolen' | 'Mandatory' | 'Critical Check' | 'Recommended';
}

export interface SiteContent {
  meta: SiteMeta;
  navItems: NavItemConfig[];
  hero: HeroConfig;
  wizard: WizardConfig;
  tco: TcoConfig;
  faq: FaqItemConfig[];
  checklist: ChecklistItemConfig[];
  common: {
    readMore: string;
    downloadGuide: string;
    openDecisionTree: string;
    calculateTco: string;
    contactNote: string;
    sourceReferences: string;
    legalNotice: string;
  };
}
