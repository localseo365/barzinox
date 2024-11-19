import React from 'react';
import { PhoneCall, ClipboardCheck, Truck, CheckSquare } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Contacto inicial',
    description: 'Llámenos o solicite presupuesto online. Responderemos en menos de 2 horas.'
  },
  {
    icon: ClipboardCheck,
    title: 'Presupuesto gratuito',
    description: 'Visitamos el espacio y preparamos un presupuesto detallado sin compromiso.'
  },
  {
    icon: Truck,
    title: 'Ejecución del servicio',
    description: 'Realizamos el vaciado de forma rápida y profesional en la fecha acordada.'
  },
  {
    icon: CheckSquare,
    title: 'Certificación',
    description: 'Entregamos el certificado de gestión de residuos y garantía del servicio.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proceso de trabajo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y eficiente para garantizar su satisfacción
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}