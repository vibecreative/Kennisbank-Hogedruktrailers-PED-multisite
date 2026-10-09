import { useState, useEffect } from 'react';
import { SiteContent, SiteTarget, BeneluxLanguage, SiteLanguage } from './types';
import { beneluxContent, getBeneluxContent, beneluxContentNl, beneluxContentFr, beneluxContentDe } from './benelux';
import { europeContent } from './europe';

export * from './types';
export { beneluxContent, getBeneluxContent, beneluxContentNl, beneluxContentFr, beneluxContentDe } from './benelux';
export { europeContent } from './europe';

export const BENELUX_LANGUAGES: Array<{ code: BeneluxLanguage; label: string; flag: string; countryNote: string }> = [
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱', countryNote: 'NL / BE-Vlaanderen' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', countryNote: 'BE-Wallonie / Bruxelles / LU' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', countryNote: 'Luxemburg / Ostbelgien' },
];

export const DEFAULT_BENELUX_URL = 'https://www.hogedruktrailerkeuren.eu';
export const DEFAULT_EU_URL = 'https://www.highpressuresteaminspection.eu';

export function getTargetSiteBaseUrl(target: SiteTarget): string {
  if (target === 'benelux') {
    return (
      (typeof process !== 'undefined' && process.env?.VITE_BENELUX_SITE_URL) ||
      (typeof import.meta !== 'undefined' && import.meta.env?.VITE_BENELUX_SITE_URL) ||
      DEFAULT_BENELUX_URL
    );
  }

  return (
    (typeof process !== 'undefined' && process.env?.VITE_EU_SITE_URL) ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_EU_SITE_URL) ||
    DEFAULT_EU_URL
  );
}

export function isSeparateDomainDeployment(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  // Keep in-app switching inside AI Studio dev/pre views and local development
  if (
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.endsWith('.run.app') ||
    host.includes('ais-dev') ||
    host.includes('ais-pre')
  ) {
    return false;
  }
  // True for custom domains or deployed Vercel apps
  return (
    host.includes('hogedruktrailerkeuren') ||
    host.includes('highpressuresteaminspection') ||
    host.includes('high-pressure-steam-inspection') ||
    host.includes('vercel.app')
  );
}

export function getEquivalentPath(fromTarget: SiteTarget, toTarget: SiteTarget, currentPath: string): string {
  const cleanPath = currentPath.replace(/\/$/, '') || '/';
  const fromContent = fromTarget === 'europe' ? europeContent : getBeneluxContent();
  const toContent = toTarget === 'europe' ? europeContent : getBeneluxContent();

  const activeItem = fromContent.navItems.find((item) => item.slug === cleanPath);
  if (activeItem) {
    const equivalentItem = toContent.navItems.find((item) => item.id === activeItem.id);
    if (equivalentItem) {
      return equivalentItem.slug;
    }
  }
  return '/';
}

export function getTargetSiteUrl(target: SiteTarget, currentPath?: string): string {
  const baseUrl = getTargetSiteBaseUrl(target).replace(/\/$/, '');
  const path = currentPath
    ? getEquivalentPath(target === 'europe' ? 'benelux' : 'europe', target, currentPath)
    : '/';
  const cleanPath = path === '/' ? '' : path;
  return `${baseUrl}${cleanPath}`;
}

let serverOverrideTarget: SiteTarget | null = null;
let serverOverrideLang: BeneluxLanguage | null = null;

export function setServerSiteTarget(target: SiteTarget | null) {
  serverOverrideTarget = target;
}

export function setServerBeneluxLang(lang: BeneluxLanguage | null) {
  serverOverrideLang = lang;
}

