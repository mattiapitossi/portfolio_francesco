import { FaBeer, FaChild } from "react-icons/fa";
import { MdElderly } from "react-icons/md";
import { IoTelescopeOutline } from "react-icons/io5";
import { HiReceiptTax } from "react-icons/hi";
import { GiConversation } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { TrendingUpIcon } from "@heroicons/react/solid";
import { BsGraphUp } from "react-icons/bs";

const features = [
  {
    name: "Perché dovrei avere bisogno di te? Ho già un “consulente” in banca o alle poste.",
    description:
      "La differenza tra me e un “consulente” che lavora in una banca tradizionale è sottile, ma fondamentale. Io lavoro senza essere in conflitto d’interesse, essendo un libero professionista. Il dipendente che lavora in banca deve “venderti” per forza i prodotti e gli strumenti che la banca gli dice di vendere. La mia consulenza parte dalle tue esigenze, non da quello che la banca mi dice di fare.",
    icon: GiConversation,
  },
  {
    name: "Gli investimenti non fanno per me perché ho pochi soldi, vero? No, errato.",
    description:
      "Il mondo della finanza è accessibile a tutti. Non è più indispensabile avere a disposizione grandi capitali per poter investire. Oggi è possibile investire piccole cifre: anche solo 100 euro al mese possono darti ottime soddisfazioni nel tempo. Ti posso aiutare a gestire le tue entrate e le tue uscite, al fine di ottimizzare le tue finanze.",
    icon: FaRegMoneyBillAlt,
  },
  {
    name: "Investo in autonomia. Come puoi aiutarmi?",
    description:
      "Anche se investi da solo, un parere esterno di un professionista che lavora tutti i giorni a contatto con i mercati finanziari può risultare utile, specialmente se il parere che ti viene fornito ti da informazioni che non avevi preso in considerazione nelle tue scelte d’investimento.",
    icon: CiWarning,
  },
  {
    name: "Ho già degli investimenti in perdita. Mi puoi aiutare?",
    description:
      "Non prometto miracoli, ma sicuramente posso darti dei consigli per gestire al meglio le tue posizioni. A volte anche solo piccole accortezze di natura tecnica o fiscale possono aiutare a cambiare la direzione dei nostri investimenti. Contattami e sarò lieto di capire come consigliarti.",
    icon: BsGraphUp,
  },
  {
    name: "In passato ho già fatto degli investimenti in banca ma ho sempre e solo perso soldi. Come mai?",
    description:
      "Come dicevo prima, nelle banche tradizionali è presente il conflitto d’interesse. Spesso, purtroppo, vengono collocati strumenti finanziari non in linea con gli interessi ed i profili di rischio dei clienti. La mia consulenza è libera: io guadagno solo se tu guadagni.",
    icon: FaFileContract,
  },
];

export default function Example() {
  return (
    <section id="whyinvest">
      <div className="bg-gray py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center text-center">
            {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</h2> */}
            {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pensione Complementare
          </p> */}
            <TrendingUpIcon className="w-10 inline-block mb-4 text-gray-500" />
            <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
              Come iniziare ad investire
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-10 w-10 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center">
            <div className="mt-8 gap-x-4 sm:justify-center">
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
      </div>

    </section>
  );
}
