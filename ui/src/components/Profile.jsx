import React from "react";
import Gitlogo from "../assets/images/github-logo.png";
import Linkedinlogo from "../assets/images/linkedin-sign.png";

const Profile = () => {
  return (
    <div>
      <div className="bg-white p-28">
        <h2 className="text-center text-3xl font-bold mb-8 border-b p-12">
          PROFILES
        </h2>

        <div className="max-w-2xl p-12  mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          {/* First Row */}
          <div className="flex flex-col items-center ">
            <a href="https://github.com/AN55533">
              <img src={Gitlogo} alt="Github" className="w-10 h-10 mb-2" />
            </a>
            <p className="text-gray-600">Github</p>
          </div>

          {/* Vertical line between icons */}
          <div className="flex justify-center items-center">
            <div className="h-20 w-1 bg-gray-400"></div>{" "}
            {/* Height is now smaller to match icons */}
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/anju-jv-424712299/">
              <img
                src={Linkedinlogo}
                alt="LinkedIn"
                className="w-10 h-10 mb-2  "
              />
            </a>
            <p className="text-gray-600">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
