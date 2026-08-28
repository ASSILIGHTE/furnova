import { useState } from 'react';
import type { Product } from '../types/furniture';
import { X, Star, Check, MessageCircle, ShoppingBag, Clock, ShieldCheck, Ruler } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor: string, selectedSize: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.finishes[0] || 'Natural');
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0] || 'Standard');

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleOrderWhatsApp = () => {
    const text = `Halo ${SITE_CONFIG.brandName}, saya ingin memesan *${product.name}* dengan spesifikasi berikut:
- *Warna Finishing*: ${selectedColor}
- *Ukuran*: ${selectedSize}
- *Estimasi Harga*: ${formatRupiah(product.price)}

Apakah spesifikasi ini tersedia dan dapat diproses? Terima kasih!`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative bg-[#FAF8F5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#EFE8DF] my-8 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md text-[#2C1E16] hover:bg-[#2C1E16] hover:text-white rounded-full transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 p-6 bg-[#F4EFEA] flex flex-col justify-between">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white border border-[#EFE8DF] shadow-sm">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                    activeImage === img ? 'border-[#C5A059] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Details & Options */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[85vh] flex flex-col justify-between">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="uppercase tracking-widest font-semibold text-[#C5A059]">
                {product.categoryName}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-stone-400 font-normal">({product.reviewsCount} ulasan)</span>
              </div>
            </div>

            {/* Product Name */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1E16] mb-3">
              {product.name}
            </h2>

            {/* Price */}
            <div className="text-2xl font-bold font-serif text-[#C5A059] mb-4">
              {formatRupiah(product.price)}
            </div>

            {/* Description */}
            <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications Grid */}
            <div className="bg-[#F4EFEA] p-4 rounded-xl space-y-2 text-xs text-stone-700 mb-6 border border-[#EFE8DF]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span className="font-semibold text-[#2C1E16]">Material:</span>
                <span>{product.material}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#C5A059]" />
                <span className="font-semibold text-[#2C1E16]">Ukuran Standard:</span>
                <span>{product.dimensions}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span className="font-semibold text-[#2C1E16]">Estimasi Pengerjaan:</span>
                <span>{product.leadTime}</span>
              </div>
            </div>

            {/* Customizer: Color Finish Selector */}
            <div className="mb-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1E16] mb-2">
                Pilih Finishing Warna: <span className="text-[#C5A059]">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.finishes.map((finish) => (
                  <button
                    key={finish}
                    onClick={() => setSelectedColor(finish)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${
                      selectedColor === finish
                        ? 'bg-[#2C1E16] text-white border-[#2C1E16] shadow-sm'
                        : 'bg-white text-stone-700 border-[#EFE8DF] hover:bg-[#F4EFEA]'
                    }`}
                  >
                    {selectedColor === finish && <Check className="w-3.5 h-3.5 text-[#C5A059]" />}
                    <span>{finish}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Customizer: Size Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C1E16] mb-2">
                Pilih Ukuran: <span className="text-[#C5A059]">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? 'bg-[#2C1E16] text-white border-[#2C1E16] shadow-sm'
                        : 'bg-white text-stone-700 border-[#EFE8DF] hover:bg-[#F4EFEA]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-[#EFE8DF]">
            <button
              onClick={handleOrderWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onAddToCart(product, selectedColor, selectedSize);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#C5A059] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 rounded-xl transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Tambah ke Shopping Bag</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
