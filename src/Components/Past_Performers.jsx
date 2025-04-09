import React from "react";
import "../styles/fonts.css";
import * as motion from "motion/react-client";

import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Past_Performers = () => {
  const teamMembers = [
    {
      name: "Aaditya Kulshreshth",
      role: "Stand-Up Comedian & Storyteller",
      image: "Kullu.jpg",
      description:"Aaditya Kulshreshth, aka Kullu, is a rising star in Indian stand-up comedy.",
      insta:"http://instagram.com/kullubaaazi/?hl=en",
      facebook:"facebook.com/adibhai14/",
    },
    {
      name: "Shivam Ahuja",
      role: "Soulful Singer | Live Performer",
      image: "Shivam_Ahuja.png",
      description:"Shivam Ahuja is a soulful singer whose voice brings every lyric to life",
      insta:"https://www.instagram.com/shivamahuja_music/",
      facebook:"https://www.facebook.com/shivam.ahuja.397501/",
    },
    {
      name: "Yash Rathi",
      role: "Poet | Performer | Voice of the Youth",
      image: "Yash.jpg",
      description:"Yash Rathi is a poet and youth icon known for his charged performances and poetry",
      insta:"https://www.instagram.com/yashrathi.r/?hl=en",
      facebook:"https://www.facebook.com/yashrathicomedy/",
    },
    {
      name: "Samaakshi Jha",
      role: " Poet | Performer | Voice with Grace",
      image: "itti_chokhaaaa.jpg",
      description:"Samaakshi Jha is a poet and performer whose words reflect inner strength and emotions.",
      insta:"https://www.instagram.com/littiii_chokha/?hl=en",
      facebook:"https://www.facebook.com/p/Samaakshi-Jha-100011596448688/",
    },
  ];

  return (
    <div
      id="past-performers"
      className=" min-h-screen text-white py-16 px-4 bg-[#010f0b]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="bg-gradient-to-r from-[#00FCB8] via-[#00c2a8] to-[#4eedd8] bg-clip-text text-transparent font-medium uppercase tracking-wider mb-2">
            PAST Performers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            MEET THE PERFORMERS THAT MAKE THE
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            EVENT{" "}
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
                  className="w-full object-cover aspect-[3/4] transform transition duration-300 ease-in-out group-hover:scale-110 border-4 border-[#00FCB8] "
                />

                <div className="absolute inset-3  bg-[#001711] opacity-0 flex flex-col justify-center rounded-lg items-center space-y-4  scale-0 group-hover:opacity-80 group-hover:scale-100 transition-all duration-400 ease-in-out">
                  <div className="absolute bottom-1 left-3 right-3 text-white opacity-10 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    <p className="text-green-400 font-semibold">
                      {member.role}
                    </p>
                    <p className="text-sm">
                      {member.description}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={member.insta}
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 "
                    >
                      <i className="">
                        <FaInstagramSquare />
                      </i>
                    </a>
                    <a
                      href={member.facebook}
                      className="bg-[#00FCB8] text-black p-3 rounded-full hover:scale-130 transition "
                    >
                      <i>
                        <FaFacebook />
                      </i>
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
