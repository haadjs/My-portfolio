import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";
import Button from "../Components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="mt-6 min-h-screen bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-4 sm:px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Contact Info */}
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Feel free to reach out for collaborations, questions, or just to say
            hello. I'm always open to discussing new projects, creative ideas,
            or opportunities to work together.
          </p>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-purple-400" />
              <span className="text-base sm:text-lg">
                sheikhhaadjs@gmail.com
              </span>
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
          {isSubmitted ? (
            <div className="bg-white/10 p-8 rounded-xl flex flex-col items-center justify-center space-y-4 min-h-[350px]">
              <div className="text-green-400 bg-green-400/20 p-4 rounded-full">
                <FaCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Message Sent!
              </h3>
              <p className="text-gray-300 text-center">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 rounded-md transition duration-300 flex items-center gap-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 p-6 sm:p-8 rounded-xl space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none border ${
                    errors.name ? "border-red-500" : "border-transparent"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none border ${
                    errors.email ? "border-red-500" : "border-transparent"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none border ${
                    errors.message ? "border-red-500" : "border-transparent"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-medium flex items-center justify-center gap-2 transition duration-300 ${
                  isSubmitting
                    ? "bg-purple-700/50 text-white/70 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-16 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">
          Follow Me On
        </h2>
        <div className="flex justify-center gap-8 text-2xl">
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
            <FaFacebookF className="transform group-hover:rotate-6" />
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
            <FaLinkedinIn className="transform group-hover:rotate-6" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-300 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-300 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </a>
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
            href="https://github.com/sheikhhaad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:scale-125 hover:text-white transition-all duration-300 relative group"
            aria-label="GitHub"
            onClick={(e) => {
              // Add pulse effect on click
              const el = e.currentTarget;
              el.classList.add("animate-ping");
              setTimeout(() => el.classList.remove("animate-ping"), 300);
            }}
          >
            <FaGithub className="transform group-hover:rotate-6" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              GitHub
            </span>
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-300 group-hover:w-full group-hover:left-0 transition-all duration-300 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
