/* eslint-disable react/no-unescaped-entities */
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
              I am doing my bachelor's degree in this University. My course is
              Bachelors in technology in computer sceince..
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
              I hold a certificate from Devsnest's Front-End Web Dev Course,
              where I acquired comprehensive front-end development skills..
            </p>
          </div>
        </div>
      </section>

      {/* <!--   *******  Education Section Ends  *******   --> */}
    </>
  );
}

export default Education;
