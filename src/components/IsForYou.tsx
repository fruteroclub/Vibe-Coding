import { Check, X } from 'lucide-react';

const IsForYou = () => {
  const forYou = [
    'Tienes ideas pero no sabes programar',
    'Eres emprendedor sin presupuesto para devs',
    'Quieres cambiar de carrera a tech',
  ];

  const notForYou = [
    'Buscas certificación formal tradicional',
    'Prefieres teoría antes que práctica',
    'No puedes comprometer 1-2 hrs por sesión',
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          ¿Es VibeCoding para ti?
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Sé honesto contigo mismo. Esto no es para todos.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* For You */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">ES PARA TI SI...</h3>
            <ul className="space-y-3">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="glass-card p-6 border-destructive/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">NO ES PARA TI SI...</h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
