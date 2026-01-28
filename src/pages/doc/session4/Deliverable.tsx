import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Session4Deliverable = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🎯 {t('doc.quickStartPage.subsections.deliverable')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session4.title')}
        </p>

        <div className="p-8 border border-border/50 rounded-lg bg-muted/20 mb-8">
          <p className="text-foreground text-lg leading-relaxed">
            {t('doc.quickStartPage.sessions.session4.deliverable')}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          ✅ Criterios de Completitud
        </h2>

        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Nuevas Funcionalidades</p>
              <p className="text-sm text-muted-foreground">Sistema de evolución, logros y minijuegos implementados correctamente</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Optimización</p>
              <p className="text-sm text-muted-foreground">La aplicación carga rápidamente y responde sin lag a las interacciones</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Animaciones</p>
              <p className="text-sm text-muted-foreground">Las transiciones y animaciones se ejecutan suavemente y mejoran la experiencia</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Experiencia de Usuario</p>
              <p className="text-sm text-muted-foreground">La interfaz es intuitiva y las nuevas funcionalidades son fáciles de descubrir</p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-4/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.prompt')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4/support"
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

export default Session4Deliverable;
