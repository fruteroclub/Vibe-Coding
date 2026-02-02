import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session4 = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🌱 Sesión 4 — Tu Regenmon Evoluciona
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          Cuando tus acciones dejan huella y tu creación crece contigo
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            En esta sesión ocurre un cambio importante en la historia de tu Regenmon:
          </p>

          <p className="text-foreground font-semibold text-xl text-center my-6">
            Ya no solo reacciona a lo que haces, ahora crece gracias a ello.
          </p>

          <p>
            Aquí aprenderás cómo una aplicación puede evaluar acciones reales, dar retroalimentación y mostrar progreso a lo largo del tiempo.
            Es el punto donde tu app empieza a reflejar hábitos, constancia y evolución.
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a aprender en esta sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          En esta sesión te enfocarás en evaluación, progreso y evolución, tres conceptos clave en productos modernos que buscan motivar y acompañar al usuario.
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Cómo una app puede "ver" */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              1. Cómo una app puede "ver"
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás que la inteligencia artificial no solo entiende texto, también puede analizar imágenes.
            </p>
            <p className="text-muted-foreground mb-4">
              Sin entrar en detalles técnicos, entenderás que:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Una imagen se convierte en información</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>La IA la analiza</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>La app recibe un resultado usable</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto introduce el concepto de <span className="text-foreground font-semibold">IA multimodal</span>, de forma simple y práctica.
            </p>
          </div>

          {/* 2. Evaluar acciones, no solo clicks */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              2. Evaluar acciones, no solo clicks
            </h3>
            <p className="text-muted-foreground mb-4">
              En esta sesión verás cómo una app puede evaluar lo que haces en la vida real.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás a:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Enviar una imagen como evidencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Recibir una evaluación automática</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Obtener una puntuación y un mensaje claro</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto convierte a tu Regenmon en un <span className="text-foreground font-semibold">acompañante de hábitos</span>, no solo en un juego.
            </p>
          </div>

          {/* 3. Recompensar el esfuerzo */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              3. Recompensar el esfuerzo
            </h3>
            <p className="text-muted-foreground mb-4">
              Descubrirás cómo conectar evaluación con recompensa.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás que:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Un buen sistema reconoce el esfuerzo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Las recompensas deben ser proporcionales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>El feedback motiva a seguir</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Tu Regenmon recibirá monedas y reaccionará positivamente cuando entrenes.
            </p>
          </div>

          {/* 4. Progreso acumulado y evolución */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              4. Progreso acumulado y evolución
            </h3>
            <p className="text-muted-foreground mb-4">
              Aquí aparece uno de los conceptos más importantes de todo el bootcamp:
            </p>
            <p className="text-foreground font-semibold text-lg text-center mb-4">
              El progreso no se borra, se acumula.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás cómo:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Sumar puntos con cada entrenamiento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Guardarlos a largo plazo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Desbloquear nuevas etapas de evolución</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Tu Regenmon cambiará visualmente conforme avances, mostrando que el crecimiento es real.
            </p>
          </div>

          {/* 5. Mirar hacia atrás para avanzar */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              5. Mirar hacia atrás para avanzar
            </h3>
            <p className="text-muted-foreground mb-4">
              En esta sesión también aprenderás a guardar historial.
            </p>
            <p className="text-muted-foreground mb-2">Verás cómo una app puede:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Recordar entrenamientos pasados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar estadísticas simples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Ayudarte a reflexionar sobre tu progreso</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto refuerza la idea de <span className="text-foreground font-semibold">constancia y continuidad</span>.
            </p>
          </div>
        </div>

        {/* ¿Qué vas a hacer? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a hacer durante la sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          Durante esta sesión vas a:
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear una sección para entrenar a tu Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Subir imágenes desde tu dispositivo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Enviar esas imágenes a una IA para evaluación</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar puntuaciones y mensajes claros</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Otorgar recompensas según resultados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Acumular puntos de progreso</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Cambiar visualmente la etapa del Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Guardar historial de entrenamientos</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          Todo esto se construye paso a paso, entendiendo qué está pasando en cada momento.
        </p>

        {/* ¿Qué se espera que logres? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué se espera que logres al final?
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          Al terminar esta sesión deberás tener:
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un sistema de evaluación con IA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Progreso acumulado y persistente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un Regenmon que evoluciona visualmente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Recompensas conectadas a acciones reales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un historial que muestra crecimiento</span>
          </li>
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            Pero lo más importante:
          </p>
          <p className="text-foreground text-xl mt-2">
            Tu app ahora refleja hábitos y constancia, no solo interacción.
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Por qué esta sesión es importante
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            Esta sesión cambia la relación con tu producto.
          </p>
          <p className="text-foreground text-lg mb-4">
            Pasas de:
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-2">
            usar una app
          </p>
          <p className="text-foreground text-lg text-center mb-4">
            a
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            crecer junto a ella
          </p>
          <p className="text-foreground text-lg">
            Aprendes cómo se diseñan sistemas que motivan, acompañan y muestran progreso real, una habilidad muy valiosa en productos digitales modernos.
          </p>
        </div>

        {/* Puente hacia Sesión 5 */}
        <div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🌍 El paso final: Comunidad
          </h2>
          <p className="text-foreground text-lg mb-4">
            Tu Regenmon funciona perfectamente... pero está solo. En la última sesión
            transformarás tu proyecto en una <strong>experiencia social</strong>.
          </p>

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              En Sesión 5 crearás:
            </h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Perfiles públicos (otros pueden ver tu Regenmon)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Sistema de visitas e interacciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Feed comunitario (descubrir otros Regenmons)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400">•</span>
                <span>Notificaciones sociales</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mt-4">
            <p className="text-foreground text-sm">
              <strong>💡 Analogía:</strong> Hasta ahora construiste un producto personal increíble.
              En Sesión 5 abrirás las puertas para que otros entren, visiten, y compartan el espacio.
              Como convertir tu casa en un lugar al que tus amigos pueden ir.
            </p>
          </div>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session4;
