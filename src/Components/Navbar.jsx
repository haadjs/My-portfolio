import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import {
  FaGithub,
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaPhone,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if a link is active
  const isActive = (path) => {
    // Special case for project/projects paths
    if (path === "/project" && location.pathname === "/projects") {
      return true;
    }
    if (path === "/projects" && location.pathname === "/project") {
      return true;
    }
    return (
      location.pathname === path || (location.pathname === "/" && path === "/")
    );
  };

  return (
    <div
      className={`mx-auto navbar fixed top-0 z-50 px-6 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg shadow-purple-900/10" : "py-4"
      } bg-gradient-to-br from-[#0F0F1C]/95 via-[#14142B]/95 to-[#1C1C3B]/95 border-b border-white/5`}
    >
      <div className="flex-1 flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 drop-shadow-md transition-all duration-500 relative group"
        >
          Haad<span className="text-white/80">..</span>
          {/* Decorative underline from Figma */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="dropdown dropdown-end lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden bg-white/5 hover:bg-white/10 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content flex justify-center mt-3 z-[1] p-6 shadow-xl bg-[#161630]/90 backdrop-blur-sm rounded-xl w-60 transition-all transform duration-300 ease-in-out border border-white/5 ${
              isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <li>
              <Link
                className={`text-base font-medium ${
                  isActive("/")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-semibold"
                    : "text-gray-300"
                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition duration-200 hover:scale-105 flex items-center`}
                to="/"
                onClick={toggleMenu}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    isActive("/") ? "bg-purple-500" : "bg-transparent"
                  }`}
                ></span>
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-medium ${
                  isActive("/about")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-semibold"
                    : "text-gray-300"
                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition duration-200 hover:scale-105 flex items-center`}
                to="about"
                onClick={toggleMenu}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    isActive("/about") ? "bg-purple-500" : "bg-transparent"
                  }`}
                ></span>
                <FaUserAlt className="mr-2" /> About
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-medium ${
                  isActive("/project") || isActive("/projects")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-semibold"
                    : "text-gray-300"
                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition duration-200 hover:scale-105 flex items-center`}
                to="project"
                onClick={toggleMenu}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    isActive("/project") || isActive("/projects")
                      ? "bg-purple-500"
                      : "bg-transparent"
                  }`}
                ></span>
                <FaProjectDiagram className="mr-2" /> Projects
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-medium ${
                  isActive("/contact")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-semibold"
                    : "text-gray-300"
                } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition duration-200 hover:scale-105 flex items-center`}
                to="contact"
                onClick={toggleMenu}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    isActive("/contact") ? "bg-purple-500" : "bg-transparent"
                  }`}
                ></span>
                <FaPhone className="mr-2" /> Contact
              </Link>
            </li>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-3"></div>

            <li className="flex justify-center items-center">
              <Button
                title="Github"
                icon={FaGithub}
                link="https://github.com/sheikhhaad"
                className="text-base font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 w-full flex justify-center"
              />
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {["/", "about", "project", "contact"].map((route, i) => {
              let icon;
              let displayText;
              switch (route) {
                case "/":
                  icon = <FaHome className="mr-1 inline-block" />;
                  displayText = "Home";
                  break;
                case "about":
                  icon = <FaUserAlt className="mr-1 inline-block" />;
                  displayText = "About";
                  break;
                case "project":
                  icon = <FaProjectDiagram className="mr-1 inline-block" />;
                  displayText = "Projects";
                  break;
                case "contact":
                  icon = <FaPhone className="mr-1 inline-block" />;
                  displayText = "Contact";
                  break;
                default:
                  icon = null;
                  displayText = route;
              }
              const path = route === "/" ? "/" : `/${route}`;
              return (
                <li key={i}>
                  <Link
                    to={route}
                    className={`relative text-[15px] font-medium ${
                      isActive(path)
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-semibold"
                        : "text-gray-300"
                    } hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition duration-300 hover:scale-105 
                               before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] 
                               before:w-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-400 
                               before:transition-all before:duration-300 hover:before:w-full ${
                                 isActive(path) ? "before:w-full" : ""
                               }`}
                  >
                    {icon}
                    {displayText}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button
                title="Github"
                link="https://github.com/sheikhhaad"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 text-sm font-medium flex items-center gap-2"
                icon={FaGithub}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative element from Figma */}
      <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-l from-purple-500 to-transparent hidden lg:block"></div>
    </div>
  );
};

export default Navbar;
