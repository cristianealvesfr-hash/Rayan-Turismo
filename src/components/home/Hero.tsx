import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Search, Map, Compass } from 'lucide-react';
import { Button } from '../ui/button';
import { experiencesData } from '../../data/mockData';

const heroImages = [
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero9.jpg",
  "/hero10.jpg"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTour, setSelectedTour] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTour) {
      navigate(`/passeio/${selectedTour}`);
    } else {
      const section = document.getElementById('featured-tours');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative pt-20 pb-10 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[85vh]">
      {/* Background Image Slider & Overlay */}
      <div className="absolute inset-0 z-0 bg-brandBlue-900">
        {heroImages.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Hero background ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brandBlue-900/80 to-brandBlue-800/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md leading-tight">
            Descubra o Paraíso na <br className="hidden md:block"/> Rota dos Milagres
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl mx-auto drop-shadow">
            Experiências autênticas, passeios de jangada e momentos inesquecíveis nas águas cristalinas de Praia do Patacho e região.
          </p>
        </div>

        {/* Search Floating Card */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-6 mx-auto transform translate-y-4 md:translate-y-16">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Map className="w-4 h-4 text-brandBlue-500" />
                Onde você está?
              </label>
              <input 
                type="text" 
                placeholder="Ex: Praia do Patacho" 
                className="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brandBlue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brandBlue-500" />
                Data
              </label>
              <input 
                type="date" 
                className="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brandBlue-500 focus:border-transparent outline-none transition-all text-slate-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Compass className="w-4 h-4 text-brandBlue-500" />
                Escolha o Passeio
              </label>
              <select 
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
                className="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brandBlue-500 focus:border-transparent outline-none transition-all text-slate-600 appearance-none"
              >
                <option value="">Selecione...</option>
                {experiencesData.map((exp) => (
                  <option key={exp.id} value={exp.id}>
                    {exp.title}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" className="h-12 bg-ctaOrange-500 hover:bg-ctaOrange-600 text-white font-bold rounded-xl shadow-lg shadow-ctaOrange-200/50 w-full flex items-center justify-center gap-2 text-lg">
              <Search className="w-5 h-5" />
              Buscar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
