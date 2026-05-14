import { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { type Experience } from '../../data/mockData';

export const ReservationSidebar = ({ experience }: { experience: Experience }) => {
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('2');

  const handleWhatsAppReservation = () => {
    const phone = "5582999465558";
    const message = `Olá equipe Cayan Passeios Tur! Gostaria de reservar o [${experience.title}] em Praia do Patacho. Podem me passar mais informações? Data de interesse: ${date || 'A definir'}, Quantidade de pessoas: ${people}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="border-0 shadow-xl rounded-2xl sticky top-24 z-10 bg-white">
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
          <p className="text-sm text-slate-500 font-medium mb-1">A partir de</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              R$ {experience.price.toFixed(2)}
            </h2>
            <span className="text-slate-500">/ pessoa</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 text-slate-700 mb-2">
              <Calendar className="w-5 h-5 text-brandBlue-500" />
              <label className="font-semibold text-sm">Data desejada</label>
            </div>
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-900 font-medium"
            />
          </div>

          <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 text-slate-700 mb-2">
              <Users className="w-5 h-5 text-brandBlue-500" />
              <label className="font-semibold text-sm">Pessoas</label>
            </div>
            <select 
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full bg-transparent outline-none text-slate-900 font-medium appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'pessoa' : 'pessoas'}</option>
              ))}
              <option value="11+">11+ pessoas</option>
            </select>
          </div>

          <div className="p-4 border rounded-xl bg-slate-50 border-slate-200">
            <div className="flex items-center gap-3 text-slate-700 mb-2">
              <MapPin className="w-5 h-5 text-brandBlue-500" />
              <label className="font-semibold text-sm">Local de Embarque</label>
            </div>
            <p className="text-slate-900 font-medium">{experience.location}</p>
          </div>
        </div>

        <Button 
          onClick={handleWhatsAppReservation}
          className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#1ebd5c] text-white font-bold rounded-xl shadow-lg shadow-green-200 flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
        >
          {/* WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-white"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.264-.468-2.406-1.488-.888-.788-1.487-1.761-1.658-2.059-.175-.301-.019-.465.131-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.205.048-.39-.025-.54-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.301-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.301 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.248-.705.248-1.305.175-1.425-.075-.136-.275-.211-.576-.36l-.004.001z"></path><path d="M12.004 22.001c-1.616 0-3.196-.42-4.582-1.215l-5.112 1.341 1.363-4.981c-.873-1.424-1.332-3.048-1.332-4.707 0-5.166 4.2-9.366 9.366-9.366s9.366 4.2 9.366 9.366c0 5.166-4.2 9.366-9.366 9.366v0z"></path></svg>
          Reservar pelo WhatsApp
        </Button>
        <p className="text-center text-xs text-slate-500 mt-4">
          Reserva rápida, segura e sem burocracia.
        </p>
      </CardContent>
    </Card>
  );
};
