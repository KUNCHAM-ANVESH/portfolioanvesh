import React from "react";

const projects = [
  {
    title: "HSBC Project (Virtusa)",
    description:
      "Working as a Web Developer on responsive and scalable applications. Focused on building dynamic UIs using React, Material UI, Tailwind CSS, and ensuring cross-device compatibility. Writing unit/component tests with Jest and collaborating in agile ceremonies.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Material UI", "Jest","Enzyme", "Agile", "Git" ,"CI/CD"],
  },
  {
    title: "Rent Hive - PG Rental Management System (Virtusa Training)",
    description:
      "Full-stack PG rental management system with room booking, payment integration, and property management. Includes role-based access control and secure login/registration.",
    skills: ["React", "Spring Boot", "Java", "MySQL", "Hibernate"],
  },
  {
    title: "Event Management Portal - (Virtusa-Internship)",
    description:
      "Designed and developed an event management system for registration, ticketing, and payments. Built using React and Spring Boot with REST APIs.",
    skills: ["React", "Spring Boot", "Java", "MySQL"],
  },
  {
    title: "Library Management System",
    description:
      "Console-based Java application to manage books, users, and transactions. Includes book search, borrowing, and return functionalities with OOP concepts.",
    skills: ["Java", "OOP", "Collections", "Maven"],
  },
];


const Projects = () => {
  return (
    <div className="bg-black py-12">
      <h1 className="text-white text-5xl font-bold text-center mb-10">
        My Projects
      </h1>
      <div className="container mx-auto px-6 grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#DAC5A7] shadow-lg rounded-2xl p-6 border-l-8 border-r-8 border-black"
          >
            <h2 className="text-2xl font-bold text-black mb-3">
              {project.title}
            </h2>
            <p className="text-gray-800 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
