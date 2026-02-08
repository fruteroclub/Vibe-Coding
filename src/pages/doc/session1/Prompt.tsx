import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link, useSearchParams } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const PREVIEW_KEY = 'frutero-admin-2026';

const PROMPT_TEXT = `Quiero crear una app web de mascota virtual tipo Tamagotchi llamada "Regenmon".

Estilo Visual
Estética pixel art / retro 8-bit (tipo Nintendo, Game Boy)
Usa la librería NES.css para los componentes
Fuente "Press Start 2P" de Google Fonts
Diseño responsive (celular, tablet, computadora)

Pantalla 1: Crear tu Regenmon
Aparece cuando es la primera vez que entras (no hay datos guardados).

Necesito:
Título "Crea tu Regenmon"
Campo para escribir el nombre (entre 2 y 15 letras)
3 opciones para elegir tipo:
🌱 Semilla (verde)
💧 Gota (azul)
✨ Chispa (amarillo)
Botón "¡Eclosionar!" que solo se activa cuando:
El nombre es válido
Seleccionaste un tipo

Pantalla 2: Tu Regenmon
Aparece después de crear, o si ya existe uno guardado.

Necesito:
Encabezado con título "🥚 Regenmon" y botón "Reiniciar"
Área central que muestre:
El nombre de tu Regenmon
El emoji grande del tipo que elegiste
Fondo del color del tipo
3 barras de estadísticas (todas inician en 50/100):
💚 Felicidad (barra verde)
⚡️ Energía (barra amarilla)
🍎 Hambre (barra roja)

Funcionalidad
Guardar los datos en localStorage para que no se pierdan
El botón Reiniciar debe pedir confirmación antes de borrar
Si confirma, borra los datos y vuelve a la pantalla de crear

Datos a guardar
Nombre
Tipo (semilla/gota/chispa)
Felicidad, Energía, Hambre (números)
Fecha de creación`;

const Session1Prompt = () => {
  const [copied, setCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Fecha de desbloqueo: 9 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-09T19:00:00-06:00');
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
          <LockedContent unlockDate={unlockDate} sessionNumber={1} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 1: Nacimiento
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copia este prompt y pégalo en v0 para generar el código de tu primera app Regenmon. Tienes toda la libertad de poder modificarlo, esta es una guía que te ayudará en tu Sesión 1.
            </p>

            <div className="glass-card p-6 mb-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-muted-foreground">Prompt para Sesión 1: Nacimiento</span>
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
            to="/doc/session-1/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
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

export default Session1Prompt;
