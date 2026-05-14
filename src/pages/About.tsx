import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Estou no seu site! e gostaria de fazer uma reserva.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative py-24 md:py-32 bg-brandBlue-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Sobre Nós" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlue-900/90 to-brandBlue-900/60" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Sobre Nós
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Conheça a história da Cayan Passeios Tur e a nossa paixão por revelar as belezas da Rota Ecológica dos Milagres.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2">
                <img 
                  src="/cayanturismo.jpg" 
                  alt="Equipe e Jangada" 
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Descobrindo o paraíso com você
                </h2>
                <div className="w-20 h-1.5 bg-ctaOrange-500 rounded-full mb-8"></div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                  <p>
                    Nascida na belíssima Praia do Patacho, em Porto de Pedras, a <strong>Cayan Passeios Tur</strong> é muito mais do que uma agência de turismo. Somos apaixonados pela nossa terra e dedicados a proporcionar as melhores experiências na Rota Ecológica dos Milagres.
                  </p>
                  <p>
                    Nossa missão é conectar nossos visitantes à natureza exuberante, à cultura local e à gastronomia inesquecível da região, sempre com segurança, conforto e responsabilidade ambiental.
                  </p>
                  <p>
                    Trabalhamos com guias nativos experientes, jangadeiros que conhecem cada pedacinho dos recifes de corais, e uma frota moderna para garantir o máximo de qualidade do início ao fim do seu passeio.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Guias Nativos Especializados",
                    "Segurança em 1º Lugar",
                    "Roteiros Exclusivos",
                    "Frota Moderna e Segura"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brandBlue-500 shrink-0" />
                      <span className="font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleWhatsApp}
                  className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold rounded-xl shadow-lg shadow-green-200"
                >
                  Fale Conosco no WhatsApp
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
