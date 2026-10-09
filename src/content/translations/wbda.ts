import { SiteLanguage } from '../types';

export interface WbdaTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  demarcation: {
    badge: string;
    title: string;
    desc: string;
    oemBadge: string;
    oemTitle: string;
    oemDesc: string;
    oemScope: string;
    employerBadge: string;
    employerTitle: string;
    employerDesc: string;
    employerScope: string;
  };
  regimesHeader: {
    badge: string;
    title: string;
  };
  beneluxTabs: {
    tabNl: string;
    tabBe: string;
    tabLu: string;
  };
  europeTabs: {
    tabDe: string;
    tabFr: string;
    tabUk: string;
    tabBenelux: string;
  };
  summary: {
    badge: string;
    title: string;
    desc: string;
    col1Title: string;
    col1Desc: string;
    col2Title: string;
    col2Desc: string;
    col3Title: string;
    col3Desc: string;
    calloutTitle: string;
    calloutDesc: string;
    calloutBtn: string;
  };
}

export const WBDA_TRANSLATIONS: Record<SiteLanguage, WbdaTranslation> = {
  nl: {
    header: {
      badge: 'Wettelijk Kader Benelux · Nederland, België & Luxemburg',
      title: 'Wettelijk Kader Drukapparatuur in de Benelux (NL · BE · LU)',
      desc: 'Waar de Europese Richtlijn Drukapparatuur (PED 2014/68/EU) harmoniseert hoe fabrikanten apparatuur bouwen en certificeren, bepalen de nationale wetgevingen van Nederland, België en Luxemburg zelfstandig de verplichtingen in de operationele gebruiksfase: de verplichte keuring vóór ingebruikname, periodieke herkeuringen en handhaving.',
    },
    demarcation: {
      badge: 'Cruciaal Juridisch Onderscheid in de Benelux',
      title: 'Het Verschil Tussen Nieuwbouw (Fabrikant) en Gebruiksfase (Werkgever)',
      desc: 'Een hardnekkige misvatting bij kopers en wagenparkbeheerders is dat een CE-markering op een hogedruktrailer of stoomunit betekent dat het apparaat “gebruiksklaar is en aan alle wetten voldoet”. De wetgeving in alle drie de Benelux-landen scheidt nieuwbouw strikt van exploitatie:',
      oemBadge: 'Nieuwbouwfase (Fabrikant · Richtlijn 2014/68/EU)',
      oemTitle: 'Fabrikantenverantwoordelijkheid',
      oemDesc: 'De fabrikant garandeert dat de machine conform de Europese essentiële veiligheidseisen is ontworpen en gebouwd. Hij brengt hiervoor de CE-markering aan (voor Categorie IV onder toezicht van een Europese Notified Body / NoBo). Zodra de machine de fabriekspoort verlaat, stopt de verantwoordelijkheid van de bouwer ten aanzien van de exploitatie en lokale vergunningen.',
      oemScope: 'Reikwijdte: Conformiteit van ontwerp, fabricage en levering conform Richtlijn 2014/68/EU.',
      employerBadge: 'Gebruiksfase (Werkgever · Nationale Wetgeving)',
      employerTitle: 'Werkgeverszorgplicht & Exploitatieverantwoordelijkheid',
      employerDesc: 'Zodra de machine in bedrijf wordt gesteld op Nederlands, Belgisch of Luxemburgs grondgebied, is de werkgever/exploitant hoofdelijk verantwoordelijk. Handleidingen van fabrikanten bevatten steevast juridische disclaimers dat de koper zélf zorg moet dragen voor de keuring vóór ingebruikname en periodieke herkeuringen.',
      employerScope: 'Reikwijdte: Verplichte keuring voor ingebruikname en periodieke controles door nationaal erkende instanties.',
    },
    regimesHeader: {
      badge: 'Nationale Wetgeving per Lidstaat',
      title: 'Specifieke Eisen per Land in de Benelux',
    },
    beneluxTabs: {
      tabNl: '🇳🇱 Nederland (WBDA 2016)',
      tabBe: '🇧🇪 België (Codex & EDTC)',
      tabLu: '🇱🇺 Luxemburg (ITM)',
    },
    europeTabs: {
      tabDe: '🇩🇪 Germany (BetrSichV)',
      tabFr: '🇫🇷 France (Arrêté 2017)',
      tabUk: '🇬🇧 UK (PSSR 2000)',
      tabBenelux: '🇪🇺 Benelux (NL/BE/LU)',
    },
    summary: {
      badge: 'Samenvatting Benelux Wetgeving',
      title: 'Belangrijkste Conclusies voor Fleet Owners in de Benelux',
      desc: 'Of u nu opereert in Nederland, Vlaanderen, Wallonië, Brussel of het Groothertogdom Luxemburg:',
      col1Title: '1. Vóór Eerste Inzet (KvI)',
      col1Desc: 'Bij Categorie IV (> 2L) is een formele keuring op locatie verplicht vóórdat de trailer de weg op gaat. Zonder rapport is de inzet illegaal.',
      col2Title: '2. Periodieke Inspectie',
      col2Desc: 'Verplichte herkeuring (24 maanden in NL, jaarlijks in BE) met hydrostatisch afpersen van de spiraal en kleptesten.',
      col3Title: '3. Het 2-Liter Alternatief',
      col3Desc: 'Door te kiezen voor een machine ≤ 2L (Art. 4 lid 3 SEP) vervallen alle bovenstaande verplichtingen en kosten in de hele Benelux.',
      calloutTitle: 'Wilt u direct controleren onder welk regime uw trailer valt?',
      calloutDesc: 'Doorloop onze 30-seconden keurings-check en ontdek direct de wettelijke status van uw machinepark.',
      calloutBtn: 'Start Keurings-Check',
    },
  },

  fr: {
    header: {
      badge: 'Cadre Légal Benelux · Belgique, Pays-Bas & Luxembourg',
      title: 'Cadre Réglementaire des Équipements Sous Pression au Benelux',
      desc: 'Alors que la Directive Européenne Équipements Sous Pression (DESP 2014/68/UE) harmonise la conception, la fabrication et le marquage CE, les législations nationales de Belgique, des Pays-Bas et du Luxembourg régissent souverainement la phase d’exploitation : visite obligatoire de mise en service, contrôles périodiques et sanctions.',
    },
    demarcation: {
      badge: 'Démarcation Juridique Fondamentale au Benelux',
      title: 'La Distinction Entre Fabrication (Constructeur) et Exploitation (Employeur)',
      desc: 'Une erreur courante chez les acheteurs est de croire qu’un marquage CE garantit que la remorque haute pression est “prête à travailler légalement sans démarche supplémentaire”. La loi sépare strictement la fabrication de l’exploitation en service :',
      oemBadge: 'Phase de Fabrication (Constructeur · Directive 2014/68/UE)',
      oemTitle: 'Responsabilité du Constructeur',
      oemDesc: 'Le fabricant garantit que l’appareil respecte les exigences essentielles de sécurité de l’UE. Pour les ensembles de Catégorie IV, cela exige la surveillance d’un Organisme Notifié (NoBo) et l’apposition du CE avec numéro à 4 chiffres. Dès la livraison, la responsabilité du constructeur s’arrête quant aux autorisations d’exploitation.',
      oemScope: 'Portée : Conception, fabrication et mise sur le marché initiale selon la DESP.',
      employerBadge: 'Phase d’Exploitation (Employeur / Droit National du Travail)',
      employerTitle: 'Obligation de Sécurité & Responsabilité Pénale de l’Employeur',
      employerDesc: 'Dès que la remorque est déployée sur un chantier en Belgique, aux Pays-Bas ou au Luxembourg, la législation sur le bien-être au travail fait peser la responsabilité intégrale sur l’employeur. Les manuels fabricants stipulent expressément que l’acheteur doit commander la visite de mise en service et planifier les contrôles.',
      employerScope: 'Portée : Examen de mise en service obligatoire et réinspections périodiques par organismes agréés.',
    },
    regimesHeader: {
      badge: 'Réglementations Nationales par État Membre',
      title: 'Exigences Spécifiques par Pays au Benelux',
    },
    beneluxTabs: {
      tabNl: '🇳🇱 Pays-Bas (WBDA 2016)',
      tabBe: '🇧🇪 Belgique (Codex & EDTC)',
      tabLu: '🇱🇺 Luxembourg (ITM)',
    },
    europeTabs: {
      tabDe: '🇩🇪 Allemagne (BetrSichV)',
      tabFr: '🇫🇷 France (Arrêté 2017)',
      tabUk: '🇬🇧 Royaume-Uni (PSSR 2000)',
      tabBenelux: '🇪🇺 Benelux (BE/NL/LU)',
    },
    summary: {
      badge: 'Synthèse Réglementaire Benelux',
      title: 'Conclusions Majeures pour les Gestionnaires de Flotte au Benelux',
      desc: 'Que vous interveniez en Belgique (Flandre, Wallonie, Bruxelles), aux Pays-Bas ou au Grand-Duché de Luxembourg :',
      col1Title: '1. Avant Premier Chantier (Mise en Service)',
      col1Desc: 'En Catégorie IV (> 2L), une visite initiale sur site par un organisme agréé (EDTC comme Vinçotte) est obligatoire. Sans attestation, l’exploitation est illégale.',
      col2Title: '2. Contrôles Périodiques',
      col2Desc: 'Réinspection obligatoire (annuelle en BE sous le Codex, tous les 24 mois aux Pays-Bas) avec épreuve hydrostatique du serpentin et test des soupapes.',
      col3Title: '3. L’Alternative des 2 Litres',
      col3Desc: 'En choisissant une remorque ≤ 2L (Art. 4 § 3 Règles de l’Art / SEP), toutes ces contraintes et coûts d’audit disparaissent dans tout le Benelux.',
      calloutTitle: 'Souhaitez-vous vérifier sous quel régime tombe votre remorque ?',
      calloutDesc: 'Faites notre test de conformité en 30 secondes et obtenez immédiatement le statut réglementaire de vos machines.',
      calloutBtn: 'Lancer le Test de Conformité',
    },
  },

  de: {
    header: {
      badge: 'Gesetzlicher Rahmen Benelux · Luxemburg, Belgien & Niederlande',
      title: 'Gesetzlicher Rahmen für Druckgeräte in Benelux (LU · BE · NL)',
      desc: 'Während die europäische Druckgeräterichtlinie (DGRL 2014/68/EU) Bau, Prüfung und CE-Kennzeichnung harmonisiert, bestimmen die nationalen Gesetze von Luxemburg, Belgien und den Niederlanden eigenständig die Pflichten in der Betriebsphase: Pflichtprüfung vor Inbetriebnahme, wiederkehrende Prüfungen und behördliche Aufsicht.',
    },
    demarcation: {
      badge: 'Zentraler Rechtlicher Unterschied in Benelux',
      title: 'Die Trennung Zwischen Herstellung (Hersteller) und Betriebsphase (Arbeitgeber)',
      desc: 'Ein verbreiteter Irrtum bei Einkäufern und Flottenleitern ist der Glaube, ein CE-Zeichen garantiere, die Maschine sei „ohne weitere Auflagen sofort einsatzbereit“. Das Recht trennt Herstellung strikt von der gewerblichen Nutzung:',
      oemBadge: 'Herstellungsphase (Hersteller · Richtlinie 2014/68/EU)',
      oemTitle: 'Herstellerverantwortung',
      oemDesc: 'Der Hersteller garantiert, dass das Gerät nach den grundlegenden Sicherheitsanforderungen gefertigt wurde. Für Kategorie-IV-Baugruppen geschieht dies unter Aufsicht einer Benannten Stelle (NoBo). Nach Verlassen des Werks endet die Verantwortung des Herstellers bezüglich Betriebsgenehmigungen und Audits.',
      oemScope: 'Reichweite: Konformität von Konstruktion, Fertigung und Inverkehrbringen nach DGRL.',
      employerBadge: 'Betriebsphase (Arbeitgeber · Nationales Arbeitsschutzrecht)',
      employerTitle: 'Betreiberpflicht & Arbeitgeberhaftung',
      employerDesc: 'Sobald der Hochdrucktrailer auf luxemburgischem, belgischem oder niederländischem Hoheitsgebiet eingesetzt wird, haftet der Arbeitgeber persönlich. Herstellerhandbücher enthalten stets den Hinweis, dass der Betreiber die Abnahmeprüfung und Wiederholungsprüfungen eigenverantwortlich beauftragen muss.',
      employerScope: 'Reichweite: Gesetzliche Abnahmeprüfung vor Inbetriebnahme und regelmäßige Wiederholungsprüfungen.',
    },
    regimesHeader: {
      badge: 'Nationale Gesetzgebung nach Mitgliedstaat',
      title: 'Spezifische Vorschriften je Land in Benelux',
    },
    beneluxTabs: {
      tabNl: '🇳🇱 Niederlande (WBDA 2016)',
      tabBe: '🇧🇪 Belgien (Codex & EDTC)',
      tabLu: '🇱🇺 Luxemburg (ITM)',
    },
    europeTabs: {
      tabDe: '🇩🇪 Deutschland (BetrSichV)',
      tabFr: '🇫🇷 Frankreich (Arrêté 2017)',
      tabUk: '🇬🇧 Großbritannien (PSSR 2000)',
      tabBenelux: '🇪🇺 Benelux (LU/BE/NL)',
    },
    summary: {
      badge: 'Zusammenfassung Benelux-Recht',
      title: 'Wichtige Schlussfolgerungen für Flottenbetreiber in Benelux',
      desc: 'Egal ob Sie in Luxemburg, Belgien (Wallonie, Flandern, Brüssel) oder den Niederlanden tätig sind:',
      col1Title: '1. Vor dem Ersten Einsatz (Abnahme)',
      col1Desc: 'Bei Kategorie IV (> 2L) ist eine formelle Vor-Ort-Prüfung durch eine zugelassene Stelle (Luxcontrol, Vinçotte) zwingend. Ohne Bericht ist der Einsatz illegal.',
      col2Title: '2. Wiederkehrende Prüfungen',
      col2Desc: 'Gesetzliche Nachprüfungen (in BE jährlich, in NL alle 24 Monate) mit Wasserdruckprüfung der Heizspirale und Prüfung des Sicherheitsventils.',
      col3Title: '3. Die 2-Liter-Alternative',
      col3Desc: 'Mit einer Anlage ≤ 2L (Art. 4 Abs. 3 Gute Ingenieurpraxis / SEP) entfallen all diese Prüfpflichten und Kosten in der gesamten Benelux-Region.',
      calloutTitle: 'Möchten Sie sofort prüfen, unter welches Regime Ihr Trailer fällt?',
      calloutDesc: 'Führen Sie unseren 30-Sekunden-Check durch und erfahren Sie den rechtlichen Status Ihres Maschinenparks.',
      calloutBtn: 'Prüf-Check Jetzt Starten',
    },
  },

  en: {
    header: {
      badge: 'European Legal Framework · Directive 2014/68/EU & Member State Regimes',
      title: 'PED 2014/68/EU Directive & European In-Service Regulations',
      desc: 'While European Directive 2014/68/EU (PED) harmonises how manufacturers design, test, and CE-certify pressure equipment across the EU Single Market, national Member State laws independently govern operational in-service use: mandatory pre-commissioning examinations, periodic recertification, and strict employer liability.',
    },
    demarcation: {
      badge: 'Crucial Legal Demarcation',
      title: 'The Distinction Between Manufacturing (OEM) and In-Service Operation (Employer)',
      desc: 'A widespread misconception among buyers and fleet managers is that a CE mark on a high-pressure steam trailer guarantees the machine is “ready to operate legally without further requirements”. European law strictly separates the manufacturing phase from in-service deployment:',
      oemBadge: 'Manufacturing Phase (OEM · Directive 2014/68/EU)',
      oemTitle: 'Manufacturer Conformity',
      oemDesc: 'The manufacturer guarantees the equipment meets European essential safety requirements (Annex I). For Category IV assemblies, this requires supervision by an accredited Notified Body (NoBo) and affixing the CE mark with the 4-digit NoBo identification. Once the machine is delivered, the OEM’s legal obligations cease regarding operational permits and in-service audits.',
      oemScope: 'Scope: Design, manufacturing, and initial placing on the market.',
      employerBadge: 'In-Service Phase (Employer / National Legislation)',
      employerTitle: 'Employer Operational Strict Liability',
      employerDesc: 'As soon as the equipment is put into operation on job sites, national occupational health & safety acts place strict liability on the employer. OEM user manuals universally contain legal clauses stating the buyer is solely responsible for commissioning audits and recurrent recertifications.',
      employerScope: 'Scope: Mandatory pre-commissioning audits and recurring inspections by accredited bodies.',
    },
    regimesHeader: {
      badge: 'National In-Service Regimes',
      title: 'Major European Jurisdictions Compared',
    },
    beneluxTabs: {
      tabNl: '🇳🇱 Netherlands (WBDA 2016)',
      tabBe: '🇧🇪 Belgium (Codex & EDTC)',
      tabLu: '🇱🇺 Luxembourg (ITM)',
    },
    europeTabs: {
      tabDe: '🇩🇪 Germany (BetrSichV)',
      tabFr: '🇫🇷 France (Arrêté 2017)',
      tabUk: '🇬🇧 UK (PSSR 2000)',
      tabBenelux: '🇪🇺 Benelux (NL/BE/LU)',
    },
    summary: {
      badge: 'European Regulatory Summary',
      title: 'Key Takeaways for European Fleet Operators',
      desc: 'Whether operating across Germany, France, the UK, the Netherlands, or Belgium:',
      col1Title: '1. Pre-Commissioning Audit',
      col1Desc: 'Under Category IV (> 2L), on-site inspection by an accredited body is mandatory before commercial deployment.',
      col2Title: '2. Recurrent Audits & Downtime',
      col2Desc: 'Statutory reinspections (every 12 to 24 months depending on member state) requiring hydrostatic pressure tests and team downtime.',
      col3Title: '3. The 2-Litre SEP Advantage',
      col3Desc: 'Selecting equipment ≤ 2L (Art. 4.3 SEP) eliminates all in-service boiler inspections, recurrent audits, and OEM lock-in across Europe.',
      calloutTitle: 'Want to verify which regulatory regime governs your equipment?',
      calloutDesc: 'Run our interactive 30-second decision tree to determine your exact legal compliance standing.',
      calloutBtn: 'Start Compliance Check',
    },
  },
};

export function getWbdaTranslations(lang: SiteLanguage): WbdaTranslation {
  return WBDA_TRANSLATIONS[lang] || WBDA_TRANSLATIONS.nl;
}
