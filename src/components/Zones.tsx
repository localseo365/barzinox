import React from 'react';
import { MapPin, Navigation, Clock, Users } from 'lucide-react';

const areas = [
  {
    title: 'Barcelona Centro',
    description: 'Barrios como El Raval, Gótico, y el Eixample. Ideal para vaciado de pisos antiguos, oficinas y locales comerciales.',
  },
  {
    title: 'Zona Alta',
    description: 'Sarrià-Sant Gervasi y Pedralbes. Atención especial a residencias de gran tamaño.',
  },
  {
    title: 'Litoral y Zona Portuaria',
    description: 'Barceloneta, Poblenou y Diagonal Mar. Adaptados para vaciados rápidos en propiedades cerca del mar.',
  },
  {
    title: 'Áreas Metropolitanas',
    description: 'L\'Hospitalet, Badalona, Cornellà, Sant Adrià, y más. Servicios de vaciado para propiedades residenciales y comerciales en municipios aledaños.',
  },
  {
    title: 'Zonas Periféricas',
    description: 'Gràcia, Horta-Guinardó y Nou Barris. Respuesta eficiente en áreas residenciales.',
  },
];

const benefits = [
  {
    icon: MapPin,
    title: 'Conocimiento del área',
    description: 'Sabemos cómo movernos eficientemente en todas las zonas, desde calles estrechas del Gótico hasta grandes avenidas como la Diagonal.',
  },
  {
    icon: Clock,
    title: 'Rapidez garantizada',
    description: 'Gracias a nuestra proximidad, podemos ofrecerte tiempos de respuesta más cortos.',
  },
  {
    icon: Users,
    title: 'Atención personalizada',
    description: 'Entendemos las necesidades específicas de los clientes de Barcelona.',
  },
];

export default function Zones() {
  return (
    <section id="zonas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cobertura integral en toda Barcelona y alrededores
          </h2>
          <h3 className="text-xl text-gray-600 mb-6">
            Llegamos donde nos necesites
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En BARZINOX, nos enorgullece ofrecer un servicio de vaciado de pisos en Barcelona que abarca todas las zonas de la ciudad y sus alrededores. No importa si estás en el corazón de Barcelona o en las áreas más periféricas, nuestro equipo está preparado para llegar hasta ti con rapidez y eficacia.
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Áreas de cobertura principales
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <h5 className="text-xl font-semibold mb-3">{area.title}</h5>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">
            ¿No ves tu barrio en la lista?
          </h4>
          <p className="text-lg text-gray-600 mb-8">
            Si no encuentras tu barrio o municipio mencionado aquí, no te preocupes. Contáctanos ahora y te confirmaremos nuestra disponibilidad para atenderte donde estés.
          </p>
          <div className="bg-gray-900 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Navigation className="w-full h-full text-white" />
            </div>
            <p className="text-white text-lg relative z-10">
              Nuestro mapa de servicio interactivo muestra las principales zonas donde operamos en Barcelona y alrededores. Utilízalo para comprobar si tu área está cubierta y solicita tu presupuesto personalizado.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Ventajas de contratar un servicio local
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h5 className="text-xl font-semibold mb-3">{benefit.title}</h5>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}