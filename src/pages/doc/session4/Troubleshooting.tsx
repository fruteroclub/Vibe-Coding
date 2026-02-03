import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { AlertTriangle, Image, TrendingUp, RefreshCw, LifeBuoy } from 'lucide-react';

const Session4Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-400" />
          <h1 className="gradient-text text-4xl font-bold">
            Errores Comunes - Sesión 4
          </h1>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          Soluciones para problemas con IA multimodal, evaluación de imágenes y progreso.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Image className="w-10 h-10 text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "La IA no puede ver/analizar las imágenes"
              </h2>
              <p className="text-muted-foreground mb-4">
                Subes imágenes pero la IA responde como si no las viera.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Confirma que estás usando <strong>claude-3-opus/sonnet</strong> (no claude-2)</li>
              <li>2. Verifica que la imagen se convierta a base64 correctamente</li>
              <li>3. Revisa que el formato sea image/jpeg, image/png o image/webp</li>
              <li>4. Confirma que el tamaño de imagen no exceda 5MB</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Solo Claude 3 (Opus/Sonnet/Haiku) puede ver imágenes. Claude 2 es solo texto.
              La imagen debe estar en formato correcto y tamaño adecuado.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <TrendingUp className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El progreso no se guarda o vuelve a cero"
              </h2>
              <p className="text-muted-foreground mb-4">
                Entrenas tu Regenmon pero al recargar el progreso desaparece.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Asegúrate de <strong>guardar en base de datos</strong> no solo state</li>
              <li>2. Actualiza la DB después de cada entrenamiento exitoso</li>
              <li>3. Verifica que el campo de experiencia/nivel exista en tu tabla</li>
              <li>4. Confirma que las queries de actualización funcionen (logs de Supabase)</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              El progreso debe estar en DB permanente. Si solo actualizas el estado de React,
              se pierde al recargar la página.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4 mb-4">
            <RefreshCw className="w-10 h-10 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "La evolución visual no cambia"
              </h2>
              <p className="text-muted-foreground mb-4">
                Tu Regenmon sube de nivel pero la imagen sigue igual.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que tengas <strong>diferentes URLs de imagen</strong> por etapa</li>
              <li>2. Confirma que la lógica detecte correctamente el nivel/etapa</li>
              <li>3. Revisa que el componente se re-renderice con la nueva imagen</li>
              <li>4. Usa state/props para controlar qué imagen se muestra</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              La evolución visual es simplemente mostrar diferentes imágenes según el nivel.
              Si la lógica no actualiza la URL o el componente no re-renderiza, se queda igual.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">
              Problemas con IA multimodal?
            </h2>
          </div>
          <p className="text-foreground mb-4">
            Para debugging de visión por IA:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Modelo de Claude que estás usando (claude-3-opus-20240229)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Formato y tamaño de la imagen que subes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>Mensaje de error exacto de la API</span>
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
            to="/doc/session-4/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
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

export default Session4Troubleshooting;
