import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="VibeCoding" className="w-[200%] h-[200%] object-contain" />
            </div>
            <span className="text-2xl font-bold text-foreground">VibeCoding</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programa" className="text-muted-foreground hover:text-foreground transition-colors">
              Programa
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#pricing" className="btn-primary-gradient text-sm px-6 py-2.5">
              Únete ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a 
              href="#programa" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Programa
            </a>
            <a 
              href="#faq" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#pricing" 
              className="btn-primary-gradient text-sm px-6 py-2.5 text-center"
              onClick={() => setIsOpen(false)}
            >
              Únete ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
