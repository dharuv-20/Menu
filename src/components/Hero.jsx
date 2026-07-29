import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[380px] py-8 px-4 text-center select-none">

      {/* Slogan */}
      <div className="space-y-4 my-auto">
        <h2 className="text-xs tracking-[0.25em] uppercase text-secondary font-body font-semibold">
          Tatsaaraa Kavan
        </h2>

        <h1 className="text-3xl font-bold tracking-wide text-primary font-heading px-2 leading-tight">
          Taste the Warmth of the Himalayas
        </h1>

        {/* Vintage Divider */}
        <div className="vintage-divider !my-4">
          <div className="vintage-divider-dot"></div>
        </div>

        <p className="text-xs text-primary/85 max-w-xs mx-auto font-body leading-relaxed px-4">
          Authentic home-cooked meals prepared with love amidst the peaceful hills of Ramgarh.
        </p>
      </div>

      {/* Spacing */}
      <div className="my-2"></div>

      {/* Button */}
      <div className="w-full max-w-xs mt-auto">
        <Link 
          to="/menu"
          className="w-full relative inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-accent text-paper font-heading text-xs uppercase tracking-widest border border-secondary/40 transition-colors duration-300 shadow-vintage-md group"
        >
          <span>View Menu</span>
          <span className="absolute inset-1 border border-dashed border-secondary/20 group-hover:border-secondary/40 pointer-events-none transition-colors duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
