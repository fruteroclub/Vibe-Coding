import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock, CheckCircle2, Egg, Brain, User, TrendingUp, Users, Terminal } from 'lucide-react';

const QuickStart = () => {
  const { t } = useTranslation();

  const sessions = [
    {
      number: 1,
      title: t('doc.quickStartPage.sessions.session1.title'),
      duration: t('doc.quickStartPage.sessions.session1.duration'),
      description: t('doc.quickStartPage.sessions.session1.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session1.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session1Prompt'),
      icon: <Egg size={32} />,
      color: 'orange',
    },
    {
      number: 2,
      title: t('doc.quickStartPage.sessions.session2.title'),
      duration: t('doc.quickStartPage.sessions.session2.duration'),
      description: t('doc.quickStartPage.sessions.session2.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session2.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session2Prompt'),
      icon: <Brain size={32} />,
      color: 'purple',
    },
    {
      number: 3,
      title: t('doc.quickStartPage.sessions.session3.title'),
      duration: t('doc.quickStartPage.sessions.session3.duration'),
      description: t('doc.quickStartPage.sessions.session3.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session3.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session3Prompt'),
      icon: <User size={32} />,
      color: 'blue',
    },
    {
      number: 4,
      title: t('doc.quickStartPage.sessions.session4.title'),
      duration: t('doc.quickStartPage.sessions.session4.duration'),
      description: t('doc.quickStartPage.sessions.session4.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session4.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session4Prompt'),
      icon: <TrendingUp size={32} />,
      color: 'green',
    },
    {
      number: 5,
      title: t('doc.quickStartPage.sessions.session5.title'),
      duration: t('doc.quickStartPage.sessions.session5.duration'),
      description: t('doc.quickStartPage.sessions.session5.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session5.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session5Prompt'),
      icon: <Users size={32} />,
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string }> = {
      orange: { border: 'border-orange-500', bg: 'bg-orange-500/10', text: 'text-orange-400' },
      purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' },
      blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-400' },
      green: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400' },
      pink: { border: 'border-pink-500', bg: 'bg-pink-500/10', text: 'text-pink-400' },
    };
    return colors[color];
  };

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.quickStartPage.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-12">
          {t('doc.quickStartPage.subtitle')}
        </p>

        {/* Descripción del Proyecto */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            {t('doc.quickStartPage.projectOverview.title').replace('🎯 ', '')}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            {t('doc.quickStartPage.projectOverview.description')}
          </p>
          <div className="space-y-2 ml-4">
            {(t('doc.quickStartPage.projectOverview.features', { returnObjects: true }) as string[]).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primeros Pasos */}
        <h2 className="text-3xl font-bold mb-8 mt-16">
          Primeros Pasos
        </h2>

        <div className="mb-8 p-6 border-l-4 border-orange-400 bg-orange-500/5 rounded-r-lg">
          <p className="text-muted-foreground text-base leading-relaxed">
            <span className="text-orange-400 font-semibold">Importante:</span> Estos pasos de configuración son necesarios ANTES de usar los prompts de cada sesión. Asegúrate de completar esta configuración inicial para poder seguir el bootcamp sin problemas.
          </p>
        </div>

        <div className="space-y-8 mb-20 ml-4">
          {/* Paso 1 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step1.title')}
            </h3>
            <p className="text-muted-foreground mb-3">
              {t('doc.quickStartPage.setup.step1.description')}
            </p>
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              <span>{t('doc.quickStartPage.setup.step1.action')}</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Paso 2 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step2.title')}
            </h3>
            <p className="text-muted-foreground mb-2">
              Inicia sesión con GitHub o con tu cuenta de Google.
            </p>
            <p className="text-sm text-muted-foreground/70 italic">
              {t('doc.quickStartPage.setup.step2.note')}
            </p>
          </div>

          {/* Paso 3 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step3.title')}
            </h3>
            <p className="text-muted-foreground mb-3">
              Ve al área de "What do you want to create?" y sigue las instrucciones para configurar tu proyecto.
            </p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              <span>{t('doc.quickStartPage.setup.step3.action')}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Sesiones */}
        <h2 className="text-3xl font-bold mb-4 mt-20">
          {t('doc.quickStartPage.sessions.title')}
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          {t('doc.quickStartPage.sessions.description')}
        </p>

        {sessions.map((session) => {
          const colorClasses = getColorClasses(session.color);
          return (
            <div key={session.number} className={`glass-card p-8 border-l-4 ${colorClasses.border} mb-12`}>
              {/* Header con icono */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`${colorClasses.text}`}>
                  {session.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold ${colorClasses.text}`}>
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground/60 text-sm">
                      <Clock size={14} />
                      <span>{session.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </div>

              {/* Lo que construirás */}
              <div className={`${colorClasses.bg} p-5 rounded-lg border ${colorClasses.border} mb-6`}>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className={colorClasses.text} />
                  Lo que construirás:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {session.whatYouBuild.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className={`${colorClasses.text} text-sm mt-0.5`}>→</span>
                      <span className="text-sm text-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entregable */}
              <div className={`${colorClasses.bg} p-5 rounded-lg border ${colorClasses.border} mb-6`}>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  {t(`doc.quickStartPage.sessions.session${session.number}.deliverable`)}
                </p>
              </div>

              {/* Prompt */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Terminal size={18} className={colorClasses.text} />
                  {t('doc.quickStartPage.subsections.prompt')}
                </h4>
                <PromptBlock
                  prompt={session.prompt}
                  title={`Prompt para ${session.title}`}
                />
              </div>
            </div>
          );
        })}

        {/* Navegación */}
        <div className="mt-20 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
              <div className="font-semibold">Introducción</div>
            </div>
          </Link>

          <Link
            to="/doc/resources"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.resources')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default QuickStart;
