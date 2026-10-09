import { SiteLanguage } from '../types';

export interface HomeTranslation {
  hero: {
    faqBtn: string;
    trustStandards: string;
    trustPed: string;
  };
  section1: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    note: string;
    link2L: string;
    linkGuide: string;
    sidebarBadge: string;
    sidebarTitle: string;
    sidebarDesc: string;
  };
  section2: {
    badge: string;
    title: string;
    desc: string;
    card1Title: string;
    card1Desc: string;
    card1Tag: string;
    card2Title: string;
    card2Desc: string;
    card2Tag: string;
    card3Title: string;
    card3Desc: string;
    card3Tag: string;
  };
  commercialSilence: {
    badge: string;
    title: string;
    desc: string;
    whatDealerSaysBadge: string;
    whatYouNeedToKnowBadge: string;
    c1Pitch: string;
    c1Reality: string;
    c2Pitch: string;
    c2Reality: string;
    c3Pitch: string;
    c3Reality: string;
    solutionTitle: string;
    solutionDesc: string;
    solutionBtn: string;
  };
  sectors: {
    badge: string;
    title: string;
    desc: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
  };
  nameplate: {
    badge: string;
    title: string;
    subtitle: string;
    sc1Badge: string;
    sc1Title: string;
    sc1Desc: string;
    sc2Badge: string;
    sc2Title: string;
    sc2Desc: string;
    sc3Badge: string;
    sc3Title: string;
    sc3Desc: string;
  };
  twoWorlds: {
    badge: string;
    title: string;
    desc: string;
    cat4Badge: string;
    cat4Vol: string;
    cat4Title: string;
    cat4Desc: string;
    cat4Item1Label: string;
    cat4Item1Desc: string;
    cat4Item2Label: string;
    cat4Item2Desc: string;
    cat4Item3Label: string;
    cat4Item3Desc: string;
    cat4Item4Label: string;
    cat4Item4Desc: string;
    cat4CostLabel: string;
    cat4CostValue: string;
    sepBadge: string;
    sepVol: string;
    sepTitle: string;
    sepDesc: string;
    sepItem1Label: string;
    sepItem1Desc: string;
    sepItem2Label: string;
    sepItem2Desc: string;
    sepItem3Label: string;
    sepItem3Desc: string;
    sepItem4Label: string;
    sepItem4Desc: string;
    sepCostLabel: string;
    sepCostValue: string;
    calcBannerTitle: string;
    calcBannerDesc: string;
    calcBannerBtn: string;
  };
  teasers: {
    badge: string;
    title: string;
    desc: string;
    t1Badge: string;
    t1Title: string;
    t1Desc: string;
    t2Badge: string;
    t2Title: string;
    t2Desc: string;
    t3Badge: string;
    t3Title: string;
    t3Desc: string;
  };
  faqSection: {
    badge: string;
    title: string;
    desc: string;
  };
}

