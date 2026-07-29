import React from 'react';

const Story = () => {
  return (
    <div className="py-6 px-4 animate-fade-in flex flex-col items-center select-none">
      <h2 className="text-2xl font-bold tracking-wide text-primary font-heading mb-1 text-center">
        Our Story
      </h2>
      <p className="text-[10px] tracking-[0.2em] uppercase text-secondary font-body mb-4 text-center">
        Mountain Serenity & Slow Living
      </p>

      {/* Decorative Divider */}
      <div className="vintage-divider">
        <div className="vintage-divider-dot"></div>
      </div>

      {/* Narrative blocks */}
      <div className="text-primary/90 font-body text-xs md:text-sm leading-relaxed space-y-5 text-justify max-w-sm">
        <p>
          Nestled amidst the peaceful hills of Ramgarh (Bhowali Range), Uttarakhand, 
          <strong> Tatsaaraa Kavan</strong> is a charming colonial-style homestay where nature, comfort, 
          and heartfelt hospitality come together to create unforgettable experiences.
        </p>

        <p>
          Inspired by the timeless beauty of the Kumaon Himalayas, Tatsaaraa Kavan offers guests 
          a place to slow down, reconnect with nature, enjoy authentic home-cooked meals, 
          and experience genuine Pahadi hospitality.
        </p>

        <p>
          Whether you're here for a peaceful getaway, a family vacation, or a relaxing workcation, 
          every stay is designed to feel warm, memorable, and welcoming.
        </p>
      </div>

      {/* Final Slogan Divider */}
      <div className="w-16 h-[1px] bg-antique/30 my-8"></div>

      <div className="text-center max-w-xs">
        <p className="text-xs md:text-sm font-heading italic text-secondary font-medium tracking-wide">
          "We don't just welcome guests—we welcome you home."
        </p>
      </div>

      {/* Bottom Motif */}
      <div className="mt-10 opacity-30">
        <svg 
          viewBox="0 0 100 20" 
          className="w-16 h-8 fill-none stroke-antique" 
          strokeWidth="1"
        >
          <path d="M10 10 C30 0 70 20 90 10" />
          <circle cx="50" cy="10" r="2" className="fill-antique" />
        </svg>
      </div>
    </div>
  );
};

export default Story;
