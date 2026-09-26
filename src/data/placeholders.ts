export interface PlaceholderRegistryItem {
  id: string;
  field: string;
  currentValue: string;
  notes: string;
}

export const PLACEHOLDER_REGISTRY: PlaceholderRegistryItem[] = [
  {
    id: 'store-phone',
    field: 'Store Contact Phone Number',
    currentValue: '+91 98765 43210',
    notes: 'Temporary store phone number for dialer link (tel:). Replace with official phone number.'
  },
  {
    id: 'store-whatsapp',
    field: 'WhatsApp Business Number',
    currentValue: '919876543210',
    notes: 'Temporary WhatsApp number for wa.me links. Replace with official WhatsApp business number.'
  },
  {
    id: 'store-email',
    field: 'Store Email Address',
    currentValue: 'info@shrivijayakitchenware.com',
    notes: 'Temporary official email address. Replace with confirmed business email.'
  },
  {
    id: 'store-address',
    field: 'Store Physical Address & Google Maps Embed',
    currentValue: 'Shri Vijaya Kitchenware, Main Market Road, Store 102, Hyderabad, Telangana',
    notes: 'Temporary store address & placeholder Google Maps iframe. Replace with exact Google Maps embed URL.'
  },
  {
    id: 'store-about-us',
    field: 'About Us Business History',
    currentValue: 'Placeholder brand narrative for Shri Vijaya Kitchenware',
    notes: 'Detailed business founding history and store story will be provided by owner.'
  },
  {
    id: 'testimonials-content',
    field: 'Customer Reviews & Testimonials',
    currentValue: '3 Placeholder customer feedback items',
    notes: 'Sample real-world feedback placeholders. Final verified customer reviews will be inserted.'
  },
  {
    id: 'video-showcases',
    field: 'Product Video Walkthroughs',
    currentValue: '3 Video showcase thumbnail cards',
    notes: 'Placeholder video cards with YouTube/Vimeo embedding readiness.'
  },
  {
    id: 'google-review-link',
    field: 'Google Review Link',
    currentValue: 'https://g.page/r/shri-vijaya-kitchenware-review',
    notes: 'Replace with official Google Business Profile review link.'
  },
  {
    id: 'social-links',
    field: 'Social Media Profiles',
    currentValue: 'Facebook, Instagram, YouTube placeholder links',
    notes: 'Replace with official brand social media URLs.'
  }
];
