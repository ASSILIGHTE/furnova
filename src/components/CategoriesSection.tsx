import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES_DATA } from '../data/furnitureData';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    const element = document.querySelector('#produk');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kategori" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Kategori Koleksi</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
              Temukan Furniture untuk Setiap Ruang
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Didesain presisi untuk menciptakan keharmonisan dan estetika tinggi pada setiap sudut ruangan hunian Anda.
          </p>
        </div>

        {/* Categories Grid (Horizontal Scroll on Mobile, Grid on Desktop) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 scrollbar-none snap-x snap-mandatory">
          {CATEGORIES_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex-shrink-0 w-[280px] sm:w-auto snap-center group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-[#EFE8DF]"
            >
              {/* Background Image with Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Badge: Product Count */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-medium tracking-wider border border-white/30">
                {cat.count}+ Produk
              </div>

              {/* Bottom Card Info */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <h3 className="font-serif text-2xl font-bold mb-1 group-hover:text-[#C5A059] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-stone-300 font-light line-clamp-2 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#C5A059] group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <div className="p-1 rounded-full bg-[#C5A059] text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
