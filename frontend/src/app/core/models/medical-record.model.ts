export interface MedicalRecord {
  id?: string;
  patientId: string;
  doctorId: string;
  doctorName?: string;
  diagnosis: string;
  symptoms: string[];
  reports?: string[];
  notes?: string;
  date: string;
  createdAt?: string;
}
