import { VideoCard } from '../shared/VideoCard';

export const FeaturedVideo = () => {
  // Using the base Instagram link
  const embedUrl = "https://www.instagram.com/p/DXOolyihFu2/";

  return (
    <section className="py-20 bg-brandBlue-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              A Essência do <span className="text-ctaOrange-400">Patacho</span>
            </h2>
            <div className="w-20 h-1.5 bg-ctaOrange-500 mx-auto lg:mx-0 rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-brandBlue-100 leading-relaxed mb-8">
              Aperte o play e sinta um pouco da magia que espera por você. Preparamos essa experiência visual para que você possa mergulhar nas águas cristalinas antes mesmo de arrumar as malas.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ctaOrange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-ctaOrange-500"></span>
              </span>
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Assista ao vídeo completo
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden h-[600px]">
              <VideoCard 
                videoUrl={embedUrl}
                coverUrl="/cover-essencia.png"
                title="A Essência do Patacho"
                className="rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
