import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session5Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-4">
          🚨 Errores Comunes - Sesión 5
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Soluciones para problemas con características sociales, perfiles públicos e interacciones.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🌐</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Los perfiles públicos no se ven o muestran error 404"
              </h2>
              <p className="text-muted-foreground mb-4">
                Intentas ver un perfil público pero no carga o muestra página no encontrada.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que la <strong>ruta dinámica</strong> esté configurada (/profile/:userId)</li>
              <li>2. Confirma que las RLS policies permitan lectura pública de perfiles</li>
              <li>3. Revisa que el query traiga datos del usuario correcto</li>
              <li>4. Asegúrate de que exista un campo "is_public" o similar en la tabla</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Los perfiles públicos necesitan rutas dinámicas y permisos de base de datos adecuados.
              Si RLS bloquea lectura pública, nadie puede ver los perfiles.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🔔</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Las notificaciones no aparecen"
              </h2>
              <p className="text-muted-foreground mb-4">
                Ocurren interacciones pero no se generan notificaciones.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Confirma que cada interacción <strong>cree un registro en tabla notifications</strong></li>
              <li>2. Verifica que el userId del destinatario sea correcto</li>
              <li>3. Revisa que el componente de notificaciones consulte la DB</li>
              <li>4. Asegúrate de que haya un sistema de polling o real-time subscriptions</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Las notificaciones son registros en DB que se muestran al usuario destino.
              Si no se crean, no hay nada que mostrar.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">👥</span>
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El feed no muestra otros Regenmons"
              </h2>
              <p className="text-muted-foreground mb-4">
                Hay usuarios pero el feed aparece vacío o solo muestra el tuyo.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que el query <strong>NO filtre por userId</strong> (debe traer todos)</li>
              <li>2. Confirma que RLS permita lectura pública de Regenmons públicos</li>
              <li>3. Revisa que haya un campo "is_public: true" en los registros</li>
              <li>4. Asegúrate de excluir tu propio Regenmon del feed (opcional)</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              El feed debe traer registros de TODOS los usuarios (excepto el actual).
              Si filtras por userId o RLS bloquea, solo verás el tuyo.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🆘 Problemas con características sociales?
          </h2>
          <p className="text-foreground mb-4">
            Para debugging de features sociales:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Screenshot de RLS policies en Supabase</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Queries que estás usando para feed/notificaciones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>Estructura de tablas (usuarios, notificaciones, interacciones)</span>
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
            to="/doc/session-5/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
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

export default Session5Troubleshooting;
