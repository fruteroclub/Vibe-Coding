const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-8 animate-fade-in">
          <span className="text-muted-foreground text-sm">Bootcamp de Desarrollo con IA</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">VibeCoding: </span>
          <span className="gradient-text">De Idea a App</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Crea tu primera app en 2 semanas. Sin código tradicional, sin instalaciones.
        </p>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          El futuro del código está en tus ideas, no en tu teclado. Aprende a DIRIGIR la IA para que construya por ti.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#pricing" className="btn-primary-gradient glow-effect">
            Asegurar mi lugar - $50 USD
          </a>
          <a href="#programa" className="btn-outline-glow">
            Ver el programa completo ↓
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">70%+</span>
            <span>completado</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">1,000+</span>
            <span>builders</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">$400K</span>
            <span>crecimiento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
