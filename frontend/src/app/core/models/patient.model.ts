import { User } from './user.model';

export interface PatientAddress {
  street: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;
}

export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
}

export interface PatientProfile {
  id?: string;
  userId: string;
  user?: User;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  bloodGroup?: string;
  height?: number;
  weight?: number;
  address?: PatientAddress;
  emergencyContact?: EmergencyContact;
  allergies?: string[];
  existingConditions?: string[];
  createdAt?: string;
  updatedAt?: string;
}
