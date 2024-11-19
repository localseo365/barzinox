import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María Valls',
    role: 'Propietaria',
    content: 'Excelente servicio, muy profesionales y rápidos. Dejaron el piso impecable y listo para alquilar.',
    rating: 5
  },
  {
    name: 'Carles Rodríguez',
    role: 'Administrador de Fincas',
    content: 'Llevamos años trabajando con BARZINOX y siempre responden con eficacia y profesionalidad.',
    rating: 5
  },
  {
    name: 'Anna Coll',
    role: 'Inmobiliaria',
    content: 'Servicio muy recomendable. Cumplen los plazos y son muy cuidadosos con el trabajo.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}