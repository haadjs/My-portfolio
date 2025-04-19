import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo / Name */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-lime-200">
              Haad<span className="text-black"> Sheikh</span>
            </h2>
            <p className="text-gray-400 mt-2">MERN Stack Developer</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Link
              to="/"
              className="text-lg text-emerald-500 hover:text-lime-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaHome className="mr-2 inline-block" /> Home
            </Link>
            <Link
              to="about"
              className="text-lg text-emerald-500 hover:text-lime-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaUserAlt className="mr-2 inline-block" /> About
            </Link>
            <Link
              to="project"
              className="text-lg text-emerald-500 hover:text-lime-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaProjectDiagram className="mr-2 inline-block" /> Project
            </Link>
            <Link
              to="contact"
              className="text-lg text-emerald-500 hover:text-lime-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaPhone className="mr-2 inline-block" /> Contact
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Haad Sheikh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
