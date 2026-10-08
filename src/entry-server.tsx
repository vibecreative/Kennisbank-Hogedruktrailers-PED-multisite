import React from 'react';
import { renderToString } from 'react-dom/server';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WbdaPage } from './pages/WbdaPage';
import { TwoLiterGrensPage } from './pages/TwoLiterGrensPage';
import { KeuringenPage } from './pages/KeuringenPage';
import { InternationalPage } from './pages/InternationalPage';
import { TcoCalculatorPage } from './pages/TcoCalculatorPage';
import { DownloadPage } from './pages/DownloadPage';
import { FaqPage } from './pages/FaqPage';
import { setServerSiteTarget } from './content';
import { PageId } from './types';
import { SiteTarget } from './content/types';

const noop = () => {};

export function render(pageId: PageId, target?: SiteTarget): string {
  if (target) {
    setServerSiteTarget(target);
  }

  return renderToString(
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation */}
      <Navbar
        currentPage={pageId}
        onNavigate={noop}
        onOpenWizard={noop}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {pageId === 'home' && (
          <HomePage
            onNavigate={noop}
            onOpenWizard={noop}
          />
        )}
        {pageId === 'wbda-2016' && (
          <WbdaPage onNavigate={noop} />
        )}
        {pageId === 'two-liter-grens' && (
          <TwoLiterGrensPage
            onNavigate={noop}
            onOpenWizard={noop}
          />
        )}
        {pageId === 'keuringsverplichtingen' && (
          <KeuringenPage
            onNavigate={noop}
            onOpenWizard={noop}
          />
        )}
        {pageId === 'internationaal' && (
          <InternationalPage
            onNavigate={noop}
            onOpenWizard={noop}
          />
        )}
        {pageId === 'tco-calculator' && (
          <TcoCalculatorPage onNavigate={noop} />
        )}
        {pageId === 'downloadcenter' && (
          <DownloadPage onNavigate={noop} />
        )}
        {pageId === 'faq' && (
          <FaqPage onNavigate={noop} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={noop} />
    </div>
  );
}
