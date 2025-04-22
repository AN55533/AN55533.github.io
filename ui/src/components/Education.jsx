import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-100  h-full px-48 py-24">
      <h2 className="text-center text-3xl font-bold mb-8 border-b p-10">
        EDUCATION
      </h2>

      <br />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Entry */}
        <div className="text-center md:text-left">
          <p className="font-semibold">2024 </p>
          <p className="text-lg font-bold mb-2 ">P G Diploma in Blockchain</p>

          <hr />

          <br />
          <p className="text-purple-500 mb-4">KERALA BLOCKCHAIN ACADEMY</p>
        </div>

       

        
        <div className="text-center md:text-left">
          <p className="font-semibold">2010 - 2014</p>
          <p className="text-lg font-bold mb-2">Bachelor of Computer Science</p>
          <hr />
          <br />
          <p className="text-purple-500 mb-4">
            ARUNACHALA COLLEGE OG ENGINEERING FOR WOMEN{" "}
          </p>
          <p className="text-purple-500 mb-4">ANNA UNIVERSITY </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
