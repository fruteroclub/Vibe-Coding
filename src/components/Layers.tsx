import { useState } from 'react';
import { Rocket, Lock, Bot, Database, Palette, ChevronDown } from 'lucide-react';

const Layers = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    { 
      icon: Rocket, 
      name: 'Deploy', 
      description: 'Hazlo público en internet',
      detail: 'Aprende a publicar tu app para que cualquier persona en el mundo pueda acceder.',
      tools: ['Vercel', 'Netlify', 'GitHub Pages']
    },
    { 
      icon: Lock, 
      name: 'Auth', 
      description: 'Múltiples usuarios, login',
      detail: 'Implementa sistemas de autenticación seguros. Cada usuario tiene su cuenta y datos privados.',
      tools: ['Privy', 'NextAuth', 'Supabase Auth']
    },
    { 
      icon: Bot, 
      name: 'AI', 
      description: 'Inteligencia artificial',
      detail: 'Integra modelos de lenguaje y visión para que tu app piense y responda inteligentemente.',
      tools: ['Claude API', 'OpenAI', 'Replicate']
    },
    { 
      icon: Database, 
      name: 'Data', 
      description: 'Persistencia de información',
      detail: 'Guarda y recupera datos. Desde localStorage hasta bases de datos en la nube.',
      tools: ['localStorage', 'Supabase', 'Firebase']
    },
    { 
      icon: Palette, 
      name: 'UI', 
      description: 'Interfaz de usuario',
      detail: 'Crea interfaces visuales hermosas y funcionales con diseño responsivo.',
      tools: ['React', 'Tailwind', 'shadcn/ui']
    },
  ];

  return (
    <section id="programa" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            No enseñamos recetas. Enseñamos ingredientes.
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Todas las apps—desde Netflix hasta tu banco—usan estas 5 capas. Una vez que las dominas, puedes construir LO QUE SEA.
          </p>
        </div>

        {/* Layers Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {layers.map((layer, index) => (
            <button
              key={index}
              onClick={() => setActiveLayer(index)}
              className={`glass-card p-4 flex flex-col items-center gap-2 min-w-[120px] transition-all duration-300 ${
                activeLayer === index 
                  ? 'border-primary bg-primary/10' 
                  : 'hover:border-border/80'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                activeLayer === index 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-primary/10 text-primary'
              }`}>
                <layer.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-foreground text-sm">{layer.name}</span>
              <span className="text-xs text-muted-foreground text-center">{layer.description}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${
                activeLayer === index ? 'rotate-180' : ''
              }`} />
            </button>
          ))}
        </div>

        {/* Active Layer Detail */}
        <div className="glass-card p-6 border-primary/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {layers[activeLayer].name}: {layers[activeLayer].description}
              </h4>
              <p className="text-muted-foreground">
                {layers[activeLayer].detail}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {layers[activeLayer].tools.map((tool, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm border border-border">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secret */}
        <div className="max-w-2xl mx-auto glass-card p-6 text-center mt-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-foreground mb-3">🔑 El Secreto</h3>
            <p className="text-muted-foreground mb-2">
              Usamos IA (v0, Claude, Cursor) para escribir el código por ti.
            </p>
            <p className="text-foreground font-medium">
              Tú aprendes a DIRIGIR, no a escribir sintaxis manualmente.
            </p>
            <p className="text-muted-foreground mt-2 text-sm italic">
              Es como dirigir una orquesta, no tocar cada instrumento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layers;
