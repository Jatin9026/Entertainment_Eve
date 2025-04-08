import React from 'react';
import "../styles/buttons.css";
import StarBorder from './React_bits/StarBorder/StarBorder';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import FeaturedProducts from './components/FeaturedProducts';
// import AboutSection from './components/AboutSection';
// import BestSellers from './components/BestSellers';
// import Testimonials from './components/Testimonials';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';


const TicketSection = () => {
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
            <button className="btn-default font-bold py-3 px-6 rounded-full uppercase">
              About More
            </button>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="mb-6">
              Mastering financial management is key to your business's success. 
              Follow these step-by-step processes to ensure your finances are 
              organized, efficient, and aligned.
            </p>
            <p>
              Mastering financial management is key to your business's success. 
              Follow these step-by-step processes to ensure your finances are 
              organized, efficient, and aligned.
            </p>
          </div>
        </div>
      </div>
      
      {/* Image Section
      <div className="max-w-6xl mx-auto my-12">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="Ticket.png" 
            alt="Band performing on stage" 
            className="w-full object-cover h-96"
          />
        </div>
      </div> */}

      {/* Glowing Image Section with StarBorder */}
      <div className="max-w-6xl mx-auto my-12">
        <StarBorder as="div" color="#ffffff" speed="5s" className="w-full">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="Ticket.png" 
              alt="Band performing on stage" 
              className="w-full object-cover h-96"
            />
          </div>
        </StarBorder>
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