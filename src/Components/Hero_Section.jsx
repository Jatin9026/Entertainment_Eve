import React, { useRef, useEffect } from "react";
import Hyperspeed from "./React_bits/Hyperspeed/Hyperspeed";
import { BackgroundGradient } from "./ui/Background_Gradient";
import "../styles/fonts.css";
import "../styles/buttons.css"; // Import your CSS file for custom styles
import * as motion from "motion/react-client";
import GradientText from "./React_bits/GradientText/GradientText";

const OverlappingGradientCircles = () => {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-end mr-10 space-y-[-20px]">
      {/* Back Circle (lower z-index, hover brings it up) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.025,
          // scale: { type: "spring", duration: 0.4 },
        }}
        className="rounded-full relative mr-20 z-10 hover:z-30 transition-all duration-300 ease-in-out"
      >
        <BackgroundGradient className="rounded-full w-100 h-100 p-1">
          <div
            className="w-full h-full rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAvU-FHuhHUcwwqXcg4wRvA4GV_XkIvI9g&s')",
            }}
          ></div>
        </BackgroundGradient>
      </motion.div>

      {/* Front Circle (higher z-index) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          // scale: { type: "spring", duration: 0.4 },
        }}
        className="rounded-full absolute mt-16 z-20 transition-all duration-300 ease-in-out"
      >
        <BackgroundGradient className="rounded-full w-100 h-100 p-1">
          <div
            className="w-full h-full rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://in.bmscdn.com/events/moviecard/ET00429769.jpg')",
            }}
          ></div>
        </BackgroundGradient>
      </motion.div>
    </div>
  );
};

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
          <div className="absolute inset-0 bg-[#010f0b] z-10"></div>
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
            <h3 className="text-4xl mb-2 font-mono">E-Cell Presents</h3>
            <div className="relative">
              <GradientText
                colors={["#00FCB8", "#00c2a8", "#099499", "#00FCB8"]}
                animationSpeed={3}
                showBorder={false}
                className="text-7xl md:text-8xl custom-font mb-4"
              >
                Entertainment Eve
              </GradientText>
            </div>
            <h2 className="text-6xl md:text-7xl font-mono mb-8 text-white">
              Enjoy the Evening!
            </h2>
            <p className="text-xl mb-12">
            Get ready for a night of non-stop fun, laughter, and unforgettable performances! <br></br>
            Join us for an electrifying entertainment extravaganza that will leave you wanting more.
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <button className="bg-transparent text-white-500 font-bold py-3 px-8 rounded-full btn-default">
                Past Performers
              </button>
              <button className="bg-transparent text-white-500 font-bold py-3 px-8 rounded-full btn-default">
                Tickets
              </button>
            </div>
          </div>

          {/* Overlapping Circles */}
          <OverlappingGradientCircles />

          {/*<div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-end space-y-[-20px] mr-10">
            {/* Back Circle: Initially lower z-index, but on hover increases *
            <div className="w-100 h-100 bg-[#00fcb8] rounded-full border-white relative mr-20 z-10 hover:z-30 transition-all duration-300 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAvU-FHuhHUcwwqXcg4wRvA4GV_XkIvI9g&s)] bg-cover bg-center"></div>
            {/* Front Circle *
            <div className="w-100 h-100 bg-[#00fcb8] rounded-full border-white absolute mt-15 z-20 transition-all duration-300 bg-[url(https://in.bmscdn.com/events/moviecard/ET00429769.jpg)] bg-cover bg-center"></div>
          </div> */}


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
