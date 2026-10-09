import React from 'react';
import { ShieldCheck, Scale, FileText, Globe, Languages, ExternalLink } from 'lucide-react';
import { useSiteContent } from '../content';

interface FooterProps {
  onNavigate: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { target, beneluxLang, setLanguage, availableLanguages, content, switchTarget, t, isSeparateDomain, getTargetUrl } = useSiteContent();

  const isEurope = target === 'europe';

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Platform identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {content.meta.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {content.meta.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-amber-500" />
                {t({
                  nl: '100% Merkneutraal & Educatief',
                  fr: '100% Neutre & Éducatif',
                  de: '100% Neutral & Aufklärend',
                  en: '100% Brand-Neutral & Educational',
                })}
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-sky-400" />
                {t({
                  nl: 'Conform NEN-EN, SZW & Codex',
                  fr: 'Conforme NEN-EN, Codex & ITM',
                  de: 'Konform NEN-EN, Codex & ITM',
                  en: 'Accredited EU Regulatory Standards',
                })}
              </span>
            </div>

            {/* Language switcher for Benelux in footer */}
            {target === 'benelux' && (
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <Languages className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  {t({
                    nl: 'Taal BeNeLux:',
                    fr: 'Langue BeNeLux :',
                    de: 'Sprache BeNeLux:',
                    en: 'Language:',
                  })}
                </span>
                <div className="inline-flex rounded-md border border-slate-700 bg-slate-800 p-0.5">
                  {availableLanguages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      className={`px-2 py-0.5 rounded text-xs transition-colors flex items-center gap-1 ${
                        beneluxLang === l.code
                          ? 'bg-amber-600 text-white font-medium shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Version Switcher pill in footer */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{isEurope ? 'Selected Profile:' : 'Domein / Profiel:'}</span>
              <div className="inline-flex rounded-md border border-slate-700 bg-slate-800 p-0.5">
                {target === 'benelux' ? (
                  <span className="px-2 py-0.5 rounded text-xs bg-amber-600 text-white font-medium cursor-default">
                    BeNeLux (NL · FR · DE)
                  </span>
                ) : (
                  <a
                    href={getTargetUrl('benelux')}
                    onClick={(e) => {
                      if (!isSeparateDomain) {
                        e.preventDefault();
                        switchTarget('benelux');
                      }
                    }}
                    className="px-2 py-0.5 rounded text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    title={isEurope ? 'Visit BeNeLux platform (hogedruktrailerkeuren.eu)' : 'Naar BeNeLux platform'}
                  >
                    <span>BeNeLux (NL · FR · DE)</span>
                    {isSeparateDomain && <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />}
                  </a>
                )}

                {target === 'europe' ? (
                  <span className="px-2 py-0.5 rounded text-xs bg-sky-600 text-white font-medium cursor-default">
                    European Union (EN)
                  </span>
                ) : (
                  <a
                    href={getTargetUrl('europe')}
                    onClick={(e) => {
                      if (!isSeparateDomain) {
                        e.preventDefault();
                        switchTarget('europe');
                      }
                    }}
                    className="px-2 py-0.5 rounded text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    title={t({
                      nl: 'Naar EU platform (Engels)',
                      fr: 'Vers la plateforme UE (anglais)',
                      de: 'Zur EU-Plattform (Englisch)',
                      en: 'Visit European Union platform',
                    })}
                  >
                    <span>European Union (EN)</span>
                    {isSeparateDomain && <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Col 2: Sitemap Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {t({
                nl: 'Kennisbank Sitemap',
                fr: 'Plan du Site',
                de: 'Sitemap Wissensplattform',
                en: 'Platform Navigation',
              })}
            </div>
            <ul className="space-y-2 text-sm">
              {content.navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.slug)}
                    className={`transition-colors flex items-center gap-2 group text-left ${
                      item.id === 'downloadcenter'
                        ? 'text-amber-400 hover:text-amber-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.label}
                    </span>
                    {item.id === 'downloadcenter' && (
                      <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                        PDF
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Wetgeving & Bronnen */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {t({
                nl: 'Wettelijk Kader',
                fr: 'Cadre Réglementaire',
                de: 'Gesetzlicher Rahmen',
                en: 'Regulatory Framework',
              })}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              {isEurope ? (
                <>
                  <li>
                    <span className="text-slate-200 block font-medium">Directive 2014/68/EU (PED)</span>
                    <span>European Pressure Equipment Directive (Annex II Table 5)</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">EN 12952 / EN 13445 Standards</span>
                    <span>Water-tube boilers and unfired pressure vessels</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">National In-Service Regimes</span>
                    <span>BetrSichV (DE), Arrêté 2017 (FR), WBDA (NL), Codex (BE), PSSR (UK)</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Notified Bodies & Inspecting Authorities</span>
                    <span>TÜV, DEKRA, Vinçotte, APAVE, Kiwa, Bureau Veritas</span>
                  </li>
                </>
              ) : beneluxLang === 'fr' ? (
                <>
                  <li>
                    <span className="text-slate-200 block font-medium">Codex sur le bien-être au travail Livre IV</span>
                    <span>Réglementation belge relative aux équipements de travail &amp; RGPT</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Règlement grand-ducal &amp; ITM</span>
                    <span>Prescriptions luxembourgeoises pour générateurs de vapeur</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Directive 2014/68/UE (DESP)</span>
                    <span>Directive européenne équipements sous pression</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Organismes de contrôle agréés (EDTC &amp; NL-CBI)</span>
                    <span>Vinçotte, Apragaz, Luxcontrol, TÜV, Dekra, Kiwa</span>
                  </li>
                </>
              ) : beneluxLang === 'de' ? (
                <>
                  <li>
                    <span className="text-slate-200 block font-medium">ITM-Vorschriften &amp; Großherzogliche Verordnung</span>
                    <span>Luxemburgische Vorschriften für Dampf- und Druckgeräte</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Codex über das Wohlbefinden bei der Arbeit</span>
                    <span>Belgisches Arbeitsschutzrecht &amp; RGPT Vorschriften</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">DGRL Richtlinie 2014/68/EU</span>
                    <span>Europäische Druckgeräterichtlinie</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Akkreditierte Prüfstellen (EDTC &amp; Luxcontrol)</span>
                    <span>Luxcontrol, Vinçotte, Apragaz, TÜV NORD, Dekra</span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <span className="text-slate-200 block font-medium">Warenwetbesluit Drukapparatuur 2016</span>
                    <span>Staatsblad 2016, 273 (Nederlandse wetgeving)</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Codex Welzijn op het Werk Boek IV</span>
                    <span>Belgische welzijnswetgeving &amp; ARAB art. 269-283</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">PED Richtlijn 2014/68/EU</span>
                    <span>Europese richtlijn drukapparatuur</span>
                  </li>
                  <li>
                    <span className="text-slate-200 block font-medium">Inspectiediensten (NL-CBI &amp; EDTC)</span>
                    <span>TÜV, DEKRA, Vinçotte, Apragaz, Kiwa, BTI</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {content.meta.copyrightHolder}.
          </div>
          <div className="text-slate-400 text-center sm:text-right max-w-xl">
            {content.meta.legalDisclaimer}
          </div>
        </div>
      </div>
    </footer>
  );
};
