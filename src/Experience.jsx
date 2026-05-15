import React from "react";

const exps = [
  {
    role: "JUNIOR Developer",
    company: "PME Global",
    duration: "Aug 2025 - Oct 2025",
    type: "Internship",
    desc: "Worked on Front end tasks, frontend improvements and debugging.",
    link: "https://pmeglobal.com.au/",
  },
  {
    role: "WEB Developer",
    company: "OPA RENTAL",
    duration: "01/01/2025 - 30/04/2026",
    type: "Experience",
    desc: "Worked on web development tasks, improved interfaces and debugging.",
    link: "https://www.oparealestate.com/",
  },
];

const Experience = () => {
  return (
    <div className="bg-gray-950 px-6 sm:px-10 lg:px-12 py-16">
      
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white">
          EXPERIENCE
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="mt-10 space-y-6">
        {exps.map((exp) => (
          <div
            key={exp.role}
            className="max-w-4xl mx-auto border border-transparent hover:border-orange-500 rounded-2xl p-5 sm:p-6 text-left bg-gray-900 text-white transition-all duration-300"
          >
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              
              <p className="text-xl sm:text-2xl font-bold text-orange-500">
                {exp.role}
              </p>

              <h2 className="text-xs sm:text-sm text-orange-500 border border-orange-400 rounded-full px-3 py-1 inline-block w-fit">
                {exp.type}
              </h2>
            </div>

            {/* Company */}
            <a
              href={exp.link}
              target="_blank"
              rel="noreferrer"
              className="block mt-3 text-lg sm:text-2xl text-white underline break-words"
            >
              {exp.company}
            </a>
            <p className="text-gray-400 text-sm sm:text-lg mt-2">
              {exp.duration}
            </p>

            <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;