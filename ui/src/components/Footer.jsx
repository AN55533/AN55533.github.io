import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray-800 items-center justify-center py-20">
      {/* Contact Information Section */}
      <h2 className="text-2xl font-semibold text-white mb-6 text-center ">
        Contact Me
      </h2>
      <div className="text-white flex  gap-24 p-10 justify-center">
        <div className="mb-2 flex gap-4">
          <strong>Phone:</strong>
          <a href="tel:+917356557425" aria-label="Phone">
            <FaPhoneAlt size={24} />
          </a>
        </div>
        <div className="mb-2 flex gap-4">
          <strong>Email:</strong>{" "}
          <a href="mailto:anjujv.33@gmail.com" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-500 mt-6">
          <a href="#" className="hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-900">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="#" className="hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-900">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        © Copyright Anju
      </div>
    </div>
  );
};

export default Footer;

// ----------------------------------------------------------------------------------------------------------------
