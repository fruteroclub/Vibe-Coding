import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Session5Deliverable = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🎯 {t('doc.quickStartPage.subsections.deliverable')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session5.title')}
        </p>

        <div className="p-8 border border-border/50 rounded-lg bg-muted/20 mb-8">
          <p className="text-foreground text-lg leading-relaxed">
            {t('doc.quickStartPage.sessions.session5.deliverable')}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          ✅ Criterios de Completitud
        </h2>

        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Aplicación Desplegada</p>
              <p className="text-sm text-muted-foreground">La aplicación está accesible públicamente con un dominio funcional</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Tests Pasando</p>
              <p className="text-sm text-muted-foreground">Todos los tests unitarios y de integración se ejecutan exitosamente</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Documentación Completa</p>
              <p className="text-sm text-muted-foreground">README con instrucciones de instalación, uso y contribución</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Proyecto Presentable</p>
              <p className="text-sm text-muted-foreground">La aplicación está pulida y lista para ser compartida en portafolio</p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-5/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.prompt')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-5/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.supportMaterial')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session5Deliverable;
