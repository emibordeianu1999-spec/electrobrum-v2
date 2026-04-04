"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Search,
  Settings,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  LineChart,
  ClipboardCheck,
  Wrench,
  MessageSquare,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Consultanță Energetică",
      desc: "Analizăm consumul tău energetic și identificăm soluția optimă de sisteme fotovoltaice pentru nevoile tale specifice.",
      icon: <Search className="h-10 w-10 text-amber-500" />,
      features: [
        "Audit energetic complet",
        "Analiză consum orar",
        "Estimare economii reale",
      ],
    },
    {
      title: "Proiectare Sisteme",
      desc: "Proiectăm sisteme personalizate cu tehnologie de ultimă generație pentru eficiență maximă și durabilitate.",
      icon: <Settings className="h-10 w-10 text-amber-500" />,
      features: [
        "Proiect tehnic detaliat",
        "Simulări 3D umbrire",
        "Documentație completă prosumator",
      ],
    },
    {
      title: "Montaj Panouri Solare",
      desc: "Echipe autorizate ANRE pentru instalare profesională, respectând cele mai înalte standarde de siguranță.",
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      features: [
        "Instalare rapidă 1-2 zile",
        "Protecții DC/AC incluse",
        "Garanție execuție 5 ani",
      ],
    },
    {
      title: "Mentenanță & Suport",
      desc: "Asigurăm funcționarea optimă a sistemului tău prin verificări periodice și suport tehnic dedicat.",
      icon: <Wrench className="h-10 w-10 text-amber-500" />,
      features: [
        "Curățare profesională",
        "Verificare conexiuni",
        "Monitorizare remote 24/7",
      ],
    },
    {
      title: "Audit Sisteme Existente",
      desc: "Vrei să știi dacă sistemul tău produce la potențial maxim? Audităm și optimizăm instalații realizate de alte firme.",
      icon: <ClipboardCheck className="h-10 w-10 text-amber-500" />,
      features: [
        "Termoviziune panouri",
        "Upgrade firmware invertor",
        "Corecție erori montaj",
      ],
    },
    {
      title: "Soluții de Stocare",
      desc: "Implementăm sisteme cu baterii pentru a maximiza autoconsumul și a asigura independența energetică.",
      icon: <BarChart3 className="h-10 w-10 text-amber-500" />,
      features: [
        "Dimensionare acumulatori",
        "Configurare sisteme hybrid",
        "Backup în caz de pană",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold mb-6 border border-amber-500/20">
              Soluții Complete pentru Energie Solară
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1] tracking-tighter">
              Soluții{" "}
              <span className="text-amber-500">
                ELECTROBRUM ENERGY AUTOMATION
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              De la consultanță energetică până la instalare și mentenanță,
              oferim servicii complete pentru transformarea casei sau afacerii
              tale într-o sursă de energie sustenabilă.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div>
                <div className="text-4xl font-black text-amber-500 mb-1">
                  400+
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Proiecte Finalizate
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-500 mb-1">
                  2.5+ MW
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Putere Instalată
                </div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-500 mb-1">
                  15+ Ani
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Experiență
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Ce oferim clienților noștri
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Acoperim întregul lanț valoric al unui proiect fotovoltaic,
              asigurându-ne că fiecare etapă este executată la cele mai înalte
              standarde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-amber-500 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
              Cum funcționează procesul nostru
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              De la primul contact până la monitorizarea pe termen lung, te
              ghidăm pas cu pas către independența energetică.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Contact & Analiză",
                  desc: "Ne contactezi și stabilim o primă discuție despre obiectivele tale.",
                  icon: <MessageSquare className="h-6 w-6 text-white" />,
                },
                {
                  step: "02",
                  title: "Audit & Ofertare",
                  desc: "Realizăm un audit tehnic la locație și îți trimitem oferta personalizată.",
                  icon: <Search className="h-6 w-6 text-white" />,
                },
                {
                  step: "03",
                  title: "Proiectare & Avize",
                  desc: "Întocmim proiectul tehnic și gestionăm dosarul de prosumator.",
                  icon: <ClipboardCheck className="h-6 w-6 text-white" />,
                },
                {
                  step: "04",
                  title: "Instalare & Punere",
                  desc: "Echipele noastre instalează sistemul și îl pun în funcțiune în siguranță.",
                  icon: <Zap className="h-6 w-6 text-white" />,
                },
                {
                  step: "05",
                  title: "Monitorizare",
                  desc: "Sistemul este conectat la dashboard-ul de monitorizare activă.",
                  icon: <LineChart className="h-6 w-6 text-white" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 shadow-xl shadow-amber-500/20 group-hover:scale-110 transition-transform relative">
                    <div className="absolute -top-3 -right-3 bg-white dark:bg-gray-800 text-amber-500 text-xs font-black px-2 py-1 rounded-md border border-amber-500/20">
                      {item.step}
                    </div>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-amber-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                De ce să alegi <br />
                ELECTROBRUM ENERGY AUTOMATION?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Expertiză Tehnică",
                    desc: "Echipele noastre sunt formate din ingineri și electricieni cu experiență vastă în sisteme complexe.",
                  },
                  {
                    title: "Echipamente Premium",
                    desc: "Folosim doar componente de la producători de top (Tier 1) pentru a garanta fiabilitatea pe termen lung.",
                  },
                  {
                    title: "Suport Proactiv",
                    desc: "Nu suntem doar instalatori. Suntem partenerul tău care monitorizează și optimizează sistemul constant.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black text-xl">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-amber-50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
                <LineChart className="h-16 w-16 mb-8 text-white opacity-50" />
                <h3 className="text-3xl font-black mb-6 leading-tight">
                  Gata să începi economisirea?
                </h3>
                <p className="text-amber-50 mb-10 text-lg">
                  Solicită o ofertă personalizată și echipa noastră de
                  consultanți te va contacta pentru a programa un audit gratuit.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-amber-500 px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl"
                >
                  Contactează-ne <ArrowRight className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
