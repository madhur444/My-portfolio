import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-gray-900 px-12 py-16">
      <h2 className="text-4xl font-black text-orange-500 text-center mb-2">LET'S CONNECT</h2>
      <p className="text-gray-500 text-center mb-10">Open to  Work full-time opportunities.</p>
      
      <div className="max-w-2xl mx-auto grid grid-cols-3 gap-6">
        <a href="mailto:katariamdhur5@gmail.com"
          className="border border-orange-500 rounded-xl p-6 bg-gray-950 flex flex-col items-center gap-3 hover:bg-orange-500 transition-all group">
          <FaEnvelope className="text-4xl text-orange-500 group-hover:text-white"/>
          <p className="text-white text-sm font-bold">Email</p>
        </a>
        
        <a href="https://github.com/madhur444" target="_blank" rel="noreferrer"
          className="border border-orange-500 rounded-xl p-6 bg-gray-950 flex flex-col items-center gap-3 hover:bg-orange-500 transition-all group">
          <SiGithub className="text-4xl text-orange-500 group-hover:text-white"/>
          <p className="text-white text-sm font-bold">GitHub</p>
        </a>
        
        <a href="https://www.linkedin.com/in/madhur-kataria-03162a389/" target="_blank" rel="noreferrer"
          className="border border-orange-500 rounded-xl p-6 bg-gray-950 flex flex-col items-center gap-3 hover:bg-orange-500 transition-all group">
          <FaLinkedin className="text-4xl text-orange-500 group-hover:text-white"/>
          <p className="text-white text-sm font-bold">LinkedIn</p>
        </a>
      </div>

      <p className="text-center text-gray-600 mt-16 text-sm">Built with React & Tailwind · Madhur Kataria © 2026</p>
    </div>
  )
}

export default Contact