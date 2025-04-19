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
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
              Haad
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                {" "}
                Sheikh
              </span>
            </h2>
            <p className="text-gray-400 mt-2 font-bold font-serif">
              MERN Stack Developer
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {[
              { to: "/", icon: <FaHome />, label: "Home" },
              { to: "about", icon: <FaUserAlt />, label: "About" },
              { to: "project", icon: <FaProjectDiagram />, label: "Project" },
              { to: "contact", icon: <FaPhone />, label: "Contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="relative text-lg transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2 inline-block text-emerald-400">
                  {item.icon}
                </span>
                <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                  {item.label}
                </span>
              </Link>
            ))}
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
