import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronRight, Phone, Sparkles } from 'lucide-react';
import type { CartItem } from '../types/furniture';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  cartItems: CartItem[];
  onSelectCategory?: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenCart,
  cartItems,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kategori', href: '#kategori' },
    { name: 'Tentang Kami', href: '#why-us' },
    { name: 'Custom Furniture', href: '#custom' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWaPesanSekarang = () => {
    const message = encodeURIComponent(
      `Halo ${SITE_CONFIG.brandName}, saya ingin berkonsultasi / memesan furniture berkualitas.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2C1E16] text-[#EFE8DF] py-2 px-4 text-[11px] sm:text-xs text-center font-medium border-b border-[#C5A059]/30 fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 animate-pulse" />
        <span>✨ <strong>Promo Terbatas:</strong> Gratis Ongkir & Free Desain 3D | WA: <a href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`} target="_blank" rel="noreferrer" className="underline text-[#C5A059] font-bold">{SITE_CONFIG.phoneDisplay}</a></span>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#EFE8DF]'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2C1E16] to-[#C5A059] flex items-center justify-center text-white font-serif font-bold text-sm shadow-md border border-[#C5A059]/40 group-hover:scale-105 transition-transform">
                F
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-extrabold uppercase transition-colors ${
                    isScrolled ? 'text-[#2C1E16]' : 'text-white'
                  }`}
                >
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A059] font-bold -mt-1">
                  Luxury Living
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all hover:text-[#C5A059] ${
                    isScrolled ? 'text-[#2C1E16]' : 'text-stone-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Search Products"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-[#2C1E16] hover:bg-[#EFE8DF]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag Icon */}
              <button
                onClick={onOpenCart}
                aria-label="Shopping Bag"
                className={`p-2 rounded-full relative transition-colors ${
                  isScrolled
                    ? 'text-[#2C1E16] hover:bg-[#EFE8DF]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C5A059] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {totalCartCount}
                  </span>
                )}
              </button>

              {/* CTA Button: Pesan Sekarang */}
              <button
                onClick={handleWaPesanSekarang}
                className="hidden sm:inline-flex items-center gap-2 bg-[#2C1E16] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Pesan WhatsApp</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg xl:hidden transition-colors ${
                  isScrolled ? 'text-[#2C1E16]' : 'text-white'
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#EFE8DF] shadow-xl p-6 transition-all animate-fadeIn text-[#2C1E16]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between text-sm uppercase tracking-wider font-medium py-2 border-b border-[#EFE8DF]/60 hover:text-[#C5A059]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWaPesanSekarang();
                }}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-[#2C1E16] text-white text-sm font-semibold uppercase tracking-wider py-3 rounded-xl shadow-md hover:bg-[#C5A059] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Pesan via WhatsApp ({SITE_CONFIG.phoneDisplay})</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
