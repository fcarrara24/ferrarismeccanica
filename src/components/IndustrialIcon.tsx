import React from 'react';

export const IndustrialIcon: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background gear gear */}
      <circle cx="200" cy="200" r="150" fill="#0f172a" />
      
      {/* Stylized Gear */}
      <path 
        d="M200 50 L220 80 L250 80 L260 110 L290 120 L295 150 L325 160 L325 190 L350 200 L325 210 L325 240 L295 250 L290 280 L260 290 L250 320 L220 320 L200 350 L180 320 L150 320 L140 290 L110 280 L105 250 L75 240 L75 210 L50 200 L75 190 L75 160 L105 150 L110 120 L140 110 L150 80 L180 80 Z"
        fill="none" 
        stroke="#ef4444" 
        strokeWidth="15" 
        strokeLinejoin="round" 
      />
      
      {/* Precision Target */}
      <circle cx="200" cy="200" r="80" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="10 10" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="#ef4444" strokeWidth="4" />
      
      {/* Crosshair */}
      <line x1="200" y1="120" x2="200" y2="280" stroke="#64748b" strokeWidth="2" />
      <line x1="120" y1="200" x2="280" y2="200" stroke="#64748b" strokeWidth="2" />
      
      {/* Central Cog */}
      <circle cx="200" cy="200" r="20" fill="#ef4444" />
    </svg>
  );
};
