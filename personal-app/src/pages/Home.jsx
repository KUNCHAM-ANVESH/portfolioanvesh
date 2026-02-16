import React from "react";
import "./Home.css";
import AnveshProfile from "../assets/anvesh profile.png";
import MySkills from "./MySkills";
import NewsHeadlinesSkills from "./NewsHeadlinesSkills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="bg-[#273036] box pb-10 pt-10 mt-[40px]">
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
      {/* First Section */}
      <div className="flex justify-center items-center">
        {/* Intro */}
        <div className="typing-container bg-[#273036] flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl">Hello</h1>

          <div className="typing-wrapper">
            <p className="typing text-2xl sm:text-3xl md:text-4xl">I am Anvesh...</p>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mt-2">
            Full Stack Developer
          </p>

          <a
            href="/resume.pdf"
            download="Kuncham_Anvesh_Resume.pdf"
            className="download-button mt-6 shadow-lg mb-10"
          >
            <svg
              className="download-button__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16l4-4h-3V4h-2v8H8l4 4zM5 18v2h14v-2H5z"
                fill="white"
              ></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <NewsHeadlinesSkills />
      {/* Who am I Section */}
      <h1 className="text-white flex justify-center items-center text-5xl mt-15 font-bold">
        Who am I?
      </h1>

      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-10 mb-15 pb-4">
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
