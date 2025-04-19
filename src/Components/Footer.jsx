import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0F0F1C] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo / Name */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-4xl font-extrabold text-purple-600 transition duration-300 hover:text-purple-500">
              Haad <span className="hover:text-purple-500 transition">Sheikh</span>
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
                className="flex items-center gap-2 text-purple-400 text-lg font-medium transition hover:text-purple-800"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
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
