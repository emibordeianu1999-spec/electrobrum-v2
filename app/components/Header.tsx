"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { CONTACT_INFO } from "../config/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Proiecte", href: "/proiecte" },
    { name: "Calculator", href: "/calculator" },
    { name: "Despre noi", href: "/despre-noi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar (Only visible before scroll) */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-gray-200 dark:border-gray-800 pb-2 mb-2">
          <div className="container mx-auto px-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex space-x-6">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" /> {CONTACT_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" /> {CONTACT_INFO.email}
              </span>
            </div>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {CONTACT_INFO.address}
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tighter text-amber-500 dark:text-amber-400">
            ELECTROBRUM
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/25"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-white dark:bg-gray-950 z-[9999] lg:hidden flex flex-col transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Mobile Menu Top Bar */}
        <div className="flex justify-between items-center px-4 py-6 border-b border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
          <div className="text-2xl font-black tracking-tighter text-amber-500">
            ELECTROBRUM
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-900 dark:text-white"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col bg-white dark:bg-gray-950">
          <div className="flex flex-col space-y-6 text-2xl font-black uppercase tracking-tighter">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="pb-4 border-b border-gray-50 dark:border-gray-900 text-gray-900 dark:text-white active:text-amber-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-amber-500 text-white text-center py-5 rounded-2xl shadow-xl font-black uppercase tracking-widest mt-4"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Footer Info */}
          <div className="mt-auto pb-12 space-y-6 pt-12">
            <div className="flex flex-col gap-6">
              <a
                href={`tel:${CONTACT_INFO.phoneFormatted}`}
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-bold text-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-bold text-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-amber-500" />
                </div>
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
