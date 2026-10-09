import { SiteLanguage } from '../types';

export interface InternationalTranslation {
  euBanner: {
    badge: string;
    text: string;
    button: string;
  };
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  principle: {
    badge: string;
    title: string;
    box1Title: string;
    box1Text: string;
    box2Title: string;
    box2Text: string;
    insightTitle: string;
    insightText: string;
  };
  filters: {
    all: string;
    europe: string;
    northAmerica: string;
    apac: string;
    searchPlaceholder: string;
  };
  table: {
    badge: string;
    title: string;
    source: string;
    colCountry: string;
    colLaw: string;
    colBody: string;
    colCert: string;
    colInterval: string;
    clickHint: string;
  };
  dossier: {
    badge: string;
    detailsSuffix: string;
    box1Title: string;
    box1Standard: string;
    box1Bodies: string;
    box1Procedure: string;
    box1Permit: string;
    box2Title: string;
    box2Penalties: string;
    box2Risk: string;
    box3Title: string;
  };
  transatlantic: {
    badge: string;
    title: string;
    c1Title: string;
    c1Text: string;
    c2Title: string;
    c2Text: string;
    c3Title: string;
    c3Text: string;
    compareTitle: string;
    compareText: string;
  };
  takeaway: {
    badge: string;
    title: string;
    desc: string;
    c1Title: string;
    c1Text: string;
    c2Title: string;
    c2Text: string;
    c3Title: string;
    c3Text: string;
    c4Title: string;
    c4Text: string;
    summary: string;
    btnMatrix: string;
    btnTco: string;
    btnWizard: string;
  };
}

