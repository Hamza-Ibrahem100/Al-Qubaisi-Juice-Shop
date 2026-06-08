import React, { useState } from 'react';
import { categories, products } from '../config';

export default function MenuPage({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [itemQuantities, setItemQuantities] = useState({});

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.ar.includes(searchQuery) || 
                          product.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.ar.includes(searchQuery) ||
                          product.description.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Quantity handlers
  const handleQuantityChange = (productId, change) => {
    const currentQty = itemQuantities[productId] || 1;
    const newQty = Math.max(1, currentQty + change);
    setItemQuantities({
      ...itemQuantities,
      [productId]: newQty
    });
  };

  const handleAddToCart = (product) => {
    const qty = itemQuantities[product.id] || 1;
    onAddToCart(product, qty);
    // Reset quantity after adding
    setItemQuantities({
      ...itemQuantities,
      [product.id]: 1
    });
  };

  return (
    <div className="container py-5 page-fade-enter-active">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-dark">قائمة عصائر القبيسي</h1>
        <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        <p className="text-muted-custom fs-5">تذوق الفريش الحقيقي! اختر عصيرك المفضل وسنقوم بتحضيره لك في الحال.</p>
      </div>

      {/* Search and Categories controls */}
      <div className="row g-3 justify-content-between align-items-center mb-5">
        {/* Category Filters */}
        <div className="col-lg-8 order-2 order-lg-1">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name.ar}
                <span className="small text-muted ms-1 en-font" style={{ fontSize: '0.75rem', fontWeight: '400' }}>
                  ({cat.name.en})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div className="col-lg-3 col-md-6 order-1 order-lg-2 mx-auto ms-lg-auto me-lg-0">
          <div className="input-group shadow-sm rounded-pill overflow-hidden">
            <span className="input-group-text bg-white border-0 text-muted ps-3 pe-2">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 py-2 ps-1 pe-3"
              placeholder="ابحث عن عصير..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '0.95rem', boxShadow: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Main Juice Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-search-heart text-muted" style={{ fontSize: '4rem' }}></i>
          <h4 className="mt-3 text-muted">عذراً، لم نجد أي عصائر تطابق بحثك</h4>
          <p className="text-muted-custom">تأكد من كتابة الاسم بشكل صحيح أو تصفح الأقسام الأخرى.</p>
          <button 
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="btn btn-fresh-green mt-3"
          >
            عرض كافة العصائر
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => {
            const currentQuantity = itemQuantities[product.id] || 1;
            return (
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
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h4 className="card-title fw-bold mb-0 fs-5">{product.name.ar}</h4>
                      <span className="text-success fw-bold en-font fs-5">{product.price} EGP</span>
                    </div>
                    <p className="text-muted en-font fs-7 mb-3">{product.name.en}</p>
                    <p className="card-text text-muted-custom flex-grow-1 small">{product.description.ar}</p>
                    
                    <div className="mt-4 pt-3 border-top d-flex flex-column gap-3">
                      {/* Nutrition Specs */}
                      <div className="d-flex justify-content-between align-items-center text-muted small">
                        <span className="d-flex align-items-center gap-1">
                          <i className="bi bi-info-circle"></i>
                          <span className="en-font">{product.nutrition.size}</span>
                        </span>
                        {product.nutrition.calories && (
                          <span className="en-font bg-light px-2 py-1 rounded">
                            {product.nutrition.calories} Calories
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Actions */}
                      <div className="d-flex justify-content-between align-items-center gap-2">
                        {/* Quantity controls */}
                        <div className="quantity-selector">
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            disabled={currentQuantity <= 1}
                            aria-label="تقليل الكمية"
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span className="px-3 fw-bold en-font">{currentQuantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(product.id, 1)}
                            aria-label="زيادة الكمية"
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>

                        {/* Add Button */}
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-fresh-green flex-grow-1 rounded-pill py-2 px-3 d-flex align-items-center justify-content-center gap-2"
                        >
                          <i className="bi bi-cart-plus-fill"></i>
                          أضف للعربة
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
