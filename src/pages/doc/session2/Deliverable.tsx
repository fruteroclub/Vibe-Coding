import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  subItems?: ChecklistItem[];
}

const Session2Deliverable = () => {
  const { t } = useTranslation();

  const checklistData: ChecklistItem[] = [
    {
      id: 'A',
      text: 'A. Pre-requisitos (De Sesión 1)',
      subItems: [
        { id: 'A1', text: 'Todo lo de Sesión 1 funciona' },
        { id: 'A2', text: 'Regenmon creado y visible' }
      ]
    },
    {
      id: 'B',
      text: 'B. Interfaz de Chat',
      subItems: [
        {
          id: 'B1',
          text: 'Contenedor de Chat:',
          subItems: [
            { id: 'B1a', text: 'Visible debajo del display del Regenmon' },
            { id: 'B1b', text: 'Estilo coherente (pixel/retro)' }
          ]
        },
        { id: 'B2', text: 'Área de Mensajes:' },
        { id: 'B3', text: 'Mensajes del Usuario:' },
        { id: 'B4', text: 'Mensajes del Regenmon:' },
        { id: 'B5', text: 'Indicador "Escribiendo...":' },
        { id: 'B6', text: 'Input de Mensaje:' }
      ]
    },
    {
      id: 'C',
      text: 'C. Funcionamiento del Chat',
      subItems: [
        {
          id: 'C1',
          text: 'Envío de mensajes:',
          subItems: [
            { id: 'C1a', text: 'Usuario escribe y envía' },
            { id: 'C1b', text: 'Mensaje aparece en burbuja azul' },
            { id: 'C1c', text: 'Aparece indicador "..."' },
            { id: 'C1d', text: 'Regenmon responde en burbuja verde' },
            { id: 'C1e', text: 'Respuestas en español' },
            { id: 'C1f', text: 'Respuestas cortas (<50 palabras)' }
          ]
        },
        {
          id: 'C2',
          text: 'Persistencia:',
          subItems: [
            { id: 'C2a', text: 'Mensajes se guardan en localStorage' },
            { id: 'C2b', text: 'Al recargar, los mensajes siguen ahí' }
          ]
        }
      ]
    },
    {
      id: 'E',
      text: 'E. Sistema de Efectos en Stats',
      subItems: [
        {
          id: 'E1',
          text: 'Interacciones Positivas (+5 Felicidad):',
          subItems: [
            { id: 'E1a', text: 'Detecta: "te quiero", "gracias", "eres genial", ❤️, 😊' },
            { id: 'E1b', text: 'Sube Felicidad +5' },
            { id: 'E1c', text: 'Muestra "+5 💚" flotando' }
          ]
        },
        {
          id: 'E2',
          text: 'Interacciones de Juego (+3 Felicidad, -2 Energía):',
          subItems: [
            { id: 'E2a', text: 'Detecta: "jugar", "juguemos", "vamos"' },
            { id: 'E2b', text: 'Sube Felicidad +3, baja Energía -2' },
            { id: 'E2c', text: 'Muestra "+3 💚" y "-2 ⚡"' }
          ]
        },
        {
          id: 'E3',
          text: 'Conversaciones Largas (-3 Energía cada 5 mensajes):',
          subItems: [
            { id: 'E3a', text: 'Cuenta mensajes intercambiados' },
            { id: 'E3b', text: 'Cada 5 mensajes: -3 Energía' },
            { id: 'E3c', text: 'Regenmon menciona estar cansado' }
          ]
        },
        {
          id: 'E4',
          text: 'Menciones de Comida (+5 Hambre):',
          subItems: [
            { id: 'E4a', text: 'Detecta: "comida", "comer", "pizza", "hambre"' },
            { id: 'E4b', text: 'Sube Hambre +5' },
            { id: 'E4c', text: 'Regenmon menciona tener hambre' }
          ]
        },
        {
          id: 'E5',
          text: 'Feedback Visual:',
          subItems: [
            { id: 'E5a', text: 'Aparece texto flotante cuando cambia stat' },
            { id: 'E5b', text: 'Ejemplo: "+5 💚" sobre la barra' },
            { id: 'E5c', text: 'Se desvanece después de 1-2 segundos' }
          ]
        },
        {
          id: 'E6',
          text: 'Comportamiento según Stats:',
          subItems: [
            { id: 'E6a', text: 'Si Energía < 30: Regenmon menciona sueño' },
            { id: 'E6b', text: 'Si Felicidad > 70: Regenmon es extra entusiasta' },
            { id: 'E6c', text: 'Si Hambre > 70: Regenmon menciona hambre' }
          ]
        }
      ]
    },
    {
      id: 'F',
      text: 'F. Sistema de Memoria (BONUS - Opcional)',
      subItems: [
        {
          id: 'F1',
          text: 'Detecta información personal:',
          subItems: [
            { id: 'F1a', text: '"Me llamo [nombre]"' },
            { id: 'F1b', text: '"Trabajo en [lugar]"' },
            { id: 'F1c', text: '"Me gusta [cosa]"' },
            { id: 'F1d', text: '"Tengo un/una [mascota/cosa]"' }
          ]
        },
        {
          id: 'F2',
          text: 'Guarda memorias:',
          subItems: [
            { id: 'F2a', text: 'Se guardan en localStorage' }
          ]
        },
        {
          id: 'F3',
          text: 'Usa memorias en conversación:',
          subItems: [
            { id: 'F3a', text: 'Regenmon menciona cosas que recordó' },
            { id: 'F3b', text: 'Hace preguntas de seguimiento' }
          ]
        },
        {
          id: 'F4',
          text: 'Indicador visible:',
          subItems: [
            { id: 'F4a', text: 'Muestra "🧠 X memorias"' }
          ]
        }
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('session2-checklist');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('session2-checklist', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const getAllChildIds = (item: ChecklistItem): string[] => {
    let ids: string[] = [item.id];
    if (item.subItems) {
      item.subItems.forEach(subItem => {
        ids = [...ids, ...getAllChildIds(subItem)];
      });
    }
    return ids;
  };

  const toggleItem = (id: string, item: ChecklistItem) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      const isCurrentlyChecked = newSet.has(id);

      // Obtener todos los IDs del item y sus hijos
      const allIds = getAllChildIds(item);

      if (isCurrentlyChecked) {
        // Si está marcado, desmarcar el item y todos sus hijos
        allIds.forEach(childId => newSet.delete(childId));
      } else {
        // Si no está marcado, marcar el item y todos sus hijos
        allIds.forEach(childId => newSet.add(childId));
      }

      return newSet;
    });
  };

  const renderChecklistItem = (item: ChecklistItem, level: number = 0) => {
    const isChecked = checkedItems.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const marginLeft = level * 24;

    return (
      <div key={item.id} style={{ marginLeft: `${marginLeft}px` }}>
        <div
          className={`flex items-start gap-3 py-2 px-3 rounded-lg transition-all cursor-pointer hover:bg-muted/30 ${
            isChecked ? 'opacity-50' : ''
          }`}
          onClick={() => toggleItem(item.id, item)}
        >
          {isChecked ? (
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
          ) : (
            <Circle size={20} className="text-muted-foreground mt-0.5 flex-shrink-0" />
          )}
          <p
            className={`text-sm leading-relaxed ${
              isChecked
                ? 'line-through text-muted-foreground'
                : hasSubItems
                ? 'font-semibold text-foreground'
                : 'text-foreground'
            }`}
          >
            {item.text}
          </p>
        </div>
        {item.subItems &&
          item.subItems.map(subItem => renderChecklistItem(subItem, level + 1))}
      </div>
    );
  };

  const totalItems = () => {
    let count = 0;
    const countItems = (items: ChecklistItem[]) => {
      items.forEach(item => {
        count++;
        if (item.subItems) countItems(item.subItems);
      });
    };
    countItems(checklistData);
    return count;
  };

  const completedItems = checkedItems.size;
  const total = totalItems();
  const progress = Math.round((completedItems / total) * 100);

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          Entregable 2: "Regenmon Conversacional"
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session2.title')}
        </p>

        {/* Progress Bar */}
        <div className="mb-8 p-6 border border-border/50 rounded-lg bg-muted/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-foreground">Progreso del Checklist</span>
            <span className="text-sm text-muted-foreground">
              {completedItems} / {total} completados
            </span>
          </div>
          <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-green-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {progress}% completado
          </p>
        </div>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Checklist Técnico Completo
        </h2>

        <div className="mb-8 p-4 border border-blue-500/30 rounded-lg bg-blue-500/5">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Instrucciones:</strong> Haz clic en cada elemento para marcarlo como completado.
            Los elementos completados aparecerán tachados y en gris. Tu progreso se guarda automáticamente.
          </p>
        </div>

        <div className="space-y-1 mb-12 border border-border/50 rounded-lg p-4 bg-card/30">
          {checklistData.map(item => renderChecklistItem(item))}
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-12 p-6 border border-yellow-500/30 rounded-lg bg-yellow-500/5">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            Troubleshooting Común
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-foreground">Problema 1: El chat no aparece o no responde</p>
              <p className="text-muted-foreground">Verifica que el contenedor de chat esté correctamente renderizado y que el input esté funcional</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 2: La API no responde</p>
              <p className="text-muted-foreground">Revisa que tu API key esté correctamente configurada y que la llamada a la API funcione</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 3: Los stats no se actualizan</p>
              <p className="text-muted-foreground">Verifica la detección de palabras clave y que el sistema de efectos esté implementado correctamente</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 4: Los mensajes no persisten</p>
              <p className="text-muted-foreground">Asegúrate de guardar el historial en localStorage después de cada mensaje</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 5: El scroll no funciona</p>
              <p className="text-muted-foreground">Implementa scroll automático al último mensaje con scrollIntoView() o similar</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <a
          href="https://www.frutero.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-center rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mb-12"
        >
          <span className="flex items-center justify-center gap-2">
            Entregar
            <ExternalLink size={20} />
          </span>
        </a>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.prompt')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.supportMaterial')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session2Deliverable;
