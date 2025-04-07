import React from "react";
import "../styles/fonts.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Past_Performers = () => {
  const teamMembers = [
    {
      name: "Abishek Singh",
      role: "IAS officer & Actor",
      image: "https://e-cell.in/assets/abhishek_singh-dHHqkBwz.jpeg",
    },
    {
      name: "Sachin Saxsena",
      role: "Marketing Head @ Innovaccer",
      image: "https://e-cell.in/assets/sachin-eUMV4rm1.jpeg",
    },
    {
      name: "Himanshi Singh",
      role: "Owner Emporio Marketing Pvt. Ltd.",
      image: "https://e-cell.in/assets/himanshi_singh-C16Pdx2w.jpeg",
    },
    {
      name: "Aditi Ohri",
      role: "TedX Speaker & YouTuber",
      image: "https://e-cell.in/assets/aditi-4W-jwL15.jpg",
    },
  ];

  return (
    <div className=" min-h-screen text-white py-16 px-4 bg-[#001711]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent font-medium uppercase tracking-wider mb-2">
            PAST SPEAKERS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            MEET THE SPEAKERS THAT MAKES
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            EVENT{ " "}
            <span className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent custom-font">
              UNSTOPPABLE
            </span>
          </h2>
        </div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full overflow-hidden rounded-lg mb-4 group">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover aspect-[3/4] transform transition duration-300 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-3  bg-[#001711] opacity-0 flex flex-col justify-center rounded-lg items-center space-y-4  scale-0 group-hover:opacity-80 group-hover:scale-100 transition-all duration-400 ease-in-out">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 "
                    >
                      <i className=""><FaInstagramSquare/></i>
                    </a>
                    <a
                      href="#"
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 transition "
                    >
                      <i><FaFacebook/></i>
                    </a>
                    <a
                      href="#"
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 transition"
                    >
                      <i className=""><FaLinkedin/></i>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Past_Performers;
