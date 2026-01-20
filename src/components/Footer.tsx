const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 VibeCoding. Todos los derechos reservados.
          </p>
          <a 
            href="mailto:hola@frutero.club" 
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            hola@frutero.club
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
