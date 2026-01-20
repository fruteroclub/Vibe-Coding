const Journey = () => {
  const sessions = [
    { emoji: '🥚', title: 'Nace tu Regenmon', session: 1 },
    { emoji: '💬', title: 'Tu Regenmon Habla', session: 2 },
    { emoji: '💛', title: 'Tu Regenmon Tiene Wallet', session: 3 },
    { emoji: '🌟', title: 'Tu Regenmon Evoluciona', session: 4 },
    { emoji: '👥', title: 'Tu Regenmon Encuentra Amigos', session: 5 },
  ];

  return (
    <section className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu viaje en 2 semanas
          </h2>
          <p className="text-lg text-muted-foreground">
            5 sesiones · 5 mini-entregas · 1 proyecto completo
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cada sesión construye sobre la anterior. Al final de cada sesión, tendrás algo nuevo funcionando. No hay teoría sin práctica.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className="glass-card-hover p-6 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{session.emoji}</span>
                <div>
                  <span className="text-muted-foreground text-sm">Sesión {session.session}:</span>
                  <h4 className="text-lg font-semibold text-foreground">{session.title}</h4>
                </div>
              </div>
              <span className="text-muted-foreground text-sm">75 minutos</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
