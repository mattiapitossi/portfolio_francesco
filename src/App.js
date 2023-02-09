// src/App.js

import "./App.css";

import ReactDOM from "react-dom";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import LinkedIn from "./components/LinkedIn";
import Goals from "./components/Goals";
import Calendar from "./components/Calendar";
import OfferBlack from "./components/OfferBlack";
import Pensionv2 from "./components/Pensionv2";
import WhyInvest from "./components/WhyInvest";
import NewPage from "./components/NewPage";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Layout from "./components/Layout";
import AboutMe from "./components/AbouMe";
import AboutLayout from "./components/AboutLayout";

// export default function App() {
//   return (
//     <main className="text-gray-400 bg-slate-100 body-font">
//       <Navbar />
//       <About />
//       <Goals />
//       <OfferBlack />
//       <Pensionv2/> 
//       <WhyInvest/> 
//       <LinkedIn />
//       <Calendar />
//       <Contact />
//       <NewPage />
//       <a
//         href="https://wa.me/3465727999"
//         class="whatsapp_float"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <i class="fa fa-whatsapp whatsapp-icon"></i>
//       </a>
//     </main>
//   );
// }

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Main />}/>
          <Route path="about" element={<AboutLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));