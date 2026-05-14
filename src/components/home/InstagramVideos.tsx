import { useEffect, useRef } from 'react';
import { VideoCard } from '../shared/VideoCard';

const videos = [
  {
    url: "https://www.instagram.com/p/DXututWgTpp/",
    cover: "/passeio-de-jangada-as-piscinas-naturais.jpg"
  },
  {
    url: "https://www.instagram.com/p/DW-hheuDLQb/",
    cover: "/passeio-de-buggy-pelas-praias.jpg"
  },
  {
    url: "https://www.instagram.com/p/DWl0XSLjrST/",
    cover: "/passeio-de-lancha-em-maragogi.jpg"
  },
  {
    url: "https://www.instagram.com/p/DTgQpIGgSre/",
    cover: "/passseio-de-quadriciclos.jpg"
  },
  {
    url: "https://www.instagram.com/p/DNogHniB4iU/",
    cover: "/passeio-de-jangada-gastronomico.jpg"
  }
];

export const InstagramVideos = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isHovered = false;

    container.addEventListener('mouseenter', () => isHovered = true);
    container.addEventListener('mouseleave', () => isHovered = false);

    const interval = setInterval(() => {
      if (!isHovered && container) {
        // Se estiver perto do fim, volta pro começo, senão rola um pouco mais
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 340, behavior: 'smooth' }); // Aproximadamente a largura de um card do insta
        }
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', () => isHovered = true);
      container.removeEventListener('mouseleave', () => isHovered = false);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Acompanhe Nossas Aventuras</h2>
          <div className="w-20 h-1.5 bg-ctaOrange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Siga-nos no Instagram e confira os melhores momentos de quem escolhe a Cayan Passeios Tur!
          </p>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar items-start"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[340px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white h-[450px] md:h-[500px]"
            >
              <VideoCard 
                videoUrl={video.url} 
                coverUrl={video.cover} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
