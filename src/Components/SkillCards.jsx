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
    <div className="bg-gradient-to-br from-[#0F0F1C] via-[#14142B] to-[#1C1C3B] py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-12">
          LOOK WHAT I HAVE LEARNED
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-amber-400 p-4 rounded-xl shadow-md transition-transform hover:scale-110 hover:border-emerald-400 duration-300 text-center"
              title={skill.name}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="text-base font-semibold text-gray-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
