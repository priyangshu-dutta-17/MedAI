import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Prescription } from '../models/prescription.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/prescriptions`;

  createPrescription(prescription: Partial<Prescription>): Observable<ApiResponse<Prescription>> {
    return this.http.post<ApiResponse<Prescription>>(this.apiUrl, prescription);
  }

  getPrescriptionsByPatient(patientId: string): Observable<ApiResponse<Prescription[]>> {
    return this.http.get<ApiResponse<Prescription[]>>(`${this.apiUrl}/${patientId}`);
  }
}