export function getDefaultSiteTarget(): SiteTarget {
  if (serverOverrideTarget) {
    return serverOverrideTarget;
  }

  // 1. In browser, check explicit overrides first
  if (typeof window !== 'undefined' && window.location) {
    const host = window.location.hostname.toLowerCase();

    // A. Query param override (?site=europe, ?site=benelux, ?lang=en, ?lang=nl, ?lang=fr, ?lang=de)
    try {
      const params = new URLSearchParams(window.location.search);
      const querySite = params.get('site')?.toLowerCase();
      if (querySite === 'europe' || querySite === 'benelux') {
        return querySite;
      }
      const queryLang = params.get('lang')?.toLowerCase();
      if (queryLang === 'en') return 'europe';
      if (queryLang === 'nl' || queryLang === 'fr' || queryLang === 'de') return 'benelux';
    } catch {
      // ignore
    }

    const isCloudOrLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host.endsWith('.run.app') ||
      host.includes('ais-dev') ||
      host.includes('ais-pre');

    // B. Hostname matching for production domains takes priority over stale localStorage
    if (!isCloudOrLocal) {
      // 1. Explicit domain matching for primary custom domains
      if (host.includes('hogedruktrailerkeuren')) {
        return 'benelux';
      }

      if (
        host.includes('highpressuresteaminspection') ||
        host.includes('high-pressure-steam-inspection')
      ) {
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
        host.includes('ped-kennisbank-platform-eu')
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

    // C. Check localStorage for user-selected profile in dev / preview environments
    try {
      const stored = localStorage.getItem('site_target')?.toLowerCase();
      if (stored === 'europe' || stored === 'benelux') {
        return stored;
      }
    } catch {
      // ignore
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

export function getDefaultBeneluxLanguage(): BeneluxLanguage {
  if (serverOverrideLang) {
    return serverOverrideLang;
  }

  if (typeof window !== 'undefined' && window.location) {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryLang = params.get('lang')?.toLowerCase();
      if (queryLang === 'fr') return 'fr';
      if (queryLang === 'de') return 'de';
      if (queryLang === 'nl') return 'nl';
    } catch {
      // ignore
    }

    try {
      const stored = localStorage.getItem('benelux_lang')?.toLowerCase();
      if (stored === 'fr' || stored === 'de' || stored === 'nl') {
        return stored as BeneluxLanguage;
      }
    } catch {
      // ignore
    }

    try {
      const navLang = navigator.language?.toLowerCase();
      if (navLang?.startsWith('fr')) return 'fr';
      if (navLang?.startsWith('de')) return 'de';
    } catch {
      // ignore
    }
  }

  return 'nl';
}

export function getSiteContent(target?: SiteTarget, beneluxLang?: BeneluxLanguage): SiteContent {
  const activeTarget = target || getDefaultSiteTarget();
  if (activeTarget === 'europe') {
    return europeContent;
  }
  const activeLang = beneluxLang || getDefaultBeneluxLanguage();
  return getBeneluxContent(activeLang);
}

type TargetChangeListener = (target: SiteTarget) => void;
type LangChangeListener = (lang: BeneluxLanguage) => void;

const targetListeners = new Set<TargetChangeListener>();
const langListeners = new Set<LangChangeListener>();

let currentActiveTarget: SiteTarget = getDefaultSiteTarget();
let currentActiveBeneluxLang: BeneluxLanguage = getDefaultBeneluxLanguage();

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

function broadcastLangChange(newLang: BeneluxLanguage) {
  currentActiveBeneluxLang = newLang;
  if (typeof document !== 'undefined') {
    document.documentElement.lang = newLang;
  }
  langListeners.forEach((listener) => {
    try {
      listener(newLang);
    } catch (err) {
      console.error('Error updating site lang listener:', err);
    }
  });
}

export function useSiteContent() {
  const [target, setTarget] = useState<SiteTarget>(() => currentActiveTarget);
  const [beneluxLang, setBeneluxLang] = useState<BeneluxLanguage>(() => currentActiveBeneluxLang);

  useEffect(() => {
    const tListener: TargetChangeListener = (newTarget) => {
      setTarget(newTarget);
    };
    const lListener: LangChangeListener = (newLang) => {
      setBeneluxLang(newLang);
    };

    targetListeners.add(tListener);
    langListeners.add(lListener);

    const handleStorage = () => {
      const storedTarget = getDefaultSiteTarget();
      broadcastTargetChange(storedTarget);
      const storedLang = getDefaultBeneluxLanguage();
      broadcastLangChange(storedLang);
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      targetListeners.delete(tListener);
      langListeners.delete(lListener);
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

      const fromContent = target === 'europe' ? europeContent : getBeneluxContent(beneluxLang);
      const toContent = newTarget === 'europe' ? europeContent : getBeneluxContent(beneluxLang);

      const activeItem = fromContent.navItems.find((item) => item.slug === currentPath);
      let targetPath = '/';

      if (activeItem) {
        const equivalentItem = toContent.navItems.find((item) => item.id === activeItem.id);
        if (equivalentItem) {
          targetPath = equivalentItem.slug;
        }
      }

      // If running on a live/deployed separate domain, redirect directly to the target domain
      if (isSeparateDomainDeployment() && newTarget !== target) {
        const targetUrl = getTargetSiteUrl(newTarget, currentPath);
        window.location.href = targetUrl;
        return;
      }

      const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
      const newUrl = `${targetPath}${queryString}`;

      try {
        window.history.pushState({ site: newTarget, path: targetPath }, '', newUrl);
        window.dispatchEvent(new PopStateEvent('popstate'));
      } catch {
        // Fallback
      }
    }

    broadcastTargetChange(newTarget);
  };

  const setLanguage = (newLang: BeneluxLanguage) => {
    try {
      localStorage.setItem('benelux_lang', newLang);
    } catch {
      // ignore
    }

    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('lang', newLang);
      const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
      const newUrl = `${window.location.pathname}${queryString}`;
      try {
        window.history.pushState({ lang: newLang }, '', newUrl);
      } catch {
        // Fallback
      }
      document.documentElement.lang = newLang;
    }

    broadcastLangChange(newLang);
  };

  const activeLang: SiteLanguage = target === 'europe' ? 'en' : beneluxLang;
  const content = target === 'europe' ? europeContent : getBeneluxContent(beneluxLang);

  // Internationalization helper function
  const t = <T>(options: { nl: T; fr: T; de: T; en?: T }): T => {
    if (target === 'europe') {
      return (options.en ?? options.nl) as T;
    }
    if (beneluxLang === 'fr') return options.fr;
    if (beneluxLang === 'de') return options.de;
    return options.nl;
  };

  return {
    target,
    lang: activeLang,
    beneluxLang,
    content,
    switchTarget,
    setLanguage,
    availableLanguages: BENELUX_LANGUAGES,
    t,
    isSeparateDomain: isSeparateDomainDeployment(),
    getTargetUrl: (targetToGet: SiteTarget) => {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
      return getTargetSiteUrl(targetToGet, currentPath);
    },
  };
}
