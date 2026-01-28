import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const Resources = () => {
  const { t } = useTranslation();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Función para ofuscar la API key (mostrar solo los últimos 4 caracteres)
  const obfuscateKey = (key: string) => {
    if (!key || key.length < 8) return '••••••••••••';
    const visible = key.slice(-4);
    return `${'•'.repeat(Math.max(key.length - 4, 12))}${visible}`;
  };

  // Función para copiar con protección adicional
  const handleCopy = async (apiName: string, apiKey: string) => {
    try {
      // Copiar al portapapeles pero con texto ofuscado
      const obfuscated = obfuscateKey(apiKey);
      await navigator.clipboard.writeText(obfuscated);

      setCopiedKey(apiName);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const webPlatforms = [
    {
      id: 'vercel',
      name: 'Vercel',
      description: t('doc.resourcesPage.platforms.vercel.description'),
      logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      link: 'https://vercel.com',
    },
    {
      id: 'v0',
      name: 'v0.dev',
      description: t('doc.resourcesPage.platforms.v0.description'),
      logo: 'https://cdn.prod.website-files.com/6088303c28a7c75678aa21d8/6870f3c0274e4b19162e299a_z07hmQEH_400x400.png',
      link: 'https://v0.dev',
    },
    {
      id: 'privy',
      name: 'Privy',
      description: t('doc.resourcesPage.platforms.privy.description'),
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzj-eBN5t8yQJCe-dER41ijvEGAvKgu8_tIQ&s',
      link: 'https://privy.io',
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: t('doc.resourcesPage.platforms.chatgpt.description'),
      logo: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png',
      link: 'https://chat.openai.com',
    },
  ];

  const apiResources = [
    {
      id: 'frutero',
      name: 'Frutero API',
      description: t('doc.resourcesPage.apis.frutero.description'),
      logo: '/kukulcan-logo-color.svg',
      buttonText: t('doc.resourcesPage.apis.frutero.button'),
      apiKey: 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder - la real debe venir del backend
      link: 'https://github.com/settings/tokens',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-400',
    },
    {
      id: 'google',
      name: 'Google Cloud API',
      description: t('doc.resourcesPage.apis.google.description'),
      logo: 'https://www.gstatic.com/images/branding/product/1x/googleg_64dp.png',
      buttonText: t('doc.resourcesPage.apis.google.button'),
      apiKey: 'AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder
      link: 'https://console.cloud.google.com/apis/credentials',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400',
    },
    {
      id: 'gemini',
      name: 'Gemini API',
      description: t('doc.resourcesPage.apis.gemini.description'),
      logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
      buttonText: t('doc.resourcesPage.apis.gemini.button'),
      apiKey: 'AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder
      link: 'https://makersuite.google.com/app/apikey',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-400',
    },
    {
      id: 'privy-api',
      name: 'Privy API',
      description: t('doc.resourcesPage.apis.privy.description'),
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzj-eBN5t8yQJCe-dER41ijvEGAvKgu8_tIQ&s',
      buttonText: t('doc.resourcesPage.apis.privy.button'),
      apiKey: 'priv_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Placeholder
      link: 'https://dashboard.privy.io',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500',
      textColor: 'text-indigo-400',
    },
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.resourcesPage.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-4">
          {t('doc.resourcesPage.subtitle')}
        </p>

        <p className="text-muted-foreground leading-relaxed mb-8">
          {t('doc.resourcesPage.whatAreResources.description')}
        </p>

        {/* Web Platforms Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            🌐 {t('doc.resourcesPage.platforms.title')}
          </h2>

          <div className="space-y-6">
            {webPlatforms.map((platform) => (
              <div key={platform.id} className="flex items-start gap-4">
                {/* Logo circular que llena completamente */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>

                {/* Botón Visitar centrado verticalmente */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-doc-primary bg-doc-primary/10 text-doc-primary hover:bg-doc-primary/20 text-sm font-medium transition-colors self-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visitar
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* API Resources Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            🔑 {t('doc.resourcesPage.apiKeys.title')}
          </h2>

          <div className="mb-6 glass-card p-4 border-l-4 border-yellow-500 bg-yellow-500/5">
            <p className="text-sm text-foreground">
              <span className="font-bold text-yellow-400">⚠️ {t('doc.resourcesPage.apiKeys.warning.title')}: </span>
              {t('doc.resourcesPage.apiKeys.warning.description')}
            </p>
          </div>

          <div className="grid gap-4">
            {apiResources.map((api) => (
              <div
                key={api.id}
                className={`glass-card p-4 border-l-4 ${api.borderColor} ${api.bgColor}`}
              >
                <div className="flex items-start gap-4">
                  {/* Logo circular */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-border flex items-center justify-center overflow-hidden">
                      <img
                        src={api.logo}
                        alt={`${api.name} logo`}
                        className={api.id === 'privy-api' ? 'w-full h-full object-cover' : 'w-8 h-8 object-contain'}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`text-lg font-bold ${api.textColor} mb-1`}>
                          {api.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {api.description}
                        </p>
                      </div>

                      {/* Botón Copiar API en la esquina superior derecha */}
                      <button
                        type="button"
                        onClick={() => handleCopy(api.id, api.apiKey)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                          copiedKey === api.id
                            ? 'border-green-500 bg-green-500/10 text-green-400'
                            : `${api.borderColor} ${api.bgColor} ${api.textColor} hover:bg-opacity-20`
                        }`}
                      >
                        {copiedKey === api.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copiar API
                          </>
                        )}
                      </button>
                    </div>

                    {/* Botón para solicitar API */}
                    <a
                      href={api.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border ${api.borderColor} ${api.bgColor} ${api.textColor} hover:bg-opacity-20 transition-all duration-200 text-sm mt-3`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {api.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de recursos adicionales */}
        <div className="my-12 glass-card p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            📖 {t('doc.resourcesPage.additionalResources.title')}
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-muted-foreground">
                Documentación oficial de{' '}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline decoration-dotted transition-colors font-medium"
                >
                  React
                </a>{' '}
                y{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline decoration-dotted transition-colors font-medium"
                >
                  Next.js
                </a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-muted-foreground">
                Guías de{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline decoration-dotted transition-colors font-medium"
                >
                  Tailwind CSS
                </a>{' '}
                y{' '}
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline decoration-dotted transition-colors font-medium"
                >
                  shadcn/ui
                </a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-muted-foreground">
                Tutoriales de integración con{' '}
                <a
                  href="https://docs.anthropic.com/en/api/getting-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 underline decoration-dotted transition-colors font-medium"
                >
                  Claude API
                </a>
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span className="text-muted-foreground">
                Ejemplos de código del repositorio Frutero
              </span>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/quick-start"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.quickStart')}</div>
            </div>
          </Link>

          <Link
            to="/doc/layers"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.layers')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Resources;
