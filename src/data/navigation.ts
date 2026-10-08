import { NavItem, PageId } from '../types';
import { getDefaultSiteTarget, getSiteContent } from '../content';
import { SiteTarget } from '../content/types';

export function getNavItems(target?: SiteTarget): NavItem[] {
  const content = getSiteContent(target);
  return content.navItems.map((item) => ({
    id: item.id as PageId,
    label: item.label,
    slug: item.slug,
    shortTitle: item.shortTitle,
  }));
}

export function getPageTitles(target?: SiteTarget): Record<string, { title: string; description: string }> {
  const content = getSiteContent(target);
  const titles: Record<string, { title: string; description: string }> = {};
  for (const item of content.navItems) {
    titles[item.id] = {
      title: item.seoTitle,
      description: item.seoDescription,
    };
  }
  return titles;
}

// Default export collections for current target
export const NAV_ITEMS: NavItem[] = getNavItems(getDefaultSiteTarget());
export const PAGE_TITLES: Record<string, { title: string; description: string }> = getPageTitles(getDefaultSiteTarget());
