import React from 'react';
import { Home, Building2, Warehouse, Briefcase, Trash2, Recycle } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Vaciado de pisos en Barcelona',
    description: 'Si necesitas vaciar un piso en Barcelona, en BARZINOX somos tu solución rápida y profesional. Nos encargamos de retirar muebles, electrodomésticos, objetos voluminosos y cualquier otro elemento innecesario de tu hogar. Servicio Express en menos de 24 horas, gestión responsable de residuos y presupuestos personalizados.'
  },
  {
    icon: Building2,
    title: 'Vaciado de oficinas en Barcelona',
    description: '¿Te mudas o renuevas tu oficina? Nuestro servicio de vaciado de oficinas está diseñado para empresas que necesitan una gestión ágil y eficiente. Retiro de equipos, horario flexible y cumplimiento legal garantizado.'
  },
  {
    icon: Warehouse,
    title: 'Vaciado de locales comerciales',
    description: 'Ayudamos a propietarios y negocios a vaciar locales comerciales, ya sea por cierre, mudanza o reforma. Rapidez garantizada para todo tipo de locales, priorizando la reutilización de materiales para reducir el impacto ambiental.'
  },
  {
    icon: Briefcase,
    title: 'Retirada de muebles y electrodomésticos',
    description: '¿Quieres deshacerte de muebles viejos o electrodomésticos inservibles? Nosotros nos encargamos de retirarlos y darles una segunda vida. Sin esfuerzo para ti, con recolección segura y gestión ecológica garantizada.'
  },
  {
    icon: Trash2,
    title: 'Limpieza total',
    description: 'Limpieza profunda después del vaciado dejando el espacio listo para su nuevo uso. Servicio integral que garantiza un acabado profesional y minucioso.'
  },
  {
    icon: Recycle,
    title: 'Gestión de residuos y reciclaje',
    description: 'Nos preocupamos por el medio ambiente. Todos los residuos son procesados de manera sostenible, con separación de materiales, colaboración con puntos verdes locales y certificación de servicio comprometido con la sostenibilidad.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Servicios de vaciado ofrecidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todo tipo de vaciados en Barcelona y área metropolitana
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}