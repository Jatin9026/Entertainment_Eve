import React, { useRef, useEffect } from "react";

const GitarLandingPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set video properties when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 text-white font-sans relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-purple-900/60 z-10"></div>
        <video
          ref={videoRef}
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://demo.awaikenthemes.com/assets/videos/gitar-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Bar------> */}
      <nav className="flex items-center justify-between px-6 py-4 bg-purple-950/80 relative z-20">
        <div className="flex items-center">
          <div>
            <svg
              className="w-6 h-6 text-purple-950"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 16a2 2 0 100-4 2 2 0 000 4zm0-14a2 2 0 100 4 2 2 0 000-4zm9 7a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-2xl font-bold">
            <img
              src="https://html.awaikenthemes.com/gitar/images/logo.svg"
              alt="Logo"
            />
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            HOME
          </a>
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            ABOUT US
          </a>
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            SERVICES
          </a>
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            BLOG
          </a>
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            PAGES
          </a>
          <a href="#" className="hover:text-[#00FCB8] font-medium">
            CONTACT US
          </a>
        </div>

        <button className="bg-transparent hover:bg-[#00dca0] text-white-500 font-bold py-2 px-6 rounded-full  hover:transition-all duration-400 ease-in-out">
          BOOK NOW
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center h-screen px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl mb-2">TONIGHT</h3>
          <div className="relative">
            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#00FCB8] via-[#40fdca] to-[#80fedd] text-transparent bg-clip-text">
              PROGRESSIVE
            </h1>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
            TRANCE NIGHT
          </h2>
          <p className="text-lg mb-12">
            Dive into the heart of live music with a band that blends energy,
            emotion, and artistry. From intimate vibes to festival anthems, we
            bring every moment to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-transparent hover:bg-00FCB8-900 text-white font-bold py-3 px-8 rounded-full border border-[#00FCB8]/30">
              ALL ALBUMS
            </button>
            <button className="bg-transparent hover:bg-[#00dca0] text-white-500 font-bold py-3 px-8 rounded-full">
              BOOK A TABLE
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8">
          <div className="border-2 border-[#00FCB8] rounded-full p-2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#00FCB8]"
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
  );
};

export default GitarLandingPage;
