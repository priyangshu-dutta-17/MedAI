import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="doctor-profile-page">

      <!-- Header -->
      <div class="profile-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-user-doctor"></i>
            DOCTOR PROFILE
          </div>

          <h1>Doctor Credentials & Availability</h1>

          <p>
            Manage your professional information, consultation fees,
            clinic details and availability.
          </p>
        </div>

        <span class="verified-badge">
          <i class="fa-solid fa-circle-check"></i>
          WBMC Verified
        </span>
      </div>

      <!-- Profile Overview -->
      <div class="profile-overview card">

        <div class="doctor-avatar">
          AM
        </div>

        <div class="doctor-main-info">
          <h2>Dr. Anirban Mukherjee</h2>

          <p class="specialization">
            <i class="fa-solid fa-heart-pulse"></i>
            Cardiologist
          </p>

          <p class="hospital">
            <i class="fa-solid fa-hospital"></i>
            SSKM Hospital, Kolkata
          </p>

          <div class="profile-tags">
            <span>MBBS</span>
            <span>MD Cardiology</span>
            <span>12+ Years Experience</span>
          </div>
        </div>

        <div class="profile-status">
          <span class="status-dot"></span>
          <div>
            <strong>Available for Consultation</strong>
            <small>Accepting new patients</small>
          </div>
        </div>

      </div>

      <!-- Main Grid -->
      <div class="profile-grid">

        <!-- Professional Information -->
        <div class="card section-card">
          <div class="section-title">
            <div class="section-icon blue">
              <i class="fa-solid fa-id-card"></i>
            </div>

            <div>
              <h3>Professional Information</h3>
              <p>Verified credentials and medical specialization</p>
            </div>
          </div>

          <div class="info-grid">

            <div class="info-item">
              <span>Full Name</span>
              <strong>Dr. Anirban Mukherjee</strong>
            </div>

            <div class="info-item">
              <span>Medical Registration</span>
              <strong>WBMC / 2012 / 45872</strong>
            </div>

            <div class="info-item">
              <span>Specialization</span>
              <strong>Cardiology</strong>
            </div>

            <div class="info-item">
              <span>Experience</span>
              <strong>12+ Years</strong>
            </div>

            <div class="info-item">
              <span>Qualification</span>
              <strong>MBBS, MD, DM Cardiology</strong>
            </div>

            <div class="info-item">
              <span>Hospital</span>
              <strong>SSKM Hospital</strong>
            </div>

          </div>
        </div>

        <!-- Consultation Fees -->
        <div class="card section-card">
          <div class="section-title">
            <div class="section-icon green">
              <i class="fa-solid fa-indian-rupee-sign"></i>
            </div>

            <div>
              <h3>Consultation Fees</h3>
              <p>Set your consultation charges</p>
            </div>
          </div>

          <div class="fee-box">

            <div class="fee-item">
              <div>
                <strong>In-Person Consultation</strong>
                <span>Hospital / Clinic visit</span>
              </div>

              <div class="fee-value">
                ₹800
              </div>
            </div>

            <div class="fee-item">
              <div>
                <strong>Video Consultation</strong>
                <span>Online consultation</span>
              </div>

              <div class="fee-value">
                ₹600
              </div>
            </div>

            <div class="fee-item">
              <div>
                <strong>Follow-up Consultation</strong>
                <span>Within 30 days</span>
              </div>

              <div class="fee-value">
                ₹400
              </div>
            </div>

          </div>

          <button class="btn btn-primary fee-button">
            <i class="fa-solid fa-pen"></i>
            Update Fees
          </button>
        </div>

      </div>

      <!-- Availability -->
      <div class="card availability-card">

        <div class="section-title">
          <div class="section-icon orange">
            <i class="fa-solid fa-calendar-days"></i>
          </div>

          <div>
            <h3>Consultation Availability</h3>
            <p>Manage your weekly consultation schedule</p>
          </div>
        </div>

        <div class="schedule-list">

          <div class="schedule-row">
            <div class="day">
              <strong>Monday</strong>
              <span>Working Day</span>
            </div>

            <div class="time">
              <i class="fa-regular fa-clock"></i>
              05:00 PM — 08:00 PM
            </div>

            <span class="available">
              Available
            </span>
          </div>

          <div class="schedule-row">
            <div class="day">
              <strong>Tuesday</strong>
              <span>Working Day</span>
            </div>

            <div class="time">
              <i class="fa-regular fa-clock"></i>
              05:00 PM — 08:00 PM
            </div>

            <span class="available">
              Available
            </span>
          </div>

          <div class="schedule-row">
            <div class="day">
              <strong>Wednesday</strong>
              <span>Working Day</span>
            </div>

            <div class="time">
              <i class="fa-regular fa-clock"></i>
              05:00 PM — 08:00 PM
            </div>

            <span class="available">
              Available
            </span>
          </div>

          <div class="schedule-row">
            <div class="day">
              <strong>Thursday</strong>
              <span>Working Day</span>
            </div>

            <div class="time">
              <i class="fa-regular fa-clock"></i>
              05:00 PM — 08:00 PM
            </div>

            <span class="available">
              Available
            </span>
          </div>

          <div class="schedule-row">
            <div class="day">
              <strong>Friday</strong>
              <span>Working Day</span>
            </div>

            <div class="time">
              <i class="fa-regular fa-clock"></i>
              05:00 PM — 08:00 PM
            </div>

            <span class="available">
              Available
            </span>
          </div>

          <div class="schedule-row disabled">
            <div class="day">
              <strong>Saturday</strong>
              <span>Weekly Off</span>
            </div>

            <div class="time">
              Not Available
            </div>

            <span class="off">
              Off
            </span>
          </div>

          <div class="schedule-row disabled">
            <div class="day">
              <strong>Sunday</strong>
              <span>Weekly Off</span>
            </div>

            <div class="time">
              Not Available
            </div>

            <span class="off">
              Off
            </span>
          </div>

        </div>

        <div class="availability-footer">
          <button class="btn btn-outline">
            <i class="fa-solid fa-calendar-pen"></i>
            Edit Availability
          </button>
        </div>

      </div>

      <!-- Contact & Clinic -->
      <div class="profile-grid bottom-grid">

        <div class="card section-card">
          <div class="section-title">
            <div class="section-icon purple">
              <i class="fa-solid fa-address-book"></i>
            </div>

            <div>
              <h3>Contact Information</h3>
              <p>Professional contact details</p>
            </div>
          </div>

          <div class="contact-list">

            <div>
              <i class="fa-solid fa-envelope"></i>
              <span>doctor&#64;wbhealth.in</span>
            </div>

            <div>
              <i class="fa-solid fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <i class="fa-solid fa-location-dot"></i>
              <span>Kolkata, West Bengal</span>
            </div>

          </div>
        </div>

        <div class="card section-card">
          <div class="section-title">
            <div class="section-icon teal">
              <i class="fa-solid fa-hospital"></i>
            </div>

            <div>
              <h3>Clinic / Hospital Details</h3>
              <p>Primary consultation location</p>
            </div>
          </div>

          <div class="clinic-details">
            <h4>SSKM Hospital</h4>

            <p>
              <i class="fa-solid fa-location-dot"></i>
              244 A.J.C. Bose Road, Kolkata
            </p>

            <p>
              <i class="fa-solid fa-building"></i>
              Department of Cardiology
            </p>

            <span class="hospital-status">
              <i class="fa-solid fa-circle-check"></i>
              Verified Facility
            </span>
          </div>
        </div>

      </div>

    </div>
  `,
  styles: [`
    .doctor-profile-page {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 8px 12px 40px;
      box-sizing: border-box;
    }

    .profile-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 22px;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #0f8f86;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .profile-header h1 {
      margin: 0;
      font-size: 30px;
      font-weight: 800;
      color: #082f3b;
      letter-spacing: -0.6px;
    }

    .profile-header p {
      margin: 7px 0 0;
      color: #71858c;
      font-size: 14px;
    }

    .verified-badge {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 9px 14px;
      border-radius: 999px;
      background: #e9fbf2;
      color: #09834d;
      font-size: 13px;
      font-weight: 800;
      white-space: nowrap;
    }

    .card {
      background: #ffffff;
      border: 1px solid #edf2f3;
      border-radius: 22px;
      box-shadow: 0 8px 28px rgba(20, 65, 75, 0.06);
    }

    .profile-overview {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 24px;
      margin-bottom: 18px;
    }

    .doctor-avatar {
      width: 76px;
      height: 76px;
      flex: 0 0 76px;
      border-radius: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #10b8a9, #087f7a);
      color: #fff;
      font-size: 23px;
      font-weight: 800;
      box-shadow: 0 8px 18px rgba(8, 127, 122, 0.22);
    }

    .doctor-main-info {
      flex: 1;
      min-width: 0;
    }

    .doctor-main-info h2 {
      margin: 0 0 6px;
      color: #082f3b;
      font-size: 21px;
    }

    .specialization,
    .hospital {
      margin: 5px 0;
      color: #657d84;
      font-size: 13px;
    }

    .specialization i {
      color: #ef4444;
      margin-right: 6px;
    }

    .hospital i {
      color: #0f9c92;
      margin-right: 6px;
    }

    .profile-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 11px;
    }

    .profile-tags span {
      padding: 5px 9px;
      background: #f2f8f8;
      border: 1px solid #dceeed;
      border-radius: 7px;
      color: #287078;
      font-size: 11px;
      font-weight: 700;
    }

    .profile-status {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 13px 16px;
      border-radius: 14px;
      background: #f1fbf7;
      border: 1px solid #d9f2e7;
    }

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #16a36b;
      box-shadow: 0 0 0 4px #d9f5e8;
    }

    .profile-status strong {
      display: block;
      font-size: 12px;
      color: #08764d;
    }

    .profile-status small {
      display: block;
      color: #6c8580;
      font-size: 10px;
      margin-top: 3px;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 18px;
      margin-bottom: 18px;
    }

    .section-card {
      padding: 22px;
    }

    .section-title {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 20px;
    }

    .section-title h3 {
      margin: 0;
      color: #123b46;
      font-size: 17px;
      font-weight: 800;
    }

    .section-title p {
      margin: 4px 0 0;
      color: #82959a;
      font-size: 12px;
    }

    .section-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }

    .section-icon.blue {
      background: #eaf5ff;
      color: #1781c5;
    }

    .section-icon.green {
      background: #e9faf2;
      color: #0b9b64;
    }

    .section-icon.orange {
      background: #fff4e7;
      color: #e88318;
    }

    .section-icon.purple {
      background: #f3edff;
      color: #8055c9;
    }

    .section-icon.teal {
      background: #e8f9f8;
      color: #078f89;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .info-item {
      padding-bottom: 13px;
      border-bottom: 1px solid #eef2f3;
    }

    .info-item span {
      display: block;
      color: #8a9ba0;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .4px;
      margin-bottom: 5px;
    }

    .info-item strong {
      color: #183e48;
      font-size: 13px;
    }

    .fee-box {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .fee-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      border-bottom: 1px solid #edf2f3;
    }

    .fee-item strong {
      display: block;
      color: #234650;
      font-size: 13px;
    }

    .fee-item span {
      display: block;
      color: #8a9ba0;
      font-size: 11px;
      margin-top: 3px;
    }

    .fee-value {
      color: #087f78;
      font-size: 18px;
      font-weight: 800;
    }

    .fee-button {
      margin-top: 18px;
    }

    .availability-card {
      padding: 22px;
      margin-bottom: 18px;
    }

    .schedule-list {
      border: 1px solid #edf2f3;
      border-radius: 14px;
      overflow: hidden;
    }

    .schedule-row {
      display: grid;
      grid-template-columns: 1fr 1.3fr 110px;
      align-items: center;
      gap: 15px;
      padding: 13px 16px;
      border-bottom: 1px solid #edf2f3;
    }

    .schedule-row:last-child {
      border-bottom: none;
    }

    .schedule-row:hover {
      background: #fbfdfd;
    }

    .day strong {
      display: block;
      color: #234650;
      font-size: 13px;
    }

    .day span {
      color: #9aa9ad;
      font-size: 10px;
    }

    .time {
      color: #536e75;
      font-size: 12px;
    }

    .time i {
      color: #0b9991;
      margin-right: 6px;
    }

    .available,
    .off {
      justify-self: end;
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 800;
    }

    .available {
      background: #e8faf0;
      color: #07834e;
    }

    .off {
      background: #f1f3f4;
      color: #8a969a;
    }

    .schedule-row.disabled {
      background: #fafbfb;
    }

    .schedule-row.disabled .day strong,
    .schedule-row.disabled .time {
      color: #9ba8ab;
    }

    .availability-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 18px;
    }

    .btn {
      border: none;
      border-radius: 10px;
      padding: 10px 15px;
      font-size: 12px;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
    }

    .btn-primary {
      background: #0c9189;
      color: white;
      box-shadow: 0 6px 15px rgba(12, 145, 137, .18);
    }

    .btn-primary:hover {
      background: #087c76;
    }

    .btn-outline {
      background: white;
      color: #087f78;
      border: 1px solid #b9deda;
    }

    .btn-outline:hover {
      background: #effaf9;
    }

    .bottom-grid {
      margin-bottom: 0;
    }

    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .contact-list div {
      display: flex;
      align-items: center;
      gap: 11px;
      color: #506c74;
      font-size: 13px;
      padding: 10px;
      background: #fafcfc;
      border-radius: 10px;
    }

    .contact-list i {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eef8f7;
      color: #0a9089;
    }

    .clinic-details h4 {
      margin: 0 0 12px;
      color: #183f49;
      font-size: 16px;
    }

    .clinic-details p {
      color: #607a81;
      font-size: 12px;
      margin: 10px 0;
    }

    .clinic-details p i {
      width: 20px;
      color: #0c938c;
    }

    .hospital-status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 6px;
      padding: 6px 10px;
      border-radius: 8px;
      background: #eafaf2;
      color: #087f4d;
      font-size: 10px;
      font-weight: 800;
    }

    @media (max-width: 900px) {
      .profile-grid {
        grid-template-columns: 1fr;
      }

      .profile-overview {
        align-items: flex-start;
        flex-wrap: wrap;
      }

      .profile-status {
        width: 100%;
        box-sizing: border-box;
      }
    }

    @media (max-width: 650px) {
      .profile-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .profile-header h1 {
        font-size: 24px;
      }

      .info-grid {
        grid-template-columns: 1fr;
      }

      .schedule-row {
        grid-template-columns: 1fr;
        gap: 7px;
      }

      .available,
      .off {
        justify-self: start;
      }
    }
  `]
})
export class DoctorProfileComponent {}