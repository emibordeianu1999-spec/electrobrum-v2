import {
  Award,
  Gem,
  Lightbulb,
  Handshake,
  Calendar,
  Users,
} from "lucide-react";

export default function DespreNoi() {
  const values = [
    {
      title: "Calitate",
      desc: "Ne angajăm să oferim produse și servicii de cea mai înaltă calitate, de la selecția echipamentelor la execuția impecabilă a lucrărilor de instalare.",
      icon: <Award className="h-10 w-10 text-amber-500" />,
    },
    {
      title: "Integritate",
      desc: "Acționăm cu onestitate, transparență și respect în toate interacțiunile noastre, construind relații de încredere cu clienții și partenerii noștri.",
      icon: <Gem className="h-10 w-10 text-amber-500" />,
    },
    {
      title: "Inovație",
      desc: "Suntem mereu în căutare de noi tehnologii și soluții inovatoare pentru a oferi clienților noștri cele mai performante și eficiente sisteme fotovoltaice.",
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    },
    {
      title: "Parteneriat",
      desc: "Credem în puterea parteneriatelor pe termen lung și lucrăm îndeaproape cu clienții noștri pentru a le oferi soluții personalizate care să le satisfacă nevoile.",
      icon: <Handshake className="h-10 w-10 text-amber-500" />,
    },
  ];

  const history = [
    {
      year: "2021",
      event:
        "Fondarea companiei cu viziunea de a oferi soluții de energie regenerabilă accesibile și eficiente.",
    },
    {
      year: "2022",
      event:
        "Extinderea portofoliului de servicii pentru a include consultanță energetică și audit pentru sisteme existente.",
    },
    {
      year: "2023",
      event:
        "Implementarea primului proiect de anvergură pentru un parc industrial, demonstrând capacitatea de a gestiona proiecte complexe.",
    },
    {
      year: "2024",
      event:
        "Parteneriat strategic cu YellowGrid pentru a facilita procesul de prosumator și a maximiza beneficiile pentru clienți.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="max-w-4xl sm:mt-10 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Despre Noi
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            O companie cu viziune pentru un viitor energetic sustenabil.
          </p>
        </div>
      </section>

      {/* Misiune Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Misiunea Noastră
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Misiunea noastră este să accelerăm tranziția către un viitor
            energetic curat și sustenabil, oferind soluții fotovoltaice
            personalizate, de înaltă calitate, care să aducă valoare adăugată
            clienților noștri și să contribuie la protejarea mediului
            înconjurător.
          </p>
        </div>
      </section>

      {/* Valori Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Valorile Noastre
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Principii care ne ghidează activitatea în fiecare zi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
              >
                <div className="flex justify-center items-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Istoria Noastra Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Istoria Noastră
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Evoluția noastră de-a lungul anilor.
            </p>
          </div>
          <div className="relative">
            <div className="border-l-2 border-amber-500 absolute h-full top-0 left-1/2 -ml-px"></div>
            {history.map((item, index) => (
              <div
                key={item.year}
                className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-5/12"></div>
                <div className="z-10">
                  <div className="bg-amber-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="w-5/12 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4">
                  <h3 className="text-xl font-semibold text-amber-500 mb-2">
                    {item.year}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Echipa Noastră
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Suntem o echipă de profesioniști pasionați, dedicați să oferim cele
            mai bune soluții pentru clienții noștri. Avem experiență vastă în
            domeniul energiei regenerabile și suntem aici pentru a vă ghida în
            fiecare etapă a proiectului dumneavoastră.
          </p>
        </div>
      </section>
    </main>
  );
}
