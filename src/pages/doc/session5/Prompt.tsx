import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link, useSearchParams } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const PREVIEW_KEY = 'frutero-admin-2026';

const PROMPT_TEXT = `PROMPT SESIÓN 5 — Conexión al HUB + Social

Estoy construyendo una aplicación web de mascotas virtuales llamada Regenmon usando Next.js y NES.css (estilo pixel art con la fuente "Press Start 2P"). Ya tengo las sesiones 1 a 4 funcionando: mi Regenmon se crea, conversa, come, entrena y evoluciona. Todos los datos de mi Regenmon están en localStorage.

Ahora necesito la Sesión 5: conectar mi aplicación al HUB central para que mi Regenmon aparezca en el ranking global y pueda interactuar con los Regenmons de otros estudiantes.

EL HUB YA EXISTE en https://regenmon-final.vercel.app y tiene APIs públicas. NO necesito base de datos propia — solo llamo a las APIs del HUB.

---

⚠️ REGLA CRÍTICA — PERSISTENCIA EN LOCALSTORAGE:

Esta es la regla más importante de toda la sesión 5. Cuando el usuario se registra en el HUB, la API devuelve un objeto con un campo "id". Ese ID es la identidad del Regenmon en el HUB y DEBE guardarse en localStorage inmediatamente:

localStorage.setItem("hubRegenmonId", data.data.id)

Además guardar un flag:
localStorage.setItem("isRegisteredInHub", "true")

AL CARGAR CUALQUIER PÁGINA de la sesión 5, lo PRIMERO que debe hacer es:
const hubId = localStorage.getItem("hubRegenmonId")
const isRegistered = localStorage.getItem("isRegisteredInHub") === "true"

Si isRegistered es true y hubId existe:
- NO mostrar el formulario de registro
- Ir DIRECTO a la vista de éxito / panel social
- Usar hubId para todas las llamadas al API

Si isRegistered es false o hubId no existe:
- Mostrar formulario de registro

NUNCA pedir registrarse de nuevo si ya tiene hubId en localStorage. NUNCA.

---

PARTE 1: REGISTRO EN EL HUB

Crear un componente RegisterHub que se muestre en la pestaña "Social". El flujo es:

PASO 1 — Verificar si ya está registrado:
- Leer localStorage: hubRegenmonId e isRegisteredInHub
- Si ya está registrado → saltar directo a PASO 4 (vista social)
- Si NO está registrado → mostrar formulario

PASO 2 — Formulario de registro:
- Los datos se detectan AUTOMÁTICAMENTE, el usuario NO los llena:
  - name: leer del localStorage donde guardas el nombre del Regenmon
  - ownerName: leer del localStorage donde guardas el nombre del dueño
  - appUrl: usar window.location.origin (la URL de donde esté desplegada la app, puede ser .pages.dev, .vercel.app, .netlify.app, localhost, o cualquier dominio)
  - sprite: convertir el emoji del Regenmon a URL de imagen. Usar esta función:

function getSpriteUrl(emoji) {
  const codePoints = [...emoji].map(c => c.codePointAt(0).toString(16)).join('-');
  return \`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/\${codePoints}.png\`;
}

- El ÚNICO campo que el usuario puede llenar opcionalmente es su email
- Mostrar un preview del Regenmon con su nombre, sprite y stats antes de registrar

PASO 3 — Llamar al API:
POST https://regenmon-final.vercel.app/api/register
Headers: { "Content-Type": "application/json" }
Body: { name, ownerName, ownerEmail (opcional), appUrl, sprite }

La respuesta será:
{ success: true, data: { id: "xxx", name: "...", appUrl: "...", balance: 0, ... } }

IMPORTANTE: Si la API responde con alreadyRegistered: true, significa que este appUrl ya fue registrado antes. Tomar el id de la respuesta y guardarlo.

Inmediatamente después de recibir respuesta exitosa:
1. localStorage.setItem("hubRegenmonId", response.data.id)
2. localStorage.setItem("isRegisteredInHub", "true")
3. Cambiar vista al panel social (NO recargar página, solo cambiar estado)

PASO 4 — Vista post-registro (panel social):
Esta vista se muestra siempre que isRegisteredInHub sea true. Incluye:
- Badge "HUB MEMBER" con el nombre del Regenmon
- Botón "🏆 Leaderboard" → navega a /leaderboard
- Botón "👤 Mi Perfil" → navega a /regenmon/{hubRegenmonId}
- Sección de actividad reciente (ver PARTE 6)

---

PARTE 2: SINCRONIZACIÓN AUTOMÁTICA

Crear un hook useHubSync que sincronice datos con el HUB:

POST https://regenmon-final.vercel.app/api/sync
Headers: { "Content-Type": "application/json" }
Body: {
  regenmonId: localStorage.getItem("hubRegenmonId"),
  stats: { happiness, energy, hunger },
  totalPoints: (leer de localStorage),
  trainingHistory: [] (array vacío está bien si no hay historial)
}

La sincronización debe ejecutarse:
- Al registrarse por primera vez
- Después de cada entrenamiento completado
- Cada 5 minutos con setInterval (solo si está registrado)

El HUB responde con:
{ data: { balance: 150, tokensEarned: 25, totalPoints: 300 } }

Guardar el balance actualizado en localStorage si cambió.

---

PARTE 3: LEADERBOARD

Crear página /leaderboard que consuma:
GET https://regenmon-final.vercel.app/api/leaderboard?page=1&limit=10

Respuesta: { data: [{ rank, id, name, ownerName, sprite, stage, totalPoints, balance }], pagination: { page, totalPages, total } }

Mostrar:
- 🥇🥈🥉 para top 3, luego #4, #5...
- Imagen sprite (usar tag <img> con la URL del sprite)
- Nombre, dueño, stage, puntos y $FRUTA
- Botón "Ver" en cada fila → navega a /regenmon/{id}
- Paginación: botones "← Anterior" y "Siguiente →"
- Botón "← Volver" para regresar a la app principal

---

PARTE 4: PERFIL PÚBLICO DE OTROS REGENMONS

Crear página /regenmon/[id] que consuma:
GET https://regenmon-final.vercel.app/api/regenmon/{id}

Respuesta: { data: { id, name, ownerName, sprite, stage, stats, totalPoints, balance, totalVisits, registeredAt } }

Mostrar:
- Sprite grande
- Nombre y dueño
- Stage con indicador visual
- Stats (felicidad, energía, hambre) con barras de progreso coloridas
- Puntos y balance de $FRUTA
- Total de visitas
- Fecha de registro formateada

IMPORTANTE: Detectar si este perfil es MÍO o de OTRO:
const myHubId = localStorage.getItem("hubRegenmonId")
const isMyProfile = myHubId === id (el id de la URL)

- Si es MI perfil: mostrar solo info, sin botones de interacción
- Si es de OTRO: mostrar los botones de interacción social (PARTE 5)
- Si NO estoy registrado en el HUB: mostrar mensaje "Regístrate en el HUB para interactuar" con link a la pestaña Social

---

PARTE 5: INTERACCIONES SOCIALES

Estos botones SOLO aparecen en perfiles de OTROS Regenmons y SOLO si yo tengo hubRegenmonId en localStorage.

A) ALIMENTAR:
Botón "🍎 Dar de comer (-10 $FRUTA)"
- Deshabilitado si mi balance < 10 (mostrar "Sin $FRUTA suficiente")
- Al hacer clic:
  POST https://regenmon-final.vercel.app/api/regenmon/{id}/feed
  Body: { fromRegenmonId: localStorage.getItem("hubRegenmonId") }
- Respuesta exitosa: { data: { senderBalance: 140, targetName: "Rex", cost: 10 } }
- Actualizar mi balance en localStorage
- Mostrar toast/notificación: "¡Le diste de comer a Rex! -10 $FRUTA"
- Animación de 🍎 volando hacia el sprite del otro Regenmon

B) ENVIAR REGALO:
Botones "🎁 5", "🎁 10", "🎁 25" (tres opciones de cantidad)
- Cada botón deshabilitado si mi balance < esa cantidad
- Al hacer clic:
  POST https://regenmon-final.vercel.app/api/regenmon/{id}/gift
  Body: { fromRegenmonId: localStorage.getItem("hubRegenmonId"), amount: 10 }
- Respuesta: { data: { senderBalance: 130, targetName: "Rex", amount: 10 } }
- Actualizar mi balance en localStorage
- Mostrar: "¡Enviaste 10 $FRUTA a Rex! 🎁"

C) MENSAJES:
Sección debajo del perfil con lista de mensajes y formulario para enviar:

Leer mensajes:
GET https://regenmon-final.vercel.app/api/regenmon/{id}/messages?limit=20
Respuesta: { data: { messages: [{ id, fromName, message, createdAt }] } }

Enviar mensaje:
POST https://regenmon-final.vercel.app/api/regenmon/{id}/messages
Body: {
  fromRegenmonId: localStorage.getItem("hubRegenmonId"),
  fromName: (leer nombre del dueño de localStorage),
  message: "texto del mensaje"
}

- Máximo 140 caracteres con contador visible
- Mostrar mensajes en orden cronológico (más recientes arriba)
- Cada mensaje muestra: nombre del remitente, texto, y tiempo relativo ("hace 5 min", "hace 1 hora")
- Después de enviar, agregar el mensaje a la lista sin recargar

---

PARTE 6: ACTIVIDAD RECIENTE

En la vista post-registro (pestaña Social), mostrar actividad reciente:

GET https://regenmon-final.vercel.app/api/regenmon/{hubRegenmonId}/activity?limit=10

Respuesta: { data: { activity: [{ type, description, amount, createdAt }] } }

Tipos posibles:
- "feed_received" → "🍎 Rex te dio de comer"
- "gift_received" → "🎁 Rex te envió 10 $FRUTA"
- "message_received" → "📨 Rex: tu mensaje aquí"

Si no hay actividad, mostrar: "Aún no hay actividad. ¡Comparte tu perfil!"

---

ESTILO VISUAL:

Todo con NES.css pixel art:
- Clases: nes-container, nes-btn, nes-badge, nes-input, nes-textarea, nes-progress
- Fuente "Press Start 2P"
- Colores: naranja (#f97316) acentos, amarillo stats, verde éxito, rojo errores
- Fondo oscuro, bordes pixelados
- Responsive: en mobile (max-width: 768px) usar flex-direction: column, fuentes más pequeñas, botones de ancho completo

MANEJO DE ERRORES:
- Si fetch falla o el HUB no responde: mostrar "El HUB está descansando, intenta después 🍎" (NO mostrar errores técnicos al usuario)
- Si balance insuficiente: deshabilitar botón, mostrar balance actual
- Si hay error de red: reintentar 1 vez automáticamente después de 2 segundos
- Siempre usar try/catch en todas las llamadas fetch

ESTRUCTURA DE ARCHIVOS sugerida:
- /app/leaderboard/page.tsx → Leaderboard global
- /app/regenmon/[id]/page.tsx → Perfil público con interacciones
- /app/components/RegisterHub.tsx → Registro + vista post-registro
- /app/components/SocialActions.tsx → Feed, gift, mensajes
- /app/components/ActivityFeed.tsx → Panel de actividad
- /app/hooks/useHub.ts → Hook con todas las llamadas al API del HUB
- /app/hooks/useHubSync.ts → Hook de sincronización automática`;

const Session5Prompt = () => {
  const [copied, setCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Fecha de desbloqueo: 18 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-18T19:00:00-06:00');
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
          <LockedContent unlockDate={unlockDate} sessionNumber={5} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 5: Social
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copia este prompt y pégalo en v0 para conectar tu Regenmon al HUB central y agregar interacciones sociales. Tienes toda la libertad de poder modificarlo, esta es una guía que te ayudará en tu Sesión 5.
            </p>

            <div className="glass-card p-6 mb-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-muted-foreground">Prompt para Sesión 5: Social</span>
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
            to="/doc/session-5/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
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

export default Session5Prompt;
