// All human-readable text on the site, per language.
// Portuguese (pt) is the reference: English (en) must have exactly the same keys,
// otherwise the build fails. In templates: {{ 'nav.services' | t }}

import type { Evaluation } from '../content';

export type Lang = 'pt' | 'en';

export const LANGS: Lang[] = ['pt', 'en'];

// Part of the brand name: the same in every language.
const BRAND_SUBTITLE = 'Limpeza e Higienização de Estofos';

const pt = {
  meta: {
    title: 'RB Clean | Limpeza e Higienização de Estofos em Bragança',
    description:
      'Limpeza e higienização profissional de sofás, colchões, cadeiras, carpetes e bancos de carro em Bragança e arredores. Peça já o seu orçamento pelo WhatsApp.',
  },
  brand: {
    subtitle: BRAND_SUBTITLE,
  },
  nav: {
    services: 'Serviços',
    aboutUs: 'Sobre Nós',
    evaluations: 'Avaliações',
    gallery: 'Trabalhos',
    contacts: 'Contactos',
    menu: 'Menu',
    language: 'Idioma',
  },
  home: {
    book: 'AGENDAR',
    bookAria: 'Contacte-nos pelo WhatsApp',
    tagline: 'Devolva vida e frescor aos seus estofos com um serviço especializado.',
    items: 'Sofás • Poltronas • Cadeiras • Colchões • Estofados automotivos',
  },
  services: {
    title: 'Conheça os Nossos Serviços',
    description:
      'Oferecemos soluções completas de limpeza e higienização de colchões, focadas na saúde, bem-estar e conforto da sua família. Utilizamos equipamentos profissionais e produtos seguros para eliminar ácaros, bactérias, fungos, odores e manchas, garantindo resultados visíveis e duradouros. Trabalhamos com eficiência, pontualidade e atenção aos detalhes, adaptando cada serviço às necessidades específicas de cada cliente. O nosso compromisso é proporcionar um ambiente mais limpo, saudável e acolhedor em sua casa ou empresa.',
    previous: 'Serviço anterior',
    next: 'Serviço seguinte',
    page: 'Página',
    sofas: 'Limpeza Sofás',
    carpets: 'Limpeza Carpetes',
    mattresses: 'Limpeza Colchões',
    chairs: 'Limpeza Cadeiras',
    carSeats: 'Limpeza Bancos de Carros',
    waterproofing: 'Impermeabilização',
  },
  aboutUs: {
    highlight:
      'Na RBClean, acreditamos que um estofo limpo faz toda a diferença no conforto e bem-estar do seu lar ou espaço de trabalho.',
    p1: 'Sediados em Bragança, somos especialistas na limpeza profissional de estofos — sofás, cadeiras, colchões, tapetes e muito mais — utilizando equipamentos de alta performance e produtos seguros para a sua família e para o ambiente. O nosso método combina técnica, experiência e cuidado, devolvendo vida e frescura aos seus estofos como se fossem novos.',
    p2: 'Ao longo do tempo, temos servido clientes particulares e empresas na região de Bragança e arredores, construindo uma reputação assente na confiança, pontualidade e resultados visíveis. Para nós, cada trabalho é único — e é assim que o tratamos.',
    p3: 'Quando nos contacta, não está apenas a contratar um serviço de limpeza. Está a escolher tranquilidade, higiene e o cuidado de quem trata o seu espaço como se fosse o seu próprio.',
    imageAlt: 'Profissional da RB Clean',
  },
  evaluations: {
    satisfiedClients: 'Clientes Satisfeitos',
    servicesDone: 'Serviços Realizados',
    outOf5: 'de 5 estrelas',
    onGoogle: 'avaliações no Google',
    seeAll: 'Ver todas no Google',
    writeReview: 'Deixar avaliação',
  },
  gallery: {
    imageAlt: 'Trabalho realizado pela RB Clean',
    zoom: 'Ver imagem em grande',
    previous: 'Imagem anterior',
    next: 'Imagem seguinte',
    show: 'Mostrar esta imagem',
    dialog: 'Galeria de trabalhos',
    close: 'Fechar',
  },
  contacts: {
    title: 'Fale connosco',
    subtitle: 'Peça o seu orçamento por WhatsApp ou telefone.',
    whatsapp: 'WhatsApp',
    call: 'Ligar',
    area: 'Bragança e arredores',
    homeService: 'Serviço ao domicílio',
    alsoIn: 'Também em',
    hours: 'Horário',
    closed: 'Fechado',
    days: {
      weekdays: 'Segunda a sexta',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    payment: 'Pagamento',
    payments: {
      mbway: 'MB WAY',
      cash: 'Numerário',
      transfer: 'Transferência bancária',
      card: 'Cartão',
    },
    faqTitle: 'Perguntas frequentes',
  },
  faq: {
    homeService: {
      q: 'Deslocam-se a minha casa?',
      a: 'Sim. Fazemos o serviço ao domicílio: vamos a sua casa ou empresa com todo o equipamento necessário.',
    },
    safeProducts: {
      q: 'Os produtos são seguros?',
      a: 'Sim. Utilizamos produtos seguros para a sua família e para o ambiente.',
    },
    price: {
      q: 'Quanto custa?',
      a: 'Depende do tipo de peça, do tamanho e do estado. Envie-nos fotos pelo WhatsApp e damos-lhe um orçamento.',
    },
    area: {
      q: 'Em que zona trabalham?',
      a: 'Estamos sediados em Bragança e servimos clientes particulares e empresas em Bragança e arredores.',
    },
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
  },
};

export type Translations = typeof pt;

const en: Translations = {
  meta: {
    title: 'RB Clean | Upholstery Cleaning and Sanitising in Bragança',
    description:
      'Professional cleaning and sanitising of sofas, mattresses, chairs, carpets and car seats in Bragança and the surrounding area. Ask for a quote on WhatsApp.',
  },
  brand: {
    subtitle: BRAND_SUBTITLE,
  },
  nav: {
    services: 'Services',
    aboutUs: 'About Us',
    evaluations: 'Reviews',
    gallery: 'Our Work',
    contacts: 'Contacts',
    menu: 'Menu',
    language: 'Language',
  },
  home: {
    book: 'BOOK NOW',
    bookAria: 'Contact us on WhatsApp',
    tagline: 'Bring life and freshness back to your upholstery with a specialised service.',
    items: 'Sofas • Armchairs • Chairs • Mattresses • Car upholstery',
  },
  services: {
    title: 'Discover Our Services',
    description:
      'We offer complete mattress cleaning and sanitising solutions, focused on the health, well-being and comfort of your family. We use professional equipment and safe products to remove dust mites, bacteria, fungi, odours and stains, delivering visible and long-lasting results. We work efficiently and punctually, with attention to detail, tailoring each service to the specific needs of every client. Our commitment is to provide a cleaner, healthier and more welcoming environment in your home or business.',
    previous: 'Previous service',
    next: 'Next service',
    page: 'Page',
    sofas: 'Sofa Cleaning',
    carpets: 'Carpet Cleaning',
    mattresses: 'Mattress Cleaning',
    chairs: 'Chair Cleaning',
    carSeats: 'Car Seat Cleaning',
    waterproofing: 'Waterproofing',
  },
  aboutUs: {
    highlight:
      'At RBClean, we believe clean upholstery makes all the difference to the comfort and well-being of your home or workplace.',
    p1: 'Based in Bragança, we specialise in professional upholstery cleaning — sofas, chairs, mattresses, rugs and much more — using high-performance equipment and products that are safe for your family and the environment. Our method combines technique, experience and care, bringing your upholstery back to life as if it were new.',
    p2: 'Over time, we have served private clients and businesses in Bragança and the surrounding area, building a reputation based on trust, punctuality and visible results. For us, every job is unique — and that is how we treat it.',
    p3: 'When you contact us, you are not just hiring a cleaning service. You are choosing peace of mind, hygiene and the care of someone who treats your space as if it were their own.',
    imageAlt: 'RB Clean professional',
  },
  evaluations: {
    satisfiedClients: 'Satisfied Clients',
    servicesDone: 'Services Completed',
    outOf5: 'out of 5 stars',
    onGoogle: 'reviews on Google',
    seeAll: 'See all on Google',
    writeReview: 'Write a review',
  },
  gallery: {
    imageAlt: 'Work done by RB Clean',
    zoom: 'View larger image',
    previous: 'Previous image',
    next: 'Next image',
    show: 'Show this image',
    dialog: 'Our work gallery',
    close: 'Close',
  },
  contacts: {
    title: 'Get in touch',
    subtitle: 'Ask for a quote on WhatsApp or by phone.',
    whatsapp: 'WhatsApp',
    call: 'Call',
    area: 'Bragança and surrounding area',
    homeService: 'We come to you',
    alsoIn: 'Also in',
    hours: 'Opening hours',
    closed: 'Closed',
    days: {
      weekdays: 'Monday to Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    payment: 'Payment',
    payments: {
      mbway: 'MB WAY',
      cash: 'Cash',
      transfer: 'Bank transfer',
      card: 'Card',
    },
    faqTitle: 'Frequently asked questions',
  },
  faq: {
    homeService: {
      q: 'Do you come to my home?',
      a: 'Yes. We work on site: we come to your home or business with all the equipment needed.',
    },
    safeProducts: {
      q: 'Are the products safe?',
      a: 'Yes. We use products that are safe for your family and the environment.',
    },
    price: {
      q: 'How much does it cost?',
      a: 'It depends on the type of item, its size and condition. Send us photos on WhatsApp and we will give you a quote.',
    },
    area: {
      q: 'Which area do you cover?',
      a: 'We are based in Bragança and serve private clients and businesses in Bragança and the surrounding area.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export const TRANSLATIONS: Record<Lang, Translations> = { pt, en };

// Customer reviews: real quotes, shown in their original language whatever the site language.
export const REVIEWS: Evaluation[] = [
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
