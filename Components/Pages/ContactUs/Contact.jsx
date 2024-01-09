/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Navbar from "../../SideBar/Navbar";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import "../ContactUs/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [stack, setStack] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://my-portfolio-39fc5-default-rtdb.firebaseio.com/My-Portfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        setStack(true);
        setTimeout(() => {
          setStack(false);
        }, 2000);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error during fetch:", error.message);
      // Handle the error, you might want to show an error message to the user
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <h2 id="contact-hading">Contact Information</h2>
        <div
          className="Contact-information"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <div className="Con-info">
            Address: Ujjain , Madhya Pradesh , India
          </div>
          <div className="Con-info">Phone: +917489433640</div>
          <div className="Con-info">
            Email:{" "}
            <Link
              to={"mailto:abhaykumawat81@gmail.com"}
              className="text-blue-800"
            >
              Abhaykumawat81@gmail.com
            </Link>
          </div>
        </div>

        {stack ? (
          <div className="flex justify-center items-center relative top-40">
            <div>
              <svg viewBox="25 25 50 50" className="sbg">
                <circle r="20" cy="50" cx="50" className="crcl"></circle>
              </svg>
            </div>
          </div>
        ) : null}
        <div className="contact-form">
          <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            <form className="form" onSubmit={handleSubmit}>
              {stack ? (
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert severity="success">
                    Thank you for reaching out. I'll get in touch with you soon.
                  </Alert>
                </Stack>
              ) : null}
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span></span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span></span>
              </div>
              <div className="input-container">
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>
              <br />
              <button
                type="submit"
                className="submit"
                style={{ margin: "auto", width: "100%", background: "#1e40a4" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
