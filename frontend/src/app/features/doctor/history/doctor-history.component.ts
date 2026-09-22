import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Consultation {
  id: string;
  patientId: string;
  patientName: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  reason: string;
  diagnosis: string;
  risk: number;
  riskLevel: string;
  status: string;
  prescription: boolean;
}

@Component({
  selector: 'app-doctor-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="history-page">

      <!-- HEADER -->
      <div class="page-header">

        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-clock-rotate-left"></i>
            CLINICAL ARCHIVE
          </div>

          <h1>Consultation History</h1>

          <p>
            Review previous consultations, diagnoses and clinical decisions.
          </p>
        </div>

        <div class="archive-badge">
          <i class="fa-solid fa-shield-halved"></i>
          <div>
            <span>SECURE ARCHIVE</span>
            <strong>Verified Records</strong>
          </div>
        </div>

      </div>


      <!-- SUMMARY -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-notes-medical"></i>
          </div>

          <div>
            <span>TOTAL CONSULTATIONS</span>
            <strong>{{ consultations.length }}</strong>
            <small>Recorded consultations</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div>
            <span>COMPLETED</span>
            <strong>{{ completedCount }}</strong>
            <small>Successfully completed</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-prescription"></i>
          </div>

          <div>
            <span>PRESCRIPTIONS</span>
            <strong>{{ prescriptionCount }}</strong>
            <small>Issued during visits</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon red">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>

          <div>
            <span>HIGH RISK CASES</span>
            <strong>{{ highRiskCount }}</strong>
            <small>Required attention</small>
          </div>
        </div>

      </div>


      <!-- HISTORY CARD -->
      <div class="card history-card">

        <div class="history-header">

          <div>
            <h2>
              <i class="fa-solid fa-file-medical"></i>
              Consultation Archive
            </h2>

            <p>
              Previously completed patient consultations
            </p>
          </div>


          <div class="search-box">

            <i class="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              [(ngModel)]="searchTerm"
              placeholder="Search patient, diagnosis..."
            />

          </div>

        </div>


        <!-- FILTER BAR -->
        <div class="filter-bar">

          <button
            class="filter-btn"
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')">

            All
            <span>{{ consultations.length }}</span>

          </button>


          <button
            class="filter-btn"
            [class.active]="activeFilter === 'recent'"
            (click)="setFilter('recent')">

            Recent
            <span>3</span>

          </button>


          <button
            class="filter-btn"
            [class.active]="activeFilter === 'high'"
            (click)="setFilter('high')">

            High Risk
            <span>{{ highRiskCount }}</span>

          </button>


          <button
            class="filter-btn"
            [class.active]="activeFilter === 'prescription'"
            (click)="setFilter('prescription')">

            Prescriptions
            <span>{{ prescriptionCount }}</span>

          </button>

        </div>


        <!-- TABLE -->
        <div class="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Patient</th>
                <th>Consultation</th>
                <th>Diagnosis</th>
                <th>Risk</th>
                <th>Prescription</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              <tr *ngFor="let consultation of filteredConsultations">

                <!-- DATE -->
                <td>
                  <div class="date-cell">
                    <strong>{{ consultation.date }}</strong>
                    <span>{{ consultation.time }}</span>
                  </div>
                </td>


                <!-- PATIENT -->
                <td>

                  <div class="patient-cell">

                    <div class="patient-avatar">
                      {{ getInitials(consultation.patientName) }}
                    </div>

                    <div>
                      <strong>
                        {{ consultation.patientName }}
                      </strong>

                      <span>
                        {{ consultation.patientId }}
                        • {{ consultation.age }} yrs
                      </span>
                    </div>

                  </div>

                </td>


                <!-- REASON -->
                <td>
                  <span class="reason">
                    {{ consultation.reason }}
                  </span>
                </td>


                <!-- DIAGNOSIS -->
                <td>

                  <div class="diagnosis">

                    <i class="fa-solid fa-stethoscope"></i>

                    <span>
                      {{ consultation.diagnosis }}
                    </span>

                  </div>

                </td>


                <!-- RISK -->
                <td>

                  <span
                    class="risk-badge"
                    [ngClass]="getRiskClass(consultation.riskLevel)">

                    <i
                      class="fa-solid"
                      [ngClass]="consultation.risk >= 70
                        ? 'fa-triangle-exclamation'
                        : consultation.risk >= 40
                        ? 'fa-circle-exclamation'
                        : 'fa-circle-check'">
                    </i>

                    {{ consultation.risk }}%

                  </span>

                </td>


                <!-- PRESCRIPTION -->
                <td>

                  <span
                    class="rx-badge"
                    [class.rx-issued]="consultation.prescription"
                    [class.rx-none]="!consultation.prescription">

                    <i
                      class="fa-solid"
                      [ngClass]="consultation.prescription
                        ? 'fa-check'
                        : 'fa-minus'">
                    </i>

                    {{ consultation.prescription
                      ? 'Issued'
                      : 'None' }}

                  </span>

                </td>


                <!-- STATUS -->
                <td>

                  <span class="status-badge">
                    <span></span>
                    {{ consultation.status }}
                  </span>

                </td>


                <!-- ACTION -->
                <td>

                  <button
                    class="view-btn"
                    (click)="viewConsultation(consultation)">

                    View
                    <i class="fa-solid fa-arrow-right"></i>

                  </button>

                </td>

              </tr>


              <!-- EMPTY -->
              <tr *ngIf="filteredConsultations.length === 0">

                <td colspan="8">

                  <div class="empty-state">

                    <div class="empty-icon">
                      <i class="fa-solid fa-file-circle-xmark"></i>
                    </div>

                    <strong>No consultation records found</strong>

                    <span>
                      Try another search or filter.
                    </span>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


      <!-- DETAIL -->
      <div
        class="detail-card card"
        *ngIf="selectedConsultation">

        <div class="detail-header">

          <div class="detail-patient">

            <div class="large-avatar">
              {{ getInitials(selectedConsultation.patientName) }}
            </div>

            <div>

              <span>CONSULTATION RECORD</span>

              <h2>
                {{ selectedConsultation.patientName }}
              </h2>

              <p>
                {{ selectedConsultation.patientId }}
                • {{ selectedConsultation.date }}
                • {{ selectedConsultation.time }}
              </p>

            </div>

          </div>


          <button
            class="close-btn"
            (click)="selectedConsultation = null">

            <i class="fa-solid fa-xmark"></i>

          </button>

        </div>


        <div class="detail-grid">

          <div>
            <span>Consultation Reason</span>
            <strong>{{ selectedConsultation.reason }}</strong>
          </div>

          <div>
            <span>Diagnosis</span>
            <strong>{{ selectedConsultation.diagnosis }}</strong>
          </div>

          <div>
            <span>Risk Score</span>
            <strong>{{ selectedConsultation.risk }}%</strong>
          </div>

          <div>
            <span>Prescription</span>
            <strong>
              {{ selectedConsultation.prescription ? 'Issued' : 'Not Issued' }}
            </strong>
          </div>

        </div>


        <div class="detail-actions">

          <button class="action-btn">
            <i class="fa-solid fa-file-medical"></i>
            View EMR
          </button>

          <button class="action-btn">
            <i class="fa-solid fa-prescription"></i>
            View Prescription
          </button>

          <button class="action-btn primary">
            <i class="fa-solid fa-print"></i>
            Print Summary
          </button>

        </div>

      </div>

    </div>
  `,

  styles: [`

    .history-page {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 8px 12px 40px;
      box-sizing: border-box;
    }


    /* HEADER */

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 22px;
      gap: 20px;
    }

    .eyebrow {
      color: #0b9189;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1px;
      margin-bottom: 7px;
    }

    .eyebrow i {
      margin-right: 6px;
    }

    .page-header h1 {
      margin: 0;
      color: #082f3b;
      font-size: 29px;
      font-weight: 800;
    }

    .page-header p {
      margin: 7px 0 0;
      color: #788c92;
      font-size: 13px;
    }


    /* ARCHIVE BADGE */

    .archive-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #f4faf9;
      border: 1px solid #dcefeb;
      border-radius: 13px;
      padding: 11px 15px;
    }

    .archive-badge > i {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #e3f5f3;
      color: #0a8e87;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .archive-badge span {
      display: block;
      color: #8b9a9e;
      font-size: 8px;
      font-weight: 800;
    }

    .archive-badge strong {
      display: block;
      color: #36545b;
      font-size: 11px;
      margin-top: 2px;
    }


    /* SUMMARY */

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 18px;
    }

    .summary-card {
      background: white;
      border: 1px solid #eaf0f1;
      border-radius: 15px;
      padding: 17px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 6px 20px rgba(22, 65, 75, .04);
    }

    .summary-icon {
      width: 42px;
      height: 42px;
      border-radius: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .summary-icon.blue {
      background: #eaf5ff;
      color: #187ebd;
    }

    .summary-icon.green {
      background: #eafaf2;
      color: #09895a;
    }

    .summary-icon.orange {
      background: #fff4e8;
      color: #dc851d;
    }

    .summary-icon.red {
      background: #fff0f0;
      color: #d95353;
    }

    .summary-card span {
      display: block;
      color: #8a9a9e;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .4px;
    }

    .summary-card strong {
      display: block;
      color: #254851;
      font-size: 21px;
      margin-top: 2px;
    }

    .summary-card small {
      color: #96a4a7;
      font-size: 9px;
    }


    /* CARD */

    .card {
      background: white;
      border: 1px solid #eaf0f1;
      border-radius: 19px;
      box-shadow: 0 7px 25px rgba(22, 65, 75, .05);
    }

    .history-card {
      overflow: hidden;
    }


    /* HISTORY HEADER */

    .history-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 21px;
      gap: 20px;
    }

    .history-header h2 {
      margin: 0;
      color: #23464e;
      font-size: 17px;
    }

    .history-header h2 i {
      color: #0b9189;
      margin-right: 7px;
    }

    .history-header p {
      margin: 4px 0 0;
      color: #8a9a9e;
      font-size: 10px;
    }


    /* SEARCH */

    .search-box {
      width: 280px;
      position: relative;
    }

    .search-box i {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ba9ac;
      font-size: 11px;
    }

    .search-box input {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 12px 10px 32px;
      border: 1px solid #dce7e9;
      border-radius: 10px;
      outline: none;
      font-size: 11px;
      background: #fbfdfd;
    }

    .search-box input:focus {
      border-color: #0b9189;
      box-shadow: 0 0 0 3px rgba(11,145,137,.08);
    }


    /* FILTER */

    .filter-bar {
      display: flex;
      gap: 6px;
      padding: 0 21px 15px;
      border-bottom: 1px solid #edf2f3;
    }

    .filter-btn {
      border: 1px solid #e0e9ea;
      background: white;
      color: #71868b;
      border-radius: 8px;
      padding: 7px 11px;
      font-size: 10px;
      font-weight: 700;
      cursor: pointer;
    }

    .filter-btn span {
      margin-left: 5px;
      background: #f1f5f5;
      padding: 2px 5px;
      border-radius: 5px;
    }

    .filter-btn.active {
      background: #eaf8f6;
      color: #087f79;
      border-color: #c8e7e3;
    }


    /* TABLE */

    .table-wrapper {
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 1050px;
    }

    th {
      padding: 11px 15px;
      text-align: left;
      background: #f8fafb;
      color: #829398;
      font-size: 8px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .4px;
      border-bottom: 1px solid #e9eff0;
    }

    td {
      padding: 14px 15px;
      border-bottom: 1px solid #edf2f3;
      vertical-align: middle;
      color: #526b72;
      font-size: 10px;
    }

    tbody tr:hover {
      background: #fbfdfd;
    }


    /* DATE */

    .date-cell strong {
      display: block;
      color: #526b72;
      font-size: 9px;
    }

    .date-cell span {
      display: block;
      color: #9aa8ab;
      font-size: 8px;
      margin-top: 3px;
    }


    /* PATIENT */

    .patient-cell {
      display: flex;
      align-items: center;
      gap: 9px;
    }

    .patient-avatar,
    .large-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e8f6f4;
      color: #087f79;
      font-weight: 800;
      border-radius: 10px;
    }

    .patient-avatar {
      width: 34px;
      height: 34px;
      font-size: 10px;
    }

    .patient-cell strong {
      display: block;
      color: #284a52;
      font-size: 11px;
    }

    .patient-cell span {
      display: block;
      color: #9aa7aa;
      font-size: 8px;
      margin-top: 2px;
    }


    /* REASON */

    .reason {
      color: #536c72;
      font-size: 9px;
      font-weight: 600;
    }


    /* DIAGNOSIS */

    .diagnosis {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .diagnosis i {
      color: #0b9189;
      font-size: 10px;
    }

    .diagnosis span {
      color: #536c72;
      font-size: 9px;
      font-weight: 600;
    }


    /* RISK */

    .risk-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 7px;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 800;
    }

    .risk-high {
      background: #fff0f0;
      color: #d84e4e;
    }

    .risk-medium {
      background: #fff5e8;
      color: #d27a17;
    }

    .risk-low {
      background: #eafaf2;
      color: #09895a;
    }


    /* PRESCRIPTION */

    .rx-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 7px;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 800;
    }

    .rx-issued {
      background: #eaf5ff;
      color: #187ebd;
    }

    .rx-none {
      background: #f2f5f5;
      color: #89999d;
    }


    /* STATUS */

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #eafaf2;
      color: #09895a;
      padding: 5px 7px;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 800;
    }

    .status-badge span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #0ba467;
    }


    /* VIEW */

    .view-btn {
      border: 1px solid #d7e6e7;
      background: white;
      color: #087f79;
      border-radius: 8px;
      padding: 7px 9px;
      font-size: 8px;
      font-weight: 800;
      cursor: pointer;
      white-space: nowrap;
    }

    .view-btn:hover {
      background: #edf9f7;
    }

    .view-btn i {
      margin-left: 4px;
    }


    /* EMPTY */

    .empty-state {
      padding: 55px 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .empty-icon {
      width: 46px;
      height: 46px;
      border-radius: 13px;
      background: #f0f6f6;
      color: #8da3a6;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    .empty-state strong {
      color: #536d73;
      font-size: 12px;
    }

    .empty-state span {
      color: #98a6a9;
      font-size: 10px;
      margin-top: 4px;
    }


    /* DETAIL */

    .detail-card {
      margin-top: 18px;
      padding: 20px;
    }

    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .detail-patient {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .large-avatar {
      width: 52px;
      height: 52px;
      font-size: 15px;
      border-radius: 14px;
    }

    .detail-patient > div:last-child > span {
      color: #0b9189;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .8px;
    }

    .detail-patient h2 {
      margin: 3px 0 0;
      color: #244850;
      font-size: 18px;
    }

    .detail-patient p {
      margin: 3px 0 0;
      color: #89999d;
      font-size: 9px;
    }

    .close-btn {
      width: 31px;
      height: 31px;
      border: 1px solid #e1e9ea;
      background: white;
      border-radius: 8px;
      color: #89999d;
      cursor: pointer;
    }


    /* DETAIL GRID */

    .detail-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-top: 20px;
      padding-top: 17px;
      border-top: 1px solid #edf2f3;
    }

    .detail-grid span {
      display: block;
      color: #9aa8ab;
      font-size: 8px;
      text-transform: uppercase;
      font-weight: 800;
    }

    .detail-grid strong {
      display: block;
      color: #526c72;
      font-size: 10px;
      margin-top: 4px;
    }


    /* DETAIL ACTIONS */

    .detail-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 20px;
    }

    .action-btn {
      border: 1px solid #d7e5e7;
      background: white;
      color: #087f79;
      border-radius: 9px;
      padding: 9px 12px;
      font-size: 9px;
      font-weight: 800;
      cursor: pointer;
    }

    .action-btn i {
      margin-right: 5px;
    }

    .action-btn.primary {
      background: #0b9189;
      border-color: #0b9189;
      color: white;
    }


    /* RESPONSIVE */

    @media (max-width: 1050px) {

      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 700px) {

      .history-page {
        padding-left: 8px;
        padding-right: 8px;
      }

      .page-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .history-header {
        flex-direction: column;
        align-items: stretch;
      }

      .search-box {
        width: 100%;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .filter-bar {
        overflow-x: auto;
      }

      .detail-grid {
        grid-template-columns: 1fr 1fr;
      }

      .detail-actions {
        flex-wrap: wrap;
      }

    }

  `]
})
export class DoctorHistoryComponent {

  searchTerm = '';

  activeFilter = 'all';

  selectedConsultation: Consultation | null = null;


  consultations: Consultation[] = [

    {
      id: 'CON-2026-081',
      patientId: 'PAT-1024',
      patientName: 'Sourav Das',
      age: 31,
      gender: 'Male',
      date: '28 Aug 2026',
      time: '17:30',
      reason: 'Hypertension Follow-up',
      diagnosis: 'Controlled Hypertension',
      risk: 24,
      riskLevel: 'Low Risk',
      status: 'Completed',
      prescription: true
    },

    {
      id: 'CON-2026-078',
      patientId: 'PAT-1087',
      patientName: 'Ananya Sen',
      age: 54,
      gender: 'Female',
      date: '26 Aug 2026',
      time: '18:00',
      reason: 'Chest Tightness',
      diagnosis: 'Cardiac Risk Assessment',
      risk: 78,
      riskLevel: 'High Risk',
      status: 'Completed',
      prescription: true
    },

    {
      id: 'CON-2026-075',
      patientId: 'PAT-1142',
      patientName: 'Rahul Ghosh',
      age: 46,
      gender: 'Male',
      date: '24 Aug 2026',
      time: '17:30',
      reason: 'Diabetes Review',
      diagnosis: 'Type 2 Diabetes',
      risk: 61,
      riskLevel: 'Medium Risk',
      status: 'Completed',
      prescription: true
    },

    {
      id: 'CON-2026-071',
      patientId: 'PAT-1198',
      patientName: 'Priya Roy',
      age: 39,
      gender: 'Female',
      date: '21 Aug 2026',
      time: '18:30',
      reason: 'Thyroid Follow-up',
      diagnosis: 'Hypothyroidism',
      risk: 31,
      riskLevel: 'Low Risk',
      status: 'Completed',
      prescription: false
    },

    {
      id: 'CON-2026-066',
      patientId: 'PAT-1215',
      patientName: 'Arjun Chatterjee',
      age: 62,
      gender: 'Male',
      date: '18 Aug 2026',
      time: '17:30',
      reason: 'Cardiac Review',
      diagnosis: 'Coronary Artery Disease',
      risk: 84,
      riskLevel: 'High Risk',
      status: 'Completed',
      prescription: true
    },

    {
      id: 'CON-2026-059',
      patientId: 'PAT-1264',
      patientName: 'Moumita Das',
      age: 42,
      gender: 'Female',
      date: '15 Aug 2026',
      time: '18:00',
      reason: 'Lipid Profile Review',
      diagnosis: 'Dyslipidemia',
      risk: 43,
      riskLevel: 'Medium Risk',
      status: 'Completed',
      prescription: true
    }

  ];


  get filteredConsultations(): Consultation[] {

    let result = [...this.consultations];

    if (this.activeFilter === 'recent') {
      result = result.slice(0, 3);
    }

    if (this.activeFilter === 'high') {
      result = result.filter(c => c.risk >= 70);
    }

    if (this.activeFilter === 'prescription') {
      result = result.filter(c => c.prescription);
    }

    if (this.searchTerm.trim()) {

      const search = this.searchTerm.toLowerCase();

      result = result.filter(c =>
        c.patientName.toLowerCase().includes(search) ||
        c.patientId.toLowerCase().includes(search) ||
        c.diagnosis.toLowerCase().includes(search) ||
        c.reason.toLowerCase().includes(search)
      );

    }

    return result;
  }


  get completedCount(): number {
    return this.consultations.filter(
      c => c.status === 'Completed'
    ).length;
  }


  get prescriptionCount(): number {
    return this.consultations.filter(
      c => c.prescription
    ).length;
  }


  get highRiskCount(): number {
    return this.consultations.filter(
      c => c.risk >= 70
    ).length;
  }


  setFilter(filter: string): void {
    this.activeFilter = filter;
  }


  getInitials(name: string): string {

    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();

  }


  getRiskClass(level: string): string {

    if (level === 'High Risk') {
      return 'risk-high';
    }

    if (level === 'Medium Risk') {
      return 'risk-medium';
    }

    return 'risk-low';

  }


  viewConsultation(consultation: Consultation): void {

    this.selectedConsultation = consultation;

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });

  }

}