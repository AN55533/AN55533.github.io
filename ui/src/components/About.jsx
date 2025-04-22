import React from "react";
import profile from "../assets/images/profile6.png";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-purple-700 p-10">
      <section className="bg-gradient-to-r from-gray-800 to-black py-16 mx-28 mb-28 rounded-md drop-shadow-2xl z-40 border-2 border-white">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          ABOUT ME
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
          {/* Profile Image */}
          <div className="w-3/4 md:w-1/2 flex justify-center">
            <img
              src={profile}
              alt="profile"
              className="w-[-10px]    h-[300px] rounded-lg drop-shadow-2xl mb-30"
            />
          </div>

          {/* Description & Contact Info */}
          <div className="w-full md:w-1/2 text-white space-y-6">
            <p className="text-lg leading-relaxed mb-24">
              Anju JV is a passionate web developer with a flair for building
              responsive, user-friendly websites and applications. With solid
              skills in HTML, CSS, JavaScript, and the MERN stack, I focus on
              developing engaging digital interfaces that deliver strong
              performance and accessibility. My commitment to continuous
              learning and attention to detail allows me to adapt quickly and
              contribute effectively in collaborative environments.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-300">
              <div className="flex items-center gap-4">
                <FaPhoneAlt size={20} />
                <a href="tel:+917356557425" className="hover:underline">
                  +91 73565 57425
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope size={20} />
                <a
                  href="mailto:anjujv.33@gmail.com"
                  className="hover:underline"
                >
                  anjujv.33@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
