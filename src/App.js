// src/App.js

import "./App.css";

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import LinkedIn from "./components/LinkedIn";
import Goals from "./components/Goals";
import Calendar from "./components/Calendar";
import OfferBlack from "./components/OfferBlack";

export default function App() {
  return (
    <main className="text-gray-400 bg-slate-100 body-font">
      <Navbar />
      <About />
      <Goals />
      <OfferBlack />
      <LinkedIn />
      <Calendar />
      <Contact />
      <a
        href="https://wa.me/3465727999"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </main>
  );
}
