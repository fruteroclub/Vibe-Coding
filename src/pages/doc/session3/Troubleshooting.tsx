import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session3Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          🚨 Errores Comunes - Sesión 3
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Soluciones para problemas de autenticación, datos y sistemas de recursos.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🔐</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El login no funciona o falla constantemente"
              </h2>
              <p className="text-muted-foreground mb-4">
                Intentas hacer login pero muestra error o no te deja entrar.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que Privy/Clerk esté <strong>configurado correctamente</strong></li>
              <li>2. Confirma que las API keys del servicio de auth estén activas</li>
              <li>3. Revisa que el dominio esté permitido en la configuración</li>
              <li>4. Prueba con ventana incógnito para eliminar cookies viejas</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Los servicios de autenticación requieren configuración exacta. Si las keys,
              dominios o permisos no están bien, rechazan el login.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">💰</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Las monedas no se guardan o desaparecen"
              </h2>
              <p className="text-muted-foreground mb-4">
                Ganas monedas pero al recargar vuelven a cero o se pierden.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Confirma que uses <strong>base de datos (Supabase)</strong> no solo localStorage</li>
              <li>2. Verifica que cada ganancia/gasto actualice la base de datos</li>
              <li>3. Revisa los logs de Supabase para ver si las queries funcionan</li>
              <li>4. Confirma que el userId esté correctamente vinculado</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              localStorage es temporal. Para persistencia real necesitas base de datos.
              Si no guardas en DB o hay errores de query, los datos se pierden.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">👤</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Veo el Regenmon de otro usuario o datos mezclados"
              </h2>
              <p className="text-muted-foreground mb-4">
                Haces login pero ves información de otra persona o datos incorrectos.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que las queries filtren por <strong>userId correcto</strong></li>
              <li>2. Confirma que obtienes el userId del sistema de auth</li>
              <li>3. Revisa las Row Level Security (RLS) policies en Supabase</li>
              <li>4. Nunca guardes userId en localStorage - obtenerlo siempre de auth</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Si no filtras datos por usuario, la app trae información de todos.
              RLS en Supabase asegura que cada quien solo vea sus propios datos.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🆘 Problemas de base de datos?
          </h2>
          <p className="text-foreground mb-4">
            Para debugging de DB, necesitas:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Screenshot de logs de Supabase (no incluyas keys)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Descripción de qué debería pasar vs qué pasa realmente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>Tu estructura de tablas (schema)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">4.</span>
              <span>Contacta: <a href="mailto:brian@frutero.club" className="text-orange-400 underline">brian@frutero.club</a></span>
            </li>
          </ol>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 4</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session3Troubleshooting;
