import { SiteLanguage } from '../types';

export interface TwoLiterTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  flashing: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    c1Badge: string;
    c1Title: string;
    c1FormulaVol: string;
    c1FormulaCalc: string;
    c1Desc: string;
    c1Point1: string;
    c1Point2: string;
    c2Badge: string;
    c2Title: string;
    c2FormulaVol: string;
    c2FormulaCalc: string;
    c2Desc: string;
    c2Point1: string;
    c2Point2: string;
  };
  tableSection: {
    badge: string;
    title: string;
    source: string;
    colCriteria: string;
    colSep: string;
    colCat4: string;
    row1Criteria: string;
    row1Sep: string;
    row1Cat4: string;
    row2Criteria: string;
    row2Sep: string;
    row2Cat4: string;
    row3Criteria: string;
    row3Sep: string;
    row3Cat4: string;
    row4Criteria: string;
    row4Sep: string;
    row4SepSub: string;
    row4Cat4: string;
    row4Cat4Sub: string;
    row5Criteria: string;
    row5Sep: string;
    row5Cat4: string;
  };
  dueDiligence: {
    badge: string;
    title: string;
    desc: string;
    q1Title: string;
    q1Desc: string;
    q2Title: string;
    q2Desc: string;
    q3Title: string;
    q3Desc: string;
  };
  takeaway: {
    title: string;
    desc: string;
    btnKeuringen: string;
    btnTco: string;
  };
  callout: {
    badge: string;
    title: string;
    desc: string;
    btnWizard: string;
    btnTco: string;
  };
}

