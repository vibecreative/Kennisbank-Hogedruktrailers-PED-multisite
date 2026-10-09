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
import { getTcoTranslations } from '../content/translations/tco';

interface TcoCalculatorPageProps {
  onNavigate: (slug: string) => void;
}

export const TcoCalculatorPage: React.FC<TcoCalculatorPageProps> = ({ onNavigate }) => {
  const { lang } = useSiteContent();
  const txt = getTcoTranslations(lang);

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

  const locale = lang === 'nl' ? 'nl-NL' : lang === 'fr' ? 'fr-FR' : lang === 'de' ? 'de-DE' : 'en-GB';

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
      kvi,
      inspections,
      downtime,
      parts,
      yearTotal,
    };
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Calculator className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {txt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {txt.header.desc}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="font-serif font-bold text-lg text-slate-900">
                  {txt.inputs.title}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  {txt.inputs.subtitle}
                </p>
              </div>
            </div>

            {/* Slider 1: Machine Count */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={machineCountInputId} className="font-medium text-slate-700">
                  {txt.inputs.machineCount}
                </label>
                <span className="font-mono font-bold text-slate-900 text-base">
                  {params.machineCount}
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
                <span>1</span>
                <span>10</span>
                <span>20</span>
              </div>
            </div>

            {/* Slider 2: Exploitatieperiode */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor={yearsInputId} className="font-medium text-slate-700">
                  {txt.inputs.years}
                </label>
                <span className="font-mono font-bold text-slate-900 text-base">
                  {params.years}
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
                <span>2</span>
                <span>6</span>
                <span>10</span>
              </div>
            </div>

            {/* Parameter: KvI Kosten */}
            <div className="pt-2 border-t border-slate-100 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <label htmlFor={kviInputId} className="font-medium text-slate-700 cursor-pointer">
                      {txt.inputs.kvi}
                    </label>
                    <InfoTooltip
                      title={txt.results.kviTotal}
                      badge="> 2L"
                      badgeType="warning"
                      content={
                        <p>{txt.inputs.kviHelp}</p>
                      }
                    />
                  </div>
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
                      {txt.inputs.periodic}
                    </label>
                    <InfoTooltip
                      title={txt.results.periodicTotal}
                      badge="Cat. IV"
                      badgeType="warning"
                      content={
                        <p>{txt.inputs.periodicHelp}</p>
                      }
                    />
                  </div>
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
                      {txt.inputs.downtimeDays}
                    </label>
                    <InfoTooltip
                      title={txt.results.downtimeTotal}
                      badge="Downtime"
                      badgeType="neutral"
                      content={
                        <p>{txt.inputs.downtimeDaysHelp}</p>
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
                    {txt.inputs.downtimeCost}
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
                      {txt.inputs.partsMarkup}
                    </label>
                    <InfoTooltip
                      title={txt.results.partsTotal}
                      badge="OEM"
                      badgeType="info"
                      content={
                        <p>{txt.inputs.partsMarkupHelp}</p>
                      }
                    />
                  </div>
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
                    {txt.results.savingsTitle}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                    € {netSavings.toLocaleString(locale)}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {txt.results.savingsSubtitle}
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-3 text-right">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">
                    {txt.results.savingsSubtitle}
                  </div>
                  <div className="font-mono text-lg font-bold text-amber-400">
                    € {Math.round(netSavings / params.machineCount).toLocaleString(locale)} / unit
                  </div>
                </div>
              </div>

              {/* System comparison columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
                {/* System B: PED Categorie IV */}
                <div className="p-6 space-y-3 bg-amber-50/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-800">
                      PED Cat. IV (&gt; 2L)
                    </span>
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {txt.results.cat4Title}
                  </h3>
                  <div className="font-mono text-2xl font-bold text-rose-700">
                    € {totalPedIvTco.toLocaleString(locale)}
                  </div>
                  <ul className="text-xs space-y-2 text-slate-600 pt-2">
                    <li className="flex justify-between">
                      <span>{txt.results.kviTotal}:</span>
                      <strong className="font-mono">€ {totalKviCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{periodicCycles}x {txt.results.periodicTotal}:</span>
                      <strong className="font-mono">€ {totalPeriodicInspectionCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{txt.results.downtimeTotal}:</span>
                      <strong className="font-mono">€ {totalDowntimeCost.toLocaleString(locale)}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{txt.results.partsTotal}:</span>
                      <strong className="font-mono">€ {totalPartsMarkup.toLocaleString(locale)}</strong>
                    </li>
                  </ul>
                </div>

                {/* System A: SEP (< 2L) */}
                <div className="p-6 space-y-3 bg-emerald-50/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      SEP (≤ 2L)
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-900">
                    {txt.results.sepTitle}
                  </h3>
                  <div className="font-mono text-2xl font-bold text-emerald-700">
                    € 0
                  </div>
                  <ul className="text-xs space-y-2 text-slate-600 pt-2">
                    <li className="flex justify-between">
                      <span>{txt.results.kviTotal}:</span>
                      <strong className="font-mono text-emerald-700">€ 0</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{txt.results.periodicTotal}:</span>
                      <strong className="font-mono text-emerald-700">€ 0</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{txt.results.downtimeTotal}:</span>
                      <strong className="font-mono text-emerald-700">0 days (€ 0)</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{txt.results.partsTotal}:</span>
                      <strong className="font-mono text-emerald-700">100% Free (€ 0)</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Visual Breakdown bar */}
              <div className="p-6 space-y-3 bg-white">
                <div className="text-xs font-semibold text-slate-700">
                  {txt.table.desc}
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex text-[10px] text-white font-mono">
                  <div 
                    style={{ width: `${(totalKviCost / (totalPedIvTco || 1)) * 100}%` }} 
                    className="bg-amber-600 h-full flex items-center justify-center"
                    title={`KvI: € ${totalKviCost}`}
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
                    {txt.table.kviCol} ({Math.round((totalKviCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 inline-block" />
                    {txt.table.periodicCol} ({Math.round((totalPeriodicInspectionCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-slate-700 inline-block" />
                    {txt.table.downtimeCol} ({Math.round((totalDowntimeCost / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-indigo-600 inline-block" />
                    {txt.table.partsCol} ({Math.round((totalPartsMarkup / (totalPedIvTco || 1)) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-5 rounded-xl border border-slate-200">
              <div className="text-xs text-slate-600">
                <strong>{txt.advisory.title}</strong>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {txt.advisory.printBtn}
                </button>
                <button
                  onClick={() => onNavigate('downloadcenter')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
                >
                  <span>{txt.advisory.wizardBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Year-by-year table */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 overflow-hidden">
              <h3 className="font-serif font-bold text-base text-slate-900 mb-4">
                {txt.table.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="pb-2">{txt.table.yearCol}</th>
                      <th className="pb-2">{txt.table.kviCol}</th>
                      <th className="pb-2">{txt.table.periodicCol}</th>
                      <th className="pb-2">{txt.table.downtimeCol}</th>
                      <th className="pb-2">{txt.table.partsCol}</th>
                      <th className="pb-2 text-right">{txt.table.cumulativeCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {yearBreakdown.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50/50">
                        <td className="py-2.5 font-bold text-slate-900">{txt.table.yearCol} {row.year}</td>
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
                      <td className="pt-3">{txt.table.totalRow}</td>
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
