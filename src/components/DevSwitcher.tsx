import React from 'react';
import { Globe } from 'lucide-react';
import { useSiteContent } from '../content';

export const DevSwitcher: React.FC = () => {
  const { target, switchTarget } = useSiteContent();

  // Only display in development / preview environments (AI Studio dev/pre URLs or localhost)
  if (typeof window === 'undefined') return null;

  const host = window.location.hostname.toLowerCase();
  const search = window.location.search;

  // Never show in production domains
  if (
    host.includes('hogedruktrailerkeuren') ||
    host.includes('high-pressure-steam-inspection')
  ) {
    return null;
  }

  const isDevOrPreview =
    host === 'localhost' ||
    host === '127.0.0.1' ||
    host.includes('run.app') ||
    host.includes('vercel.app') ||
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
          title="Schakel ontwikkelomgeving naar Benelux (NL/BE)"
        >
          <span>🇳🇱</span>
          <span>NL/BE</span>
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
          <span>🇪🇺</span>
          <span>EU (EN)</span>
        </button>
      </div>
    </aside>
  );
};
