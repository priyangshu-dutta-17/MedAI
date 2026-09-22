import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DoctorProfile } from '../models/doctor.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/doctors`;

  getDoctors(filters?: { specialization?: string; district?: string; isVerified?: boolean }): Observable<ApiResponse<DoctorProfile[]>> {
    let params = new HttpParams();
    if (filters?.specialization) params = params.set('specialization', filters.specialization);
    if (filters?.district) params = params.set('district', filters.district);
    if (filters?.isVerified !== undefined) params = params.set('isVerified', String(filters.isVerified));

    return this.http.get<ApiResponse<DoctorProfile[]>>(this.apiUrl, { params });
  }

  getDoctorById(id: string): Observable<ApiResponse<DoctorProfile>> {
    return this.http.get<ApiResponse<DoctorProfile>>(`${this.apiUrl}/${id}`);
  }

  updateDoctorProfile(id: string, data: Partial<DoctorProfile>): Observable<ApiResponse<DoctorProfile>> {
    return this.http.put<ApiResponse<DoctorProfile>>(`${this.apiUrl}/${id}`, data);
  }
}
