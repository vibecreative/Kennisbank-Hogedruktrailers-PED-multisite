import { BeneluxLanguage, SiteContent } from '../types';
import { beneluxContentNl } from './nl';
import { beneluxContentFr } from './fr';
import { beneluxContentDe } from './de';

export { beneluxContentNl } from './nl';
export { beneluxContentFr } from './fr';
export { beneluxContentDe } from './de';

export const BENELUX_CONTENT_BY_LANG: Record<BeneluxLanguage, SiteContent> = {
  nl: beneluxContentNl,
  fr: beneluxContentFr,
  de: beneluxContentDe,
};

export function getBeneluxContent(lang: BeneluxLanguage = 'nl'): SiteContent {
  return BENELUX_CONTENT_BY_LANG[lang] || beneluxContentNl;
}

export const beneluxContent: SiteContent = beneluxContentNl;
