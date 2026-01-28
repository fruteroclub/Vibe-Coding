import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Code, FileText } from 'lucide-react';

const Session2Support = () => {
  const { t } = useTranslation();

  const materialIcons: { [key: string]: React.ReactNode } = {
    0: <Video size={24} className="text-purple-400" />,
    1: <Code size={24} className="text-blue-400" />,
    2: <BookOpen size={24} className="text-green-400" />,
    3: <FileText size={24} className="text-orange-400" />,
  };

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          📚 {t('doc.quickStartPage.subsections.supportMaterial')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session2.title')}
        </p>

        <div className="space-y-6">
          {(t('doc.quickStartPage.sessions.session2.supportMaterial', { returnObjects: true }) as string[]).map((material, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 border border-border/50 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                {materialIcons[i] || <BookOpen size={24} className="text-orange-400" />}
              </div>
              <div className="flex-1">
                <p className="text-foreground text-lg leading-relaxed">
                  {material}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border-l-4 border-orange-400 bg-orange-500/5 rounded-r-lg">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            💡 Consejo Avanzado
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Los system prompts son la clave para crear personalidades únicas. Experimenta con diferentes estilos de escritura, tono y comportamientos para hacer que tu Regenmon sea verdaderamente único.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.deliverable')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente sesión</div>
              <div className="font-semibold">{t('doc.sidebarItems.session3')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session2Support;
