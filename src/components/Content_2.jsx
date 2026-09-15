import React from 'react'
import DeveloperImg from '../images/Developer.png'
const Info = () => {
  return (
    <div>
      <div className="text-gray-200 w-full min-h-screen flex flex-col md:flex-row justify-between p-10">
      <div className="w-[60%] flex flex-col gap-4 items-center justify-center p-5">
      <h1 className="font-bold text-4xl">About Me! </h1>
      <p className="tracking-wider font-semibold">I am a second-year college student with a strong interest in software development and modern web technologies.<br/>
      I enjoy exploring new tech stacks and continuously improving my skills by building real-world projects
      which I use to develop responsive and scalable web applications.<br/>
      Alongside web development,I have a solid foundation in Java and Python. <br/>
      I am passionate about learning, experimenting with <br/>
      new technologies, and building a portfolio that reflects my growth as a developer while preparing for
      exciting opportunities.</p>
    </div>
    <div className="w-[40%] flex justify-center items-center">
        <img className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] object-cover" src={DeveloperImg} alt="Profile Image"/>
    </div>
    </div>
    </div>
  )
}

export default Info
