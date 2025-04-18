import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import webp from "../assets/original-268a6cf515d75b2bdba602dbb0426dd4.webp"; // Profile image
import png from "../assets/image.png"; // Self image

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-800 via-green-900 to-black text-white">
      {/* Hero Section */}
      <div className="min-h-screen px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between">
        <div
          className="max-w-2xl space-y-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="flex justify-center md:justify-start items-center gap-4">
            <h3 className="text-3xl font-bold text-amber-400">Hello World</h3>
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
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-amber-400 hover:scale-105 transition-transform duration-300">
            <img
              src={webp}
              alt="Profile"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-amber-400 via-green-400 to-emerald-500 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-6">
            LET ME INTRODUCE MYSELF
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            I’ve been into programming since childhood, but turned it into a
            career in 2024.
          </p>
          <p className="text-lg text-emerald-300 mb-4">
            I chose MERN stack for its power and love working with frameworks
            and libraries.
          </p>
          <p className="text-lg text-gray-400">
            Skilled in HTML, CSS, JavaScript, React.js, and React Native for web
            and mobile apps.
          </p>
        </div>

        <div className="flex justify-center mt-10" data-aos="zoom-in">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-amber-200">
            <img
              src={png}
              alt="Self"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-amber-400 via-green-400 to-emerald-500 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
            Got a question or just want to chat? Find me below!
          </h1>
          <div className="flex justify-center gap-8 mt-6 text-3xl">
            <a
              href="https://www.instagram.com/haad._glimpse._/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 hover:scale-110 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555704857977"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 hover:scale-110 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/haad-sheikh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
