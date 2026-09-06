import { CheckCircle2, Circle, Egg, Brain, User, TrendingUp, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineSession {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  deliverable: string;
}

export const ProgressTimeline = () => {
  const sessions: TimelineSession[] = [
    {
      id: 1,
      title: 'Sesión 1',
      description: 'Tu Regenmon Nace',
      icon: <Egg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />,
      href: '/doc/session-1',
      deliverable: 'App visual con Regenmon básico'
    },
    {
      id: 2,
      title: 'Sesión 2',
      description: 'Le Das un Cerebro (IA)',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      href: '/doc/session-2',
      deliverable: 'Chat conversacional con IA'
    },
    {
      id: 3,
      title: 'Sesión 3',
      description: 'Tu Regenmon Tiene Valor',
      icon: <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      href: '/doc/session-3',
      deliverable: 'Login y guardado de progreso'
    },
    {
      id: 4,
      title: 'Sesión 4',
      description: 'Progreso y Evolución',
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      href: '/doc/session-4',
      deliverable: 'Sistema de entrenamiento con IA multimodal'
    },
    {
      id: 5,
      title: 'Sesión 5',
      description: 'Comunidad y Social',
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />,
      href: '/doc/session-5',
      deliverable: 'Perfiles públicos + Feed social'
    }
  ];

  return (
    <div className="mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
        <span className="leading-tight">Tu Progresión en 2 Semanas</span>
      </h2>

      <div className="relative">
        {/* Timeline line - línea completa naranja */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-orange-400" />

        {/* Sessions */}
        <div className="space-y-6 sm:space-y-8">
          {sessions.map((session, index) => (
            <Link
              key={session.id}
              to={session.href}
              className="group block"
            >
              <div className="relative flex items-start gap-4 sm:gap-6">
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 z-10 relative">
                    {session.icon}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-4 sm:p-6 border border-border/50 group-hover:border-orange-400/50 transition-all duration-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-orange-400 transition-colors">
                        {session.title}
                      </h3>
                      <p className="text-base sm:text-lg text-orange-400 font-medium mt-1">
                        {session.description}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-muted-foreground bg-orange-400/10 px-2 sm:px-3 py-1 rounded-full border border-orange-400/30 flex-shrink-0">
                      Día {index === 0 ? '1-2' : index === 1 ? '3-5' : index === 2 ? '6-8' : index === 3 ? '9-11' : '12-14'}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Entregable:</strong> {session.deliverable}
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 transition-all duration-300"
                        style={{ width: `${((index + 1) / sessions.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-muted-foreground">
                      {Math.round(((index + 1) / sessions.length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Completion celebration */}
        <div className="mt-8 sm:mt-12 text-center glass-card p-6 sm:p-8 border-2 border-green-400/30 bg-gradient-to-br from-green-400/10 to-background">
          <div className="text-4xl sm:text-5xl mb-3">🎉</div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            ¡Bootcamp Completado!
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Al terminar las 5 sesiones tendrás un <strong className="text-foreground">Regenmon completo</strong>:
            visual, conversacional, persistente, evolutivo y social. Una app real lista para tu portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};
