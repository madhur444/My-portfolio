import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-900 px-12 py-16">
      <h2 className="text-4xl font-black text-orange-500 text-center mb-10">WHO AM I?</h2>
      <div className="max-w-3xl mx-auto">
        <div className="border border-orange-500 rounded-xl p-8 bg-gray-950 text-gray-400 text-lg leading-relaxed space-y-4">
          <p>I'm <span className="text-orange-500 font-bold">Madhur Kataria</span>, a 20-year-old self-taught MERN stack developer from Sri Ganganagar, Rajasthan.</p>
          <p>Currently pursuing BCA (4th Semester) at Maharaja Ganga Singh University. I started with frontend — HTML, CSS, JS, React — and now build complete backends with Node.js, Express and MongoDB.</p>
          <p>I've worked with real clients, shipped live websites, and I'm constantly building new projects to sharpen my skills. I learn by doing — every bug teaches me something new.</p>
          <p>Right now I'm focused on <span className="text-orange-500 font-bold">Learning</span> and finding my first full-time developer role.</p>
        </div>
      </div>
    </div>
  )
}

export default About