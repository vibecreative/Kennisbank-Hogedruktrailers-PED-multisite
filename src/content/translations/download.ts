import { SiteLanguage } from '../types';

export interface DownloadTranslation {
  header: {
    badge: string;
    title: string;
    desc: string;
  };
  dashboard: {
    title: string;
    progressLabel: string;
    completed: string;
    printBtn: string;
    allPhases: string;
  };
  item: {
    requirementLabel: string;
    phaseLabel: string;
  };
  callout: {
    badge: string;
    title: string;
    desc: string;
    btnTco: string;
    btnWizard: string;
  };
}

export const DOWNLOAD_TRANSLATIONS: Record<SiteLanguage, DownloadTranslation> = {
  nl: {
    header: {
      badge: 'Downloadcenter & Audittool',
      title: 'Inkoop- & Keuringschecklist voor Hogedruktrailers',
      desc: 'De praktische controlelijst voor inkopers, wagenparkbeheerders en directies. Wat u eigenlijk ook moet weten bij de aankoop: 10 gerichte controlevragen om vooraf helderheid te krijgen over keuringsplichten, exploitatiekosten en wettelijke conformiteit.',
    },
    dashboard: {
      title: 'Interactieve Audit & Inkoopchecklist',
      progressLabel: 'Voortgang Audit:',
      completed: 'punten gecontroleerd',
      printBtn: 'Afdrukken / Opslaan als PDF',
      allPhases: 'Alle Fases',
    },
    item: {
      requirementLabel: 'Norm / Wet:',
      phaseLabel: 'Fase:',
    },
    callout: {
      badge: 'Verdere Evaluatie',
      title: 'Wilt u de financiële impact van deze checklist doorrekenen?',
      desc: 'Bekijk direct wat deze controlepunten concreet betekenen voor de exploitatiekosten van uw wagenpark.',
      btnTco: 'Naar TCO Calculator',
      btnWizard: 'Start 30-Seconden Check',
    },
  },

  fr: {
    header: {
      badge: 'Centre de Téléchargement & Outil d’Audit',
      title: 'Checklist d’Achat & d’Inspection pour Remorques Haute Pression',
      desc: 'La liste de contrôle pratique pour acheteurs, gestionnaires de flotte et directions QHSE. Ce qu’il faut savoir à l’achat : 10 questions ciblées pour anticiper les obligations de contrôle, les coûts d’exploitation et la conformité légale.',
    },
    dashboard: {
      title: 'Tableau de Bord Interactif & Checklist d’Achat',
      progressLabel: 'Progression de l’Audit :',
      completed: 'points vérifiés',
      printBtn: 'Imprimer / Enregistrer en PDF',
      allPhases: 'Toutes les Phases',
    },
    item: {
      requirementLabel: 'Norme / Référence :',
      phaseLabel: 'Phase :',
    },
    callout: {
      badge: 'Évaluation Complémentaire',
      title: 'Voulez-vous chiffrer l’impact financier de cette checklist ?',
      desc: 'Simulez précisément ce que ces points de contrôle représentent sur le coût total d’exploitation de vos machines.',
      btnTco: 'Accéder au Simulateur TCO',
      btnWizard: 'Lancer le Test de Conformité',
    },
  },

  de: {
    header: {
      badge: 'Downloadcenter & Auditwerkzeug',
      title: 'Beschaffungs- & Prüfcheckliste für Hochdrucktrailer',
      desc: 'Die praxisorientierte Checkliste für Einkäufer, Fuhrparkleiter und Sicherheitsbeauftragte. Was Sie beim Kauf wissen müssen: 10 gezielte Kontrollfragen zur frühzeitigen Klärung von Prüfpflichten, Betriebskosten und Rechtskonformität.',
    },
    dashboard: {
      title: 'Interaktives Dashboard & Einkaufscheckliste',
      progressLabel: 'Audit-Fortschritt:',
      completed: 'Punkte geprüft',
      printBtn: 'Drucken / Als PDF Speichern',
      allPhases: 'Alle Phasen',
    },
    item: {
      requirementLabel: 'Norm / Vorschrift:',
      phaseLabel: 'Phase:',
    },
    callout: {
      badge: 'Weiterführende Analyse',
      title: 'Möchten Sie die wirtschaftlichen Auswirkungen berechnen?',
      desc: 'Ermitteln Sie sofort, wie sich diese Prüfpunkte auf die Gesamtbetriebskosten Ihres Maschinenparks auswirken.',
      btnTco: 'Zum TCO-Rechner',
      btnWizard: '30-Sekunden-Check Starten',
    },
  },

  en: {
    header: {
      badge: 'Audit Center & Statutory Guide',
      title: 'High-Pressure Trailer Procurement & Compliance Checklist',
      desc: 'The actionable compliance checklist for trailer buyers, fleet managers, and QHSE officers. Ask the 10 critical verification questions to your trailer dealer before signing the purchase order, and safeguard statutory conformity with Directive 2014/68/EU.',
    },
    dashboard: {
      title: 'Interactive Audit & Procurement Dashboard',
      progressLabel: 'Audit Progress:',
      completed: 'items verified',
      printBtn: 'Print / Save as PDF',
      allPhases: 'All Phases',
    },
    item: {
      requirementLabel: 'Standard / Requirement:',
      phaseLabel: 'Phase:',
    },
    callout: {
      badge: 'Further Evaluation',
      title: 'Want to calculate the financial impact of this audit?',
      desc: 'Model precisely how these verification criteria translate into 10-year fleet lifecycle overhead.',
      btnTco: 'Open TCO Calculator',
      btnWizard: 'Start Compliance Check',
    },
  },
};

export function getDownloadTranslations(lang: SiteLanguage): DownloadTranslation {
  return DOWNLOAD_TRANSLATIONS[lang] || DOWNLOAD_TRANSLATIONS.nl;
}
