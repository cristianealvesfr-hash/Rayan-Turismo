import { Hero } from '../components/home/Hero';
import { FeaturedExperiences } from '../components/home/FeaturedExperiences';
import { FeaturedVideo } from '../components/home/FeaturedVideo';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramVideos } from '../components/home/InstagramVideos';
import { InstagramHighlights } from '../components/home/InstagramHighlights';
import { Location } from '../components/home/Location';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
