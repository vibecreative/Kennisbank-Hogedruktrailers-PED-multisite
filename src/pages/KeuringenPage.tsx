import React from 'react';
import { 
  FileWarning, 
  ArrowRight, 
  AlertOctagon,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Truck,
  Scale
} from 'lucide-react';
import { useSiteContent } from '../content';

interface KeuringenPageProps {
  onNavigate: (slug: string) => void;
  onOpenWizard: () => void;
}

export const KeuringenPage: React.FC<KeuringenPageProps> = ({ 
  onNavigate,
}) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
            <FileWarning className="w-3.5 h-3.5" />
            {isEurope ? "In-Service Operations & Audit Regimes" : "Exploitatie & Keuringsregime"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            {isEurope 
              ? "Pre-Commissioning Audits, Recurrent Inspections & Component Freedom" 
              : "Keuring voor Ingebruikname (KvI), Herkeuringen en Merkplicht"
            }
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {isEurope 
              ? "When an industrial steam or high-pressure thermal installation is classified under PED Category IV, European Member State occupational health & safety directives impose strict operational obligations on the owner. Below are the three core statutory pillars explained in detail."
              : "Indien een stoom-hogedrukinstallatie valt onder PED Categorie IV, stelt het WBDA 2016 zware operationele eisen aan de gebruiker. Hieronder vindt u de drie belangrijkste verplichtingen in detail uitgelegd."
            }
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
                  {isEurope ? "First-Day Operational Prerequisite" : "Eerste Werkdag Verplichting"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {isEurope ? "1. Mandatory Pre-Commissioning Inspection" : "1. Keuring voor Ingebruikname (KvI)"}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "Before any Category IV assembly can be operated on European job sites, an accredited national inspection body (such as TÜV in Germany, Dekra in the Netherlands, Vinçotte in Belgium, or APAVE in France) must conduct an on-site safety examination. Only upon issuance of a formal written commissioning certificate is deployment legally permitted under national workplace regulations."
                : "Vóórdat een Categorie IV-installatie op de werkplek gebruikt mag worden, dient een door het Ministerie van SZW erkende NL-CBI (Nederlandse Conformiteitsbeoordelingsinstantie / Notified Body, zoals TÜV NORD, Dekra, Kiwa, SGS of Bureau Veritas) de opstelling en veiligheidsvoorzieningen ter plaatse te inspecteren conform Artikel 21 WBDA 2016. Pas na afgifte van de officiële Verklaring van Ingebruikneming (VVI) is inzet wettelijk toegestaan."
              }
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 text-xs">
              <div className="font-semibold text-slate-800">
                {isEurope ? "Key elements audited by accredited inspectors during commissioning:" : "Wat toetst de inspecteur tijdens de KvI conform het WBDA?"}
              </div>
              <ul className="space-y-1 list-disc list-inside text-slate-600">
                {isEurope ? (
                  <>
                    <li>Safe machine positioning relative to personnel, traffic pathways, and public zones</li>
                    <li>Unobstructed, safe discharge piping from the certified safety relief valves</li>
                    <li>Functionality of emergency stops, low-water cut-offs, and high-temperature limiters</li>
                    <li>Completeness of the manufacturer technical file, NoBo module certificates, and EU Declaration of Conformity</li>
                    <li>Verification of test pressure records (hydrostatic test) under PED 2014/68/EU standards</li>
                  </>
                ) : (
                  <>
                    <li>Veilige opstelling van de machine ten opzichte van werknemers, verkeersroutes en publiek</li>
                    <li>Correcte afvoer van overdruk en ongehinderde, veilige afblaas van de gecertificeerde veiligheidsklep</li>
                    <li>Aanwezigheid en geteste werking van de noodstop-, watergebrek- en temperatuurbewakingsschakelingen</li>
                    <li>Compleetheid van het wettelijke constructiedossier, fabrikantencertificaten en EG/EU-conformiteitsverklaring</li>
                    <li>Verificatie van de beproevingsdruk (hydrostatische test) en conformiteit met PED 2014/68/EU</li>
                  </>
                )}
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
                  {isEurope ? "Recurring Audit Cycle (Every 12–24 Months)" : "Terugkerende Inspectiecyclus (Art. 22 WBDA)"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {isEurope ? "2. Mandatory Periodic Reinspection & Testing" : "2. Verplichte Periodieke Herkeuring"}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "Under European Member State in-service frameworks (e.g. German BetrSichV, French Arrêté 2017, Dutch WBDA 2016, Belgian Codex), Category IV steam and hot water assemblies must undergo recurrent inspection every 12 to 24 months by an accredited inspector. This mandates pressure testing, safety valve recalibration, and ultrasonic wall thickness measurements, incurring € 1,000–€ 2,500 in direct audit and downtime fees per machine."
                : "Conform Artikel 22 WBDA 2016 en Artikel 15 van de Warenwetregeling Drukapparatuur (uitgewerkt in PRDA katern 1.3) moeten stoom- en heetwatertoestellen in Categorie IV periodiek opnieuw gekeurd worden door een NL-CBI. Dit omvat verplichte druktesten, kalibratie van de veiligheidsafsluiters en wanddiktemetingen. De kosten (inspectietarief, logistiek en stilstand) zijn €1000 - €5000 per machine."
              }
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block mb-1">{isEurope ? "Pressure Testing" : "Druktesten & Afpersing"}</span>
                <strong className="text-slate-900">{isEurope ? "Hydrostatic test" : "Hydrostatische test"}</strong>
                <p className="text-[11px] text-slate-500 mt-1">
                  {isEurope 
                    ? "Coil is pressurized to 1.3x or 1.43x design pressure according to harmonized testing directives." 
                    : "Spiraal wordt afgeperst op 1,3x of 1,43x ontwerpdruk conform de keuringsinstructies."
                  }
                </p>
              </div>
              <div className="p-3.5 rounded border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block mb-1">{isEurope ? "Safety Relief Valves" : "Veiligheidskleppen"}</span>
                <strong className="text-slate-900">{isEurope ? "Bench calibration" : "Testbank kalibratie"}</strong>
                <p className="text-[11px] text-slate-500 mt-1">
                  {isEurope 
                    ? "Verification of opening pressure, discharge capacity, and tamper-evident resealing." 
                    : "Verificatie van aanspreekdruk, capaciteit en hernieuwde verzegeling."
                  }
                </p>
              </div>
              <div className="p-3.5 rounded border border-slate-200 bg-slate-50">
                <span className="text-slate-500 block mb-1">{isEurope ? "Wall Thickness Inspection" : "Wanddiktemeting"}</span>
                <strong className="text-slate-900">{isEurope ? "Ultrasonic NDT analysis" : "Ultrasoon onderzoek"}</strong>
                <p className="text-[11px] text-slate-500 mt-1">
                  {isEurope 
                    ? "Testing for thermal degradation, corrosion, and residual metal thickness of the coil tubing." 
                    : "Meting op thermische degradatie, cavitatie en restwanddikte van de ketelpijp."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Vendor Lock-in & Merkplicht */}
          <div className="bg-white rounded-xl border border-rose-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                03
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold">
                  {isEurope ? "Assembly Integrity & Legal Liability (Article 14 PED)" : "Aansprakelijkheid & Samenstelcertificering (Art. 24 WBDA)"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {isEurope ? "3. Proprietary Spare Parts Lock-in (Vendor Lock-in)" : "3. Merkplicht op Onderdelen"}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {isEurope 
                ? "Under PED 2014/68/EU Article 2(6), an industrial Category IV steam system is certified as an integrated assembly. If the operator replaces a component (such as a high-pressure hose, spray gun, or relief valve) with an alternative part not explicitly specified in the manufacturer's technical construction file, it constitutes an unauthorized alteration under European law."
                : "Onder de PED (Artikel 2 lid 6) is een industriële Categorie IV stoomreiniger gecertificeerd als een integraal samenstel (assembly). Als de gebruiker een onderdeel vervangt door een alternatief onderdeel dat niet door de fabrikant in het constructiedossier is vastgelegd, geldt dit juridisch conform Artikel 24 WBDA als een ongeautoriseerde wijziging."
              }
            </p>

            <div className="border border-rose-200 bg-rose-50/60 rounded-lg p-4 text-xs text-rose-900 space-y-2">
              <div className="font-semibold flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>{isEurope ? "Why does this legal vendor lock-in occur?" : "Waarom ontstaat deze juridische Vendor Lock-in?"}</span>
              </div>
              <p className="leading-relaxed text-rose-950">
                {isEurope 
                  ? "Because the Notified Body assessed the entire integrated pressurized circuit, retrofitting non-OEM components invalidates the assembly EU Declaration of Conformity and statutory in-service certificate. European commercial liability policies routinely contain exclusion clauses regarding non-certified pressure modifications. Operators are thus legally compelled to purchase costly OEM proprietary parts for the lifespan of the machine."
                  : "Omdat de certificeringsinstantie het complete drukcircuit (inclusief slang en pistool) heeft goedgekeurd, vervalt bij montage van niet-originele onderdelen de geldigheid van de EG-conformiteitsverklaring en de Verklaring van Ingebruikneming. Bedrijfs- en aansprakelijkheidsverzekeraars hanteren standaardclausules inzake wettelijke voorschriften; bij een ongeval kan dekking worden geweigerd. Gebruikers zijn daardoor verplicht om kostbare OEM-merkonderdelen te blijven afnemen."
                }
              </p>
            </div>
          </div>

          {/* Pillar 4: Arbeidsinspectie Handhaving & Aansprakelijkheid */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                04
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                  {isEurope ? "Enforcement, Shutdowns & Director Liability" : "Toezicht, Stillegging & Aansprakelijkheid"}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  {isEurope ? "4. Labour Inspectorate Audits & Insurance Voidance" : "4. Handhaving door de Arbeidsinspectie & Sancties"}
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {isEurope 
                ? "European labour and occupational health & safety inspectorates (such as the Nederlandse Arbeidsinspectie in NL, Toezicht op het Welzijn op het Werk in BE, and Gewerbeaufsicht in DE) actively conduct unannounced audits on commercial and municipal cleaning sites. When an uninspected Category IV high-pressure trailer is identified, statutory consequences follow immediately:"
                : "De toezichthouders – zoals de Nederlandse Arbeidsinspectie (NLA) en de Belgische Inspectie Toezicht op het Welzijn op het Werk – controleren actief op werven, in binnensteden en bij industriële projecten. Wanneer een hogedruktrailer in Categorie IV draait zonder geldige keuring, treden direct zware wettelijke sancties in werking:"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded border border-rose-200 bg-rose-50/40 space-y-1">
                <span className="font-mono text-rose-800 font-bold uppercase block">{isEurope ? "Immediate Stop-Work" : "Directe Verzegeling"}</span>
                <strong className="text-slate-900">{isEurope ? "On-site Trailer Sealing" : "Stillegging van het Project"}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {isEurope 
                    ? "The inspector immediately seals the high-pressure trailer shut. The cleaning crew must abandon work instantly, causing client penalty claims."
                    : "De inspecteur verzegelt de hogedruktrailer ter plekke. Het reinigingswerk wordt acuut stilgelegd, met zware contractuele boetes van opdrachtgevers tot gevolg."}
                </p>
              </div>

              <div className="p-3.5 rounded border border-amber-200 bg-amber-50/40 space-y-1">
                <span className="font-mono text-amber-800 font-bold uppercase block">{isEurope ? "Heavy Penalties" : "Bestuurlijke Boete"}</span>
                <strong className="text-slate-900">{isEurope ? "Economic Offence Fine" : "Economisch Delict (WED)"}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {isEurope 
                    ? "Operating without statutory sign-off incurs substantial administrative fines reaching tens of thousands of euros."
                    : "Inzet zonder VVI geldt als economisch delict en ernstige Arbo-overtreding. Boetes lopen op tot tienduizenden euro's per overtreding."}
                </p>
              </div>

              <div className="p-3.5 rounded border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-mono text-slate-700 font-bold uppercase block">{isEurope ? "Void Insurance" : "Geen Dekking Polis"}</span>
                <strong className="text-slate-900">{isEurope ? "Personal Director Risk" : "Bestuurdersaansprakelijkheid"}</strong>
                <p className="text-[11px] text-slate-600 mt-1">
                  {isEurope 
                    ? "Commercial liability insurers universally refuse indemnity for incidents involving uncertified, uninspected pressure assemblies."
                    : "Bij een incident met letsel of materiële schade keert de aansprakelijkheidsverzekering mogelijk niet uit indien niet aan de wettelijke keuringsplichten is voldaan."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
          <h2 className="font-serif font-bold text-xl text-white">
            {isEurope ? "Seeking Exemption from Recurrent Audits & Vendor Lock-in?" : "Wilt u Vrij Zijn van Herkeuringsplichten en Merkgebondenheid?"}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {isEurope 
              ? "Systems designed under Article 4(3) (Sound Engineering Practice / SEP, burner/heat exchanger volume ≤ 2 litres) are legally exempt from pre-commissioning inspections and periodic statutory audits (typically biennial)*. Furthermore, operators retain 100% freedom to utilize universal certified hoses and accessories."
              : "Met installaties onder Artikel 4.3 (SEP / Goed Vakmanschap, inhoud < 2 liter) bent u wettelijk vrijgesteld van de KvI en 2-jaarlijkse herkeuring. Bovendien behoudt u 100% vrijheid om universele componenten te kiezen."
            }
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('internationaal')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>{isEurope ? "View In-Service Rules Across EU Member States" : "Bekijk Internationale Regels (Europa / VS / Canada)"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('tco-calculator')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Calculate Recurrent Audit & Downtime Costs" : "Bereken Kosten van Periodieke Keuringen"}</span>
            </button>
            <button
              onClick={() => onNavigate('downloadcenter')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs border border-slate-700 transition-colors"
            >
              <span>{isEurope ? "Download 10-Point Audit Checklist" : "Download Keuringschecklist"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
