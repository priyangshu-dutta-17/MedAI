import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AIService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/ai`;

  askMedicalAssistant(question: string, history: AIMessage[] = []): Observable<ApiResponse<{ answer: string; disclaimer: string }>> {
    return this.http.post<ApiResponse<{ answer: string; disclaimer: string }>>(`${this.apiUrl}/medical-assistant`, {
      question,
      conversationHistory: history
    });
  }
}
