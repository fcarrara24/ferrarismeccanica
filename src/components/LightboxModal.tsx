import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitle: string;
  imageDescription: string;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageTitle,
  imageDescription,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors z-50 border border-slate-700"
        aria-label="Chiudi finestra"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors border border-slate-700 z-40"
        aria-label="Immagine precedente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors border border-slate-700 z-40"
        aria-label="Immagine successiva"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={imageSrc}
          alt={imageTitle}
          className="max-h-[75vh] max-w-full object-contain rounded-xl border border-slate-800 shadow-2xl"
        />

        {/* Caption Bar */}
        <div className="mt-4 text-center">
          <h4 className="text-white font-bold text-lg sm:text-xl">{imageTitle}</h4>
          <p className="text-slate-300 text-sm mt-2">{imageDescription}</p>
          <p className="text-slate-500 text-xs mt-3 font-mono">
            Immagine {currentIndex + 1} di {totalCount} • Ferraris Meccanica
          </p>
        </div>
      </div>
    </div>
  );
};
