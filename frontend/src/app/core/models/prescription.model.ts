export interface PrescribedMedicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
}

export interface Prescription {
  id?: string;
  patientId: string;
  doctorId: string;
  doctorName?: string;
  appointmentId?: string;
  medicines: PrescribedMedicine[];
  instructions: string;
  date: string;
  createdAt?: string;
}
