import type { Product, CategoryCard, PortfolioItem, MaterialItem, Testimonial, FAQItem } from '../types/furniture';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'oslo-lounge-chair',
    name: 'Oslo Lounge Chair',
    category: 'living',
    categoryName: 'Living Room',
    price: 2850000,
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Best Seller',
    image: '/images/oslo_lounge_chair.png',
    gallery: [
      '/images/oslo_lounge_chair.png',
      '/images/hero_interior.png',
      '/images/arlo_side_table.png'
    ],
    description: 'Oslo Lounge Chair memadukan estetika khas Nordic Scandinavian dengan kekuatan konstruksi kayu jati perhutani grade A. Dilengkapi dengan sandaran ergonimits dan busa royal foam berbalut kain linen import premium.',
    material: 'Kayu Jati Solid Perhutani & Fabric Linen Premium',
    dimensions: '75 cm (L) x 82 cm (W) x 80 cm (H)',
    finishes: ['Natural', 'Walnut', 'Dark Oak', 'Black'],
    availableSizes: ['Standard', 'Wide Lounge', 'Custom'],
    leadTime: '7 - 10 Hari Kerja',
    availability: 'Ready Stock'
  },
  {
    id: 'nordic-dining-table',
    name: 'Nordic Dining Table',
    category: 'dining',
    categoryName: 'Dining Room',
    price: 4750000,
    rating: 5.0,
    reviewsCount: 24,
    badge: 'New',
    image: '/images/nordic_dining_table.png',
    gallery: [
      '/images/nordic_dining_table.png',
      '/images/hero_interior.png'
    ],
    description: 'Meja makan Nordic dirancang untuk menghadirkan kehangatan dan keanggunan saat berkumpul bersama keluarga. Permukaan kayu jati dilapisi polyurethane matte tahan air dan goresan.',
    material: 'Kayu Oak / Jati Solid & Polyurethane Matte Finishing',
    dimensions: '180 cm (L) x 90 cm (W) x 75 cm (H) (Kapasitas 6-8 Orang)',
    finishes: ['Natural', 'Walnut', 'Dark Oak'],
    availableSizes: ['6 Seater (180cm)', '8 Seater (220cm)', 'Custom Size'],
    leadTime: '10 - 14 Hari Kerja',
    availability: 'Pre-Order (7-14 Hari)'
  },
  {
    id: 'verona-sofa',
    name: 'Verona 3-Seater Sofa',
    category: 'living',
    categoryName: 'Living Room',
    price: 6900000,
    rating: 4.8,
    reviewsCount: 42,
    badge: 'Best Seller',
    image: '/images/verona_sofa.png',
    gallery: [
      '/images/verona_sofa.png',
      '/images/hero_interior.png'
    ],
    description: 'Sofa Verona memberikan kenyamanan tiada tanding untuk ruang keluarga Anda. Menggunakan susunan pegas s-spring berdaya tahan tinggi, dilapisinya busa HR foam bermassa jenis tinggi.',
    material: 'Rangka Kayu Mahoni Oven & Fabric Velvet/Linen Impor',
    dimensions: '210 cm (L) x 90 cm (W) x 85 cm (H)',
    finishes: ['Cream Beige', 'Charcoal Grey', 'Warm Walnut', 'Dusty Rose'],
    availableSizes: ['2-Seater (160cm)', '3-Seater (210cm)', 'L-Shape Custom'],
    leadTime: '10 - 14 Hari Kerja',
    availability: 'Ready Stock'
  },
  {
    id: 'oakline-cabinet',
    name: 'Oakline Credenza Cabinet',
    category: 'storage',
    categoryName: 'Storage & Credenza',
    price: 3850000,
    rating: 4.9,
    reviewsCount: 19,
    badge: 'Custom',
    image: '/images/oakline_cabinet.png',
    gallery: [
      '/images/oakline_cabinet.png',
      '/images/hero_interior.png'
    ],
    description: 'Lemari kabinet minimalis serbaguna dengan detail pintu bermotif slat kayu vertikal dan handle kuningan asli (brushed brass). Sangat pas untuk kredensa TV atau ruang tamu.',
    material: 'Veneer Kayu Oak Grade A & Kaki Metal Powder Coated Brass',
    dimensions: '160 cm (L) x 45 cm (W) x 78 cm (H)',
    finishes: ['Natural', 'Walnut', 'Dark Oak', 'Black'],
    availableSizes: ['Medium (140cm)', 'Large (160cm)', 'XL (200cm)', 'Custom'],
    leadTime: '12 - 14 Hari Kerja',
    availability: 'Pre-Order Custom'
  },
  {
    id: 'haven-bed-frame',
    name: 'Haven Bed Frame King',
    category: 'bedroom',
    categoryName: 'Bedroom',
    price: 5500000,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'New',
    image: '/images/haven_bed_frame.png',
    gallery: [
      '/images/haven_bed_frame.png',
      '/images/hero_interior.png'
    ],
    description: 'Rangka tempat tidur Haven menyajikan estetika kamar tidur resor bintang lima. Sandaran kepala dilapisi foam empuk bermotif jahitan minimalis dan kayu solid kokoh tanpa derit.',
    material: 'Kayu Jati Solid & Upholstered Headboard Linen',
    dimensions: '180 cm x 200 cm (King Size Bed)',
    finishes: ['Natural', 'Walnut', 'Dark Oak'],
    availableSizes: ['Queen (160x200)', 'King (180x200)', 'Super King (200x200)', 'Custom'],
    leadTime: '14 Hari Kerja',
    availability: 'Pre-Order (7-14 Hari)'
  },
  {
    id: 'arlo-side-table',
    name: 'Arlo Accent Side Table',
    category: 'living',
    categoryName: 'Living Room',
    price: 1250000,
    rating: 4.7,
    reviewsCount: 56,
    badge: 'Best Seller',
    image: '/images/arlo_side_table.png',
    gallery: [
      '/images/arlo_side_table.png',
      '/images/oslo_lounge_chair.png'
    ],
    description: 'Meja samping bundar Arlo sempurna ditempatkan di sebelah sofa atau tempat tidur. Menonjolkan keindahan serat kayu alami dengan aksen lingkar brass di dasar meja.',
    material: 'Kayu Mahoni Oven Grade A & Aksen Kuningan Asli',
    dimensions: '45 cm (Diameter) x 52 cm (H)',
    finishes: ['Natural', 'Walnut', 'Dark Oak', 'Black'],
    availableSizes: ['Small (40cm)', 'Medium (45cm)', 'Custom'],
    leadTime: '3 - 5 Hari Kerja',
    availability: 'Ready Stock'
  },
  {
    id: 'kyoto-office-desk',
    name: 'Kyoto Executive Office Desk',
    category: 'office',
    categoryName: 'Office',
    price: 4200000,
    rating: 4.9,
    reviewsCount: 15,
    badge: 'Custom',
    image: '/images/nordic_dining_table.png',
    gallery: [
      '/images/nordic_dining_table.png'
    ],
    description: 'Meja kerja eksekutif dengan manajemen kabel tersembunyi, laci berkunci soft-close, dan area kerja lapang yang menunjang produktivitas dan wibawa ruang kerja Anda.',
    material: 'Kayu Jati Solid & Rangka Besi Industrial',
    dimensions: '150 cm (L) x 70 cm (W) x 75 cm (H)',
    finishes: ['Walnut', 'Dark Oak', 'Black Matte'],
    availableSizes: ['Standard (140cm)', 'Executive (160cm)', 'Custom'],
    leadTime: '10 - 14 Hari Kerja',
    availability: 'Pre-Order Custom'
  },
  {
    id: 'vermont-outdoor-set',
    name: 'Vermont Outdoor Teak Set',
    category: 'outdoor',
    categoryName: 'Outdoor',
    price: 6400000,
    rating: 4.9,
    reviewsCount: 22,
    badge: 'New',
    image: '/images/oslo_lounge_chair.png',
    gallery: [
      '/images/oslo_lounge_chair.png'
    ],
    description: 'Set furniture outdoor tahan cuaca dari kayu jati tua dengan lapisan teak oil alami. Ideal untuk area teras, taman, atau balkon vila mewah Anda.',
    material: 'Kayu Jati Perhutani Grade A (Weatherproof Teak Oil)',
    dimensions: 'Meja 90x90cm + 2 Kursi Outdoor',
    finishes: ['Natural Teak Oil', 'Weathered Grey'],
    availableSizes: ['2 Chairs Set', '4 Chairs Set', 'Custom'],
    leadTime: '14 Hari Kerja',
    availability: 'Pre-Order (7-14 Hari)'
  }
];

