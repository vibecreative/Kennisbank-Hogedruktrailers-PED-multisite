import React, { useState, useId } from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  Printer
} from 'lucide-react';
import { TcoParams } from '../types';
import { InfoTooltip } from '../components/InfoTooltip';
import { useSiteContent } from '../content';

interface TcoCalculatorPageProps {
  onNavigate: (slug: string) => void;
}

export const TcoCalculatorPage: React.FC<TcoCalculatorPageProps> = ({ onNavigate }) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  const machineCountInputId = useId();
  const yearsInputId = useId();
  const kviInputId = useId();
  const periodicInputId = useId();
  const downtimeDaysInputId = useId();
  const downtimeCostInputId = useId();
  const partsMarkupInputId = useId();

  const [params, setParams] = useState<TcoParams>({
    machineCount: 2,
    years: 6,
    kviCostPerMachine: 1200,
    periodicInspectionCost: 1100,
    downtimeDaysPerKeuring: 2,
    downtimeCostPerDay: 450,
    partsCostDifferenceAnnual: 450,
  });

  const periodicCycles = Math.floor(params.years / 2);

  // Calculations:
  const totalKviCost = params.machineCount * params.kviCostPerMachine;
  const totalPeriodicInspectionCost = params.machineCount * periodicCycles * params.periodicInspectionCost;
  const totalDowntimeCost = params.machineCount * (1 + periodicCycles) * params.downtimeDaysPerKeuring * params.downtimeCostPerDay;
  const totalPartsMarkup = params.machineCount * params.years * params.partsCostDifferenceAnnual;
  const totalPedIvTco = totalKviCost + totalPeriodicInspectionCost + totalDowntimeCost + totalPartsMarkup;
  const totalSepTco = 0;
  const netSavings = totalPedIvTco - totalSepTco;

  const locale = isEurope ? 'en-GB' : 'nl-NL';

  // Yearly cumulative breakdown
  const yearBreakdown = Array.from({ length: params.years }, (_, i) => {
    const year = i + 1;
    const kvi = year === 1 ? totalKviCost : 0;
    const inspections = (year % 2 === 0) ? (params.machineCount * params.periodicInspectionCost) : 0;
    const downtime = year === 1 
      ? (params.machineCount * params.downtimeDaysPerKeuring * params.downtimeCostPerDay)
      : (year % 2 === 0 ? (params.machineCount * params.downtimeDaysPerKeuring * params.downtimeCostPerDay) : 0);
    const parts = params.machineCount * params.partsCostDifferenceAnnual;
    const yearTotal = kvi + inspections + downtime + parts;
    return {
      year,
      yearTotal,
      kvi,
      inspections,
      downtime,
      parts,
    };
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Calculator className="w-3.5 h-3.5" />
            {isEurope ? "TCO & Operational Lifecycle Budgeting" : "TCO & Exploitatiebegroting"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            {isEurope ? "High-Pressure Trailer TCO & Inspection Calculator" : "TCO Keuringskosten Calculator Hogedruktrailers"}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {isEurope 
              ? "Calculate the realistic Total Cost of Ownership (TCO) across mandatory pre-commissioning examinations, biennial statutory recertifications, operational downtime losses (2-man cleaning crew), and OEM proprietary spare parts lock-in for Category IV trailers versus Inspection-Exempt (≤ 2L SEP) units."
              : "Bereken de werkelijke Total Cost of Ownership (TCO) van periodieke herkeuringen, initiële Keuring voor Ingebruikneming (KvI), teamstilstandsderving (2-koppig reinigingsteam) en merkgebonden onderdelen bij heetwater- en stoom-hogedruktrailers."
            }
          </p>
        </div>

        {/* Main Grid: Inputs on Left, Realtime Results on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls / Inputs */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="font-serif font-bold text-lg text-slate-900">
                {isEurope ? "High-Pressure Trailer Fleet & Operating Parameters" : "Wagenpark Hogedruktrailers & Kostenparameters"}
              </h2>
              <span className="text-xs text-slate-400">
                {isEurope ? "Interactive input" : "Dynamische invoer"}
              </span>
            </div>

            {/* Slider 1: Machine Count */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={machineCountInputId} className="font-medium text-slate-700">
                  {isEurope ? "Number of high-pressure trailers in fleet" : "Aantal hogedruktrailers in het wagenpark"}
                </label>
                <span className="font-mono font-bold text-slate-900 text-base">
                  {params.machineCount} {params.machineCount === 1 ? (isEurope ? 'high-pressure trailer' : 'hogedruktrailer') : (isEurope ? 'high-pressure trailers' : 'hogedruktrailers')}
                </span>
              </div>
              <input
                id={machineCountInputId}
                type="range"
                min="1"
                max="20"
                step="1"
                value={params.machineCount}
                onChange={(e) => setParams({ ...params, machineCount: Number(e.target.value) })}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>1 {isEurope ? "trailer" : "hogedruktrailer"}</span>
                <span>10 {isEurope ? "trailers" : "hogedruktrailers"}</span>
                <span>20 {isEurope ? "trailers" : "hogedruktrailers"}</span>
              </div>
            </div>

            {/* Slider 2: Exploitatieperiode */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={yearsInputId} className="font-medium text-slate-700">
                  {isEurope ? "Operating lifecycle horizon" : "Exploitatietermijn"}
                </label>
                <span className="font-mono font-bold text-slate-900 text-base">
                  {params.years} {isEurope ? "years" : "jaar"}
                </span>
              </div>
              <input
                id={yearsInputId}
                type="range"
                min="2"
                max="10"
                step="2"
                value={params.years}
                onChange={(e) => setParams({ ...params, years: Number(e.target.value) })}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>{isEurope ? "2 years (1 audit)" : "2 jaar (1 herkeuring)"}</span>
                <span>{isEurope ? "6 years (3 audits)" : "6 jaar (3 herkeuringen)"}</span>
                <span>{isEurope ? "10 years (5 audits)" : "10 jaar (5 herkeuringen)"}</span>
              </div>
            </div>

            {/* Parameter: KvI Kosten */}
            <div className="pt-2 border-t border-slate-100 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor={kviInputId} className="font-medium text-slate-700 cursor-pointer">
                      {isEurope ? "Pre-commissioning inspection fee per machine" : "KvI Inspectiekosten per machine"}
                    </label>
                    <InfoTooltip
                      title={isEurope ? "Pre-Commissioning Inspection" : "Keuring vóór Ingebruikneming (KvI)"}
                      badge={isEurope ? "Mandatory (> 2L)" : "Wettelijk verplicht (> 2L)"}
                      badgeType="warning"
                      content={
                        <div className="space-y-2">
                          <p>
                            {isEurope 
                              ? "Statutory on-site inspection by an accredited body (ZÜS in Germany, NL-CBI in the Netherlands, EDTC in Belgium, APAVE in France) before first operational deployment of a Category IV assembly."
                              : "Een wettelijk verplichte keuring door een aangewezen keuringsdienst (NL-CBI / Notified Body) voordat een stoom- of hogedrukunit met meer dan 2 liter waterinhoud (PED Categorie IV) in Nederland voor het eerst mag draaien."
                            }
                          </p>
                          <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50/80 p-1.5 rounded border border-emerald-200">
                            {isEurope 
                              ? "✓ Systems ≤ 2 litres (Article 4.3 SEP) are 100% exempt from pre-commissioning audits!" 
                              : "✓ Systemen < 2 liter (Artikel 4.3 SEP) zijn wettelijk 100% vrijgesteld van deze KvI!"
                            }
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <span className="text-slate-400">
                    {isEurope ? "Initial / One-off" : "Eenmalig bij levering"}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-500 text-sm">€</span>
                  <input
                    id={kviInputId}
                    type="number"
                    value={params.kviCostPerMachine}
                    onChange={(e) => setParams({ ...params, kviCostPerMachine: Math.max(0, Number(e.target.value)) })}
                    className="w-full pl-8 pr-3 py-1.5 border border-slate-300 rounded text-sm font-mono text-slate-800 focus:outline-amber-600"
                  />
                </div>
              </div>

              {/* Parameter: Periodieke Herkeuring NoBo */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor={periodicInputId} className="font-medium text-slate-700 cursor-pointer">
                      {isEurope ? "Periodic recertification audit (every 24 months)*" : "NoBo Herkeuringskosten (per 2 jaar)*"}
                    </label>
                    <InfoTooltip
                      title={isEurope ? "Periodic Recertification (24 Months)*" : "2-Jaarlijkse Periodieke Herkeuring*"}
                      badge={isEurope ? "Statutory Mandate" : "Art. 21 WBDA 2016"}
                      badgeType="warning"
                      content={
                        <div className="space-y-2">
                          <p>
                            {isEurope 
                              ? "Mandatory recurrent safety examination by an accredited inspector every 24 months* (or annually in countries like Belgium) including hydrostatic pressure test, safety valve bench calibration, and thickness testing."
                              : "Op grond van het Warenwetbesluit Drukapparatuur 2016 (WBDA 2016) moeten hogedruktrailers in Categorie IV elke 24 maanden verplicht worden herkeurd door een aangewezen keuringsinstelling (NL-CBI / NoBo). In België geldt standaard een jaarlijkse herkeuring."
                            }
                          </p>
                          <p className="text-[11px] text-emerald-700 font-semibold bg-emerald-50/80 p-1.5 rounded border border-emerald-200">
                            {isEurope 
                              ? "✓ Systems ≤ 2 litres are 100% exempt from periodic statutory audits." 
                              : "✓ Systemen < 2 liter kennen géén periodieke herkeuringsplicht vanuit het WBDA."
                            }
                          </p>
                        </div>
                      }
                    />
                  </div>
                  <span className="text-slate-400">
                    {isEurope ? "Every 24 months*" : "Elke 24 maanden*"}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-500 text-sm">€</span>
                  <input
                    id={periodicInputId}
                    type="number"
                    value={params.periodicInspectionCost}
                    onChange={(e) => setParams({ ...params, periodicInspectionCost: Math.max(0, Number(e.target.value)) })}
                    className="w-full pl-8 pr-3 py-1.5 border border-slate-300 rounded text-sm font-mono text-slate-800 focus:outline-amber-600"
                  />
                </div>
              </div>

              {/* Parameter: Stilstand Dagen & Tarief */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor={downtimeDaysInputId} className="block text-xs font-medium text-slate-700 cursor-pointer">
                      {isEurope ? "Downtime (days)" : "Stilstand (werkdagen)"}
                    </label>
                    <InfoTooltip
                      title={isEurope ? "Operational Downtime per Audit" : "Operationele Stilstand per Keuring"}
                      badge={isEurope ? "Productivity loss" : "Productiederving"}
                      badgeType="neutral"
                      content={
                        <p>
                          {isEurope 
                            ? "Cooling, depressurizing, valve bench testing, and reassembly typically takes 1 to 2 workdays during which the unit is unavailable."
                            : "Voor een officiële keuring door een keuringsinstantie moet de machine tijdig worden afgekoeld, drukloos gemaakt, geopend en gekalibreerd."
                          }
                        </p>
                      }
                    />
                  </div>
                  <input
                    id={downtimeDaysInputId}
                    type="number"
                    min="0"
                    step="0.5"
                    value={params.downtimeDaysPerKeuring}
                    onChange={(e) => setParams({ ...params, downtimeDaysPerKeuring: Math.max(0, Number(e.target.value)) })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-sm font-mono text-slate-800 focus:outline-amber-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor={downtimeCostInputId} className="block text-xs font-medium text-slate-700">
                    {isEurope ? "Loss/rental per day" : "Derving / huur per dag"}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-slate-500 text-xs">€</span>
                    <input
                      id={downtimeCostInputId}
                      type="number"
                      value={params.downtimeCostPerDay}
                      onChange={(e) => setParams({ ...params, downtimeCostPerDay: Math.max(0, Number(e.target.value)) })}
                      className="w-full pl-7 pr-2 py-1.5 border border-slate-300 rounded text-sm font-mono text-slate-800 focus:outline-amber-600"
                    />
                  </div>
                </div>
              </div>

              {/* Parameter: Merkplicht Onderdelenopslag */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor={partsMarkupInputId} className="font-medium text-slate-700 cursor-pointer">
                      {isEurope ? "Annual proprietary parts markup" : "Jaarlijkse opslag gekeurde merkonderdelen"}
                    </label>
                    <InfoTooltip
                      title={isEurope ? "Vendor Lock-in & Spare Parts" : "Vendor Lock-in & Merkspecificatie"}
                      badge={isEurope ? "Parts policy" : "Onderdelenbeleid"}
                      badgeType="info"
                      content={
                        <p>
                          {isEurope 
                            ? "Category IV assemblies mandate original OEM-certified hoses, triggers, and relief valves to maintain certificate validity. SEP systems allow competitive universal industrial components."
                            : "Bij PED Categorie IV installaties eist het typecertificaat vaak exclusief originele OEM-onderdelen om de geldigheid van het keuringscertificaat te behouden."
                          }
                        </p>
                      }
                    />
                  </div>
                  <span className="text-slate-400">
                    {isEurope ? "Vendor lock-in" : "Vendor lock-in"}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-500 text-sm">€</span>
                  <input
                    id={partsMarkupInputId}
                    type="number"
                    value={params.partsCostDifferenceAnnual}
                    onChange={(e) => setParams({ ...params, partsCostDifferenceAnnual: Math.max(0, Number(e.target.value)) })}
                    className="w-full pl-8 pr-3 py-1.5 border border-slate-300 rounded text-sm font-mono text-slate-800 focus:outline-amber-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Results & Visuals */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top comparison card */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="bg-slate-900 text-white p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider block">
                    {isEurope ? `Lifecycle Savings over ${params.years} Years` : `Financieel Verschil over ${params.years} Jaar`}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                    € {netSavings.toLocaleString(locale)} {isEurope ? "Total Savings" : "Totale Besparing"}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEurope 
                      ? "Cumulative cost variance between Category IV (> 2L) and Article 4(3) SEP (≤ 2L)"
                      : "Cumulatief kostenverschil tussen PED Categorie IV (> 2L) en Artikel 4.3 SEP (< 2L)"
                    }
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-3 text-right">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">
                    {isEurope ? "Savings per machine" : "Besparing per machine"}
                  </div>
                  <div className="font-mono text-lg font-bold text-amber-400">
                    € {Math.round(netSavings / params.machineCount).toLocaleString(locale)}
                  </div>
                </div>
              </div>

              {/* System comparison columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
                {/* System B: PED Categorie IV */}
                <div className="p-6 space-y-3 bg-amber-50/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      {isEurope ? "System B (> 2L Volume)" : "Systeem B (> 2 Liter Volume)"}
                    </span>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {isEurope ? "PED Category IV Assembly" : "PED Categorie IV"}
                  </h3>
                  <div className="font-mono text-2xl font-bold text-rose-700">
                    € {totalPedIvTco.toLocaleString(locale)}
                  </div>
                  <ul className="text-xs space-y-2 text-slate-600 pt-2">
                    <li className="flex justify-between">
                      <span>{isEurope ? "Pre-Commissioning Audit:" : "Initiële KvI Keuring:"}</span>
                      <strong className="font-mono">€ {totalKviCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? `${periodicCycles}x Biennial Recertification:` : `${periodicCycles}x 2-Jaarlijkse Herkeuring:`}</span>
                      <strong className="font-mono">€ {totalPeriodicInspectionCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? "Downtime & Replacement Rental:" : "Stilstand & Productiederving:"}</span>
                      <strong className="font-mono">€ {totalDowntimeCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? "Proprietary OEM Parts Markup:" : "Vendor Lock-in (Originele onderdelen):"}</span>
                      <strong className="font-mono">€ {totalPartsMarkup.toLocaleString(locale)}</strong>
                    </li>
                  </ul>
                </div>

                {/* System A: SEP (< 2L) */}
                <div className="p-6 space-y-3 bg-emerald-50/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {isEurope ? "System A (≤ 2L Volume)" : "Systeem A (< 2 Liter Volume)"}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {isEurope ? "Article 4(3) SEP (Exempt)" : "Artikel 4.3 (SEP)"}
                  </h3>
                  <div className="font-mono text-2xl font-bold text-emerald-700">
                    € 0 <span className="text-xs font-normal text-slate-500">{isEurope ? "statutory audit cost" : "keuringslast"}</span>
                  </div>
                  <ul className="text-xs space-y-2 text-slate-600 pt-2">
                    <li className="flex justify-between">
                      <span>{isEurope ? "Pre-Commissioning Audit:" : "Initiële KvI Keuring:"}</span>
                      <strong className="font-mono text-emerald-700">{isEurope ? "Exempt (€ 0)" : "Vrijgesteld (€ 0)"}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? "Periodic Recertification:" : "Periodieke Herkeuring:"}</span>
                      <strong className="font-mono text-emerald-700">{isEurope ? "Exempt (€ 0)" : "Vrijgesteld (€ 0)"}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? "Audit Downtime Days:" : "Keuringsgerelateerde stilstand:"}</span>
                      <strong className="font-mono text-emerald-700">{isEurope ? "0 days (€ 0)" : "0 dagen (€ 0)"}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{isEurope ? "Component Independence:" : "Onderdeelvrijheid:"}</span>
                      <strong className="font-mono text-emerald-700">{isEurope ? "100% Free (€ 0 markup)" : "100% Vrij (€ 0 opslag)"}</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Breakdown bar */}
              <div className="p-6 space-y-3 bg-white">
                <div className="text-xs font-semibold text-slate-700">
                  {isEurope ? "System B Lifecycle Cost Breakdown:" : "Kostenopbouw Systeem B over de looptijd:"}
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex text-[10px] text-white font-mono">
                  <div 
                    style={{ width: `${(totalKviCost / (totalPedIvTco || 1)) * 100}%` }} 
                    className="bg-amber-600 h-full flex items-center justify-center"
                    title={`Commissioning: € ${totalKviCost}`}
                  />
                  <div 
                    style={{ width: `${(totalPeriodicInspectionCost / (totalPedIvTco || 1)) * 100}%` }} 
                    className="bg-rose-600 h-full flex items-center justify-center"
                    title={`Audits: € ${totalPeriodicInspectionCost}`}
                  />
                  <div 
                    style={{ width: `${(totalDowntimeCost / (totalPedIvTco || 1)) * 100}%` }} 
                    className="bg-slate-700 h-full flex items-center justify-center"
                    title={`Downtime: € ${totalDowntimeCost}`}
                  />
                  <div 
                    style={{ width: `${(totalPartsMarkup / (totalPedIvTco || 1)) * 100}%` }} 
                    className="bg-indigo-600 h-full flex items-center justify-center"
                    title={`Parts markup: € ${totalPartsMarkup}`}
                  />
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-amber-600 inline-block" />
                    {isEurope ? "Commissioning" : "KvI"} ({Math.round((totalKviCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 inline-block" />
                    {isEurope ? "Periodic Audits" : "Herkeuringen"} ({Math.round((totalPeriodicInspectionCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-slate-700 inline-block" />
                    {isEurope ? "Downtime" : "Stilstand"} ({Math.round((totalDowntimeCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-indigo-600 inline-block" />
                    {isEurope ? "Parts Markup" : "Onderdelenopslag"} ({Math.round((totalPartsMarkup / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-5 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-600">
                <strong>{isEurope ? "Export calculation?" : "Rapportage exporteren?"}</strong> {isEurope ? "Utilise this analysis for management CAPEX/OPEX procurement dossiers." : "Gebruik deze berekening voor uw investeringsvoorstel (CAPEX/OPEX)."}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {isEurope ? "Print TCO Report" : "Print TCO Rapport"}
                </button>
                <button
                  onClick={() => onNavigate('downloadcenter')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
                >
                  <span>{isEurope ? "Download Audit Checklist" : "Download Keuringschecklist"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Year-by-year table */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 overflow-hidden">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-4">
                {isEurope ? "Annual Cost Trajectory for System B (PED Category IV)" : "Jaarlijkse Kostenontwikkeling Systeem B (PED Categorie IV)"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="pb-2">{isEurope ? "Year" : "Jaar"}</th>
                      <th className="pb-2">{isEurope ? "Commissioning" : "KvI"}</th>
                      <th className="pb-2">{isEurope ? "Recertification" : "Herkeuring"}</th>
                      <th className="pb-2">{isEurope ? "Downtime" : "Stilstand"}</th>
                      <th className="pb-2">{isEurope ? "Parts Markup" : "Onderdelen"}</th>
                      <th className="pb-2 text-right">{isEurope ? "Annual Total" : "Jaartotaal"}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {yearBreakdown.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50/50">
                        <td className="py-2.5 font-bold text-slate-900">{isEurope ? `Year ${row.year}` : `Jaar ${row.year}`}</td>
                        <td className="py-2.5 text-slate-600">
                          {row.kvi > 0 ? `€ ${row.kvi.toLocaleString(locale)}` : '—'}
                        </td>
                        <td className="py-2.5 text-slate-600">
                          {row.inspections > 0 ? `€ ${row.inspections.toLocaleString(locale)}` : '—'}
                        </td>
                        <td className="py-2.5 text-slate-600">
                          {row.downtime > 0 ? `€ ${row.downtime.toLocaleString(locale)}` : '—'}
                        </td>
                        <td className="py-2.5 text-slate-600">
                          € {row.parts.toLocaleString(locale)}
                        </td>
                        <td className="py-2.5 text-right font-bold text-slate-900">
                          € {row.yearTotal.toLocaleString(locale)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-slate-200 font-bold font-mono text-slate-900">
                      <td className="pt-3">{isEurope ? "Total" : "Totaal"}</td>
                      <td className="pt-3">€ {totalKviCost.toLocaleString(locale)}</td>
                      <td className="pt-3">€ {totalPeriodicInspectionCost.toLocaleString(locale)}</td>
                      <td className="pt-3">€ {totalDowntimeCost.toLocaleString(locale)}</td>
                      <td className="pt-3">€ {totalPartsMarkup.toLocaleString(locale)}</td>
                      <td className="pt-3 text-right text-rose-700 text-sm">
                        € {totalPedIvTco.toLocaleString(locale)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
