import { useState, useEffect } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  subItems?: ChecklistItem[];
}

const Session5Deliverable = () => {
  const checklistData: ChecklistItem[] = [
    {
      id: 'nivel1',
      text: '🟢 NIVEL 1 — CORE (Mínimo Aceptable)',
      subItems: [
        {
          id: 'A',
          text: 'A. Visibilidad Pública',
          subItems: [
            { id: 'A1', text: 'Existe un botón para hacer público al Regenmon' },
            { id: 'A2', text: 'El usuario puede activar el estado público' },
            { id: 'A3', text: 'Se genera una URL pública' },
            { id: 'A4', text: 'Al abrir la URL: Se ve el Regenmon' },
            { id: 'A5', text: 'Al abrir la URL: Se ve su nombre y evolución' },
            { id: 'A6', text: 'El estado público se mantiene al recargar' }
          ]
        },
        {
          id: 'B',
          text: 'B. Modo Visita',
          subItems: [
            { id: 'B1', text: 'Al visitar un Regenmon: Se muestra como solo lectura' },
            { id: 'B2', text: 'No se pueden realizar acciones privadas' },
            { id: 'B3', text: 'Hay un indicador claro de "modo visita"' }
          ]
        }
      ]
    },
    {
      id: 'nivel2',
      text: '🟡 NIVEL 2 — COMPLETO (Esperado)',
      subItems: [
        {
          id: 'C',
          text: 'C. Feed de Descubrimiento',
          subItems: [
            { id: 'C1', text: 'Existe una sección para descubrir Regenmons' },
            { id: 'C2', text: 'Se muestran Regenmons públicos' },
            { id: 'C3', text: 'Cada tarjeta muestra: Nombre' },
            { id: 'C4', text: 'Cada tarjeta muestra: Sprite / emoji' },
            { id: 'C5', text: 'Cada tarjeta muestra: Etapa' },
            { id: 'C6', text: 'Al hacer click: Se abre la vista pública' }
          ]
        },
        {
          id: 'D',
          text: 'D. Interacción Social Básica',
          subItems: [
            { id: 'D1', text: 'Al visitar otro Regenmon: Existe al menos una interacción' },
            { id: 'D2', text: 'Ejemplo: Saludar' },
            { id: 'D3', text: 'La interacción genera: Respuesta del Regenmon' },
            { id: 'D4', text: 'La interacción genera: Feedback visual simple' }
          ]
        },
        {
          id: 'E',
          text: 'E. Métrica Básica',
          subItems: [
            { id: 'E1', text: 'Existe un contador de visitas' },
            { id: 'E2', text: 'El contador aumenta cuando alguien visita' }
          ]
        }
      ]
    },
    {
      id: 'nivel3',
      text: '🔵 NIVEL 3 — EXCELENTE (Alta Calidad)',
      subItems: [
        {
          id: 'F',
          text: 'F. Interacciones con Valor',
          subItems: [
            { id: 'F1', text: 'Existe una interacción que cuesta monedas' },
            { id: 'F2', text: 'Ejemplo: Regalar' },
            { id: 'F3', text: 'Al interactuar: Se validan recursos' },
            { id: 'F4', text: 'Al interactuar: Cambian monedas' },
            { id: 'F5', text: 'Ambos Regenmons reaccionan' }
          ]
        },
        {
          id: 'G',
          text: 'G. Notificaciones Sociales',
          subItems: [
            { id: 'G1', text: 'El usuario recibe notificaciones: Alguien visita' },
            { id: 'G2', text: 'El usuario recibe notificaciones: Alguien interactúa' },
            { id: 'G3', text: 'Las notificaciones son: Claras' },
            { id: 'G4', text: 'Las notificaciones son: Breves' },
            { id: 'G5', text: 'Las notificaciones son: No invasivas' }
          ]
        },
        {
          id: 'H',
          text: 'H. Persistencia Social',
          subItems: [
            { id: 'H1', text: 'Visitas y regalos se guardan' },
            { id: 'H2', text: 'Al recargar: Las métricas no se pierden' }
          ]
        }
      ]
    },
    {
      id: 'nivel4',
      text: '🟣 NIVEL 4 — BONUS / EXTRA (No Obligatorio)',
      subItems: [
        {
          id: 'I',
          text: 'I. Descubrimiento Avanzado',
          subItems: [
            { id: 'I1', text: 'Ordenar Regenmons (nuevos / más visitados)' },
            { id: 'I2', text: 'Filtrar por etapa' }
          ]
        },
        {
          id: 'J',
          text: 'J. Experiencia Social Avanzada',
          subItems: [
            { id: 'J1', text: 'Mensaje del dueño visible en modo visita' },
            { id: 'J2', text: 'Animaciones al recibir visitas o regalos' },
            { id: 'J3', text: 'Confetti o microcelebraciones' }
          ]
        },
        {
          id: 'K',
          text: 'K. Métricas Avanzadas',
          subItems: [
            { id: 'K1', text: 'Ranking simple' },
            { id: 'K2', text: 'Resumen social (visitas, regalos)' }
          ]
        }
      ]
    }
  ];

  // Cambié la clave a 'session5-checklist-v2' para reiniciar el estado
  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('session5-checklist-v2');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('session5-checklist-v2', JSON.stringify(Array.from(checkedItems)));
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

      const allIds = getAllChildIds(item);

      if (isCurrentlyChecked) {
        allIds.forEach(childId => newSet.delete(childId));
      } else {
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
          🌍 SESIÓN 5 — Tu Regenmon Encuentra Amigos
        </h1>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Entregable 5: "Regenmon Social"
        </h2>

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

        <div className="mb-8 p-4 border border-blue-500/30 rounded-lg bg-blue-500/5">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Instrucciones:</strong> Haz clic en cada elemento para marcarlo como completado.
            Los elementos completados aparecerán tachados y en gris. Tu progreso se guarda automáticamente.
          </p>
        </div>

        <div className="space-y-1 mb-12 border border-border/50 rounded-lg p-4 bg-card/30">
          {checklistData.map(item => renderChecklistItem(item))}
        </div>

        {/* Submit Button */}
        <a
          href="https://poktapok-iaegp4wrg-fruteroclub.vercel.app/bootcamp/vibecoding"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold text-center rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mb-12"
        >
          <span className="flex items-center justify-center gap-2">
            Entregar Sesión 5
            <ExternalLink size={20} />
          </span>
        </a>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-5/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
          </Link>

          <Link
            to="/doc/session-5/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Prompt</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session5Deliverable;
