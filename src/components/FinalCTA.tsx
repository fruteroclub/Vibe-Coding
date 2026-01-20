const FinalCTA = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-8 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            De consumidor a creador en 2 semanas
          </h2>
          
          <p className="text-muted-foreground mb-6 text-sm">
            La diferencia entre los que lo intentan y los que lo logran no es talento. Es ejecución. VibeCoding te da las herramientas, la comunidad y el sistema para pasar de idea a app en 14 días. Sin pretextos. Sin "algún día". Sin esperar permiso.
          </p>

          <p className="text-lg text-foreground font-medium mb-4">
            Primeros 20 lugares: <span className="gradient-text">$50 USD</span>
          </p>

          <a href="#pricing" className="btn-primary-gradient inline-block animate-glow">
            Asegurar mi lugar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
