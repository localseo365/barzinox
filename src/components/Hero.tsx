import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh]">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://sos-de-fra-1.exo.io/vaciamos/img/index.jpg"
          alt="Vaciado de pisos en Barcelona"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicio profesional de vaciado de pisos en Barcelona
            </h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
                <span>Servicio rápido y eficiente en 24-48h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
                <span>Presupuesto sin compromiso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
                <span>Certificado de gestión de residuos</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.link/tkat2u"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
              >
                Solicitar Presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://wa.link/tkat2u"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
              alt="Vaciado de pisos profesional"
              className="rounded-lg shadow-xl"
              width="800"
              height="600"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}