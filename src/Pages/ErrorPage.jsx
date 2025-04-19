import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/404-error-with-portals-concept-illustration_114360-7870.avif'
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] text-white px-4">
      <img
        src={image}
        alt="404 Not Found"
        className="w-full max-w-md mb-8 rounded-lg shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg text-gray-300 text-center mb-8 max-w-lg">
        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-amber-500 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
