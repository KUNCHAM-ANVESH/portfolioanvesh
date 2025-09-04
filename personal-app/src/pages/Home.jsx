import React from "react";
import personimage from "../assets/personimage.jpg";
import "./Home.css";
import AnveshProfile from "../assets/anvesh profile.png";
import MySkills from "./MySkills";
import NewsHeadlinesSkills from "./NewsHeadlinesSkills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="bg-black pb-10 pt-10">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left - Intro */}
        <div className="typing-container bg-black flex flex-col justify-center items-center text-white mt-20">
          <h1 className="text-5xl">Hello.</h1>

          <div className="typing-wrapper">
            <p className="text-2xl sm:text-3xl md:text-4xl">I am Anvesh</p>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mt-2">
            Full Stack Developer
          </p>

          <a
            href="/resume.pdf"
            download="Kuncham_Anvesh_Resume.pdf"
            className="download-button mt-6 shadow-lg mb-10"
          >
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 18v2h14v-2H5z"
                  fill="black"
                ></path>
              </svg>
            </div>
            <div className="label">Download CV</div>
          </a>
        </div>

        {/* Middle - Person Image */}
        <div className="bg-black flex justify-center items-center p-0">
          <img
            src={personimage}
            alt="Anvesh"
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>

        {/* Right - Circle & About */}
        <div className="bg-black text-white p-10 flex flex-col justify-center items-center">
          <div className="circle-container">
            {/* Circle Text */}
            <svg viewBox="0 0 300 300" className="circle-text">
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150
       m -100, 0
       a 100,100 0 1,1 200,0
       a 100,100 0 1,1 -200,0"
                />
              </defs>

              <text fill="white" fontSize="18" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0%">
                  FULLSTACK DEVELOPER • UI/UX DESIGN • FRONTEND • FULLSTACK
                  DEVELOPER •
                </textPath>
              </text>
            </svg>

            {/* Center Image */}
            <img src={AnveshProfile} alt="profile" className="center-img" />
          </div>
          <p className="text-justify leading-relaxed text-[16px] sm:text-[20px] mt-6">
            I'm a frontend enthusiast passionate about crafting responsive,
            user-friendly, and modern UI/UX experiences. With strong skills in
            React, JavaScript, and UI frameworks, I focus on building clean and
            interactive web applications. Backed by a Java full-stack
            background, I bridge frontend creativity with robust backend
            solutions for scalable applications.
          </p>
        </div>
      </div>
      <NewsHeadlinesSkills />
      {/* Who am I Section */}
      <h1 className="text-white flex justify-center items-center text-5xl mt-15 font-bold">
        Who am I?
      </h1>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-10 mb-15 pb-4">
        {/* Left - Circle Profile */}
        <div className="text-white flex flex-col items-center">
          <div className="circle-container">
            <svg viewBox="0 0 300 300" className="circle-text">
              <defs>
                <path
                  id="circlePath2"
                  d="M 150, 150
       m -100, 0
       a 100,100 0 1,1 200,0
       a 100,100 0 1,1 -200,0"
                />
              </defs>
              <text fill="white" fontSize="18" fontWeight="bold">
                <textPath href="#circlePath2" startOffset="0%">
                  FULLSTACK DEVELOPER • UI/UX DESIGN • FRONTEND • FULLSTACK
                  DEVELOPER •
                </textPath>
              </text>
            </svg>
            <img src={AnveshProfile} alt="profile" className="center-img" />
          </div>
        </div>

        {/* Right - About Me */}
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl">About Me</h1>
          <span className="text-white p-5 text-center text-justify">
            🚀 I build modern, scalable web applications with a strong focus on
            UI/UX and frontend development. <br />⚡ Backed by a Java full-stack
            background, I bridge creative design with solid backend solutions.
          </span>

          {/* Info Cards */}
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-2">
            <div className="card">
              <h3>FULL NAME: Kuncham Anvesh</h3>
            </div>
            <div className="card">
              <h3>PhoneNumber: +91 6309337627</h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-2">
            <div className="card">
              <h3>Email: kunchamanvesh@gmail.com</h3>
            </div>
            <div className="card">
              <h3>Location: Hyderabad, India</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MySkills />
      </div>
      <NewsHeadlinesSkills />
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
