import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const MySkills = () => {
  const skills = [
    { name: "React", icon: "⚛️", level: 5 },
    { name: "JavaScript", icon: "🟨", level: 5 },
    { name: "HTML/CSS", icon: "🌐", level: 4 },
    { name: "Java", icon: "☕", level: 5 },
    { name: "Spring Boot", icon: "🌱", level: 4 },
    { name: "MySQL", icon: "🗄️", level: 4 },
    { name: "Microservices", icon: "🔗", level: 4 },
    { name: "AWS", icon: "☁️", level: 3 },
    { name: "Git", icon: "🔧", level: 4 },
    { name: "Jest/Enzyme", icon: "🧪", level: 5 },
  ];

  return (
    <div className="bg-black py-12 px-6">
      {/* Heading */}
      <h1 className="text-white font-bold text-5xl text-center mb-10">
        My Skills
      </h1>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-20 mt-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-black text-white pt-3 pb-3 rounded-xl shadow-lg border-l-4 border-r-4 border-[#DAC5A7] flex flex-col items-center"
          >
            {/* Icon */}
            <span className="text-5xl mb-3">{skill.icon}</span>
            {/* Skill Name */}
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            {/* Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < skill.level ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-gray-500" />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
