import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MedicalRecord } from '../models/medical-record.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/medical-records`;

  createRecord(record: Partial<MedicalRecord>): Observable<ApiResponse<MedicalRecord>> {
    return this.http.post<ApiResponse<MedicalRecord>>(this.apiUrl, record);
  }

  getRecordsByPatient(patientId: string): Observable<ApiResponse<MedicalRecord[]>> {
    return this.http.get<ApiResponse<MedicalRecord[]>>(`${this.apiUrl}/${patientId}`);
  }
}
