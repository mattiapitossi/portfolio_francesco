import React from "react";
import { Outlet } from "react-router-dom";
import AboutMe from "./AbouMe";
import Contact from "./Contact";
import Navbar from "./Navbar";

const AboutLayout = () => {
  return (
    <>
      <main className="text-gray-400 bg-slate-100 body-font">
        <AboutMe />
        <Contact />
      </main>
    </>
  );
};

export default AboutLayout;
