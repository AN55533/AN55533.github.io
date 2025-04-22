import React from "react";

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <div>
      <nav className="bg-white py-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-fuchsia-500 font-bold text-xl">ANJU JV</div>

          {/* Navigation Links */}
          <div className="space-x-8 text-gray-600 font-semibold text-md">
            <button
              onClick={() => scrollToSection(refs.aboutRef)}
              className="hover:text-pink-500 transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection(refs.educationRef)}
              className="hover:text-pink-500 transition-colors"
            >
              EDUCATION
            </button>
            <button
              onClick={() => scrollToSection(refs.skillsRef)}
              className="hover:text-pink-500 transition-colors"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection(refs.projectsRef)}
              className="hover:text-pink-500 transition-colors"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection(refs.profileRef)}
              className="hover:text-pink-500 transition-colors"
            >
              PROFILE
            </button>
            <button
              onClick={() => scrollToSection(refs.contactRef)}
              className="hover:text-pink-500 transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
