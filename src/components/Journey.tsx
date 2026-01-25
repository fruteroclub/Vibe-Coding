import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Journey = () => {
  const { t } = useTranslation();
  const [openSession, setOpenSession] = useState<number | null>(0);

  const sessions = t('journey.sessions', { returnObjects: true }) as Array<{
    emoji: string;
    title: string;
    session: number;
    aprenderas: string[];
    construiras: string[];
    resultado: string;
  }>;

  return (
    <section id="viaje" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t('journey.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('journey.subtitle')}
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            {t('journey.description')}
          </p>
        </div>

        <div className="space-y-3">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                openSession === index ? 'border-primary/30' : ''
              }`}
            >
              <button
                type="button"
                className="w-full p-4 flex items-center justify-between"
                onClick={() => setOpenSession(openSession === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{session.emoji}</span>
                  <div className="text-left">
                    <span className="text-foreground font-semibold">
                      {t('journey.labels.session')} {session.session}: {session.title}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{t('journey.duration')}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openSession === index ? 'rotate-180' : ''
                  }`} />
                </div>
              </button>
              
              {openSession === index && (
                <div className="px-4 pb-4 pt-2 border-t border-border/50">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">{t('journey.labels.aprenderas')}</h5>
                      <ul className="space-y-2">
                        {session.aprenderas.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">{t('journey.labels.construiras')}</h5>
                      <ul className="space-y-2">
                        {session.construiras.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm">
                      <span className="text-foreground font-medium">{t('journey.labels.resultado')}</span>
                      <span className="text-muted-foreground">{session.resultado}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
