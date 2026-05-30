/**
 * Sadana Opticals — Product Data
 * Source of truth: data/products.xlsx
 * To regenerate this file from Excel, run: node scripts/generate-data.js
 */

export const PRODUCTS = [
  {
    id: 1,
    slug: "aviator-classic-gold",
    name: "Aviator Classic Gold",
    category: "Sunglasses",
    shortDesc: "Timeless aviator silhouette with polished gold frame and UV400 green-tinted lenses.",
    description: "The Aviator Classic Gold is a tribute to enduring style. Precision-crafted from lightweight metal alloy with a polished 18K gold-tone finish, it features double-bridge architecture and spring-hinged temples for an all-day comfortable fit. Polycarbonate lenses with UV400 coating block 100% of UVA and UVB rays, while the subtle green tint reduces glare without distorting colour perception.",
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    badge: "New",
    rating: 4.8,
    reviewCount: 124,
    colors: ["#C9A84C", "#1A1A1A", "#808080"],
    colorNames: ["Gold", "Gunmetal", "Silver"],
    sizes: ["Small", "Medium", "Large"],
    image: "https://placehold.co/600x450/1B1B2F/C9A84C?text=Aviator+Classic+Gold",
    images: [
      "https://placehold.co/600x450/1B1B2F/C9A84C?text=Aviator+Classic+Gold+–+Front",
      "https://placehold.co/600x450/2C2C3E/C9A84C?text=Aviator+Classic+Gold+–+Side",
      "https://placehold.co/600x450/3D3D5C/F5E6C8?text=Aviator+Classic+Gold+–+Lens",
      "https://placehold.co/600x450/0F1923/C9A84C?text=Aviator+Classic+Gold+–+Case"
    ],
    specs: { frame: "Metal Alloy", lens: "Polycarbonate UV400", weight: "28g", fit: "Medium", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: true,
    tags: ["aviator", "sunglasses", "gold", "uv400", "metal frame"]
  },
  {
    id: 2,
    slug: "round-vintage-tortoise",
    name: "Round Vintage Tortoise",
    category: "Eyeglasses",
    shortDesc: "Classic round acetate frames in rich tortoise shell pattern for a retro-modern look.",
    description: "Inspired by the intellectual aesthetic of the 1960s, the Round Vintage Tortoise frames are handcrafted from premium Italian acetate. Each pair features the signature tortoise-shell layering unique to natural acetate, making every frame slightly one-of-a-kind. With full-rim construction and spring hinges, these frames offer both durability and a flattering round silhouette suitable for prescription and non-prescription lenses.",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    badge: "Popular",
    rating: 4.7,
    reviewCount: 98,
    colors: ["#8B5E3C", "#1A1A1A", "#4A3728"],
    colorNames: ["Tortoise", "Black", "Dark Walnut"],
    sizes: ["Small", "Medium"],
    image: "https://placehold.co/600x450/3D2B1F/F5E6C8?text=Round+Vintage+Tortoise",
    images: [
      "https://placehold.co/600x450/3D2B1F/F5E6C8?text=Round+Vintage+Tortoise+–+Front",
      "https://placehold.co/600x450/2C1F15/C9A84C?text=Round+Vintage+Tortoise+–+Side",
      "https://placehold.co/600x450/1A1209/F5E6C8?text=Round+Vintage+Tortoise+–+Arm",
      "https://placehold.co/600x450/3D2B1F/FFFFFF?text=Round+Vintage+Tortoise+–+Detail"
    ],
    specs: { frame: "Italian Acetate", lens: "CR-39 Optical", weight: "22g", fit: "Small–Medium", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: true,
    tags: ["round", "vintage", "tortoise", "acetate", "eyeglasses"]
  },
  {
    id: 3,
    slug: "cat-eye-noir",
    name: "Cat Eye Noir",
    category: "Sunglasses",
    shortDesc: "Bold cat-eye silhouette in matte black with gradient smoke lenses — effortlessly chic.",
    description: "Make a statement with the Cat Eye Noir. The dramatic upswept corners and deep matte-black acetate frame create a look that is equally at home on a runway or a rooftop. Gradient smoke lenses (85% tint at the top, fading to 40% at the base) provide superior sun protection while maintaining visual clarity at lower angles. Fitted with premium barrel hinges for a refined finish.",
    price: 3499,
    originalPrice: 4299,
    discount: 19,
    badge: "Popular",
    rating: 4.9,
    reviewCount: 76,
    colors: ["#1A1A1A", "#4B0000", "#2C1F5F"],
    colorNames: ["Matte Black", "Deep Burgundy", "Midnight Blue"],
    sizes: ["Medium", "Large"],
    image: "https://placehold.co/600x450/111111/FFFFFF?text=Cat+Eye+Noir",
    images: [
      "https://placehold.co/600x450/111111/FFFFFF?text=Cat+Eye+Noir+–+Front",
      "https://placehold.co/600x450/1A1A1A/C9A84C?text=Cat+Eye+Noir+–+Side",
      "https://placehold.co/600x450/222222/F5E6C8?text=Cat+Eye+Noir+–+Lens",
      "https://placehold.co/600x450/0D0D0D/FFFFFF?text=Cat+Eye+Noir+–+Hinge"
    ],
    specs: { frame: "Acetate", lens: "Gradient Polycarbonate UV400", weight: "30g", fit: "Medium–Large", gender: "Women", origin: "India" },
    inStock: true,
    featured: true,
    tags: ["cat-eye", "sunglasses", "black", "gradient lens", "women"]
  },
  {
    id: 4,
    slug: "rectangle-pro-black",
    name: "Rectangle Pro Black",
    category: "Eyeglasses",
    shortDesc: "Sleek rectangular metal frames for a sharp, professional everyday look.",
    description: "Precision and professionalism meet in the Rectangle Pro Black. Ultra-thin stainless steel temples and a minimalist rectangular front create a versatile frame that transitions seamlessly from boardroom to casual wear. The adjustable silicone nose pads ensure a custom fit for every face, while the durable stainless steel construction keeps the frame lightweight at just 18g.",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    badge: null,
    rating: 4.6,
    reviewCount: 215,
    colors: ["#1A1A1A", "#808080", "#4A4A6A"],
    colorNames: ["Matte Black", "Gunmetal", "Navy"],
    sizes: ["Small", "Medium", "Large"],
    image: "https://placehold.co/600x450/1A1A1A/FFFFFF?text=Rectangle+Pro+Black",
    images: [
      "https://placehold.co/600x450/1A1A1A/FFFFFF?text=Rectangle+Pro+Black+–+Front",
      "https://placehold.co/600x450/2A2A2A/C9A84C?text=Rectangle+Pro+Black+–+Side",
      "https://placehold.co/600x450/333333/F5E6C8?text=Rectangle+Pro+Black+–+Temple",
      "https://placehold.co/600x450/111111/AAAAAA?text=Rectangle+Pro+Black+–+Nose+Pad"
    ],
    specs: { frame: "Stainless Steel", lens: "CR-39 Optical", weight: "18g", fit: "All Faces", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: false,
    tags: ["rectangle", "metal", "black", "professional", "eyeglasses"]
  },
  {
    id: 5,
    slug: "sports-shield-polarized",
    name: "Sports Shield Polarized",
    category: "Sports",
    shortDesc: "Wrap-around shield lens with polarized coating — built for outdoor performance.",
    description: "The Sports Shield Polarized is engineered for athletes and outdoor enthusiasts. The single-piece wrap-around polycarbonate shield eliminates peripheral distortion while the polarized coating cuts 99.9% of horizontal glare from water, roads, and snow. Rubberised grip zones on the temples and nose bridge prevent slipping during intense activity, and the impact-resistant TR90 frame can flex without shattering.",
    price: 4999,
    originalPrice: 5999,
    discount: 17,
    badge: "New",
    rating: 4.9,
    reviewCount: 63,
    colors: ["#1A3A1A", "#1B1B2F", "#8B1A1A"],
    colorNames: ["Forest Green", "Midnight Navy", "Sport Red"],
    sizes: ["One Size"],
    image: "https://placehold.co/600x450/1A3A1A/FFFFFF?text=Sports+Shield+Polarized",
    images: [
      "https://placehold.co/600x450/1A3A1A/FFFFFF?text=Sports+Shield+–+Front",
      "https://placehold.co/600x450/142E14/C9A84C?text=Sports+Shield+–+Side",
      "https://placehold.co/600x450/0F200F/F5E6C8?text=Sports+Shield+–+Rubber+Grip",
      "https://placehold.co/600x450/1A3A1A/AAFFAA?text=Sports+Shield+–+Lens+Detail"
    ],
    specs: { frame: "TR90 Nylon", lens: "Polarized Polycarbonate", weight: "32g", fit: "Wrap-Around", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: false,
    tags: ["sports", "polarized", "shield", "outdoor", "TR90"]
  },
  {
    id: 6,
    slug: "blue-light-shield-pro",
    name: "Blue Light Shield Pro",
    category: "Computer Glasses",
    shortDesc: "Anti-blue-light lenses with zero power — protect your eyes during long screen hours.",
    description: "Designed for the digital generation, the Blue Light Shield Pro features lenses that filter up to 40% of high-energy visible (HEV) blue light emitted by screens. The clear anti-reflective coating reduces eye strain, headaches, and sleep disruption caused by prolonged device use. A lightweight TR90 frame with flexible temples makes it comfortable for 10+ hour wearing sessions.",
    price: 2199,
    originalPrice: 2799,
    discount: 21,
    badge: null,
    rating: 4.7,
    reviewCount: 182,
    colors: ["#2C3E50", "#1A1A1A", "#3D2B1F"],
    colorNames: ["Dark Slate", "Black", "Walnut"],
    sizes: ["Small", "Medium", "Large"],
    image: "https://placehold.co/600x450/2C3E50/A8D8FF?text=Blue+Light+Shield+Pro",
    images: [
      "https://placehold.co/600x450/2C3E50/A8D8FF?text=Blue+Light+Shield+–+Front",
      "https://placehold.co/600x450/1E2D3D/C9A84C?text=Blue+Light+Shield+–+Side",
      "https://placehold.co/600x450/162030/F5E6C8?text=Blue+Light+Shield+–+Lens",
      "https://placehold.co/600x450/2C3E50/FFFFFF?text=Blue+Light+Shield+–+Temple"
    ],
    specs: { frame: "TR90 Nylon", lens: "Anti-Blue-Light AR Coated", weight: "20g", fit: "All Faces", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: true,
    tags: ["blue light", "computer glasses", "screen protection", "anti-glare"]
  },
  {
    id: 7,
    slug: "oval-rose-gold",
    name: "Oval Rose Gold",
    category: "Eyeglasses",
    shortDesc: "Delicate oval acetate frames in trending rose gold for an elegant feminine silhouette.",
    description: "Soft curves and warm metallic tones come together in the Oval Rose Gold. Crafted from premium acetate with a rose-gold laminate layer, the frames strike a balance between understated femininity and modern elegance. The slim oval shape flatters angular and heart-shaped faces, and the spring hinges accommodate a wide range of face widths without adjustments.",
    price: 2799,
    originalPrice: 3299,
    discount: 15,
    badge: null,
    rating: 4.8,
    reviewCount: 91,
    colors: ["#C9A084", "#C9A84C", "#D4B8C2"],
    colorNames: ["Rose Gold", "Champagne Gold", "Blush Pink"],
    sizes: ["Small", "Medium"],
    image: "https://placehold.co/600x450/C9A084/1B1B2F?text=Oval+Rose+Gold",
    images: [
      "https://placehold.co/600x450/C9A084/1B1B2F?text=Oval+Rose+Gold+–+Front",
      "https://placehold.co/600x450/B89070/FFFFFF?text=Oval+Rose+Gold+–+Side",
      "https://placehold.co/600x450/A07A60/F5E6C8?text=Oval+Rose+Gold+–+Hinge",
      "https://placehold.co/600x450/C9A084/333333?text=Oval+Rose+Gold+–+Temple"
    ],
    specs: { frame: "Premium Acetate", lens: "CR-39 Optical", weight: "21g", fit: "Small–Medium", gender: "Women", origin: "India" },
    inStock: true,
    featured: false,
    tags: ["oval", "rose gold", "acetate", "feminine", "eyeglasses"]
  },
  {
    id: 8,
    slug: "polarized-navigator",
    name: "Polarized Navigator",
    category: "Sunglasses",
    shortDesc: "Premium polarized navigator frames with anti-reflective multi-coat for maximum clarity.",
    description: "The Polarized Navigator redefines driving and outdoor clarity. Trapezoidal lenses with a premium 7-layer polarized stack eliminate 99.9% of reflected glare while preserving true colour and contrast. The full-rim stainless steel frame is corrosion-resistant and features adjustable nose pads for a secure fit. A premium hard case and microfiber pouch are included.",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    badge: "Sale",
    rating: 4.8,
    reviewCount: 109,
    colors: ["#1A1A1A", "#C9A84C", "#4A4A6A"],
    colorNames: ["Matte Black", "Gold", "Navy"],
    sizes: ["Medium", "Large"],
    image: "https://placehold.co/600x450/1B1B2F/C9A84C?text=Polarized+Navigator",
    images: [
      "https://placehold.co/600x450/1B1B2F/C9A84C?text=Polarized+Navigator+–+Front",
      "https://placehold.co/600x450/0F1923/F5E6C8?text=Polarized+Navigator+–+Side",
      "https://placehold.co/600x450/162030/C9A84C?text=Polarized+Navigator+–+Lens",
      "https://placehold.co/600x450/1B1B2F/FFFFFF?text=Polarized+Navigator+–+Case"
    ],
    specs: { frame: "Stainless Steel", lens: "7-Layer Polarized UV400", weight: "26g", fit: "Medium–Large", gender: "Unisex", origin: "India" },
    inStock: true,
    featured: true,
    tags: ["navigator", "polarized", "sunglasses", "driving", "anti-glare"]
  }
];

export const CATEGORIES = ["All", "Sunglasses", "Eyeglasses", "Computer Glasses", "Sports"];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

export function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

export function getProductsByCategory(category) {
  if (!category || category === "All") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

export function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let stars = "★".repeat(full);
  if (half) stars += "½";
  stars += "☆".repeat(5 - full - half);
  return stars;
}
