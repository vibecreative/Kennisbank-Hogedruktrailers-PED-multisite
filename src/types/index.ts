export type PageId = 
  | 'home'
  | 'wbda-2016'
  | 'two-liter-grens'
  | 'keuringsverplichtingen'
  | 'internationaal'
  | 'tco-calculator'
  | 'downloadcenter'
  | 'faq';

export interface NavItem {
  id: PageId;
  label: string;
  slug: string;
  shortTitle: string;
}

export interface WizardAnswers {
  q1_pressure_temp: 'above_threshold' | 'below_threshold' | null;
  q2_volume: 'below_2L' | 'above_2L' | null;
  q3_certification: 'has_ped4_cert' | 'no_ped4_cert' | null;
}

export type WizardResultType = 
  | 'exempt' // Below threshold (Q1 B)
  | 'green_sep' // < 2L (Q2 A)
  | 'red_ped4' // > 2L + Has cert (Q3 A)
  | 'critical_violation'; // > 2L + No cert (Q3 B)

export interface TcoParams {
  machineCount: number;
  years: number;
  kviCostPerMachine: number;
  periodicInspectionCost: number; // Every 2 years
  downtimeDaysPerKeuring: number;
  downtimeCostPerDay: number;
  partsCostDifferenceAnnual: number; // Brand-exclusive parts markup per year
}

export interface ChecklistItem {
  id: string;
  phase: 'Aanschaf' | 'Aflevering & KvI' | 'Exploitatie & Beheer';
  title: string;
  description: string;
  requirement: string;
  criticality: 'Verplicht' | 'Aandachtspunt' | 'Aanbevolen';
}
