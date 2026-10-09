import React, { useState } from 'react';
import { 
  Globe2, 
  Scale, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  HelpCircle,
  Search,
  BookOpen
} from 'lucide-react';
import { useSiteContent } from '../content';
import { CountryInfo, getCountryData } from '../content/internationalData';
import { getInternationalTranslations } from '../content/translations/international';

export type { CountryInfo };
export type RegionKey = 'all' | 'europe' | 'north-america' | 'apac';

interface InternationalPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const InternationalPage: React.FC<InternationalPageProps> = ({ onNavigate, onOpenWizard }) => {
  const { target, lang, switchTarget, isSeparateDomain, getTargetUrl } = useSiteContent();
  const isEurope = target === 'europe';
  const txt = getInternationalTranslations(lang);

  const [selectedCountry, setSelectedCountry] = useState<string>(isEurope ? 'DE' : 'NL');
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCountries = getCountryData(lang);

  const filteredCountries = currentCountries.filter(c => {
    const matchesRegion = selectedRegion === 'all' || c.region === selectedRegion;
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.law.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bodyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.standard.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeCountry = currentCountries.find(c => c.code === selectedCountry) || currentCountries[0];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* EU Switcher Banner for Benelux Visitors */}
        {!isEurope && (
          <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-sky-900 shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇪🇺</span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  {txt.euBanner.badge}
                </p>
                <p className="text-sm font-medium text-slate-200">
                  {txt.euBanner.text}
                </p>
              </div>
            </div>
            <a
              href={getTargetUrl('europe')}
              onClick={(e) => {
                if (!isSeparateDomain) {
                  e.preventDefault();
                  switchTarget('europe');
                }
              }}
              className="shrink-0 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>{txt.euBanner.button}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Globe2 className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {txt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {txt.header.desc}
          </p>
        </div>

        {/* The Fundamental Principle: Manufacturing Standard vs Operational In-Service Laws */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              {txt.principle.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {txt.principle.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 p-5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Scale className="w-4 h-4 text-sky-600" />
                <span>{txt.principle.box1Title}</span>
              </div>
              <p className="text-xs sm:text-sm">
                {txt.principle.box1Text}
              </p>
            </div>

            <div className="space-y-3 p-5 bg-amber-50/50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 font-semibold text-amber-900">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{txt.principle.box2Title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                {txt.principle.box2Text}
              </p>
            </div>
          </div>

          <div className="p-4 bg-sky-50/50 border border-sky-200 rounded-lg flex items-start gap-3 text-xs text-sky-900 leading-relaxed">
            <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong>{txt.principle.insightTitle}</strong> {txt.principle.insightText}
            </div>
          </div>
        </div>

        {/* Filter Controls & Region Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="inline-flex p-1 bg-slate-200/70 rounded-lg text-xs font-medium">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {txt.filters.all} ({currentCountries.length})
            </button>
            <button
              onClick={() => setSelectedRegion('europe')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'europe'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {txt.filters.europe}
            </button>
            <button
              onClick={() => setSelectedRegion('north-america')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'north-america'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {txt.filters.northAmerica}
            </button>
            <button
              onClick={() => setSelectedRegion('apac')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'apac'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {txt.filters.apac}
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={txt.filters.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Master Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4">
          <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700">
                {txt.table.badge}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900 mt-1">
                {txt.table.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {txt.table.source}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                  <th className="p-4 w-[16%]">{txt.table.colCountry}</th>
                  <th className="p-4 w-[22%]">{txt.table.colLaw}</th>
                  <th className="p-4 w-[18%]">{txt.table.colBody}</th>
                  <th className="p-4 w-[20%]">{txt.table.colCert}</th>
                  <th className="p-4 w-[24%]">{txt.table.colInterval}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCountries.map((c) => (
                  <tr 
                    key={c.code}
                    onClick={() => setSelectedCountry(c.code)}
                    className={`cursor-pointer transition-colors ${
                      selectedCountry === c.code ? 'bg-amber-50/70 font-medium' : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="p-4 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl shrink-0" role="img" aria-label={c.name}>{c.flag}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span>{c.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono font-normal uppercase">{c.regionLabel}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 text-xs">
                      <div className="font-medium text-slate-800">{c.law.split('&')[0]}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">{c.standard}</div>
                    </td>
                    <td className="p-4 font-mono text-xs text-slate-700">
                      <span className="font-semibold text-slate-900">{c.bodyType.split('(')[0]}</span>
                      {c.bodyType.includes('(') && (
                        <span className="text-[11px] text-slate-500 block">({c.bodyType.split('(')[1]}</span>
                      )}
                    </td>
                    <td className="p-4 text-xs text-slate-700">
                      {c.operatingCertificateName || c.kviName.split('→')[0]}
                    </td>
                    <td className="p-4 text-xs font-bold text-slate-900">
                      <div className="inline-flex items-center gap-1.5 text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded">
                        <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{c.herkeuringTermijn}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 text-center flex items-center justify-center gap-2">
            <span>💡</span>
            <span>
              {txt.table.clickHint}
            </span>
          </div>
        </div>

        {/* Detailed Country Deep-Dive Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl" role="img" aria-label={activeCountry.name}>{activeCountry.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {txt.dossier.badge} &middot; {activeCountry.regionLabel}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold">
                    ISO {activeCountry.code}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-slate-900">
                  {activeCountry.name} — {txt.dossier.detailsSuffix}
                </h2>
              </div>
            </div>
            
            {/* Quick Country Switcher */}
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {currentCountries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSelectedCountry(c.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                    selectedCountry === c.code
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  title={c.name}
                >
                  {c.flag} {c.code}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Wettelijk kader & Instanties */}
            <div className="space-y-4 p-5 rounded-lg border border-slate-200 bg-slate-50/50">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-semibold text-slate-500">
                  {txt.dossier.box1Title}
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  {activeCountry.law}
                </p>
                <p className="text-xs font-mono text-sky-700">
                  {txt.dossier.box1Standard}{activeCountry.standard}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-200">
                <span className="text-xs font-mono uppercase font-semibold text-slate-500">
                  {txt.dossier.box1Bodies} ({activeCountry.bodyType})
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeCountry.bodies.map((b, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 text-xs rounded shadow-2xs font-mono"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-200">
                <span className="text-xs font-mono uppercase font-semibold text-slate-500">
                  {txt.dossier.box1Procedure}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {activeCountry.kviName}
                </p>
                {activeCountry.operatingCertificateName && (
                  <p className="text-[11px] text-slate-500">
                    {txt.dossier.box1Permit}
                    <strong className="text-slate-800">{activeCountry.operatingCertificateName}</strong>
                  </p>
                )}
              </div>
            </div>

            {/* Box 2: Herkeuring & Sancties */}
            <div className="space-y-4 p-5 rounded-lg border border-amber-200 bg-amber-50/20">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-semibold text-amber-800">
                  {txt.dossier.box2Title}
                </span>
                <p className="text-base font-bold text-slate-900">
                  {activeCountry.herkeuringTermijn}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeCountry.herkeuringDetails}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-amber-200">
                <span className="text-xs font-mono uppercase font-semibold text-rose-700">
                  {txt.dossier.box2Penalties}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activeCountry.penalties}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-amber-200">
                <span className="text-xs font-mono uppercase font-semibold text-slate-700">
                  {txt.dossier.box2Risk}
                </span>
                <p className="text-xs text-slate-600 italic">
                  {activeCountry.specificRisk}
                </p>
              </div>
            </div>
          </div>

          {/* Impact on < 2 Liter (SEP) or Small Volume in this country */}
          <div className="border-2 border-emerald-300 bg-emerald-50/40 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-serif font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                {txt.dossier.box3Title} {activeCountry.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeCountry.twoLiterExemption}
            </p>
          </div>
        </div>

        {/* Deep Dive Section: North American Regulatory Framework (ASME vs NBIC) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-xl">
              🇺🇸
            </div>
            <div>
              <span className="text-xs font-mono uppercase font-semibold text-amber-700">
                {txt.transatlantic.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                {txt.transatlantic.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>{txt.transatlantic.c1Title}</span>
              </div>
              <p>
                {txt.transatlantic.c1Text}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Scale className="w-4 h-4 text-amber-600" />
                <span>{txt.transatlantic.c2Title}</span>
              </div>
              <p>
                {txt.transatlantic.c2Text}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>{txt.transatlantic.c3Title}</span>
              </div>
              <p>
                {txt.transatlantic.c3Text}
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2 text-xs text-slate-700">
            <div className="font-bold text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>{txt.transatlantic.compareTitle}</span>
            </div>
            <p className="leading-relaxed">
              {txt.transatlantic.compareText}
            </p>
          </div>
        </div>

        {/* Global Operational Takeaways: Summary for Contractors and Buyers */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {txt.takeaway.badge}
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
              {txt.takeaway.title}
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {txt.takeaway.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">{txt.takeaway.c1Title}</span>
              <p className="text-slate-300">{txt.takeaway.c1Text}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">{txt.takeaway.c2Title}</span>
              <p className="text-slate-300">{txt.takeaway.c2Text}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">{txt.takeaway.c3Title}</span>
              <p className="text-slate-300">{txt.takeaway.c3Text}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">{txt.takeaway.c4Title}</span>
              <p className="text-slate-300">{txt.takeaway.c4Text}</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {txt.takeaway.summary}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{txt.takeaway.btnMatrix}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{txt.takeaway.btnTco}</span>
            </button>
            <button
              onClick={onOpenWizard}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{txt.takeaway.btnWizard}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
