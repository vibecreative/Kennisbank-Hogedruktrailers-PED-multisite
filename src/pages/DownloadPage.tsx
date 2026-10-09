import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  CheckSquare, 
  Square
} from 'lucide-react';
import { useSiteContent } from '../content';
import { getDownloadTranslations } from '../content/translations/download';

interface DownloadPageProps {
  onNavigate?: (slug: string) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = () => {
  const { content, lang } = useSiteContent();
  const txt = getDownloadTranslations(lang);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  const checklistItems = content.checklist;

  const handleToggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const phases = Array.from(new Set(checklistItems.map(item => item.phase)));

  const filteredItems = selectedPhase === 'all' 
    ? checklistItems 
    : checklistItems.filter(item => item.phase === selectedPhase);

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / (checklistItems.length || 1)) * 100);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Download className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            {txt.header.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
            {txt.header.desc}
          </p>
        </div>

        {/* Interactive Checklist Dashboard */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700">
                {txt.dashboard.title}
              </span>
              <h2 className="font-serif font-bold text-xl text-slate-900 mt-1">
                {txt.header.title}
              </h2>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{txt.dashboard.printBtn}</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-slate-700">
              <span>{txt.dashboard.progressLabel}</span>
              <span className="font-mono font-bold text-slate-900">
                {completedCount} / {checklistItems.length} {txt.dashboard.completed} ({progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="bg-amber-600 h-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedPhase === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {txt.dashboard.allPhases} ({checklistItems.length})
            </button>
            {phases.map(phase => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedPhase === phase
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Items List */}
          <div className="space-y-3 pt-2">
            {filteredItems.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => handleToggleItem(item.id)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isChecked
                      ? 'border-emerald-300 bg-emerald-50/40 text-slate-800'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                  }`}
                >
                  <button
                    type="button"
                    aria-label={`Toggle ${item.title}`}
                    className="mt-0.5 text-slate-400 hover:text-amber-600 transition-colors shrink-0"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-300" />
                    )}
                  </button>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        {item.phase}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                          item.criticality === 'Verplicht' || item.criticality === 'Mandatory' || item.criticality === 'Obligatoire' || item.criticality === 'Pflicht'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}>
                          {item.criticality}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {item.requirement}
                        </span>
                      </div>
                    </div>

                    <h3 className={`font-serif font-bold text-sm sm:text-base ${
                      isChecked ? 'line-through text-slate-500' : 'text-slate-900'
                    }`}>
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
