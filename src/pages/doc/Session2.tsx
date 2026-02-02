import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session2 = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          💬 Sesión 2 — Tu Regenmon Habla
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          De la existencia a la interacción
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            En la sesión anterior le diste vida a tu Regenmon.
            Ahora tiene nombre, tipo, sprite y estadísticas. Existe. Pero no hace nada todavía.
          </p>

          <p>
            En esta sesión le darás la capacidad más importante de todas: <span className="text-foreground font-semibold">hablar</span>.
          </p>

          <p>
            Aquí aprenderás cómo conectar un modelo de inteligencia artificial a tu app para que el Regenmon responda mensajes, reaccione a lo que le digas y comience a sentirse real.
          </p>

          <p className="font-semibold text-foreground">
            Al final de esta sesión, tendrás un Regenmon que interactúa contigo en tiempo real, respondiendo según su personalidad y recordando lo que le dices.
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a aprender en esta sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Esta sesión es donde lo digital se vuelve personal. Aprenderás a conectar IA conversacional a tu app y a estructurar una interacción que se sienta real y coherente.
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Qué es un modelo de IA */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              1. Qué es un modelo de IA conversacional (y cómo usarlo)
            </h3>
            <p className="text-muted-foreground mb-4">
              No necesitas ser ingeniero de IA para usar IA.
            </p>
            <p className="text-muted-foreground mb-4">
              Aquí entenderás qué es un modelo de lenguaje (como ChatGPT o Claude) y cómo conectarlo a tu app enviando solicitudes y recibiendo respuestas.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">Aprenderás a:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Conectar tu app a un modelo de IA externo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Enviar el mensaje del usuario y recibir la respuesta del modelo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar la respuesta en la interfaz de forma clara</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Esto te introduce al concepto de <span className="text-foreground font-semibold">API y servicios externos</span>, algo que está en absolutamente todas las aplicaciones actuales.
            </p>
          </div>

          {/* 2. Cómo darle personalidad */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              2. Cómo darle personalidad a tu Regenmon (prompt design básico)
            </h3>
            <p className="text-muted-foreground mb-4">
              No basta con conectar la IA. Debes decirle <span className="text-foreground font-semibold">cómo comportarse</span>.
            </p>
            <p className="text-muted-foreground mb-4">
              Aquí descubrirás el concepto de <span className="text-foreground font-semibold">system prompt</span>: las instrucciones internas que le das al modelo para que responda de cierta forma.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">Diseñarás:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Cómo habla el Regenmon (tono, estilo, personalidad)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Cómo reacciona según su tipo (Agua, Tierra, Fuego)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Qué sabe sobre sí mismo (nombre, estadísticas, historia)</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esta es tu primera experiencia con <span className="text-foreground font-semibold">prompt engineering</span>, uno de los skills más importantes en el desarrollo con IA.
            </p>
          </div>

          {/* 3. Cómo mostrar una conversación */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              3. Cómo mostrar una conversación (interfaz de chat)
            </h3>
            <p className="text-muted-foreground mb-4">
              Crear la burbuja de texto no es el reto. El reto es estructurar el flujo de mensajes de forma clara.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">Implementarás:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Un input donde el usuario escribe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Una lista de mensajes (usuario + Regenmon)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Estados de carga mientras el modelo responde</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Scroll automático al último mensaje</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto es tu introducción al diseño de <span className="text-foreground font-semibold">experiencia de usuario (UX)</span> en aplicaciones interactivas.
            </p>
          </div>

          {/* 4. Memoria del chat */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              4. Memoria del chat (que el Regenmon recuerde lo que le dijiste)
            </h3>
            <p className="text-muted-foreground mb-4">
              Si cada vez que le hablas olvida todo lo anterior, no hay conversación real.
            </p>
            <p className="text-muted-foreground mb-4">
              Aquí aprenderás a mantener el historial del chat y enviarlo al modelo, para que las respuestas tengan contexto.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">Implementarás:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Almacenar mensajes previos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Enviar contexto de la conversación al modelo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Guardar el historial para que no se pierda al recargar</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Esto te introduce a los conceptos de <span className="text-foreground font-semibold">gestión de estado</span> y <span className="text-foreground font-semibold">contexto conversacional</span>.
            </p>
          </div>
        </div>

        {/* ¿Qué vas a hacer? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a hacer durante la sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          Paso a paso, implementarás:
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-12">
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Conectar tu app a un modelo de lenguaje (Claude, OpenAI, Gemini, etc.)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear un system prompt que le dé personalidad al Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Diseñar una interfaz de chat con input, burbujas de mensaje y scroll</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar estados de carga mientras el modelo responde</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Guardar el historial del chat para mantener contexto</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Hacer que el Regenmon responda según su tipo y estadísticas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Verificar que todo funciona localmente y en producción</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          Todo esto lo harás con la misma metodología: pedirle ayuda a la IA, iterar, probar y ajustar.
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
            <span>Un chat funcional donde puedes escribirle a tu Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Respuestas generadas por IA con personalidad coherente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Historial de conversación que no se pierde al recargar</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Una experiencia de conversación clara y fluida</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>La sensación de que tu Regenmon es real</span>
          </li>
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            Pero más importante aún:
          </p>
          <p className="text-foreground text-xl mt-2">
            La comprensión de que integrar IA a una app no es magia,
            es solo enviar y recibir mensajes de forma estructurada.
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Por qué esta sesión es importante
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            Esta sesión te muestra algo fundamental:
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            "La IA no es mágica, es una herramienta que puedes controlar"
          </p>
          <p className="text-foreground text-lg">
            Después de hoy, sabrás cómo hacer que cualquier app hable, responda y se comporte inteligentemente. Y eso cambia completamente el tipo de productos que puedes construir.
          </p>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-1"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 1</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2/support"
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

export default Session2;
