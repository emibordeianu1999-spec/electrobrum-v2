import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Electrobrum</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/despre-noi" className="text-gray-600 hover:text-blue-600">Despre noi</Link>
          <Link href="/servicii" className="text-gray-600 hover:text-blue-600">Servicii</Link>
          <Link href="/verificare-rac" className="text-gray-600 hover:text-blue-600">Verificare RAC</Link>
          <Link href="/intrebari-frecvente" className="text-gray-600 hover:text-blue-600">Intrebari frecvente</Link>
        </nav>
        <Link href="/contact" className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </Link>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;