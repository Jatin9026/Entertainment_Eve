import { Play } from "lucide-react";
import { useState, useEffect } from "react";

export default function Glimpses() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Images for the marquee (using placeholders)
  const images = [
    "image.png",
    "image.png",
    "image.png",
    "image.png",
    "image.png"
  ];
  
  // Animate the marquee
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPosition(prev => (prev + 0.5) % (images.length * 400));
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [images.length]);
  
  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Audio wave decorations */}
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center">
        <svg className="w-full h-64" viewBox="0 0 1200 200">
          <path 
            d="M0,100 Q300,20 600,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
          <path 
            d="M0,100 Q300,180 600,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
          <path 
            d="M0,100 Q200,40 400,100 T800,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
          <path 
            d="M0,100 Q200,160 400,100 T800,100 T1200,100" 
            fill="none" 
            stroke="rgb(20, 184, 166)" 
            strokeWidth="2"
            className="opacity-30"
          />
        </svg>
      </div>
      
      {/* Accent circle */}
      <div className="absolute left-1/4 top-1/4 w-8 h-8 rounded-full bg-teal-500"></div>
      
      {/* Album Text */}
      <div className="text-center mb-8 z-10">
        <p className="text-teal-500 font-medium mb-2">LATEST ALBUM</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">EXPERIENCE THE MAGIC OF OUR</h1>
        <h2 className="text-teal-400 text-4xl md:text-5xl font-bold">NEW ALBUM</h2>
      </div>
      
      {/* Album Artwork/Video with Marquee */}
      <div className="relative w-full max-w-4xl mb-16 z-10">
        <div className="aspect-video relative rounded-lg overflow-hidden">
          {/* Marquee scrolling images */}
          <div className="h-full w-full relative overflow-hidden">
            <div 
              className="flex absolute top-0 h-full" 
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {images.concat(images).map((src, index) => (
                <div key={index} className="w-full flex-shrink-0" style={{ width: "400px" }}>
                  <img 
                    src={src} 
                    alt={`Album image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Play button overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button 
              className={`bg-teal-500 rounded-full p-4 transition-transform ${isHovered ? 'scale-110' : 'scale-100'}`}
            >
              <Play size={32} color="white" fill="white" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Text */}
      <div className="text-teal-500 font-medium z-10">
        PHOTO GALLERY
      </div>
    </div>
  );
}