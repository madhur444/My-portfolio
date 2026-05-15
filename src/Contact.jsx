import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-900 px-6 sm:px-10 lg:px-12 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-black text-orange-500 text-center mb-2">
        LET'S CONNECT
      </h2>

      <p className="text-gray-500 text-center mb-10 text-sm sm:text-base">
        Open to Work full-time opportunities.
      </p>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Email */}
        <a
          href="mailto:katariamdhur5@gmail.com"
          className="border border-orange-500 rounded-2xl p-6 bg-gray-950 flex flex-col items-center justify-center gap-4 hover:bg-orange-500 transition-all duration-300 group"
        >
          <FaEnvelope className="text-4xl sm:text-5xl text-orange-500 group-hover:text-white transition-colors duration-300" />

          <p className="text-white text-sm sm:text-base font-bold">
            Email
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/madhur444"
          target="_blank"
          rel="noreferrer"
          className="border border-orange-500 rounded-2xl p-6 bg-gray-950 flex flex-col items-center justify-center gap-4 hover:bg-orange-500 transition-all duration-300 group"
        >
          <SiGithub className="text-4xl sm:text-5xl text-orange-500 group-hover:text-white transition-colors duration-300" />

          <p className="text-white text-sm sm:text-base font-bold">
            GitHub
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/madhur-kataria-03162a389/"
          target="_blank"
          rel="noreferrer"
          className="border border-orange-500 rounded-2xl p-6 bg-gray-950 flex flex-col items-center justify-center gap-4 hover:bg-orange-500 transition-all duration-300 group"
        >
          <FaLinkedin className="text-4xl sm:text-5xl text-orange-500 group-hover:text-white transition-colors duration-300" />

          <p className="text-white text-sm sm:text-base font-bold">
            LinkedIn
          </p>
        </a>
      </div>

      {/* Footer */}
      <p className="text-center text-gray-600 mt-16 text-xs sm:text-sm">
        Built with React & Tailwind · Madhur Kataria © 2026
      </p>
    </div>
  );
};

export default Contact;