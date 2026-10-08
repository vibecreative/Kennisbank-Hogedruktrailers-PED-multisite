import React, { useState } from 'react';
import { 
  Globe2, 
  Scale, 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Building2, 
  Clock, 
  FileText, 
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Search,
  BookOpen,
  Filter
} from 'lucide-react';
import { useSiteContent } from '../content';

interface InternationalPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

import { 
  CountryInfo, 
  COUNTRIES_NL, 
  COUNTRIES_EN 
} from '../content/internationalData';

export type { CountryInfo };
export type RegionKey = 'all' | 'europe' | 'north-america' | 'apac';

export const COUNTRIES = COUNTRIES_NL;

export const InternationalPage: React.FC<InternationalPageProps> = ({ onNavigate, onOpenWizard }) => {
  const { target, switchTarget } = useSiteContent();
  const isEurope = target === 'europe';

  const [selectedCountry, setSelectedCountry] = useState<string>(isEurope ? 'DE' : 'NL');
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCountries = isEurope ? COUNTRIES_EN : COUNTRIES_NL;

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
                  Internationale &amp; Europese Portaalversie
                </p>
                <p className="text-sm font-medium text-slate-200">
                  Bekijk alle pan-Europese richtlijnen en landenspecifieke wetgevingen in het Engels op <span className="text-white font-bold">High-Pressure-Steam Inspection</span>.
                </p>
              </div>
            </div>
            <button
              onClick={() => switchTarget('europe')}
              className="shrink-0 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Naar EU-versie (EN)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Globe2 className="w-3.5 h-3.5" />
            {isEurope 
              ? "International Regulatory Atlas · EU & Global Regimes" 
              : "Wereldwijde & Pan-Europese Drukapparatuur Vergelijking"
            }
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {isEurope 
              ? "Pressure Equipment In-Service Regulations: EU & Global" 
              : "Keuringswetgeving Drukapparatuur Buiten Nederland"
            }
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {isEurope 
              ? "How do statutory inspection obligations in Germany, Belgium, France, the UK, the USA (ASME/NBIC), Canada (CSA B51), and Australia compare? An engineering analysis of international in-service inspection regimes, accredited bodies, and the global decisive impact of internal coil volume."
              : "Hoe verhouden de inspectieplichten in Duitsland, België, Frankrijk, het Verenigd Koninkrijk, de Verenigde Staten (ASME/NBIC), Canada (CSA B51) en Australië zich tot het Nederlandse WBDA 2016? Een diepgaande vergelijking van internationale inspectieregimes, keuringsorganen en de wereldwijde impact van het ketelvolume."
            }
          </p>
        </div>

        {/* The Fundamental Principle: Manufacturing Standard vs Operational In-Service Laws */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              {isEurope ? "The Legal Principle of Subsidiarity & National Sovereignty" : "Het Juridische Subsidiariteitsbeginsel & Nationale Soevereiniteit"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {isEurope ? "Why Do Inspection Intervals Diverge Globally?" : "Waarom Wijken Keuringstermijnen Wereldwijd Af?"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 p-5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Scale className="w-4 h-4 text-sky-600" />
                <span>{isEurope ? "Manufacturing & Market Access (Harmonised)" : "Fabricage & Markttoelating (Geharmoniseerd)"}</span>
              </div>
              <p className="text-xs sm:text-sm">
                {isEurope 
                  ? "Across the EU, PED 2014/68/EU harmonises the placing of pressure equipment on the Single Market. In North America, the ASME Boiler and Pressure Vessel Code (BPVC) serves a similar purpose for design and manufacturing stamps (S, U, M). Manufacturing criteria (such as Category IV in Europe) are universally consistent."
                  : "Binnen de EU harmoniseert de PED 2014/68/EU het op de markt brengen van drukapparatuur. In Noord-Amerika vervult de ASME Boiler and Pressure Vessel Code (BPVC) een vergelijkbare rol voor ontwerp en fabricagestempels (S, U, M). De classificatiecriteria (bijv. Categorie IV in Europa) zijn tijdens fabricage overal identiek."
                }
              </p>
            </div>

            <div className="space-y-3 p-5 bg-amber-50/50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 font-semibold text-amber-900">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{isEurope ? "In-Service Phase & Operation (National / State Jurisdiction)" : "Gebruiksfase & Exploitatie (Nationaal / Statelijk Bepaald)"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                {isEurope 
                  ? "The operational in-service phase (periodic recertification, inspector powers, audit intervals, operating permits) is never harmonised internationally. The Netherlands enforces 24-month cycles (WBDA), Belgium requires annual inspections (Codex), Germany applies 1-3 year intervals (BetrSichV), and the US/Canada require an annual Certificate of Operation under NBIC and CSA B51."
                  : "De gebruiksfase (periodieke herkeuringen, bevoegdheden van inspecteurs, termijnen en exploitatiecertificaten) is nooit internationaal geharmoniseerd. In Nederland geldt een 2-jaarlijkse cyclus (WBDA), in België standaard 12 maanden (Codex), in Duitsland een complexe 1/3-jaars cyclus (BetrSichV) en in de VS en Canada een verplicht jaarlijks Certificate of Operation onder het NBIC (NB-23) en CSA B51."
                }
              </p>
            </div>
          </div>

          <div className="p-4 bg-sky-50/50 border border-sky-200 rounded-lg flex items-start gap-3 text-xs text-sky-900 leading-relaxed">
            <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong>{isEurope ? "Essential insight for fleet buyers & contractors:" : "Cruciaal inzicht voor machinebouwers en internationale aannemers:"}</strong> {isEurope ? "A CE mark or ASME stamp only confers the right to sell or import equipment. Once operational on European or North American job sites, local in-service legislation immediately governs." : "Een CE-markering of ASME-stempel geeft uitsluitend het recht om een machine te verkopen of in te voeren. Zodra de stekker in het stopcontact gaat of de brander/warmtewisselaar ontsteekt, treedt de lokale exploitatiewetgeving van het betreffende land in werking."}
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
              {isEurope ? `All Jurisdictions (${COUNTRIES.length})` : `Alle Regio's (${COUNTRIES.length})`}
            </button>
            <button
              onClick={() => setSelectedRegion('europe')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'europe'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isEurope ? "Europe (6)" : "Europa (6)"}
            </button>
            <button
              onClick={() => setSelectedRegion('north-america')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'north-america'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isEurope ? "North America (2)" : "Noord-Amerika (2)"}
            </button>
            <button
              onClick={() => setSelectedRegion('apac')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                selectedRegion === 'apac'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isEurope ? "Asia-Pacific (1)" : "Azië-Pacific (1)"}
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isEurope ? "Search country, act or standard (e.g. BetrSichV, PSSR, ASME)..." : "Zoek land, wet of norm..."}
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
                {isEurope ? "International Comparison Matrix" : "Internationale Vergelijkingstabel"}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900 mt-1">
                {isEurope ? "Cross-Border Audit Regimes for High-Pressure Steam" : "Vergelijking: Keuringsregimes Zware Drukapparatuur / Stoomketels"}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {isEurope ? "Updated in accordance with national statutory codes" : "Bijgewerkt conform vigerende nationale & statelijke wetgeving"}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-700">
                  <th className="p-4 w-[16%]">{isEurope ? "Country & Region" : "Land & Regio"}</th>
                  <th className="p-4 w-[22%]">{isEurope ? "Statutory Act & Standard" : "Wettelijk Kader & Norm"}</th>
                  <th className="p-4 w-[18%]">{isEurope ? "Accredited Body" : "Inspectieorgaan"}</th>
                  <th className="p-4 w-[20%]">{isEurope ? "Commissioning Certificate" : "Document bij Ingebruikname"}</th>
                  <th className="p-4 w-[24%]">{isEurope ? "Recertification Interval" : "Herkeuringstermijn"}</th>
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
              {isEurope 
                ? "Click on any row in the table to open the comprehensive statutory country dossier below." 
                : "Klik op een rij in de tabel om het volledige juridische landendossier hieronder te openen."
              }
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
                    {isEurope ? "Country Dossier" : "Landendossier"} &middot; {activeCountry.regionLabel}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-bold">
                    ISO {activeCountry.code}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-slate-900">
                  {activeCountry.name} — {isEurope ? "Statutory Regulatory Dossier" : "Regelgeving in Detail"}
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
                  {isEurope ? "Statutory Regulatory Framework & Applied Standard" : "Wettelijk Reglementair Kader & Norm"}
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  {activeCountry.law}
                </p>
                <p className="text-xs font-mono text-sky-700">
                  {isEurope ? "Applied Technical Standard: " : "Toegepaste Technische Code: "}{activeCountry.standard}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-200">
                <span className="text-xs font-mono uppercase font-semibold text-slate-500">
                  {isEurope ? "Appointed Inspection Bodies" : "Aangewezen Inspectieorganen"} ({activeCountry.bodyType})
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
                  {isEurope ? "Pre-Commissioning Procedure" : "Procedure Vóór Eerste Ingebruikname"}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {activeCountry.kviName}
                </p>
                {activeCountry.operatingCertificateName && (
                  <p className="text-[11px] text-slate-500">
                    {isEurope ? "Statutory operating permit: " : "Vereist exploitatiebewijs: "}
                    <strong className="text-slate-800">{activeCountry.operatingCertificateName}</strong>
                  </p>
                )}
              </div>
            </div>

            {/* Box 2: Herkeuring & Sancties */}
            <div className="space-y-4 p-5 rounded-lg border border-amber-200 bg-amber-50/20">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase font-semibold text-amber-800">
                  {isEurope ? "Inspection Frequency & Audit Scope (Category IV Equipment)" : "Inspectiefrequentie & Werkwijze (Grote Stoomapparatuur)"}
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
                  {isEurope ? "Enforcement & Penalties" : "Handhaving & Boeteregime"}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {activeCountry.penalties}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-amber-200">
                <span className="text-xs font-mono uppercase font-semibold text-slate-700">
                  {isEurope ? "Specific Cross-Border Operational Risk" : "Specifiek Risico voor Internationale / Grensoverschrijdende Inzet"}
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
                {isEurope 
                  ? `Volume Thresholds & Exemptions in ${activeCountry.name}` 
                  : `Drempelwaarden & Volumevrijstellingen in ${activeCountry.name}`
                }
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
                {isEurope ? "Transatlantic Focus: North America" : "Speciale Focus: Noord-Amerika"}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                {isEurope ? "How Steam & Pressure Regulations Operate in the US and Canada" : "Hoe Werkt Stoom- en Drukwetgeving in de VS en Canada?"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>{isEurope ? "1. ASME BPVC (Manufacturing)" : "1. ASME BPVC (Fabricage)"}</span>
              </div>
              <p>
                {isEurope 
                  ? "Across the US and Canada, boiler and vessel manufacturing is governed by the ASME Boiler and Pressure Vessel Code. High-pressure steam generators fall under Section I (Power Boilers). OEMs must possess an accredited ASME 'S' or 'M' stamp (Miniature Boiler) and register with The National Board."
                  : "In de VS en Canada is het ontwerp en de fabricage van ketels en vaten gebaseerd op de ASME Boiler and Pressure Vessel Code. Een hogedruk stoomgenerator valt onder Section I (Power Boilers). De fabrikant moet beschikken over een geaccrediteerde ASME 'S'-stempel of 'M'-stempel en de apparatuur registreren bij The National Board."
                }
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Scale className="w-4 h-4 text-amber-600" />
                <span>{isEurope ? "2. NBIC NB-23 (In-Service Inspection)" : "2. NBIC NB-23 (In-Service Keuring)"}</span>
              </div>
              <p>
                {isEurope 
                  ? "Once deployed, the National Board Inspection Code (NBIC / NB-23 Part 2) governs. In virtually all US states, annual inspection (every 12 months) by a commissioned National Board Inspector is legally mandatory to maintain a valid Certificate of Operation."
                  : "Zodra de ketel in bedrijf is, geldt de National Board Inspection Code (NBIC / NB-23 Deel 2). In vrijwel alle Amerikaanse staten is een jaarlijkse inspectie (elke 12 maanden) wettelijk verplicht door een gecommitteerde National Board Inspector."
                }
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>{isEurope ? "3. Canada: CRN System & CSA B51" : "3. Canada: Het CRN Systeem & CSA B51"}</span>
              </div>
              <p>
                {isEurope 
                  ? "Canada additionally enforces the Canadian Registration Number (CRN) system. Every pressurized fitting and coil must be registered per province (TSSA in Ontario, ABSA in Alberta). Operating without a valid CRN is a statutory violation under provincial Safety Codes Acts."
                  : "Canada hanteert daarnaast het strikte Canadian Registration Number (CRN) systeem. Elk drukvat, afsluiter en veiligheidsklep moet per provincie geregistreerd zijn. Zonder geldig CRN-stempel is ingebruikname een zware overtreding."
                }
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2 text-xs text-slate-700">
            <div className="font-bold text-amber-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>{isEurope ? "Comparison: The European 2-Litre Threshold vs. US 'Coil Washer' Exemptions" : "Vergelijking: De Europese 2-Liter Grens vs. Amerikaanse \"Coil Washer\" Vrijstellingen"}</span>
            </div>
            <p className="leading-relaxed">
              {isEurope 
                ? "In Europe, Article 4(3) of the PED categorises heat exchangers ≤ 2 litres under Sound Engineering Practice (SEP), exempt from Notified Body audits. In the United States, most states maintain an equivalent statutory exemption for 'Coil-type forced-circulation water heaters or steam cleaners without a steam drum'. Below threshold volume and without accumulator vessels, units are exempt from mandatory State Boiler Operator licensing."
                : "In Europa stelt Artikel 4 lid 3 van de PED warmtewisselaars ≤ 2 liter categorisch vrij van Notified Body keuring en periodieke stoomketelwetgeving (SEP). In de Verenigde Staten hanteren de meeste deelstaten een soortgelijke uitzondering voor zgn. \"Coil-type forced-circulation water heaters or steam cleaners without a steam drum\"."
              }
            </p>
          </div>
        </div>

        {/* Global Operational Takeaways: Summary for Contractors and Buyers */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {isEurope ? "Strategic Fleet Procurement & Cross-Border Advantage" : "Strategisch Inkoop- & Exportvoordeel"}
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
              {isEurope 
                ? "Why Low Water Volume (≤ 2L) is the Global Passport for Cross-Border Operations" 
                : "Waarom Minimale Waterinhoud Hét Paspoort Is voor Wereldwijde Inzet"
              }
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {isEurope 
              ? "For industrial cleaning contractors and fleet operators working across European and transatlantic borders, heavy steam boiler classifications (> 2L PED Category IV in Europe; Power Boilers in North America) generate substantial administrative and operational friction:"
              : "Voor reinigingsbedrijven, industriële aannemers en machinefabrikanten die over landsgrenzen opereren levert een zware stoomketel (in Europa > 2 liter, PED Categorie IV; in de VS een reguliere Power Boiler) een astronomische administratieve en operationele last op:"
            }
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">🇳🇱 {isEurope ? "Netherlands" : "Nederland"}</span>
              <p className="text-slate-300">{isEurope ? "KvI commissioning and 24-month recertification by NL-CBI (WBDA 2016)." : "KvI-keuring vóór ingebruikneming en elke 24 maanden herkeuring door een NL-CBI (WBDA 2016)."}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">🇩🇪 {isEurope ? "Germany" : "Duitsland"}</span>
              <p className="text-slate-300">{isEurope ? "Operating permit (Erlaubnis) Gewerbeaufsicht + recurring ZÜS audits." : "Exploitatievergunning (Erlaubnis) Gewerbeaufsicht + jaarlijks ZÜS (TÜV/DEKRA) toezicht."}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">🇧🇪 {isEurope ? "Belgium" : "België"}</span>
              <p className="text-slate-300">{isEurope ? "Annual statutory inspection by an EDTC (Vinçotte, BTV, Apragaz) under Codex." : "Standaard jaarlijkse herkeuring door een EDTC (Vinçotte, BTV, Apragaz) conform de Codex."}</p>
            </div>
            <div className="p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-1">
              <span className="text-amber-400 font-bold block text-sm">🇺🇸 USA / 🇨🇦 Canada</span>
              <p className="text-slate-300">{isEurope ? "Annual inspection by National Board / TSSA inspector for Certificate of Operation." : "Jaarlijkse inspectie door National Board / TSSA inspecteur voor een geldig Certificate of Operation."}</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {isEurope 
              ? "Choosing advanced equipment with a continuous-flow heating coil strictly ≤ 2 litres (Article 4(3) PED SEP across the EU and within coil exemptions in the US) provides statutory exemption in virtually all Western jurisdictions. Deploy immediately without local licensing roadblocks or periodic shutdown inspections."
              : "Kies u daarentegen voor geavanceerde apparatuur met een continu doorstroomspiraal onder de 2 liter (Artikel 4 lid 3 PED / SEP in Europa en binnen de coil-vrijstellingsdrempels in de VS), dan is de installatie in vrijwel alle westerse jurisdicties vrijgesteld van het zware stoomketelregime. U mag direct aan de slag zonder lokale keuringstrajecten of vergunningen."
            }
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{isEurope ? "Explore the Technical 2-Litre Matrix" : "Bekijk de Technische 2-Liter Matrix"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Calculate Financial Variances in TCO Tool" : "Bereken Financiële Voordelen in TCO Tool"}</span>
            </button>
            <button
              onClick={onOpenWizard}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Start 30-Sec Compliance Check" : "Start 30-Sec Wetgevingscheck"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
