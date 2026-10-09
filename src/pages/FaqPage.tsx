import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { useSiteContent } from '../content';
import { getFaqPageTranslations } from '../content/translations/faqPage';

interface FaqPageProps {
  onNavigate: (slug: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const { lang } = useSiteContent();
  const txt = getFaqPageTranslations(lang);

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{txt.header.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            {txt.header.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {txt.header.desc}
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <FaqAccordion onNavigate={onNavigate} />

        {/* Deep Dive Cards */}
        <section className="pt-8 border-t border-slate-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.deepDive.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {txt.deepDive.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              onClick={() => onNavigate('wbda-2016')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-amber-700 font-semibold uppercase">
                {txt.deepDive.card1Badge}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{txt.deepDive.card1Title}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {txt.deepDive.card1Desc}
              </p>
            </div>

            <div
              onClick={() => onNavigate('two-liter-grens')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-emerald-700 font-semibold uppercase">
                {txt.deepDive.card2Badge}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{txt.deepDive.card2Title}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {txt.deepDive.card2Desc}
              </p>
            </div>

            <div
              onClick={() => onNavigate('tco-calculator')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-sky-700 font-semibold uppercase">
                {txt.deepDive.card3Badge}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{txt.deepDive.card3Title}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {txt.deepDive.card3Desc}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
