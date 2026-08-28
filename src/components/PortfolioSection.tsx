import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/furnitureData';
import { MapPin, Calendar, Layers } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Residential', 'Apartment', 'Office', 'Restaurant'];

  const filteredPortfolio =
    activeTab === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Portfolio Project</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
              Project yang Telah Kami Kerjakan
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Mulai dari residensial pribadi, penthouse luxury, kantor eksekutif, hingga cafe dan vila resort ternama di Indonesia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-[#2C1E16] text-white shadow-md'
                  : 'bg-[#F4EFEA] text-stone-600 hover:bg-[#EFE8DF] border border-[#EFE8DF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#F4EFEA] rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2C1E16]/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/20">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <div className="flex items-center gap-1 text-[#C5A059] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-light">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C1E16] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-start gap-2 text-xs text-stone-600 pt-3 border-t border-[#EFE8DF] font-light">
                  <Layers className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span>{item.furnitureTypes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
