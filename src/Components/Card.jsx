import React from "react";

const Card = ({ image, title, description, live, code }) => {
  return (
    <div
      className="card w-80 bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white shadow-xl hover:scale-105 transition-transform duration-300"
      data-aos="zoom-in"
    >
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body p-6 bg-opacity-80 backdrop-blur-md rounded-lg">
        <h2 className="card-title text-amber-300 text-2xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="card-actions justify-between mt-6">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-lg font-medium transition-colors duration-300 hover:text-green-500"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg font-medium transition-colors duration-300 hover:text-blue-500"
          >
            See Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
