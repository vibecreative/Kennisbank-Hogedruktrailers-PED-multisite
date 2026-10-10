import React from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Scale, 
  XCircle, 
  Wrench, 
  FileWarning, 
  Sparkles, 
  Droplets, 
  Tag, 
  ShieldAlert, 
  Building2 
} from 'lucide-react';
import { Wizard } from '../components/Wizard';
import { FaqAccordion } from '../components/FaqAccordion';
import { useSiteContent } from '../content';
import { getHomeTranslations } from '../content/translations/home';

const heroImage = '/images/hogedruktrailer_gevel_1791387997904.jpg';
const auditImage = '/images/trailer_keuring_cylinder_1791443122076.jpg';

interface HomePageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { content, target, lang } = useSiteContent();
  const isEurope = target === 'europe';
  const txt = getHomeTranslations(lang);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Background decorative atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/60 z-10" />
        <img
          src={heroImage}
          alt={isEurope ? "Professional high-pressure trailer cleaning building facade with hot water steam" : "Professionele hogedruktrailer in actie bij heetwater gevelreiniging"}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl lg:max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-amber-400 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-sm max-w-full">
              <Scale className="w-3.5 h-3.5 shrink-0" />
              <span className="lg:whitespace-nowrap">{content.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-tight text-balance max-w-3xl">
              {content.hero.title}{' '}
              <span className="text-amber-400">{content.hero.titleHighlight}</span>
            </h1>

            <div className="space-y-2 max-w-3xl">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {content.hero.description}
              </p>
              {content.hero.footnote && (
                <p className="text-xs text-slate-400/90 leading-relaxed italic border-l-2 border-amber-500/40 pl-3 pt-0.5">
                  {content.hero.footnoteLink ? (
                    (() => {
                      const text = content.hero.footnote;
                      const linkText = content.hero.footnoteLink.text;
                      const parts = text.split(linkText);
                      if (parts.length === 2) {
                        return (
                          <>
                            {parts[0]}
                            <a
                              href={content.hero.footnoteLink.path}
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate(content.hero.footnoteLink!.targetId);
                              }}
                              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 decoration-amber-400/60 transition-colors font-medium cursor-pointer"
                            >
                              {linkText}
                            </a>
                            {parts[1]}
                          </>
                        );
                      }
                      return text;
                    })()
                  ) : (
                    content.hero.footnote
                  )}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#keurings-check"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors shadow-sm"
              >
                <span>{content.hero.ctaWizard}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('tco-calculator')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <span>{content.hero.ctaCalculator}</span>
              </button>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{txt.hero.faqBtn}</span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {txt.hero.trustStandards}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {txt.hero.trustPed}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 1: Introductie & Probleemstelling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.section1.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              {txt.section1.title}
            </h2>
            <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{txt.section1.p1}</p>
              <p><strong>{txt.section1.p2}</strong></p>
              <p>{txt.section1.p3}</p>
              <p className="text-xs text-slate-500 italic pt-1">{txt.section1.note}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
              <button
                onClick={() => onNavigate('two-liter-grens')}
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold"
              >
                <span>{txt.section1.link2L}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                onClick={() => onNavigate('keuringsverplichtingen')}
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold"
              >
                <span>{txt.section1.linkGuide}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src={auditImage}
                alt={txt.section1.sidebarTitle}
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {txt.section1.sidebarBadge}
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">
                  {txt.section1.sidebarTitle}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {txt.section1.sidebarDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 2: De 3 kernvragen voor elke inkoper */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.section2.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {txt.section2.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.section2.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 font-mono font-bold flex items-center justify-center text-sm">
                  01
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {txt.section2.card1Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {txt.section2.card1Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-amber-800 font-medium">
                {txt.section2.card1Tag}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center text-sm">
                  02
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {txt.section2.card2Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {txt.section2.card2Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-sky-800 font-medium">
                {txt.section2.card2Tag}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 font-mono font-bold flex items-center justify-center text-sm">
                  03
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {txt.section2.card3Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {txt.section2.card3Desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
                {txt.section2.card3Tag}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie: Verkooppraatje vs. Juridische Realiteit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-2">
              <FileWarning className="w-4 h-4 text-amber-400" />
              {txt.commercialSilence.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {txt.commercialSilence.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {txt.commercialSilence.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contrast 1 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {txt.commercialSilence.whatDealerSaysBadge}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {txt.commercialSilence.c1Pitch}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {txt.commercialSilence.whatYouNeedToKnowBadge}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {txt.commercialSilence.c1Reality}
                  </p>
                </div>
              </div>
            </div>

            {/* Contrast 2 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {txt.commercialSilence.whatDealerSaysBadge}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {txt.commercialSilence.c2Pitch}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {txt.commercialSilence.whatYouNeedToKnowBadge}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {txt.commercialSilence.c2Reality}
                  </p>
                </div>
              </div>
            </div>

            {/* Contrast 3 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {txt.commercialSilence.whatDealerSaysBadge}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {txt.commercialSilence.c3Pitch}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {txt.commercialSilence.whatYouNeedToKnowBadge}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {txt.commercialSilence.c3Reality}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution callout */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="font-bold text-amber-400 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{txt.commercialSilence.solutionTitle}</span>
              </div>
              <p className="text-xs text-slate-300">
                {txt.commercialSilence.solutionDesc}
              </p>
            </div>
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold shrink-0 transition-colors"
            >
              <span>{txt.commercialSilence.solutionBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sectie: Toepassingen van Hogedruktrailers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.sectors.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {txt.sectors.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.sectors.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.sectors.s1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.sectors.s1Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.sectors.s2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.sectors.s2Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.sectors.s3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.sectors.s3Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.sectors.s4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.sectors.s4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie: Hoe Controleert U het Typeplaatje van Uw Trailer? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-700" />
                {txt.nameplate.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                {txt.nameplate.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {txt.nameplate.subtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  {txt.nameplate.sc1Badge}
                </span>
                <ShieldAlert className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.nameplate.sc1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.nameplate.sc1Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {txt.nameplate.sc2Badge}
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.nameplate.sc2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.nameplate.sc2Desc}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {txt.nameplate.sc3Badge}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.nameplate.sc3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.nameplate.sc3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie: De Twee Werelden bij Hogedruktrailers Vergeleken */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.twoWorlds.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {txt.twoWorlds.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.twoWorlds.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Box 1: Traditionele Trailer (Cat IV) */}
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-rose-100 text-rose-800 border border-rose-200">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {txt.twoWorlds.cat4Badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-rose-700">{txt.twoWorlds.cat4Vol}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {txt.twoWorlds.cat4Title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {txt.twoWorlds.cat4Desc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.cat4Item1Label}</strong>{' '}
                      {txt.twoWorlds.cat4Item1Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.cat4Item2Label}</strong>{' '}
                      {txt.twoWorlds.cat4Item2Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.cat4Item3Label}</strong>{' '}
                      {txt.twoWorlds.cat4Item3Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.cat4Item4Label}</strong>{' '}
                      {txt.twoWorlds.cat4Item4Desc}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-200 flex items-center justify-between text-xs text-rose-900 font-semibold">
                <span>{txt.twoWorlds.cat4CostLabel}</span>
                <span className="font-mono text-sm text-rose-700">{txt.twoWorlds.cat4CostValue}</span>
              </div>
            </div>

            {/* Box 2: Keuringsvrije Trailer (SEP) */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {txt.twoWorlds.sepBadge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-700">{txt.twoWorlds.sepVol}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {txt.twoWorlds.sepTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {txt.twoWorlds.sepDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.sepItem1Label}</strong>{' '}
                      {txt.twoWorlds.sepItem1Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.sepItem2Label}</strong>{' '}
                      {txt.twoWorlds.sepItem2Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.sepItem3Label}</strong>{' '}
                      {txt.twoWorlds.sepItem3Desc}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{txt.twoWorlds.sepItem4Label}</strong>{' '}
                      {txt.twoWorlds.sepItem4Desc}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-200 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <span>{txt.twoWorlds.sepCostLabel}</span>
                <span className="font-mono text-sm text-emerald-700">{txt.twoWorlds.sepCostValue}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-semibold text-slate-900 text-sm">
                {txt.twoWorlds.calcBannerTitle}
              </div>
              <div className="text-xs text-slate-500">
                {txt.twoWorlds.calcBannerDesc}
              </div>
            </div>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shrink-0 transition-colors"
            >
              <span>{txt.twoWorlds.calcBannerBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Embedded 30-Seconden Wizard Section */}
      <section id="keurings-check" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {isEurope ? "Quick Compliance Assessment" : "Directe Zelf-Check"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {content.wizard.title}
            </h2>
            <p className="text-sm text-slate-600">
              {content.wizard.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Wizard onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* Feature Navigation Teasers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {txt.teasers.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
              {txt.teasers.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            {txt.teasers.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onNavigate('two-liter-grens')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-700 uppercase font-semibold">
                {txt.teasers.t1Badge}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {txt.teasers.t1Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {txt.teasers.t1Desc}
            </p>
          </div>

          <div 
            onClick={() => onNavigate('tco-calculator')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-700 uppercase font-semibold">
                {txt.teasers.t2Badge}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {txt.teasers.t2Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {txt.teasers.t2Desc}
            </p>
          </div>

          <div 
            onClick={() => onNavigate('downloadcenter')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">
                {txt.teasers.t3Badge}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {txt.teasers.t3Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {txt.teasers.t3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Sectie 4: Veelgestelde Vragen (FAQ) direct op de homepage */}
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 scroll-mt-20">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                {txt.faqSection.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
                {txt.faqSection.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {txt.faqSection.desc}
            </p>
          </div>

          <FaqAccordion onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
