import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FloatingWA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWA = () => {
    const text = encodeURIComponent(`Halo ${SITE_CONFIG.brandName}, saya ingin berkonsultasi mengenai furniture.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#2C1E16] text-white text-xs font-semibold px-4 py-2 rounded-2xl shadow-2xl border border-[#C5A059]/40 animate-bounce">
          <span>Konsultasi WA ({SITE_CONFIG.phoneDisplay})</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpenWA}
        aria-label="Contact WhatsApp"
        className="relative group p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
      </button>
    </div>
  );
};

