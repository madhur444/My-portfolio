import React from "react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
const Hero = () => {
  return (

<div className="flex items-center justify-between bg-gray-950">
  <div className="flex-1">
 <div className="  px-12 py-20">
      <h5 className="text-sm text-orange-400 border border-orange-400 rounded-full px-3 py-1 inline-block">🟠AVAILABLE FOR WORK </h5>
      <h1 className="text-8xl font-black text-white">Madhur Kataria </h1>
      <h3 className="text-3xl text-gray-400 mt-6 max-w-2xl">
        20 Years Old Self Taught   <b className="text-orange-400">DEVELOPER</b> <br />  
        Building high-impact digital expereciences that convert.
      </h3>
    <div className="flex items-center gap-4 mt-">
  <button className=" px-6 text-3xl bg-orange-500 text-white mt-6 border border-orange-400 rounded-2xl inline-block p-2  cursor-pointer" >Lets Talk!</button>
  <a href="https://github.com/madhur444"><button className="text-4xl bg-white text-orange-400 mt-6 border border-orange-500 rounded-2xl inline-block p-2  cursor-pointer ml-5"><SiGithub/></button></a>
  <a href="https://www.linkedin.com/in/madhur-kataria"><button className="text-4xl bg-white text-orange-400 mt-6 border border-orange-500 rounded-2xl inline-block p-2  cursor-pointer ml-5"><FaLinkedin/></button></a>
</div>
    </div>
  
  </div>
  <div className="flex-1 flex justify-center mt-40">
    <img src="./src/assets/PP.jpeg" alt="Madhur" className=" rounded-4xl w-100 h-100 object-cover items-center mb-46" />
  </div>

  
</div>







   

  );
};

export default Hero;
