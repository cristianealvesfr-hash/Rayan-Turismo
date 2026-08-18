import { Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { type Experience } from '../../data/mockData';

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full rounded-2xl">
      <CardHeader className="p-0 relative overflow-hidden h-56">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={experience.image} 
          alt={experience.title} 
          loading="lazy"
          decoding="async"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {experience.tag && (
          <Badge className="absolute top-4 right-4 z-20 bg-ctaOrange-500 hover:bg-ctaOrange-600 text-white border-0 shadow-sm">
            {experience.tag}
          </Badge>
        )}
      </CardHeader>
      
      <CardContent className="pt-6 pb-4 px-5 flex-grow flex flex-col">
        <div className="flex items-center text-slate-500 text-sm mb-2 gap-1.5">
          <MapPin className="w-4 h-4 text-brandBlue-500" />
          <span className="truncate">{experience.location}</span>
        </div>
        
        <h3 className="font-bold text-lg text-slate-900 mb-3 leading-tight line-clamp-2">
          {experience.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-slate-600 mt-auto">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-5 pb-6 pt-4 flex flex-col border-t border-slate-100 mt-2">
        <div className="w-full text-left mb-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">A partir de</p>
          <p className="text-2xl font-black text-ctaOrange-500">
            R$ {experience.price.toFixed(2)}
            <span className="text-sm font-medium text-slate-500 ml-1 lowercase">por pessoa</span>
          </p>
        </div>
        
        <Button asChild className="w-full bg-ctaOrange-500 hover:bg-ctaOrange-600 text-white rounded-md font-bold shadow-md uppercase tracking-wide text-sm h-12">
          <Link to={`/passeio/${experience.id}`}>
            + Informações e Reservas
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
