import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" onClick={scrollToTop} className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-[0.25em] uppercase text-white">
                {SITE_CONFIG.brandName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059] inline-block ml-1"></span>
            </a>
            <p className="text-stone-400 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Premium furniture crafted for better living. Menghadirkan keindahan perabot kayu solid berdesain modern, minimalis, dan disesuaikan untuk kesempurnaan hunian Anda.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#C5A059] text-white rounded-full transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-[#C5A059] text-white rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-2.5 bg-white/5 hover:bg-[#C5A059] text-white rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li>
                <a href="#produk" onClick={() => handleNavClick('#produk')} className="hover:text-[#C5A059] transition-colors">
                  Living Room
                </a>
              </li>
              <li>
                <a href="#produk" onClick={() => handleNavClick('#produk')} className="hover:text-[#C5A059] transition-colors">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="#produk" onClick={() => handleNavClick('#produk')} className="hover:text-[#C5A059] transition-colors">
                  Dining Room
                </a>
              </li>
              <li>
                <a href="#produk" onClick={() => handleNavClick('#produk')} className="hover:text-[#C5A059] transition-colors">
                  Office Desk
                </a>
              </li>
              <li>
                <a href="#custom" onClick={() => handleNavClick('#custom')} className="hover:text-[#C5A059] transition-colors">
                  Custom Furniture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-light">
              <li>
                <a href="#why-us" onClick={() => handleNavClick('#why-us')} className="hover:text-[#C5A059] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className="hover:text-[#C5A059] transition-colors">
                  Portfolio Project
                </a>
              </li>
              <li>
                <a href="#faq" onClick={() => handleNavClick('#faq')} className="hover:text-[#C5A059] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontak" onClick={() => handleNavClick('#kontak')} className="hover:text-[#C5A059] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">Support & Contact</h4>
            <ul className="space-y-3 text-xs text-stone-400 font-light">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`} target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#C5A059] transition-colors">
                  {SITE_CONFIG.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#C5A059] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address} & Jepara</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>© 2026 {SITE_CONFIG.brandName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Quality Furniture</span>
            <span>•</span>
            <span>Custom Design</span>
            <span>•</span>
            <span>Professional Craftsmanship</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-[#C5A059] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

