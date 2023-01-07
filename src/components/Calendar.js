// src/components/Goals.js

import { CalendarIcon } from "@heroicons/react/solid";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Calendar() {
  return (
    <section id="calendar">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CalendarIcon className="w-10 inline-block mb-4 text-gray-500" />
          <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
            Prenota un appuntamento
          </h1>
          <p className="text-base text-gray-500 leading-relaxed mx-auto xl:w-2/4 lg:w-3/4">
            Sarò più che lieto di aiutarti a costruire una strategia vincente,
            cucita su misura intorno alle tue esigenze e ai tuoi obiettivi.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="flex flex-wrap -m-4">
            <iframe
              src="https://meetings-eu1.hubspot.com/francesco-magagna"
              frameBorder="0"
              style={{ height: '100vh', width: '100vw' ,overflow: 'hidden'}}
            />
          </div>
        </div>

        <script
          type="text/javascript"
          src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        ></script>
      </div>
    </section>
  );
}
