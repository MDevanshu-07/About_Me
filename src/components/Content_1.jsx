import React from 'react'
import My_Image from "../images/My_Image.jpeg"
const Center = () => {
  return (
    <div className=" text-gray-200 w-100% flex flex-1 items-center justify-around flex-wrap">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl">
            Hi I am Devanshu !
        </h1>
        <p className="font-semibold text-xl tracking-wide">
            College Student Learning by Doing<br/>
            Learning to build responsive web applications using MERN stack.<br/>
            Interested in Devops along with cloud computing .<br/>
            Experience with Java and Python programming languages.<br/>
            Passionate about solving real-world problems and learning new technologies.
        </p>
       
      </div>
      <div>
         <img className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] object-cover" src={My_Image} alt="Profile Image"/>
      </div>
    </div>
  )
}

export default Center
