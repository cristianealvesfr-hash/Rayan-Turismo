import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { experiencesData } from '../data/mockData';
import { ExperienceCard } from '../components/shared/ExperienceCard';
import { Button } from '../components/ui/button';

export const Services = () => {
  const handleWhatsApp = () => {
    const phone = "5582999465558";
    const message = "Estou no seu site! e gostaria de fazer uma reserva.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pb-24">
        {/* Header Section */}
        <section className="bg-brandBlue-900 py-16 text-center text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">Nossos Serviços</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Conheça as melhores opções de passeios e transfers para tornar a sua viagem a Alagoas inesquecível.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiencesData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-slate-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pronto para montar o seu roteiro?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Se você tem dúvidas de quais passeios escolher ou quer montar um pacote personalizado para a sua família, nossa equipe está pronta para te ajudar.
            </p>
            <Button 
              onClick={handleWhatsApp}
              className="h-14 px-8 text-lg bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold rounded-xl shadow-lg shadow-green-200"
            >
              Falar com um Consultor
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
