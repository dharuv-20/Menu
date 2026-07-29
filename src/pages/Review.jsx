import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { generateImageFromElement } from '../utils/generateImage';
import { formatRupees } from '../utils/currency';
import logoImg from '../assets/logo.png';

// SVG mountain drawing animation
const MountainDrawingLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 select-none">
      <svg 
        viewBox="0 0 100 50" 
        className="w-32 h-16 stroke-primary fill-none mb-4"
        strokeWidth="1"
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Animated Mountain Path */}
        <path 
          d="M10 40 L35 15 L55 35 L75 10 L90 40" 
          className="animated-mountain-path"
        />
        <path 
          d="M5 40 H95" 
          className="animated-mountain-path-base"
        />
      </svg>
      <p className="text-xs font-heading italic text-primary/80 animate-pulse">
        Preparing your order summary...
      </p>

      <style>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animated-mountain-path {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: drawLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animated-mountain-path-base {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: drawLine 1s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

const Review = ({ cart, updateQuantity, selectedList, totalCount, totalPrice }) => {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generationError, setGenerationError] = useState("");
  const captureTargetRef = useRef(null);

  // Auto capitalize first letters of words
  const handleNameChange = (e) => {
    let val = e.target.value;
    // Capitalize first letter of each word
    val = val.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    
    if (val.length <= 40) {
      setGuestName(val);
      if (val.trim().length >= 2) {
        setValidationError("");
      }
    }
  };

  const handleConfirm = async () => {
    const trimmedName = guestName.trim();

    if (trimmedName.length === 0) {
      setValidationError("Please enter your name before confirming your selection.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (trimmedName.length < 2) {
      setValidationError("Name must be at least 2 characters long.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (trimmedName.length > 40) {
      setValidationError("Name must not exceed 40 characters.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setValidationError("");
    setIsLoading(true);
    setGenerationError("");

    // Simulate 1.5s loading confirmation animation (drawing mountains)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      if (!captureTargetRef.current) {
        throw new Error("Capture node not loaded in DOM.");
      }

      // Generate the 1080x1920 branded base64 image URL
      const imgData = await generateImageFromElement(captureTargetRef.current);
      
      // Navigate to Success screen, passing the image url, selected items list and total price as state
      navigate('/success', { state: { imgData, guestName: trimmedName, selectedList, totalPrice } });
    } catch (err) {
      console.error(err);
      setGenerationError("Unable to generate your order summary.");
      setIsLoading(false);
    }
  };

  // If cart is empty, show empty review state
  if (selectedList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 animate-fade-in select-none">
        <svg 
          viewBox="0 0 100 80" 
          className="w-20 h-20 stroke-antique fill-none mb-4 opacity-50"
          strokeWidth="0.75"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <ellipse cx="50" cy="55" rx="35" ry="12" />
          <ellipse cx="50" cy="53" rx="33" ry="10" strokeDasharray="1.5,1.5" />
          <path d="M50 15 C40 28 42 40 50 51 C58 40 60 28 50 15 Z" />
          <path d="M50 15 V51" />
        </svg>
        <h3 className="text-base font-heading font-semibold text-primary mb-1">
          No dishes selected yet.
        </h3>
        <p className="text-xs text-antique/60 font-body max-w-[250px] mb-8">
          Please explore our mountain flavors and add items before entering review.
        </p>
        <Link 
          to="/menu"
          className="px-6 py-2.5 bg-primary hover:bg-accent text-paper font-heading text-xs uppercase tracking-wider border border-secondary/40 shadow-vintage-sm transition-all"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="py-2 animate-fade-in relative">
      
      {/* Loading Overlay Screen */}
      {isLoading && (
        <div className="absolute inset-0 bg-paper/95 backdrop-blur-sm z-50 flex items-center justify-center min-h-[450px]">
          <MountainDrawingLoader />
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide text-primary font-heading mb-1">
          Review Your Selection
        </h2>
        <p className="text-xs text-secondary/80 font-body italic">
          "Please review your selected dishes before confirming your order."
        </p>
      </div>

      {/* Guest Personalization Form */}
      <div className="w-full mb-6 text-left">
        <label className="block text-[10px] font-heading uppercase tracking-widest text-primary/80 mb-1.5 font-bold">
          Guest Name
        </label>
        <input 
          type="text"
          value={guestName}
          onChange={handleNameChange}
          placeholder="Enter your name"
          disabled={isLoading}
          className="w-full bg-paper/40 border border-antique/30 px-3.5 py-2.5 text-xs font-body text-primary placeholder-antique/40 focus:outline-none focus:border-primary focus:bg-paper rounded-sm transition-all"
        />
        {validationError && (
          <span className="text-[10px] text-primary font-body italic mt-1.5 block opacity-90">
            {validationError}
          </span>
        )}
      </div>

      {/* Selected Items Card Listing */}
      <div className="space-y-4 mb-6">
        {selectedList.map(({ item, quantity }) => (
          <div 
            key={item.id}
            className="p-4 bg-paper/60 border border-antique/20 rounded-sm shadow-vintage-sm relative flex flex-col justify-between min-h-[100px]"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-xs font-bold font-heading text-primary">
                  {item.name}
                </h4>
                <span className="text-[10px] text-antique/60 font-body block mt-0.5">
                  {formatRupees(item.price)} each
                </span>
              </div>
              <span className="text-xs font-heading font-semibold text-primary">
                Subtotal: {formatRupees(item.price * quantity)}
              </span>
            </div>

            {/* Selector quantity adjustment drawer */}
            <div className="flex justify-between items-center mt-3 pt-2 border-t border-antique/10">
              <button
                onClick={() => updateQuantity(item.id, -999)}
                disabled={isLoading}
                className="text-[9px] font-heading uppercase tracking-wider text-antique hover:text-primary transition-colors"
              >
                Remove
              </button>

              <div className="flex items-center border border-antique/30 bg-paper rounded-sm">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={isLoading}
                  className="px-2 py-0.5 text-xs font-bold hover:bg-hoverBg/25 transition-colors disabled:opacity-50"
                >
                  −
                </button>
                <span className="px-3 text-[10px] font-heading font-bold text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  disabled={isLoading}
                  className="px-2 py-0.5 text-xs font-bold hover:bg-hoverBg/25 transition-colors disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary details */}
      <div className="p-4 border border-dashed border-antique/30 rounded-sm bg-paper/40 space-y-2.5 mb-6 text-xs font-body">
        <div className="flex justify-between text-primary/70">
          <span>Items Selected</span>
          <span>{totalCount}</span>
        </div>
        <div className="flex justify-between text-primary/70">
          <span>Subtotal</span>
          <span>{formatRupees(totalPrice)}</span>
        </div>
        <div className="flex justify-between items-center border-t border-antique/20 pt-2.5 font-heading text-sm font-bold text-primary">
          <span>Grand Total</span>
          <span>{formatRupees(totalPrice)}</span>
        </div>
      </div>

      {/* Confirmation triggers */}
      <div className="space-y-4">
        {generationError && (
          <div className="p-3 bg-paper border border-antique/40 text-center text-xs font-body text-primary italic">
            {generationError}
            <button 
              onClick={handleConfirm}
              className="block mx-auto mt-2 text-[10px] uppercase tracking-wider font-heading underline"
            >
              Try Again
            </button>
          </div>
        )}

        <button
          onClick={handleConfirm}
          disabled={isLoading}
          className="w-full h-14 relative inline-flex items-center justify-center bg-primary hover:bg-accent text-paper font-heading text-xs uppercase tracking-widest border border-secondary/40 transition-colors duration-300 shadow-vintage-md rounded-sm group disabled:opacity-55"
        >
          <span>Confirm Selection</span>
          <span className="absolute inset-1 border border-dashed border-secondary/20 group-hover:border-secondary/30 pointer-events-none rounded-sm"></span>
        </button>
      </div>

      {/* Container wrapper that hides it from the layout flow and prevents scroll overflows */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <div 
          ref={captureTargetRef}
          id="hidden-capture-receipt"
          className="w-[1080px] min-h-[1920px] h-auto bg-paper flex flex-col justify-between p-24 select-none relative box-border"
          style={{ 
            fontFamily: "'Roboto Slab', serif",
            backgroundColor: '#F7EEDB',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.05)), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.2 0 0 0 0 0.15 0 0 0 0 0.1 0.055 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        >
          {/* Thick double border wrapper */}
          <div className="absolute inset-10 border-[6px] border-double border-antique pointer-events-none rounded-sm"></div>

          {/* Thick vintage corner flourishes for capture */}
          <div className="absolute w-16 h-16 top-14 left-14 border-t-[4px] border-l-[4px] border-antique pointer-events-none"></div>
          <div className="absolute w-16 h-16 top-14 right-14 border-t-[4px] border-r-[4px] border-antique pointer-events-none"></div>
          <div className="absolute w-16 h-16 bottom-14 left-14 border-b-[4px] border-l-[4px] border-antique pointer-events-none"></div>
          <div className="absolute w-16 h-16 bottom-14 right-14 border-b-[4px] border-r-[4px] border-antique pointer-events-none"></div>

          {/* Watermark logo background in center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none z-0 select-none">
            <svg viewBox="0 0 100 100" className="w-[600px] h-[600px] stroke-primary fill-none" strokeWidth="0.5">
              <path d="M50 5 C30 30 30 60 50 95 C70 60 70 30 50 5 Z" />
              <path d="M50 5 V95" />
            </svg>
          </div>

          {/* Top Header Logo */}
          <div className="text-center pt-8 z-10 flex flex-col items-center justify-center">
            <img 
              src={logoImg} 
              alt="Tatsaaraa Kavan Logo" 
              className="h-44 w-auto object-contain mix-blend-multiply mb-3" 
            />
            <div className="w-80 h-[1.5px] bg-antique/30 mx-auto mt-6"></div>
          </div>

          {/* Guest & Date Details */}
          <div className="px-16 z-10 space-y-6">
            <div className="flex justify-between border-b border-antique/20 pb-3">
              <span className="text-lg uppercase tracking-[0.2em] text-secondary font-heading font-semibold">Guest</span>
              <span className="text-xl font-bold text-primary font-body">{guestName.trim()}</span>
            </div>
            <div className="flex justify-between border-b border-antique/20 pb-3">
              <span className="text-lg uppercase tracking-[0.2em] text-secondary font-heading font-semibold">Date</span>
              <span className="text-xl font-semibold text-primary font-body">
                {new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
            <div className="flex justify-between border-b border-antique/20 pb-3">
              <span className="text-lg uppercase tracking-[0.2em] text-secondary font-heading font-semibold">Time</span>
              <span className="text-xl font-semibold text-primary font-body">
                {new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Selected Items list (expanded sizes for 1080x1920) */}
          <div className="px-16 py-8 z-10 flex-grow flex flex-col justify-start">
            <h3 className="text-lg uppercase tracking-[0.25em] text-secondary font-heading font-semibold mb-8 border-b border-antique/30 pb-3">
              Selected Items
            </h3>
            
            <div className="space-y-7">
              {selectedList.map(({ item, quantity }) => (
                <div key={item.id} className="flex justify-between items-center py-1">
                  <div className="flex-grow pr-10">
                    <span className="font-bold text-primary font-heading text-2xl block leading-snug">
                      {item.name}
                    </span>
                    <span className="text-base text-antique/60 font-body block mt-1">
                      {item.category} • {formatRupees(item.price)} each
                    </span>
                  </div>
                  <div className="flex items-center gap-16 shrink-0">
                    <span className="font-bold text-primary font-body text-xl w-14 text-center">
                      ×{quantity}
                    </span>
                    <span className="font-bold text-primary font-heading text-2xl w-28 text-right">
                      {formatRupees(item.price * quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total & Message */}
          <div className="px-16 pb-12 z-10 space-y-10">
            <div className="border-t-[4px] border-double border-antique pt-8 flex justify-between items-center font-heading text-2xl font-bold text-primary tracking-wider">
              <span>GRAND TOTAL</span>
              <span className="text-3xl">{formatRupees(totalPrice)}</span>
            </div>

            <div className="text-center pt-2">
              <div className="w-24 h-[1.5px] bg-antique/30 mx-auto mb-5"></div>
              <p className="text-xl font-heading italic text-secondary font-semibold tracking-wide">
                Thank you for dining with us.
              </p>
              <p className="text-base text-primary/70 font-body mt-2">
                We hope you enjoy your meal.
              </p>
            </div>

            {/* Footer Logo Illustration */}
            <div className="text-center pt-2 opacity-35 flex flex-col items-center">
              <svg viewBox="0 0 100 25" className="w-36 h-10 fill-none stroke-antique" strokeWidth="1.25">
                <path d="M10 20 L30 5 L50 18 L70 2 L90 20" />
              </svg>
              <span className="text-xs font-body tracking-[0.25em] text-antique mt-2.5 uppercase">
                tatsaaraakavan.com
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Review;
