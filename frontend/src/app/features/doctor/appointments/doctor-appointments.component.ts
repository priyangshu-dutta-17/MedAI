import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-appointments',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="appointments-page">

      <!-- ================= HEADER ================= -->
      <div class="page-header">

        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-calendar-check"></i>
            CLINICAL OPERATIONS
          </div>

          <h1>
            Today's Appointments
          </h1>

          <p>
            Manage your consultation queue and review patient risk information.
          </p>
        </div>

        <div class="header-date">
          <i class="fa-solid fa-calendar-day"></i>
          <div>
            <span>Today</span>
            <strong>30 August 2026</strong>
          </div>
        </div>

      </div>


      <!-- ================= SUMMARY CARDS ================= -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon teal">
            <i class="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <span class="summary-label">
              TODAY'S APPOINTMENTS
            </span>

            <strong class="summary-value">
              6
            </strong>

            <span class="summary-sub">
              Scheduled consultations
            </span>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon red">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>

          <div>
            <span class="summary-label">
              HIGH RISK
            </span>

            <strong class="summary-value">
              1
            </strong>

            <span class="summary-sub danger-text">
              Requires priority review
            </span>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-clock"></i>
          </div>

          <div>
            <span class="summary-label">
              WAITING
            </span>

            <strong class="summary-value">
              1
            </strong>

            <span class="summary-sub">
              Patient waiting
            </span>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div>
            <span class="summary-label">
              NEXT CONSULTATION
            </span>

            <strong class="summary-value small">
              17:30
            </strong>

            <span class="summary-sub">
              Sourav Das
            </span>
          </div>
        </div>

      </div>


      <!-- ================= PATIENT QUEUE ================= -->
      <div class="queue-card">

        <!-- Queue Header -->
        <div class="queue-header">

          <div class="queue-title-section">

            <div class="queue-title-icon">
              <i class="fa-solid fa-users"></i>
            </div>

            <div>
              <h2>
                Today's Patient Queue
              </h2>

              <p>
                Patients scheduled for consultation today
              </p>
            </div>

          </div>

          <div class="appointment-count">
            6 Appointments
          </div>

        </div>


        <!-- ================= PATIENT 1 ================= -->
        <div class="patient-row">

          <!-- Time -->
          <div class="time-column">
            <strong>17:30</strong>
            <span>Today</span>
          </div>

          <!-- Avatar -->
          <div class="patient-avatar avatar-green">
            SD
          </div>

          <!-- Patient Info -->
          <div class="patient-info">

            <h3>
              Sourav Das
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Male, 31 years
            </span>

            <p>
              Routine Hypertension & ECG Follow-up
            </p>

          </div>


          <!-- Risk -->
          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge low">
              Low Risk · 24%
            </span>

          </div>


          <!-- Status -->
          <div class="status waiting">
            <i class="fa-solid fa-clock"></i>
            Waiting
          </div>


          <!-- Action -->
          <button
            class="consult-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              Start Consultation
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <!-- ================= PATIENT 2 ================= -->
        <div class="patient-row high-risk">

          <!-- Time -->
          <div class="time-column">
            <strong>18:00</strong>
            <span>Today</span>
          </div>

          <!-- Avatar -->
          <div class="patient-avatar avatar-red">
            AS
          </div>

          <!-- Patient Info -->
          <div class="patient-info">

            <h3>
              Ananya Sen
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Female, 54 years
            </span>

            <p>
              Chest Tightness & Palpitations
            </p>

          </div>


          <!-- Risk -->
          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge high">
              High Risk · 78%
            </span>

          </div>


          <!-- Status -->
          <div class="status priority">
            <i class="fa-solid fa-triangle-exclamation"></i>
            High Priority
          </div>


          <!-- Action -->
          <button
            class="review-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-heart-pulse"></i>

            <span>
              Review Patient
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <!-- ================= PATIENT 3 ================= -->
        <div class="patient-row">

          <!-- Time -->
          <div class="time-column">
            <strong>18:30</strong>
            <span>Today</span>
          </div>

          <!-- Avatar -->
          <div class="patient-avatar avatar-blue">
            RM
          </div>

          <!-- Patient Info -->
          <div class="patient-info">

            <h3>
              Rahul Mondal
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Male, 46 years
            </span>

            <p>
              Diabetes Follow-up & Blood Pressure Review
            </p>

          </div>


          <!-- Risk -->
          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge moderate">
              Moderate · 51%
            </span>

          </div>


          <!-- Status -->
          <div class="status scheduled">
            <i class="fa-solid fa-calendar-check"></i>
            Scheduled
          </div>


          <!-- Action -->
          <button
            class="consult-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              View Patient
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <!-- ================= PATIENT 4 ================= -->
        <div class="patient-row">

          <!-- Time -->
          <div class="time-column">
            <strong>19:00</strong>
            <span>Today</span>
          </div>

          <!-- Avatar -->
          <div class="patient-avatar avatar-purple">
            PM
          </div>

          <!-- Patient Info -->
          <div class="patient-info">

            <h3>
              Priya Mukherjee
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Female, 39 years
            </span>

            <p>
              Routine Cardiology Consultation
            </p>

          </div>


          <!-- Risk -->
          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge low">
              Low Risk · 18%
            </span>

          </div>


          <!-- Status -->
          <div class="status scheduled">
            <i class="fa-solid fa-calendar-check"></i>
            Scheduled
          </div>


          <!-- Action -->
          <button
            class="consult-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              View Patient
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <!-- ================= PATIENT 5 ================= -->
        <div class="patient-row">

          <div class="time-column">
            <strong>19:30</strong>
            <span>Today</span>
          </div>

          <div class="patient-avatar avatar-green">
            AR
          </div>

          <div class="patient-info">

            <h3>
              Arjun Roy
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Male, 42 years
            </span>

            <p>
              Routine Heart Health Assessment
            </p>

          </div>

          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge low">
              Low Risk · 22%
            </span>

          </div>

          <div class="status scheduled">
            <i class="fa-solid fa-calendar-check"></i>
            Scheduled
          </div>

          <button
            class="consult-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              View Patient
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <!-- ================= PATIENT 6 ================= -->
        <div class="patient-row">

          <div class="time-column">
            <strong>20:00</strong>
            <span>Today</span>
          </div>

          <div class="patient-avatar avatar-blue">
            SK
          </div>

          <div class="patient-info">

            <h3>
              Sneha Kapoor
            </h3>

            <span class="patient-meta">
              <i class="fa-solid fa-user"></i>
              Female, 48 years
            </span>

            <p>
              Blood Pressure & Lipid Profile Review
            </p>

          </div>

          <div class="risk-column">

            <label>
              PATIENT RISK
            </label>

            <span class="risk-badge moderate">
              Moderate · 47%
            </span>

          </div>

          <div class="status scheduled">
            <i class="fa-solid fa-calendar-check"></i>
            Scheduled
          </div>

          <button
            class="consult-btn"
            routerLink="/doctor/records">

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              View Patient
            </span>

            <i class="fa-solid fa-arrow-right"></i>

          </button>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* ========================================
       MAIN PAGE
    ======================================== */

    .appointments-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;

      padding: 24px 28px 40px;

      box-sizing: border-box;
    }


    /* ========================================
       PAGE HEADER
    ======================================== */

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      gap: 25px;

      margin-bottom: 24px;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 7px;

      margin-bottom: 7px;

      color: #0d9488;

      font-size: 11px;
      font-weight: 800;

      letter-spacing: 1px;
    }

    .page-header h1 {
      margin: 0;

      color: #082f3d;

      font-size: 29px;
      font-weight: 800;
    }

    .page-header p {
      margin: 7px 0 0;

      color: #78929b;

      font-size: 13px;
    }


    /* ========================================
       DATE
    ======================================== */

    .header-date {
      display: flex;
      align-items: center;
      gap: 12px;

      padding: 12px 17px;

      background: #ffffff;

      border: 1px solid #e4eeee;
      border-radius: 14px;

      box-shadow: 0 4px 15px rgba(12, 62, 70, 0.04);
    }

    .header-date > i {
      color: #0f9e95;
      font-size: 18px;
    }

    .header-date div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .header-date span {
      color: #91a2a8;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .header-date strong {
      color: #173c48;
      font-size: 12px;
    }


    /* ========================================
       SUMMARY
    ======================================== */

    .summary-grid {
      display: grid;

      grid-template-columns:
        repeat(4, minmax(0, 1fr));

      gap: 16px;

      margin-bottom: 22px;
    }

    .summary-card {
      display: flex;
      align-items: center;

      gap: 15px;

      min-width: 0;

      padding: 19px;

      background: #ffffff;

      border: 1px solid #e5eeee;
      border-radius: 17px;

      box-shadow:
        0 5px 18px rgba(12, 62, 70, 0.04);
    }

    .summary-icon {
      width: 44px;
      height: 44px;

      min-width: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      font-size: 17px;
    }

    .summary-icon.teal {
      background: #dff8f3;
      color: #07958b;
    }

    .summary-icon.red {
      background: #ffe6e6;
      color: #e33434;
    }

    .summary-icon.orange {
      background: #fff1d9;
      color: #d87900;
    }

    .summary-icon.blue {
      background: #e4f0ff;
      color: #3979b9;
    }

    .summary-card > div:last-child {
      display: flex;
      flex-direction: column;

      min-width: 0;
    }

    .summary-label {
      color: #8299a0;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: .5px;
    }

    .summary-value {
      margin-top: 3px;

      color: #082f3d;

      font-size: 24px;
      font-weight: 800;
    }

    .summary-value.small {
      font-size: 20px;
    }

    .summary-sub {
      margin-top: 2px;

      color: #91a2a8;

      font-size: 10px;
    }

    .danger-text {
      color: #e33434;
    }


    /* ========================================
       QUEUE CARD
    ======================================== */

    .queue-card {
      background: #ffffff;

      border: 1px solid #dfebeb;

      border-radius: 22px;

      overflow: hidden;

      box-shadow:
        0 8px 28px rgba(12, 62, 70, 0.05);
    }


    /* ========================================
       QUEUE HEADER
    ======================================== */

    .queue-header {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 20px;

      padding: 24px 28px;

      border-bottom: 1px solid #e6eeee;
    }

    .queue-title-section {
      display: flex;
      align-items: center;

      gap: 14px;
    }

    .queue-title-icon {
      width: 43px;
      height: 43px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      background: #e0f8f4;

      color: #07988e;

      font-size: 19px;
    }

    .queue-title-section h2 {
      margin: 0;

      color: #082f3d;

      font-size: 22px;
      font-weight: 800;
    }

    .queue-title-section p {
      margin: 4px 0 0;

      color: #78929b;

      font-size: 12px;
    }

    .appointment-count {
      padding: 10px 17px;

      background: #e9f8f6;

      color: #078d83;

      border-radius: 999px;

      font-size: 12px;
      font-weight: 800;

      white-space: nowrap;
    }


    /* ========================================
       PATIENT ROW
    ======================================== */

    .patient-row {
      display: grid;

      grid-template-columns:
        70px
        54px
        minmax(220px, 1fr)
        145px
        125px
        minmax(220px, 250px);

      align-items: center;

      gap: 20px;

      margin: 12px 20px;

      padding: 18px 20px;

      min-height: 105px;

      box-sizing: border-box;

      border: 1px solid #e5eeee;

      border-radius: 17px;

      background: #ffffff;

      transition:
        transform .2s ease,
        box-shadow .2s ease,
        border-color .2s ease;
    }

    .patient-row:hover {
      transform: translateY(-1px);

      border-color: #cfe3e3;

      box-shadow:
        0 7px 20px rgba(12, 62, 70, .07);
    }

    .patient-row.high-risk {
      background: #fffafa;

      border-left: 4px solid #ef4444;
    }


    /* ========================================
       TIME
    ======================================== */

    .time-column {
      display: flex;
      flex-direction: column;

      gap: 5px;
    }

    .time-column strong {
      color: #082f3d;

      font-size: 17px;
      font-weight: 800;

      white-space: nowrap;
    }

    .time-column span {
      color: #91a1a7;

      font-size: 11px;
    }


    /* ========================================
       AVATAR
    ======================================== */

    .patient-avatar {
      width: 52px;
      height: 52px;

      min-width: 52px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      font-size: 14px;
      font-weight: 800;
    }

    .avatar-green {
      background: #d8f7f1;
      color: #078d83;
    }

    .avatar-red {
      background: #ffe0e0;
      color: #df3030;
    }

    .avatar-blue {
      background: #e2f0ff;
      color: #2775b9;
    }

    .avatar-purple {
      background: #eee6ff;
      color: #7550b7;
    }


    /* ========================================
       PATIENT INFO
    ======================================== */

    .patient-info {
      min-width: 0;
    }

    .patient-info h3 {
      margin: 0 0 5px;

      color: #092f3c;

      font-size: 17px;
      font-weight: 800;

      white-space: nowrap;

      overflow: hidden;

      text-overflow: ellipsis;
    }

    .patient-meta {
      display: block;

      margin-bottom: 7px;

      color: #7c969f;

      font-size: 12px;
    }

    .patient-meta i {
      margin-right: 5px;

      font-size: 10px;
    }

    .patient-info p {
      margin: 0;

      color: #34515b;

      font-size: 12px;

      line-height: 1.4;

      max-width: 100%;
    }


    /* ========================================
       RISK
    ======================================== */

    .risk-column {
      display: flex;
      flex-direction: column;

      align-items: flex-start;

      gap: 8px;

      min-width: 0;
    }

    .risk-column label {
      color: #263f48;

      font-size: 10px;

      font-weight: 800;

      letter-spacing: .5px;
    }

    .risk-badge {
      display: inline-flex;

      align-items: center;

      padding: 9px 13px;

      border-radius: 999px;

      font-size: 12px;

      font-weight: 800;

      white-space: nowrap;
    }

    .risk-badge.low {
      background: #d9f8e6;
      color: #087743;
    }

    .risk-badge.moderate {
      background: #fff0c8;
      color: #a76800;
    }

    .risk-badge.high {
      background: #ffe0e0;
      color: #d52626;
    }


    /* ========================================
       STATUS
    ======================================== */

    .status {
      display: flex;

      align-items: center;

      gap: 7px;

      font-size: 12px;

      font-weight: 800;

      white-space: nowrap;
    }

    .status.waiting {
      color: #d97a00;
    }

    .status.priority {
      color: #e32626;
    }

    .status.scheduled {
      color: #078d83;
    }


    /* ========================================
       ACTION BUTTONS
    ======================================== */

    .consult-btn,
    .review-btn {
      width: 100%;

      min-width: 0;

      height: 50px;

      padding: 0 16px;

      border-radius: 13px;

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 9px;

      font-size: 13px;

      font-weight: 800;

      cursor: pointer;

      white-space: nowrap;

      box-sizing: border-box;

      transition: all .2s ease;

      text-decoration: none;
    }

    .consult-btn {
      background: #119d94;

      color: #ffffff;

      border: 1px solid #119d94;

      box-shadow:
        0 6px 15px rgba(17, 157, 148, .16);
    }

    .consult-btn:hover {
      background: #087f78;

      border-color: #087f78;

      transform: translateY(-1px);

      box-shadow:
        0 8px 18px rgba(17, 157, 148, .22);
    }

    .review-btn {
      background: #ffffff;

      color: #173b47;

      border: 1px solid #dce7e8;
    }

    .review-btn:hover {
      border-color: #ef4444;

      color: #dc2626;

      background: #fff7f7;

      transform: translateY(-1px);
    }

    .consult-btn i:last-child,
    .review-btn i:last-child {
      font-size: 11px;

      margin-left: 4px;
    }


    /* ========================================
       1350px
    ======================================== */

    @media (max-width: 1350px) {

      .patient-row {
        grid-template-columns:
          70px
          52px
          minmax(190px, 1fr)
          135px
          115px
          220px;

        gap: 15px;

        padding: 17px;
      }

      .consult-btn,
      .review-btn {
        font-size: 12px;

        padding: 0 12px;
      }
    }


    /* ========================================
       1100px
    ======================================== */

    @media (max-width: 1100px) {

      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .patient-row {
        grid-template-columns:
          65px
          50px
          minmax(180px, 1fr)
          135px;

        gap: 14px;
      }

      .status {
        display: none;
      }

      .consult-btn,
      .review-btn {
        grid-column: 4;

        grid-row: 1;

        height: 46px;
      }
    }


    /* ========================================
       750px
    ======================================== */

    @media (max-width: 750px) {

      .appointments-page {
        padding: 12px;
      }

      .page-header {
        align-items: flex-start;

        flex-direction: column;
      }

      .header-date {
        width: 100%;

        box-sizing: border-box;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .queue-header {
        padding: 18px;

        align-items: flex-start;

        flex-direction: column;
      }

      .patient-row {
        grid-template-columns:
          55px
          45px
          1fr;

        gap: 12px;

        margin: 10px;

        padding: 16px;
      }

      .patient-info h3 {
        font-size: 15px;
      }

      .risk-column {
        grid-column: 1 / -1;

        margin-top: 5px;
      }

      .status {
        display: flex;

        grid-column: 1 / -1;
      }

      .consult-btn,
      .review-btn {
        grid-column: 1 / -1;

        width: 100%;

        height: 48px;
      }
    }


    /* ========================================
       450px
    ======================================== */

    @media (max-width: 450px) {

      .patient-row {
        grid-template-columns:
          48px
          1fr;
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
      .status,
      .consult-btn,
      .review-btn {
        grid-column: 1 / -1;
      }

      .queue-title-section h2 {
        font-size: 18px;
      }

      .page-header h1 {
        font-size: 24px;
      }
    }

  `]
})
export class DoctorAppointmentsComponent {}