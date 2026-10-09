import React from 'react';
import { Globe, Languages } from 'lucide-react';
import { useSiteContent } from '../content';

export const DevSwitcher: React.FC = () => {
  const { target, beneluxLang, setLanguage, switchTarget } = useSiteContent();

  // Only display in development / preview environments (AI Studio dev/pre URLs or localhost)
  if (typeof window === 'undefined') return null;

  const host = window.location.hostname.toLowerCase();
  const search = window.location.search;

  // Never show on custom production domains or deployed Vercel domains
  if (
    host.includes('hogedruktrailerkeuren') ||
    host.includes('high-pressure-steam-inspection') ||
    host.includes('kennisbank-hogedruktrailers')
  ) {
    return null;
  }

  // Only display in local development / AI Studio preview or when explicitly requested via URL param
  const isDevOrPreview =
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.includes('run.app') ||
    host.includes('ais-dev') ||
    host.includes('ais-pre') ||
    search.includes('dev=true') ||
    search.includes('preview=true');

  if (!isDevOrPreview) {
    return null;
  }

  return (
    <aside
      aria-label="Development environment site profile switcher"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-slate-950/95 text-white border border-slate-700/80 shadow-2xl backdrop-blur-md px-3.5 py-2 rounded-full text-xs font-medium"
    >
      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
        <Globe className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Preview:</span>
      </div>

      <div className="inline-flex rounded-full bg-slate-800 p-0.5 border border-slate-700">
        <button
          onClick={() => switchTarget('benelux')}
          className={`px-3 py-1 rounded-full text-xs transition-all inline-flex items-center gap-1.5 ${
            target === 'benelux'
              ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Schakel ontwikkelomgeving naar Benelux (NL · FR · DE)"
        >
          <span>BeNeLux</span>
        </button>
        <button
          onClick={() => switchTarget('europe')}
          className={`px-3 py-1 rounded-full text-xs transition-all inline-flex items-center gap-1.5 ${
            target === 'europe'
              ? 'bg-sky-500 text-slate-950 font-bold shadow-xs'
              : 'text-slate-300 hover:text-white'
          }`}
          title="Switch development environment to Europe (EU/EN)"
        >
          <span>🇪🇺 EU (EN)</span>
        </button>
      </div>

      {target === 'benelux' && (
        <div className="inline-flex rounded-full bg-slate-800 p-0.5 border border-slate-700 items-center">
          <Languages className="w-3 h-3 text-slate-400 ml-1.5 mr-0.5" />
          {(['nl', 'fr', 'de'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`px-2 py-0.5 rounded-full text-[11px] font-mono uppercase transition-all ${
                beneluxLang === l
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
};
