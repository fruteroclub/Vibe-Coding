import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const Session4Prompt = () => {
  // Fecha de desbloqueo: 16 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-16T19:00:00-06:00');
  const isUnlocked = new Date() >= unlockDate;

  return (
    <DocLayout>
      <DocContent>
        {!isUnlocked ? (
          <LockedContent unlockDate={unlockDate} sessionNumber={4} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 4
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Aquí encontrarás el prompt completo para desarrollar tu Regenmon en la Sesión 4.
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
            to="/doc/session-4/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
            </div>
          </Link>

          <Link
            to="/doc/session-5"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 5</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session4Prompt;
