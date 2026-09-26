import { StoreInfo, Testimonial, VideoShowcase } from '../types';

export const STORE_INFO: StoreInfo = {
  brandName: 'Shri Vijaya Kitchenware',
  legalOwner: 'Harita Gummadadelli',
  businessEntity: 'Free Harita Agencies',
  phone: '+91 98765 43210', // Temporary placeholder - clearly marked in placeholders.ts
  formattedPhone: '+919876543210',
  whatsappNumber: '919876543210', // Temporary placeholder - clearly marked in placeholders.ts
  email: 'info@shrivijayakitchenware.com', // Temporary placeholder
  address: {
    street: 'Main Commercial Market Road, Shop No. 102',
    area: 'Opposite State Bank Branch',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    country: 'India',
    fullText: 'Shri Vijaya Kitchenware, Shop 102, Main Commercial Market Road, Opposite State Bank Branch, Hyderabad, Telangana 500001'
  },
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.478627389823!2d78.47444081487714!3d17.38629008807898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin', // Temporary embedded map
  mapsExternalUrl: 'https://maps.google.com/?q=Shri+Vijaya+Kitchenware+Hyderabad',
  googleReviewUrl: 'https://g.page/r/shri-vijaya-kitchenware-review',
  socialLinks: {
    facebook: 'https://facebook.com/shrivijayakitchenware',
    instagram: 'https://instagram.com/shrivijayakitchenware',
    youtube: 'https://youtube.com/@shrivijayakitchenware',
    whatsapp: 'https://wa.me/919876543210'
  },
  schedule: [
    { day: 'Monday', openTime: '10:00 AM', closeTime: '08:30 PM', isClosed: false },
    { day: 'Tuesday', openTime: '10:00 AM', closeTime: '08:30 PM', isClosed: false },
    { day: 'Wednesday', openTime: '10:00 AM', closeTime: '08:30 PM', isClosed: false },
    { day: 'Thursday', openTime: '10:00 AM', closeTime: '08:30 PM', isClosed: false },
    { day: 'Friday', openTime: '10:00 AM', closeTime: '08:30 PM', isClosed: false },
    { day: 'Saturday', openTime: '10:00 AM', closeTime: '09:00 PM', isClosed: false },
    { day: 'Sunday', openTime: '11:00 AM', closeTime: '06:00 PM', isClosed: false }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Rajesh Sharma',
    location: 'Hyderabad',
    rating: 5,
    comment: 'The 12 inch Steel Handle Roti Maker V2 is a total gamechanger for our daily family meals. Making 15 rotis now takes less than 10 minutes, and every single one puffs up perfectly!',
    date: 'August 2026',
    isPlaceholder: true
  },
  {
    id: 't-2',
    author: 'Priya Reddy',
    location: 'Secunderabad',
    rating: 5,
    comment: 'We bought the Tri-Ply Honeycomb Kadai and Dosa Tawa. Exceptional quality! Using metal spoons without scratching the coating is unbelievable. Truly premium cookware.',
    date: 'September 2026',
    isPlaceholder: true
  },
  {
    id: 't-3',
    author: 'Sunita Rao',
    location: 'Cyberabad',
    rating: 5,
    comment: 'The HexaPro Cook & Serve set goes straight from stovetop to our dinner table. Looks very sleek, food stays warm for a long time, and cleaning is super easy.',
    date: 'September 2026',
    isPlaceholder: true
  }
];

export const VIDEOS: VideoShowcase[] = [
  {
    id: 'v-1',
    title: 'Roti Maker V2 Pressing & Puffing Demo',
    duration: '2:15',
    thumbnail: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="%231a1d24"/><circle cx="400" cy="225" r="45" fill="%23f59e0b"/><polygon points="388,205 422,225 388,245" fill="%23ffffff"/><text x="400" y="320" font-family="sans-serif" font-size="20" fill="%23ffffff" text-anchor="middle">Roti Maker V2 In Action</text></svg>',
    description: 'Watch how the reinforced steel handle V2 presses thin, soft, and puffed rotis effortlessly.',
    isPlaceholder: true
  },
  {
    id: 'v-2',
    title: 'Tri-Ply Honeycomb Metal Spoon Scratch Test',
    duration: '1:45',
    thumbnail: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="%230f172a"/><circle cx="400" cy="225" r="45" fill="%2338bdf8"/><polygon points="388,205 422,225 388,245" fill="%23ffffff"/><text x="400" y="320" font-family="sans-serif" font-size="20" fill="%23ffffff" text-anchor="middle">Honeycomb Scratch Resistance</text></svg>',
    description: 'Extreme scratch test demonstrating stainless steel spatulas on our honeycomb coating.',
    isPlaceholder: true
  },
  {
    id: 'v-3',
    title: 'HexaPro Cook & Serve Stove-to-Table Walkthrough',
    duration: '3:00',
    thumbnail: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="%231e1b4b"/><circle cx="400" cy="225" r="45" fill="%23f43f5e"/><polygon points="388,205 422,225 388,245" fill="%23ffffff"/><text x="400" y="320" font-family="sans-serif" font-size="20" fill="%23ffffff" text-anchor="middle">HexaPro Cook &amp; Serve Showcase</text></svg>',
    description: 'Exploring the 20cm to 28cm HexaPro series with dual cast handles and tempered glass lids.',
    isPlaceholder: true
  }
];
