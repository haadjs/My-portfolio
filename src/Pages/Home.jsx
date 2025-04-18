import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaHandPeace,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRegHandPaper } from "react-icons/fa";
import png from "../assets/image.png";
import webp from "../assets/original-268a6cf515d75b2bdba602dbb0426dd4.webp";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 bg-gradient-to-br from-green-800 via-green-900 to-black text-white transition-all duration-700 ease-in-out">
        <div
          className="max-w-xl space-y-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400">
              Hello World
            </h3>
            <div className="text-4xl text-amber-300 animate-pulse">👋🏻</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-300">
            I'M HAAD SHEIKH
          </h1>

          <h2 className="text-lg md:text-2xl text-amber-200 font-semibold">
            <Typewriter
              words={[
                "Deep Learning Enthusiast",
                "MERN Stack Developer",
                "Web & App Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Passionate about building modern and dynamic web and mobile apps
            using cutting-edge technologies.
          </p>
        </div>

        <div className="mt-10 md:mt-0" data-aos="fade-left">
          <img
            src={webp}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-amber-400 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-950 to-black text-white py-16 transition-all duration-700 ease-in-out">
        <div
          className="max-w-4xl mx-auto text-center px-6 md:px-0"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-6">
            LET ME INTRODUCE MYSELF
          </h1>
          <p className="text-lg text-gray-200 mb-4">
            I’ve been into programming since childhood, but turned it into a
            career in 2024.
          </p>
          <p className="text-lg text-emerald-300 mb-4">
            I chose MERN stack for its power and love working with frameworks
            and libraries.
          </p>
          <p className="text-lg text-gray-300">
            Skilled in HTML, CSS, JavaScript, React.js, and React Native for web
            and mobile apps.
          </p>
        </div>

        <div className="flex justify-center mt-8" data-aos="zoom-in">
          <img
            src={png}
            alt="Self"
            className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-amber-200"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-black via-green-900 to-green-800 text-white py-16 transition-all duration-700 ease-in-out">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
            Got a question or just want to chat? Find me below!
          </h1>
          <div className="flex justify-center space-x-8 mt-6 text-3xl">
            <a
              href="https://www.instagram.com/haad._glimpse._/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555704857977"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/haad-sheikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation (wiggle only) */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-wiggle {
          animation: wiggle 1s infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
