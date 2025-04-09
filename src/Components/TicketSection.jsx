import React, { useEffect, useState } from 'react';
import "../styles/buttons.css";

const TicketSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const targetDate = new Date("2025-05-03T00:00:00");

  // Calculate time left until the target date
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

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

      {/* Enhanced Image Section */}
      <div className="max-w-6xl mx-auto my-12">
        {/* Image Container */}
        <div 
          className="relative p-2 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow: isHovered 
              ? '0 0 25px 5px rgba(0, 200, 148, 0.8), 0 0 40px 8px rgba(0, 255, 191, 0.6)' 
              : '0 0 15px 2px rgba(0, 200,148 , .5)'
          }}
        >
          {/* Image */}
          <div className="relative z-10 rounded-lg overflow-hidden border-4 border-teal-500 m-2">
            <img 
              src="Ticket_coming soon.png" 
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
      </div>

      {/* Countdown Timer Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">{timeLeft.days}</span>
          <span className="text-xl">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">{timeLeft.hours}</span>
          <span className="text-xl">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">{timeLeft.minutes}</span>
          <span className="text-xl">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-bold text-teal-400">{timeLeft.seconds}</span>
          <span className="text-xl">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
