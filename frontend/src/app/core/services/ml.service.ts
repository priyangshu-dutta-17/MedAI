import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  DiseasePredictionRequest,
  DiseasePredictionResult,
  DiabetesRiskRequest,
  DiabetesRiskResult,
  HeartRiskRequest,
  HeartRiskResult,
  PatientRiskRequest,
  PatientRiskResult,
  NLPClassificationResult
} from '../models/ml-prediction.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MLService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/ml`;

  predictDisease(data: DiseasePredictionRequest): Observable<ApiResponse<DiseasePredictionResult>> {
    return this.http.post<ApiResponse<DiseasePredictionResult>>(`${this.apiUrl}/disease-prediction`, data);
  }

  predictDiabetesRisk(data: DiabetesRiskRequest): Observable<ApiResponse<DiabetesRiskResult>> {
    return this.http.post<ApiResponse<DiabetesRiskResult>>(`${this.apiUrl}/diabetes-risk`, data);
  }

  predictHeartRisk(data: HeartRiskRequest): Observable<ApiResponse<HeartRiskResult>> {
    return this.http.post<ApiResponse<HeartRiskResult>>(`${this.apiUrl}/heart-risk`, data);
  }

  predictPatientRisk(data: PatientRiskRequest): Observable<ApiResponse<PatientRiskResult>> {
    return this.http.post<ApiResponse<PatientRiskResult>>(`${this.apiUrl}/patient-risk`, data);
  }

  classifyMedicalText(text: string): Observable<ApiResponse<NLPClassificationResult>> {
    return this.http.post<ApiResponse<NLPClassificationResult>>(`${this.apiUrl}/text-classification`, { text });
  }
}
