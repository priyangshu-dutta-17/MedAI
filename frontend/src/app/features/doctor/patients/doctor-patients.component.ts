import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  condition: string;
  lastVisit: string;
  nextVisit: string;
  risk: number;
  riskLevel: string;
  status: string;
}

@Component({
  selector: 'app-doctor-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="patients-page">

      <!-- HEADER -->
      <div class="page-header">

        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-hospital-user"></i>
            PATIENT MANAGEMENT
          </div>

          <h1>Assigned Patient Roster</h1>

          <p>
            View, search and manage patients assigned to your clinical workspace.
          </p>
        </div>

        <div class="header-stat">
          <div class="stat-icon">
            <i class="fa-solid fa-users"></i>
          </div>

          <div>
            <span>Total Patients</span>
            <strong>{{ patients.length }}</strong>
          </div>
        </div>

      </div>


      <!-- SUMMARY CARDS -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-user-group"></i>
          </div>

          <div>
            <span>ASSIGNED PATIENTS</span>
            <strong>{{ patients.length }}</strong>
            <small>Active patient roster</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon red">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>

          <div>
            <span>HIGH RISK</span>
            <strong>{{ highRiskCount }}</strong>
            <small>Require closer monitoring</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <span>UPCOMING VISITS</span>
            <strong>{{ upcomingCount }}</strong>
            <small>Scheduled consultations</small>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div>
            <span>ACTIVE CASES</span>
            <strong>{{ activeCount }}</strong>
            <small>Currently under care</small>
          </div>
        </div>

      </div>


      <!-- PATIENT LIST -->
      <div class="card roster-card">

        <div class="roster-header">

          <div>
            <h2>
              <i class="fa-solid fa-users"></i>
              My Patients
            </h2>

            <p>
              Patient records assigned to your account
            </p>
          </div>

          <div class="search-box">

            <i class="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              [(ngModel)]="searchTerm"
              placeholder="Search patient name or ID..."
            />

          </div>

        </div>


        <!-- FILTERS -->
        <div class="filter-bar">

          <button
            class="filter-btn"
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')">

            All Patients
            <span>{{ patients.length }}</span>

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
            [class.active]="activeFilter === 'upcoming'"
            (click)="setFilter('upcoming')">

            Upcoming Visit
            <span>{{ upcomingCount }}</span>

          </button>

        </div>


        <!-- DESKTOP TABLE -->
        <div class="table-wrapper">

          <table>

            <thead>

              <tr>
                <th>Patient</th>
                <th>Age / Gender</th>
                <th>Primary Condition</th>
                <th>Last Visit</th>
                <th>Risk Level</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>


            <tbody>

              <tr
                *ngFor="let patient of filteredPatients">

                <!-- PATIENT -->
                <td>

                  <div class="patient-cell">

                    <div class="patient-avatar">
                      {{ getInitials(patient.name) }}
                    </div>

                    <div>

                      <strong>
                        {{ patient.name }}
                      </strong>

                      <span>
                        {{ patient.id }}
                      </span>

                    </div>

                  </div>

                </td>


                <!-- AGE -->
                <td>

                  <div class="age-gender">
                    <strong>{{ patient.age }}</strong>
                    <span>{{ patient.gender }}</span>
                  </div>

                </td>


                <!-- CONDITION -->
                <td>

                  <span class="condition">
                    {{ patient.condition }}
                  </span>

                </td>


                <!-- LAST VISIT -->
                <td>

                  <div class="visit-date">

                    <strong>
                      {{ patient.lastVisit }}
                    </strong>

                    <span>
                      Next: {{ patient.nextVisit }}
                    </span>

                  </div>

                </td>


                <!-- RISK -->
                <td>

                  <div class="risk-wrapper">

                    <span
                      class="risk-badge"
                      [ngClass]="getRiskClass(patient.riskLevel)">

                      <i
                        class="fa-solid"
                        [ngClass]="patient.risk >= 70
                          ? 'fa-triangle-exclamation'
                          : patient.risk >= 40
                          ? 'fa-circle-exclamation'
                          : 'fa-circle-check'">
                      </i>

                      {{ patient.riskLevel }}

                    </span>

                    <span class="risk-score">
                      {{ patient.risk }}%
                    </span>

                  </div>

                </td>


                <!-- STATUS -->
                <td>

                  <span
                    class="status-badge"
                    [ngClass]="patient.status === 'Active'
                      ? 'status-active'
                      : 'status-followup'">

                    <span></span>
                    {{ patient.status }}

                  </span>

                </td>


                <!-- ACTION -->
                <td>

                  <button
                    class="view-btn"
                    type="button"
                    (click)="viewPatient(patient)">

                    View Profile
                    <i class="fa-solid fa-arrow-right"></i>

                  </button>

                </td>

              </tr>


              <!-- EMPTY -->
              <tr *ngIf="filteredPatients.length === 0">

                <td colspan="7">

                  <div class="empty-state">

                    <div class="empty-icon">
                      <i class="fa-solid fa-user-slash"></i>
                    </div>

                    <strong>No patients found</strong>

                    <span>
                      Try changing your search or filter.
                    </span>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


      <!-- SELECTED PATIENT -->
      <div
        class="patient-detail card"
        *ngIf="selectedPatient">

        <div class="detail-header">

          <div class="detail-patient">

            <div class="large-avatar">
              {{ getInitials(selectedPatient.name) }}
            </div>

            <div>

              <span class="detail-label">
                SELECTED PATIENT
              </span>

              <h2>{{ selectedPatient.name }}</h2>

              <p>
                {{ selectedPatient.id }}
                • {{ selectedPatient.age }} years
                • {{ selectedPatient.gender }}
              </p>

            </div>

          </div>

          <button
            class="close-btn"
            (click)="selectedPatient = null">

            <i class="fa-solid fa-xmark"></i>

          </button>

        </div>


        <div class="detail-grid">

          <div>
            <span>Primary Condition</span>
            <strong>{{ selectedPatient.condition }}</strong>
          </div>

          <div>
            <span>Contact</span>
            <strong>{{ selectedPatient.phone }}</strong>
          </div>

          <div>
            <span>Last Visit</span>
            <strong>{{ selectedPatient.lastVisit }}</strong>
          </div>

          <div>
            <span>Next Visit</span>
            <strong>{{ selectedPatient.nextVisit }}</strong>
          </div>

        </div>


        <div class="detail-actions">

          <button class="btn btn-outline">
            <i class="fa-solid fa-file-medical"></i>
            Medical Records
          </button>

          <button class="btn btn-outline">
            <i class="fa-solid fa-prescription"></i>
            Prescription
          </button>

          <button class="btn btn-primary">
            <i class="fa-solid fa-user-doctor"></i>
            Start Consultation
          </button>

        </div>

      </div>

    </div>
  `,

  styles: [`

    .patients-page {
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
      gap: 20px;
      margin-bottom: 22px;
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

    .header-stat {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 15px;
      background: #f4faf9;
      border: 1px solid #dcefeb;
      border-radius: 13px;
    }

    .stat-icon {
      width: 37px;
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #e3f5f3;
      color: #0a8e87;
    }

    .header-stat span {
      display: block;
      color: #87979b;
      font-size: 9px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .header-stat strong {
      display: block;
      margin-top: 2px;
      color: #214750;
      font-size: 18px;
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

    .summary-icon.red {
      background: #fff0f0;
      color: #dc5555;
    }

    .summary-icon.orange {
      background: #fff4e8;
      color: #dc851d;
    }

    .summary-icon.green {
      background: #eafaf2;
      color: #0a9660;
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

    .roster-card {
      overflow: hidden;
    }


    /* ROSTER HEADER */

    .roster-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 21px;
      gap: 20px;
    }

    .roster-header h2 {
      margin: 0;
      color: #23464e;
      font-size: 17px;
    }

    .roster-header h2 i {
      color: #0b9189;
      margin-right: 7px;
    }

    .roster-header p {
      margin: 4px 0 0;
      color: #8a9a9e;
      font-size: 10px;
    }

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
      color: #38555c;
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
      min-width: 950px;
    }

    th {
      padding: 11px 16px;
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
      padding: 14px 16px;
      border-bottom: 1px solid #edf2f3;
      vertical-align: middle;
      color: #526b72;
      font-size: 10px;
    }

    tbody tr:hover {
      background: #fbfdfd;
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


    /* AGE */

    .age-gender strong {
      color: #39565d;
      font-size: 11px;
    }

    .age-gender span {
      margin-left: 4px;
      color: #8e9da0;
      font-size: 9px;
    }


    /* CONDITION */

    .condition {
      color: #536c72;
      font-size: 10px;
      font-weight: 600;
    }


    /* VISIT */

    .visit-date strong {
      display: block;
      color: #506a70;
      font-size: 9px;
    }

    .visit-date span {
      display: block;
      color: #9aa8ab;
      font-size: 8px;
      margin-top: 3px;
    }


    /* RISK */

    .risk-wrapper {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .risk-badge {
      padding: 5px 7px;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 800;
      white-space: nowrap;
    }

    .risk-badge i {
      margin-right: 3px;
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

    .risk-score {
      color: #8c9b9e;
      font-size: 9px;
      font-weight: 700;
    }


    /* STATUS */

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 5px 7px;
      border-radius: 7px;
      font-size: 8px;
      font-weight: 800;
    }

    .status-badge span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }

    .status-active {
      background: #eafaf2;
      color: #09895a;
    }

    .status-active span {
      background: #0ba467;
    }

    .status-followup {
      background: #fff5e8;
      color: #ce791b;
    }

    .status-followup span {
      background: #e18a23;
    }


    /* ACTION */

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

    .view-btn i {
      margin-left: 4px;
    }

    .view-btn:hover {
      background: #edf9f7;
      border-color: #b9deda;
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

    .patient-detail {
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

    .detail-label {
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

    .detail-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 20px;
    }

    .btn {
      border-radius: 9px;
      padding: 9px 12px;
      font-size: 9px;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-outline {
      border: 1px solid #d7e5e7;
      background: white;
      color: #087f79;
    }

    .btn-primary {
      border: none;
      background: #0b9189;
      color: white;
    }


    /* RESPONSIVE */

    @media (max-width: 1050px) {

      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 700px) {

      .patients-page {
        padding-left: 8px;
        padding-right: 8px;
      }

      .page-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .roster-header {
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
export class DoctorPatientsComponent {

  searchTerm = '';

  activeFilter = 'all';

  selectedPatient: Patient | null = null;


  patients: Patient[] = [

    {
      id: 'PAT-1024',
      name: 'Sourav Das',
      age: 31,
      gender: 'Male',
      phone: '+91 98765 21034',
      condition: 'Hypertension',
      lastVisit: '28 Aug 2026',
      nextVisit: '05 Sep 2026',
      risk: 24,
      riskLevel: 'Low Risk',
      status: 'Active'
    },

    {
      id: 'PAT-1087',
      name: 'Ananya Sen',
      age: 54,
      gender: 'Female',
      phone: '+91 98765 34127',
      condition: 'Cardiac Symptoms',
      lastVisit: '26 Aug 2026',
      nextVisit: '02 Sep 2026',
      risk: 78,
      riskLevel: 'High Risk',
      status: 'Active'
    },

    {
      id: 'PAT-1142',
      name: 'Rahul Ghosh',
      age: 46,
      gender: 'Male',
      phone: '+91 98765 47892',
      condition: 'Type 2 Diabetes',
      lastVisit: '20 Aug 2026',
      nextVisit: '10 Sep 2026',
      risk: 61,
      riskLevel: 'Medium Risk',
      status: 'Active'
    },

    {
      id: 'PAT-1198',
      name: 'Priya Roy',
      age: 39,
      gender: 'Female',
      phone: '+91 98765 52341',
      condition: 'Thyroid Disorder',
      lastVisit: '18 Aug 2026',
      nextVisit: '15 Sep 2026',
      risk: 31,
      riskLevel: 'Low Risk',
      status: 'Follow-up'
    },

    {
      id: 'PAT-1215',
      name: 'Arjun Chatterjee',
      age: 62,
      gender: 'Male',
      phone: '+91 98765 61743',
      condition: 'Coronary Artery Disease',
      lastVisit: '25 Aug 2026',
      nextVisit: '01 Sep 2026',
      risk: 84,
      riskLevel: 'High Risk',
      status: 'Active'
    },

    {
      id: 'PAT-1264',
      name: 'Moumita Das',
      age: 42,
      gender: 'Female',
      phone: '+91 98765 72981',
      condition: 'Dyslipidemia',
      lastVisit: '21 Aug 2026',
      nextVisit: '12 Sep 2026',
      risk: 43,
      riskLevel: 'Medium Risk',
      status: 'Active'
    }

  ];


  get filteredPatients(): Patient[] {

    let result = [...this.patients];

    if (this.activeFilter === 'high') {
      result = result.filter(p => p.risk >= 70);
    }

    if (this.activeFilter === 'upcoming') {
      result = result.filter(p => p.nextVisit);
    }

    if (this.searchTerm.trim()) {

      const search = this.searchTerm.toLowerCase();

      result = result.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.id.toLowerCase().includes(search) ||
        p.condition.toLowerCase().includes(search)
      );

    }

    return result;
  }


  get highRiskCount(): number {
    return this.patients.filter(p => p.risk >= 70).length;
  }


  get upcomingCount(): number {
    return this.patients.filter(p => p.nextVisit).length;
  }


  get activeCount(): number {
    return this.patients.filter(p => p.status === 'Active').length;
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


  viewPatient(patient: Patient): void {

    this.selectedPatient = patient;

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });

  }

}