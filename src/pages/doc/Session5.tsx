import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session5 = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🌍 Sesión 5 — Tu Regenmon Encuentra Amigos
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          Cuando tu creación deja de estar sola y se vuelve parte de una comunidad
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            Hasta ahora tu Regenmon ha nacido, hablado, tenido valor y evolucionado.
            En esta última sesión ocurre el paso final:
          </p>

          <p className="text-foreground font-semibold text-xl text-center my-6">
            Tu Regenmon se conecta con otros.
          </p>

          <p>
            Aquí aprenderás cómo una aplicación deja de ser individual y se convierte en una experiencia compartida, donde existen visitas, interacciones y señales sociales.
          </p>

          <p className="text-foreground font-semibold">
            Esta sesión cierra el bootcamp transformando tu proyecto en un producto social real.
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a aprender en esta sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          En esta sesión te enfocarás en visibilidad, comunidad e interacción, conceptos fundamentales en productos digitales modernos.
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Qué significa hacer algo público */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              1. Qué significa hacer algo público
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás que no todo en una app es privado.
            </p>
            <p className="text-muted-foreground mb-2">Verás cómo:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Decidir qué se puede compartir</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar información sin permitir cambios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Proteger lo que es personal</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Tu Regenmon podrá ser visitado por otras personas, pero <span className="text-foreground font-semibold">sin perder control</span>.
            </p>
          </div>

          {/* 2. Visitar y ser visitado */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              2. Visitar y ser visitado
            </h3>
            <p className="text-muted-foreground mb-4">
              Aquí descubrirás cómo funciona una vista pública.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás que:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Ver no es lo mismo que editar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Las apps tienen modos (propio / visitante)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>La experiencia cambia según quién entra</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto es clave para entender <span className="text-foreground font-semibold">productos con perfiles y páginas públicas</span>.
            </p>
          </div>

          {/* 3. Descubrir a otros */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              3. Descubrir a otros
            </h3>
            <p className="text-muted-foreground mb-4">
              En esta sesión aprenderás cómo una app permite explorar contenido de otras personas.
            </p>
            <p className="text-muted-foreground mb-2">Verás cómo:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar listados de usuarios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Ordenarlos de forma simple</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Entrar a conocer otros Regenmons</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto introduce el concepto de <span className="text-foreground font-semibold">feed</span>, sin complejidad innecesaria.
            </p>
          </div>

          {/* 4. Interactuar con significado */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              4. Interactuar con significado
            </h3>
            <p className="text-muted-foreground mb-4">
              No todas las interacciones son iguales.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás a diseñar interacciones que:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Tengan intención</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Generen respuesta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Afecten el sistema</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Saludar, regalar o interactuar con otros Regenmons no será solo visual, <span className="text-foreground font-semibold">tendrá impacto real</span>.
            </p>
          </div>

          {/* 5. Recibir señales y feedback social */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              5. Recibir señales y feedback social
            </h3>
            <p className="text-muted-foreground mb-4">
              En esta sesión también verás cómo una app avisa cuando algo sucede.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás a:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar notificaciones simples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Contar visitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Reflejar actividad social</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto ayuda al usuario a <span className="text-foreground font-semibold">sentirse acompañado y reconocido</span>.
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
            <span>Hacer público tu Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Generar una URL para compartirlo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear una vista de visita</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar un feed de Regenmons públicos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Permitir interacciones básicas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Actualizar contadores sociales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar notificaciones claras</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Guardar actividad social</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          Todo se construye de forma progresiva, usando lo que ya sabes.
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
            <span>Un Regenmon visible públicamente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Una URL compartible</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Interacciones sociales funcionales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Señales claras de actividad</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un sistema social básico pero real</span>
          </li>
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            Pero lo más importante:
          </p>
          <p className="text-foreground text-xl mt-2">
            Tu proyecto ya no vive solo en tu navegador.
            Forma parte de un ecosistema.
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Por qué esta sesión es importante
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            Esta sesión cierra el aprendizaje con una idea clave:
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            "Las mejores apps conectan personas, no solo funciones."
          </p>
          <p className="text-foreground text-lg mb-2">
            Aquí entiendes cómo:
          </p>
          <ul className="space-y-2 text-foreground ml-6 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Diseñar límites entre lo privado y lo público</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Crear experiencias compartidas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Pensar en comunidad desde el producto</span>
            </li>
          </ul>
          <p className="text-foreground text-lg">
            Y con esto completas el ciclo del bootcamp.
          </p>
        </div>

        {/* Final del bootcamp */}
        <div className="glass-card p-8 border-l-4 border-green-400 bg-green-500/5 mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            🎉 Has llegado al final
          </h2>
          <p className="text-foreground text-lg mb-4">
            Si llegaste hasta aquí, no solo terminaste un curso.
            Construiste algo real, desde cero, y lo compartiste con otros.
          </p>
          <p className="text-foreground text-xl font-semibold text-center">
            Eso es crear. Eso es construir con IA.
          </p>
          <p className="text-foreground text-lg text-center mt-4">
            Gracias por llegar hasta el final 🚀
          </p>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 4</div>
            </div>
          </Link>

          <Link
            to="/doc/session-5/support"
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

export default Session5;
