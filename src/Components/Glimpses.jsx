import { useState, useEffect, useRef } from "react";

export default function Glimpses() {
  // Images for the marquee
  const images = [
    "Images/image.png",
    "Images/image.png",
    "Images/image.png",
    "Images/image.png",
    "Images/image.png"
  ];
  
  // State for animated particles
  const [particles, setParticles] = useState([]);
  // State for stars
  const [stars, setStars] = useState([]);
  // State for animated ripples
  const [ripples, setRipples] = useState([]);
  
  // Ref for the container to add click interaction
  const containerRef = useRef(null);
  
  // Generate random particles on component mount
  useEffect(() => {
    // Create particles
    const newParticles = Array.from({ length: 30 }, () => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
    
    // Create stars
    const newStars = Array.from({ length: 50 }, () => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      twinkleDelay: Math.random() * 5
    }));
    setStars(newStars);
    
    // Create ripple effect on click
    const handleClick = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const newRipple = {
        id: Math.random().toString(36).substr(2, 9),
        x,
        y,
        timestamp: Date.now()
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 2000);
    };
    
    // Set up and clean up event listener
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('click', handleClick);
    }
    
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('click', handleClick);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="bg-black w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Stars in the background */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle 4s ease-in-out ${star.twinkleDelay}s infinite`,
          }}
        />
      ))}
      
      {/* Animated background particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-teal-500 opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
      
      {/* Click ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border border-teal-400 pointer-events-none"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '20px',
            animation: 'ripple 2s cubic-bezier(0, 0.5, 0.5, 1) forwards',
          }}
        />
      ))}
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 z-0">
        <div className="absolute inset-0 bg-gradient-radial opacity-20 animate-pulse" />
      </div>
      
      {/* Animated circular orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-teal-900/10 blur-xl animate-orbit-1" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-teal-900/10 blur-xl animate-orbit-2" />
      
      {/* Audio wave decorations with animation */}
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center overflow-hidden">
        <svg className="w-full h-64" viewBox="0 0 1200 200">
          <path 
            d="M0,100 Q300,20 600,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30 animate-wave-1"
          />
          <path 
            d="M0,100 Q300,180 600,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30 animate-wave-2"
          />
          <path 
            d="M0,100 Q200,40 400,100 T800,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30 animate-wave-3"
          />
          <path 
            d="M0,100 Q200,160 400,100 T800,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30 animate-wave-4"
          />
        </svg>
      </div>
      
      {/* Animated vertical bars like music visualizer */}
      <div className="absolute left-0 right-0 bottom-0 flex justify-around items-end h-32 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="w-2 bg-teal-500 opacity-20 rounded-t-lg"
            style={{
              height: `${Math.random() * 100}%`,
              animation: `equalizer ${1 + Math.random() * 2}s ease-in-out ${Math.random()}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      {/* Spinning geometric shapes */}
      <div className="absolute top-1/3 left-10 w-16 h-16 opacity-20 animate-spin-slow">
        <svg viewBox="0 0 100 100" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="2">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-10 w-12 h-12 opacity-20 animate-spin-reverse">
        <svg viewBox="0 0 100 100" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="2">
          <rect x="20" y="20" width="60" height="60" />
        </svg>
      </div>
      
      {/* Moving diagonal lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="w-full h-full relative">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index}
              className="absolute bg-teal-500 h-px w-full"
              style={{
                top: `${index * 15}%`,
                transform: 'rotate(-45deg) scale(2)',
                transformOrigin: 'center',
                animation: `slide-diagonal ${8 + index}s linear infinite`,
                left: `-100%`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Accent circle with pulse animation */}
      <div className="absolute left-1/4 top-1/4 w-8 h-8 rounded-full bg-teal-500 animate-ping opacity-30" />
      <div className="absolute left-1/4 top-1/4 w-8 h-8 rounded-full bg-teal-500" />
      
      {/* Album Text with animated reveal */}
      <div className="text-center mb-8 z-10 overflow-hidden">
        <div className="relative">
          <p className="text-teal-500 font-medium mb-2 animate-fade-in">Glimpses</p>
          <div className="overflow-hidden">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 animate-slide-in-left">
              PAST MEMORIES
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="text-teal-400 text-4xl md:text-5xl font-bold animate-slide-in-right animate-glow">
             efwefrre
            </h2>
          </div>
          <div className="absolute -z-10 left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-30">
            <div className="absolute w-1/2 h-1/2 bg-teal-500 rounded-full animate-pulse-slow" />
          </div>
        </div>
      </div>
      
      {/* Album Artwork/Video with Marquee */}
      <div className="relative w-full max-w-4xl mb-16 z-10 hover:scale-105 transition-transform duration-700">
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg shadow-teal-900/20 border border-teal-500/20">
          {/* Animated gradient border */}
          <div className="absolute inset-0 z-0 animate-border-gradient overflow-hidden">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-30" />
          </div>
          
          {/* Marquee scrolling images using CSS animations */}
          <div className="h-full w-full relative overflow-hidden">
            <div 
              className="flex absolute top-0 h-full animate-marquee"
              style={{
                width: `${images.length * 400 * 2}px`,
                animation: "marquee 30s linear infinite"
              }}
            >
              {/* First set of images */}
              {images.map((src, index) => (
                <div key={`first-${index}`} className="flex-shrink-0" style={{ width: "400px" }}>
                  <img 
                    src={src} 
                    alt={`Album image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
              
              {/* Duplicated set for seamless looping */}
              {images.map((src, index) => (
                <div key={`second-${index}`} className="flex-shrink-0" style={{ width: "400px" }}>
                  <img 
                    src={src} 
                    alt={`Album image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Corner glints */}
          <div className="absolute top-0 left-0 w-8 h-8 animate-corner-glint-1" />
          <div className="absolute bottom-0 right-0 w-8 h-8 animate-corner-glint-2" />
        </div>
      </div>
      
      {/* Photo Gallery Text with animation */}
      <div className="text-teal-500 font-medium z-10 animate-bounce-slow relative group">
        <span className="relative inline-block">
         phtot
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-700" />
        </span>
        
        {/* Animated dots around the text */}
        <div className="absolute -top-2 -right-2 w-1 h-1 bg-teal-500 rounded-full animate-pulse" />
        <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-teal-500 rounded-full animate-pulse-delay" />
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${images.length * 400}px);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -10px);
          }
        }
        
        @keyframes equalizer {
          0% {
            height: 10%;
          }
          100% {
            height: 100%;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes slide-in-left {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-in-right {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(20, 184, 166, 0.5), 0 0 10px rgba(20, 184, 166, 0.3);
          }
          50% {
            text-shadow: 0 0 15px rgba(20, 184, 166, 0.8), 0 0 20px rgba(20, 184, 166, 0.5);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes wave-1 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes wave-2 {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
        
        @keyframes wave-3 {
          0%, 100% {
            transform: translateY(0);
          }
          33% {
            transform: translateY(-3px);
          }
          66% {
            transform: translateY(3px);
          }
        }
        
        @keyframes wave-4 {
          0%, 100% {
            transform: translateY(0);
          }
          33% {
            transform: translateY(3px);
          }
          66% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            border-width: 1px;
          }
          100% {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
            border-width: 1px;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes orbit-1 {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, 20px);
          }
          50% {
            transform: translate(0, 40px);
          }
          75% {
            transform: translate(-20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        @keyframes orbit-2 {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-20px, -20px);
          }
          50% {
            transform: translate(0, -40px);
          }
          75% {
            transform: translate(20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        
        @keyframes slide-diagonal {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        
        @keyframes border-gradient {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        @keyframes corner-glint-1 {
          0%, 100% {
            background: radial-gradient(circle at top left, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 0;
          }
          25% {
            background: radial-gradient(circle at top left, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 1;
          }
          30% {
            background: radial-gradient(circle at top left, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 0;
          }
        }
        
        @keyframes corner-glint-2 {
          0%, 100% {
            background: radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 0;
          }
          75% {
            background: radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 1;
          }
          80% {
            background: radial-gradient(circle at bottom right, rgba(20, 184, 166, 0.8) 0%, transparent 70%);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-delay {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-delay {
          animation: pulse-delay 6s ease-in-out 0.5s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1.2s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1.5s ease-out forwards;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-wave-1 {
          animation: wave-1 8s ease-in-out infinite;
        }
        
        .animate-wave-2 {
          animation: wave-2 7s ease-in-out infinite;
        }
        
        .animate-wave-3 {
          animation: wave-3 9s ease-in-out infinite;
        }
        
        .animate-wave-4 {
          animation: wave-4 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-orbit-1 {
          animation: orbit-1 20s ease-in-out infinite;
        }
        
        .animate-orbit-2 {
          animation: orbit-2 25s ease-in-out infinite;
        }
        
        .animate-corner-glint-1 {
          animation: corner-glint-1 8s ease-in-out infinite;
        }
        
        .animate-corner-glint-2 {
          animation: corner-glint-2 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}