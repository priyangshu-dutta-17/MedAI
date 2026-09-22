import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HealthcareFacility, FacilityType } from '../models/healthcare-facility.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/locations`;

  // 23 Districts of West Bengal
  public readonly westBengalDistricts: string[] = [
    'Kolkata', 'North 24 Parganas', 'South 24 Parganas', 'Howrah', 'Hooghly',
    'Purba Bardhaman', 'Paschim Bardhaman', 'Birbhum', 'Nadia', 'Murshidabad',
    'Malda', 'Uttar Dinajpur', 'Dakshin Dinajpur', 'Darjeeling', 'Kalimpong',
    'Jalpaiguri', 'Alipurduar', 'Cooch Behar', 'Purba Medinipur', 'Paschim Medinipur',
    'Jhargram', 'Bankura', 'Purulia'
  ];

  getFacilities(filters?: { district?: string; city?: string; type?: FacilityType; specialty?: string }): Observable<ApiResponse<HealthcareFacility[]>> {
    let params = new HttpParams();
    if (filters?.district) params = params.set('district', filters.district);
    if (filters?.city) params = params.set('city', filters.city);
    if (filters?.type) params = params.set('type', filters.type);
    if (filters?.specialty) params = params.set('specialty', filters.specialty);

    return this.http.get<ApiResponse<HealthcareFacility[]>>(this.apiUrl, { params });
  }

  getNearbyFacilities(lat: number, lng: number, radiusKm: number = 10, type?: FacilityType): Observable<ApiResponse<HealthcareFacility[]>> {
    let params = new HttpParams()
      .set('lat', String(lat))
      .set('lng', String(lng))
      .set('radiusKm', String(radiusKm));
    if (type) params = params.set('type', type);

    return this.http.get<ApiResponse<HealthcareFacility[]>>(`${this.apiUrl}/nearby`, { params });
  }
}
