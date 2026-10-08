import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';
import { useSiteContent } from '../content';

interface FaqPageProps {
  onNavigate: (slug: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isEurope ? "Knowledge Platform Q&A" : "Kennisplatform Vragen & Antwoorden"}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl">
            {isEurope 
              ? "Frequently Asked Questions: High-Pressure Trailer PED Compliance & Audits" 
              : "Veelgestelde Vragen over Keuringsplicht bij Hogedruktrailers"
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            {isEurope 
              ? "Authoritative, legally vetted answers to key questions from fleet directors, procurement officers, EHS safety auditors, and operators of industrial high-pressure hot water and steam trailers."
              : "Duidelijke en juridisch getoetste antwoorden op de belangrijkste vragen van inkopers, wagenparkbeheerders, preventiediensten en gebruikers van professionele heetwater- en stoom-hogedruktrailers."
            }
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <FaqAccordion onNavigate={onNavigate} />

        {/* Deep Dive Cards */}
        <section className="pt-8 border-t border-slate-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
              {isEurope ? "Further Knowledge Bank Topics" : "Verder Lezen in de Kennisbank"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
              {isEurope ? "Related Engineering & Compliance Modules" : "Gerelateerde Kennisbank Onderwerpen"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              onClick={() => onNavigate('wbda-2016')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-amber-700 font-semibold uppercase">
                {isEurope ? "Regulation" : "Wetgeving"}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{isEurope ? "PED Directive Explained" : "WBDA 2016 Uitleg"}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {isEurope 
                  ? "In-depth briefing on Directive 2014/68/EU, Notified Bodies, and employer strict liability."
                  : "Diepgaande toelichting op het Warenwetbesluit, de zorgplicht en het onderscheid fabrikant vs. exploitant."
                }
              </p>
            </div>

            <div
              onClick={() => onNavigate('two-liter-grens')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-emerald-700 font-semibold uppercase">
                {isEurope ? "Engineering" : "Techniek"}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{isEurope ? "The 2-Litre Threshold" : "De 2-Liter Grens"}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {isEurope 
                  ? "Thermodynamic proof of why systems ≤ 2L are categorically exempt from statutory boiler audits."
                  : "Fysische onderbouwing waarom systemen ≤ 2L categorisch zijn vrijgesteld van keuringsdruk."
                }
              </p>
            </div>

            <div
              onClick={() => onNavigate('tco-calculator')}
              className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer group shadow-xs space-y-2"
            >
              <span className="text-xs font-mono text-sky-700 font-semibold uppercase">
                {isEurope ? "Financial Model" : "Rekenmodule"}
              </span>
              <h3 className="font-serif font-bold text-base text-slate-900 flex items-center justify-between">
                <span>{isEurope ? "TCO Calculator" : "TCO Calculator"}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-xs text-slate-600">
                {isEurope 
                  ? "Calculate exact cumulative lifecycle variances across audits, downtime, and OEM parts over 2 to 10 years."
                  : "Bereken exact het cumulatieve kostenverschil in keuringen, stilstand en onderdelen over 2 tot 10 jaar."
                }
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
