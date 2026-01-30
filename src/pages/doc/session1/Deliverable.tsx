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

const Session1Deliverable = () => {
  const { t } = useTranslation();

  const checklistData: ChecklistItem[] = [
    {
      id: 'A',
      text: 'A. Configuración Inicial',
      subItems: [
        { id: 'A1', text: 'Cuenta de V0 creada y verificada' },
        { id: 'A2', text: 'Proyecto conectado a Vercel' }
      ]
    },
    {
      id: 'B',
      text: 'B. Modal de Creación',
      subItems: [
        { id: 'B1', text: 'Modal aparece automáticamente cuando no existe Regenmon' },
        {
          id: 'B2',
          text: 'Campo de nombre:',
          subItems: [
            { id: 'B2a', text: 'Input de texto visible' },
            { id: 'B2b', text: 'Placeholder dice "¿Cómo se llamará?"' },
            { id: 'B2c', text: 'Contador de caracteres visible (ej: "5/15")' },
            { id: 'B2d', text: 'Validación: mínimo 2 caracteres' },
            { id: 'B2e', text: 'Validación: máximo 15 caracteres' },
            { id: 'B2f', text: 'Error visible si no cumple requisitos' }
          ]
        },
        {
          id: 'B3',
          text: 'Selección de tipo:',
          subItems: [
            { id: 'B3a', text: 'Tres opciones visibles: 🌱 Semilla, 💧 Gota, ✨ Chispa' },
            { id: 'B3b', text: 'Solo una opción se puede seleccionar a la vez' },
            { id: 'B3c', text: 'Opción seleccionada tiene borde/color diferente' },
            { id: 'B3d', text: 'Muestra el nombre del tipo debajo del emoji' }
          ]
        },
        {
          id: 'B4',
          text: 'Botón "¡Eclosionar!":',
          subItems: [
            { id: 'B4a', text: 'Botón visible' },
            { id: 'B4b', text: 'Deshabilitado (gris) hasta tener nombre válido + tipo seleccionado' },
            { id: 'B4c', text: 'Habilitado (color) cuando se cumplen requisitos' },
            { id: 'B4d', text: 'Al hacer click, cierra el modal' },
            { id: 'B4e', text: 'Al hacer click, crea el Regenmon' }
          ]
        }
      ]
    },
    {
      id: 'C',
      text: 'C. Display Principal',
      subItems: [
        {
          id: 'C1',
          text: 'Header/Título:',
          subItems: [
            { id: 'C1a', text: 'Muestra "🥚 Regenmon" o nombre de la app' },
            { id: 'C1b', text: 'Fuente estilo pixel o retro visible' },
            { id: 'C1c', text: 'Header fijo en la parte superior' }
          ]
        },
        {
          id: 'C2',
          text: 'Nombre del Regenmon:',
          subItems: [
            { id: 'C2a', text: 'Se muestra el nombre que el usuario eligió' },
            { id: 'C2b', text: 'Fuente grande y legible' },
            { id: 'C2c', text: 'Centrado arriba del sprite' }
          ]
        },
        {
          id: 'C3',
          text: 'Sprite/Emoji:',
          subItems: [
            { id: 'C3a', text: 'Área de 200x200px (aproximadamente)' },
            { id: 'C3b', text: 'Muestra el emoji del tipo seleccionado (🌱/💧/✨)' },
            { id: 'C3c', text: 'Centrado en el contenedor' },
            { id: 'C3d', text: 'Fondo ligeramente diferente del contenedor principal' }
          ]
        },
        {
          id: 'C4',
          text: 'Barras de Estadísticas:',
          subItems: [
            { id: 'C4a', text: 'Tres barras visibles: 💚 Felicidad, ⚡ Energía, 🍎 Hambre' },
            { id: 'C4b', text: 'Cada barra muestra icono/emoji correspondiente' },
            { id: 'C4c', text: 'Cada barra muestra nombre del stat' },
            { id: 'C4d', text: 'Cada barra muestra progreso con color' },
            { id: 'C4e', text: 'Cada barra muestra valor numérico (ej: "50/100")' },
            { id: 'C4f', text: 'Valores iniciales: Felicidad 50, Energía 50, Hambre 50' },
            { id: 'C4g', text: 'Las barras son visualmente proporcionales al valor' }
          ]
        }
      ]
    },
    {
      id: 'D',
      text: 'D. Persistencia (localStorage)',
      subItems: [
        {
          id: 'D1',
          text: 'Al crear Regenmon:',
          subItems: [
            { id: 'D1a', text: 'Los datos se guardan inmediatamente' },
            { id: 'D1b', text: 'Key en localStorage: "regenmon-data"' },
            { id: 'D1c', text: 'Datos incluyen: nombre, tipo, felicidad:50, energia:50, hambre:50, fechaCreacion' }
          ]
        },
        {
          id: 'D2',
          text: 'Al recargar página:',
          subItems: [
            { id: 'D2a', text: 'NO aparece el modal de creación' },
            { id: 'D2b', text: 'Se muestra el Regenmon guardado' },
            { id: 'D2c', text: 'Todos los datos persisten (nombre, tipo, stats)' }
          ]
        }
      ]
    },
    {
      id: 'E',
      text: 'E. Botón de Reinicio',
      subItems: [
        {
          id: 'E1',
          text: 'Ubicación:',
          subItems: [
            { id: 'E1a', text: 'Botón pequeño en esquina superior derecha' },
            { id: 'E1b', text: 'Texto: "🔄 Reiniciar" o solo "🔄"' },
            { id: 'E1c', text: 'Discreto pero accesible' }
          ]
        },
        {
          id: 'E2',
          text: 'Al hacer click:',
          subItems: [
            { id: 'E2a', text: 'Abre modal de confirmación' },
            { id: 'E2b', text: 'Modal pregunta: "¿Estás seguro?"' },
            { id: 'E2c', text: 'Mensaje: "Tu Regenmon se irá para siempre..."' },
            { id: 'E2d', text: 'Dos botones: "Cancelar" y "Sí, reiniciar"' }
          ]
        },
        {
          id: 'E3',
          text: 'Al confirmar reinicio:',
          subItems: [
            { id: 'E3a', text: 'Borra key "regenmon-data" de localStorage' },
            { id: 'E3b', text: 'Recarga la página' },
            { id: 'E3c', text: 'Aparece modal de creación de nuevo' }
          ]
        }
      ]
    },
    {
      id: 'F',
      text: 'F. Responsive (Móvil)',
      subItems: [
        { id: 'F1', text: 'Responsivo para todos los dispositivos móviles, laptop, PC' },
        { id: 'F2', text: 'Contenedor no se desborda' },
        { id: 'F3', text: 'Texto legible sin zoom' }
      ]
    }
  ];

  const [checkedItems, setCheckedItems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('session1-checklist');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('session1-checklist', JSON.stringify(Array.from(checkedItems)));
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
          Entregable 1: "Regenmon Estático Desplegado"
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session1.title')}
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
              <p className="font-semibold text-foreground">Problema 1: El modal no aparece</p>
              <p className="text-muted-foreground">Verifica que no exista la key "regenmon-data" en localStorage</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 2: Los datos no se guardan</p>
              <p className="text-muted-foreground">Revisa que estés usando localStorage.setItem() correctamente</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 3: El botón no se habilita</p>
              <p className="text-muted-foreground">Verifica las condiciones de validación del nombre y tipo seleccionado</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 4: No es responsive</p>
              <p className="text-muted-foreground">Usa clases responsive de Tailwind (sm:, md:, lg:) y prueba en diferentes tamaños</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Problema 5: El reinicio no funciona</p>
              <p className="text-muted-foreground">Asegúrate de borrar localStorage y recargar con window.location.reload()</p>
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
            to="/doc/session-1/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.prompt')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1/support"
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

export default Session1Deliverable;
