import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="dashboard-shell">

      <!-- ================= SIDEBAR ================= -->
      <aside class="sidebar">

        <!-- Brand -->
        <div class="sidebar-brand">

          <div class="brand-logo">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>

          <div class="brand-info">
            <span class="brand-title">AI Medical</span>
            <span class="brand-subtitle">PATIENT PORTAL</span>
          </div>

        </div>


        <!-- Patient -->
        <div class="patient-mini">

          <div class="patient-avatar">
            <i class="fa-solid fa-user"></i>
          </div>

          <div
            class="patient-details"
            *ngIf="authService.currentUser$ | async as user"
          >
            <strong>{{ user.name }}</strong>
            <span>Patient</span>
          </div>

        </div>


        <!-- Navigation -->
        <nav class="sidebar-nav">

          <!-- MAIN -->
          <div class="nav-group-title">
            MAIN
          </div>

          <a
            routerLink="/patient/dashboard"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-item"
          >
            <i class="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </a>

          <a
            routerLink="/patient/profile"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-user-circle"></i>
            <span>My Profile</span>
          </a>


          <!-- AI & ML -->
          <div class="nav-group-title">
            AI & ML DIAGNOSTICS
          </div>

          <a
            routerLink="/patient/disease-prediction"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-virus"></i>
            <span>Disease Predictor</span>
          </a>

          <a
            routerLink="/patient/diabetes-risk"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-droplet"></i>
            <span>Diabetes Risk</span>
          </a>

          <a
            routerLink="/patient/heart-risk"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-heart-pulse"></i>
            <span>Heart Disease Risk</span>
          </a>

          <a
            routerLink="/patient/patient-risk"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-chart-line"></i>
            <span>Patient Risk Score</span>
          </a>

          <a
            routerLink="/patient/ai-assistant"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-robot"></i>
            <span>AI Health Assistant</span>
          </a>


          <!-- CLINICAL SERVICES -->
          <div class="nav-group-title">
            CLINICAL SERVICES
          </div>

          <a
            routerLink="/patient/appointments"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-calendar-check"></i>
            <span>Appointments</span>
          </a>

          <a
            routerLink="/patient/medical-records"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-file-medical"></i>
            <span>Medical Records</span>
          </a>

          <a
            routerLink="/patient/prescriptions"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-prescription"></i>
            <span>Prescriptions</span>
          </a>

          <a
            routerLink="/patient/healthcare-locator"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-map-location-dot"></i>
            <span>WB Healthcare Locator</span>
          </a>

          <a
            routerLink="/patient/notifications"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-bell"></i>
            <span>Notifications</span>
          </a>

        </nav>


        <!-- Logout -->
        <div class="sidebar-footer">

          <button
            type="button"
            (click)="logout()"
            class="logout-button"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </button>

        </div>

      </aside>



      <!-- ================= MAIN AREA ================= -->
      <main class="main-wrapper">

        <!-- TOPBAR -->
        <header class="topbar">

          <div class="topbar-left">

            <div>
              <h2>Patient Health Portal</h2>
              <span>
                <i class="fa-solid fa-location-dot"></i>
                West Bengal Healthcare Network
              </span>
            </div>

          </div>


          <div
            class="topbar-user"
            *ngIf="authService.currentUser$ | async as user"
          >

            <div class="user-text">
              <strong>{{ user.name }}</strong>
              <span>{{ user.email }}</span>
            </div>

            <div class="user-avatar">
              <i class="fa-solid fa-user"></i>
            </div>

          </div>

        </header>



        <!-- PAGE CONTENT -->
        <section class="content-body">

          <router-outlet></router-outlet>

        </section>

      </main>

    </div>
  `,

  styles: [`

    /* =====================================================
       MAIN LAYOUT
    ===================================================== */

    .dashboard-shell {
      width: 100%;
      min-height: 100vh;
      background: var(--bg-main);
      overflow-x: hidden;
    }


    /* =====================================================
       SIDEBAR
    ===================================================== */

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;

      width: 280px;

      background: #ffffff;

      border-right: 1px solid #e6eeee;

      display: flex;
      flex-direction: column;

      z-index: 1000;

      overflow: hidden;
    }


    /* =====================================================
       BRAND
    ===================================================== */

    .sidebar-brand {
      height: 82px;

      display: flex;
      align-items: center;

      gap: 12px;

      padding: 0 22px;

      border-bottom: 1px solid #edf2f2;

      flex-shrink: 0;
    }

    .brand-logo {
      width: 42px;
      height: 42px;

      border-radius: 13px;

      background: linear-gradient(
        135deg,
        #0d9488,
        #18b7aa
      );

      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 19px;

      box-shadow: 0 8px 20px rgba(13, 148, 136, 0.18);
    }

    .brand-info {
      display: flex;
      flex-direction: column;
    }

    .brand-title {
      font-size: 19px;
      font-weight: 800;

      color: #123f3d;

      line-height: 1.1;
    }

    .brand-subtitle {
      margin-top: 4px;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: 0.12em;

      color: #8aa3a3;
    }


    /* =====================================================
       PATIENT MINI PROFILE
    ===================================================== */

    .patient-mini {
      display: flex;
      align-items: center;

      gap: 12px;

      padding: 18px 20px;

      margin: 0 10px;

      border-bottom: 1px solid #edf2f2;
    }

    .patient-avatar {
      width: 40px;
      height: 40px;

      border-radius: 12px;

      background: #e8f8f5;

      color: #0d9488;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;
    }

    .patient-details {
      min-width: 0;

      display: flex;
      flex-direction: column;
    }

    .patient-details strong {
      color: #173f3d;

      font-size: 14px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .patient-details span {
      margin-top: 3px;

      font-size: 11px;

      color: #8aa3a3;
    }


    /* =====================================================
       NAVIGATION
    ===================================================== */

    .sidebar-nav {
      flex: 1;

      overflow-y: auto;
      overflow-x: hidden;

      padding: 14px 12px 12px;

      scrollbar-width: thin;
      scrollbar-color: #c7dddd transparent;
    }

    .sidebar-nav::-webkit-scrollbar {
      width: 5px;
    }

    .sidebar-nav::-webkit-scrollbar-track {
      background: transparent;
    }

    .sidebar-nav::-webkit-scrollbar-thumb {
      background: #c7dddd;
      border-radius: 10px;
    }


    .nav-group-title {
      padding: 13px 12px 7px;

      font-size: 10px;

      font-weight: 800;

      letter-spacing: 0.1em;

      color: #91a8a8;
    }


    .nav-item {
      width: 100%;

      display: flex;
      align-items: center;

      gap: 13px;

      min-height: 46px;

      padding: 0 13px;

      margin-bottom: 3px;

      border-radius: 12px;

      color: #718b8c;

      text-decoration: none;

      font-size: 14px;

      font-weight: 600;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    .nav-item i {
      width: 20px;

      text-align: center;

      font-size: 15px;

      flex-shrink: 0;
    }

    .nav-item:hover {
      background: #f0faf8;

      color: #0d9488;

      transform: translateX(2px);
    }

    .nav-item.active {
      background: linear-gradient(
        135deg,
        #11b5a8,
        #14b8a6
      );

      color: #ffffff;

      box-shadow:
        0 8px 20px rgba(13, 148, 136, 0.18);
    }

    .nav-item.active i {
      color: #ffffff;
    }


    /* =====================================================
       SIDEBAR FOOTER
    ===================================================== */

    .sidebar-footer {
      padding: 14px;

      border-top: 1px solid #edf2f2;

      background: #ffffff;

      flex-shrink: 0;
    }

    .logout-button {
      width: 100%;

      height: 46px;

      border: none;

      border-radius: 12px;

      background: #f5f6f6;

      color: #334949;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 10px;

      font-size: 14px;

      font-weight: 700;

      cursor: pointer;

      transition: all 0.2s ease;
    }

    .logout-button:hover {
      background: #fff0f0;

      color: #d9534f;
    }


    /* =====================================================
       MAIN WRAPPER
    ===================================================== */

    .main-wrapper {
      margin-left: 280px;

      width: calc(100% - 280px);

      min-width: 0;

      min-height: 100vh;

      display: flex;
      flex-direction: column;

      overflow-x: hidden;
    }


    /* =====================================================
       TOPBAR
    ===================================================== */

    .topbar {
      position: sticky;

      top: 0;

      z-index: 900;

      height: 82px;

      min-height: 82px;

      background: rgba(255, 255, 255, 0.96);

      backdrop-filter: blur(12px);

      border-bottom: 1px solid #e7eeee;

      padding: 0 30px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      flex-shrink: 0;
    }

    .topbar-left h2 {
      margin: 0;

      color: #163f3d;

      font-size: 19px;

      font-weight: 800;
    }

    .topbar-left span {
      display: block;

      margin-top: 5px;

      color: #8ba2a2;

      font-size: 11px;

      font-weight: 600;
    }

    .topbar-left span i {
      color: #0d9488;

      margin-right: 4px;
    }


    /* =====================================================
       USER INFO
    ===================================================== */

    .topbar-user {
      display: flex;
      align-items: center;

      gap: 12px;
    }

    .user-text {
      display: flex;
      flex-direction: column;

      text-align: right;
    }

    .user-text strong {
      color: #183f3d;

      font-size: 13px;
    }

    .user-text span {
      margin-top: 3px;

      color: #91a3a3;

      font-size: 10px;
    }

    .user-avatar {
      width: 40px;
      height: 40px;

      border-radius: 50%;

      background: #e8f7f5;

      color: #0d9488;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #d8efeb;
    }


    /* =====================================================
       CONTENT
    ===================================================== */

    .content-body {
      width: 100%;

      min-width: 0;

      flex: 1;

      padding: 30px;

      box-sizing: border-box;

      overflow-x: hidden;
    }


    /* =====================================================
       TABLET
    ===================================================== */

    @media (max-width: 1100px) {

      .sidebar {
        width: 240px;
      }

      .main-wrapper {
        margin-left: 240px;

        width: calc(100% - 240px);
      }

      .content-body {
        padding: 24px;
      }

      .topbar {
        padding: 0 24px;
      }

    }


    /* =====================================================
       MOBILE
    ===================================================== */

    @media (max-width: 768px) {

      .sidebar {
        width: 72px;
      }

      .brand-info,
      .patient-details,
      .nav-group-title,
      .nav-item span,
      .logout-button span {
        display: none;
      }

      .sidebar-brand {
        height: 72px;

        padding: 0;

        justify-content: center;
      }

      .brand-logo {
        width: 42px;
        height: 42px;
      }

      .patient-mini {
        justify-content: center;

        margin: 0;

        padding: 14px 0;
      }

      .sidebar-nav {
        padding: 12px 9px;
      }

      .nav-item {
        justify-content: center;

        padding: 0;

        min-height: 44px;
      }

      .nav-item i {
        width: auto;

        font-size: 17px;
      }

      .sidebar-footer {
        padding: 10px;
      }

      .logout-button {
        height: 44px;
      }

      .main-wrapper {
        margin-left: 72px;

        width: calc(100% - 72px);
      }

      .topbar {
        height: 72px;

        min-height: 72px;

        padding: 0 16px;
      }

      .topbar-left h2 {
        font-size: 15px;
      }

      .topbar-left span {
        font-size: 9px;
      }

      .user-text {
        display: none;
      }

      .content-body {
        padding: 18px;
      }

    }


    /* =====================================================
       VERY SMALL DEVICES
    ===================================================== */

    @media (max-width: 480px) {

      .sidebar {
        width: 64px;
      }

      .main-wrapper {
        margin-left: 64px;

        width: calc(100% - 64px);
      }

      .topbar {
        padding: 0 12px;
      }

      .content-body {
        padding: 14px;
      }

    }

  `]
})
export class PatientLayoutComponent {

  authService = inject(AuthService);

  private router = inject(Router);

  logout(): void {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}