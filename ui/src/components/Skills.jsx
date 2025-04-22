import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "80%" },
    { name: "Javascript", level: "75%" },
    { name: "Node js", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "Express js", level: "70%" },
  ];

  return (
    <div>
      <section className="bg-white py-16 mx-48">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center border-b py-10">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-2 ">
            {skills.map((skill, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <div className="bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
