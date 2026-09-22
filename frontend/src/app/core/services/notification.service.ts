import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppNotification } from '../models/notification.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/notifications`;

  private unreadCountSubject = new BehaviorSubject<number>(0);
  public unreadCount$ = this.unreadCountSubject.asObservable();

  getNotifications(): Observable<ApiResponse<AppNotification[]>> {
    return this.http.get<ApiResponse<AppNotification[]>>(this.apiUrl).pipe(
      tap(res => {
        if (res.success && res.data) {
          const unread = res.data.filter(n => !n.isRead).length;
          this.unreadCountSubject.next(unread);
        }
      })
    );
  }

  markAsRead(id: string): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => {
        const current = this.unreadCountSubject.value;
        if (current > 0) this.unreadCountSubject.next(current - 1);
      })
    );
  }
}
