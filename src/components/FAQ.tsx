import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Necesito saber programar?',
      answer: 'No. El bootcamp está diseñado para personas sin experiencia previa en programación. Aprenderás a usar IA para escribir código por ti.',
    },
    {
      question: '¿Cuál es la política de reembolso?',
      answer: 'Si no estás satisfecho después de la primera sesión, te devolvemos el 100% de tu inversión sin preguntas.',
    },
    {
      question: '¿Cuánto tiempo debo dedicar por semana?',
      answer: 'Las sesiones en vivo son de 75 minutos (3 veces por semana). Recomendamos dedicar 1-2 horas adicionales para práctica.',
    },
    {
      question: '¿Las sesiones son en vivo o grabadas?',
      answer: 'Las sesiones son 100% en vivo con interacción directa. Todas las sesiones quedan grabadas para que puedas repasarlas cuando quieras.',
    },
  ];

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Preguntas frecuentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden"
            >
              <button
                className="w-full p-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-foreground pr-4 text-sm">{faq.question}</h3>
                <ChevronDown 
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-3 text-sm">¿Respondimos tus dudas?</p>
          <a href="#pricing" className="btn-primary-gradient inline-block text-sm px-6 py-3">
            Sí, quiero unirme
          </a>
          <p className="mt-3">
            <a href="mailto:hola@frutero.club" className="text-primary hover:underline text-sm">
              ¿Otra pregunta? → hola@frutero.club
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
