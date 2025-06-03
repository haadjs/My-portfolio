import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaPhone,
  FaHeart,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#0F0F1C]/95 via-[#14142B]/95 to-[#1C1C3B]/95 text-white py-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Footer Logo / Name */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-4xl font-extrabold transition duration-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
                Sheikhhaad
              </span>
              <span className="text-white/80">_</span>
            </h2>
            <p className="text-gray-300 mt-2 font-bold font-serif">
              MERN Stack Developer
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {[
              { to: "/", icon: <FaHome />, label: "Home" },
              { to: "about", icon: <FaUserAlt />, label: "About" },
              { to: "project", icon: <FaProjectDiagram />, label: "Project" },
              { to: "contact", icon: <FaPhone />, label: "Contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="flex items-center gap-2 text-gray-300 text-lg font-medium transition hover:text-purple-400 transform hover:translate-y-[-2px]"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/sheikhhaad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 text-2xl transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 text-2xl transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-white/5 pt-6">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <FaHeart className="text-pink-500 animate-pulse" /> by
            Haad Sheikh &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
