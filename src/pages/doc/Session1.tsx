import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session1 = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
      <h1 className="gradient-text text-4xl font-bold mb-6">
        🥚 {t('doc.sidebarItems.session1')}
      </h1>

      <p className="text-muted-foreground text-lg mb-8">
        En esta sesión crearás tu primer Regenmon (Tamagotchi regenerativo). Aprenderás los fundamentos de UI, componentes React y persistencia de datos.
      </p>

      <h2 className="text-2xl font-bold text-doc-primary mt-12 mb-4">
        ¿Qué vas a aprender?
      </h2>

      <div className="my-8 glass-card p-6 border-l-4 border-doc-primary">
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-doc-primary">•</span>
            <span>Cómo funciona prompt→código con v0</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-doc-primary">•</span>
            <span>Qué son componentes y cómo se organizan</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-doc-primary">•</span>
            <span>Hacer que la info persista (localStorage)</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
        ¿Qué vas a construir?
      </h2>

      <div className="grid grid-cols-1 gap-4 my-8">
        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Display de tu Regenmon
          </h4>
          <p className="text-sm text-muted-foreground">
            Interfaz visual estilo Tamagotchi con animaciones y estados visuales
          </p>
        </div>

        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Modal de creación
          </h4>
          <p className="text-sm text-muted-foreground">
            Formulario para nombrar tu Regenmon y elegir su tipo
          </p>
        </div>

        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Sistema de stats
          </h4>
          <p className="text-sm text-muted-foreground">
            Barras visuales para energía, felicidad y nivel
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
        Resultado Final
      </h2>

      <div className="my-8 glass-card p-6 border-l-4 border-doc-primary bg-primary/5">
        <p className="text-foreground leading-relaxed">
          ✅ App en internet donde creas tu Regenmon y regresas sin perder progreso.
        </p>
      </div>

      {/* Navegación entre páginas */}
      <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
        <Link
          to="/doc"
          className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
        >
          <span>←</span>
          <div>
            <div className="text-xs text-muted-foreground">Anterior</div>
            <div className="font-semibold">Introducción</div>
          </div>
        </Link>

        <Link
          to="/doc/session-2"
          className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
        >
          <div>
            <div className="text-xs text-muted-foreground">Siguiente</div>
            <div className="font-semibold">Sesión 2: Conversación</div>
          </div>
          <span>→</span>
        </Link>
      </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session1;
