import React from 'react';

const AboutUsSection = () => {
  return (
    <div className="bg-purple-950 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* About Us Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div>
            <h5 className="text-pink-500 font-medium mb-4">ABOUT US</h5>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              THE SOUNDTRACK TO YOUR MOST <span className="text-pink-500">UNFORGETTABLE</span>
            </h1>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full mt-8">
              ABOUT MORE
            </button>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-lg">
                Mastering financial management is key to your business's success. Follow these step-by-step processes to ensure your finances are organized, efficient, and aligned.
              </p>
            </div>
            <div>
              <p className="text-lg">
                Mastering financial management is key to your business's success. Follow these step-by-step processes to ensure your finances are organized, efficient, and aligned.
              </p>
            </div>
          </div>
        </div>

        {/* Live Band Image */}
        <div className="relative w-full rounded-lg overflow-hidden my-12">
          <div className="absolute -top-10 left-0 right-0">
          </div>
          {/* Here we would normally use an image from your assets, but for this example using a placeholder */}
          <img 
            src="https://html.awaikenthemes.com/gitar/images/about-image.jpg" 
            alt="Band performing live on stage" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Use the specific band image before stats section */}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="flex flex-col items-start">
            <h2 className="text-pink-500 text-6xl font-bold">10</h2>
            <p className="text-lg mt-2">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-pink-500 text-6xl font-bold">18</h2>
            <p className="text-lg mt-2">Skilled Professionals</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-pink-500 text-6xl font-bold">32</h2>
            <p className="text-lg mt-2">Visited Conferences</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-pink-500 text-6xl font-bold">1K</h2>
            <p className="text-lg mt-2">Projects Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;