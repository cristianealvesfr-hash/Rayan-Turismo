import { useEffect, useRef } from 'react';
import { VideoCard } from '../shared/VideoCard';

const highlights = [
  {
    url: "https://www.instagram.com/p/DWzKfpKkTbC/",
    cover: "/cover-highlight-1.png"
  },
  {
    url: "https://www.instagram.com/p/DWeqKPokfY4/",
    cover: "/cover-highlight-2.png"
  },
  {
    url: "https://www.instagram.com/p/DS04c9igdqe/",
    cover: "/cover-highlight-3.png"
  },
  {
    url: "https://www.instagram.com/p/DSEB983kerK/",
    cover: "/cover-highlight-4.png"
  }
];

export const InstagramHighlights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isHovered = false;

    container.addEventListener('mouseenter', () => isHovered = true);
    container.addEventListener('mouseleave', () => isHovered = false);

    const interval = setInterval(() => {
      if (!isHovered && container) {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', () => isHovered = true);
      container.removeEventListener('mouseleave', () => isHovered = false);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-brandBlue-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-ctaOrange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Experiências Reais</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Momentos que ficam para a <span className="text-brandBlue-600">história</span>
            </h2>
            <div className="w-20 h-1.5 bg-ctaOrange-500 rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore depoimentos visuais e sinta a energia dos nossos passeios. 
              Garantimos não apenas um serviço, mas memórias inesquecíveis que você levará por toda a vida.
            </p>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scroll-smooth hide-scrollbar items-start"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[350px] flex-shrink-0 snap-center rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white transform transition-transform hover:-translate-y-2 duration-300 relative h-[550px] md:h-[600px] p-2"
            >
              <VideoCard 
                videoUrl={highlight.url} 
                coverUrl={highlight.cover} 
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
