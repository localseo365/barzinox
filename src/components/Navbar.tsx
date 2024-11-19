import React, { useState } from 'react';
import { Phone, Menu, X, Recycle } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2">
            <Recycle className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">BARZINOX</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
            <a href="#proceso" className="text-gray-700 hover:text-blue-600">Proceso</a>
            <a href="#zonas" className="text-gray-700 hover:text-blue-600">Zonas</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
            <a
              href="https://wa.link/tkat2u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-semibold">603 38 00 04</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white shadow-lg z-50`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <a href="#servicios" className="block text-gray-700 hover:text-blue-600 py-2">Servicios</a>
          <a href="#proceso" className="block text-gray-700 hover:text-blue-600 py-2">Proceso</a>
          <a href="#zonas" className="block text-gray-700 hover:text-blue-600 py-2">Zonas</a>
          <a href="#contacto" className="block text-gray-700 hover:text-blue-600 py-2">Contacto</a>
          <a
            href="https://wa.link/tkat2u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 py-2 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-semibold">603 38 00 04</span>
          </a>
        </div>
      </div>
    </nav>
  );
}