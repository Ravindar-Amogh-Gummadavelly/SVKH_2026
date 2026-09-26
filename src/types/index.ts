export interface ProductSpecification {
  label: string;
  value: string;
}

export type CategoryId = 'roti-makers' | 'tri-ply-honeycomb' | 'tri-ply-hexapro';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface ProductImages {
  front: string;
  alternate: string;
  left: string;
  right: string;
  top: string;
  bottom: string;
  detail: string;
  lifestyle: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  size: string;
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecification[];
  dimensions: string;
  weight: string;
  otherSpecs?: ProductSpecification[];
  features: string[];
  benefits: string[];
  includedContents: string[];
  howItIsMade: string[];
  images: ProductImages;
}

export interface StoreOperatingHour {
  day: string; // 'Monday', 'Tuesday', etc.
  openTime: string; // '10:00 AM'
  closeTime: string; // '08:00 PM'
  isClosed: boolean;
}

export interface StoreInfo {
  brandName: string;
  legalOwner: string;
  businessEntity: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullText: string;
  };
  mapsEmbedUrl: string;
  mapsExternalUrl: string;
  googleReviewUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
  };
  schedule: StoreOperatingHour[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  isPlaceholder?: boolean;
}

export interface VideoShowcase {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  description: string;
  isPlaceholder?: boolean;
}
