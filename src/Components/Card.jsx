import React, { useState } from "react";

const Card = ({ image, title, description, live, code }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card w-80 bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white shadow-xl hover:scale-105 transition-all duration-500 ease-in-out group relative overflow-hidden rounded-xl border border-purple-500/10 hover:border-purple-500/30"
      data-aos="zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Decorative elements from Figma design */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full filter blur-[50px] opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full filter blur-[50px] opacity-70 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Image container */}
      <figure className="h-48 overflow-hidden relative rounded-t-xl">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transform transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${
            isHovered
              ? "from-black/50 to-black/10"
              : "from-black/70 to-black/20"
          }`}
        ></div>

        {/* Overlay with view project text */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium border border-white/30 transform transition-transform duration-300 hover:scale-105">
            View Project
          </span>
        </div>
      </figure>

      {/* Card content */}
      <div className="card-body p-6 bg-opacity-90 backdrop-blur-lg relative z-10">
        <h2
          className={`card-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-2xl font-bold mb-3 transform transition-transform duration-300 ${
            isHovered ? "translate-x-2" : "translate-x-0"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-gray-300 text-sm transform transition-transform duration-300 delay-75 ${
            isHovered ? "translate-x-2" : "translate-x-0"
          }`}
        >
          {description}
        </p>

        {/* Action buttons */}
        <div
          className={`card-actions justify-between mt-6 transform transition-transform duration-300 delay-100 ${
            isHovered ? "translate-y-[-4px]" : "translate-y-0"
          }`}
        >
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group/btn"
            onClick={(e) => {
              // Create ripple effect
              const button = e.currentTarget;
              const circle = document.createElement("span");
              const diameter = Math.max(
                button.clientWidth,
                button.clientHeight
              );

              circle.style.width = circle.style.height = `${diameter}px`;
              circle.style.left = `${
                e.clientX - button.offsetLeft - diameter / 2
              }px`;
              circle.style.top = `${
                e.clientY - button.offsetTop - diameter / 2
              }px`;
              circle.classList.add(
                "absolute",
                "bg-white",
                "rounded-full",
                "opacity-30",
                "scale-0"
              );
              circle.style.transform = "scale(0)";
              circle.style.animation = "ripple 600ms linear";

              const ripple = button.getElementsByClassName("ripple")[0];
              if (ripple) {
                ripple.remove();
              }

              button.appendChild(circle);

              setTimeout(() => {
                circle.remove();
              }, 600);

              // Add a small bounce effect to the button
              button.classList.add("scale-95");
              setTimeout(() => {
                button.classList.remove("scale-95");
              }, 150);
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="relative z-10 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Live Demo
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple-500 rounded-lg text-purple-400 font-medium hover:bg-purple-500/10 hover:text-white hover:border-purple-400 transition-all duration-300 relative overflow-hidden group/btn"
            onClick={(e) => {
              // Create ripple effect
              const button = e.currentTarget;
              const circle = document.createElement("span");
              const diameter = Math.max(
                button.clientWidth,
                button.clientHeight
              );

              circle.style.width = circle.style.height = `${diameter}px`;
              circle.style.left = `${
                e.clientX - button.offsetLeft - diameter / 2
              }px`;
              circle.style.top = `${
                e.clientY - button.offsetTop - diameter / 2
              }px`;
              circle.classList.add(
                "absolute",
                "bg-purple-500",
                "rounded-full",
                "opacity-30",
                "scale-0"
              );
              circle.style.transform = "scale(0)";
              circle.style.animation = "ripple 600ms linear";

              const ripple = button.getElementsByClassName("ripple")[0];
              if (ripple) {
                ripple.remove();
              }

              button.appendChild(circle);

              setTimeout(() => {
                circle.remove();
              }, 600);

              // Add a small bounce effect to the button
              button.classList.add("scale-95");
              setTimeout(() => {
                button.classList.remove("scale-95");
              }, 150);
            }}
          >
            <span className="relative z-10 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              See Code
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-full bg-purple-500/20 group-hover/btn:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
