import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Logo Kukulcan */}
            <img src="/kukulcan-logo-color.svg" alt="Kukulcan" className="h-10 w-auto object-contain" loading="lazy" />

            <p className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacidad
            </Link>
            <a
              href="mailto:brian@frutero.club"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
