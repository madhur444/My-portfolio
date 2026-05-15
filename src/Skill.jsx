import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaJs, FaNodeJs, FaFigma, FaGit } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Tailwind", icon: <RiTailwindCssFill /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Git", icon: <FaGit /> },
]

const Skill = () => {
  return (
    <div className="bg-gray-950 px-12 py-16">
      <div className="text-center mb-12">
        
        <h2 className="text-5xl font-black text-white">TECH STACK</h2>
      </div>

      <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name}
            className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-800 bg-gray-900 hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 cursor-pointer">
            <div className="text-5xl text-orange-500 group-hover:text-white transition-colors duration-300">
              {skill.icon}
            </div>
            <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill