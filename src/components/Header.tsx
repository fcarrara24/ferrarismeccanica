import React, { useState } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'chi-siamo', label: 'Chi Siamo' },
    { id: 'servizi', label: 'Servizi' },
    { id: 'parco-macchine', label: 'Parco Macchine' },
    { id: 'galleria', label: 'Galleria' },
    { id: 'contatti', label: 'Contatti' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Bar for fast contact */}
      <div className="bg-slate-950 py-1.5 px-4 text-xs text-slate-400 border-b border-slate-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="text-slate-400">
            <span>{COMPANY_INFO.address}, {COMPANY_INFO.city} ({COMPANY_INFO.province})</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Branding */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative overflow-hidden rounded-lg bg-white p-1 border border-slate-700 shadow-md group-hover:border-red-500 transition-all">
              <img 
                src="logo.jpg" 
                alt="Ferraris Meccanica Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback icon if logo not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block group-hover:text-red-400 transition-colors">
                FERRARIS <span className="text-red-500 font-extrabold">MECCANICA</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase block font-medium">
                S.a.s. • Pradalunga (BG)
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-red-600/10 text-red-400 border border-red-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contatti')}
              className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-900/30 transition-all flex items-center gap-1.5"
            >
              <span>Richiedi Preventivo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-red-600/20 text-red-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contatti')}
            className="w-full mt-4 px-4 py-3 rounded-lg text-center font-bold text-white bg-red-600 hover:bg-red-500 shadow-md transition-colors"
          >
            Richiedi Preventivo
          </button>
        </div>
      )}
    </header>
  );
};
