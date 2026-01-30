import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { Palette, Database, Brain, Lock, Rocket } from 'lucide-react';

const Layers = () => {
  const { t } = useTranslation();

  const layers = [
    {
      number: 1,
      icon: <Palette size={24} />,
      name: t('doc.layersPage.layer1.name'),
      subtitle: t('doc.layersPage.layer1.subtitle'),
      description: t('doc.layersPage.layer1.description'),
      includes: t('doc.layersPage.layer1.includes', { returnObjects: true }) as string[],
      simple: t('doc.layersPage.layer1.simple'),
      inRegenmon: t('doc.layersPage.layer1.inRegenmon', { returnObjects: true }) as string[],
      tools: t('doc.layersPage.layer1.tools'),
      color: 'orange',
    },
    {
      number: 2,
      icon: <Database size={24} />,
      name: t('doc.layersPage.layer2.name'),
      subtitle: t('doc.layersPage.layer2.subtitle'),
      description: t('doc.layersPage.layer2.description'),
      includes: t('doc.layersPage.layer2.includes', { returnObjects: true }) as string[],
      simple: t('doc.layersPage.layer2.simple'),
      inRegenmon: t('doc.layersPage.layer2.inRegenmon', { returnObjects: true }) as string[],
      tools: t('doc.layersPage.layer2.tools'),
      color: 'blue',
    },
    {
      number: 3,
      icon: <Brain size={24} />,
      name: t('doc.layersPage.layer3.name'),
      subtitle: t('doc.layersPage.layer3.subtitle'),
      description: t('doc.layersPage.layer3.description'),
      includes: t('doc.layersPage.layer3.includes', { returnObjects: true }) as string[],
      simple: t('doc.layersPage.layer3.simple'),
      inRegenmon: t('doc.layersPage.layer3.inRegenmon', { returnObjects: true }) as string[],
      tools: t('doc.layersPage.layer3.tools'),
      color: 'green',
    },
    {
      number: 4,
      icon: <Lock size={24} />,
      name: t('doc.layersPage.layer4.name'),
      subtitle: t('doc.layersPage.layer4.subtitle'),
      description: t('doc.layersPage.layer4.description'),
      includes: t('doc.layersPage.layer4.includes', { returnObjects: true }) as string[],
      simple: t('doc.layersPage.layer4.simple'),
      inRegenmon: t('doc.layersPage.layer4.inRegenmon', { returnObjects: true }) as string[],
      tools: t('doc.layersPage.layer4.tools'),
      color: 'purple',
    },
    {
      number: 5,
      icon: <Rocket size={24} />,
      name: t('doc.layersPage.layer5.name'),
      subtitle: t('doc.layersPage.layer5.subtitle'),
      description: t('doc.layersPage.layer5.description'),
      includes: t('doc.layersPage.layer5.includes', { returnObjects: true }) as string[],
      simple: t('doc.layersPage.layer5.simple'),
      inRegenmon: t('doc.layersPage.layer5.inRegenmon', { returnObjects: true }) as string[],
      tools: t('doc.layersPage.layer5.tools'),
      color: 'sky',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> = {
      orange: { border: 'border-orange-500', bg: 'bg-orange-500/10', text: 'text-orange-400' },
      blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-400' },
      green: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400' },
      purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' },
      sky: { border: 'border-sky-500', bg: 'bg-sky-500/10', text: 'text-sky-400' },
    };
    return colors[color];
  };

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.layersPage.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.layersPage.subtitle')}
        </p>

        {/* Imagen de las 5 capas */}
        <div className="my-12 flex justify-center">
          <img
            src="https://res.cloudinary.com/ddejtxqjq/image/upload/v1769573438/unnamed_kyvflt.jpg"
            alt="Las 5 Capas de Toda Aplicación"
            className="max-w-full h-auto rounded-lg border border-border/50 shadow-lg"
          />
        </div>

        {/* Nota importante */}
        <div className="my-8 glass-card p-6 border-l-4 border-yellow-500 bg-yellow-500/5">
          <p className="text-sm text-foreground">
            <span className="font-bold text-yellow-400">💡 {t('doc.layersPage.keyInsight.title')}: </span>
            {t('doc.layersPage.keyInsight.description')}
          </p>
        </div>

        {/* Secciones de cada capa */}
        <div className="space-y-12 my-12">
          {layers.map((layer) => {
            const colorClasses = getColorClasses(layer.color);
            return (
              <div key={layer.number} className={`glass-card p-6 border-l-4 ${colorClasses.border}`}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{layer.icon}</span>
                  <div>
                    <h3 className={`text-2xl font-bold ${colorClasses.text}`}>
                      LAYER {layer.number}: {layer.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic mt-1">
                      {layer.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">
                  {layer.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className={`${colorClasses.bg} p-4 rounded-lg border ${colorClasses.border}`}>
                    <h4 className="font-semibold text-foreground mb-2">
                      📦 {t('doc.layersPage.includes')}
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {layer.includes.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={`${colorClasses.bg} p-4 rounded-lg border ${colorClasses.border}`}>
                    <h4 className="font-semibold text-foreground mb-2">
                      🎯 {t('doc.layersPage.inRegenmon')}
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {layer.inRegenmon.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{t('doc.layersPage.simple')}:</span>
                  <span className="text-foreground font-medium">{layer.simple}</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{t('doc.layersPage.tools')}:</span>
                  <span className={`font-semibold ${colorClasses.text}`}>{layer.tools}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Por qué importa este framework */}
        <div className="my-12 glass-card p-6 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            ⭐ {t('doc.layersPage.whyItMatters.title')}
          </h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                🔄 {t('doc.layersPage.whyItMatters.transferability.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('doc.layersPage.whyItMatters.transferability.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                🐛 {t('doc.layersPage.whyItMatters.debugging.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('doc.layersPage.whyItMatters.debugging.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                🧩 {t('doc.layersPage.whyItMatters.modularity.title')}
              </h4>
              <p className="text-muted-foreground text-sm">
                {t('doc.layersPage.whyItMatters.modularity.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/resources"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.resources')}</div>
            </div>
          </Link>

          <Link
            to="/doc/ai"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.ai')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Layers;
