import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session1 = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🥚 Sesión 1 — Nace tu Regenmon
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          Bienvenida a tu primera creación
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            En esta primera sesión vas a dar el paso más importante de todo el bootcamp:
            crear tu primer producto digital real, aunque nunca hayas programado antes.
          </p>

          <p>
            Aquí no se trata de memorizar código ni de entender conceptos complejos.
            Se trata de aprender a construir con ayuda de la inteligencia artificial, paso a paso, viendo resultados inmediatos.
          </p>

          <p className="font-semibold text-foreground">
            Al final de esta sesión, tu Regenmon existirá, estará vivo en una app y podrás acceder a él desde cualquier dispositivo.
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a aprender en esta sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Durante esta sesión aprenderás las bases que usan todas las aplicaciones modernas, pero explicadas de forma simple y práctica.
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Programar con IA */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              1. Programar con ayuda de la IA
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás qué significa desarrollar con IA:
              no escribir código desde cero, sino explicar lo que quieres construir y mejorar el resultado poco a poco.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">Verás cómo:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Dar instrucciones claras a la IA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Revisar lo que genera</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Ajustar hasta que se vea y funcione como esperas</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Este proceso de <span className="text-foreground font-semibold">pedir → revisar → mejorar</span> será una habilidad clave durante todo el bootcamp.
            </p>
          </div>

          {/* 2. Qué es un componente */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              2. Qué es un componente y por qué importa
            </h3>
            <p className="text-muted-foreground mb-4">
              Conocerás la idea de <span className="text-foreground font-semibold">componentes</span>, que son las piezas que forman una app.
            </p>
            <p className="text-muted-foreground mb-4">
              No necesitas teoría compleja:
              solo entenderás que una app se construye por partes (como bloques) y que cada parte tiene una función clara.
            </p>
            <p className="text-muted-foreground">
              Tu Regenmon será uno de esos componentes.
            </p>
          </div>

          {/* 3. Guardar información */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              3. Guardar información (para que no se pierda)
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás cómo una app recuerda cosas, incluso cuando cierras el navegador o recargas la página.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">En esta sesión:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>El nombre de tu Regenmon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Su tipo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Sus estadísticas</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              quedarán guardadas para que no desaparezcan.
            </p>
            <p className="text-muted-foreground mt-4">
              Esto te introduce al concepto de <span className="text-foreground font-semibold">estado y persistencia</span>, algo fundamental en cualquier aplicación real.
            </p>
          </div>

          {/* 4. Publicar tu app */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              4. Publicar tu app en internet
            </h3>
            <p className="text-muted-foreground mb-4">
              No solo vas a crear algo que funcione en tu computadora.
            </p>
            <p className="text-muted-foreground font-semibold mb-2">En esta sesión aprenderás a:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Conectar tu proyecto a una plataforma de despliegue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Publicar tu app automáticamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Obtener una URL pública</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto significa que tu Regenmon no es un ejercicio, es un producto accesible en internet.
            </p>
          </div>
        </div>

        {/* ¿Qué vas a hacer? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a hacer durante la sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          A lo largo de la sesión, paso a paso, vas a:
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-12">
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear el proyecto inicial de tu app con ayuda de IA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Diseñar la pantalla principal donde vive tu Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear un flujo donde: el usuario le da nombre, elige su tipo, da vida al Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar visualmente: el nombre, el sprite, sus estadísticas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Guardar esa información para que no se pierda</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Publicar la app y verificar que funciona en móvil y computadora</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          Todo esto lo harás viendo resultados en tiempo real, sin necesidad de conocimientos previos.
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
            <span>Una app desplegada con una URL pública</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un Regenmon creado por ti</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Información que se mantiene al recargar la página</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Una base sólida para las siguientes sesiones</span>
          </li>
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            Pero más importante aún:
          </p>
          <p className="text-foreground text-xl mt-2">
            La confianza de que sí puedes crear software,
            incluso si nunca lo habías hecho antes.
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Por qué esta sesión es importante
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            Esta sesión rompe la barrera más grande de todas:
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            "Esto no es para mí"
          </p>
          <p className="text-foreground text-lg">
            Después de hoy, esa idea deja de existir.
            A partir de aquí, todo lo que hagamos será mejorar, expandir y conectar lo que ya creaste.
          </p>
        </div>

        {/* Puente hacia Sesión 2 */}
        <div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            🔌 Preparando el siguiente paso
          </h2>
          <p className="text-foreground text-lg mb-4">
            Hasta ahora tu Regenmon es <strong>visual</strong> (tiene cara, stats, botones).
            En la siguiente sesión le darás un <strong>cerebro</strong> (IA conversacional).
          </p>

          <div className="glass-card p-6 mb-4">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              ¿Qué necesitas antes de Sesión 2?
            </h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">1.</span>
                <span>Una <strong>API Key de Claude</strong> (como una contraseña para usar IA)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">2.</span>
                <span>Entender que la IA no está en tu app, está en internet (por eso necesitas la "llave")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">3.</span>
                <span>Saber que cada vez que tu Regenmon "habla", le pide ayuda a Claude</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4">
            <p className="text-foreground text-sm">
              <strong>💡 Analogía:</strong> Imagina que tu Regenmon es un muñeco de ventrílocuo.
              En Sesión 1 construiste el muñeco. En Sesión 2 le darás la voz (Claude es el ventrílocuo).
            </p>
          </div>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Introducción</div>
            </div>
          </Link>

          <Link
            to="/doc/session-1/support"
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

export default Session1;
