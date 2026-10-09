import { SiteLanguage } from '../types';

export interface KeuringenTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  p1: {
    badge: string;
    title: string;
    desc: string;
    listTitle: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
  };
  p2: {
    badge: string;
    title: string;
    desc: string;
    listTitle: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    intervalNote: string;
  };
  p3: {
    badge: string;
    title: string;
    desc: string;
    boxTitle: string;
    boxP1: string;
    boxP2: string;
  };
  sanctions: {
    badge: string;
    title: string;
    desc: string;
    c1Badge: string;
    c1Title: string;
    c1Desc: string;
    c2Badge: string;
    c2Title: string;
    c2Desc: string;
    c3Badge: string;
    c3Title: string;
    c3Desc: string;
  };
  callout: {
    badge: string;
    title: string;
    desc: string;
    btnWizard: string;
    btnTco: string;
  };
}

export const KEURINGEN_TRANSLATIONS: Record<SiteLanguage, KeuringenTranslation> = {
  nl: {
    header: {
      badge: 'Exploitatie & Keuringsregime',
      title: 'Keuring voor Ingebruikname (KvI), Herkeuringen en Merkplicht',
      desc: 'Indien een stoom-hogedrukinstallatie valt onder PED Categorie IV, stellen de nationale wetgevingen in de Benelux zware operationele eisen aan de gebruiker. Hieronder vindt u de drie belangrijkste verplichtingen in detail uitgelegd.',
    },
    p1: {
      badge: 'Eerste Werkdag Verplichting',
      title: '1. Keuring voor Ingebruikname (KvI)',
      desc: 'Vóórdat een Categorie IV-installatie op de werkplek gebruikt mag worden, dient een erkende inspectie-instelling (NL-CBI zoals TÜV, Dekra, Kiwa in NL, of EDTC zoals Vinçotte in BE) de opstelling en veiligheden ter plaatse te inspecteren. Pas na afgifte van de officiële verklaring van ingebruikneming is inzet wettelijk toegestaan.',
      listTitle: 'Wat toetst de inspecteur tijdens de KvI?',
      item1: 'Veilige opstelling van de machine ten opzichte van werknemers, verkeersroutes en publiek',
      item2: 'Correcte afvoer van overdruk en ongehinderde, veilige afblaas van de gecertificeerde veiligheidsklep',
      item3: 'Aanwezigheid en geteste werking van noodstop-, watergebrek- en temperatuurbewakingsschakelingen',
      item4: 'Compleetheid van het wettelijke constructiedossier en EU-conformiteitsverklaring van het samenstel',
      item5: 'Verificatie van de beproevingsdruk (hydrostatische test) en conformiteit met PED 2014/68/EU',
    },
    p2: {
      badge: 'Terugkerende Periodieke Verplichting',
      title: '2. Periodieke Herkeuring (elke 12–24 maanden)*',
      desc: 'Voor Categorie IV stoominstallaties geldt een wettelijke herkeuringsplicht (24 maanden in NL, jaarlijks in BE). De machine moet buiten bedrijf worden gesteld voor een grondig in- en uitwendig onderzoek.',
      listTitle: 'Wat omvat de periodieke herkeuring?',
      item1: 'Hydrostatische druktest (afpersen) van de verwarmingsspiraal tot 1,43x de maximale werkdruk',
      item2: 'Visuele inwendige inspectie op corrosie, ketelsteenvorming en thermische materiaalmoeheid',
      item3: 'Demontage en beproeving van de veerbelaste veiligheidsklep op een geaccrediteerde testbank',
      item4: 'Controle van branderveiligheden, vlambewaking en thermische uitschakeling',
      intervalNote: '* Interval: 24 maanden in Nederland (WBDA 2016), jaarlijks in België (Codex Welzijn). De stilstand bedraagt gemiddeld 2 werkdagen per beurt.',
    },
    p3: {
      badge: 'Strikte Merkgebondenheid',
      title: '3. Verbod op Universele Onderdelen (Vendor Lock-in)',
      desc: 'Bij een Categorie IV hogedruktrailer zijn de specifieke hogedrukslangen, lansen en ventielen onderdeel van de samenstelcertificering. Vervanging door niet-gecertificeerde universele delen laat de certificering direct vervallen.',
      boxTitle: 'Juridisch Gevolg van Niet-Originele Onderdelen',
      boxP1: 'Monteert u een universele slang van een lokale toeleverancier? Dan geldt dit juridisch als een ongeautoriseerde wijziging van het samenstel. Het CE-certificaat vervalt formeel met onmiddellijke ingang.',
      boxP2: 'De machine is vanaf dat moment illegaal in bedrijf. Bij een eventuele slangbreuk met letsel weigert de bedrijfsaansprakelijkheidsverzekering dekking vanwege grove nalatigheid.',
    },
    sanctions: {
      badge: 'Handhaving & Risico’s',
      title: 'Gevolgen van Niet-Naleving bij Arbeidsinspectie-Controle',
      desc: 'De arbeidsinspectiediensten in de Benelux (NLA, FOD WASO, ITM) controleren actief op werven en bij gevel- en straatreiniging:',
      c1Badge: 'SANCTIE 1',
      c1Title: 'Directe Stillegging & Verzegeling',
      c1Desc: 'De inspecteur legt direct een bevel tot stillegging op. De hogedruktrailer wordt verzegeld en mag de werf niet meer verlaten tot een geldige goedkeuring voorligt.',
      c2Badge: 'SANCTIE 2',
      c2Title: 'Bestuurlijke Boete / Economisch Delict',
      c2Desc: 'Inzet zonder geldige keuring geldt als economisch delict of zwaar misdrijf tegen het arbeidsrecht. Boetes lopen op tot tienduizenden euro’s voor directie en eigenaar.',
      c3Badge: 'SANCTIE 3',
      c3Title: 'Verlies van Verzekeringsdekking',
      c3Desc: 'Veroorzaakt een ongekeurde machine brand- of letselschade? Dan stelt de verzekeraar regres in en verhaalt alle schadevergoedingen integraal op de directie.',
    },
    callout: {
      badge: 'Voorkom Verrassingen',
      title: 'Wilt u uw machinepark vrijwaren van deze risico’s?',
      desc: 'Ontdek hoe hogedruktrailers met een branderinhoud ≤ 2L (SEP) 100% vrijgesteld blijven van al deze operationele keuringsplichten.',
      btnWizard: 'Check Uw Machine',
      btnTco: 'Bereken Keuringskosten in TCO',
    },
  },

  fr: {
    header: {
      badge: 'Exploitation & Régime d’Inspection',
      title: 'Visite de Mise en Service, Contrôles Périodiques et Captivité des Pièces',
      desc: 'Lorsqu’une installation vapeur haute pression relève de la DESP Catégorie IV, les législations nationales du Benelux imposent des contraintes d’exploitation lourdes à l’employeur. Voici les trois piliers légaux détaillés.',
    },
    p1: {
      badge: 'Obligation Avant Tout Premier Travail',
      title: '1. Visite Obligatoire de Mise en Service',
      desc: 'Avant qu’une installation de Catégorie IV ne soit déployée sur chantier, un organisme d’inspection agréé (EDTC comme Vinçotte ou Apragaz en Belgique, NL-CBI aux Pays-Bas, Luxcontrol à Luxembourg) doit inspecter l’installation sur site. Seule la délivrance de l’attestation de contrôle autorise légalement son exploitation.',
      listTitle: 'Que vérifie l’inspecteur lors de la visite initiale ?',
      item1: 'Positionnement sécurisé de l’appareil par rapport aux travailleurs, circulations et public',
      item2: 'Évacuation sans entrave et décharge sécurisée de la soupape de sûreté tarée et plombée',
      item3: 'Présence et fonctionnement vérifié des arrêts d’urgence, sécurités manque d’eau et limiteurs de température',
      item4: 'Complétude du dossier technique fabricant, certificats NoBo et Déclaration UE de Conformité de l’ensemble',
      item5: 'Vérification de la pression d’épreuve hydrostatique et de la conformité aux normes DESP 2014/68/UE',
    },
    p2: {
      badge: 'Obligation Périodique Récurrente',
      title: '2. Contrôles Périodiques Récurrents (tous les 12 à 24 mois)*',
      desc: 'Pour les chaudières mobiles Catégorie IV, un contrôle récurrent est imposé (annuel en Belgique sous le Codex, tous les 24 mois aux Pays-Bas). L’appareil doit être immobilisé pour des examens approfondis.',
      listTitle: 'Que comprend le contrôle périodique obligatoire ?',
      item1: 'Épreuve sous pression hydrostatique du serpentin jusqu’à 1,43 fois la pression de service maximale',
      item2: 'Examen visuel interne et externe (recherche de corrosion, entartrage et fatigue thermique)',
      item3: 'Démontage et contrôle sur banc d’essai étalonné de la soupape de sûreté à ressort',
      item4: 'Contrôle des chaînes de sécurité du brûleur, cellules de flamme et thermostats de coupure',
      intervalNote: '* Fréquence : Annuelle en Belgique (Codex Bien-être), tous les 24 mois aux Pays-Bas (WBDA 2016). L’arrêt d’exploitation moyen est de 2 jours ouvrés par session.',
    },
    p3: {
      badge: 'Captivité des Pièces Détachées',
      title: '3. Interdiction des Flexibles Universels (Vendor Lock-in)',
      desc: 'Sur une remorque Catégorie IV, les flexibles haute pression, lances et organes de régulation font partie intégrante de l’homologation de l’ensemble. Les remplacer par des pièces universelles annule immédiatement le certificat.',
      boxTitle: 'Conséquence Juridique de Pièces Non-Constructeur',
      boxP1: 'Si vous montez un flexible universel acheté chez un distributeur local, cela constitue juridiquement une modification non autorisée de l’ensemble certifié. Le certificat CE de l’ensemble devient caduc sur-le-champ.',
      boxP2: 'La remorque fonctionne dès lors illégalement. En cas de rupture avec blessure corporelle par projection de vapeur, la compagnie d’assurance décline toute couverture pour faute inexcusable.',
    },
    sanctions: {
      badge: 'Contrôles & Sanctions',
      title: 'Conséquences en Cas de Contrôle de l’Inspection du Travail',
      desc: 'Les services d’inspection du travail (SPF Emploi en BE, NLA aux Pays-Bas, ITM au Luxembourg) contrôlent activement les chantiers de nettoyage :',
      c1Badge: 'SANCTION 1',
      c1Title: 'Arrêt de Chantier Immédiat & Mise sous Scellés',
      c1Desc: 'L’inspecteur ordonne la cessation immédiate d’activité. La remorque est mise sous scellés et ne peut plus travailler avant la délivrance d’un rapport conforme.',
      c2Badge: 'SANCTION 2',
      c2Title: 'Amende Administrative & Poursuites Pénales',
      c2Desc: 'Travailler sans rapport d’inspection valide constitue une infraction pénale majeure à la législation du travail. Les amendes atteignent plusieurs dizaines de milliers d’euros.',
      c3Badge: 'SANCTION 3',
      c3Title: 'Déchéance de Couverture d’Assurance',
      c3Desc: 'Si un appareil non contrôlé cause un incendie ou des brûlures, l’assureur refuse l’indemnisation et engage un recours contre le dirigeant à titre personnel.',
    },
    callout: {
      badge: 'Évitez les Mauvaises Surprises',
      title: 'Voulez-vous préserver votre flotte de ces contraintes ?',
      desc: 'Découvrez comment les remorques haute pression à brûleur ≤ 2L (SEP) restent 100% exemptées de toute visite de mise en service et de contrôles récurrents.',
      btnWizard: 'Vérifier Vos Remorques',
      btnTco: 'Calculer les Coûts dans le TCO',
    },
  },

  de: {
    header: {
      badge: 'Betriebsphase & Prüfregime',
      title: 'Prüfung vor Inbetriebnahme, Wiederkehrende Prüfungen und Herstellerbindung',
      desc: 'Fällt eine Hochdruck-Dampfanlage unter DGRL Kategorie IV, verlangen die nationalen Vorschriften im Benelux-Raum erhebliche Pflichten vom Betreiber. Nachfolgend sind die drei zentralen Säulen im Detail erläutert.',
    },
    p1: {
      badge: 'Pflicht vor dem Ersten Arbeitstag',
      title: '1. Gesetzliche Prüfung vor Inbetriebnahme',
      desc: 'Bevor eine Kategorie-IV-Anlage am Arbeitsplatz genutzt werden darf, muss eine zugelassene Überwachungsstelle (EDTC wie Vinçotte in BE, Luxcontrol in LU, NL-CBI in NL) Aufstellung und Sicherheitseinrichtungen vor Ort abnehmen. Erst mit dem offiziellen Prüfbericht ist der Betrieb legal.',
      listTitle: 'Was prüft der Sachverständige bei der Erstabnahme?',
      item1: 'Sichere Aufstellung des Hochdrucktrailers zu Mitarbeitern, Verkehrswegen und Passanten',
      item2: 'Gefahrlose Abblaseleitung und sichere Ableitung des geprüften Sicherheitsventils',
      item3: 'Funktionsprüfung von Not-Aus, Wassermangelsicherung und Sicherheitstemperaturbegrenzer',
      item4: 'Vollständigkeit der Hersteller-Konformitätsakte und EU-Konformitätserklärung der Baugruppe',
      item5: 'Nachweis der hydrostatischen Druckprüfung nach europäischen DGRL-Standards',
    },
    p2: {
      badge: 'Wiederkehrende Gesetzliche Pflicht',
      title: '2. Wiederkehrende Prüfungen (alle 12–24 Monate)*',
      desc: 'Für mobile Dampfanlagen der Kategorie IV gilt eine gesetzliche Nachprüfpflicht (in BE jährlich, in NL alle 24 Monate). Die Anlage muss für gründliche Prüfungen außer Betrieb genommen werden.',
      listTitle: 'Was umfasst die wiederkehrende Prüfung?',
      item1: 'Wasserdruckprobe der Heizspirale mit dem 1,43-fachen des maximalen Betriebsdrucks',
      item2: 'Visuelle innere und äußere Inspektion auf Korrosion, Kesselstein und thermische Ermüdung',
      item3: 'Ausbau und Prüfstandsprüfung des federbelasteten Sicherheitsventils',
      item4: 'Überprüfung der Brenner-Sicherheitskette, Flammenüberwachung und Temperaturbegrenzung',
      intervalNote: '* Prüffrist: Jährlich in Belgien (Codex), alle 24 Monate in den Niederlanden (WBDA 2016). Der Betriebsstillstand beträgt im Schnitt 2 Arbeitstage je Prüfung.',
    },
    p3: {
      badge: 'Strikte Herstellerbindung',
      title: '3. Verbot von Universalschläuchen (Vendor Lock-in)',
      desc: 'Bei einem Kategorie-IV-Trailer sind die Hochdruckschläuche und Lanzen integraler Bestandteil der Baugruppenzertifizierung. Der Einsatz von markenfremden Universalschläuchen lässt die Zulassung erlöschen.',
      boxTitle: 'Rechtliche Folge von Nicht-Originalteilen',
      boxP1: 'Montieren Sie einen Universalschlauch eines lokalen Händlers, gilt dies rechtlich als unzulässige Änderung der Baugruppe. Das CE-Zertifikat erlischt mit sofortiger Wirkung.',
      boxP2: 'Der Hochdrucktrailer wird ab diesem Moment illegal betrieben. Kommt es zu einem Schlauchplatzer mit Personenschaden, verweigert die Betriebshaftpflichtversicherung jegliche Leistung wegen grober Fahrlässigkeit.',
    },
    sanctions: {
      badge: 'Überwachung & Sanktionen',
      title: 'Folgen bei Kontrollen durch die Arbeitsinspektion',
      desc: 'Die Aufsichtsbehörden im Benelux-Raum (ITM in Luxemburg, Arbeitsinspektion in BE, NLA in NL) kontrollieren Baustellen und Reinigungsbetriebe regelmäßig:',
      c1Badge: 'SANKTION 1',
      c1Title: 'Sofortige Stilllegung & Versiegelung',
      c1Desc: 'Die Behörde ordnet den sofortigen Arbeitsstopp an. Der Hochdrucktrailer wird versiegelt und darf nicht mehr betrieben werden, bis eine gültige Abnahme vorliegt.',
      c2Badge: 'SANKTION 2',
      c2Title: 'Bußgelder & Strafverfahren',
      c2Desc: 'Der Betrieb ohne gültige Prüfung gilt als schwere Ordnungswidrigkeit bzw. Straftat gegen das Arbeitsschutzrecht. Bußgelder im fünfstelligen Bereich drohen Betreibern und Geschäftsführern.',
      c3Badge: 'SANKTION 3',
      c3Title: 'Verlust des Versicherungsschutzes',
      c3Desc: 'Verursacht eine ungeprüfte Anlage Brand- oder Verbrühungsschäden, nimmt die Versicherung Regress und fordert alle Entschädigungsleistungen vom Betreiber zurück.',
    },
    callout: {
      badge: 'Böses Erwachen Vermeiden',
      title: 'Möchten Sie Ihren Fuhrpark vor diesen Risiken schützen?',
      desc: 'Erfahren Sie, wie Hochdrucktrailer mit Brenner ≤ 2L (SEP) zu 100% von all diesen Abnahmen und Wiederholungsprüfungen befreit bleiben.',
      btnWizard: 'Geräte Jetzt Prüfen',
      btnTco: 'Kosten im TCO Berechnen',
    },
  },

  en: {
    header: {
      badge: 'In-Service Operations & Audit Regimes',
      title: 'Pre-Commissioning Audits, Recurrent Inspections & Component Freedom',
      desc: 'When an industrial steam or high-pressure thermal installation is classified under PED Category IV, European Member State occupational health & safety directives impose strict operational obligations on the owner. Below are the three core statutory pillars explained in detail.',
    },
    p1: {
      badge: 'First-Day Operational Prerequisite',
      title: '1. Mandatory Pre-Commissioning Inspection',
      desc: 'Before any Category IV assembly can be operated on European job sites, an accredited national inspection body (such as TÜV in Germany, Dekra in the Netherlands, Vinçotte in Belgium, or APAVE in France) must conduct an on-site safety examination. Only upon issuance of a formal written commissioning certificate is deployment legally permitted under national workplace regulations.',
      listTitle: 'Key elements audited by accredited inspectors during commissioning:',
      item1: 'Safe machine positioning relative to personnel, traffic pathways, and public zones',
      item2: 'Unobstructed, safe discharge piping from the certified safety relief valves',
      item3: 'Functionality of emergency stops, low-water cut-offs, and high-temperature limiters',
      item4: 'Completeness of the manufacturer technical file, NoBo module certificates, and EU Declaration of Conformity',
      item5: 'Verification of test pressure records (hydrostatic test) under PED 2014/68/EU standards',
    },
    p2: {
      badge: 'Recurrent Statutory Obligation',
      title: '2. Mandatory Recurrent Inspections (every 12–24 months)*',
      desc: 'Once approved, Category IV steam trailers remain subject to mandatory recurrent audits throughout their working life. The machine must be taken out of commercial service for thorough internal and external inspection.',
      listTitle: 'What does recurrent statutory recertification entail?',
      item1: 'Hydrostatic pressure re-testing of the coil to 1.43x design pressure',
      item2: 'Visual internal examination for scale, internal pitting, and thermal fatigue',
      item3: 'Bench recalibration and pop-testing of spring-loaded safety relief valves',
      item4: 'Safety interlock verification for burner shut-off upon low water flow',
      intervalNote: '* Recertification intervals differ per country: 24 months in the Netherlands, annually in Belgium, 1–3 years in Germany. Operational team downtime averages 2 working days per audit.',
    },
    p3: {
      badge: 'Component Freedom & Lock-in',
      title: '3. OEM Spare Parts Exclusivity (Vendor Lock-in)',
      desc: 'Because a Category IV unit is CE-certified as an integral assembly, all pressure-containing hoses, lances, and valves form part of the legal approval. Substituting non-OEM universal components legally voids certification.',
      boxTitle: 'The Statutory Danger of Non-OEM Replacement Hoses',
      boxP1: 'If a worn-out hose is replaced with a universal certified hose from an independent supplier, that installation legally constitutes an unapproved assembly modification under Article 24 of WBDA / equivalent European laws. The CE assembly certification is rendered immediately void.',
      boxP2: 'The high-pressure trailer is operating illegally from that moment onward. If a burst occurs causing injury, the insurer will deny all indemnity coverage on grounds of gross negligence and illegal machine alteration.',
    },
    sanctions: {
      badge: 'Enforcement & Sanctions',
      title: 'Direct Consequences of Labour Inspectorate Enforcement',
      desc: 'European labour inspectorates actively inspect surface cleaning, chewing gum removal, and facade washing crews on urban job sites:',
      c1Badge: 'SANCTION 1',
      c1Title: 'Immediate Operational Shutdown & Sealing',
      c1Desc: 'Inspectors issue an immediate stop-work order. The uncertified trailer is physically sealed on site and cannot be deployed until an accredited audit body signs off.',
      c2Badge: 'SANCTION 2',
      c2Title: 'Statutory Criminal Offence & Heavy Fines',
      c2Desc: 'Operating an uncertified Category IV pressure installation constitutes an economic offence and criminal breach of workplace safety laws. Fines range into tens of thousands of euros.',
      c3Badge: 'SANCTION 3',
      c3Title: 'Total Nullification of Insurance Cover',
      c3Desc: 'Should an uncertified trailer burst or cause third-party scalding injuries, commercial insurance will refuse all claims, exposing company directors to personal civil liability.',
    },
    callout: {
      badge: 'Avoid Operational Surprises',
      title: 'Want to protect your business from these operational risks?',
      desc: 'Discover how high-pressure trailers engineered with burner coils ≤ 2L (SEP) are 100% exempt from all statutory commissioning and reinspection burdens.',
      btnWizard: 'Check Your Machine',
      btnTco: 'Calculate TCO Differences',
    },
  },
};

export function getKeuringenTranslations(lang: SiteLanguage): KeuringenTranslation {
  return KEURINGEN_TRANSLATIONS[lang] || KEURINGEN_TRANSLATIONS.nl;
}
