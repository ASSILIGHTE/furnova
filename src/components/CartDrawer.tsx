import type { CartItem } from '../types/furniture';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, selectedColor: string, selectedSize: string, delta: number) => void;
  onRemoveItem: (productId: string, selectedColor: string, selectedSize: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCheckoutWA = () => {
    if (cartItems.length === 0) return;

    let itemsListText = '';
    cartItems.forEach((item, index) => {
      itemsListText += `${index + 1}. *${item.product.name}*
   - Warna: ${item.selectedColor}
   - Ukuran: ${item.selectedSize}
   - Jumlah: ${item.quantity} x ${formatRupiah(item.product.price)} = ${formatRupiah(item.product.price * item.quantity)}\n\n`;
    });

    const fullMessage = `Halo ${SITE_CONFIG.brandName}, saya ingin memesan daftar produk berikut:

${itemsListText}*Total Estimasi*: ${formatRupiah(totalPrice)}

Mohon info ketersediaan stok & prosedur pembayaran. Terima kasih!`;

    window.open(`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(fullMessage)}`, '_blank');
  };


  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#EFE8DF] p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DF]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold text-[#2C1E16]">Shopping Bag</h3>
            <span className="bg-[#C5A059] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-[#2C1E16] rounded-full hover:bg-[#F4EFEA]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 text-stone-400 font-light flex flex-col items-center">
              <ShoppingBag className="w-12 h-12 text-stone-300 mb-3" />
              <p className="text-sm">Shopping Bag Anda masih kosong.</p>
              <p className="text-xs text-stone-400 mt-1">Jelajahi produk kami dan tambahkan item favorit Anda.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                className="flex gap-4 p-3 rounded-2xl bg-[#F4EFEA] border border-[#EFE8DF] relative group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif text-sm font-bold text-[#2C1E16]">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedColor, item.selectedSize)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-[11px] text-stone-500 font-light">
                      <span>Warna: {item.selectedColor}</span> • <span>Ukuran: {item.selectedSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-xs text-[#2C1E16]">
                      {formatRupiah(item.product.price * item.quantity)}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#EFE8DF] bg-white rounded-lg overflow-hidden">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, -1)}
                        className="p-1 hover:bg-[#F4EFEA] text-stone-600"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, 1)}
                        className="p-1 hover:bg-[#F4EFEA] text-stone-600"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#EFE8DF] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-600 font-light">Total Subtotal</span>
              <span className="font-serif text-xl font-bold text-[#2C1E16]">
                {formatRupiah(totalPrice)}
              </span>
            </div>

            <button
              onClick={handleCheckoutWA}
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan Semua via WhatsApp</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-stone-400 hover:text-stone-600 text-xs py-1 transition-colors"
            >
              Kosongkan Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
