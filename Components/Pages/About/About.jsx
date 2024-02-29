import { Link } from "react-router-dom";
import Navbar from "../../SideBar/Navbar";
import Education from "./Education";
function About() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-x-16 sm:flex-col-reverse min-[300px]: flex-col-reverse lg:flex-row lg:gap-x-12- xl:flex-row 2xl:flex-row">
          <div className="p-5 flex flex-col justify-center ">
            <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
              About me
            </div>
            <div className="flex text-info text-xs  leading-5  ">
              As a front-end developer, I design and build visually appealing
              websites and web applications. Proficient <br />
              in HTML, CSS, JavaScript, I prioritize seamless user experiences
              and optimal responsiveness across devices.
              <br /> Keeping up with industry trends, I integrate innovative
              technologies to enhance
              <br /> accessibility and engagement for users interacting with the
              site or application.
            </div>
            <br />
            <div className="flex gap-5 ">
              <Link
                to={
                  "https://drive.google.com/file/d/1g4MBgrFAAGLJHWh2-5Xxc_QMUB1-2x5c/view?usp=sharing"
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
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiQYtdda4mqEciCsf5p26N2FLc9mQQejBYRyOZ9lr8EIhcxhAPNCp-vi50gneMn2PHEtgJ8uAIDFY_aiIo6O8bc8dNCVvnpE5HVRGeOLsc5Y1hhVNnToVWP_C3OuHwRic0QqhE8_-AvhoqphkRzlhJ-tZJmJ-HacEVJO9Usa_L4OaWsA3eTwVCeTb5o-Fx/s320/profile-pic.png"
              className="rounded-full border-2 h-52"
            />
          </div>
        </div>

        {/* Education section  */}
      </div>
      <Education />
    </>
  );
}

export default About;
