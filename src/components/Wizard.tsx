import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Info, 
  ArrowRight, 
  RotateCcw, 
  Printer, 
  ShieldCheck, 
  Download,
  Scale
} from 'lucide-react';
import { WizardAnswers, WizardResultType } from '../types';
import { useSiteContent } from '../content';

interface WizardProps {
  onNavigate?: (slug: string) => void;
  standalone?: boolean;
}

export const Wizard: React.FC<WizardProps> = ({ onNavigate, standalone = false }) => {
  const { content, target } = useSiteContent();
  const isEurope = target === 'europe';

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [answers, setAnswers] = useState<WizardAnswers>({
    q1_pressure_temp: null,
    q2_volume: null,
    q3_certification: null,
  });

  const handleQ1 = (val: 'above_threshold' | 'below_threshold') => {
    setAnswers(prev => ({ ...prev, q1_pressure_temp: val }));
    if (val === 'below_threshold') {
      setCurrentStep(4);
    } else {
      setCurrentStep(2);
    }
  };

  const handleQ2 = (val: 'below_2L' | 'above_2L') => {
    setAnswers(prev => ({ ...prev, q2_volume: val }));
    if (val === 'below_2L') {
      setCurrentStep(4);
    } else {
      setCurrentStep(3);
    }
  };

  const handleQ3 = (val: 'has_ped4_cert' | 'no_ped4_cert') => {
    setAnswers(prev => ({ ...prev, q3_certification: val }));
    setCurrentStep(4);
  };

  const handleReset = () => {
    setAnswers({
      q1_pressure_temp: null,
      q2_volume: null,
      q3_certification: null,
    });
    setCurrentStep(1);
  };

  // Determine result
  let resultType: WizardResultType = 'exempt';
  if (answers.q1_pressure_temp === 'below_threshold') {
    resultType = 'exempt';
  } else if (answers.q2_volume === 'below_2L') {
    resultType = 'green_sep';
  } else if (answers.q2_volume === 'above_2L' && answers.q3_certification === 'has_ped4_cert') {
    resultType = 'red_ped4';
  } else if (answers.q2_volume === 'above_2L' && answers.q3_certification === 'no_ped4_cert') {
    resultType = 'critical_violation';
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm ${standalone ? 'p-6 md:p-8' : ''}`}>
      {/* Header bar */}
      <div className="border-b border-slate-100 bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            {isEurope ? "Interactive Decision Tree · PED 2014/68/EU" : "Interactieve Beslisboom WBDA 2016"}
          </span>
          <div className="font-serif text-lg md:text-xl font-bold text-white mt-0.5">
            {isEurope ? "30-Second Compliance Check" : "30-Seconden Keurings-Check"}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-300 hidden sm:inline">
            {currentStep < 4 
              ? (isEurope ? `Step ${currentStep} of 3` : `Stap ${currentStep} van 3`)
              : (isEurope ? "Compliance report ready" : "Adviesrapport gereed")
            }
          </span>
          {currentStep > 1 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
              title={isEurope ? "Restart check" : "Reset keurings-check"}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {isEurope ? "Restart" : "Opnieuw"}
            </button>
          )}
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
          className="bg-amber-600 h-1.5 transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Step 1: Druk & Temperatuur */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {isEurope ? "Step 1: Physical Operating Thresholds" : "Stap 1: Fysische Drempelwaarden"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {isEurope 
                  ? "What are the design pressure (PS) and operating temperature (TS) of your equipment?" 
                  : "Wat zijn de ontwerpdruk en stoomtemperatuur van uw installatie?"
                }
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {isEurope 
                  ? "Under European Directive 2014/68/EU (Annex II Table 5 for steam and superheated water generators), the stringent boiler regime applies once pressure and temperature exceed 31.25 bar and 110 °C." 
                  : "Volgens de PED-richtlijn 2014/68/EU (Tabel 5, stoom- en oververhitwatertoestellen) treedt het zware stoomketelregime in werking zodra de maximale druk en temperatuur een gecombineerde risicodrempel overschrijden."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <button
                onClick={() => handleQ1('above_threshold')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-amber-600 hover:bg-amber-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-amber-100 text-slate-700 group-hover:text-amber-900 rounded">
                      {isEurope ? "Option A (High-Pressure Steam)" : "Optie A"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {isEurope 
                      ? "Pressure > 31.25 bar AND Temperature > 110 °C" 
                      : "Werkdruk hoger dan 31,25 bar & temperatuur hoger dan 110 °C"
                    }
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Professional hot-water trailers, thermal weed control steamers, or superheated industrial steam generators." 
                      : "Professionele stoomcleaners, hogedruk stoomtrailers of stoomketels met oververhit water onder hoge druk."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-amber-700">
                  {isEurope ? "Falls within European steam directive scope →" : "Valt binnen het toepassingsgebied stoomwetgeving →"}
                </div>
              </button>

              <button
                onClick={() => handleQ1('below_threshold')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-sky-600 hover:bg-sky-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-sky-100 text-slate-700 group-hover:text-sky-900 rounded">
                      {isEurope ? "Option B (Cold / Moderate)" : "Optie B (Lage Druk / Koud)"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {isEurope 
                      ? "Pressure ≤ 31.25 bar OR Temperature ≤ 110 °C" 
                      : "Werkdruk lager dan 31,25 bar & temperatuur lager dan 110 °C"
                    }
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Standard cold-water washers, hot-water units operating up to 80–90 °C, or low-pressure systems." 
                      : "Standaard koud- en warmwater hogedrukreinigers (max 80-90 °C) of lagedruk stoomgeneratoren."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-sky-700">
                  {isEurope ? "No statutory steam boiler inspection required →" : "Geen stoom-PED keuringsplicht van toepassing →"}
                </div>
              </button>

              <button
                onClick={() => handleQ1('below_threshold')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-teal-100 text-slate-700 group-hover:text-teal-900 rounded">
                      {isEurope ? "Option C (Low Pressure Steam)" : "Optie C (Lage Druk / Warm)"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {isEurope 
                      ? "Pressure ≤ 31.25 bar AND Temperature > 110 °C" 
                      : "Werkdruk lager dan 31,25 bar & temperatuur hoger dan 110 ºC"
                    }
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Atmospheric or low-pressure thermal weed control units below 31.25 bar threshold." 
                      : "Lagedruk stoomgeneratoren of hogedruktrailers met werkdruk ≤ 31,25 bar."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-teal-700">
                  {isEurope ? "Exempt from high-pressure boiler audits →" : "Geen stoom-PED keuringsplicht van toepassing →"}
                </div>
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                {isEurope ? (
                  <><strong>Need help locating parameters?</strong> Check the machine nameplate for design pressure <code>PS</code> (e.g. 200 bar) and maximum design temperature <code>TS</code> (e.g. 150 °C).</>
                ) : (
                  <><strong>Hulp nodig?</strong> De werkdruk staat op het typeplaatje vermeld als <code>PS</code> (bijv. 200 bar) en de maximale temperatuur als <code>TS</code> (bijv. 150 °C).</>
                )}
              </span>
            </div>
          </div>
        )}

        {/* Step 2: Inhoud Spoel (Volume) */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {isEurope ? "Step 2: Burner/Heat Exchanger Fluid Volume (The 2-Litre Criterion)" : "Stap 2: Volume Warmtewisselaar (Het 2-Liter Criterium)"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {isEurope 
                  ? "What is the internal water volume of the burner/heat exchanger or pressure vessel?" 
                  : "Wat is het vloeistofvolume van de verwarmingsspiraal / ketel?"
                }
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {isEurope 
                  ? "This is the definitive threshold under PED 2014/68/EU Annex II Table 5. Under 2 litres, equipment is classified under Sound Engineering Practice (SEP); above 2 litres, it automatically enters the most stringent risk tier: Category IV." 
                  : "Dit is de absolute waterscheiding in de Europese wetgeving. Onder de 2 liter geldt een lichte vrijstelling (SEP); boven de 2 liter valt de machine direct in de zwaarste Europese categorie IV."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => handleQ2('below_2L')}
                className="text-left p-5 rounded-lg border-2 border-emerald-300 hover:border-emerald-600 bg-emerald-50/40 hover:bg-emerald-50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      {isEurope ? "Option A (Micro-volume)" : "Optie A (Micro-volume)"}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {isEurope ? "≤ 2 Litres internal water volume" : "< 2 Liter interne waterinhoud"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Compact continuous-flow mono-tube burner/heat exchanger coil. Extremely low stored energy in case of emergency or rupture." 
                      : "Compacte spiraalbuis warmtewisselaar. Zeer geringe energie-inhoud bij eventuele calamiteit."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs font-semibold text-emerald-800">
                  {isEurope ? "Result GREEN: Exempt from periodic statutory audits →" : "Uitslag GROEN: Vrijgesteld van periodieke keuringen →"}
                </div>
              </button>

              <button
                onClick={() => handleQ2('above_2L')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-rose-600 hover:bg-rose-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-rose-100 text-slate-700 group-hover:text-rose-900 rounded">
                      {isEurope ? "Option B (Standard Volume)" : "Optie B (Groot volume)"}
                    </span>
                    <AlertTriangle className="w-5 h-5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {isEurope ? "> 2 Litres internal water volume" : "> 2 Liter interne waterinhoud"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Larger burner/heat exchanger coils or traditional boiler vessels with substantial stored thermal potential." 
                      : "Grotere boilers, dikkere leidingen of traditionele stoomketels met aanzienlijke opgeslagen energie."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-rose-700">
                  {isEurope ? "Classified as PED Category IV → Verify certification" : "Valt onder PED Categorie IV → Controleer certificering"}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                {isEurope ? "← Back to Step 1" : "← Terug naar stap 1"}
              </button>
              <div className="text-xs text-slate-500">
                {isEurope 
                  ? <>Volume <code>V</code> is specified in litres on OEM technical datasheets.</> 
                  : <>Volume <code>V</code> is vermeld in liters op de technische fiche.</>
                }
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Certificering (Papierwerk) */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                {isEurope ? "Step 3: Certification & Conformity Dossier" : "Stap 3: Certificering & Conformiteitsdossier"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {isEurope 
                  ? "Does the equipment possess a formal PED Category IV Assembly Certificate?" 
                  : "Beschikt de installatie over een Categorie IV Samenstelcertificaat?"
                }
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {isEurope 
                  ? "Because the internal volume exceeds 2 litres, the machine is legally a PED Category IV steam boiler. Did the manufacturer provide an official assembly certificate verified by a 4-digit Notified Body? Is the NoBo identification stamped directly on the CE plate?" 
                  : "Omdat de inhoud > 2 liter is, is de installatie wettelijk een PED Categorie IV stoomtoestel. Heeft de fabrikant een officieel samenstelcertificaat met 4-cijferig Notified Body nummer geleverd?"
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => handleQ3('has_ped4_cert')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-rose-600 hover:bg-rose-50/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-rose-100 text-slate-700 group-hover:text-rose-900 rounded">
                      {isEurope ? "Option A (Certified Assembly)" : "Optie A (Correct Gecertificeerd)"}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {isEurope ? "Category IV Assembly Certificate Present" : "Samenstelcertificaat PED IV Aanwezig"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "The integrated assembly was formally inspected by an accredited NoBo (e.g. TÜV, Apragaz, Kiwa). Full assembly documentation provided." 
                      : "De machine is als geheel gekeurd door een erkende instantie (bijv. TÜV, SGS). Fabrikant levert officieel PED Categorie IV papierwerk mee."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-rose-700">
                  {isEurope ? "Compliant build, but subject to mandatory in-service audits →" : "Geldig gecertificeerd, echter onderworpen aan KvI en herkeuringsplicht →"}
                </div>
              </button>

              <button
                onClick={() => handleQ3('no_ped4_cert')}
                className="text-left p-5 rounded-lg border-2 border-red-300 hover:border-red-600 bg-red-50/40 hover:bg-red-50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-red-100 text-red-900 rounded">
                      {isEurope ? "Option B (Missing / Component CE Only)" : "Optie B (Onvolledig / Alleen CE Brander/Warmtewisselaar)"}
                    </span>
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {isEurope ? "No Category IV Assembly Certificate" : "Geen Categorie IV Samenstelpapierwerk"}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEurope 
                      ? "Carries only generic Machinery Directive CE or burner CE, without certified integrated assembly status." 
                      : "Er is alleen een standaard CE-markering op de machine of losse componenten, maar géén Notified Body keuringscertificaat voor het complete samenstel."
                    }
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                  {isEurope ? "Critical regulatory violation under European law! →" : "Hoog risico op onbewuste wetsovertreding WBDA! →"}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                {isEurope ? "← Back to Step 2" : "← Terug naar stap 2"}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results Module */}
        {currentStep === 4 && (
          <div className="space-y-6">
            {/* Case: Green SEP (< 2L) */}
            {resultType === 'green_sep' && (
              <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
                      {isEurope ? "Check Verdict: GREEN (Inspection-Exempt)" : "Uitslag Keurings-Check: GROEN (Vrijgesteld)"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {isEurope ? "Your System Qualifies Under Article 4(3) (SEP / Sound Engineering Practice)" : "Uw systeem valt onder Artikel 4.3 (SEP / Goed Vakmanschap)"}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-emerald-200/80 shadow-xs space-y-3">
                  <div className="font-semibold text-slate-900 text-sm">
                    {isEurope ? "Official Conclusion under Directive 2014/68/EU & National In-Service Law:" : "Officiële Conclusie conform WBDA 2016 & PED 2014/68/EU:"}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {isEurope 
                      ? "“Your machine volume is strictly 2 litres or less. It is legally exempt from pre-commissioning inspections by accredited bodies, exempt from biennial statutory shutdown audits, and provides complete spare parts freedom.”" 
                      : "“Uw systeem valt onder Artikel 4.3 (SEP / Goed Vakmanschap). Geen verplichte Keuring voor Ingebruikneming, geen 2-jaarlijkse herkeuringskosten, volledige onderdeelvrijheid.”"
                    }
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">{isEurope ? "Pre-Commissioning Audit" : "Keuring v. Ingebruikneming"}</span>
                    <strong className="text-slate-900 text-sm block">{isEurope ? "Exempt" : "Vrijgesteld"}</strong>
                    <span className="text-slate-500 mt-1 block">{isEurope ? "Deploy immediately without on-site third-party inspector." : "Direct inzetbaar zonder inspecteur op locatie."}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">{isEurope ? "Periodic Recertification" : "Periodieke Herkeuring"}</span>
                    <strong className="text-slate-900 text-sm block">€ 0 {isEurope ? "Statutory Fees" : "Kosten"}</strong>
                    <span className="text-slate-500 mt-1 block">{isEurope ? "Zero mandatory shutdown loss or accredited audit invoices." : "Geen verplichte NoBo-kosten of stilstandsverlies."}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">{isEurope ? "Component Independence" : "Onderdeelvrijheid"}</span>
                    <strong className="text-slate-900 text-sm block">100% {isEurope ? "Free" : "Vrij"}</strong>
                    <span className="text-slate-500 mt-1 block">{isEurope ? "Use certified third-party hoses, lances, and nozzles." : "Geen verplichting tot dure originele merkonderdelen."}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('tco-calculator')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>{isEurope ? "Calculate 10-Year Lifecycle Savings" : "Bereken TCO-besparing over 5-10 jaar"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100/50 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{isEurope ? "Print / Save PDF Report" : "Print adviesrapport"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Case: Red PED Cat. IV */}
            {resultType === 'red_ped4' && (
              <div className="border border-rose-300 bg-rose-50/60 rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-rose-800 uppercase tracking-wider font-mono">
                      {isEurope ? "Check Verdict: RED (Statutory Category IV Machine)" : "Uitslag Keurings-Check: ROOD (Categorie IV Installatie)"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {isEurope ? "Mandatory In-Service Inspections & Recertification Obligation" : "Strenge Keuringsplicht & Periodieke Herkeuring Verplicht"}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-rose-200 shadow-xs space-y-3">
                  <div className="font-semibold text-slate-900 text-sm">
                    {isEurope ? "Operational Obligations for the Employer / Owner:" : "Belangrijkste Wettelijke Verplichtingen voor de Werkgever:"}
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                    <li>
                      <strong>{isEurope ? "Pre-Commissioning Audit Mandatory:" : "KvI vóór ingebruikneming:"}</strong> {isEurope ? "An accredited national inspection body must inspect and certify the unit before it may be deployed." : "Een NL-CBI / EDTC moet de machine fysiek op locatie keuren en vrijgeven."}
                    </li>
                    <li>
                      <strong>{isEurope ? "Mandatory Recurrent Inspections (every 12–24 mos)*:" : "Periodieke herkeuring (elke 12–24 mnd)*:"}</strong> {isEurope ? "Internal/external inspection, safety relief valve testing, and ultrasonic thickness tests (interval varies by member state: 24 months in NL, annually in BE, 1–3 years in DE)." : "Verplichte periodieke herkeuring met beproeving van de veiligheidsklep (termijn is landafhankelijk: NL 2 jaar, BE jaarlijks)."}
                    </li>
                    <li>
                      <strong>{isEurope ? "Strict Spare Parts Lock-in:" : "Strikte merkplicht:"}</strong> {isEurope ? "Non-OEM certified replacement parts void assembly compliance and indemnity coverage." : "Vervanging door universele slangen of ventielen laat het CE-samenstelcertificaat direct vervallen."}
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('tco-calculator')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>{isEurope ? "Calculate Inspection & Downtime Costs" : "Bereken keurings- en stilstandskosten"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('downloadcenter')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-rose-300 text-rose-900 hover:bg-rose-100/50 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isEurope ? "Download Audit Checklist" : "Download checklist"}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{isEurope ? "Print Report" : "Print rapport"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Case: Critical Violation */}
            {resultType === 'critical_violation' && (
              <div className="border-2 border-red-500 bg-red-50 rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <XCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-red-900 uppercase tracking-wider font-mono">
                      {isEurope ? "URGENT WARNING: CRITICAL REGULATORY NON-CONFORMITY" : "ACUUT RISICO: WETSOVERTREDING WBDA 2016"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-red-950">
                      {isEurope ? "Illegal Machine Operation & Personal Director Liability" : "Niet-Conforme Installatie & Directe Bestuurlijke Aansprakelijkheid"}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-red-200 shadow-xs space-y-3">
                  <div className="font-semibold text-red-950 text-sm">
                    {isEurope ? "Legal Status under European Pressure Regulations:" : "Bevinding van de Beslisboom:"}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {isEurope 
                      ? "“The internal volume exceeds 2 litres at > 110 °C, meaning the machine is legally a Category IV steam boiler. However, it lacks mandatory Notified Body assembly certification. In-service deployment represents a direct statutory offence and nullifies insurance cover.”" 
                      : "“De inhoud overschrijdt 2 liter bij > 110 °C, maar er is geen Categorie IV samenstelcertificaat. Inzet op de openbare weg of fabrieksterreinen is illegaal en leidt tot directe stillegging door de Arbeidsinspectie.”"
                    }
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('downloadcenter')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>{isEurope ? "Download OEM Legal Verification Guide" : "Download juridisch stappenplan"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-red-300 text-red-900 hover:bg-red-100/50 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{isEurope ? "Print Warning Dossier" : "Print risicorapport"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Case: Exempt (< 31.25 bar or < 110 °C) */}
            {resultType === 'exempt' && (
              <div className="border border-sky-200 bg-sky-50/60 rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-sky-800 uppercase tracking-wider font-mono">
                      {isEurope ? "Verdict: Exempt from High-Pressure Steam Regimes" : "Uitslag: Buiten Stoom-PED Toepassingsgebied"}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {isEurope ? "Standard Machinery Directive Regulations Apply" : "Geen Drukapparatuur Stoomketelclassificatie"}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-sky-200 shadow-xs space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {isEurope 
                      ? "Because working pressure is ≤ 31.25 bar or operating temperature is ≤ 110 °C, the unit is not classified as a high-hazard steam boiler under Annex II Table 5. Standard equipment safety maintenance applies." 
                      : "Omdat de werkdruk lager is dan 31,25 bar of de temperatuur onder 110 °C blijft, valt de machine buiten het zware stoomketelregime van Tabel 5. Er geldt geen verplichte KvI."
                    }
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isEurope ? "Check Another Unit" : "Nieuwe check starten"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
