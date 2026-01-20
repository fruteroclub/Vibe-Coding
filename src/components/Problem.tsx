const Problem = () => {
  const problems = [
    '6 meses para Hello World',
    '$5,000 para paradigmas de 1990',
    '15% completado, cero garantías',
  ];

  return (
    <section className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-foreground">Los bootcamps tradicionales están </span>
          <span className="gradient-text">hackeados para el pasado</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card px-8 py-6 text-center"
            >
              <p className="text-lg text-muted-foreground line-through decoration-destructive/50">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl text-foreground">
          → Hay una mejor forma. Se llama <span className="gradient-text font-semibold">VibeCoding.</span>
        </p>
      </div>
    </section>
  );
};

export default Problem;
