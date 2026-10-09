import { SiteLanguage } from '../types';

export interface TcoTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  inputs: {
    title: string;
    subtitle: string;
    machineCount: string;
    years: string;
    kvi: string;
    kviHelp: string;
    periodic: string;
    periodicHelp: string;
    downtimeDays: string;
    downtimeDaysHelp: string;
    downtimeCost: string;
    downtimeCostHelp: string;
    partsMarkup: string;
    partsMarkupHelp: string;
  };
  results: {
    savingsTitle: string;
    savingsSubtitle: string;
    cat4Title: string;
    cat4Subtitle: string;
    sepTitle: string;
    sepSubtitle: string;
    kviTotal: string;
    periodicTotal: string;
    downtimeTotal: string;
    partsTotal: string;
  };
  table: {
    title: string;
    desc: string;
    yearCol: string;
    kviCol: string;
    periodicCol: string;
    downtimeCol: string;
    partsCol: string;
    cumulativeCol: string;
    totalRow: string;
  };
  advisory: {
    title: string;
    p1: string;
    p2: string;
    printBtn: string;
    wizardBtn: string;
  };
}

export const TCO_TRANSLATIONS: Record<SiteLanguage, TcoTranslation> = {
  nl: {
    header: {
      badge: 'Rekenmodel Exploitatiekosten',
      title: 'TCO Keuringskosten Calculator voor Hogedruktrailers',
      desc: 'Bereken het cumulatieve kostenverschil tussen een keuringsplichtige PED Categorie IV hogedruktrailer en een keuringsvrije hogedruktrailer (≤ 2 Liter SEP).',
    },
    inputs: {
      title: 'Parameters Invoeren',
      subtitle: 'Pas de waarden aan op basis van uw vloot en exploitatiecijfers:',
      machineCount: 'Aantal hogedruktrailers in vloot',
      years: 'Exploitatieperiode (jaren)',
      kvi: 'Keuring voor Ingebruikneming (KvI / Indienststelling) per trailer',
      kviHelp: 'Kosten voor inspecteur van geaccrediteerde instantie (NL-CBI / EDTC) vóór eerste inzet.',
      periodic: 'Periodieke herkeuring (per beurt per trailer)',
      periodicHelp: 'Kosten inspecteur voor afpersen en beproeven (elke 24 mnd in NL, jaarlijks in BE).',
      downtimeDays: 'Stilstandsdagen per inspectieronde',
      downtimeDaysHelp: 'Aantal werkdagen dat de trailer niet operationeel inzetbaar is i.v.m. transport en keuring.',
      downtimeCost: 'Kosten van stilstand per werkdag (€ / dag)',
      downtimeCostHelp: 'Personeelsuren, vervangend materieel en omzetderving per niet-inzetbare trailer.',
      partsMarkup: 'Jaarlijkse meerprijs merkgebonden onderdelen (€ / jaar)',
      partsMarkupHelp: 'Meerkosten van verplichte originele slangen en toebehoren t.o.v. universele gecertificeerde kwaliteitsdelen.',
    },
    results: {
      savingsTitle: 'Totale Besparing met Keuringsvrij (SEP ≤ 2L)',
      savingsSubtitle: 'Over de gekozen exploitatieperiode voor de gehele vloot',
      cat4Title: 'Totale Lasten PED Categorie IV',
      cat4Subtitle: 'Inspectiekosten, stilstandsderving en merkplicht',
      sepTitle: 'Totale Lasten Keuringsvrij (SEP)',
      sepSubtitle: '0% keuringskosten en volledige onderdeelvrijheid',
      kviTotal: 'Keuring voor Ingebruikneming (KvI)',
      periodicTotal: 'Wederkerende herkeuringen',
      downtimeTotal: 'Stilstandskosten & derving',
      partsTotal: 'Meerprijs merkonderdelen',
    },
    table: {
      title: 'Cumulatieve Kostenopbouw per Jaar',
      desc: 'Gedetailleerd overzicht van de kostenontwikkeling per exploitatiejaar:',
      yearCol: 'Jaar',
      kviCol: 'KvI',
      periodicCol: 'Herkeuring',
      downtimeCol: 'Stilstand',
      partsCol: 'Merkdelen',
      cumulativeCol: 'Cumulatief TCO',
      totalRow: 'Totaal',
    },
    advisory: {
      title: 'Belangrijk Juridisch & Financieel Inzicht',
      p1: 'Veel kopers zien alleen de aanschafprijs. Bij een Categorie IV trailer lopen de operationele bijkomende kosten door verplichte keuringen, stilstand en dure merkslangen echter op tot meer dan 50% van de initiële aanschafwaarde over een periode van 6 tot 10 jaar.',
      p2: 'Met een hogedruktrailer ≤ 2 liter (Art. 4.3 SEP) worden deze kosten structureel geëlimineerd zonder verlies van reinigingskracht.',
      printBtn: 'Print / Opslaan als PDF',
      wizardBtn: 'Check Uw Installatie',
    },
  },

  fr: {
    header: {
      badge: 'Modèle Économique d’Exploitation',
      title: 'Calculateur de TCO & Coûts de Contrôle pour Remorques',
      desc: 'Calculez le surcoût cumulé entre une remorque soumise à la DESP Catégorie IV et un modèle exempté sous les Règles de l’Art (≤ 2 Litres SEP).',
    },
    inputs: {
      title: 'Saisie des Paramètres',
      subtitle: 'Ajustez les valeurs selon votre flotte et vos coûts réels d’exploitation :',
      machineCount: 'Nombre de remorques haute pression dans la flotte',
      years: 'Durée d’exploitation (années)',
      kvi: 'Visite de mise en service (EDTC / KvI) par remorque',
      kviHelp: 'Frais d’intervention de l’organisme agréé (Vinçotte, Apragaz, NL-CBI) avant le premier chantier.',
      periodic: 'Contrôle périodique récurrent (par session et par remorque)',
      periodicHelp: 'Frais de l’organisme pour l’épreuve hydrostatique et le tarage des soupapes.',
      downtimeDays: 'Jours d’immobilisation par inspection',
      downtimeDaysHelp: 'Nombre de journées de travail perdues pour le transport, l’épreuve et la délivrance du rapport.',
      downtimeCost: 'Coût d’immobilisation par jour d’arrêt (€ / jour)',
      downtimeCostHelp: 'Salaires d’équipe bloquée, matériel de substitution et perte de chiffre d’affaires.',
      partsMarkup: 'Surcoût annuel des pièces de marque d’origine (€ / an)',
      partsMarkupHelp: 'Surcoût des flexibles et lances imposés par la marque face aux flexibles universels certifiés.',
    },
    results: {
      savingsTitle: 'Économie Totale avec un Modèle Exempté (SEP ≤ 2L)',
      savingsSubtitle: 'Sur la durée d’exploitation choisie pour l’ensemble de la flotte',
      cat4Title: 'Charges Totales DESP Catégorie IV',
      cat4Subtitle: 'Frais de contrôle, arrêts machine et pièces captives',
      sepTitle: 'Charges Totales Modèle Exempté (SEP)',
      sepSubtitle: '0 € de redevances légales et liberté totale des pièces',
      kviTotal: 'Visite de mise en service initiale',
      periodicTotal: 'Contrôles périodiques récurrents',
      downtimeTotal: 'Pertes d’immobilisation et arrêts',
      partsTotal: 'Surcoût pièces captives constructeur',
    },
    table: {
      title: 'Évolution Cumulée des Coûts par Année',
      desc: 'Décomposition détaillée des dépenses d’exploitation par an :',
      yearCol: 'Année',
      kviCol: 'Mise en Serv.',
      periodicCol: 'Contrôle',
      downtimeCol: 'Arrêt',
      partsCol: 'Pièces',
      cumulativeCol: 'TCO Cumulé',
      totalRow: 'Total',
    },
    advisory: {
      title: 'Analyse Financière & Stratégique',
      p1: 'Beaucoup d’acheteurs ne comparent que le prix d’achat initial. Pour une remorque Catégorie IV, les coûts cumulés des contrôles légaux, des immobilisations d’équipe et des flexibles de marque dépassent souvent 50% du prix d’achat initial sur 6 à 10 ans.',
      p2: 'En choisissant une remorque ≤ 2 litres (Art. 4 § 3 DESP), ces dépenses disparaissent définitivement sans aucun compromis sur l’efficacité du décapage.',
      printBtn: 'Imprimer / Sauvegarder en PDF',
      wizardBtn: 'Vérifier Vos Remorques',
    },
  },

  de: {
    header: {
      badge: 'Wirtschaftlichkeitsmodell',
      title: 'TCO-Prüfkostenrechner für Hochdrucktrailer',
      desc: 'Berechnen Sie die kumulierten Zusatzkosten eines prüfpflichtigen DGRL Kategorie IV Trailers im Vergleich zu einem prüffreien Modell (≤ 2 Liter SEP).',
    },
    inputs: {
      title: 'Parameter Eingeben',
      subtitle: 'Passen Sie die Eingabewerte an Ihre betrieblichen Rahmendaten an:',
      machineCount: 'Anzahl Hochdrucktrailer im Fuhrpark',
      years: 'Betriebszeitraum (Jahre)',
      kvi: 'Prüfung vor Inbetriebnahme pro Hochdrucktrailer',
      kviHelp: 'Gebühren der akkreditierten Überwachungsstelle (EDTC, Luxcontrol, NL-CBI) vor Erstinbetriebnahme.',
      periodic: 'Wiederkehrende Prüfung (pro Intervall und Trailer)',
      periodicHelp: 'Gutachtergebühren für Wasserdruckprobe und Sicherheitsventilprüfung.',
      downtimeDays: 'Stillstandstage pro Prüfungsdurchlauf',
      downtimeDaysHelp: 'Arbeitstage, an denen der Trailer wegen Transport und Begutachtung nicht einsatzbereit ist.',
      downtimeCost: 'Stillstandskosten pro Arbeitstag (€ / Tag)',
      downtimeCostHelp: 'Lohnkosten für Ausfallzeiten des Reinigungsteams, Ersatzmiete und entgangener Umsatz.',
      partsMarkup: 'Jährlicher Aufschlag für Original-Ersatzteile (€ / Jahr)',
      partsMarkupHelp: 'Mehrpreis herstellergebundener Schläuche und Lanzen gegenüber zertifizierter Universalware.',
    },
    results: {
      savingsTitle: 'Gesamtersparnis mit Prüffreiem Trailer (SEP ≤ 2L)',
      savingsSubtitle: 'Über den gewählten Zeitraum für die gesamte Flotte',
      cat4Title: 'Gesamtkosten DGRL Kategorie IV',
      cat4Subtitle: 'Prüfgebühren, Ausfalltage und Ersatzteilbindung',
      sepTitle: 'Gesamtkosten Prüffreier Trailer (SEP)',
      sepSubtitle: '0 € gesetzliche Prüfgebühren und volle Teilefreiheit',
      kviTotal: 'Prüfung vor Inbetriebnahme',
      periodicTotal: 'Wiederkehrende Prüfungen',
      downtimeTotal: 'Ausfall- & Stillstandskosten',
      partsTotal: 'Mehrkosten Originalteile',
    },
    table: {
      title: 'Kumulierte Kostenentwicklung je Betriebsjahr',
      desc: 'Detaillierte Jahresübersicht der anfallenden Betriebskosten:',
      yearCol: 'Jahr',
      kviCol: 'Abnahme',
      periodicCol: 'Prüfung',
      downtimeCol: 'Stillstand',
      partsCol: 'Ersatzteile',
      cumulativeCol: 'TCO Kumuliert',
      totalRow: 'Gesamt',
    },
    advisory: {
      title: 'Betriebswirtschaftliche & Rechtliche Einordnung',
      p1: 'Viele Einkäufer blicken ausschließlich auf den Anschaffungspreis. Bei einem Kategorie-IV-Trailer summieren sich Prüfgebühren, Stillstandsausfälle und teure Originalschläuche über 6 bis 10 Jahre jedoch auf mehr als 50% des Neupreises.',
      p2: 'Mit einem Hochdrucktrailer ≤ 2 Liter (Art. 4 Abs. 3 DGRL) werden diese Kosten vollständig eingespart – bei voller Reinigungs- und Dampfleistung.',
      printBtn: 'Drucken / Als PDF Speichern',
      wizardBtn: 'Anlage Jetzt Prüfen',
    },
  },

  en: {
    header: {
      badge: 'Lifecycle Economic Model',
      title: 'TCO Inspection Cost Calculator for High-Pressure Trailers',
      desc: 'Calculate the cumulative lifecycle cost difference between a statutory PED Category IV trailer and an inspection-exempt unit (≤ 2 Litres SEP).',
    },
    inputs: {
      title: 'Simulation Parameters',
      subtitle: 'Customise values to mirror your fleet profile and business operational costs:',
      machineCount: 'Number of high-pressure trailers in fleet',
      years: 'Operating lifecycle period (years)',
      kvi: 'Pre-commissioning audit cost per trailer',
      kviHelp: 'Fees charged by accredited inspection bodies prior to initial on-site deployment.',
      periodic: 'Periodic statutory recertification audit fee (per cycle per trailer)',
      periodicHelp: 'Inspection fees for mandatory hydrostatic pressure tests and safety valve calibration.',
      downtimeDays: 'Operational downtime days per audit',
      downtimeDaysHelp: 'Working days lost to equipment transport, inspection scheduling, and certificate issuance.',
      downtimeCost: 'Downtime cost per day (€ / day)',
      downtimeCostHelp: 'Crew idle payroll, temporary rental equipment, and daily lost cleaning revenue.',
      partsMarkup: 'Annual proprietary OEM spare parts markup (€ / year)',
      partsMarkupHelp: 'Premium paid for mandatory proprietary hoses/lances vs universal certified alternatives.',
    },
    results: {
      savingsTitle: 'Total Savings with Inspection-Exempt (SEP ≤ 2L)',
      savingsSubtitle: 'Across the selected operational period for your entire fleet',
      cat4Title: 'Total Statutory Category IV Overhead',
      cat4Subtitle: 'Audit fees, crew downtime, and mandatory OEM parts lock-in',
      sepTitle: 'Total Inspection-Exempt (SEP) Overhead',
      sepSubtitle: '€ 0 statutory fees and complete component procurement freedom',
      kviTotal: 'Pre-commissioning audit',
      periodicTotal: 'Recurrent statutory audits',
      downtimeTotal: 'Downtime & lost revenue',
      partsTotal: 'OEM spare parts markup',
    },
    table: {
      title: 'Cumulative Yearly Cost Breakdown',
      desc: 'Granular progression of operational overhead per year:',
      yearCol: 'Year',
      kviCol: 'Comm.',
      periodicCol: 'Recert.',
      downtimeCol: 'Downtime',
      partsCol: 'OEM Parts',
      cumulativeCol: 'Cumulative TCO',
      totalRow: 'Total',
    },
    advisory: {
      title: 'Strategic Procurement Takeaways',
      p1: 'Procurement teams often evaluate solely upfront purchase quotes. For Category IV machinery, cumulative in-service inspection fees, crew downtime, and proprietary hose costs frequently exceed 50% of original machine purchase price over 6 to 10 years.',
      p2: 'Investing in high-pressure trailers engineered strictly ≤ 2 litres (Art. 4.3 SEP) permanently eliminates these operational liabilities without compromising cleaning throughput.',
      printBtn: 'Print / Save as PDF',
      wizardBtn: 'Check Your Machine',
    },
  },
};

export function getTcoTranslations(lang: SiteLanguage): TcoTranslation {
  return TCO_TRANSLATIONS[lang] || TCO_TRANSLATIONS.nl;
}
