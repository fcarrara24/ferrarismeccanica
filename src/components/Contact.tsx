import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact: React.FC = () => {
  return (
    <section id="contatti" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Contatti</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Richiedi la Vostra Prima Offerta o Collaborazione
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Siamo a completa disposizione per esaminare i vostri disegni tecnici e proporvi soluzioni tempestive.
          </p>
        </div>

        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Diretta</h5>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="text-white hover:text-red-400 text-lg font-mono font-bold block transition-colors mt-1"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telefono</h5>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                  className="text-white hover:text-red-400 text-lg font-mono font-bold block transition-colors mt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-xs text-slate-400">Referente: {COMPANY_INFO.owner}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Risposta rapida entro 24-48 ore</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Analisi tecnica e preventivo gratuito</span>
            </div>
          </div>

          <div className="pt-4">
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-lg shadow-xl shadow-red-900/30 transition-all"
            >
              <Mail className="w-5 h-5" />
              Invia una Email per una Richiesta
            </a>
          </div>

        </div>

        <div className="mt-8 text-slate-500 text-xs">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            {COMPANY_INFO.address}, {COMPANY_INFO.postalCode} {COMPANY_INFO.city} ({COMPANY_INFO.province})
          </p>
        </div>
      </div>
    </section>
  );
};
