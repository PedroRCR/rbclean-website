// Dados do site (menu, serviços, avaliações, contactos, galeria).
// Os textos traduzíveis estão em i18n/translations.ts; aqui ficam as chaves ('nav.services', ...).

export interface NavItem {
  labelKey: string;
  sectionId: string;
}

export interface ServiceItem {
  titleKey: string;
  image: string;
}

export interface Evaluation {
  name: string;
  numberOfStars: number;
  comment: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.services', sectionId: 'services' },
  { labelKey: 'nav.aboutUs', sectionId: 'about-us' },
  { labelKey: 'nav.evaluations', sectionId: 'evaluations' },
  { labelKey: 'nav.gallery', sectionId: 'gallery' },
  { labelKey: 'nav.contacts', sectionId: 'contacts' },
];

export const CONTACTS = {
  location: 'Bragança',
  phoneDisplay: '+351 932 664 130',
  phoneHref: 'tel:+351932664130',
  whatsapp: 'https://wa.me/351932664130',
  instagram: 'https://www.instagram.com/rbclean_24/',
  facebook: 'https://www.facebook.com/p/RBClean-61563676792456/',
};

export const SERVICES: ServiceItem[] = [
  { titleKey: 'services.sofas', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.carpets', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.mattresses', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.chairs', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.carSeats', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.waterproofing', image: 'assets/images/rbclean-home-img.webp' },
];

export const STATS = {
  clientesSatisfeitos: 100,
  servicosRealizados: 300,
};

// Perfil de Empresa no Google. Atualizar a nota e o total à mão de vez em quando.
const GOOGLE_PLACE_ID = 'ChIJ8fv6rGZJOg0RO4pAA7s8xkY';

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 50,
  reviewsUrl: `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`,
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
};

// Quantas avaliações aparecem de cada vez (escolhidas ao acaso no browser).
export const EVALUATIONS_SHOWN = 3;

export const EVALUATIONS: Evaluation[] = [
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'Excelente profissional, tinha tinta numas cadeiras e a minha criança tinha feito uma pintura no sofá e ficou tudo impecável! Recomendo!',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment: 'Limpeza bem feita, rápida e a um ótimo preço!',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'Excelente profissional...Trabalhou Com todo o cuidado durante todo o processo, não só com o mobiliário como com o espaço envolvente... Muito obrigado',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'O meu sofá estava com bastantes manchas. Posso dizer que ficou como novo. O Rui fez um excelente trabalho.',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'Atendimento espetacular, o sofá ficou impecável, MUITO cheiroso, todos elogiaram, ficou como novo! Recomendo a todos, serviços de confiança, 5 ⭐️',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
  },
  {
    name: "Pedro Miguel",
    numberOfStars: 5.0,
    comment:
      'Trabalho muito bem feito, ficou super limpo que até parecia novo como veio da loja',
  },
];

// TODO: substituir por fotos reais dos trabalhos (colocar em src/assets/images/).
export const GALLERY_IMAGES: string[] = [
  'https://picsum.photos/seed/1/800/600',
  'https://picsum.photos/seed/2/800/600',
  'https://picsum.photos/seed/3/800/600',
  'https://picsum.photos/seed/4/800/600',
  'https://picsum.photos/seed/5/800/600',
];
