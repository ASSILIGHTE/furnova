import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, Shield, Copy, Check } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { SITE_CONFIG } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    furnitureType: 'Living Room',
    budget: 'Rp 5 - 15 Juta',
    description: '',
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE_CONFIG.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo ${SITE_CONFIG.brandName}, saya mengajukan PERMINTAAN KONSULTASI / PENAWARAN:
- *Nama*: ${formData.name}
- *No. WA*: ${formData.phone}
- *Email*: ${formData.email || '-'}
- *Jenis Furniture*: ${formData.furnitureType}
- *Estimasi Budget*: ${formData.budget}
- *Deskripsi Kebutuhan*: ${formData.description || '-'}

Mohon informasi lebih lanjut dari tim ${SITE_CONFIG.brandName}. Terima kasih!`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="kontak" className="py-24 bg-[#F4EFEA] border-t border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Layanan Pelanggan</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
            Hubungi Kami
          </h2>
          <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
            Tim kami siap membantu merealisasikan furniture impian Anda. Kunjungi showroom kami atau diskusikan kebutuhan Anda secara online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Information & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#EFE8DF] shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#2C1E16]">Informasi Kontak & Showroom</h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                {/* Phone & WA */}
                <div className="flex items-center justify-between p-3.5 bg-[#F4EFEA] rounded-2xl group hover:border-[#C5A059] border border-transparent transition-all">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className="p-2.5 bg-[#2C1E16] text-white rounded-xl group-hover:bg-[#C5A059] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-semibold block">WhatsApp & Telepon</span>
                      <span className="font-bold text-[#2C1E16] text-base">{SITE_CONFIG.phoneDisplay}</span>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-stone-400 hover:text-[#2C1E16] hover:bg-white rounded-xl transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 bg-[#F4EFEA] rounded-2xl group hover:border-[#C5A059] border border-transparent transition-all">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className="p-2.5 bg-[#2C1E16] text-white rounded-xl group-hover:bg-[#C5A059] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-semibold block">Official Email</span>
                      <span className="font-bold text-[#2C1E16] text-base">{SITE_CONFIG.email}</span>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-stone-400 hover:text-[#2C1E16] hover:bg-white rounded-xl transition-all"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instagram */}
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[#C5A059] transition-colors p-3.5 bg-[#F4EFEA] rounded-2xl border border-transparent hover:border-[#C5A059]"
                >
                  <div className="p-2.5 bg-[#2C1E16] text-white rounded-xl">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Instagram Gallery</span>
                    <span className="font-bold text-[#2C1E16] text-base">{SITE_CONFIG.instagram}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 bg-[#F4EFEA] rounded-2xl">
                  <div className="p-2.5 bg-[#2C1E16] text-white rounded-xl mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Main Showroom & Workshop</span>
                    <span className="font-bold text-[#2C1E16] block mb-1">{SITE_CONFIG.address}</span>
                    <span className="text-xs text-stone-500 font-light block">Workshop Jepara: {SITE_CONFIG.workshopAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs text-stone-500 font-light">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Jam Operasional: {SITE_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Frame */}
            <div className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#EFE8DF] shadow-sm aspect-[16/9] relative">
              <iframe
                title="FURNOVA Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8679!2d106.8145!3d-6.2705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMjMuOCJTIDEwNsKwNDgnNTIuMiJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) opacity(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Request Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#EFE8DF] shadow-md">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">Pemesanan & Enquiry</span>
              <h3 className="font-serif text-2xl font-bold text-[#2C1E16] mt-1">Kirim Permintaan Informasi</h3>
              <p className="text-xs text-stone-600 font-light mt-1">
                Lengkapi data kebutuhan Anda di bawah ini. Tim spesialis furniture kami akan menghubungi Anda dalam waktu 1x24 jam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#2C1E16] font-semibold mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#2C1E16] font-semibold mb-1">Nomor WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder={`Contoh: ${SITE_CONFIG.phone}`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#2C1E16] font-semibold mb-1">Email (Opsional)</label>
                  <input
                    type="email"
                    placeholder={SITE_CONFIG.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#2C1E16] font-semibold mb-1">Jenis Furniture</label>
                  <select
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] focus:outline-none focus:border-[#C5A059] transition-colors"
                  >
                    <option value="Living Room Furniture">Living Room (Sofa / Meja)</option>
                    <option value="Dining Room Furniture">Dining Room Set</option>
                    <option value="Bedroom Furniture">Bedroom (Tempat Tidur / Lemari)</option>
                    <option value="Office & Desk">Office & Workspace</option>
                    <option value="Custom Furniture Design">Custom Furniture</option>
                    <option value="Proyek Komersial / Cafe">Proyek Komersial / Cafe / Hotel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#2C1E16] font-semibold mb-1">Perkiraan Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="Di bawah Rp 5 Juta">Di bawah Rp 5 Juta</option>
                  <option value="Rp 5 - 15 Juta">Rp 5 - 15 Juta</option>
                  <option value="Rp 15 - 35 Juta">Rp 15 - 35 Juta</option>
                  <option value="Rp 35 - 75 Juta">Rp 35 - 75 Juta</option>
                  <option value="Di atas Rp 75 Juta (Full House/Commercial)">Di atas Rp 75 Juta (Full Project)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#2C1E16] font-semibold mb-1">Deskripsi Kebutuhan & Catatan</label>
                <textarea
                  rows={4}
                  placeholder="Jelaskan kebutuhan Anda (dimensi ruangan, konsep interior, warna favorit, deadline pengerjaan)..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFEA] border border-[#EFE8DF] text-[#2C1E16] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#C5A059] text-white font-semibold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-[#C5A059]" />
                <span>Kirim Permintaan (WhatsApp)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-stone-400 text-[11px] pt-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Data pribadi Anda 100% aman dan hanya digunakan untuk komunikasi {SITE_CONFIG.brandName}.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

