import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Review from './pages/Review';
import Success from './pages/Success';
import { useCart } from './hooks/useCart';
import logoImg from './assets/logo.png';

// Floating Cart Component
const FloatingCart = ({ totalCount, totalPrice }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (totalCount > 0) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalCount]);

  return (
    <Link 
      to="/review"
      className={`absolute bottom-[72px] left-4 right-4 p-3 bg-primary text-paper border border-secondary/40 shadow-vintage-lg flex justify-between items-center z-30 transition-all duration-300 rounded-sm hover:bg-accent active:scale-[0.98] ${
        pulse ? 'scale-[1.03] border-secondary' : 'scale-100'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-paper">
            {totalCount} {totalCount === 1 ? 'Item' : 'Items'} Selected
          </span>
          <span className="text-[10px] font-body text-secondary font-medium">
            Estimated Total: ₹{totalPrice}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[10px] font-heading uppercase tracking-widest text-secondary font-bold">
        <span>Proceed</span>
        <span className="text-xs">→</span>
      </div>
    </Link>
  );
};

// Shared Layout Wrapper
const Layout = ({ children, totalCount, totalPrice }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Automatically scroll to the top of the window and main container when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const mainEl = document.querySelector('main');
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start p-0 md:p-6 select-none">
      {/* Premium Centered Frame (Mobile-first width on desktop) */}
      <div className="w-full max-w-md md:max-w-xl h-screen md:h-[850px] md:my-4 parchment-paper vintage-border flex flex-col justify-between overflow-hidden shadow-vintage-lg relative">
        
        {/* Corner Flourishes */}
        <div className="corner-flourish corner-flourish-tl"></div>
        <div className="corner-flourish corner-flourish-tr"></div>
        <div className="corner-flourish corner-flourish-bl"></div>
        <div className="corner-flourish corner-flourish-br"></div>

        {/* Header Section */}
        <header className="pt-6 pb-2 px-6 flex flex-col items-center justify-center z-10 shrink-0">
          <img 
            src={logoImg} 
            alt="Tatsaaraa Kavan Logo" 
            className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" 
          />
        </header>

        {/* Main Content Area */}
        <main className="flex-grow px-4 py-2 overflow-y-auto hide-scrollbar z-10">
          {children}
        </main>

        {/* Floating Cart Banner (shows only if items selected and NOT on checkout/review/success pages) */}
        {totalCount > 0 && location.pathname !== '/review' && location.pathname !== '/success' && (
          <FloatingCart totalCount={totalCount} totalPrice={totalPrice} />
        )}

        {/* Footer Navigation */}
        <nav className="border-t border-antique/20 bg-paper/95 backdrop-blur-sm sticky bottom-0 z-20 py-3 px-4 safe-padding-bottom shrink-0">
          <div className="flex justify-around items-center max-w-xs mx-auto">
            <Link 
              to="/" 
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/') ? 'text-primary font-semibold' : 'text-antique/60 hover:text-primary'
              }`}
            >
              <span className="text-[10px] font-heading uppercase tracking-wider">Welcome</span>
            </Link>
            
            <div className="h-4 w-[1px] bg-antique/20"></div>

            <Link 
              to="/menu" 
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/menu') ? 'text-primary font-semibold' : 'text-antique/60 hover:text-primary'
              }`}
            >
              <span className="text-[10px] font-heading uppercase tracking-wider">Our Menu</span>
            </Link>

            <div className="h-4 w-[1px] bg-antique/20"></div>

            <Link 
              to="/story" 
              className={`flex flex-col items-center transition-colors duration-200 ${
                isActive('/story') ? 'text-primary font-semibold' : 'text-antique/60 hover:text-primary'
              }`}
            >
              <span className="text-[10px] font-heading uppercase tracking-wider">Our Story</span>
            </Link>

            <div className="h-4 w-[1px] bg-antique/20"></div>

            <Link 
              to="/review" 
              className={`flex flex-col items-center relative transition-colors duration-200 ${
                isActive('/review') ? 'text-primary font-semibold' : 'text-antique/60 hover:text-primary'
              }`}
            >
              <span className="text-[10px] font-heading uppercase tracking-wider">Selected</span>
              {totalCount > 0 && (
                <span className="absolute -top-2.5 -right-3 bg-primary text-paper text-[8px] font-body rounded-full w-4 h-4 flex items-center justify-center border border-secondary/50">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

function App() {
  const {
    cart,
    selectedList,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice
  } = useCart();

  return (
    <Router>
      <Layout totalCount={totalCount} totalPrice={totalPrice}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/menu" 
            element={
              <Menu 
                cart={cart} 
                updateQuantity={updateQuantity} 
              />
            } 
          />
          <Route path="/story" element={<Story />} />
          <Route 
            path="/review" 
            element={
              <Review 
                cart={cart} 
                updateQuantity={updateQuantity}
                selectedList={selectedList}
                totalCount={totalCount}
                totalPrice={totalPrice}
              />
            } 
          />
          <Route 
            path="/success" 
            element={
              <Success 
                clearSelection={clearCart} 
              />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
