import { User } from './user.model';
import { DoctorProfile } from './doctor.model';

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id?: string;
  patientId: string;
  patient?: User;
  doctorId: string;
  doctor?: DoctorProfile;
  date: string;
  time: string;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}
