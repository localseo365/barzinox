import React from 'react';
import { Clock, Calculator, Recycle, Shield, Headphones, History, Award } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Rapidez garantizada',
    description: 'Nos comprometemos a realizar el vaciado de tu piso en menos de 24 horas, asegurando que el espacio quede limpio y listo para su próximo uso. Nuestro equipo está disponible para atender urgencias y adaptarse a tu horario.'
  },
  {
    icon: Calculator,
    title: 'Presupuestos transparentes y sin compromiso',
    description: 'Obtén un presupuesto personalizado y detallado en cuestión de minutos. Sin sorpresas ni cargos ocultos. En BARZINOX, la claridad y la honestidad son nuestra prioridad.'
  },
  {
    icon: Recycle,
    title: 'Gestión ecológica de residuos',
    description: 'Somos una empresa comprometida con el medio ambiente. Reciclamos y gestionamos los residuos de forma responsable, colaborando con centros de reciclaje oficiales en Barcelona. Tu tranquilidad es nuestra misión.'
  },
  {
    icon: Shield,
    title: 'Equipo profesional y asegurado',
    description: 'Contamos con un equipo altamente capacitado y asegurado para garantizar la seguridad y la calidad en cada servicio. Nuestros profesionales tienen experiencia en todo tipo de vaciados, desde pisos pequeños hasta grandes oficinas.'
  },
  {
    icon: Headphones,
    title: 'Atención personalizada al cliente',
    description: 'Cada cliente es único, y en BARZINOX nos aseguramos de entender tus necesidades específicas. Desde el primer contacto hasta la finalización del trabajo, recibirás un trato amable, profesional y eficiente.'
  },
  {
    icon: History,
    title: 'Más de 20 años de experiencia en Barcelona',
    description: 'Con años de experiencia en el sector, hemos ayudado a cientos de clientes a resolver sus problemas de vaciado de pisos de manera rápida y económica. Somos la empresa local en la que puedes confiar.'
  },
  {
    icon: Award,
    title: 'Satisfacción garantizada',
    description: 'Nuestro compromiso es tu satisfacción. Ofrecemos garantías en todos nuestros servicios para que tengas la tranquilidad de saber que estás en buenas manos.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir BARZINOX para el vaciado de pisos en Barcelona?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En BARZINOX, sabemos lo importante que es contar con un servicio rápido, eficiente y confiable para el vaciado de pisos en Barcelona. Por eso, ofrecemos soluciones personalizadas y profesionales adaptadas a tus necesidades. ¡Descubre por qué somos tu mejor opción!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{reason.title}</h3>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}