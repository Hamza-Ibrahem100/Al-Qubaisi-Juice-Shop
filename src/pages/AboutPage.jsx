import React from 'react';
import { shopConfig } from '../config';

export default function AboutPage({ setCurrentPage }) {
  return (
    <div className="container py-5 page-fade-enter-active">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-dark">من نحن</h1>
        <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        <p className="text-muted-custom fs-5">تعرف على حكاية "القبيسي" وشغفنا بتقديم أفضل نكهات الطبيعة.</p>
      </div>

      {/* Narrative Section */}
      <div className="row g-5 align-items-center mb-5">
        {/* Left Column: Image with stylized frame */}
        <div className="col-lg-6">
          <div className="position-relative">
            <div 
              className="position-absolute bg-success rounded-4" 
              style={{ 
                top: '-15px', 
                right: '-15px', 
                width: '100%', 
                height: '100%', 
                zIndex: -1, 
                opacity: 0.15 
              }}
            ></div>
            <img 
              src="/images/about_juice.png" 
              alt="عصائر القبيسي الطازجة" 
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ objectFit: 'cover', minHeight: '380px', maxHeight: '500px' }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80"; // fallback
              }}
            />
          </div>
        </div>

        {/* Right Column: Text Story */}
        <div className="col-lg-6">
          <span className="text-success fw-bold text-uppercase fs-6">قصتنا وشغفنا</span>
          <h2 className="fw-bold text-dark mt-2 mb-4">بداية حكاية "القبيسي" للعصائر</h2>
          
          <div className="d-flex flex-column gap-3 text-muted-custom">
            <p>
              تأسست <strong>{shopConfig.name.ar}</strong> بشغف ورؤية بسيطة: إعادة تعريف تجربة تناول العصير في مصر من خلال تقديم كوب عصير طبيعي 100% يجمع بين المذاق المذهل والقيمة الغذائية الفائقة.
            </p>
            <p>
              بدأنا رحلتنا من قلب شوارع القاهرة العريقة، حيث ألهمتنا الطبيعة لابتكار خلطات عصائر استثنائية تناسب نمط الحياة العصري وتلبي تطلعات زبائننا نحو حياة أكثر صحة ونشاطاً.
            </p>
            <p>
              نحن نؤمن بأن العصير ليس مجرد مشروب يروي العطش، بل هو مصدر حيوي للفيتامينات والنشاط اليومي. لهذا، نختار فواكهنا حبة بحبة ونحضر كل طلب طازجاً لضمان احتفاظه بكافة فوائده الطبيعية وطعمه الأصلي.
            </p>
          </div>

          <div className="row g-3 mt-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span className="fw-semibold text-dark">فواكه منتقاة يدوياً</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span className="fw-semibold text-dark">بدون سكريات صناعية</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span className="fw-semibold text-dark">تحضير فوري عند الطلب</span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span className="fw-semibold text-dark">تعبئة صحية آمنة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Goals section */}
      <section className="py-5 mt-4 border-top">
        <div className="row g-4 text-center">
          {/* Mission */}
          <div className="col-md-4">
            <div className="p-4 rounded-4" style={{ backgroundColor: 'var(--light-green)' }}>
              <div className="fs-1 text-success mb-3">
                <i className="bi bi-eye"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">رؤيتنا</h4>
              <p className="text-muted-custom mb-0">أن نكون العلامة التجارية الرائدة والمفضلة في تقديم العصائر الصحية والطبيعية، ونشر ثقافة العافية والجمال في مجتمعنا.</p>
            </div>
          </div>
          {/* Mission Statement */}
          <div className="col-md-4">
            <div className="p-4 rounded-4" style={{ backgroundColor: 'var(--light-orange)' }}>
              <div className="fs-1 text-orange-custom mb-3">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">رسالتنا</h4>
              <p className="text-muted-custom mb-0">تمكين زبائننا من عيش حياة مفعمة بالحيوية عبر تقديم منتجات طازجة ومغذية ومحضرة بأعلى معايير الحب والمسؤولية.</p>
            </div>
          </div>
          {/* Commitment */}
          <div className="col-md-4">
            <div className="p-4 rounded-4" style={{ backgroundColor: 'var(--light-yellow)' }}>
              <div className="fs-1 text-warning mb-3">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4 className="fw-bold text-dark mb-2">التزامنا</h4>
              <p className="text-muted-custom mb-0">نعدكم بعدم التنازل عن الجودة المطلقة، والشفافية الكاملة في مصدر فواكهنا، وتقديم خدمة تسعد قلوبكم دوماً.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action panel */}
      <div className="text-center mt-5 py-4">
        <h4 className="fw-bold mb-3">هل أنت جاهز لتجربة الطعم المنعش؟</h4>
        <button 
          onClick={() => setCurrentPage('menu')}
          className="btn btn-fresh-green btn-lg px-5 rounded-pill fw-bold"
        >
          اطلب عصيرك الآن
        </button>
      </div>

      <style>{`
        .text-orange-custom {
          color: var(--primary-orange);
        }
      `}</style>
    </div>
  );
}
