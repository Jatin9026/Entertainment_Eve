import React, { useRef, useEffect } from "react";
// import Hyperspeed from "./React_bits/Hyperspeed/Hyperspeed";
import { BackgroundGradient } from "./ui/Background_Gradient";
import "../styles/fonts.css";
import "../styles/buttons.css"; // Import your CSS file for custom styles
import * as motion from "motion/react-client";
import GradientText from "./React_bits/GradientText/GradientText";
const Hyperspeed = React.lazy(()=>import("./React_bits/Hyperspeed/Hyperspeed"))
import InfiniteScroll from "./React_bits/InfiniteScroll/InfiniteScroll";
import RollingGallery from "./React_bits/RollingGallery/RollingGallery"
// const OverlappingGradientCircles = () => {
//   return (
//     <div className="absolute right-8 to/2 transform -translate-y-1/2 flex flex-col items-end mr-10 space-y-[-20px]">
//       {/* Back Circle (lower z-index, hover brings it up) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
    //delay: 0.025,
 // scale: { type: "spring", duration: 0.4 },
//         }}
//         className="rounded-full relative mr-20 z-10 hover:z-30 transition-all duration-500 ease-in-out"
//       >
//         <BackgroundGradient className="rounded-full w-100 h-100">
//           <div
//             className="w-full h-full rounded-full bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAvU-FHuhHUcwwqXcg4wRvA4GV_XkIvI9g&s')",
//             }}
//           ></div>
//         </BackgroundGradient>
//       </motion.div>

//       {/* Front Circle (higher z-index) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//           // scale: { type: "spring", duration: 0.4 },
//         }}
//         className="rounded-full absolute mt-16 z-20 transition-all duration-300 ease-in-out"
//       >
//         <BackgroundGradient className="rounded-full w-100 h-100">
//           <div
//             className="w-full h-full rounded-full bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url('https://in.bmscdn.com/events/moviecard/ET00429769.jpg')",
//             }}
//           ></div>
//         </BackgroundGradient>
//       </motion.div>
//     </div>
//   );
// };

const ImageItems = [
  {
    content: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAvU-FHuhHUcwwqXcg4wRvA4GV_XkIvI9g&s"
        alt="COMING SOON"
        className="w-100 h-100 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 p-0.5 bg-cover bg-center
                  bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      />
      // <span className="text-6xl bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
      //   COMING SOON
      // </span>
    ),
  },
  {
    content: (
      <img
        src="https://in.bmscdn.com/events/moviecard/ET00429769.jpg"
        alt="COMING SOON"
        className="w-100 h-100 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 p-0.5 bg-cover bg-center
                  bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      />
    //   <span className="text-6xl bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
    //   COMING SOON
    // </span>
    ),
  },
  {
    content: (
      <img
        src="https://in.bmscdn.com/events/moviecard/ET00440583.jpg"
        alt="COMING SOON"
        className="w-100 h-100 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 p-0.5 bg-cover bg-center
                  bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      />
      // <span className="text-6xl bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
      //   COMING SOON
      // </span>
    ),
  },
  {
    content: (
      // <img
      //   src=""
      //   alt="COMING SOON"
      //   className="w-100 h-100 rounded-3xl object-cover transition-transform duration-300 ease-out hover:scale-105 p-0.5 bg-cover bg-center
      //             bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
      // />
      <span className="text-6xl bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
        COMING SOON
      </span>
    )
  },
];

const ImageScroller = (e) => {
  return (
    <div style={{ height: '500px', position: 'absolute' }} className="self-end hidden xl:block">
      <InfiniteScroll
        items={ImageItems}
        isTilted={false}
        tiltDirection='left'
        autoplay={true}
        autoplaySpeed={5}
        autoplayDirection="up"
        pauseOnHover={true}
        negativeMargin="-8em"
      />
    
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
      
      <div className="min-h-screen text-white font-sans relative bg-gradient-to-b from-black via-[#001a1a] to-black overflow-hidden">
        {/* Video Background */} 
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10"></div>
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
                fov: 160,
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

        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center h-screen px-4 relative z-10 mt-10 sm:mt-8">
          <div className="max-w-4xl px-2 sm:pl-16">
            <h3 className="text-3xl sm:text-4xl mb-2 font-mono">E-Cell Presents</h3>
            <div className="relative text-left">
              <GradientText
                colors={["#00FCB8", "#00c2a8", "#099499", "#00FCB8"]}
                animationSpeed={3}
                showBorder={false}
                className="text-5xl sm:7xl md:text-8xl lg:text-8xl custom-font mb-4"
              >
                ENTERTAINMENT EVE
              </GradientText>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-mono mb-8 text-white">
              Where Vibes Meet Velocity!!!
            </h2>
            <p className="text-lg sm:text-lg md:text-xl mb-8 text-white">
              Step into an evening crafted for pure delight —
              a perfect blend of rhythm, lights, and unforgettable moments.<br />
              From soulful tunes to feel-good energy, it's more than an event — it's an experience.
              Let the laughter flow, the music rise, and the memories take center stage.
              Because some nights are meant to be remembered
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4 sm:w-full">
              <a
                href="#past-performers"
                className="w-[220px] bg-transparent text-white font-bold py-3 px-8 rounded-full btn-default text-left"
              >
                Past Performers
              </a>
              <a
                href="#ticket"
                className="w-[130px] bg-transparent text-white font-bold py-3 px-8 rounded-full btn-default text-left"
              >
                Tickets
              </a>
            </div>
          </div>


          {/* Overlapping Circles */}
          {/* <OverlappingGradientCircles /> */}

          <ImageScroller />

          <RollingGallery 
            autoplay={true} 
            pauseOnHover={true}
            autoplayDuration={10}
            images={
              [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYAvU-FHuhHUcwwqXcg4wRvA4GV_XkIvI9g&s",
                "https://in.bmscdn.com/events/moviecard/ET00429769.jpg",
                "https://in.bmscdn.com/events/moviecard/ET00440583.jpg",
              ]
            }
          />


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
