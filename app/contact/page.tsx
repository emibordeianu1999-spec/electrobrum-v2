"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "../config/constants";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-50/50 to-white dark:from-gray-950 dark:to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tighter">
              Contactează <span className="text-amber-500">Echipa</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Echipa noastră îți oferă suport complet în alegerea și montarea
              sistemelor fotovoltaice. Completează formularul și te vom contacta
              rapid.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">
                  Trimite-ne un mesaj
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-bold text-gray-500 uppercase"
                      >
                        Nume Complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Ex: Popescu Ion"
                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-bold text-gray-500 uppercase"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Ex: nume@exemplu.ro"
                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-bold text-gray-500 uppercase"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Ex: 07xx xxx xxx"
                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-bold text-gray-500 uppercase"
                      >
                        Subiect
                      </label>
                      <select
                        id="subject"
                        className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all appearance-none"
                      >
                        <option>Cerere Ofertă</option>
                        <option>Audit Sistem Existent</option>
                        <option>Suport Tehnic</option>
                        <option>Parteneriate</option>
                        <option>Altele</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-bold text-gray-500 uppercase"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Cum te putem ajuta?"
                      className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-amber-500/20"
                  >
                    Trimite Mesajul <Send className="h-8 w-8" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Details */}
            <div className="w-[99%] sm:w-[93%] mx-auto lg:w-1/3 space-y-8">
              <div className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <h3 className="text-xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">
                  Informații Contact
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="pt-1 text-xs font-bold text-gray-400 uppercase">
                        Sună-ne
                      </div>
                      <div className="pt-1 text-md sm:text-lg font-bold text-gray-900 dark:text-white">
                        {CONTACT_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="pt-1 text-xs font-bold text-gray-400 uppercase">
                        Email
                      </div>
                      <div className="pt-1 text-md sm:text-lg font-bold text-gray-900 dark:text-white break-all">
                        {CONTACT_INFO.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="pt-1 text-xs font-bold text-gray-400 uppercase">
                        Locație
                      </div>
                      <div className="pt-1 text-md sm:text-lg font-bold text-gray-900 dark:text-white">
                        {CONTACT_INFO.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <h3 className="text-xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">
                  Program Lucru
                </h3>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {CONTACT_INFO.workingDays}
                    </div>
                    <div className="text-sm text-gray-500">
                      {CONTACT_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="p-8 rounded-3xl bg-amber-500 text-white shadow-xl shadow-amber-500/20">
                <MessageSquare className="h-10 w-10 mb-6 opacity-50" />
                <h3 className="text-2xl font-black mb-4 tracking-tighter leading-tight">
                  Suport Tehnic Non-Stop pentru clienți
                </h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-6">
                  Clienții Electrobrum beneficiază de monitorizare activă și
                  suport prioritar.
                </p>
                <Link
                  href="/suport"
                  className="inline-flex items-center gap-2 font-bold text-white border-b-2 border-white/30 hover:border-white transition-all"
                >
                  Acces Portal Suport <ArrowRight className="h-4 w-4" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Map Placeholder */}
      <section className="h-[400px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-amber-500 mx-auto mb-4 animate-bounce" />
            <div className="text-xl font-black text-gray-400 uppercase tracking-widest">
              Harta Locație
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query={{ $location['coords'][0] }},{{ $location['coords'][1] }}"
          target="_blank"
          className="mt-4 inline-flex items-center text-sm font-medium text-secondary hover:text-accent transition-colors duration-300"
        >
          Vezi pe Google Maps
          <svg
            className="w-4 h-4 ml-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </section>
    </div>
  );
}
