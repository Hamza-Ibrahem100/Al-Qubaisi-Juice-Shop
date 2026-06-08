import React, { useState } from 'react';
import { shopConfig, products } from '../config';

const CUSTOM_BLENDS = {
  'mango-milk': { ar: "سموذي المانجو بالحليب الكريمي", en: "Creamy Mango Milk Smoothie", price: 65, calories: 240, image: "/images/juice_tropical.png", descAr: "مزيج كريمي من المانجو الفاخرة مع الحليب الطازج والثلج.", descEn: "Creamy blend of premium mango with fresh milk and ice." },
  'mango-honey': { ar: "عصير مانجو محلى بالعسل الجبلي", en: "Mountain Honey Mango Juice", price: 70, calories: 220, image: "/images/juice_mango.png", descAr: "عصير مانجو طبيعي مكثف ومحلى بقطرات العسل الجبلي الصافي.", descEn: "Thick natural mango juice sweetened with pure mountain honey drops." },
  'mango-mint': { ar: "عصير مانجو منعش بالنعناع البلدي", en: "Fresh Mango Mint Cooler", price: 60, calories: 190, image: "/images/juice_tropical.png", descAr: "عصير مانجو مثلج ممزوج بأوراق النعناع البلدي لنشاط فوري.", descEn: "Chilled mango juice blended with fresh garden mint for instant energy." },
  'mango-icecream': { ar: "شيك المانجو بالآيس كريم الفاخر", en: "Premium Mango Ice Cream Shake", price: 75, calories: 310, image: "/images/juice_mango.png", descAr: "ميلك شيك المانجو الكثيف مغطى ببولة آيس كريم الفانيليا.", descEn: "Thick mango milkshake topped with a scoop of vanilla ice cream." },
  
  'avocado-milk': { ar: "مخفوق الأفوكادو بالحليب الطازج", en: "Fresh Avocado Milkshake", price: 75, calories: 290, image: "/images/juice_avocado.png", descAr: "أفوكادو كريمي مخفوق مع الحليب البارد مغذي ومشبع.", descEn: "Creamy avocado blended with cold fresh milk, nutritious and filling." },
  'avocado-honey': { ar: "سوبر أفوكادو بالعسل والمكسرات", en: "Super Avocado Honey & Nuts", price: 85, calories: 350, image: "/images/juice_avocado.png", descAr: "خلطة الطاقة الفاخرة من الأفوكادو والعسل الطبيعي والمكسرات المقرمشة.", descEn: "Premium energy blend of avocado, natural honey, and crunchy nuts." },
  'avocado-mint': { ar: "مزيج الأفوكادو الأخضر المنعش بالنعناع", en: "Green Avocado Mint Booster", price: 70, calories: 260, image: "/images/juice_avocado.png", descAr: "خلطة أفوكادو خفيفة مع أوراق النعناع وقطع الثلج المنعشة.", descEn: "Light avocado blend with mint leaves and refreshing ice cubes." },
  'avocado-icecream': { ar: "إمبراطور الأفوكادو بالآيس كريم والقشطة", en: "Emperor Avocado with Ice Cream", price: 90, calories: 410, image: "/images/juice_avocado.png", descAr: "أفوكادو غني مع آيس كريم فانيليا، قشطة، عسل ومكسرات محمصة.", descEn: "Rich avocado with vanilla ice cream, fresh cream, honey, and roasted nuts." },
  
  'orange-milk': { ar: "كريم البرتقال المغذي بالحليب", en: "Orange Creamsicle Smoothie", price: 55, calories: 180, image: "/images/juice_orange.png", descAr: "مزيج منعش ومبتكر من عصير البرتقال الطازج والحليب والكريمة.", descEn: "A refreshing and innovative blend of fresh orange juice, milk, and cream." },
  'orange-honey': { ar: "عصير البرتقال المقوي بالعسل الطبيعي", en: "Orange Immunity Honey Boost", price: 50, calories: 140, image: "/images/juice_orange.png", descAr: "عصير برتقال طبيعي غني بفيتامين سي مع العسل لتحسين المناعة.", descEn: "Natural orange juice rich in Vitamin C with honey to boost immunity." },
  'orange-mint': { ar: "عصير البرتقال المثلج بالنعناع", en: "Iced Orange Mint Refresher", price: 50, calories: 120, image: "/images/juice_lemon.png", descAr: "عصير برتقال معصور طازجاً مع النعناع والثلج المجروش.", descEn: "Freshly squeezed orange juice with garden mint and crushed ice." },
  'orange-icecream': { ar: "فلوت البرتقال بالآيس كريم", en: "Orange Ice Cream Float", price: 65, calories: 250, image: "/images/juice_orange.png", descAr: "عصير برتقال طبيعي منعش تعلوه بولة من آيس كريم الفانيليا الغنية.", descEn: "Refreshing natural orange juice topped with a scoop of rich vanilla ice cream." },

  'strawberry-milk': { ar: "ميلك شيك الفراولة الكلاسيكي", en: "Classic Strawberry Milkshake", price: 60, calories: 220, image: "/images/juice_strawberry.png", descAr: "شيك فراولة طازجة مخفوقة بالحليب ومغطاة بالفراولة قطع.", descEn: "Fresh strawberry shake whipped with milk and topped with cut strawberries." },
  'strawberry-honey': { ar: "سموذي الفراولة الصحي بالعسل", en: "Healthy Strawberry Honey Smoothie", price: 60, calories: 170, image: "/images/juice_strawberry.png", descAr: "سموذي الفراولة الطبيعية محلى بعسل النحل ومخفوق بالزبادي اليوناني.", descEn: "Natural strawberry smoothie sweetened with honey and whipped with Greek yogurt." },
  'strawberry-mint': { ar: "كوكتيل الفراولة والنعناع المنعش", en: "Sparkling Strawberry Mint Mocktail", price: 55, calories: 130, image: "/images/juice_strawberry.png", descAr: "فراولة طازجة مهروسة مع أوراق النعناع، عصير ليمون، وثلج.", descEn: "Muddled fresh strawberries with mint leaves, lemon juice, and ice." },
  'strawberry-icecream': { ar: "دبل فراولة بالآيس كريم الفاخر", en: "Double Strawberry Ice Cream Delight", price: 70, calories: 290, image: "/images/juice_berry.png", descAr: "فراولة طازجة مع آيس كريم الفراولة والكريمة المخفوقة.", descEn: "Fresh strawberries with strawberry ice cream and whipped cream." }
};

