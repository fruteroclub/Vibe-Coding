import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

export const DocSidebar = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
    {
      title: t('doc.sidebar.sessions'),
      items: [
        { title: t('doc.sidebarItems.session1'), href: '/doc/session-1' },
        { title: t('doc.sidebarItems.session2'), href: '/doc/session-2' },
        { title: t('doc.sidebarItems.session3'), href: '/doc/session-3' },
        { title: t('doc.sidebarItems.session4'), href: '/doc/session-4' },
        { title: t('doc.sidebarItems.session5'), href: '/doc/session-5' },
      ]
    },
  ];

  return (
    <nav className="space-y-6">
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
    </nav>
  );
};
