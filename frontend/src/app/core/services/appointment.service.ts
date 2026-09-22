import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Appointment } from '../models/appointment.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/appointments`;

  bookAppointment(data: Partial<Appointment>): Observable<ApiResponse<Appointment>> {
    return this.http.post<ApiResponse<Appointment>>(this.apiUrl, data);
  }

  getAppointments(role?: string, id?: string): Observable<ApiResponse<Appointment[]>> {
    let params = new HttpParams();
    if (role && id) params = params.set(role === 'doctor' ? 'doctorId' : 'patientId', id);
    return this.http.get<ApiResponse<Appointment[]>>(this.apiUrl, { params });
  }

  getAppointmentById(id: string): Observable<ApiResponse<Appointment>> {
    return this.http.get<ApiResponse<Appointment>>(`${this.apiUrl}/${id}`);
  }

  updateAppointmentStatus(id: string, status: string, notes?: string): Observable<ApiResponse<Appointment>> {
    return this.http.put<ApiResponse<Appointment>>(`${this.apiUrl}/${id}`, { status, notes });
  }

  cancelAppointment(id: string): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/${id}`);
  }
}
