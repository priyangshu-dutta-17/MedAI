import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-shell">

      <!-- ================= SIDEBAR ================= -->
      <aside class="sidebar">

        <!-- Brand -->
        <div class="sidebar-brand">
          <div class="brand-icon">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div class="brand-info">
            <span class="brand-title">AI Medical</span>
            <span class="doctor-badge">Doctor Portal</span>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="sidebar-nav">

          <div class="nav-group-title">
            CLINICAL OPS
          </div>

          <a
            routerLink="/doctor/dashboard"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-item"
          >
            <i class="fa-solid fa-gauge-high"></i>
            <span>Doctor Dashboard</span>
          </a>

          <a
            routerLink="/doctor/profile"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-id-card"></i>
            <span>Doctor Profile & Fees</span>
          </a>

          <a
            routerLink="/doctor/patients"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-users"></i>
            <span>Patient Roster</span>
          </a>

          <a
            routerLink="/doctor/appointments"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-calendar-days"></i>
            <span>Appointments</span>
          </a>

          <a
            routerLink="/doctor/records"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-file-medical"></i>
            <span>Add Medical Records</span>
          </a>

          <a
            routerLink="/doctor/prescriptions"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-prescription-bottle-medical"></i>
            <span>Create Prescriptions</span>
          </a>

          <a
            routerLink="/doctor/history"
            routerLinkActive="active"
            class="nav-item"
          >
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>Consultation History</span>
          </a>

        </nav>

        <!-- Logout -->
        <div class="sidebar-footer">
          <button
            type="button"
            class="logout-btn"
            (click)="logout()"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </button>
        </div>

      </aside>


      <!-- ================= MAIN AREA ================= -->
      <main class="main-wrapper">

        <!-- Top Header -->
        <header class="topbar">

          <div class="topbar-left">
            <div>
              <h3 class="page-title">
                Doctor Consultation Center
              </h3>

              <span class="region-badge">
                West Bengal Healthcare
              </span>
            </div>
          </div>

          <div
            class="user-info"
            *ngIf="authService.currentUser$ | async as user"
          >

            <div class="user-details">
              <strong>{{ user.name }}</strong>
              <span>{{ user.email }}</span>
            </div>

            <div class="avatar">
              <i class="fa-solid fa-user-doctor"></i>
            </div>

          </div>

        </header>


        <!-- Page Content -->
        <section class="content-body">
          <router-outlet></router-outlet>
        </section>

      </main>

    </div>
  `,

  styles: [`

    /* =========================================
       MAIN SHELL
    ========================================= */

    .dashboard-shell {
      display: flex;
      min-height: 100vh;
      width: 100%;
      background: var(--bg-main);
      overflow-x: hidden;
    }


    /* =========================================
       SIDEBAR
    ========================================= */

    .sidebar {
      width: 256px;
      min-width: 256px;

      background: #ffffff;
      border-right: 1px solid var(--border-color);

      display: flex;
      flex-direction: column;

      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;

      z-index: 100;

      box-sizing: border-box;
    }


    /* =========================================
       BRAND
    ========================================= */

    .sidebar-brand {
      min-height: 155px;

      padding: 1.35rem 1.45rem;

      border-bottom: 1px solid var(--border-color);

      box-sizing: border-box;
    }

    .brand-icon {
      color: #083b4c;
      font-size: 1.7rem;

      margin-bottom: 0.35rem;
    }

    .brand-info {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }

    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      color: #0b2430;
      line-height: 1;
    }

    .doctor-badge {
      width: fit-content;

      background: #dcfce7;
      color: #087443;

      padding: 0.45rem 0.75rem;

      border-radius: 999px;

      font-size: 0.78rem;
      font-weight: 700;
    }


    /* =========================================
       NAVIGATION
    ========================================= */

    .sidebar-nav {
      flex: 1;

      padding: 1rem 0.85rem;

      overflow-y: auto;
      overflow-x: hidden;

      box-sizing: border-box;
    }

    .nav-group-title {
      padding: 0.7rem 0.6rem 0.55rem;

      color: var(--text-light);

      font-size: 0.7rem;
      font-weight: 800;

      letter-spacing: 0.07em;
    }

    .nav-item {
      width: 100%;
      min-height: 46px;

      display: flex;
      align-items: center;

      gap: 0.85rem;

      padding: 0.7rem 0.7rem;

      margin-bottom: 0.2rem;

      box-sizing: border-box;

      border-radius: 10px;

      color: #718b96;

      text-decoration: none;

      font-size: 0.88rem;
      font-weight: 600;

      transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
    }

    .nav-item i {
      width: 22px;

      flex-shrink: 0;

      text-align: center;

      font-size: 1rem;
    }

    .nav-item span {
      white-space: nowrap;
    }

    .nav-item:hover {
      background: #f0fdfa;
      color: #087f78;

      transform: translateX(2px);
    }

    .nav-item.active {
      background: #dff8f2;
      color: #087f78;

      font-weight: 700;
    }


    /* =========================================
       SIDEBAR FOOTER
    ========================================= */

    .sidebar-footer {
      padding: 1rem;

      border-top: 1px solid var(--border-color);

      background: #ffffff;
    }

    .logout-btn {
      width: 100%;

      height: 54px;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.7rem;

      border: none;
      border-radius: 14px;

      background: #f1f1f1;

      color: #111111;

      font-size: 0.95rem;
      font-weight: 700;

      cursor: pointer;

      transition: all 0.2s ease;
    }

    .logout-btn:hover {
      background: #fee2e2;
      color: #dc2626;
    }


    /* =========================================
       MAIN WRAPPER
       
       IMPORTANT:
       Sidebar = 256px
       Main margin = 256px
    ========================================= */

    .main-wrapper {
      margin-left: 256px;

      width: calc(100% - 256px);
      min-width: 0;

      min-height: 100vh;

      display: flex;
      flex-direction: column;

      box-sizing: border-box;
    }


    /* =========================================
       TOPBAR
    ========================================= */

    .topbar {
      width: 100%;
      height: 72px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 2rem;

      background: #ffffff;

      border-bottom: 1px solid var(--border-color);

      box-sizing: border-box;
    }

    .topbar-left {
      display: flex;
      align-items: center;
    }

    .page-title {
      margin: 0;

      font-size: 1.05rem;
      font-weight: 700;

      color: #0b2430;
    }

    .region-badge {
      display: inline-block;

      margin-top: 0.2rem;

      color: #708994;

      font-size: 0.72rem;
      font-weight: 600;
    }


    /* =========================================
       USER INFO
    ========================================= */

    .user-info {
      display: flex;
      align-items: center;

      gap: 0.8rem;
    }

    .user-details {
      display: flex;
      flex-direction: column;

      text-align: right;
    }

    .user-details strong {
      color: var(--text-main);

      font-size: 0.85rem;
    }

    .user-details span {
      color: var(--text-muted);

      font-size: 0.72rem;
    }

    .avatar {
      width: 40px;
      height: 40px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #dff8f2;
      color: #087f78;

      font-size: 1rem;
    }


    /* =========================================
       CONTENT
    ========================================= */

    .content-body {
      flex: 1;

      width: 100%;

      padding: 2rem;

      box-sizing: border-box;

      min-width: 0;

      overflow-x: hidden;
    }


    /* =========================================
       TABLE SAFETY
    ========================================= */

    .content-body table {
      max-width: 100%;
    }

    .content-body .table-responsive {
      max-width: 100%;
      overflow-x: auto;
    }


    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 1100px) {

      .sidebar {
        width: 230px;
        min-width: 230px;
      }

      .main-wrapper {
        margin-left: 230px;
        width: calc(100% - 230px);
      }

      .content-body {
        padding: 1.5rem;
      }

    }


    @media (max-width: 800px) {

      .sidebar {
        width: 72px;
        min-width: 72px;
      }

      .brand-title,
      .doctor-badge,
      .nav-group-title,
      .nav-item span,
      .logout-btn span {
        display: none;
      }

      .sidebar-brand {
        display: flex;
        justify-content: center;
        padding: 1.25rem 0.5rem;
      }

      .brand-icon {
        margin: 0;
      }

      .nav-item {
        justify-content: center;
        padding: 0.75rem 0;
      }

      .sidebar-footer {
        padding: 0.7rem;
      }

      .main-wrapper {
        margin-left: 72px;
        width: calc(100% - 72px);
      }

      .topbar {
        padding: 0 1rem;
      }

      .user-details {
        display: none;
      }

      .content-body {
        padding: 1rem;
      }

    }

  `]
})
export class DoctorLayoutComponent {

  authService = inject(AuthService);

  private router = inject(Router);

  logout(): void {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}