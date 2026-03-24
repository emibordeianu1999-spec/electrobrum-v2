import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  BarChart3,
  Settings,
  ShieldCheck,
  Search,
  Sun,
  LineChart,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function Page(): React.ReactElement {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Pattern/Image placeholder */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50 to-white dark:from-gray-950 dark:to-gray-900" />
        <div
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-bold mb-6">
              <Zap className="h-4 w-4" />
              <span>Instalator Aprobat AFM Casa Verde</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
              Soluții Fotovoltaice{" "}
              <span className="text-amber-500">Performante</span> nu doar
              Instalate.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Electrobrum proiectează, monitorizează și optimizează sisteme
              fotovoltaice pentru a asigura randament maxim și ROI real pe
              termen lung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calcul-sistem"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-amber-500/20"
              >
                Calculează-ți Sistemul <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Solicită Audit Gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-1">
                300+
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Sisteme Finalizate
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-1">
                3MW+
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Putere Instalată
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-1">10+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Județe Acoperite
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-1">
                5 Ani
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Garanție Manoperă
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance vs Installation Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Cum funcționează un sistem performant
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Diferența dintre un sistem instalat și unul performant este
              monitorizarea, controlul și intervenția corectă în timp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-8 w-8 text-amber-500" />,
                title: "Analiză Consum Real",
                desc: "Analizăm consumul real și obiectivele energetice înainte de orice proiectare.",
              },
              {
                icon: <LineChart className="h-8 w-8 text-amber-500" />,
                title: "Monitorizare Continuă",
                desc: "Monitorizăm parametrii tehnici ai sistemului (invertor, baterii, producție) 24/7.",
              },
              {
                icon: <Settings className="h-8 w-8 text-amber-500" />,
                title: "Optimizare Activă",
                desc: "Intervenim pentru optimizarea randamentului și a producției pe baza datelor reale.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                De ce majoritatea sistemelor nu produc cât ar putea?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Fără monitorizare și optimizare, producția reală poate fi mult
                sub așteptări. Iată problemele frecvente pe care le rezolvăm:
              </p>
              <ul className="space-y-4">
                {[
                  "Dimensionare după șablon, nu după consum real",
                  "Setări incomplete ale invertorului sau bateriei",
                  "Probleme de conectivitate și monitorizare",
                  "Lipsa mentenanței preventive",
                  "Erori de execuție (lipsă împământare, conexiuni slabe)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-500 p-8 rounded-2xl text-white">
                <ShieldCheck className="h-10 w-10 mb-6" />
                <h3 className="text-xl font-bold mb-2">Garanție Extinsă</h3>
                <p className="text-amber-100 text-sm">
                  Oferim 5 ani garanție pentru manoperă și suport
                  post-instalare.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-2xl text-white">
                <BarChart3 className="h-10 w-10 mb-6 text-amber-500" />
                <h3 className="text-xl font-bold mb-2">ROI Predictibil</h3>
                <p className="text-gray-400 text-sm">
                  Validăm sistemul astfel încât randamentul să fie cel estimat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            Servicii Integrate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Proiectare & Dimensionare",
                desc: "Bazată pe date reale de consum.",
              },
              {
                title: "Branșamente Electrice",
                desc: "Soluții complete de racordare ANRE.",
              },
              {
                title: "Instalare Profesională",
                desc: "Echipe autorizate cu experiență vastă.",
              },
              {
                title: "Mentenanță & Audit",
                desc: "Optimizăm sisteme deja instalate.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl border border-transparent hover:border-amber-500 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-6xl font-black mb-8">
            Ești gata să treci pe energie verde?
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Începe cu un audit gratuit sau calculează-ți sistemul ideal în
            funcție de consumul tău actual.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/calcul-sistem"
              className="bg-white text-amber-500 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl"
            >
              Calculează ROI
            </Link>
            <Link
              href="/contact"
              className="bg-amber-600 text-white border-2 border-amber-400 px-10 py-5 rounded-2xl font-black text-xl hover:bg-amber-700 transition-all"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
