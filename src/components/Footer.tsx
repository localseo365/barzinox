import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import CookieBanner from './CookieBanner';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BARZINOX</h3>
            <p className="text-gray-400">
              Servicio profesional de vaciado de pisos en Barcelona y área metropolitana.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Vaciado de Pisos</li>
              <li>Vaciado de Locales</li>
              <li>Vaciado de Naves</li>
              <li>Servicio Express</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Zonas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Barcelona Ciudad</li>
              <li>Área Metropolitana</li>
              <li>Vallès Occidental</li>
              <li>Baix Llobregat</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>603 38 00 04</li>
              <li>info@barzinox.vercel.app</li>
              <li>Barcelona, España</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BARZINOX. Todos los derechos reservados.</p>
        </div>
      </div>
      <CookieBanner />
    </footer>
  );
}