import { useState } from 'react';
import { PRODUCTS_DATA } from '../data/furnitureData';
import type { Product } from '../types/furniture';
import { Search, X, Star } from 'lucide-react';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const searchResults = query.trim() === ''
    ? []
    : PRODUCTS_DATA.filter(
        (p: Product) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      );

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EFE8DF] p-6 overflow-hidden">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DF]">
            <h3 className="font-serif text-xl font-bold text-[#2C1E16]">Cari Produk FURNOVA</h3>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-[#2C1E16] rounded-full hover:bg-[#F4EFEA]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="relative mt-6 mb-6">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Cari sofa, meja makan, kayu jati..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F4EFEA] border border-[#EFE8DF] text-xs sm:text-sm text-[#2C1E16] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>

          {/* Popular Search Keywords */}
          {query.trim() === '' && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-3">
                Pencarian Populer:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Oslo Lounge', 'Nordic Table', 'Verona Sofa', 'Kayu Jati', 'Bedroom'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-[#F4EFEA] hover:bg-[#C5A059] hover:text-white text-stone-600 text-xs font-medium transition-colors border border-[#EFE8DF]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="overflow-y-auto max-h-[60vh] space-y-4 pr-1">
            {searchResults.map((product: Product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[#F4EFEA] hover:bg-[#EFE8DF] cursor-pointer transition-colors border border-[#EFE8DF]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-semibold text-[#C5A059]">
                    {product.categoryName}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#2C1E16]">{product.name}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-[#2C1E16]">
                      {formatRupiah(product.price)}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {query.trim() !== '' && searchResults.length === 0 && (
              <div className="text-center py-12 text-stone-400 text-xs font-light">
                Tidak ada produk yang cocok dengan kata kunci "{query}".
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-[#EFE8DF] text-center text-[11px] text-stone-400">
          FURNOVA — Modern Minimalist Luxury
        </div>
      </div>
    </div>
  );
};
