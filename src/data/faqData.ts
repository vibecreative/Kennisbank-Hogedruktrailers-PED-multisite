import { getDefaultSiteTarget, getSiteContent } from '../content';
import { SiteTarget } from '../content/types';

export interface FaqItem {
  id: string;
  category: 'wbda' | 'grens' | 'keuringen' | 'aansprakelijkheid' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
  articleRef?: string;
}

export function getFaqCategories(target?: SiteTarget) {
  const isEurope = (target || getDefaultSiteTarget()) === 'europe';
  if (isEurope) {
    return [
      { id: 'all', label: 'All Questions' },
      { id: 'wbda', label: 'Directives & Standards' },
      { id: 'grens', label: '2-Litre Threshold & Physics' },
      { id: 'keuringen', label: 'Inspections & Audits' },
      { id: 'aansprakelijkheid', label: 'Liability & Assembly Rules' },
    ] as const;
  }

  return [
    { id: 'all', label: 'Alle vragen' },
    { id: 'wbda', label: 'Wetgeving & WBDA / Codex' },
    { id: 'grens', label: '2-Liter Grens & Fysica' },
    { id: 'keuringen', label: 'KvI & Periodieke Keuringen' },
    { id: 'aansprakelijkheid', label: 'Aansprakelijkheid & Merkplicht' },
  ] as const;
}

export function getFaqItems(target?: SiteTarget): FaqItem[] {
  const content = getSiteContent(target);
  const isEurope = content.meta.id === 'europe';

  return content.faq.map((item, index) => {
    // Categorize logically across the 4 tabs
    let cat: 'wbda' | 'grens' | 'keuringen' | 'aansprakelijkheid' = 'wbda';
    let catLabel = isEurope ? 'Directives & Standards' : 'Wetgeving';
    let ref = '';

    if (index === 0) {
      cat = 'wbda';
      catLabel = isEurope ? 'Directives & Standards' : 'Wetgeving & WBDA / Codex';
      ref = isEurope ? 'Directive 2014/68/EU' : 'WBDA 2016 / Codex Boek IV';
    } else if (index === 1) {
      cat = 'grens';
      catLabel = isEurope ? '2-Litre Threshold' : '2-Liter Grens';
      ref = 'PED Annex II, Table 5';
    } else if (index === 2 || index === 3) {
      cat = 'keuringen';
      catLabel = isEurope ? 'Statutory Audits' : 'Keuringen & KvI';
      ref = isEurope ? 'National In-Service Law' : 'WBDA Art. 21-22 / Codex';
    } else if (index === 4) {
      cat = 'aansprakelijkheid';
      catLabel = isEurope ? 'Assembly Rules & Lock-in' : 'Aansprakelijkheid & Merkplicht';
      ref = isEurope ? 'Assembly Integrity Rule' : 'WBDA Art. 24';
    } else if (index === 5) {
      cat = 'aansprakelijkheid';
      catLabel = isEurope ? 'Enforcement & Penalties' : 'Handhaving & Sancties';
      ref = isEurope ? 'EHS Framework Directives' : 'Arbowet art. 7.4a';
    } else if (index === 6) {
      cat = 'wbda';
      catLabel = isEurope ? 'Market vs. In-Service' : 'CE vs. Gebruiksfase';
      ref = 'CE Scope vs. In-Service';
    } else if (index === 7) {
      cat = 'grens';
      catLabel = isEurope ? 'Threshold Compliance' : '2-Liter Grens';
      ref = 'Physical Volume Rule';
    } else if (index === 8) {
      cat = 'keuringen';
      catLabel = isEurope ? 'Inspection Bodies' : 'Inspectiediensten';
      ref = 'NoBo vs. NL-CBI / EDTC';
    } else {
      cat = 'aansprakelijkheid';
      catLabel = isEurope ? 'Rental & Leasing Safety' : 'Huur & Lease Verplichting';
      ref = isEurope ? 'Work Equipment Directive' : 'Arbowet 7.4a';
    }

    return {
      id: item.id,
      category: cat,
      categoryLabel: catLabel,
      question: item.question,
      answer: item.answer,
      articleRef: ref,
    };
  });
}

export const FAQ_CATEGORIES = getFaqCategories(getDefaultSiteTarget());
export const FAQ_ITEMS: FaqItem[] = getFaqItems(getDefaultSiteTarget());
