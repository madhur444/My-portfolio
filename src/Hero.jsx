import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import PP from "./assets/PP.jpeg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gray-950 min-h-screen px-6 sm:px-10 lg:px-16 py-10 gap-10">
      
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left">
        <div>
          <h5 className="text-xs sm:text-sm text-orange-400 border border-orange-400 rounded-full px-3 py-1 inline-block">
            🟠 AVAILABLE FOR WORK
          </h5>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mt-4 leading-tight">
            Madhur Kataria
          </h1>

          <h3 className="text-lg sm:text-2xl lg:text-3xl text-gray-400 mt-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            20 Years Old Self Taught{" "}
            <b className="text-orange-400">DEVELOPER</b> <br />
            Building high-impact digital experiences that convert.
          </h3>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 flex-wrap">
            <button className="px-6 py-3 text-lg sm:text-2xl bg-orange-500 text-white border border-orange-400 rounded-2xl cursor-pointer">
              Lets Talk!
            </button>

            <a href="https://github.com/madhur444">
              <button className="text-2xl sm:text-3xl bg-white text-orange-400 border border-orange-500 rounded-2xl p-3 cursor-pointer">
                <SiGithub />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/madhur-kataria-03162a389/?skipRedirect=true">
              <button className="text-2xl sm:text-3xl bg-white text-orange-400 border border-orange-500 rounded-2xl p-3 cursor-pointer">
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={PP}
          alt="Madhur"
          className="rounded-4xl w-64 sm:w-80 lg:w-[420px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;