export type FacilityType = 'hospital' | 'clinic' | 'pharmacy' | 'diagnostic_centre' | 'emergency';

export interface HealthcareFacility {
  id?: string;
  name: string;
  type: FacilityType;
  district: string;
  city: string;
  address: string;
  pinCode?: string;
  phone?: string;
  location?: {
    type: string;
    coordinates: [number, number]; // [lng, lat]
  };
  latitude?: number;
  longitude?: number;
  distanceKm?: number;
  specialties: string[];
  emergencyServices: boolean;
  bedCapacity?: number;
  googlePlaceId?: string;
  rating?: number;
  isActive: boolean;
}
