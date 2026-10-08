import { ChecklistItem } from '../types';
import { getDefaultSiteTarget, getSiteContent } from '../content';
import { SiteTarget } from '../content/types';

export function getChecklistItems(target?: SiteTarget): ChecklistItem[] {
  const content = getSiteContent(target);
  return content.checklist.map((item) => ({
    id: item.id,
    phase: item.phase as 'Aanschaf' | 'Aflevering & KvI' | 'Exploitatie & Beheer',
    title: item.title,
    description: item.description,
    requirement: item.requirement,
    criticality: item.criticality as 'Verplicht' | 'Aandachtspunt' | 'Aanbevolen',
  }));
}

export const CHECKLIST_ITEMS: ChecklistItem[] = getChecklistItems(getDefaultSiteTarget());
