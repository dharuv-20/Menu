import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';

/**
 * Home landing page container wrapping the visual Hero and heritage Story sections
 */
const Home = () => {
  return (
    <div className="flex flex-col justify-start w-full h-full pb-6 scroll-smooth">
      <Hero />
      <Story />
    </div>
  );
};

export default Home;
