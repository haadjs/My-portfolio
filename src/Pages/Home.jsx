import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import webp from "../assets/original-268a6cf515d75b2bdba602dbb0426dd4.webp";
import png from "../assets/image.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="min-h-screen px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between relative">
        {/* Glowing Background Element */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-700 via-pink-500 to-blue-500 opacity-20 rounded-full blur-3xl z-0"></div>

        <div
          className="max-w-2xl space-y-6 text-center md:text-left z-10"
          data-aos="fade-right"
        >
          <div className="text-xl text-gray-300 border border-purple-500 w-90 mx-auto md:mx-0 text-center font-bold rounded-full py-2  bg-opacity-5 backdrop-blur">
            Hi 👋 I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 font-extrabold text-4xl">
              {"Haad Sheikh"}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mt-4">
            Judges a book by its Cover...
          </h1>

          <p className="text-gray-400 text-lg">
            MERN Stack Developer & UI/UX Enthusiast dedicated to crafting
            meaningful, efficient, and visually engaging digital solutions.
          </p>
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            <Typewriter
              words={[
                "Deep Learning Enthusiast",
                "MERN Stack Developer",
                "Web & App Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>

        <div className="mt-10 md:mt-0 z-10" data-aos="fade-left">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-[3px] border-purple-500 shadow-[0_0_20px_5px_rgba(168,85,247,0.4)] hover:scale-105 transition duration-300">
            <img
              src={webp}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-[#14142B] to-[#0F0F1C]"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            LET ME INTRODUCE MYSELF
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a self-taught MERN Stack Developer with a passion for building
            full-stack web applications that merge function with form.
          </p>
          <p className="text-pink-300 mb-4 leading-relaxed">
            Since 2024, I’ve focused on crafting real-world projects and solving
            complex problems through modern, scalable solutions.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB,
            Firebase, Tailwind CSS & more.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-[0_0_25px_#ec4899]">
            <img src={png} alt="Self" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="py-24 px-6 md:px-16 bg-gradient-to-br from-[#0F0F1C] via-[#1A1A2E] to-[#0F0F1C]">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Work Experience
          </h2>
          <p className="text-sm text-gray-400">
            MERN Stack Developer (Self-taught) | Jan 2023 – Present
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Todo App with Firebase",
              desc: "Login/signup system, CRUD, and real-time sync. Clean UI and responsive design.",
            },
            {
              title: "Quiz App with Timer",
              desc: "Real-time countdown, scoring logic, result page, and answer locking after selection.",
            },
            {
              title: "E-commerce Cosmetics UI",
              desc: "Modern UI for product display, filters, and responsive layout using Tailwind CSS.",
            },
            {
              title: "Developer Portfolio Website",
              desc: "Multi-section smooth layout with custom design and interactive animations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-5 border border-white border-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-pink-500/30 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-[#0F0F1C] text-center relative overflow-hidden">
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl z-0"></div>

        <h2
          className="text-4xl font-bold text-pink-400 mb-4"
          data-aos="fade-up"
        >
          Open to Collaborations & Opportunities!
        </h2>
        <p className="text-gray-400 mb-6" data-aos="fade-up">
          Let’s connect and build something impactful together.
        </p>
        <div
          className="flex justify-center gap-8 text-3xl z-10 relative"
          data-aos="zoom-in"
        >
          <a
            href="https://www.instagram.com/haad._glimpse._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 hover:text-pink-300 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555704857977"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:scale-110 hover:text-blue-300 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/haad-sheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:scale-110 hover:text-blue-200 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