export const TWO_LITER_TRANSLATIONS: Record<SiteLanguage, TwoLiterTranslation> = {
  nl: {
    header: {
      badge: 'Fysica & Risico-Indeling',
      title: 'Waarom 2 Liter het Cruciale Criterium is in de Stoomtechniek',
      desc: 'Binnen de Europese PED-richtlijn wordt apparatuur ingedeeld in risicocategorieën (I tot en met IV) op basis van de druk (PS), de temperatuur (TS) en het interne volume (V) van de warmtewisselaar.',
    },
    flashing: {
      badge: 'Thermodynamica van Drukapparatuur',
      title: 'De Fysica van Oververhit Water (Flashing)',
      p1: 'Wanneer water onder hoge werkdruk staat (bijvoorbeeld 200 bar), stijgt het kookpunt naar temperaturen ver boven de 100 °C. Zodra een leiding scheurt, valt die druk in één klap weg naar atmosferische druk (1 bar). Het oververhitte water flasht acuut in stoom, waarbij het volume explosief met circa 1.600 keer uitzet.',
      p2: 'Bij een volume kleiner dan 2 liter is de totale opgeslagen potentiële energie fysiek beperkt, waardoor ernstig calamiteitsgevaar bij de bron wordt weggenomen. Boven de 2 liter kan een breuk catastrofale gevolgen hebben voor omstanders.',
      c1Badge: 'TRADITIONELE HOGEDRUKTRAILER (> 2L)',
      c1Title: 'Groot Energetisch Calamiteitsrisico',
      c1FormulaVol: 'Typische inhoud brander/warmtewisselaar: 8 tot 12 liter',
      c1FormulaCalc: '10 Liter water × 1.600 = 16.000 Liter stoomexpansie',
      c1Desc: 'Bij een breuk van de verwarmingsspiraal komt in fracties van een seconde een enorme hoeveelheid kokende stoom vrij. Dit creëert een ernstige drukgolf en direct levensgevaar door thermische brandwonden.',
      c1Point1: 'Levensbedreigend risico op ernstige brandwonden voor de bediener',
      c1Point2: 'Wettelijk verplichte jaarlijkse of 2-jaarlijkse hydrostatische keuring',
      c2Badge: 'DOORSTROOMTECHNIEK / STEAMPLUS (≤ 2L)',
      c2Title: 'Inherent Veilig aan de Bron (SEP)',
      c2FormulaVol: 'Maximale inhoud brander/warmtewisselaar: ≤ 2,0 liter',
      c2FormulaCalc: '≤ 2 Liter water × 1.600 = Beheersbare ontlading',
      c2Desc: 'Door continu slechts een minimale fractie water tegelijk te verhitten, wordt het explosiegevaar direct bij de fysische bron weggenomen. De Europese wetgever heeft hier speciaal Artikel 4 lid 3 Goed Vakmanschap (SEP) voor gecreëerd: 100% vrijgesteld van KvI en herkeuringen.',
      c2Point1: 'Geen catastrofaal explosiegevaar bij plotselinge leidingbreuk',
      c2Point2: '100% Vrijgesteld van periodieke keuringen onder Artikel 4 lid 3 PED',
    },
    tableSection: {
      badge: 'Wettelijke & Fysische Matrix',
      title: 'Vergelijking: Systeem A versus Systeem B',
      source: 'Bron: PED 2014/68/EU & WBDA 2016',
      colCriteria: 'Eigenschap',
      colSep: 'Systeem A (< 2 Liter Volume)',
      colCat4: 'Systeem B (> 2 Liter Volume)',
      row1Criteria: 'Fysisch principe',
      row1Sep: 'Kleine oververhitte watermassa onder druk',
      row1Cat4: 'Grote opgeslagen energetische massa onder druk',
      row2Criteria: 'PED Risicoklasse',
      row2Sep: 'Artikel 4.3 (Goed Vakmanschap / SEP)',
      row2Cat4: 'PED Categorie IV (Hoogste Europese risicoklasse)',
      row3Criteria: 'Energetisch risico',
      row3Sep: 'Minimale energie-ontlading bij defect',
      row3Cat4: 'Potentieel catastrofaal bij acute leidingbreuk',
      row4Criteria: 'Veiligheidsfilosofie',
      row4Sep: 'Inherente veiligheid:',
      row4SepSub: 'Risico wegnemen bij de bron (inherently safe by design)',
      row4Cat4: 'Toegevoegde veiligheid:',
      row4Cat4Sub: 'Zware barrières rondom risico (externe veiligheidskleppen & NoBo-toezicht)',
      row5Criteria: 'Keuringsplicht',
      row5Sep: 'Vrijgesteld van KvI en herkeuringen',
      row5Cat4: '100% Verplicht KvI + 2-jaarlijkse herkeuring',
    },
    dueDiligence: {
      badge: 'Praktisch Inkoopprotocol voor Kopers & Wagenparkbeheerders',
      title: 'Wat u eigenlijk ook moet weten bij de aankoop: 3 gerichte controlevragen',
      desc: 'Een gedegen aankooptraject begint met duidelijke specificaties. Vraag vóór aankoop of lease schriftelijke duidelijkheid over deze drie technische en operationele uitgangspunten:',
      q1Title: 'Waterinhoud van de Brander/Warmtewisselaar (V)',
      q1Desc: '“Wat is de exacte fysieke waterinhoud van de brander/warmtewisselaar in liters? Is deze strikt maximaal 2,0 liter (SEP) of groter dan 2,0 liter (Cat. IV)?”',
      q2Title: 'Keuring voor Ingebruikneming (KvI)',
      q2Desc: '“Is voor deze hogedruktrailer een KvI door een NL-CBI / EDTC verplicht vóór de eerste inzet, en wat zijn de 2-jaarlijkse herkeuringskosten?”',
      q3Title: 'Onderdeelvrijheid & Merkplicht',
      q3Desc: '“Mag ik gecertificeerde universele hogedrukslangen monteren, of leidt dit tot verval van het samenstelcertificaat en verplichte merkgebondenheid?”',
    },
    takeaway: {
      title: 'Wat Betekent Dit voor Uw Investeringsbeslissing?',
      desc: 'Wie kiest voor een installatie met een warmtewisselaar onder de 2 liter, kiest voor inherente veiligheid. Het apparaat kan door zijn geringe inhoud fysisch geen zware ketelontploffing veroorzaken. Daarmee vervalt niet alleen een aanzienlijk veiligheidsrisico op de werkvloer, maar ook een terugkerende kostenpost van duizenden euro\'s aan inspecties en machinestilstand.',
      btnKeuringen: 'Ontdek de Keuringsplichten & Merkplicht',
      btnTco: 'Vergelijk Kosten in TCO Calculator',
    },
    callout: {
      badge: 'Zelf Evalueren',
      title: 'Wilt u weten onder welke categorie uw machines vallen?',
      desc: 'Beantwoord drie gerichte vragen in onze interactieve beslisboom of bereken direct de financiële impact in de TCO calculator.',
      btnWizard: 'Start 30-Seconden Check',
      btnTco: 'Bereken Kostenverschil in TCO',
    },
  },

  fr: {
    header: {
      badge: 'Thermodynamique & Classification des Risques',
      title: 'Pourquoi 2 Litres Constitue le Seuil Critique en Ingénierie Vapeur',
      desc: 'Dans le cadre de la directive européenne DESP 2014/68/UE, les équipements sont classés par niveau de risque (Règles de l’Art SEP, Catégories I à IV) selon la pression (PS), la température (TS) et le volume interne (V) de l’échangeur thermique.',
    },
    flashing: {
      badge: 'Thermodynamique des Équipements Sous Pression',
      title: 'La Physique de l’Eau Surchauffée & Phénomène de Flash',
      p1: 'Lorsque l’eau est confinée sous haute pression (ex. 200 bar), son point d’ébullition s’élève bien au-delà de 100 °C. En cas de rupture du serpentin, cette pression s’effondre instantanément à la pression atmosphérique (1 bar). L’eau surchauffée se vaporise instantanément en vapeur (flash steam), avec une expansion volumique explosive d’environ 1 600 fois son volume liquide.',
      p2: 'Avec un volume strictement inférieur ou égal à 2 litres, l’énergie potentielle accumulée est physiquement bridée par conception. Le risque d’explosion catastrophique est éliminé à la source. Au-delà de 2 litres, une décompression brutale génère une onde de choc destructrice et un danger de brûlure mortelle.',
      c1Badge: 'REMORQUE HAUTE PRESSION TRADITIONNELLE (> 2L)',
      c1Title: 'Risque Énergétique Majeur de Rupture',
      c1FormulaVol: 'Volume typique de chaudière : 8 à 12 litres',
      c1FormulaCalc: '10 Litres d’eau × 1 600 = 16 000 Litres d’expansion vapeur',
      c1Desc: 'En cas de défaillance du serpentin, un nuage massif de vapeur brûlante est libéré en quelques millisecondes, créant une onde de surpression et un danger thermique extrême pour l’opérateur.',
      c1Point1: 'Danger vital de brûlures graves pour l’opérateur et le public',
      c1Point2: 'Contrôle hydrostatique périodique obligatoire par organisme agréé',
      c2Badge: 'TECHNOLOGIE EN FLUX CONTINU (≤ 2L)',
      c2Title: 'Inhéremment Sûr à la Source (SEP)',
      c2FormulaVol: 'Volume maximal du serpentin : ≤ 2,0 litres',
      c2FormulaCalc: '≤ 2 Litres d’eau × 1 600 = Décharge minime et maîtrisée',
      c2Desc: 'En chauffant uniquement une infime fraction d’eau à chaque instant, le risque d’explosion de chaudière est éliminé à la source physique. Le législateur européen a expressément prévu l’Article 4 § 3 Règles de l’Art (SEP) : 100% exempté de contrôle de mise en service et de réépreuves.',
      c2Point1: 'Aucun risque d’explosion catastrophique de chaudière',
      c2Point2: '100% Exemptée de contrôles périodiques sous l’Article 4 § 3 de la DESP',
    },
    tableSection: {
      badge: 'Matrice Réglementaire & Physique',
      title: 'Comparaison : Système A versus Système B',
      source: 'Source : Directive DESP 2014/68/UE & Réglementation Benelux',
      colCriteria: 'Critère Technique',
      colSep: 'Système A (≤ 2 Litres de Volume)',
      colCat4: 'Système B (> 2 Litres de Volume)',
      row1Criteria: 'Principe physique',
      row1Sep: 'Faible masse d’eau surchauffée sous pression',
      row1Cat4: 'Masse énergétique fluide accumulée importante sous pression',
      row2Criteria: 'Classement DESP',
      row2Sep: 'Article 4 § 3 (Règles de l’Art / SEP)',
      row2Cat4: 'DESP Catégorie IV (Niveau de risque maximal en Europe)',
      row3Criteria: 'Risque énergétique',
      row3Sep: 'Décharge d’énergie négligeable en cas d’avarie',
      row3Cat4: 'Potentiellement catastrophique lors d’une rupture franche',
      row4Criteria: 'Philosophie de sécurité',
      row4Sep: 'Sécurité intrinsèque :',
      row4SepSub: 'Risque éliminé à la source par conception (inherently safe)',
      row4Cat4: 'Sécurité rapportée :',
      row4Cat4Sub: 'Lourdes barrières autour du risque (soupapes de sécurité et contrôle par organisme)',
      row5Criteria: 'Obligation de contrôle',
      row5Sep: 'Exempté de contrôle de mise en service et de réépreuves',
      row5Cat4: '100% Obligatoire : Contrôle initial + réépreuves périodiques',
    },
    dueDiligence: {
      badge: 'Protocole d’Achat Pratique pour Acheteurs & Gestionnaires de Flotte',
      title: 'Ce qu’il faut savoir à l’achat : 3 questions ciblées au fabricant',
      desc: 'Un achat professionnel commence par des spécifications claires. Exigez une confirmation écrite sur papier à en-tête du vendeur sur ces trois points clés :',
      q1Title: 'Volume d’Eau de l’Échangeur / Chaudière (V)',
      q1Desc: '« Quel est le volume interne exact en litres du serpentin ? Est-il strictement ≤ 2,0 litres (SEP) ou supérieur à 2,0 litres (Cat. IV) ? »',
      q2Title: 'Contrôle avant Première Mise en Service',
      q2Desc: '« Cette remorque nécessite-t-elle légalement une visite de réception par un organisme agréé (SECT/Vinçotte/Apragaz) et quelles sont les échéances de réépreuve ? »',
      q3Title: 'Liberté des Pièces & Flexibles Haute Pression',
      q3Desc: '« Suis-je légalement autorisé à monter des flexibles universels certifiés, ou un équipement tiers annule-t-il la certification CE de l’ensemble ? »',
    },
    takeaway: {
      title: 'Qu’est-ce que cela Signifie pour Vos Décisions d’Investissement ?',
      desc: 'Choisir une installation dotée d’un serpentin inférieur ou égal à 2 litres, c’est faire le choix de la sécurité intrinsèque. L’appareil ne peut physiquement provoquer d’explosion de chaudière. Cela supprime un risque majeur pour le personnel ainsi que des milliers d’euros d’inspections récurrentes et d’arrêts de production.',
      btnKeuringen: 'Découvrir les Contrôles & Obligations',
      btnTco: 'Comparer les Coûts dans le Simulateur TCO',
    },
    callout: {
      badge: 'Évaluation Immédiate',
      title: 'Voulez-vous vérifier la catégorie de votre matériel ?',
      desc: 'Répondez à 3 questions dans notre arbre de décision interactif ou calculez l’impact financier réel dans le simulateur TCO.',
      btnWizard: 'Lancer le Test 30s',
      btnTco: 'Calculer l’Écart de TCO',
    },
  },

  de: {
    header: {
      badge: 'Thermodynamik & Risikoklassifizierung',
      title: 'Warum 2 Liter die Entscheidende Grenze in der Dampftechnik Bildet',
      desc: 'Nach der europäischen DGRL 2014/68/EU werden Druckgeräte anhand von Betriebsdruck (PS), Auslegungstemperatur (TS) und Innenvolumen (V) des Wärmetauschers in Risikokategorien (Gute Ingenieurpraxis SEP sowie Kategorien I bis IV) eingestuft.',
    },
    flashing: {
      badge: 'Thermodynamik von Druckgeräten',
      title: 'Die Physik Überhitzten Wassers & Dampfexpansionsgefahr',
      p1: 'Wenn Wasser unter hohem Betriebsdruck steht (z. B. 200 bar), steigt der Siedepunkt weit über 100 °C an. Reißt eine Leitung, bricht dieser Druck schlagartig auf Atmosphärendruck (1 bar) ein. Das überhitzte Wasser verdampft blitzartig (Flashing) und dehnt sich explosionsartig um das ca. 1.600-Fache seines Flüssigkeitsvolumens aus.',
      p2: 'Bei einem Kesselvolumen von maximal 2 Litern ist die gespeicherte Energie physikalisch konstruktionsbedingt begrenzt. Das Risiko einer katastrophalen Kesselexplosion wird an der Quelle gebannt. Bei mehr als 2 Litern drohen zerstörerische Druckwellen und lebensgefährliche Verbrühungen.',
      c1Badge: 'HERKÖMMLICHER HOCHDRUCKTRAILER (> 2L)',
      c1Title: 'Hohes Energetisches Calamitätsrisiko',
      c1FormulaVol: 'Typischer Kesselinhalt: 8 bis 12 Liter Wasser',
      c1FormulaCalc: '10 Liter Wasser × 1.600 = 16.000 Liter Dampfvolumen',
      c1Desc: 'Bei einem Rohrbruch wird in Millisekunden eine gewaltige Dampfwolke freigesetzt. Dies erzeugt eine verheerende Druckwelle und extreme Lebensgefahr durch thermische Verbrühungen.',
      c1Point1: 'Lebensgefährliches Verbrühungsrisiko für Bedienpersonal',
      c1Point2: 'Gesetzlich vorgeschriebene wiederkehrende Druckprüfung durch Gutachter',
      c2Badge: 'DURCHLAUFTECHNOLOGIE / STEAMPLUS (≤ 2L)',
      c2Title: 'Inhärent Sicher an der Quelle (SEP)',
      c2FormulaVol: 'Maximaler Inhalt des Wärmetauschers: ≤ 2,0 Liter',
      c2FormulaCalc: '≤ 2 Liter Wasser × 1.600 = Kontrollierbare Entlastung',
      c2Desc: 'Durch das kontinuierliche Erhitzen nur einer minimalen Wassermenge wird die Explosionsgefahr direkt an der physikalischen Quelle gebannt. Der europäische Gesetzgeber hat hierfür speziell Artikel 4 Absatz 3 Gute Ingenieurpraxis (SEP) geschaffen: 100% befreit von behördlicher Inbetriebnahmeprüfung und wiederkehrenden Prüfungen.',
      c2Point1: 'Keine katastrophale Kesselexplosionsgefahr',
      c2Point2: '100% Befreit von wiederkehrenden Prüfungen nach Art. 4 Abs. 3 DGRL',
    },
    tableSection: {
      badge: 'Gesetzliche & Physikalische Matrix',
      title: 'Vergleich: System A versus System B',
      source: 'Quelle: DGRL 2014/68/EU & Nationale Betriebsvorschriften',
      colCriteria: 'Eigenschaft / Kriterium',
      colSep: 'System A (≤ 2 Liter Volumen)',
      colCat4: 'System B (> 2 Liter Volumen)',
      row1Criteria: 'Physikalisches Prinzip',
      row1Sep: 'Geringe überhitzte Wassermasse unter Druck',
      row1Cat4: 'Große gespeicherte energetische Masse unter Druck',
      row2Criteria: 'DGRL-Risikoklasse',
      row2Sep: 'Artikel 4.3 (Gute Ingenieurpraxis / SEP)',
      row2Cat4: 'DGRL Kategorie IV (Höchste europäische Risikoklasse)',
      row3Criteria: 'Energetisches Risiko',
      row3Sep: 'Minimale Energieentladung bei Defekt',
      row3Cat4: 'Potenziell katastrophal bei akutem Rohrbruch',
      row4Criteria: 'Sicherheitsphilosophie',
      row4Sep: 'Inhärente Sicherheit:',
      row4SepSub: 'Gefahr wird konstruktiv an der Quelle gebannt (inherently safe by design)',
      row4Cat4: 'Hinzugefügte Schutzbarrieren:',
      row4Cat4Sub: 'Schwere Barrieren um die Gefahr (Sicherheitsventile & Überwachungsstellen)',
      row5Criteria: 'Prüfpflicht',
      row5Sep: 'Befreit von Inbetriebnahmeprüfung und ZÜS-Prüfungen',
      row5Cat4: '100% Pflicht: Prüfung vor Inbetriebnahme + wiederkehrende Prüfungen',
    },
    dueDiligence: {
      badge: 'Praktisches Beschaffungsprotokoll für Einkäufer & Fuhrparkleiter',
      title: 'Was Sie vor dem Kauf wissen müssen: 3 gezielte Kontrollfragen',
      desc: 'Eine fundierte Beschaffung beginnt mit klaren Spezifikationen. Verlangen Sie vor Kauf oder Leasing schriftliche Klarheit über diese drei Punkte:',
      q1Title: 'Wasserinhalt des Brenners / Wärmetauschers (V)',
      q1Desc: '„Wie hoch ist der exakte Wasserinhalt des Wärmetauschers in Litern? Beträgt er strikt maximal 2,0 Liter (SEP) oder mehr als 2,0 Liter (Kat. IV)?“',
      q2Title: 'Prüfung vor Inbetriebnahme',
      q2Desc: '„Ist für diesen Hochdrucktrailer eine Prüfung vor Inbetriebnahme durch eine zugelassene Überwachungsstelle erforderlich und welche Folgekosten entstehen?“',
      q3Title: 'Ersatzteilfreiheit & Schlauchbindung',
      q3Desc: '„Darf ich zertifizierte universelle Hochdruckschläuche montieren oder führt dies zum Erlöschen des Baugruppenzertifikats?“',
    },
    takeaway: {
      title: 'Was Bedeutet Das für Ihre Investitionsentscheidung?',
      desc: 'Wer sich für eine Anlage mit einem Wärmetauscher unter 2 Litern entscheidet, wählt inhärente Sicherheit. Das Gerät kann physikalisch keine verheerende Kesselexplosion verursachen. Damit entfallen nicht nur erhebliche Gefahren am Arbeitsplatz, sondern auch wiederkehrende Kosten für Gutachten und Stillstandszeiten.',
      btnKeuringen: 'Prüfpflichten & Regelungen Entdecken',
      btnTco: 'Kosten im TCO-Rechner Vergleichen',
    },
    callout: {
      badge: 'Sofort Bewerten',
      title: 'Möchten Sie wissen, unter welche Kategorie Ihre Geräte fallen?',
      desc: 'Beantworten Sie 3 Fragen in unserem interaktiven Entscheidungsbaum oder berechnen Sie die finanzielle Differenz im TCO-Rechner.',
      btnWizard: '30-Sekunden-Check Starten',
      btnTco: 'Kosten im TCO-Rechner Vergleichen',
    },
  },

  en: {
    header: {
      badge: 'Thermodynamics & Risk Categorisation',
      title: 'Why 2 Litres Dictates the Legal Threshold in Steam Engineering',
      desc: 'Under European Directive 2014/68/EU (PED), equipment is categorised into risk brackets (SEP, Category I through IV) based on maximum allowable pressure (PS), design temperature (TS), and internal volume (V) of the heat exchanger.',
    },
    flashing: {
      badge: 'Pressure Equipment Thermodynamics',
      title: 'The Physics of Superheated Water & Flashing',
      p1: 'When water is enclosed under high operational pressure (e.g., 200 bar), its boiling temperature rises well beyond 100 °C. If a rupture occurs, that pressure collapses immediately to atmospheric levels (1 bar). Superheated liquid instantaneously flashes into steam, expanding explosively by approximately 1,600 times its liquid volume.',
      p2: 'With an internal volume strictly at or below 2 litres, total stored potential energy is physically limited by design. Potential catastrophic risk is eliminated at source. Above 2 litres, sudden decompression can yield destructive shockwaves and catastrophic scalding hazard for personnel.',
      c1Badge: 'TRADITIONAL HIGH-PRESSURE TRAILER (> 2L)',
      c1Title: 'Extreme Stored Energy Hazard',
      c1FormulaVol: 'Typical burner/heat exchanger volume: 8 to 12 litres',
      c1FormulaCalc: '10 Litres water × 1,600 = 16,000 Litres steam expansion',
      c1Desc: 'In case of coil burst, massive volumes of boiling steam discharge within milliseconds, generating a hazardous pressure shockwave and extreme thermal danger to nearby operators.',
      c1Point1: 'Life-threatening scalding danger to operating personnel',
      c1Point2: 'Mandatory annual or biennial hydrostatic test by accredited body',
      c2Badge: 'COMPACT CONTINUOUS-FLOW TRAILER (≤ 2L)',
      c2Title: 'Inherently Safe Design (SEP)',
      c2FormulaVol: 'Heat exchanger volume: strictly ≤ 2 litres (monocoil)',
      c2FormulaCalc: '1.8 Litres water × 1,600 = Only 2,880 Litres steam expansion',
      c2Desc: 'Due to minimal liquid containment, total potential thermal energy is physically contained. Even in the event of rupture, instantaneous expansion remains minimal.',
      c2Point1: 'Elimination of catastrophic boiler explosion hazard at the source',
      c2Point2: '100% Exempt from statutory reinspection under Article 4(3) of PED',
    },
    tableSection: {
      badge: 'Regulatory & Physical Matrix',
      title: 'System A (≤ 2L SEP) versus System B (> 2L Category IV)',
      source: 'Source: Directive 2014/68/EU Annex II Table 5',
      colCriteria: 'Engineering Criterion',
      colSep: 'System A (≤ 2 Litres Volume)',
      colCat4: 'System B (> 2 Litres Volume)',
      row1Criteria: 'Physical principle',
      row1Sep: 'Micro-mass of superheated pressurized fluid',
      row1Cat4: 'Large stored energetic fluid volume under pressure',
      row2Criteria: 'PED Classification',
      row2Sep: 'Article 4(3) SEP (Sound Engineering Practice)',
      row2Cat4: 'PED Category IV (Highest European Hazard Tier)',
      row3Criteria: 'Energetic release hazard',
      row3Sep: 'Negligible blast energy in case of pipe failure',
      row3Cat4: 'Potentially catastrophic blast & scalding hazard',
      row4Criteria: 'Safety philosophy',
      row4Sep: 'Inherent safety:',
      row4SepSub: 'Risk eliminated at source (inherently safe by design)',
      row4Cat4: 'Engineered mitigation:',
      row4Cat4Sub: 'Heavy mitigation barriers (burst discs, relief valves, Notified Body audits)',
      row5Criteria: 'Statutory inspection',
      row5Sep: 'Exempt from commissioning & statutory audits',
      row5Cat4: 'Mandatory commissioning + biennial recertification',
    },
    dueDiligence: {
      badge: 'Buyer Due Diligence Protocol',
      title: 'The 3 Questions You Must Demand in Writing Before Ordering a Trailer',
      desc: 'Never sign a delivery contract or lease agreement without obtaining written confirmation of these three engineering and legal parameters on the dealer\'s letterhead:',
      q1Title: 'Water Volume of Burner/Heat Exchanger (V)',
      q1Desc: '“What is the exact fluid volume of the burner/heat exchanger in litres? Is it strictly ≤ 2.0 litres (SEP) or > 2.0 litres (Category IV)?”',
      q2Title: 'Commissioning & Audit Status',
      q2Desc: '“Does this high-pressure trailer legally require an on-site pre-commissioning inspection before first field use, and what are the mandatory periodic recertification costs?”',
      q3Title: 'Component & Hose Freedom',
      q3Desc: '“Am I legally permitted to source certified universal replacement hoses and nozzles, or does non-OEM fitment instantly void the high-pressure trailer\'s assembly CE and insurance?”',
    },
    takeaway: {
      title: 'What Does This Mean for Fleet Procurement?',
      desc: 'Selecting an industrial steam assembly with an internal heat exchanger volume strictly ≤ 2 litres provides inherent physical safety. The machine cannot physically generate a catastrophic boiler explosion due to its low liquid mass. This completely eliminates recurrent downtime, costly third-party audit invoices, and statutory shutdown risks.',
      btnKeuringen: 'Explore Statutory Inspection Obligations',
      btnTco: 'Compare Costs in TCO Calculator',
    },
    callout: {
      badge: 'Self-Assessment',
      title: 'Want to determine your equipment classification?',
      desc: 'Answer three targeted questions in our interactive decision tree or simulate real lifecycle savings in the TCO calculator.',
      btnWizard: 'Start 30-Second Check',
      btnTco: 'Calculate TCO Difference',
    },
  },
};

export function getTwoLiterTranslations(lang: SiteLanguage): TwoLiterTranslation {
  return TWO_LITER_TRANSLATIONS[lang] || TWO_LITER_TRANSLATIONS.nl;
}
