import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import {
  FaGithub,
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mx-auto navbar fixed top-0 z-50 px-6 backdrop-blur-md bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B]">
      <div className="flex-1 flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 drop-shadow-md animate-pulse transition-all duration-500"
        >
          Haad<span className="text-black">..</span>
        </Link>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white" // ✅ Changed here
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content flex justify-center mt-3 z-[1] p-4 shadow-xl bg-base-100 rounded-box w-52 transition-all transform duration-300 ease-in-out"
          >
            <li>
              <Link
                className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:text-purple-500 transition duration-200 hover:scale-105"
                to="/"
              >
                <FaHome className="mr-2 inline-block" /> Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:text-purple-500 transition duration-200 hover:scale-105"
                to="about"
              >
                <FaUserAlt className="mr-2 inline-block" /> About
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:text-purple-500 transition duration-200 hover:scale-105"
                to="project"
              >
                <FaProjectDiagram className="mr-2 inline-block" /> Project
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:text-purple-500 transition duration-200 hover:scale-105"
                to="contact"
              >
                <FaPhone className="mr-2 inline-block" /> Contact
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Button
                title="Github"
                icon={FaGithub}
                link="https://github.com/haadjs"
                className="text-base font-semibold border border-purple-800 text-purple-700 hover:text-purple-500 transition duration-200 hover:scale-105"
              />
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {["/", "about", "project", "contact"].map((route, i) => {
              let icon;
              switch (route) {
                case "/":
                  icon = <FaHome className="mr-1 inline-block" />;
                  break;
                case "about":
                  icon = <FaUserAlt className="mr-1 inline-block" />;
                  break;
                case "project":
                  icon = <FaProjectDiagram className="mr-1 inline-block" />;
                  break;
                case "contact":
                  icon = <FaPhone className="mr-1 inline-block" />;
                  break;
                default:
                  icon = null;
              }
              return (
                <li key={i}>
                  <Link
                    to={route}
                    className="relative text-[15px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 hover:text-purple-300 transition duration-200 hover:scale-105 
                               before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] 
                               before:w-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-400 
                               before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {icon}
                    {route === "/"
                      ? "Home"
                      : route.charAt(0).toUpperCase() + route.slice(1)}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button
                title="Github"
                link="https://github.com/haadjs"
                className="border text-sm text-purple-600 border-purple-700 hover:scale-105 transition duration-200"
                icon={FaGithub}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
