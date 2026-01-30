import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Code2,
  Zap,
  Shield,
  Settings,
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

const Session2Support = () => {
  const { t } = useTranslation();
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const resources: ResourceSection[] = [
    {
      id: 'api-integration',
      title: 'Integración de APIs',
      icon: <Code2 size={20} />,
      description: 'Conecta tu app con servicios externos y APIs de IA',
      color: 'orange',
      sections: [
        {
          title: 'Qué Es Una API',
          items: [
            'Interface que permite que dos aplicaciones se comuniquen',
            'Funciona como un "mesero" entre tu app y un servicio externo',
            'Envías una solicitud (request) y recibes una respuesta (response)',
            'En nuestro caso: enviamos texto, recibimos respuesta de IA'
          ]
        },
        {
          title: 'Claude API - Anthropic',
          items: [
            'Necesitas una cuenta en console.anthropic.com',
            'Generas una API key desde el dashboard',
            'La API key es como una contraseña - nunca la compartas',
            'Costo: $3-5 USD de créditos inicial (suficiente para el bootcamp)'
          ]
        },
        {
          title: 'Hacer Requests desde React',
          items: [
            'Usa fetch() o axios para hacer llamadas HTTP',
            'POST request con tu mensaje en el body',
            'Headers incluyen tu API key para autenticación',
            'Respuesta viene en formato JSON con el texto generado'
          ]
        }
      ]
    },
    {
      id: 'chat-interface',
      title: 'Interfaz de Chat',
      icon: <MessageSquare size={20} />,
      description: 'Diseña una experiencia de conversación fluida',
      color: 'blue',
      sections: [
        {
          title: 'Componentes del Chat',
          items: [
            'Input: Donde el usuario escribe mensajes',
            'Messages Container: Lista scrolleable de mensajes',
            'Message Bubble: Componente individual para cada mensaje',
            'Send Button: Botón para enviar (puede ser icon)'
          ]
        },
        {
          title: 'Estado del Chat',
          items: [
            'Array de mensajes: [{ role: "user", content: "hola" }, ...]',
            'Loading state: mostrar "escribiendo..." mientras esperas respuesta',
            'Error state: manejar cuando la API falla',
            'Auto-scroll: bajar automáticamente al nuevo mensaje'
          ]
        },
        {
          title: 'UX Tips',
          items: [
            'Deshabilita input mientras cargas respuesta',
            'Muestra indicador de "IA escribiendo..."',
            'Diferencia visual entre mensajes del usuario y de la IA',
            'Enter para enviar, Shift+Enter para nueva línea'
          ]
        }
      ]
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      icon: <Zap size={20} />,
      description: 'Diseña instrucciones efectivas para la IA',
      color: 'purple',
      sections: [
        {
          title: 'System Prompt',
          items: [
            'Define el rol y personalidad de la IA',
            'Se envía al inicio de cada conversación',
            'En Regenmon: "Eres un [tipo] con [stats] de felicidad"',
            'Cambia según el estado actual del Regenmon'
          ]
        },
        {
          title: 'Contexto Dinámico',
          items: [
            'Incluye datos relevantes en cada request',
            'Ejemplo: "Tu energía está en 20%, responde cansado"',
            'La IA adapta personalidad según estos datos',
            'Hace que cada Regenmon sea único'
          ]
        },
        {
          title: 'Mejores Prácticas',
          items: [
            'Sé específico sobre el tono que quieres',
            'Da ejemplos de cómo debe responder',
            'Limita longitud de respuesta si es necesario',
            'Prueba diferentes prompts y compara resultados'
          ]
        }
      ]
    },
    {
      id: 'environment-variables',
      title: 'Variables de Entorno',
      icon: <Shield size={20} />,
      description: 'Maneja secretos de forma segura',
      color: 'green',
      sections: [
        {
          title: 'Por Qué Usarlas',
          items: [
            'API keys nunca deben estar en el código',
            'Si subes código a GitHub, expondrías tu key',
            'Cualquiera podría usarla y cobrarte dinero',
            'Variables de entorno las mantienen privadas'
          ]
        },
        {
          title: 'Cómo Configurarlas',
          items: [
            'Crea archivo .env en la raíz del proyecto',
            'Agrega .env al .gitignore (nunca subir a GitHub)',
            'Variables empiezan con VITE_: VITE_CLAUDE_API_KEY=tu-key',
            'Accedes con import.meta.env.VITE_CLAUDE_API_KEY'
          ]
        },
        {
          title: 'En Producción (Vercel)',
          items: [
            'No uses archivo .env en producción',
            'Agrega variables en Vercel dashboard',
            'Settings → Environment Variables',
            'Redeploy después de agregar variables'
          ]
        }
      ]
    },
    {
      id: 'async-operations',
      title: 'Operaciones Asíncronas',
      icon: <Settings size={20} />,
      description: 'Maneja código que toma tiempo en ejecutarse',
      color: 'sky',
      sections: [
        {
          title: 'async/await',
          items: [
            'await pausa la ejecución hasta que la promesa resuelva',
            'Solo puedes usar await dentro de funciones async',
            'const response = await fetch(...) espera la respuesta',
            'Mucho más legible que .then().then().then()'
          ]
        },
        {
          title: 'Try/Catch para Errores',
          items: [
            'try { } catch(error) { } maneja errores',
            'Si algo falla en try, salta a catch',
            'Muestra mensaje de error al usuario',
            'Previene que tu app se rompa completamente'
          ]
        },
        {
          title: 'Loading States',
          items: [
            'const [loading, setLoading] = useState(false)',
            'setLoading(true) antes del await',
            'setLoading(false) después de recibir respuesta',
            'Mostrar spinner o "Cargando..." mientras loading === true'
          ]
        }
      ]
    },
    {
      id: 'testing-deployment',
      title: 'Testing y Deploy',
      icon: <Rocket size={20} />,
      description: 'Prueba localmente y despliega con APIs en producción',
      color: 'pink',
      sections: [
        {
          title: 'Testing Local',
          items: [
            'Usa console.log() para ver qué datos llegan',
            'Verifica que la API key se está leyendo correctamente',
            'Prueba casos de error: API key inválida, sin internet',
            'Chrome DevTools → Network tab para ver requests'
          ]
        },
        {
          title: 'Deploy Considerations',
          items: [
            'Vercel necesita tus environment variables configuradas',
            'No olvides agregar VITE_CLAUDE_API_KEY en settings',
            'La API se llama desde el cliente (browser), no servidor',
            'Considera límites de rate (requests por minuto)'
          ]
        },
        {
          title: 'Debugging Común',
          items: [
            'Error 401: API key incorrecta o mal formateada',
            'Error 429: Demasiados requests, espera un momento',
            'Error 500: Problema del servidor de Anthropic',
            'CORS errors: Solo desde dominios permitidos'
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
            to="/doc/session-2/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.deliverable')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">Sesión 2</div>
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

export default Session2Support;
