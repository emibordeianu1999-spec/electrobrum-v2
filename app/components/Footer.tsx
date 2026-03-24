import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-400 py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white"
            >
              ELECTROBRUM
            </Link>
            <p className="text-sm leading-relaxed">
              Partenerul tău tehnic care proiectează, monitorizează și
              optimizează sisteme fotovoltaice pentru un viitor sustenabil.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Companie
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/despre-noi"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link
                  href="/servicii"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Servicii
                </Link>
              </li>
              <li>
                <Link
                  href="/proiecte"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Proiecte
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Suport
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+40 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>office@electrobrum.ro</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-1" />
                <span>București, România</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Electrobrum. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
