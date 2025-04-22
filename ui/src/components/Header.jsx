import React from "react";
import cv from "../assets/cv/anjujv_resume.pdf";

const Header = () => {
  return (
    <header className="text-center py-16 bg-purple-700 text-white">
      <h1 className="text-6xl font-bold p-4">
        HI <span className="text-fuchsia-500">,</span> I AM
      </h1>
      <h1 className="text-6xl font-bold p-4">ANJU JV</h1>
      <p className="text-2xl mt-4">Software Developer</p>

      <a href={cv} download="anjujv_resume.pdf" className="inline-block mt-6">
        <button className="px-6 py-2 bg-fuchsia-500 rounded-md text-white hover:bg-fuchsia-600 transition duration-300">
          Download Resume
        </button>
      </a>
    </header>
  );
};

export default Header;