export const HOME_TRANSLATIONS: Record<SiteLanguage, HomeTranslation> = {
  nl: {
    hero: {
      faqBtn: 'Veelgestelde Vragen (FAQ)',
      trustStandards: 'Conform WBDA 2016, Codex Welzijn & ITM',
      trustPed: 'Europese Richtlijn PED 2014/68/EU',
    },
    section1: {
      badge: 'Sectie 1 · De Realiteit rond Hogedruktrailers',
      title: 'Wat u eigenlijk ook moet weten bij de aankoop van een hogedruktrailer',
      p1: 'Bij de aanschaf van een professionele heetwater- of stoom-hogedruktrailer (voor gevelreiniging, kauwgomverwijdering, onkruidbestrijding of industriële reiniging) ligt de focus logischerwijs vaak op werkdruk (tot 500 bar), motortype en reinigingskracht.',
      p2: 'Wat u eigenlijk ook moet weten bij de aankoop: Heeft de hogedruktrailer een inhoud van de brander/warmtewisselaar van meer dan 2 liter bij > 110 °C? Dan is de hogedruktrailer voor de wet een PED Categorie IV stoominstallatie. Vóór de eerste inzet is een Keuring voor Ingebruikneming (KvI) door een NL-CBI (Kiwa, TÜV, Dekra) of Belgische EDTC (Vinçotte) wettelijk verplicht, gevolgd door periodieke (2-jaarlijkse)* herkeuringen.',
      p3: 'Hogedruktrailers met een compacte brander/warmtewisselaar van maximaal 2 liter vallen daarentegen onder Artikel 4 lid 3 (Goed Vakmanschap / SEP): 100% vrijgesteld van KvI en herkeuringen, géén stilstand, en volledige vrijheid om universele gecertificeerde slangen en lansen in te zetten.',
      note: '* Deze interval kan per land verschillen (in Nederland geldt 24 maanden via WBDA 2016, terwijl in België onder de Codex standaard een jaarlijkse herkeuring verplicht is, tenzij specifiek anders vergund).',
      link2L: 'Waarom 2 Liter de Grens Bepaalt bij Hogedruktrailers',
      linkGuide: 'Keuringswijzer Hogedruktrailers & Merkplicht',
      sidebarBadge: 'Inspectie & Handhaving',
      sidebarTitle: 'Arbeidsinspectie toetst op gebruiksfase',
      sidebarDesc: 'De CE-markering dekt alleen het fabricageproces. Zodra een machine operationeel draait, is de werkgever hoofdelijk aansprakelijk voor het actueel houden van alle keuringsrapporten.',
    },
    section2: {
      badge: 'Sectie 2 · Inkoopaudit & Risicobeheersing',
      title: 'De 3 kernvragen voor elke inkoper',
      desc: 'Stel deze drie cruciale vragen vóór de handtekening onder een leveringscontract van een hogedruktrailer:',
      card1Title: 'Keuring voor Ingebruikname (KvI)',
      card1Desc: 'Is de beoogde apparatuur wettelijk verplicht om voor ingebruikname door een geaccrediteerde instantie (NL-CBI / EDTC) te zijn goedgekeurd?',
      card1Tag: 'Zonder KvI is inzet bij Categorie IV strafbaar',
      card2Title: 'Periodieke Keuringen',
      card2Desc: 'Blijft de apparatuur vrij van herkeuringen of zijn deze verplicht en dient u de kosten (€ 1.000 - € 2.500) én het keuringsrisico mee te wegen?',
      card2Tag: 'Periodieke stilstand en inspectiekosten (elke 12–24 mnd)*',
      card3Title: 'Onderdeelvrijheid (Vendor Lock-in)',
      card3Desc: 'Mag u universele vervangingsonderdelen gebruiken, of leidt het niet-gebruiken van originele merkonderdelen tot het direct vervallen van de keuringsstatus?',
      card3Tag: 'Vervallen CE/PED certificaat maakt onverzekerd',
    },
    commercialSilence: {
      badge: 'Aankoopfocus vs. Wettelijke Kaders',
      title: 'Wat u eigenlijk ook moet weten bij de aankoop van een hogedruktrailer',
      desc: 'Tijdens het oriëntatie- en aankoopproces van heetwater- en stoom-hogedruktrailers ligt de focus veelal op technische specificaties zoals werkdruk (350 of 500 bar), temperatuur en reinigingscapaciteit. Wat u als koper eigenlijk ook vooraf moet weten, zijn de operationele en wettelijke kaders die gelden zodra de machine in gebruik wordt genomen.',
      whatDealerSaysBadge: 'De Focus bij Aankoop',
      whatYouNeedToKnowBadge: 'Wat u ook moet weten',
      c1Pitch: '“De hogedruktrailer heeft een officiële CE-markering, voldoet aan alle fabrieksrichtlijnen en is direct inzetbaar.”',
      c1Reality: 'De CE-markering dekt de fabricagefase. Heeft de brander/warmtewisselaar meer dan 2 liter waterinhoud bij > 110 °C? Dan geldt dit als een PED Categorie IV installatie en is vóór eerste inzet een Keuring voor Ingebruikneming (KvI) door een NL-CBI of EDTC wettelijk verplicht.',
      c2Pitch: '“Regulier jaarlijks onderhoud aan motorolie en pomppakkingen volstaat voor de bedrijfszekerheid.”',
      c2Reality: 'Bij een Categorie IV hogedruktrailer is daarnaast een periodieke herkeuring door een aangewezen keuringsinstantie wettelijk verplicht. Dit omvat onder meer hydrostatisch afpersen van de spiraal en beproeving van veiligheden, met bijbehorende keuringskosten en geplande stilstand.',
      c3Pitch: '“Hogedrukslangen zijn slijtdelen; die zijn indien nodig eenvoudig te vervangen door gangbare slangen.”',
      c3Reality: 'Bij een Categorie IV samenstel maken de gespecificeerde slangen integraal deel uit van de samenstelcertificering. Montage van niet-gecertificeerde alternatieven kan het samenstelcertificaat formeel laten vervallen, waardoor merkslangen verplicht blijven (merkgebondenheid).',
      solutionTitle: 'Het Keuringsvrije Alternatief: Waterinhoud ≤ 2 Liter (Goed Vakmanschap / SEP)',
      solutionDesc: 'Hogedruktrailers met compacte doorstroomtechnologie (maximaal 2 liter water in de brander/warmtewisselaar) zijn onder Artikel 4 lid 3 PED 100% vrijgesteld van KvI en herkeuringen, zonder vendor lock-in op slangen en toebehoren.',
      solutionBtn: 'Hoe de 2-Liter Grens Werkt',
    },
    sectors: {
      badge: 'Typische Toepassingen van Hogedruktrailers',
      title: 'Sectoren & Bedrijven die Werken met Heetwater- en Stoomtrailers',
      desc: 'Heetwater-hogedruktrailers en mobiele reinigingsskids zijn onmisbaar in de professionele reiniging en gemeentelijke diensten. Zodra deze machines stoom produceren (> 110 °C), vallen ze onder streng toezicht:',
      s1Title: 'Gevel- & Oppervlaktereiniging',
      s1Desc: 'Verwijdering van atmosferische vervuiling, algen en roet op bedrijfspanden, baksteen en bruggen met heet water tot 350 bar.',
      s2Title: 'Kauwgom- & Straatreiniging',
      s2Desc: 'Gemeentelijke aannemers en reinigers die pleinen, winkelcentra en stationszones kauwgom- en vetvrij maken met stoomtemperatuur.',
      s3Title: 'Chemievrije Onkruidbestrijding',
      s3Desc: 'Natuurvriendelijke onkruidverwijdering op verhardingen door middel van heet water (> 100 °C) en stoom zonder pesticiden.',
      s4Title: 'Graffiti & Industriële Reiniging',
      s4Desc: 'Verf- en graffitiverwijdering op monumenten, tankreiniging en industriële ontvetting bij drukken tot 500 bar.',
    },
    nameplate: {
      badge: 'Praktisch Stappenplan Typeplaatje',
      title: 'Hoe Controleert U het Typeplaatje van Uw Hogedruktrailer?',
      subtitle: 'Fysieke Controle op de Hogedruktrailer',
      sc1Badge: 'SCENARIO 1 · CAT. IV',
      sc1Title: 'CE-teken + 4 Cijfers van NoBo',
      sc1Desc: 'Staat er op het typeplaatje van de hogedruktrailer “CE 0036” (TÜV), “CE 0029” (Apragaz) of “CE 0620” (Kiwa)? Dan is de hogedruktrailer een Categorie IV samenstel. U BENT WETTELIJK VERPLICHT om een KvI-certificaat te hebben én periodiek te herkeuren.',
      sc2Badge: 'SCENARIO 2 · NIET CONFORM',
      sc2Title: 'Enkel CE-teken (> 2L Ketel)',
      sc2Desc: 'Heeft de hogedruktrailer een brander/warmtewisselaar met inhoud > 2 liter bij > 110 °C maar staat er enkel een algemeen CE-teken zonder 4-cijferig nummer? Dan ontbreekt de vereiste PED-samenstelcertificering. Deze machine is daarmee formeel niet vrijgegeven voor operationele inzet als Categorie IV installatie.',
      sc3Badge: 'SCENARIO 3 · KEURINGSVRIJ',
      sc3Title: 'Inhoud Brander/Warmtewisselaar ≤ 2L (SEP)',
      sc3Desc: 'Staat in het machinedossier dat de brander/warmtewisselaar maximaal 2 liter water bevat? Dan valt de hogedruktrailer onder Goed Vakmanschap (SEP / Art. 4.3). Geen NoBo-nummer nodig voor de PED, want de hogedruktrailer is 100% vrijgesteld van periodieke herkeuring!',
    },
    twoWorlds: {
      badge: 'Vergelijkende Analyse · Veiligheid & Keuringslast',
      title: 'De Twee Werelden bij Hogedruktrailers Vergeleken',
      desc: 'Waarom de fysieke waterinhoud van de brander/warmtewisselaar bepaalt of uw hogedruktrailer direct inzetbaar is, óf uw bedrijf opzadelt met verplichte periodieke keuringskosten, teamstilstand en strikte merkgebondenheid.',
      cat4Badge: 'TRADITIONELE HOGEDRUKTRAILER · PED CAT. IV',
      cat4Vol: 'V > 2 Liter',
      cat4Title: 'Wettelijke Mobiele Stoomketel',
      cat4Desc: 'Verwarmingsspiraal met 3 tot 15+ liter water onder stoomdruk (> 110 °C). Door het grote volume is sprake van gevaarlijk veel opgeslagen potentiële thermische energie.',
      cat4Item1Label: 'Keuring voor Ingebruikneming (KvI):',
      cat4Item1Desc: 'Wettelijk verplicht vóór de eerste klus door NL-CBI / EDTC (€ 850 - € 1.500).',
      cat4Item2Label: 'Periodieke Herkeuring (elke 12–24 mnd)*:',
      cat4Item2Desc: 'Verplicht elke 24 maanden in NL (en jaarlijks in BE) met afpersen van de spiraal en klepbeproeving.',
      cat4Item3Label: 'Strikte Merkplicht (Vendor Lock-in):',
      cat4Item3Desc: 'Universele slangen verboden; niet-originele delen laten CE en verzekering vervallen.',
      cat4Item4Label: 'Risico Arbeidsinspectie:',
      cat4Item4Desc: 'Directe verzegeling/stillegging op locatie plus zware boete bij ontbrekend rapport.',
      cat4CostLabel: '10-Jaars Bijkomende Lasten:',
      cat4CostValue: '+ € 15.000 – € 25.000 / hogedruktrailer',
      sepBadge: 'KEURINGSVRIJE HOGEDRUKTRAILER · ART. 4.3 SEP',
      sepVol: 'V ≤ 2 Liter',
      sepTitle: 'Inherent Veilige Doorstroomtechniek',
      sepDesc: 'Compacte mono-tube doorstroomspiraal van maximaal 2 liter. Minimale potentiële energie sluit het risico op catastrofale ketelontploffing aan de bron uit.',
      sepItem1Label: 'Keuring voor Ingebruikneming (KvI):',
      sepItem1Desc: '100% Vrijgesteld onder Europese richtlijn; direct inzetbaar vanaf dag één.',
      sepItem2Label: 'Periodieke Herkeuring:',
      sepItem2Desc: 'Geen wettelijke herkeuring verplicht; nul dagen gedwongen teamstilstand.',
      sepItem3Label: 'Volledige Vrijheid van Onderdelen:',
      sepItem3Desc: 'Vrije inkoop van universele gecertificeerde kwaliteitslansen en hogedrukslangen.',
      sepItem4Label: 'Zorgeloos bij Inspecties:',
      sepItem4Desc: 'Volledig conform wetgeving; geen risico op stillegging of boetes op de werkplek.',
      sepCostLabel: '10-Jaars Bijkomende Lasten:',
      sepCostValue: '€ 0,- aan keuringsleges',
      calcBannerTitle: 'Bereken het exacte kostenverschil voor uw vloot hogedruktrailers',
      calcBannerDesc: 'Vergelijk 1 tot 10 hogedruktrailers over 2 tot 10 exploitatiejaren inclusief reële keurings- en stilstandskosten.',
      calcBannerBtn: 'Naar TCO Calculator Hogedruktrailers',
    },
    teasers: {
      badge: 'Sectie 3 · Verdieping & Praktijktools',
      title: 'Essentiële Kennis & Rekenmodules',
      desc: 'Directe toegang tot de fysische grenswaarden, de interactieve TCO-calculator en de complete downloadbare audit-checklist.',
      t1Badge: 'Fysische Scheidslijn',
      t1Title: 'Waarom 2 Liter de Grens Bepaalt',
      t1Desc: 'Vergelijk Systeem A (< 2L SEP) met Systeem B (> 2L PED Categorie IV) op het gebied van opgeslagen energie en veiligheidsfilosofie.',
      t2Badge: 'Rekenmodule',
      t2Title: 'TCO Keuringskosten Calculator',
      t2Desc: 'Simuleer de werkelijke kosten van KvI, 2-jaarlijkse inspecties, stilstand en verplichte merkonderdelen over 2 tot 10 jaar.',
      t3Badge: 'Gids & Audit',
      t3Title: 'Aanschaf- & Keuringschecklist PDF',
      t3Desc: 'Gebruik de complete audit-checklist om vóór aanschaf en tijdens inspecties alle wettelijke verplichtingen te borgen.',
    },
    faqSection: {
      badge: 'Sectie 4 · Vragen & Antwoorden',
      title: 'Veelgestelde Vragen over Drukapparatuur',
      desc: 'Duidelijke antwoorden op veelvoorkomende vragen over keuringsplichten, de 2-liter grens, stilstand en aansprakelijkheid.',
    },
  },

  fr: {
    hero: {
      faqBtn: 'Questions Fréquentes (FAQ)',
      trustStandards: 'Conforme Codex Welzijn Livre IV, ITM & WBDA 2016',
      trustPed: 'Directive Européenne DESP 2014/68/UE',
    },
    section1: {
      badge: 'Section 1 · La Réalité des Remorques Haute Pression',
      title: 'Ce qu’il faut absolument savoir lors de l’achat d’une remorque haute pression',
      p1: 'Lors de l’acquisition d’une remorque haute pression eau chaude ou vapeur professionnelle (nettoyage de façade, décapage de chewing-gum, désherbage alternatif ou nettoyage industriel), l’attention se concentre naturellement sur la pression de travail (jusqu’à 500 bar), la motorisation et le rendement thermique.',
      p2: 'Ce qu’il faut impérativement savoir à l’achat : Si le brûleur / échangeur de la remorque contient plus de 2 litres d’eau à plus de 110 °C, l’appareil est juridiquement qualifié de générateur de vapeur en DESP Catégorie IV. Avant toute première mise en service, une visite de mise en service par un organisme agréé (EDTC comme Vinçotte en Belgique, NL-CBI aux Pays-Bas, Luxcontrol à Luxembourg) est légalement obligatoire, suivie de réinspections périodiques.',
      p3: 'À l’inverse, les remorques dotées d’un échangeur compact de 2 litres maximum relèvent de l’Article 4 paragraphe 3 (Règles de l’Art / SEP) : 100% exemptées de visite de mise en service et de contrôles périodiques, zéro arrêt forcé et liberté totale d’utiliser des flexibles et accessoires universels certifiés.',
      note: '* Cet intervalle varie selon les pays (en Belgique, un contrôle annuel est requis par défaut sous le Codex ; aux Pays-Bas, l’intervalle est de 24 mois selon le WBDA 2016 ; au Luxembourg, des vérifications annuelles s’appliquent).',
      link2L: 'Pourquoi 2 Litres Détermine le Statut Légal de la Remorque',
      linkGuide: 'Guide des Contrôles & Captivité des Flexibles',
      sidebarBadge: 'Inspection & Contrôle',
      sidebarTitle: 'L’Inspection du Travail contrôle la phase d’exploitation',
      sidebarDesc: 'Le marquage CE ne couvre que la fabrication. Dès qu’une remorque est exploitée sur un chantier, l’employeur est personnellement et pénalement responsable de la validité des attestations de contrôle.',
    },
    section2: {
      badge: 'Section 2 · Audit d’Achat & Maîtrise des Risques',
      title: 'Les 3 questions clés pour chaque acheteur',
      desc: 'Exigez des réponses formelles à ces trois critères essentiels avant de signer le bon de commande d’une remorque haute pression :',
      card1Title: 'Visite de Mise en Service Obligatoire',
      card1Desc: 'L’appareil proposé est-il légalement soumis à un examen initial sur site par un organisme d’inspection agréé (EDTC / NL-CBI) avant son premier chantier ?',
      card1Tag: 'Sans visite initiale, l’exploitation en Catégorie IV est illégale',
      card2Title: 'Contrôles Périodiques Récurrents',
      card2Desc: 'L’équipement est-il exempté ou impose-t-il des réexamens réguliers (1 000 € à 2 500 €) combinés à des jours d’immobilisation de votre équipe ?',
      card2Tag: 'Arrêts réguliers et frais d’audit (tous les 12 à 24 mois)*',
      card3Title: 'Liberté des Pièces (Vendor Lock-in)',
      card3Desc: 'Pouvez-vous monter des flexibles universels de qualité, ou l’absence de pièces de marque d’origine entraîne-t-elle l’annulation du certificat et de l’assurance ?',
      card3Tag: 'Un certificat caduc annule la couverture d’assurance',
    },
    commercialSilence: {
      badge: 'Discours Commercial vs Cadre Légal',
      title: 'Ce que les concessionnaires omettent souvent de préciser',
      desc: 'Pendant les négociations commerciales, l’argumentaire vante la pression de pointe (350 ou 500 bar), la température et le débit de lavage. Les contraintes légales d’exploitation d’un appareil en DESP Catégorie IV ne sont presque jamais abordées de façon proactive.',
      whatDealerSaysBadge: 'Ce Que Dit le Vendeur',
      whatYouNeedToKnowBadge: 'Ce Qu’il Faut Savoir',
      c1Pitch: '« La remorque possède un marquage CE officiel, respecte toutes les normes et est prête à travailler immédiatement. »',
      c1Reality: 'Le marquage CE ne couvre que la fabrication en usine. Si le serpentin dépasse 2 litres à > 110 °C, l’appareil relève de la Catégorie IV : une visite de mise en service sur site par un organisme agréé (EDTC / Vinçotte) est obligatoirement requise avant tout premier travail.',
      c2Pitch: '« La révision annuelle standard de la vidange moteur et des joints de pompe suffit amplement. »',
      c2Reality: 'Pour une remorque Catégorie IV, des réinspections périodiques avec épreuve hydrostatique du serpentin et tarage de la soupape de sûreté sont légalement exigées, générant des coûts d’audit récurrents et des jours d’arrêt machine.',
      c3Pitch: '« Les flexibles haute pression sont des pièces d’usure ; vous pouvez les remplacer par n’importe quel bon flexible. »',
      c3Reality: 'Dans un ensemble certifié Catégorie IV, les flexibles d’origine font partie intégrante de l’homologation. Monter un flexible universel non spécifié rend le certificat CE de l’ensemble caduc, entraînant un refus de prise en charge par les assurances en cas d’accident.',
      solutionTitle: 'L’Alternative Exemptée : Volume d’Eau ≤ 2 Litres (Règles de l’Art / SEP)',
      solutionDesc: 'Les remorques haute pression à serpentin continu compact (≤ 2 litres d’eau) sont 100% exemptées de visite de mise en service et de contrôles périodiques selon l’Article 4 § 3 de la DESP, sans verrouillage constructeur sur les flexibles.',
      solutionBtn: 'Comment Fonctionne le Seuil des 2 Litres',
    },
    sectors: {
      badge: 'Applications Courantes des Remorques Haute Pression',
      title: 'Secteurs & Entreprises Utilisant des Remorques Eau Chaude et Vapeur',
      desc: 'Les remorques et skids haute pression sont omniprésents dans la propreté urbaine et l’industrie. Dès qu’ils produisent de la vapeur (> 110 °C), ils tombent sous surveillance stricte :',
      s1Title: 'Nettoyage de Façades & Bardages',
      s1Desc: 'Élimination des pollutions atmosphériques, algues et mousses sur bâtiments commerciaux, pierre et ponts à l’eau chaude jusqu’à 350 bar.',
      s2Title: 'Décapage de Chewing-gums & Voirie',
      s2Desc: 'Interventions des communes et prestataires sur trottoirs, zones piétonnes et gares grâce à l’action dégraissante de la vapeur haute température.',
      s3Title: 'Désherbage Écologique à la Vapeur',
      s3Desc: 'Désherbage thermique non polluant des voiries et espaces verts à l’eau bouillante (> 100 °C) et vapeur saturée sans produits phytopharmaceutiques.',
      s4Title: 'Effacement de Graffitis & Hydro-Nettoyage Industriel',
      s4Desc: 'Décapage de peintures sur ouvrages d’art, dégraissage de cuves et lavage industriel lourd à des pressions extrêmes atteignant 500 bar.',
    },
    nameplate: {
      badge: 'Vérification Pratique de la Plaque',
      title: 'Comment Vérifier la Plaque Constructeur de Votre Remorque ?',
      subtitle: 'Contrôle Visuel Rapide sur la Machine',
      sc1Badge: 'SCÉNARIO 1 · CAT. IV',
      sc1Title: 'Sigle CE + Numéro NoBo à 4 Chiffres',
      sc1Desc: 'La plaque indique-t-elle « CE 0029 » (Apragaz), « CE 0036 » (TÜV) ou « CE 0620 » (Kiwa) ? La remorque est un ensemble Catégorie IV. Vous ÊTES LÉGALEMENT TENU d’avoir un rapport de mise en service et de réaliser les contrôles périodiques.',
      sc2Badge: 'SCÉNARIO 2 · NON CONFORME',
      sc2Title: 'Sigle CE Isolé (Serpentin > 2L)',
      sc2Desc: 'La remorque a un serpentin > 2 litres à > 110 °C mais affiche un simple marquage CE sans numéro à 4 chiffres ? La certification d’ensemble requise fait défaut. L’appareil ne peut légalement être exploité comme générateur de vapeur Catégorie IV.',
      sc3Badge: 'SCÉNARIO 3 · EXEMPTÉ',
      sc3Title: 'Volume du Brûleur ≤ 2L (SEP)',
      sc3Desc: 'La fiche technique atteste que le serpentin contient 2 litres d’eau au maximum ? La remorque relève des Règles de l’Art (SEP / Art. 4 § 3). Aucun numéro NoBo n’est requis pour la DESP : elle est 100% exempte de contrôle périodique !',
    },
    twoWorlds: {
      badge: 'Analyse Comparative · Sécurité & Contraintes Légales',
      title: 'Comparatif des Deux Mondes de Remorques Haute Pression',
      desc: 'Pourquoi la contenance en eau de l’échangeur détermine si votre remorque travaille librement ou si elle expose votre entreprise à des frais d’audit permanents, des arrêts d’équipe et un verrouillage des pièces d’origine.',
      cat4Badge: 'REMORQUE CLASSIQUE · DESP CAT. IV',
      cat4Vol: 'V > 2 Litres',
      cat4Title: 'Chaudière à Vapeur Mobile à Haut Risque',
      cat4Desc: 'Serpentin contenant 3 à plus de 15 litres d’eau sous pression de vapeur (> 110 °C). Le volume important accumule une énergie thermique explosive potentiellement destructrice.',
      cat4Item1Label: 'Visite de Mise en Service :',
      cat4Item1Desc: 'Légalement obligatoire avant le premier chantier par un EDTC ou NL-CBI (850 € à 1 500 €).',
      cat4Item2Label: 'Contrôles Périodiques (12–24 mois)* :',
      cat4Item2Desc: 'Obligatoires (annuel en BE, tous les 24 mois aux Pays-Bas) avec épreuve hydrostatique et vérification des soupapes.',
      cat4Item3Label: 'Captivité des Pièces (Vendor Lock-in) :',
      cat4Item3Desc: 'Flexibles universels interdits ; monter des pièces tierces annule le CE et l’assurance.',
      cat4Item4Label: 'Risque Inspection du Travail :',
      cat4Item4Desc: 'Arrêt de chantier immédiat (mise sous scellés) et lourde amende en cas de rapport manquant.',
      cat4CostLabel: 'Surcoût Cumulé sur 10 Ans :',
      cat4CostValue: '+ 15 000 € à 25 000 € / remorque',
      sepBadge: 'REMORQUE EXEMPTÉE · ART. 4 § 3 SEP',
      sepVol: 'V ≤ 2 Litres',
      sepTitle: 'Technologie à Débit Continu Intrinsèquement Sûre',
      sepDesc: 'Serpentin continu compact contenant ≤ 2 litres. L’énergie emmagasinée minime élimine le risque d’explosion de chaudière à la source physique.',
      sepItem1Label: 'Visite de Mise en Service :',
      sepItem1Desc: '100% Exemptée sous la directive européenne ; opérationnelle dès le premier jour.',
      sepItem2Label: 'Contrôles Périodiques :',
      sepItem2Desc: 'Aucune inspection périodique imposée ; zéro journée d’arrêt forcé pour vos équipes.',
      sepItem3Label: 'Liberté Totale des Pièces :',
      sepItem3Desc: 'Achat libre de flexibles, lances et buses universels certifiés de votre choix.',
      sepItem4Label: 'Sérénité lors des Audits :',
      sepItem4Desc: 'Pleinement conforme aux lois sur le bien-être au travail ; aucun risque de scellés ni d’amende.',
      sepCostLabel: 'Surcoût Cumulé sur 10 Ans :',
      sepCostValue: '0 € de redevances d’inspection',
      calcBannerTitle: 'Calculez l’écart de coût réel pour votre parc de remorques haute pression',
      calcBannerDesc: 'Comparez 1 à 10 remorques sur 2 à 10 années d’exploitation en intégrant les audits réels et les pertes d’arrêt d’équipe.',
      calcBannerBtn: 'Accéder au Calculateur TCO Remorques',
    },
    teasers: {
      badge: 'Section 3 · Outils & Références Techniques',
      title: 'Connaissances Fondamentales & Simulateurs',
      desc: 'Accès direct aux données thermodynamiques, au calculateur interactif de TCO sur 10 ans et à la checklist d’audit téléchargeable.',
      t1Badge: 'Frontière Physique',
      t1Title: 'Pourquoi 2 Litres Détermine le Régime Légal',
      t1Desc: 'Comparez le Système A (< 2L SEP) et le Système B (> 2L DESP Catégorie IV) en matière d’énergie emmagasinée et de conception de sécurité.',
      t2Badge: 'Modèle Économique',
      t2Title: 'Calculateur TCO des Frais d’Inspection',
      t2Desc: 'Simulez l’impact financier réel des mises en service, des audits récurrents, des jours d’arrêt et des pièces captives sur 2 à 10 ans.',
      t3Badge: 'Guide & Audit',
      t3Title: 'Checklist d’Achat & d’Audit PDF',
      t3Desc: 'Utilisez la checklist complète en 10 points pour sécuriser la conformité avant l’achat et lors des contrôles sur chantier.',
    },
    faqSection: {
      badge: 'Section 4 · Questions & Réponses',
      title: 'Foire Aux Questions sur les Remorques Haute Pression',
      desc: 'Réponses autorisées aux questions récurrentes sur les obligations de contrôle, la limite des 2 litres, les temps d’arrêt et la responsabilité.',
    },
  },

  de: {
    hero: {
      faqBtn: 'Häufige Fragen (FAQ)',
      trustStandards: 'Konform ITM-Vorschriften, Codex Buch IV & WBDA',
      trustPed: 'Europäische Richtlinie DGRL 2014/68/EU',
    },
    section1: {
      badge: 'Abschnitt 1 · Die Realität bei Hochdrucktrailern',
      title: 'Was Sie beim Kauf eines Hochdrucktrailers unbedingt wissen müssen',
      p1: 'Bei der Anschaffung eines professionellen Heißwasser- oder Dampf-Hochdrucktrailers (für Fassadenreinigung, Kaugummientfernung, Unkrautvernichtung oder industrielle Reinigung) liegt das Augenmerk meist auf Arbeitsdruck (bis 500 bar), Motorleistung und Reinigungsdurchsatz.',
      p2: 'Was Sie beim Kauf unbedingt wissen müssen: Beträgt das Wasservolumen des Brenners/Wärmetauschers mehr als 2 Liter bei über 110 °C? Dann gilt der Trailer gesetzlich als mobile Dampfkesselanlage der DGRL Kategorie IV. Vor dem ersten Einsatz ist eine Prüfung vor Inbetriebnahme durch eine zugelassene Überwachungsstelle (EDTC wie Vinçotte in BE, Luxcontrol in LU, NL-CBI in NL) gesetzlich vorgeschrieben, gefolgt von wiederkehrenden Prüfungen.',
      p3: 'Hochdrucktrailer mit einem kompakten Brenner/Wärmetauscher von maximal 2 Litern fallen hingegen unter Artikel 4 Absatz 3 (Gute Ingenieurpraxis / SEP): 100% befreit von Abnahmeprüfungen und wiederkehrenden Audits, keine Stillstandszeiten und volle Freiheit beim Einsatz zertifizierter Universalschläuche.',
      note: '* Die Fristen variieren je nach Staat (in Belgien ist standardmäßig eine jährliche Überprüfung nach dem Codex vorgeschrieben, in den Niederlanden alle 24 Monate nach WBDA 2016, in Luxemburg jährliche Inspektionen).',
      link2L: 'Warum 2 Liter die Grenze bei Hochdrucktrailern Bestimmt',
      linkGuide: 'Prüfleitfaden Hochdrucktrailer & Herstellerbindung',
      sidebarBadge: 'Aufsicht & Durchsetzung',
      sidebarTitle: 'Arbeitsinspektion kontrolliert die Betriebsphase',
      sidebarDesc: 'Die CE-Kennzeichnung deckt nur die Herstellung ab. Sobald das Gerät betrieben wird, haftet der Arbeitgeber persönlich für das Vorliegen gültiger Prüfberichte.',
    },
    section2: {
      badge: 'Abschnitt 2 · Beschaffungsaudit & Risikosteuerung',
      title: 'Die 3 Kernfragen für jeden Einkäufer',
      desc: 'Stellen Sie diese drei entscheidenden Fragen vor der Unterzeichnung des Liefervertrags für einen Hochdrucktrailer:',
      card1Title: 'Prüfung vor Inbetriebnahme',
      card1Desc: 'Muss die Maschine vor dem ersten gewerblichen Einsatz zwingend durch eine akkreditierte Überwachungsstelle (EDTC / ITM / NL-CBI) geprüft und freigegeben werden?',
      card1Tag: 'Ohne Abnahmeprüfung ist der Betrieb in Kategorie IV illegal',
      card2Title: 'Wiederkehrende Pflichtprüfungen',
      card2Desc: 'Bleibt die Anlage prüffrei oder fallen wiederkehrende Prüfgebühren (1.000 € – 2.500 €) sowie teure Ausfalltage für Ihr Reinigungsteam an?',
      card2Tag: 'Regelmäßiger Stillstand und Prüfgebühren (alle 12–24 Monate)*',
      card3Title: 'Teilefreiheit (Vendor Lock-in)',
      card3Desc: 'Dürfen Sie zertifizierte Universalschläuche verwenden oder erlischt bei markenfremden Teilen sofort die Baugruppenzulassung und der Versicherungsschutz?',
      card3Tag: 'Erloschenes Zertifikat führt zum Verlust der Deckung',
    },
    commercialSilence: {
      badge: 'Kaufberatung vs. Gesetzlicher Rahmen',
      title: 'Was Händler beim Verkauf von Hochdrucktrailern selten erwähnen',
      desc: 'Im Verkaufsgespräch für Heißwasser- und Dampftrailer stehen Pumpendruck (350 oder 500 bar), Wassertemperatur und Flächenleistung im Mittelpunkt. Die rechtlichen Betriebspflichten einer DGRL Kategorie IV Anlage werden fast nie proaktiv angesprochen.',
      whatDealerSaysBadge: 'Was der Verkäufer sagt',
      whatYouNeedToKnowBadge: 'Was Sie wissen müssen',
      c1Pitch: '„Der Hochdrucktrailer hat ein offizielles CE-Zeichen, entspricht allen Normen und ist ab Tag eins einsatzbereit.“',
      c1Reality: 'Das CE-Zeichen deckt lediglich die Werksfertigung ab. Hat der Kessel mehr als 2 Liter Inhalt bei > 110 °C, ist vor dem ersten Einsatz eine Vor-Ort-Prüfung vor Inbetriebnahme durch eine zugelassene Überwachungsstelle gesetzlich zwingend vorgeschrieben.',
      c2Pitch: '„Eine reguläre jährliche Wartung von Motoröl und Hochdruckdichtungen reicht völlig aus.“',
      c2Reality: 'Bei einem Kategorie-IV-Trailer ist zusätzlich eine wiederkehrende Prüfung mit Wasserdruckprobe und Sicherheitsventilprüfung vorgeschrieben – mit entsprechenden Gutachterkosten und geplanten Stillstandstagen.',
      c3Pitch: '„Hochdruckschläuche sind Verschleißteile; diese können Sie einfach durch beliebige Schläuche ersetzen.“',
      c3Reality: 'Bei einer Kategorie-IV-Baugruppe sind die Schläuche integraler Bestandteil der Typenzulassung. Der Einsatz von Universalschläuchen lässt das Baugruppenzertifikat erlöschen, wodurch die Betriebshaftpflicht im Schadensfall die Regulierung verweigern kann.',
      solutionTitle: 'Die Prüffreie Alternative: Wasserinhalt ≤ 2 Liter (Gute Ingenieurpraxis / SEP)',
      solutionDesc: 'Hochdrucktrailer mit kompakter Durchlauftechnik (maximal 2 Liter Wasser im Brenner/Wärmetauscher) sind nach Art. 4 Abs. 3 DGRL 100% befreit von Inbetriebnahmeprüfungen und Wiederholungsprüfungen, ohne Knebelung bei Ersatzschläuchen.',
      solutionBtn: 'Wie die 2-Liter-Grenze Funktioniert',
    },
    sectors: {
      badge: 'Typische Einsatzbereiche von Hochdrucktrailern',
      title: 'Branchen & Betriebe, die mit Heißwasser- und Dampftrailern Arbeiten',
      desc: 'Heißwasser-Hochdrucktrailer und mobile Reinigungsskids sind unverzichtbar im gewerblichen Reinigungsgewerbe und in Kommunen. Sobald sie Dampf (> 110 °C) erzeugen, unterliegen sie strenger Kontrolle:',
      s1Title: 'Fassaden- & Oberflächenreinigung',
      s1Desc: 'Beseitigung von Ruß, Algen und Schmutz auf Industriegebäuden, Klinker und Brücken mit Heißwasser bis 350 bar.',
      s2Title: 'Kaugummi- & Straßenreinigung',
      s2Desc: 'Kommunale Dienstleister, die Fußgängerzonen, Bahnhöfe und Marktplätze mit Heißdampf rückstandsfrei von Kaugummi und Fett befreien.',
      s3Title: 'Chemiefreie Unkrautbekämpfung',
      s3Desc: 'Umweltschonende Heißwasser-Unkrautvernichtung auf befestigten Flächen mit kochendem Wasser (> 100 °C) und Dampf ohne Herbizide.',
      s4Title: 'Graffiti- & Industrie-Hydronikreinigung',
      s4Desc: 'Farbentfernung auf Denkmälern, Behälterreinigung und industrielle Entfettung bei extremen Drücken von bis zu 500 bar.',
    },
    nameplate: {
      badge: 'Praktischer Leitfaden Typenschild',
      title: 'Wie Prüfen Sie das Typenschild Ihres Hochdrucktrailers in 30 Sekunden?',
      subtitle: 'Physische Kontrolle am Hochdrucktrailer',
      sc1Badge: 'SZENARIO 1 · KAT. IV',
      sc1Title: 'CE-Zeichen + 4-Stellige NoBo-Nummer',
      sc1Desc: 'Steht auf dem Typenschild „CE 0036“ (TÜV), „CE 0029“ (Apragaz) oder „CE 0620“ (Kiwa)? Dann ist der Trailer eine Kategorie-IV-Baugruppe. Sie SIND GESETZLICH VERPFLICHTET, einen Inbetriebnahmenachweis zu besitzen und regelmäßige Nachprüfungen durchzuführen.',
      sc2Badge: 'SZENARIO 2 · NICHT KONFORM',
      sc2Title: 'Nur CE-Zeichen (> 2L Kessel)',
      sc2Desc: 'Hat der Trailer ein Kesselvolumen von > 2 Litern bei > 110 °C, aber nur ein einfaches CE-Zeichen ohne 4-stellige Nummer? Dann fehlt die erforderliche DGRL-Baugruppenzertifizierung. Die Anlage darf so nicht gewerblich eingesetzt werden.',
      sc3Badge: 'SZENARIO 3 · PRÜFFREI',
      sc3Title: 'Kesselvolumen ≤ 2L (SEP)',
      sc3Desc: 'Bestätigt das Datenblatt maximal 2 Liter Wasserinhalt? Dann fällt der Trailer unter Gute Ingenieurpraxis (SEP / Art. 4 Abs. 3). Keine NoBo-Nummer erforderlich, da der Trailer zu 100% von wiederkehrenden Prüfungen befreit ist!',
    },
    twoWorlds: {
      badge: 'Vergleichende Analyse · Sicherheit & Prüflast',
      title: 'Die Zwei Welten bei Hochdrucktrailern im Vergleich',
      desc: 'Warum das physikalische Kesselvolumen darüber entscheidet, ob Ihr Hochdrucktrailer sofort einsatzbereit ist oder Ihr Unternehmen mit dauerhaften Prüfgebühren, Teamausfall und Herstellerbindung belastet.',
      cat4Badge: 'HERKÖMMLICHER TRAILER · DGRL KAT. IV',
      cat4Vol: 'V > 2 Liter',
      cat4Title: 'Gefahrenträchtiger Mobiler Dampfkessel',
      cat4Desc: 'Heizspirale mit 3 bis 15+ Litern Wasser unter Dampfdruck (> 110 °C). Durch das große Volumen entsteht eine erhebliche gespeicherte thermische Explosionsenergie.',
      cat4Item1Label: 'Prüfung vor Inbetriebnahme:',
      cat4Item1Desc: 'Gesetzlich vorgeschrieben vor dem ersten Einsatz durch eine Überwachungsstelle (850 € – 1.500 €).',
      cat4Item2Label: 'Wiederkehrende Prüfungen (alle 12–24 Mon.)*:',
      cat4Item2Desc: 'Pflichtprüfungen (in BE jährlich, in NL alle 2 Jahre) mit Wasserdruckprüfung und Ventilprüfung.',
      cat4Item3Label: 'Strenge Herstellerbindung:',
      cat4Item3Desc: 'Universalschläuche verboten; Fremdteile lassen Baugruppenzulassung und Versicherung erlöschen.',
      cat4Item4Label: 'Behördliches Risiko:',
      cat4Item4Desc: 'Sofortige Baustellenstilllegung (Versiegelung) und empfindliche Bußgelder bei fehlenden Prüfbüchern.',
      cat4CostLabel: '10-Jahres-Zusatzkosten:',
      cat4CostValue: '+ 15.000 € – 25.000 € / Hochdrucktrailer',
      sepBadge: 'PRÜFFREIER HOCHDRUKTRAILER · ART. 4.3 SEP',
      sepVol: 'V ≤ 2 Liter',
      sepTitle: 'Inhärent Sichere Durchlauftechnik',
      sepDesc: 'Kompakte Monorohr-Durchlaufspirale mit maximal 2 Litern. Minimale gespeicherte Energie schließt Kesselexplosionen direkt an der Quelle aus.',
      sepItem1Label: 'Prüfung vor Inbetriebnahme:',
      sepItem1Desc: '100% Befreit nach EU-Richtlinie; sofort ab Tag eins betriebsbereit.',
      sepItem2Label: 'Wiederkehrende Prüfungen:',
      sepItem2Desc: 'Keine gesetzliche Nachprüfung vorgeschrieben; null Ausfalltage für Ihr Reinigungsteam.',
      sepItem3Label: 'Volle Ersatzteilfreiheit:',
      sepItem3Desc: 'Freie Beschaffung zertifizierter Universalschläuche, Düsen und Lanzen nach Wahl.',
      sepItem4Label: 'Sorglos bei Behördenkontrollen:',
      sepItem4Desc: 'Vollständig gesetzeskonform; kein Risiko von Stilllegungen oder Strafen auf der Baustelle.',
      sepCostLabel: '10-Jahres-Zusatzkosten:',
      sepCostValue: '0 € an amtlichen Prüfgebühren',
      calcBannerTitle: 'Berechnen Sie den genauen Kostenunterschied für Ihren Fuhrpark',
      calcBannerDesc: 'Vergleichen Sie 1 bis 10 Hochdrucktrailer über 2 bis 10 Betriebsjahre inklusive realer Prüf- und Stillstandskosten.',
      calcBannerBtn: 'Zum TCO-Rechner für Hochdrucktrailer',
    },
    teasers: {
      badge: 'Abschnitt 3 · Vertiefung & Praxiswerkzeuge',
      title: 'Fundiertes Fachwissen & Berechnungsmodelle',
      desc: 'Direkter Zugriff auf thermodynamische Grenzwerte, den 10-Jahres-TCO-Rechner und die vollständige Prüfcheckliste.',
      t1Badge: 'Physikalische Grenze',
      t1Title: 'Warum 2 Liter die Schwelle Bestimmt',
      t1Desc: 'Vergleichen Sie System A (< 2L SEP) mit System B (> 2L DGRL Kategorie IV) bezüglich gespeicherter Energie und Sicherheitskonzept.',
      t2Badge: 'Wirtschaftlichkeitsmodell',
      t2Title: 'TCO-Prüfkostenrechner',
      t2Desc: 'Simulieren Sie die tatsächlichen Kosten von Abnahmen, wiederkehrenden Audits, Stillstand und Originalteilen über 2 bis 10 Jahre.',
      t3Badge: 'Leitfaden & Audit',
      t3Title: 'Checkliste für Einkauf & Prüfung PDF',
      t3Desc: 'Nutzen Sie die 10-Punkte-Prüfliste, um vor dem Kauf und bei Audits alle gesetzlichen Vorgaben sicherzustellen.',
    },
    faqSection: {
      badge: 'Abschnitt 4 · Fragen & Antworten',
      title: 'Häufige Fragen zu Druckgeräten & Hochdrucktrailern',
      desc: 'Verlässliche Antworten zu Prüfpflichten, der 2-Liter-Grenze, Stillstandszeiten und Betreiberhaftung.',
    },
  },

  en: {
    hero: {
      faqBtn: 'FAQ & Legal Knowledge',
      trustStandards: 'Harmonised Standards EN 12952 / EN 13445',
      trustPed: 'Directive 2014/68/EU (PED)',
    },
    section1: {
      badge: 'Section 1 · High-Pressure Trailer Compliance Context',
      title: 'What Dealers Rarely Disclose When Selling High-Pressure Trailers',
      p1: 'When procuring a professional high-pressure hot water or steam trailer (for facade maintenance, chewing gum abatement, weed control, or industrial surface cleaning), sales conversations invariably center on working pressure (up to 500 bar), engine power, and cleaning throughput.',
      p2: 'What dealerships almost never disclose: If the internal fluid volume of the burner/heat exchanger exceeds 2 litres at > 110 °C, that high-pressure trailer legally represents a mobile steam boiler under PED Category IV. Consequently, the buyer is legally obligated to contract an accredited body for a formal on-site commissioning audit, undergo periodic recertifications, and respect strict OEM spare parts lock-in.',
      p3: 'Conversely, high-pressure trailers designed with a burner/heat exchanger strictly ≤ 2 litres qualify under Sound Engineering Practice (Art. 4.3 SEP), completely exempting the owner from mandatory pre-commissioning examinations, periodic audits, and OEM vendor lock-in.',
      note: '* This recertification interval may differ per country (e.g. in the Netherlands 24 months under WBDA, in Belgium an annual recertification is required under the Codex, in Germany 1–3 years under BetrSichV, and in specific circumstances manufacturers or inspection bodies may stipulate differing intervals).',
      link2L: 'Why 2 Litres Decides Trailer Classification',
      linkGuide: 'Trailer In-Service Inspection & Recertification Guide',
      sidebarBadge: 'Inspection & Enforcement',
      sidebarTitle: 'Labour Inspectorates Enforce In-Service Rules',
      sidebarDesc: 'A CE mark covers only factory manufacturing. Once operational on European job sites, the employer bears strict liability for valid pre-commissioning certificates and biennial recertifications.',
    },
    section2: {
      badge: 'Section 2 · Procurement Audit & Risk Mitigation',
      title: 'The 3 Critical Questions for Every Buyer',
      desc: 'Demand clear answers to these three legal and technical criteria before executing a purchase agreement for any high-pressure steam trailer:',
      card1Title: 'Pre-Commissioning Inspection',
      card1Desc: 'Is the proposed machine legally mandated to undergo formal on-site commissioning inspection by an accredited body before its first operational deployment?',
      card1Tag: 'Operating Category IV without signoff constitutes a statutory offence',
      card2Title: 'Recurrent Statutory Audits',
      card2Desc: 'Does the equipment remain exempt from recurrent inspections, or does it trigger mandatory 12–24 month reinspections (€ 1,000–€ 2,500) plus recurring operational downtime?',
      card2Tag: 'Every 12–24 months*: statutory shutdown, hydrostatic test, and audit fees',
      card3Title: 'Component Freedom & OEM Lock-in',
      card3Desc: 'Are you permitted to use certified universal replacement parts, or does non-OEM hose/nozzle replacement legally invalidate the assembly certification and insurance cover?',
      card3Tag: 'Voided assembly certificate nullifies insurance indemnity',
    },
    commercialSilence: {
      badge: 'Commercial Pitch vs. Statutory Reality',
      title: 'The Commercial Silence: What High-Pressure Trailer Dealers Fail to Disclose',
      desc: 'During sales negotiations for hot water and steam trailers, prospective buyers are bombarded with pump pressures, diesel engine kilowatts, and cleaning speed. The legal operational burden of operating a PED Category IV machine is almost never proactively disclosed.',
      whatDealerSaysBadge: 'What The Dealer Says',
      whatYouNeedToKnowBadge: 'The Statutory Reality',
      c1Pitch: '“The high-pressure trailer carries an official CE mark, complies with all standards, and is ready to work on day one.”',
      c1Reality: 'A factory CE mark covers only manufacturing. If the burner/heat exchanger volume exceeds 2 litres at > 110 °C, operating without a prior on-site Pre-Commissioning inspection by an accredited body (NL-CBI / EDTC / TÜV) constitutes a statutory offence.',
      c2Pitch: '“Standard annual engine oil and pump maintenance at our dealership is all that you will need.”',
      c2Reality: 'Category IV high-pressure steam trailers are legally subject to mandatory periodic recertification (every 24 months)*. This requires hydrostatic pressure testing (up to 1.43x design pressure) and safety relief valve bench testing, costing € 1,000–€ 2,500 plus 2 days crew downtime.',
      c3Pitch: '“High-pressure hoses wear out naturally; you can replace them with any good hose from your local shop.”',
      c3Reality: 'In a certified Category IV assembly, using non-OEM hoses legally invalidates the entire assembly CE certificate. The high-pressure trailer becomes illegally operated, and commercial insurance will deny all liability claims in case of a burst injury.',
      solutionTitle: 'The Inspection-Exempt Alternative: Water Volume ≤ 2 Litres (Sound Engineering Practice)',
      solutionDesc: 'High-pressure trailers utilizing compact continuous-flow burners/heat exchangers (≤ 2L) are 100% exempt from pre-commissioning examinations, periodic recertifications, and OEM parts vendor lock-in under Article 4(3) of Directive 2014/68/EU.',
      solutionBtn: 'Learn How 2L Protects You',
    },
    sectors: {
      badge: 'Field Applications & Professional Sectors',
      title: 'Sectors Exposed to High-Pressure Trailer Inspection Obligations',
      desc: 'High-pressure trailers and mobile skid units are ubiquitous across cleaning, facility, and municipal operations. If these units produce steam (> 110 °C), they fall under strict pressure equipment scrutiny:',
      s1Title: 'Facade & Surface Cleaning',
      s1Desc: 'Removal of atmospheric soiling, algae, and grime from commercial properties, historical brickwork, and bridges using hot water (200–350 bar).',
      s2Title: 'Chewing Gum & Street Washing',
      s2Desc: 'Municipal contractors clearing chewing gum and grease from pedestrian pavements, transit hubs, and town centres using high-temperature steam.',
      s3Title: 'Thermal Weed Abatement',
      s3Desc: 'Ecological weed control on paved surfaces utilizing boiling water (> 100 °C) and saturated steam without chemical herbicides.',
      s4Title: 'Graffiti & Industrial Hydro-Cleaning',
      s4Desc: 'Paint stripping, tank cleaning, and industrial heavy degreasing at extreme operational pressures reaching up to 500 bar.',
    },
    nameplate: {
      badge: 'Nameplate Verification Protocol',
      title: 'How to Inspect Your High-Pressure Trailer’s Nameplate in 30 Seconds',
      subtitle: 'Physical Audit Guide',
      sc1Badge: 'SCENARIO 1 · CAT. IV',
      sc1Title: 'CE Mark + 4-Digit NoBo Number',
      sc1Desc: 'If the high-pressure trailer data plate displays “CE 0036” (TÜV), “CE 0029” (Apragaz), or “CE 0620” (Kiwa), the complete high-pressure trailer is certified as a Category IV assembly. You MUST possess a valid on-site commissioning report and arrange periodic recertifications.',
      sc2Badge: 'SCENARIO 2 · NON-COMPLIANT',
      sc2Title: 'Generic CE Alone (> 2L Coil)',
      sc2Desc: 'If the high-pressure trailer has a burner/heat exchanger volume > 2 litres at > 110 °C but only displays a generic CE mark with no 4-digit number, the manufacturer has failed to certify the complete assembly under PED. Operating this high-pressure trailer constitutes an immediate breach of European law.',
      sc3Badge: 'SCENARIO 3 · EXEMPT',
      sc3Title: 'Burner/Heat Exchanger Volume ≤ 2L (SEP)',
      sc3Desc: 'If the manufacturer documentation confirms the burner/heat exchanger holds strictly 2 litres or less, the machine qualifies under Sound Engineering Practice. No NoBo number is affixed under PED because it is 100% exempt from commissioning and periodic audits!',
    },
    twoWorlds: {
      badge: 'Comparative Analysis · Trailer Safety & Compliance',
      title: 'The Two Worlds of High-Pressure Steam Trailers',
      desc: 'Why physical burner/heat exchanger volume determines whether your high-pressure trailer operates freely across Europe or subjects your business to continuous inspection costs, team downtime, and strict OEM spare parts lock-in.',
      cat4Badge: 'TRADITIONAL HIGH-PRESSURE TRAILER · PED CAT. IV',
      cat4Vol: 'V > 2 Litres',
      cat4Title: 'High-Hazard Mobile Steam Boiler',
      cat4Desc: 'Fired coil holding 3 to 15+ litres of water under high pressure and steam temperature (> 110 °C). Extreme accumulated thermal energy creates critical explosion hazard.',
      cat4Item1Label: 'Pre-Commissioning Audit:',
      cat4Item1Desc: 'Mandatory formal audit by accredited body before first field use (€ 850–€ 1,500).',
      cat4Item2Label: 'Periodic Recertification:',
      cat4Item2Desc: 'Mandatory every 12–24 months* (depending on member state) with hydrostatic test and safety valve pop-testing.',
      cat4Item3Label: 'Strict Spare Parts Lock-in:',
      cat4Item3Desc: 'Universal hoses prohibited; non-OEM parts instantly void assembly CE and insurance.',
      cat4Item4Label: 'Labour Inspectorate Sanction:',
      cat4Item4Desc: 'Direct shutdown and sealing of high-pressure trailer on-site plus administrative penalties.',
      cat4CostLabel: '10-Year Additional Cost:',
      cat4CostValue: '+ € 15,000 – € 25,000 / high-pressure trailer',
      sepBadge: 'INSPECTION-EXEMPT HIGH-PRESSURE TRAILER · ART. 4.3 SEP',
      sepVol: 'V ≤ 2 Litres',
      sepTitle: 'Inherently Safe Continuous-Flow Unit',
      sepDesc: 'Compact mono-tube burner/heat exchanger coil holding ≤ 2 litres. Minimal stored energy eliminates catastrophic steam explosion risk at the physical source.',
      sepItem1Label: 'Pre-Commissioning Audit:',
      sepItem1Desc: '100% Exempt under European law; deploy immediately from day one.',
      sepItem2Label: 'Periodic Recertification:',
      sepItem2Desc: 'No statutory reinspections required; zero forced operational team downtime.',
      sepItem3Label: 'Component Freedom:',
      sepItem3Desc: 'Free to source certified universal high-pressure hoses, nozzles, and fittings.',
      sepItem4Label: 'Full Legal Peace of Mind:',
      sepItem4Desc: 'Compliant with EU directives; no exposure to labour inspectorate fines or seals.',
      sepCostLabel: '10-Year Additional Cost:',
      sepCostValue: '€ 0 in statutory audit fees',
      calcBannerTitle: 'Calculate exact savings for your high-pressure trailer fleet',
      calcBannerDesc: 'Compare 1 to 10 high-pressure trailers across 2 to 10 operational years with realistic inspection and crew downtime figures.',
      calcBannerBtn: 'Open High-Pressure Trailer TCO Calculator',
    },
    teasers: {
      badge: 'Section 3 · Engineering Tools & References',
      title: 'Essential Knowledge & Calculation Models',
      desc: 'Immediate access to physical threshold physics, the interactive 10-year TCO calculator, and the full downloadable audit checklist.',
      t1Badge: 'Physical Demarcation',
      t1Title: 'Why 2 Litres Dictates the Legal Threshold',
      t1Desc: 'Compare System A (< 2L SEP) with System B (> 2L PED Category IV) regarding stored thermal energy and safety design.',
      t2Badge: 'Financial Model',
      t2Title: 'TCO Inspection Cost Calculator',
      t2Desc: 'Simulate the real lifecycle financial impact of pre-commissioning, biennial audits, downtime, and OEM parts over 2 to 10 years.',
      t3Badge: 'Guide & Audit',
      t3Title: 'Procurement & Audit Checklist PDF',
      t3Desc: 'Use the comprehensive 10-point audit checklist to verify compliance before purchasing and during statutory field audits.',
    },
    faqSection: {
      badge: 'Section 4 · Questions & Answers',
      title: 'Frequently Asked Questions about PED 2014/68/EU',
      desc: 'Authoritative answers to common questions regarding classification, the 2-litre threshold, downtime, and employer liability.',
    },
  },
};

export function getHomeTranslations(lang: SiteLanguage): HomeTranslation {
  return HOME_TRANSLATIONS[lang] || HOME_TRANSLATIONS.nl;
}
