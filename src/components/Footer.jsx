import React from 'react';
import { shopConfig } from '../config';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Brand info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-success fw-bold mb-3 d-flex align-items-center">
              <i className="bi bi-cup-straw me-2 ms-0 text-success fs-4"></i>
              {shopConfig.name.ar}
            </h5>
            <p className="text-muted-custom mb-3">
              {shopConfig.slogan.ar} نقدم أجود أنواع العصائر والسموذي الطبيعية والخلطات الفريدة من فواكه طازجة 100% بدون أي إضافات صناعية.
            </p>
            <div className="d-flex gap-2 mt-4">
              <a 
                href={shopConfig.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                aria-label="فيسبوك"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href={shopConfig.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                aria-label="إنستغرام"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href={shopConfig.socials.tiktok} 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                aria-label="تيك توك"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-semibold text-warning mb-3">روابط سريعة</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a 
                  onClick={() => handleNavClick('home')} 
                  className="footer-link cursor-pointer"
                  style={{ cursor: 'pointer' }}
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('menu')} 
                  className="footer-link cursor-pointer"
                  style={{ cursor: 'pointer' }}
                >
                  قائمة العصائر
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('about')} 
                  className="footer-link cursor-pointer"
                  style={{ cursor: 'pointer' }}
                >
                  من نحن
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleNavClick('contact')} 
                  className="footer-link cursor-pointer"
                  style={{ cursor: 'pointer' }}
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="fw-semibold text-warning mb-3">تواصل معنا</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted-custom">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-success mt-1"></i>
                <span>{shopConfig.address.ar}</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-success"></i>
                <span className="en-font">{shopConfig.phone}</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-fill text-success"></i>
                <span className="en-font">{shopConfig.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-semibold text-warning mb-3">أوقات العمل</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted-custom">
              {shopConfig.openingHours.map((item, idx) => (
                <li key={idx} className="pb-2 border-bottom border-secondary border-opacity-25">
                  <div className="fw-semibold text-white">{item.day.ar}</div>
                  <div className="small en-font text-success">{item.hours}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-4 border-secondary border-opacity-50" />

        <div className="row">
          <div className="col-md-6 text-center text-md-start text-muted-custom mb-2 mb-md-0">
            <span>© {new Date().getFullYear()} {shopConfig.name.ar}. جميع الحقوق محفوظة.</span>
          </div>
          <div className="col-md-6 text-center text-md-end text-muted-custom en-font">
            <span>Designed for Freshness & Health</span>
          </div>
        </div>
      </div>

      <style>{`
        .text-muted-custom {
          color: #a0aab2;
          font-size: 0.95rem;
        }
        .footer-link {
          color: #a0aab2;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--primary-green);
          transform: translateX(-5px);
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #2c3e50;
          color: #fff;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .social-btn:hover {
          background: var(--primary-green);
          color: #fff;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
