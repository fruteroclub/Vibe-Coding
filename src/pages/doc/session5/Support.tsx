import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  Users,
  Globe,
  Radio,
  Heart,
  Bell,
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

const Session5Support = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'funciones-sociales',
      title: 'Entendiendo las funciones sociales',
      icon: <Users size={20} />,
      description: 'De experiencia individual a comunidad compartida',
      color: 'blue',
      sections: [
        {
          title: '¿Por qué agregar funciones sociales?',
          items: [
            'Hasta ahora, la experiencia ha sido personal:',
            'tú y tu Regenmon.',
            'Al agregar funciones sociales, la experiencia se amplía:',
            'Tu progreso se vuelve visible',
            'Tu esfuerzo puede inspirar a otros',
            'Aparecen nuevas motivaciones',
            'La app deja de ser solo individual y empieza a ser compartida.'
          ]
        },
        {
          title: 'Estado público vs estado privado',
          items: [
            'No todo en la app tiene que ser público.',
            'Hay información que:',
            'Es solo tuya',
            'No se comparte',
            'Permanece privada',
            'Y hay información que decides mostrar:',
            'Tu Regenmon',
            'Su evolución',
            'Su historia',
            'Esta separación da control y confianza.'
          ]
        },
        {
          title: 'Identidad dentro de la comunidad',
          items: [
            'Cada Regenmon representa a una persona.',
            'Eso significa que:',
            'Hay respeto',
            'Hay límites',
            'Hay reglas claras',
            'La comunidad se construye desde la intención, no solo desde la tecnología.'
          ]
        },
        {
          title: 'Comunicación en tiempo real vs diferida',
          items: [
            'No todo sucede al instante.',
            'Algunas cosas:',
            'Ocurren en el momento',
            'Otras se revisan después',
            'Entender esto ayuda a diseñar interacciones que no dependan de estar conectados todo el tiempo.'
          ]
        },
        {
          title: 'Base para funciones sociales',
          items: [
            'Antes de interactuar, la app necesita:',
            'Identificar usuarios',
            'Registrar acciones',
            'Mantener consistencia',
            'Esto hace que las interacciones tengan sentido y orden.'
          ]
        }
      ]
    },
    {
      id: 'registro-publico',
      title: 'Registro público del Regenmon',
      icon: <Globe size={20} />,
      description: 'Tu Regenmon encuentra su lugar en la comunidad',
      color: 'green',
      sections: [
        {
          title: '¿Qué significa hacer público a tu Regenmon?',
          items: [
            'Hacer público a tu Regenmon es una decisión consciente.',
            'Significa:',
            'Permitir que otros lo vean',
            'Compartir tu progreso',
            'Abrirte a la comunidad',
            'No es obligatorio, es opcional.'
          ]
        },
        {
          title: 'Registro en la comunidad',
          items: [
            'Al registrarse:',
            'El Regenmon aparece en un espacio compartido',
            'Tiene una presencia visible',
            'Se vuelve "visitable"',
            'Esto convierte al Regenmon en parte de un mundo más grande.'
          ]
        },
        {
          title: 'URL compartible',
          items: [
            'Cada Regenmon público tiene una dirección única.',
            'Esto permite:',
            'Compartirlo fácilmente',
            'Invitar a otros',
            'Mostrar tu progreso',
            'Es como una tarjeta de presentación digital.'
          ]
        },
        {
          title: 'Indicador de estado público',
          items: [
            'La app muestra claramente si el Regenmon es público.',
            'Esto evita confusión y refuerza la transparencia.'
          ]
        },
        {
          title: 'Contador de visitas',
          items: [
            'Cada visita suma.',
            'No como competencia, sino como señal de interés.',
            'Ver visitas refuerza la idea de conexión.'
          ]
        }
      ]
    },
    {
      id: 'feed-descubrimiento',
      title: 'Feed de descubrimiento',
      icon: <Radio size={20} />,
      description: 'Explora otros Regenmons y sus historias',
      color: 'purple',
      sections: [
        {
          title: '¿Qué es un feed?',
          items: [
            'El feed es un espacio para explorar.',
            'Ahí ves:',
            'Otros Regenmons',
            'Sus nombres',
            'Su nivel de evolución',
            'No es una red social tradicional, es un espacio de descubrimiento.'
          ]
        },
        {
          title: 'Presentación visual clara',
          items: [
            'Cada Regenmon se muestra como una tarjeta.',
            'Esto permite:',
            'Comparar fácilmente',
            'Explorar sin esfuerzo',
            'Sentir curiosidad'
          ]
        },
        {
          title: 'Ordenamiento y filtros',
          items: [
            'El feed se puede ordenar:',
            'Por novedad',
            'Por popularidad',
            'Por nivel',
            'Esto da diferentes formas de explorar sin abrumar.'
          ]
        },
        {
          title: 'Búsqueda por nombre',
          items: [
            'Buscar permite encontrar algo específico.',
            'No todo es navegar al azar.'
          ]
        },
        {
          title: 'Carga progresiva',
          items: [
            'El contenido aparece poco a poco.',
            'Esto:',
            'Mantiene fluidez',
            'Evita saturación',
            'Mejora experiencia'
          ]
        }
      ]
    },
    {
      id: 'interacciones',
      title: 'Interacciones entre usuarios',
      icon: <Heart size={20} />,
      description: 'Conecta con otros de forma significativa',
      color: 'pink',
      sections: [
        {
          title: 'Visitar otro Regenmon',
          items: [
            'Visitar es entrar al espacio de otro.',
            'No modificas nada, solo observas y conectas.',
            'Es una forma respetuosa de interacción.'
          ]
        },
        {
          title: 'Tipos de interacciones',
          items: [
            'Hay distintas formas de interactuar:',
            'Saludar: contacto simple y gratuito',
            'Regalar: compartir recursos',
            'Jugar: interacción más profunda',
            'Cada una tiene un significado distinto.'
          ]
        },
        {
          title: 'Costos y decisiones',
          items: [
            'Algunas interacciones cuestan recursos.',
            'Esto introduce reflexión:',
            '"¿Cuándo vale la pena interactuar?"',
            'No todo se hace sin pensar.'
          ]
        },
        {
          title: 'Validaciones claras',
          items: [
            'La app revisa:',
            'Que tengas recursos suficientes',
            'Que la acción sea válida',
            'Esto mantiene equilibrio y justicia.'
          ]
        },
        {
          title: 'Reacciones y consecuencias',
          items: [
            'Cada interacción genera:',
            'Cambios en stats',
            'Reacciones del Regenmon',
            'Feedback visible',
            'Nada ocurre sin impacto.'
          ]
        }
      ]
    },
    {
      id: 'notificaciones',
      title: 'Sistema de notificaciones',
      icon: <Bell size={20} />,
      description: 'Mantente conectado sin interrupciones',
      color: 'orange',
      sections: [
        {
          title: '¿Por qué notificaciones?',
          items: [
            'Las notificaciones mantienen conexión.',
            'Te informan cuando:',
            'Alguien te visita',
            'Interactúan contigo',
            'Recibes algo',
            'Sin interrumpir, solo avisar.'
          ]
        },
        {
          title: 'Notificaciones claras y breves',
          items: [
            'Los mensajes son:',
            'Cortos',
            'Claros',
            'Entendibles',
            'No hay ruido innecesario.'
          ]
        },
        {
          title: 'Historial de notificaciones',
          items: [
            'Puedes ver lo que pasó recientemente.',
            'Esto ayuda a no perder eventos importantes.'
          ]
        },
        {
          title: 'Marcar como leídas',
          items: [
            'El usuario controla su espacio.',
            'Nada queda "pendiente" sin razón.'
          ]
        },
        {
          title: 'Actualización periódica',
          items: [
            'Las notificaciones se revisan en intervalos.',
            'Esto mantiene equilibrio entre:',
            'Actualización',
            'Rendimiento',
            'Simplicidad'
          ]
        }
      ]
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          Material de Apoyo - Sesión 5
        </h1>

        <p className="text-muted-foreground text-lg mb-4">
          Features Sociales y Conexiones
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          En esta sesión tu Regenmon encuentra amigos. La experiencia personal se amplía hacia una comunidad viva donde todos comparten y crecen juntos.
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
                  resource.color === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                  resource.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                  resource.color === 'pink' ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' :
                  'bg-orange-500/10 border-orange-500/20 text-orange-400'
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
            ✅ Entregable de la Sesión 5
          </h2>
          <p className="text-muted-foreground mb-4">
            Al finalizar esta sesión, el alumno tiene:
          </p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Regenmon público</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Feed de descubrimiento</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Interacciones sociales</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Sistema de notificaciones</span>
            </div>
          </div>
          <p className="text-foreground font-medium mt-6">
            El Regenmon deja de ser solo una experiencia personal:
          </p>
          <p className="text-muted-foreground italic">
            Se convierte en parte de una comunidad viva.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-5/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
            </div>
          </Link>

          <Link
            to="/doc/session-5"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">Sesión 5</div>
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

export default Session5Support;
