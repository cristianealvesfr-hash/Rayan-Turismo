import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Estou no seu site! e gostaria de fazer uma reserva.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-slate-50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="Logo Cayan Passeios Tur" className="h-16 md:h-20 w-auto object-contain" />
              <Link to="/" className="font-bold text-2xl tracking-tight text-brandBlue-900 hidden sm:block">
                Cayan<span className="text-ctaOrange-500">PasseiosTur</span>
              </Link>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
              Sua agência de turismo especializada na Rota Ecológica dos Milagres. Proporcionando experiências inesquecíveis e momentos únicos em um dos litorais mais bonitos do Brasil.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/cayan_passeiostur/" target="_blank" rel="noreferrer" className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm border text-brandBlue-500 hover:bg-brandBlue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <button onClick={handleWhatsApp} className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm border text-brandBlue-500 hover:bg-brandBlue-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 hover:text-ctaOrange-500 transition-colors">Início</Link></li>
              <li><a href="/#destinos" className="text-slate-600 hover:text-ctaOrange-500 transition-colors">Destinos</a></li>
              <li><Link to="/servicos" className="text-slate-600 hover:text-ctaOrange-500 transition-colors">Serviços</Link></li>
              <li><Link to="/sobre" className="text-slate-600 hover:text-ctaOrange-500 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/privacidade" className="text-slate-600 hover:text-ctaOrange-500 transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-4">Atendimento</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-ctaOrange-500 mt-0.5" />
                <span className="text-slate-600">(82) 99946-5558<br/>Seg - Dom, 08:00 - 18:00</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ctaOrange-500 mt-0.5" />
                <span className="text-slate-600">Praia do Patacho<br/>Porto de Pedras - AL</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Formas de Pagamento */}
        <div className="border-t pt-10 pb-6 mt-8 mb-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
            <span className="text-slate-700 font-bold text-lg md:text-xl">Parcelamento no cartão de crédito, débito e Pix!</span>
            <span className="text-slate-500 text-sm">Trabalhamos com as principais bandeiras e formas de pagamento.</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100">
             {/* Pix */}
             <div className="flex items-center gap-1 text-[#32BCAD] font-extrabold text-xl tracking-tighter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 2.84l4.58-4.58 4.58 4.58-4.58 4.58L7.42 2.84zm13.74 9.16l-4.58-4.58-4.58 4.58 4.58 4.58 4.58-4.58zM12 16.58l-4.58-4.58-4.58 4.58 4.58 4.58 4.58-4.58z" transform="translate(0, 4)"/>
                </svg>
                pix
             </div>
             {/* Visa */}
             <div className="text-[#1434CB] font-black italic text-3xl tracking-tighter leading-none">VISA</div>
             
             {/* Mastercard */}
             <div className="flex items-center scale-90">
               <div className="w-8 h-8 rounded-full bg-[#EB001B] opacity-90 -mr-3 relative z-10 mix-blend-multiply"></div>
               <div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-90 relative z-0 mix-blend-multiply"></div>
             </div>
             
             {/* Maestro */}
             <div className="flex items-center scale-90">
               <div className="w-8 h-8 rounded-full bg-[#0064CB] opacity-90 -mr-3 relative z-10 mix-blend-multiply"></div>
               <div className="w-8 h-8 rounded-full bg-[#CC0000] opacity-90 relative z-0 mix-blend-multiply"></div>
             </div>
             
             {/* Elo */}
             <div className="font-black text-2xl tracking-tighter flex items-center bg-black text-white px-2 py-0.5 rounded-lg">
               <span className="text-[#00A4E0]">e</span><span className="text-[#FDB913]">l</span><span className="text-[#ED1164]">o</span>
             </div>
             
             {/* Alelo */}
             <div className="font-black text-[#006B3F] text-2xl tracking-tight">alelo</div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Cayan Passeios Tur. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium bg-slate-200 text-slate-700 py-1 px-3 rounded-full">CADASTUR REGISTRADO</span>
            <span className="text-xs font-medium bg-slate-200 text-slate-700 py-1 px-3 rounded-full">SITE SEGURO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
