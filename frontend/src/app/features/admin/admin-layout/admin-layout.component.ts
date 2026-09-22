import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-shell">

      <!-- ================= SIDEBAR ================= -->
      <aside class="admin-sidebar">

        <div class="sidebar-brand">
          <div class="brand-icon">
            <i class="fa-solid fa-shield-halved"></i>
          </div>

          <div class="brand-content">
            <span class="brand-title">AI Medical</span>
            <span class="admin-badge">
              <i class="fa-solid fa-lock"></i>
              Admin Portal
            </span>
          </div>
        </div>

        <nav class="sidebar-nav">

          <div class="nav-section-title">
            ADMINISTRATION
          </div>

          <a
            routerLink="/admin/dashboard"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-chart-pie"></i>
            </span>
            <span>Admin Dashboard</span>
          </a>

          <a
            routerLink="/admin/users"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-users-gear"></i>
            </span>
            <span>User Management</span>
          </a>

          <a
            routerLink="/admin/verification"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-user-check"></i>
            </span>
            <span>Doctor Verification</span>
          </a>

          <a
            routerLink="/admin/facilities"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-hospital"></i>
            </span>
            <span>Healthcare Facilities</span>
          </a>

          <a
            routerLink="/admin/appointments"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-calendar-check"></i>
            </span>
            <span>Appointment Monitoring</span>
          </a>

          <a
            routerLink="/admin/statistics"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">
              <i class="fa-solid fa-brain"></i>
            </span>
            <span>ML Prediction Stats</span>
          </a>

        </nav>

        <!-- SIDEBAR FOOTER -->
        <div class="sidebar-footer">

          <div class="system-status">
            <span class="status-dot"></span>

            <div>
              <strong>System Online</strong>
              <small>All services operational</small>
            </div>
          </div>

          <button
            class="logout-button"
            (click)="logout()"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </button>

        </div>

      </aside>


      <!-- ================= MAIN AREA ================= -->
      <main class="admin-main">

        <!-- TOP BAR -->
        <header class="admin-topbar">

          <div class="topbar-left">
            <h3>System Administration</h3>

            <span class="telemetry-badge">
              <span class="telemetry-dot"></span>
              State Telemetry Active
            </span>
          </div>

          <div
            class="admin-user"
            *ngIf="authService.currentUser$ | async as user"
          >

            <div class="user-details">
              <strong>{{ user.name }}</strong>
              <span>Administrator</span>
            </div>

            <div class="user-avatar">
              <i class="fa-solid fa-user-shield"></i>
            </div>

          </div>

        </header>


        <!-- PAGE CONTENT -->
        <section class="admin-content">

          <router-outlet></router-outlet>

        </section>

      </main>

    </div>
  `,

  styles: [`

    /* =====================================================
       GLOBAL ADMIN SHELL
       ===================================================== */

    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .admin-shell {
      width: 100%;
      min-height: 100vh;
      display: flex;
      background: var(--bg-main, #f6faf9);
      overflow-x: hidden;
    }


    /* =====================================================
       SIDEBAR
       ===================================================== */

    .admin-sidebar {
      width: 322px;
      min-width: 322px;
      height: 100vh;

      position: fixed;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;

      background: #ffffff;
      border-right: 1px solid #e2e8f0;

      z-index: 1000;

      overflow: hidden;
    }


    /* =====================================================
       BRAND
       ===================================================== */

    .sidebar-brand {
      min-height: 145px;
      padding: 24px 24px;

      display: flex;
      align-items: center;
      gap: 16px;

      border-bottom: 1px solid #edf2f4;
      flex-shrink: 0;
    }

    .brand-icon {
      width: 50px;
      height: 50px;

      border-radius: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #e8f8f6;
      color: #0faaa0;

      font-size: 22px;
      flex-shrink: 0;
    }

    .brand-content {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .brand-title {
      font-size: 21px;
      font-weight: 800;
      color: #062b3d;
      line-height: 1;
    }

    .admin-badge {
      width: fit-content;

      display: inline-flex;
      align-items: center;
      gap: 5px;

      padding: 5px 10px;

      border-radius: 999px;

      background: #fff4d8;
      color: #a66a00;

      font-size: 12px;
      font-weight: 700;
    }


    /* =====================================================
       NAVIGATION
       ===================================================== */

    .sidebar-nav {
      flex: 1;

      padding: 22px 18px;

      overflow-y: auto;
      overflow-x: hidden;
    }

    .nav-section-title {
      padding: 0 12px 14px;

      color: #94a3b8;

      font-size: 12px;
      font-weight: 800;

      letter-spacing: 0.08em;
    }

    .nav-item {
      width: 100%;
      min-height: 58px;

      display: flex;
      align-items: center;
      gap: 13px;

      padding: 9px 12px;

      margin-bottom: 6px;

      border-radius: 12px;

      color: #607d8b;

      text-decoration: none;

      font-size: 16px;
      font-weight: 650;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;

      white-space: nowrap;
    }

    .nav-item:hover {
      background: #f0f9f8;
      color: #078f89;
      transform: translateX(2px);
    }

    .nav-item.active {
      background: #e1f6f4;
      color: #087f7b;
    }

    .nav-icon {
      width: 40px;
      height: 40px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      background: #f7fafb;

      color: #6d8795;

      font-size: 16px;
    }

    .nav-item.active .nav-icon {
      background: #ffffff;
      color: #0da49d;
    }


    /* =====================================================
       SIDEBAR FOOTER
       ===================================================== */

    .sidebar-footer {
      padding: 18px;

      border-top: 1px solid #edf2f4;

      flex-shrink: 0;
    }

    .system-status {
      display: flex;
      align-items: center;
      gap: 11px;

      padding: 14px;

      margin-bottom: 14px;

      border-radius: 13px;

      background: #f7fafc;
    }

    .status-dot {
      width: 11px;
      height: 11px;

      border-radius: 50%;

      background: #16b364;

      box-shadow: 0 0 0 5px #dcfce7;

      flex-shrink: 0;
    }

    .system-status strong {
      display: block;

      color: #18384a;

      font-size: 14px;
    }

    .system-status small {
      display: block;

      margin-top: 3px;

      color: #94a3b8;

      font-size: 12px;
    }

    .logout-button {
      width: 100%;
      height: 54px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      border: 1px solid #dce5eb;
      border-radius: 12px;

      background: #ffffff;

      color: #17384b;

      font-size: 15px;
      font-weight: 700;

      cursor: pointer;

      transition: all 0.2s ease;
    }

    .logout-button:hover {
      background: #fff5f5;
      border-color: #fecaca;
      color: #dc2626;
    }


    /* =====================================================
       MAIN CONTENT
       ===================================================== */

    .admin-main {
      width: calc(100% - 322px);
      min-width: 0;

      margin-left: 322px;

      min-height: 100vh;

      display: flex;
      flex-direction: column;

      overflow-x: hidden;
    }


    /* =====================================================
       TOPBAR
       ===================================================== */

    .admin-topbar {
      width: 100%;
      height: 94px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 34px;

      background: #ffffff;

      border-bottom: 1px solid #e5edf0;
    }

    .topbar-left {
      display: flex;
      align-items: center;
      gap: 16px;

      min-width: 0;
    }

    .topbar-left h3 {
      margin: 0;

      color: #082d40;

      font-size: 20px;
      font-weight: 750;
    }

    .telemetry-badge {
      display: inline-flex;
      align-items: center;
      gap: 7px;

      padding: 7px 12px;

      border-radius: 999px;

      background: #fff8e8;

      color: #a66a00;

      font-size: 12px;
      font-weight: 700;
    }

    .telemetry-dot {
      width: 7px;
      height: 7px;

      border-radius: 50%;

      background: #f59e0b;
    }


    /* =====================================================
       USER
       ===================================================== */

    .admin-user {
      display: flex;
      align-items: center;
      gap: 12px;

      flex-shrink: 0;
    }

    .user-details {
      text-align: right;
    }

    .user-details strong {
      display: block;

      color: #17384b;

      font-size: 14px;
    }

    .user-details span {
      display: block;

      margin-top: 3px;

      color: #94a3b8;

      font-size: 12px;
    }

    .user-avatar {
      width: 42px;
      height: 42px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #e9e6ff;

      color: #6546d8;

      font-size: 17px;
    }


    /* =====================================================
       CONTENT BODY
       ===================================================== */

    .admin-content {
      width: 100%;
      min-width: 0;

      flex: 1;

      padding: 32px;

      overflow-x: hidden;
    }

    /*
      IMPORTANT:
      Prevent Angular child pages from becoming wider
      than the available content area.
    */

    .admin-content > * {
      display: block;
      width: 100%;
      max-width: 100%;
      min-width: 0;
    }


    /* =====================================================
       RESPONSIVE
       ===================================================== */

    @media (max-width: 1200px) {

      .admin-sidebar {
        width: 280px;
        min-width: 280px;
      }

      .admin-main {
        width: calc(100% - 280px);
        margin-left: 280px;
      }

      .admin-content {
        padding: 24px;
      }

      .nav-item {
        font-size: 14px;
      }

    }


    @media (max-width: 900px) {

      .admin-sidebar {
        width: 240px;
        min-width: 240px;
      }

      .admin-main {
        width: calc(100% - 240px);
        margin-left: 240px;
      }

      .admin-topbar {
        padding: 0 20px;
      }

      .admin-content {
        padding: 20px;
      }

      .telemetry-badge {
        display: none;
      }

    }

  `]
})
export class AdminLayoutComponent {

  authService = inject(AuthService);

  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}