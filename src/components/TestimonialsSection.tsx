import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/furnitureData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F4EFEA] border-y border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Kepercayaan Klien</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
            Pengalaman nyata pemilik hunian, arsitek, dan desainer interior yang telah mengamanahkan kebutuhan furniture mereka kepada FURNOVA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE8DF] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#C5A059]/20" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="text-stone-700 text-xs sm:text-sm font-light leading-relaxed italic mb-8">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#EFE8DF]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059]"
                />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#2C1E16]">{t.name}</h4>
                  <p className="text-[11px] text-[#C5A059] font-medium">{t.role} • <span className="text-stone-500 font-light">{t.project}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
