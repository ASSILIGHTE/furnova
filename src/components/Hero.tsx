import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, ShieldCheck, Hammer, Award, Star, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationWA = () => {
    const message = encodeURIComponent(
      `Halo ${SITE_CONFIG.brandName}, saya berminat konsultasi custom furniture / interior ruangan.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero_interior.png')` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF8F5] via-transparent to-black/50" />

      {/* Hero Main Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl border border-[#C5A059]/40 px-5 py-2 rounded-full text-white text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
          <span>Crafted Elegance • 100% Solid Wood • Custom Precision</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-5xl drop-shadow-lg"
        >
          Furniture Kayu Solid Premium untuk <span className="italic font-normal text-[#EFE8DF] underline decoration-[#C5A059]/70 underline-offset-8">Ruang Berkelas & Abadi</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-stone-200 text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-10 text-balance drop-shadow-md"
        >
          Wujudkan kenyamanan hunian impian dengan sentuhan pengrajin ahli. Didesain secara eksklusif dari kayu jati oven grade A, presisi tinggi, dan garansi resmi hingga 10 tahun.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <button
            onClick={() => scrollToSection('#produk')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#b59048] text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Jelajahi Koleksi</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollToSection('#custom')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1"
          >
            <Hammer className="w-4 h-4 text-[#C5A059]" />
            <span>Kebutuhan Custom 3D</span>
          </button>
        </motion.div>

        {/* Social Proof & Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 pt-6 border-t border-white/15 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#C5A059] mb-1">
              <Users className="w-4 h-4" />
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-white">10.000+</span>
            </div>
            <span className="text-[10px] sm:text-xs text-stone-300 font-light uppercase tracking-wider">Proyek Terpasang</span>
          </div>

          <div className="flex flex-col items-center border-x border-white/15 px-4">
            <div className="flex items-center gap-1 text-[#C5A059] mb-1">
              <Star className="w-4 h-4 fill-[#C5A059]" />
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-white">4.9 / 5.0</span>
            </div>
            <span className="text-[10px] sm:text-xs text-stone-300 font-light uppercase tracking-wider">Kepuasan Pelanggan</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#C5A059] mb-1">
              <Award className="w-4 h-4" />
              <span className="font-serif text-xl sm:text-3xl font-extrabold text-white">10 Th</span>
            </div>
            <span className="text-[10px] sm:text-xs text-stone-300 font-light uppercase tracking-wider">Garansi Kayu Jati</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleConsultationWA}
        className="hidden lg:flex absolute bottom-12 right-12 bg-black/70 backdrop-blur-md border border-[#C5A059]/40 rounded-2xl p-4 text-left text-white max-w-xs shadow-2xl items-center gap-3 cursor-pointer hover:border-[#C5A059] transition-all transform hover:scale-105"
      >
        <div className="bg-[#C5A059]/20 p-2.5 rounded-xl border border-[#C5A059]">
          <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">100% Guaranteed Quality</div>
          <div className="text-xs text-stone-300">Konsultasi WA: {SITE_CONFIG.phoneDisplay}</div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Scroll Down</span>
        <div className="w-0.5 h-7 bg-gradient-to-b from-[#C5A059] to-transparent animate-bounce" />
      </div>
    </section>
  );
};

