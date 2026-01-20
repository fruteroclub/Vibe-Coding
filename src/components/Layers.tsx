import { Globe, UserCheck, Bot, Database, Layout } from 'lucide-react';

const Layers = () => {
  const layers = [
    { icon: Globe, name: 'Deploy', description: 'Hazlo público en internet' },
    { icon: UserCheck, name: 'Auth', description: 'Múltiples usuarios, login' },
    { icon: Bot, name: 'AI', description: 'Inteligencia artificial' },
    { icon: Database, name: 'Data', description: 'Persistencia de información' },
    { icon: Layout, name: 'UI', description: 'Interfaz de usuario' },
  ];

  return (
    <section id="programa" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            No enseñamos recetas. Enseñamos ingredientes.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Todas las apps—desde Netflix hasta tu banco—usan estas 5 capas. Una vez que las dominas, puedes construir LO QUE SEA.
          </p>
        </div>

        {/* Layers Stack */}
        <div className="max-w-md mx-auto mb-16">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className="glass-card-hover p-4 mb-2 flex items-center gap-4 group"
              style={{ 
                marginLeft: `${index * 12}px`,
                opacity: 1 - (index * 0.1),
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <layer.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{layer.name}</h4>
                <p className="text-sm text-muted-foreground">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secret */}
        <div className="max-w-2xl mx-auto glass-card p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">🔑 El Secreto</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Usamos IA (v0, Claude, Cursor) para escribir el código por ti.
            </p>
            <p className="text-foreground font-medium">
              Tú aprendes a DIRIGIR, no a escribir sintaxis manualmente.
            </p>
            <p className="text-muted-foreground mt-4 italic">
              Es como dirigir una orquesta, no tocar cada instrumento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layers;
