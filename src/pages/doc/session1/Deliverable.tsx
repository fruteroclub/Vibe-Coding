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

const Session1Deliverable = () => {
  const checklistData: ChecklistItem[] = [
    {
      id: 'nivel1',
      text: '🟢 NIVEL 1 — CORE (Mínimo Aceptable)',
      subItems: [
        {
          id: 'A',
          text: 'A. Creación Básica del Regenmon',
          subItems: [
            { id: 'A1', text: 'Existe una app desplegada con URL pública' },
            { id: 'A2', text: 'Se muestra un Regenmon en pantalla' },
            { id: 'A3', text: 'El usuario puede escribir un nombre' },
            { id: 'A4', text: 'El usuario puede elegir un tipo (🌱 / 💧 / ✨)' },
            { id: 'A5', text: 'El usuario puede crear el Regenmon' }
          ]
        },
        {
          id: 'B',
          text: 'B. Display Principal',
          subItems: [
            { id: 'B1', text: 'Se muestra el nombre del Regenmon' },
            { id: 'B2', text: 'Se muestra un sprite o emoji del tipo elegido' },
            { id: 'B3', text: 'Existen 3 barras de stats visibles: Felicidad, Energía, Hambre' },
            { id: 'B4', text: 'Los stats tienen valores iniciales (no importa el número exacto)' }
          ]
        },
        {
          id: 'C',
          text: 'C. Persistencia Básica',
          subItems: [
            { id: 'C1', text: 'Al recargar la página: El Regenmon sigue existiendo' },
            { id: 'C2', text: 'Al recargar la página: El nombre y tipo no se pierden' }
          ]
        }
      ]
    },
    {
      id: 'nivel2',
      text: '🟡 NIVEL 2 — COMPLETO (Esperado)',
      subItems: [
        {
          id: 'D',
          text: 'D. Modal de Creación Funcional',
          subItems: [
            { id: 'D1', text: 'El modal aparece solo si NO existe Regenmon' },
            { id: 'D2', text: 'Input de nombre visible y usable' },
            { id: 'D3', text: 'No permite crear Regenmon sin nombre' },
            { id: 'D4', text: 'Solo se puede elegir un tipo a la vez' },
            { id: 'D5', text: 'El botón de crear se deshabilita si faltan datos' },
            { id: 'D6', text: 'El botón de crear crea el Regenmon correctamente' }
          ]
        },
        {
          id: 'E',
          text: 'E. Display Refinado',
          subItems: [
            { id: 'E1', text: 'El nombre se muestra de forma clara y centrada' },
            { id: 'E2', text: 'El sprite está centrado en su contenedor' },
            { id: 'E3', text: 'Las barras tienen colores distintos' },
            { id: 'E4', text: 'Las barras representan visualmente el valor' }
          ]
        },
        {
          id: 'F',
          text: 'F. Persistencia Completa',
          subItems: [
            { id: 'F1', text: 'Los datos se guardan en localStorage' },
            { id: 'F2', text: 'Al recargar: No reaparece el modal' },
            { id: 'F3', text: 'Al recargar: Stats y tipo persisten' }
          ]
        }
      ]
    },
    {
      id: 'nivel3',
      text: '🔵 NIVEL 3 — EXCELENTE (Alta Calidad)',
      subItems: [
        {
          id: 'G',
          text: 'G. Validaciones y UX',
          subItems: [
            { id: 'G1', text: 'Nombre con validaciones claras (mín / máx)' },
            { id: 'G2', text: 'Mensajes de error visibles y entendibles' },
            { id: 'G3', text: 'Feedback visual al seleccionar tipo' },
            { id: 'G4', text: 'Botón cambia visualmente según estado' }
          ]
        },
        {
          id: 'H',
          text: 'H. Reinicio del Regenmon',
          subItems: [
            { id: 'H1', text: 'Botón de reinicio visible pero discreto' },
            { id: 'H2', text: 'Modal de confirmación antes de borrar' },
            { id: 'H3', text: 'Al confirmar: Se borra localStorage' },
            { id: 'H4', text: 'Al confirmar: Vuelve el modal de creación' }
          ]
        },
        {
          id: 'I',
          text: 'I. Responsive',
          subItems: [
            { id: 'I1', text: 'Funciona correctamente en celular' },
            { id: 'I2', text: 'Funciona correctamente en tablet' },
            { id: 'I3', text: 'Funciona correctamente en computadora' },
            { id: 'I4', text: 'No se desborda el contenido' },
            { id: 'I5', text: 'Texto legible sin zoom' }
          ]
        }
      ]
    },
    {
      id: 'nivel4',
      text: '🟣 NIVEL 4 — BONUS / EXTRA (No Obligatorio)',
      subItems: [
        { id: 'J1', text: 'Contador de caracteres en el nombre' },
        { id: 'J2', text: 'Animaciones suaves (hover, transición)' },
        { id: 'J3', text: 'Estilo pixel/retro bien marcado' },
        { id: 'J4', text: 'Microinteracciones visuales' }
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('session1-checklist-v2');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('session1-checklist-v2', JSON.stringify(Array.from(checkedItems)));
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
          🥚 SESIÓN 1 — Nace tu Regenmon
        </h1>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          Entregable 1: "Regenmon Estático Desplegado"
        </h2>

        <div className="mb-8 p-6 border border-border/50 rounded-lg bg-muted/20">
          <h3 className="text-xl font-bold text-foreground mb-4">
            📊 Evaluación por Niveles (Estandarizada)
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            🔑 <strong>NIVEL 1 — CORE:</strong> Mínimo aceptable para aprobar
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            🎯 <strong>NIVEL 2 — COMPLETO:</strong> Nivel esperado y recomendado
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            ✨ <strong>NIVEL 3 — EXCELENTE:</strong> Alta calidad con cuidado por UX
          </p>
          <p className="text-sm text-muted-foreground">
            🚀 <strong>NIVEL 4 — BONUS:</strong> No obligatorio, solo suma
          </p>
        </div>

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
            to="/doc/session-1/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1/prompt"
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

export default Session1Deliverable;
