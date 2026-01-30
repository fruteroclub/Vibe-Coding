import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

export interface ResourceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  content: string;
  color: string;
}

interface SupportMaterialProps {
  resources: ResourceSection[];
  sessionNumber: number;
}

export const SupportMaterial = ({ resources, sessionNumber }: SupportMaterialProps) => {
  const [selectedResource, setSelectedResource] = useState<ResourceSection | null>(null);

  const renderContent = (content: string) => {
    return content.split(/\n\n+/).map((section, idx) => {
      // Handle H1
      if (section.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-2xl font-bold text-foreground mb-3 mt-6 pb-2 border-b-2 border-orange-400/30">
            {section.substring(2)}
          </h1>
        );
      }

      // Handle H2
      if (section.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-xl font-semibold text-orange-400 mb-3 mt-5">
            {section.substring(3)}
          </h2>
        );
      }

      // Handle H3
      if (section.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-lg font-semibold text-foreground/90 mb-2 mt-4">
            {section.substring(4)}
          </h3>
        );
      }

      // Handle Blockquote
      if (section.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-3 border-orange-400 pl-4 py-2 my-3 bg-muted/20 rounded-r text-muted-foreground italic">
            {section.substring(2)}
          </blockquote>
        );
      }

      // Handle Code Block
      if (section.startsWith('```')) {
        const lines = section.split('\n');
        const codeContent = lines.slice(1, -1).join('\n');

        // Check if it's a layer architecture diagram
        if (codeContent.includes('LAYER') || codeContent.includes('┌─') || codeContent.includes('├─')) {
          const layerRegex = /LAYER (\d+): ([A-Z]+)/g;
          const layers: Array<{num: string, name: string, desc: string}> = [];
          let match;

          while ((match = layerRegex.exec(codeContent)) !== null) {
            const layerNum = match[1];
            const layerName = match[2];
            const descMatch = codeContent.match(new RegExp(`LAYER ${layerNum}:.*?\\n.*?\\(([^)]+)\\)`));
            const description = descMatch ? descMatch[1] : '';
            layers.push({ num: layerNum, name: layerName, desc: description });
          }

          if (layers.length > 0) {
            const layerColors = [
              { bg: 'bg-blue-500/90', border: 'border-blue-600' },
              { bg: 'bg-green-500/90', border: 'border-green-600' },
              { bg: 'bg-yellow-500/90', border: 'border-yellow-600' },
              { bg: 'bg-orange-500/90', border: 'border-orange-600' },
              { bg: 'bg-red-500/90', border: 'border-red-600' }
            ];

            return (
              <div key={idx} className="my-6 space-y-3">
                {layers.reverse().map((layer, i) => {
                  const colors = layerColors[parseInt(layer.num) - 1];
                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-lg ${colors.bg} border ${colors.border} text-white`}
                    >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold">
                          LAYER {layer.num}: {layer.name}
                        </div>
                        <div className="text-sm text-white/80 mt-1">
                          {layer.desc}
                        </div>
                      </div>
                      <div className="text-3xl font-bold opacity-30">
                        {layer.num}
                      </div>
                    </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        }

        return (
          <pre key={idx} className="bg-card/50 border border-border/30 rounded-lg p-3 my-3 overflow-x-auto text-sm">
            <code className="text-muted-foreground font-mono whitespace-pre leading-relaxed">{codeContent}</code>
          </pre>
        );
      }

      // Handle Bold text
      if (section.includes('**')) {
        const parts = section.split('**');
        return (
          <p key={idx} className="text-muted-foreground leading-7 mb-2">
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <strong key={i} className="text-foreground font-medium">{part}</strong>
            )}
          </p>
        );
      }

      // Handle lists
      if (section.includes('\n- ') || section.includes('\n* ')) {
        const items = section.split('\n').filter(line => line.startsWith('- ') || line.startsWith('* '));
        return (
          <ul key={idx} className="space-y-1.5 my-3 ml-4">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm flex items-start gap-2 leading-6">
                <span className="text-orange-400/70 mt-1.5 text-xs">▪</span>
                <span className="flex-1">{item.substring(2)}</span>
              </li>
            ))}
          </ul>
        );
      }

      // Handle checkmark lists
      if (section.includes('✅')) {
        const items = section.split('\n').filter(line => line.includes('✅'));
        return (
          <ul key={idx} className="space-y-1.5 my-3">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      // Handle inline code
      if (section.includes('`')) {
        const parts = section.split('`');
        return (
          <p key={idx} className="text-muted-foreground leading-7 mb-2 text-sm">
            {parts.map((part, i) =>
              i % 2 === 0 ? part : <code key={i} className="bg-muted/70 px-1.5 py-0.5 rounded text-xs text-orange-400/90 font-mono">{part}</code>
            )}
          </p>
        );
      }

      // Regular paragraph
      if (section.trim()) {
        return (
          <p key={idx} className="text-muted-foreground leading-7 mb-2 text-sm">
            {section}
          </p>
        );
      }

      return null;
    });
  };

  return (
    <>
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-4 border border-border/50 rounded-lg bg-purple-500/10">
          <div className="text-3xl font-bold text-purple-400">{resources.length}</div>
          <div className="text-sm text-muted-foreground">Temas Principales</div>
        </div>
        <div className="p-4 border border-border/50 rounded-lg bg-blue-500/10">
          <div className="text-3xl font-bold text-blue-400">~2h</div>
          <div className="text-sm text-muted-foreground">Tiempo Estimado</div>
        </div>
        <div className="p-4 border border-border/50 rounded-lg bg-green-500/10">
          <div className="text-3xl font-bold text-green-400">100%</div>
          <div className="text-sm text-muted-foreground">Material Gratuito</div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {resources.map((resource) => (
          <div
            key={resource.id}
            onClick={() => setSelectedResource(resource)}
            className="group cursor-pointer p-5 border border-border/50 rounded-lg bg-card/20 hover:border-orange-400/50 hover:bg-card/40 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded border border-border/50 text-muted-foreground flex-shrink-0">
                {resource.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-orange-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </div>
              <ChevronRight size={18} className="text-muted-foreground group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Resource Details */}
      {selectedResource && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedResource(null)}
        >
          <div
            className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-card border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-border/50 rounded text-muted-foreground">
                  {selectedResource.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{selectedResource.title}</h2>
                  <p className="text-muted-foreground text-sm mt-0.5">{selectedResource.description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedResource(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Cerrar ventana"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(85vh-140px)] bg-background">
              {renderContent(selectedResource.content)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
