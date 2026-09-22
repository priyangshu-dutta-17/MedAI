import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-records',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="records-page">

      <!-- Page Header -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-notes-medical"></i>
            CLINICAL WORKSPACE
          </div>

          <h1>Patient Medical Records</h1>

          <p>
            Review patient history, symptoms, diagnostic reports and add
            clinical notes securely.
          </p>
        </div>

        <div class="header-actions">
          <button class="btn btn-outline" (click)="resetForm()">
            <i class="fa-solid fa-rotate-left"></i>
            Reset
          </button>

          <button class="btn btn-primary" (click)="saveRecord()">
            <i class="fa-solid fa-floppy-disk"></i>
            Save Medical Record
          </button>
        </div>
      </div>

      <!-- Patient Selector -->
      <div class="patient-selector card">

        <div class="section-icon">
          <i class="fa-solid fa-user-injured"></i>
        </div>

        <div class="patient-select-content">
          <label>Select Patient</label>

          <select
            class="form-control"
            [(ngModel)]="selectedPatient"
            (ngModelChange)="loadPatient()"
            name="patient">

            <option value="">-- Select a patient --</option>

            <option
              *ngFor="let patient of patients"
              [value]="patient.id">

              {{ patient.name }} · {{ patient.age }} years ·
              {{ patient.gender }}
            </option>

          </select>
        </div>

        <div class="verified-badge" *ngIf="selectedPatient">
          <i class="fa-solid fa-circle-check"></i>
          Verified Patient
        </div>

      </div>

      <!-- Patient Overview -->
      <div class="patient-overview card" *ngIf="selectedPatient">

        <div class="patient-main">

          <div class="patient-avatar">
            {{ currentPatient.initials }}
          </div>

          <div>
            <div class="patient-name">
              {{ currentPatient.name }}
            </div>

            <div class="patient-meta">
              <span>
                <i class="fa-solid fa-user"></i>
                {{ currentPatient.gender }}
              </span>

              <span>
                <i class="fa-solid fa-cake-candles"></i>
                {{ currentPatient.age }} years
              </span>

              <span>
                <i class="fa-solid fa-id-card"></i>
                {{ currentPatient.id }}
              </span>
            </div>
          </div>

        </div>

        <div class="risk-box">
          <span>PATIENT RISK</span>

          <strong
            [ngClass]="{
              'risk-low': currentPatient.risk === 'Low',
              'risk-medium': currentPatient.risk === 'Moderate',
              'risk-high': currentPatient.risk === 'High'
            }">

            {{ currentPatient.risk }} Risk · {{ currentPatient.riskScore }}%
          </strong>
        </div>

      </div>

      <div class="records-grid" *ngIf="selectedPatient">

        <!-- LEFT COLUMN -->
        <div>

          <!-- Current Vitals -->
          <div class="card section-card">

            <div class="section-header">
              <div>
                <h2>
                  <i class="fa-solid fa-heart-pulse"></i>
                  Current Vitals
                </h2>

                <p>Latest recorded patient measurements</p>
              </div>

              <span class="last-updated">
                Updated today
              </span>
            </div>

            <div class="vitals-grid">

              <div class="vital-card">
                <div class="vital-icon bp">
                  <i class="fa-solid fa-heart-pulse"></i>
                </div>

                <div>
                  <span>Blood Pressure</span>
                  <strong>{{ currentPatient.bp }}</strong>
                  <small>mmHg</small>
                </div>
              </div>

              <div class="vital-card">
                <div class="vital-icon glucose">
                  <i class="fa-solid fa-droplet"></i>
                </div>

                <div>
                  <span>Glucose</span>
                  <strong>{{ currentPatient.glucose }}</strong>
                  <small>mg/dL</small>
                </div>
              </div>

              <div class="vital-card">
                <div class="vital-icon bmi">
                  <i class="fa-solid fa-weight-scale"></i>
                </div>

                <div>
                  <span>BMI</span>
                  <strong>{{ currentPatient.bmi }}</strong>
                  <small>kg/m²</small>
                </div>
              </div>

              <div class="vital-card">
                <div class="vital-icon pulse">
                  <i class="fa-solid fa-wave-square"></i>
                </div>

                <div>
                  <span>Heart Rate</span>
                  <strong>{{ currentPatient.pulse }}</strong>
                  <small>bpm</small>
                </div>
              </div>

            </div>

          </div>


          <!-- Clinical Information -->
          <div class="card section-card">

            <div class="section-header">
              <div>
                <h2>
                  <i class="fa-solid fa-stethoscope"></i>
                  Clinical Assessment
                </h2>

                <p>Record findings from today's consultation</p>
              </div>
            </div>

            <div class="form-grid">

              <div class="form-group full">
                <label>Symptoms / Chief Complaint</label>

                <textarea
                  class="form-control"
                  rows="3"
                  [(ngModel)]="record.symptoms"
                  name="symptoms"
                  placeholder="Enter patient's reported symptoms...">
                </textarea>
              </div>

              <div class="form-group">
                <label>Diagnosis</label>

                <input
                  type="text"
                  class="form-control"
                  [(ngModel)]="record.diagnosis"
                  name="diagnosis"
                  placeholder="Enter diagnosis">
              </div>

              <div class="form-group">
                <label>Clinical Status</label>

                <select
                  class="form-control"
                  [(ngModel)]="record.status"
                  name="status">

                  <option value="Stable">Stable</option>
                  <option value="Under Observation">Under Observation</option>
                  <option value="Requires Follow-up">Requires Follow-up</option>
                  <option value="Urgent">Urgent Attention</option>

                </select>
              </div>

              <div class="form-group full">
                <label>Doctor's Clinical Notes</label>

                <textarea
                  class="form-control"
                  rows="5"
                  [(ngModel)]="record.notes"
                  name="notes"
                  placeholder="Enter examination findings, assessment and clinical observations...">
                </textarea>
              </div>

            </div>

          </div>


          <!-- Diagnostic Reports -->
          <div class="card section-card">

            <div class="section-header">
              <div>
                <h2>
                  <i class="fa-solid fa-file-waveform"></i>
                  Diagnostic Reports
                </h2>

                <p>Recent laboratory and diagnostic investigations</p>
              </div>

              <span class="count-badge">
                {{ reports.length }} Reports
              </span>
            </div>

            <div class="reports-list">

              <div
                class="report-item"
                *ngFor="let report of reports">

                <div class="report-icon">
                  <i class="fa-solid fa-file-pdf"></i>
                </div>

                <div class="report-info">
                  <strong>{{ report.name }}</strong>
                  <span>
                    {{ report.type }} · {{ report.date }}
                  </span>
                </div>

                <span
                  class="report-status"
                  [ngClass]="report.status.toLowerCase()">

                  {{ report.status }}
                </span>

                <button class="icon-btn">
                  <i class="fa-solid fa-eye"></i>
                </button>

              </div>

            </div>

          </div>

        </div>


        <!-- RIGHT COLUMN -->
        <div>

          <!-- Medical History -->
          <div class="card section-card history-card">

            <div class="section-header">
              <div>
                <h2>
                  <i class="fa-solid fa-clock-rotate-left"></i>
                  Medical History
                </h2>

                <p>Previous consultations</p>
              </div>
            </div>

            <div class="timeline">

              <div
                class="timeline-item"
                *ngFor="let history of medicalHistory">

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                  <span class="timeline-date">
                    {{ history.date }}
                  </span>

                  <strong>
                    {{ history.diagnosis }}
                  </strong>

                  <p>
                    {{ history.notes }}
                  </p>

                  <span class="doctor-name">
                    {{ history.doctor }}
                  </span>

                </div>

              </div>

            </div>

          </div>


          <!-- Existing Conditions -->
          <div class="card section-card">

            <div class="section-header">
              <div>
                <h2>
                  <i class="fa-solid fa-shield-heart"></i>
                  Health Information
                </h2>

                <p>Important patient information</p>
              </div>
            </div>

            <div class="info-list">

              <div>
                <span>Blood Group</span>
                <strong>{{ currentPatient.bloodGroup }}</strong>
              </div>

              <div>
                <span>Allergies</span>
                <strong>{{ currentPatient.allergies }}</strong>
              </div>

              <div>
                <span>Existing Conditions</span>
                <strong>{{ currentPatient.conditions }}</strong>
              </div>

              <div>
                <span>Emergency Contact</span>
                <strong>{{ currentPatient.emergency }}</strong>
              </div>

            </div>

          </div>


          <!-- Save Reminder -->
          <div class="clinical-note">

            <div class="clinical-note-icon">
              <i class="fa-solid fa-circle-info"></i>
            </div>

            <div>
              <strong>Before saving</strong>

              <p>
                Verify the diagnosis, clinical notes and patient information
                before adding this consultation to the patient's EMR.
              </p>
            </div>

          </div>

        </div>

      </div>


      <!-- Empty State -->
      <div
        class="empty-state card"
        *ngIf="!selectedPatient">

        <div class="empty-icon">
          <i class="fa-solid fa-user-doctor"></i>
        </div>

        <h2>Select a Patient</h2>

        <p>
          Choose a patient from the list above to review their medical
          history and create a new clinical record.
        </p>

      </div>

    </div>
  `,

  styles: [`

    .records-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      padding: 4px 0 40px;
    }

    /* HEADER */

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 24px;
      margin-bottom: 22px;
    }

    .eyebrow {
      color: #0f8f87;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .12em;
      margin-bottom: 7px;
    }

    .eyebrow i {
      margin-right: 6px;
    }

    .page-header h1 {
      margin: 0;
      font-size: 30px;
      font-weight: 800;
      color: #092b3a;
    }

    .page-header p {
      margin: 6px 0 0;
      color: #78909c;
      font-size: 14px;
    }

    .header-actions {
      display: flex;
      gap: 10px;
    }

    /* BUTTONS */

    .btn {
      border: none;
      border-radius: 12px;
      padding: 11px 17px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: .2s ease;
    }

    .btn-primary {
      background: #0e958d;
      color: white;
      box-shadow: 0 8px 20px rgba(14,149,141,.18);
    }

    .btn-primary:hover {
      background: #087d77;
      transform: translateY(-1px);
    }

    .btn-outline {
      background: white;
      border: 1px solid #dce8e9;
      color: #315462;
    }

    .btn-outline:hover {
      border-color: #0e958d;
      color: #0e958d;
    }

    /* CARD */

    .card {
      background: white;
      border: 1px solid #e7eeee;
      border-radius: 20px;
      box-shadow: 0 7px 25px rgba(23,55,65,.045);
    }

    /* PATIENT SELECTOR */

    .patient-selector {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 17px 20px;
      margin-bottom: 15px;
    }

    .section-icon {
      width: 45px;
      height: 45px;
      border-radius: 13px;
      background: #e8f8f5;
      color: #0e958d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
    }

    .patient-select-content {
      flex: 1;
    }

    .patient-select-content label {
      display: block;
      font-size: 11px;
      font-weight: 800;
      color: #78909c;
      margin-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: .05em;
    }

    .form-control {
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #dbe6e8;
      border-radius: 10px;
      padding: 10px 12px;
      font-size: 13px;
      color: #193b49;
      background: #fff;
      outline: none;
      transition: .2s;
    }

    .form-control:focus {
      border-color: #0e958d;
      box-shadow: 0 0 0 3px rgba(14,149,141,.08);
    }

    textarea.form-control {
      resize: vertical;
      line-height: 1.5;
    }

    .verified-badge {
      color: #07856f;
      background: #e8faf4;
      border-radius: 20px;
      padding: 8px 12px;
      font-size: 11px;
      font-weight: 800;
      white-space: nowrap;
    }

    /* PATIENT OVERVIEW */

    .patient-overview {
      padding: 19px 22px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .patient-main {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .patient-avatar {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      background: #dff7f3;
      color: #07877f;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 800;
    }

    .patient-name {
      color: #092b3a;
      font-size: 18px;
      font-weight: 800;
    }

    .patient-meta {
      display: flex;
      gap: 15px;
      margin-top: 5px;
      color: #81949c;
      font-size: 12px;
    }

    .patient-meta i {
      margin-right: 4px;
    }

    .risk-box {
      text-align: right;
    }

    .risk-box span {
      display: block;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: .08em;
      color: #8ca0a7;
      margin-bottom: 5px;
    }

    .risk-box strong {
      padding: 7px 12px;
      border-radius: 20px;
      font-size: 12px;
      display: inline-block;
    }

    .risk-low {
      background: #dcf8e9;
      color: #087b4d;
    }

    .risk-medium {
      background: #fff1cc;
      color: #a96700;
    }

    .risk-high {
      background: #ffe0e2;
      color: #d92832;
    }

    /* GRID */

    .records-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.65fr) minmax(300px, .8fr);
      gap: 15px;
      align-items: start;
    }

    .section-card {
      padding: 21px;
      margin-bottom: 15px;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 18px;
    }

    .section-header h2 {
      margin: 0;
      color: #0b3040;
      font-size: 17px;
      font-weight: 800;
    }

    .section-header h2 i {
      color: #0e958d;
      margin-right: 7px;
    }

    .section-header p {
      margin: 4px 0 0;
      color: #8a9ca3;
      font-size: 12px;
    }

    .last-updated {
      font-size: 11px;
      color: #8a9ca3;
    }

    .count-badge {
      background: #eef8f7;
      color: #0b857e;
      padding: 6px 10px;
      border-radius: 15px;
      font-size: 11px;
      font-weight: 800;
    }

    /* VITALS */

    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 11px;
    }

    .vital-card {
      border: 1px solid #edf1f2;
      border-radius: 14px;
      padding: 13px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .vital-icon {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .vital-icon.bp {
      background: #fff0f1;
      color: #e3343e;
    }

    .vital-icon.glucose {
      background: #eef7ff;
      color: #4388d8;
    }

    .vital-icon.bmi {
      background: #fff6e8;
      color: #d58921;
    }

    .vital-icon.pulse {
      background: #eaf9f5;
      color: #0e958d;
    }

    .vital-card span {
      display: block;
      color: #81959d;
      font-size: 10px;
      font-weight: 700;
    }

    .vital-card strong {
      color: #092e3e;
      font-size: 17px;
      margin-right: 3px;
    }

    .vital-card small {
      color: #94a5ab;
      font-size: 9px;
    }

    /* FORM */

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .form-group {
      min-width: 0;
    }

    .form-group.full {
      grid-column: 1 / -1;
    }

    .form-group label {
      display: block;
      font-size: 12px;
      color: #47616d;
      font-weight: 800;
      margin-bottom: 7px;
    }

    /* REPORTS */

    .reports-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .report-item {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 12px;
      border: 1px solid #edf1f2;
      border-radius: 12px;
    }

    .report-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: #fff0f1;
      color: #e0444d;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .report-info {
      flex: 1;
    }

    .report-info strong {
      display: block;
      color: #234552;
      font-size: 12px;
    }

    .report-info span {
      display: block;
      margin-top: 3px;
      color: #8b9ca3;
      font-size: 10px;
    }

    .report-status {
      font-size: 10px;
      font-weight: 800;
      padding: 5px 8px;
      border-radius: 10px;
    }

    .report-status.reviewed {
      background: #e5f8ef;
      color: #078253;
    }

    .report-status.pending {
      background: #fff3da;
      color: #a96600;
    }

    .icon-btn {
      border: none;
      background: #f3f7f7;
      color: #52717a;
      width: 31px;
      height: 31px;
      border-radius: 9px;
      cursor: pointer;
    }

    /* TIMELINE */

    .timeline {
      position: relative;
      padding-left: 19px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 4px;
      top: 5px;
      bottom: 5px;
      width: 1px;
      background: #dbe9e8;
    }

    .timeline-item {
      position: relative;
      padding-bottom: 20px;
    }

    .timeline-dot {
      position: absolute;
      left: -19px;
      top: 4px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #0e958d;
      border: 2px solid white;
      box-shadow: 0 0 0 1px #0e958d;
    }

    .timeline-date {
      color: #0e958d;
      font-size: 10px;
      font-weight: 800;
    }

    .timeline-content strong {
      display: block;
      color: #173c4a;
      font-size: 13px;
      margin-top: 4px;
    }

    .timeline-content p {
      margin: 5px 0;
      color: #81949c;
      font-size: 11px;
      line-height: 1.45;
    }

    .doctor-name {
      color: #9aabb0;
      font-size: 10px;
    }

    /* HEALTH INFO */

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .info-list > div {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding: 11px 0;
      border-bottom: 1px solid #edf2f2;
    }

    .info-list > div:last-child {
      border-bottom: none;
    }

    .info-list span {
      color: #84979e;
      font-size: 11px;
    }

    .info-list strong {
      color: #294b58;
      font-size: 11px;
      text-align: right;
    }

    /* INFO BOX */

    .clinical-note {
      display: flex;
      gap: 11px;
      padding: 15px;
      border-radius: 16px;
      background: #eff9f8;
      border: 1px solid #d9efed;
    }

    .clinical-note-icon {
      color: #0e958d;
      font-size: 17px;
    }

    .clinical-note strong {
      color: #174957;
      font-size: 12px;
    }

    .clinical-note p {
      color: #718890;
      font-size: 10px;
      line-height: 1.5;
      margin: 4px 0 0;
    }

    /* EMPTY */

    .empty-state {
      text-align: center;
      padding: 70px 20px;
    }

    .empty-icon {
      width: 65px;
      height: 65px;
      margin: 0 auto 15px;
      border-radius: 20px;
      background: #e9f8f6;
      color: #0e958d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 27px;
    }

    .empty-state h2 {
      margin: 0;
      color: #183d4b;
      font-size: 19px;
    }

    .empty-state p {
      max-width: 480px;
      margin: 8px auto 0;
      color: #8799a0;
      font-size: 13px;
      line-height: 1.6;
    }

    /* RESPONSIVE */

    @media (max-width: 1100px) {

      .records-grid {
        grid-template-columns: 1fr;
      }

      .vitals-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 700px) {

      .page-header,
      .patient-overview {
        flex-direction: column;
        align-items: stretch;
      }

      .header-actions {
        width: 100%;
      }

      .header-actions .btn {
        flex: 1;
        justify-content: center;
      }

      .patient-selector {
        align-items: stretch;
        flex-wrap: wrap;
      }

      .verified-badge {
        width: fit-content;
      }

      .patient-meta {
        flex-wrap: wrap;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-group.full {
        grid-column: auto;
      }

      .vitals-grid {
        grid-template-columns: 1fr 1fr;
      }

    }

    @media (max-width: 450px) {

      .vitals-grid {
        grid-template-columns: 1fr;
      }

      .page-header h1 {
        font-size: 24px;
      }

    }

  `]
})
export class DoctorRecordsComponent {

  selectedPatient = '';

  patients = [
    {
      id: 'PT-1024',
      name: 'Sourav Das',
      initials: 'SD',
      age: 31,
      gender: 'Male',
      risk: 'Low',
      riskScore: 24,
      bp: '128/82',
      glucose: 96,
      bmi: 23.8,
      pulse: 74,
      bloodGroup: 'B+',
      allergies: 'None Known',
      conditions: 'Hypertension',
      emergency: '+91 98765 43210'
    },
    {
      id: 'PT-1031',
      name: 'Ananya Sen',
      initials: 'AS',
      age: 54,
      gender: 'Female',
      risk: 'High',
      riskScore: 78,
      bp: '154/96',
      glucose: 142,
      bmi: 28.6,
      pulse: 96,
      bloodGroup: 'O+',
      allergies: 'Penicillin',
      conditions: 'Hypertension, Diabetes',
      emergency: '+91 98765 12345'
    },
    {
      id: 'PT-1042',
      name: 'Rahul Mondal',
      initials: 'RM',
      age: 46,
      gender: 'Male',
      risk: 'Moderate',
      riskScore: 51,
      bp: '138/88',
      glucose: 118,
      bmi: 26.4,
      pulse: 82,
      bloodGroup: 'A+',
      allergies: 'None Known',
      conditions: 'Pre-diabetes',
      emergency: '+91 98765 67890'
    }
  ];

  currentPatient = this.patients[0];

  record = {
    symptoms: '',
    diagnosis: '',
    status: 'Stable',
    notes: ''
  };

  reports = [
    {
      name: 'Complete Blood Count',
      type: 'Blood Test',
      date: '29 Aug 2026',
      status: 'Reviewed'
    },
    {
      name: 'Lipid Profile',
      type: 'Blood Test',
      date: '29 Aug 2026',
      status: 'Reviewed'
    },
    {
      name: 'ECG Report',
      type: 'Cardiology',
      date: '30 Aug 2026',
      status: 'Pending'
    }
  ];

  medicalHistory = [
    {
      date: '18 Aug 2026',
      diagnosis: 'Hypertension Follow-up',
      notes: 'Blood pressure monitored. Continue regular medication.',
      doctor: 'Dr. Anirban Mukherjee'
    },
    {
      date: '04 Jul 2026',
      diagnosis: 'Routine Health Check',
      notes: 'General examination completed. No acute concerns.',
      doctor: 'Dr. Anirban Mukherjee'
    },
    {
      date: '12 May 2026',
      diagnosis: 'Initial Consultation',
      notes: 'Patient reported occasional headaches and elevated BP.',
      doctor: 'Dr. Anirban Mukherjee'
    }
  ];

  loadPatient(): void {
    const patient = this.patients.find(
      p => p.id === this.selectedPatient
    );

    if (patient) {
      this.currentPatient = patient;
    }
  }

  saveRecord(): void {
    if (!this.selectedPatient) {
      alert('Please select a patient first.');
      return;
    }

    if (!this.record.diagnosis.trim()) {
      alert('Please enter a diagnosis.');
      return;
    }

    alert('Medical record saved successfully.');
  }

  resetForm(): void {
    this.record = {
      symptoms: '',
      diagnosis: '',
      status: 'Stable',
      notes: ''
    };
  }
}