import React from 'react'

const Achievement = () => {
  return (
    <div className="bg-gray-950 px-12 py-16">
      <h2 className="text-4xl font-black text-orange-500 text-center mb-10">ACHIEVEMENT</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="border border-orange-500 rounded-xl p-8 bg-gray-900">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🏆</span>
            <div>
              <h3 className="text-white font-black text-2xl">International Computing Olympiad 2025</h3>
              <p className="text-orange-500 mt-1">Qualified for International Level · Certified 4th June 2025</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 mt-2">
            <h4 className="text-orange-500 font-bold text-lg mb-3">Project — Plant Recommendation System</h4>
            <p className="text-gray-400 leading-relaxed">A group project built with 2 friends where users enter a city name and the app recommends the most suitable plants based on that city's climatic conditions. The project focused on environment and sustainability.</p>
            
            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">Group Project</span>
              <span className="text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">Environment</span>
              <span className="text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">National Level</span>
              <span className="text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">ICO 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement