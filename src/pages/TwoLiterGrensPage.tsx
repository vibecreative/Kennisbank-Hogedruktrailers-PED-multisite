import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  XCircle,
  Scale
} from 'lucide-react';
import { useSiteContent } from '../content';

const coilImage = '/images/thermodynamics_pressure_flashing_1791445987190.jpg';

interface TwoLiterGrensPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const TwoLiterGrensPage: React.FC<TwoLiterGrensPageProps> = ({ 
  onNavigate,
}) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Layers className="w-3.5 h-3.5" />
            {isEurope ? "Thermodynamics & Risk Categorisation" : "Fysica & Risico-Indeling"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {isEurope 
              ? "Why 2 Litres Dictates the Legal Threshold in Steam Engineering" 
              : "Waarom 2 Liter het Cruciale Criterium is in de Stoomtechniek"
            }
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {isEurope 
              ? "Under European Directive 2014/68/EU (PED), equipment is categorised into risk brackets (SEP, Category I through IV) based on maximum allowable pressure (PS), design temperature (TS), and internal volume (V) of the heat exchanger."
              : "Binnen de Europese PED-richtlijn wordt apparatuur ingedeeld in risicocategorieën (I tot en met IV) op basis van de druk (PS), de temperatuur (TS) en het interne volume (V) van de warmtewisselaar."
            }
          </p>
        </div>

        {/* Featured Technical Visual & Explanation */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full relative min-h-[260px]">
              <img
                src={coilImage}
                alt={isEurope ? "Technical pressure vessel and thermodynamics instrumentation" : "Technische instrumentatie voor drukapparatuur en thermodynamica"}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                {isEurope ? "Pressure Equipment Thermodynamics" : "Thermodynamica van Drukapparatuur"}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                {isEurope ? "The Physics of Superheated Water & Flashing" : "De Fysica van Oververhit Water (Flashing)"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEurope 
                  ? "When water is enclosed under high operational pressure (e.g., 200 bar), its boiling temperature rises well beyond 100 °C. If a rupture occurs, that pressure collapses immediately to atmospheric levels (1 bar). Superheated liquid instantaneously flashes into steam, expanding explosively by approximately 1,600 times its liquid volume."
                  : "Wanneer water onder hoge werkdruk staat (bijvoorbeeld 200 bar), stijgt het kookpunt naar temperaturen ver boven de 100 °C. Zodra een leiding scheurt, valt die druk in één klap weg naar atmosferische druk (1 bar). Het oververhitte water flasht acuut in stoom, waarbij het volume explosief met circa 1.600 keer uitzet."
                }
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isEurope 
                  ? "With an internal volume strictly at or below 2 litres, total stored potential energy is physically limited by design. Potential catastrophic risk is eliminated at source. Above 2 litres, sudden decompression can yield destructive shockwaves and catastrophic scalding hazard for personnel."
                  : "Bij een volume kleiner dan 2 liter is de totale opgeslagen potentiële energie fysiek beperkt, waardoor ernstig calamiteitsgevaar bij de bron wordt weggenomen. Boven de 2 liter kan een breuk catastrofale gevolgen hebben voor omstanders."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Flashing Berekeningskaart & Fysische Vergelijking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-2.5 py-1 rounded">
                {isEurope ? "TRADITIONAL HIGH-PRESSURE TRAILER BURNER/HEAT EXCHANGER (> 2L)" : "TRADITIONELE HOGEDRUKTRAILER BRANDER/WARMTEWISSELAAR (> 2L)"}
              </span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {isEurope ? "Extreme Stored Energy Hazard" : "Groot Energetisch Calamiteitsrisico"}
            </h3>
            <div className="p-3 bg-white rounded-lg border border-rose-200 space-y-1 font-mono text-xs">
              <div className="text-slate-500">{isEurope ? "Typical burner/heat exchanger volume: 8 to 12 litres" : "Typische inhoud brander/warmtewisselaar: 8 tot 12 liter"}</div>
              <div className="font-bold text-rose-700">10 Liter water × 1.600 = 16.000 Liter stoomexpansie</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEurope 
                ? "At 350 bar and 130 °C, sudden rupture releases a violent steam explosion of 16,000 litres within milliseconds. This creates severe shockwaves, burns, and shrapnel risks. For this reason, European law categorizes this as Category IV, strictly requiring NoBo pre-commissioning and recurring periodic recertifications (every 24 months)*."
                : "Bij 350 bar en 130 °C leidt een plotse breuk tot een acute stoomexplosie van maar liefst 16.000 liter binnen enkele milliseconden. Dit veroorzaakt een zware drukgolf, ernstige brandwonden en rondvliegende brokstukken. Daarom eist de wetgever toezicht door Notified Bodies en verplichte herkeuring."}
            </p>
          </div>

          <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                {isEurope ? "INHERENTLY SAFE BURNER/HEAT EXCHANGER (≤ 2L)" : "DOORSTROOMTECHNIEK / STEAMPLUS (≤ 2L)"}
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {isEurope ? "Inherently Safe by Design (SEP)" : "Inherent Veilig aan de Bron (SEP)"}
            </h3>
            <div className="p-3 bg-white rounded-lg border border-emerald-200 space-y-1 font-mono text-xs">
              <div className="text-slate-500">{isEurope ? "Maximum burner/heat exchanger volume: ≤ 2.0 litres" : "Maximale inhoud van brander/warmtewisselaar: ≤ 2,0 liter"}</div>
              <div className="font-bold text-emerald-700">≤ 2 Liter water × 1.600 = Beheersbare ontlading</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEurope 
                ? "By continuously heating only a microscopic fraction of water at any single second, the system eliminates catastrophic steam explosion risk at its physical source. European legislators specifically created Article 4(3) Sound Engineering Practice for this reason: 100% exempt from statutory commissioning audits and recurring inspections."
                : "Door continu slechts een minimale fractie water tegelijk te verhitten, wordt het explosiegevaar direct bij de fysische bron weggenomen. De Europese wetgever heeft hier speciaal Artikel 4 lid 3 Goed Vakmanschap (SEP) voor gecreëerd: 100% vrijgesteld van KvI en herkeuringen."}
            </p>
          </div>
        </div>

        {/* The Exact Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4">
          <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700">
                {isEurope ? "Regulatory & Physical Matrix" : "Wettelijke & Fysische Matrix"}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900 mt-1">
                {isEurope ? "System A (< 2L SEP) versus System B (> 2L Category IV)" : "Vergelijking: Systeem A versus Systeem B"}
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {isEurope ? "Source: Directive 2014/68/EU Annex II Table 5" : "Bron: PED 2014/68/EU & WBDA 2016"}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-semibold text-slate-700 w-1/4">
                    {isEurope ? "Engineering Criterion" : "Eigenschap"}
                  </th>
                  <th className="p-4 font-bold text-emerald-800 bg-emerald-50/50 w-[37.5%]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{isEurope ? "System A (≤ 2 Litres Volume)" : "Systeem A (< 2 Liter Volume)"}</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-rose-800 bg-rose-50/50 w-[37.5%]">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>{isEurope ? "System B (> 2 Litres Volume)" : "Systeem B (> 2 Liter Volume)"}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1: Fysisch principe */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {isEurope ? "Physical principle" : "Fysisch principe"}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10 font-medium">
                    {isEurope ? "Micro-mass of superheated pressurized fluid" : "Kleine oververhitte watermassa onder druk"}
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10 font-medium">
                    {isEurope ? "Large stored energetic fluid volume under pressure" : "Grote opgeslagen energetische massa onder druk"}
                  </td>
                </tr>

                {/* Row 2: PED Risicoklasse */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {isEurope ? "PED Classification" : "PED Risicoklasse"}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <strong className="text-emerald-800 font-mono">
                      {isEurope ? "Article 4(3) SEP (Sound Engineering Practice)" : "Artikel 4.3 (Goed Vakmanschap / SEP)"}
                    </strong>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <strong className="text-rose-800 font-mono">
                      {isEurope ? "PED Category IV (Highest European Hazard Tier)" : "PED Categorie IV (Hoogste Europese risicoklasse)"}
                    </strong>
                  </td>
                </tr>

                {/* Row 3: Energetisch risico */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {isEurope ? "Energetic release hazard" : "Energetisch risico"}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    {isEurope ? "Negligible blast energy in case of pipe failure" : "Minimale energie-ontlading bij defect"}
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10 font-medium text-rose-900">
                    {isEurope ? "Potentially catastrophic blast & scalding hazard" : "Potentieel catastrofaal bij acute leidingbreuk"}
                  </td>
                </tr>

                {/* Row 4: Veiligheidsfilosofie */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {isEurope ? "Safety philosophy" : "Veiligheidsfilosofie"}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <strong className="text-emerald-800">
                      {isEurope ? "Inherent safety:" : "Inherente veiligheid:"}
                    </strong>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isEurope ? "Risk eliminated at source (inherently safe by design)" : "Risico wegnemen bij de bron (inherently safe by design)"}
                    </div>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <strong className="text-rose-800">
                      {isEurope ? "Engineered mitigation:" : "Toegevoegde veiligheid:"}
                    </strong>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {isEurope ? "Heavy mitigation barriers (burst discs, relief valves, Notified Body audits)" : "Zware barrières rondom risico (externe veiligheidskleppen & NoBo-toezicht)"}
                    </div>
                  </td>
                </tr>

                {/* Row 5: Keuringsplicht */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {isEurope ? "Statutory inspection" : "Keuringsplicht"}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <div className="inline-flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{isEurope ? "Exempt from commissioning & statutory audits" : "Vrijgesteld van KvI en herkeuringen"}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <div className="inline-flex items-center gap-1.5 text-rose-800 font-bold">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{isEurope ? "Mandatory commissioning + biennial recertification" : "100% Verplicht KvI + 2-jaarlijkse herkeuring"}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Wat Vraagt U aan bij de Aankoop van een Hogedruktrailer? */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700">
              {isEurope ? "Buyer Due Diligence Protocol" : "Praktisch Inkoopprotocol voor Kopers & Wagenparkbeheerders"}
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
              {isEurope 
                ? "The 3 Questions You Must Demand in Writing Before Ordering a Trailer" 
                : "Wat u eigenlijk ook moet weten bij de aankoop: 3 gerichte controlevragen"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "Never sign a delivery contract or lease agreement without obtaining written confirmation of these three engineering and legal parameters on the dealer's letterhead:" 
                : "Een gedegen aankooptraject begint met duidelijke specificaties. Vraag vóór aankoop of lease schriftelijke duidelijkheid over deze drie technische en operationele uitgangspunten:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold font-mono text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {isEurope ? "Water Volume of Burner/Heat Exchanger (V)" : "Waterinhoud van de Brander/Warmtewisselaar (V)"}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "“What is the exact fluid volume of the burner/heat exchanger in litres? Is it strictly ≤ 2.0 litres (SEP) or > 2.0 litres (Category IV)?”"
                  : "“Wat is de exacte fysieke waterinhoud van de brander/warmtewisselaar in liters? Is deze strikt maximaal 2,0 liter (SEP) of groter dan 2,0 liter (Cat. IV)?”"}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 font-bold font-mono text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {isEurope ? "Commissioning & Audit Status" : "Keuring voor Ingebruikneming (KvI)"}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "“Does this high-pressure trailer legally require an on-site pre-commissioning inspection before first field use, and what are the mandatory periodic recertification costs (every 24 months)*?”"
                  : "“Is voor deze hogedruktrailer een KvI door een NL-CBI / EDTC verplicht vóór de eerste inzet, en wat zijn de 2-jaarlijkse herkeuringskosten?”"}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold font-mono text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {isEurope ? "Component & Hose Freedom" : "Onderdeelvrijheid & Merkplicht"}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "“Am I legally permitted to source certified universal replacement hoses and nozzles, or does non-OEM fitment instantly void the high-pressure trailer's assembly CE and insurance?”"
                  : "“Mag ik gecertificeerde universele hogedrukslangen monteren, of leidt dit tot verval van het samenstelcertificaat en verplichte merkgebondenheid?”"}
              </p>
            </div>
          </div>
        </div>

        {/* Practical takeaway */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
            {isEurope ? "What Does This Mean for Fleet Procurement?" : "Wat Betekent Dit voor Uw Investeringsbeslissing?"}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {isEurope 
              ? "Selecting an industrial steam assembly with an internal heat exchanger volume strictly ≤ 2 litres provides inherent physical safety. The machine cannot physically generate a catastrophic boiler explosion due to its low liquid mass. This completely eliminates recurrent downtime, costly third-party audit invoices, and statutory shutdown risks."
              : "Wie kiest voor een installatie met een warmtewisselaar onder de 2 liter, kiest voor inherente veiligheid. Het apparaat kan door zijn geringe inhoud fysisch geen zware ketelontploffing veroorzaken. Daarmee vervalt niet alleen een aanzienlijk veiligheidsrisico op de werkvloer, maar ook een terugkerende kostenpost van duizenden euro's aan inspecties en machinestilstand."
            }
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('keuringsverplichtingen')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{isEurope ? "Explore Statutory Inspection Obligations" : "Ontdek de Keuringsplichten & Merkplicht"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Compare Costs in TCO Calculator" : "Vergelijk Kosten in TCO Calculator"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
