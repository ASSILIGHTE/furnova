import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2, Hammer, Ruler, Palette, Truck, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const CustomFurnitureSection: React.FC = () => {
  const [customForm, setCustomForm] = useState({
    name: '',
    phone: '',
    type: 'Living Room',
    material: 'Kayu Jati Solid',
    notes: '',
  });

  const steps = [
    {
      number: '01',
      title: 'Konsultasi Desain',
      description: 'Diskusi ide, gaya interior, sampel material, dan estimasi budget awal tanpa biaya.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Pengukuran Presisi',
      description: 'Tim kami dapat datang langsung ke lokasi Anda untuk survey dimensi rincian ruang.',
      icon: Ruler,
    },
    {
      number: '03',
      title: 'Visual 3D & Specs',
      description: 'Pembuatan render visual 3D & gambar kerja teknis sebelum masuk proses workshop.',
      icon: Palette,
    },
    {
      number: '04',
      title: 'Produksi Workshop',
      description: 'Pengerjaan kayu solid oven & finishing 5-layer oleh pengrajin ahli di Jepara/Bogor.',
      icon: Hammer,
    },
    {
      number: '05',
      title: 'Delivery & Instalasi',
      description: 'Pengiriman aman dengan wrapping tebal & pemasangan rapi langsung di hunian Anda.',
      icon: Truck,
    },
  ];

  const handleSubmitCustomWA = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo ${SITE_CONFIG.brandName}, saya ingin berkonsultasi mengenai *FURNITURE CUSTOM*:
- *Nama*: ${customForm.name}
- *No. WhatsApp*: ${customForm.phone}
- *Jenis Furniture*: ${customForm.type}
- *Pilihan Material*: ${customForm.material}
- *Catatan / Kebutuhan*: ${customForm.notes || '-'}

Mohon informasi estimasi biaya dan waktu pengerjaan. Terima kasih!`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };


  return (
    <section id="custom" className="py-24 bg-[#2C1E16] text-white relative overflow-hidden">
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Bespoke Craftsmanship</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Furniture Sesuai Ruang dan Gaya Anda
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Memiliki desain sendiri? Kami membantu mewujudkan furniture custom sesuai ukuran, kebutuhan, material, dan gaya interior Anda dengan pengerjaan berkualitas tinggi.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="mb-20">
          <h3 className="text-center text-xs uppercase tracking-widest font-semibold text-[#C5A059] mb-10">
            Alur Pengerjaan Custom Furniture (5 Tahap)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative hover:border-[#C5A059] transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-xl font-bold text-[#C5A059]">
                      {step.number}
                    </span>
                    <div className="p-2.5 bg-white/10 rounded-xl text-white group-hover:bg-[#C5A059] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-stone-300 text-xs font-light leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Workshop Visual & Custom Form Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Workshop Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-xl">
            <img
              src="/images/custom_workshop.png"
              alt="Master Craftsman Crafting Furniture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs uppercase font-bold tracking-widest mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Original Jepara & Bogor Craftsmen</span>
              </div>
              <h4 className="font-serif text-lg font-bold">Pengrajin Berpengalaman & Presisi Tinggi</h4>
              <p className="text-xs text-stone-300 font-light mt-1">
                Setiap sambungan kayu (tenon & mortise) dibuat kokoh untuk pemakaian bertahun-tahun.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-6">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">Formulir Konsultasi Gratis</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">Ajukan Pesanan Custom Anda</h3>
              <p className="text-xs text-stone-300 font-light mt-1">
                Isi rincian awal di bawah ini, tim arsitek interior FURNOVA akan segera menghubungi Anda via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmitCustomWA} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Rayhan"
                    value={customForm.name}
                    onChange={(e) => setCustomForm({ ...customForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder={`Contoh: ${SITE_CONFIG.phone}`}
                    value={customForm.phone}
                    onChange={(e) => setCustomForm({ ...customForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Jenis Furniture</label>
                  <select
                    value={customForm.type}
                    onChange={(e) => setCustomForm({ ...customForm, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#2C1E16] border border-white/20 text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                  >
                    <option value="Living Room Furniture">Living Room (Sofa / Meja TV)</option>
                    <option value="Dining Room Set">Dining Set (Meja & Kursi Makan)</option>
                    <option value="Bedroom Furniture">Bedroom (Tempat Tidur / Lemari)</option>
                    <option value="Kitchen Set Custom">Kitchen Set & Kitchen Island</option>
                    <option value="Office & Commercial">Office Desk & Commercial Booth</option>
                    <option value="Full House Furniture Package">Paket Furniture 1 Rumah/Apartemen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-medium">Material Utama</label>
                  <select
                    value={customForm.material}
                    onChange={(e) => setCustomForm({ ...customForm, material: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#2C1E16] border border-white/20 text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                  >
                    <option value="Kayu Jati Solid Perhutani">Kayu Jati Solid Perhutani</option>
                    <option value="Kayu Mahoni Oven Grade A">Kayu Mahoni Oven Grade A</option>
                    <option value="White Oak Impor">White Oak Impor</option>
                    <option value="Plywood/MDF + Veneer Natural">Plywood/MDF + Veneer Natural</option>
                    <option value="Logam Brass / Stainless Steel">Kombinasi Logam Brass / Metal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-medium">Catatan Ukuran / Kebutuhan Desain</label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan estimasi ukuran (misal: Meja 200x100cm), pilihan warna, atau lampirkan link foto inspirasi..."
                  value={customForm.notes}
                  onChange={(e) => setCustomForm({ ...customForm, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b59048] text-white font-semibold uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Konsultasi Furniture Custom (WhatsApp)</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
