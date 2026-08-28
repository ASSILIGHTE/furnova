import React from 'react';
import { motion } from 'framer-motion';
import { MATERIALS_DATA } from '../data/furnitureData';
import { Check } from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Kualitas Pilihan</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
            Material yang Kami Gunakan
          </h2>
          <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
            Standar bahan baku pilihan bersertifikasi resmi yang menjamin keindahan serat alami, daya tahan, dan kemewahan fisik furniture Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MATERIALS_DATA.map((mat, idx) => (
            <motion.div
              key={mat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE8DF]">
                <img
                  src={mat.image}
                  alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] block mb-1">
                    {mat.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#2C1E16] mb-3">{mat.name}</h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                    {mat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFE8DF]">
                  <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#2C1E16] mb-2">Keunggulan:</h4>
                  <ul className="space-y-1.5">
                    {mat.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-700 font-light">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
