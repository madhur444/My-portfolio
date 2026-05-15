import React from "react";
const exps = [
  {
    role: "JUNIOR Developer",
    company: "PME Global",
    duration: "Aug 2025 - Oct 2025",
    type: "Internship",
    desc: "Worked on Front end tasks, frontend improvements and debugging.",
    link:"https://pmeglobal.com.au/",
  },
  {
    role: "WEB Developer",
    company: "OPA RENTAL",
    duration: "01/01/2025 - 30/04/2026",
    type: "Experience",
    desc: "Worked on web development tasks, improved interfaces and debugging.",
    link:"https://www.oparealestate.com/"
  },
];
const Experience = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-black text-white mt-10">EXPERIENCE</h2>
      <div>
        {exps.map((exp) => (
          <div
            key={exp.role}
            className="max-w-3xl mx-auto mt-6 border border-transparent hover:border-orange-500 rounded-xl p-6 text-left bg-gray-900 mt-4 text-white transition-all"
          >
            <div className="flex items-center justify-between mt-2">
              
                  <p className="text-2xl text-orange-500">{exp.role}</p>
              <h2 className="text-sm text-orange-500 border border-orange-400 rounded-full px-3 py-1 inline-block">
                {exp.type}
              </h2>
            </div>
     <a href={exp.link} target="_blank" rel="noreferrer" className="text-white text-2xl underline hover:underline">
  {exp.company}
</a>
            <p className="text-gray-500 text-xl">{exp.duration}</p>

            <p className="text-gray-500">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
