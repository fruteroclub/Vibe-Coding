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

const Session3Deliverable = () => {
  const checklistData: ChecklistItem[] = [
    {
      id: 'nivel1',
      text: '🟢 NIVEL 1 — CORE (Mínimo Aceptable)',
      subItems: [
        {
          id: 'A',
          text: 'A. Identidad del Usuario',
          subItems: [
            { id: 'A1', text: 'Existe un botón para Iniciar Sesión' },
            { id: 'A2', text: 'El usuario puede iniciar sesión (email o Google)' },
            { id: 'A3', text: 'Después de iniciar sesión: Se muestra su nombre o email' },
            { id: 'A4', text: 'La sesión se mantiene al recargar la página' }
          ]
        },
        {
          id: 'B',
          text: 'B. Economía Básica',
          subItems: [
            { id: 'B1', text: 'Existe un contador de monedas $FRUTA' },
            { id: 'B2', text: 'No logueado → "🍊 --- $FRUTA"' },
            { id: 'B3', text: 'Logueado → muestra un número' },
            { id: 'B4', text: 'El valor de monedas se guarda (no se pierde al recargar)' }
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
          text: 'C. Obtener Monedas',
          subItems: [
            { id: 'C1', text: 'Existe un botón para Conseguir monedas' },
            { id: 'C2', text: 'El botón solo aparece si tienes 0 monedas' },
            { id: 'C3', text: 'Al usarlo: Las monedas aumentan' },
            { id: 'C4', text: 'Al usarlo: El botón desaparece' },
            { id: 'C5', text: 'No puedes obtener monedas infinitamente' }
          ]
        },
        {
          id: 'D',
          text: 'D. Alimentar al Regenmon',
          subItems: [
            { id: 'D1', text: 'Existe un botón "Alimentar"' },
            { id: 'D2', text: 'Al alimentar: Las monedas disminuyen' },
            { id: 'D3', text: 'Al alimentar: El stat de Hambre baja' },
            { id: 'D4', text: 'El Regenmon reacciona con un mensaje' }
          ]
        },
        {
          id: 'E',
          text: 'E. Persistencia de Acciones',
          subItems: [
            { id: 'E1', text: 'Las monedas y stats se mantienen al recargar' },
            { id: 'E2', text: 'El estado del Regenmon refleja las acciones previas' }
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
          text: 'F. Feedback de Sistema',
          subItems: [
            { id: 'F1', text: 'Aparecen mensajes de estado: "Procesando…"' },
            { id: 'F2', text: 'Aparecen mensajes de estado: "¡Listo!"' },
            { id: 'F3', text: 'Aparecen mensajes de error si algo falla' },
            { id: 'F4', text: 'El usuario entiende qué está pasando en todo momento' }
          ]
        },
        {
          id: 'G',
          text: 'G. Detalles Visuales de Economía',
          subItems: [
            { id: 'G1', text: 'Al gastar monedas: Se muestra el cambio visual (ej: "-10 🍊")' },
            { id: 'G2', text: 'El contador de monedas se actualiza inmediatamente' },
            { id: 'G3', text: 'La interacción se siente fluida' }
          ]
        },
        {
          id: 'H',
          text: 'H. Validaciones Claras',
          subItems: [
            { id: 'H1', text: 'No puedes alimentar si no tienes monedas' },
            { id: 'H2', text: 'Los botones se deshabilitan correctamente' },
            { id: 'H3', text: 'El sistema evita acciones inválidas' }
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
          text: 'I. Historial de Actividades',
          subItems: [
            { id: 'I1', text: 'Existe un historial de acciones: Conseguir monedas' },
            { id: 'I2', text: 'Existe un historial de acciones: Alimentar' },
            { id: 'I3', text: 'Cada entrada muestra: Qué acción fue' },
            { id: 'I4', text: 'Cada entrada muestra: Cuántas monedas' },
            { id: 'I5', text: 'Cada entrada muestra: Cuándo ocurrió' },
            { id: 'I6', text: 'El historial se guarda al recargar' }
          ]
        },
        {
          id: 'J',
          text: 'J. Micro-interacciones',
          subItems: [
            { id: 'J1', text: 'Animaciones suaves al ganar o gastar' },
            { id: 'J2', text: 'Reacciones visuales del Regenmon' },
            { id: 'J3', text: 'Pequeños detalles UX' }
          ]
        }
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('session3-checklist-v2');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('session3-checklist-v2', JSON.stringify(Array.from(checkedItems)));
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
          🍊 SESIÓN 3 — Tu Regenmon Tiene Valor
        </h1>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Entregable 3: "Regenmon con Economía"
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
            Entregar Sesión 3
            <ExternalLink size={20} />
          </span>
        </a>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/support"
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

export default Session3Deliverable;
