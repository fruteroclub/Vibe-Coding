import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  Eye,
  ImageUp,
  ClipboardCheck,
  TrendingUp,
  Images,
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

const Session4Support = () => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'ia-multimodal',
      title: 'IA Multimodal: cuando la IA empieza a "ver"',
      icon: <Eye size={20} />,
      description: 'La IA ya no solo lee, ahora también interpreta imágenes',
      color: 'blue',
      sections: [
        {
          title: '¿Qué significa IA multimodal?',
          items: [
            'Hasta ahora, la relación con la IA ha sido a través de texto:',
            'le escribes algo y ella responde.',
            'En esta sesión damos un paso importante:',
            'la IA ya no solo lee, ahora también interpreta imágenes.',
            'IA multimodal significa que la inteligencia artificial puede trabajar con:',
            'Palabras',
            'Imágenes',
            'Contexto combinado',
            'Esto abre la puerta a interacciones mucho más ricas y cercanas a la vida real.'
          ]
        },
        {
          title: '¿Cómo "ve" una IA una imagen?',
          items: [
            'La IA no ve como una persona.',
            'No siente emociones ni reconoce una imagen como "bonita" o "fea".',
            'Lo que hace es analizar:',
            'Formas',
            'Elementos presentes',
            'Relación entre objetos',
            'Contexto general',
            'Es como si la imagen se tradujera a información que la IA puede entender y evaluar.'
          ]
        },
        {
          title: 'Diferencia entre texto e imagen como entrada',
          items: [
            'Cuando escribes texto, describes una acción.',
            'Cuando envías una imagen, muestras la acción.',
            'Esto reduce ambigüedad:',
            'No tienes que explicar tanto',
            'La evidencia es visual',
            'La evaluación se basa en lo que realmente hiciste',
            'Aquí el Regenmon empieza a reaccionar a hechos, no solo palabras.'
          ]
        },
        {
          title: 'Preparar imágenes para la IA',
          items: [
            'Antes de enviar una imagen:',
            'La app la adapta',
            'La convierte a un formato adecuado',
            'Se asegura de que la IA pueda procesarla',
            'Todo este proceso ocurre "detrás de escena".',
            'El usuario solo ve que la imagen se envía y recibe respuesta.'
          ]
        },
        {
          title: 'Evaluar imágenes con IA',
          items: [
            'Cuando la imagen se envía:',
            'La IA la analiza',
            'La compara con criterios definidos',
            'Devuelve una evaluación clara',
            'Aquí la IA deja de ser solo conversacional y se vuelve evaluadora y guía.'
          ]
        }
      ]
    },
    {
      id: 'subida-imagenes',
      title: 'Sistema de subida de imágenes',
      icon: <ImageUp size={20} />,
      description: 'Muestra lo que haces, no solo lo que dices',
      color: 'purple',
      sections: [
        {
          title: '¿Por qué subir imágenes?',
          items: [
            'Subir imágenes cambia la dinámica de la experiencia.',
            'Ya no se trata solo de decir:',
            '"Hice algo bueno hoy"',
            'Ahora se trata de:',
            '"Aquí está lo que hice"',
            'Esto:',
            'Refuerza el compromiso',
            'Da sentido de responsabilidad',
            'Hace que el progreso sea tangible'
          ]
        },
        {
          title: 'Interacción simple: arrastrar y soltar',
          items: [
            'La subida de imágenes se diseña para ser natural.',
            'No hay formularios largos ni pasos complejos.',
            'Arrastras la imagen y la app se encarga del resto.',
            'Esto reduce fricción y facilita la participación constante.'
          ]
        },
        {
          title: 'Vista previa antes de enviar',
          items: [
            'Antes de enviar la imagen:',
            'El usuario la ve',
            'Confirma que es correcta',
            'Decide continuar o cambiarla',
            'Este pequeño paso genera seguridad y control.'
          ]
        },
        {
          title: 'Validaciones claras',
          items: [
            'La app revisa cosas básicas:',
            'Que sea una imagen',
            'Que no sea demasiado pesada',
            'Si algo no cumple, lo explica con claridad.',
            'No hay mensajes confusos ni técnicos.'
          ]
        },
        {
          title: 'Estados de espera visibles',
          items: [
            'Mientras la IA evalúa:',
            'La app muestra que está procesando',
            'El usuario sabe que debe esperar',
            'Esto evita ansiedad y mejora la experiencia.'
          ]
        }
      ]
    },
    {
      id: 'evaluacion-scoring',
      title: 'Evaluación y scoring con IA',
      icon: <ClipboardCheck size={20} />,
      description: 'Feedback automático que te ayuda a mejorar',
      color: 'green',
      sections: [
        {
          title: '¿Qué significa evaluar con IA?',
          items: [
            'Evaluar con IA no es juzgar.',
            'Es recibir:',
            'Una mirada externa',
            'Un análisis consistente',
            'Un feedback inmediato',
            'La IA no compara personas, analiza acciones.'
          ]
        },
        {
          title: 'La rúbrica como guía',
          items: [
            'La evaluación se basa en una rúbrica clara y balanceada.',
            'Se divide en tres dimensiones:',
            'Personal: hábitos, aprendizaje, creación individual',
            'Comunidad: colaboración, ayuda, compartir',
            'Impacto: acciones con efecto más amplio',
            'Esto ayuda a entender que el progreso no es solo personal, también colectivo.'
          ]
        },
        {
          title: 'El score como referencia',
          items: [
            'El puntaje no es una calificación escolar.',
            'Es una referencia que:',
            'Ayuda a medir esfuerzo',
            'Permite ver mejora con el tiempo',
            'Motiva a intentarlo de nuevo',
            'No importa un solo resultado, importa la tendencia.'
          ]
        },
        {
          title: 'Feedback escrito por la IA',
          items: [
            'Además del número, la IA explica:',
            'Qué se hizo bien',
            'Qué se puede mejorar',
            'En qué área se destacó más',
            'Esto convierte cada evaluación en aprendizaje activo.'
          ]
        },
        {
          title: 'Recompensa conectada al esfuerzo',
          items: [
            'El score se transforma en monedas.',
            'Esto refuerza la idea de:',
            'Hacer → recibir → avanzar',
            'La recompensa no es automática, es consecuencia.'
          ]
        }
      ]
    },
    {
      id: 'evolucion',
      title: 'Sistema de evolución del Regenmon',
      icon: <TrendingUp size={20} />,
      description: 'Tu Regenmon crece como reflejo de tus acciones',
      color: 'orange',
      sections: [
        {
          title: '¿Qué significa que el Regenmon evolucione?',
          items: [
            'La evolución representa crecimiento acumulado.',
            'No ocurre por una sola acción, ocurre por constancia.',
            'El Regenmon cambia porque tú cambias.',
            'Esto refuerza una relación a largo plazo.'
          ]
        },
        {
          title: 'Puntos de entrenamiento acumulados',
          items: [
            'Cada evaluación suma puntos.',
            'No importa si un día fue mejor que otro.',
            'Todo cuenta.',
            'Esto premia:',
            'Continuidad',
            'Participación',
            'Persistencia'
          ]
        },
        {
          title: 'Etapas como hitos visibles',
          items: [
            'Las etapas de evolución funcionan como metas claras.',
            'El usuario sabe:',
            'Dónde está',
            'Qué sigue',
            'Qué tan cerca está del siguiente nivel',
            'Esto mantiene motivación sin presión.'
          ]
        },
        {
          title: 'Barra de progreso',
          items: [
            'La barra hace visible el camino.',
            'No es solo "me falta mucho", es:',
            '"Me faltan X puntos"',
            'Eso vuelve el objetivo alcanzable.'
          ]
        },
        {
          title: 'Momento de evolución',
          items: [
            'Cuando se alcanza un umbral:',
            'Hay animación',
            'Hay cambio visual',
            'Hay celebración',
            'Este momento es clave emocionalmente.',
            'Refuerza el esfuerzo acumulado.'
          ]
        }
      ]
    },
    {
      id: 'galeria',
      title: 'Galería de entrenamientos y progreso',
      icon: <Images size={20} />,
      description: 'Tu historial visual de crecimiento',
      color: 'pink',
      sections: [
        {
          title: '¿Por qué guardar el historial?',
          items: [
            'La galería muestra el camino recorrido.',
            'Permite mirar atrás y decir:',
            '"Sí he avanzado".',
            'Esto refuerza autoestima y constancia.'
          ]
        },
        {
          title: 'Vista detallada de cada entrenamiento',
          items: [
            'Cada imagen guarda:',
            'Su evaluación',
            'Su feedback',
            'Su categoría',
            'Nada se pierde, todo suma a la historia.'
          ]
        },
        {
          title: 'Filtros para entender patrones',
          items: [
            'Los filtros ayudan a descubrir:',
            'En qué área destacas',
            'Qué tipo de acciones haces más',
            'Dónde puedes mejorar',
            'Esto convierte datos en reflexión.'
          ]
        },
        {
          title: 'Estadísticas generales',
          items: [
            'La app resume tu progreso:',
            'Total de acciones',
            'Promedios',
            'Mejor categoría',
            'Esto da perspectiva global.'
          ]
        },
        {
          title: 'Racha como hábito',
          items: [
            'La racha mide presencia, no perfección.',
            'Premia:',
            'Volver',
            'Intentar',
            'Mantener constancia',
            'Es un refuerzo suave, no una presión.'
          ]
        }
      ]
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          Material de Apoyo - Sesión 4
        </h1>

        <p className="text-muted-foreground text-lg mb-4">
          IA Multimodal, Evaluación y Progreso
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          En esta sesión tu Regenmon evoluciona. La IA ahora interpreta imágenes, evalúa tus acciones y tu mascota crece como reflejo de tu constancia.
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
            ✅ Entregable de la Sesión 4
          </h2>
          <p className="text-muted-foreground mb-4">
            Al finalizar esta sesión, el alumno tiene:
          </p>
          <div className="space-y-2 ml-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Evaluación con imágenes</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Feedback automático y entendible</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Sistema de evolución visible</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span className="text-foreground">Historial claro de progreso</span>
            </div>
          </div>
          <p className="text-foreground font-medium mt-6">
            El Regenmon ya no solo reacciona:
          </p>
          <p className="text-muted-foreground italic">
            Evoluciona como reflejo de tus acciones.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 4</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4/deliverable"
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

export default Session4Support;
