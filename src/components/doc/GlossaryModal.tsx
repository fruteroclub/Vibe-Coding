import { useState } from 'react';
import { X, Search, Book } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'development' | 'data' | 'ai' | 'ui' | 'auth';
}

const glossaryTerms: GlossaryTerm[] = [
  // Términos de Desarrollo
  {
    term: 'Deploy / Desplegar',
    definition: 'Subir tu app a internet para que funcione 24/7, accesible desde cualquier dispositivo.',
    category: 'development'
  },
  {
    term: 'Producción',
    definition: 'Tu app funcionando en internet, accesible para todos los usuarios. Es el ambiente "real" donde la gente usa tu aplicación.',
    category: 'development'
  },
  {
    term: 'Localhost',
    definition: 'Tu app funcionando solo en tu computadora. Nadie más puede verla porque no está en internet.',
    category: 'development'
  },
  {
    term: 'URL',
    definition: 'Dirección web de tu app (ej: miapp.vercel.app). Es como la dirección postal de tu aplicación en internet.',
    category: 'development'
  },
  {
    term: 'Build',
    definition: 'Proceso de preparar tu código para que funcione en internet. Como empaquetar un producto antes de enviarlo.',
    category: 'development'
  },

  // Términos de Datos
  {
    term: 'localStorage',
    definition: 'Memoria en tu navegador. Se borra si limpias cookies o cambias de dispositivo. Es temporal.',
    category: 'data'
  },
  {
    term: 'Base de datos',
    definition: 'Memoria permanente en internet. No se borra y puedes accederla desde cualquier dispositivo.',
    category: 'data'
  },
  {
    term: 'API',
    definition: 'Puente que conecta tu app con servicios externos (como Claude, Supabase, etc). Es como un traductor entre sistemas.',
    category: 'data'
  },
  {
    term: 'API Key',
    definition: 'Contraseña especial para usar servicios de IA o bases de datos. Es tu permiso personal para acceder al servicio.',
    category: 'data'
  },
  {
    term: 'Backend',
    definition: 'La parte "invisible" de tu app que maneja datos y lógica de negocio. Es como la cocina de un restaurante.',
    category: 'data'
  },

  // Términos de IA
  {
    term: 'Prompt',
    definition: 'Instrucciones que le das a la IA. Mientras más claras y específicas, mejores resultados obtienes.',
    category: 'ai'
  },
  {
    term: 'Contexto',
    definition: 'Lo que la IA recuerda de conversaciones anteriores. Es su "memoria" de lo que ya hablaron.',
    category: 'ai'
  },
  {
    term: 'Multimodal',
    definition: 'IA que entiende texto + imágenes al mismo tiempo. Puede "ver" fotos y analizarlas.',
    category: 'ai'
  },
  {
    term: 'Temperatura',
    definition: 'Qué tan creativa es la IA (0=precisa y consistente, 1=creativa y variada).',
    category: 'ai'
  },
  {
    term: 'Tokens',
    definition: 'Unidad de medida de texto para IA. ~4 caracteres = 1 token. Es como medir texto en "palabritas".',
    category: 'ai'
  },

  // Términos de Interfaz
  {
    term: 'UI (User Interface)',
    definition: 'Todo lo que ves en pantalla: botones, textos, imágenes, colores. Es la "cara" de tu app.',
    category: 'ui'
  },
  {
    term: 'Componente',
    definition: 'Una pieza reutilizable de tu interfaz (ej: botón, tarjeta, menú). Como piezas de LEGO que puedes combinar.',
    category: 'ui'
  },
  {
    term: 'Estado (State)',
    definition: 'Información que cambia en tu app (ej: nivel de felicidad, monedas, nombre). Es la "memoria activa" de tu interfaz.',
    category: 'ui'
  },
  {
    term: 'Props',
    definition: 'Información que pasas de un componente a otro. Como darle instrucciones específicas a cada pieza.',
    category: 'ui'
  },
  {
    term: 'Responsive',
    definition: 'Que tu app se vea bien en celular, tablet y computadora. Se adapta automáticamente al tamaño de pantalla.',
    category: 'ui'
  },

  // Términos de Usuario
  {
    term: 'Auth / Autenticación',
    definition: 'Sistema de login que verifica quién eres. Es como mostrar tu ID en la entrada.',
    category: 'auth'
  },
  {
    term: 'Sesión',
    definition: 'El tiempo que estás logueado en la app. Cuando cierras sesión, termina.',
    category: 'auth'
  },
  {
    term: 'Token (Auth)',
    definition: 'Pase temporal que prueba que ya hiciste login. La app lo guarda para no pedirte contraseña cada vez.',
    category: 'auth'
  },
  {
    term: 'Permisos',
    definition: 'Qué puedes y no puedes hacer en la app según tu tipo de usuario (admin, usuario normal, visitante).',
    category: 'auth'
  },
];

