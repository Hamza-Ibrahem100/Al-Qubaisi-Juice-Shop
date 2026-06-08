// Al-Qubaisi Juice Shop Configuration & Database

export const shopConfig = {
  name: {
    ar: "عصائر القبيسي",
    en: "Al-Qubaisi Juices"
  },
  slogan: {
    ar: "طعم الطبيعة في كل قطرة!",
    en: "Taste Nature in Every Drop!"
  },
  whatsappNumber: "201012345678", // Format: International format without '+' or '00'
  phone: "+20 10 1234 5678",
  email: "info@alqubaisijuice.com",
  address: {
    ar: "12 شارع المعز لدين الله الفاطمي، الجمالية، القاهرة، مصر",
    en: "12 Al-Muizz Li-Din Allah St, Gamaleya, Cairo, Egypt"
  },
  openingHours: [
    { day: { ar: "السبت - الخميس", en: "Saturday - Thursday" }, hours: "9:00 AM - 12:00 AM" },
    { day: { ar: "الجمعة", en: "Friday" }, hours: "2:00 PM - 12:00 AM" }
  ],
  socials: {
    facebook: "https://facebook.com/alqubaisijuice",
    instagram: "https://instagram.com/alqubaisijuice",
    tiktok: "https://tiktok.com/@alqubaisijuice"
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.250552726588!2d31.260021675276632!3d30.058356974916297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f7a4fd7bcab%3A0x8683526a5c1fb981!2z2LTYp9ix2Lkg2KfZhNmF2LnDosKgINmE2K_ZitmFINin2YTZgdin2LfZhdmK!5e0!3m2!1sar!2seg!4v1717812000000!5m2!1sar!2seg"
};

export const categories = [
  { id: "all", name: { ar: "الكل", en: "All" } },
  { id: "natural", name: { ar: "عصائر طبيعية", en: "Natural Juices" } },
  { id: "smoothie", name: { ar: "سموذي منعش", en: "Fresh Smoothies" } },
  { id: "special", name: { ar: "خلطات القبيسي الخاصة", en: "Al-Qubaisi Special Blends" } }
];

export const products = [
  {
    id: "orange-juice",
    name: { ar: "البرتقال الخارق", en: "Mighty Orange" },
    category: "natural",
    price: 45,
    image: "/images/juice_orange.png",
    description: {
      ar: "عصير برتقال طبيعي 100% غني بفيتامين سي، معصور طازجاً عند الطلب من أفضل مزارع الموالح.",
      en: "100% natural orange juice rich in Vitamin C, freshly squeezed on order from the finest citrus farms."
    },
    badge: { ar: "الأكثر مبيعاً", en: "Best Seller" },
    nutrition: { calories: 110, size: "350ml" }
  },
  {
    id: "tropical-fusion",
    name: { ar: "المزيج الاستوائي", en: "Tropical Fusion" },
    category: "special",
    price: 65,
    image: "/images/juice_tropical.png",
    description: {
      ar: "مزيج متناغم من المانجو والأناناس والباشن فروت الطازجة مع قطع الثلج المجروش لنشاط يدوم طويلاً.",
      en: "A harmonious blend of fresh mango, pineapple, and passion fruit with crushed ice for lasting energy."
    },
    badge: { ar: "جديد", en: "New" },
    nutrition: { calories: 180, size: "350ml" }
  },
  {
    id: "strawberry-breeze",
    name: { ar: "سموذي نسيم الفراولة", en: "Strawberry Breeze" },
    category: "smoothie",
    price: 55,
    image: "/images/juice_strawberry.png",
    description: {
      ar: "سموذي الفراولة البلدي الطازجة مع الحليب والزبادي اليوناني الكريمي ومسة من النعناع الأخضر.",
      en: "Local strawberry smoothie blended with milk, creamy Greek yogurt, and a hint of fresh mint."
    },
    nutrition: { calories: 150, size: "350ml" }
  },
  {
    id: "avocado-delight",
    name: { ar: "بهجة الأفوكادو", en: "Avocado Delight" },
    category: "special",
    price: 80,
    image: "/images/juice_avocado.png",
    description: {
      ar: "خلطة الأفوكادو الكريمي الفاخرة مع العسل الجبلي الطبيعي، القشطة الطازجة، وتشكيلة من المكسرات المقرمشة.",
      en: "Creamy premium avocado blended with natural mountain honey, fresh cream, and topped with crunchy mixed nuts."
    },
    badge: { ar: "مميز", en: "Signature" },
    nutrition: { calories: 320, size: "350ml" }
  },
  {
    id: "lemon-mint-refresh",
    name: { ar: "انتعاش الليمون والنعناع", en: "Lemon Mint Refresh" },
    category: "natural",
    price: 40,
    image: "/images/juice_lemon.png",
    description: {
      ar: "عصير الليمون المنعش المعصور مع النعناع البلدي الطازج والثلج، مثالي لأيام الصيف الحارة.",
      en: "Zesty lemon juice blended with fresh garden mint and ice, perfect for hot summer days."
    },
    nutrition: { calories: 95, size: "350ml" }
  },
  {
    id: "mango-mania",
    name: { ar: "عاصفة المانجو", en: "Mango Mania" },
    category: "natural",
    price: 60,
    image: "/images/juice_mango.png",
    description: {
      ar: "عصير مانجو طبيعي كثيف ومخملي مُعد من ثمار المانجو العويس والزبدية الفاخرة.",
      en: "Thick and velvety natural mango juice prepared from premium Egyptian Awees and Zebdeya mangoes."
    },
    nutrition: { calories: 210, size: "350ml" }
  },
  {
    id: "berry-blast",
    name: { ar: "سموذي غابة التوت", en: "Berry Blast Smoothie" },
    category: "smoothie",
    price: 70,
    image: "/images/juice_berry.png",
    description: {
      ar: "سموذي توت بري غني بمضادات الأكسدة يجمع بين التوت الأزرق، التوت الأحمر، والفراولة مع زبادي طبيعي.",
      en: "Antioxidant-rich berry smoothie featuring blueberries, red raspberries, and strawberries with natural yogurt."
    },
    badge: { ar: "صحي", en: "Healthy" },
    nutrition: { calories: 140, size: "350ml" }
  }
];
