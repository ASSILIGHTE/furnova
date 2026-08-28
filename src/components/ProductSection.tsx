import { motion } from 'framer-motion';
import type { Product, CategoryId } from '../types/furniture';
import { PRODUCTS_DATA } from '../data/furnitureData';
import { Star, Eye, MessageCircle, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ProductSectionProps {
  selectedCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
}) => {
  const categoriesList: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining', label: 'Dining Room' },
    { id: 'office', label: 'Office' },
    { id: 'outdoor', label: 'Outdoor' },
    { id: 'storage', label: 'Storage & Rak' },
    { id: 'custom', label: 'Custom' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleWaOrderDirect = (product: Product) => {
    const text = `Halo ${SITE_CONFIG.brandName}, saya berminat dengan produk *${product.name}* (Harga: ${formatRupiah(
      product.price
    )}). Apakah produk ini masih tersedia? Mohon info pemesanan.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };


  return (
    <section id="produk" className="py-24 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C5A059]">Katalog Exclusif</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1E16] mt-2">
            Koleksi Pilihan Kami
          </h2>
          <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
            Pilihan furniture terbaik dengan finishing sempurna dan garansi resmi. Pilih produk favorit Anda atau kreasikan custom ukuran sesuai keinginan.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categoriesList.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#2C1E16] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-stone-600 hover:bg-[#EFE8DF] hover:text-[#2C1E16] border border-[#EFE8DF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EFE8DF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE8DF]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-md ${
                        product.badge === 'Best Seller'
                          ? 'bg-[#C5A059]'
                          : product.badge === 'New'
                          ? 'bg-[#2C1E16]'
                          : 'bg-emerald-700'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-3 bg-white text-[#2C1E16] rounded-full shadow-lg hover:bg-[#C5A059] hover:text-white transition-colors"
                    title="Detail Produk"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="p-3 bg-white text-[#2C1E16] rounded-full shadow-lg hover:bg-[#C5A059] hover:text-white transition-colors"
                    title="Tambah ke Bag"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="uppercase tracking-wider font-medium text-[#C5A059]">
                      {product.categoryName}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-stone-400 font-normal">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-xl font-bold text-[#2C1E16] hover:text-[#C5A059] cursor-pointer transition-colors mb-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-stone-600 text-xs line-clamp-2 mb-4 font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-xs text-stone-400 block font-light">Mulai dari</span>
                    <span className="font-serif text-xl font-bold text-[#2C1E16]">
                      {formatRupiah(product.price)}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full text-center py-2.5 px-3 rounded-xl border border-[#2C1E16] text-[#2C1E16] hover:bg-[#2C1E16] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Detail Produk
                    </button>
                    <button
                      onClick={() => handleWaOrderDirect(product)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Pesan WA</span>
                    </button>
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
