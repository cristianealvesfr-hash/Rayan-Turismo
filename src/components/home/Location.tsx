import { MapPin } from 'lucide-react';

export const Location = () => {
  const mapLink = "https://maps.app.goo.gl/BthGCZP6NryqmjFj6?g_st=ic";
  // Usando a localização geral da Praia do Patacho para o embed, já que o link curto abrirá o ponto exato no app.
  const embedUrl = "https://maps.google.com/maps?q=Praia%20do%20Patacho,%20Porto%20de%20Pedras%20-%20AL&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-24 bg-white" id="localizacao">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brandBlue-900 mb-4">Como Chegar</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Venha viver o paraíso. Estamos em uma localização privilegiada na <br className="hidden md:block"/> Rota Ecológica dos Milagres, em Praia do Patacho.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map Container */}
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 relative group">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cayan Passeios Tur"
            ></iframe>
            
            {/* Overlay sutil apenas para interações de estilo, se necessário */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-3xl"></div>
          </div>

          {/* Action Button */}
          <div className="mt-10 flex justify-center">
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brandBlue-900 text-brandBlue-900 hover:bg-brandBlue-900 hover:text-white font-bold text-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <MapPin className="w-5 h-5" />
              Abrir Rota no Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