export const INTERNATIONAL_TRANSLATIONS: Record<SiteLanguage, InternationalTranslation> = {
  nl: {
    euBanner: {
      badge: 'Internationale & Europese Portaalversie',
      text: 'Bekijk alle pan-Europese richtlijnen en landenspecifieke wetgevingen in het Engels op High-Pressure-Steam Inspection.',
      button: 'Naar EU-versie (EN)',
    },
    header: {
      badge: 'Wereldwijde & Pan-Europese Drukapparatuur Vergelijking',
      title: 'Keuringswetgeving Drukapparatuur Buiten Nederland',
      desc: 'Hoe verhouden de inspectieplichten in Duitsland, België, Frankrijk, het Verenigd Koninkrijk, de Verenigde Staten (ASME/NBIC), Canada (CSA B51) en Australië zich tot het Nederlandse WBDA 2016? Een diepgaande vergelijking van internationale inspectieregimes, keuringsorganen en de wereldwijde impact van het ketelvolume.',
    },
    principle: {
      badge: 'Het Juridische Subsidiariteitsbeginsel & Nationale Soevereiniteit',
      title: 'Waarom Wijken Keuringstermijnen Wereldwijd Af?',
      box1Title: 'Fabricage & Markttoelating (Geharmoniseerd)',
      box1Text: 'Binnen de EU harmoniseert de PED 2014/68/EU het op de markt brengen van drukapparatuur. In Noord-Amerika vervult de ASME Boiler and Pressure Vessel Code (BPVC) een vergelijkbare rol voor ontwerp en fabricagestempels (S, U, M). De classificatiecriteria (bijv. Categorie IV in Europa) zijn tijdens fabricage overal identiek.',
      box2Title: 'Gebruiksfase & Exploitatie (Nationaal / Statelijk Bepaald)',
      box2Text: 'De gebruiksfase (periodieke herkeuringen, bevoegdheden van inspecteurs, termijnen en exploitatiecertificaten) is nooit internationaal geharmoniseerd. In Nederland geldt een 2-jaarlijkse cyclus (WBDA), in België standaard 12 maanden (Codex), in Duitsland een complexe 1/3-jaars cyclus (BetrSichV) en in de VS en Canada een verplicht jaarlijks Certificate of Operation onder het NBIC (NB-23) en CSA B51.',
      insightTitle: 'Cruciaal inzicht voor machinebouwers en internationale aannemers:',
      insightText: 'Een CE-markering of ASME-stempel geeft uitsluitend het recht om een machine te verkopen of in te voeren. Zodra de stekker in het stopcontact gaat of de brander ontsteekt, treedt de lokale exploitatiewetgeving van het betreffende land in werking.',
    },
    filters: {
      all: 'Alle Regio\'s',
      europe: 'Europa (6)',
      northAmerica: 'Noord-Amerika (2)',
      apac: 'Azië-Pacific (1)',
      searchPlaceholder: 'Zoek land, wet of norm...',
    },
    table: {
      badge: 'Internationale Vergelijkingstabel',
      title: 'Vergelijking: Keuringsregimes Zware Drukapparatuur / Stoomketels',
      source: 'Bijgewerkt conform vigerende nationale & statelijke wetgeving',
      colCountry: 'Land & Regio',
      colLaw: 'Wettelijk Kader & Norm',
      colBody: 'Inspectieorgaan',
      colCert: 'Document bij Ingebruikname',
      colInterval: 'Herkeuringstermijn',
      clickHint: 'Klik op een rij in de tabel om het volledige juridische landendossier hieronder te openen.',
    },
    dossier: {
      badge: 'Landendossier',
      detailsSuffix: 'Regelgeving in Detail',
      box1Title: 'Wettelijk Reglementair Kader & Norm',
      box1Standard: 'Toegepaste Technische Code: ',
      box1Bodies: 'Aangewezen Inspectieorganen',
      box1Procedure: 'Procedure Vóór Eerste Ingebruikname',
      box1Permit: 'Vereist exploitatiebewijs: ',
      box2Title: 'Inspectiefrequentie & Werkwijze (Grote Stoomapparatuur)',
      box2Penalties: 'Handhaving & Boeteregime',
      box2Risk: 'Specifiek Risico voor Internationale / Grensoverschrijdende Inzet',
      box3Title: 'Drempelwaarden & Volumevrijstellingen in',
    },
    transatlantic: {
      badge: 'Speciale Focus: Noord-Amerika',
      title: 'Hoe Werkt Stoom- en Drukwetgeving in de VS en Canada?',
      c1Title: '1. ASME BPVC (Fabricage)',
      c1Text: 'In de VS en Canada is het ontwerp en de fabricage van ketels en vaten gebaseerd op de ASME Boiler and Pressure Vessel Code. Een hogedruk stoomgenerator valt onder Section I (Power Boilers). De fabrikant moet beschikken over een geaccrediteerde ASME \'S\'-stempel of \'M\'-stempel en de apparatuur registreren bij The National Board.',
      c2Title: '2. NBIC NB-23 (In-Service Keuring)',
      c2Text: 'Zodra de ketel in bedrijf is, geldt de National Board Inspection Code (NBIC / NB-23 Deel 2). In vrijwel alle Amerikaanse staten is een jaarlijkse inspectie (elke 12 maanden) wettelijk verplicht door een gecommitteerde National Board Inspector.',
      c3Title: '3. Canada: Het CRN Systeem & CSA B51',
      c3Text: 'Canada hanteert daarnaast het strikte Canadian Registration Number (CRN) systeem. Elk drukvat, afsluiter en veiligheidsklep moet per provincie geregistreerd zijn. Zonder geldig CRN-stempel is ingebruikname een zware overtreding.',
      compareTitle: 'Vergelijking: De Europese 2-Liter Grens vs. Amerikaanse "Coil Washer" Vrijstellingen',
      compareText: 'In Europa stelt Artikel 4 lid 3 van de PED warmtewisselaars ≤ 2 liter categorisch vrij van Notified Body keuring en periodieke stoomketelwetgeving (SEP). In de Verenigde Staten hanteren de meeste deelstaten een soortgelijke uitzondering voor zgn. "Coil-type forced-circulation water heaters or steam cleaners without a steam drum".',
    },
    takeaway: {
      badge: 'Strategisch Inkoop- & Exportvoordeel',
      title: 'Waarom Minimale Waterinhoud Hét Paspoort Is voor Wereldwijde Inzet',
      desc: 'Voor reinigingsbedrijven, industriële aannemers en machinefabrikanten die over landsgrenzen opereren levert een zware stoomketel (in Europa > 2 liter, PED Categorie IV; in de VS een reguliere Power Boiler) een astronomische administratieve en operationele last op:',
      c1Title: '🇳🇱 Nederland',
      c1Text: 'KvI-keuring vóór ingebruikneming en elke 24 maanden herkeuring door een NL-CBI (WBDA 2016).',
      c2Title: '🇩🇪 Duitsland',
      c2Text: 'Exploitatievergunning (Erlaubnis) Gewerbeaufsicht + jaarlijks ZÜS (TÜV/DEKRA) toezicht.',
      c3Title: '🇧🇪 België',
      c3Text: 'Standaard jaarlijkse herkeuring door een EDTC (Vinçotte, BTV, Apragaz) conform de Codex.',
      c4Title: '🇺🇸 USA / 🇨🇦 Canada',
      c4Text: 'Jaarlijkse inspectie door National Board / TSSA inspecteur voor een geldig Certificate of Operation.',
      summary: 'Kiest u daarentegen voor geavanceerde apparatuur met een continu doorstroomspiraal onder de 2 liter (Artikel 4 lid 3 PED / SEP in Europa en binnen de coil-vrijstellingsdrempels in de VS), dan is de installatie in vrijwel alle westerse jurisdicties vrijgesteld van het zware stoomketelregime. U mag direct aan de slag zonder lokale keuringstrajecten of vergunningen.',
      btnMatrix: 'Bekijk de Technische 2-Liter Matrix',
      btnTco: 'Bereken Financiële Voordelen in TCO Tool',
      btnWizard: 'Start 30-Sec Wetgevingscheck',
    },
  },

  fr: {
    euBanner: {
      badge: 'Portail International & Européen',
      text: 'Consultez l’ensemble des directives pan-européennes et législations nationales en anglais sur High-Pressure-Steam Inspection.',
      button: 'Version EU (EN)',
    },
    header: {
      badge: 'Atlas Réglementaire International · Régimes EU & Mondiaux',
      title: 'Réglementation des Équipements Sous Pression Hors Benelux',
      desc: 'Comment s’articulent les obligations d’inspection en Allemagne, Belgique, France, Royaume-Uni, États-Unis (ASME/NBIC), Canada (CSA B51) et Australie ? Analyse technique approfondie des régimes d’inspection en service, organismes notifiés et impact décisif du volume interne.',
    },
    principle: {
      badge: 'Principe Juridique de Subsidiarité & Souveraineté Nationale',
      title: 'Pourquoi les Délais d’Inspection Diffèrent-ils à Travers le Monde ?',
      box1Title: 'Fabrication & Accès au Marché (Harmonisé)',
      box1Text: 'Dans l’UE, la DESP 2014/68/UE harmonise la mise sur le marché des équipements sous pression. En Amérique du Nord, le code ASME (BPVC) remplit un rôle similaire pour la conception et l’estampillage (S, U, M). Les critères de classification (ex. Catégorie IV) sont universellement identiques lors de la fabrication.',
      box2Title: 'Phase Opérationnelle & Exploitation (Juridiction Nationale / Étatique)',
      box2Text: 'La phase d’exploitation (réépreuves périodiques, pouvoirs des inspecteurs, autorisations d’exploitation) n’est jamais harmonisée au niveau international. Les Pays-Bas appliquent un cycle de 24 mois, la Belgique impose un contrôle annuel (Codex Livre IV), l’Allemagne applique un cycle de 1 à 3 ans (BetrSichV), et les USA/Canada exigent un Certificate of Operation annuel sous le NBIC et la norme CSA B51.',
      insightTitle: 'Constat essentiel pour constructeurs et acheteurs internationaux :',
      insightText: 'Le marquage CE ou le poinçon ASME confère uniquement le droit de vendre ou d’importer le matériel. Dès que la machine est raccordée ou que le brûleur s’allume, la législation d’exploitation locale s’applique immédiatement.',
    },
    filters: {
      all: 'Toutes les Juridictions',
      europe: 'Europe (6)',
      northAmerica: 'Amérique du Nord (2)',
      apac: 'Asie-Pacifique (1)',
      searchPlaceholder: 'Rechercher pays, loi ou norme (ex. BetrSichV, ASME, Codex)...',
    },
    table: {
      badge: 'Matrice Comparative Internationale',
      title: 'Comparatif : Régimes de Contrôle Chaudières & Vapeur Haute Pression',
      source: 'Mis à jour selon les codes réglementaires en vigueur',
      colCountry: 'Pays & Région',
      colLaw: 'Cadre Légal & Norme',
      colBody: 'Organisme Agréé',
      colCert: 'Certificat de Mise en Service',
      colInterval: 'Périodicité des Contrôles',
      clickHint: 'Cliquez sur une ligne du tableau pour ouvrir le dossier juridique complet du pays ci-dessous.',
    },
    dossier: {
      badge: 'Dossier Pays',
      detailsSuffix: 'Réglementation Détaillée',
      box1Title: 'Cadre Réglementaire Statutaire & Norme Appliquée',
      box1Standard: 'Code Technique Appliqué : ',
      box1Bodies: 'Organismes d’Inspection Agréés',
      box1Procedure: 'Procédure avant Première Mise en Service',
      box1Permit: 'Titre d’exploitation requis : ',
      box2Title: 'Fréquence d’Inspection & Méthodologie (Catégorie IV)',
      box2Penalties: 'Contrôles & Régime de Sanctions',
      box2Risk: 'Risque Spécifique pour les Chantiers Transfrontaliers',
      box3Title: 'Seuils de Volume & Exemptions en',
    },
    transatlantic: {
      badge: 'Focus Transatlantique : Amérique du Nord',
      title: 'Comment Fonctionnent les Normes Vapeur et Pression aux USA et au Canada ?',
      c1Title: '1. ASME BPVC (Fabrication)',
      c1Text: 'Aux USA et au Canada, la fabrication des générateurs de vapeur est régie par l’ASME Boiler & Pressure Vessel Code. Les générateurs haute pression relèvent de la Section I (Power Boilers). Le fabricant doit détenir les timbres ASME « S » ou « M » et enregistrer le matériel auprès du National Board.',
      c2Title: '2. NBIC NB-23 (Contrôle en Exploitation)',
      c2Text: 'Une fois en service, le National Board Inspection Code (NBIC / NB-23 Partie 2) s’applique. Dans quasiment tous les États américains, une inspection annuelle (tous les 12 mois) par un inspecteur commissionné est obligatoire pour maintenir un Certificate of Operation valide.',
      c3Title: '3. Canada : Système CRN & Norme CSA B51',
      c3Text: 'Le Canada applique le système strict du Canadian Registration Number (CRN). Tout appareil sous pression et soupape doit être enregistré par province (TSSA, ABSA). Exploiter un appareil sans CRN valide constitue une infraction grave.',
      compareTitle: 'Comparaison : Le Seuil Européen de 2 Litres vs Exemptions Américaines « Coil Washer »',
      compareText: 'En Europe, l’Article 4 § 3 de la DESP exempte catégoriquement les serpentins ≤ 2 litres sous les Règles de l’Art (SEP). Aux États-Unis, la majorité des États prévoient une exemption similaire pour les générateurs en boucle continue (« Coil-type forced-circulation water heaters without a drum »).',
    },
    takeaway: {
      badge: 'Avantage Stratégique d’Achat & d’Exportation',
      title: 'Pourquoi un Faible Volume d’Eau (≤ 2L) Constitue le Passeport Mondial d’Exploitation',
      desc: 'Pour les entreprises de nettoyage et les prestataires intervenant à l’international, une chaudière vapeur lourde (> 2L DESP Catégorie IV ; Power Boilers aux USA) génère une lourdeur administrative colossale :',
      c1Title: '🇳🇱 Pays-Bas',
      c1Text: 'Contrôle KvI de mise en service et réépreuve tous les 24 mois par un NL-CBI (WBDA 2016).',
      c2Title: '🇩🇪 Allemagne',
      c2Text: 'Autorisation d’exploiter (Erlaubnis) Gewerbeaufsicht + contrôles périodiques ZÜS (TÜV/DEKRA).',
      c3Title: '🇧🇪 Belgique',
      c3Text: 'Contrôle annuel légal par un SECT (Vinçotte, BTV, Apragaz) sous le Codex Livre IV.',
      c4Title: '🇺🇸 USA / 🇨🇦 Canada',
      c4Text: 'Contrôle annuel par inspecteur National Board / TSSA pour un Certificate of Operation.',
      summary: 'À l’inverse, en optant pour un matériel haute pression doté d’un serpentin à flux continu strictement ≤ 2 litres (Article 4 § 3 DESP / SEP en Europe et seuils exemptés aux USA), l’installation est légalement dispensée des contraintes des chaudières à vapeur. Vous travaillez immédiatement sans barrières administratives.',
      btnMatrix: 'Consulter la Matrice Technique 2-Litres',
      btnTco: 'Calculer les Économies dans l’Outil TCO',
      btnWizard: 'Lancer le Test de Conformité 30s',
    },
  },

  de: {
    euBanner: {
      badge: 'Internationales & Europäisches Portal',
      text: 'Sehen Sie alle pan-europäischen Richtlinien und länderspezifischen Vorschriften auf Englisch auf High-Pressure-Steam Inspection.',
      button: 'Zur EU-Version (EN)',
    },
    header: {
      badge: 'Internationaler Regelungsatlas · EU & Weltweite Vorschriften',
      title: 'Druckgeräte-Prüfvorschriften Außerhalb der Benelux',
      desc: 'Wie verhalten sich die Prüfpflichten in Deutschland, Belgien, Frankreich, Großbritannien, den USA (ASME/NBIC), Kanada (CSA B51) und Australien? Technische Analyse der Prüfregime, zugelassenen Überwachungsstellen und des weltweiten Einflusses des Kesselvolumens.',
    },
    principle: {
      badge: 'Das Rechtliche Subsidiaritätsprinzip & Nationale Souveränität',
      title: 'Warum Weichen Prüffristen Weltweit Voneinander Ab?',
      box1Title: 'Herstellung & Marktzugang (Harmonisiert)',
      box1Text: 'In der EU harmonisiert die DGRL 2014/68/EU das Inverkehrbringen von Druckgeräten. In Nordamerika erfüllt der ASME Boiler and Pressure Vessel Code (BPVC) eine vergleichbare Funktion für Entwurf und Fertigungsstempel (S, U, M). Die Einstufungskriterien (z. B. Kategorie IV in Europa) sind während der Fertigung weltweit einheitlich.',
      box2Title: 'Betriebsphase & Nutzung (National / Bundesstaatlich Gerefelt)',
      box2Text: 'Die Betriebsphase (wiederkehrende Prüfungen, Prüferbefugnisse, Fristen und Erlaubnisse) ist international nicht harmonisiert. In den Niederlanden gilt ein 2-Jahres-Zyklus (WBDA), in Belgien ein jährlicher Rhythmus (Codex), in Deutschland ein komplexer 1- bis 3-Jahres-Zyklus (BetrSichV) und in den USA/Kanada ein jährliches Certificate of Operation nach NBIC und CSA B51.',
      insightTitle: 'Wesentliche Erkenntnis für Maschinenbauer und Flottenbetreiber:',
      insightText: 'Eine CE-Kennzeichnung oder ein ASME-Stempel berechtigt lediglich zum Verkauf oder Import. Sobald das Gerät am Einsatzort in Betrieb geht, greift sofort das nationale Betriebssicherheitsrecht des jeweiligen Landes.',
    },
    filters: {
      all: 'Alle Regionen',
      europe: 'Europa (6)',
      northAmerica: 'Nordamerika (2)',
      apac: 'Asien-Pazifik (1)',
      searchPlaceholder: 'Land, Gesetz oder Norm suchen (z. B. BetrSichV, ASME, TRBS)...',
    },
    table: {
      badge: 'Internationale Vergleichsmatrix',
      title: 'Vergleich: Prüfregime für Schwere Dampf- & Druckgeräte',
      source: 'Aktualisiert gemäß den geltenden nationalen Vorschriften',
      colCountry: 'Land & Region',
      colLaw: 'Rechtlicher Rahmen & Norm',
      colBody: 'Überwachungsstelle',
      colCert: 'Dokument bei Inbetriebnahme',
      colInterval: 'Prüfintervall',
      clickHint: 'Klicken Sie auf eine Zeile in der Tabelle, um das vollständige Länderdossier unten zu öffnen.',
    },
    dossier: {
      badge: 'Länderdossier',
      detailsSuffix: 'Rechtsrahmen im Detail',
      box1Title: 'Gesetzlicher Rechtsrahmen & Angewandte Norm',
      box1Standard: 'Angewandte Technische Regel: ',
      box1Bodies: 'Zugelassene Prüfstellen',
      box1Procedure: 'Verfahren vor Erster Inbetriebnahme',
      box1Permit: 'Erforderliche Betriebserlaubnis: ',
      box2Title: 'Prüffrequenz & Prüfumfang (Kategorie IV)',
      box2Penalties: 'Überwachung & Bußgeldregelung',
      box2Risk: 'Spezifisches Risiko bei Grenzüberschreitendem Einsatz',
      box3Title: 'Schwellenwerte & Volumenbefreiungen in',
    },
    transatlantic: {
      badge: 'Transatlantischer Fokus: Nordamerika',
      title: 'Wie Funktionieren Dampf- und Druckgesetze in den USA und Kanada?',
      c1Title: '1. ASME BPVC (Herstellung)',
      c1Text: 'In den USA und Kanada basiert der Entwurf und Bau von Dampfkesseln auf dem ASME Boiler & Pressure Vessel Code. Hochdruckdampferzeuger fallen unter Section I (Power Boilers). Der Hersteller muss über einen ASME-Stempel („S“ oder „M“) verfügen und die Kessel beim National Board registrieren.',
      c2Title: '2. NBIC NB-23 (Wiederkehrende Prüfung)',
      c2Text: 'Im Betrieb gilt der National Board Inspection Code (NBIC / NB-23 Teil 2). In fast allen US-Bundesstaaten ist eine jährliche Prüfung (alle 12 Monate) durch einen lizenzierten National Board Inspector gesetzlich vorgeschrieben.',
      c3Title: '3. Kanada: CRN-System & CSA B51',
      c3Text: 'Kanada verlangt zusätzlich die strikte Registrierung nach dem Canadian Registration Number (CRN) System. Jedes Druckteil muss je Provinz registriert werden. Der Betrieb ohne CRN ist ein schwerer Gesetzesverstoß.',
      compareTitle: 'Vergleich: Die Europäische 2-Liter-Grenze vs. US-„Coil Washer“-Freistellungen',
      compareText: 'In Europa befreit Artikel 4 Absatz 3 der DGRL Wärmetauscher ≤ 2 Liter nach Guter Ingenieurpraxis (SEP) von Prüfpflichten. In den USA kennen die meisten Bundesstaaten eine vergleichbare Ausnahme für Durchlauf-Erhitzer ohne Dampftrommel („Coil-type forced-circulation water heaters without a drum“).',
    },
    takeaway: {
      badge: 'Strategischer Beschaffungs- & Exportvorteil',
      title: 'Warum Minimaler Wasserinhalt (≤ 2L) der Globale Reisepass für den Einsatz Ist',
      desc: 'Für Reinigungsunternehmen und Industriedienstleister, die grenzüberschreitend arbeiten, erzeugt ein schwerer Dampfkessel (> 2L DGRL Kategorie IV; Power Boiler in den USA) immense bürokratische Hürden:',
      c1Title: '🇳🇱 Niederlande',
      c1Text: 'Inbetriebnahmeprüfung (KvI) und 24-Monats-Prüfung durch NL-CBI (WBDA 2016).',
      c2Title: '🇩🇪 Deutschland',
      c2Text: 'Erlaubnispflicht Gewerbeaufsicht (§ 18 BetrSichV) + wiederkehrende ZÜS-Prüfungen.',
      c3Title: '🇧🇪 Belgien',
      c3Text: 'Gesetzlich vorgeschriebene jährliche Prüfung durch EDTC (Vinçotte, BTV) nach Codex.',
      c4Title: '🇺🇸 USA / 🇨🇦 Canada',
      c4Text: 'Jährliche Prüfung durch National Board / TSSA Inspector für Certificate of Operation.',
      summary: 'Wählen Sie stattdessen moderne Geräte mit einem Durchlauf-Heizrohr unter 2 Litern (Art. 4 Abs. 3 DGRL / SEP in Europa und Kessel-Ausnahmeregeln in den USA), entfällt das Dampfkesselregime vollständig. Sie können ohne lokale Zulassungshürden sofort produktiv arbeiten.',
      btnMatrix: 'Technische 2-Liter-Matrix Ansehen',
      btnTco: 'Kostenvorteile im TCO-Rechner Kalkulieren',
      btnWizard: '30-Sekunden-Gesetzescheck Starten',
    },
  },

  en: {
    euBanner: {
      badge: 'International & European Portal Version',
      text: 'View all pan-European directives and country-specific legislation in English on High-Pressure-Steam Inspection.',
      button: 'To EU Version (EN)',
    },
    header: {
      badge: 'International Regulatory Atlas · EU & Global Regimes',
      title: 'Pressure Equipment In-Service Regulations: EU & Global',
      desc: 'How do statutory inspection obligations in Germany, Belgium, France, the UK, the USA (ASME/NBIC), Canada (CSA B51), and Australia compare? An engineering analysis of international in-service inspection regimes, accredited bodies, and the global decisive impact of internal coil volume.',
    },
    principle: {
      badge: 'The Legal Principle of Subsidiarity & National Sovereignty',
      title: 'Why Do Inspection Intervals Diverge Globally?',
      box1Title: 'Manufacturing & Market Access (Harmonised)',
      box1Text: 'Across the EU, PED 2014/68/EU harmonises the placing of pressure equipment on the Single Market. In North America, the ASME Boiler and Pressure Vessel Code (BPVC) serves a similar purpose for design and manufacturing stamps (S, U, M). Manufacturing criteria (such as Category IV in Europe) are universally consistent.',
      box2Title: 'In-Service Phase & Operation (National / State Jurisdiction)',
      box2Text: 'The operational in-service phase (periodic recertification, inspector powers, audit intervals, operating permits) is never harmonised internationally. The Netherlands enforces 24-month cycles (WBDA), Belgium requires annual inspections (Codex), Germany applies 1-3 year intervals (BetrSichV), and the US/Canada require an annual Certificate of Operation under NBIC and CSA B51.',
      insightTitle: 'Essential insight for fleet buyers & contractors:',
      insightText: 'A CE mark or ASME stamp only confers the right to sell or import equipment. Once operational on European or North American job sites, local in-service legislation immediately governs.',
    },
    filters: {
      all: 'All Jurisdictions',
      europe: 'Europe (6)',
      northAmerica: 'North America (2)',
      apac: 'Asia-Pacific (1)',
      searchPlaceholder: 'Search country, act or standard (e.g. BetrSichV, PSSR, ASME)...',
    },
    table: {
      badge: 'International Comparison Matrix',
      title: 'Cross-Border Audit Regimes for High-Pressure Steam',
      source: 'Updated in accordance with national statutory codes',
      colCountry: 'Country & Region',
      colLaw: 'Statutory Act & Standard',
      colBody: 'Accredited Body',
      colCert: 'Commissioning Certificate',
      colInterval: 'Recertification Interval',
      clickHint: 'Click on any row in the table to open the comprehensive statutory country dossier below.',
    },
    dossier: {
      badge: 'Country Dossier',
      detailsSuffix: 'Statutory Regulatory Dossier',
      box1Title: 'Statutory Regulatory Framework & Applied Standard',
      box1Standard: 'Applied Technical Standard: ',
      box1Bodies: 'Appointed Inspection Bodies',
      box1Procedure: 'Pre-Commissioning Procedure',
      box1Permit: 'Statutory operating permit: ',
      box2Title: 'Inspection Frequency & Audit Scope (Category IV Equipment)',
      box2Penalties: 'Enforcement & Penalties',
      box2Risk: 'Specific Cross-Border Operational Risk',
      box3Title: 'Volume Thresholds & Exemptions in',
    },
    transatlantic: {
      badge: 'Transatlantic Focus: North America',
      title: 'How Steam & Pressure Regulations Operate in the US and Canada',
      c1Title: '1. ASME BPVC (Manufacturing)',
      c1Text: 'Across the US and Canada, boiler and vessel manufacturing is governed by the ASME Boiler and Pressure Vessel Code. High-pressure steam generators fall under Section I (Power Boilers). OEMs must possess an accredited ASME \'S\' or \'M\' stamp (Miniature Boiler) and register with The National Board.',
      c2Title: '2. NBIC NB-23 (In-Service Inspection)',
      c2Text: 'Once deployed, the National Board Inspection Code (NBIC / NB-23 Part 2) governs. In virtually all US states, annual inspection (every 12 months) by a commissioned National Board Inspector is legally mandatory to maintain a valid Certificate of Operation.',
      c3Title: '3. Canada: CRN System & CSA B51',
      c3Text: 'Canada additionally enforces the Canadian Registration Number (CRN) system. Every pressurized fitting and coil must be registered per province (TSSA in Ontario, ABSA in Alberta). Operating without a valid CRN is a statutory violation under provincial Safety Codes Acts.',
      compareTitle: 'Comparison: The European 2-Litre Threshold vs. US \'Coil Washer\' Exemptions',
      compareText: 'In Europe, Article 4(3) of the PED categorises heat exchangers ≤ 2 litres under Sound Engineering Practice (SEP), exempt from Notified Body audits. In the United States, most states maintain an equivalent statutory exemption for \'Coil-type forced-circulation water heaters or steam cleaners without a steam drum\'.',
    },
    takeaway: {
      badge: 'Strategic Fleet Procurement & Cross-Border Advantage',
      title: 'Why Low Water Volume (≤ 2L) is the Global Passport for Cross-Border Operations',
      desc: 'For industrial cleaning contractors and fleet operators working across European and transatlantic borders, heavy steam boiler classifications (> 2L PED Category IV in Europe; Power Boilers in North America) generate substantial administrative and operational friction:',
      c1Title: '🇳🇱 Netherlands',
      c1Text: 'KvI commissioning and 24-month recertification by NL-CBI (WBDA 2016).',
      c2Title: '🇩🇪 Germany',
      c2Text: 'Operating permit (Erlaubnis) Gewerbeaufsicht + recurring ZÜS audits.',
      c3Title: '🇧🇪 Belgium',
      c3Text: 'Annual statutory inspection by an EDTC (Vinçotte, BTV, Apragaz) under Codex.',
      c4Title: '🇺🇸 USA / 🇨🇦 Canada',
      c4Text: 'Annual inspection by National Board / TSSA inspector for Certificate of Operation.',
      summary: 'Choosing advanced equipment with a continuous-flow heating coil strictly ≤ 2 litres (Article 4(3) PED SEP across the EU and within coil exemptions in the US) provides statutory exemption in virtually all Western jurisdictions. Deploy immediately without local licensing roadblocks or periodic shutdown inspections.',
      btnMatrix: 'Explore the Technical 2-Litre Matrix',
      btnTco: 'Calculate Financial Variances in TCO Tool',
      btnWizard: 'Start 30-Sec Compliance Check',
    },
  },
};

export function getInternationalTranslations(lang: SiteLanguage): InternationalTranslation {
  return INTERNATIONAL_TRANSLATIONS[lang] || INTERNATIONAL_TRANSLATIONS.nl;
}
