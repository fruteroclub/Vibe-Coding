import { useState } from 'react';
import { Rocket, Lock, Bot, Database, Palette, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Layers = () => {
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      icon: Rocket,
      name: t('layers.items.0.name'),
      description: t('layers.items.0.description'),
      detail: t('layers.items.0.detail'),
      tools: t('layers.items.0.tools', { returnObjects: true }) as string[]
    },
    {
      icon: Lock,
      name: t('layers.items.1.name'),
      description: t('layers.items.1.description'),
      detail: t('layers.items.1.detail'),
      tools: t('layers.items.1.tools', { returnObjects: true }) as string[]
    },
    {
      icon: Bot,
      name: t('layers.items.2.name'),
      description: t('layers.items.2.description'),
      detail: t('layers.items.2.detail'),
      tools: t('layers.items.2.tools', { returnObjects: true }) as string[]
    },
    {
      icon: Database,
      name: t('layers.items.3.name'),
      description: t('layers.items.3.description'),
      detail: t('layers.items.3.detail'),
      tools: t('layers.items.3.tools', { returnObjects: true }) as string[]
    },
    {
      icon: Palette,
      name: t('layers.items.4.name'),
      description: t('layers.items.4.description'),
      detail: t('layers.items.4.detail'),
      tools: t('layers.items.4.tools', { returnObjects: true }) as string[]
    },
  ];

  return (
    <section id="programa" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t('layers.title')}
          </h2>
          <p className="text-muted-foreground">
            {t('layers.subtitle')}
          </p>
        </div>

        {/* Layers Tabs */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {layers.map((layer, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveLayer(activeLayer === index ? null : index)}
              className={`glass-card p-4 flex flex-col items-center gap-2 transition-all duration-300 ${
                activeLayer === index
                  ? 'border-primary bg-primary/10'
                  : 'hover:border-border/80'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                activeLayer === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 text-primary'
              }`}>
                <layer.icon className="w-6 h-6" />
              </div>
              <span className="font-medium text-foreground text-sm">{layer.name}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">{layer.description}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${
                activeLayer === index ? 'rotate-180' : ''
              }`} />
            </button>
          ))}
        </div>

        {/* Active Layer Detail - Only shows when selected */}
        {activeLayer !== null && (
          <div className="glass-card p-5 border-primary/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {layers[activeLayer].name}: {layers[activeLayer].description}
                </h4>
                <p className="text-muted-foreground">
                  {layers[activeLayer].detail}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {layers[activeLayer].tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm border border-border">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Secret */}
        <div className="glass-card p-6 text-center mt-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-foreground mb-3">{t('layers.secret.title')}</h3>
            <p className="text-muted-foreground mb-2">
              {t('layers.secret.line1')}
            </p>
            <p className="text-foreground font-medium">
              {t('layers.secret.line2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layers;
