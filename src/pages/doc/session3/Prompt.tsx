import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link, useSearchParams } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const PREVIEW_KEY = 'frutero-admin-2026';

const PROMPT_TEXT = `Continúa mi proyecto de Regenmon de las sesiones anteriores. Ya tengo:

Sesión 1: Mi Regenmon con nombre, imagen y stats (Felicidad, Energía, Hambre)
Sesión 2: Chat con IA donde mi Regenmon puede hablar conmigo a través de API
Ahora agrega login y sistema de monedas.

AUTENTICACIÓN (Privy)
Integrar @privy-io/react-auth para login
Métodos: Google y Email
App secret: "privy_app_secret_3CLEoN6Jbu2kAurPuQxiY4Y3QwBQ3GygGs32oPfaH7MnAjVqMqBWo6KjAryVXaWXCJEJQtKmg2HpqrT88n5jTaTA"
App ID: cmkyyrsbj04bck40bidlscndo
Comportamiento:
Si NO está logueado:

Mostrar botón "Iniciar Sesión"
Las monedas muestran "🍊 — $FRUTA"
No muestra las $FRUTA si no estas Logeado
Si puedes hacer acciones pero no se verán reflejadas hasta logearte
Si está logueado:

Mostrar su nombre o email arriba
Mostrar botón "Cerrar Sesión"
La sesión se mantiene al recargar la página
Todo lo que teniamos anteriormente antes de meter privy
PANTALLA PRINCIPAL (después de login)
Mantener todo lo de sesiones anteriores:

Nombre del Regenmon
Imagen/sprite del Regenmon
Stats: Felicidad, Energía, Hambre (con barras de colores)
Chat con IA
Agregar:

Header: nombre/email del usuario + "🍊 100 $FRUTA" + botón cerrar sesión
Área de mensaje del Regenmon (donde reacciona a las acciones)
Botones de acción actualizados
SISTEMA DE MONEDAS $FRUTA
Estado inicial:
Usuario nuevo empieza con 100 monedas
Si no tienes monedas :
Al momento de estar conversando el el chat con tu regenmon puedes ganar monedas
Pueden estar ganando entre 2 a 5 monedas por conversación
Si el usuario esta llegando a 100 el ganar de monedas es mas difícil y mas complicado que una conversación te de monedas
No puede conseguir monedas infinitamente
Contador de monedas:
Siempre visible en el header
Se actualiza inmediatamente al cambiar
Se guarda y persiste al recargar
ALIMENTAR AL REGENMON
Botón "🍎 Alimentar (10 🍊)":
Cuesta 10 monedas
Al presionar:
Resta 10 monedas
Baja el stat de Hambre
El Regenmon reacciona con un mensaje (ej: "¡Ñam ñam! Gracias por la comida 😋")
Validaciones:
Si no tiene suficientes monedas: hablemos y mejora conmigo
Mostrar tooltip: "Necesitas 10 🍊"
No permitir alimentar si el hambre ya está al mínimo
FEEDBACK VISUAL
Mensajes de estado:
Al hacer cualquier acción: mostrar "⏳ Procesando…"
Cuando termina: mostrar "✅ ¡Listo!" (desaparece en 2 segundos)
Si hay error: mostrar mensaje en rojo
Animación de monedas:
Cuando GASTAS: mostrar "-10 🍊" flotando hacia arriba
Cuando GANAS: mostrar "+50 🍊" en verde flotando -> ejemplo
VALIDACIONES
No puedes alimentar sin monedas suficientes
No se pueden hacer clicks múltiples mientras procesa
El sistema previene acciones inválidas
PERSISTENCIA
Las monedas se guardan al recargar
Se guardara no solamente en local ya que contamos con privy has un guardado que funcione local pero se tenga que validar con privy
Los stats se guardan al recargar
El estado del Regenmon refleja acciones previas
Cada usuario tiene sus propios datos (por email)
HISTORIAL (Bonus)
Sección colapsable "📜 Historial"
Últimas 10 acciones
Muestra: qué acción, cuántas monedas, cuándo
MICRO-INTERACCIONES (Bonus)
Animaciones al ganar/gastar monedas
Reacciones visuales del Regenmon
Efectos hover/press en botones
Transiciones suaves
DISEÑO
Mantener estilo pixel art / retro de sesiones anteriores
Fondo oscuro
Color principal: naranja
Responsive (celular)`;

const Session3Prompt = () => {
  const [copied, setCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Fecha de desbloqueo: 14 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-14T19:00:00-06:00');
  const hasPreviewAccess = searchParams.get('preview') === PREVIEW_KEY;
  const isUnlocked = new Date() >= unlockDate || hasPreviewAccess;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROMPT_TEXT;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <DocLayout>
      <DocContent>
        {!isUnlocked ? (
          <LockedContent unlockDate={unlockDate} sessionNumber={3} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 3: Identidad
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copia este prompt y pégalo en v0 para agregar login y sistema de monedas a tu Regenmon. Tienes toda la libertad de poder modificarlo, esta es una guía que te ayudará en tu Sesión 3.
            </p>

            <div className="glass-card p-6 mb-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-muted-foreground">Prompt para Sesión 3: Identidad</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                      Copiar prompt
                    </>
                  )}
                </button>
              </div>
              <pre className="text-foreground text-sm leading-relaxed whitespace-pre-wrap font-mono bg-black/20 rounded-lg p-4 max-h-[600px] overflow-y-auto">
                {PROMPT_TEXT}
              </pre>
            </div>
          </div>
        )}

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
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

export default Session3Prompt;
