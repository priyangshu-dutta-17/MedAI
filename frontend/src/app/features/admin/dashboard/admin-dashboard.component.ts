import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="dashboard-page">

      <!-- ================= HEADER ================= -->
      <div class="page-header">

        <div>
          <span class="page-eyebrow">
            <i class="fa-solid fa-shield-halved"></i>
            ADMIN CONTROL CENTER
          </span>

          <h1>Healthcare System Overview</h1>

          <p>
            Monitor users, verified practitioners, healthcare facilities
            and AI/ML services across West Bengal.
          </p>
        </div>

        <div class="header-status">
          <span class="live-dot"></span>
          <span>System Operational</span>
        </div>

      </div>


      <!-- ================= KPI CARDS ================= -->
      <div class="stats-grid">

        <!-- Users -->
        <div class="stat-card">

          <div class="stat-top">
            <div class="stat-icon users">
              <i class="fa-solid fa-users"></i>
            </div>

            <span class="trend positive">
              <i class="fa-solid fa-arrow-trend-up"></i>
              14%
            </span>
          </div>

          <div class="stat-label">
            REGISTERED USERS
          </div>

          <div class="stat-value">
            1,248
          </div>

          <div class="stat-footer">
            <span>Compared with last week</span>
          </div>

        </div>


        <!-- Doctors -->
        <div class="stat-card">

          <div class="stat-top">
            <div class="stat-icon doctors">
              <i class="fa-solid fa-user-doctor"></i>
            </div>

            <span class="verified">
              <i class="fa-solid fa-circle-check"></i>
              Verified
            </span>
          </div>

          <div class="stat-label">
            VERIFIED DOCTORS
          </div>

          <div class="stat-value">
            84
          </div>

          <div class="stat-footer">
            <span>WBMC validated practitioners</span>
          </div>

        </div>


        <!-- Facilities -->
        <div class="stat-card">

          <div class="stat-top">
            <div class="stat-icon hospitals">
              <i class="fa-solid fa-hospital"></i>
            </div>

            <span class="neutral-status">
              23 Districts
            </span>
          </div>

          <div class="stat-label">
            HEALTHCARE FACILITIES
          </div>

          <div class="stat-value">
            26
          </div>

          <div class="stat-footer">
            <span>Facilities currently registered</span>
          </div>

        </div>


        <!-- AI -->
        <div class="stat-card">

          <div class="stat-top">
            <div class="stat-icon ai">
              <i class="fa-solid fa-brain"></i>
            </div>

            <span class="accuracy">
              96.5%
            </span>
          </div>

          <div class="stat-label">
            AI / ML PREDICTIONS
          </div>

          <div class="stat-value">
            3,490
          </div>

          <div class="stat-footer">
            <span>Prediction accuracy rate</span>
          </div>

        </div>

      </div>


      <!-- ================= MAIN GRID ================= -->
      <div class="main-grid">


        <!-- DISTRICT COVERAGE -->
        <div class="dashboard-card">

          <div class="card-heading">

            <div>
              <h3>
                <i class="fa-solid fa-map-location-dot"></i>
                District Coverage
              </h3>

              <p>
                Healthcare facility distribution
              </p>
            </div>

            <span class="small-status">
              LIVE
            </span>

          </div>


          <div class="coverage-list">

            <div class="coverage-item">

              <div class="coverage-info">
                <div class="coverage-icon">
                  <i class="fa-solid fa-city"></i>
                </div>

                <div>
                  <strong>Presidency Division</strong>
                  <span>Kolkata · 24 Parganas · Howrah · Nadia</span>
                </div>
              </div>

              <div class="coverage-count">
                <strong>12</strong>
                <span>Hospitals</span>
              </div>

            </div>


            <div class="coverage-item">

              <div class="coverage-info">
                <div class="coverage-icon">
                  <i class="fa-solid fa-building"></i>
                </div>

                <div>
                  <strong>Burdwan Division</strong>
                  <span>Purba/Paschim Bardhaman · Birbhum · Hooghly</span>
                </div>
              </div>

              <div class="coverage-count">
                <strong>6</strong>
                <span>Hospitals</span>
              </div>

            </div>


            <div class="coverage-item">

              <div class="coverage-info">
                <div class="coverage-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <strong>Jalpaiguri & Malda</strong>
                  <span>Darjeeling · Siliguri · Malda</span>
                </div>
              </div>

              <div class="coverage-count">
                <strong>8</strong>
                <span>Hospitals</span>
              </div>

            </div>

          </div>


          <a
            routerLink="/admin/facilities"
            class="card-action">

            View Healthcare Facilities

            <i class="fa-solid fa-arrow-right"></i>

          </a>

        </div>


        <!-- ML PIPELINE -->
        <div class="dashboard-card">

          <div class="card-heading">

            <div>
              <h3>
                <i class="fa-solid fa-microchip"></i>
                AI / ML Pipeline
              </h3>

              <p>
                Prediction engine health
              </p>
            </div>

            <span class="small-status online">
              ALL ONLINE
            </span>

          </div>


          <div class="ml-list">

            <div class="ml-item">

              <div class="ml-main">

                <div class="ml-icon">
                  <i class="fa-solid fa-tree"></i>
                </div>

                <div>
                  <strong>Random Forest Predictor</strong>
                  <span>130+ clinical features</span>
                </div>

              </div>

              <div class="ml-result">
                <span class="online-badge">
                  Online
                </span>

                <strong>96.5%</strong>
              </div>

            </div>


            <div class="ml-item">

              <div class="ml-main">

                <div class="ml-icon">
                  <i class="fa-solid fa-droplet"></i>
                </div>

                <div>
                  <strong>Diabetes Risk Classifier</strong>
                  <span>Metabolic risk analysis</span>
                </div>

              </div>

              <div class="ml-result">
                <span class="online-badge">
                  Online
                </span>

                <strong>88.4%</strong>
              </div>

            </div>


            <div class="ml-item">

              <div class="ml-main">

                <div class="ml-icon">
                  <i class="fa-solid fa-heart-pulse"></i>
                </div>

                <div>
                  <strong>Cardiovascular Engine</strong>
                  <span>Cardiac risk prediction</span>
                </div>

              </div>

              <div class="ml-result">
                <span class="online-badge">
                  Online
                </span>

                <strong>89.2%</strong>
              </div>

            </div>

          </div>


          <a
            routerLink="/admin/statistics"
            class="card-action">

            View ML Statistics

            <i class="fa-solid fa-arrow-right"></i>

          </a>

        </div>

      </div>


      <!-- ================= QUICK ACTIONS ================= -->
      <div class="dashboard-card quick-actions-card">

        <div class="card-heading">

          <div>
            <h3>
              <i class="fa-solid fa-bolt"></i>
              Quick Administration
            </h3>

            <p>
              Frequently used system management actions
            </p>
          </div>

        </div>


        <div class="quick-actions">

          <a
            routerLink="/admin/users"
            class="quick-action">

            <div class="quick-icon">
              <i class="fa-solid fa-users-gear"></i>
            </div>

            <div>
              <strong>User Management</strong>
              <span>Manage registered users</span>
            </div>

            <i class="fa-solid fa-chevron-right arrow"></i>

          </a>


          <a
            routerLink="/admin/verification"
            class="quick-action">

            <div class="quick-icon">
              <i class="fa-solid fa-user-check"></i>
            </div>

            <div>
              <strong>Doctor Verification</strong>
              <span>Review practitioner applications</span>
            </div>

            <i class="fa-solid fa-chevron-right arrow"></i>

          </a>


          <a
            routerLink="/admin/appointments"
            class="quick-action">

            <div class="quick-icon">
              <i class="fa-solid fa-calendar-check"></i>
            </div>

            <div>
              <strong>Appointments</strong>
              <span>Monitor consultations</span>
            </div>

            <i class="fa-solid fa-chevron-right arrow"></i>

          </a>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* =========================================
       PAGE
    ========================================= */

    .dashboard-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
    }


    /* =========================================
       HEADER
    ========================================= */

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1.5rem;

      margin-bottom: 1.5rem;

      padding: 1.4rem 1.5rem;

      background: #ffffff;

      border: 1px solid #e2e8f0;

      border-radius: 14px;
    }

    .page-eyebrow {
      display: flex;
      align-items: center;
      gap: 0.45rem;

      margin-bottom: 0.4rem;

      color: #0f9f94;

      font-size: 0.68rem;
      font-weight: 800;

      letter-spacing: 0.08em;
    }

    .page-header h1 {
      margin: 0;

      color: #082f49;

      font-size: 1.5rem;
      font-weight: 800;
    }

    .page-header p {
      margin: 0.35rem 0 0;

      color: #64748b;

      font-size: 0.82rem;
    }

    .header-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      padding: 0.55rem 0.8rem;

      border: 1px solid #bbf7d0;

      border-radius: 999px;

      background: #f0fdf4;

      color: #15803d;

      font-size: 0.72rem;
      font-weight: 700;

      white-space: nowrap;
    }

    .live-dot {
      width: 8px;
      height: 8px;

      border-radius: 50%;

      background: #16a34a;

      box-shadow: 0 0 0 4px #dcfce7;
    }


    /* =========================================
       STATISTICS
    ========================================= */

    .stats-grid {
      display: grid;

      grid-template-columns: repeat(4, minmax(0, 1fr));

      gap: 1rem;

      margin-bottom: 1rem;
    }

    .stat-card {
      padding: 1.15rem;

      background: #ffffff;

      border: 1px solid #e2e8f0;

      border-radius: 14px;

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .stat-card:hover {
      transform: translateY(-2px);

      box-shadow: 0 8px 25px rgba(15, 23, 42, 0.07);
    }

    .stat-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 1rem;
    }

    .stat-icon {
      width: 40px;
      height: 40px;

      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1rem;
    }

    .stat-icon.users {
      background: #e0f2fe;
      color: #0284c7;
    }

    .stat-icon.doctors {
      background: #dcfce7;
      color: #16a34a;
    }

    .stat-icon.hospitals {
      background: #fef3c7;
      color: #d97706;
    }

    .stat-icon.ai {
      background: #ede9fe;
      color: #7c3aed;
    }

    .trend,
    .verified,
    .neutral-status,
    .accuracy {
      font-size: 0.67rem;
      font-weight: 700;
    }

    .trend {
      color: #16a34a;
    }

    .verified {
      color: #15803d;
    }

    .neutral-status {
      color: #64748b;
    }

    .accuracy {
      color: #7c3aed;
    }

    .stat-label {
      color: #64748b;

      font-size: 0.67rem;
      font-weight: 800;

      letter-spacing: 0.04em;
    }

    .stat-value {
      margin-top: 0.2rem;

      color: #0f172a;

      font-size: 1.65rem;
      font-weight: 800;
    }

    .stat-footer {
      margin-top: 0.35rem;

      color: #94a3b8;

      font-size: 0.67rem;
    }


    /* =========================================
       MAIN CARDS
    ========================================= */

    .main-grid {
      display: grid;

      grid-template-columns: repeat(2, minmax(0, 1fr));

      gap: 1rem;

      margin-bottom: 1rem;
    }

    .dashboard-card {
      background: #ffffff;

      border: 1px solid #e2e8f0;

      border-radius: 14px;

      padding: 1.25rem;
    }

    .card-heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      gap: 1rem;

      padding-bottom: 1rem;

      border-bottom: 1px solid #edf2f7;
    }

    .card-heading h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin: 0;

      color: #0f172a;

      font-size: 0.95rem;
      font-weight: 800;
    }

    .card-heading h3 i {
      color: #0f9f94;
    }

    .card-heading p {
      margin: 0.3rem 0 0;

      color: #94a3b8;

      font-size: 0.7rem;
    }

    .small-status {
      padding: 0.25rem 0.5rem;

      border-radius: 999px;

      background: #f1f5f9;

      color: #64748b;

      font-size: 0.6rem;
      font-weight: 800;
    }

    .small-status.online {
      background: #f0fdf4;
      color: #15803d;
    }


    /* =========================================
       DISTRICT COVERAGE
    ========================================= */

    .coverage-list {
      padding-top: 0.35rem;
    }

    .coverage-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1rem;

      padding: 0.85rem 0;

      border-bottom: 1px solid #f1f5f9;
    }

    .coverage-item:last-child {
      border-bottom: none;
    }

    .coverage-info {
      display: flex;
      align-items: center;

      gap: 0.7rem;

      min-width: 0;
    }

    .coverage-icon {
      width: 34px;
      height: 34px;

      flex-shrink: 0;

      border-radius: 9px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #f0fdfa;

      color: #0f9f94;

      font-size: 0.8rem;
    }

    .coverage-info strong {
      display: block;

      color: #334155;

      font-size: 0.76rem;
    }

    .coverage-info span {
      display: block;

      margin-top: 2px;

      color: #94a3b8;

      font-size: 0.62rem;
    }

    .coverage-count {
      text-align: right;

      flex-shrink: 0;
    }

    .coverage-count strong {
      display: block;

      color: #0f172a;

      font-size: 0.95rem;
    }

    .coverage-count span {
      color: #94a3b8;

      font-size: 0.6rem;
    }


    /* =========================================
       ML PIPELINE
    ========================================= */

    .ml-list {
      padding-top: 0.35rem;
    }

    .ml-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 1rem;

      padding: 0.82rem 0;

      border-bottom: 1px solid #f1f5f9;
    }

    .ml-item:last-child {
      border-bottom: none;
    }

    .ml-main {
      display: flex;
      align-items: center;

      gap: 0.7rem;
    }

    .ml-icon {
      width: 34px;
      height: 34px;

      border-radius: 9px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #f5f3ff;

      color: #7c3aed;

      font-size: 0.8rem;
    }

    .ml-main strong {
      display: block;

      color: #334155;

      font-size: 0.76rem;
    }

    .ml-main span {
      display: block;

      margin-top: 2px;

      color: #94a3b8;

      font-size: 0.62rem;
    }

    .ml-result {
      text-align: right;
    }

    .ml-result strong {
      display: block;

      margin-top: 3px;

      color: #0f172a;

      font-size: 0.78rem;
    }

    .online-badge {
      padding: 0.2rem 0.45rem;

      border-radius: 999px;

      background: #dcfce7;

      color: #15803d;

      font-size: 0.58rem;

      font-weight: 800;
    }


    /* =========================================
       CARD ACTION
    ========================================= */

    .card-action {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 0.75rem;
      padding-top: 0.8rem;

      border-top: 1px solid #edf2f7;

      color: #0f9f94;

      text-decoration: none;

      font-size: 0.7rem;
      font-weight: 700;
    }

    .card-action:hover {
      color: #087f78;
    }


    /* =========================================
       QUICK ACTIONS
    ========================================= */

    .quick-actions-card {
      margin-bottom: 1rem;
    }

    .quick-actions {
      display: grid;

      grid-template-columns: repeat(3, minmax(0, 1fr));

      gap: 0.75rem;

      margin-top: 1rem;
    }

    .quick-action {
      display: flex;
      align-items: center;

      gap: 0.7rem;

      padding: 0.8rem;

      border: 1px solid #e2e8f0;

      border-radius: 10px;

      text-decoration: none;

      transition: all 0.2s ease;
    }

    .quick-action:hover {
      border-color: #99f6e4;

      background: #f0fdfa;

      transform: translateY(-1px);
    }

    .quick-icon {
      width: 36px;
      height: 36px;

      border-radius: 9px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #e8f7f5;

      color: #0f9f94;

      flex-shrink: 0;
    }

    .quick-action strong {
      display: block;

      color: #334155;

      font-size: 0.72rem;
    }

    .quick-action span {
      display: block;

      margin-top: 2px;

      color: #94a3b8;

      font-size: 0.6rem;
    }

    .arrow {
      margin-left: auto;

      color: #cbd5e1;

      font-size: 0.7rem;
    }


    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 1100px) {

      .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .main-grid {
        grid-template-columns: 1fr;
      }

      .quick-actions {
        grid-template-columns: 1fr;
      }

    }


    @media (max-width: 650px) {

      .page-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .page-header h1 {
        font-size: 1.25rem;
      }

      .dashboard-card {
        padding: 1rem;
      }

    }

  `]
})
export class AdminDashboardComponent {}