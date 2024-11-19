import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto cuesta el vaciado de un piso en Barcelona?',
    answer: 'El precio del vaciado de pisos en Barcelona depende de varios factores, como el tamaño del inmueble, la cantidad de objetos a retirar y la complejidad del trabajo. En BARZINOX, ofrecemos presupuestos personalizados y sin compromiso para garantizar un servicio ajustado a tus necesidades. Contáctanos ahora y te daremos un precio claro y competitivo.'
  },
  {
    question: '¿Qué incluye el servicio de vaciado de pisos?',
    answer: 'Nuestro servicio de vaciado de pisos incluye:\n\n- La retirada de muebles, electrodomésticos, enseres personales y basura.\n- La limpieza básica del espacio para dejarlo listo para su próximo uso.\n- La gestión responsable de los residuos, asegurando que todo sea reciclado o eliminado según la normativa vigente en Barcelona.\n\nEste servicio está diseñado para proporcionarte tranquilidad y comodidad, dejándolo todo en manos de profesionales.'
  },
  {
    question: '¿Cómo gestionan los residuos?',
    answer: 'En BARZINOX, somos conscientes de la importancia del reciclaje y la sostenibilidad. Por eso:\n\n- Clasificamos los materiales según su tipo: madera, metal, plástico, vidrio y residuos electrónicos.\n- Colaboramos con centros de reciclaje certificados en Barcelona para minimizar el impacto ambiental.\n- Garantizamos el cumplimiento de todas las normativas locales sobre gestión de residuos.'
  },
  {
    question: '¿En cuánto tiempo realizan el servicio?',
    answer: 'Realizamos el vaciado de pisos en menos de 24 horas tras la confirmación del servicio. Nuestro equipo profesional está capacitado para actuar rápidamente, incluso en situaciones de urgencia. Llámanos y agenda tu vaciado hoy mismo.'
  },
  {
    question: '¿Pueden trabajar fines de semana?',
    answer: '¡Sí! Entendemos que muchas veces necesitas flexibilidad. Por eso, ofrecemos servicios de vaciado durante los fines de semana y festivos, sin costes adicionales. Nuestro objetivo es adaptarnos a tu horario para que el proceso sea lo más sencillo posible.'
  },
  {
    question: '¿Qué pasa si hay objetos de valor sentimental o histórico?',
    answer: 'En BARZINOX tratamos todos los objetos con respeto. Si encuentras objetos de valor sentimental o histórico, nuestro equipo te ayudará a clasificarlos para que decidas qué hacer con ellos. Nos aseguramos de que nada importante sea eliminado sin tu aprobación.'
  },
  {
    question: '¿Ofrecen servicios adicionales como limpieza profunda o reparaciones?',
    answer: 'Aunque nuestro enfoque principal es el vaciado de pisos, podemos recomendarte servicios complementarios de limpieza profesional o pequeñas reparaciones si lo necesitas. Pregúntanos durante el proceso y estaremos encantados de ayudarte.'
  },
  {
    question: '¿Puedo solicitar un vaciado parcial?',
    answer: '¡Por supuesto! Si solo necesitas vaciar una habitación, un trastero o un área específica del piso, adaptaremos nuestro servicio a tus necesidades. Contacta con nosotros y dinos qué necesitas, estaremos encantados de ayudarte.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes (FAQs)
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios de vaciado de pisos
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}