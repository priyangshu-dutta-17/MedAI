import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-verification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="verification-page">

      <!-- HEADER -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-user-check"></i>
            DOCTOR VERIFICATION
          </div>

          <h1>Medical License Verification</h1>

          <p>
            Review and validate doctor credentials before granting access
            to the West Bengal healthcare network.
          </p>
        </div>

        <div class="verification-status">
          <span></span>
          WBMC Registry Connected
        </div>
      </div>

      <!-- SUMMARY CARDS -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-hourglass-half"></i>
          </div>
          <div>
            <span>Pending Review</span>
            <strong>07</strong>
            <small>Require administrator action</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <span>Verified Doctors</span>
            <strong>84</strong>
            <small>Active verified accounts</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon red">
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div>
            <span>Rejected</span>
            <strong>03</strong>
            <small>Credential issues found</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-user-doctor"></i>
          </div>
          <div>
            <span>Total Applications</span>
            <strong>94</strong>
            <small>Verification requests</small>
          </div>
        </div>

      </div>

      <!-- VERIFICATION PANEL -->
      <div class="verification-panel">

        <div class="panel-header">

          <div>
            <h2>
              <i class="fa-solid fa-clipboard-check"></i>
              Verification Requests
            </h2>

            <p>Review submitted practitioner credentials</p>
          </div>

          <div class="filter-area">

            <button class="filter active">
              All
            </button>

            <button class="filter">
              Pending
            </button>

            <button class="filter">
              Verified
            </button>

            <button class="filter">
              Rejected
            </button>

          </div>

        </div>

        <!-- REQUEST 1 -->
        <div class="doctor-request">

          <div class="doctor-avatar green">
            AM
          </div>

          <div class="doctor-details">

            <div class="doctor-name-row">
              <strong>Dr. Arindam Mukherjee</strong>
              <span class="pending-badge">
                <span></span>
                Pending Review
              </span>
            </div>

            <p class="specialization">
              Cardiologist · SSKM Hospital, Kolkata
            </p>

            <div class="credential-grid">

              <div>
                <span>WBMC REGISTRATION</span>
                <strong>WBMC-2019-45872</strong>
              </div>

              <div>
                <span>QUALIFICATION</span>
                <strong>MBBS, MD Cardiology</strong>
              </div>

              <div>
                <span>EXPERIENCE</span>
                <strong>8 Years</strong>
              </div>

              <div>
                <span>SUBMITTED</span>
                <strong>Aug 29, 2026</strong>
              </div>

            </div>

          </div>

          <div class="request-actions">

            <button class="view-btn">
              <i class="fa-solid fa-file-lines"></i>
              View Documents
            </button>

            <button class="verify-btn">
              <i class="fa-solid fa-check"></i>
              Verify
            </button>

            <button class="reject-btn">
              <i class="fa-solid fa-xmark"></i>
              Reject
            </button>

          </div>

        </div>

        <!-- REQUEST 2 -->
        <div class="doctor-request">

          <div class="doctor-avatar blue">
            SR
          </div>

          <div class="doctor-details">

            <div class="doctor-name-row">
              <strong>Dr. Sayan Roy</strong>
              <span class="pending-badge">
                <span></span>
                Pending Review
              </span>
            </div>

            <p class="specialization">
              General Physician · NRS Medical College, Kolkata
            </p>

            <div class="credential-grid">

              <div>
                <span>WBMC REGISTRATION</span>
                <strong>WBMC-2021-78241</strong>
              </div>

              <div>
                <span>QUALIFICATION</span>
                <strong>MBBS, MD Medicine</strong>
              </div>

              <div>
                <span>EXPERIENCE</span>
                <strong>5 Years</strong>
              </div>

              <div>
                <span>SUBMITTED</span>
                <strong>Aug 28, 2026</strong>
              </div>

            </div>

          </div>

          <div class="request-actions">

            <button class="view-btn">
              <i class="fa-solid fa-file-lines"></i>
              View Documents
            </button>

            <button class="verify-btn">
              <i class="fa-solid fa-check"></i>
              Verify
            </button>

            <button class="reject-btn">
              <i class="fa-solid fa-xmark"></i>
              Reject
            </button>

          </div>

        </div>

        <!-- REQUEST 3 -->
        <div class="doctor-request">

          <div class="doctor-avatar purple">
            NP
          </div>

          <div class="doctor-details">

            <div class="doctor-name-row">
              <strong>Dr. Nandita Paul</strong>
              <span class="pending-badge">
                <span></span>
                Pending Review
              </span>
            </div>

            <p class="specialization">
              Dermatologist · AMRI Hospital, Kolkata
            </p>

            <div class="credential-grid">

              <div>
                <span>WBMC REGISTRATION</span>
                <strong>WBMC-2022-61389</strong>
              </div>

              <div>
                <span>QUALIFICATION</span>
                <strong>MBBS, MD Dermatology</strong>
              </div>

              <div>
                <span>EXPERIENCE</span>
                <strong>4 Years</strong>
              </div>

              <div>
                <span>SUBMITTED</span>
                <strong>Aug 27, 2026</strong>
              </div>

            </div>

          </div>

          <div class="request-actions">

            <button class="view-btn">
              <i class="fa-solid fa-file-lines"></i>
              View Documents
            </button>

            <button class="verify-btn">
              <i class="fa-solid fa-check"></i>
              Verify
            </button>

            <button class="reject-btn">
              <i class="fa-solid fa-xmark"></i>
              Reject
            </button>

          </div>

        </div>

        <!-- VERIFIED RECORD -->
        <div class="doctor-request verified-row">

          <div class="doctor-avatar green">
            AM
          </div>

          <div class="doctor-details">

            <div class="doctor-name-row">
              <strong>Dr. Anirban Mukherjee</strong>
              <span class="verified-badge">
                <i class="fa-solid fa-circle-check"></i>
                Verified
              </span>
            </div>

            <p class="specialization">
              Cardiologist · SSKM Hospital, Kolkata
            </p>

            <div class="credential-grid">

              <div>
                <span>WBMC REGISTRATION</span>
                <strong>WBMC-2018-39124</strong>
              </div>

              <div>
                <span>QUALIFICATION</span>
                <strong>MBBS, MD Cardiology</strong>
              </div>

              <div>
                <span>VERIFIED ON</span>
                <strong>Aug 22, 2026</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong class="verified-text">Active Practitioner</strong>
              </div>

            </div>

          </div>

          <div class="request-actions">

            <button class="view-btn">
              <i class="fa-solid fa-eye"></i>
              View Profile
            </button>

          </div>

        </div>

        <!-- PAGINATION -->
        <div class="pagination">

          <span>
            Showing <strong>4</strong> of <strong>94</strong> applications
          </span>

          <div class="page-buttons">
            <button disabled>
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="current">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>24</button>

            <button>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

        </div>

      </div>

      <!-- SECURITY NOTE -->
      <div class="security-note">

        <div class="security-icon">
          <i class="fa-solid fa-shield-halved"></i>
        </div>

        <div>
          <strong>Credential Verification Protocol</strong>

          <span>
            Doctor access should only be activated after validating the
            submitted medical registration, qualification documents and
            professional credentials against the appropriate authority.
          </span>
        </div>

      </div>

    </div>
  `,

  styles: [`

    .verification-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      color: #082b3a;
    }

    /* HEADER */

    .page-header {
      background: #ffffff;
      border: 1px solid #e2eaee;
      border-radius: 22px;
      padding: 28px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 18px rgba(8,43,58,.035);
    }

    .eyebrow {
      color: #7b3ff2;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .08em;
      margin-bottom: 7px;
    }

    .eyebrow i {
      margin-right: 7px;
    }

    .page-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
    }

    .page-header p {
      margin: 7px 0 0;
      color: #7d929d;
      font-size: 14px;
    }

    .verification-status {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 15px;
      border-radius: 25px;
      background: #effaf4;
      border: 1px solid #ccefdc;
      color: #078c4e;
      font-size: 11px;
      font-weight: 800;
      white-space: nowrap;
    }

    .verification-status span {
      width: 8px;
      height: 8px;
      background: #12a45c;
      border-radius: 50%;
    }

    /* SUMMARY */

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 18px;
      margin-bottom: 20px;
    }

    .summary-card {
      background: #fff;
      border: 1px solid #e2eaee;
      border-radius: 18px;
      padding: 19px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 4px 18px rgba(8,43,58,.035);
    }

    .summary-icon {
      width: 45px;
      height: 45px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .summary-icon.orange {
      background:#fff0d9;
      color:#e88900;
    }

    .summary-icon.green {
      background:#e1faec;
      color:#079653;
    }

    .summary-icon.red {
      background:#ffe5e5;
      color:#df3d3d;
    }

    .summary-icon.blue {
      background:#e7f3ff;
      color:#2784d2;
    }

    .summary-card span {
      display:block;
      color:#80949e;
      font-size:10px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.04em;
    }

    .summary-card strong {
      display:block;
      font-size:25px;
      margin-top:3px;
    }

    .summary-card small {
      display:block;
      color:#91a3ab;
      font-size:10px;
      margin-top:2px;
    }

    /* PANEL */

    .verification-panel {
      background:#ffffff;
      border:1px solid #e2eaee;
      border-radius:22px;
      overflow:hidden;
      box-shadow:0 4px 18px rgba(8,43,58,.035);
    }

    .panel-header {
      padding:22px 25px;
      border-bottom:1px solid #edf1f3;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:20px;
    }

    .panel-header h2 {
      margin:0;
      font-size:17px;
      font-weight:800;
    }

    .panel-header h2 i {
      color:#7b3ff2;
      margin-right:8px;
    }

    .panel-header p {
      margin:5px 0 0;
      color:#91a3ab;
      font-size:11px;
    }

    .filter-area {
      display:flex;
      gap:5px;
      background:#f5f8f9;
      padding:4px;
      border-radius:10px;
    }

    .filter {
      border:none;
      background:transparent;
      padding:7px 11px;
      border-radius:7px;
      font-size:10px;
      font-weight:700;
      color:#718790;
      cursor:pointer;
    }

    .filter.active {
      background:#ffffff;
      color:#7b3ff2;
      box-shadow:0 2px 5px rgba(0,0,0,.05);
    }

    /* DOCTOR REQUEST */

    .doctor-request {
      display:grid;
      grid-template-columns:48px minmax(0,1fr) auto;
      gap:17px;
      padding:21px 25px;
      border-bottom:1px solid #edf1f3;
      align-items:start;
    }

    .doctor-request:hover {
      background:#fcfdfd;
    }

    .doctor-avatar {
      width:45px;
      height:45px;
      border-radius:14px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:12px;
      font-weight:800;
    }

    .doctor-avatar.green {
      background:#e1faec;
      color:#078e4e;
    }

    .doctor-avatar.blue {
      background:#e6f3ff;
      color:#267ec8;
    }

    .doctor-avatar.purple {
      background:#eee7ff;
      color:#7548d2;
    }

    .doctor-name-row {
      display:flex;
      align-items:center;
      gap:9px;
      flex-wrap:wrap;
    }

    .doctor-name-row > strong {
      font-size:13px;
      color:#173e4d;
    }

    .specialization {
      margin:4px 0 14px;
      color:#879ba4;
      font-size:11px;
    }

    .pending-badge,
    .verified-badge {
      display:inline-flex;
      align-items:center;
      gap:5px;
      padding:5px 8px;
      border-radius:20px;
      font-size:8px;
      font-weight:800;
    }

    .pending-badge {
      background:#fff4df;
      color:#c57a00;
    }

    .pending-badge span {
      width:5px;
      height:5px;
      border-radius:50%;
      background:#e89a12;
    }

    .verified-badge {
      background:#e7faef;
      color:#078b4d;
    }

    .credential-grid {
      display:grid;
      grid-template-columns:repeat(4,minmax(100px,1fr));
      gap:16px;
    }

    .credential-grid span {
      display:block;
      color:#9aaab0;
      font-size:8px;
      font-weight:800;
      letter-spacing:.04em;
      margin-bottom:4px;
    }

    .credential-grid strong {
      font-size:10px;
      color:#526e7a;
      font-weight:700;
    }

    .verified-text {
      color:#078d50 !important;
    }

    .request-actions {
      display:flex;
      flex-direction:column;
      gap:6px;
      min-width:118px;
    }

    .request-actions button {
      border-radius:8px;
      padding:7px 10px;
      font-size:9px;
      font-weight:700;
      cursor:pointer;
      white-space:nowrap;
    }

    .view-btn {
      border:1px solid #dce6ea;
      background:#ffffff;
      color:#5d7782;
    }

    .verify-btn {
      border:1px solid #bcebd0;
      background:#effaf4;
      color:#078c4e;
    }

    .reject-btn {
      border:1px solid #f2cccc;
      background:#fff5f5;
      color:#d73b3b;
    }

    .view-btn:hover {
      background:#f5f8f9;
    }

    .verify-btn:hover {
      background:#dff7e9;
    }

    .reject-btn:hover {
      background:#ffeaea;
    }

    /* PAGINATION */

    .pagination {
      padding:17px 22px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#8b9da5;
      font-size:10px;
    }

    .pagination strong {
      color:#526e7a;
    }

    .page-buttons {
      display:flex;
      align-items:center;
      gap:5px;
    }

    .page-buttons button {
      min-width:29px;
      height:29px;
      border:1px solid #e0e8eb;
      background:#fff;
      border-radius:7px;
      font-size:10px;
      color:#607b86;
      cursor:pointer;
    }

    .page-buttons button.current {
      background:#7b3ff2;
      border-color:#7b3ff2;
      color:#fff;
      font-weight:800;
    }

    .page-buttons button:disabled {
      opacity:.45;
      cursor:not-allowed;
    }

    .page-buttons span {
      padding:0 3px;
    }

    /* SECURITY NOTE */

    .security-note {
      margin-top:20px;
      background:#f5f8fb;
      border:1px solid #e0e9ed;
      border-radius:17px;
      padding:15px 18px;
      display:flex;
      align-items:flex-start;
      gap:13px;
    }

    .security-icon {
      width:35px;
      height:35px;
      border-radius:10px;
      background:#e9e4ff;
      color:#7651d3;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-shrink:0;
    }

    .security-note strong {
      display:block;
      font-size:11px;
      color:#365563;
      margin-bottom:4px;
    }

    .security-note span {
      display:block;
      color:#879aa3;
      font-size:10px;
      line-height:1.5;
    }

    /* RESPONSIVE */

    @media (max-width:1100px) {

      .summary-grid {
        grid-template-columns:repeat(2,1fr);
      }

      .doctor-request {
        grid-template-columns:48px 1fr;
      }

      .request-actions {
        grid-column:2;
        flex-direction:row;
        flex-wrap:wrap;
      }

      .credential-grid {
        grid-template-columns:repeat(2,1fr);
      }

      .panel-header {
        align-items:flex-start;
        flex-direction:column;
      }
    }

    @media (max-width:650px) {

      .page-header {
        flex-direction:column;
        align-items:flex-start;
      }

      .summary-grid {
        grid-template-columns:1fr;
      }

      .filter-area {
        width:100%;
        overflow-x:auto;
      }

      .credential-grid {
        grid-template-columns:1fr;
      }

      .doctor-request {
        grid-template-columns:1fr;
      }

      .request-actions {
        grid-column:auto;
      }

      .pagination {
        flex-direction:column;
        gap:12px;
        align-items:flex-start;
      }
    }

  `]
})
export class AdminVerificationComponent {}