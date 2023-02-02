import { FaBeer,FaChild } from 'react-icons/fa';
import { MdElderly } from "react-icons/md";
import { IoTelescopeOutline } from "react-icons/io5";
import { HiReceiptTax } from "react-icons/hi";
import { AiOutlineStock } from "react-icons/ai";
import { TrendingUpIcon } from "@heroicons/react/solid";

const features = [
  {
    name: 'Perché dovrei avere bisogno di te? Ho già un “consulente” in banca o alle poste.',
    description:
      'La differenza tra me e un “consulente” che lavora in una banca tradizionale è sottile, ma fondamentale. Io lavoro senza essere in conflitto d’interesse, essendo un libero professionista. Il dipendente che lavora in banca deve “venderti” per forza i prodotti e gli strumenti che la banca gli dice di vendere. La mia consulenza parte dalle tue esigenze, non da quello che la banca mi dice di fare.',
    icon: MdElderly,
  },
  {
    name: 'Gli investimenti non fanno per me perché ho pochi soldi, vero? No, errato.',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: FaChild,
  },
  {
    name: 'Investimento di lungo periodo',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: IoTelescopeOutline,
  },
  {
    name: 'Tassazione agevolata e ottimizzazione fiscale',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: HiReceiptTax,
  },
  {
    name: 'Tassazione agevolata e ottimizzazione fiscale',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: HiReceiptTax,
  },
  {
    name: 'Tassazione agevolata e ottimizzazione fiscale',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: HiReceiptTax,
  },
]

export default function Example() {
  return (
    <section id="whyinvest">
    <div className="bg-gray py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2> */}
          {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pensione Complementare
          </p> */}
              <TrendingUpIcon className="w-10 inline-block mb-4 text-gray-500" />
             <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
           Come iniziare a investire
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Perché è indispensabile avere un fondo pensione? Per tutti questi motivi:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center font-bold">
          Hai qualcuno che ti da una mano a districarti in tutto questo?
        </p>
        <div className="mt-8 flex gap-x-4 sm:justify-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Contattami{" "}
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
    </div>
    </section>
  )
}
