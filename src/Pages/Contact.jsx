import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <>
      {/* Contact Section */}
      <div className="min-h-screen bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-6 md:px-16 py-16">
        <div className="mt-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-6" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
              Get in Touch
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Feel free to reach out for collaborations, questions, or just to
              say hello. I'm always open to discussing new projects, creative
              ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-red-400" />
                <span className="text-lg">sheikhhaadjs@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-green-400" />
                <span className="text-lg">+92 332 2859107</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-blue-300" />
                <span className="text-lg">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1" data-aos="fade-left">
            <form className="bg-white/10 p-6 rounded-xl shadow-lg space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-400 text-black font-semibold py-2 rounded-md hover:bg-amber-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">
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
              href="github.com/haadjs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
