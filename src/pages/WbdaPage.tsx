import React, { useState } from 'react';
import { 
  Scale, 
  ArrowRight, 
  ShieldAlert, 
  Building,
  Building2,
  Globe2
} from 'lucide-react';
import { useSiteContent } from '../content';

interface WbdaPageProps {
  onNavigate: (slug: string) => void;
}

export const WbdaPage: React.FC<WbdaPageProps> = ({ onNavigate }) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  // Tabs for Benelux
  const [activeTabBenelux, setActiveTabBenelux] = useState<'nl' | 'be' | 'lu'>('nl');

  // Tabs for Europe
  const [activeTabEurope, setActiveTabEurope] = useState<'de' | 'fr' | 'uk' | 'benelux'>('de');

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <Scale className="w-3.5 h-3.5" />
            {isEurope 
              ? "European Legal Framework · Directive 2014/68/EU & Member State Regimes" 
              : "Wettelijk Kader Benelux · Nederland, België & Luxemburg"
            }
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {isEurope 
              ? "PED 2014/68/EU Directive & European In-Service Regulations" 
              : "Wettelijk Kader Drukapparatuur in de Benelux (NL · BE · LU)"
            }
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {isEurope 
              ? "While European Directive 2014/68/EU (PED) harmonises how manufacturers design, test, and CE-certify pressure equipment across the EU Single Market, national Member State laws independently govern operational in-service use: mandatory pre-commissioning examinations, periodic recertification, and strict employer liability."
              : "Waar de Europese Richtlijn Drukapparatuur (PED 2014/68/EU) harmoniseert hoe fabrikanten apparatuur bouwen en certificeren, bepalen de nationale wetgevingen van Nederland, België en Luxemburg zelfstandig de verplichtingen in de operationele gebruiksfase: de verplichte keuring vóór ingebruikname, periodieke herkeuringen en handhaving."
            }
          </p>
        </div>

        {/* Core Section: Nieuwbouw vs Gebruiksfase */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              {isEurope ? "Crucial Legal Demarcation" : "Cruciaal Juridisch Onderscheid in de Benelux"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {isEurope 
                ? "The Distinction Between Manufacturing (OEM) and In-Service Operation (Employer)" 
                : "Het Verschil Tussen Nieuwbouw (Fabrikant) en Gebruiksfase (Werkgever)"
              }
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "A widespread misconception among buyers and fleet managers is that a CE mark on a high-pressure steam trailer guarantees the machine is “ready to operate legally without further requirements”. European law strictly separates the manufacturing phase from in-service deployment:"
                : "Een hardnekkige misvatting bij kopers en wagenparkbeheerders is dat een CE-markering op een hogedruktrailer of stoomunit betekent dat het apparaat “gebruiksklaar is en aan alle wetten voldoet”. De wetgeving in alle drie de Benelux-landen scheidt nieuwbouw strikt van exploitatie:"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Box 1: Fabrikant */}
            <div className="border border-slate-200 rounded-lg p-5 space-y-3 bg-slate-50/50">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-slate-700">
                <Building className="w-4 h-4 text-sky-600" />
                <span>
                  {isEurope ? "Manufacturing Phase (OEM · Directive 2014/68/EU)" : "Nieuwbouwfase (Fabrikant · Richtlijn 2014/68/EU)"}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Manufacturer Conformity" : "Fabrikantenverantwoordelijkheid"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isEurope 
                  ? "The manufacturer guarantees the equipment meets European essential safety requirements (Annex I). For Category IV assemblies, this requires supervision by an accredited Notified Body (NoBo) and affixing the CE mark with the 4-digit NoBo identification. Once the machine is delivered, the OEM’s legal obligations cease regarding operational permits and in-service audits."
                  : "De fabrikant garandeert dat de machine conform de Europese essentiële veiligheidseisen is ontworpen en gebouwd. Hij brengt hiervoor de CE-markering aan (voor Categorie IV onder toezicht van een Europese Notified Body / NoBo). Zodra de machine de fabriekspoort verlaat, stopt de verantwoordelijkheid van de bouwer ten aanzien van de exploitatie en lokale vergunningen."
                }
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                {isEurope ? "Scope: Design, manufacturing, and initial placing on the market." : "Reikwijdte: Conformiteit van ontwerp, fabricage en levering conform Richtlijn 2014/68/EU."}
              </div>
            </div>

            {/* Box 2: Werkgever / Exploitant */}
            <div className="border-2 border-amber-300 rounded-lg p-5 space-y-3 bg-amber-50/30">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-amber-800">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>
                  {isEurope ? "In-Service Phase (Employer / National Legislation)" : "Gebruiksfase (Werkgever · Nationale Wetgeving)"}
                </span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900">
                {isEurope ? "Employer Operational Strict Liability" : "Werkgeverszorgplicht & Exploitatieverantwoordelijkheid"}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {isEurope 
                  ? "As soon as the equipment is put into operation on job sites, national occupational health & safety acts place strict liability on the employer. OEM user manuals universally contain legal clauses stating the buyer is solely responsible for commissioning audits and recurrent recertifications."
                  : "Zodra de machine in bedrijf wordt gesteld op Nederlands, Belgisch of Luxemburgs grondgebied, is de werkgever/exploitant hoofdelijk verantwoordelijk. Handleidingen van fabrikanten bevatten steevast juridische disclaimers dat de koper zélf zorg moet dragen voor de keuring vóór ingebruikname en periodieke herkeuringen."
                }
              </p>
              <div className="text-[11px] text-amber-800 font-medium pt-2 border-t border-amber-200">
                {isEurope ? "Scope: Mandatory pre-commissioning audits and recurring inspections by accredited bodies." : "Reikwijdte: Verplichte keuring voor ingebruikname en periodieke controles door nationaal erkende instanties."}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Country Deep-Dive */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                {isEurope ? "National In-Service Regimes" : "Nationale Wetgeving per Lidstaat"}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-1">
                {isEurope ? "Major European Jurisdictions Compared" : "Specifieke Eisen per Land"}
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
                  🇩🇪 Germany (BetrSichV)
                </button>
                <button
                  onClick={() => setActiveTabEurope('fr')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'fr' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🇫🇷 France (Arrêté 2017)
                </button>
                <button
                  onClick={() => setActiveTabEurope('uk')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'uk' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🇬🇧 UK (PSSR 2000)
                </button>
                <button
                  onClick={() => setActiveTabEurope('benelux')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabEurope === 'benelux' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🇪🇺 Benelux (NL/BE/LU)
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
                  🇳🇱 Nederland (WBDA 2016)
                </button>
                <button
                  onClick={() => setActiveTabBenelux('be')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabBenelux === 'be' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🇧🇪 België (Codex & EDTC)
                </button>
                <button
                  onClick={() => setActiveTabBenelux('lu')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTabBenelux === 'lu' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🇱🇺 Luxemburg (ITM)
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

                  <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-3">
                    <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                      <strong className="font-serif text-sm text-amber-900 block">The Mobile Equipment Misconception in Germany:</strong>
                      <p>
                        Contractors often assume road-towable high-pressure trailers are exempt from stationary plant regulations. Under the BetrSichV, <strong>mobile steam generators are explicitly treated with equal statutory rigor</strong>. Operating a high-pressure trailer with a burner/heat exchanger volume &gt; 2 litres without a ZÜS inspection certificate is an administrative offence (<em>Ordnungswidrigkeit</em>) carrying penalties up to € 100,000.
                      </p>
                    </div>

                    <p>
                      In Germany, high-pressure steam trailers in Category IV require not only a ZÜS inspection (TÜV SÜD, TÜV Rheinland, DEKRA) but also formal operational permitting (<em>Erlaubnispflicht gem. § 18 BetrSichV</em>) from the competent <em>Gewerbeaufsichtsamt</em>.
                    </p>
                    <p>
                      <strong>The &le; 2 Litre Advantage:</strong> Burners/heat exchangers under 2 litres qualify under Article 4(3) Sound Engineering Practice (SEP). They are completely exempt from mandatory ZÜS inspection monopoly and recurrent shutdowns, saving contractors thousands of euros in operational fees.
                    </p>
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

                  <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>
                      French legislation is enforced by DREAL (*Direction Régionale de l’Environnement, de l’Aménagement et du Logement*). Operating Category IV equipment without a valid DMS or inspection booklet (*cahier de vie*) carries criminal liability and severe financial sanctions.
                    </p>
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

                  <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>
                      Enforced by the Health and Safety Executive (HSE). Operating a pressure system without a valid Written Scheme of Examination is a statutory offence under the Health and Safety at Work Act 1974.
                    </p>
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
                        Nederland: Warenwetbesluit Drukapparatuur 2016 (WBDA 2016)
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Staatsblad 2016, 273 • Warenwetregeling Drukapparatuur 2016 • PRDA Katern 1.3</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Keuringsinstantie</span>
                      <div className="font-bold text-slate-900 text-sm">NL-CBI (Conformiteitsbeoordelingsinstantie)</div>
                      <p className="text-slate-600">Door het Ministerie van SZW aangewezen instanties: TÜV NORD, Dekra, Kiwa, SGS, Bureau Veritas.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Eerste Ingebruikname</span>
                      <div className="font-bold text-slate-900 text-sm">Keuring voor Ingebruikneming (KvI)</div>
                      <p className="text-slate-600">Verplicht conform Art. 21 WBDA 2016. Na goedkeuring volgt de formele <strong>Verklaring van Ingebruikneming (VVI)</strong>.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Periodieke Cyclus</span>
                      <div className="font-bold text-slate-900 text-sm">Elke 24 maanden (2 jaar)</div>
                      <p className="text-slate-600">Verplichte hydrostatische beproeving, kalibratie veiligheidsafsluiters en ultrasone wanddiktemeting conform Art. 22 WBDA.</p>
                    </div>
                  </div>

                  <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-3">
                    <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
                      <strong className="font-serif text-sm text-amber-900 block">De Hardnekkige Mythe rondom "Mobiele Uitvoeringen":</strong>
                      <p>
                        Veel kopers denken ten onrechte dat een hogedruktrailer op wielen niet onder het Warenwetbesluit Drukapparatuur 2016 valt, omdat het geen vaste fabrieksinstallatie is. <strong>De wet maakt echter GEEN enkel onderscheid tussen stationaire en mobiele installaties.</strong> Zodra een mobiele hogedruktrailer oververhit water of stoom (&gt; 110 °C) genereert en een brander/warmtewisselaar heeft met een inhoud groter dan 2 liter, is het wettelijk een mobiele stoomketel in Categorie IV met 100% KvI- en herkeuringsplicht!
                      </p>
                    </div>

                    <p>
                      In Nederland valt de gebruiksfase van drukapparatuur onder de verantwoordelijkheid van het Ministerie van Sociale Zaken en Werkgelegenheid (SZW). Voor hogedruktrailers in <strong>PED Categorie IV</strong> geldt een <strong>wettelijk inzetverbod</strong> zolang er geen geldige VVI van een NL-CBI (zoals TÜV NORD, Dekra of Kiwa) is afgegeven.
                    </p>
                    <p>
                      <strong>Handhaving & Sancties:</strong> De Nederlandse Arbeidsinspectie (NLA) voert actieve controles uit bij straat-, gevel- en industriële reiniging. Het in bedrijf hebben van een ongekeurde Categorie IV hogedruktrailer is een economisch delict conform Artikel 1a van de Wet op de economische delicten (WED), met directe stillegging en bestuurlijke boetes tot tienduizenden euro’s tot gevolg.
                    </p>
                  </div>
                </div>
              )}

              {activeTabBenelux === 'be' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇧🇪</span>
                    <div>
                      <h3 className="text-lg font-bold font-serif text-slate-900">
                        België: Codex over het Welzijn op het Werk &amp; ARAB
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Boek IV, Titel 3 • ARAB art. 269-283 • KB van 17 maart 2022</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Keuringsinstantie</span>
                      <div className="font-bold text-slate-900 text-sm">EDTC (Externe Dienst Technische Controles)</div>
                      <p className="text-slate-600">Erkende diensten: Vinçotte, Normec BTV, Apragaz, OCB, Bureau Veritas BE.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Eerste Ingebruikname</span>
                      <div className="font-bold text-slate-900 text-sm">Indienststellingsonderzoek</div>
                      <p className="text-slate-600">Vóór ingebruikname verplicht onderzoek door een EDTC met afgifte van een indienststellingsverslag.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Periodieke Cyclus</span>
                      <div className="font-bold text-slate-900 text-sm">Standaard Jaarlijks (elke 12 maanden)</div>
                      <p className="text-slate-600">België kent een jaarlijks uitwendig onderzoek en controle van veiligheden.</p>
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
                        Luxemburg: Inspection du Travail et des Mines (ITM)
                      </h3>
                      <span className="text-xs font-mono text-slate-500">Règlement grand-ducal du 23 décembre 1999 • Code du Travail</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Keuringsinstantie</span>
                      <div className="font-bold text-slate-900 text-sm">Organisme Agréé &amp; ITM</div>
                      <p className="text-slate-600">Erkende keuringsorganismen onder toezicht van de ITM.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Ingebruikname</span>
                      <div className="font-bold text-slate-900 text-sm">Mise en service notificatie</div>
                      <p className="text-slate-600">Verplichte aanmelding en keuring voor exploitatie op Luxemburgs grondgebied.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                      <span className="font-mono text-slate-500 uppercase">Periodiek</span>
                      <div className="font-bold text-slate-900 text-sm">2-jaarlijks onderzoek</div>
                      <p className="text-slate-600">Periodieke herkeuring en beproeving conform de ITM-voorschriften.</p>
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
            {isEurope 
              ? "Exempt Your Fleet from European Statutory In-Service Regimes" 
              : "Wilt u uw wagenpark vrijwaren van keuringsplichten in de Benelux?"
            }
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {isEurope 
              ? "Industrial steam equipment with an internal coil volume ≤ 2 litres is legally classified under Article 4(3) Sound Engineering Practice (SEP). It requires no Notified Body commissioning inspection and no periodic statutory audits across any EU Member State."
              : "Kies voor apparatuur met een verwarmingsspiraal onder de 2 liter. Daarmee kwalificeert uw installatie onder Artikel 4 lid 3 PED (Goed Vakmanschap / SEP) en bent u in Nederland, België én Luxemburg 100% vrijgesteld van de KvI en periodieke herkeuringen."
            }
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('two-liter-grens')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{isEurope ? "Read About the 2-Litre Threshold" : "Lees meer over de 2-Liter Grens"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Calculate European Lifecycle Costs" : "Bereken TCO & Keuringskosten"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
