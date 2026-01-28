import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

// Inicializar mermaid una sola vez
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#f97316',
    primaryTextColor: '#fff',
    primaryBorderColor: '#ea580c',
    lineColor: '#fb923c',
    secondaryColor: '#c026d3',
    tertiaryColor: '#0ea5e9',
    background: '#0a0a0a',
    mainBkg: '#1a1a1a',
    secondBkg: '#262626',
    border1: '#404040',
    border2: '#525252',
    fontFamily: 'Inter, sans-serif',
  },
});

export const MermaidDiagram = ({ chart, className = '' }: MermaidDiagramProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (elementRef.current) {
      // Limpiar contenido previo
      elementRef.current.innerHTML = chart;
      elementRef.current.removeAttribute('data-processed');

      // Renderizar nuevo diagrama
      mermaid.run({
        nodes: [elementRef.current],
      }).catch((error) => {
        console.error('Error rendering mermaid diagram:', error);
      });
    }
  }, [chart]);

  return (
    <div className={`mermaid-container ${className}`}>
      <div
        ref={elementRef}
        className="mermaid flex justify-center items-center p-4"
        id={idRef.current}
      />
    </div>
  );
};
