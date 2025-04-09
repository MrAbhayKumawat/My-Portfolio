import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../../SideBar/Navbar";
import Education from "./Education";
import Experience from "./Experience";
import DevProfile from "../../../assets/img/DevProfile.jpg"
function About() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-x-28 sm:flex-col-reverse min-[300px]: flex-col-reverse lg:flex-row lg:gap-x-12- xl:flex-row 2xl:flex-row">
          <div className="p-5 flex flex-col justify-center">
            <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
              About me
            </div>
            <div className="text-info text-xs leading-5 max-[1024px]:hidden">
            As a skilled Full-Stack Web Developer, I excel in utilizing both front-end and back-end technologies such as<br/> <strong className="">  React.js, Next.js, Node.js, Express and MongoDB</strong>to create dynamic and robust web applications.  <br/>I focus on delivering exceptional user experiences by combining intuitive design with seamless functionality<br/>My approach to development is informed by industry trends and best practices, ensuring that.<br/>I provide innovative and efficient solutions. Collaboration and continuous learning are key aspects of my work,<br/> driving me to deliver high-quality results that leave a positive and lasting impact in the field of web development. 
            </div>
            <div className="text-info text-xs leading-5 min-[1025px]:hidden">
            As a skilled Full-Stack Web Developer, I excel in utilizing both front-end and back-end technologies such as<br/> <strong className="">  React.js, Next.js, Node.js, Express and MongoDB</strong>to create dynamic and robust web applications.  <br/>I focus on delivering exceptional user experiences by combining intuitive design with seamless functionality<br/>My approach to development is informed by industry trends and best practices, ensuring that.<br/>I provide innovative and efficient solutions. Collaboration and continuous learning are key aspects of my work,<br/> driving me to deliver high-quality results that leave a positive and lasting impact in the field of web development. 
            </div>
            <br />
            <div className="flex gap-5 ">
              <Link
                to={
                  "https://drive.google.com/file/d/1dYNf6ZiKA5YPm3fGLzVzy4rX-Kb9xZwK/view?usp=sharing"
                }
                target="_blank"
                className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner  bg-blue-800 text-highlight text-xs py-2 px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Resume
              </Link>
              <Link
                className=""
                target="blank"
                to="mailto:abhaykumawat81@gmail.com"
              >
                <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner  bg-blue-800 text-highlight text-xs py-2 px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="">Hire Me </span>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={"https://avatars.githubusercontent.com/u/110529307?v=4"}
              alt="Abhay_Dev"
              className="rounded-full border-2 h-52"
            />
          </div>
        </div>

        {/* Education section  */}
      </div>
      <Experience/>
      <Education />
    </>
  );
}

export default About;
