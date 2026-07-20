import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/shared/SEO';

export const PasseiosPatacho = () => {
  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Olá! Gostaria de mais informações sobre os Passeios em Patacho e nas Piscinas Naturais.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Passeios em Patacho | Piscinas Naturais do Patacho"
        description="Reserve os melhores passeios em Patacho. Conheça as famosas Piscinas Naturais do Patacho de jangada, explore as praias de buggy e quadriciclo."
        keywords="passeios em patacho, piscinas naturais do patacho, passeio de jangada patacho, o que fazer no patacho, turismo porto de pedras"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative py-24 md:py-32 bg-brandBlue-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/passeio-de-jangada-as-piscinas-naturais.jpg" 
              alt="Passeios em Patacho - Piscinas Naturais" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlue-900/90 to-brandBlue-900/60" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Passeios em Patacho
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
              A verdadeira essência das Piscinas Naturais do Patacho e os roteiros mais incríveis da Rota Ecológica dos Milagres.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2">
                <img 
                  src="/capa-piscinas-naturais.jpg" 
                  alt="Piscinas Naturais do Patacho" 
                  className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Descubra as Piscinas Naturais do Patacho
                </h2>
                <div className="w-20 h-1.5 bg-ctaOrange-500 rounded-full mb-8"></div>
                
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
                  <p>
                    Se você está buscando pelos melhores <strong>passeios em Patacho</strong>, você acaba de encontrar. A Praia do Patacho é um dos destinos mais procurados do Brasil, famosa por suas águas cristalinas, mornas e tranquilas.
                  </p>
                  <p>
                    Nossa especialidade é o passeio de jangada para as famosas <strong>Piscinas Naturais do Patacho</strong>. Com jangadeiros nativos credenciados, nós levamos você com segurança para mergulhar entre os corais, relaxar na boia e registrar fotos inesquecíveis.
                  </p>
                  <p>
                    Além das piscinas naturais, organizamos roteiros completos que incluem passeios de buggy pelo litoral, trilhas de quadriciclo e até ensaios fotográficos profissionais com drone, para você levar as melhores lembranças de Alagoas.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "Passeio de Jangada nas Piscinas",
                    "Passeios de Buggy nas Praias",
                    "Trilhas de Quadriciclo",
                    "Fotos de Drone Inclusas (opcional)"
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
                  Agendar Passeio no Patacho
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
