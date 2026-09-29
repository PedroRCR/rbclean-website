// Todo o conteúdo editável do site num só lugar.
// Para mudar textos, serviços, avaliações ou contactos, basta editar este ficheiro.

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface ServiceItem {
  title: string;
  image: string;
}

export interface Evaluation {
  numberOfStars: number;
  comment: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', sectionId: 'services' },
  { label: 'Sobre Nós', sectionId: 'about-us' },
  { label: 'Avaliações', sectionId: 'evaluations' },
  { label: 'Trabalhos', sectionId: 'gallery' },
  { label: 'Contactos', sectionId: 'contacts' },
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
  { title: 'Limpeza Sofás', image: 'assets/images/rbclean-home-img.webp' },
  { title: 'Limpeza Carpetes', image: 'assets/images/rbclean-home-img.webp' },
  { title: 'Limpeza Colchões', image: 'assets/images/rbclean-home-img.webp' },
  { title: 'Limpeza Cadeiras', image: 'assets/images/rbclean-home-img.webp' },
  { title: 'Limpeza Bancos de Carros', image: 'assets/images/rbclean-home-img.webp' },
  { title: 'Impermeabilização', image: 'assets/images/rbclean-home-img.webp' },
];

export const STATS = {
  clientesSatisfeitos: 100,
  servicosRealizados: 300,
};

// Quantas avaliações aparecem de cada vez (escolhidas ao acaso no browser).
export const EVALUATIONS_SHOWN = 3;

export const EVALUATIONS: Evaluation[] = [
  {
    numberOfStars: 5,
    comment:
      'Excelente profissional, tinha tinta numas cadeiras e a minha criança tinha feito uma pintura no sofá e ficou tudo impecável! Recomendo!',
  },
  {
    numberOfStars: 5,
    comment: 'Limpeza bem feita, rápida e a um ótimo preço!',
  },
  {
    numberOfStars: 5,
    comment:
      'Excelente profissional...Trabalhou Com todo o cuidado durante todo o processo, não só com o mobiliário como com o espaço envolvente... Muito obrigado',
  },
  {
    numberOfStars: 5,
    comment:
      'O meu sofá estava com bastantes manchas. Posso dizer que ficou como novo. O Rui fez um excelente trabalho.',
  },
  {
    numberOfStars: 5,
    comment:
      'Atendimento espetacular, o sofá ficou impecável, MUITO cheiroso, todos elogiaram, ficou como novo! Recomendo a todos, serviços de confiança, 5 ⭐️',
  },
  {
    numberOfStars: 5,
    comment:
      'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
  },
  {
    numberOfStars: 5,
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
