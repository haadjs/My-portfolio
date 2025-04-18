import React from "react";

const Card = ({ image, title, description, live, code }) => {
  return (
    <div
      className="card w-80 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:scale-105 transition-transform duration-300"
      data-aos="zoom-in"
    >
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-300">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="card-actions justify-between mt-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            See Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
