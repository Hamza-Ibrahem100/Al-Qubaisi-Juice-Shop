import React, { useState } from 'react';
import { shopConfig } from '../config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    subject: 'استفسار عام',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.whatsapp || !formData.message) {
      alert('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    // Format WhatsApp query message
    let whatsappText = `👋 مرحباً *عصائر القبيسي*\n\n`;
    whatsappText += `لقد أرسلت استفساراً جديداً عبر الموقع الإلكتروني:\n`;
    whatsappText += `-----------------------------------------\n`;
    whatsappText += `👤 *الاسم:* ${formData.name}\n`;
    whatsappText += `📞 *رقم الواتساب:* ${formData.whatsapp}\n`;
    whatsappText += `🏷️ *الموضوع:* ${formData.subject}\n`;
    whatsappText += `✉️ *الرسالة:* \n"${formData.message}"\n`;
    whatsappText += `-----------------------------------------\n\n`;
    whatsappText += `أرجو الرد علي في أقرب وقت. شكراً لكم!`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/${shopConfig.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);

    // Reset Form
    setFormData({
      name: '',
      whatsapp: '',
      subject: 'استفسار عام',
      message: ''
    });

    // Reset submission alert after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="container py-5 page-fade-enter-active">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-dark">تواصل معنا</h1>
        <div className="divider mx-auto bg-success my-3" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
        <p className="text-muted-custom fs-5">يسعدنا تواصلك معنا دائماً للإجابة على استفساراتك أو لتلبية طلباتك الخاصة.</p>
      </div>

      <div className="row g-5">
        {/* Left Column: Form */}
        <div className="col-lg-6">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
            <h3 className="fw-bold text-dark mb-4">أرسل لنا استفسارك</h3>
            
            {formSubmitted && (
              <div className="alert alert-success alert-dismissible fade show rounded-3 py-2 px-3 mb-4" role="alert">
                <i className="bi bi-check-circle-fill me-2 ms-0"></i>
                تم فتح محادثة واتساب بنجاح وإرسال رسالتك!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">الاسم بالكامل <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control rounded-3 py-2"
                  id="name"
                  name="name"
                  placeholder="مثال: أحمد محمد"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="whatsapp" className="form-label fw-semibold">رقم الواتساب <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 rounded-start-3 en-font"><i className="bi bi-whatsapp text-success"></i></span>
                  <input
                    type="tel"
                    className="form-control rounded-end-3 py-2 text-start en-font"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="مثال: 01012345678"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-text text-muted-custom" style={{ fontSize: '0.8rem' }}>سنقوم بالرد عليك مباشرةً عبر حساب الواتساب الخاص بك.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label fw-semibold">الموضوع</label>
                <select 
                  className="form-select rounded-3 py-2" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="استفسار عام">استفسار عام / اقتراح</option>
                  <option value="طلب حجز مناسبات">طلب حجز مناسبات / حفلات</option>
                  <option value="شكوى / ملاحظة">شكوى / ملاحظة على الخدمة</option>
                  <option value="استفسار تجاري">شراكة وتوريد</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">الرسالة <span className="text-danger">*</span></label>
                <textarea
                  className="form-control rounded-3 py-2"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="اكتب رسالتك بالتفصيل هنا..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-fresh-green w-100 py-3 rounded-pill fw-bold fs-5 d-flex align-items-center justify-content-center gap-2"
              >
                <i className="bi bi-send-fill fs-5"></i>
                إرسال عبر واتساب
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Contact info & Google Map */}
        <div className="col-lg-6 d-flex flex-column justify-content-between">
          <div className="row g-4 mb-4">
            {/* Info details */}
            <div className="col-md-6">
              <div className="p-4 bg-light rounded-4 h-100 border border-opacity-10 border-success">
                <div className="fs-2 text-success mb-2"><i className="bi bi-geo-alt"></i></div>
                <h5 className="fw-bold text-dark">عنوان المحل</h5>
                <p className="text-muted-custom small mb-0">{shopConfig.address.ar}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 bg-light rounded-4 h-100 border border-opacity-10 border-success">
                <div className="fs-2 text-success mb-2"><i className="bi bi-telephone"></i></div>
                <h5 className="fw-bold text-dark">الهاتف والبريد</h5>
                <p className="text-muted-custom small mb-1 en-font">الهاتف: {shopConfig.phone}</p>
                <p className="text-muted-custom small mb-0 en-font">الإيميل: {shopConfig.email}</p>
              </div>
            </div>

            <div className="col-12">
              <div className="p-4 bg-light rounded-4 border border-opacity-10 border-success">
                <h5 className="fw-bold text-dark mb-3"><i className="bi bi-clock me-2 ms-0 text-success"></i>أوقات العمل اليومية</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-muted-custom">
                  {shopConfig.openingHours.map((item, idx) => (
                    <li key={idx} className="d-flex justify-content-between align-items-center">
                      <span>{item.day.ar}</span>
                      <span className="fw-bold text-success en-font">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Google Map Embed Container */}
          <div className="map-container flex-grow-1" style={{ minHeight: '300px' }}>
            <iframe
              src={shopConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع محل عصائر القبيسي"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
