import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GlossaryModal, GlossaryButton } from './GlossaryModal';

export const DocSidebar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [expandedSessions, setExpandedSessions] = useState<string[]>([]);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const toggleSession = (sessionId: string) => {
    setExpandedSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  // Auto-expandir cuando navegas a una sesión
  useEffect(() => {
    const sessions = [
      { id: 'session1', href: '/doc/session-1' },
      { id: 'session2', href: '/doc/session-2' },
      { id: 'session3', href: '/doc/session-3' },
      { id: 'session4', href: '/doc/session-4' },
      { id: 'session5', href: '/doc/session-5' },
    ];

    const currentSession = sessions.find(s => location.pathname.startsWith(s.href));
    if (currentSession && !expandedSessions.includes(currentSession.id)) {
      setExpandedSessions(prev => [...prev, currentSession.id]);
    }
  }, [location.pathname]);

  const sessions = [
    {
      id: 'session1',
      title: t('doc.sidebarItems.session1'),
      href: '/doc/session-1',
      subItems: [
        { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-1/support' },
        { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-1/deliverable' },
        { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-1/prompt' },
        { title: '🚨 Errores Comunes', href: '/doc/session-1/troubleshooting' },
      ]
    },
    {
      id: 'session2',
      title: t('doc.sidebarItems.session2'),
      href: '/doc/session-2',
      subItems: [
        { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-2/support' },
        { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-2/deliverable' },
        { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-2/prompt' },
        { title: '🚨 Errores Comunes', href: '/doc/session-2/troubleshooting' },
      ]
    },
    {
      id: 'session3',
      title: t('doc.sidebarItems.session3'),
      href: '/doc/session-3',
      subItems: [
        { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-3/support' },
        { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-3/deliverable' },
        { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-3/prompt' },
        { title: '🚨 Errores Comunes', href: '/doc/session-3/troubleshooting' },
      ]
    },
    {
      id: 'session4',
      title: t('doc.sidebarItems.session4'),
      href: '/doc/session-4',
      subItems: [
        { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-4/support' },
        { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-4/deliverable' },
        { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-4/prompt' },
        { title: '🚨 Errores Comunes', href: '/doc/session-4/troubleshooting' },
      ]
    },
    {
      id: 'session5',
      title: t('doc.sidebarItems.session5'),
      href: '/doc/session-5',
      subItems: [
        { title: t('doc.quickStartPage.subsections.supportMaterial'), href: '/doc/session-5/support' },
        { title: t('doc.quickStartPage.subsections.deliverable'), href: '/doc/session-5/deliverable' },
        { title: t('doc.quickStartPage.subsections.prompt'), href: '/doc/session-5/prompt' },
        { title: '🚨 Errores Comunes', href: '/doc/session-5/troubleshooting' },
      ]
    },
  ];

  const sections = [
    {
      title: t('doc.sidebar.gettingStarted'),
      items: [
        { title: t('doc.sidebarItems.introduction'), href: '/doc' },
        { title: t('doc.sidebarItems.quickStart'), href: '/doc/quick-start' },
        { title: t('doc.sidebarItems.resources'), href: '/doc/resources' },
      ]
    },
    {
      title: t('doc.sidebar.coreConcepts'),
      items: [
        { title: t('doc.sidebarItems.layers'), href: '/doc/layers' },
        { title: t('doc.sidebarItems.ai'), href: '/doc/ai' },
      ]
    },
  ];

  return (
    <>
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />

      <nav className="space-y-6">
        {/* Glosario Rápido Button */}
        <div className="mb-4">
          <GlossaryButton onClick={() => setIsGlossaryOpen(true)} />
        </div>

        {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-lg transition-colors group
                      ${isActive
                        ? 'bg-doc-primary/10 text-doc-primary border-l-2 border-doc-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }
                    `}
                  >
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${
                        isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Sesiones con sub-items expandibles */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          {t('doc.sidebar.sessions')}
        </h3>
        <ul className="space-y-1">
          {sessions.map((session) => {
            const isExpanded = expandedSessions.includes(session.id);
            const isSessionActive = location.pathname.startsWith(session.href);

            return (
              <li key={session.id}>
                <div className="rounded-lg overflow-hidden">
                  <Link
                    to={session.href}
                    onClick={() => {
                      // Siempre despliega si no está expandido
                      if (!isExpanded) {
                        toggleSession(session.id);
                      } else if (isSessionActive) {
                        // Si ya estás en la sesión y está expandido, cierra
                        toggleSession(session.id);
                      }
                    }}
                    className={`
                      flex items-center justify-between gap-2 px-3 py-2 transition-colors w-full
                      ${isSessionActive
                        ? 'bg-doc-primary/10 text-doc-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }
                    `}
                  >
                    <span className="text-sm">{session.title}</span>
                    {isExpanded ? (
                      <ChevronDown size={14} className="text-orange-400" />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </Link>
                </div>

                {/* Sub-items expandibles */}
                {isExpanded && (
                  <ul className="ml-6 mt-1 space-y-1 border-l-2 border-border/50 pl-3">
                    {session.subItems.map((subItem) => {
                      const isSubActive = location.pathname === subItem.href;
                      return (
                        <li key={subItem.href}>
                          <Link
                            to={subItem.href}
                            className={`
                              block px-3 py-1.5 rounded-lg transition-colors text-sm
                              ${isSubActive
                                ? 'bg-orange-500/10 text-orange-400 font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                              }
                            `}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      </nav>
    </>
  );
};
