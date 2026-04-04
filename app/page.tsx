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
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Pattern/Image placeholder */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50/50 to-white dark:from-gray-950 dark:to-gray-900" />
        <div
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 dark:bg-amber-500/10 skew-x-12 translate-x-1/4 pointer-events-none" />

        <div className="mx-auto mt-2 sm:mt-12 px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-bold mb-8 animate-fade-in">
              <Zap className="h-4 w-4" />
              <span>Instalator Aprobat AFM Casa Verde</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[0.95] mb-8 tracking-tighter">
              Soluții Fotovoltaice <br />
              <span className="text-amber-500">Performante</span> <br />
              nu doar Instalate.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl">
              Suntem partenerul tău tehnic care proiectează, monitorizează și
              optimizează sisteme fotovoltaice - astfel încât investiția să
              producă la adevăratul potențial.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-amber-500/30 hover:-translate-y-1"
              >
                Calculează-ți Sistemul <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-amber-500/50 text-gray-900 dark:text-white px-10 py-5 rounded-2xl font-black text-xl transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Solicită ofertă
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-[98%] sm:w-[90%] mx-auto mt-8 py-20 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
        <div className="mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { label: "Sisteme Finalizate", value: "300+" },
              { label: "Putere Instalată", value: "3MW+" },
              { label: "Județe Acoperite", value: "10+" },
              { label: "Garanție Manoperă", value: "5 Ani" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="text-5xl md:text-6xl font-black text-amber-500 mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center lg:text-left">
                  {stat.label}
                </div>
              </div>
            ))}
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
      <section className="w-full sm:w-[98%] mx-auto py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                De ce majoritatea sistemelor nu produc cât ar putea?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Fără monitorizare și optimizare, producția reală poate fi mult
                sub așteptări. Iată problemele frecvente pe care le rezolvăm:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Dimensionare după șablon, nu după consum real",
                  "Setări incomplete ale invertorului sau bateriei",
                  "Probleme de conectivitate și monitorizare",
                  "Lipsa mentenanței preventive",
                  "ROI mai slab din cauza randamentului neoptimizat",
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                Solicită Audit & Optimizare <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <ShieldCheck className="h-10 w-10 mb-6 text-amber-500" />
                  ),
                  title: "Garanție Manoperă",
                  desc: "5 ani garanție pentru manoperă și suport post-instalare.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 mb-6 text-amber-500" />,
                  title: "ROI Predictibil",
                  desc: "Validăm sistemul astfel încât randamentul să fie cel estimat.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800"
                >
                  {card.icon}
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Field Problems Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Probleme frecvente pe care le găsim în teren
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Optimizăm producția prin mentenanță profesională și măsurători
              exacte, chiar și pentru sisteme instalate de alte firme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "A",
                title: "Desfacerea șuruburilor",
                desc: "La întrerupătoarele automate din cauza vibrațiilor și dilatării.",
              },
              {
                id: "B",
                title: "Lipsa împământării",
                desc: "O problemă critică de siguranță pe care o întâlnim surprinzător de des.",
              },
              {
                id: "C",
                title: "Conexiune internet slabă",
                desc: "Împiedică monitorizarea corectă și alertarea în timp real.",
              },
              {
                id: "D",
                title: "Cabluri AC neprotejate",
                desc: "Lipsa copexurilor metalice sau a protecțiilor UV necesare.",
              },
              {
                id: "E",
                title: "Lipsa descărcătoare DC & AC",
                desc: "Sistemul este vulnerabil la supratensiuni și descărcări electrice.",
              },
              {
                id: "F",
                title: "Configurări Invertor",
                desc: "Setări de rețea sau de baterie care limitează producția utilă.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                  {item.id}
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Clarification Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ce fel de firmă este ELECTROBRUM ENERGY AUTOMATION?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Piața fotovoltaică poate fi confuză. Iată cum ne diferențiem
              rolurile:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gray-300 rounded-full" />
                Instalator Autorizat ANRE
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Echipe cu atestat ANRE, execută instalația electrică și
                racordarea. Sunt esențiali pentru execuție.
              </p>
              <ul className="space-y-4">
                {[
                  "Execuție instalație electrică",
                  "Racordare la rețea",
                  "Dosare tehnice ANRE",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border-2 border-amber-500 bg-amber-50/30 dark:bg-amber-900/10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-amber-600 dark:text-amber-500">
                <div className="w-2 h-8 bg-amber-500 rounded-full" />
                ELECTROBRUM ENERGY AUTOMATION
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Coordonăm întregul proiect: proiectare, achiziții, supervizare
                instalatori, monitorizare și optimizare continuă.
              </p>
              <ul className="space-y-4">
                {[
                  "Proiectare & dimensionare pe date reale",
                  "Coordonare instalatori parteneri",
                  "Monitorizare & optimizare continuă",
                  "Garanție manoperă 5 ani",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-900 dark:text-white font-bold"
                  >
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Steps Section */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Cum funcționează ecosistemul ELECTROBRUM ENERGY AUTOMATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 z-0" />

            {[
              {
                step: "1",
                title: "Proiectare",
                desc: "ELECTROBRUM ENERGY AUTOMATION dimensionează sistemul pe baza consumului tău real.",
              },
              {
                step: "2",
                title: "Instalare",
                desc: "Instalatori parteneri autorizați execută și racordează sistemul.",
              },
              {
                step: "3",
                title: "Monitorizare",
                desc: "Sistemul este conectat la dashboard-ul nostru de control.",
              },
              {
                step: "4",
                title: "Optimizare",
                desc: "Intervenim periodic pentru randament maxim și ROI accelerat.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center text-3xl font-black mb-6 shadow-xl shadow-amber-500/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Dashboard Section */}
      <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Control Total & Monitorizare în timp real
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Nu lăsăm sistemul tău să producă "după noroc". Monitorizăm activ
                fiecare parametru tehnic pentru a detecta orice anomalie înainte
                ca aceasta să afecteze factura ta.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Dashboard Unificat",
                    desc: "Vezi producția și consumul într-o singură aplicație intuitivă.",
                  },
                  {
                    title: "Alertare Anomalii",
                    desc: "Echipa noastră primește alerte instantanee dacă sistemul scade sub parametrii optimi.",
                  },
                  {
                    title: "Rapoarte Periodice",
                    desc: "Primești analize lunare detaliate despre economiile realizate și performanța tehnică.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-200 dark:border-gray-800">
                {/* Mock Dashboard UI */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-500 uppercase">
                      Live Production
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-green-500">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-gray-900 dark:text-white">
                    8.42 kW
                  </div>
                  <div className="h-40 flex items-end gap-1">
                    {[
                      30, 45, 25, 60, 80, 70, 90, 85, 95, 100, 80, 60, 50, 40,
                    ].map((h, i) => (
                      <div
                        key={i}
                        className="flex-grow bg-amber-500 rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                        Total Today
                      </div>
                      <div className="text-lg font-black text-gray-900 dark:text-white">
                        42.8 kWh
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                        CO2 Saved
                      </div>
                      <div className="text-lg font-black text-gray-900 dark:text-white">
                        12.5 kg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-21 left-16 bg-amber-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-xs font-bold opacity-80 uppercase mb-1">
                  Uptime
                </div>
                <div className="text-2xl font-black tracking-tighter">
                  99.9%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Ecosystem Section (Net Metering) */}
      <section className="py-24 bg-amber-500 text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Net Metering",
                    desc: "Compensare surplus prin net metering direct pe factura de furnizare.",
                  },
                  {
                    title: "Tarife Competitive",
                    desc: "Beneficiezi de cele mai bune tarife pentru energia consumată noaptea.",
                  },
                  {
                    title: "Facturare Unică",
                    desc: "Facturare transparentă și simplificată pentru producție și consum.",
                  },
                  {
                    title: "ROI Accelerat",
                    desc: "Valorifici fiecare watt produs și reduci costul energiei din rețea.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-amber-600/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-400/30"
                  >
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-amber-100 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[95%] lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Soluția completă pentru energie: <br />
                ELECTROBRUM ENERGY AUTOMATION + YellowGrid
              </h2>
              <p className="text-xl text-amber-100 mb-10 leading-relaxed">
                Împreună, oferim un ecosistem energetic complet - de la
                proiectare și instalare, până la furnizare și valorificare
                inteligentă a energiei produse.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div className="text-3xl font-black tracking-tighter">
                  ELECTROBRUM
                </div>
                {/* <div className="text-2xl font-light opacity-50">+</div>
                <div className="text-3xl font-black tracking-tighter">
                  YELLOWGRID
                </div> */}
              </div>
              <ul className="space-y-4">
                {[
                  "Un singur partener pentru producție și furnizare",
                  "Control total asupra fluxului de energie",
                  "Monitorizare unificată producție + consum",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              Parteneriate strategice pentru soluții energetice complete
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Colaborăm cu producători, furnizori și integratori de top pentru a
              livra soluții fotovoltaice stabile, sigure și profitabile pe
              termen lung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ecosistem Complet",
                desc: "Parteneriate pentru furnizare și valorificare inteligentă a energiei prin compensare și net metering.",
                icon: <Zap className="h-8 w-8 text-amber-500" />,
              },
              {
                title: "Monitorizare Post-Vânzare",
                desc: "Parteneriate cu integratori de software pentru dashboard-uri unificate și alertare în timp real.",
                icon: <LineChart className="h-8 w-8 text-amber-500" />,
              },
              {
                title: "Echipamente de Top",
                desc: "Colaborare directă cu producători mondiali (Huawei, Longi, Victron) pentru garanții extinse și suport tehnic.",
                icon: <ShieldCheck className="h-8 w-8 text-amber-500" />,
              },
            ].map((partner, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{partner.icon}</div>
                <h3 className="text-xl font-bold mb-4">{partner.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Servicii Fotovoltaice Integrate
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Oferim servicii personalizate în funcție de obiectivele tale
              energetice și financiare, acoperind întregul lanț valoric.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proiectare & Dimensionare",
                desc: "Nu folosim șabloane. Dimensionăm sistemul pe baza consumului tău real și a orientării specifice a locației.",
                features: [
                  "Analiză consum orar",
                  "Simulări producție PVSYST",
                  "Optimizare umbrire",
                ],
              },
              {
                title: "Branșamente ANRE",
                desc: "Gestionăm complet procesul de racordare la rețea și obținerea statutului de prosumator.",
                features: [
                  "Dosar tehnic complet",
                  "Avize de racordare",
                  "Certificat de urbanism",
                ],
              },
              {
                title: "Instalare & Punere în Funcțiune",
                desc: "Echipe proprii și parteneri autorizați care respectă cele mai înalte standarde de siguranță.",
                features: [
                  "Protecții DC/AC incluse",
                  "Împământare verificată",
                  "Configurare invertor/baterie",
                ],
              },
              {
                title: "Monitorizare Post-Vânzare",
                desc: "Includem monitorizarea activă în pachetul nostru. Nu ești singur după ce s-a montat sistemul.",
                features: [
                  "Alertare anomalii",
                  "Rapoarte de producție",
                  "Suport tehnic remote",
                ],
              },
              {
                title: "Audit & Optimizare",
                desc: "Vrem ca omul să fie mulțumit de sistemul deja instalat, chiar dacă a fost montat de altă firmă.",
                features: [
                  "Termoviziune panouri",
                  "Verificare conexiuni",
                  "Upgrade firmware",
                ],
              },
              {
                title: "Mentenanță Preventivă",
                desc: "Prevenim defecțiunile majore prin verificări periodice ale componentelor critice.",
                features: [
                  "Curățare panouri",
                  "Strângere conexiuni",
                  "Testare descărcătoare",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-amber-500 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                <h3 className="text-2xl font-black mb-4 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full sm:w-[98%] mx-auto py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 sm:gap-4">
            <div className="max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Proiecte care produc energie <br />
                la potențial maxim
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Fiecare sistem este proiectat individual, nu după șablon, pentru
                a maximiza ROI-ul pe termen lung.
              </p>
            </div>
            <Link
              href="/proiecte"
              className="group flex items-center gap-2 font-black text-amber-500 hover:text-amber-600 transition-colors"
            >
              Vezi toate proiectele{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sistem Rezidențial 6kWp",
                location: "București, Ilfov",
                stat: "ROI: 3.5 ani",
                img: "bg-amber-100",
              },
              {
                title: "Sistem Industrial 50kWp",
                location: "Ploiești, Prahova",
                stat: "Economie: 85%",
                img: "bg-amber-200",
              },
              {
                title: "Sistem Casa Verde 8kWp",
                location: "Cluj-Napoca, Cluj",
                stat: "Status: Finalizat",
                img: "bg-amber-300",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all"
              >
                <div
                  className={`h-64 ${project.img} flex items-center justify-center`}
                >
                  {/* Project image placeholder */}
                  <Sun className="h-12 w-12 text-amber-500 opacity-20" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {project.location}
                      </p>
                    </div>
                    <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs font-black uppercase">
                      {project.stat}
                    </div>
                  </div>
                  <Link
                    href={`/proiecte/${i}`}
                    className="text-sm font-bold text-amber-500 flex items-center gap-2"
                  >
                    Detalii Proiect <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            Portofoliu Proiecte Realizate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Sistem Rezidențial 10kWp",
                area: "Ilfov",
                img: "bg-amber-100",
              },
              {
                title: "Sistem Industrial 100kWp",
                area: "Prahova",
                img: "bg-amber-200",
              },
              {
                title: "Sistem Rezidențial 5kWp",
                area: "Cluj",
                img: "bg-amber-300",
              },
              {
                title: "Sistem Comercial 30kWp",
                area: "Timiș",
                img: "bg-amber-400",
              },
              {
                title: "Sistem Rezidențial 15kWp",
                area: "Brașov",
                img: "bg-amber-500",
              },
              {
                title: "Sistem Industrial 200kWp",
                area: "Constanța",
                img: "bg-amber-600",
              },
              {
                title: "Sistem Rezidențial 8kWp",
                area: "Iași",
                img: "bg-amber-700",
              },
              {
                title: "Sistem Comercial 40kWp",
                area: "Dolj",
                img: "bg-amber-800",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all"
              >
                <div
                  className={`absolute inset-0 ${project.img} opacity-20 group-hover:opacity-40 transition-opacity`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Sun className="h-8 w-8 text-amber-500 mb-4 opacity-50 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    {project.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/proiecte"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all"
            >
              Vezi tot portofoliul <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Întrebări Frecvente
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Tot ce trebuie să știi despre sistemele fotovoltaice și
              colaborarea cu ELECTROBRUM ENERGY AUTOMATION.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Cât durează instalarea unui sistem fotovoltaic?",
                a: "Instalarea propriu-zisă durează de obicei 1-2 zile pentru un sistem rezidențial standard. Întregul proces, incluzând avizele și dosarul de prosumator, poate dura între 4 și 8 săptămâni.",
              },
              // {
              //   q: "Ce se întâmplă dacă panourile produc mai multă energie decât consum?",
              //   a: "Surplusul de energie este injectat în rețea. Prin parteneriatul nostru cu YellowGrid, acest surplus este compensat pe factura ta, ajutându-te să reduci costurile în perioadele cu producție scăzută.",
              // },
              {
                q: "Este necesară curățarea periodică a panourilor?",
                a: "Da, pentru un randament maxim recomandăm curățarea panourilor de 1-2 ori pe an, în funcție de zona în care locuiești. De asemenea, oferim servicii de mentenanță preventivă care includ această operațiune.",
              },
              {
                q: "Oferiți suport pentru programul Casa Verde?",
                a: "Absolut. Suntem instalator aprobat AFM și te ghidăm prin tot procesul de înscriere, depunere a documentelor și implementare a sistemului prin programul Casa Verde.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-lg text-gray-900 dark:text-white group-open:bg-amber-500 group-open:text-white transition-all">
                  {item.q}
                  <div className="transition-transform group-open:rotate-180">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="p-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">
            Echipamente de top pentru performanță garantată
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders since I don't have the SVGs */}
            {[
              "HUAWEI",
              "LONGI",
              "VICTRON",
              "FRONIUS",
              "SUNGROW",
              "CANADIAN SOLAR",
            ].map((brand, i) => (
              <div
                key={i}
                className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 dark:text-white"
              >
                {brand}
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
              href="/calculator"
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
