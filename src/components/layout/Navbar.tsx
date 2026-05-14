import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Estou no seu site! e gostaria de fazer uma reserva.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex flex-col items-start gap-1 mt-2">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo Cayan Passeios Tur" className="h-12 md:h-14 w-auto object-contain" />
            <Link to="/" className="font-bold text-2xl tracking-tight text-brandBlue-900 hidden sm:block">
              Cayan<span className="text-ctaOrange-500">PasseiosTur</span>
            </Link>
          </div>
          <a href="https://wa.me/5582999465558" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-brandBlue-600 hover:text-ctaOrange-500 transition-colors ml-1">
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
            (82) 99946-5558
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-brandBlue-600 transition-colors">
            Início
          </Link>
          <a href="/#destinos" className="text-sm font-medium text-slate-600 hover:text-brandBlue-600 transition-colors">
            Destinos
          </a>
          <Link to="/servicos" className="text-sm font-medium text-slate-600 hover:text-brandBlue-600 transition-colors">
            Serviços
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-slate-600 hover:text-brandBlue-600 transition-colors">
            Sobre Nós
          </Link>
          <Button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#1ebd5c] text-white shadow-md shadow-green-200/50 rounded-full px-6">
            Contato via WhatsApp
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white absolute w-full left-0 shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link to="/" className="text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
              Início
            </Link>
            <a href="/#destinos" className="text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
              Destinos
            </a>
            <Link to="/servicos" className="text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
              Serviços
            </Link>
            <Link to="/sobre" className="text-base font-medium text-slate-600" onClick={() => setIsOpen(false)}>
              Sobre Nós
            </Link>
            <Button onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#1ebd5c] text-white rounded-full mt-4">
              Contato via WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
