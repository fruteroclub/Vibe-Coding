import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  PenTool,
  Component,
  Rocket,
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

const Session1Support = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'intro-ia',
      title: 'Introducción al desarrollo asistido por IA',
      icon: <Cpu size={20} />,
      description: 'Entiende qué significa programar con IA y cómo funciona',
      color: 'blue',
      sections: [
        {
          title: '¿Qué significa programar con IA?',
          items: [
            'Cuando hablamos de programar con IA, no hablamos de escribir código complicado ni de aprender lenguajes difíciles.',
            'Aquí, programar significa decir lo que quieres que pase.',
            'Imagina que tienes una idea clara en tu cabeza: una mascota digital que vive en una pantalla, que tiene energía, felicidad y hambre. En lugar de preguntarte "¿cómo hago esto técnicamente?", simplemente lo explicas.',
            'La IA toma esa explicación y la convierte en una aplicación real. Tú sigues tomando decisiones, la IA hace el trabajo técnico.',
            'Programar con IA es pasar de: "No sé programar" a "Sé explicar lo que quiero construir"'
          ]
        },
        {
          title: '¿Cómo funciona el desarrollo con IA?',
          items: [
            'El desarrollo con IA no es un solo paso, es un proceso continuo.',
            'Primero explicas la idea general. La IA te muestra algo funcionando. Luego lo miras con calma y piensas: "Esto está bien, pero quiero cambiar esto otro".',
            'Ese diálogo se repite varias veces. Cada vez la app mejora un poco más.',
            'No hay presión por hacerlo perfecto. La clave está en probar, observar y ajustar.'
          ]
        },
        {
          title: '¿Qué es v0.dev?',
          items: [
            'v0.dev es el lugar donde empiezas a construir.',
            'Ahí escribes tus ideas como si se las explicaras a alguien más. En segundos, ves una versión visual de tu app.',
            'No necesitas instalar programas ni configurar nada complicado. Solo escribir, ver y ajustar.',
            'Es como un borrador inteligente que responde a lo que le pides.'
          ]
        },
        {
          title: '¿Qué es Vercel?',
          items: [
            'Vercel es donde tu app deja de ser solo un experimento.',
            'Cuando usas Vercel: Tu app vive en internet, Tiene una dirección propia, Puede abrirse desde el celular o la computadora',
            'Publicar tu app desde el inicio cambia la experiencia: ya no estás "practicando", estás creando algo real.'
          ]
        },
        {
          title: '¿Qué es un prompt?',
          items: [
            'Un prompt es la instrucción que le das a la IA.',
            'No tiene que ser perfecta. Tiene que ser clara.',
            'Mientras mejor expliques: Qué quieres, Cómo debería verse, Qué debería hacer. Mejor será el resultado.',
            'Aprender a escribir buenos prompts es aprender a pensar y comunicar ideas.'
          ]
        },
        {
          title: 'Mentalidad de iteración',
          items: [
            'Aquí no se espera que todo funcione a la primera.',
            'La mentalidad correcta es: "Voy a intentarlo, ver qué pasa y mejorarlo".',
            'Cada ajuste es parte del proceso. Cada error es solo información.',
            'Esta forma de trabajar reduce el miedo y aumenta la confianza.'
          ]
        }
      ]
    },
    {
      id: 'componentes-estado',
      title: 'Componentes y manejo de información',
      icon: <Component size={20} />,
      description: 'Entiende las piezas fundamentales de tu aplicación',
      color: 'green',
      sections: [
        {
          title: '¿Qué es un componente?',
          items: [
            'Para entender una app, ayuda dividirla en partes.',
            'Un componente es una parte pequeña que cumple una función clara.',
            'Por ejemplo: Mostrar la mascota, Mostrar una barra de energía, Mostrar el nombre',
            'Cada pieza es simple por sí sola, pero juntas crean la experiencia completa.'
          ]
        },
        {
          title: '¿Qué significa estado?',
          items: [
            'El estado es la información que cambia mientras usas la app.',
            'Es lo que hace que el Regenmon se sienta "vivo": La energía sube o baja, La felicidad cambia, El hambre aumenta',
            'Cuando algo cambia, la app lo refleja automáticamente en pantalla.'
          ]
        },
        {
          title: '¿Qué significa guardar información?',
          items: [
            'Guardar información evita que el usuario pierda su progreso.',
            'Nadie quiere volver a empezar cada vez que entra. Por eso la app recuerda decisiones importantes.',
            'Esto hace que la experiencia se sienta continua y personal.'
          ]
        },
        {
          title: '¿Qué es localStorage?',
          items: [
            'localStorage es el lugar donde la app guarda esa información.',
            'No es visible para el usuario, pero funciona como una memoria silenciosa. Gracias a esto, el Regenmon sigue ahí cuando vuelves.'
          ]
        }
      ]
    },
    {
      id: 'construir-display',
      title: 'Construcción del display principal',
      icon: <Layers size={20} />,
      description: 'La pantalla principal donde vive tu Regenmon',
      color: 'orange',
      sections: [
        {
          title: '¿Qué es el display principal?',
          items: [
            'Es la pantalla donde sucede todo.',
            'Ahí vive el Regenmon. Ahí se ven los cambios. Ahí el usuario pasa la mayor parte del tiempo.',
            'Por eso debe ser clara, agradable y fácil de entender.'
          ]
        },
        {
          title: '¿Qué son las barras de estadísticas?',
          items: [
            'Las barras muestran el estado del Regenmon sin necesidad de explicar nada.',
            'Una barra baja comunica urgencia. Una barra llena comunica bienestar.',
            'Son una forma visual de entender lo que está pasando.'
          ]
        },
        {
          title: '¿Qué significa estilizar?',
          items: [
            'Estilizar es tomar decisiones visuales con intención.',
            'Colores, tamaños y formas ayudan al usuario a: Entender la información, Sentirse cómodo usando la app, Disfrutar la experiencia'
          ]
        },
        {
          title: '¿Qué son animaciones simples?',
          items: [
            'Las animaciones pequeñas hacen que la app se sienta viva.',
            'No buscan llamar la atención, solo acompañar los cambios: Barras que se mueven, Botones que reaccionan, Transiciones suaves'
          ]
        }
      ]
    },
    {
      id: 'flujo-creacion',
      title: 'Flujo de creación del Regenmon',
      icon: <PenTool size={20} />,
      description: 'Cómo nace tu mascota virtual paso a paso',
      color: 'purple',
      sections: [
        {
          title: '¿Qué es un flujo?',
          items: [
            'El flujo es el camino natural que sigue el usuario.',
            'Desde que entra hasta que empieza a usar la app. Un buen flujo no confunde ni abruma.'
          ]
        },
        {
          title: '¿Qué es un modal?',
          items: [
            'El modal aparece para guiar el primer paso.',
            'Le dice al usuario: "Antes de continuar, crea tu Regenmon".',
            'Así no hay dudas sobre qué hacer primero.'
          ]
        },
        {
          title: '¿Qué es un input?',
          items: [
            'Un input permite al usuario participar activamente.',
            'Escribir el nombre crea una conexión emocional inmediata.'
          ]
        },
        {
          title: '¿Qué es un sprite?',
          items: [
            'El sprite es la imagen del Regenmon.',
            'Elegirlo hace que la mascota se sienta única desde el inicio.'
          ]
        },
        {
          title: '¿Qué hace el botón "¡Nace!"?',
          items: [
            'Es el momento donde todo comienza.',
            'Al presionarlo: La mascota aparece, La app cobra sentido, Empieza la experiencia'
          ]
        }
      ]
    },
    {
      id: 'deploy-produccion',
      title: 'Deploy a producción',
      icon: <Rocket size={20} />,
      description: 'Publica tu Regenmon para que el mundo lo vea',
      color: 'pink',
      sections: [
        {
          title: '¿Qué significa deploy?',
          items: [
            'Deploy significa publicar lo que construiste.',
            'Es el paso que convierte una idea en algo visible y compartible.'
          ]
        },
        {
          title: '¿Qué es una URL?',
          items: [
            'Es la dirección de tu app en internet.',
            'Gracias a ella puedes compartir tu creación con otras personas.'
          ]
        },
        {
          title: '¿Qué significa responsive?',
          items: [
            'Significa que la app se adapta a cualquier pantalla.',
            'No importa desde dónde se abra, la experiencia se mantiene.'
          ]
        }
      ]
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          Material de Apoyo
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          Recursos organizados para ayudarte a dominar los conceptos fundamentales.
          Haz clic en cualquier tema para explorar el contenido completo.
        </p>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 border border-border/50 rounded-lg bg-purple-500/10">
            <div className="text-3xl font-bold text-purple-400">{resources.length}</div>
            <div className="text-sm text-muted-foreground">Temas Principales</div>
          </div>
          <div className="p-4 border border-border/50 rounded-lg bg-blue-500/10">
            <div className="text-3xl font-bold text-blue-400">~2h</div>
            <div className="text-sm text-muted-foreground">Tiempo Estimado</div>
          </div>
          <div className="p-4 border border-border/50 rounded-lg bg-green-500/10">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-sm text-muted-foreground">Material Gratuito</div>
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {resources.map((resource) => (
            <div
              key={resource.id}
              onClick={() => setSelectedResource(resource)}
              className="group cursor-pointer p-5 border border-border/50 rounded-lg bg-card/20 hover:border-orange-400/50 hover:bg-card/40 transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded border border-border/50 text-muted-foreground flex-shrink-0">
                  {resource.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-orange-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-1/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">Sesión 1</div>
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

export default Session1Support;
