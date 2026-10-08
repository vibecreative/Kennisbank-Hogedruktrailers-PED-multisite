import React from 'react';
import { X } from 'lucide-react';
import { Wizard } from './Wizard';
import { useSiteContent } from '../content';

interface WizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}

export const WizardModal: React.FC<WizardModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const { target } = useSiteContent();
  const isEurope = target === 'europe';

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label={isEurope ? "Close compliance check" : "Sluit wizard"}
        >
          <X className="w-5 h-5" />
        </button>

        <Wizard 
          onNavigate={(slug) => {
            onClose();
            onNavigate(slug);
          }} 
        />
      </div>
    </div>
  );
};
