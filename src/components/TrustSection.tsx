import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Sparkles, Compass, UserCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustItems = [
    {
      number: '01',
      title: 'Material Berkualitas',
      description: 'Kayu Jati & Mahoni oven pilihan dari Perhutani grade A tahan iklim tropis.',
      icon: Trees,
    },
    {
      number: '02',
      title: 'Finishing Premium',
      description: 'Tahapan amplas 5 tingkat & polyurethane matte/gloss anti noda & goresan.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Desain Custom',
      description: 'Bebas konsultasikan dimensi, warna, kain, dan gaya sesuai ruang rumah Anda.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Pengerjaan Profesional',
      description: 'Dikerjakan oleh pengrajin mahir berpengalaman lebih dari 15 tahun.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="bg-[#F4EFEA] py-16 border-y border-[#EFE8DF] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Keunggulan FURNOVA</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E16] mt-1">Crafted with Quality</h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE8DF] shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#C5A059] group-hover:scale-110 transition-transform">
                    {item.number}
                  </span>
                  <div className="p-3 bg-[#F4EFEA] rounded-xl text-[#2C1E16] group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C1E16] mb-2">{item.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
