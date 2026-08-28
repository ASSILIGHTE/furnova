import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Sliders, DollarSign, Wrench, Truck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Material Berkualitas',
      description: 'Kami menggunakan kayu jati & mahoni oven grade A pilihan yang lolos seleksi kadar air dan bebas hama.',
      icon: ShieldCheck,
    },
    {
      title: 'Dibuat dengan Detail',
      description: 'Setiap lekuk, sambungan kayu, dan lapis finishing dikerjakan presisi tinggi oleh pengrajin berpengalaman.',
      icon: Award,
    },
    {
      title: 'Custom Sesuai Kebutuhan',
      description: 'Ukuran, jenis kayu, warna stain/cat, dan jenis kain pelapis dapat disesuaikan 100% dengan kebutuhan ruangan.',
      icon: Sliders,
    },
    {
      title: 'Harga Transparan',
      description: 'Rincian biaya dan spesifikasi material disampaikan terbuka sejak awal tanpa ada biaya tersembunyi.',
      icon: DollarSign,
    },
    {
      title: 'Garansi Resmi Produk',
      description: 'Jaminan garansi konstruksi hingga 3 tahun dan garansi hardware 1 tahun untuk ketenangan Anda.',
      icon: Wrench,
    },
    {
      title: 'Pengiriman & Instalasi',
      description: 'Tim kami siap mengantar dan merakit furniture secara profesional langsung di hunian Anda.',
      icon: Truck,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F4EFEA] border-y border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Banner */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#EFE8DF]"
          >
            <img
              src="/images/hero_interior.png"
              alt="FURNOVA Luxury Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/90 via-[#2C1E16]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Standard Exclusif</span>
              <h3 className="font-serif text-2xl font-bold mt-1">Komitmen Kualitas Tanpa Kompromi</h3>
              <p className="text-xs text-stone-300 font-light mt-2 leading-relaxed">
                Menghadirkan keindahan alami kayu solid dan kenyamanan yang bertahan hingga generasi mendatang.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 6 Features Grid */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Mengapa FURNOVA?</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1E16] mt-2">
                Kenapa Memilih FURNOVA?
              </h2>
              <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
                Kami percaya bahwa furniture bukan sekadar perabot, melainkan investasi jangka panjang yang mempercantik nilai hunian Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE8DF] shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="p-3 bg-[#F4EFEA] text-[#2C1E16] w-fit rounded-xl mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#2C1E16] mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-xs leading-relaxed font-light">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