export const CATEGORIES_DATA: CategoryCard[] = [
  {
    id: 'living',
    name: 'Living Room',
    count: 24,
    image: '/images/verona_sofa.png',
    description: 'Sofa, kursi lounge, meja kopi, dan aksesoris ruang tamu berbahan kayu pilihan.'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    count: 18,
    image: '/images/haven_bed_frame.png',
    description: 'Tempat tidur kayu solid, nakas bedside, dan lemari pakaian bernuansa hangat.'
  },
  {
    id: 'dining',
    name: 'Dining Room',
    count: 16,
    image: '/images/nordic_dining_table.png',
    description: 'Meja makan elegan, kursi makan ergonomis, dan lemari pajang hias.'
  },
  {
    id: 'office',
    name: 'Office',
    count: 12,
    image: '/images/oakline_cabinet.png',
    description: 'Meja kerja profesional, kursi kerja kayu, dan rak dokumen eksklusif.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen Set',
    count: 10,
    image: '/images/custom_workshop.png',
    description: 'Kitchen set kayu custom, island table, dan kabinet dapur presisi tinggi.'
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
    count: 8,
    image: '/images/oslo_lounge_chair.png',
    description: 'Furniture outdoor jati anti-cuaca untuk teras, gazebo, dan ruang terbuka.'
  },
  {
    id: 'storage',
    name: 'Storage & Rak',
    count: 15,
    image: '/images/oakline_cabinet.png',
    description: 'Credenza, rak buku minimalis, lemari pajang, dan side cabinet.'
  },
  {
    id: 'custom',
    name: 'Custom Furniture',
    count: 99,
    image: '/images/custom_workshop.png',
    description: 'Wujudkan desain impian sesuai ukuran, material, dan gaya interior tempat Anda.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'menteng-residence',
    title: 'Menteng Private Residence',
    category: 'Residential',
    location: 'Jakarta Pusat',
    furnitureTypes: 'Custom Living Room, Dining Set & Wall Paneling',
    year: '2025',
    image: '/images/hero_interior.png'
  },
  {
    id: 'scbd-penthouse',
    title: 'SCBD Luxury Penthouse',
    category: 'Apartment',
    location: 'Jakarta Selatan',
    furnitureTypes: 'Master Bedroom Bed Frame, Wardrobe & Lounge Chair',
    year: '2025',
    image: '/images/haven_bed_frame.png'
  },
  {
    id: 'bsd-executive-office',
    title: 'Green Office Park HQ',
    category: 'Office',
    location: 'BSD City',
    furnitureTypes: 'Executive Conference Table & Reception Desk',
    year: '2026',
    image: '/images/nordic_dining_table.png'
  },
  {
    id: 'canggu-villa',
    title: 'Amarta Eco Villa',
    category: 'Residential',
    location: 'Canggu, Bali',
    furnitureTypes: 'Teak Outdoor Sets, Sunbed & Custom Kitchen Island',
    year: '2025',
    image: '/images/custom_workshop.png'
  },
  {
    id: 'senopati-bistro',
    title: 'Botanica Dining Bistro',
    category: 'Restaurant',
    location: 'Senopati, Jakarta',
    furnitureTypes: 'Dining Chairs, Custom Booth Seating & Bar Counter',
    year: '2026',
    image: '/images/oslo_lounge_chair.png'
  },
  {
    id: 'surabaya-townhouse',
    title: 'Citraland Modern Townhouse',
    category: 'Residential',
    location: 'Surabaya',
    furnitureTypes: 'Full Home Furniture Package & Storage Cabinetry',
    year: '2025',
    image: '/images/verona_sofa.png'
  }
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'teak-wood',
    name: 'Teak Wood (Kayu Jati)',
    subtitle: 'Solid Perhutani Grade A',
    description: 'Kayu jati pilihan berumur tua dengan kadar air terukur standar oven laboratorium. Memiliki serat kayu indah dan kandungan minyak alami yang tahan rayap & perubahan cuaca.',
    image: '/images/custom_workshop.png',
    features: ['Sangat Kuat & Tahan Lama', 'Tahan Serangan Rayap', 'Serat Kayu Alami Mewah']
  },
  {
    id: 'mahogany',
    name: 'Mahogany (Kayu Mahoni)',
    subtitle: 'Kiln-Dried Solid Wood',
    description: 'Kayu mahoni oven berkepadatan tinggi yang ideal untuk finishing cat duco, melamine, maupun stain warna gelap. Memiliki pori-pori halus dan kestabilan permukaan luar biasa.',
    image: '/images/arlo_side_table.png',
    features: ['Tekstur Serat Halus', 'Hasil Finishing Halus', 'Bebas Retak & Lengkung']
  },
  {
    id: 'white-oak',
    name: 'White Oak & Veneer',
    subtitle: 'Imported Natural Oak',
    description: 'Kayu oak impor berserat lurus dan tegas. Sering digunakan untuk furniture bergaya Scandinavian, Japandi, dan Modern Minimalist dengan warna alami yang menawan.',
    image: '/images/nordic_dining_table.png',
    features: ['Serat Kayu Khas Nordic', 'Warna Warm Honey-Blonde', 'Kekerasan Tinggi']
  },
  {
    id: 'brass-metals',
    name: 'Stainless Steel & Brass',
    subtitle: 'Polished & Brushed Metallic Details',
    description: 'Aksen logam kuningan murni (brushed brass) dan stainless steel anti-karat yang menambah nuansa glamor dan modern pada setiap detail furniture FURNOVA.',
    image: '/images/oakline_cabinet.png',
    features: ['Anti Karat & Korosi', 'Presisi Tinggi CNC Cut', 'Tampilan Luxury Accent']
  },
  {
    id: 'premium-fabrics',
    name: 'Premium Fabric & Italian Leather',
    subtitle: 'Water-Repellent Linen & Genuine Leather',
    description: 'Kain pelapis impor tahan noda dan cairan, serta kulit sapi Italia asli bertekstur lembut yang memberikan kenyamanan maksimal dan kesan berkelas.',
    image: '/images/verona_sofa.png',
    features: ['Lapisan Tahan Cairan/Noda', 'Sirkulasi Udara Nyaman', 'Uji Martindale > 50.000 Rubs']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Bapak Anindya Prasetya',
    role: 'Pemilik Villa & Private Residence',
    project: 'Menteng Residence',
    content: 'Furniture custom yang kami pesan dari FURNOVA hasilnya luar biasa presisi. Finishing kayu jatinya sangat halus, jahitan sofa rapi, dan sesuai 100% dengan render 3D arsitek kami.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'Ibu Clarissa Wijaya',
    role: 'Interior Designer',
    project: 'SCBD Penthouse Project',
    content: 'Sebagai desainer interior, saya sangat selektif memilih workshop kayu. FURNOVA selalu tepat waktu, komunikatif dalam pemilihan material, dan garansinya membuat klien saya sangat satisfied.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Bapak Hendra Gunawan',
    role: 'Owner Botanica Bistro',
    project: 'Senopati Cafe & Dining',
    content: 'Pengerjaan 40 set kursi dan meja cafe cepat sekali. Kualitas kayu jati solidnya kokoh meskipun digunakan pengunjung setiap hari. Sangat recommended untuk furniture commercial & custom!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Apakah FURNOVA melayani pemesanan furniture custom?',
    answer: 'Ya, tentu saja! Custom furniture adalah salah satu spesialisasi utama kami. Anda bisa membawa gambar desain sendiri, sketsa kasar, atau berdiskusi dengan tim kami mengenai ukuran, jenis kayu, warna finishing, hingga opsi bahan kain pelapis.'
  },
  {
    question: 'Apakah bisa request ukuran khusus menyesuaikan ruangan?',
    answer: 'Bisa sekali. Tim FURNOVA siap melakukan penyesuaian dimensi presisi (panjang, lebar, tinggi) agar furniture pas sempurna pada tata letak rumah, apartemen, maupun kantor Anda.'
  },
  {
    question: 'Material kayu apa saja yang tersedia di FURNOVA?',
    answer: 'Kami menyediakan pilihan kayu berkualitas tinggi seperti Kayu Jati Perhutani Grade A, Kayu Mahoni Oven, White Oak impor, serta Plywood/MDF grade ekspor dilapisi Veneer serat kayu alami.'
  },
  {
    question: 'Apakah saya bisa memilih opsi warna finishing dan kain?',
    answer: 'Sangat bisa. Kami menyediakan sampel warna finishing kayu (Natural Teak, Warm Walnut, Dark Oak, Ebony Black, Cat Duco) dan ratusan pilihan sampel kain pelapis (Linen, Velvet, Leather, Water-Repellent).'
  },
  {
    question: 'Berapa lama estimasi proses produksi furniture custom?',
    answer: 'Untuk produk ready stock, pengiriman dilakukan 1-3 hari kerja. Untuk produk pre-order standard membutuhkan waktu 7-14 hari kerja, sedangkan untuk projek custom berskala besar atau full-house package membutuhkan 14-25 hari kerja.'
  },
  {
    question: 'Apakah FURNOVA menyediakan layanan pengiriman dan instalasi?',
    answer: 'Ya. Kami menyediakan layanan antar dan pemasangan langsung oleh tim instalator profesional kami untuk area Jabodetabek, Bandung, Surabaya, Bali, dan kota-kota besar lainnya di Indonesia.'
  },
  {
    question: 'Apakah produk FURNOVA dilengkapi garansi?',
    answer: 'Semua produk FURNOVA dilindungi garansi resmi hingga 3 tahun untuk konstruksi rangka kayu dan garansi 1 tahun untuk finishing & hardware. Kepuasan dan kepercayaan Anda adalah komitmen kami.'
  },
  {
    question: 'Bagaimana prosedur pembayaran dan pesanan custom?',
    answer: 'Untuk produk custom, Anda cukup membayar Down Payment (DP) sebesar 50% saat gambar kerja disetujui. Pelunasan dilakukan saat furniture siap dikirimkan setelah melalui tahap Quality Control (QC).'
  },
  {
    question: 'Bagaimana cara melakukan pemesanan via WhatsApp?',
    answer: 'Anda bisa menekan tombol "Pesan via WhatsApp" atau "Konsultasi Gratis" di website ini. Sistem kami akan otomatis memformat detail produk atau spesifikasi yang Anda pilih sehingga tim layanan pelanggan kami dapat merespons dengan cepat.'
  },
  {
    question: 'Apakah saya bisa melakukan konsultasi terlebih dahulu secara gratis?',
    answer: 'Tentu saja! Konsultasi desain, pemilihan material, dan estimasi biaya bersama tim desainer interior FURNOVA tidak dipungut biaya apapun.'
  }
];
