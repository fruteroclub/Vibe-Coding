import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const Session5Prompt = () => {
  // Fecha de desbloqueo: 18 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-18T19:00:00-06:00');
  const isUnlocked = new Date() >= unlockDate;

  return (
    <DocLayout>
      <DocContent>
        {!isUnlocked ? (
          <LockedContent unlockDate={unlockDate} sessionNumber={5} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 5
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Aquí encontrarás el prompt completo para desarrollar tu Regenmon en la Sesión 5.
            </p>
            {/* Aquí irá el contenido del prompt cuando esté listo */}
            <div className="glass-card p-6 mb-8">
              <p className="text-foreground text-lg">
                El contenido del prompt estará disponible próximamente.
              </p>
            </div>
          </div>
        )}

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-5/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
            </div>
          </Link>

          <Link
            to="/doc"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Introducción</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session5Prompt;
