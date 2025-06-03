import React from "react";

const Button = ({
  title,
  icon: Icon,
  link,
  type = "button", // Default to 'button'
  className = "", // Accept custom classes
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-sm group relative overflow-hidden ${className}`}
    >
      {/* Animated background glow effect from Figma */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {Icon && <Icon className="mr-1.5 group-hover:animate-pulse" />}
        {title}
      </span>

      {/* Animated border effect */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

export default Button;
