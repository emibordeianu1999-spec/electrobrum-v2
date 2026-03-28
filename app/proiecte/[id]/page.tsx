"use client";

import { useState, use } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Zap,
  Cpu,
  Battery,
  Layers,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";
import { CONTACT_INFO } from "../../config/constants";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === parseInt(resolvedParams.id));
  const [activeTab, setActiveTab] = useState("detalii");

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen pt-20">
      <main className="isolate">
        {/* Project Header / Hero */}
        <section className="relative py-16 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link 
              href="/proiecte" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 font-bold uppercase tracking-widest text-xs mb-8 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Înapoi la Portofoliu
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 text-amber-500 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-black uppercase tracking-widest">{project.location}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase italic">
                  {project.title}
                </h1>
              </div>
              <div className="flex gap-4">
                <span className="px-6 py-3 bg-amber-500 text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-amber-500/20">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Perspectives Tabs */}
        <section className="sticky top-20 z-30 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto no-scrollbar">
              {[
                { id: "detalii", label: "Detalii Proiect" },
                { id: "galerie", label: "Galerie Foto" },
                { id: "specificatii", label: "Specificații Tehnice" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-6 text-sm font-black uppercase tracking-widest transition-all border-b-4 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-amber-500 text-amber-500 bg-amber-500/5"
                      : "border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {activeTab === "detalii" && (
              <div className="max-w-5xl mx-auto">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-gray-100 dark:border-gray-800">
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 uppercase italic tracking-tighter">Povestea Proiectului</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 italic">
                      "{project.fullDescription}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-10 rounded-[2rem] bg-amber-500/5 border border-amber-500/10">
                        <h3 className="font-black text-amber-500 uppercase tracking-widest text-sm mb-4">Provocarea</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Optimizarea spațiului disponibil pe acoperiș pentru a atinge puterea instalată dorită, menținând în același timp estetica locuinței și eficiența maximă.</p>
                      </div>
                      <div className="p-10 rounded-[2rem] bg-green-500/5 border border-green-500/10">
                        <h3 className="font-black text-green-500 uppercase tracking-widest text-sm mb-4">Rezultatul</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">O reducere de peste 85% a facturilor de energie electrică și o creștere semnificativă a valorii proprietății pe piața imobiliară.</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="sticky top-40 p-10 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                      <h3 className="text-xl font-black mb-8 uppercase italic tracking-tight">Rezumat Tehnic</h3>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                            <Zap className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Putere</div>
                            <div className="font-bold text-gray-900 dark:text-white">{project.stats.power}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                            <Layers className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Panouri</div>
                            <div className="font-bold text-gray-900 dark:text-white">{project.stats.panels}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                            <Cpu className="h-6 w-6 text-amber-500" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Invertor</div>
                            <div className="font-bold text-gray-900 dark:text-white">{project.stats.inverter}</div>
                          </div>
                        </div>
                      </div>
                      <Link href="/contact" className="mt-10 w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20">
                        Vreau Ofertă <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "galerie" && (
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 group cursor-zoom-in">
                      <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gray-950/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specificatii" && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group hover:border-amber-500/30 transition-colors">
                      <span className="text-xs font-black text-gray-400 group-hover:text-amber-500 uppercase tracking-[0.2em] transition-colors">
                        {key === "power" ? "Putere Instalată" : 
                         key === "panels" ? "Tip Panouri" : 
                         key === "inverter" ? "Model Invertor" : 
                         key === "battery" ? "Stocare Energie" : 
                         key === "orientation" ? "Orientare" : 
                         key === "slope" ? "Înclinație" : 
                         key === "mounting" ? "Tip Montaj" : 
                         key === "monitoring" ? "Monitorizare" : key}
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white text-right text-lg">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-16 p-12 rounded-[3rem] bg-gray-950 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-[length:30px_30px]" />
                  <div className="relative z-10">
                    <Zap className="h-12 w-12 text-amber-500 mx-auto mb-6 animate-pulse" />
                    <h3 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter italic">Performanță Garantată</h3>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                      Fiecare componentă este selectată pentru a asigura cel mai bun randament pe termen lung și o durată de viață de peste 25 de ani.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-amber-500/40">
                      Vreau un sistem similar <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Similar Projects or CTA */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                Pregătit să <span className="text-amber-500 not-italic">Începem</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Fie că este vorba de un sistem rezidențial sau industrial, suntem aici să îți oferim 
                cea mai bună consultanță și execuție din piață.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                <div className="flex items-center gap-5 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Phone className="h-7 w-7 text-amber-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Sună-ne</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{CONTACT_INFO.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Mail className="h-7 w-7 text-amber-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white truncate max-w-[180px] md:max-w-none">{CONTACT_INFO.email}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-amber-500/20"
                >
                  Solicită Ofertă Gratuită <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center gap-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-amber-500/50 text-gray-900 dark:text-white px-12 py-6 rounded-2xl font-black text-xl transition-all"
                >
                  Calculează ROI
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
