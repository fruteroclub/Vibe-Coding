import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session3 = () => {
  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🍊 Sesión 3 — Tu Regenmon Tiene Valor
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          Cuando tu creación empieza a tener identidad y consecuencias
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            Hasta ahora tu Regenmon existe y puede hablar contigo.
            En esta sesión sucede algo muy importante:
          </p>

          <p className="text-foreground font-semibold text-xl text-center my-6">
            Deja de ser solo una experiencia y se convierte en un sistema.
          </p>

          <p>
            Aquí aprenderás cómo una aplicación reconoce a su usuario, guarda identidad y maneja recursos.
            Este es el punto donde tu app empieza a comportarse como un producto real.
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          ¿Qué vas a aprender en esta sesión?
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          En esta sesión te enfocarás en identidad, economía y consecuencias, conceptos que están presentes en casi todas las aplicaciones modernas.
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Por qué una app necesita reconocer al usuario */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              1. Por qué una app necesita reconocer al usuario
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás qué significa iniciar sesión y por qué es importante.
            </p>
            <p className="text-muted-foreground mb-4">
              No desde un punto de vista técnico, sino práctico:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Para saber quién eres</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Para guardar tu progreso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Para que tu Regenmon sea realmente tuyo</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Entenderás que iniciar sesión no es solo "entrar", sino <span className="text-foreground font-semibold">mantener una identidad a lo largo del tiempo</span>.
            </p>
          </div>

          {/* 2. Qué es un sistema de recursos */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              2. Qué es un sistema de recursos
            </h3>
            <p className="text-muted-foreground mb-4">
              Aquí conocerás el concepto de <span className="text-foreground font-semibold">economía dentro de una app</span>.
            </p>
            <p className="text-muted-foreground mb-2">Aprenderás que:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Las monedas no son solo números</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Representan valor, límites y decisiones</span>
              </li>
            </ul>
            <p className="text-muted-foreground mb-2">Tu Regenmon tendrá monedas ($FRUTA) que:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Se ganan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Se gastan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>No son infinitas</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Esto introduce la idea de <span className="text-foreground font-semibold">escasez</span>, clave en el diseño de sistemas.
            </p>
          </div>

          {/* 3. Acciones con costo y consecuencias */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              3. Acciones con costo y consecuencias
            </h3>
            <p className="text-muted-foreground mb-4">
              En esta sesión descubrirás que:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>No todas las acciones son gratis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Tomar decisiones implica consecuencias</span>
              </li>
            </ul>
            <p className="text-muted-foreground mb-2">Al alimentar a tu Regenmon:</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Gastas monedas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mejoras su estado</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Aquí entenderás cómo conectar:
            </p>
            <p className="text-foreground font-semibold ml-6 mt-2">
              una acción del usuario → un cambio visible en la app
            </p>
          </div>

          {/* 4. Feedback: saber qué está pasando */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              4. Feedback: saber qué está pasando
            </h3>
            <p className="text-muted-foreground mb-4">
              Aprenderás que una buena app siempre comunica lo que sucede.
            </p>
            <p className="text-muted-foreground mb-2">Verás cómo:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Mostrar cuando algo está procesándose</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Avisar cuando algo salió bien</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>Avisar cuando algo salió mal</span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Esto hace que el usuario <span className="text-foreground font-semibold">confíe en el sistema</span>.
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
            <span>Agregar un sistema de inicio de sesión a tu app</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar información del usuario</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Crear un contador de monedas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Permitir ganar monedas por primera vez</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Gastar monedas al alimentar al Regenmon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Cambiar stats según las acciones</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Mostrar mensajes y notificaciones claras</span>
          </li>
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          Todo esto te ayudará a entender cómo se construyen apps con reglas reales, no solo pantallas bonitas.
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
            <span>Un usuario identificado</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un Regenmon ligado a ese usuario</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Un sistema de monedas funcional</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Acciones que cuestan recursos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400">•</span>
            <span>Cambios visibles y persistentes</span>
          </li>
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            Pero lo más importante:
          </p>
          <p className="text-foreground text-xl mt-2">
            Entenderás que una app es un conjunto de decisiones, no solo de vistas.
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          Por qué esta sesión es importante
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            Esta sesión es el corazón del sistema.
          </p>
          <p className="text-foreground text-lg mb-4">
            Aquí pasas de:
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-2">
            "Mi app funciona"
          </p>
          <p className="text-foreground text-lg text-center mb-4">
            a
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            "Mi app tiene reglas claras"
          </p>
          <p className="text-foreground text-lg">
            Y empiezas a pensar como quien diseña productos reales, no solo como quien escribe código.
          </p>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 2</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/support"
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

export default Session3;
