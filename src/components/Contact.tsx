import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Upload, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Tornitura',
    message: '',
    fileAttached: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, fileAttached: true }));
    }
  };

  return (
    <section id="contatti" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Contatti & Preventivi</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Richiedi la Vostra Prima Offerta o Collaborazione
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Siamo a completa disposizione per esaminare i vostri disegni tecnici e proporvi soluzioni tempestive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Company info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <h4 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Ferraris Meccanica S.a.s.
              </h4>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Indirizzo Sede</h5>
                  <p className="text-slate-200 text-sm mt-1 font-medium">
                    {COMPANY_INFO.address}<br />
                    {COMPANY_INFO.postalCode} {COMPANY_INFO.city} ({COMPANY_INFO.province}) - {COMPANY_INFO.country}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Diretta</h5>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-red-400 hover:text-red-300 text-sm mt-1 font-mono font-medium block transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cellulare / Telefono</h5>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                    className="text-white hover:text-red-400 text-sm mt-1 font-mono font-bold block transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400">Referente: {COMPANY_INFO.owner}</span>
                </div>
              </div>

              {/* Timing Guarantee */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Risposta rapida entro 24-48 ore lavorative</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Analisi tecnica di fattibilità e preventivo gratuito</span>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder / Button */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
              <h5 className="text-sm font-bold text-white mb-2">Come Raggiungerci</h5>
              <p className="text-xs text-slate-400 mb-4">
                Ci troviamo nella zona industriale di Pradalunga (Bergamo), ben collegati con le principali vie di comunicazione lombarde.
              </p>
              <a 
                href={COMPANY_INFO.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-red-400 hover:bg-slate-800 border border-slate-700 text-xs font-bold transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Apri in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Drawing Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Richiesta Inviata con Successo!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Grazie per averci contattato. La Direzione Tecnica di Ferraris Meccanica analizzerà i dettagli ed il disegno inviato per rispondervi al più presto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                    Modulo Richiesta Preventivo / Disegno Tecnico
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Es. Mario Rossi"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Azienda / Ragione Sociale
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Es. S.p.A. / S.r.l."
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Email di Contatto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nome@azienda.it"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 035 123456"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Tipo di Lavorazione d'Interesse
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Tornitura">Tornitura Meccanica (fino Ø 650 mm)</option>
                      <option value="Centri di Lavoro">Centro di Lavoro Orizzontale Multi-Pallet (10 Tavole)</option>
                      <option value="Oil & Gas">Componentistica Oil & Gas / Valvolame</option>
                      <option value="Prototipazione">Prototipi / Pezzo Singolo</option>
                      <option value="Altro">Altro / Consulta Generica</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Messaggio o Note sul Progetto *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrivi le specifiche, i quantitativi richiesti ed i tempi di consegna desiderati..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 transition-colors"
                    ></textarea>
                  </div>

                  {/* Attachment Simulation */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-dashed border-slate-700 text-center">
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-1">
                      <Upload className="w-5 h-5 text-red-500" />
                      <span className="text-xs font-semibold text-slate-300">
                        {formData.fileAttached ? '✓ Disegno allegato con successo' : 'Allega Disegno Tecnico (PDF, STEP, DWG)'}
                      </span>
                      <span className="text-[10px] text-slate-500">Max 25MB • Trattamento riservato dei dati</span>
                      <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-xl shadow-red-900/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Invia Richiesta Preventivo</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    Inviando questo modulo acconsenti al trattamento dei dati personali secondo la normativa Privacy (GDPR UE 2016/679).
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
