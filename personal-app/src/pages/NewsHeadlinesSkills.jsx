import React from 'react';
import './NewsHeadlinesSkills.css'; // Import external CSS

const NewsHeadlinesSkills = () => {
  const skills = [
    { name: "React", icon: "⚛️", level: "Expert" },
    { name: "JavaScript", icon: "🟨", level: "Advanced" },
    { name: "HTML/CSS", icon: "🌐", level: "Advanced" },
    { name: "Java", icon: "☕", level: "Expert" },
    { name: "SpringBoot", icon: "🌱", level: "Advanced" },
    { name: "MySQL", icon: "🗄️", level: "Advanced" },
    { name: "Microservices", icon: "🔗", level: "Advanced" },
    { name: "AWS", icon: "☁️", level: "Intermediate" },
    { name: "Git", icon: "🔧", level: "Advanced" },
    { name: "Jest/Enzyme", icon: "🧪", level: "Expert" }
  ];

  return (
    <div className="w-full bg from-red-600 to-red-800  py-4 overflow-hidden relative mt-15">
      {/* Scrolling Headlines Container */}
      <div className="relative bg-[#DAC5A7] bg-opacity-20 py-3">
        <div className="flex items-center">
          <div className="bg-black  text-white px-3 py-1 font-bold text-sm mr-4 ml-4 rounded">
            Skills
          </div>
          
          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll whitespace-nowrap">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center mr-12 flex-shrink-0">
                  <span className="text-2xl mr-2">{skill.icon}</span>
                  <span className="font-semibold text-black mr-2">{skill.name}</span>
                  <span className="text-black-300 mr-2">•</span>
                  <span className="text-black-200 text-sm mr-2">{skill.level}</span>
                  <span className="text-black-300 mr-4">•</span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <div key={`duplicate-${index}`} className="flex items-center mr-12 flex-shrink-0">
                  <span className="text-2xl mr-2">{skill.icon}</span>
                  <span className="font-semibold text-white mr-2">{skill.name}</span>
                  <span className="text-yellow-300 mr-2">•</span>
                  <span className="text-gray-200 text-sm mr-2">{skill.level}</span>
                  <span className="text-yellow-300 mr-4">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadlinesSkills;
