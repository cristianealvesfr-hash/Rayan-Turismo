import { useState, useEffect } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Estou no seu site! e gostaria de fazer uma reserva.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      <a 
        href="https://www.instagram.com/cayan_passeiostur/" 
        target="_blank" 
        rel="noreferrer"
        className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 transform transition-all duration-300 hover:scale-110 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
      >
        <Instagram className="w-8 h-8" />
      </a>

      <button 
        onClick={handleWhatsApp}
        className="h-16 w-16 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transform transition-all duration-300 hover:scale-110 animate-bounce bg-[#25D366] text-white"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="w-10 h-10 fill-white stroke-[#25D366]" />
      </button>
    </div>
  );
};
