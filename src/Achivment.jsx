import React from "react";

const Achievement = () => {
  return (
    <div className="bg-gray-950 px-6 sm:px-10 lg:px-12 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-black text-orange-500 text-center mb-10">
        ACHIEVEMENT
      </h2>

      {/* Card */}
      <div className="max-w-4xl mx-auto">
        <div className="border border-orange-500 rounded-2xl p-6 sm:p-8 bg-gray-900">
          
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            
            <span className="text-5xl sm:text-6xl">🏆</span>

            <div>
              <h3 className="text-white font-black text-xl sm:text-3xl leading-tight">
                International Computing Olympiad 2025
              </h3>

              <p className="text-orange-500 mt-2 text-sm sm:text-base">
                Qualified for International Level · Certified 4th June 2025
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6 mt-2">
            
            <h4 className="text-orange-500 font-bold text-lg sm:text-xl mb-3">
              Project — Plant Recommendation System
            </h4>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              A group project built with 2 friends where users enter a city
              name and the app recommends the most suitable plants based on
              that city's climatic conditions. The project focused on
              environment and sustainability.
            </p>

            {/* Tags */}
            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="text-xs sm:text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">
                Group Project
              </span>

              <span className="text-xs sm:text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">
                Environment
              </span>

              <span className="text-xs sm:text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">
                National Level
              </span>

              <span className="text-xs sm:text-sm border border-orange-500 text-orange-500 px-3 py-1 rounded-full">
                ICO 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;