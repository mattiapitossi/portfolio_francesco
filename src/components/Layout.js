import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <main className="text-gray-400 bg-slate-100 body-font">
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
