const Problem = () => {
  const problems = [
    '6 meses para Hello World',
    '$5,000 para paradigmas de 1990',
    '15% completado, cero garantías',
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-foreground">Los bootcamps tradicionales están </span>
          <span className="gradient-text">hackeados para el pasado</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card px-6 py-4 text-center"
            >
              <p className="text-muted-foreground line-through decoration-destructive/50">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-foreground">
          → Hay una mejor forma. Se llama <span className="gradient-text font-semibold">VibeCoding.</span>
        </p>
      </div>
    </section>
  );
};

export default Problem;