const categoryNames = {
  development: 'Desarrollo',
  data: 'Datos',
  ai: 'Inteligencia Artificial',
  ui: 'Interfaz',
  auth: 'Autenticación'
};

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'development':
      return {
        bg: 'bg-orange-400',
        text: 'text-orange-400',
        border: 'border-orange-400',
        bgLight: 'bg-orange-400/20'
      };
    case 'data':
      return {
        bg: 'bg-blue-400',
        text: 'text-blue-400',
        border: 'border-blue-400',
        bgLight: 'bg-blue-400/20'
      };
    case 'ai':
      return {
        bg: 'bg-purple-400',
        text: 'text-purple-400',
        border: 'border-purple-400',
        bgLight: 'bg-purple-400/20'
      };
    case 'ui':
      return {
        bg: 'bg-pink-400',
        text: 'text-pink-400',
        border: 'border-pink-400',
        bgLight: 'bg-pink-400/20'
      };
    case 'auth':
      return {
        bg: 'bg-green-400',
        text: 'text-green-400',
        border: 'border-green-400',
        bgLight: 'bg-green-400/20'
      };
    default:
      return {
        bg: 'bg-orange-400',
        text: 'text-orange-400',
        border: 'border-orange-400',
        bgLight: 'bg-orange-400/20'
      };
  }
};

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal = ({ isOpen, onClose }: GlossaryModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Object.keys(categoryNames)] as const;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Book className="w-8 h-8 text-orange-400" />
              <h2 className="text-3xl font-bold gradient-text">
                📖 Glosario Rápido para Vibecoders
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Cerrar glosario"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-muted-foreground mb-4">
            Todos los términos técnicos explicados en lenguaje simple. Busca cualquier palabra que no entiendas.
          </p>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Busca un término... (ej: API, Deploy, Estado)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400/50 text-foreground"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const styles = category === 'all'
                ? { bg: 'bg-orange-400', text: 'text-white' }
                : getCategoryStyles(category);

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? `${styles.bg} text-white`
                      : 'bg-background border border-border hover:border-orange-400/50'
                  }`}
                >
                  {category === 'all' ? 'Todos' : categoryNames[category as keyof typeof categoryNames]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron términos para "{searchTerm}"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Intenta con otro término o selecciona una categoría diferente
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTerms.map((term, index) => {
                const styles = getCategoryStyles(term.category);

                return (
                  <div
                    key={index}
                    className={`glass-card p-4 border-l-4 ${styles.border} hover:bg-white/5 transition-colors`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className={`text-xl font-bold ${styles.text}`}>
                        {term.term}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${styles.bgLight} ${styles.text} font-medium whitespace-nowrap`}>
                        {categoryNames[term.category]}
                      </span>
                    </div>
                    <p className="text-foreground">
                      {term.definition}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border/50 bg-orange-400/5">
          <p className="text-sm text-muted-foreground text-center">
            💡 <strong>Tip:</strong> Guarda este glosario como favorito para consultarlo cuando lo necesites.
            Presiona <kbd className="px-2 py-1 bg-background rounded border border-border">Ctrl+F</kbd> para buscar rápido.
          </p>
        </div>
      </div>
    </div>
  );
};

export const GlossaryButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30 hover:border-orange-400/50 transition-all group"
    >
      <Book className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
      <div className="text-left flex-1">
        <div className="font-bold text-foreground">📖 Glosario Rápido</div>
        <div className="text-xs text-muted-foreground">25+ términos explicados</div>
      </div>
    </button>
  );
};
