import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="doctor-dashboard">

      <!-- =========================
           WELCOME HEADER
      ========================== -->
      <div
        class="welcome-card"
        *ngIf="authService.currentUser$ | async as user">

        <div class="welcome-content">

          <div>
            <span class="section-label">
              <i class="fa-solid fa-stethoscope"></i>
              DOCTOR CONSULTATION WORKSPACE
            </span>

            <h1>
              Welcome back, Dr. {{ user.name }}
            </h1>

            <p>
              Manage your patients, consultations and clinical records
              from one centralized workspace.
            </p>

            <div class="doctor-meta">
              <span>
                <i class="fa-solid fa-user-doctor"></i>
                Cardiologist
              </span>

              <span>
                <i class="fa-solid fa-hospital"></i>
                SSKM Hospital, Kolkata
              </span>
            </div>
          </div>

          <div class="verification-box">
            <div class="verification-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>

            <div>
              <strong>WBMC Verified</strong>
              <span>Verified Medical Professional</span>
            </div>
          </div>

        </div>
      </div>


      <!-- =========================
           QUICK ACTIONS
      ========================== -->
      <div class="quick-actions">

        <a
          routerLink="/doctor/appointments"
          class="quick-action">

          <div class="quick-icon primary">
            <i class="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <strong>Appointments</strong>
            <span>View today's schedule</span>
          </div>

          <i class="fa-solid fa-arrow-right arrow"></i>
        </a>


        <a
          routerLink="/doctor/patients"
          class="quick-action">

          <div class="quick-icon secondary">
            <i class="fa-solid fa-users"></i>
          </div>

          <div>
            <strong>My Patients</strong>
            <span>View assigned patients</span>
          </div>

          <i class="fa-solid fa-arrow-right arrow"></i>
        </a>


        <a
          routerLink="/doctor/records"
          class="quick-action">

          <div class="quick-icon warning">
            <i class="fa-solid fa-file-medical"></i>
          </div>

          <div>
            <strong>Medical Records</strong>
            <span>Review patient EMRs</span>
          </div>

          <i class="fa-solid fa-arrow-right arrow"></i>
        </a>


        <a
          routerLink="/doctor/prescriptions"
          class="quick-action">

          <div class="quick-icon success">
            <i class="fa-solid fa-prescription-bottle-medical"></i>
          </div>

          <div>
            <strong>Prescriptions</strong>
            <span>Create & manage prescriptions</span>
          </div>

          <i class="fa-solid fa-arrow-right arrow"></i>
        </a>

      </div>


      <!-- =========================
           STATISTICS
      ========================== -->
      <div class="stats-grid">

        <!-- Appointments -->
        <div class="stat-card">

          <div class="stat-top">
            <span class="stat-label">
              TODAY'S APPOINTMENTS
            </span>

            <div class="stat-icon primary">
              <i class="fa-solid fa-calendar-day"></i>
            </div>
          </div>

          <div class="stat-value">
            06
          </div>

          <div class="stat-bottom">
            <span class="positive">
              <i class="fa-solid fa-clock"></i>
              Next at 17:30
            </span>

            <a routerLink="/doctor/appointments">
              View schedule
            </a>
          </div>

        </div>


        <!-- Patients -->
        <div class="stat-card">

          <div class="stat-top">
            <span class="stat-label">
              ASSIGNED PATIENTS
            </span>

            <div class="stat-icon secondary">
              <i class="fa-solid fa-user-group"></i>
            </div>
          </div>

          <div class="stat-value">
            142
          </div>

          <div class="stat-bottom">
            <span>
              Active patients
            </span>

            <a routerLink="/doctor/patients">
              View patients
            </a>
          </div>

        </div>


        <!-- EMR -->
        <div class="stat-card">

          <div class="stat-top">
            <span class="stat-label">
              PENDING EMR REVIEWS
            </span>

            <div class="stat-icon warning">
              <i class="fa-solid fa-file-circle-exclamation"></i>
            </div>
          </div>

          <div class="stat-value">
            03
          </div>

          <div class="stat-bottom">
            <span class="warning-text">
              Requires attention
            </span>

            <a routerLink="/doctor/records">
              Review now
            </a>
          </div>

        </div>


        <!-- Rating -->
        <div class="stat-card">

          <div class="stat-top">
            <span class="stat-label">
              AVERAGE RATING
            </span>

            <div class="stat-icon success">
              <i class="fa-solid fa-star"></i>
            </div>
          </div>

          <div class="stat-value">
            4.9
            <small>/ 5</small>
          </div>

          <div class="stat-bottom">
            <span>
              98 verified reviews
            </span>
          </div>

        </div>

      </div>


      <!-- =========================
           MAIN GRID
      ========================== -->
      <div class="dashboard-grid">


        <!-- TODAY'S QUEUE -->
        <div class="queue-card">

          <div class="card-heading">

            <div>
              <span class="section-label small">
                <i class="fa-solid fa-list-check"></i>
                TODAY
              </span>

              <h3>
                Patient Consultation Queue
              </h3>
            </div>

            <a
              routerLink="/doctor/appointments"
              class="view-all">
              View Schedule
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>


          <!-- Queue Item -->
          <div class="queue-item">

            <div class="time-column">
              <strong>17:30</strong>
              <span>Today</span>
            </div>

            <div class="patient-avatar">
              SD
            </div>

            <div class="patient-info">

              <strong>
                Sourav Das
              </strong>

              <span>
                Male • 31 years
              </span>

              <p>
                Routine Hypertension & ECG Follow-up
              </p>

            </div>

            <div class="risk-column">
              <span class="risk-label">
                RISK
              </span>

              <span class="risk-badge low">
                Low • 24%
              </span>
            </div>

            <a
              routerLink="/doctor/records"
              class="start-btn">
              Start EMR
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>


          <!-- Queue Item -->
          <div class="queue-item">

            <div class="time-column">
              <strong>18:00</strong>
              <span>Today</span>
            </div>

            <div class="patient-avatar danger">
              AS
            </div>

            <div class="patient-info">

              <strong>
                Ananya Sen
              </strong>

              <span>
                Female • 54 years
              </span>

              <p>
                Chest Tightness & Palpitations
              </p>

            </div>

            <div class="risk-column">
              <span class="risk-label">
                RISK
              </span>

              <span class="risk-badge high">
                High • 78%
              </span>
            </div>

            <a
              routerLink="/doctor/records"
              class="start-btn danger-btn">
              Start EMR
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>


          <!-- Queue Item -->
          <div class="queue-item">

            <div class="time-column">
              <strong>18:30</strong>
              <span>Today</span>
            </div>

            <div class="patient-avatar purple">
              RM
            </div>

            <div class="patient-info">

              <strong>
                Rahul Mondal
              </strong>

              <span>
                Male • 46 years
              </span>

              <p>
                Diabetes Follow-up Consultation
              </p>

            </div>

            <div class="risk-column">
              <span class="risk-label">
                RISK
              </span>

              <span class="risk-badge moderate">
                Moderate • 46%
              </span>
            </div>

            <a
              routerLink="/doctor/records"
              class="start-btn">
              Start EMR
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>


        <!-- RIGHT PANEL -->
        <div class="side-panel">

          <!-- Clinical Alerts -->
          <div class="alert-card">

            <div class="card-heading">

              <div>
                <span class="section-label small">
                  <i class="fa-solid fa-bell"></i>
                  ATTENTION
                </span>

                <h3>
                  Clinical Alerts
                </h3>
              </div>

              <span class="alert-count">
                3
              </span>

            </div>


            <div class="clinical-alert high">

              <div class="alert-symbol">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <div>
                <strong>
                  High-risk patient
                </strong>

                <span>
                  Ananya Sen • Appointment 18:00
                </span>
              </div>

            </div>


            <div class="clinical-alert warning">

              <div class="alert-symbol">
                <i class="fa-solid fa-file-medical"></i>
              </div>

              <div>
                <strong>
                  EMR review pending
                </strong>

                <span>
                  2 diagnostic reports require review
                </span>
              </div>

            </div>


            <div class="clinical-alert info">

              <div class="alert-symbol">
                <i class="fa-solid fa-calendar-check"></i>
              </div>

              <div>
                <strong>
                  Upcoming consultation
                </strong>

                <span>
                  Next appointment in 30 minutes
                </span>
              </div>

            </div>

          </div>


          <!-- Today's Summary -->
          <div class="summary-card">

            <span class="section-label small">
              <i class="fa-solid fa-chart-simple"></i>
              DAILY SUMMARY
            </span>

            <h3>
              Today's Activity
            </h3>

            <div class="summary-row">
              <span>Completed consultations</span>
              <strong>12</strong>
            </div>

            <div class="summary-row">
              <span>EMRs updated</span>
              <strong>09</strong>
            </div>

            <div class="summary-row">
              <span>Prescriptions issued</span>
              <strong>07</strong>
            </div>

            <div class="summary-row">
              <span>Pending reviews</span>
              <strong class="warning-text">03</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* =========================
       PAGE
    ========================== */

    .doctor-dashboard {
      max-width: 1500px;
      margin: 0 auto;
    }


    /* =========================
       WELCOME
    ========================== */

    .welcome-card {
      background: linear-gradient(
        135deg,
        #ffffff 0%,
        #f0f9ff 100%
      );

      border: 1px solid var(--border-color);
      border-left: 5px solid var(--primary);
      border-radius: var(--radius-lg);

      padding: 1.5rem 1.75rem;
      margin-bottom: 1.25rem;

      box-shadow: var(--shadow-sm);
    }

    .welcome-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: .4rem;

      color: var(--primary);
      font-size: .7rem;
      font-weight: 800;
      letter-spacing: .08em;

      margin-bottom: .35rem;
    }

    .section-label.small {
      font-size: .65rem;
    }

    .welcome-card h1 {
      margin: 0;
      font-size: 1.7rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .welcome-card p {
      margin: .4rem 0 .7rem;
      color: var(--text-muted);
      font-size: .85rem;
    }

    .doctor-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .doctor-meta span {
      display: flex;
      align-items: center;
      gap: .35rem;

      color: var(--text-muted);
      font-size: .75rem;
      font-weight: 600;
    }

    .doctor-meta i {
      color: var(--primary);
    }

    .verification-box {
      display: flex;
      align-items: center;
      gap: .7rem;

      padding: .75rem 1rem;

      border-radius: var(--radius-md);
      background: #ecfdf5;
      border: 1px solid #bbf7d0;

      min-width: 210px;
    }

    .verification-icon {
      color: #16a34a;
      font-size: 1.5rem;
    }

    .verification-box strong {
      display: block;
      font-size: .8rem;
      color: #166534;
    }

    .verification-box span {
      display: block;
      margin-top: .15rem;
      font-size: .68rem;
      color: #4b7a5a;
    }


    /* =========================
       QUICK ACTIONS
    ========================== */

    .quick-actions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .quick-action {
      display: flex;
      align-items: center;
      gap: .75rem;

      padding: 1rem;

      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);

      text-decoration: none;
      color: var(--text-main);

      transition: all var(--transition-fast);
    }

    .quick-action:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
      box-shadow: var(--shadow-sm);
    }

    .quick-icon {
      width: 42px;
      height: 42px;

      flex-shrink: 0;

      border-radius: var(--radius-md);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .quick-icon.primary,
    .stat-icon.primary {
      background: var(--primary-light);
      color: var(--primary);
    }

    .quick-icon.secondary,
    .stat-icon.secondary {
      background: var(--secondary-light);
      color: var(--secondary);
    }

    .quick-icon.warning,
    .stat-icon.warning {
      background: #fff7ed;
      color: #ea580c;
    }

    .quick-icon.success,
    .stat-icon.success {
      background: #ecfdf5;
      color: #16a34a;
    }

    .quick-action strong {
      display: block;
      font-size: .82rem;
    }

    .quick-action span {
      display: block;
      margin-top: .15rem;
      font-size: .68rem;
      color: var(--text-muted);
    }

    .arrow {
      margin-left: auto;
      color: var(--text-light);
      font-size: .7rem;
    }


    /* =========================
       STATS
    ========================== */

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .stat-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.15rem;
      box-shadow: var(--shadow-sm);
    }

    .stat-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .stat-label {
      font-size: .67rem;
      font-weight: 800;
      color: var(--text-muted);
      letter-spacing: .04em;
    }

    .stat-icon {
      width: 38px;
      height: 38px;

      border-radius: var(--radius-md);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stat-value {
      margin-top: .6rem;
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .stat-value small {
      font-size: .9rem;
      font-weight: 600;
      color: var(--text-muted);
    }

    .stat-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: .35rem;

      font-size: .68rem;
      color: var(--text-muted);
    }

    .stat-bottom a {
      color: var(--primary);
      font-weight: 700;
      text-decoration: none;
    }

    .positive {
      color: #16a34a;
      font-weight: 600;
    }

    .warning-text {
      color: #ea580c !important;
      font-weight: 700;
    }


    /* =========================
       MAIN GRID
    ========================== */

    .dashboard-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.8fr) minmax(300px, .8fr);
      gap: 1.25rem;
    }

    .queue-card,
    .alert-card,
    .summary-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }


    /* =========================
       CARD HEADING
    ========================== */

    .card-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1.15rem 1.25rem;

      border-bottom: 1px solid var(--border-color);
    }

    .card-heading h3 {
      margin: .1rem 0 0;
      font-size: 1rem;
      font-weight: 800;
    }

    .view-all {
      color: var(--primary);
      font-size: .72rem;
      font-weight: 700;
      text-decoration: none;
    }

    .view-all i {
      margin-left: .2rem;
    }


    /* =========================
       QUEUE
    ========================== */

    .queue-item {
      display: grid;
      grid-template-columns: 65px 42px minmax(180px, 1fr) 105px 100px;
      align-items: center;
      gap: .9rem;

      padding: 1rem 1.25rem;

      border-bottom: 1px solid var(--border-color);

      transition: background var(--transition-fast);
    }

    .queue-item:last-child {
      border-bottom: none;
    }

    .queue-item:hover {
      background: #f8fafc;
    }

    .time-column strong {
      display: block;
      font-size: .82rem;
    }

    .time-column span {
      display: block;
      margin-top: .15rem;
      color: var(--text-muted);
      font-size: .65rem;
    }

    .patient-avatar {
      width: 40px;
      height: 40px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--primary-light);
      color: var(--primary);

      font-size: .72rem;
      font-weight: 800;
    }

    .patient-avatar.danger {
      background: #fee2e2;
      color: #dc2626;
    }

    .patient-avatar.purple {
      background: #f3e8ff;
      color: #9333ea;
    }

    .patient-info strong {
      display: block;
      font-size: .8rem;
    }

    .patient-info > span {
      display: block;
      margin-top: .1rem;
      color: var(--text-muted);
      font-size: .65rem;
    }

    .patient-info p {
      margin: .25rem 0 0;
      color: var(--text-muted);
      font-size: .7rem;
    }

    .risk-label {
      display: block;
      font-size: .58rem;
      color: var(--text-light);
      font-weight: 700;
    }

    .risk-badge {
      display: inline-block;
      margin-top: .2rem;
      padding: .25rem .45rem;

      border-radius: var(--radius-full);

      font-size: .62rem;
      font-weight: 700;
    }

    .risk-badge.low {
      background: #dcfce7;
      color: #15803d;
    }

    .risk-badge.moderate {
      background: #fef3c7;
      color: #b45309;
    }

    .risk-badge.high {
      background: #fee2e2;
      color: #dc2626;
    }

    .start-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: .35rem;

      padding: .45rem .55rem;

      border-radius: var(--radius-md);

      background: var(--primary);
      color: #ffffff;

      text-decoration: none;

      font-size: .65rem;
      font-weight: 700;
    }

    .start-btn:hover {
      opacity: .9;
    }

    .danger-btn {
      background: #dc2626;
    }


    /* =========================
       SIDE PANEL
    ========================== */

    .side-panel {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .alert-count {
      width: 25px;
      height: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #fee2e2;
      color: #dc2626;

      font-size: .7rem;
      font-weight: 800;
    }


    /* =========================
       CLINICAL ALERTS
    ========================== */

    .clinical-alert {
      display: flex;
      gap: .7rem;
      align-items: flex-start;

      margin: .7rem 1rem;
      padding: .7rem;

      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);
    }

    .clinical-alert.high {
      background: #fff7f7;
      border-color: #fecaca;
    }

    .clinical-alert.warning {
      background: #fffaf3;
      border-color: #fed7aa;
    }

    .clinical-alert.info {
      background: #f5faff;
      border-color: #bae6fd;
    }

    .alert-symbol {
      width: 32px;
      height: 32px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: var(--radius-md);

      background: #ffffff;
    }

    .clinical-alert.high .alert-symbol {
      color: #dc2626;
    }

    .clinical-alert.warning .alert-symbol {
      color: #ea580c;
    }

    .clinical-alert.info .alert-symbol {
      color: var(--primary);
    }

    .clinical-alert strong {
      display: block;
      font-size: .72rem;
    }

    .clinical-alert span {
      display: block;
      margin-top: .2rem;
      color: var(--text-muted);
      font-size: .65rem;
      line-height: 1.35;
    }


    /* =========================
       DAILY SUMMARY
    ========================== */

    .summary-card {
      padding-bottom: .5rem;
    }

    .summary-card > .section-label,
    .summary-card > h3 {
      margin-left: 1.25rem;
      margin-right: 1.25rem;
    }

    .summary-card > .section-label {
      margin-top: 1.15rem;
    }

    .summary-card h3 {
      margin-top: .1rem;
      margin-bottom: .8rem;
      font-size: 1rem;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;

      padding: .65rem 1.25rem;

      border-top: 1px solid var(--border-color);

      font-size: .72rem;
      color: var(--text-muted);
    }

    .summary-row strong {
      color: var(--text-main);
    }


    /* =========================
       RESPONSIVE
    ========================== */

    @media (max-width: 1150px) {

      .quick-actions,
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .dashboard-grid {
        grid-template-columns: 1fr;
      }

    }


    @media (max-width: 800px) {

      .welcome-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .verification-box {
        width: 100%;
      }

      .queue-item {
        grid-template-columns: 55px 40px 1fr;
      }

      .risk-column,
      .start-btn {
        grid-column: 3;
      }

    }


    @media (max-width: 600px) {

      .quick-actions,
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .welcome-card {
        padding: 1.2rem;
      }

      .welcome-card h1 {
        font-size: 1.35rem;
      }

      .doctor-meta {
        flex-direction: column;
        gap: .4rem;
      }

      .queue-item {
        grid-template-columns: 42px 1fr;
      }

      .time-column {
        grid-column: 1 / -1;
      }

      .patient-avatar {
        grid-column: 1;
      }

      .patient-info {
        grid-column: 2;
      }

      .risk-column,
      .start-btn {
        grid-column: 2;
      }

    }

  `]
})
export class DoctorDashboardComponent {

  authService = inject(AuthService);

}