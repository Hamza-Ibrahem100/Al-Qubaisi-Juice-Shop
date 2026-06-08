import React from 'react';
import { shopConfig } from '../config';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Generate WhatsApp order message link
  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let messageText = `مرحباً *عصائر القبيسي* 🥤\n\n`;
    messageText += `أود طلب قائمة العصائر الطازجة التالية:\n`;
    messageText += `-----------------------------------------\n`;
    
    cartItems.forEach((item, index) => {
      messageText += `${index + 1}. *${item.name.ar}* (${item.name.en})\n`;
      messageText += `   الكمية: ${item.quantity} × ${item.price} ج.م = *${item.quantity * item.price} ج.م*\n`;
    });
    
    messageText += `-----------------------------------------\n`;
    messageText += `💰 *المجموع الكلي:* ${totalPrice} جنيه مصري\n\n`;
    messageText += `يرجى تأكيد استلام الطلب وبدء التحضير. شكراً لكم!`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${shopConfig.whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ opacity: isOpen ? 1 : 0 }}
        onClick={onClose}
      ></div>

      {/* Cart Drawer Container */}
      <div 
        className="cart-drawer"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          left: 'auto',
          right: 0
        }}
      >
        {/* Drawer Header */}
        <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light">
          <h5 className="mb-0 fw-bold d-flex align-items-center gap-2">
            <i className="bi bi-cart3 text-success fs-4"></i>
            سلة التسوق
            <span className="badge bg-success rounded-pill en-font">{cartItems.length}</span>
          </h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            onClick={onClose}
            aria-label="إغلاق السلة"
          ></button>
        </div>

        {/* Drawer Content */}
        <div className="flex-grow-1 overflow-y-auto p-3">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-bag-x-fill text-muted" style={{ fontSize: '4.5rem' }}></i>
              <h5 className="mt-3 fw-semibold text-muted">سلة التسوق فارغة</h5>
              <p className="small text-muted-custom">تصفح قائمة العصائر اللذيذة وأضف بعضاً منها الآن!</p>
              <button 
                onClick={onClose} 
                className="btn btn-fresh-green mt-3"
              >
                تصفح قائمة العصائر
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="card border-0 shadow-sm p-2 rounded-3" 
                  style={{ background: '#fcfcfc', border: '1px solid #f0f0f0' }}
                >
                  <div className="row g-0 align-items-center">
                    {/* Item Image */}
                    <div className="col-3">
                      <img 
                        src={item.image} 
                        alt={item.name.ar} 
                        className="img-fluid rounded-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=120&auto=format&fit=crop&q=60"; // fallback
                        }}
                      />
                    </div>
                    {/* Item Info */}
                    <div className="col-9 ps-2">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-0 fw-bold text-dark fs-6">{item.name.ar}</h6>
                          <small className="text-muted en-font fs-7">{item.name.en}</small>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="btn btn-link text-danger p-0 border-0"
                          title="حذف"
                        >
                          <i className="bi bi-trash-fill fs-6"></i>
                        </button>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fw-semibold text-success en-font small">
                          {item.price} EGP
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="quantity-selector" style={{ scale: '0.9' }}>
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span className="px-2 fw-semibold en-font">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="p-3 border-top bg-light">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="fw-bold fs-5 text-dark">المجموع الكلي:</span>
              <span className="fw-bold fs-4 text-success en-font">
                {totalPrice} EGP
              </span>
            </div>
            
            <div className="alert alert-info py-2 px-3 small rounded-3 border-0 d-flex align-items-start gap-2 mb-3">
              <i className="bi bi-info-circle-fill text-info mt-1 fs-6"></i>
              <div>
                سيتم إرسال تفاصيل طلبك مباشرةً إلى رقم الواتساب الخاص بالمتجر لتأكيد التوصيل أو الاستلام.
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="btn btn-fresh-orange w-100 py-3 rounded-pill fw-bold fs-5 d-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-whatsapp fs-4"></i>
              إرسال الطلب عبر واتساب
            </button>
          </div>
        )}
      </div>
    </>
  );
}
