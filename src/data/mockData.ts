export interface Experience {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  includesTitle?: string;
  includes: string[];
  itinerary: { time: string; activity: string }[];
  category: "Passeio" | "Ensaio" | "Transfer" | "Gastronomia";
  galleryImage?: string;
}

export const experiencesData: Experience[] = [
  {
    id: "jangada-piscinas-naturais",
    title: "Passeio de Jangada nas Piscinas Naturais",
    location: "Praia do Patacho, Porto de Pedras - AL",
    duration: "2h30 a 3 horas",
    price: 100,
    image: "/capa-piscinas-naturais.jpg",
    tag: "Mais Vendido",
    category: "Passeio",
    description: "Prepare-se para uma experiência única nas águas cristalinas da Praia do Patacho, um paraíso na Rota Ecológica dos Milagres. O passeio de jangada dura de 2h30 a 3h e inclui paradas incríveis: mergulho nas piscinas naturais, pulo divertido da nossa jangada de dois andares e momentos de relax nas redes e bóias na parte rasa do mar. Um roteiro perfeito para quem busca beleza, tranquilidade e diversão em um só lugar. A saída é diária, mas acontece apenas uma vez por dia — conforme a maré — e o agendamento é necessário.",
    includesTitle: "O QUE ESTÁ INCLUSO:",
    includes: [
      "MÁSCARAS DE MERGULHO",
      "PARADA NAS PISCINAS NATURAIS",
      "PULO DA JANGADA DE 2 ANDARES",
      "REDES DE BALANÇO E BÓIA PARA FOTOS",
      "SAÍDA CONFORME MARÉ (1 POR DIA)",
      "EMBARQUE NO PONTO DE APOIO À BEIRA-MAR"
    ],
    itinerary: [],
    galleryImage: "/galeria-jangada.png"
  },
  {
    id: "jangada-gastronomica",
    title: "Passeio de Jangada Gastronômico",
    location: "Rota Ecológica dos Milagres - AL",
    duration: "4 horas",
    price: 300,
    image: "/passeio-de-jangada-gastronomico.jpg",
    tag: "Experiência Premium",
    category: "Gastronomia",
    description: "Uma experiência única em alto-mar que une sabores e paisagens inesquecíveis! Embarque em nossa jangada gastronômica e desfrute de um passeio exclusivo com parada no banco de areia, onde você poderá saborear petiscos regionais, frutos do mar fresquinhos e bebidas enquanto aproveita o visual paradisíaco das águas mornas e cristalinas.",
    includesTitle: "O QUE ESTÁ INCLUSO:",
    includes: [
      "PASSEIO DE JANGADA COM PARADA NO BANCO DE AREIA",
      "DEGUSTAÇÃO DE PETISCOS E FRUTOS DO MAR",
      "BEBIDAS SELECIONADAS (CONSULTAR CARDÁPIO)",
      "CENÁRIO PARA FOTOS INCRÍVEIS",
      "AGENDAMENTO: NECESSÁRIO RESERVAR COM ANTECEDÊNCIA"
    ],
    itinerary: [],
    galleryImage: "/galeria-jangada-gastronomica.png"
  },
  {
    id: "ensaio-fotografico",
    title: "Ensaio fotográfico drone e subaquáticas",
    location: "Praia do Patacho / Piscinas Naturais",
    duration: "2 horas",
    price: 75,
    image: "/ensaio-fotografico-profissional.jpg",
    category: "Ensaio",
    description: "Registre sua experiência nas piscinas naturais de um ângulo inesquecível! Durante o passeio, realizamos fotos aéreas com drone no banco de areia, onde montamos um cenário especial com boia circular e rede. Um ensaio único que eterniza esse momento incrível em Milagres com imagens dignas de capa de revista!",
    includesTitle: "O QUE ESTÁ INCLUSO:",
    includes: [
      "FOTOS AÉREAS COM DRONE",
      "CENÁRIO COM BOIA CIRCULAR E REDE",
      "REALIZADO NO BANCO DE AREIA DURANTE O PASSEIO",
      "FOTOS SUBAQUÁTICAS COM PEIXINHOS"
    ],
    itinerary: [],
    galleryImage: "/galeria-ensaio-fotografico.png"
  },
  {
    id: "passeio-buggy",
    title: "Passeio de Buggy - Rota Sul ou Rota Norte",
    location: "Porto de Pedras / São Miguel dos Milagres",
    duration: "2 horas",
    price: 200,
    image: "/passeio-de-buggy-pelas-praias.jpg",
    tag: "Vagas Limitadas",
    category: "Passeio",
    description: "Explore o melhor de São Miguel dos Milagres e Porto de Pedras em um passeio de buggy cheio de paisagens paradisíacas! Escolha entre duas rotas incríveis, com duração média de 2 horas, e viva essa aventura com paradas estratégicas, mirantes e praias deslumbrantes.",
    includesTitle: "ROTAS DISPONÍVEIS:",
    includes: [
      "ROTA SUL - SÃO MIGUEL DOS MILAGRES: PRAIA DE SÃO MIGUEL, PRAIA DO MARCENEIRO, MIRANTE DE MILAGRES, FONTE MILAGROSA",
      "ROTA NORTE - PORTO DE PEDRAS: PRAIA DE LAGES, PRAIA DO PATACHO + COQUEIRO GRAZI, TÚNEL VERDE, PONTE DE TATUAMUNHA (COM CHANCE DE VER O PEIXE-BOI)",
      "DURAÇÃO: 2 HORAS CADA ROTA"
    ],
    itinerary: [],
    galleryImage: "/galeria-passeio-buggy.png"
  },
  {
    id: "passeio-quadriciclo",
    title: "Passeio de Quadriciclo",
    location: "Trilhas de Porto de Pedras",
    duration: "A consultar",
    price: 200,
    image: "/passseio-de-quadriciclos.jpg",
    category: "Passeio",
    description: "Prepare-se para uma aventura cheia de adrenalina pelas paisagens mais incríveis da região! No passeio de quadriciclo, você mesmo pilota e explora rotas recheadas de emoção e belezas naturais. Escolha entre a rota sul, com saída do centro de Milagres, ou a rota norte, partindo do Patacho. Cada quadriciclo comporta até duas pessoas.",
    includesTitle: "OPÇÕES DE ROTA:",
    includes: [
      "ROTA SUL: CENTRO DE MILAGRES",
      "ROTA NORTE: CENTRO DO PATACHO",
      "CAPACIDADE: ATÉ 2 PESSOAS POR QUADRICICLO",
      "AGENDAMENTO: CONSULTE NOSSA EQUIPE"
    ],
    itinerary: [],
    galleryImage: "/galeria-passeio-quadriciclo.png"
  },
  {
    id: "lancha-maragogi",
    title: "Passeio de Lancha em Maragogi",
    location: "Maragogi - AL",
    duration: "2 horas",
    price: 150,
    image: "/passeio-de-lancha-em-maragogi.jpg",
    category: "Passeio",
    description: "Explore as belezas de Maragogi em um passeio de lancha exclusivo e cheio de encanto! Durante 2 horas de navegação, você conhecerá três dos lugares mais desejados do litoral alagoano: as famosas Piscinas Naturais, o icônico Caminho de Moisés e a paradisíaca Praia de Antunes. Ideal para quem busca conforto, paisagens incríveis e fotos de tirar o fôlego.",
    includesTitle: "INFORMAÇÕES:",
    includes: [
      "PISCINAS NATURAIS, CAMINHO DE MOISÉS E PRAIA DE ANTUNES",
      "DURAÇÃO: 2 HORAS",
      "CAPACIDADE: ATÉ 7 PESSOAS POR LANCHA",
      "AGENDAMENTO: CONSULTE DISPONIBILIDADE"
    ],
    itinerary: [],
    galleryImage: "/galeria-lancha-maragogi.png"
  },
  {
    id: "transfer-privativo",
    title: "Transfer Privativo",
    location: "Aeroportos e Pousadas",
    duration: "Flexível",
    price: 150,
    image: "/transfer-privativo.jpg",
    category: "Transfer",
    description: "✦ ✦ ✦ EXPERIMENTE O CONFORTO\ne a praticidade do nosso transfer privativo, com carro adaptado e espaço especial para suas bagagens, garantindo uma viagem tranquila do início ao fim!",
    includesTitle: "INFORMAÇÕES:",
    includes: [
      "VEÍCULO ADAPTADO PARA MAIOR CONFORTO",
      "ESPAÇO ESPECIAL PARA BAGAGENS",
      "TRANSFER SEGURO E TRANQUILO DO INÍCIO AO FIM"
    ],
    itinerary: []
  },
  {
    id: "passeio-cavalo",
    title: "Passeio a Cavalo em Milagres",
    location: "Praias da Rota dos Milagres",
    duration: "1 hora",
    price: 150,
    image: "/passeio-a-cavalo-em-milagres.jpg",
    category: "Passeio",
    description: "Viva uma experiência única em Milagres com um passeio a cavalo pelas areias brancas e paisagens naturais de tirar o fôlego. Ideal para quem busca paz, conexão com a natureza ou um momento especial a dois. Os passeios ao pôr do sol são os mais procurados e proporcionam um clima romântico inesquecível. Um convite ao relaxamento em meio à beleza do litoral alagoano.",
    includesTitle: "INFORMAÇÕES:",
    includes: [
      "DURAÇÃO: 1 HORA",
      "DESTAQUE: OPÇÃO AO PÔR DO SOL (ROMÂNTICO)",
      "AGENDAMENTO: REALIZADO COM NOSSA EQUIPE"
    ],
    itinerary: [],
    galleryImage: "/galeria-passeio-cavalo.png"
  }
];
