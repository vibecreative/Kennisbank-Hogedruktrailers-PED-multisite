import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';
import { useSiteContent } from '../content';
import { getTwoLiterTranslations } from '../content/translations/twoLiter';

const coilImage = '/images/thermodynamics_pressure_flashing_1791445987190.jpg';

interface TwoLiterGrensPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const TwoLiterGrensPage: React.FC<TwoLiterGrensPageProps> = ({ 
  onNavigate,
}) => {
  const { lang } = useSiteContent();
  const txt = getTwoLiterTranslations(lang);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Layers className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {txt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {txt.header.desc}
          </p>
        </div>

        {/* Featured Technical Visual & Explanation */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 h-64 md:h-full relative min-h-[260px]">
              <img
                src={coilImage}
                alt={txt.flashing.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                {txt.flashing.badge}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900">
                {txt.flashing.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {txt.flashing.p1}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {txt.flashing.p2}
              </p>
            </div>
          </div>
        </div>

        {/* Flashing Berekeningskaart & Fysische Vergelijking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-2.5 py-1 rounded">
                {txt.flashing.c1Badge}
              </span>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {txt.flashing.c1Title}
            </h3>
            <div className="p-3 bg-white rounded-lg border border-rose-200 space-y-1 font-mono text-xs">
              <div className="text-slate-500">{txt.flashing.c1FormulaVol}</div>
              <div className="font-bold text-rose-700">{txt.flashing.c1FormulaCalc}</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {txt.flashing.c1Desc}
            </p>
          </div>

          <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                {txt.flashing.c2Badge}
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">
              {txt.flashing.c2Title}
            </h3>
            <div className="p-3 bg-white rounded-lg border border-emerald-200 space-y-1 font-mono text-xs">
              <div className="text-slate-500">{txt.flashing.c2FormulaVol}</div>
              <div className="font-bold text-emerald-700">{txt.flashing.c2FormulaCalc}</div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {txt.flashing.c2Desc}
            </p>
          </div>
        </div>

        {/* The Exact Comparison Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs space-y-4">
          <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700">
                {txt.tableSection.badge}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900 mt-1">
                {txt.tableSection.title}
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {txt.tableSection.source}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 font-semibold text-slate-700 w-1/4">
                    {txt.tableSection.colCriteria}
                  </th>
                  <th className="p-4 font-bold text-emerald-800 bg-emerald-50/50 w-[37.5%]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{txt.tableSection.colSep}</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-rose-800 bg-rose-50/50 w-[37.5%]">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>{txt.tableSection.colCat4}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Row 1: Fysisch principe */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {txt.tableSection.row1Criteria}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10 font-medium">
                    {txt.tableSection.row1Sep}
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10 font-medium">
                    {txt.tableSection.row1Cat4}
                  </td>
                </tr>

                {/* Row 2: PED Risicoklasse */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {txt.tableSection.row2Criteria}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <strong className="text-emerald-800 font-mono">
                      {txt.tableSection.row2Sep}
                    </strong>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <strong className="text-rose-800 font-mono">
                      {txt.tableSection.row2Cat4}
                    </strong>
                  </td>
                </tr>

                {/* Row 3: Energetisch risico */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {txt.tableSection.row3Criteria}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    {txt.tableSection.row3Sep}
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10 font-medium text-rose-900">
                    {txt.tableSection.row3Cat4}
                  </td>
                </tr>

                {/* Row 4: Veiligheidsfilosofie */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {txt.tableSection.row4Criteria}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <strong className="text-emerald-800">
                      {txt.tableSection.row4Sep}
                    </strong>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {txt.tableSection.row4SepSub}
                    </div>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <strong className="text-rose-800">
                      {txt.tableSection.row4Cat4}
                    </strong>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {txt.tableSection.row4Cat4Sub}
                    </div>
                  </td>
                </tr>

                {/* Row 5: Keuringsplicht */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">
                    {txt.tableSection.row5Criteria}
                  </td>
                  <td className="p-4 text-slate-700 bg-emerald-50/10">
                    <div className="inline-flex items-center gap-1.5 text-emerald-800 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{txt.tableSection.row5Sep}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-700 bg-rose-50/10">
                    <div className="inline-flex items-center gap-1.5 text-rose-800 font-bold">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{txt.tableSection.row5Cat4}</span>
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
              {txt.dueDiligence.badge}
            </span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
              {txt.dueDiligence.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {txt.dueDiligence.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold font-mono text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {txt.dueDiligence.q1Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.dueDiligence.q1Desc}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-800 font-bold font-mono text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {txt.dueDiligence.q2Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.dueDiligence.q2Desc}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-bold font-mono text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="font-serif font-bold text-sm text-slate-900">
                {txt.dueDiligence.q3Title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.dueDiligence.q3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Practical takeaway */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
            {txt.takeaway.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {txt.takeaway.desc}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('keuringsverplichtingen')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{txt.takeaway.btnKeuringen}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{txt.takeaway.btnTco}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
