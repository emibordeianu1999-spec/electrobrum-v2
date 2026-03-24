import {
  BarChart3,
  Cloud,
  LayoutGrid,
  PiggyBank,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function ProiectePage() {
  const projects = [
    {
      title: "Sistem fotovoltaic 10.2 kWp",
      location: "Constanța, jud. Constanța",
      description:
        "Sistem fotovoltaic 10.2 kWp, cu 24 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 10kW. Baterie LUNA 5kW.",
      imageUrl: "/placeholder.jpg",
    },
    {
      title: "Sistem fotovoltaic 8.5 kWp",
      location: "Valu lui Traian, jud. Constanța",
      description:
        "Sistem fotovoltaic 8.5 kWp, cu 20 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 8kW. Baterie LUNA 5kW.",
      imageUrl: "/placeholder.jpg",
    },
    {
      title: "Sistem fotovoltaic 12.75 kWp",
      location: "Cumpăna, jud. Constanța",
      description:
        "Sistem fotovoltaic 12.75 kWp, cu 30 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 10kW. Baterie LUNA 10kW.",
      imageUrl: "/placeholder.jpg",
    },
    {
      title: "Sistem fotovoltaic 5.1 kWp",
      location: "Techirghiol, jud. Constanța",
      description:
        "Sistem fotovoltaic 5.1 kWp, cu 12 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 5kW.",
      imageUrl: "/placeholder.jpg",
    },
    {
      title: "Sistem fotovoltaic 15.3 kWp",
      location: "Năvodari, jud. Constanța",
      description:
        "Sistem fotovoltaic 15.3 kWp, cu 36 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 15kW. Baterie LUNA 15kW.",
      imageUrl: "/placeholder.jpg",
    },
    {
      title: "Sistem fotovoltaic 6.8 kWp",
      location: "Eforie Nord, jud. Constanța",
      description:
        "Sistem fotovoltaic 6.8 kWp, cu 16 panouri fotovoltaice LONGi 425W și invertor hibrid Huawei 6kW.",
      imageUrl: "/placeholder.jpg",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c07-a68a-05b952a6f153"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x="50%"
              y={-1}
              className="overflow-visible fill-gray-50 dark:fill-gray-900/50"
            >
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c07-a68a-05b952a6f153)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f59e0b] to-[#fbbf24] opacity-30 dark:opacity-20"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3.1%, 48.4% 0.1%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 78.1%, 43.2% 86.9%, 60.2% 37.8%, 63.1% 29.5%)",
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl uppercase">
              Portofoliu de Proiecte
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              De la sisteme rezidențiale mici la instalații comerciale complexe,
              fiecare proiect este o dovadă a angajamentului nostru pentru
              calitate și sustenabilitate.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={index}
                className="flex flex-col items-start justify-between group"
              >
                <div className="relative w-full">
                  <Image
                    src={project.imageUrl}
                    alt=""
                    width={800}
                    height={600}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-6 text-xl font-black leading-6 text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {project.title}
                      </a>
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm font-bold text-amber-500 uppercase tracking-wider">
                      <PiggyBank className="h-4 w-4" />
                      {project.location}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
