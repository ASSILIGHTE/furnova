export type CategoryId = 'all' | 'living' | 'bedroom' | 'dining' | 'office' | 'kitchen' | 'outdoor' | 'storage' | 'custom';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Best Seller' | 'New' | 'Custom';
  image: string;
  gallery: string[];
  description: string;
  material: string;
  dimensions: string;
  finishes: string[];
  availableSizes: string[];
  leadTime: string;
  availability: 'Ready Stock' | 'Pre-Order (7-14 Hari)' | 'Pre-Order Custom';
}

export interface CategoryCard {
  id: CategoryId;
  name: string;
  count: number;
  image: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Apartment' | 'Office' | 'Restaurant' | 'Cafe' | 'Custom Furniture';
  location: string;
  furnitureTypes: string;
  year: string;
  image: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}
