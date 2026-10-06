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

export interface GalleryImage {
  full: string; // large version: main image and popup
  thumb: string; // small version: thumbnail strips
}

// TODO: switch to the custom domain (e.g. https://img.rbclean.pt) before going live:
export const IMAGES_BASE_URL = 'https://pub-34bf09c326144c64948fd66aed82ee9d.r2.dev/converted-images';

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
  // TODO: fill in (e.g. 'geral@rbclean.pt'). Empty = not shown on the site.
  email: '',
};

// ── Contacts section ──
export const SERVICE_AREAS: string[] = [];

// Opening hours. `daysKey` is a key of 'contacts.days' in i18n/translations.ts;
// `hours: null` shows "Closed".
// TODO: fill in, e.g. [{ daysKey: 'weekdays', hours: '9h–19h' }, { daysKey: 'saturday', hours: '9h–13h' }, { daysKey: 'sunday', hours: null }]
export const OPENING_HOURS: { daysKey: 'weekdays' | 'saturday' | 'sunday'; hours: string | null }[] = [];

// Formas de pagamento (chaves de 'contacts.payments' em i18n/translations.ts).
// TODO: fill in, e.g. ['mbway', 'cash', 'transfer'].
export const PAYMENT_METHODS: ('mbway' | 'cash' | 'transfer' | 'card')[] = ['mbway', 'cash', 'transfer'];

// FAQ: each key has a question (q) and answer (a) under 'faq' in translations.ts.
export const FAQ_KEYS = ['homeService', 'safeProducts', 'price', 'area'] as const;

// "How it works" steps, in order: each key has a title and text under 'process.steps' in translations.ts.
export const PROCESS_STEPS = ['contact', 'visit', 'pickup', 'cleaning', 'delivery'] as const;
export type ProcessStep = (typeof PROCESS_STEPS)[number];

export const SERVICES: ServiceItem[] = [
  { titleKey: 'services.sofas', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.carpets', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.mattresses', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.chairs', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.carSeats', image: 'assets/images/rbclean-home-img.webp' },
  { titleKey: 'services.waterproofing', image: `${IMAGES_BASE_URL}/services/gotas.webp` },
];

export const STATS = {
  satisfiedClients: 100,
  servicesDone: 300,
};

// Google Business Profile. Update the rating and count by hand from time to time.
const GOOGLE_PLACE_ID = 'ChIJ8fv6rGZJOg0RO4pAA7s8xkY';

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 50,
  reviewsUrl: `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`,
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
};

// How many reviews are shown at a time (picked at random in the browser).
export const EVALUATIONS_SHOWN = 3;

// Gallery photos in the R2 bucket: each name has gallery/<name>.webp and gallery/<name>-thumb.webp.
// The order here is the order on the site.
const galleryImage = (name: string): GalleryImage => ({
  full: `${IMAGES_BASE_URL}/gallery/${name}.webp`,
  thumb: `${IMAGES_BASE_URL}/gallery/${name}-thumb.webp`,
});

export const GALLERY_IMAGES: GalleryImage[] = [
  'sofa-01',
  'sofa-02',
  'chairs-01',
  'sofa-03',
  'car-02',
  'sofa-04',
  'chairs-02',
  'sofa-05',
  'car-01',
].map(galleryImage);
