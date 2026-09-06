import { useState, useEffect } from 'react';
import { Lock, Clock } from 'lucide-react';

interface LockedContentProps {
  unlockDate: Date;
  sessionNumber: number;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isUnlocked: boolean;
}

export const LockedContent = ({ unlockDate, sessionNumber }: LockedContentProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isUnlocked: false
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = unlockDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isUnlocked: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        isUnlocked: false
      });
    };

    // Calculate immediately
    calculateTimeRemaining();

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [unlockDate]);

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  if (timeRemaining.isUnlocked) {
    return null; // Content should be shown
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>
        <Lock size={80} className="text-orange-400 relative animate-pulse" />
      </div>

      <h1 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
        Contenido Bloqueado
      </h1>

      <p className="text-muted-foreground text-lg mb-2 max-w-2xl">
        Los prompts de la Sesión {sessionNumber} se desbloquearán el:
      </p>

      <p className="text-orange-400 text-xl font-semibold mb-8">
        {formatDate(unlockDate)}
      </p>

      {/* Countdown Timer */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock size={20} className="text-orange-400" />
          <p className="text-foreground font-semibold">Tiempo restante:</p>
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {/* Days */}
          <div className="glass-card p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-1">
              {String(timeRemaining.days).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              Días
            </div>
          </div>

          {/* Hours */}
          <div className="glass-card p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-1">
              {String(timeRemaining.hours).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              Horas
            </div>
          </div>

          {/* Minutes */}
          <div className="glass-card p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-1">
              {String(timeRemaining.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              Mins
            </div>
          </div>

          {/* Seconds */}
          <div className="glass-card p-4 md:p-6 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-1">
              {String(timeRemaining.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              Segs
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm max-w-xl">
        Mientras tanto, puedes explorar el material de apoyo y el entregable de esta sesión.
      </p>
    </div>
  );
};
