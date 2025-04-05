import React, { useRef, useEffect } from "react";
import Hyperspeed from "./React_bits/Hyperspeed/Hyperspeed";
import "../styles/fonts.css";


const LandingPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set video properties when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-[9999] pointer-events-none"></div>
      <div className="min-h-screen text-white font-sans relative overflow-hidden">
        {/* Video Background */} //
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#001711] z-10"></div>
          {/* <video
            ref={videoRef}
            className="absolute min-w-full min-h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src=""
              type="video/mp4"
            />
          </video> */}
          <div className="relative z-10 w-full h-full">
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => {},
                onSlowDown: () => {},
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 150,
                fovSpeedUp: 90,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.5,
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
                  roadColor: null,
                  islandColor: null,
                  background: null,
                  shoulderLines: 0x00fcb8,
                  brokenLines: 0x00fcb8,
                  leftCars: [0x00fcb8, 0x00d0a1, 0x00a987],
                  rightCars: [0x00fcb8, 0x00d0a1, 0x00a987],
                  sticks: 0x00fcb8,
                }
              }}
            />
          </div>
        </div>

        {/* Navigation Bar------> 
        <nav className="flex items-center justify-between px-6 py-4 bg-transparent relative z-20 border-b border-white-800">
          <div className="w-50 h-16 overflow-hidden">
            <span className="block w-full h-full transition-transform duration-300 scale-300">
              <img
                className=" w-full h-full object-contain"
                src="Images/image.png"
                alt="Logo"
              />
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              HOME
            </a>
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              Past Perfomers
            </a>
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              SERVICES
            </a>
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              Glimpses
            </a>
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              Tickets
            </a>
            <a href="#" className="hover:text-[#00FCB8] font-medium">
              CONTACT US
            </a>
          </div>
          <button className="text-white-500 font-bold py-2 px-6 hover:transition-all duration-400 ease-in-out hover:bg-[#00FCB8] rounded-full">
            BOOK NOW
          </button>
        </nav> */}
        
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center h-screen px-4 relative z-10">
          <div className="max-w-4xl pl-8 sm:pl-16">
            <h3 className="text-3xl mb-2">TONIGHT</h3>
            <div className="relative">
              <h1 className="text-7xl md:text-8xl custom-font font-bold mb-4 bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#099499] text-transparent bg-clip-text">
                Entertainment
                Eve
              </h1>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Aspire to Acquire
            </h2>
            <p className="text-lg mb-12">
              Dive into the heart of live music with a band that blends energy,
              emotion, and artistry. From intimate vibes to festival anthems, we
              bring every moment to life.
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <button className="bg-transparent hover:bg-[#00dca0] text-white-500 font-bold py-3 px-8 rounded-full">
                Past Performers
              </button>
              <button className="bg-transparent hover:bg-[#00dca0] text-white-500 font-bold py-3 px-8 rounded-full">
                Tickets
              </button>
            </div>
          </div>
          {/* Scroll down indicator */}
          <div className="absolute bottom-15 self-center">
            <div className="border-2 border-[#ffffff] rounded-full p-2 animate-bounce">
              <svg
                className="w-6 h-6 text-[#ffffff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
