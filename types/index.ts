export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  rating: number;
  location: {
    latitude: number;
    longitude: number;
  } | null;
  types: string[];
  primaryType: string;
  phoneNumber: string;
  websiteUri: string | null;
  editorialSummary: string | null;
  googleMapsUri: string | null;
  photo: {
    name: string;
    widthPx: number;
    heightPx: number;
  } | null;
  priceLevel: number;
}

export interface RecommendationRequest {
  lat: number;
  lng: number;
  radius: number;
  primaryTypes: string[];
}