import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '../content';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenWizard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { target, beneluxLang, setLanguage, availableLanguages, content } = useSiteContent();

  const handleNavClick = (slug: string) => {
    onNavigate(slug);
    setMobileMenuOpen(false);
  };

  // Determine items for main navigation
  const navItems = content.navItems.filter((item) => {
    if (item.id === 'home' || item.id === 'faq') return false;
    if (item.id === 'downloadcenter') return false;
    if (target === 'benelux' && item.id === 'internationaal') return false;
    return true;
  });

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-6 h-16">
          {/* Zone 1: Wordmark with logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              title={target === 'europe' ? 'Back to homepage' : 'Terug naar homepage'}
              aria-label={content.meta.name}
              className="text-left font-serif text-sm sm:text-[15px] xl:text-base font-bold tracking-tight text-slate-900 hover:text-amber-700 transition-colors flex items-center gap-2 group shrink-0"
            >
              <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-600 inline-block shrink-0 group-hover:scale-105 transition-transform" />
              <span>{content.meta.shortName}</span>
            </button>
          </div>

          {/* Zone 2: Spacious text navigation links */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5 text-[13px] xl:text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.slug)}
                  className={`transition-colors whitespace-nowrap py-1 relative ${
                    isActive
                      ? 'text-slate-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language switcher (for Benelux) + Primary CTA */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {target === 'benelux' && (
              <div 
                className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs font-semibold"
                aria-label="Taal selecteren / Sélection de langue / Sprachauswahl"
              >
                {availableLanguages.map((l) => {
                  const isActive = beneluxLang === l.code;
                  return (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      title={`${l.label} (${l.countryNote})`}
                      aria-label={`Kies ${l.label}`}
                      aria-pressed={isActive}
                      className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${
                        isActive
                          ? 'bg-white text-slate-950 shadow-xs font-bold'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                      }`}
                    >
                      <span className="text-xs leading-none">{l.flag}</span>
                      <span className="uppercase text-[11px] font-mono">{l.code}</span>
                    </button>
                  );
                })}
              </div>
            )}

            <button
              onClick={onOpenWizard}
              className="px-3 xl:px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5"
            >
              <span>{content.hero.ctaWizard}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </button>
          </div>

          {/* Mobile hamburger button + quick language badge */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {target === 'benelux' && (
              <div className="sm:hidden flex items-center bg-slate-100 rounded-md border border-slate-200 p-0.5">
                {availableLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-1.5 py-1 text-[10px] font-mono rounded ${
                      beneluxLang === l.code ? 'bg-amber-600 text-white font-bold' : 'text-slate-600'
                    }`}
                  >
                    {l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={onOpenWizard}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md"
            >
              Check
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label={target === 'europe' ? 'Open navigation menu' : 'Menu openen'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {target === 'benelux' && (
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                {beneluxLang === 'fr' 
                  ? 'Langue / Taal / Sprache' 
                  : beneluxLang === 'de' 
                  ? 'Sprache / Taal / Langue' 
                  : 'Taal / Langue / Sprache'}
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {availableLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`py-1.5 px-2 rounded-md text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                      beneluxLang === l.code
                        ? 'bg-amber-600 text-white font-bold shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
            {target === 'europe' ? 'Navigation' : beneluxLang === 'fr' ? 'Navigation' : beneluxLang === 'de' ? 'Navigation' : 'Navigatie'}
          </div>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.slug)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-50 text-amber-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">{item.shortTitle}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{content.hero.ctaWizard}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
