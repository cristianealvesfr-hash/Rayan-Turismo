import { experiencesData } from '../../data/mockData';
import { ExperienceCard } from '../shared/ExperienceCard';

export const FeaturedExperiences = () => {
  return (
    <section id="destinos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experiências em Destaque</h2>
          <div className="w-20 h-1.5 bg-brandBlue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Selecionamos os melhores passeios para você aproveitar cada segundo na Rota Ecológica dos Milagres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {experiencesData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
