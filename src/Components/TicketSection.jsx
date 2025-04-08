import React, { useEffect, useState } from 'react';
import "../styles/buttons.css";
// import Header from './components/Header';
// import Hero from './components/Hero';
// import FeaturedProducts from './components/FeaturedProducts';
// import AboutSection from './components/AboutSection';
// import BestSellers from './components/BestSellers';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
import { q } from 'motion/react-client';
// import { useState,useEffect } from 'react';


const TicketSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(1);
  
  // Animation effect for continuous pulsing
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity(prev => (prev === 1 ? 1.2 : 1));
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='ticket' className="bg-[#010f0b] text-white py-12 px-6 md:px-16">
      {/* About Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Heading and Button */}
          <div className="md:w-1/2">
            <p className="text-teal-400 font-medium mb-2">ABOUT US</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              THE SOUNDTRACK TO YOUR MOST <span className="text-teal-400">UNFORGETTABLE</span>
            </h1>
            <button className="bg-transparent text-white-500 font-bold py-3 px-8 rounded-full btn-default">
              About More
            </button>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="mb-6">
            Entertainment Eve is an exciting event filled with laughter, music, and unforgettable moments. It promises a fun night where everyone can relax, enjoy performances, play games, and celebrate together. A perfect way to unwind and make lasting memories!
            </p>
            <p>
            Entertainment Eve is an exciting event filled with laughter, music, and unforgettable moments. It promises a fun night where everyone can relax, enjoy performances, play games, and celebrate together. A perfect way to unwind and make lasting memories!
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Image Section with Highly Dynamic Animated Border */}
      <div className="max-w-6xl mx-auto my-12">
        <div 
          className="relative p-2 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow: isHovered 
              ? '0 0 25px 5px rgba(0, 200, 148, 0.8), 0 0 40px 8px rgba(0, 255, 191, 0.6)' 
              : '0 0 15px 2px rgba(0, 200, 148, 0.5)'
          }}
        >
          {/* Outer Glowing Border */}
          <div className="absolute inset-0 rounded-xl border-8 border-teal-400"
            style={{
              animation: 'borderPulse 3s infinite alternate',
              boxShadow: 'inset 0 0 20px rgba(0, 255, 191, 0.7)'
            }}
          ></div>
          
          {/* Animated Gradient Overlay */}
          <div 
            className="absolute inset-0 rounded-xl overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, rgba(0, 200, 148, 0.3), rgba(0, 255, 191, 0.1), rgba(0, 200, 148, 0.3))',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 8s ease infinite'
            }}
          ></div>
          
          {/* Animated Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-8 border-l-8 border-teal-400 rounded-tl-xl"
            style={{animation: 'cornerPulse 2s infinite alternate'}}></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-8 border-r-8 border-teal-400 rounded-tr-xl"
            style={{animation: 'cornerPulse 2s infinite alternate', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-8 border-l-8 border-teal-400 rounded-bl-xl"
            style={{animation: 'cornerPulse 2s infinite alternate', animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-8 border-r-8 border-teal-400 rounded-br-xl"
            style={{animation: 'cornerPulse 2s infinite alternate', animationDelay: '1.5s'}}></div>
          
          {/* Moving Light Effect */}
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 191, 0.4), transparent)',
              transform: 'skewX(-20deg) translateX(-100%)',
              animation: 'lightMove 4s infinite'
            }}
          ></div>
          
          {/* Image Container with Inner Border */}
          <div className="relative z-10 rounded-lg overflow-hidden border-4 border-teal-500 m-2">
            <img 
              src="Ticket.png" 
              alt="Entertainment Eve Event" 
              className="w-full object-cover h-96"
            />
            
            {/* Hover Overlay Effect */}
            {isHovered && (
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-60 transition-opacity duration-300">
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-xl font-bold">ENTERTAINMENT EVE</p>
                  <p className="text-teal-300">May 3rd, 2025 • KIET AUDITORIUM</p>
                </div>
              </div>
            )}
          </div>
          
          {/* StarBorder as Additional Effect */}
          {/* <StarBorder as="div" color="#00ffbf" speed="4s" className="absolute inset-0 z-0">
            <div className="w-full h-full"></div>
          </StarBorder> */}
        </div>
        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes borderPulse {
            0% { opacity: 0.8; transform: scale(0.99); }
            100% { opacity: 1; transform: scale(1.01); }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes cornerPulse {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          
          @keyframes lightMove {
            0% { transform: skewX(-20deg) translateX(-100%); }
            100% { transform: skewX(-20deg) translateX(500%); }
          }
        `}</style>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">10</span>
          <span className="text-xl">Years Of Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">18</span>
          <span className="text-xl">Skilled Professionals</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">32</span>
          <span className="text-xl">Visited Conferences</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">1K</span>
          <span className="text-xl">Projects Worldwide</span>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;