export default function HomePage({ setCurrentPage, onAddToCart }) {
  const [selectedFruit, setSelectedFruit] = useState('mango');
  const [selectedAddon, setSelectedAddon] = useState('honey');
  const [blending, setBlending] = useState(false);
  const [blendResult, setBlendResult] = useState(null);

  const fruitsList = [
    { id: 'mango', name: 'مانجو', emoji: '🥭', color: '#ffc107' },
    { id: 'avocado', name: 'أفوكادو', emoji: '🥑', color: '#8bc34a' },
    { id: 'orange', name: 'برتقال', emoji: '🍊', color: '#ff9800' },
    { id: 'strawberry', name: 'فراولة', emoji: '🍓', color: '#e91e63' }
  ];

  const addonsList = [
    { id: 'milk', name: 'حليب طازج', emoji: '🥛' },
    { id: 'honey', name: 'عسل جبلي', emoji: '🍯' },
    { id: 'mint', name: 'نعناع بلدي', emoji: '🌿' },
    { id: 'icecream', name: 'آيس كريم', emoji: '🍦' }
  ];

  const handleBlend = () => {
    setBlending(true);
    setBlendResult(null);
    setTimeout(() => {
      const key = `${selectedFruit}-${selectedAddon}`;
      const result = CUSTOM_BLENDS[key] || {
        ar: `عصير القبيسي الخاص`,
        en: `Al-Qubaisi Special Custom`,
        price: 60,
        calories: 200,
        image: "/images/juice_tropical.png",
        descAr: "خلطة مخصصة ومنعشة تم تحضيرها بواسطة خلاطنا التفاعلي القوي.",
        descEn: "Custom fresh blend created via the interactive blender widget."
      };
      setBlendResult(result);
      setBlending(false);
    }, 1800);
  };

  // Get 3 featured products (best sellers / signatures)
  const featuredProducts = products.filter(p => p.badge).slice(0, 3);
  // If not enough products with badges, take first 3
  const displayProducts = featuredProducts.length >= 3 
    ? featuredProducts 
    : products.slice(0, 3);

  return (
    <div className="page-fade-enter-active">
      {/* Hero Section */}
      <section 
        className="hero-section text-center text-lg-start"
        style={{ 
          backgroundImage: "url('/images/hero_bg.png')",
          backgroundAttachment: 'scroll',
          minHeight: '80vh'
        }}
      >
        {/* Fallback pattern in case image loads slowly */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#1b5e20',
            opacity: 0.2,
            zIndex: 0
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content py-5 text-white">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 text-center text-lg-end">
              <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3 fs-6 animate-bounce">
                🍏 طبيعي وطازج 100%
              </span>
              <h1 className="display-2 fw-extrabold mb-3 text-shadow" style={{ letterSpacing: '-1px' }}>
                {shopConfig.name.ar}
              </h1>
              <p className="lead fs-3 fw-semibold mb-4 text-warning text-shadow">
                {shopConfig.slogan.ar}
              </p>
              <p className="fs-5 mb-5 opacity-90 text-shadow max-w-xl">
                نحن نهتم بصحتك ونقدم لك تشكيلة رائعة من العصائر الطبيعية المعصورة طازجاً، والسموذي المنعش، والخلطات المبتكرة التي تعيد لك الحيوية والنشاط.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button 
                  onClick={() => setCurrentPage('menu')}
                  className="btn btn-fresh-orange btn-lg px-5 py-3 rounded-pill fw-bold"
                >
                  <i className="bi bi-menu-app me-2 ms-0"></i>
                  تصفح قائمة العصائر
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold border-2"
                >
                  تواصل معنا
                </button>
              </div>
            </div>
            
            {/* Visual highlight inside hero */}
            <div className="col-lg-5 d-none d-lg-block position-relative">
              <div className="hero-floating-card glass-card p-4 text-center text-dark" style={{ border: '2px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                <img 
                  src="/images/juice_tropical.png" 
                  alt="Juice Splash" 
                  className="img-fluid rounded-4 mb-3"
                  style={{ maxHeight: '280px', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1546074177-3e1b9b7cb350?w=400&auto=format&fit=crop&q=80"; // fallback
                  }}
                />
                <h5 className="fw-bold mb-1">المزيج الاستوائي الأقوى! 🍍</h5>
                <p className="small text-muted mb-2">أناناس + مانجو + باشن فروت</p>
                <span className="badge bg-success fs-6 px-3 py-1 rounded-pill en-font">65 EGP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 text-dark">لماذا تختار عصير القبيسي؟</h2>
            <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
            <p className="text-muted-custom fs-5">نلتزم بأعلى معايير الجودة لنقدم لك تجربة طعم استثنائية وصحية.</p>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-leaf"></i>
                </div>
                <h4 className="fw-bold mb-3">مكونات طبيعية 100%</h4>
                <p className="text-muted-custom">
                  نستخدم فواكه طازجة منتقاة بعناية يومياً من المزارع مباشرةً، خالية تماماً من الألوان والنكهات الصناعية والمواد الحافظة.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-truck-flatbed"></i>
                </div>
                <h4 className="fw-bold mb-3">توصيل سريع وطازج</h4>
                <p className="text-muted-custom">
                  نحضر عصائرنا عند طلبك مباشرةً، ونقوم بتوصيلها مبردة بسرعة فائقة لتحافظ على طعمها الطازج وقيمتها الغذائية.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-patch-check"></i>
                </div>
                <h4 className="fw-bold mb-3">أعلى جودة ونظافة</h4>
                <p className="text-muted-custom">
                  نطبق أعلى معايير النظافة والتعقيم في مراحل التحضير والتعبئة، لضمان كوب عصير لذيذ وصحي وآمن لك ولعائلتك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Juice Blender Section */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="badge bg-success text-white px-3 py-2 rounded-pill fw-bold mb-2">ابتكار تفاعلي 🌪️</span>
            <h2 className="fw-bold display-5 text-dark">خلاّط القبيسي التفاعلي</h2>
            <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
            <p className="text-muted-custom fs-5">اصنع عصيرك المفضل بنفسك! اختر الفاكهة الأساسية والإضافة وسنقوم بخلطها لك في الحال.</p>
          </div>

          <div className="row g-5 align-items-center">
            {/* Blender Visualization column */}
            <div className="col-lg-5 text-center">
              <div className="p-4 rounded-4 shadow-sm bg-white border d-inline-block w-100 animate-fade-in" style={{ maxWidth: '380px' }}>
                <div className="blender-lid"></div>
                <div className={`blender-container ${blending ? 'shake-animation' : ''}`}>
                  {/* Handle */}
                  <div className="blender-handle"></div>
                  
                  {/* Mixing Liquid */}
                  {(blending || blendResult) && (
                    <div 
                      className="blend-liquid"
                      style={blendResult && !blending ? {
                        background: selectedFruit === 'mango' ? '#ffc107' :
                                    selectedFruit === 'avocado' ? '#8bc34a' :
                                    selectedFruit === 'orange' ? '#ff9800' : '#e91e63',
                        height: '60%'
                      } : {}}
                    >
                      {blending && <div className="blend-bubbles"></div>}
                    </div>
                  )}

                  {/* Empty state */}
                  {!blending && !blendResult && (
                    <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
                      <i className="bi bi-arrow-down-short fs-1 text-success animate-bounce"></i>
                      <div className="small fw-semibold mt-2">اختر المكونات بالجانب</div>
                      <div className="small text-muted">ثم اضغط خلط المزيج</div>
                    </div>
                  )}

                  {/* Shaking ingredients */}
                  {blending && (
                    <div className="position-absolute start-50 top-50 translate-middle d-flex gap-2 fs-2 z-3" style={{ animation: 'bounce 0.5s infinite alternate' }}>
                      <span>{fruitsList.find(f => f.id === selectedFruit)?.emoji}</span>
                      <span>{addonsList.find(a => a.id === selectedAddon)?.emoji}</span>
                    </div>
                  )}
                </div>
                <div className="blender-base">
                  <div className={`blender-knob ${blending ? 'active' : ''}`}></div>
                </div>

                <div className="mt-4">
                  {blending && (
                    <div className="text-success fw-bold animate-pulse">
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      جاري خلط المكونات الطازجة...
                    </div>
                  )}

                  {blendResult && !blending && (
                    <div className="p-3 bg-light rounded-3 animate-fade-in border border-success border-opacity-25 text-start">
                      <h5 className="fw-bold text-success mb-1 text-center">🎉 جاهز للتقديم!</h5>
                      <h6 className="fw-bold text-dark fs-5 text-center">{blendResult.ar}</h6>
                      <p className="small text-muted-custom mb-2 text-center">{blendResult.descAr}</p>
                      <div className="d-flex align-items-center justify-content-center gap-3 my-2">
                        <span className="fw-bold fs-5 text-success en-font">{blendResult.price} EGP</span>
                        <span className="badge bg-secondary en-font">{blendResult.calories} Calories</span>
                      </div>
                      <button
                        onClick={() => onAddToCart({
                          id: `custom-${selectedFruit}-${selectedAddon}-${Date.now()}`,
                          name: { ar: blendResult.ar, en: blendResult.en },
                          price: blendResult.price,
                          image: blendResult.image,
                          description: { ar: blendResult.descAr, en: blendResult.descEn },
                          category: 'special',
                          nutrition: { size: '350ml', calories: blendResult.calories }
                        }, 1)}
                        className="btn btn-fresh-orange w-100 rounded-pill py-2 mt-2 fw-bold d-flex align-items-center justify-content-center gap-2"
                      >
                        <i className="bi bi-cart-plus-fill fs-5"></i>
                        أضف هذا المزيج للعربة
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Selectors column */}
            <div className="col-lg-7">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border h-100 text-start">
                <h4 className="fw-bold text-dark mb-4"><i className="bi bi-funnel-fill text-success me-2 ms-0"></i>1. اختر الفاكهة الأساسية</h4>
                <div className="row g-2 mb-4">
                  {fruitsList.map((fruit) => (
                    <div className="col-6 col-sm-3" key={fruit.id}>
                      <button
                        onClick={() => { setSelectedFruit(fruit.id); setBlendResult(null); }}
                        className={`btn w-100 py-3 rounded-4 fw-bold d-flex flex-column align-items-center justify-content-center gap-2 border-2 ${
                          selectedFruit === fruit.id 
                            ? 'btn-success border-success text-white' 
                            : 'btn-outline-light border-secondary border-opacity-25 text-dark hover-light-btn'
                        }`}
                        style={selectedFruit === fruit.id ? { backgroundColor: fruit.color, borderColor: fruit.color } : {}}
                      >
                        <span className="fs-2">{fruit.emoji}</span>
                        <span className="small">{fruit.name}</span>
                      </button>
                    </div>
                  ))}
                </div>

                <h4 className="fw-bold text-dark mb-4"><i className="bi bi-plus-circle-fill text-warning me-2 ms-0"></i>2. اختر الإضافة اللذيذة</h4>
                <div className="row g-2 mb-4">
                  {addonsList.map((addon) => (
                    <div className="col-6 col-sm-3" key={addon.id}>
                      <button
                        onClick={() => { setSelectedAddon(addon.id); setBlendResult(null); }}
                        className={`btn w-100 py-3 rounded-4 fw-bold d-flex flex-column align-items-center justify-content-center gap-2 border-2 ${
                          selectedAddon === addon.id 
                            ? 'btn-warning border-warning text-dark' 
                            : 'btn-outline-light border-secondary border-opacity-25 text-dark hover-light-btn'
                        }`}
                      >
                        <span className="fs-2">{addon.emoji}</span>
                        <span className="small">{addon.name}</span>
                      </button>
                    </div>
                  ))}
                </div>

                <hr className="my-4" />

                <button
                  onClick={handleBlend}
                  disabled={blending}
                  className="btn btn-fresh-green w-100 py-3 rounded-pill fw-bold fs-5 d-flex align-items-center justify-content-center gap-3 shadow"
                >
                  <i className="bi bi-lightning-charge-fill animate-pulse text-warning"></i>
                  {blending ? 'جاري تشغيل الخلاط...' : 'خلط المزيج الآن 🌪️'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--light-green)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-success fw-bold text-uppercase tracking-wider">اخترنا لك</span>
            <h2 className="fw-bold display-5 text-dark mt-2">عصائر مميزة ننصح بها</h2>
            <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {displayProducts.map((product) => (
              <div className="col-lg-4 col-md-6" key={product.id}>
                <div className="glass-card card h-100 border-0">
                  <div className="card-img-wrapper">
                    {product.badge && (
                      <span className="card-badge">{product.badge.ar}</span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name.ar} 
                      className="card-img-top"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&auto=format&fit=crop&q=80"; // fallback
                      }}
                    />
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="card-title fw-bold mb-0 fs-5">{product.name.ar}</h4>
                      <span className="text-success fw-bold en-font fs-5">{product.price} EGP</span>
                    </div>
                    <p className="text-muted en-font fs-7 mb-3">{product.name.en}</p>
                    <p className="card-text text-muted-custom flex-grow-1 small">{product.description.ar}</p>
                    
                    <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                      <span className="small text-muted d-flex align-items-center gap-1">
                        <i className="bi bi-info-circle"></i>
                        <span className="en-font">{product.nutrition.size}</span>
                        {product.nutrition.calories && (
                          <>
                            <span> • </span>
                            <span className="en-font">{product.nutrition.calories} cal</span>
                          </>
                        )}
                      </span>
                      <button 
                        onClick={() => onAddToCart(product, 1)}
                        className="btn btn-fresh-green rounded-pill btn-sm py-2 px-3 d-flex align-items-center gap-2"
                      >
                        <i className="bi bi-cart-plus-fill"></i>
                        أضف للعربة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button 
              onClick={() => setCurrentPage('menu')}
              className="btn btn-fresh-orange btn-lg px-5 rounded-pill fw-bold"
            >
              عرض القائمة الكاملة
            </button>
          </div>
        </div>
      </section>

      {/* Styled inline banner */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="adly-banner p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
            <div>
              <h3 className="fw-bold mb-2">هل تبحث عن خلطة مخصصة لمناسبتك؟ 🎉</h3>
              <p className="mb-0 text-muted-custom">نوفر خدمة تحضير وتعبئة العصائر والخلطات الخاصة للحفلات والمناسبات بأسعار مميزة.</p>
            </div>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="btn btn-fresh-green px-4 py-3 rounded-pill text-nowrap fw-bold"
            >
              اطلب لمناسبتك الآن
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .max-w-xl {
          max-width: 600px;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
