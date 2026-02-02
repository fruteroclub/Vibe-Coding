import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2, ExternalLink, CheckCircle } from 'lucide-react';

const Session1Deliverable = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const levels = [
    {
      id: 'core',
      emoji: '🟢',
      title: 'NIVEL 1 — CORE (Mínimo Aceptable)',
      subtitle: '🔑 Este nivel demuestra que el alumno entendió la sesión y puede continuar.',
      sections: [
        {
          title: 'A. Creación Básica del Regenmon',
          items: [
            'Existe una app desplegada con URL pública',
            'Se muestra un Regenmon en pantalla',
            'El usuario puede:',
            '  • Escribir un nombre',
            '  • Elegir un tipo (🌱 / 💧 / ✨)',
            '  • Crear el Regenmon'
          ]
        },
        {
          title: 'B. Display Principal',
          items: [
            'Se muestra el nombre del Regenmon',
            'Se muestra un sprite o emoji del tipo elegido',
            'Existen 3 barras de stats visibles:',
            '  • Felicidad',
            '  • Energía',
            '  • Hambre',
            'Los stats tienen valores iniciales (no importa el número exacto)'
          ]
        },
        {
          title: 'C. Persistencia Básica',
          items: [
            'Al recargar la página:',
            '  • El Regenmon sigue existiendo',
            '  • El nombre y tipo no se pierden'
          ]
        }
      ],
      result: '"Mi Regenmon existe, vive en internet y no se borra."',
      approval: '👉 Aprobado para continuar a Sesión 2'
    },
    {
      id: 'complete',
      emoji: '🟡',
      title: 'NIVEL 2 — COMPLETO (Esperado)',
      subtitle: '🎯 Este nivel demuestra buen entendimiento y ejecución correcta.',
      sections: [
        {
          title: 'D. Modal de Creación Funcional',
          items: [
            'El modal aparece solo si NO existe Regenmon',
            'Input de nombre visible y usable',
            'No permite crear Regenmon sin nombre',
            'Solo se puede elegir un tipo a la vez',
            'El botón de crear:',
            '  • Se deshabilita si faltan datos',
            '  • Crea el Regenmon correctamente'
          ]
        },
        {
          title: 'E. Display Refinado',
          items: [
            'El nombre se muestra de forma clara y centrada',
            'El sprite está centrado en su contenedor',
            'Las barras:',
            '  • Tienen colores distintos',
            '  • Representan visualmente el valor'
          ]
        },
        {
          title: 'F. Persistencia Completa',
          items: [
            'Los datos se guardan en localStorage',
            'Al recargar:',
            '  • No reaparece el modal',
            '  • Stats y tipo persisten'
          ]
        }
      ],
      result: '"Mi Regenmon se siente como una app real."',
      approval: '👉 Este es el nivel recomendado para la mayoría de alumnos'
    },
    {
      id: 'excellent',
      emoji: '🔵',
      title: 'NIVEL 3 — EXCELENTE (Alta Calidad)',
      subtitle: '✨ Este nivel demuestra cuidado por UX y detalle.',
      sections: [
        {
          title: 'G. Validaciones y UX',
          items: [
            'Nombre con validaciones claras (mín / máx)',
            'Mensajes de error visibles y entendibles',
            'Feedback visual al seleccionar tipo',
            'Botón cambia visualmente según estado'
          ]
        },
        {
          title: 'H. Reinicio del Regenmon',
          items: [
            'Botón de reinicio visible pero discreto',
            'Modal de confirmación antes de borrar',
            'Al confirmar:',
            '  • Se borra localStorage',
            '  • Vuelve el modal de creación'
          ]
        },
        {
          title: 'I. Responsive',
          items: [
            'Funciona correctamente en:',
            '  • Celular',
            '  • Tablet',
            '  • Computadora',
            'No se desborda el contenido',
            'Texto legible sin zoom'
          ]
        }
      ],
      result: '"Mi Regenmon está bien diseñado y cuidado."',
      approval: ''
    },
    {
      id: 'bonus',
      emoji: '🟣',
      title: 'NIVEL 4 — BONUS / EXTRA (No Obligatorio)',
      subtitle: '🚀 Este nivel NO es requerido, solo suma.',
      sections: [
        {
          title: '',
          items: [
            'Contador de caracteres en el nombre',
            'Animaciones suaves (hover, transición)',
            'Estilo pixel/retro bien marcado',
            'Microinteracciones visuales'
          ]
        }
      ],
      result: '',
      approval: '❗ Este nivel NO afecta aprobación'
    }
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          🥚 SESIÓN 1 — Nace tu Regenmon
        </h1>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Entregable 1: "Regenmon Estático Desplegado"
        </h2>

        <div className="mb-8 p-6 border border-border/50 rounded-lg bg-muted/20">
          <h3 className="text-xl font-bold text-foreground mb-4">
            📊 Evaluación por Niveles (Estandarizada)
          </h3>
          <p className="text-sm text-muted-foreground">
            Haz clic en cada nivel para ver los detalles de los requisitos.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {levels.map((level) => (
            <div key={level.id} className="border border-border/50 rounded-lg overflow-hidden bg-card/30">
              <button
                type="button"
                onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                className="w-full p-6 text-left hover:bg-muted/30 transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-2xl">{level.emoji}</span>
                    {level.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{level.subtitle}</p>
                </div>
                <span className="text-2xl ml-4">
                  {selectedLevel === level.id ? '▼' : '▶'}
                </span>
              </button>

              {selectedLevel === level.id && (
                <div className="p-6 pt-0 space-y-6">
                  {level.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.title && (
                        <h4 className="font-bold text-foreground mb-3">{section.title}</h4>
                      )}
                      <div className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              size={16}
                              className="text-green-400 mt-1 flex-shrink-0"
                            />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {level.result && (
                    <div className="mt-6 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
                      <div className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            ✅ Resultado del Nivel {level.title.split('—')[0].trim()}:
                          </p>
                          <p className="text-sm text-muted-foreground">{level.result}</p>
                          {level.approval && (
                            <p className="text-sm text-muted-foreground mt-2">{level.approval}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {level.id === 'bonus' && (
                    <div className="mt-6 p-4 border border-purple-500/30 rounded-lg bg-purple-500/5">
                      <p className="text-sm text-muted-foreground font-semibold">
                        {level.approval}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <a
          href="https://www.frutero.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-center rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mb-12"
        >
          <span className="flex items-center justify-center gap-2">
            Entregar Sesión 1
            <ExternalLink size={20} />
          </span>
        </a>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-1/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session1Deliverable;
