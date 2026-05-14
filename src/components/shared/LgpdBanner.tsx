import { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const LgpdBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('lgpd_consent');
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lgpd_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 pb-24 md:pb-6 pointer-events-none">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative pointer-events-auto overflow-hidden">
          
          <div className="absolute top-0 left-0 w-2 h-full bg-brandBlue-500"></div>

          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 bg-brandBlue-50 rounded-xl shrink-0 hidden sm:block">
              <ShieldCheck className="h-8 w-8 text-brandBlue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Privacidade e Cookies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizamos cookies e outras tecnologias para melhorar a sua experiência em nosso site, 
                personalizar conteúdo e analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa{' '}
                <Link to="/privacidade" className="text-brandBlue-600 font-semibold hover:underline">
                  Política de Privacidade e Termos de Uso
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <Button 
              onClick={() => setIsVisible(false)} 
              variant="outline" 
              className="flex-1 md:flex-none border-slate-200 text-slate-600"
            >
              Recusar
            </Button>
            <Button 
              onClick={handleAccept} 
              className="flex-1 md:flex-none bg-brandBlue-600 hover:bg-brandBlue-700 text-white font-semibold"
            >
              Entendi e Aceito
            </Button>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
