/* eslint-disable react/no-unescaped-entities */
import React from "react"

import "../About/Education.css";
import { Link } from "react-router-dom";
function Education() {
  return (
    <>
      {/* <!--   *******  Education Section Starts  *******   --> */}
      

      <section className="col">
        <header className="title">
          <h2>EDUCATION</h2>
        </header>

        <div className="content">
          <div className="box">
            <h4>2021 - 2025</h4>
            <h3>B.Tech Computer Science</h3>
            <Link to={"https://www.rgpv.ac.in/"} target="_blank">
              <div className="text-md font-medium mb-2 text-blue-800">
                RGPV, Bhopal
              </div>
            </Link>

            <p>
            I am pursuing a Bachelor’s degree in Technology in Computer Science at RGPV, Bhopal.
            </p>
          </div>
          <div className="box">
            <h4>07/22 - 10/22</h4>
            <h3>Frontend Development</h3>
            <Link
              to={"https://devsnest.in/certificate/y6nbIVQ9fHk"}
              target="_blank"
            >
              <div className="text-md font-medium  mb-2 text-blue-800">
                Devsnest
              </div>{" "}
            </Link>
            <p>
            Completed Devsnest's Front-End Web Development Course, earning a certificate and gaining comprehensive skills in
            front-end technologies like <strong>React JS, Next JS, and Javascript.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* <!--   *******  Education Section Ends  *******   --> */}
    </>
  );
}

export default Education;
