/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WizardModal } from './components/WizardModal';
import { DevSwitcher } from './components/DevSwitcher';
import { HomePage } from './pages/HomePage';
import { WbdaPage } from './pages/WbdaPage';
import { TwoLiterGrensPage } from './pages/TwoLiterGrensPage';
import { KeuringenPage } from './pages/KeuringenPage';
import { InternationalPage } from './pages/InternationalPage';
import { TcoCalculatorPage } from './pages/TcoCalculatorPage';
import { DownloadPage } from './pages/DownloadPage';
import { FaqPage } from './pages/FaqPage';
import { useSiteContent, beneluxContent, europeContent } from './content';
import { PageId } from './types';

export default function App() {
  const { content } = useSiteContent();

  const findPageByPathOrSlug = (pathOrSlug: string): { pageId: PageId; slug: string } => {
    const clean = pathOrSlug.replace(/\/$/, '') || '/';
    
    // 1. Direct match with active content navItems by slug or id
    const directMatch = content.navItems.find(item => item.slug === clean || item.id === clean);
    if (directMatch) {
      return { pageId: directMatch.id as PageId, slug: directMatch.slug };
    }

    // 2. Cross-match: if visitor entered a Benelux slug on Europe site or vice-versa
    const beneluxMatch = beneluxContent.navItems.find(item => item.slug === clean || item.id === clean);
    if (beneluxMatch) {
      const activeEquivalent = content.navItems.find(item => item.id === beneluxMatch.id);
      if (activeEquivalent) {
        return { pageId: activeEquivalent.id as PageId, slug: activeEquivalent.slug };
      }
    }

    const europeMatch = europeContent.navItems.find(item => item.slug === clean || item.id === clean);
    if (europeMatch) {
      const activeEquivalent = content.navItems.find(item => item.id === europeMatch.id);
      if (activeEquivalent) {
        return { pageId: activeEquivalent.id as PageId, slug: activeEquivalent.slug };
      }
    }

    // 3. Fallbacks for aliases (e.g. American spelling '/2-liter-threshold-ped')
    if (clean === '/2-liter-threshold-ped' || clean === '/2-liter-grens') {
      const twoLiter = content.navItems.find(item => item.id === 'two-liter-grens');
      if (twoLiter) {
        return { pageId: 'two-liter-grens', slug: twoLiter.slug };
      }
    }

    return { pageId: 'home', slug: '/' };
  };

  const getInitialPage = (): PageId => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash.replace(/^#/, '');

      const resolved = findPageByPathOrSlug(path !== '/' ? path : (hash || '/'));
      return resolved.pageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Sync state with URL path/hash
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash.replace(/^#/, '');

      const resolved = findPageByPathOrSlug(path !== '/' ? path : (hash || '/'));
      setCurrentPage(resolved.pageId);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, [content]);

  // Update document title, meta tags, OpenGraph, Twitter cards, canonical link and html lang dynamically
  useEffect(() => {
    const navItem = content.navItems.find(item => item.id === currentPage) || content.navItems[0];
    const currentSlug = navItem?.slug || '/';
    const baseUrl = content.meta.baseUrl;
    const canonicalUrl = `${baseUrl}${currentSlug === '/' ? '' : currentSlug}`;

    document.title = navItem.seoTitle;

    // Set html lang
    if (document.documentElement) {
      document.documentElement.setAttribute('lang', content.meta.language);
    }

    const setMetaTag = (attrName: string, attrVal: string, valContent: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', valContent);
    };

    // Standard search engine description
    setMetaTag('name', 'description', navItem.seoDescription);

    // OpenGraph tags
    setMetaTag('property', 'og:title', navItem.seoTitle);
    setMetaTag('property', 'og:description', navItem.seoDescription);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', content.meta.name);
    setMetaTag('property', 'og:locale', content.meta.language === 'en' ? 'en_GB' : 'nl_NL');
    setMetaTag('property', 'og:image', `${baseUrl}/images/hero_pressure_equipment_1790257548564.jpg`);

    // Twitter card tags
    setMetaTag('name', 'twitter:title', navItem.seoTitle);
    setMetaTag('name', 'twitter:description', navItem.seoDescription);
    setMetaTag('name', 'twitter:image', `${baseUrl}/images/hero_pressure_equipment_1790257548564.jpg`);

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Hreflang alternate links (for international SEO linking Benelux and Europe)
    const setAlternateTag = (lang: string, href: string) => {
      let tag = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'alternate');
        tag.setAttribute('hreflang', lang);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };

    const beneluxItem = beneluxContent.navItems.find(i => i.id === currentPage);
    const europeItem = europeContent.navItems.find(i => i.id === currentPage);
    const beneluxAltUrl = `${beneluxContent.meta.baseUrl}${beneluxItem?.slug === '/' ? '' : (beneluxItem?.slug || '')}`;
    const europeAltUrl = `${europeContent.meta.baseUrl}${europeItem?.slug === '/' ? '' : (europeItem?.slug || '')}`;

    setAlternateTag('nl', beneluxAltUrl);
    setAlternateTag('en', europeAltUrl);
    setAlternateTag('x-default', europeAltUrl);

    // Dynamic JSON-LD structured data
    let jsonLdScript = document.getElementById('dynamic-jsonld');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'dynamic-jsonld';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": `${baseUrl}/`,
          "name": content.meta.name,
          "description": content.meta.tagline,
          "inLanguage": content.meta.language
        },
        {
          "@type": "WebApplication",
          "@id": `${baseUrl}/#calculator`,
          "name": content.meta.id === 'europe' ? "High-Pressure Trailer TCO & Inspection Calculator" : "TCO Keuringskosten Calculator Hogedruktrailers",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "url": `${baseUrl}${content.navItems.find(i => i.id === 'tco-calculator')?.slug || '/tco-keuringskosten-calculator'}`,
          "description": content.meta.id === 'europe'
            ? "Calculate statutory inspection costs, pre-commissioning audits, and downtime for high-pressure steam trailers under PED 2014/68/EU."
            : "Bereken de werkelijke kosten van periodieke herkeuringen, KvI en stilstandsderving bij hogedruktrailers conform WBDA 2016 en PED 2014/68/EU.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${baseUrl}/#faq`,
          "mainEntity": content.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }
      ]
    };
    jsonLdScript.textContent = JSON.stringify(structuredData);

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, content]);

  const handleNavigate = (targetOrSlug: string) => {
    if (targetOrSlug === '/#faq' || targetOrSlug === '#faq') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
      }
      setTimeout(() => {
        const el = document.getElementById('faq');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const resolved = findPageByPathOrSlug(targetOrSlug);
    setCurrentPage(resolved.pageId);
    try {
      const search = window.location.search || '';
      const newUrl = `${resolved.slug}${search}`;
      window.history.pushState(null, '', newUrl);
    } catch {
      // Fallback for sandboxed iframes
      window.location.hash = resolved.slug;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWizard={() => setIsWizardOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenWizard={() => setIsWizardOpen(true)}
          />
        )}
        {currentPage === 'wbda-2016' && (
          <WbdaPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'two-liter-grens' && (
          <TwoLiterGrensPage
            onNavigate={handleNavigate}
            onOpenWizard={() => setIsWizardOpen(true)}
          />
        )}
        {currentPage === 'keuringsverplichtingen' && (
          <KeuringenPage
            onNavigate={handleNavigate}
            onOpenWizard={() => setIsWizardOpen(true)}
          />
        )}
        {currentPage === 'internationaal' && (
          <InternationalPage
            onNavigate={handleNavigate}
            onOpenWizard={() => setIsWizardOpen(true)}
          />
        )}
        {currentPage === 'tco-calculator' && (
          <TcoCalculatorPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'downloadcenter' && (
          <DownloadPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive 30-sec Wizard Modal */}
      <WizardModal
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Development/Preview site switcher (hidden in production) */}
      <DevSwitcher />
    </div>
  );
}
