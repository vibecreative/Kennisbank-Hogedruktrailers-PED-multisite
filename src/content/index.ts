import { useState, useEffect } from 'react';
import { SiteContent, SiteTarget } from './types';
import { beneluxContent } from './benelux';
import { europeContent } from './europe';

export * from './types';
export { beneluxContent } from './benelux';
export { europeContent } from './europe';

const SITE_CONTENT_MAP: Record<SiteTarget, SiteContent> = {
  benelux: beneluxContent,
  europe: europeContent,
};

let serverOverrideTarget: SiteTarget | null = null;

export function setServerSiteTarget(target: SiteTarget | null) {
  serverOverrideTarget = target;
}

export function getDefaultSiteTarget(): SiteTarget {
  if (serverOverrideTarget) {
    return serverOverrideTarget;
  }

  // 1. In browser, check explicit overrides first
  if (typeof window !== 'undefined' && window.location) {
    const host = window.location.hostname.toLowerCase();

    // A. Query param override (?site=europe, ?site=benelux, ?lang=en, ?lang=nl)
    try {
      const params = new URLSearchParams(window.location.search);
      const querySite = params.get('site')?.toLowerCase();
      if (querySite === 'europe' || querySite === 'benelux') {
        return querySite;
      }
      const queryLang = params.get('lang')?.toLowerCase();
      if (queryLang === 'en') return 'europe';
      if (queryLang === 'nl') return 'benelux';
    } catch {
      // ignore
    }

    // B. Check localStorage for user-selected profile (takes precedence over automatic hostname detection)
    try {
      const stored = localStorage.getItem('site_target')?.toLowerCase();
      if (stored === 'europe' || stored === 'benelux') {
        return stored;
      }
    } catch {
      // ignore
    }

    // C. Hostname matching for production domains (explicitly ignore Cloud Run / dev domains like .run.app and localhost)
    const isCloudOrLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host.endsWith('.run.app') ||
      host.includes('ais-dev') ||
      host.includes('ais-pre');

    if (!isCloudOrLocal) {
      // 1. Explicit domain matching for primary custom domains
      if (host.includes('hogedruktrailerkeuren')) {
        return 'benelux';
      }

      if (host.includes('high-pressure-steam-inspection')) {
        return 'europe';
      }

      // 2. Vercel deployment and secondary preview projects
      if (
        host.includes('ped-mul-two') ||
        host.includes('-two.vercel.app') ||
        host.includes('-two')
      ) {
        return 'europe';
      }

      if (
        host.includes('ped-mul.') ||
        host.includes('ped-mul-')
      ) {
        return 'benelux';
      }

      // 3. Fallback matching on keywords & TLDs
      if (
        host.includes('-eu.') ||
        host.includes('-eu-') ||
        host.includes('ped-compliance-hub') ||
        host.includes('ped-kennisbank-platform-eu') ||
        host.endsWith('.eu')
      ) {
        return 'europe';
      }

      if (
        host.includes('benelux') ||
        host.includes('wbda') ||
        host.includes('ped-kennisbank-platform') ||
        host.endsWith('.nl') ||
        host.endsWith('.be')
      ) {
        return 'benelux';
      }
    }
  }

  // 2. Check Node environment variable (SSR / Prerendering)
  if (typeof process !== 'undefined' && process.env) {
    const nodeTarget = (process.env.VITE_SITE_TARGET || process.env.BUILD_TARGET)?.toLowerCase();
    if (nodeTarget === 'europe') return 'europe';
    if (nodeTarget === 'benelux') return 'benelux';
  }

  // 3. Check Vite build-time environment variable
  const buildTarget = (import.meta.env?.VITE_SITE_TARGET as string)?.toLowerCase();
  if (buildTarget === 'europe') return 'europe';
  if (buildTarget === 'benelux') return 'benelux';

  return 'benelux';
}

export function getSiteContent(target?: SiteTarget): SiteContent {
  const activeTarget = target || getDefaultSiteTarget();
  return SITE_CONTENT_MAP[activeTarget] || beneluxContent;
}

type TargetChangeListener = (target: SiteTarget) => void;
const targetListeners = new Set<TargetChangeListener>();

let currentActiveTarget: SiteTarget = getDefaultSiteTarget();

function broadcastTargetChange(newTarget: SiteTarget) {
  currentActiveTarget = newTarget;
  targetListeners.forEach((listener) => {
    try {
      listener(newTarget);
    } catch (err) {
      console.error('Error updating site target listener:', err);
    }
  });
}

export function useSiteContent() {
  const [target, setTarget] = useState<SiteTarget>(() => currentActiveTarget);

  useEffect(() => {
    const listener: TargetChangeListener = (newTarget) => {
      setTarget(newTarget);
    };
    targetListeners.add(listener);

    const handleStorage = () => {
      const stored = getDefaultSiteTarget();
      broadcastTargetChange(stored);
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      targetListeners.delete(listener);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const switchTarget = (newTarget: SiteTarget) => {
    try {
      localStorage.setItem('site_target', newTarget);
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('site', newTarget);

      // Find equivalent page slug in target content
      const fromContent = target === 'europe' ? europeContent : beneluxContent;
      const toContent = newTarget === 'europe' ? europeContent : beneluxContent;

      const activeItem = fromContent.navItems.find((item) => item.slug === currentPath);
      let targetPath = '/';

      if (activeItem) {
        const equivalentItem = toContent.navItems.find((item) => item.id === activeItem.id);
        if (equivalentItem) {
          targetPath = equivalentItem.slug;
        }
      }

      const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
      const newUrl = `${targetPath}${queryString}`;

      try {
        window.history.pushState({ site: newTarget, path: targetPath }, '', newUrl);
        window.dispatchEvent(new PopStateEvent('popstate'));
      } catch {
        // Fallback for sandboxed iframes
      }
    }

    broadcastTargetChange(newTarget);
  };

  return {
    target,
    content: SITE_CONTENT_MAP[target] || beneluxContent,
    switchTarget,
  };
}
