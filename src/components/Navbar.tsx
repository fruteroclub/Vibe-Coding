import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/frutero-logo.svg" alt="Frutero" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programa" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navbar.links.programa')}
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navbar.links.faq')}
            </a>
            <a href="#pricing" className="btn-primary-gradient text-sm px-6 py-2.5">
              {t('navbar.cta')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#programa"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.links.programa')}
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.links.faq')}
            </a>
            <a
              href="#pricing"
              className="btn-primary-gradient text-sm px-6 py-2.5 text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('navbar.cta')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
