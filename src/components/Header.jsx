import React, { useState } from 'react';
import { shopConfig } from '../config';

export default function Header({ currentPage, setCurrentPage, onCartToggle, cartCount }) {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'menu', label: 'قائمة العصائر' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setNavCollapsed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="glass-nav sticky-top">
      <div className="container py-2">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container-fluid p-0">
            {/* Brand Logo */}
            <a 
              className="navbar-brand d-flex align-items-center cursor-pointer" 
              onClick={() => handleNavClick('home')}
              style={{ cursor: 'pointer' }}
            >
              <div 
                className="logo-icon d-flex align-items-center justify-content-center bg-success text-white rounded-circle me-2 ms-0"
                style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary-green), var(--primary-orange))' }}
              >
                <i className="bi bi-cup-straw fs-4"></i>
              </div>
              <span className="fw-bold fs-3 text-success d-flex align-items-baseline">
                {shopConfig.name.ar}
                <span className="fs-6 text-muted ms-2 en-font" style={{ fontWeight: '400' }}>
                  {shopConfig.name.en}
                </span>
              </span>
            </a>

            {/* Cart Button for mobile & desktop */}
            <div className="d-flex align-items-center order-lg-last ms-2">
              <button 
                className="btn position-relative p-2 text-success"
                onClick={onCartToggle}
                aria-label="سلة التسوق"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <i className="bi bi-bag-heart-fill fs-3"></i>
                {cartCount > 0 && (
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger en-font"
                    style={{ fontSize: '0.75rem', animation: 'pulse 2s infinite' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Responsive Toggler */}
              <button 
                className="navbar-toggler ms-2 border-0" 
                type="button" 
                onClick={() => setNavCollapsed(!navCollapsed)}
                aria-expanded={!navCollapsed}
                aria-label="عرض القائمة"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* Nav Links */}
            <div className={`collapse navbar-collapse ${navCollapsed ? '' : 'show'}`} id="navbarNav">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-2 mt-lg-0 align-items-center gap-1 gap-lg-3">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a 
                      className={`nav-link fw-semibold px-3 py-2 rounded-pill cursor-pointer ${
                        currentPage === link.id 
                          ? 'active text-white bg-success' 
                          : 'text-dark hover-light'
                      }`}
                      onClick={() => handleNavClick(link.id)}
                      style={{ 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Basic animation logic */}
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        .nav-link.hover-light:hover {
          background-color: var(--light-green);
          color: var(--secondary-green) !important;
        }
      `}</style>
    </header>
  );
}
