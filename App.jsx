import React from "react"

import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Sidebar from "./Components/SideBar/Sidebar";
import Contact  from "./Components/Pages/ContactUs/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
