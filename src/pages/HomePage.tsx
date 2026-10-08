import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  FileCheck2, 
  AlertTriangle, 
  TrendingUp,
  Layers,
  CheckCircle2,
  Scale,
  XCircle,
  Truck,
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

const heroImage = '/images/hogedruktrailer_gevel_1791387997904.jpg';
const auditImage = '/images/trailer_keuring_cylinder_1791443122076.jpg';

interface HomePageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { content, target } = useSiteContent();
  const isEurope = target === 'europe';

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Background decorative atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/70 z-10" />
        <img
          src={heroImage}
          alt={isEurope ? "Professional high-pressure trailer cleaning building facade with hot water steam" : "Professionele hogedruktrailer in actie bij heetwater gevelreiniging"}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
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

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {content.hero.description}
            </p>

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
                <span>{isEurope ? "FAQ & Legal Knowledge" : "Veelgestelde Vragen (FAQ)"}</span>
              </a>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {isEurope ? "Harmonised Standards EN 12952 / EN 13445" : "Conform WBDA 2016, Codex Welzijn & ITM"}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {isEurope ? "Directive 2014/68/EU (PED)" : "Europese Richtlijn PED 2014/68/EU"}
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
              {isEurope ? "Section 1 · High-Pressure Trailer Compliance Context" : "Sectie 1 · De Realiteit rond Hogedruktrailers"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-snug">
              {isEurope ? "What Dealers Rarely Disclose When Selling High-Pressure Trailers" : "Wat u eigenlijk ook moet weten bij de aankoop van een hogedruktrailer"}
            </h2>
            <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              {isEurope ? (
                <>
                  <p>
                    When procuring a professional high-pressure hot water or steam trailer (for facade maintenance, chewing gum abatement, weed control, or industrial surface cleaning), sales conversations invariably center on working pressure (up to 500 bar), engine power, and cleaning throughput.
                  </p>
                  <p>
                    <strong>What dealerships almost never disclose:</strong> If the internal fluid volume of the burner/heat exchanger exceeds 2 litres at &gt; 110 °C, that high-pressure trailer legally represents a mobile steam boiler under <strong>PED Category IV</strong>. Consequently, the buyer is legally obligated to contract an accredited body for a formal on-site commissioning audit, undergo periodic (biennial)* recertifications, and respect strict OEM spare parts lock-in.
                  </p>
                  <p>
                    Conversely, high-pressure trailers designed with a burner/heat exchanger strictly <strong>≤ 2 litres</strong> qualify under <strong>Sound Engineering Practice (Art. 4.3 SEP)</strong>, completely exempting the owner from mandatory pre-commissioning examinations, periodic audits, and OEM vendor lock-in.
                  </p>
                  <p className="text-xs text-slate-500 italic pt-1">
                    * This recertification interval may differ per country (e.g. in the Netherlands 24 months under WBDA, in Belgium an annual recertification is required under the Codex, in Germany 1–3 years under BetrSichV, and in specific circumstances manufacturers or inspection bodies may stipulate differing intervals).
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Bij de aanschaf van een professionele heetwater- of stoom-hogedruktrailer (voor gevelreiniging, kauwgomverwijdering, onkruidbestrijding of industriële reiniging) ligt de focus logischerwijs vaak op werkdruk (tot 500 bar), motortype en reinigingskracht.
                  </p>
                  <p>
                    <strong>Wat u eigenlijk ook moet weten bij de aankoop:</strong> Heeft de hogedruktrailer een inhoud van de brander/warmtewisselaar van meer dan 2 liter bij &gt; 110 °C? Dan is de hogedruktrailer voor de wet een <strong>PED Categorie IV stoominstallatie</strong>. Vóór de eerste inzet is een Keuring voor Ingebruikneming (KvI) door een NL-CBI (Kiwa, TÜV, Dekra) of Belgische EDTC (Vinçotte) wettelijk verplicht, gevolgd door periodieke (2-jaarlijkse)* herkeuringen.
                  </p>
                  <p>
                    Hogedruktrailers met een compacte brander/warmtewisselaar van <strong>maximaal 2 liter</strong> vallen daarentegen onder <strong>Artikel 4 lid 3 (Goed Vakmanschap / SEP)</strong>: 100% vrijgesteld van KvI en herkeuringen, géén stilstand, en volledige vrijheid om universele gecertificeerde slangen en lansen in te zetten.
                  </p>
                  <p className="text-xs text-slate-500 italic pt-1">
                    * Deze interval kan per land verschillen (in Nederland geldt 24 maanden via WBDA 2016, terwijl in België onder de Codex standaard een jaarlijkse herkeuring verplicht is, tenzij specifiek anders vergund).
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
              <button
                onClick={() => onNavigate('two-liter-grens')}
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold"
              >
                <span>{isEurope ? "Why 2 Litres Decides Trailer Classification" : "Waarom 2 Liter de Grens Bepaalt bij Hogedruktrailers"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                onClick={() => onNavigate('keuringsverplichtingen')}
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold"
              >
                <span>{isEurope ? "Trailer In-Service Inspection & Recertification Guide" : "Keuringswijzer Hogedruktrailers & Merkplicht"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src={auditImage}
                alt={isEurope ? "Statutory inspection and pressure audit on a mobile high-pressure trailer" : "Wettelijke keuring en technische inspectie van een hogedruktrailer"}
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {isEurope ? "Inspection & Enforcement" : "Inspectie & Handhaving"}
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">
                  {isEurope ? "Labour Inspectorates Enforce In-Service Rules" : "Arbeidsinspectie toetst op gebruiksfase"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEurope 
                    ? "A CE mark covers only factory manufacturing. Once operational on European job sites, the employer bears strict liability for valid pre-commissioning certificates and biennial recertifications."
                    : "De CE-markering dekt alleen het fabricageproces. Zodra een machine operationeel draait, is de werkgever hoofdelijk aansprakelijk voor het actueel houden van alle keuringsrapporten."
                  }
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
              {isEurope ? "Section 2 · Procurement Audit & Risk Mitigation" : "Sectie 2 · Inkoopaudit & Risicobeheersing"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {isEurope ? "The 3 Critical Questions for Every Buyer" : "De 3 kernvragen voor elke inkoper"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "Demand clear answers to these three legal and technical criteria before executing a purchase agreement for any high-pressure steam trailer:"
                : "Stel deze drie cruciale vragen vóór de handtekening onder een leveringscontract van een hogedruktrailer:"
              }
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
                  {isEurope ? "Pre-Commissioning Inspection" : "Keuring voor Ingebruikname (KvI)"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEurope 
                    ? "Is the proposed machine legally mandated to undergo formal on-site commissioning inspection by an accredited body before its first operational deployment?"
                    : "Is de beoogde apparatuur wettelijk verplicht om voor ingebruikname door een geaccrediteerde instantie (NL-CBI / EDTC) te zijn goedgekeurd?"
                  }
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-amber-800 font-medium">
                {isEurope ? "Operating Category IV without signoff constitutes a statutory offence" : "Zonder KvI is inzet bij Categorie IV strafbaar"}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 font-mono font-bold flex items-center justify-center text-sm">
                  02
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {isEurope ? "Recurrent Statutory Audits" : "Periodieke Keuringen"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEurope 
                    ? "Does the equipment remain exempt from recurrent inspections, or does it trigger mandatory 12–24 month reinspections (€ 1,000–€ 2,500) plus recurring operational downtime?"
                    : "Blijft de apparatuur vrij van herkeuringen of zijn deze verplicht en dient u de kosten (€ 1.000 - € 5.000) én het keuringsrisico mee te wegen?"
                  }
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-sky-800 font-medium">
                {isEurope ? "Every 12–24 months*: statutory shutdown, hydrostatic test, and audit fees" : "Periodieke stilstand en inspectiekosten (elke 12–24 mnd)*"}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 font-mono font-bold flex items-center justify-center text-sm">
                  03
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900">
                  {isEurope ? "Component Freedom & OEM Lock-in" : "Onderdeelvrijheid (Vendor Lock-in)"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isEurope 
                    ? "Are you permitted to use certified universal replacement parts, or does non-OEM hose/nozzle replacement legally invalidate the assembly certification and insurance cover?"
                    : "Mag u universele vervangingsonderdelen gebruiken, of leidt het niet-gebruiken van originele merkonderdelen tot het direct vervallen van de keuringsstatus?"
                  }
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
                {isEurope ? "Voided assembly certificate nullifies insurance indemnity" : "Vervallen CE/PED certificaat maakt onverzekerd"}
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
              {isEurope ? "Commercial Pitch vs. Statutory Reality" : "Aankoopfocus vs. Wettelijke Kaders"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {isEurope 
                ? "The Commercial Silence: What High-Pressure Trailer Dealers Fail to Disclose" 
                : "Wat u eigenlijk ook moet weten bij de aankoop van een hogedruktrailer"}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isEurope 
                ? "During sales negotiations for hot water and steam trailers, prospective buyers are bombarded with pump pressures, diesel engine kilowatts, and cleaning speed. The legal operational burden of operating a PED Category IV machine is almost never proactively disclosed."
                : "Tijdens het oriëntatie- en aankoopproces van heetwater- en stoom-hogedruktrailers ligt de focus veelal op technische specificaties zoals werkdruk (350 of 500 bar), temperatuur en reinigingscapaciteit. Wat u als koper eigenlijk ook vooraf moet weten, zijn de operationele en wettelijke kaders die gelden zodra de machine in gebruik wordt genomen."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contrast 1 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {isEurope ? "What The Dealer Says" : "De Focus bij Aankoop"}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {isEurope 
                    ? "“The high-pressure trailer carries an official CE mark, complies with all standards, and is ready to work on day one.”"
                    : "“De hogedruktrailer heeft een officiële CE-markering, voldoet aan alle fabrieksrichtlijnen en is direct inzetbaar.”"}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {isEurope ? "The Statutory Reality" : "Wat u ook moet weten"}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEurope 
                      ? "A factory CE mark covers only manufacturing. If the burner/heat exchanger volume exceeds 2 litres at > 110 °C, operating without a prior on-site Pre-Commissioning inspection by an accredited body (NL-CBI / EDTC / TÜV) constitutes a statutory offence."
                      : "De CE-markering dekt de fabricagefase. Heeft de brander/warmtewisselaar meer dan 2 liter waterinhoud bij > 110 °C? Dan geldt dit als een PED Categorie IV installatie en is vóór eerste inzet een Keuring voor Ingebruikneming (KvI) door een NL-CBI of EDTC wettelijk verplicht."}
                  </p>
                </div>
              </div>
            </div>

            {/* Contrast 2 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {isEurope ? "What The Dealer Says" : "De Focus bij Aankoop"}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {isEurope 
                    ? "“Standard annual engine oil and pump maintenance at our dealership is all that you will need.”"
                    : "“Regulier jaarlijks onderhoud aan motorolie en pomppakkingen volstaat voor de bedrijfszekerheid.”"}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {isEurope ? "The Statutory Reality" : "Wat u ook moet weten"}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEurope 
                      ? "Category IV high-pressure steam trailers are legally subject to mandatory periodic recertification (every 24 months)*. This requires hydrostatic pressure testing (up to 1.43x design pressure) and safety relief valve bench testing, costing € 1,000–€ 2,500 plus 2 days crew downtime."
                      : "Bij een Categorie IV hogedruktrailer is daarnaast een 2-jaarlijkse herkeuring door een aangewezen keuringsinstantie wettelijk verplicht. Dit omvat onder meer hydrostatisch afpersen van de spiraal en beproeving van veiligheden, met bijbehorende keuringskosten en geplande stilstand."}
                  </p>
                </div>
              </div>
            </div>

            {/* Contrast 3 */}
            <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-800/60 px-2.5 py-1 rounded">
                  <XCircle className="w-3.5 h-3.5" />
                  {isEurope ? "What The Dealer Says" : "De Focus bij Aankoop"}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  {isEurope 
                    ? "“High-pressure hoses wear out naturally; you can replace them with any good hose from your local shop.”"
                    : "“Hogedrukslangen zijn slijtdelen; die zijn indien nodig eenvoudig te vervangen door gangbare slangen.”"}
                </p>
                <div className="border-t border-slate-700/60 pt-3">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                    {isEurope ? "The Statutory Reality" : "Wat u ook moet weten"}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEurope 
                      ? "In a certified Category IV assembly, using non-OEM hoses legally invalidates the entire assembly CE certificate. The high-pressure trailer becomes illegally operated, and commercial insurance will deny all liability claims in case of a burst injury."
                      : "Bij een Categorie IV samenstel maken de gespecificeerde slangen integraal deel uit van de samenstelcertificering. Montage van niet-gecertificeerde alternatieven kan het samenstelcertificaat formeel laten vervallen, waardoor merkslangen verplicht blijven (merkgebondenheid)."}
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
                <span>
                  {isEurope 
                    ? "The Inspection-Exempt Alternative: Water Volume ≤ 2 Litres (Sound Engineering Practice)" 
                    : "Het Keuringsvrije Alternatief: Waterinhoud ≤ 2 Liter (Goed Vakmanschap / SEP)"}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {isEurope 
                  ? "High-pressure trailers utilizing compact continuous-flow burners/heat exchangers (≤ 2L) are 100% exempt from pre-commissioning examinations, periodic recertifications, and OEM parts vendor lock-in under Article 4(3) of Directive 2014/68/EU."
                  : "Hogedruktrailers met compacte doorstroomtechnologie (maximaal 2 liter water in de brander/warmtewisselaar) zijn onder Artikel 4 lid 3 PED 100% vrijgesteld van KvI en herkeuringen, zonder vendor lock-in op slangen en toebehoren."}
              </p>
            </div>
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold shrink-0 transition-colors"
            >
              <span>{isEurope ? "Learn How 2L Protects You" : "Hoe de 2-Liter Grens Werkt"}</span>
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
              {isEurope ? "Field Applications & Professional Sectors" : "Typische Toepassingen van Hogedruktrailers"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {isEurope 
                ? "Sectors Exposed to High-Pressure Trailer Inspection Obligations" 
                : "Sectoren & Bedrijven die Werken met Heetwater- en Stoomtrailers"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "High-pressure trailers and mobile skid units are ubiquitous across cleaning, facility, and municipal operations. If these units produce steam (> 110 °C), they fall under strict pressure equipment scrutiny:" 
                : "Heetwater-hogedruktrailers en mobiele reinigingsskids zijn onmisbaar in de professionele reiniging en gemeentelijke diensten. Zodra deze machines stoom produceren (> 110 °C), vallen ze onder streng toezicht:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Facade & Surface Cleaning" : "Gevel- & Oppervlaktereiniging"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "Removal of atmospheric soiling, algae, and grime from commercial properties, historical brickwork, and bridges using hot water (200–350 bar)."
                  : "Verwijdering van atmosferische vervuiling, algen en roet op bedrijfspanden, baksteen en bruggen met heet water tot 350 bar."}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Chewing Gum & Street Washing" : "Kauwgom- & Straatreiniging"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "Municipal contractors clearing chewing gum and grease from pedestrian pavements, transit hubs, and town centres using high-temperature steam."
                  : "Gemeentelijke aannemers en reinigers die pleinen, winkelcentra en stationszones kauwgom- en vetvrij maken met stoomtemperatuur."}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Thermal Weed Abatement" : "Chemievrije Onkruidbestrijding"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "Ecological weed control on paved surfaces utilizing boiling water (> 100 °C) and saturated steam without chemical herbicides."
                  : "Natuurvriendelijke onkruidverwijdering op verhardingen door middel van heet water (> 100 °C) en stoom zonder pesticiden."}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Graffiti & Industrial Hydro-Cleaning" : "Graffiti & Industriële Reiniging"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "Paint stripping, tank cleaning, and industrial heavy degreasing at extreme operational pressures reaching up to 500 bar."
                  : "Verf- en graffitiverwijdering op monumenten, tankreiniging en industriële ontvetting bij drukken tot 500 bar."}
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
                {isEurope ? "Nameplate Verification Protocol" : "Praktisch Stappenplan Typeplaatje"}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                {isEurope ? "How to Inspect Your High-Pressure Trailer's Nameplate in 30 Seconds" : "Hoe Controleert U het Typeplaatje van Uw Hogedruktrailer?"}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {isEurope ? "Physical Audit Guide" : "Fysieke Controle op de Hogedruktrailer"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  {isEurope ? "SCENARIO 1 · CAT. IV" : "SCENARIO 1 · CAT. IV"}
                </span>
                <ShieldAlert className="w-4 h-4 text-rose-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "CE Mark + 4-Digit NoBo Number" : "CE-teken + 4 Cijfers van NoBo"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "If the high-pressure trailer data plate displays “CE 0036” (TÜV), “CE 0029” (Apragaz), or “CE 0620” (Kiwa), the complete high-pressure trailer is certified as a Category IV assembly. You MUST possess a valid on-site commissioning report and arrange periodic recertifications (every 24 months)*."
                  : "Staat er op het typeplaatje van de hogedruktrailer “CE 0036” (TÜV), “CE 0029” (Apragaz) of “CE 0620” (Kiwa)? Dan is de hogedruktrailer een Categorie IV samenstel. U BENT WETTELIJK VERPLICHT om een KvI-certificaat te hebben én elke 24 maanden te herkeuren."}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {isEurope ? "SCENARIO 2 · NON-COMPLIANT" : "SCENARIO 2 · NIET CONFORM"}
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Generic CE Alone (> 2L Coil)" : "Enkel CE-teken (> 2L Ketel)"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "If the high-pressure trailer has a burner/heat exchanger volume > 2 litres at > 110 °C but only displays a generic CE mark with no 4-digit number, the manufacturer has failed to certify the complete assembly under PED. Operating this high-pressure trailer constitutes an immediate breach of European law."
                  : "Heeft de hogedruktrailer een brander/warmtewisselaar met inhoud > 2 liter bij > 110 °C maar staat er enkel een algemeen CE-teken zonder 4-cijferig nummer? Dan ontbreekt de vereiste PED-samenstelcertificering. Deze machine is daarmee formeel niet vrijgegeven voor operationele inzet als Categorie IV installatie."}
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {isEurope ? "SCENARIO 3 · EXEMPT" : "SCENARIO 3 · KEURINGSVRIJ"}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Burner/Heat Exchanger Volume ≤ 2L (SEP)" : "Inhoud Brander/Warmtewisselaar ≤ 2L (SEP)"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "If the manufacturer documentation confirms the burner/heat exchanger holds strictly 2 litres or less, the machine qualifies under Sound Engineering Practice. No NoBo number is affixed under PED because it is 100% exempt from commissioning and periodic audits!"
                  : "Staat in het machinedossier dat de brander/warmtewisselaar maximaal 2 liter water bevat? Dan valt de hogedruktrailer onder Goed Vakmanschap (SEP / Art. 4.3). Geen NoBo-nummer nodig voor de PED, want de hogedruktrailer is 100% vrijgesteld van periodieke herkeuring!"}
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
              {isEurope ? "Comparative Analysis · Trailer Safety & Compliance" : "Vergelijkende Analyse · Veiligheid & Keuringslast"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {isEurope 
                ? "The Two Worlds of High-Pressure Steam Trailers" 
                : "De Twee Werelden bij Hogedruktrailers Vergeleken"
              }
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "Why physical burner/heat exchanger volume determines whether your high-pressure trailer operates freely across Europe or subjects your business to continuous inspection costs, team downtime, and strict OEM spare parts lock-in."
                : "Waarom de fysieke waterinhoud van de brander/warmtewisselaar bepaalt of uw hogedruktrailer direct inzetbaar is, óf uw bedrijf opzadelt met verplichte periodieke keuringskosten, teamstilstand en strikte merkgebondenheid."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Box 1: Traditionele Trailer (Cat IV) */}
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-rose-100 text-rose-800 border border-rose-200">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {isEurope ? "TRADITIONAL HIGH-PRESSURE TRAILER · PED CAT. IV" : "TRADITIONELE HOGEDRUKTRAILER · PED CAT. IV"}
                  </span>
                  <span className="text-xs font-mono font-semibold text-rose-700">V &gt; 2 Liter</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {isEurope ? "High-Hazard Mobile Steam Boiler" : "Wettelijke Mobiele Stoomketel"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Fired coil holding 3 to 15+ litres of water under high pressure and steam temperature (> 110 °C). Extreme accumulated thermal energy creates critical explosion hazard."
                      : "Verwarmingsspiraal met 3 tot 15+ liter water onder stoomdruk (> 110 °C). Door het grote volume is sprake van gevaarlijk veel opgeslagen potentiële thermische energie."
                    }
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Pre-Commissioning Audit:" : "Keuring voor Ingebruikneming (KvI):"}</strong>{' '}
                      {isEurope ? "Mandatory formal audit by accredited body before first field use (€ 850–€ 1,500)." : "Wettelijk verplicht vóór de eerste klus door NL-CBI / EDTC (€ 850 - € 1.500)."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Periodic Recertification:" : "Periodieke Herkeuring (elke 12–24 mnd)*:"}</strong>{' '}
                      {isEurope ? "Mandatory every 12–24 months* (depending on member state) with hydrostatic test and safety valve pop-testing." : "Verplicht elke 24 maanden in NL (en jaarlijks in BE) met afpersen van de spiraal en klepbeproeving."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Strict Spare Parts Lock-in:" : "Strikte Merkplicht (Vendor Lock-in):"}</strong>{' '}
                      {isEurope ? "Universal hoses prohibited; non-OEM parts instantly void assembly CE and insurance." : "Universele slangen verboden; niet-originele delen laten CE en verzekering vervallen."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Labour Inspectorate Sanction:" : "Risico Arbeidsinspectie:"}</strong>{' '}
                      {isEurope ? "Direct shutdown and sealing of high-pressure trailer on-site plus administrative penalties." : "Directe verzegeling/stillegging op locatie plus zware boete bij ontbrekend rapport."}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-200 flex items-center justify-between text-xs text-rose-900 font-semibold">
                <span>{isEurope ? "10-Year Additional Cost:" : "10-Jaars Bijkomende Lasten:"}</span>
                <span className="font-mono text-sm text-rose-700">{isEurope ? "+ € 15,000 – € 25,000 / high-pressure trailer" : "+ € 15.000 – € 25.000 / hogedruktrailer"}</span>
              </div>
            </div>

            {/* Box 2: Keuringsvrije Trailer (SEP) */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {isEurope ? "INSPECTION-EXEMPT HIGH-PRESSURE TRAILER · ART. 4.3 SEP" : "KEURINGSVRIJE HOGEDRUKTRAILER · ART. 4.3 SEP"}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-700">V ≤ 2 Liter</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {isEurope ? "Inherently Safe Continuous-Flow Unit" : "Inherent Veilige Doorstroomtechniek"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Compact mono-tube burner/heat exchanger coil holding ≤ 2 litres. Minimal stored energy eliminates catastrophic steam explosion risk at the physical source."
                      : "Compacte mono-tube doorstroomspiraal van maximaal 2 liter. Minimale potentiële energie sluit het risico op catastrofale ketelontploffing aan de bron uit."
                    }
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Pre-Commissioning Audit:" : "Keuring voor Ingebruikneming (KvI):"}</strong>{' '}
                      {isEurope ? "100% Exempt under European law; deploy immediately from day one." : "100% Vrijgesteld onder Europese richtlijn; direct inzetbaar vanaf dag één."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Periodic Recertification:" : "Periodieke Herkeuring:"}</strong>{' '}
                      {isEurope ? "No statutory reinspections required; zero forced operational team downtime." : "Geen wettelijke herkeuring verplicht; nul dagen gedwongen teamstilstand."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Component Freedom:" : "Volledige Vrijheid van Onderdelen:"}</strong>{' '}
                      {isEurope ? "Free to source certified universal high-pressure hoses, nozzles, and fittings." : "Vrije inkoop van universele gecertificeerde kwaliteitslansen en hogedrukslangen."}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>{isEurope ? "Full Legal Peace of Mind:" : "Zorgeloos bij Inspecties:"}</strong>{' '}
                      {isEurope ? "Compliant with EU directives; no exposure to labour inspectorate fines or seals." : "Volledig conform wetgeving; geen risico op stillegging of boetes op de werkplek."}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-200 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <span>{isEurope ? "10-Year Additional Cost:" : "10-Jaars Bijkomende Lasten:"}</span>
                <span className="font-mono text-sm text-emerald-700">{isEurope ? "€ 0 in statutory audit fees" : "€ 0,- aan keuringsleges"}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-semibold text-slate-900 text-sm">
                {isEurope ? "Calculate exact savings for your high-pressure trailer fleet" : "Bereken het exacte kostenverschil voor uw vloot hogedruktrailers"}
              </div>
              <div className="text-xs text-slate-500">
                {isEurope 
                  ? "Compare 1 to 10 high-pressure trailers across 2 to 10 operational years with realistic inspection and crew downtime figures." 
                  : "Vergelijk 1 tot 10 hogedruktrailers over 2 tot 10 exploitatiejaren inclusief reële keurings- en stilstandskosten."}
              </div>
            </div>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shrink-0 transition-colors"
            >
              <span>{isEurope ? "Open High-Pressure Trailer TCO Calculator" : "Naar TCO Calculator Hogedruktrailers"}</span>
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
              {isEurope ? "Section 3 · Engineering Tools & References" : "Sectie 3 · Verdieping & Praktijktools"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
              {isEurope ? "Essential Knowledge & Calculation Models" : "Essentiële Kennis & Rekenmodules"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            {isEurope 
              ? "Immediate access to physical threshold physics, the interactive 10-year TCO calculator, and the full downloadable audit checklist."
              : "Directe toegang tot de fysische grenswaarden, de interactieve TCO-calculator en de complete downloadbare audit-checklist."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onNavigate('two-liter-grens')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-700 uppercase font-semibold">
                {isEurope ? "Physical Demarcation" : "Fysische Scheidslijn"}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {isEurope ? "Why 2 Litres Dictates the Legal Threshold" : "Waarom 2 Liter de Grens Bepaalt"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEurope 
                ? "Compare System A (< 2L SEP) with System B (> 2L PED Category IV) regarding stored thermal energy and safety design."
                : "Vergelijk Systeem A (< 2L SEP) met Systeem B (> 2L PED Categorie IV) op het gebied van opgeslagen energie en veiligheidsfilosofie."
              }
            </p>
          </div>

          <div 
            onClick={() => onNavigate('tco-calculator')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-700 uppercase font-semibold">
                {isEurope ? "Financial Model" : "Rekenmodule"}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {isEurope ? "TCO Inspection Cost Calculator" : "TCO Keuringskosten Calculator"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEurope 
                ? "Simulate the real lifecycle financial impact of pre-commissioning, biennial audits, downtime, and OEM parts over 2 to 10 years."
                : "Simuleer de werkelijke kosten van KvI, 2-jaarlijkse inspecties, stilstand en verplichte merkonderdelen over 2 tot 10 jaar."
              }
            </p>
          </div>

          <div 
            onClick={() => onNavigate('downloadcenter')}
            className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-700 uppercase font-semibold">
                {isEurope ? "Guide & Audit" : "Gids & Audit"}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {isEurope ? "Procurement & Audit Checklist PDF" : "Aanschaf- & Keuringschecklist PDF"}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEurope 
                ? "Use the comprehensive 10-point audit checklist to verify compliance before purchasing and during statutory field audits."
                : "Gebruik de complete audit-checklist om vóór aanschaf en tijdens inspecties alle wettelijke verplichtingen te borgen."
              }
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
                {isEurope ? "Section 4 · Questions & Answers" : "Sectie 4 · Vragen & Antwoorden"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-1">
                {isEurope ? "Frequently Asked Questions about PED 2014/68/EU" : "Veelgestelde Vragen over Drukapparatuur"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {isEurope 
                ? "Authoritative answers to common questions regarding classification, the 2-litre threshold, downtime, and employer liability."
                : "Duidelijke antwoorden op veelvoorkomende vragen over keuringsplichten, de 2-liter grens, stilstand en aansprakelijkheid."
              }
            </p>
          </div>

          <FaqAccordion onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  );
};
