import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

export const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verificar si ya hay una decisión guardada
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
      // Si no hay decisión, mostrar banner después de 1 segundo
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Si aceptó, inicializar Clarity
      initializeClarity();
    }
    // Si rechazó, no hacer nada (Clarity no se inicializa)
  }, []);

  const initializeClarity = () => {
    // Clarity ya está en el HTML, solo aseguramos que esté activo
    if (window.clarity) {
      window.clarity('consent');
      console.log('✅ Clarity activado - Recopilando datos de análisis');
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
    initializeClarity();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);

    // Detener Clarity si está activo
    if (window.clarity) {
      window.clarity('stop');
      console.log('❌ Clarity desactivado - No se recopilan datos');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="mx-4 mb-4 md:mx-auto md:max-w-4xl">
        <div className="glass-card border-2 border-orange-400/30 p-6 shadow-2xl">
          <div className="flex items-start gap-4">
            {/* Icono */}
            <div className="flex-shrink-0">
              <div className="rounded-full bg-orange-400/10 p-3">
                <Cookie className="w-6 h-6 text-orange-400" />
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-foreground">
                🍪 Usamos cookies para mejorar tu experiencia
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Utilizamos herramientas de análisis como <strong>Microsoft Clarity</strong> para
                entender cómo usas nuestro sitio mediante mapas de calor y grabación de sesiones anónimas.
                Esto nos ayuda a mejorar la experiencia de aprendizaje.{' '}
                <a
                  href="/privacy"
                  className="text-orange-400 hover:text-orange-300 underline transition-colors"
                >
                  Ver política de privacidad
                </a>
              </p>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Aceptar cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 border-2 border-border hover:border-orange-400/50 text-foreground font-medium rounded-lg transition-all duration-200 hover:bg-accent"
                >
                  Rechazar
                </button>
              </div>

              <p className="text-xs text-muted-foreground">
                💡 Si no seleccionas nada, asumiremos que aceptas las cookies para mejorar tu experiencia.
              </p>
            </div>

            {/* Botón cerrar (cuenta como aceptar) */}
            <button
              onClick={handleAccept}
              className="flex-shrink-0 p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Cerrar banner"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
