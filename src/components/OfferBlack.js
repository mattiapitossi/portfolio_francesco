import React from "react";
import { BadgeCheckIcon, BriefcaseIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function OfferBlack() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="consultant" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <BriefcaseIcon className="w-10 inline-block mb-4 text-gray-500" />
          <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
            Come funziona la mia consulenza? Scegli il piano che fa più per te!
          </h1>
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="bg-gray-800 shadow-lg rounded-lg p-6 half-color-before mb-6"
                style={{ backgroundColor: "#6D7888" }}
              >
                <h3 className="text-2xl font-bold text-center mb-2 mt-1 text-white">
                  Basic
                </h3>
              </div>
              <p className="text-center mb-6 text-white font-bold">
                Pensato per:
              </p>
              <ul className="list-inside list-disc text-center text-white">
                <li>Chi ha un conto Fineco e non ha un consulente abbinato</li>
                <li>
                  Chi ha aperto un conto Fineco e inserito il codice consulente
                  RW054980
                </li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white font-bold">
                  Servizi offerti:
                </p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Consulenza di base.</li>
                  <li>Assistenza via e-mail e Whatsapp.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="bg-gray-800 shadow-lg rounded-lg p-6 half-color-before mb-6"
                style={{ backgroundColor: "#BD861F" }}
              >
                <h3 className="text-2xl font-bold text-center mb-2 mt-1 text-white">
                  Premium
                </h3>
              </div>
              <p className="text-center mb-6 text-white font-bold">
                Pensato per:
              </p>
              <ul className="list-inside list-disc text-center text-white">
                <li>
                  Chi vuole iniziare un percorso d'investimento con un capitale
                  minimo di 20.000€
                </li>
        
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white font-bold">
                  Servizi offerti:
                </p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>
                    Consulenza nella costruzione di un portafoglio
                    d'investimento personalizzato.
                  </li>
                  <li>
                    Commissioni di negoziazione, di ingresso e di uscita
                    azzerate.
                  </li>
                  <li>Assistenza via e-mail, Whatsapp e telefono.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="bg-gray-800 shadow-lg rounded-lg p-6 half-color-before mb-6"
                style={{ backgroundColor: "#23405C" }}
              >
                <h3 className="text-2xl font-bold text-center mb-2 mt-1 text-white">
                  Private
                </h3>
              </div>
              <p className="text-center mb-3 text-white font-bold">
                Pensato per:
              </p>
              <ul className="list-inside list-disc text-center text-white">
                <li>
                  Chi ha un portafoglio d'investimento con un capitale minimo di
                  100.000€
                </li>
             
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white font-bold">
                  Servizi offerti:
                </p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Tutti i servizi del piano Premium.</li>
                  <li>Monitoraggio attivo del portafoglio.</li>
                  <li>Ottimizzazione fiscale.</li>
                  <li>Consulenza successoria.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full px-4 mb-8">
            <div
              className="bg-gray-800 shadow-lg rounded-lg p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="bg-gray-800 shadow-lg rounded-lg p-6 half-color-before"
                style={{ backgroundColor: "#00BD9D" }}
              >
                <h2 className="text-2xl font-bold text-center mb-1 mt-1 text-white">
                NB: per gli under30 il conto è sempre a canone zero
                </h2>
              </div>
              {/* <p className="text-center mb-3 text-white font-bold">
                Pensato per:
              </p>
              <ul className="list-inside list-disc text-center text-white">
                <li>
                  Chi ha un portafoglio d'investimento con un capitale minimo di
                  100.000€
                </li>
             
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white font-bold">
                  Servizi offerti:
                </p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Tutti i servizi del piano Premium.</li>
                  <li>Monitoraggio attivo del portafoglio.</li>
                  <li>Ottimizzazione fiscale.</li>
                  <li>Consulenza successoria.</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

     
      </div>


      <div className="container mx-auto px-4 text-center">
        <h1 className="text-gray-600 title-font font-medium text-center text-3xl tracking-tight sm:text-center sm:text-4xl mt-10">
          Trasferimento Titoli e Fondi
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          Il servizio che ti permette di trasferire in modo gratuito i tuoi
          titoli e fondi da un'altra banca al tuo conto.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center font-bold">
          Commissioni di sottoscrizione dei fondi azzerate.
          <br></br>
          Il conto corrente rimane gratuito investendo almeno 20.000 euro o con
          meno di 30 anni.
        </p>
        <div className="mt-8 gap-x-4 sm:justify-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Richiedi{" "}
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
