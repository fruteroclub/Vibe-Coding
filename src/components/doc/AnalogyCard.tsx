interface AnalogyCardProps {
  technical: string;
  analogy: string;
  explanation: string;
}

export const AnalogyCard = ({ technical, analogy, explanation }: AnalogyCardProps) => {
  return (
    <div className="glass-card p-6 bg-gradient-to-r from-blue-400/10 to-purple-400/10 border-2 border-blue-400/30 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🔄</span>
        <h3 className="text-xl font-bold text-blue-400">Analogía</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Concepto técnico:</p>
          <p className="font-semibold text-foreground">{technical}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Es como:</p>
          <p className="font-semibold text-orange-400">{analogy}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-foreground text-sm leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
};
