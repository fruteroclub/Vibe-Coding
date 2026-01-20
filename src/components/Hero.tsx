const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-6 animate-fade-in">
          <span className="text-muted-foreground text-sm">Bootcamp de Desarrollo con IA</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">VibeCoding: </span>
          <span className="gradient-text">De Idea a App</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crea tu primera app en 2 semanas. Sin código tradicional, sin instalaciones.
        </p>

        <p className="text-base text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          El futuro del código está en tus ideas, no en tu teclado. Aprende a DIRIGIR la IA para que construya por ti.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#pricing" className="btn-primary-gradient glow-effect">
            Asegurar mi lugar - $50 USD
          </a>
          <a href="#programa" className="btn-outline-glow">
            Ver el programa completo ↓
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">70%+</span>
            <span className="text-sm">completado</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">1,000+</span>
            <span className="text-sm">builders</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">$400K</span>
            <span className="text-sm">crecimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
