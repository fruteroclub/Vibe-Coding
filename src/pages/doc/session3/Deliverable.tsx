import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Session3Deliverable = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🎯 {t('doc.quickStartPage.subsections.deliverable')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session3.title')}
        </p>

        <div className="p-8 border border-border/50 rounded-lg bg-muted/20 mb-8">
          <p className="text-foreground text-lg leading-relaxed">
            {t('doc.quickStartPage.sessions.session3.deliverable')}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-orange-400 mb-6">
          ✅ Criterios de Completitud
        </h2>

        <div className="space-y-4 mb-12">
          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">API Funcionando</p>
              <p className="text-sm text-muted-foreground">El backend responde correctamente a las peticiones GET, POST, PUT y DELETE</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Persistencia de Datos</p>
              <p className="text-sm text-muted-foreground">Los datos del Tamagotchi se guardan en localStorage y persisten entre sesiones</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Integración Frontend-Backend</p>
              <p className="text-sm text-muted-foreground">El frontend consume correctamente la API y actualiza la interfaz</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-green-500/30 rounded-lg bg-green-500/5">
            <CheckCircle2 size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Manejo de Errores</p>
              <p className="text-sm text-muted-foreground">La aplicación maneja correctamente los errores de red y muestra mensajes apropiados</p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.prompt')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/support"
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

export default Session3Deliverable;
