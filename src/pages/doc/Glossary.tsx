import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Book, Search } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'development' | 'data' | 'ai' | 'ui' | 'auth';
}

const glossaryTerms: GlossaryTerm[] = [
  // Términos de Desarrollo
  {
    term: 'Deploy / Desplegar',
    definition: 'Subir tu app a internet para que funcione 24/7. Es como publicar un video en YouTube: pasas de tenerlo solo en tu computadora a que todos puedan verlo.',
    category: 'development'
  },
  {
    term: 'Producción',
    definition: 'Tu app funcionando en internet, accesible para todos. Es el "modo final" después de que terminas de construir y probar.',
    category: 'development'
  },
  {
    term: 'Localhost',
    definition: 'Tu app funcionando solo en tu computadora (nadie más puede verla). Es como un ensayo privado antes del show.',
    category: 'development'
  },
  {
    term: 'URL',
    definition: 'Dirección web de tu app (ej: miapp.vercel.app). Es como la dirección de una casa en internet.',
    category: 'development'
  },
  {
    term: 'Framework',
    definition: 'Herramientas y reglas predefinidas para construir apps más rápido. Como una caja de LEGO con instrucciones vs construir desde cero.',
    category: 'development'
  },
  {
    term: 'Bug / Error',
    definition: 'Algo que no funciona como debería en tu app. Como un agujero en una red: necesitas encontrarlo y arreglarlo.',
    category: 'development'
  },

  // Términos de Datos
  {
    term: 'localStorage',
    definition: 'Memoria en tu navegador (se borra si limpias cookies). Es como notas adhesivas: temporales y solo en tu navegador.',
    category: 'data'
  },
  {
    term: 'Base de datos',
    definition: 'Memoria en internet (permanente, no se borra). Como un archivo de Excel gigante que vive en la nube: siempre está ahí.',
    category: 'data'
  },
  {
    term: 'API',
    definition: 'Puente que conecta tu app con servicios externos (como Claude, imágenes, pagos). Es como un mesero: tú pides, él trae lo que necesitas.',
    category: 'data'
  },
  {
    term: 'API Key',
    definition: 'Contraseña especial para usar servicios de IA o APIs. Como la llave de tu casa: sin ella no puedes entrar.',
    category: 'data'
  },
  {
    term: 'Endpoint',
    definition: 'Dirección específica donde tu app pide o envía información. Como diferentes ventanillas en un banco: una para depósitos, otra para retiros.',
    category: 'data'
  },
  {
    term: 'JSON',
    definition: 'Formato para organizar información que las apps entienden. Como hablar el mismo idioma entre diferentes programas.',
    category: 'data'
  },

  // Términos de IA
  {
    term: 'Prompt',
    definition: 'Instrucciones que le das a la IA. Mientras más claras, mejores respuestas.',
    category: 'ai'
  },
  {
    term: 'Contexto',
    definition: 'Lo que la IA recuerda de conversaciones anteriores. Como la memoria a corto plazo: se pierde si pasas mucho tiempo.',
    category: 'ai'
  },
  {
    term: 'Multimodal',
    definition: 'IA que entiende texto + imágenes al mismo tiempo. Como un maestro que puede leer tu ensayo Y ver tus dibujos.',
    category: 'ai'
  },
  {
    term: 'Temperatura (IA)',
    definition: 'Qué tan creativa es la IA (0=precisa y repetitiva, 1=creativa e impredecible). Como el volumen de la radio.',
    category: 'ai'
  },
  {
    term: 'Token',
    definition: 'Unidad de texto que la IA procesa (≈4 caracteres). Como contar palabras, pero más técnico. Más tokens = más caro.',
    category: 'ai'
  },
  {
    term: 'System Prompt',
    definition: 'Personalidad base de la IA. Le dices "eres un entrenador motivador" y siempre responderá así.',
    category: 'ai'
  },

  // Términos de Interfaz
  {
    term: 'UI (User Interface)',
    definition: 'Todo lo que ves en pantalla: botones, texto, colores, imágenes. Es la "cara" de tu app.',
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

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Object.keys(categoryNames)] as const;

  return (
    <DocLayout>
      <DocContent>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
              Glosario Rápido para Vibecoders
            </h1>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg">
            Todos los términos técnicos explicados en lenguaje simple. Busca cualquier palabra que no entiendas.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
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
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
              selectedCategory === 'all'
                ? 'bg-orange-400 text-white'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Todos ({glossaryTerms.length})
          </button>
          {Object.entries(categoryNames).map(([key, label]) => {
            const count = glossaryTerms.filter(t => t.category === key).length;
            const styles = getCategoryStyles(key);
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedCategory === key
                    ? `${styles.bg} text-white`
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Terms Grid */}
        <div className="space-y-4">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron términos que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            filteredTerms.map((term, index) => {
              const styles = getCategoryStyles(term.category);
              return (
                <div
                  key={index}
                  className={`glass-card p-4 sm:p-6 border-l-4 ${styles.border} hover:${styles.bgLight} transition-all duration-200`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {term.term}
                    </h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${styles.bgLight} ${styles.text} border ${styles.border} w-fit`}>
                      {categoryNames[term.category]}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {term.definition}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Glossary;
