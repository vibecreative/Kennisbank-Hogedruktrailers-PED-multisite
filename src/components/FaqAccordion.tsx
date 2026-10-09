import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { useSiteContent } from '../content';

interface FaqAccordionProps {
  onNavigate?: (slug: string) => void;
  initialCategory?: string;
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  onNavigate,
  initialCategory = 'all',
  className = '',
}) => {
  const { content, target, t } = useSiteContent();
  const isEurope = target === 'europe';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
    'wat-is-wbda-2016': true,
    'wat-is-de-2-liter-grens': true,
  });

  const allCategoryLabel = t({
    nl: 'Alle Vragen',
    fr: 'Toutes les Questions',
    de: 'Alle Fragen',
    en: 'All Questions',
  });

  const categories = useMemo(() => {
    const rawCategories = Array.from(new Set(content.faq.map((item) => item.category)));
    return [
      { id: 'all', label: allCategoryLabel },
      ...rawCategories.map((c) => ({ id: c, label: c })),
    ];
  }, [content.faq, allCategoryLabel]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredItems.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const filteredItems = useMemo(() => {
    return content.faq.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [content.faq, selectedCategory, searchQuery]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search & Quick Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t({
              nl: 'Zoek in veelgestelde vragen (bijv. KvI, 2-liter, boetes)...',
              fr: 'Rechercher dans la FAQ (ex. seuil 2 litres, EDTC, Catégorie IV, amendes)...',
              de: 'FAQ durchsuchen (z. B. 2-Liter-Grenze, EDTC, Kategorie IV, Strafen)...',
              en: 'Search FAQ (e.g., 2-litre threshold, Category IV, NoBo, penalties)...',
            })}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Expand / Collapse All */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-500">
          <button
            onClick={expandAll}
            className="hover:text-amber-700 underline underline-offset-2 transition-colors"
          >
            {t({ nl: 'Alles uitklappen', fr: 'Tout déplier', de: 'Alle ausklappen', en: 'Expand all' })}
          </button>
          <span className="text-slate-300">·</span>
          <button
            onClick={collapseAll}
            className="hover:text-amber-700 underline underline-offset-2 transition-colors"
          >
            {t({ nl: 'Alles inklappen', fr: 'Tout replier', de: 'Alle einklappen', en: 'Collapse all' })}
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* FAQ Items Accordion */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-2">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-sm font-semibold text-slate-800">
            {isEurope 
              ? `No questions found matching "${searchQuery}"`
              : t({
                  nl: `Geen vragen gevonden voor "${searchQuery}"`,
                  fr: `Aucune question trouvée pour "${searchQuery}"`,
                  de: `Keine Fragen gefunden für "${searchQuery}"`,
                })
            }
          </p>
          <p className="text-xs text-slate-500">
            {t({
              nl: 'Probeer een andere zoekterm of selecteer een andere categorie.',
              fr: 'Essayez un autre mot-clé ou réinitialisez les catégories.',
              de: 'Versuchen Sie einen anderen Suchbegriff oder setzen Sie die Filter zurück.',
              en: 'Try another search term or reset category filters.',
            })}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-md transition-colors mt-2"
          >
            {t({
              nl: 'Wis zoekopdracht & filters',
              fr: 'Réinitialiser les filtres',
              de: 'Filter zurücksetzen',
              en: 'Reset filters',
            })}
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item, index) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-amber-600/80 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50 shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-1">
                      <span className="font-serif font-bold text-sm sm:text-base text-slate-900 block leading-snug">
                        {item.question}
                      </span>
                      <span className="inline-block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/30 space-y-3">
                    <p>{item.answer}</p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 text-xs">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-amber-500" />
                        <span>
                          {t({
                            nl: 'Wettelijke grondslag: WBDA 2016, Codex Welzijn & Richtlijn 2014/68/EU',
                            fr: 'Fondement juridique : Codex Livre IV, ITM & Directive 2014/68/UE',
                            de: 'Rechtsgrundlage: ITM, Codex Wohlbefinden & Richtlinie 2014/68/EU',
                            en: 'Reference: Directive 2014/68/EU & In-Service Regulations',
                          })}
                        </span>
                      </span>

                      {onNavigate && (
                        <button
                          onClick={() => onNavigate('two-liter-grens')}
                          className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-800 font-medium"
                        >
                          <span>
                            {t({
                              nl: 'Lees meer in de kennisbank',
                              fr: 'En savoir plus dans la base de connaissances',
                              de: 'Mehr in der Wissensdatenbank lesen',
                              en: 'Read technical background',
                            })}
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
