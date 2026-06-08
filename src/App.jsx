import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { shopConfig } from './config';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Add item to shopping cart
  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Item is new, add it
        return [...prevCart, { ...product, quantity }];
      }
    });
    
    // Automatically open the cart drawer so the user sees their added item
    setIsCartOpen(true);
  };

  // Modify quantity of a cart item
  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} onAddToCart={handleAddToCart} />;
      case 'menu':
        return <MenuPage onAddToCart={handleAddToCart} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} onAddToCart={handleAddToCart} />;
    }
  };

  // Calculate total item count in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Sticky Glass Navbar */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onCartToggle={() => setIsCartOpen(!isCartOpen)} 
        cartCount={cartCount} 
      />

      {/* Main Pages Content */}
      <main className="flex-grow-1">
        {renderPage()}
      </main>

      {/* Footer component */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Cart Drawer Overlay & Sidebar */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Floating WhatsApp chat widget */}
      <a 
        href={`https://wa.me/${shopConfig.whatsappNumber}?text=${encodeURIComponent("مرحباً عصائر القبيسي، أود الاستفسار عن العصائر الطازجة والخلطات المتوفرة اليوم!")}`}
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float d-flex align-items-center justify-content-center shadow-lg"
        title="تواصل معنا مباشرة عبر واتساب"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}
