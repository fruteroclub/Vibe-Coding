import { useState } from 'react';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link, useSearchParams } from 'react-router-dom';
import { LockedContent } from '@/components/doc/LockedContent';

const PREVIEW_KEY = 'frutero-admin-2026';

const PROMPT_TEXT = `SISTEMA DE ENTRENAMIENTO - "Evoluciona Entrenando"
La idea general
El estudiante sube una foto/captura de su trabajo (código, diseño, proyecto o notas). La IA de OpenAI la evalúa con un puntaje de 0 a 100. Según el puntaje, gana puntos y monedas $FRUTA. Cuando acumula suficientes puntos, su Regenmon evoluciona como un Pokémon (Bebé → Joven → Adulto).

CATEGORÍAS DE ENTRENAMIENTO
4 categorías para elegir antes de subir la captura:

💻 Código - "Tu mejor código" (evalúa organización, buenas prácticas, complejidad)
🎨 Diseño - "UI/UX o gráfico" (evalúa estética, colores, tipografía, creatividad)
🚀 Proyecto - "Proyecto completo" (evalúa funcionalidad, calidad, complejidad)
📚 Aprendizaje - "Notas o ejercicios" (evalúa esfuerzo, comprensión, aplicación práctica)
Mostrar las 4 categorías como botones en una cuadrícula de 2x2. La categoría seleccionada se resalta con color naranja.

SUBIR IMAGEN
Botón "📸 Subir Captura" que abre el selector de archivos
Solo acepta imágenes (PNG, JPG, etc.)
Tamaño máximo: 5MB (si se pasa, mostrar alerta de error)
Al seleccionar una imagen, mostrarla como preview en un contenedor de 300px de alto con borde naranja
Debajo del preview, dos botones: "✅ Evaluar" y "❌ Cancelar"

EVALUACIÓN CON IA
Flujo cuando presiona "Evaluar":
El botón se deshabilita y muestra "🔄 Evaluando..."
La imagen se convierte a base64
Se envía a un endpoint API (/api/demo/evaluate) que usa OpenAI GPT-4o con visión
La IA evalúa la imagen según la categoría elegida
Devuelve un puntaje de 0 a 100 y un feedback de 1-2 oraciones en español

Prompt para la IA
Decirle a la IA que es un profesor amigable en un juego educativo. Que SIEMPRE evalúe la imagen sin importar qué contenga. El formato de respuesta debe ser:

Score: [0-100]/100. [1-2 oraciones de feedback constructivo en español]

Cada categoría tiene sus propios criterios de evaluación (organización para código, estética para diseño, etc.)

Si la IA falla o no responde
No romper el sistema. Asignar un puntaje por defecto entre 40-60 y mostrar: "⚠️ Sistema de evaluación temporalmente no disponible. Score por defecto asignado."

PANTALLA DE RESULTADOS
Después de evaluar, mostrar una tarjeta de resultados con estas secciones:

1. Puntaje (con emoji según resultado)
🏆 si score >= 80 (fondo naranja suave)
⭐ si score >= 60 (fondo amarillo suave)
👍 si score >= 40 (fondo amarillo suave)
💪 si score < 40 (fondo rojo suave)
Mostrar el número grande: "85/100"

2. Feedback de la IA
El texto que devolvió la IA en un contenedor oscuro

3. Recompensas ganadas
Puntos: iguales al score (85 score = 85 puntos)
Tokens: score × 0.5 (85 score = 42 tokens $FRUTA)
Mostrar como: "⭐ +85 Puntos" y "🍎 +42 Tokens"

4. Efectos en los stats del Regenmon
El entrenamiento afecta los stats según qué tan bien le fue:

Score >= 80 (Excelente):
  Felicidad: +15 (orgulloso)
  Energía: -20 (cansado de entrenar)
  Hambre: +15 (le da hambre entrenar)

Score 60-79 (Bueno):
  Felicidad: +8
  Energía: -15
  Hambre: +12

Score 40-59 (Regular):
  Felicidad: +3
  Energía: -12
  Hambre: +10

Score < 40 (Bajo):
  Felicidad: -10 (frustrado)
  Energía: -15
  Hambre: +10

Mostrar cada efecto con color verde si es positivo, rojo si es negativo.

5. Progreso de evolución
Mostrar: "Total: 245 pts | Stage 1/3 | Próxima evolución: 500 pts"

6. Botón para entrenar de nuevo
"🎓 Entrenar Nuevamente" que resetea el formulario para subir otra imagen

SISTEMA DE EVOLUCIÓN
El Regenmon evoluciona como un Pokémon al acumular puntos:

Stage 1: 🥚 Bebé (estado inicial)
    ↓ al llegar a 500 puntos
Stage 2: 🐣 Joven (primera evolución)
    ↓ al llegar a 1500 puntos
Stage 3: 🐉 Adulto (evolución final)

Cuando evoluciona:
Mostrar alerta: "🎉 ¡{nombre} evolucionó a etapa {stage}! +100 tokens bonus"
Regalar 100 tokens $FRUTA de bonus
Actualizar la apariencia/etapa del Regenmon

HISTORIAL DE ENTRENAMIENTOS
Guardar cada entrenamiento con:
Score obtenido
Categoría usada
Fecha/hora
Almacenar en localStorage como parte de los datos del Regenmon. Máximo las últimas 20 entradas.

INTEGRACIÓN
El entrenamiento se accede desde un tab/pestaña "🎓 Entrenar" en la pantalla principal del Regenmon
Los puntos totales y el stage se muestran en el display principal del Regenmon
Las monedas ganadas se suman al balance de $FRUTA existente
Los efectos en stats se aplican inmediatamente

API DE OPENAI
Necesito un endpoint /api/demo/evaluate que:
Reciba: imageBase64 (string) y category (string)
Use el modelo gpt-4o de OpenAI con capacidad de visión
Envíe un system message explicando que es un juego educativo
Envíe la imagen como contenido tipo image_url con la base64
Parsee el score del texto de respuesta
Calcule: puntos = score, tokens = score × 0.5
Si falla: devuelva score por defecto (40-60) sin romper
Variable de entorno necesaria: OPENAI_API_KEY

DATOS QUE SE GUARDAN
totalPoints: número (puntos acumulados de todos los entrenamientos)
stage: 1, 2 o 3 (etapa de evolución)
balance: número (monedas $FRUTA, se suman las ganadas)
trainingHistory: lista de { score, category, timestamp }
stats: se actualizan con los efectos del entrenamiento
Todo en localStorage, persiste al recargar.`;

const Session4Prompt = () => {
  const [copied, setCopied] = useState(false);
  const [searchParams] = useSearchParams();

  // Fecha de desbloqueo: 16 de febrero 2026 a las 7pm hora México (CST/CDT)
  const unlockDate = new Date('2026-02-16T19:00:00-06:00');
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
          <LockedContent unlockDate={unlockDate} sessionNumber={4} />
        ) : (
          <div>
            <h1 className="gradient-text text-4xl font-bold mb-4">
              📝 Prompt - Sesión 4: Evolución
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Copia este prompt y pégalo en v0 para agregar el sistema de entrenamiento y evolución a tu Regenmon. Tienes toda la libertad de poder modificarlo, esta es una guía que te ayudará en tu Sesión 4.
            </p>

            <div className="glass-card p-6 mb-8 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-sm text-muted-foreground">Prompt para Sesión 4: Evolución</span>
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
            to="/doc/session-4/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Entregable</div>
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

export default Session4Prompt;
