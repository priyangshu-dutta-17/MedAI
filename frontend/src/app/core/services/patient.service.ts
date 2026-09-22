import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PatientProfile } from '../models/patient.model';
import { MedicalRecord } from '../models/medical-record.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/patients`;

  getPatientProfile(id: string): Observable<ApiResponse<PatientProfile>> {
    return this.http.get<ApiResponse<PatientProfile>>(`${this.apiUrl}/${id}`);
  }

  updatePatientProfile(id: string, data: Partial<PatientProfile>): Observable<ApiResponse<PatientProfile>> {
    return this.http.put<ApiResponse<PatientProfile>>(`${this.apiUrl}/${id}`, data);
  }

  getPatientRecords(id: string): Observable<ApiResponse<MedicalRecord[]>> {
    return this.http.get<ApiResponse<MedicalRecord[]>>(`${this.apiUrl}/${id}/records`);
  }
}
