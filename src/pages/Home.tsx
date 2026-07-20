import { Hero } from '../components/home/Hero';
import { FeaturedExperiences } from '../components/home/FeaturedExperiences';
import { FeaturedVideo } from '../components/home/FeaturedVideo';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramVideos } from '../components/home/InstagramVideos';
import { InstagramHighlights } from '../components/home/InstagramHighlights';
import { Location } from '../components/home/Location';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/shared/SEO';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Passeios em Patacho | Piscinas Naturais do Patacho | Cayan Passeios"
        description="Descubra os melhores passeios em Patacho e na Rota Ecológica dos Milagres. Reserve seu passeio de jangada nas piscinas naturais, buggy, quadriciclo e lancha com a Cayan Passeios."
        keywords="passeios em patacho, piscinas naturais do patacho, rota ecológica dos milagres, passeio de jangada patacho, passeio de buggy, porto de pedras, são miguel dos milagres"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedExperiences />
        <FeaturedVideo />
        <Testimonials />
        <InstagramHighlights />
        <InstagramVideos />
        <Location />
      </main>
      <Footer />
    </div>
  );
};
