import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { AlertTriangle, XCircle, Clock, Save, Wrench, LifeBuoy } from 'lucide-react';

const Session1Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-400" />
          <h1 className="gradient-text text-4xl font-bold">
            Errores Comunes - Sesión 1
          </h1>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          Si algo no funciona, aquí están las soluciones a los problemas más frecuentes.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <XCircle className="w-10 h-10 text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Mi Regenmon no aparece en pantalla"
              </h2>
              <p className="text-muted-foreground mb-4">
                Creaste tu mascota pero no se ve nada, solo pantalla en blanco.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que el <strong>nombre tenga al menos 3 letras</strong></li>
              <li>2. Revisa que hayas <strong>seleccionado un tipo</strong> (Fuego/Agua/Planta)</li>
              <li>3. Abre la consola del navegador (F12) y busca errores en rojo</li>
              <li>4. Refresca la página (F5) y vuelve a intentar</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Tu app espera cierta información antes de mostrar el Regenmon. Si falta
              algo (nombre, tipo, imagen), no sabe qué mostrar y se queda en blanco.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <Clock className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "La página no carga después de hacer deploy"
              </h2>
              <p className="text-muted-foreground mb-4">
                Hiciste deploy a Vercel pero el link muestra error 404 o carga infinita.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. <strong>Espera 2-3 minutos</strong> - Vercel tarda en procesar</li>
              <li>2. Refresca la página varias veces (Ctrl + F5)</li>
              <li>3. Abre el link en <strong>ventana incógnito</strong> para evitar caché</li>
              <li>4. Verifica en tu dashboard de Vercel que el deploy diga "Ready"</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Vercel necesita tiempo para construir tu app, subirla a servidores y
              distribuirla globalmente. No es instantáneo, pero una vez listo funciona 24/7.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4 mb-4">
            <Save className="w-10 h-10 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Mi Regenmon desaparece cuando recargo la página"
              </h2>
              <p className="text-muted-foreground mb-4">
                Creas tu mascota pero al recargar (F5) todo vuelve a empezar.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Pídele a v0: <strong>"Agrega persistencia para guardar el Regenmon"</strong></li>
              <li>2. Verifica que v0 haya agregado código para recordar datos</li>
              <li>3. Recarga la página y vuelve a crear tu Regenmon</li>
              <li>4. Si sigue sin funcionar, dile a v0: <strong>"El Regenmon no se guarda al recargar"</strong></li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Tu app necesita un lugar donde "recordar" la información de tu Regenmon.
              Sin esa memoria permanente, cuando recargas la página todo se olvida y vuelve a empezar desde cero.
            </p>
          </div>
        </div>

        {/* Error 4 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4 mb-4">
            <Wrench className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El build en v0 falla con errores"
              </h2>
              <p className="text-muted-foreground mb-4">
                Cuando intentas hacer deploy, v0 muestra errores rojos y no compila.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Lee el mensaje de error con calma - generalmente dice qué falta</li>
              <li>2. Busca errores comunes: variables no definidas, imports faltantes</li>
              <li>3. Pídele a v0 que <strong>"fixee los errores de build"</strong></li>
              <li>4. Si no funciona, describe el error específico a v0</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Los errores de build son el código diciéndote "me falta algo para funcionar".
              Puede ser una variable, un import, o código que no está completo.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">
              ¿Ninguna solución funcionó?
            </h2>
          </div>
          <p className="text-foreground mb-4">
            Si después de probar todo sigue sin funcionar:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Copia el mensaje de error completo (si hay)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Toma screenshot de tu pantalla</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>Comparte el link de tu proyecto en v0</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">4.</span>
              <span>Contacta al equipo de VibeCoding: <a href="mailto:brian@frutero.club" className="text-orange-400 underline">brian@frutero.club</a></span>
            </li>
          </ol>
          <p className="text-sm text-muted-foreground">
            Tiempo de respuesta: 24-48 horas hábiles
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-1/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 2</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session1Troubleshooting;
