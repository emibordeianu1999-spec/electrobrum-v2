"use client";

import { useState } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Cpu,
  Battery,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "../config/constants";
import { projects } from "./data";

export default function ProiectePage() {
  const [filter, setFilter] = useState("toate");

  const filteredProjects =
    filter === "toate"
      ? projects
      : projects.filter((p) => p.category === filter);

  const filters = [
    { id: "toate", label: "Toate" },
    { id: "rezidential", label: "Rezidențial" },
    { id: "industrial", label: "Industrial" },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <main className="isolate">
        {/* Hero Section v2 */}
        <section className="relative pt-32 pb-20 bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-gray-100 dark:border-gray-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 dark:from-amber-500/10 to-transparent" />
            <div
              className="absolute inset-0 opacity-10 dark:opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white leading-tight mb-8 tracking-tighter uppercase italic">
                Proiectele{" "}
                <span className="text-amber-500 not-italic">Noastre</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Soluții energetice sustenabile implementate cu precizie. De la
                case smart la parcuri industriale, transformăm soarele în
                economie.
              </p>

              {/* Category Filter - Stacked mobile, row desktop */}
              <div className="flex flex-wrap justify-center gap-3 mt-12">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border-2 ${
                      filter === f.id
                        ? "bg-amber-500 border-amber-500 text-white shadow-2xl shadow-amber-500/40 scale-105"
                        : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-amber-500/50 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects List - One under the other as requested */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-24">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-900/40 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800/50 hover:border-amber-500/30 transition-all duration-500 group"
                  >
                    {/* Image Container */}
                    <Link
                      href={`/proiecte/${project.id}`}
                      className="lg:w-[45%] relative aspect-video lg:aspect-auto overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover pt-12 sm:pt-10 transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-2 sm:top-16 left-6 z-10">
                        <span className="px-5 py-2 bg-amber-500 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="bg-white text-gray-950 px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          Vezi Detalii
                        </span>
                      </div>
                    </Link>

                    {/* Content Container */}
                    <div className="lg:w-[55%] p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-amber-500 mb-6">
                          <MapPin className="h-5 w-5" />
                          <span className="text-sm font-black uppercase tracking-widest">
                            {project.location}
                          </span>
                        </div>

                        <Link
                          href={`/proiecte/${project.id}`}
                          className="block text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-amber-500 transition-colors cursor-pointer"
                        >
                          {project.title}
                        </Link>

                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed italic">
                          "{project.description}"
                        </p>

                        {/* Tech Specs Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                          <div className="flex items-center sm:items-start gap-4 p-4 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                              <Zap className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                                Putere
                              </div>
                              <div className="font-bold text-gray-900 dark:text-white">
                                {project.stats.power}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center sm:items-start gap-4 p-4 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                              <Layers className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                                Panouri
                              </div>
                              <div className="font-bold text-gray-900 dark:text-white truncate">
                                {project.stats.panels.split(" ")[0]}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center sm:items-start gap-4 p-4 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                              <Cpu className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                                Invertor
                              </div>
                              <div className="font-bold text-gray-900 dark:text-white truncate">
                                {project.stats.inverter.split(" ")[0]}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center sm:items-start gap-4 p-4 rounded-3xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                              <Battery className="h-5 w-5 text-amber-500" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                                Baterie
                              </div>
                              <div className="font-bold text-gray-900 dark:text-white truncate">
                                {project.stats.battery}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
                        <Link
                          href={`/proiecte/${project.id}`}
                          className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 bg-amber-500 sm:bg-transparent text-white sm:text-amber-500 px-8 py-4 sm:p-0 rounded-2xl sm:rounded-none font-black uppercase tracking-widest text-sm hover:gap-5 transition-all shadow-xl shadow-amber-500/20 sm:shadow-none"
                        >
                          Cere detalii proiect{" "}
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                        <div className="flex gap-1">
                          <div className="w-8 h-1 bg-amber-500 rounded-full" />
                          <div className="w-2 h-1 bg-gray-200 dark:bg-gray-800 rounded-full" />
                          <div className="w-2 h-1 bg-gray-200 dark:bg-gray-800 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-20">
                  <p className="text-2xl text-gray-500 font-bold">
                    Nu am găsit proiecte în această categorie.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact CTA Section v2 - Stacked for better readability */}
        <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                  Vrei un sistem{" "}
                  <span className="text-amber-500 not-italic">Asemănător</span>?
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Fiecare proiect este unic. Contactează-ne astăzi pentru o
                  evaluare gratuită și află cum poți deveni independent
                  energetic.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-amber-500/20"
                  >
                    Vreau Ofertă Gratuită <ArrowRight className="h-6 w-6" />
                  </Link>
                  <Link
                    href={`tel:${CONTACT_INFO.phoneFormatted}`}
                    className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all"
                  >
                    Sună Acum <Phone className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Info Cards - Stacked on desktop as per user request */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                      <MapPin className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">
                      Sediul nostru
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {CONTACT_INFO.address}
                  </p>
                  <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-sm">
                    <Clock className="h-5 w-5" />
                    <span>
                      {CONTACT_INFO.workingDays}: {CONTACT_INFO.workingHours}
                    </span>
                  </div>
                </div>

                <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                      <Mail className="h-7 w-7 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">
                      Email & Support
                    </h3>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {CONTACT_INFO.email}
                  </p>
                  <div className="flex items-center gap-3 text-amber-500 font-bold uppercase tracking-widest text-sm">
                    <Phone className="h-5 w-5" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
