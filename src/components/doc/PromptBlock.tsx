import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface PromptBlockProps {
  prompt: string;
  title?: string;
}

export const PromptBlock = ({ prompt, title = "Prompt para v0" }: PromptBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-border/50 bg-card">
      {/* Header tipo VS Code */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-2">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-orange-500/10 transition-colors text-sm text-orange-400"
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copiado</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar prompt</span>
            </>
          )}
        </button>
      </div>

      {/* Contenido del prompt */}
      <div className="p-6 font-mono text-sm leading-relaxed bg-black/20">
        <pre className="whitespace-pre-wrap text-foreground/90">
          {prompt}
        </pre>
      </div>
    </div>
  );
};
