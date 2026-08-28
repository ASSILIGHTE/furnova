import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductSection } from './components/ProductSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomFurnitureSection } from './components/CustomFurnitureSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MaterialsSection } from './components/MaterialsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramGallery } from './components/InstagramGallery';
import { PromoBanner } from './components/PromoBanner';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWA } from './components/FloatingWA';
import { CartDrawer } from './components/CartDrawer';
import { SearchDrawer } from './components/SearchDrawer';
import { Footer } from './components/Footer';
import type { Product, CategoryId, CartItem } from './types/furniture';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Cart operations
  const handleAddToCart = (product: Product, selectedColor?: string, selectedSize?: string) => {
    const color = selectedColor || product.finishes[0] || 'Natural';
    const size = selectedSize || product.availableSizes[0] || 'Standard';

    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );

      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prevItems, { product, selectedColor: color, selectedSize: size, quantity: 1 }];
      }
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (
    productId: string,
    selectedColor: string,
    selectedSize: string,
    delta: number
  ) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, selectedColor: string, selectedSize: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          )
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1F1F] font-sans antialiased selection:bg-[#C5A059] selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCart={() => setCartOpen(true)}
        cartItems={cartItems}
        onSelectCategory={(catId) => setSelectedCategory(catId as CategoryId)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Trust Badges */}
      <TrustSection />

      {/* Categories Showcase */}
      <CategoriesSection
        onSelectCategory={(catId) => setSelectedCategory(catId as CategoryId)}
      />

      {/* Filterable Products Grid */}
      <ProductSection
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Custom Furniture Highlight & Estimator Form */}
      <CustomFurnitureSection />

      {/* Portfolio Showcase */}
      <PortfolioSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Materials Breakdown */}
      <MaterialsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Instagram Feed */}
      <InstagramGallery />

      {/* Promo CTA Banner */}
      <PromoBanner />

      {/* Accordion FAQ */}
      <FAQSection />

      {/* Contact Form & Showroom Details */}
      <ContactSection />

      {/* Floating WA Button */}
      <FloatingWA />

      {/* Product Detail Interactive Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Drawer */}
      <SearchDrawer
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
