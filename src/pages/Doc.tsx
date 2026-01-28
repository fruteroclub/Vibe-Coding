import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';

const Doc = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.title')}
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.subtitle')}
        </p>

        <h2 className="text-2xl font-bold text-doc-primary mt-12 mb-4">
          {t('doc.introduction.title')}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t('doc.introduction.description')}
        </p>

        <div className="my-8 glass-card p-6 border-l-4 border-doc-primary">
          <h3 className="text-lg font-semibold text-doc-primary mb-2">
            {t('doc.introduction.whatYouLearn.title')}
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            {t('doc.introduction.whatYouLearn.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
          {t('doc.layers.title')}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t('doc.layers.description')}
        </p>

        <div className="grid grid-cols-1 gap-4 my-8">
          {[
            { key: 'ui', name: t('doc.layers.ui.name'), desc: t('doc.layers.ui.description') },
            { key: 'data', name: t('doc.layers.data.name'), desc: t('doc.layers.data.description') },
            { key: 'ai', name: t('doc.layers.ai.name'), desc: t('doc.layers.ai.description') },
            { key: 'auth', name: t('doc.layers.auth.name'), desc: t('doc.layers.auth.description') },
            { key: 'deploy', name: t('doc.layers.deploy.name'), desc: t('doc.layers.deploy.description') }
          ].map((layer) => (
            <div key={layer.key} className="glass-card p-4 border-l-4 border-doc-primary/50">
              <h4 className="text-lg font-semibold text-foreground mb-1">{layer.name}</h4>
              <p className="text-sm text-muted-foreground">{layer.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
          {t('doc.nextSteps.title')}
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <a href="/doc/quick-start" className="text-doc-primary hover:underline">
              → {t('doc.nextSteps.quickStart')}
            </a>
          </li>
          <li>
            <a href="/doc/layers" className="text-doc-primary hover:underline">
              → {t('doc.nextSteps.understandLayers')}
            </a>
          </li>
          <li>
            <a href="/doc/session-1" className="text-doc-primary hover:underline">
              → {t('doc.nextSteps.session1')}
            </a>
          </li>
        </ul>
      </DocContent>
    </DocLayout>
  );
};

export default Doc;
