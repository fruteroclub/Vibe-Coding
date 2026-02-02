import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Coins,
  UtensilsCrossed,
  Loader2,
  Link as LinkIcon,
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

const Session3Support = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'autenticacion',
      title: 'Autenticación: conectar al usuario con su Regenmon',
      icon: <ShieldCheck size={20} />,
      description: 'Tu Regenmon ahora te reconoce y te pertenece',
      color: 'blue',
      sections: [
        {
          title: '¿Qué significa autenticación?',
          items: [
            'Autenticación significa:',
            'Saber quién eres cuando usas la app.',
            'No se trata solo de "iniciar sesión", sino de:',
            'Reconocer al usuario',
            'Mantener su progreso',
            'Proteger su información',
            'Hasta ahora, el Regenmon vive en el navegador.',
            'Con autenticación, empieza a pertenecer a una persona.'
          ]
        },
        {
          title: '¿Por qué es importante autenticarse?',
          items: [
            'Sin autenticación:',
            'El progreso se puede perder',
            'No hay identidad',
            'No se pueden compartir cosas',
            'Con autenticación:',
            'Tu Regenmon es tuyo',
            'Tu progreso te acompaña',
            'La experiencia se vuelve personal',
            'Es el paso de:',
            '"Una app"',
            'a',
            '"Mi app"'
          ]
        },
        {
          title: '¿Qué es Privy y para qué se usa?',
          items: [
            'Privy es una herramienta que se encarga de la parte complicada.',
            'Permite:',
            'Iniciar sesión fácilmente',
            'No manejar contraseñas',
            'Reducir fricción',
            'Para el usuario es simple:',
            'Un botón',
            'Un par de clics',
            'Listo'
          ]
        },
        {
          title: '¿Qué significa guardar una sesión?',
          items: [
            'Guardar sesión significa:',
            'Que la app recuerda quién eres aunque cierres y vuelvas a entrar.',
            'No tienes que iniciar sesión cada vez.',
            'La app reconoce que sigues siendo tú.',
            'Esto da sensación de continuidad y comodidad.'
          ]
        },
        {
          title: 'Mostrar perfil del usuario',
          items: [
            'Una vez autenticado, la app puede mostrar:',
            'Tu nombre',
            'Tu avatar',
            'Tu conexión con el Regenmon',
            'Este detalle refuerza la relación:',
            'Usuario ↔ Mascota'
          ]
        }
      ]
    },
    {
      id: 'sistema-monedas',
      title: 'Sistema de monedas: $FRUTA',
      icon: <Coins size={20} />,
      description: 'Las acciones tienen valor y consecuencias',
      color: 'yellow',
      sections: [
        {
          title: '¿Por qué un sistema de monedas?',
          items: [
            'Las monedas introducen una idea clave:',
            'Las acciones tienen valor.',
            'No todo es gratis ni automático.',
            'Algunas cosas se ganan, se usan y se cuidan.',
            'Esto hace la experiencia más interesante y más parecida a un juego.'
          ]
        },
        {
          title: '¿Qué es el balance?',
          items: [
            'El balance es:',
            'La cantidad de monedas que tienes.',
            'Funciona como un marcador:',
            'Sabes cuánto puedes gastar',
            'Tomas decisiones',
            'Planeas tus acciones',
            'Ver el balance crea conciencia de recursos.'
          ]
        },
        {
          title: 'Ver el balance en la app',
          items: [
            'El balance se muestra de forma clara:',
            'Con un número',
            'Con un ícono',
            'Con una pequeña animación',
            'Esto hace que las monedas se sientan reales y valiosas.'
          ]
        },
        {
          title: '¿Qué significa reclamar monedas?',
          items: [
            'Reclamar monedas es:',
            'Obtener tus primeras monedas para empezar.',
            'Es una forma de bienvenida:',
            'No empiezas desde cero',
            'Tienes algo para usar',
            'Puedes interactuar desde el inicio'
          ]
        },
        {
          title: 'Actualización en tiempo real',
          items: [
            'Cuando ganas o gastas monedas:',
            'El número cambia al instante',
            'La app responde visualmente',
            'Esto refuerza la sensación de causa y efecto.'
          ]
        }
      ]
    },
    {
      id: 'alimentar',
      title: 'Alimentar al Regenmon',
      icon: <UtensilsCrossed size={20} />,
      description: 'Cuida a tu mascota con recursos reales',
      color: 'green',
      sections: [
        {
          title: '¿Por qué alimentar al Regenmon?',
          items: [
            'Alimentar es una acción clave de cuidado.',
            'Conecta:',
            'El sistema de monedas',
            'Los stats',
            'La relación con la mascota',
            'No es solo un botón, es una decisión.'
          ]
        },
        {
          title: '¿Qué pasa cuando alimentas?',
          items: [
            'Cuando alimentas al Regenmon:',
            'Gastas monedas',
            'El hambre disminuye',
            'El Regenmon reacciona',
            'Esto hace que el usuario sienta que su acción tuvo impacto.'
          ]
        },
        {
          title: 'Validar recursos suficientes',
          items: [
            'La app verifica:',
            'Si tienes monedas suficientes',
            'Si puedes realizar la acción',
            'Si no puedes:',
            'Te lo dice claramente',
            'No te deja continuar',
            'Esto evita frustraciones y errores.'
          ]
        },
        {
          title: 'Animaciones de la acción',
          items: [
            'Las animaciones ayudan a entender lo que pasó:',
            'Monedas que se mueven',
            'Cambios visibles en stats',
            'Reacciones del Regenmon',
            'No necesitas leer texto para entenderlo.'
          ]
        },
        {
          title: 'Feedback emocional',
          items: [
            'Después de comer, el Regenmon responde:',
            'Agradece',
            'Cambia su actitud',
            'Refuerza la conexión emocional',
            'Esto convierte una acción técnica en una experiencia.'
          ]
        }
      ]
    },
    {
      id: 'estados-interfaz',
      title: 'Manejo de estados de la interfaz',
      icon: <Loader2 size={20} />,
      description: 'Comunica claramente lo que está pasando',
      color: 'purple',
      sections: [
        {
          title: '¿Qué es un estado de carga?',
          items: [
            'Un estado de carga aparece cuando:',
            'La app está esperando una respuesta',
            'Algo está procesándose',
            'En lugar de quedarse "congelada", la app comunica:',
            '"Estoy trabajando".'
          ]
        },
        {
          title: '¿Por qué mostrar errores claramente?',
          items: [
            'Los errores pueden pasar, y eso está bien.',
            'Lo importante es:',
            'Explicar qué pasó',
            'Qué puede hacer el usuario',
            'No usar mensajes confusos',
            'Esto genera confianza.'
          ]
        },
        {
          title: 'Botones deshabilitados',
          items: [
            'Cuando una acción no es posible:',
            'El botón se desactiva',
            'Visualmente se entiende',
            'Así el usuario no intenta algo que no puede hacer.'
          ]
        },
        {
          title: 'Confirmaciones visuales',
          items: [
            'Cuando algo sale bien:',
            'Hay una señal clara',
            'Un mensaje positivo',
            'Una reacción visual',
            'Esto refuerza el aprendizaje y la satisfacción.'
          ]
        }
      ]
    },
    {
      id: 'experiencia-completa',
      title: 'Conectar todo: experiencia completa',
      icon: <LinkIcon size={20} />,
      description: 'De mascota visual a compañero digital',
      color: 'orange',
      sections: [
        {
          title: 'Cómo se unen todas las piezas',
          items: [
            'En esta sesión:',
            'El usuario tiene identidad',
            'Tiene recursos',
            'Puede tomar decisiones',
            'Todo empieza a sentirse como un sistema completo.'
          ]
        },
        {
          title: 'De mascota a compañero',
          items: [
            'El Regenmon ya no es solo algo que miras.',
            'Ahora:',
            'Lo cuidas',
            'Inviertes en él',
            'Tomas decisiones por él',
            'La relación se profundiza.'
          ]
        }
      ]
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          Material de Apoyo - Sesión 3
        </h1>

        <p className="text-muted-foreground text-lg mb-4">
          Autenticación y Sistema de Monedas
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          En esta sesión tu Regenmon se conecta contigo. Ahora tiene identidad, pertenece a alguien y las acciones tienen consecuencias reales a través del sistema de monedas.
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
                  resource.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                  resource.color === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                  resource.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
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
            ✅ Entregable de la Sesión 3
          </h2>
          <p className="text-muted-foreground mb-4">
            Al finalizar esta sesión, el alumno tiene:
          </p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Usuario autenticado</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Sesión persistente</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Sistema de monedas funcional</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Regenmon alimentado con feedback</span>
            </div>
          </div>
          <p className="text-foreground font-medium mt-6">
            El Regenmon ahora:
          </p>
          <p className="text-muted-foreground italic">
            Te reconoce y depende de ti.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/deliverable"
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

export default Session3Support;
