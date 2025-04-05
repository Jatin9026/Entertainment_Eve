import React, { useRef, useEffect } from 'react';
import Hyperspeed from "./React_bits/Hyperspeed/Hyperspeed";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Any additional setup if needed
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Image Background */}
      <img
        src="https://orpheus.themerex.net/wp-content/uploads/2024/08/259_2-1-copyright.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Tint Overlay */}
      {/* <div className="absolute inset-0 bg-[#00fcb8] opacity-30"></div> */}

      {/* Hyperspeed Component Wrapper (scaled up) */}
      <div className="relative z-10 w-full h-full transform scale-125">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: null,      // Road is transparent
              islandColor: null,    // Island is transparent
              background: null,     // Background is transparent
              shoulderLines: 0x00fcb8,
              brokenLines: 0x00fcb8,
              leftCars: [0x00fcb8, 0x00d0a1, 0x00a987],
              rightCars: [0x00fcb8, 0x00d0a1, 0x00a987],
              sticks: 0x00fcb8,
            }
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
        <h1 className="text-5xl font-bold">Welcome to Hero Section</h1>
      </div>
    </div>
  );
};

export default HeroSection;
