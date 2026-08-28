import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowDownRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const PromoBanner: React.FC = () => {
  const handleConsultation = () => {
    const text = encodeURIComponent(`Halo ${SITE_CONFIG.brandName}, saya ingin berkonsultasi mengenai penataan furniture untuk ruangan saya.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${text}`, '_blank');
  };

  const scrollToProducts = () => {
    const el = document.querySelector('#produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-[#1A1A1A] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/images/hero_interior.png')` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2C1E16]/90 via-[#2C1E16]/80 to-black/90" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Mulai Langkah Pertama</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            Siap Mengubah Ruangan Anda?
          </h2>
          <p className="text-stone-300 text-sm sm:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Konsultasikan kebutuhan furniture Anda bersama tim kami secara gratis. Dapatkan solusi tata letak, pilihan kayu, dan penawaran terbaik.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b59048] text-white px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Konsultasi WA ({SITE_CONFIG.phoneDisplay})</span>
            </button>

            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all"
            >
              <span>Lihat Produk</span>
              <ArrowDownRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

