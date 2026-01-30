import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  PenTool,
  Component,
  Database,
  Rocket,
  X,
  ChevronRight,
  CheckCircle2
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
  const { t } = useTranslation();
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'framework',
      title: 'Arquitectura de 5 Capas',
      icon: <Layers size={20} />,
      description: 'Entiende la estructura fundamental de toda aplicación web moderna',
      color: 'orange',
      sections: [
        {
          title: 'La Jerarquía de Toda Aplicación Web',
          items: [
            'LAYER 5: DEPLOY - Hacer público (Production & Distribution)',
            'LAYER 4: AUTH - Múltiples usuarios (Identity & Permissions)',
            'LAYER 3: AI - Inteligencia (Intelligence & Processing)',
            'LAYER 2: DATA - Persistencia (Storage & State)',
            'LAYER 1: UI - Interfaz (Interface & Interaction)'
          ]
        },
        {
          title: 'Por Qué Esta Jerarquía Importa',
          items: [
            'No puedes tener usuarios (Layer 4) sin interfaz (Layer 1)',
            'No puedes guardar datos (Layer 2) sin capturar input (Layer 1)',
            'No puedes desplegar (Layer 5) sin tener algo que funcione'
          ]
        },
        {
          title: 'En Regenmon',
          items: [
            'Layer 1 (UI): Pantalla donde ves tu mascota, botones, barras',
            'Layer 2 (DATA): Guardar nombre, stats en localStorage',
            'Layer 5 (DEPLOY): Publicar en Vercel para compartir'
          ]
        }
      ]
    },
    {
      id: 'ai-dev',
      title: 'Desarrollo con IA',
      icon: <Cpu size={20} />,
      description: 'Aprende a trabajar con herramientas de IA para acelerar tu desarrollo',
      color: 'blue',
      sections: [
        {
          title: 'Qué Es Desarrollo Asistido por IA',
          items: [
            'Describes lo que quieres en lenguaje natural',
            'La IA genera el código por ti',
            'Validas que funciona correctamente',
            'Iteras si es necesario'
          ]
        },
        {
          title: 'Componentes del Sistema',
          items: [
            'El Humano: Tener la visión, describir claramente, validar resultados',
            'La IA: Entender lenguaje natural, generar código correcto',
            'Las Herramientas: v0.dev, Claude, Copilot para iteración rápida'
          ]
        },
        {
          title: 'Ventajas',
          items: [
            'Velocidad: Prototipo a producción en horas',
            'Accesibilidad: Barrera de entrada baja',
            'Calidad: IA conoce mejores prácticas',
            'Enfoque: Problemas, no implementación'
          ]
        }
      ]
    },
    {
      id: 'prompts',
      title: 'Prompts Efectivos',
      icon: <PenTool size={20} />,
      description: 'Domina el arte de escribir instrucciones claras para la IA',
      color: 'purple',
      sections: [
        {
          title: 'Anatomía de un Prompt Efectivo',
          items: [
            'Contexto: Qué framework (React, Vue), qué estilo (TailwindCSS)',
            'Objetivo: Qué quieres construir específicamente',
            'Estructura: Cómo debe organizarse el código',
            'Detalles: Nombres de variables, funciones específicas'
          ]
        },
        {
          title: 'Ejemplo de Prompt para Regenmon',
          items: [
            '"Crea un componente React llamado Display"',
            '"Debe mostrar el nombre del Regenmon en grande"',
            '"Debe mostrar 3 barras de progreso: Felicidad, Energía, Hambre"',
            '"Usa TailwindCSS para los estilos"',
            '"Usa lucide-react para los iconos"'
          ]
        },
        {
          title: 'Tips para Mejores Resultados',
          items: [
            'Sé específico con nombres y términos técnicos',
            'Divide tareas grandes en componentes pequeños',
            'Itera: pide cambios específicos si algo no está bien',
            'Pide código comentado si estás aprendiendo'
          ]
        }
      ]
    },
    {
      id: 'components',
      title: 'Componentes React',
      icon: <Component size={20} />,
      description: 'Los bloques fundamentales de construcción de tu aplicación',
      color: 'green',
      sections: [
        {
          title: 'Qué Es Un Componente',
          items: [
            'Una pieza independiente de interfaz que puedes reutilizar',
            'Función que retorna HTML (JSX)',
            'Puede tener su propia lógica y estado',
            'Se puede componer con otros componentes'
          ]
        },
        {
          title: 'Props: Cómo se Comunican',
          items: [
            'Props son parámetros que pasas al componente',
            'Hacen que los componentes sean reutilizables',
            'Flujo de datos de padre a hijo',
            'Inmutables: el hijo no puede modificar las props'
          ]
        },
        {
          title: 'Componentes en Regenmon',
          items: [
            'Display: Muestra la mascota y sus stats',
            'ModalCreacion: Formulario para crear nuevo Regenmon',
            'BarraProgreso: Muestra felicidad, energía, hambre',
            'App: Componente raíz que decide qué mostrar'
          ]
        }
      ]
    },
    {
      id: 'state',
      title: 'State y localStorage',
      icon: <Database size={20} />,
      description: 'Maneja y persiste los datos de tu aplicación',
      color: 'sky',
      sections: [
        {
          title: 'useState: La Memoria Activa',
          items: [
            'Variable que cuando cambia, actualiza automáticamente la pantalla',
            'const [valor, setValor] = useState(inicial)',
            'Solo cambia con setValor(), nunca modificar directamente',
            'React renderiza el componente cuando el state cambia'
          ]
        },
        {
          title: 'localStorage: La Memoria Persistente',
          items: [
            'Guarda datos en el navegador permanentemente',
            'localStorage.setItem("key", JSON.stringify(data))',
            'JSON.parse(localStorage.getItem("key"))',
            'Los datos persisten aunque cierres el navegador'
          ]
        },
        {
          title: 'Pattern: State + localStorage',
          items: [
            'Inicializar state con datos de localStorage',
            'Cada vez que state cambia, guardar en localStorage',
            'Usar useEffect para sincronización automática',
            'En Regenmon: guardar nombre, tipo, stats'
          ]
        }
      ]
    },
    {
      id: 'deploy',
      title: 'Deploy y Responsive',
      icon: <Rocket size={20} />,
      description: 'Publica tu aplicación y hazla accesible desde cualquier dispositivo',
      color: 'pink',
      sections: [
        {
          title: 'Qué Es Deploy',
          items: [
            'Publicar tu app en internet para que cualquiera pueda acceder',
            'Tu código en Vercel/Netlify, no en tu computadora',
            'Tienes una URL única y pública',
            'Cada cambio se refleja automáticamente'
          ]
        },
        {
          title: 'Deploy en Vercel (Recomendado)',
          items: [
            '1. Conecta tu cuenta de GitHub',
            '2. Importa el proyecto de v0',
            '3. Vercel detecta configuración automáticamente',
            '4. Click en Deploy y espera ~2 minutos'
          ]
        },
        {
          title: 'Diseño Responsive',
          items: [
            'Tu app debe verse bien en móvil, tablet y desktop',
            'TailwindCSS: sm:, md:, lg: para diferentes tamaños',
            'Prueba en múltiples dispositivos',
            'Chrome DevTools para simular diferentes pantallas'
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
            to="/doc/session-3/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.deliverable')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
            <span>→</span>
          </Link>
        </div>

        {/* Modal for Resource Details */}
        {selectedResource && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedResource(null)}
          >
            <div
              className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 bg-card border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-border/50 rounded text-muted-foreground">
                    {selectedResource.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedResource.title}</h2>
                    <p className="text-muted-foreground text-sm mt-0.5">{selectedResource.description}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedResource(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Cerrar ventana"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(85vh-140px)] bg-background space-y-8">
                {selectedResource.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-xl font-bold text-orange-400 flex items-center gap-2">
                      <div className="w-1 h-6 bg-orange-400 rounded-full"></div>
                      {section.title}
                    </h3>
                    <div className="space-y-3 ml-5">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 group">
                          <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-foreground/90 leading-relaxed">{item}</p>
                        </div>
                      ))}
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
