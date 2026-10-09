import React from 'react';
import { 
  FileWarning, 
  ArrowRight, 
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useSiteContent } from '../content';
import { getKeuringenTranslations } from '../content/translations/keuringen';

interface KeuringenPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const KeuringenPage: React.FC<KeuringenPageProps> = ({ 
  onNavigate,
}) => {
  const { lang } = useSiteContent();
  const txt = getKeuringenTranslations(lang);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <FileWarning className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {txt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {txt.header.desc}
          </p>
        </div>

        {/* 3 Main Pillars */}
        <div className="space-y-8">
          {/* Pillar 1: KvI / Commissioning */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                01
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                  {txt.p1.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {txt.p1.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.p1.desc}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
              <div className="font-semibold text-slate-800">
                {txt.p1.listTitle}
              </div>
              <ul className="space-y-1 list-disc list-inside text-slate-600">
                <li>{txt.p1.item1}</li>
                <li>{txt.p1.item2}</li>
                <li>{txt.p1.item3}</li>
                <li>{txt.p1.item4}</li>
                <li>{txt.p1.item5}</li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: Periodieke Herkeuring */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                02
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  {txt.p2.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {txt.p2.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.p2.desc}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
              <div className="font-semibold text-slate-800">
                {txt.p2.listTitle}
              </div>
              <ul className="space-y-1 list-disc list-inside text-slate-600">
                <li>{txt.p2.item1}</li>
                <li>{txt.p2.item2}</li>
                <li>{txt.p2.item3}</li>
                <li>{txt.p2.item4}</li>
              </ul>
            </div>

            <p className="text-xs text-slate-500 italic">
              {txt.p2.intervalNote}
            </p>
          </div>

          {/* Pillar 3: Vendor Lock-in & Merkplicht */}
          <div className="bg-white rounded-xl border border-rose-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                03
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold">
                  {txt.p3.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {txt.p3.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {txt.p3.desc}
            </p>

            <div className="border border-rose-200 bg-rose-50/60 rounded-lg p-4 text-xs text-rose-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>{txt.p3.boxTitle}</span>
              </div>
              <p className="leading-relaxed text-rose-950">
                {txt.p3.boxP1}
              </p>
              <p className="leading-relaxed text-rose-950">
                {txt.p3.boxP2}
              </p>
            </div>
          </div>

          {/* Pillar 4: Arbeidsinspectie Handhaving & Sancties */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                04
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                  {txt.sanctions.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {txt.sanctions.title}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.sanctions.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded border border-rose-200 bg-rose-50/40 space-y-1">
                <span className="font-mono text-rose-800 font-bold uppercase block">{txt.sanctions.c1Badge}</span>
                <strong className="text-slate-900">{txt.sanctions.c1Title}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {txt.sanctions.c1Desc}
                </p>
              </div>

              <div className="p-3.5 rounded border border-amber-200 bg-amber-50/40 space-y-1">
                <span className="font-mono text-amber-800 font-bold uppercase block">{txt.sanctions.c2Badge}</span>
                <strong className="text-slate-900">{txt.sanctions.c2Title}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {txt.sanctions.c2Desc}
                </p>
              </div>

              <div className="p-3.5 rounded border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-mono text-slate-700 font-bold uppercase block">{txt.sanctions.c3Badge}</span>
                <strong className="text-slate-900">{txt.sanctions.c3Title}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {txt.sanctions.c3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif font-bold text-xl text-white">
            {txt.callout.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {txt.callout.desc}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('internationaal')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{txt.callout.btnWizard}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{txt.callout.btnTco}</span>
            </button>
            <button
              onClick={() => onNavigate('downloadcenter')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{lang === 'nl' ? 'Download Keuringschecklist' : lang === 'fr' ? 'Télécharger la Checklist' : lang === 'de' ? 'Checkliste Herunterladen' : 'Download Checklist'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
