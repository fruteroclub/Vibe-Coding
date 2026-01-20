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
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          ¿Es VibeCoding para ti?
        </h2>
        <p className="text-center text-muted-foreground mb-16">
          Sé honesto contigo mismo. Esto no es para todos.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For You */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">ES PARA TI SI...</h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="glass-card p-8 border-destructive/20">
            <h3 className="text-xl font-semibold text-foreground mb-6">NO ES PARA TI SI...</h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
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
