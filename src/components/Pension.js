// src/components/Goals.js

import { HomeIcon } from "@heroicons/react/solid";
import React from "react";

export default function Pension() {
  const products = [
    {
      id: 1,
      name: 'Risparmio previdenziale',
      href: '#',
      imageSrc: './img/previdenza.png',
      imageAlt: "Front of men's Basic Tee in black."
    }
  ]
  
  return (
    <section id="pension">
      <div className="container  px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <HomeIcon className="w-10 inline-block mb-4 text-gray-500" />
          <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
            Pensione complementare
          </h1>
          <div className="w-full px-4 mb-8">
            <div
              className="bg-white-800 shadow-lg rounded-lg p-6"
              style={{ width: "100%", height: "100%" }}
            >
              <h3 className="text-2xl font-bold text-center mb-2 mt-1 text-gray-600">
                Vuoi Sapere se potrai andare in pensione serenamente?
              </h3>

              <h3 className="text-2xl  text-center mb-2 mt-1 text-gray">
                Il sistema pensionistico italiano è in difficoltà, e le
                prospettive non sono buone.
              </h3>

              <h3 className="text-2xl font-bold text-center mb-2 mt-5 text-gray-600">
                Perché è indispensabile avere un fondo pensione? Per tutti
                questi motivi:
              </h3>
              <div className="image-container">
                <img
                  className="object-cover object-center rounded"
                  alt="previdenza"
                  src="./img/previdenza.png"
                />
              </div>
              <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

              <h3 className="text-2xl font-bold text-center mb-2 mt-5 text-gray-600">
                L’importo della tua pensione sarà nettamente più basso del tuo
                ultimo reddito lavorativo.
              </h3>

              <h3 className="text-2xl  text-center mb-2 mt-1 text-gray">
                E’ proprio per questo motivo che pianificare per tempo
                l’integrazione della propria pensione è indispensabile.
              </h3>

              <div className="image-container">
                <img
                  className="object-cover object-center rounded"
                  alt="previdenza"
                  src="./img/pension-gap.png"
                />
              </div>
              <h3 className="text-2xl  text-center mb-2 mt-1 text-gray">
                La normativa attorno al mondo della previdenza complementare è
                molto complicata e di difficile comprensione, ma presenta dei
                vantaggi molto interessanti per chi aderisce ai fondi pensione.
              </h3>

              <h3 className="text-2xl font-bold text-center mb-2 mt-5 text-gray-600">
                Hai qualcuno che ti da una mano a districarti in tutto questo?
              </h3>

              <div>
              <a
                href="#contact"
                className="inline-block rounded-md border border-transparent bg-gray-600 py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
              >
                Contattami{' '}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
