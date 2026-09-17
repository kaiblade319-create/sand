export interface StayPackage {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  pricePerNight: string;
  priceUnit: string;
  roomRateNote: string;
  extraBedNote?: string;
  mealsIncluded?: string[];
  inclusionsNote?: string;
  checkIn: string;
  checkOut: string;
  ctaText: string;
}

export interface Accommodation {
  id: string;
  category: 'garden' | 'pool' | 'couples' | 'family';
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  rateSubtitle: string;
  size: string;
  bed: string;
  capacity: string;
  unitsAvailable?: string;
  description: string;
  aboutParagraphs?: string[];
  features?: string[];
  highlights: string[];
  amenities: string[];
  moreAmenitiesCount: number;
  allAmenities: string[];
  galleryImages?: string[];
  packages?: StayPackage[];
  image: string;
  alt: string;
}

export interface DestinationSpot {
  id: string;
  title: string;
  distance: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'grounds' | 'suites' | 'gatherings';
  subtitle: string;
  image: string;
  alt: string;
  span: string;
}
