import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Notification {
  id: number;
  type: 'appointment' | 'prescription' | 'health' | 'system';
  title: string;
  message: string;
  time: string;
  unread: boolean;
  icon: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="notifications-page">

      <!-- Page Header -->
      <div class="page-heading">
        <div>
          <span class="eyebrow">
            <i class="fa-solid fa-bell"></i>
            PATIENT PORTAL
          </span>

          <h1>Notifications</h1>

          <p>
            Stay updated with appointments, prescriptions, health alerts
            and important system notifications.
          </p>
        </div>

        <button
          class="mark-all-btn"
          (click)="markAllAsRead()"
          [disabled]="unreadCount === 0">
          <i class="fa-solid fa-check-double"></i>
          Mark all as read
        </button>
      </div>

      <!-- Notification Summary -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon primary">
            <i class="fa-solid fa-bell"></i>
          </div>

          <div>
            <span>Total Notifications</span>
            <strong>{{ notifications.length }}</strong>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon warning">
            <i class="fa-solid fa-envelope"></i>
          </div>

          <div>
            <span>Unread</span>
            <strong>{{ unreadCount }}</strong>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon success">
            <i class="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <span>Appointments</span>
            <strong>{{ appointmentCount }}</strong>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon danger">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>

          <div>
            <span>Health Alerts</span>
            <strong>{{ healthCount }}</strong>
          </div>
        </div>

      </div>

      <!-- Notification Card -->
      <div class="notification-card">

        <div class="notification-header">
          <div>
            <h2>
              <i class="fa-solid fa-inbox"></i>
              Recent Notifications
            </h2>
            <p>Important updates related to your healthcare.</p>
          </div>

          <span class="unread-badge" *ngIf="unreadCount > 0">
            {{ unreadCount }} unread
          </span>
        </div>

        <!-- Notification List -->
        <div class="notification-list">

          <div
            class="notification-item"
            *ngFor="let notification of notifications"
            [class.unread]="notification.unread"
            (click)="markAsRead(notification)">

            <!-- Icon -->
            <div
              class="notification-icon"
              [ngClass]="notification.type">

              <i class="fa-solid" [ngClass]="notification.icon"></i>
            </div>

            <!-- Content -->
            <div class="notification-content">

              <div class="notification-title-row">
                <h3>{{ notification.title }}</h3>

                <span class="notification-time">
                  {{ notification.time }}
                </span>
              </div>

              <p>{{ notification.message }}</p>

              <span
                class="notification-type"
                [ngClass]="notification.type">

                {{ getTypeLabel(notification.type) }}

              </span>

            </div>

            <!-- Unread Indicator -->
            <div
              class="unread-dot"
              *ngIf="notification.unread">
            </div>

          </div>

        </div>

        <!-- Empty State -->
        <div
          class="empty-state"
          *ngIf="notifications.length === 0">

          <div class="empty-icon">
            <i class="fa-solid fa-bell-slash"></i>
          </div>

          <h3>No notifications</h3>

          <p>You're all caught up. New notifications will appear here.</p>

        </div>

      </div>

      <!-- Notification Preferences -->
      <div class="preferences-card">

        <div class="preferences-icon">
          <i class="fa-solid fa-sliders"></i>
        </div>

        <div class="preferences-content">
          <h3>Notification Preferences</h3>
          <p>
            Manage how you receive appointment reminders, health alerts
            and other important updates.
          </p>
        </div>

        <button class="settings-btn">
          <i class="fa-solid fa-gear"></i>
          Manage Settings
        </button>

      </div>

    </div>
  `,

  styles: [`

    .notifications-page {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* =========================
       PAGE HEADER
    ========================= */

    .page-heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: var(--primary);
      margin-bottom: 0.45rem;
    }

    .page-heading h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-heading p {
      margin: 0.4rem 0 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .mark-all-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid var(--border-color);
      background: #fff;
      color: var(--primary);
      padding: 0.65rem 1rem;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .mark-all-btn:hover:not(:disabled) {
      background: var(--primary-light);
      border-color: var(--primary);
    }

    .mark-all-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* =========================
       SUMMARY
    ========================= */

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .summary-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      transition: all 0.2s ease;
    }

    .summary-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }

    .summary-card span {
      display: block;
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    .summary-card strong {
      display: block;
      font-size: 1.35rem;
      margin-top: 0.15rem;
      color: var(--text-main);
    }

    .summary-icon {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      flex-shrink: 0;
    }

    .summary-icon.primary {
      background: var(--primary-light);
      color: var(--primary);
    }

    .summary-icon.warning {
      background: #fff7ed;
      color: #f97316;
    }

    .summary-icon.success {
      background: #ecfdf5;
      color: #10b981;
    }

    .summary-icon.danger {
      background: #fef2f2;
      color: #ef4444;
    }

    /* =========================
       NOTIFICATION CARD
    ========================= */

    .notification-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .notification-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .notification-header h2 {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      margin: 0;
      font-size: 1rem;
      color: var(--text-main);
    }

    .notification-header h2 i {
      color: var(--primary);
    }

    .notification-header p {
      margin: 0.3rem 0 0;
      font-size: 0.78rem;
      color: var(--text-muted);
    }

    .unread-badge {
      background: var(--primary-light);
      color: var(--primary-dark);
      padding: 0.35rem 0.7rem;
      border-radius: var(--radius-full);
      font-size: 0.72rem;
      font-weight: 800;
    }

    /* =========================
       NOTIFICATION ITEM
    ========================= */

    .notification-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.15rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      position: relative;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .notification-item:last-child {
      border-bottom: none;
    }

    .notification-item:hover {
      background: #f8fafc;
    }

    .notification-item.unread {
      background: #f8fbff;
    }

    .notification-icon {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .notification-icon.appointment {
      background: #eff6ff;
      color: #2563eb;
    }

    .notification-icon.prescription {
      background: #f0fdf4;
      color: #16a34a;
    }

    .notification-icon.health {
      background: #fef2f2;
      color: #dc2626;
    }

    .notification-icon.system {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .notification-content {
      flex: 1;
      min-width: 0;
    }

    .notification-title-row {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
    }

    .notification-title-row h3 {
      margin: 0;
      font-size: 0.9rem;
      font-weight: 750;
      color: var(--text-main);
    }

    .notification-time {
      color: var(--text-light);
      font-size: 0.7rem;
      white-space: nowrap;
    }

    .notification-content p {
      margin: 0.35rem 0 0.55rem;
      color: var(--text-muted);
      font-size: 0.8rem;
      line-height: 1.5;
    }

    .notification-type {
      display: inline-block;
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-full);
      font-size: 0.65rem;
      font-weight: 800;
    }

    .notification-type.appointment {
      background: #eff6ff;
      color: #2563eb;
    }

    .notification-type.prescription {
      background: #f0fdf4;
      color: #16a34a;
    }

    .notification-type.health {
      background: #fef2f2;
      color: #dc2626;
    }

    .notification-type.system {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .unread-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary);
      margin-top: 0.45rem;
      flex-shrink: 0;
    }

    /* =========================
       PREFERENCES
    ========================= */

    .preferences-card {
      margin-top: 1.5rem;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.15rem 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .preferences-icon {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preferences-content {
      flex: 1;
    }

    .preferences-content h3 {
      margin: 0;
      font-size: 0.9rem;
    }

    .preferences-content p {
      margin: 0.25rem 0 0;
      color: var(--text-muted);
      font-size: 0.75rem;
    }

    .settings-btn {
      border: none;
      background: var(--primary);
      color: #fff;
      border-radius: var(--radius-md);
      padding: 0.65rem 1rem;
      font-weight: 700;
      font-size: 0.78rem;
      cursor: pointer;
    }

    .settings-btn:hover {
      opacity: 0.9;
    }

    /* =========================
       EMPTY STATE
    ========================= */

    .empty-state {
      text-align: center;
      padding: 4rem 1rem;
    }

    .empty-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      background: #f1f5f9;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    .empty-state h3 {
      margin: 0;
    }

    .empty-state p {
      color: var(--text-muted);
      font-size: 0.8rem;
    }

    /* =========================
       RESPONSIVE
    ========================= */

    @media (max-width: 950px) {
      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .page-heading {
        flex-direction: column;
        align-items: flex-start;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .notification-item {
        padding: 1rem;
      }

      .notification-title-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.2rem;
      }

      .preferences-card {
        align-items: flex-start;
        flex-wrap: wrap;
      }
    }

  `]
})
export class NotificationsComponent {

  notifications: Notification[] = [
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Doctor Appointment',
      message: 'Your appointment with Dr. Anirban Mukherjee is scheduled for 05 September 2026 at SSKM Hospital.',
      time: '2 hours ago',
      unread: true,
      icon: 'fa-calendar-check'
    },
    {
      id: 2,
      type: 'prescription',
      title: 'Prescription Reminder',
      message: 'Your current prescription includes Telmisartan and Atorvastatin. Remember to follow your prescribed schedule.',
      time: '5 hours ago',
      unread: true,
      icon: 'fa-prescription'
    },
    {
      id: 3,
      type: 'health',
      title: 'Health Assessment Available',
      message: 'Your latest health assessment results are now available in your patient portal.',
      time: 'Yesterday',
      unread: true,
      icon: 'fa-heart-pulse'
    },
    {
      id: 4,
      type: 'system',
      title: 'Medical Records Updated',
      message: 'A new medical record has been added to your electronic health record.',
      time: '2 days ago',
      unread: false,
      icon: 'fa-file-medical'
    },
    {
      id: 5,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'You have an upcoming healthcare appointment. Please arrive a few minutes early.',
      time: '3 days ago',
      unread: false,
      icon: 'fa-clock'
    }
  ];

  get unreadCount(): number {
    return this.notifications.filter(n => n.unread).length;
  }

  get appointmentCount(): number {
    return this.notifications.filter(n => n.type === 'appointment').length;
  }

  get healthCount(): number {
    return this.notifications.filter(n => n.type === 'health').length;
  }

  markAsRead(notification: Notification): void {
    notification.unread = false;
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.unread = false;
    });
  }

  getTypeLabel(type: Notification['type']): string {
    switch (type) {
      case 'appointment':
        return 'Appointment';

      case 'prescription':
        return 'Prescription';

      case 'health':
        return 'Health Alert';

      case 'system':
        return 'System';

      default:
        return 'Notification';
    }
  }
}