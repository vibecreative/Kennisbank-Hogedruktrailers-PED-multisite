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
  const { target, t } = useSiteContent();
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
            {t({
              nl: 'Interactieve Beslisboom WBDA 2016 · Nederland & België',
              fr: 'Arbre de Décision Interactif · Belgique (Codex) & Benelux',
              de: 'Interaktiver Entscheidungsbaum · Luxemburg (ITM) & Benelux',
              en: 'Interactive Decision Tree · PED 2014/68/EU',
            })}
          </span>
          <div className="font-serif text-lg md:text-xl font-bold text-white mt-0.5">
            {t({
              nl: '30-Seconden Keurings-Check',
              fr: 'Test de Conformité en 30 Secondes',
              de: '30-Sekunden Prüfungs-Check',
              en: '30-Second Compliance Check',
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-300 hidden sm:inline">
            {currentStep < 4 
              ? t({
                  nl: `Stap ${currentStep} van 3`,
                  fr: `Étape ${currentStep} sur 3`,
                  de: `Schritt ${currentStep} von 3`,
                  en: `Step ${currentStep} of 3`,
                })
              : t({
                  nl: 'Adviesrapport gereed',
                  fr: 'Rapport de conformité prêt',
                  de: 'Prüfbericht fertiggestellt',
                  en: 'Compliance report ready',
                })
            }
          </span>
          {currentStep > 1 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
              title={t({ nl: 'Reset keurings-check', fr: 'Recommencer le test', de: 'Check zurücksetzen', en: 'Restart check' })}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t({ nl: 'Opnieuw', fr: 'Recommencer', de: 'Zurücksetzen', en: 'Restart' })}
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
                {t({
                  nl: 'Stap 1: Fysische Drempelwaarden',
                  fr: 'Étape 1 : Seuils Physiques d’Exploitation',
                  de: 'Schritt 1: Physikalische Schwellenwerte',
                  en: 'Step 1: Physical Operating Thresholds',
                })}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {t({
                  nl: 'Wat zijn de ontwerpdruk en stoomtemperatuur van uw installatie?',
                  fr: 'Quels sont la pression de calcul et la température de vapeur de votre remorque ?',
                  de: 'Welchen Betriebsdruck und welche Dampftemperatur hat Ihre Anlage?',
                  en: 'What are the design pressure (PS) and operating temperature (TS) of your equipment?',
                })}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {t({
                  nl: 'Volgens de PED-richtlijn 2014/68/EU (Tabel 5, stoom- en oververhitwatertoestellen) treedt het zware stoomketelregime in werking zodra de maximale druk en temperatuur een gecombineerde risicodrempel overschrijden (> 31,25 bar én > 110 °C).',
                  fr: 'Selon la Directive DESP 2014/68/UE (Annexe II Tableau 5, générateurs de vapeur et eau surchauffée), le régime sévère des chaudières s’applique dès que la pression et la température dépassent 31,25 bar et 110 °C.',
                  de: 'Gemäß der europäischen Druckgeräterichtlinie 2014/68/EU (Tabelle 5, Dampf- und Heißwassererzeuger) greift das strenge Dampfkesselregime, sobald Druck und Temperatur 31,25 bar und 110 °C übersteigen.',
                  en: 'Under European Directive 2014/68/EU (Annex II Table 5 for steam and superheated water generators), the stringent boiler regime applies once pressure and temperature exceed 31.25 bar and 110 °C.',
                })}
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
                      {t({ nl: 'Optie A', fr: 'Option A (Vapeur)', de: 'Option A (Dampf)', en: 'Option A (High-Pressure Steam)' })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {t({
                      nl: 'Werkdruk > 31,25 bar & temperatuur > 110 °C',
                      fr: 'Pression > 31,25 bar ET Température > 110 °C',
                      de: 'Druck > 31,25 bar UND Temperatur > 110 °C',
                      en: 'Pressure > 31.25 bar AND Temperature > 110 °C',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Professionele stoomcleaners, hogedruk stoomtrailers of stoomketels met oververhit water onder hoge druk.',
                      fr: 'Remorques haute pression eau chaude et vapeur professionnelles, désherbage thermique ou vapeur industrielle.',
                      de: 'Gewerbliche Heißwasser- und Dampf-Hochdrucktrailer, thermische Unkrautvernichter oder industrielle Dampferzeuger.',
                      en: 'Professional hot-water trailers, thermal weed control steamers, or superheated industrial steam generators.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-amber-700">
                  {t({
                    nl: 'Valt binnen het toepassingsgebied stoomwetgeving →',
                    fr: 'Relève du champ d’application de la directive vapeur →',
                    de: 'Fällt in den Geltungsbereich der Dampfrichtlinie →',
                    en: 'Falls within European steam directive scope →',
                  })}
                </div>
              </button>

              <button
                onClick={() => handleQ1('below_threshold')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-sky-600 hover:bg-sky-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-sky-100 text-slate-700 group-hover:text-sky-900 rounded">
                      {t({ nl: 'Optie B (Koud / Matig)', fr: 'Option B (Froid / Modéré)', de: 'Option B (Kalt / Mäßig)', en: 'Option B (Cold / Moderate)' })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {t({
                      nl: 'Werkdruk ≤ 31,25 bar OF temperatuur ≤ 110 °C',
                      fr: 'Pression ≤ 31,25 bar OU Température ≤ 110 °C',
                      de: 'Druck ≤ 31,25 bar ODER Temperatur ≤ 110 °C',
                      en: 'Pressure ≤ 31.25 bar OR Temperature ≤ 110 °C',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Standaard koud- en warmwater hogedrukreinigers (max 80-90 °C) of lagedruk stoomgeneratoren.',
                      fr: 'Nettoyeurs standards eau froide ou eau chaude (max 80–90 °C) et systèmes basse pression.',
                      de: 'Standard-Kalt- und Warmwasser-Hochdruckreiniger (bis 80–90 °C) oder Niederdrucksysteme.',
                      en: 'Standard cold-water washers, hot-water units operating up to 80–90 °C, or low-pressure systems.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-sky-700">
                  {t({
                    nl: 'Geen stoom-PED keuringsplicht van toepassing →',
                    fr: 'Aucun contrôle de chaudière à vapeur requis →',
                    de: 'Keine Dampfkesselprüfung erforderlich →',
                    en: 'No statutory steam boiler inspection required →',
                  })}
                </div>
              </button>

              <button
                onClick={() => handleQ1('below_threshold')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-teal-100 text-slate-700 group-hover:text-teal-900 rounded">
                      {t({ nl: 'Optie C (Lage Druk)', fr: 'Option C (Basse Pression)', de: 'Option C (Niederdruck)', en: 'Option C (Low Pressure Steam)' })}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {t({
                      nl: 'Werkdruk ≤ 31,25 bar & temperatuur > 110 °C',
                      fr: 'Pression ≤ 31,25 bar ET Température > 110 °C',
                      de: 'Druck ≤ 31,25 bar UND Temperatur > 110 °C',
                      en: 'Pressure ≤ 31.25 bar AND Temperature > 110 °C',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Lagedruk stoomgeneratoren of hogedruktrailers met werkdruk ≤ 31,25 bar.',
                      fr: 'Générateurs vapeur atmosphériques ou appareils thermiques restant sous 31,25 bar.',
                      de: 'Drucklose Dampferzeuger oder Heißwasseranlagen unterhalb von 31,25 bar.',
                      en: 'Atmospheric or low-pressure thermal weed control units below 31.25 bar threshold.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-teal-700">
                  {t({
                    nl: 'Geen stoom-PED keuringsplicht van toepassing →',
                    fr: 'Exempté des audits contraignants sous pression →',
                    de: 'Keine Dampfkessel-Überwachungspflicht →',
                    en: 'Exempt from high-pressure boiler audits →',
                  })}
                </div>
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 text-xs text-slate-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                {t({
                  nl: <><strong>Hulp nodig?</strong> De werkdruk staat op het typeplaatje vermeld als <code>PS</code> (bijv. 200 bar) en de maximale temperatuur als <code>TS</code> (bijv. 150 °C).</>,
                  fr: <><strong>Besoin d’aide ?</strong> La pression de calcul figure sur la plaque constructeur sous la mention <code>PS</code> (ex. 200 bar) et la température maximale sous <code>TS</code> (ex. 150 °C).</>,
                  de: <><strong>Hilfe bei den Werten?</strong> Der Auslegungsdruck ist auf dem Typenschild als <code>PS</code> (z. B. 200 bar) und die Höchsttemperatur als <code>TS</code> (z. B. 150 °C) angegeben.</>,
                  en: <><strong>Need help locating parameters?</strong> Check the machine nameplate for design pressure <code>PS</code> (e.g. 200 bar) and maximum design temperature <code>TS</code> (e.g. 150 °C).</>,
                })}
              </span>
            </div>
          </div>
        )}

        {/* Step 2: Inhoud Spoel (Volume) */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {t({
                  nl: 'Stap 2: Volume Warmtewisselaar (Het 2-Liter Criterium)',
                  fr: 'Étape 2 : Volume du Brûleur / Serpentin (Le Critère des 2 Litres)',
                  de: 'Schritt 2: Volumen Brenner / Wärmetauscher (Das 2-Liter-Kriterium)',
                  en: 'Step 2: Burner/Heat Exchanger Fluid Volume (The 2-Litre Criterion)',
                })}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {t({
                  nl: 'Wat is het vloeistofvolume van de verwarmingsspiraal / ketel?',
                  fr: 'Quel est le volume d’eau interne du serpentin / brûleur de la remorque ?',
                  de: 'Wie groß ist der Wasserinhalt der Heizspirale / des Kessels?',
                  en: 'What is the internal water volume of the burner/heat exchanger or pressure vessel?',
                })}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {t({
                  nl: 'Dit is de absolute waterscheiding in de Europese wetgeving. Onder de 2 liter geldt een lichte vrijstelling (SEP); boven de 2 liter valt de machine direct in de zwaarste Europese categorie IV.',
                  fr: 'Il s’agit de la ligne de démarcation absolue selon la DESP 2014/68/UE. Sous 2 litres, l’équipement relève des Règles de l’Art (SEP, exempté) ; au-dessus de 2 litres, il bascule directement dans la Catégorie IV la plus contraignante.',
                  de: 'Dies ist die entscheidende Schwelle nach DGRL 2014/68/EU Anhang II Tabelle 5. Unter 2 Litern gilt Gute Ingenieurpraxis (SEP, prüffrei); über 2 Litern greift sofort die strengste Kategorie IV.',
                  en: 'This is the definitive threshold under PED 2014/68/EU Annex II Table 5. Under 2 litres, equipment is classified under Sound Engineering Practice (SEP); above 2 litres, it automatically enters the most stringent risk tier: Category IV.',
                })}
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
                      {t({ nl: 'Optie A (Micro-volume)', fr: 'Option A (Micro-volume)', de: 'Option A (Kompakt)', en: 'Option A (Micro-volume)' })}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {t({
                      nl: '≤ 2 Liter interne waterinhoud',
                      fr: '≤ 2 Litres de contenance en eau',
                      de: '≤ 2 Liter Wasserinhalt',
                      en: '≤ 2 Litres internal water volume',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Compacte spiraalbuis warmtewisselaar. Zeer geringe energie-inhoud bij eventuele calamiteit.',
                      fr: 'Serpentin continu compact monocoil. Énergie stockée extrêmement faible en cas de rupture.',
                      de: 'Kompakte Durchlauf-Monorohr-Spirale. Extrem geringe gespeicherte Energie im Schadensfall.',
                      en: 'Compact continuous-flow mono-tube burner/heat exchanger coil. Extremely low stored energy in case of emergency or rupture.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs font-semibold text-emerald-800">
                  {t({
                    nl: 'Uitslag GROEN: Vrijgesteld van periodieke keuringen →',
                    fr: 'Résultat VERT : Exempté de contrôles périodiques légaux →',
                    de: 'Ergebnis GRÜN: Befreit von wiederkehrenden Pflichtprüfungen →',
                    en: 'Result GREEN: Exempt from periodic statutory audits →',
                  })}
                </div>
              </button>

              <button
                onClick={() => handleQ2('above_2L')}
                className="text-left p-5 rounded-lg border-2 border-slate-200 hover:border-rose-600 hover:bg-rose-50/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 group-hover:bg-rose-100 text-slate-700 group-hover:text-rose-900 rounded">
                      {t({ nl: 'Optie B (Groot volume)', fr: 'Option B (Volume Standard)', de: 'Option B (Standardvolumen)', en: 'Option B (Standard Volume)' })}
                    </span>
                    <AlertTriangle className="w-5 h-5 text-slate-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {t({
                      nl: '> 2 Liter interne waterinhoud',
                      fr: '> 2 Litres de contenance en eau',
                      de: '> 2 Liter Wasserinhalt',
                      en: '> 2 Litres internal water volume',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Grotere boilers, dikkere leidingen of traditionele stoomketels met aanzienlijke opgeslagen energie.',
                      fr: 'Serpentins plus volumineux ou réservoirs traditionnels avec énergie thermique emmagasinée importante.',
                      de: 'Größere Heizspiralen oder herkömmliche Kesselbehälter mit beträchtlichem thermischem Gefahrenpotenzial.',
                      en: 'Larger burner/heat exchanger coils or traditional boiler vessels with substantial stored thermal potential.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-rose-700">
                  {t({
                    nl: 'Valt onder PED Categorie IV → Controleer certificering',
                    fr: 'Classé en DESP Catégorie IV → Vérifier la certification',
                    de: 'Eingestuft in DGRL Kategorie IV → Zertifizierung prüfen',
                    en: 'Classified as PED Category IV → Verify certification',
                  })}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                {t({ nl: '← Terug naar stap 1', fr: '← Retour à l’étape 1', de: '← Zurück zu Schritt 1', en: '← Back to Step 1' })}
              </button>
              <div className="text-xs text-slate-500">
                {t({
                  nl: <>Volume <code>V</code> is vermeld in liters op de technische fiche.</>,
                  fr: <>Le volume <code>V</code> est spécifié en litres sur la fiche technique constructeur.</>,
                  de: <>Das Volumen <code>V</code> ist in Litern im technischen Datenblatt angegeben.</>,
                  en: <>Volume <code>V</code> is specified in litres on OEM technical datasheets.</>,
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Certificering (Papierwerk) */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                {t({
                  nl: 'Stap 3: Certificering & Conformiteitsdossier',
                  fr: 'Étape 3 : Certification & Dossier de Conformité',
                  de: 'Schritt 3: Zertifizierung & Konformitätsakte',
                  en: 'Step 3: Certification & Conformity Dossier',
                })}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                {t({
                  nl: 'Beschikt de installatie over een Categorie IV Samenstelcertificaat?',
                  fr: 'L’installation dispose-t-elle d’un certificat d’ensemble DESP Catégorie IV ?',
                  de: 'Besitzt die Anlage ein DGRL Kategorie IV Baugruppenzertifikat?',
                  en: 'Does the equipment possess a formal PED Category IV Assembly Certificate?',
                })}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {t({
                  nl: 'Omdat de inhoud > 2 liter is, is de installatie wettelijk een PED Categorie IV stoomtoestel. Heeft de fabrikant een officieel samenstelcertificaat met 4-cijferig Notified Body nummer geleverd?',
                  fr: 'Le volume d’eau dépassant 2 litres, la remorque est légalement un générateur de vapeur Catégorie IV. Le constructeur a-t-il fourni un certificat officiel d’ensemble avec numéro à 4 chiffres d’un Organisme Notifié gravé sur la plaque ?',
                  de: 'Weil das Volumen > 2 Liter beträgt, ist die Anlage rechtlich ein Dampfkessel der DGRL Kategorie IV. Hat der Hersteller ein Baugruppenzertifikat mit 4-stelliger Nummer einer Benannten Stelle beigelegt?',
                  en: 'Because the internal volume exceeds 2 litres, the machine is legally a PED Category IV steam boiler. Did the manufacturer provide an official assembly certificate verified by a 4-digit Notified Body? Is the NoBo identification stamped directly on the CE plate?',
                })}
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
                      {t({ nl: 'Optie A (Correct Gecertificeerd)', fr: 'Option A (Ensemble Certifié)', de: 'Option A (Gültig Zertifiziert)', en: 'Option A (Certified Assembly)' })}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-rose-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {t({
                      nl: 'Samenstelcertificaat PED IV Aanwezig',
                      fr: 'Certificat d’Ensemble Cat. IV Présent',
                      de: 'Baugruppenzertifikat Kat. IV Vorhanden',
                      en: 'Category IV Assembly Certificate Present',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'De machine is als geheel gekeurd door een erkende instantie (bijv. TÜV, Vinçotte, Kiwa). Fabrikant levert officieel PED Categorie IV papierwerk mee.',
                      fr: 'L’ensemble complet a été inspecté par un Organisme Notifié (ex. Apragaz, Vinçotte, TÜV). Documentation complète d’ensemble fournie.',
                      de: 'Die Gesamtanlage wurde von einer Benannten Stelle abgenommen (z. B. TÜV, Vinçotte). Vollständige DGRL-Unterlagen vorhanden.',
                      en: 'The integrated assembly was formally inspected by an accredited NoBo (e.g. TÜV, Apragaz, Kiwa). Full assembly documentation provided.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-rose-700">
                  {t({
                    nl: 'Geldig gecertificeerd, echter onderworpen aan KvI en herkeuringsplicht →',
                    fr: 'Conforme en fabrication, mais soumis à visite de mise en service et réinspections obligatoires →',
                    de: 'Konform gefertigt, aber streng prüfpflichtig vor Inbetriebnahme und wiederkehrend →',
                    en: 'Compliant build, but subject to mandatory in-service audits →',
                  })}
                </div>
              </button>

              <button
                onClick={() => handleQ3('no_ped4_cert')}
                className="text-left p-5 rounded-lg border-2 border-red-300 hover:border-red-600 bg-red-50/40 hover:bg-red-50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-red-100 text-red-900 rounded">
                      {t({ nl: 'Optie B (Onvolledig / Alleen Losse CE)', fr: 'Option B (Incomplet / CE Isolée)', de: 'Option B (Unvollständig / Nur Einzel-CE)', en: 'Option B (Missing / Component CE Only)' })}
                    </span>
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {t({
                      nl: 'Geen Categorie IV Samenstelpapierwerk',
                      fr: 'Aucun Certificat d’Ensemble Catégorie IV',
                      de: 'Kein Kategorie IV Baugruppenzertifikat',
                      en: 'No Category IV Assembly Certificate',
                    })}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t({
                      nl: 'Er is alleen een standaard CE-markering op de machine of losse componenten, maar géén Notified Body keuringscertificaat voor het complete samenstel.',
                      fr: 'Seul un marquage CE machine ordinaire ou sur la chaudière seule est présent, sans statut d’ensemble certifié.',
                      de: 'Nur allgemeines Maschinen-CE oder Kessel-CE vorhanden, ohne zertifizierten Baugruppenstatus.',
                      en: 'Carries only generic Machinery Directive CE or burner CE, without certified integrated assembly status.',
                    })}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-200 text-xs font-bold text-red-800">
                  {t({
                    nl: 'Hoog risico op onbewuste wetsovertreding WBDA! →',
                    fr: 'Infraction réglementaire critique sous le droit du travail ! →',
                    de: 'Kritischer Verstoß gegen europäische und nationale Vorschriften! →',
                    en: 'Critical regulatory violation under European law! →',
                  })}
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                {t({ nl: '← Terug naar stap 2', fr: '← Retour à l’étape 2', de: '← Zurück zu Schritt 2', en: '← Back to Step 2' })}
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
                      {t({
                        nl: 'Uitslag Keurings-Check: GROEN (Vrijgesteld)',
                        fr: 'Résultat du Test : VERT (Exempté de Contrôle)',
                        de: 'Prüfergebnis: GRÜN (Vollständig Prüffrei)',
                        en: 'Check Verdict: GREEN (Inspection-Exempt)',
                      })}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {t({
                        nl: 'Uw systeem valt onder Artikel 4.3 (SEP / Goed Vakmanschap)',
                        fr: 'Votre remorque relève de l’Article 4 § 3 (Règles de l’Art / SEP)',
                        de: 'Ihre Anlage fällt unter Artikel 4 Abs. 3 (Gute Ingenieurpraxis / SEP)',
                        en: 'Your System Qualifies Under Article 4(3) (SEP / Sound Engineering Practice)',
                      })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-emerald-200/80 shadow-xs space-y-3">
                  <div className="font-semibold text-slate-900 text-sm">
                    {t({
                      nl: 'Officiële Conclusie conform WBDA 2016 & PED 2014/68/EU:',
                      fr: 'Conclusion officielle selon la DESP 2014/68/UE & Réglementation Nationale :',
                      de: 'Offizielles Fazit gemäß DGRL 2014/68/EU & Nationale Betriebsvorschriften:',
                      en: 'Official Conclusion under Directive 2014/68/EU & National In-Service Law:',
                    })}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {t({
                      nl: '“Uw systeem valt onder Artikel 4.3 (SEP / Goed Vakmanschap). Geen verplichte Keuring voor Ingebruikneming, geen 2-jaarlijkse herkeuringskosten, volledige onderdeelvrijheid.”',
                      fr: '“Le volume de votre remorque est strictement inférieur ou égal à 2 litres. Elle est légalement exempte de visite de mise en service par un organisme agréé (EDTC), exempte d’inspections périodiques et offre une totale liberté de pièces.”',
                      de: '“Das Wasservolumen Ihrer Anlage beträgt maximal 2 Liter. Sie ist gesetzlich befreit von Abnahmeprüfungen durch Überwachungsstellen, befreit von wiederkehrenden Stillstandsprüfungen und bietet volle Ersatzteilfreiheit.”',
                      en: '“Your machine volume is strictly 2 litres or less. It is legally exempt from pre-commissioning inspections by accredited bodies, exempt from biennial statutory shutdown audits, and provides complete spare parts freedom.”',
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">
                      {t({ nl: 'Keuring v. Ingebruikneming', fr: 'Visite de Mise en Service', de: 'Inbetriebnahmeprüfung', en: 'Pre-Commissioning Audit' })}
                    </span>
                    <strong className="text-slate-900 text-sm block">
                      {t({ nl: 'Vrijgesteld', fr: 'Exempté', de: 'Befreit', en: 'Exempt' })}
                    </strong>
                    <span className="text-slate-500 mt-1 block">
                      {t({
                        nl: 'Direct inzetbaar zonder inspecteur op locatie.',
                        fr: 'Mise en œuvre immédiate sans organisme agréé sur site.',
                        de: 'Sofort einsatzbereit ohne Gutachter vor Ort.',
                        en: 'Deploy immediately without on-site third-party inspector.',
                      })}
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">
                      {t({ nl: 'Periodieke Herkeuring', fr: 'Contrôles Périodiques', de: 'Wiederkehrende Prüfung', en: 'Periodic Recertification' })}
                    </span>
                    <strong className="text-slate-900 text-sm block">
                      € 0 {t({ nl: 'Kosten', fr: 'Frais', de: 'Gebühren', en: 'Statutory Fees' })}
                    </strong>
                    <span className="text-slate-500 mt-1 block">
                      {t({
                        nl: 'Geen verplichte inspectiekosten of stilstandsverlies.',
                        fr: 'Aucun arrêt obligatoire ni facture d’organisme agréé.',
                        de: 'Keine erzwungenen Ausfallzeiten oder Prüfrechnungen.',
                        en: 'Zero mandatory shutdown loss or accredited audit invoices.',
                      })}
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded border border-emerald-200">
                    <span className="text-emerald-700 font-semibold block mb-0.5">
                      {t({ nl: 'Onderdeelvrijheid', fr: 'Liberté des Pièces', de: 'Ersatzteilfreiheit', en: 'Component Independence' })}
                    </span>
                    <strong className="text-slate-900 text-sm block">
                      100% {t({ nl: 'Vrij', fr: 'Libre', de: 'Frei', en: 'Free' })}
                    </strong>
                    <span className="text-slate-500 mt-1 block">
                      {t({
                        nl: 'Gebruik gecertificeerde universele slangen en toebehoren.',
                        fr: 'Utilisation de flexibles, lances et buses universels certifiés.',
                        de: 'Nutzung zertifizierter Universalschläuche und Lanzen.',
                        en: 'Use certified third-party hoses, lances, and nozzles.',
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('tco-calculator')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>
                      {t({
                        nl: 'Bereken TCO-besparing over 5-10 jaar',
                        fr: 'Calculer l’économie TCO sur 5 à 10 ans',
                        de: 'TCO-Ersparnis über 5–10 Jahre berechnen',
                        en: 'Calculate 10-Year Lifecycle Savings',
                      })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100/50 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>
                      {t({
                        nl: 'Print adviesrapport',
                        fr: 'Imprimer le rapport de conformité',
                        de: 'Prüfbericht drucken / speichern',
                        en: 'Print / Save PDF Report',
                      })}
                    </span>
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
                      {t({
                        nl: 'Uitslag Keurings-Check: ROOD (Categorie IV Installatie)',
                        fr: 'Résultat du Test : ROUGE (Installation Catégorie IV)',
                        de: 'Prüfergebnis: ROT (Kategorie IV Pflichtanlage)',
                        en: 'Check Verdict: RED (Statutory Category IV Machine)',
                      })}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {t({
                        nl: 'Strenge Keuringsplicht & Periodieke Herkeuring Verplicht',
                        fr: 'Obligation de Mise en Service & Contrôles Périodiques Requis',
                        de: 'Strenge Prüfpflicht & Wiederkehrende Prüfungen Gesetzlich Erforderlich',
                        en: 'Mandatory In-Service Inspections & Recertification Obligation',
                      })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-rose-200 shadow-xs space-y-3">
                  <div className="font-semibold text-slate-900 text-sm">
                    {t({
                      nl: 'Belangrijkste Wettelijke Verplichtingen voor de Werkgever:',
                      fr: 'Obligations légales majeures pour l’exploitant / employeur :',
                      de: 'Wesentliche gesetzliche Betreiberpflichten für den Arbeitgeber:',
                      en: 'Operational Obligations for the Employer / Owner:',
                    })}
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                    <li>
                      <strong>{t({ nl: 'KvI vóór ingebruikneming:', fr: 'Visite de mise en service obligatoire :', de: 'Inbetriebnahmeprüfung zwingend:', en: 'Pre-Commissioning Audit Mandatory:' })}</strong>{' '}
                      {t({
                        nl: 'Een NL-CBI / EDTC moet de machine fysiek op locatie keuren en vrijgeven voor de eerste inzet.',
                        fr: 'Un organisme agréé (EDTC en Belgique, NL-CBI aux Pays-Bas, Luxcontrol à Luxembourg) doit inspecter et valider la remorque avant la première utilisation.',
                        de: 'Eine zugelassene Überwachungsstelle muss die Anlage vor Ort prüfen und zur Nutzung freigeben.',
                        en: 'An accredited national inspection body must inspect and certify the unit before it may be deployed.',
                      })}
                    </li>
                    <li>
                      <strong>{t({ nl: 'Periodieke herkeuring (elke 12–24 mnd)*:', fr: 'Contrôles périodiques récurrents (tous les 12 à 24 mois)* :', de: 'Wiederkehrende Prüfungen (alle 12–24 Monate)*:', en: 'Mandatory Recurrent Inspections (every 12–24 mos)*:' })}</strong>{' '}
                      {t({
                        nl: 'Verplichte periodieke herkeuring met afpersen en beproeving van de veiligheidsklep (NL 2 jaar, BE standaard jaarlijks).',
                        fr: 'Inspection interne/externe, épreuve sous pression hydrostatique et tarage de la soupape (annuel en BE, 2 ans aux Pays-Bas).',
                        de: 'Innere/äußere Prüfung, Wasserdruckprobe und Prüfung des Sicherheitsventils (in BE jährlich, in NL alle 24 Monate).',
                        en: 'Internal/external inspection, safety relief valve testing, and ultrasonic thickness tests (interval varies by member state: 24 months in NL, annually in BE, 1–3 years in DE).',
                      })}
                    </li>
                    <li>
                      <strong>{t({ nl: 'Strikte merkplicht:', fr: 'Obligation stricte de pièces de marque :', de: 'Strikte Herstellerbindung:', en: 'Strict Spare Parts Lock-in:' })}</strong>{' '}
                      {t({
                        nl: 'Vervanging door niet-originele slangen of ventielen laat het CE-samenstelcertificaat direct vervallen.',
                        fr: 'Le remplacement par des flexibles non approuvés par le constructeur annule immédiatement le certificat CE de l’ensemble.',
                        de: 'Der Austausch gegen nicht herstellerspezifizierte Schläuche lässt das CE-Baugruppenzertifikat sofort erlöschen.',
                        en: 'Non-OEM certified replacement parts void assembly compliance and indemnity coverage.',
                      })}
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('tco-calculator')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>
                      {t({
                        nl: 'Bereken keurings- en stilstandskosten',
                        fr: 'Calculer les coûts d’inspection et d’arrêt',
                        de: 'Prüf- und Stillstandskosten berechnen',
                        en: 'Calculate Inspection & Downtime Costs',
                      })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('downloadcenter')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-rose-300 text-rose-900 hover:bg-rose-100/50 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>
                      {t({
                        nl: 'Download checklist',
                        fr: 'Télécharger la checklist',
                        de: 'Checkliste herunterladen',
                        en: 'Download Audit Checklist',
                      })}
                    </span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>
                      {t({ nl: 'Print rapport', fr: 'Imprimer le rapport', de: 'Bericht drucken', en: 'Print Report' })}
                    </span>
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
                      {t({
                        nl: 'ACUUT RISICO: WETSOVERTREDING WBDA / CODEX',
                        fr: 'AVERTISSEMENT URGENT : NON-CONFORMITÉ RÉGLEMENTAIRE CRITIQUE',
                        de: 'DRINGENDE WARNUNG: KRITISCHER GESETZESVERSTOSS',
                        en: 'URGENT WARNING: CRITICAL REGULATORY NON-CONFORMITY',
                      })}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-red-950">
                      {t({
                        nl: 'Niet-Conforme Installatie & Directe Bestuurlijke Aansprakelijkheid',
                        fr: 'Exploitation Illégale & Responsabilité Pénale Directe de l’Employeur',
                        de: 'Illegaler Anlagenbetrieb & Persönliche Betreiberhaftung',
                        en: 'Illegal Machine Operation & Personal Director Liability',
                      })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-red-200 shadow-xs space-y-3">
                  <div className="font-semibold text-red-950 text-sm">
                    {t({
                      nl: 'Bevinding van de Beslisboom:',
                      fr: 'Constat légal selon la réglementation des équipements sous pression :',
                      de: 'Befund des Entscheidungsbaums:',
                      en: 'Legal Status under European Pressure Regulations:',
                    })}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {t({
                      nl: '“De inhoud overschrijdt 2 liter bij > 110 °C, maar er is geen Categorie IV samenstelcertificaat. Inzet op de openbare weg of fabrieksterreinen is illegaal en leidt tot directe stillegging door de Arbeidsinspectie.”',
                      fr: '“Le volume interne dépasse 2 litres à > 110 °C : la machine est légalement un générateur vapeur de Catégorie IV. Pourtant, elle ne dispose pas du certificat d’ensemble Notified Body obligatoire. Son exploitation constitue une infraction directe et annule la couverture d’assurance.”',
                      de: '“Das Volumen übersteigt 2 Liter bei > 110 °C, die Anlage ist rechtlich ein Dampfkessel der Kategorie IV. Es fehlt jedoch das zwingende Baugruppenzertifikat einer Benannten Stelle. Der Betrieb ist illegal und führt zum Erlöschen des Versicherungsschutzes.”',
                      en: '“The internal volume exceeds 2 litres at > 110 °C, meaning the machine is legally a Category IV steam boiler. However, it lacks mandatory Notified Body assembly certification. In-service deployment represents a direct statutory offence and nullifies insurance cover.”',
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onNavigate?.('downloadcenter')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>
                      {t({
                        nl: 'Download juridisch stappenplan',
                        fr: 'Télécharger le guide de vérification juridique',
                        de: 'Juristischen Maßnahmenplan herunterladen',
                        en: 'Download OEM Legal Verification Guide',
                      })}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-red-300 text-red-900 hover:bg-red-100/50 rounded-lg text-xs font-medium transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>
                      {t({ nl: 'Print risicorapport', fr: 'Imprimer le dossier d’alerte', de: 'Risikobericht drucken', en: 'Print Warning Dossier' })}
                    </span>
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
                      {t({
                        nl: 'Uitslag: Buiten Stoom-PED Toepassingsgebied',
                        fr: 'Résultat : Hors du Champ Vapeur DESP',
                        de: 'Ergebnis: Außerhalb des Dampf-DGRL Bereichs',
                        en: 'Verdict: Exempt from High-Pressure Steam Regimes',
                      })}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">
                      {t({
                        nl: 'Geen Drukapparatuur Stoomketelclassificatie',
                        fr: 'Aucune Classification en Chaudière à Vapeur Sous Pression',
                        de: 'Keine Einstufung als Überwachungsbedürftiger Dampfkessel',
                        en: 'Standard Machinery Directive Regulations Apply',
                      })}
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border border-sky-200 shadow-xs space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {t({
                      nl: 'Omdat de werkdruk lager is dan 31,25 bar of de temperatuur onder 110 °C blijft, valt de machine buiten het zware stoomketelregime van Tabel 5. Er geldt geen verplichte KvI.',
                      fr: 'La pression de service restant ≤ 31,25 bar ou la température ≤ 110 °C, l’appareil n’est pas qualifié de générateur de vapeur haute température au sens du Tableau 5. L’entretien régulier des équipements de travail s’applique.',
                      de: 'Weil der Druck ≤ 31,25 bar oder die Temperatur ≤ 110 °C beträgt, fällt das Gerät nicht unter das strenge Dampfkesselregime der Tabelle 5. Standardmäßige Arbeitsschutzwartung genügt.',
                      en: 'Because working pressure is ≤ 31.25 bar or operating temperature is ≤ 110 °C, the unit is not classified as a high-hazard steam boiler under Annex II Table 5. Standard equipment safety maintenance applies.',
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>
                      {t({ nl: 'Nieuwe check starten', fr: 'Vérifier un autre appareil', de: 'Weiteres Gerät prüfen', en: 'Check Another Unit' })}
                    </span>
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
