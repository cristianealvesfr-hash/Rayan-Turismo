import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import { experiencesData, type Experience } from '../data/mockData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ReservationSidebar } from '../components/detail/ReservationSidebar';

export const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState<Experience | null>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    const found = experiencesData.find(e => e.id === id);
    if (found) {
      setExperience(found);
    }
  }, [id]);

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Passeio não encontrado</h2>
          <Link to="/" className="text-brandBlue-600 font-medium hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar para o início
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pb-24 md:pb-32">
        {/* Banner Section */}
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          <img 
            src={experience.image} 
            alt={experience.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-0 w-full pb-8 md:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Voltar aos passeios
              </Link>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md max-w-4xl leading-tight">
                {experience.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-ctaOrange-400" />
                  <span className="font-medium text-lg">{experience.location}</span>
                </div>
                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-ctaOrange-400" />
                  <span className="font-medium text-lg">{experience.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 relative">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column (70%) */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border mb-8 border-brandBlue-900">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Detalhes do Passeio */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-brandBlue-900 mb-2 uppercase">Detalhes:</h2>
                    <h3 className="text-sm font-bold text-brandBlue-900 mb-4 flex items-center gap-2">
                      + + + SOBRE OS PASSEIOS:
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-base font-medium text-justify">
                      {experience.description}
                    </p>
                  </div>

                  {/* Quadro de Inclusos */}
                  <div className="w-full md:w-1/2 border-2 border-brandBlue-900 rounded-xl overflow-hidden self-start">
                    <div className="bg-brandBlue-900 text-white font-black text-center py-3 uppercase tracking-wider">
                      {experience.includesTitle || "O QUE ESTÁ INCLUSO:"}
                    </div>
                    <div className="p-5 bg-white">
                      <ul className="space-y-3">
                        {experience.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-brandBlue-900 font-bold uppercase">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brandBlue-900 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner de Benefícios Globais */}
              <div className="bg-[#4fb8b3] rounded-2xl p-8 shadow-lg text-white mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase drop-shadow-md">
                  O que está incluso<br/>em nossos passeios:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    </div>
                    <h4 className="font-black text-lg uppercase mb-2">Guia Credenciado</h4>
                    <p className="text-white/90 text-sm font-medium">Serviço conduzido por guia credenciado pelo cadastur.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4z"/></svg>
                    </div>
                    <h4 className="font-black text-lg uppercase mb-2">Coletivo ou Privativo</h4>
                    <p className="text-white/90 text-sm font-medium">Serviço coletivo ou privativo para você e sua família.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 p-4 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/></svg>
                    </div>
                    <h4 className="font-black text-lg uppercase mb-2">Conforto e Segurança</h4>
                    <p className="text-white/90 text-sm font-medium">Serviço executado em carro seguro e confortável.</p>
                  </div>
                </div>
              </div>

              {/* Galeria Dinâmica */}
              {experience.galleryImage && (
                <div className="mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 flex justify-center p-2">
                    <img 
                      src={experience.galleryImage} 
                      alt={`Fotos do passeio ${experience.title}`}
                      className="max-w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>
              )}
            </div>
            {/* Right Column (Sidebar) - Desktop: Sticky, Mobile: Bottom fixed */}
            <div className="w-full lg:w-1/3">
              {/* Desktop Sidebar Container */}
              <div className="hidden lg:block relative h-full">
                <ReservationSidebar experience={experience} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t p-4 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 font-medium">Por pessoa</p>
          <p className="text-2xl font-extrabold text-brandBlue-600">R$ {experience.price.toFixed(2)}</p>
        </div>
        <button 
          onClick={() => {
            const phone = "5582999465558";
            const message = `Olá equipe Cayan Passeios Tur! Gostaria de reservar o [${experience.title}] em Praia do Patacho. Podem me passar mais informações?`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="bg-[#25D366] hover:bg-[#1ebd5c] text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-green-200/50 flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.264-.468-2.406-1.488-.888-.788-1.487-1.761-1.658-2.059-.175-.301-.019-.465.131-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.205.048-.39-.025-.54-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.301-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.301 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.248-.705.248-1.305.175-1.425-.075-.136-.275-.211-.576-.36l-.004.001z"></path><path d="M12.004 22.001c-1.616 0-3.196-.42-4.582-1.215l-5.112 1.341 1.363-4.981c-.873-1.424-1.332-3.048-1.332-4.707 0-5.166 4.2-9.366 9.366-9.366s9.366 4.2 9.366 9.366c0 5.166-4.2 9.366-9.366 9.366v0z"></path></svg>
          Reservar
        </button>
      </div>
    </div>
  );
};
