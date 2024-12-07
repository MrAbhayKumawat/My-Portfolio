import { Link } from "react-router-dom";

export default function Experience() {
  return (
  
    <section className="col">
    <header className="title">
      <h2>EXPERIENCE</h2>
    </header>

    <div className="content">
      <div className="box">
        <h4>Sep-2024 - Present</h4>
        <h3>React Js Developer Intern</h3>
        <Link to={"https://themedius.ai/"} target="_blank">
          <div className="text-md font-medium mb-2 text-blue-800">
          Medius Technologies Private Limited

          </div>
        </Link>

        <p>
        As a React Developer at Medius Technologies Private Limited, I&apos;ve been responsible for building responsive and 
            user-friendly web applications using modern technologies such as <strong>React, Next.js, and Tailwind CSS</strong>. 
            I&apos;ve collaborated with cross-functional teams to deliver high-quality products that meet client needs.        </p>
      </div>
     
    </div>
  </section>
    
  )
}