import React, { useRef, useEffect } from 'react';
import Hyperspeed from './Hyperspeed/Hyperspeed';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // You can perform any additional setup or customization here
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <img
        src="https://demo.awaikenthemes.com/assets/images/hero-bg.jpg"
        alt="Background"    />
      <Hyperspeed />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to Hero Section</h1>
      </div>
    </div>
  );
};

export default HeroSection;
