import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    location: "São Paulo, SP",
    text: "O passeio de jangada nas piscinas naturais do Patacho foi surreal! Equipe super atenciosa e o jangadeiro nos explicou tudo sobre a vida marinha. Voltaremos com certeza!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    location: "Belo Horizonte, MG",
    text: "Fizemos o ensaio fotográfico e o passeio de buggy. As fotos com drone ficaram fantásticas! A Cayan Passeios Tur cuidou de tudo, recomendo de olhos fechados.",
    rating: 5
  },
  {
    id: 3,
    name: "Família Costa",
    location: "Curitiba, PR",
    text: "O passeio gastronômico de jangada foi o ponto alto da nossa viagem. Comer frutos do mar fresquinhos com o pé na água morna foi uma experiência única. Parabéns à equipe!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brandBlue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que dizem nossos clientes</h2>
          <div className="w-20 h-1.5 bg-ctaOrange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A satisfação de quem já viveu a experiência Cayan em Praia do Patacho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg rounded-2xl bg-white">
              <CardContent className="pt-10 pb-8 px-6 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-ctaOrange-400 text-ctaOrange-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
