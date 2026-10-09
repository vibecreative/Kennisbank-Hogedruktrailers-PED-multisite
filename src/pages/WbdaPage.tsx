import React, { useState } from 'react';
import { 
  Building, 
  ArrowRight, 
  ShieldAlert,
  Scale
} from 'lucide-react';
import { useSiteContent } from '../content';
import { getWbdaTranslations } from '../content/translations/wbda';

interface WbdaPageProps {
  onNavigate: (slug: string) => void;
}

export const WbdaPage: React.FC<WbdaPageProps> = ({ onNavigate }) => {
  const { target, lang } = useSiteContent();
  const isEurope = target === 'europe';
  const txt = getWbdaTranslations(lang);

  // Tabs for Benelux
  const [activeTabBenelux, setActiveTabBenelux] = useState<'nl' | 'be' | 'lu'>('nl');

  // Tabs for Europe
  const [activeTabEurope, setActiveTabEurope] = useState<'de' | 'fr' | 'uk' | 'benelux'>('de');

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Scale className="w-3.5 h-3.5" />
            {txt.header.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {txt.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {txt.header.desc}
          </p>
        </div>

        {/* Core Section: Nieuwbouw vs Gebruiksfase */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              {txt.demarcation.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {txt.demarcation.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {txt.demarcation.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Box 1: Fabrikant */}
            <div className="border border-slate-200 rounded-lg p-5 space-y-3 bg-slate-50/50">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-slate-700">
                <Building className="w-4 h-4 text-sky-600" />
                <span>{txt.demarcation.oemBadge}</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.demarcation.oemTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {txt.demarcation.oemDesc}
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                {txt.demarcation.oemScope}
              </div>
            </div>

            {/* Box 2: Werkgever / Exploitant */}
            <div className="border-2 border-amber-300 rounded-lg p-5 space-y-3 bg-amber-50/30">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-amber-800">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>{txt.demarcation.employerBadge}</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {txt.demarcation.employerTitle}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {txt.demarcation.employerDesc}
              </p>
              <div className="text-[11px] text-amber-800 font-medium pt-2 border-t border-amber-200">
                {txt.demarcation.employerScope}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Country Deep-Dive */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                {txt.regimesHeader.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-1">
                {txt.regimesHeader.title}
              </h2>
            </div>
            
            {/* Tab selector */}
            {isEurope ? (
              <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-100 text-xs font-semibold">
                <button
                  onClick={() => setActiveTabEurope('de')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'de' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.europeTabs.tabDe}
                </button>
                <button
                  onClick={() => setActiveTabEurope('fr')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'fr' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.europeTabs.tabFr}
                </button>
                <button
                  onClick={() => setActiveTabEurope('uk')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'uk' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.europeTabs.tabUk}
                </button>
                <button
                  onClick={() => setActiveTabEurope('benelux')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'benelux' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.europeTabs.tabBenelux}
                </button>
              </div>
            ) : (
              <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-slate-100 text-xs font-semibold">
                <button
                  onClick={() => setActiveTabBenelux('nl')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabBenelux === 'nl' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.beneluxTabs.tabNl}
                </button>
                <button
                  onClick={() => setActiveTabBenelux('be')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabBenelux === 'be' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.beneluxTabs.tabBe}
                </button>
                <button
                  onClick={() => setActiveTabBenelux('lu')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabBenelux === 'lu' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {txt.beneluxTabs.tabLu}
                </button>
              </div>
            )}
          </div>

          {/* EUROPE TABS CONTENT */}
          {isEurope && (
            <>
              {activeTabEurope === 'de' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇩🇪</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        Germany: Betriebssicherheitsverordnung (BetrSichV) & TRBS Standards
                      </h3>
                      <span className="text-xs font-mono text-slate-500">BetrSichV Anhang 2 Abschnitt 4 • TRBS 1201 / TRBS 1203</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Inspection Authority</span>
                      <div className="font-bold text-slate-900 text-sm">ZÜS (Zugelassene Überwachungsstelle)</div>
                      <p className="text-slate-600">TÜV SÜD, TÜV Rheinland, TÜV NORD, DEKRA, GTÜ.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Commissioning</span>
                      <div className="font-bold text-slate-900 text-sm">Prüfung vor Inbetriebnahme (§ 15)</div>
                      <p className="text-slate-600">Mandatory on-site examination by ZÜS prior to first commercial operation.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Recurrent Cycles</span>
                      <div className="font-bold text-slate-900 text-sm">External (1 yr) / Internal (3 yrs)</div>
                      <p className="text-slate-600">Äußere Prüfung (12 months), Innere Prüfung (max 36 months), and hydrostatic tests.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTabEurope === 'fr' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇫🇷</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        France: Arrêté du 20 Novembre 2017 Relatif aux Équipements sous Pression
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Arrêté ministériel du 20 nov. 2017 • Code de l’Environnement</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Inspecting Body</span>
                      <div className="font-bold text-slate-900 text-sm">Organisme Habilité (OH)</div>
                      <p className="text-slate-600">APAVE, SOCOTEC, Dekra Industrial, Bureau Veritas France.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Commissioning</span>
                      <div className="font-bold text-slate-900 text-sm">Déclaration de mise en service (DMS)</div>
                      <p className="text-slate-600">Mandatory commissioning audit and registration with DREAL authorities.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Requalification</span>
                      <div className="font-bold text-slate-900 text-sm">Periodic Requalification (RP)</div>
                      <p className="text-slate-600">Inspection périodique (every 12–24 months) and requalification périodique every 2–5 years.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTabEurope === 'uk' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        United Kingdom: Pressure Systems Safety Regulations 2000 (PSSR)
                      </h3>
                      <span className="text-xs font-mono text-slate-500">SI 2000 No. 128 • HSE Approved Code of Practice (ACOP L122)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Inspection Role</span>
                      <div className="font-bold text-slate-900 text-sm">Competent Person (Engineering Insurer)</div>
                      <p className="text-slate-600">Allianz, Zurich Engineering, Bureau Veritas UK, HSB Engineering.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Statutory Scheme</span>
                      <div className="font-bold text-slate-900 text-sm">Written Scheme of Examination (WSE)</div>
                      <p className="text-slate-600">Legally mandatory written examination scheme drawn up by a certified Competent Person.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Audit Interval</span>
                      <div className="font-bold text-slate-900 text-sm">Typically 14–24 Months</div>
                      <p className="text-slate-600">Thorough examination before expiry of specified operating certificate.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTabEurope === 'benelux' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇪🇺</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        Benelux: Netherlands (WBDA 2016), Belgium (Codex), Luxembourg (ITM)
                      </h3>
                      <span className="text-xs font-mono text-slate-500">NL-CBI (NL) • EDTC (BE) • Organisme Agréé (LU)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Netherlands</span>
                      <div className="font-bold text-slate-900 text-sm">WBDA 2016 / KvI & VVI</div>
                      <p className="text-slate-600">Inspection by NL-CBI (TÜV, Dekra, Kiwa) every 24 months. Enforced by Arbeidsinspectie.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Belgium</span>
                      <div className="font-bold text-slate-900 text-sm">Codex Boek IV / EDTC</div>
                      <p className="text-slate-600">Annual inspection by EDTC (Vinçotte, Apragaz). Enforced by FOD WASO.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Luxembourg</span>
                      <div className="font-bold text-slate-900 text-sm">ITM Directives</div>
                      <p className="text-slate-600">Commissioning and periodic recertification supervised by ITM.</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* BENELUX TABS CONTENT */}
          {!isEurope && (
            <>
              {activeTabBenelux === 'nl' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇳🇱</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        {lang === 'fr' 
                          ? 'Pays-Bas : Warenwetbesluit Drukapparatuur 2016 (WBDA 2016)'
                          : lang === 'de'
                          ? 'Niederlande: Warenwetbesluit Drukapparatuur 2016 (WBDA 2016)'
                          : 'Nederland: Warenwetbesluit Drukapparatuur 2016 (WBDA 2016)'}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Staatsblad 2016, 273 • Warenwetregeling Drukapparatuur 2016 • PRDA Katern 1.3</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Organisme d’Inspection' : lang === 'de' ? 'Überwachungsstelle' : 'Keuringsinstantie'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">NL-CBI (Conformiteitsbeoordelingsinstantie)</div>
                      <p className="text-slate-600">TÜV NORD, Dekra, Kiwa, SGS, Bureau Veritas NL.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Première Mise en Service' : lang === 'de' ? 'Inbetriebnahme' : 'Eerste Ingebruikname'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Visite de Mise en Service (KvI / VVI)' : lang === 'de' ? 'Inbetriebnahmeprüfung (KvI / VVI)' : 'Keuring voor Ingebruikneming (KvI)'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr' 
                          ? 'Obligatoire selon l’Art. 21 WBDA 2016. Donne lieu à la délivrance formelle de la VVI.'
                          : lang === 'de'
                          ? 'Zwingend nach Art. 21 WBDA 2016. Ausstellung der formalen Verklaring van Ingebruikneming (VVI).'
                          : 'Verplicht conform Art. 21 WBDA 2016. Na goedkeuring volgt de formele Verklaring van Ingebruikneming (VVI).'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Contrôle Périodique' : lang === 'de' ? 'Wiederkehrende Prüfung' : 'Periodieke Cyclus'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Tous les 24 mois (2 ans)' : lang === 'de' ? 'Alle 24 Monate (2 Jahre)' : 'Elke 24 maanden (2 jaar)'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr'
                          ? 'Épreuve hydrostatique, vérification des soupapes et mesure d’épaisseur par ultrasons selon l’Art. 22 WBDA.'
                          : lang === 'de'
                          ? 'Wasserdruckprobe, Kalibrierung der Sicherheitsventile und Wanddickenmessung nach Art. 22 WBDA.'
                          : 'Verplichte hydrostatische beproeving, kalibratie veiligheidsafsluiters en ultrasone wanddiktemeting conform Art. 22 WBDA.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTabBenelux === 'be' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇧🇪</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        {lang === 'fr'
                          ? 'Belgique : Codex sur le bien-être au travail & RGPT'
                          : lang === 'de'
                          ? 'Belgien: Codex über das Wohlbefinden bei der Arbeit & RGPT'
                          : 'België: Codex over het Welzijn op het Werk & ARAB'}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Livre IV, Titre 3 • RGPT art. 269-283 • AR du 17 mars 2022</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Organisme Agréé' : lang === 'de' ? 'Prüfstelle' : 'Keuringsinstantie'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">EDTC (Service Externe Contrôles Techniques)</div>
                      <p className="text-slate-600">Vinçotte, Normec BTV, Apragaz, OCB, Bureau Veritas BE.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Mise en Service' : lang === 'de' ? 'Erstabnahme' : 'Eerste Ingebruikname'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Examen de Mise en Service EDTC' : lang === 'de' ? 'Inbetriebnahmeprüfung EDTC' : 'Indienststellingsonderzoek'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr'
                          ? 'Visite sur site obligatoire par un EDTC avec délivrance du rapport de mise en service.'
                          : lang === 'de'
                          ? 'Vor-Ort-Prüfung durch EDTC mit Ausstellung des Inbetriebnahmeberichts vor dem ersten Einsatz.'
                          : 'Vóór ingebruikname verplicht onderzoek door een EDTC met afgifte van een indienststellingsverslag.'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Fréquence de Contrôle' : lang === 'de' ? 'Prüffrist' : 'Periodieke Cyclus'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Standard Annuel (tous les 12 mois)' : lang === 'de' ? 'Standardmäßig Jährlich (alle 12 Monate)' : 'Standaard Jaarlijks (elke 12 maanden)'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr'
                          ? 'La réglementation belge impose par défaut un examen annuel et le contrôle des dispositifs de sécurité.'
                          : lang === 'de'
                          ? 'Das belgische Recht schreibt standardmäßig jährliche äußere Prüfungen und Funktionsprüfungen der Sicherheitsventile vor.'
                          : 'België kent een jaarlijks uitwendig onderzoek en controle van veiligheden.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTabBenelux === 'lu' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇱🇺</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        {lang === 'fr'
                          ? 'Luxembourg : Inspection du Travail et des Mines (ITM)'
                          : lang === 'de'
                          ? 'Luxemburg: Inspection du Travail et des Mines (ITM)'
                          : 'Luxemburg: Inspection du Travail et des Mines (ITM)'}
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Règlement grand-ducal du 23 décembre 1999 • Code du Travail</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Organisme Agréé' : lang === 'de' ? 'Überwachungsstelle' : 'Keuringsinstantie'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">Organisme Agréé &amp; ITM</div>
                      <p className="text-slate-600">Luxcontrol, organismes agréés sous surveillance de l’ITM.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Mise en Service' : lang === 'de' ? 'Inbetriebnahme' : 'Ingebruikname'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Notification & Examen Initial' : lang === 'de' ? 'Meldepflicht & Erstprüfung' : 'Mise en service notificatie'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr'
                          ? 'Notification obligatoire et inspection pour toute exploitation sur le territoire luxembourgeois.'
                          : lang === 'de'
                          ? 'Meldepflicht und Prüfung vor Aufnahme des Betriebs auf luxemburgischem Staatsgebiet.'
                          : 'Verplichte aanmelding en keuring voor exploitatie op Luxemburgs grondgebied.'}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">
                        {lang === 'fr' ? 'Contrôle Périodique' : lang === 'de' ? 'Wiederholungsprüfung' : 'Periodiek'}
                      </span>
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'fr' ? 'Examens Périodiques ITM' : lang === 'de' ? 'Wiederkehrende ITM-Prüfung' : '2-jaarlijks onderzoek'}
                      </div>
                      <p className="text-slate-600">
                        {lang === 'fr'
                          ? 'Vérifications régulières et épreuves selon les prescriptions de l’ITM.'
                          : lang === 'de'
                          ? 'Wiederkehrende Prüfung und Druckprüfung nach ITM-Richtlinien.'
                          : 'Periodieke herkeuring en beproeving conform de ITM-voorschriften.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Action Panel */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif font-bold text-xl text-white">
            {txt.summary.calloutTitle}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {txt.summary.calloutDesc}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{txt.summary.calloutBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Calculate European Lifecycle Costs" : lang === 'fr' ? "Calculer le TCO & Coûts d’Inspection" : lang === 'de' ? "TCO & Prüfkosten Berechnen" : "Bereken TCO & Keuringskosten"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
