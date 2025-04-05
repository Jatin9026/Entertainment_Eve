<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9

const Past_Performers = () => {
  const teamMembers = [
    {
      name: "Abishek singh",
      role: "IAS officer & Actor",
      image: "https://e-cell.in/assets/abhishek_singh-dHHqkBwz.jpeg",
<<<<<<< HEAD
      instrument: "bass",
=======
      instrument: "bass"
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
    },
    {
      name: "Sachin Saxsena",
      role: "Marketing Head & Founding Team @ Innovaccer",
      image: "https://e-cell.in/assets/sachin-eUMV4rm1.jpeg",
<<<<<<< HEAD
      instrument: "acoustic",
=======
      instrument: "acoustic"
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
    },
    {
      name: "Himanshi Singh",
      role: "Owner Emporio Marketing Pvt. Ltd.",
      image: "https://e-cell.in/assets/himanshi_singh-C16Pdx2w.jpeg",
<<<<<<< HEAD
      instrument: "acoustic",
=======
      instrument: "acoustic"
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
    },
    {
      name: "Aditi Ohri",
      role: "TedX Speaker & Youtuber",
      image: "https://e-cell.in/assets/aditi-4W-jwL15.jpg",
<<<<<<< HEAD
      instrument: "producer",
    },
  ];

  return (
    <div className="bg-[#001711] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent font-medium uppercase tracking-wider mb-2">
            PAST SPEAKERS
          </p>
=======
      instrument: "producer"
    }
  ];

  return (
    <div className=" min-h-screen text-white py-16 px-4 bg-[#001711]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent font-medium uppercase tracking-wider mb-2">PAST SPEAKERS</p>
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            MEET THE SPEAKERS THAT MAKES
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
<<<<<<< HEAD
            EVENT{" "}
            <span className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent ">
              UNSTOPPABLE
            </span>
          </h2>
        </div>

        {/* Past speakers carts */}
=======
            EVENT <span className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent ">UNSTOPPABLE</span>
          </h2>
        </div>

        {/* Team Members Grid */}
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-lg mb-4">
<<<<<<< HEAD
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover aspect-[3/4] transform transition duration-200 ease-in-out hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent">
                {member.name}
              </h3>
=======
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>

        {/* YouTube Channel Button */}
        {/* <div className="mt-20 flex justify-center">
          <button className=" hover:bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#46f6df]text-white font-bold py-3 px-8 rounded-full flex items-center space-x-2 transform transition-transform hover:scale-105">
            <span>OUR YOUTUBE CHANNEL</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Past_Performers;
=======
export default Past_Performers;
>>>>>>> 755633a4dc16ae735c111c4f5b33780f9ad814e9
