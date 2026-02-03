import { Link } from 'react-router-dom';
import { Shield, Eye, Database, Lock, ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Hero */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-400/10 mb-4">
              <Shield className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">
              Política de Privacidad
            </h1>
            <p className="text-muted-foreground text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Secciones */}
          <div className="space-y-8">
            {/* Introducción */}
            <section className="glass-card p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Introducción
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                En <strong>Vibe Coding</strong>, nos tomamos muy en serio tu privacidad. Esta política
                explica qué datos recopilamos, cómo los usamos y tus derechos sobre ellos.
              </p>
            </section>

            {/* Datos que recopilamos */}
            <section className="glass-card p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ¿Qué datos recopilamos?
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    1. Datos de navegación (Microsoft Clarity)
                  </h3>
                  <p className="leading-relaxed">
                    Utilizamos <strong>Microsoft Clarity</strong> para entender cómo los usuarios interactúan
                    con nuestro sitio. Esto incluye:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Mapas de calor (dónde hacen clic los usuarios)</li>
                    <li>Grabaciones de sesiones anónimas (cómo navegan)</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Dispositivo y navegador utilizado</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    ⚠️ <strong>Importante:</strong> Las grabaciones son <strong>completamente anónimas</strong>.
                    No guardamos información personal identificable.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    2. Cookies
                  </h3>
                  <p className="leading-relaxed">
                    Usamos cookies para:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Recordar tu preferencia de cookies</li>
                    <li>Análisis de uso del sitio (Clarity)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cómo usamos los datos */}
            <section className="glass-card p-6 border-l-4 border-purple-500">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ¿Cómo usamos tus datos?
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  Los datos recopilados se utilizan <strong>exclusivamente</strong> para:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>Mejorar la experiencia del usuario:</strong> Identificar problemas de usabilidad
                    y áreas de mejora en la documentación.
                  </li>
                  <li>
                    <strong>Optimizar el contenido:</strong> Saber qué secciones son más útiles para
                    los estudiantes.
                  </li>
                  <li>
                    <strong>Detectar errores técnicos:</strong> Identificar bugs o problemas de navegación.
                  </li>
                </ul>
                <p className="mt-4 bg-green-400/10 border border-green-400/30 rounded-lg p-4">
                  ✅ <strong>No vendemos ni compartimos</strong> tus datos con terceros con fines comerciales.
                </p>
              </div>
            </section>

            {/* Tus derechos */}
            <section className="glass-card p-6 border-l-4 border-orange-500">
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Tus derechos
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>Rechazar cookies:</strong> Usa el banner de cookies o la configuración
                    de tu navegador.
                  </li>
                  <li>
                    <strong>Solicitar información:</strong> Pregúntanos qué datos tenemos sobre ti.
                  </li>
                  <li>
                    <strong>Eliminar datos:</strong> Pide que eliminemos tu información.
                  </li>
                  <li>
                    <strong>Deshabilitar Clarity:</strong> Rechaza las cookies analíticas en el banner.
                  </li>
                </ul>

                <div className="mt-4 bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">
                    📧 Contacto para privacidad:
                  </p>
                  <p>
                    Si tienes preguntas sobre esta política o quieres ejercer tus derechos,
                    contáctanos en:{' '}
                    <a
                      href="mailto:brian@frutero.club"
                      className="text-orange-400 hover:text-orange-300 underline"
                    >
                      brian@frutero.club
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Microsoft Clarity */}
            <section className="glass-card p-6 bg-accent/50">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Sobre Microsoft Clarity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Clarity es una herramienta de análisis de Microsoft que nos ayuda a entender
                cómo los usuarios interactúan con nuestro sitio.
              </p>
              <p className="text-sm text-muted-foreground">
                Para más información sobre cómo Clarity maneja los datos, visita:{' '}
                <a
                  href="https://privacy.microsoft.com/es-es/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline"
                >
                  Política de privacidad de Microsoft
                </a>
              </p>
            </section>

            {/* Cambios */}
            <section className="glass-card p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Cambios en esta política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta política ocasionalmente. Te notificaremos sobre
                cambios importantes mediante el sitio web o por correo electrónico.
              </p>
            </section>
          </div>

          {/* Footer de la página */}
          <div className="text-center pt-8 border-t border-border/50">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
