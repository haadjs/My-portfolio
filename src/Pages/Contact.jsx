import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import Button from "../Components/Button";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <div className="mt-6 min-h-screen bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Feel free to reach out for collaborations, questions, or just to say hello.
            I'm always open to discussing new projects, creative ideas, or opportunities to work together.
          </p>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-purple-400" />
              <span className="text-base sm:text-lg">sheikhhaadjs@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-purple-400" />
              <span className="text-base sm:text-lg">+92 332 2859107</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-purple-400" />
              <span className="text-base sm:text-lg">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="flex-1 w-full shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] rounded-xl"
          data-aos="fade-left"
        >
          <form className="bg-white/10 p-6 sm:p-8 rounded-xl space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
            ></textarea>

            <Button
              title="Send Message"
              link=""
              icon={FaEnvelope}
              className="border-2 border-purple-600 text-pink-400 hover:bg-purple-600 hover:text-white transition duration-300"
            />
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">
          Follow Me On
        </h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61555704857977"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/haad-sheikh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/haad._glimpse._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/HaadSheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
