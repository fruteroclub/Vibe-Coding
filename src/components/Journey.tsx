import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Journey = () => {
  const [openSession, setOpenSession] = useState<number | null>(0);

  const sessions = [
    { 
      emoji: '🥚', 
      title: 'Nace tu Regenmon', 
      session: 1,
      aprenderas: [
        'Cómo funciona prompt→código con v0',
        'Qué son componentes y cómo se organizan',
        'Hacer que la info persista (localStorage)'
      ],
      construiras: [
        'Display de tu Regenmon (visual Tamagotchi)',
        'Modal de creación (nombre + tipo)',
        'Sistema de stats con barras visuales'
      ],
      resultado: 'App en internet donde creas tu Regenmon y regresas sin perder progreso.'
    },
    { 
      emoji: '💬', 
      title: 'Tu Regenmon Habla', 
      session: 2,
      aprenderas: [
        'Cómo funcionan los LLMs (mental model)',
        'Qué es una API y cómo conectarte',
        'Crear "personalidad" con prompts'
      ],
      construiras: [
        'Interfaz de chat completa',
        'Integración con Claude API',
        'Stats afectan tono de respuestas'
      ],
      resultado: 'Tu Regenmon conversa. Si está feliz, es entusiasta. Si tiene baja energía, responde cansado.'
    },
    { 
      emoji: '💛', 
      title: 'Tu Regenmon Tiene Wallet', 
      session: 3,
      aprenderas: [
        'Qué es una wallet (identidad digital)',
        'Tokens como recursos en apps',
        'Leer balances y transacciones simples'
      ],
      construiras: [
        'Login con wallet (Privy)',
        'Balance de tokens $FRUTA',
        'Botón "Alimentar" que gasta tokens'
      ],
      resultado: 'Tu Regenmon tiene identidad blockchain. Puedes alimentarlo gastando tokens.'
    },
    { 
      emoji: '🌟', 
      title: 'Tu Regenmon Evoluciona', 
      session: 4,
      aprenderas: [
        'Cómo la IA "ve" imágenes',
        'Evaluar contenido con APIs multimodales',
        'Sistemas de progresión y recompensas'
      ],
      construiras: [
        'Upload de imágenes (drag-and-drop)',
        'Claude Vision para evaluar fotos',
        '3 etapas de evolución'
      ],
      resultado: 'Subes fotos de acciones positivas. La IA las evalúa, te da puntos. Tu Regenmon evoluciona.'
    },
    { 
      emoji: '👥', 
      title: 'Tu Regenmon Encuentra Amigos', 
      session: 5,
      aprenderas: [
        'Bases de datos relacionales básicas',
        'Queries para leer data de otros',
        'Renderizar listas dinámicas'
      ],
      construiras: [
        'Galería pública de Regenmons',
        'Perfiles de otros usuarios',
        'Sistema de "likes" o interacciones'
      ],
      resultado: 'Tu app es social. Ves otros Regenmons, interactúas, compites en rankings.'
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Tu viaje en 2 semanas
          </h2>
          <p className="text-muted-foreground">
            5 sesiones · 5 mini-entregas · 1 proyecto completo
          </p>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
            Cada sesión construye sobre la anterior. Al final de cada sesión, tendrás algo nuevo funcionando. No hay teoría sin práctica.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`glass-card overflow-hidden transition-all duration-300 ${
                openSession === index ? 'border-primary/30' : ''
              }`}
            >
              <button
                className="w-full p-4 flex items-center justify-between"
                onClick={() => setOpenSession(openSession === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{session.emoji}</span>
                  <div className="text-left">
                    <span className="text-foreground font-semibold">
                      Sesión {session.session}: {session.title}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">75 minutos</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openSession === index ? 'rotate-180' : ''
                  }`} />
                </div>
              </button>
              
              {openSession === index && (
                <div className="px-4 pb-4 pt-2 border-t border-border/50">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Aprenderás:</h5>
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
                      <h5 className="text-sm font-semibold text-foreground mb-3">Construirás:</h5>
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
                      <span className="text-foreground font-medium">Resultado: </span>
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
