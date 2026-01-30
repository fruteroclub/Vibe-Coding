import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Construction } from 'lucide-react';

const Sessions = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <Construction size={120} className="text-orange-400 mb-8 animate-pulse" />

          <h1 className="gradient-text text-5xl font-bold mb-6">
            En Construcción
          </h1>

          <p className="text-muted-foreground text-xl mb-8 max-w-2xl">
            Esta página está en desarrollo. Pronto podrás acceder a una vista general de todas las sesiones del bootcamp.
          </p>

          <div className="p-6 border border-orange-500/30 rounded-lg bg-orange-500/5 max-w-2xl">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">
              Mientras tanto...
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Puedes explorar las sesiones individuales desde la barra lateral. Cada sesión contiene el prompt, entregable y material de apoyo que necesitas para completarla.
            </p>
          </div>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Sessions;
