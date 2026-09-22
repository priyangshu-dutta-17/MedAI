import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRecordService } from '../../../core/services/medical-record.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],

  template: `
    <div class="records-page">

      <!-- Page Header -->
      <div class="page-heading">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-shield-heart"></i>
            PATIENT HEALTH RECORDS
          </div>

          <h1>Medical Records</h1>

          <p>
            Securely access your diagnoses, symptoms, laboratory reports,
            and clinical notes in one place.
          </p>
        </div>

        <div class="record-status">
          <div class="status-dot"></div>
          <span>Records Secure</span>
        </div>
      </div>


      <!-- Summary Cards -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-file-medical"></i>
          </div>

          <div>
            <span>Total Records</span>
            <strong>{{ records.length }}</strong>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div>
            <span>Verified Records</span>
            <strong>{{ records.length }}</strong>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon purple">
            <i class="fa-solid fa-flask"></i>
          </div>

          <div>
            <span>Lab Reports</span>
            <strong>{{ totalReports }}</strong>
          </div>
        </div>


        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-calendar-days"></i>
          </div>

          <div>
            <span>Latest Record</span>
            <strong>
              {{ records.length ? records[0].date : '—' }}
            </strong>
          </div>
        </div>

      </div>


      <!-- Records Section -->
      <div class="records-card">

        <div class="section-header">

          <div>
            <h2>
              <i class="fa-solid fa-notes-medical"></i>
              Clinical History
            </h2>

            <p>
              Your verified medical history and diagnostic information.
            </p>
          </div>

          <span class="record-count">
            {{ records.length }} Records
          </span>

        </div>


        <!-- Loading -->
        <div class="loading-area" *ngIf="isLoading">

          <app-loading-spinner
            text="Fetching your medical history...">
          </app-loading-spinner>

        </div>


        <!-- Empty State -->
        <div class="empty-state"
             *ngIf="!isLoading && records.length === 0">

          <div class="empty-icon">
            <i class="fa-solid fa-folder-open"></i>
          </div>

          <h3>No Medical Records Yet</h3>

          <p>
            Your medical records will appear here after your first
            consultation or diagnostic evaluation.
          </p>

        </div>


        <!-- Timeline -->
        <div class="timeline"
             *ngIf="!isLoading && records.length > 0">

          <div
            class="record-entry"
            *ngFor="let rec of records; let last = last"
          >

            <!-- Timeline -->
            <div class="timeline-line">

              <div class="timeline-dot">
                <i class="fa-solid fa-file-medical"></i>
              </div>

              <div
                class="line"
                *ngIf="!last">
              </div>

            </div>


            <!-- Record -->
            <div class="record-content">

              <div class="record-top">

                <div>

                  <div class="date-label">
                    <i class="fa-regular fa-calendar"></i>
                    {{ rec.date }}
                  </div>

                  <h3>
                    {{ rec.diagnosis }}
                  </h3>

                  <div class="doctor-info">

                    <div class="doctor-avatar">
                      <i class="fa-solid fa-user-doctor"></i>
                    </div>

                    <div>
                      <span>Consulting Physician</span>

                      <strong>
                        {{ rec.doctorName || 'Dr. Anirban Mukherjee' }}
                      </strong>

                      <small>
                        {{ rec.hospital || 'SSKM Hospital, Kolkata' }}
                      </small>
                    </div>

                  </div>

                </div>


                <div class="verified-badge">
                  <i class="fa-solid fa-circle-check"></i>
                  Verified
                </div>

              </div>


              <!-- Symptoms -->
              <div
                class="record-section"
                *ngIf="rec.symptoms && rec.symptoms.length"
              >

                <div class="section-label">
                  <i class="fa-solid fa-list-check"></i>
                  Recorded Symptoms
                </div>

                <div class="chips">

                  <span
                    class="symptom-chip"
                    *ngFor="let symptom of rec.symptoms"
                  >
                    {{ symptom }}
                  </span>

                </div>

              </div>


              <!-- Reports -->
              <div
                class="record-section"
                *ngIf="rec.reports && rec.reports.length"
              >

                <div class="section-label">
                  <i class="fa-solid fa-flask"></i>
                  Diagnostic Reports
                </div>

                <div class="reports-grid">

                  <div
                    class="report-card"
                    *ngFor="let report of rec.reports"
                  >

                    <div class="pdf-icon">
                      <i class="fa-solid fa-file-pdf"></i>
                    </div>

                    <div>
                      <strong>{{ report }}</strong>
                      <span>Diagnostic Report</span>
                    </div>

                    <button class="report-action">
                      <i class="fa-solid fa-eye"></i>
                    </button>

                  </div>

                </div>

              </div>


              <!-- Doctor Notes -->
              <div
                class="doctor-notes"
                *ngIf="rec.notes"
              >

                <div class="notes-header">
                  <i class="fa-solid fa-user-doctor"></i>
                  <strong>Doctor's Clinical Notes</strong>
                </div>

                <p>
                  {{ rec.notes }}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      <!-- Privacy Notice -->
      <div class="privacy-notice">

        <div class="privacy-icon">
          <i class="fa-solid fa-lock"></i>
        </div>

        <div>
          <strong>Your medical information is protected</strong>

          <p>
            Your records are securely stored and accessible only to
            authorized healthcare personnel and you.
          </p>
        </div>

      </div>

    </div>
  `,

  styles: [`

    /* ================================
       PAGE
    ================================= */

    .records-page {
      max-width: 1400px;
      margin: 0 auto;
    }


    /* ================================
       HEADER
    ================================= */

    .page-heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      color: var(--primary);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      margin-bottom: 0.45rem;
    }

    .page-heading h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-heading p {
      margin-top: 0.45rem;
      color: var(--text-muted);
      font-size: 0.9rem;
    }


    /* ================================
       STATUS
    ================================= */

    .record-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 0.85rem;
      border-radius: 999px;
      background: #ecfdf5;
      color: #047857;
      font-size: 0.78rem;
      font-weight: 700;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
    }


    /* ================================
       SUMMARY
    ================================= */

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .summary-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      box-shadow: var(--shadow-sm);
    }

    .summary-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }

    .summary-icon.blue {
      background: #eff6ff;
      color: #2563eb;
    }

    .summary-icon.green {
      background: #ecfdf5;
      color: #059669;
    }

    .summary-icon.purple {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .summary-icon.orange {
      background: #fff7ed;
      color: #ea580c;
    }

    .summary-card span {
      display: block;
      font-size: 0.7rem;
      color: var(--text-muted);
      font-weight: 700;
      text-transform: uppercase;
    }

    .summary-card strong {
      display: block;
      margin-top: 0.2rem;
      font-size: 1.15rem;
      color: var(--text-main);
    }


    /* ================================
       RECORD CARD
    ================================= */

    .records-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 16px;
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .section-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .section-header h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 800;
    }

    .section-header h2 i {
      color: var(--primary);
      margin-right: 0.4rem;
    }

    .section-header p {
      margin: 0.3rem 0 0;
      color: var(--text-muted);
      font-size: 0.8rem;
    }

    .record-count {
      background: var(--primary-light);
      color: var(--primary-dark);
      padding: 0.4rem 0.7rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
    }


    /* ================================
       TIMELINE
    ================================= */

    .timeline {
      padding: 1.5rem;
    }

    .record-entry {
      display: flex;
      gap: 1rem;
    }

    .timeline-line {
      width: 38px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    .timeline-dot {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .line {
      width: 2px;
      flex: 1;
      background: var(--border-color);
      margin-top: 0.3rem;
    }


    /* ================================
       RECORD CONTENT
    ================================= */

    .record-content {
      flex: 1;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 1.2rem;
      margin-bottom: 1.25rem;
      background: #ffffff;
    }

    .record-top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .date-label {
      font-size: 0.72rem;
      color: var(--primary);
      font-weight: 700;
    }

    .record-top h3 {
      margin: 0.4rem 0 0.8rem;
      font-size: 1.15rem;
      font-weight: 800;
    }

    .verified-badge {
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.4rem 0.65rem;
      border-radius: 999px;
      background: #ecfdf5;
      color: #047857;
      font-size: 0.7rem;
      font-weight: 700;
    }


    /* ================================
       DOCTOR
    ================================= */

    .doctor-info {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }

    .doctor-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #eff6ff;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .doctor-info span,
    .doctor-info strong,
    .doctor-info small {
      display: block;
    }

    .doctor-info span {
      font-size: 0.65rem;
      color: var(--text-muted);
    }

    .doctor-info strong {
      font-size: 0.8rem;
    }

    .doctor-info small {
      font-size: 0.7rem;
      color: var(--text-muted);
    }


    /* ================================
       SECTIONS
    ================================= */

    .record-section {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
    }

    .section-label {
      font-size: 0.7rem;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      margin-bottom: 0.55rem;
    }

    .section-label i {
      color: var(--primary);
      margin-right: 0.3rem;
    }


    /* ================================
       SYMPTOMS
    ================================= */

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .symptom-chip {
      background: #f1f5f9;
      border: 1px solid var(--border-color);
      border-radius: 999px;
      padding: 0.3rem 0.65rem;
      font-size: 0.72rem;
      font-weight: 600;
    }


    /* ================================
       REPORTS
    ================================= */

    .reports-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0.65rem;
    }

    .report-card {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.65rem;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: #fafafa;
    }

    .pdf-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: #fef2f2;
      color: #dc2626;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .report-card strong,
    .report-card span {
      display: block;
    }

    .report-card strong {
      font-size: 0.75rem;
    }

    .report-card span {
      font-size: 0.65rem;
      color: var(--text-muted);
    }

    .report-action {
      margin-left: auto;
      border: none;
      background: transparent;
      color: var(--primary);
      cursor: pointer;
    }


    /* ================================
       NOTES
    ================================= */

    .doctor-notes {
      margin-top: 1rem;
      padding: 0.85rem;
      border-radius: 10px;
      background: #f8fafc;
      border: 1px solid var(--border-color);
    }

    .notes-header {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.75rem;
      color: var(--primary-dark);
    }

    .doctor-notes p {
      margin: 0.5rem 0 0;
      font-size: 0.8rem;
      line-height: 1.5;
      color: var(--text-muted);
    }


    /* ================================
       EMPTY
    ================================= */

    .empty-state {
      text-align: center;
      padding: 4rem 1rem;
    }

    .empty-icon {
      width: 65px;
      height: 65px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .empty-state h3 {
      margin: 0;
    }

    .empty-state p {
      max-width: 450px;
      margin: 0.5rem auto;
      color: var(--text-muted);
      font-size: 0.85rem;
    }


    /* ================================
       PRIVACY
    ================================= */

    .privacy-notice {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.9rem 1rem;
      border: 1px solid #dbeafe;
      border-radius: 12px;
      background: #eff6ff;
    }

    .privacy-icon {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      background: #ffffff;
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .privacy-notice strong {
      font-size: 0.78rem;
    }

    .privacy-notice p {
      margin: 0.2rem 0 0;
      font-size: 0.7rem;
      color: var(--text-muted);
    }


    /* ================================
       RESPONSIVE
    ================================= */

    @media (max-width: 900px) {

      .summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 600px) {

      .page-heading {
        flex-direction: column;
        gap: 1rem;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }

      .record-top {
        flex-direction: column;
      }

      .timeline {
        padding: 1rem;
      }

      .timeline-line {
        width: 28px;
      }

      .timeline-dot {
        width: 30px;
        height: 30px;
        font-size: 0.75rem;
      }

    }

  `]
})
export class MedicalRecordsComponent implements OnInit {

  private recordsService = inject(MedicalRecordService);

  records: any[] = [];
  isLoading = false;

  get totalReports(): number {
    return this.records.reduce(
      (total, record) => total + (record.reports?.length || 0),
      0
    );
  }

  ngOnInit(): void {

    this.isLoading = true;

    this.recordsService
      .getRecordsByPatient('my_patient_id')
      .subscribe({

        next: (res) => {

          this.isLoading = false;

          if (res.success && res.data) {
            this.records = res.data;
          }

        },

        error: () => {
          this.isLoading = false;
        }

      });

  }

}