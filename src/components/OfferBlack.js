import React from "react";
import { BadgeCheckIcon, BriefcaseIcon } from "@heroicons/react/solid";
export default function OfferBlack() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
        <BriefcaseIcon className="w-10 inline-block mb-4 text-gray-500" />
                    <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
                    Come funziona la mia consulenza? Scegli il piano che fa più per te!
                    </h1>
    
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                Basic
              </h3>
              <p className="text-center mb-6 text-white">Pensato per:</p>
              <ul className="list-inside list-disc text-center text-white">
                <li>Chi ha un conto Fineco e non ha un consulente abbinato</li>
                <li>
                  Chi ha aperto un conto Fineco e inserito il codice consulente
                  RW054980
                </li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white">Servizi offerti:</p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Consulenza di base.</li>
                  <li>Assistenza via e-mail e Whatsapp.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                Premium
              </h3>
              <p className="text-center mb-6 text-white">Pensato per:</p>
              <ul className="list-inside list-disc text-center text-white">
                <li>
                  Chi vuole iniziare un percorso d'investimento con un capitale
                  minimo di 20.000€
                </li>
                <li>(NB: per gli under30 il conto è sempre a canone zero)</li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white">Servizi offerti:</p>
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
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                Private
              </h3>
              <p className="text-center mb-3 text-white">Pensato per:</p>
              <ul className="list-inside list-disc text-center text-white">
                <li>
                  Chi ha un portafoglio d'investimento con un capitale minimo di
                  100.000€
                </li>
                <li>(NB: per gli under30 il conto è sempre a canone zero)</li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white">Servizi offerti:</p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Tutti i servizi del piano Premium.</li>
                  <li>Monitoraggio attivo del portafoglio.</li>
                  <li>Ottimizzazione fiscale.</li>
                  <li>Consulenza successoria.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-white">
                Trasferimento fondi
              </h3>
              <p className="text-center mb-6 text-white">Pensato per:</p>
              <ul className="list-inside list-disc text-center text-white">
                <li>Chi ha un conto Fineco e non ha un consulente abbinato</li>
                <li>
                  Chi ha aperto un conto Fineco e inserito il codice consulente
                  RW054980
                </li>
              </ul>
              <div className="text-center mt-6">
                <p className="text-center mb-3 text-white">Servizi offerti:</p>
                <ul className="list-inside list-disc text-center text-white">
                  <li>Consulenza di base.</li>
                  <li>Assistenza via e-mail e Whatsapp.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </section>
  );
}
