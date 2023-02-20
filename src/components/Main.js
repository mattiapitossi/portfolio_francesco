import React from "react";
import About from "./About";
import Goals from "./Goals";
import OfferBlack from "./OfferBlack";
import Pensionv2 from "./Pensionv2";
import WhyInvest from "./WhyInvest";
import LinkedIn from "./LinkedIn";
import Calendar from "./Calendar";
import Contact from "./Contact";
import TallyEmbed from "./TallyEmbed";

const Main = () => {
  return (
    <>
      <main className="text-gray-400 bg-slate-100 body-font">
        <About />
        <Goals />
        <OfferBlack />
        <Pensionv2 />
        <WhyInvest />
        <TallyEmbed />
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
    </>
  );
};

export default Main;
