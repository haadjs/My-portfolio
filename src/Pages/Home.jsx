import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
  FaCopy,
  FaPaperPlane,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import webp from "../assets/original-268a6cf515d75b2bdba602dbb0426dd4.webp";
import png from "../assets/image.png";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="bg-[#0F0F1C] text-white font-sans overflow-x-hidden relative">
      {/* Background Gradients - Inspired by Figma design */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-pink-500/30 rounded-full filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-blue-500/20 rounded-full filter blur-[120px] opacity-15"></div>

      {/* Hero Section */}
      <section className="min-h-screen px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto relative">
        {/* Text */}
        <div
          className="max-w-2xl space-y-8 text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="inline-block border border-purple-500/50 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm text-sm sm:text-base text-gray-300 font-semibold transform hover:scale-105 transition-all duration-300 hover:border-purple-500 hover:bg-white/10">
            <span className="mr-2">👋</span>
            Hi, I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl sm:text-3xl font-bold">
              Haad Sheikh
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 animate-gradient-x drop-shadow-lg">
              Judges a book by its Cover...
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            MERN Stack Developer & UI/UX Enthusiast dedicated to crafting
            meaningful, efficient, and visually engaging digital solutions.
          </p>

          <h2 className="text-2xl md:text-3xl font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
            </span>
          </h2>

          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:translate-y-[-2px] transition-all duration-300 flex items-center gap-2 group">
              Get In Touch
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-6 py-3 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transform hover:translate-y-[-2px] transition-all duration-300 group">
              Download CV
              <span className="ml-2 w-2 h-2 rounded-full bg-purple-500 inline-block group-hover:animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Image - Enhanced with Figma-inspired styling */}
        <div className="mt-12 md:mt-0 relative" data-aos="fade-left">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[100px] opacity-30"></div>
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg hover:scale-105 transition-all duration-500 hover:border-purple-400 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src={webp}
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Decorative elements from Figma */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full opacity-70 animate-pulse delay-500"></div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned based on Figma */}
      <section
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-[#14142B] to-[#1C1C3B] relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background elements from Figma */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full filter blur-[100px] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-lg">
            LET ME INTRODUCE MYSELF
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
            <div className="md:w-1/2 text-left space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a self-taught MERN Stack Developer with a passion for
                building full-stack web applications that merge function with
                form.
              </p>
              <p className="text-pink-300 leading-relaxed">
                Since 2024, I've focused on crafting real-world projects and
                solving complex problems through modern, scalable solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Tech Stack: HTML, CSS, JavaScript, React, Node.js, Express,
                MongoDB, Firebase, Tailwind CSS & more.
              </p>

              {/* Figma-inspired button */}
              <button className="mt-6 px-6 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg text-white font-medium hover:bg-white/10 hover:border-purple-500 transition-all duration-300 group flex items-center gap-2">
                More About Me
                <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-ping"></span>
              </button>
            </div>

            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-500/70 shadow-lg relative group">
                {/* Decorative ring from Figma */}
                <div className="absolute -inset-2 border-2 border-dashed border-purple-500/50 rounded-full animate-spin-slow opacity-70"></div>
                <img
                  src={png}
                  alt="Self"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section - Redesigned based on Figma */}
      <section className="py-24 px-6 md:px-16 bg-[#0F0F1C] relative overflow-hidden">
        {/* Background elements from Figma */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500/20 rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-pink-500/20 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-lg">
            Work Experience
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            MERN Stack Developer (Self-taught) | Jan 2023 – Present
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Todo App with Firebase",
              desc: "Login/signup system, CRUD, and real-time sync. Clean UI and responsive design.",
              color: "from-purple-500 to-pink-500",
            },
            {
              title: "Quiz App with Timer",
              desc: "Real-time countdown, scoring logic, result page, and answer locking after selection.",
              color: "from-blue-500 to-purple-500",
            },
            {
              title: "E-commerce Cosmetics UI",
              desc: "Modern UI for product display, filters, and responsive layout using Tailwind CSS.",
              color: "from-pink-500 to-red-500",
            },
            {
              title: "Developer Portfolio Website",
              desc: "Multi-section smooth layout with custom design and interactive animations.",
              color: "from-indigo-500 to-blue-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-pink-400/20 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Gradient accent from Figma */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>

              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2 group-hover:from-white group-hover:to-purple-200 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>

              {/* Learn More button inspired by Figma */}
              <div className="mt-4 text-right">
                <button className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 ml-auto">
                  LEARN MORE
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:animate-pulse"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Redesigned based on Figma */}
      <section className="py-24 bg-[#0F0F1C] text-center relative overflow-hidden p-6 md:p-12">
        {/* Background elements from Figma */}
        <div className="absolute top-[10%] right-[5%] w-[250px] h-[250px] bg-blue-500/20 rounded-full filter blur-[80px] opacity-20"></div>
        <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-purple-500/20 rounded-full filter blur-[80px] opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-8 h-8 border-2 border-purple-500/30 rounded-full animate-pulse hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-4 h-4 bg-pink-500/30 rounded-full animate-ping hidden md:block"></div>

        <h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-lg mb-4"
          data-aos="fade-up"
        >
          Open to Collaborations & Opportunities!
        </h2>
        <p
          className="text-gray-400 mb-8 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's connect and build something impactful together. I'm always open
          to discussing new projects and creative ideas.
        </p>

        <div
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-6">
            Get In Touch
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <FaEnvelope size={28} className="animate-bounce" />
              </div>
              <p className="text-gray-300 font-medium">
                Sheikhhaadjs@gmail.com
              </p>
              <button
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 relative group"
                onClick={() => {
                  navigator.clipboard.writeText("Sheikhhaadjs@gmail.com");

                  // Create and show custom notification instead of alert
                  const notification = document.createElement("div");
                  notification.className =
                    "fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up";
                  notification.innerHTML = "✓ Email copied to clipboard!";
                  document.body.appendChild(notification);

                  // Remove notification after 3 seconds
                  setTimeout(() => {
                    notification.classList.add("animate-fade-out");
                    setTimeout(() => {
                      document.body.removeChild(notification);
                    }, 300);
                  }, 3000);
                }}
              >
                COPY EMAIL
                <FaCopy
                  size={12}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Click to copy
                </span>
              </button>
            </div>

            <div className="h-16 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent hidden md:block"></div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-gray-300 font-medium">Follow Me</p>
              <div className="flex justify-center gap-8 text-3xl z-10 relative">
                <a
                  href="https://www.instagram.com/sheikhhaad_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:scale-125 hover:text-pink-300 transition-all duration-300 relative group"
                  aria-label="Instagram"
                  onClick={(e) => {
                    // Add pulse effect on click
                    const el = e.currentTarget;
                    el.classList.add("animate-ping");
                    setTimeout(() => el.classList.remove("animate-ping"), 300);
                  }}
                >
                  <FaInstagram className="transform group-hover:rotate-6" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Instagram
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0"></span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555704857977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:scale-125 hover:text-blue-300 transition-all duration-300 relative group"
                  aria-label="Facebook"
                  onClick={(e) => {
                    // Add pulse effect on click
                    const el = e.currentTarget;
                    el.classList.add("animate-ping");
                    setTimeout(() => el.classList.remove("animate-ping"), 300);
                  }}
                >
                  <FaFacebook className="transform group-hover:rotate-6" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Facebook
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/haad-sheikh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:scale-125 hover:text-blue-200 transition-all duration-300 relative group"
                  aria-label="LinkedIn"
                  onClick={(e) => {
                    // Add pulse effect on click
                    const el = e.currentTarget;
                    el.classList.add("animate-ping");
                    setTimeout(() => el.classList.remove("animate-ping"), 300);
                  }}
                >
                  <FaLinkedin className="transform group-hover:rotate-6" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-300 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    LinkedIn
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-300 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaPaperPlane className="text-sm" />
          Send Message
        </button>
      </section>
    </div>
  );
};

export default Home;
