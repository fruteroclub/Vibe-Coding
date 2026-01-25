import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="faq" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {t('faq.title')}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden"
            >
              <button
                type="button"
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
          <p className="text-muted-foreground mb-3 text-sm">{t('faq.cta.answered')}</p>
          <a href="#pricing" className="btn-primary-gradient inline-block text-sm px-6 py-3">
            {t('faq.cta.join')}
          </a>
          <p className="mt-3">
            <a href="mailto:hola@frutero.club" className="text-primary hover:underline text-sm">
              {t('faq.cta.other')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
