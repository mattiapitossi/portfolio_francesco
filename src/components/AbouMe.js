import { BadgeCheckIcon, CheckIcon } from "@heroicons/react/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: BadgeCheckIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BadgeCheckIcon,
  },
];

export default function AboutMe() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Chi sono
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Francesco Magagna
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Mi chiamo Francesco e sono nato il 27 settembre 1995 a Torino.
                Dopo il liceo scientifico, ho conseguito prima una{" "}
                <b>laurea triennale</b> in economia al percorso “Banca, Borsa e
                Assicurazione” e successivamente una <b>laurea magistrale</b>,
                sempre in economia, in “Finanza aziendale e mercati finanziari”.
                Prima di intraprendere la professione di{" "}
                <b>consulente finanziario</b>, ho lavorato presso una storica
                società di consulenza corporate come analista finanziario e poi
                presso una multinazionale del settore alimentare come analista
                di tesoreria. Da sempre{" "}
                <b>affascinato dal mondo della finanza e dei mercati</b>, ho
                deciso di iniziare questa professione preparandomi per il
                superamento della prova valutativa per l’iscrizione all’albo dei
                consulenti finanziari, al fine di poter offrire consulenza in
                materia di investimenti.
                <b>
                  {" "}
                  L’albo è consultabile pubblicamente, e puoi verificare la mia
                  iscrizione nella delibera n. 1829
                </b>
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>

          {/* <img
            src="./img/francesco.jpeg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          /> */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./img/francesco-about-me.jpeg"
          />
        </div>
        <div className="container  px-5 py-10 mx-auto mt-10">
          <div className="text-center mb-3">
            <h1 className="text-gray-600 title-font font-medium text-3xl sm:text-4xl mb-4">
              La mia mission
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mx-auto xl:w-2/4 lg:w-3/4">
              Il mio <strong>obiettivo professionale</strong> è quello di{" "}
              <strong>
                aiutare i miei clienti nella gestione dei risparmi e degli
                investimenti
              </strong>
              , supportandoli in tutte le fasi del processo di pianificazione
              economico-finanziaria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
