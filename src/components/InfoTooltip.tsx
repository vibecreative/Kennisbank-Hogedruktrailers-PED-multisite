import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, X, Info } from 'lucide-react';

export interface InfoTooltipProps {
  id?: string;
  title: string;
  badge?: string;
  badgeType?: 'neutral' | 'warning' | 'info' | 'success';
  content: React.ReactNode;
  iconClassName?: string;
  buttonAriaLabel?: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  id,
  title,
  badge,
  badgeType = 'info',
  content,
  iconClassName = 'w-4 h-4 text-slate-400 hover:text-amber-600',
  buttonAriaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Slight delay to avoid flickering
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen((prev) => !prev);
  };

  const badgeStyles = {
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    warning: 'bg-amber-50 text-amber-800 border-amber-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  }[badgeType];

  return (
    <div 
      ref={containerRef}
      className="relative inline-flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        id={id}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={buttonAriaLabel || `Meer informatie over ${title}`}
        className="p-1 -m-1 rounded-full text-slate-400 hover:text-amber-600 focus:outline-hidden focus:ring-2 focus:ring-amber-500/40 transition-colors inline-flex items-center justify-center cursor-pointer"
      >
        <HelpCircle className={iconClassName} />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          className="absolute z-50 left-0 top-full mt-2 w-72 sm:w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-xl shadow-xl border border-slate-200/90 p-4 text-left animate-in fade-in zoom-in-95 duration-150 text-slate-700"
          style={{
            filter: 'drop-shadow(0 10px 15px -3px rgba(0, 0, 0, 0.1)) drop-shadow(0 4px 6px -4px rgba(0, 0, 0, 0.1))',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-slate-100">
            <div className="space-y-1 pr-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-semibold text-slate-900 text-xs leading-snug">
                  {title}
                </span>
                {badge && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border font-medium ${badgeStyles}`}>
                    {badge}
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Sluit toelichting"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="pt-2.5 text-xs leading-relaxed space-y-2 text-slate-600">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
