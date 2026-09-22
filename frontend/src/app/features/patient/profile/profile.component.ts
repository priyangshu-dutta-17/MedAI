import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="profile-page">

      <!-- Header -->
      <div class="profile-header">
        <div>
          <span class="page-label">PATIENT PORTAL</span>
          <h1>My Health Profile</h1>
          <p>Manage your personal information and health details.</p>
        </div>

        <div class="profile-status">
          <i class="fa-solid fa-circle-check"></i>
          Profile Active
        </div>
      </div>

      <!-- Profile Overview -->
      <div class="profile-grid">

        <!-- Personal Information -->
        <div class="card profile-card">

          <div class="section-header">
            <div class="section-icon primary-icon">
              <i class="fa-solid fa-user"></i>
            </div>

            <div>
              <h2>Personal Information</h2>
              <p>Basic account details</p>
            </div>
          </div>

          <div class="info-list">

            <div class="info-row">
              <span class="info-label">Full Name</span>
              <strong>Patient User</strong>
            </div>

            <div class="info-row">
              <span class="info-label">Email Address</span>
              <strong>patient&#64;wbhealth.in</strong>
            </div>

            <div class="info-row">
              <span class="info-label">Phone Number</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div class="info-row">
              <span class="info-label">Account Type</span>
              <span class="badge badge-primary">Patient</span>
            </div>

            <div class="info-row">
              <span class="info-label">Region</span>
              <strong>West Bengal, India</strong>
            </div>

          </div>

        </div>


        <!-- Health Information -->
        <div class="card profile-card">

          <div class="section-header">
            <div class="section-icon secondary-icon">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div>
              <h2>Health Information</h2>
              <p>Basic health and vital information</p>
            </div>
          </div>

          <div class="vitals-grid">

            <div class="vital-box">
              <span>Blood Group</span>
              <strong>O+</strong>
              <small>Blood Type</small>
            </div>

            <div class="vital-box">
              <span>Height</span>
              <strong>172 cm</strong>
              <small>Body Height</small>
            </div>

            <div class="vital-box">
              <span>Weight</span>
              <strong>68 kg</strong>
              <small>Current Weight</small>
            </div>

            <div class="vital-box">
              <span>BMI</span>
              <strong>23.0</strong>
              <small>Normal Range</small>
            </div>

          </div>

        </div>

      </div>


      <!-- Health Summary -->
      <div class="card health-summary">

        <div class="section-header">
          <div class="section-icon success-icon">
            <i class="fa-solid fa-shield-heart"></i>
          </div>

          <div>
            <h2>Health Summary</h2>
            <p>Current health overview</p>
          </div>
        </div>

        <div class="summary-grid">

          <div class="summary-item">
            <i class="fa-solid fa-droplet"></i>
            <div>
              <span>Diabetes Risk</span>
              <strong class="success-text">Low</strong>
            </div>
          </div>

          <div class="summary-item">
            <i class="fa-solid fa-heart-pulse"></i>
            <div>
              <span>Heart Risk</span>
              <strong class="success-text">Low</strong>
            </div>
          </div>

          <div class="summary-item">
            <i class="fa-solid fa-calendar-check"></i>
            <div>
              <span>Appointments</span>
              <strong>1 Upcoming</strong>
            </div>
          </div>

          <div class="summary-item">
            <i class="fa-solid fa-file-medical"></i>
            <div>
              <span>Medical Records</span>
              <strong>2 Records</strong>
            </div>
          </div>

        </div>

      </div>


      <!-- Disclaimer -->
      <div class="profile-notice">
        <i class="fa-solid fa-circle-info"></i>

        <div>
          <strong>Health Information Notice</strong>
          <p>
            The information displayed in this profile is intended for
            healthcare management and educational purposes. AI-generated
            assessments should not be considered a medical diagnosis.
          </p>
        </div>
      </div>

    </div>
  `,

  styles: [`

    .profile-page {
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Header */

    .profile-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .page-label {
      display: block;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: var(--primary);
      margin-bottom: 0.3rem;
    }

    .profile-header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .profile-header p {
      margin: 0.35rem 0 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .profile-status {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 0.85rem;
      border-radius: var(--radius-full);
      background: var(--success-light);
      color: var(--success);
      font-size: 0.8rem;
      font-weight: 700;
      white-space: nowrap;
    }

    /* Main Cards */

    .profile-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
      margin-bottom: 1.25rem;
    }

    .profile-card {
      padding: 1.5rem;
    }

    /* Section Header */

    .section-header {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    .section-header h2 {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 800;
    }

    .section-header p {
      margin: 0.2rem 0 0;
      color: var(--text-muted);
      font-size: 0.75rem;
    }

    .section-icon {
      width: 42px;
      height: 42px;
      flex-shrink: 0;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .primary-icon {
      background: var(--primary-light);
      color: var(--primary);
    }

    .secondary-icon {
      background: var(--secondary-light);
      color: var(--secondary);
    }

    .success-icon {
      background: var(--success-light);
      color: var(--success);
    }

    /* Personal Information */

    .info-list {
      display: flex;
      flex-direction: column;
    }

    .info-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.8rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .info-row:last-child {
      border-bottom: none;
    }

    .info-label {
      color: var(--text-muted);
      font-size: 0.8rem;
    }

    .info-row strong {
      color: var(--text-main);
      font-size: 0.85rem;
      text-align: right;
    }

    /* Vitals */

    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }

    .vital-box {
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background: var(--bg-main);
    }

    .vital-box span {
      display: block;
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 600;
    }

    .vital-box strong {
      display: block;
      margin-top: 0.25rem;
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .vital-box small {
      display: block;
      margin-top: 0.2rem;
      color: var(--text-muted);
      font-size: 0.7rem;
    }

    /* Health Summary */

    .health-summary {
      padding: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .summary-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
    }

    .summary-item > i {
      font-size: 1.1rem;
      color: var(--primary);
    }

    .summary-item span {
      display: block;
      color: var(--text-muted);
      font-size: 0.72rem;
    }

    .summary-item strong {
      display: block;
      margin-top: 0.2rem;
      font-size: 0.85rem;
    }

    .success-text {
      color: var(--success);
    }

    /* Notice */

    .profile-notice {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      padding: 1rem 1.2rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background: var(--bg-card);
      color: var(--text-muted);
    }

    .profile-notice > i {
      color: var(--primary);
      margin-top: 0.15rem;
    }

    .profile-notice strong {
      color: var(--text-main);
      font-size: 0.8rem;
    }

    .profile-notice p {
      margin: 0.25rem 0 0;
      font-size: 0.75rem;
      line-height: 1.5;
    }

    /* Responsive */

    @media (max-width: 900px) {

      .profile-grid {
        grid-template-columns: 1fr;
      }

      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 600px) {

      .profile-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .profile-header h1 {
        font-size: 1.6rem;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .info-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 0.25rem;
      }

      .info-row strong {
        text-align: left;
      }

    }

  `]
})
export class PatientProfileComponent {}