import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { TechTerm } from '@/components/doc/TechTerm';
import { Link } from 'react-router-dom';

// Función para detectar y aplicar tooltips a términos técnicos
const renderItemWithTooltips = (text: string, techTerms: Record<string, string>) => {
  const words = text.split(/(\s+|[,():])/);

  return words.map((word, index) => {
    const cleanWord = word.replace(/[,.;:()\"]/g, '');
    const lowerWord = cleanWord.toLowerCase();

    const termKey = Object.keys(techTerms).find(key =>
      lowerWord === key.toLowerCase() ||
      cleanWord === key
    );

    if (termKey) {
      return (
        <TechTerm
          key={index}
          term={termKey}
          definition={techTerms[termKey]}
        >
          {word}
        </TechTerm>
      );
    }

    return <span key={index}>{word}</span>;
  });
};

const AI = () => {
  const { t } = useTranslation();

  const techTerms: Record<string, string> = t('doc.aiPage.techTerms', { returnObjects: true });
  const sessionsData: Record<string, any> = t('doc.aiPage.sessions', { returnObjects: true });

  const sessions = Object.keys(sessionsData).map(key => {
    const session = sessionsData[key];
    const sectionsData = session.sections;

    const sections = Object.keys(sectionsData).map(sectionKey => ({
      title: sectionsData[sectionKey].title,
      items: sectionsData[sectionKey].items
    }));

    return {
      number: parseInt(key),
      title: session.title,
      sections
    };
  });

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.aiPage.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.aiPage.subtitle')}
        </p>

        <div className="space-y-12">
          {sessions.map((session) => (
            <div key={session.number} className="space-y-6">
              <div className="border-b border-border/50 pb-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {t('journey.labels.session')} {session.number}: {session.title}
                </h2>
              </div>

              {session.sections.map((section, idx) => (
                <div key={idx} className="glass-card p-6">
                  <h3 className="text-xl font-semibold text-doc-primary mb-4">
                    {idx + 1}. {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item: string, itemIdx: number) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-doc-primary mt-1">•</span>
                        <span className="leading-relaxed">
                          {renderItemWithTooltips(item, techTerms)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/layers"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.sidebarItems.layers')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">{t('doc.sidebarItems.session1')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default AI;
