import React from 'react';
import { Cpu, Gauge, Wrench, Truck, CheckCircle, ShieldAlert } from 'lucide-react';
import { MACHINERY } from '../data/companyData';

export const Equipment: React.FC = () => {
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Tornitura':
        return <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-semibold">Tornitura CNC</span>;
      case 'Fresatura/Centri di Lavoro':
        return <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold">Centri di Lavoro Orizzontali</span>;
      case 'Controllo Qualità':
        return <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">Sala Metrologica</span>;
      default:
        return <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-semibold">Attrezzatura Ausiliaria</span>;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tornitura': return <Gauge className="w-6 h-6 text-red-500" />;
      case 'Fresatura/Centri di Lavoro': return <Cpu className="w-6 h-6 text-amber-500" />;
      case 'Controllo Qualità': return <ShieldAlert className="w-6 h-6 text-emerald-500" />;
      default: return <Wrench className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="parco-macchine" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Tecnologia & Capacità</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Alcune Nostre Attrezzature a Vostra Disposizione
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Investiamo costantemente in tecnologia, utensileria ad alte prestazioni e strumenti di collaudo avanzati.
          </p>
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MACHINERY.map((machine) => (
            <div 
              key={machine.id}
              className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(machine.category)}
                  </div>
                  {getCategoryBadge(machine.category)}
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {machine.name}
                </h4>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {machine.description}
                </p>

                {/* Technical Specifications List */}
                <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-2.5">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">
                    Specifiche Tecniche Principali:
                  </div>
                  {machine.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-200 font-mono">
                      <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Stato: <strong className="text-emerald-400">Operativo & Manutenuto</strong></span>
                <span className="font-mono text-[11px] text-slate-400">PRADALUNGA (BG)</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
