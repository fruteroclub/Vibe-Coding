const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Logo Kukulcan */}
            <img src="/kukulcan-logo-color.svg" alt="Kukulcan" className="h-10 w-auto object-contain" />

            <p className="text-muted-foreground text-sm">
              © 2025 VibeCoding. Todos los derechos reservados.
            </p>
          </div>

          <a
            href="mailto:brian@frutero.club"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            brian@frutero.club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
