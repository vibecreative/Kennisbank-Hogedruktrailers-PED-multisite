import { SiteLanguage } from '../types';

export interface FaqPageTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  deepDive: {
    badge: string;
    title: string;
    card1Badge: string;
    card1Title: string;
    card1Desc: string;
    card2Badge: string;
    card2Title: string;
    card2Desc: string;
    card3Badge: string;
    card3Title: string;
    card3Desc: string;
  };
}

export const FAQ_PAGE_TRANSLATIONS: Record<SiteLanguage, FaqPageTranslation> = {
  nl: {
    header: {
      badge: 'Kennisplatform Vragen & Antwoorden',
      title: 'Veelgestelde Vragen over Keuringsplicht bij Hogedruktrailers',
      desc: 'Duidelijke en juridisch getoetste antwoorden op de belangrijkste vragen van inkopers, wagenparkbeheerders, preventiediensten en gebruikers van professionele heetwater- en stoom-hogedruktrailers.',
    },
    deepDive: {
      badge: 'Verder Lezen in de Kennisbank',
      title: 'Gerelateerde Kennisbank Onderwerpen',
      card1Badge: 'Wetgeving',
      card1Title: 'Wettelijk Kader Benelux',
      card1Desc: 'Diepgaande toelichting op WBDA 2016, Codex Welzijn en Luxemburgse ITM regelgeving.',
      card2Badge: 'Techniek & Fysica',
      card2Title: 'De 2-Liter Grens Uitgelegd',
      card2Desc: 'Waarom 2 liter het cruciale criterium is volgens de Europese PED-richtlijn 2014/68/EU.',
      card3Badge: 'Rekenmodel',
      card3Title: 'TCO Keuringskosten Calculator',
      card3Desc: 'Bereken direct de werkelijke exploitatiekosten en stilstand over 2 tot 10 jaar.',
    },
  },

  fr: {
    header: {
      badge: 'Plateforme d’Information · Questions & Réponses',
      title: 'Foire Aux Questions sur le Contrôle des Remorques Haute Pression',
      desc: 'Réponses juridiquement vérifiées et techniques aux questions des acheteurs, gestionnaires de flotte, services de prévention et exploitants de remorques eau chaude et vapeur.',
    },
    deepDive: {
      badge: 'Poursuivre la Lecture',
      title: 'Sujets Connexes de la Base de Connaissances',
      card1Badge: 'Législation',
      card1Title: 'Cadre Réglementaire Benelux',
      card1Desc: 'Explications approfondies sur le Codex belge Livre IV, l’ITM à Luxembourg et le WBDA aux Pays-Bas.',
      card2Badge: 'Physique & Technique',
      card2Title: 'Le Seuil des 2 Litres Détaillé',
      card2Desc: 'Pourquoi 2 litres constitue le pivot légal de la directive européenne DESP 2014/68/UE.',
      card3Badge: 'Simulateur',
      card3Title: 'Calculateur TCO des Frais d’Audit',
      card3Desc: 'Chiffrez directement les coûts d’inspection, d’arrêt et de pièces captives sur 2 à 10 ans.',
    },
  },

  de: {
    header: {
      badge: 'Wissensplattform · Fragen & Antworten',
      title: 'Häufige Fragen zur Prüfpflicht bei Hochdrucktrailern',
      desc: 'Rechtlich geprüfte und fundierte Antworten auf die wichtigsten Fragen von Einkäufern, Fuhrparkleitern und Betreibern von Heißwasser- und Dampf-Hochdrucktrailern.',
    },
    deepDive: {
      badge: 'Weiterführende Themen',
      title: 'Verwandte Module der Wissensplattform',
      card1Badge: 'Gesetzgebung',
      card1Title: 'Gesetzlicher Rahmen Benelux',
      card1Desc: 'Detaillierte Erläuterungen zu luxemburgischen ITM-Vorschriften, dem belgischen Codex und dem niederländischen WBDA.',
      card2Badge: 'Physik & Technik',
      card2Title: 'Die 2-Liter-Grenze Erklärt',
      card2Desc: 'Warum 2 Liter das entscheidende Kriterium der europäischen DGRL 2014/68/EU darstellt.',
      card3Badge: 'Kostenrechner',
      card3Title: 'TCO-Prüfkostenrechner',
      card3Desc: 'Berechnen Sie die realen Betriebskosten und Stillstandszeiten über 2 bis 10 Jahre.',
    },
  },

  en: {
    header: {
      badge: 'Knowledge Platform Q&A',
      title: 'Frequently Asked Questions: High-Pressure Trailer PED Compliance & Audits',
      desc: 'Authoritative, legally vetted answers to key questions from fleet directors, procurement officers, EHS safety auditors, and operators of industrial high-pressure hot water and steam trailers.',
    },
    deepDive: {
      badge: 'Further Knowledge Bank Topics',
      title: 'Related Engineering & Compliance Modules',
      card1Badge: 'Regulation',
      card1Title: 'European & National Frameworks',
      card1Desc: 'Comprehensive guides to national in-service enforcement and Member State regimes.',
      card2Badge: 'Thermodynamics',
      card2Title: 'The 2-Litre Criterion Explained',
      card2Desc: 'Why 2 litres dictates the statutory dividing line under Directive 2014/68/EU.',
      card3Badge: 'Economics',
      card3Title: 'TCO Inspection Calculator',
      card3Desc: 'Simulate the full 10-year lifecycle financial impact of statutory testing and downtime.',
    },
  },
};

export function getFaqPageTranslations(lang: SiteLanguage): FaqPageTranslation {
  return FAQ_PAGE_TRANSLATIONS[lang] || FAQ_PAGE_TRANSLATIONS.nl;
}
