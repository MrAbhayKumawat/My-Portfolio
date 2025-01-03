import React from "react";

import { Link } from "react-router-dom";
import Navbar from "../../SideBar/Navbar";
import TypescriptLogo from "../../../assets/img/TechLogo/Typescript-Logo.png";
import TodoImages from "../../../assets/img/TodoImg/TodoImage.jpg";
import NodejsLogo from "../../../assets/img/node-js.svg";
import ExpressLogo from "../../../assets/img/icons8-express-js-100.svg";
import MongoDb from "../../../assets/img/mongodb-original-wordmark.svg";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex rounded-lg w-full bg-[url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtyx-nivteH4rOGSNOFIm9EeqstBd-7Qze5eKgytvrAHwGb0vB)] bg-no-repeat bg-cover">
        <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
          <div className="">
            <img
              alt="Abhay"
              loading="lazy"
              width="120"
              height="120"
              decoding="async"
              data-nimg="1"
              className="object-cover border-2 border-white rounded-full shadow-md"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiQYtdda4mqEciCsf5p26N2FLc9mQQejBYRyOZ9lr8EIhcxhAPNCp-vi50gneMn2PHEtgJ8uAIDFY_aiIo6O8bc8dNCVvnpE5HVRGeOLsc5Y1hhVNnToVWP_C3OuHwRic0QqhE8_-AvhoqphkRzlhJ-tZJmJ-HacEVJO9Usa_L4OaWsA3eTwVCeTb5o-Fx/s320/profile-pic.png"
            />
          </div>
          <div className="flex md:flex-1 flex-col justify-center gap-4">
            <div className="flex justify-between items-center gap-5 ">
              <div className="text-3xl flex flex-col font-bold text-highlight">
                Abhay Kumawat
                <div className="text-sm font-thin flex justify-between items-center">
                  @Full Stack Developer
                  <Link
                    className="block md:hidden"
                    target="blank"
                    to="mailto:MrAbhayKumawat9@gmail.com"
                  >
                    <button
                      className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs p-2"
                      style={{ background: "#14131a" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke=" #8080FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-square-user-round"
                      >
                        <path d="M18 21a6 6 0 0 0-12 0" />
                        <circle cx="12" cy="11" r="4" />
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                      </svg>
                      <span className="hidden md:block">Hire Me </span>
                    </button>
                  </Link>
                </div>
              </div>
              <a
                className="hidden md:block"
                target="blank"
                href="mailto:MrAbhayKumawat9@gmail.com"
              >
                <button
                  className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disbaled:cursor-not-allowed  text-primary font-semibold text-xs py-2 px-4"
                  style={{ background: "#14131a" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1c8263"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-user"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                  </svg>
                  <span className="hidden md:block">Hire Me </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* All My Projets */}
      <div className="flex flex-col gap-10 lg:px-10">
        <section className="grid gap-8 p-5 mt-5 md:p-0">
          <div className="text-xl font-medium text-zinc-200">Projects</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5 ">
            <Link
              target="blank"
              to="https://asianexchange.club"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src={"https://images.pexels.com/photos/7594254/pexels-photo-7594254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold"> AsianExchange: Betting Website</div>
                  <div className="flex text-info text-xs">
                    React js, Tailwind, Node Js, MongoDb
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="https://godebtfree.in/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src={"https://s3-ap-south-1.amazonaws.com/oasys-image/public/images/63748db376df710ee80ea2f-freed_website.jpg"}
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold"> Debt Free: Loan Settlement
                  </div>
                  <div className="flex text-info text-xs">
                    React js, Tailwind Css
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src={"https://images.pexels.com/photos/7109288/pexels-photo-7109288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Medius Finance System</div>
                  <div className="flex text-info text-xs">
                    React js, Bootstrap, Redux-Toolkit
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="https://todoappbyabhay.netlify.app/login"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src={TodoImages}
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Todo Website</div>
                  <div className="flex text-info text-xs">
                    React js, Node Js, Express, MongoDb
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="https://akbloggingandreamoore.netlify.app/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Blogging Website</div>
                  <div className="flex text-info text-xs">
                    React js , React Hook Form, FireBase, Material UI...
                  </div>
                </div>
              </div>
            </Link>
          
          
            <Link
              target="blank"
              to="https://musifyrington.netlify.app/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Music-website"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Music Website</div>
                  <div className="flex text-info text-xs">
                    React js ,React Hooks,Material UI,Spotify API Integration...
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="https://github.com/abhaykmwt/Blog-andrea--admin-UI"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Admin-panel"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzGlA8QpFXsk-D_A5seUqlVKV2JQviDRrR8e-xTxYhquge6UF66VpVO_6ueNKBUIh_53XgEG-w-RAJMuI-gOOopmHzUuOJu81mudA1Znnecr405Orpgza3XQW7SY00B2hk-szDAeC43TkYtzuPSGfFjMPpO1-iZFMF7bGxt34TDAUVLzzS4oopDQ3JUS0c/w638-h345/Screenshot%202023-12-22%20142745.png"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">
                    Blogging Website Admin Panel
                  </div>
                  <div className="flex text-info text-xs">
                    React js ,React Hooks,Form,FireBase,Material UI...
                  </div>
                </div>
              </div>
            </Link>
            <Link
              target="blank"
              to="https://poke-abhay.netlify.app/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="Bogging"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://w0.peakpx.com/wallpaper/6/78/HD-wallpaper-pokemon-go-2017-games-poster.jpg"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Pokemon-App</div>
                  <div className="flex text-info text-xs">
                    React js , React Hook, FireBase, POkeApi, Material UI...
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link
              target="blank"
              to="https://e-shopbyabhay.netlify.app/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="spotify"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://www.isopensource.com/media/images/articles/eshop-click.jpg"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Ecommerce Website</div>
                  <div className="flex text-info text-xs">
                    React jS,Fake Store API Integretion FireBase,Form...
                  </div>
                </div>
              </div>
            </Link> */}
            {/* <Link
              target="blank"
              to="/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="spotify"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Portfolio</div>
                  <div className="flex text-info text-xs">
                    ReactJS,Material Ui,ailwind CSS,FireBase...
                  </div>
                </div>
              </div>
            </Link> */}
            {/* <Link
              target="blank"
              to="https://weather-app-by-abhay.vercel.app/"
              className="transition-transform hover:scale-95"
            >
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt="spotify"
                  loading="lazy"
                  width="700"
                  height="700"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src="https://png.pngtree.com/template/20190306/ourmid/pngtree-cloud-weather-logo-image_62021.jpg"
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">Weather App</div>
                  <div className="flex text-info text-xs">
                    Weather App:React js Real Time Data From OpenWeatherMap API
                    Integreation...
                  </div>
                </div>
              </div>
            </Link> */}
          </div>
        </section>
        {/* Skills Section */}
        <section>
          <div className="text-xl font-medium mt-2 text-zinc-200 mb-5 min-[280px]:pl-3">
            What I know
          </div>

          <div className="flex justify-start lg:justify-start xl:justify-start">
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start xl:justify-start">
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img src={NodejsLogo} className="w-32"></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img src={ExpressLogo} className="w-32"></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img src={MongoDb} className="w-32"></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFrN4FMpbNdt4id4KekeXska9N0OcaYwS8-sgCzDB6wYwtYujn5XMaB8zwLWPldikWBRSZwCHQZYnEogS7Y7twjMiz4SX2grbsRY8h-nAiox6Ind13-kVaHqMBB1MrKQ0jQBjOY4dYeRkcaqULeC2-zJ22NLJTrhX4kisMAj9T4KAMvQN3oRKjzJyqEb9r/s320/pngwing.com.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img src={TypescriptLogo} className="w-32"></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/javascript.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/css3.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 pt-11 border border-sky-700 rounded-md">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ-OdV7Cuq6mTeZ_W1sgdEclGZP29HSkCawFJyKeBiDd1CMsGXLKfj8qfI4K-VZwXLTfkg_nxAoqFGINAN8FEr3UML2QneDJ0TMA1AyM07v4Lz074ADAQBpEw4AEjMPN2YE83Ocl8JioSQTTzFxcb7eksm9tQOHRMXGH7YLXZ4QGbxjpr0O0KXk9GJFME2/s320/pngwing.com%20(2).png"
                  className="w-32"
                ></img>
              </div>

              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/html-5--v1.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/bootstrap.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/sass.png"
                  className="w-32"
                ></img>
              </div>
              <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
                <img
                  src="https://img.icons8.com/color/256/firebase.png"
                  className="w-32"
                ></img>
              </div>
            </div>
          </div>
        </section>

        {/* Tools I Used Section */}
        <section>
          <div className="text-xl font-medium mt-2 text-zinc-200 mb-5 min-[280px]:pl-3">
            Tools I Use
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start xl:justify-start">
            <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
              <img
                src="https://img.icons8.com/color/256/git.png"
                alt="Git"
                className="w-32"
              ></img>
            </div>
            <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7_AoMiINO03DBbRi6o_kmm1gUjF0-hyMb3SfMEsa1uVBTlnJB4GDVeDdsHl6heODQdaxDI-90u3N5hTxVupNihICle_MWjskBJnT-dMaYpgE0tXxuOcwdmB0mLLrYnsDsHWKba9rcR6QBHlQKpzbXT2cRjSzIWqeULvYm7Tf_tlttK7EbOHdJtm0LbkX4/s320/image-removebg-preview%20(6).png"
                className="w-32"
                alt="VsCode"
              ></img>
            </div>
            <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
              <img
                src="https://img.icons8.com/color/256/windows-10.png"
                alt="Windows"
                className="w-32"
              ></img>
            </div>
            <div className="w-40 h-40  p-5 border border-sky-700 rounded-md">
              <img
                src="https://img.icons8.com/color/256/github.png "
                alt="GitHub"
                className="w-32"
              ></img>
            </div>
            <div className="w-40 h-40 p-5 pl-2  border border-sky-700 rounded-md">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXQ1jfqcdOXwZq7n3uIjxqVIXw-3V083DY6xhkfIYy1ZWV3p-Ic31QrFUjkiWkR34St6AixqTOVcETBQfGVI8QeWFhwrPhhf0EiQ0L3-eeM1AOQgyU52HZxECdzkeX3UXM8gn9DfiqFfYsqY7rQw-eokWpXaBhTpc_Hp45KCjFRWQtmqufDBi7rAEM8Sys/s320/pngwing.com%20(1).png"
                alt="Postman"
                className="w-32"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
