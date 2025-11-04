export interface Realm {
  id: string;
  name: string;
  description: string;
  image: string;
  properties: Property[];
}

export interface Property {
  id: string;
  name: string;
  realm: string;
  description: string;
  shortDescription: string;
  rating: number;
  priceFrom: number;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mainImage: string;
  galleryImages: string[];
  features: PropertyFeature[];
  reviews: Review[];
  reviewCategories: ReviewCategory[];
  nearbyAttractions: NearbyAttraction[];
  policies: PropertyPolicies;
}

export interface PropertyFeature {
  category: string;
  description: string;
  amenities: string[];
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
  country: string;
}

export interface ReviewCategory {
  name: string;
  score: number;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
}

export interface PropertyPolicies {
  checkIn: string;
  checkOut: string;
  childrenPolicy: string;
  petsPolicy: string;
  cancellationPolicy: string;
}

export interface SearchCriteria {
  destination?: string;
  checkIn?: Date;
  checkOut?: Date;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}