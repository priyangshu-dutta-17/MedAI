import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `

    <div class="patient-dashboard">

      <!-- ================================
           TOP HEADER
      ================================= -->

      <header class="dashboard-header">

        <div
          class="welcome-area"
          *ngIf="authService.currentUser$ | async as user">

          <div class="welcome-content">

            <span class="eyebrow">
              <span class="status-dot"></span>
              PATIENT HEALTH PORTAL
            </span>

            <h1>
              Good to see you,
              <span>{{ user.name }}</span>
            </h1>

            <p>
              Here's your health overview for today.
              Stay informed, stay healthy.
            </p>

          </div>

        </div>


        <div class="header-actions">

          <a
            routerLink="/patient/disease-prediction"
            class="primary-action">

            <i class="fa-solid fa-stethoscope"></i>

            <span>Check Symptoms</span>

          </a>


          <a
            routerLink="/patient/appointments"
            class="secondary-action">

            <i class="fa-regular fa-calendar"></i>

            <span>Book Doctor</span>

          </a>

        </div>

      </header>



      <!-- ================================
           HEALTH OVERVIEW
      ================================= -->

      <section class="overview-section">

        <div class="section-heading">

          <div>

            <span class="section-label">
              HEALTH OVERVIEW
            </span>

            <h2>
              Your health at a glance
            </h2>

          </div>

          <span class="updated-text">
            <i class="fa-regular fa-clock"></i>
            Updated today
          </span>

        </div>



        <div class="metrics-grid">


          <!-- Appointment -->

          <div class="metric-card">

            <div class="metric-top">

              <div class="metric-icon appointment-icon">
                <i class="fa-regular fa-calendar-check"></i>
              </div>

              <span class="metric-status upcoming">
                UPCOMING
              </span>

            </div>

            <span class="metric-label">
              NEXT APPOINTMENT
            </span>

            <h3>
              05 Sep 2026
            </h3>

            <p>
              <i class="fa-solid fa-user-doctor"></i>
              Dr. A. Mukherjee
            </p>

            <span class="metric-location">
              SSKM Hospital
            </span>

          </div>



          <!-- Prescriptions -->

          <div class="metric-card">

            <div class="metric-top">

              <div class="metric-icon prescription-icon">
                <i class="fa-solid fa-pills"></i>
              </div>

              <span class="metric-status active">
                ACTIVE
              </span>

            </div>

            <span class="metric-label">
              PRESCRIPTIONS
            </span>

            <h3>
              2 Medicines
            </h3>

            <p>
              Telmisartan & Atorvastatin
            </p>

            <span class="metric-location">
              Current prescriptions
            </span>

          </div>



          <!-- Diabetes -->

          <div class="metric-card">

            <div class="metric-top">

              <div class="metric-icon diabetes-icon">
                <i class="fa-solid fa-droplet"></i>
              </div>

              <span class="metric-status low">
                LOW RISK
              </span>

            </div>

            <span class="metric-label">
              DIABETES RISK
            </span>

            <h3>
              18%
            </h3>

            <p>
              Low risk level
            </p>

            <span class="metric-location">
              Normal fasting glucose
            </span>

          </div>



          <!-- Healthcare -->

          <div class="metric-card">

            <div class="metric-top">

              <div class="metric-icon locator-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>

              <span class="metric-status online">
                ONLINE
              </span>

            </div>

            <span class="metric-label">
              HEALTHCARE LOCATOR
            </span>

            <h3>
              26 Facilities
            </h3>

            <p>
              West Bengal network
            </p>

            <span class="metric-location">
              All 23 districts online
            </span>

          </div>

        </div>

      </section>



      <!-- ================================
           MAIN CONTENT
      ================================= -->

      <div class="dashboard-grid">


        <!-- ================================
             AI SUITE
        ================================= -->

        <section class="dashboard-card ai-card">

          <div class="card-heading">

            <div class="heading-left">

              <div class="heading-icon ai-heading-icon">

                <i class="fa-solid fa-brain"></i>

              </div>

              <div>

                <span class="card-eyebrow">
                  INTELLIGENT HEALTHCARE
                </span>

                <h2>
                  AI & ML Diagnostic Suite
                </h2>

              </div>

            </div>

            <span class="powered-badge">
              <span></span>
              AI POWERED
            </span>

          </div>


          <p class="card-description">
            Use our intelligent healthcare tools to
            understand your symptoms and assess potential
            health risks.
          </p>



          <div class="ai-tools">


            <a
              routerLink="/patient/disease-prediction"
              class="ai-tool">

              <div class="tool-icon disease">
                <i class="fa-solid fa-virus"></i>
              </div>

              <div class="tool-content">

                <strong>
                  Disease Predictor
                </strong>

                <span>
                  Analyze 130+ symptoms
                </span>

              </div>

              <i class="fa-solid fa-arrow-right tool-arrow"></i>

            </a>



            <a
              routerLink="/patient/diabetes-risk"
              class="ai-tool">

              <div class="tool-icon diabetes">
                <i class="fa-solid fa-droplet"></i>
              </div>

              <div class="tool-content">

                <strong>
                  Diabetes Calculator
                </strong>

                <span>
                  Calculate metabolic risk
                </span>

              </div>

              <i class="fa-solid fa-arrow-right tool-arrow"></i>

            </a>



            <a
              routerLink="/patient/heart-risk"
              class="ai-tool">

              <div class="tool-icon heart">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <div class="tool-content">

                <strong>
                  Heart Risk Evaluator
                </strong>

                <span>
                  Assess cardiovascular risk
                </span>

              </div>

              <i class="fa-solid fa-arrow-right tool-arrow"></i>

            </a>



            <a
              routerLink="/patient/ai-assistant"
              class="ai-tool">

              <div class="tool-icon assistant">
                <i class="fa-solid fa-robot"></i>
              </div>

              <div class="tool-content">

                <strong>
                  AI Health Assistant
                </strong>

                <span>
                  Get instant health guidance
                </span>

              </div>

              <i class="fa-solid fa-arrow-right tool-arrow"></i>

            </a>

          </div>

        </section>



        <!-- ================================
             MEDICAL RECORDS
        ================================= -->

        <section class="dashboard-card records-card">

          <div class="card-heading">

            <div class="heading-left">

              <div class="heading-icon records-heading-icon">

                <i class="fa-solid fa-file-medical"></i>

              </div>

              <div>

                <span class="card-eyebrow">
                  HEALTH HISTORY
                </span>

                <h2>
                  Recent Medical Records
                </h2>

              </div>

            </div>


            <a
              routerLink="/patient/medical-records"
              class="view-all">

              View all

              <i class="fa-solid fa-arrow-right"></i>

            </a>

          </div>



          <div class="records-list">


            <!-- Record 1 -->

            <div class="record">

              <div class="record-date">

                <span>
                  AUG
                </span>

                <strong>
                  15
                </strong>

              </div>


              <div class="record-content">

                <div class="record-title-row">

                  <h3>
                    Mild Essential Hypertension
                  </h3>

                  <span class="record-badge diagnosed">
                    Diagnosed
                  </span>

                </div>

                <p>
                  Stage 1 · Dr. Anirban Mukherjee
                </p>

                <span class="record-hospital">
                  <i class="fa-solid fa-hospital"></i>
                  SSKM Hospital
                </span>

              </div>

            </div>



            <!-- Record 2 -->

            <div class="record">

              <div class="record-date">

                <span>
                  RECENT
                </span>

                <i class="fa-solid fa-file-waveform"></i>

              </div>


              <div class="record-content">

                <div class="record-title-row">

                  <h3>
                    Lipid Profile & Resting ECG
                  </h3>

                  <span class="record-badge normal">
                    Normal
                  </span>

                </div>

                <p>
                  Diagnostic health screening
                </p>

                <span class="record-hospital">
                  <i class="fa-solid fa-hospital"></i>
                  Suraksha Diagnostic Centre
                </span>

              </div>

            </div>

          </div>



          <div class="records-footer">

            <i class="fa-solid fa-shield-heart"></i>

            Your medical records are securely maintained.

          </div>

        </section>

      </div>



      <!-- ================================
           QUICK ACCESS
      ================================= -->

      <section class="quick-section">

        <div class="section-heading">

          <div>

            <span class="section-label">
              QUICK ACCESS
            </span>

            <h2>
              Manage your healthcare
            </h2>

          </div>

        </div>


        <div class="quick-grid">


          <a
            routerLink="/patient/profile"
            class="quick-card">

            <div class="quick-icon profile">
              <i class="fa-regular fa-user"></i>
            </div>

            <div>

              <strong>
                My Profile
              </strong>

              <span>
                Personal information
              </span>

            </div>

            <i class="fa-solid fa-chevron-right"></i>

          </a>



          <a
            routerLink="/patient/prescriptions"
            class="quick-card">

            <div class="quick-icon medicine">
              <i class="fa-solid fa-prescription-bottle-medical"></i>
            </div>

            <div>

              <strong>
                Prescriptions
              </strong>

              <span>
                View your medicines
              </span>

            </div>

            <i class="fa-solid fa-chevron-right"></i>

          </a>



          <a
            routerLink="/patient/appointments"
            class="quick-card">

            <div class="quick-icon calendar">
              <i class="fa-regular fa-calendar-days"></i>
            </div>

            <div>

              <strong>
                Appointments
              </strong>

              <span>
                Manage appointments
              </span>

            </div>

            <i class="fa-solid fa-chevron-right"></i>

          </a>



          <a
            routerLink="/patient/healthcare-locator"
            class="quick-card">

            <div class="quick-icon location">
              <i class="fa-solid fa-map-location-dot"></i>
            </div>

            <div>

              <strong>
                Find Healthcare
              </strong>

              <span>
                Hospitals & facilities
              </span>

            </div>

            <i class="fa-solid fa-chevron-right"></i>

          </a>

        </div>

      </section>

    </div>

  `,

  styles: [`

    /* =========================================
       BASE
    ========================================= */

    :host {
      display: block;
    }


    * {
      box-sizing: border-box;
    }


    .patient-dashboard {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      padding: 10px 4px 50px;

      color: #173d3a;

      font-family:
        'Inter',
        sans-serif;
    }



    /* =========================================
       HEADER
    ========================================= */

    .dashboard-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 30px;

      margin-bottom: 42px;
    }


    .welcome-content {
      animation: fadeUp .6s ease both;
    }


    .eyebrow {
      display: flex;
      align-items: center;
      gap: 8px;

      color: #07877e;

      font-size: 9px;
      font-weight: 800;

      letter-spacing: .16em;
    }


    .status-dot {
      width: 7px;
      height: 7px;

      border-radius: 50%;

      background: #13aa9e;

      box-shadow:
        0 0 0 5px
        rgba(19,170,158,.10);
    }


    .welcome-content h1 {
      margin: 13px 0 8px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: clamp(2rem, 3vw, 3rem);

      line-height: 1.12;

      letter-spacing: -.055em;

      font-weight: 800;
    }


    .welcome-content h1 span {
      color: #087d76;
    }


    .welcome-content p {
      margin: 0;

      color: #829995;

      font-size: 11px;

      line-height: 1.7;
    }


    .header-actions {
      display: flex;
      gap: 9px;

      flex-shrink: 0;
    }


    .primary-action,
    .secondary-action {
      height: 42px;

      display: inline-flex;
      align-items: center;
      justify-content: center;

      gap: 8px;

      padding: 0 16px;

      border-radius: 10px;

      text-decoration: none;

      font-size: 10px;
      font-weight: 800;

      transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease;
    }


    .primary-action {
      color: white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #14aa9e
        );

      box-shadow:
        0 9px 22px
        rgba(8,125,118,.15);
    }


    .secondary-action {
      color: #087d76;

      background: white;

      border: 1px solid #dceae8;
    }


    .primary-action:hover,
    .secondary-action:hover {
      transform: translateY(-2px);
    }


    .primary-action:hover {
      box-shadow:
        0 14px 28px
        rgba(8,125,118,.22);
    }


    .secondary-action:hover {
      border-color: #9dd4cf;
    }



    /* =========================================
       SECTION HEADINGS
    ========================================= */

    .overview-section,
    .quick-section {
      margin-bottom: 38px;
    }


    .section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      margin-bottom: 17px;
    }


    .section-label {
      display: block;

      margin-bottom: 5px;

      color: #9badab;

      font-size: 8px;
      font-weight: 800;

      letter-spacing: .15em;
    }


    .section-heading h2 {
      margin: 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 17px;

      letter-spacing: -.035em;

      font-weight: 800;
    }


    .updated-text {
      color: #9badaa;

      font-size: 9px;
    }


    .updated-text i {
      margin-right: 4px;
    }



    /* =========================================
       METRICS
    ========================================= */

    .metrics-grid {
      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 13px;
    }


    .metric-card {
      position: relative;

      min-height: 166px;

      padding: 19px;

      overflow: hidden;

      background: white;

      border:
        1px solid #e7efee;

      border-radius: 16px;

      box-shadow:
        0 7px 25px
        rgba(25,80,76,.035);

      transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease;

      animation:
        fadeUp .6s ease both;
    }


    .metric-card:hover {
      transform: translateY(-3px);

      border-color: #cfe3e0;

      box-shadow:
        0 14px 35px
        rgba(25,80,76,.07);
    }


    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 16px;
    }


    .metric-icon {
      width: 36px;
      height: 36px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      font-size: 13px;
    }


    .appointment-icon {
      color: #087d76;
      background: #e7f7f4;
    }


    .prescription-icon {
      color: #518b70;
      background: #edf7f0;
    }


    .diabetes-icon {
      color: #bf8b46;
      background: #fbf3e6;
    }


    .locator-icon {
      color: #6879a8;
      background: #eef0fa;
    }


    .metric-status {
      padding: 4px 7px;

      border-radius: 20px;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .05em;
    }


    .upcoming {
      color: #087d76;
      background: #e9f8f5;
    }


    .active {
      color: #52856e;
      background: #edf7f0;
    }


    .low {
      color: #a2763d;
      background: #faf2e3;
    }


    .online {
      color: #6979a7;
      background: #eef0fa;
    }


    .metric-label {
      display: block;

      color: #9aa9a7;

      font-size: 8px;
      font-weight: 800;

      letter-spacing: .08em;
    }


    .metric-card h3 {
      margin: 6px 0 6px;

      color: #214440;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 18px;

      letter-spacing: -.035em;
    }


    .metric-card p {
      margin: 0;

      color: #5f7975;

      font-size: 9px;
      font-weight: 600;
    }


    .metric-card p i {
      margin-right: 4px;

      color: #809a96;
    }


    .metric-location {
      display: block;

      margin-top: 5px;

      color: #a0afad;

      font-size: 8px;
    }



    /* =========================================
       MAIN GRID
    ========================================= */

    .dashboard-grid {
      display: grid;

      grid-template-columns:
        minmax(0, 1.08fr)
        minmax(0, .92fr);

      gap: 13px;

      margin-bottom: 38px;
    }


    .dashboard-card {
      padding: 23px;

      background: white;

      border:
        1px solid #e7efee;

      border-radius: 17px;

      box-shadow:
        0 7px 25px
        rgba(25,80,76,.035);
    }


    .card-heading {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 15px;

      margin-bottom: 9px;
    }


    .heading-left {
      display: flex;

      align-items: center;

      gap: 11px;
    }


    .heading-icon {
      width: 38px;
      height: 38px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 11px;

      font-size: 13px;
    }


    .ai-heading-icon {
      color: #087d76;
      background: #e7f7f4;
    }


    .records-heading-icon {
      color: #607ba2;
      background: #edf2fa;
    }


    .card-eyebrow {
      display: block;

      margin-bottom: 3px;

      color: #a0afad;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .13em;
    }


    .card-heading h2 {
      margin: 0;

      color: #254642;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 14px;

      letter-spacing: -.025em;
    }


    .powered-badge {
      display: flex;

      align-items: center;

      gap: 5px;

      color: #0a9187;

      font-size: 7px;
      font-weight: 800;

      letter-spacing: .08em;
    }


    .powered-badge span {
      width: 5px;
      height: 5px;

      border-radius: 50%;

      background: #14aa9e;
    }


    .card-description {
      max-width: 520px;

      margin: 0 0 19px;

      color: #899c99;

      font-size: 9px;

      line-height: 1.65;
    }



    /* =========================================
       AI TOOLS
    ========================================= */

    .ai-tools {
      display: grid;

      grid-template-columns:
        1fr 1fr;

      gap: 9px;
    }


    .ai-tool {
      min-height: 76px;

      display: flex;

      align-items: center;

      gap: 10px;

      position: relative;

      padding: 11px;

      color: inherit;

      text-decoration: none;

      background: #fcfefe;

      border:
        1px solid #e7efee;

      border-radius: 12px;

      transition:
        transform .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;
    }


    .ai-tool:hover {
      transform: translateY(-2px);

      border-color: #b9dcd8;

      box-shadow:
        0 9px 22px
        rgba(20,100,94,.06);
    }


    .tool-icon {
      width: 34px;
      height: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 9px;

      font-size: 11px;
    }


    .tool-icon.disease {
      color: #087d76;
      background: #e6f7f4;
    }


    .tool-icon.diabetes {
      color: #b98542;
      background: #faf2e4;
    }


    .tool-icon.heart {
      color: #c7656e;
      background: #faecee;
    }


    .tool-icon.assistant {
      color: #6d79a8;
      background: #eef0fa;
    }


    .tool-content {
      min-width: 0;
    }


    .tool-content strong {
      display: block;

      margin-bottom: 3px;

      color: #3c5a56;

      font-size: 9px;
      font-weight: 800;
    }


    .tool-content span {
      display: block;

      color: #9aaba9;

      font-size: 7px;
    }


    .tool-arrow {
      margin-left: auto;

      color: #b0bfbd;

      font-size: 8px;

      transition:
        transform .2s ease,
        color .2s ease;
    }


    .ai-tool:hover .tool-arrow {
      color: #087d76;

      transform:
        translateX(3px);
    }



    /* =========================================
       RECORDS
    ========================================= */

    .view-all {
      display: flex;

      align-items: center;

      gap: 5px;

      color: #087d76;

      text-decoration: none;

      font-size: 8px;
      font-weight: 800;
    }


    .view-all i {
      font-size: 7px;

      transition:
        transform .2s ease;
    }


    .view-all:hover i {
      transform:
        translateX(3px);
    }


    .records-list {
      border-top:
        1px solid #edf2f1;
    }


    .record {
      display: flex;

      gap: 12px;

      padding: 17px 0;

      border-bottom:
        1px solid #edf2f1;
    }


    .record-date {
      width: 40px;
      height: 48px;

      display: flex;

      flex-direction: column;

      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 9px;

      color: #087d76;

      background: #eff9f7;
    }


    .record-date span {
      font-size: 6px;
      font-weight: 800;

      letter-spacing: .04em;
    }


    .record-date strong {
      margin-top: 2px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 15px;
    }


    .record-date i {
      font-size: 15px;
    }


    .record-content {
      min-width: 0;
      flex: 1;
    }


    .record-title-row {
      display: flex;

      align-items: flex-start;
      justify-content: space-between;

      gap: 10px;
    }


    .record-title-row h3 {
      margin: 0;

      color: #3c5754;

      font-size: 9px;
      font-weight: 800;

      line-height: 1.5;
    }


    .record-badge {
      flex-shrink: 0;

      padding: 4px 6px;

      border-radius: 10px;

      font-size: 6px;
      font-weight: 800;
    }


    .record-badge.diagnosed {
      color: #087d76;
      background: #e9f7f5;
    }


    .record-badge.normal {
      color: #4f886c;
      background: #edf7f0;
    }


    .record-content p {
      margin: 4px 0;

      color: #94a4a2;

      font-size: 7px;
    }


    .record-hospital {
      color: #9cadaa;

      font-size: 7px;
    }


    .record-hospital i {
      margin-right: 4px;

      color: #829d99;
    }


    .records-footer {
      display: flex;

      align-items: center;

      gap: 6px;

      padding-top: 15px;

      color: #a0afad;

      font-size: 7px;
    }


    .records-footer i {
      color: #6fa49d;
    }



    /* =========================================
       QUICK ACCESS
    ========================================= */

    .quick-grid {
      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 10px;
    }


    .quick-card {
      display: flex;

      align-items: center;

      gap: 10px;

      min-height: 72px;

      padding: 13px;

      color: inherit;

      text-decoration: none;

      background: white;

      border:
        1px solid #e7efee;

      border-radius: 13px;

      box-shadow:
        0 5px 18px
        rgba(25,80,76,.025);

      transition:
        transform .25s ease,
        border-color .25s ease,
        box-shadow .25s ease;
    }


    .quick-card:hover {
      transform: translateY(-2px);

      border-color: #c2dfdc;

      box-shadow:
        0 10px 25px
        rgba(25,80,76,.06);
    }


    .quick-icon {
      width: 34px;
      height: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 9px;

      font-size: 11px;
    }


    .quick-icon.profile {
      color: #087d76;
      background: #e7f7f4;
    }


    .quick-icon.medicine {
      color: #6d8c71;
      background: #edf6ed;
    }


    .quick-icon.calendar {
      color: #7c779f;
      background: #f0eef9;
    }


    .quick-icon.location {
      color: #6579a6;
      background: #edf0fa;
    }


    .quick-card > div:nth-child(2) {
      min-width: 0;
    }


    .quick-card strong {
      display: block;

      margin-bottom: 3px;

      color: #405b57;

      font-size: 9px;
      font-weight: 800;
    }


    .quick-card span {
      display: block;

      color: #9baaa8;

      font-size: 7px;
    }


    .quick-card > i {
      margin-left: auto;

      color: #b2c0be;

      font-size: 8px;
    }



    /* =========================================
       ANIMATIONS
    ========================================= */

    @keyframes fadeUp {

      from {
        opacity: 0;
        transform: translateY(12px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }

    }



    /* =========================================
       TABLET
    ========================================= */

    @media (max-width: 1100px) {

      .metrics-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }


      .quick-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }


      .dashboard-grid {
        grid-template-columns:
          1fr;
      }

    }



    /* =========================================
       MOBILE
    ========================================= */

    @media (max-width: 700px) {

      .patient-dashboard {
        padding:
          4px 0 35px;
      }


      .dashboard-header {
        flex-direction: column;

        align-items: stretch;

        margin-bottom: 32px;
      }


      .header-actions {
        width: 100%;
      }


      .primary-action,
      .secondary-action {
        flex: 1;
      }


      .welcome-content h1 {
        font-size: 2rem;
      }


      .metrics-grid {
        grid-template-columns:
          1fr 1fr;

        gap: 9px;
      }


      .metric-card {
        min-height: 150px;

        padding: 14px;
      }


      .metric-card h3 {
        font-size: 15px;
      }


      .metric-card p {
        font-size: 8px;
      }


      .dashboard-card {
        padding: 17px;
      }


      .ai-tools {
        grid-template-columns:
          1fr;
      }


      .quick-grid {
        grid-template-columns:
          1fr;
      }

    }



    /* =========================================
       SMALL MOBILE
    ========================================= */

    @media (max-width: 430px) {

      .metrics-grid {
        grid-template-columns:
          1fr;
      }


      .metric-card {
        min-height: auto;
      }


      .section-heading {
        align-items: flex-start;
        gap: 10px;
      }


      .updated-text {
        display: none;
      }


      .header-actions {
        flex-direction: column;
      }


      .record-title-row {
        flex-direction: column;

        gap: 5px;
      }


      .record-badge {
        width: fit-content;
      }

    }

  `]
})
export class PatientDashboardComponent {

  authService = inject(AuthService);

}