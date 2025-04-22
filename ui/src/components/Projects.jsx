import React from "react";

const Projects = () => {
  const projects = [
    {
      pname: "Payroll Management App",
      institute: "Kerala Blockchain Academy",
      devtool: "MERN Stack",
      description:
        "Developed a full-stack web application for managing employee payroll, leave approvals ,find netsalary and generate the salary slip.",
    },
    {
      pname: "Task Management App",
      institute: "Kerala Blockchain Academy",
      devtool: "MERN Stack",
      description:
        "A web application for managing Task, designed with a React frontend, Tailwind CSS styling, and a Node.js backend.",
    },
    // Add more projects as required
  ];

  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4 text-center border-b py-10">
            PROJECTS
          </h2>
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold">{project.pname}</h3>
                <p className="text-gray-700">
                  {project.institute} | {project.devtool}
                </p>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
