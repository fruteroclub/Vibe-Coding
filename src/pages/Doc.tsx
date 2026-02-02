import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { Target, Eye, BookOpen, Layers, Rocket, FileText, ChevronRight, Plus, X, GripVertical } from 'lucide-react';

interface StickyNote {
  id: string;
  content: string;
  position: { x: number; y: number };
  color: string;
  zIndex: number;
  rotation?: number;
}

const Doc = () => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<StickyNote[]>([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('yellow');
  const [draggedNote, setDraggedNote] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [maxZIndex, setMaxZIndex] = useState(1);

  const colors = [
    { id: 'yellow', class: 'bg-yellow-200 border-yellow-300 shadow-yellow-400/50' },
    { id: 'pink', class: 'bg-pink-200 border-pink-300 shadow-pink-400/50' },
    { id: 'blue', class: 'bg-blue-200 border-blue-300 shadow-blue-400/50' },
    { id: 'green', class: 'bg-green-200 border-green-300 shadow-green-400/50' }
  ];

  const zones = [
    { id: 'ideas', name: 'Ideas', color: 'purple', gradient: 'from-purple-500/20 to-purple-500/5' },
    { id: 'pending', name: 'Por Hacer', color: 'blue', gradient: 'from-blue-500/20 to-blue-500/5' },
    { id: 'doing', name: 'En Progreso', color: 'orange', gradient: 'from-orange-500/20 to-orange-500/5' },
    { id: 'done', name: 'Completado', color: 'green', gradient: 'from-green-500/20 to-green-500/5' }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('bootcamp-notes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bootcamp-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!newNoteContent.trim()) return;

    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);

    // Generar rotación aleatoria para efecto realista
    const rotation = Math.random() * 10 - 5; // -5 a +5 grados

    const newNote: StickyNote = {
      id: Date.now().toString(),
      content: newNoteContent,
      position: {
        x: Math.random() * 200 + 30,
        y: Math.random() * 150 + 30
      },
      color: selectedColor,
      zIndex: newZIndex,
      rotation: rotation
    };

    // Track note creation in Microsoft Clarity
    if (typeof window !== 'undefined' && (window as any).clarity) {
      (window as any).clarity('event', 'note_added', {
        content: newNoteContent,
        color: selectedColor,
        timestamp: new Date().toISOString(),
        noteId: newNote.id
      });
    }

    setNotes([...notes, newNote]);
    setNewNoteContent('');
  };

  const deleteNote = (id: string) => {
    const noteToDelete = notes.find(note => note.id === id);

    // Track note deletion in Microsoft Clarity
    if (typeof window !== 'undefined' && (window as any).clarity && noteToDelete) {
      (window as any).clarity('event', 'note_deleted', {
        content: noteToDelete.content,
        color: noteToDelete.color,
        timestamp: new Date().toISOString(),
        noteId: id
      });
    }

    setNotes(notes.filter(note => note.id !== id));
  };

  const handleMouseDown = (e: React.MouseEvent, noteId: string) => {
    const note = notes.find(n => n.id === noteId);
    if (!note) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setDraggedNote(noteId);

    // Traer nota al frente
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setNotes(notes.map(n =>
      n.id === noteId ? { ...n, zIndex: newZIndex } : n
    ));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedNote) return;

    const boardRect = e.currentTarget.getBoundingClientRect();
    const newX = e.clientX - boardRect.left - dragOffset.x;
    const newY = e.clientY - boardRect.top - dragOffset.y;

    setNotes(notes.map(note =>
      note.id === draggedNote
        ? { ...note, position: { x: Math.max(0, Math.min(newX, boardRect.width - 130)), y: Math.max(0, Math.min(newY, boardRect.height - 130)) } }
        : note
    ));
  };

  const handleMouseUp = () => {
    // Track note movement in Microsoft Clarity
    if (draggedNote && typeof window !== 'undefined' && (window as any).clarity) {
      const movedNote = notes.find(n => n.id === draggedNote);
      if (movedNote) {
        (window as any).clarity('event', 'note_moved', {
          noteId: draggedNote,
          position: movedNote.position,
          timestamp: new Date().toISOString()
        });
      }
    }

    setDraggedNote(null);
  };

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Bienvenido a VibeCoding
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed">
          El bootcamp que te enseña a construir apps reales usando IA como herramienta, no como sustituto.
          En 2 semanas pasas de idea a app desplegada.
        </p>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="p-4 sm:p-6 border border-border/50 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Target size={24} className="sm:w-8 sm:h-8 text-orange-400 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Misión</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Democratizar el desarrollo de software enseñándote a usar IA de forma efectiva.
              No reemplazamos el conocimiento técnico, lo aceleramos. Aprenderás los fundamentos
              construyendo proyectos reales desde el día uno.
            </p>
          </div>

          <div className="p-4 sm:p-6 border border-border/50 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Eye size={24} className="sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Visión</h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Formar una generación de builders que entienden cómo funcionan las apps modernas,
              saben prompt engineering, y pueden validar ideas en días, no meses. El futuro es
              de quienes saben combinar pensamiento técnico con herramientas de IA.
            </p>
          </div>
        </div>

        {/* Qué es esta documentación */}
        <div className="mb-12 sm:mb-16 p-4 sm:p-6 md:p-8 border border-orange-400/30 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 to-background">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            <BookOpen size={24} className="sm:w-8 sm:h-8 text-orange-400 flex-shrink-0" />
            <span className="leading-tight">¿Qué es esta documentación?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            Esta es tu guía completa para el bootcamp VibeCoding. Aquí encontrarás todo lo que necesitas
            para completar las 6 sesiones: desde los conceptos fundamentales hasta los prompts exactos
            que usarás con v0 y Claude.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-foreground font-medium">
            No es un curso tradicional. Es un sistema de aprendizaje basado en:
          </p>
          <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
              <span><strong className="text-foreground">Construcción activa:</strong> Aprenderás haciendo, no solo viendo videos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
              <span><strong className="text-foreground">Progresión estructurada:</strong> Cada sesión construye sobre la anterior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 mt-1 flex-shrink-0">•</span>
              <span><strong className="text-foreground">Entregables reales:</strong> Cada sesión termina con una app funcional y desplegada</span>
            </li>
          </ul>
        </div>

        {/* Cómo usar esta documentación */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
          <Layers size={24} className="sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
          <span className="leading-tight">Cómo funciona la documentación</span>
        </h2>

        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          {/* Quick Start */}
          <Link to="/doc/quick-start" className="block group">
            <div className="p-4 sm:p-6 border border-border/50 rounded-lg bg-card/20 hover:border-purple-400/50 hover:bg-card/40 transition-all duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="p-2 sm:p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 flex-shrink-0">
                    <Rocket size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-purple-400 transition-colors leading-tight">
                      1. Quick Start
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Configuración inicial del bootcamp. Crea tu cuenta en v0, conecta con Vercel,
                      y prepara tu entorno de desarrollo. Toma 15-20 minutos y lo haces una sola vez.
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="sm:w-5 sm:h-5 text-muted-foreground group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>

          {/* Sesiones */}
          <Link to="/doc/sessions" className="block group">
            <div className="p-4 sm:p-6 border border-border/50 rounded-lg bg-card/20 hover:border-orange-400/50 hover:bg-card/40 transition-all duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="p-2 sm:p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 flex-shrink-0">
                    <FileText size={20} className="sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                      2. Sesiones (1-6)
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                      El corazón del bootcamp. Cada sesión tiene 3 apartados:
                    </p>
                    <div className="space-y-1.5 sm:space-y-2 ml-2 sm:ml-4">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 flex-shrink-0">→</span>
                        <div className="text-sm sm:text-base">
                          <strong className="text-foreground">Prompt:</strong>
                          <span className="text-muted-foreground"> El prompt exacto para copiar y pegar en v0</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 flex-shrink-0">→</span>
                        <div className="text-sm sm:text-base">
                          <strong className="text-foreground">Entregable:</strong>
                          <span className="text-muted-foreground"> Checklist técnico para verificar que completaste todo</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-400 flex-shrink-0">→</span>
                        <div className="text-sm sm:text-base">
                          <strong className="text-foreground">Material de Apoyo:</strong>
                          <span className="text-muted-foreground"> Explicaciones técnicas de los conceptos clave</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight size={18} className="sm:w-5 sm:h-5 text-muted-foreground group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>

          {/* Recursos */}
          <Link to="/doc/resources" className="block group">
            <div className="p-4 sm:p-6 border border-border/50 rounded-lg bg-card/20 hover:border-green-400/50 hover:bg-card/40 transition-all duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="p-2 sm:p-3 bg-green-500/10 rounded-lg border border-green-500/20 flex-shrink-0">
                    <Layers size={20} className="sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-green-400 transition-colors leading-tight">
                      3. Recursos
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Herramientas, plataformas y APIs que usarás. Incluye links directos a v0, Vercel,
                      Claude, y cómo obtener API keys cuando las necesites.
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="sm:w-5 sm:h-5 text-muted-foreground group-hover:text-green-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Tablero Interactivo de Tareas */}
        <div className="mb-12 sm:mb-16 p-4 sm:p-6 md:p-8 border border-purple-400/30 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500/5 to-background">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Tu Tablero de Tareas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            Organiza tus ideas, tareas pendientes y progreso del bootcamp. Arrastra las notas libremente
            por el tablero y mantén todo bajo control. Tus notas se guardan automáticamente.
          </p>

          {/* Agregar Nueva Nota */}
          <div className="mb-6 p-4 border border-border/50 rounded-lg bg-card/20">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addNote()}
                  placeholder="Escribe tu nota aquí..."
                  className="flex-1 px-4 py-2 bg-background border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-purple-400"
                />
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    {colors.map(color => (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => setSelectedColor(color.id)}
                        aria-label={`Seleccionar color ${color.id}`}
                        className={`w-8 h-8 rounded border-2 ${color.class.split(' ')[0]} ${color.class.split(' ')[1]} ${selectedColor === color.id ? 'ring-2 ring-purple-400' : ''}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={addNote}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <Plus size={18} />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tablero estilo pizarra con post-its */}
          <div
            className="relative rounded-xl overflow-hidden border-4 border-gray-700"
            style={{
              height: '400px',
              background: 'linear-gradient(135deg, #2d5016 0%, #1a3d0f 100%)',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.3)'
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Textura de pizarra */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
              pointerEvents: 'none'
            }}></div>

            {/* Notas tipo post-it con cinta adhesiva */}
            <div className="absolute inset-0">
              {notes.map((note) => {
                const rotation = (note as any).rotation || 0;
                return (
                  <div
                    key={note.id}
                    className="absolute select-none"
                    style={{
                      left: `${note.position.x}px`,
                      top: `${note.position.y}px`,
                      zIndex: note.zIndex,
                      transform: draggedNote === note.id
                        ? `scale(1.08) rotate(${rotation + 3}deg)`
                        : `rotate(${rotation}deg)`,
                      transition: draggedNote === note.id ? 'none' : 'transform 0.2s ease'
                    }}
                    onMouseDown={(e) => handleMouseDown(e, note.id)}
                  >
                    {/* Cinta adhesiva superior */}
                    <div
                      className="absolute -top-2 left-1/2 w-10 h-4 bg-gray-200/40 backdrop-blur-sm"
                      style={{
                        transform: 'translateX(-50%) rotate(0deg)',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                        borderRadius: '1px'
                      }}
                    ></div>

                    {/* Post-it con efecto 3D y curva */}
                    <div
                      className={`w-32 min-h-32 p-3 cursor-move group ${
                        colors.find(c => c.id === note.color)?.class.split(' ')[0]
                      } ${colors.find(c => c.id === note.color)?.class.split(' ')[1]}`}
                      style={{
                        boxShadow: draggedNote === note.id
                          ? '0 12px 24px rgba(0,0,0,0.4)'
                          : '0 4px 8px rgba(0,0,0,0.25)',
                        borderRadius: '2px',
                        position: 'relative',
                        background: `linear-gradient(135deg, ${
                          note.color === 'yellow' ? '#fef3c7 0%, #fde68a 100%' :
                          note.color === 'pink' ? '#fce7f3 0%, #fbcfe8 100%' :
                          note.color === 'blue' ? '#dbeafe 0%, #bfdbfe 100%' :
                          '#dcfce7 0%, #bbf7d0 100%'
                        })`
                      }}
                    >
                      {/* Botón eliminar */}
                      <button
                        type="button"
                        onClick={() => deleteNote(note.id)}
                        aria-label="Eliminar nota"
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 shadow-lg"
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <X size={12} />
                      </button>

                      {/* Contenido del post-it */}
                      <p className="text-gray-800 text-xs leading-snug break-words font-handwriting" style={{
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        textShadow: '0 1px 1px rgba(255,255,255,0.5)'
                      }}>
                        {note.content}
                      </p>

                      {/* Efecto de esquina doblada */}
                      <div
                        className="absolute bottom-0 right-0 w-0 h-0"
                        style={{
                          borderStyle: 'solid',
                          borderWidth: '0 0 12px 12px',
                          borderColor: `transparent transparent ${
                            note.color === 'yellow' ? '#fbbf24' :
                            note.color === 'pink' ? '#f472b6' :
                            note.color === 'blue' ? '#60a5fa' :
                            '#4ade80'
                          } transparent`,
                          filter: 'brightness(0.8)'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 p-4 border border-blue-500/30 rounded-lg bg-blue-500/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Tip:</strong> Arrastra las notas libremente por el tablero para organizarlas como prefieras.
              Usa este espacio para ideas de proyectos, dudas, bugs, recordatorios de sesiones o cualquier cosa
              que no quieras olvidar durante el bootcamp. Todo se guarda automáticamente.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl border border-orange-400/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Listo para empezar?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Comienza por Quick Start para configurar tu entorno, luego ve directo a Sesión 1.
            En 2-3 horas tendrás tu primera app desplegada en internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/doc/quick-start"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Configuración Inicial
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/doc/session-1"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-orange-400/50 hover:border-orange-400 hover:bg-orange-500/10 text-foreground font-semibold rounded-lg transition-all"
            >
              Ir a Sesión 1
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Doc;
