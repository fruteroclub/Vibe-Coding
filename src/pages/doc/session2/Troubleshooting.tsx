import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { AlertTriangle, Key, MessageCircle, RefreshCw, Bot, DollarSign, LifeBuoy } from 'lucide-react';

const Session2Troubleshooting = () => {
  return (
    <DocLayout>
      <DocContent>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-400" />
          <h1 className="gradient-text text-4xl font-bold">
            Errores Comunes - Sesión 2
          </h1>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          Problemas frecuentes al integrar IA conversacional y sus soluciones.
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Key className="w-10 h-10 text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Error: API Key inválida o no funciona"
              </h2>
              <p className="text-muted-foreground mb-4">
                Agregaste tu API Key pero la app dice que es inválida o falla al conectar.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que <strong>copiaste la API Key completa</strong> sin espacios extra</li>
              <li>2. Revisa en tu cuenta del proveedor de IA que la key esté activa</li>
              <li>3. Si no tienes créditos, la API no funcionará (revisa balance)</li>
              <li>4. Genera una nueva API Key si la anterior no funciona</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              La API Key es tu contraseña para usar la IA. Si tiene errores, está vencida,
              o no tienes créditos, el proveedor rechaza la conexión.
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <MessageCircle className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El chat no responde nada"
              </h2>
              <p className="text-muted-foreground mb-4">
                Escribes mensajes pero el Regenmon no contesta, solo carga infinito.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Abre la consola (F12) y revisa errores en rojo</li>
              <li>2. Verifica que la <strong>API Key esté configurada correctamente</strong></li>
              <li>3. Confirma que tu conexión a internet funcione</li>
              <li>4. Revisa si hay límites de rate (demasiadas peticiones muy rápido)</li>
              <li>5. Espera 30 segundos y vuelve a intentar</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Tu app envía el mensaje a la IA en internet, espera respuesta, y la muestra.
              Si algo falla en ese proceso (API, conexión, código), se queda esperando.
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4 mb-4">
            <RefreshCw className="w-10 h-10 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El historial de chat se borra al recargar"
              </h2>
              <p className="text-muted-foreground mb-4">
                Conversas con tu Regenmon pero al recargar (F5) toda la conversación desaparece.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Verifica que el código guarde mensajes en <strong>localStorage</strong></li>
              <li>2. Abre F12 → Application → Local Storage y busca el historial</li>
              <li>3. Pídele a v0 que agregue persistencia del chat</li>
              <li>4. Confirma que cada mensaje se guarde después de enviarlo</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Sin localStorage, los mensajes solo existen en memoria temporal.
              Al recargar, esa memoria se limpia y pierdes todo el historial.
            </p>
          </div>
        </div>

        {/* Error 4 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4 mb-4">
            <Bot className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "El Regenmon responde cosas raras o fuera de contexto"
              </h2>
              <p className="text-muted-foreground mb-4">
                La IA responde pero no tiene la personalidad correcta o dice cosas sin sentido.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Revisa el <strong>prompt del sistema</strong> - debe definir personalidad clara</li>
              <li>2. Incluye información del tipo de Regenmon (Fuego/Agua/Planta)</li>
              <li>3. Agrega stats actuales (felicidad, energía) al prompt</li>
              <li>4. Define límites claros: "Responde como una mascota, no como asistente"</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              La IA responde según las instrucciones que recibe. Si el prompt es vago
              o no tiene contexto, las respuestas serán genéricas o inconsistentes.
            </p>
          </div>
        </div>

        {/* Error 5 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-green-500">
          <div className="flex items-start gap-4 mb-4">
            <DollarSign className="w-10 h-10 text-green-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                "Error: Créditos insuficientes o límite alcanzado"
              </h2>
              <p className="text-muted-foreground mb-4">
                La app funcionaba pero ahora dice que no hay créditos o alcanzaste el límite.
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              <li>1. Revisa tu balance en la consola del proveedor de IA</li>
              <li>2. Optimiza el prompt para usar menos tokens</li>
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              Cada mensaje a la IA cuesta tokens (créditos). Los proveedores suelen dar
              créditos gratis para empezar, pero eventualmente se acaban si usas mucho la API.
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">
              ¿Sigues teniendo problemas?
            </h2>
          </div>
          <p className="text-foreground mb-4">
            Para debugging de IA, incluye esta información:
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">1.</span>
              <span>Screenshot del error exacto (consola F12 incluida)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">2.</span>
              <span>Tu API Key (solo los primeros 10 caracteres: sk-ant-api03...)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-orange-400">3.</span>
              <span>El prompt del sistema que estás usando</span>
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
            to="/doc/session-2/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session2Troubleshooting;
