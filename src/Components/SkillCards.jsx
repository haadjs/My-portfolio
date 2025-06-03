import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const SkillCards = () => {
  return (
    <div className="bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] py-20 text-white relative overflow-hidden">
      {/* Background elements from Figma design */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJsLTIgMnYtNGw0LTQgMiAyIDItMi0yLTItMiAyLTQtNCAyLTItMi0yaC00bDIgMi0yIDItMi0ydjRsMiAyIDQgNC00IDQgMiAyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
            LOOK WHAT I HAVE LEARNED
          </span>
        </h1>

        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1E1E3F] to-[#2A2A5A] p-5 rounded-xl flex flex-col items-center justify-center gap-3 hover:from-[#2A2A5A] hover:to-[#3A3A7A] transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 border border-purple-500/10 hover:border-purple-500/30 group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Decorative dot */}
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative element from Figma */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <p className="text-gray-400 italic text-sm max-w-2xl mx-auto">
            "Continuously expanding my skill set to create more innovative and efficient solutions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
