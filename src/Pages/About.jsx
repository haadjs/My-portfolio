import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { TbPlaneInflight } from "react-icons/tb";
import SkillCards from "../Components/SkillCards";
import image from "../assets/IMG_20250221_023934_725.webp";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <>
      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-6 md:px-16 py-16">
        <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Who I AM?
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Assalam o Alaikum, I&apos;m{" "}
              <span className="text-green-300 font-semibold">Haad Sheikh</span>{" "}
              from Karachi, Pakistan. I am a passionate{" "}
              <span className="text-amber-300 font-semibold">MERN Stack Developer</span>{" "}
              currently studying at{" "}
              <span className="text-emerald-300 font-semibold">SMIT</span>. I
              love building dynamic web and mobile applications using modern
              tools and technologies.
            </p>

            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
                Activities I Enjoy:
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <GiCricketBat className="text-2xl text-green-400" />
                  <span className="text-lg">Playing Cricket</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaBookOpen className="text-2xl text-blue-300" />
                  <span className="text-lg">Learning New Skills</span>
                </div>
                <div className="flex items-center gap-4">
                  <TbPlaneInflight className="text-2xl text-amber-300" />
                  <span className="text-lg">Traveling & Exploring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center" data-aos="zoom-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden  border-4 border-purple-500 shadow-[0_0_20px_5px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-300">
              <img
                src={image}
                alt="Haad Sheikh"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-amber-400 via-green-400 to-emerald-500 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <SkillCards />
    </>
  );
};

export default About;
