import { User } from './user.model';

export interface DoctorProfile {
  id?: string;
  userId: string;
  user?: User;
  name?: string;
  specialization: string;
  qualification: string;
  experience: number;
  licenseNumber: string;
  hospital: string;
  district: string;
  consultationFee: number;
  availableDays: string[];
  availableTime: string;
  isVerified: boolean;
  rating?: number;
  totalReviews?: number;
  bio?: string;
  createdAt?: string;
}
