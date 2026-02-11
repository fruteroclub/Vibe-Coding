import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link, useSearchParams } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const PREVIEW_KEY = 'frutero-admin-2026';

const PROMPT_TEXT = `## 🔑 API que vamos a usar
Vamos a usar la API de OpenAI (ChatGPT) para que tu Regenmon pueda hablar contigo.
OPENAI_API_KEY=" Poner la API que frutero te proporciono"

---

Quiero agregar un sistema de chat a mi Regenmon (continuando el proyecto de la sesión anterior).

## 🟢 NIVEL 1: Chat Básico

### Área de Chat
- Agregar una sección de chat debajo del Regenmon
- Campo de texto para escribir mensajes
- Botón "Enviar"
- Los mensajes aparecen en pantalla
- El Regenmon responde en español usando la API de OpenAI

### Flujo
- Se pueden enviar múltiples mensajes
- Mensajes del usuario a la derecha (o color distinto)
- Mensajes del Regenmon a la izquierda (o color distinto)
- La conversación fluye naturalmente

## 🟡 NIVEL 2: Experiencia Completa

### Burbujas de Chat
- Mensajes del usuario en burbujas de un color
- Mensajes del Regenmon en burbujas de otro color
- Estilo visual consistente con NES.css
- El input se limpia después de enviar

### Personalidad del Regenmon
- Respuestas cortas (máximo 50 palabras)
- Tono amigable y juguetón
- Habla como si fuera una mascota virtual
- Usa emojis ocasionalmente

### Persistencia
- Guardar conversación en localStorage
- Al recargar la página, los mensajes anteriores siguen ahí
- Máximo 20 mensajes guardados (los más recientes)

## 🔵 NIVEL 3: Alta Calidad

### Indicador de Escritura
- Mostrar "Escribiendo..." o "..." mientras espera respuesta
- El indicador desaparece cuando llega la respuesta
- Pequeño delay para que se sienta natural

### Stats Afectadas por Chat
- Cada mensaje enviado:
  - Sube Felicidad +5
  - Baja Energía -3
- Si la conversación tiene más de 5 mensajes seguidos:
  - Baja Energía -5 adicional

### Comportamiento según Estado
El Regenmon cambia su forma de responder según sus stats:
- Energía < 30: Menciona que está cansado, respuestas más cortas
- Felicidad > 70: Muy entusiasta, usa más emojis
- Hambre < 30: Menciona que tiene hambre, pide comida

## 🟣 NIVEL 4: Bonus

### Memoria del Regenmon
- Detecta si el usuario menciona su nombre o gustos
- Guarda estas "memorias" en localStorage
- Usa las memorias en conversaciones futuras
- Mostrar indicador "🧠 3 memorias" en algún lugar

### Efectos Visuales
- Animación bounce cuando llega mensaje nuevo
- Texto flotante "+5 Felicidad" cuando sube stat
- Scroll automático al último mensaje

## Mantener
- Todo lo de la sesión 1 (crear mascota, stats, reiniciar)
- Estilo NES.css y pixel art
- Responsive design
- Los 3 botones de acción (Alimentar, Jugar, Descansar) si los tenías`;

const Session2Prompt = () => {
  const [copied, setCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Fecha de desbloqueo: 11 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-11T19:00:00-06:00');
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
          <LockedContent unlockDate={unlockDate} sessionNumber={2} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 2: Conversación
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copia este prompt y pégalo en v0 para agregar el sistema de chat a tu Regenmon. Tienes toda la libertad de poder modificarlo, esta es una guía que te ayudará en tu Sesión 2.
            </p>

            <div className="glass-card p-6 mb-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-muted-foreground">Prompt para Sesión 2: Conversación</span>
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
            to="/doc/session-2/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
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

export default Session2Prompt;
