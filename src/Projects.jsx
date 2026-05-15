import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { CiLink } from "react-icons/ci";

const liveProjects = [
  {
    name: "PME Global",
    type: "INTERNSHIP",
    link: "https://pmeglobal.com.au",
  },
  {
    name: "OPA Rental",
    type: "Work Expereince", 
    link: "https://www.oparealestate.com",
  },
    {
    name: "Bilandis",
    type: "Client Project",
    status:"Completed",
    link: "https://bilandis.com",
  },
  {
    name: "The Engage Craft",
    type: "Client Project",
    status:"Completed",
    link: "https://www.theengagecraft.com",
  },
]

const devProjects = [
  {
    name: "Habit Tracker App",
    type: "Full Stack MERN",
    status: "In Progress",
    link: "https://github.com/madhur444/Habit-tracker-app",
  },
  {
    name: "Notes App",
    type: "Full Stack MERN",
    status: "Completed",
    link: "https://github.com/madhur444/notes-app",
  },

]


const Projects = () => {
  return (
    <div className="bg-gray-950 px-12 py-16">
      <h2 className="text-4xl font-black text-orange-500 text-center mb-2">SELECTED WORK</h2>
      <p className="text-gray-500 text-center mb-10">Production sites currently live on the web.</p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {liveProjects.map((p) => (
          <a href={p.link} target="_blank" rel="noreferrer" key={p.name}
            className="border border-orange-500 rounded-xl p-8 bg-gray-900 hover:bg-orange-500 transition-all group">
            <p className="text-gray-400 text-sm mb-2">{p.type}</p>
            <h3 className="text-white text-2xl font-black mb-4 group-hover:text-white">{p.name}</h3>
            <div className="flex items-center gap-2 text-orange-500 group-hover:text-white">
              <FaExternalLinkAlt/> <span className="text-sm">Visit Site</span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-black text-orange-500 text-center mb-2">DEV PROJECTS</h2>
      <p className="text-gray-500 text-center mb-8"> View GitHub For More!</p>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {devProjects.map((p) => (
          <a href={p.link} target="_blank" rel="noreferrer" key={p.name}
            className="border border-orange-500 rounded-xl p-8 bg-gray-900 hover:bg-orange-500 transition-all group">
            <p className="text-gray-400 text-sm mb-2">{p.type}</p>
            <h3 className="text-white text-2xl font-black mb-2">{p.name}</h3>
            <span className={`text-xs px-3 py-1 rounded-full border ${p.status === 'Completed' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500'}`}>
              {p.status}
            </span>
            <div className="flex items-center gap-2 text-orange-500 group-hover:text-white mt-4">
              <FaGithub /> <span className="text-sm underline">View On GitHub </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects