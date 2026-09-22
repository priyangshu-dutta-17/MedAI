import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, AuthState, UserRole } from '../models/user.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/auth`;
  
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();
  
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('ai_med_token'));
  public token$ = this.tokenSubject.asObservable();

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  public isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }

  public hasRole(role: UserRole): boolean {
    return this.currentUserSubject.value?.role === role;
  }

  register(userData: any): Observable<ApiResponse<{ token: string; user: User }>> {
    return this.http.post<ApiResponse<{ token: string; user: User }>>(`${this.apiUrl}/register`, userData)
      .pipe(
        tap(res => {
          if (res.success && res.data) {
            this.setSession(res.data.token, res.data.user);
          }
        })
      );
  }

  login(credentials: { email: string; password: string }): Observable<ApiResponse<{ token: string; user: User }>> {
    return this.http.post<ApiResponse<{ token: string; user: User }>>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(res => {
          if (res.success && res.data) {
            this.setSession(res.data.token, res.data.user);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('ai_med_token');
    localStorage.removeItem('ai_med_user');
    this.tokenSubject.next(null);
    this.currentUserSubject.next(null);
  }

  getCurrentUserProfile(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.apiUrl}/me`).pipe(
      tap(res => {
        if (res.success && res.data) {
          localStorage.setItem('ai_med_user', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
        }
      })
    );
  }

  private setSession(token: string, user: User): void {
    localStorage.setItem('ai_med_token', token);
    localStorage.setItem('ai_med_user', JSON.stringify(user));
    this.tokenSubject.next(token);
    this.currentUserSubject.next(user);
  }

  private getUserFromStorage(): User | null {
    const raw = localStorage.getItem('ai_med_user');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
}
