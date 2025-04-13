import { useState, useEffect } from "react";

export default function Glimpses() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);

  // Images for the marquee (using placeholders)
  const images = [
    "glimp1.jpg",
    "glimp2.jpg",
    "glimp3.jpg",
    "glimp4.jpg",
    "glimp5.jpg",
    "glimp6.jpg",
    "glimp7.jpg"
  ];

  // Animate the marquee and waves
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPosition(prev => (prev + 0.5) % (images.length * 300)); // Adjusted for smaller image width
      setWaveOffset(prev => (prev + 0.2) % 1000);
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-b from-black via-[#001a1a] to-black w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      

      {/* Background Audio Wave Decorations - Enhanced Animation */}
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          {/* First set of waves - bottom layer */}
          <path 
            d={`M0,300 Q150,${280 + Math.sin(waveOffset * 0.01) * 30} 300,300 T600,${290 + Math.cos(waveOffset * 0.008) * 20} T900,${310 + Math.sin(waveOffset * 0.012) * 25} T1200,300`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-20"
          />
          <path 
            d={`M0,350 Q150,${380 + Math.cos(waveOffset * 0.015) * 25} 300,350 T600,${330 + Math.sin(waveOffset * 0.01) * 30} T900,${370 + Math.cos(waveOffset * 0.009) * 20} T1200,350`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-20"
          />
          
          {/* Second set of waves - middle layer */}
          <path 
            d={`M0,250 Q200,${210 + Math.sin(waveOffset * 0.02) * 25} 400,250 T800,${260 + Math.cos(waveOffset * 0.018) * 20} T1200,250`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="3"
            className="opacity-25"
          />
          <path 
            d={`M0,400 Q200,${440 + Math.cos(waveOffset * 0.017) * 30} 400,400 T800,${380 + Math.sin(waveOffset * 0.022) * 25} T1200,400`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="3"
            className="opacity-25"
          />
          
          {/* Third set of waves - top layer with more movement */}
          <path 
            d={`M0,200 Q100,${170 + Math.sin(waveOffset * 0.03) * 40} 200,200 T400,${210 + Math.cos(waveOffset * 0.025) * 30} T600,${190 + Math.sin(waveOffset * 0.035) * 35} T800,${205 + Math.cos(waveOffset * 0.028) * 25} T1000,${195 + Math.sin(waveOffset * 0.032) * 30} T1200,200`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
          <path 
            d={`M0,450 Q100,${480 + Math.cos(waveOffset * 0.033) * 35} 200,450 T400,${430 + Math.sin(waveOffset * 0.027) * 40} T600,${470 + Math.cos(waveOffset * 0.031) * 30} T800,${440 + Math.sin(waveOffset * 0.029) * 35} T1000,${460 + Math.cos(waveOffset * 0.034) * 25} T1200,450`}
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
          
          {/* Floating particles/dots - only on the right side */}
          {Array.from({ length: 10 }).map((_, i) => (
            <circle
              key={i}
              cx={600 + ((waveOffset * (0.05 + i * 0.01)) % 600)}
              cy={200 + Math.sin(waveOffset * (0.02 + i * 0.005)) * 200}
              r={1 + (i % 3)}
              fill="rgb(20, 184, 166)"
              className="opacity-50"
            />
          ))}
        </svg>
      </div>
      
      {/* Accent circle with pulse animation */}
      {/* <div className="absolute left-1/4 top-1/4 w-8 h-8 rounded-full bg-teal-500 animate-ping opacity-30" />
      <div className="absolute left-1/4 top-1/4 w-8 h-8 rounded-full bg-teal-500" /> */}
      
      {/* Album Text with animated reveal */}
      <div className="text-center mb-8 z-10 overflow-hidden">
        <div className="relative">
          <p className="text-teal-500 font-medium mb-2 animate-fade-in">Glimpses</p>
          <div className="overflow-hidden">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 animate-slide-in-left">
              PAST MEMORIES
            </h1>
          </div>
          
          <div className="absolute -z-10 left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-30">
          </div>
        </div>
      </div>

      {/* Album Artwork with Marquee - Images Only */}
      <div className="relative w-full max-w-4xl mb-16 z-10">
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg shadow-teal-900/20">
          {/* Marquee scrolling images */}
          <div className="h-full w-full relative overflow-hidden bg-black/30">
            <div 
              className="flex absolute top-0 h-full" 
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {images.concat(images).map((src, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: "300px" }}>
                  <img 
                    src={src} 
                    alt={`Album image ${index + 1}`} 
                    className="h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Text */}
      
    </div>
  );
}