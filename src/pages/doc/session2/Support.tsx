import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Brain,
  Database,
  MessageCircle,
  BarChart3,
  X,
  ChevronRight
} from 'lucide-react';

interface ResourceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  sections: {
    title: string;
    items: string[];
  }[];
}

const Session2Support = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'integracion-ia',
      title: 'Integración con modelos de lenguaje (IA que conversa)',
      icon: <MessageSquare size={20} />,
      description: 'Tu Regenmon aprende a comunicarse',
      color: 'blue',
      sections: [
        {
          title: '¿Qué significa que tu Regenmon "hable"?',
          items: [
            'Hasta ahora, tu Regenmon existe visualmente.',
            'En esta sesión, empieza a comunicarse.',
            'Que "hable" no significa que tenga voz, sino que:',
            'Responde mensajes',
            'Mantiene una conversación',
            'Tiene una forma propia de expresarse',
            'Aquí el Regenmon deja de ser solo una mascota visual y empieza a sentirse como un personaje.'
          ]
        },
        {
          title: '¿Cómo funcionan las APIs de inteligencia artificial?',
          items: [
            'Una API es simplemente:',
            'Una forma de pedirle algo a otro sistema y recibir una respuesta.',
            'En este caso:',
            'Tu app hace una pregunta',
            'La IA responde con texto',
            'Es parecido a:',
            'Mandar un mensaje y esperar respuesta, solo que ocurre en segundos.',
            'Tu app no "piensa sola", consulta a la IA cuando lo necesita.'
          ]
        },
        {
          title: '¿Qué es un modelo de lenguaje (LLM)?',
          items: [
            'Un modelo de lenguaje es una IA entrenada para:',
            'Entender texto',
            'Responder de forma natural',
            'Mantener una conversación coherente',
            'No memoriza respuestas fijas.',
            'Analiza el contexto y genera respuestas nuevas cada vez.',
            'Por eso, el Regenmon puede:',
            'Responder distinto',
            'Adaptarse al tono',
            'Sentirse más "vivo"'
          ]
        },
        {
          title: '¿Qué es una API route?',
          items: [
            'Una API route es un pequeño punto de comunicación dentro de tu app.',
            'Sirve para:',
            'Enviar mensajes a la IA',
            'Recibir la respuesta',
            'Proteger información sensible',
            'El usuario no la ve, pero es el puente entre:',
            'Tu app ↔ la inteligencia artificial'
          ]
        },
        {
          title: '¿Qué son las API keys y por qué se cuidan?',
          items: [
            'Las API keys son como llaves privadas.',
            'Permiten:',
            'Usar la IA',
            'Identificar tu app',
            'No deben mostrarse al público.',
            'Por eso se guardan de forma segura.',
            'Esto introduce una idea importante:',
            'Aunque no seas técnico, estás creando una app real con buenas prácticas.'
          ]
        }
      ]
    },
    {
      id: 'system-prompts',
      title: 'System prompts: darle personalidad al Regenmon',
      icon: <Brain size={20} />,
      description: 'Define quién es y cómo habla tu Regenmon',
      color: 'purple',
      sections: [
        {
          title: '¿Qué es un system prompt?',
          items: [
            'El system prompt es la "personalidad base" del Regenmon.',
            'Es donde defines:',
            'Quién es',
            'Cómo habla',
            'Cómo se comporta',
            'No es lo que el usuario escribe.',
            'Es lo que la IA siempre recuerda al responder.'
          ]
        },
        {
          title: '¿Por qué es tan importante?',
          items: [
            'Sin un system prompt:',
            'La IA responde de forma genérica',
            'No hay identidad',
            'Con un buen system prompt:',
            'El Regenmon tiene carácter',
            'Se siente consistente',
            'Se diferencia de otros',
            'Es como escribir el perfil psicológico del personaje.'
          ]
        },
        {
          title: 'Estructura de un buen system prompt',
          items: [
            'Un system prompt claro suele incluir:',
            'Rol: quién es el Regenmon',
            'Personalidad: cómo se expresa',
            'Reglas: qué puede y no puede hacer',
            'Contexto: qué está pasando en la app',
            'Esto le da dirección a la IA y evita respuestas fuera de lugar.'
          ]
        },
        {
          title: 'Workshop: crear la personalidad del Regenmon',
          items: [
            'Aquí el alumno decide:',
            'Si el Regenmon es alegre, serio, curioso, tímido',
            'Si habla corto o explica mucho',
            'Si usa emojis o no',
            'No hay respuestas correctas.',
            'Cada personalidad es válida mientras sea coherente.',
            'Esto refuerza la idea de creación consciente, no solo técnica.'
          ]
        },
        {
          title: '¿Cómo influyen los stats en lo que dice?',
          items: [
            'Los stats ya no son solo visuales.',
            'Ahora afectan el comportamiento:',
            'Si está cansado, responde más corto',
            'Si está feliz, es más entusiasta',
            'Si tiene hambre, lo menciona',
            'Esto conecta la conversación con el estado del Regenmon.'
          ]
        }
      ]
    },
    {
      id: 'memoria-conversacional',
      title: 'Sistema de memoria conversacional',
      icon: <Database size={20} />,
      description: 'Tu Regenmon recuerda las conversaciones',
      color: 'green',
      sections: [
        {
          title: '¿Qué significa que el Regenmon tenga memoria?',
          items: [
            'Significa que no empieza de cero cada vez que hablas con él.',
            'Recuerda:',
            'Temas recientes',
            'Conversaciones pasadas',
            'Detalles importantes',
            'Esto hace que la interacción se sienta más humana.'
          ]
        },
        {
          title: '¿Por qué no guardar todo?',
          items: [
            'Guardar todo sería pesado e innecesario.',
            'Por eso:',
            'Solo se recuerdan los últimos temas',
            'Se mantiene lo importante',
            'Se evita saturación',
            'Es como recordar lo reciente, no toda la vida.'
          ]
        },
        {
          title: '¿Dónde se guarda esta memoria?',
          items: [
            'La memoria se guarda localmente en la app.',
            'Esto permite:',
            'Continuidad',
            'Privacidad',
            'Simplicidad',
            'Para el usuario:',
            '"Mi Regenmon se acuerda de mí".'
          ]
        },
        {
          title: 'Referencias al pasado',
          items: [
            'Gracias a esta memoria, el Regenmon puede decir cosas como:',
            '"¿Recuerdas cuando hablamos de eso?"',
            'Ese detalle cambia completamente la percepción de la IA.'
          ]
        }
      ]
    },
    {
      id: 'interfaz-chat',
      title: 'Interfaz de chat y personalidad visual',
      icon: <MessageCircle size={20} />,
      description: 'Cómo se ve y se siente la conversación',
      color: 'orange',
      sections: [
        {
          title: '¿Por qué una interfaz de chat?',
          items: [
            'El chat es una forma natural de interacción.',
            'No hay botones complejos, solo:',
            'Escribes',
            'Lees',
            'Respondes',
            'Es algo que todos entienden.'
          ]
        },
        {
          title: 'Burbujas de mensajes',
          items: [
            'Las burbujas ayudan a diferenciar:',
            'Lo que dice el usuario',
            'Lo que dice el Regenmon',
            'Colores y posiciones hacen la conversación más clara y ordenada.'
          ]
        },
        {
          title: 'Indicador de "escribiendo…"',
          items: [
            'Este pequeño detalle:',
            'Genera expectativa',
            'Da sensación de tiempo real',
            'Hace que la IA se sienta viva',
            'No responde "instantáneamente", responde como si pensara.'
          ]
        },
        {
          title: 'Manejo de respuestas',
          items: [
            'Mientras la IA responde:',
            'La app muestra que está trabajando',
            'El usuario sabe que algo está pasando',
            'Esto evita confusión y mejora la experiencia.'
          ]
        },
        {
          title: 'Scroll automático',
          items: [
            'El chat siempre se mueve al último mensaje.',
            'Esto mantiene el flujo natural de la conversación sin que el usuario tenga que ajustar nada.'
          ]
        }
      ]
    },
    {
      id: 'stats-dinamicos',
      title: 'Stats dinámicos según la conversación',
      icon: <BarChart3 size={20} />,
      description: 'Las palabras afectan el estado del Regenmon',
      color: 'pink',
      sections: [
        {
          title: '¿Por qué los stats cambian al hablar?',
          items: [
            'Hablar también es una forma de interacción.',
            'Dependiendo de cómo hablas con el Regenmon:',
            'Se siente mejor',
            'Se cansa',
            'Tiene más hambre',
            'Esto refuerza la idea de cuidado y responsabilidad.'
          ]
        },
        {
          title: 'Detección de palabras clave',
          items: [
            'La app identifica ciertos temas:',
            'Conversaciones positivas',
            'Conversaciones largas',
            'Menciones de comida',
            'No es magia, es reconocimiento de patrones simples.'
          ]
        },
        {
          title: 'Feedback visual',
          items: [
            'Cuando los stats cambian:',
            'Hay animaciones',
            'Cambios visibles',
            'Reacciones claras',
            'El usuario entiende inmediatamente qué efecto tuvo la conversación.'
          ]
        }
      ]
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          Material de Apoyo - Sesión 2
        </h1>

        <p className="text-muted-foreground text-lg mb-4">
          Integración con IA Conversacional y Personalidad
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          En esta sesión tu Regenmon aprende a conversar. Ya no es solo una mascota visual, ahora tiene personalidad, memoria y puede responder de forma natural.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {resources.map((resource) => (
            <button
              key={resource.id}
              type="button"
              onClick={() => setSelectedResource(resource)}
              className="p-6 border border-border/50 rounded-xl bg-card/30 hover:border-doc-primary/50 hover:bg-card/50 transition-all duration-200 text-left group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg border ${
                  resource.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                  resource.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                  resource.color === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                  resource.color === 'orange' ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' :
                  'bg-pink-500/10 border-pink-500/20 text-pink-400'
                } flex-shrink-0`}>
                  {resource.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-doc-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {resource.description}
                  </p>
                </div>
                <ChevronRight size={20} className="text-muted-foreground group-hover:text-doc-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Entregable Section */}
        <div className="my-12 glass-card p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            ✅ Entregable de la Sesión 2
          </h2>
          <p className="text-muted-foreground mb-4">
            Al finalizar esta sesión, el alumno tiene:
          </p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Un Regenmon que conversa</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Personalidad definida</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Memoria básica</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Stats que cambian al interactuar</span>
            </div>
          </div>
          <p className="text-foreground font-medium mt-6">
            El Regenmon ya no es solo una mascota:
          </p>
          <p className="text-muted-foreground italic">
            Es un personaje con identidad propia.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 2</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Entregable</div>
            </div>
            <span>→</span>
          </Link>
        </div>

        {/* Modal for Resource Details */}
        {selectedResource && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setSelectedResource(null)}
          >
            <div
              className="bg-background border border-border rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-3 sm:p-4 md:p-6 bg-card border-b border-border/50 flex items-start sm:items-center justify-between gap-2">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  <div className="p-1.5 sm:p-2 border border-border/50 rounded text-muted-foreground flex-shrink-0">
                    {selectedResource.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {selectedResource.title}
                    </h2>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 line-clamp-2">
                      {selectedResource.description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedResource(null)}
                  className="p-1.5 sm:p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground flex-shrink-0"
                  aria-label="Cerrar ventana"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(85vh-120px)] md:max-h-[calc(85vh-140px)] bg-background space-y-6 sm:space-y-8">
                {selectedResource.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3 sm:space-y-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-orange-400 flex items-center gap-2">
                      <div className="w-0.5 sm:w-1 h-5 sm:h-6 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="leading-tight">{section.title}</span>
                    </h3>
                    <div className="ml-0 sm:ml-3 md:ml-5 bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-border/40 shadow-sm">
                      <div className="space-y-3 sm:space-y-4">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="group">
                            <p className="text-foreground/95 leading-relaxed text-sm sm:text-[15px] pl-2 sm:pl-3 md:pl-4 border-l-2 border-orange-400/30 hover:border-orange-400/60 transition-colors">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </DocContent>
    </DocLayout>
  );
};

export default Session2Support;
