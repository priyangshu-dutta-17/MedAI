import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionService } from '../../../core/services/prescription.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  template: `
    <div class="prescriptions-page">

      <!-- Page Header -->
      <div class="page-intro">
        <div>
          <span class="section-label">
            <i class="fa-solid fa-shield-heart"></i> MEDICATION MANAGEMENT
          </span>

          <h2>
            Digital Prescriptions
          </h2>

          <p>
            View your active medicines, dosage schedules and instructions
            provided by your healthcare professionals.
          </p>
        </div>

        <div class="prescription-count">
          <i class="fa-solid fa-prescription-bottle-medical"></i>
          <div>
            <strong>{{ prescriptions.length }}</strong>
            <span>Prescriptions</span>
          </div>
        </div>
      </div>

      <!-- Safety Notice -->
      <div class="medical-notice">
        <div class="notice-icon">
          <i class="fa-solid fa-circle-info"></i>
        </div>

        <div>
          <strong>Medication Safety</strong>
          <p>
            Take medicines only according to your doctor's prescription.
            Do not change dosage or stop medication without medical advice.
          </p>
        </div>
      </div>

      <!-- Loading -->
      <app-loading-spinner
        *ngIf="isLoading"
        text="Loading your prescriptions...">
      </app-loading-spinner>


      <!-- Empty State -->
      <div
        class="empty-state"
        *ngIf="!isLoading && prescriptions.length === 0">

        <div class="empty-icon">
          <i class="fa-solid fa-prescription-bottle-medical"></i>
        </div>

        <h3>No Prescriptions Found</h3>

        <p>
          You currently don't have any digital prescriptions available.
        </p>
      </div>


      <!-- Prescription Cards -->
      <div
        class="prescription-card"
        *ngFor="let rx of prescriptions">

        <!-- Prescription Header -->
        <div class="prescription-header">

          <div class="doctor-section">

            <div class="doctor-avatar">
              <i class="fa-solid fa-user-doctor"></i>
            </div>

            <div>
              <span class="small-label">
                PRESCRIBED BY
              </span>

              <h3>
                {{ rx.doctorName || 'Dr. Anirban Mukherjee' }}
              </h3>

              <p>
                <i class="fa-solid fa-hospital"></i>
                {{ rx.hospital || 'SSKM Hospital, Kolkata' }}
              </p>
            </div>

          </div>

          <div class="prescription-meta">

            <span class="status-badge">
              <i class="fa-solid fa-circle-check"></i>
              Active
            </span>

            <span class="date">
              <i class="fa-solid fa-calendar"></i>
              {{ rx.date }}
            </span>

          </div>

        </div>


        <!-- Medicines -->
        <div class="medicine-section">

          <div class="section-heading">
            <div>
              <i class="fa-solid fa-pills"></i>
              <strong>Prescribed Medicines</strong>
            </div>

            <span>
              {{ rx.medicines?.length || 0 }} Medicines
            </span>
          </div>


          <div class="medicine-list">

            <div
              class="medicine-item"
              *ngFor="let med of rx.medicines; let i = index">

              <!-- Number -->
              <div class="medicine-number">
                {{ i + 1 }}
              </div>


              <!-- Medicine -->
              <div class="medicine-main">

                <h4>
                  {{ med.name }}
                </h4>

                <span class="medicine-dosage">
                  {{ med.dosage }}
                </span>

              </div>


              <!-- Frequency -->
              <div class="medicine-detail">

                <span class="detail-label">
                  FREQUENCY
                </span>

                <span class="frequency-badge">
                  <i class="fa-solid fa-clock"></i>
                  {{ med.frequency }}
                </span>

              </div>


              <!-- Duration -->
              <div class="medicine-detail">

                <span class="detail-label">
                  DURATION
                </span>

                <strong>
                  {{ med.duration }}
                </strong>

              </div>


              <!-- Instructions -->
              <div class="medicine-detail instructions">

                <span class="detail-label">
                  INSTRUCTIONS
                </span>

                <span>
                  {{ med.instructions || 'Follow doctor's instructions' }}
                </span>

              </div>

            </div>

          </div>

        </div>


        <!-- General Instructions -->
        <div
          class="general-instructions"
          *ngIf="rx.instructions">

          <div class="instruction-icon">
            <i class="fa-solid fa-notes-medical"></i>
          </div>

          <div>
            <strong>Doctor's Instructions</strong>

            <p>
              {{ rx.instructions }}
            </p>
          </div>

        </div>


        <!-- Footer -->
        <div class="prescription-footer">

          <span>
            <i class="fa-solid fa-lock"></i>
            Digitally stored medical record
          </span>

          <button class="btn btn-outline btn-sm">
            <i class="fa-solid fa-eye"></i>
            View Details
          </button>

        </div>

      </div>

    </div>
  `,

  styles: [`

    .prescriptions-page {
      max-width: 1400px;
      margin: 0 auto;
    }


    /* =========================
       PAGE INTRO
    ========================= */

    .page-intro {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      color: var(--primary);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: .08em;
      margin-bottom: .45rem;
    }

    .page-intro h2 {
      margin: 0;
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-intro p {
      margin: .45rem 0 0;
      color: var(--text-muted);
      font-size: .9rem;
    }


    /* =========================
       COUNT CARD
    ========================= */

    .prescription-count {
      min-width: 150px;
      display: flex;
      align-items: center;
      gap: .8rem;
      padding: 1rem 1.2rem;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }

    .prescription-count > i {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      background: var(--primary-light);
      color: var(--primary);
      font-size: 1.15rem;
    }

    .prescription-count strong {
      display: block;
      font-size: 1.25rem;
      color: var(--text-main);
    }

    .prescription-count span {
      display: block;
      font-size: .72rem;
      color: var(--text-muted);
    }


    /* =========================
       SAFETY NOTICE
    ========================= */

    .medical-notice {
      display: flex;
      align-items: flex-start;
      gap: .9rem;
      padding: 1rem 1.2rem;
      margin-bottom: 1.5rem;
      border: 1px solid #bae6fd;
      background: #f0f9ff;
      border-radius: var(--radius-lg);
    }

    .notice-icon {
      width: 35px;
      height: 35px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
    }

    .medical-notice strong {
      font-size: .85rem;
    }

    .medical-notice p {
      margin: .2rem 0 0;
      font-size: .78rem;
      color: var(--text-muted);
    }


    /* =========================
       PRESCRIPTION CARD
    ========================= */

    .prescription-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      margin-bottom: 1.5rem;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    .prescription-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-1px);
    }


    /* =========================
       HEADER
    ========================= */

    .prescription-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      background: linear-gradient(
        135deg,
        #ffffff,
        #f8fbff
      );
    }

    .doctor-section {
      display: flex;
      align-items: center;
      gap: .9rem;
    }

    .doctor-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .small-label,
    .detail-label {
      display: block;
      font-size: .65rem;
      font-weight: 800;
      color: var(--text-light);
      letter-spacing: .06em;
    }

    .doctor-section h3 {
      margin: .15rem 0;
      font-size: 1rem;
      font-weight: 750;
    }

    .doctor-section p {
      margin: 0;
      color: var(--text-muted);
      font-size: .75rem;
    }

    .prescription-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .45rem;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: .35rem;
      padding: .35rem .65rem;
      border-radius: var(--radius-full);
      background: #dcfce7;
      color: #15803d;
      font-size: .72rem;
      font-weight: 700;
    }

    .date {
      color: var(--text-muted);
      font-size: .75rem;
    }


    /* =========================
       MEDICINES
    ========================= */

    .medicine-section {
      padding: 1.25rem 1.5rem;
    }

    .section-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .8rem;
    }

    .section-heading > div {
      display: flex;
      align-items: center;
      gap: .5rem;
      color: var(--text-main);
      font-size: .88rem;
    }

    .section-heading i {
      color: var(--primary);
    }

    .section-heading > span {
      font-size: .7rem;
      color: var(--text-muted);
      font-weight: 600;
    }


    .medicine-list {
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    .medicine-item {
      display: grid;
      grid-template-columns: 38px 1.3fr .9fr .7fr 1.5fr;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid var(--border-color);
    }

    .medicine-item:last-child {
      border-bottom: none;
    }

    .medicine-item:hover {
      background: #f8fafc;
    }

    .medicine-number {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-light);
      color: var(--primary);
      font-size: .75rem;
      font-weight: 800;
    }

    .medicine-main h4 {
      margin: 0;
      font-size: .9rem;
      font-weight: 750;
    }

    .medicine-dosage {
      display: block;
      margin-top: .2rem;
      color: var(--text-muted);
      font-size: .75rem;
    }

    .medicine-detail {
      display: flex;
      flex-direction: column;
      gap: .3rem;
      font-size: .78rem;
      color: var(--text-main);
    }

    .frequency-badge {
      display: inline-flex;
      align-items: center;
      gap: .3rem;
      width: fit-content;
      padding: .3rem .5rem;
      border-radius: var(--radius-sm);
      background: var(--primary-light);
      color: var(--primary-dark);
      font-size: .7rem;
      font-weight: 700;
    }

    .instructions span:last-child {
      color: var(--text-muted);
      line-height: 1.35;
    }


    /* =========================
       INSTRUCTIONS
    ========================= */

    .general-instructions {
      display: flex;
      align-items: flex-start;
      gap: .75rem;
      margin: 0 1.5rem 1rem;
      padding: .85rem 1rem;
      border-radius: var(--radius-md);
      background: #f8fafc;
      border: 1px solid var(--border-color);
    }

    .instruction-icon {
      color: var(--secondary);
      font-size: 1rem;
    }

    .general-instructions strong {
      font-size: .8rem;
    }

    .general-instructions p {
      margin: .2rem 0 0;
      color: var(--text-muted);
      font-size: .75rem;
      line-height: 1.4;
    }


    /* =========================
       FOOTER
    ========================= */

    .prescription-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .8rem 1.5rem;
      border-top: 1px solid var(--border-color);
      background: #fafafa;
    }

    .prescription-footer > span {
      font-size: .68rem;
      color: var(--text-light);
    }

    .prescription-footer i {
      margin-right: .25rem;
    }


    /* =========================
       EMPTY STATE
    ========================= */

    .empty-state {
      text-align: center;
      padding: 4rem 1rem;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
    }

    .empty-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-light);
      color: var(--primary);
      font-size: 1.7rem;
    }

    .empty-state h3 {
      margin: 0 0 .4rem;
    }

    .empty-state p {
      margin: 0;
      color: var(--text-muted);
      font-size: .85rem;
    }


    /* =========================
       RESPONSIVE
    ========================= */

    @media (max-width: 1000px) {

      .medicine-item {
        grid-template-columns: 38px 1fr 1fr;
      }

      .medicine-detail {
        margin-top: .4rem;
      }

      .instructions {
        grid-column: 2 / -1;
      }

    }

    @media (max-width: 700px) {

      .page-intro {
        flex-direction: column;
        align-items: flex-start;
      }

      .prescription-count {
        width: 100%;
      }

      .prescription-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .prescription-meta {
        align-items: flex-start;
      }

      .medicine-item {
        grid-template-columns: 35px 1fr;
      }

      .medicine-detail {
        grid-column: 2;
      }

      .instructions {
        grid-column: 2;
      }

      .prescription-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: .7rem;
      }

    }

  `]
})
export class PrescriptionsComponent implements OnInit {

  private rxService = inject(PrescriptionService);

  prescriptions: any[] = [];
  isLoading = false;

  ngOnInit(): void {

    this.isLoading = true;

    this.rxService
      .getPrescriptionsByPatient('my_patient_id')
      .subscribe({

        next: (res) => {

          this.isLoading = false;

          if (res.success && res.data) {
            this.prescriptions = res.data;
          }

        },

        error: () => {
          this.isLoading = false;
        }

      });

  }

}