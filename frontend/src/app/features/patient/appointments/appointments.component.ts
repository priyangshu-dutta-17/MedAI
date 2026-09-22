import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../../core/services/appointment.service';
import { DoctorService } from '../../../core/services/doctor.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  template: `
    <div class="appointments-page">

      <!-- ================= HEADER ================= -->

      <div class="page-heading">

        <div>
          <span class="eyebrow">
            <i class="fa-solid fa-calendar-check"></i>
            PATIENT PORTAL
          </span>

          <h1>Appointments</h1>

          <p>
            Schedule consultations and manage your upcoming healthcare visits.
          </p>
        </div>

        <button
          class="primary-action"
          (click)="showBookingForm = !showBookingForm">

          <i
            class="fa-solid"
            [ngClass]="showBookingForm ? 'fa-xmark' : 'fa-plus'">
          </i>

          {{ showBookingForm ? 'Close Booking' : 'Book Appointment' }}

        </button>

      </div>

      <!-- ================= SUCCESS MESSAGE ================= -->

      <app-alert
        *ngIf="successMsg"
        [type]="'success'"
        [message]="successMsg">
      </app-alert>


      <!-- ================= QUICK STATS ================= -->

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon blue">
            <i class="fa-solid fa-calendar-check"></i>
          </div>

          <div>
            <span>UPCOMING</span>
            <strong>{{ upcomingCount }}</strong>
            <small>Scheduled visits</small>
          </div>
        </div>


        <div class="stat-card">
          <div class="stat-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div>
            <span>CONFIRMED</span>
            <strong>{{ confirmedCount }}</strong>
            <small>Doctor confirmed</small>
          </div>
        </div>


        <div class="stat-card">
          <div class="stat-icon orange">
            <i class="fa-solid fa-clock"></i>
          </div>

          <div>
            <span>PENDING</span>
            <strong>{{ pendingCount }}</strong>
            <small>Awaiting confirmation</small>
          </div>
        </div>


        <div class="stat-card">
          <div class="stat-icon purple">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div>
            <span>DOCTORS</span>
            <strong>{{ doctors.length }}</strong>
            <small>Available specialists</small>
          </div>
        </div>

      </div>


      <!-- ================= BOOKING FORM ================= -->

      <div
        class="booking-card"
        *ngIf="showBookingForm">

        <div class="section-heading">

          <div class="section-icon">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div>
            <h2>Schedule a Consultation</h2>
            <p>
              Choose a verified doctor and preferred appointment slot.
            </p>
          </div>

        </div>


        <form
          (ngSubmit)="bookAppointment()"
          class="booking-grid">

          <!-- Doctor -->

          <div class="form-group full-width">

            <label class="form-label">
              <i class="fa-solid fa-user-doctor"></i>
              Doctor / Specialist
            </label>

            <select
              class="form-control"
              [(ngModel)]="newAppt.doctorId"
              name="doctorId"
              required>

              <option value="">
                Select a verified doctor
              </option>

              <option
                *ngFor="let doc of doctors"
                [value]="doc.id">

                {{ doc.name }}
                —
                {{ doc.specialization }}
                ({{ doc.hospital }})

              </option>

            </select>

          </div>


          <!-- Date -->

          <div class="form-group">

            <label class="form-label">
              <i class="fa-solid fa-calendar"></i>
              Preferred Date
            </label>

            <input
              type="date"
              class="form-control"
              [(ngModel)]="newAppt.date"
              name="date"
              required>

          </div>


          <!-- Time -->

          <div class="form-group">

            <label class="form-label">
              <i class="fa-solid fa-clock"></i>
              Time Slot
            </label>

            <select
              class="form-control"
              [(ngModel)]="newAppt.time"
              name="time"
              required>

              <option value="17:00">05:00 PM</option>
              <option value="17:30">05:30 PM</option>
              <option value="18:00">06:00 PM</option>
              <option value="18:30">06:30 PM</option>

            </select>

          </div>


          <!-- Reason -->

          <div class="form-group full-width">

            <label class="form-label">
              <i class="fa-solid fa-notes-medical"></i>
              Reason for Visit
            </label>

            <input
              type="text"
              class="form-control"
              [(ngModel)]="newAppt.reason"
              name="reason"
              placeholder="e.g. Routine checkup, fever, chest discomfort...">

          </div>


          <!-- Submit -->

          <div class="booking-actions">

            <button
              type="button"
              class="secondary-action"
              (click)="showBookingForm = false">

              Cancel

            </button>

            <button
              type="submit"
              class="primary-action"
              [disabled]="
                !newAppt.doctorId ||
                !newAppt.date ||
                isSubmitting
              ">

              <i
                class="fa-solid"
                [ngClass]="
                  isSubmitting
                  ? 'fa-spinner fa-spin'
                  : 'fa-calendar-check'
                ">
              </i>

              {{ isSubmitting ? 'Booking...' : 'Confirm Appointment' }}

            </button>

          </div>

        </form>

      </div>


      <!-- ================= APPOINTMENTS ================= -->

      <div class="appointments-card">

        <div class="section-header">

          <div>
            <h2>
              <i class="fa-solid fa-calendar-days"></i>
              My Appointments
            </h2>

            <p>
              Your scheduled consultations and appointment history.
            </p>
          </div>

          <span class="count-badge">
            {{ appointments.length }} Total
          </span>

        </div>


        <!-- Loading -->

        <app-loading-spinner
          *ngIf="isLoading"
          text="Loading your appointments...">
        </app-loading-spinner>


        <!-- Appointment List -->

        <div
          class="appointment-list"
          *ngIf="!isLoading && appointments.length > 0">

          <div
            class="appointment-item"
            *ngFor="let appt of appointments">

            <!-- Doctor -->

            <div class="doctor-section">

              <div class="doctor-avatar">
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <div>

                <h3>
                  {{ appt.doctorName || 'Dr. Anirban Mukherjee' }}
                </h3>

                <p>
                  <i class="fa-solid fa-hospital"></i>
                  {{ appt.hospital || 'SSKM Hospital, Kolkata' }}
                </p>

              </div>

            </div>


            <!-- Date -->

            <div class="appointment-info">

              <span class="info-label">
                DATE & TIME
              </span>

              <strong>
                {{ appt.date }}
              </strong>

              <small>
                <i class="fa-solid fa-clock"></i>
                {{ appt.time }}
              </small>

            </div>


            <!-- Reason -->

            <div class="appointment-info reason">

              <span class="info-label">
                REASON
              </span>

              <strong>
                {{ appt.reason || 'General Consultation' }}
              </strong>

            </div>


            <!-- Status -->

            <div class="status-section">

              <span
                class="status-badge"
                [ngClass]="appt.status">

                <i
                  class="fa-solid"
                  [ngClass]="
                    appt.status === 'confirmed'
                    ? 'fa-circle-check'
                    : appt.status === 'cancelled'
                    ? 'fa-circle-xmark'
                    : 'fa-clock'
                  ">
                </i>

                {{ appt.status | titlecase }}

              </span>

              <button
                *ngIf="appt.status !== 'cancelled'"
                class="cancel-btn"
                (click)="cancelAppt(appt.id)">

                Cancel

              </button>

            </div>

          </div>

        </div>


        <!-- Empty -->

        <div
          class="empty-state"
          *ngIf="!isLoading && appointments.length === 0">

          <div class="empty-icon">
            <i class="fa-solid fa-calendar-xmark"></i>
          </div>

          <h3>No appointments yet</h3>

          <p>
            You haven't scheduled any consultations.
          </p>

          <button
            class="primary-action"
            (click)="showBookingForm = true">

            <i class="fa-solid fa-plus"></i>
            Book Your First Appointment

          </button>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* ================= PAGE ================= */

    .appointments-page {
      max-width: 1200px;
      margin: 0 auto;
    }


    /* ================= HEADER ================= */

    .page-heading {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: .45rem;
      color: var(--primary);
      font-size: .7rem;
      font-weight: 800;
      letter-spacing: .08em;
    }

    .page-heading h1 {
      margin: .35rem 0 0;
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-heading p {
      margin: .4rem 0 0;
      color: var(--text-muted);
      font-size: .9rem;
    }


    /* ================= BUTTONS ================= */

    .primary-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      padding: .7rem 1.1rem;
      border: none;
      border-radius: var(--radius-md);
      background: var(--primary);
      color: #fff;
      font-size: .8rem;
      font-weight: 700;
      cursor: pointer;
      transition: .2s ease;
      white-space: nowrap;
    }

    .primary-action:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
    }

    .primary-action:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    .secondary-action {
      padding: .7rem 1.1rem;
      border: 1px solid var(--border-color);
      background: #fff;
      border-radius: var(--radius-md);
      font-weight: 700;
      cursor: pointer;
    }


    /* ================= STATS ================= */

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: .85rem;
    }

    .stat-icon {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .stat-icon.blue {
      background: #eff6ff;
      color: #2563eb;
    }

    .stat-icon.green {
      background: #ecfdf5;
      color: #16a34a;
    }

    .stat-icon.orange {
      background: #fff7ed;
      color: #ea580c;
    }

    .stat-icon.purple {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .stat-card span {
      display: block;
      color: var(--text-muted);
      font-size: .68rem;
      font-weight: 800;
    }

    .stat-card strong {
      display: block;
      margin-top: .1rem;
      font-size: 1.35rem;
    }

    .stat-card small {
      display: block;
      color: var(--text-light);
      font-size: .68rem;
    }


    /* ================= BOOKING ================= */

    .booking-card,
    .appointments-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      margin-bottom: 1.5rem;
    }

    .booking-card {
      padding: 1.5rem;
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-bottom: 1.5rem;
    }

    .section-icon {
      width: 42px;
      height: 42px;
      border-radius: var(--radius-md);
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .section-heading h2 {
      margin: 0;
      font-size: 1rem;
    }

    .section-heading p {
      margin: .25rem 0 0;
      color: var(--text-muted);
      font-size: .75rem;
    }

    .booking-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .full-width {
      grid-column: span 2;
    }

    .form-label {
      display: block;
      margin-bottom: .45rem;
      font-size: .75rem;
      font-weight: 700;
    }

    .form-label i {
      margin-right: .35rem;
      color: var(--primary);
    }

    .booking-actions {
      grid-column: span 2;
      display: flex;
      justify-content: flex-end;
      gap: .7rem;
      padding-top: .5rem;
    }


    /* ================= APPOINTMENT LIST ================= */

    .section-header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .section-header h2 {
      margin: 0;
      font-size: 1rem;
    }

    .section-header h2 i {
      color: var(--primary);
      margin-right: .4rem;
    }

    .section-header p {
      margin: .3rem 0 0;
      color: var(--text-muted);
      font-size: .75rem;
    }

    .count-badge {
      background: var(--primary-light);
      color: var(--primary-dark);
      padding: .35rem .7rem;
      border-radius: var(--radius-full);
      font-size: .7rem;
      font-weight: 800;
    }

    .appointment-item {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1.2fr auto;
      gap: 1.25rem;
      align-items: center;
      padding: 1.15rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      transition: background .2s ease;
    }

    .appointment-item:last-child {
      border-bottom: none;
    }

    .appointment-item:hover {
      background: #f8fafc;
    }


    /* ================= DOCTOR ================= */

    .doctor-section {
      display: flex;
      align-items: center;
      gap: .75rem;
    }

    .doctor-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .doctor-section h3 {
      margin: 0;
      font-size: .85rem;
    }

    .doctor-section p {
      margin: .25rem 0 0;
      color: var(--text-muted);
      font-size: .7rem;
    }


    /* ================= INFO ================= */

    .info-label {
      display: block;
      color: var(--text-light);
      font-size: .62rem;
      font-weight: 800;
      letter-spacing: .04em;
      margin-bottom: .25rem;
    }

    .appointment-info strong {
      display: block;
      font-size: .78rem;
    }

    .appointment-info small {
      display: block;
      margin-top: .2rem;
      color: var(--text-muted);
      font-size: .7rem;
    }

    .reason strong {
      font-weight: 600;
      line-height: 1.4;
    }


    /* ================= STATUS ================= */

    .status-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: .5rem;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: .35rem;
      padding: .3rem .6rem;
      border-radius: var(--radius-full);
      font-size: .68rem;
      font-weight: 800;
    }

    .status-badge.confirmed {
      background: #ecfdf5;
      color: #15803d;
    }

    .status-badge.pending {
      background: #fff7ed;
      color: #c2410c;
    }

    .status-badge.cancelled {
      background: #fef2f2;
      color: #b91c1c;
    }

    .cancel-btn {
      border: none;
      background: transparent;
      color: #dc2626;
      font-size: .68rem;
      font-weight: 700;
      cursor: pointer;
    }

    .cancel-btn:hover {
      text-decoration: underline;
    }


    /* ================= EMPTY ================= */

    .empty-state {
      text-align: center;
      padding: 4rem 1rem;
    }

    .empty-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      background: #f1f5f9;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }

    .empty-state h3 {
      margin: 0;
      font-size: 1rem;
    }

    .empty-state p {
      color: var(--text-muted);
      font-size: .8rem;
      margin-bottom: 1.2rem;
    }


    /* ================= RESPONSIVE ================= */

    @media (max-width: 1000px) {

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .appointment-item {
        grid-template-columns: 1fr 1fr;
      }

      .status-section {
        align-items: flex-start;
      }

    }

    @media (max-width: 650px) {

      .page-heading {
        flex-direction: column;
        align-items: flex-start;
      }

      .stats-grid,
      .booking-grid {
        grid-template-columns: 1fr;
      }

      .full-width,
      .booking-actions {
        grid-column: span 1;
      }

      .appointment-item {
        grid-template-columns: 1fr;
      }

      .section-header {
        align-items: flex-start;
        gap: 1rem;
      }

    }

  `]
})
export class AppointmentsComponent implements OnInit {

  private apptService = inject(AppointmentService);
  private docService = inject(DoctorService);

  appointments: any[] = [];
  doctors: any[] = [];

  isLoading = false;
  isSubmitting = false;
  showBookingForm = false;
  successMsg = '';

  newAppt = {
    doctorId: '',
    date: '2026-09-05',
    time: '17:30',
    reason: 'Routine health checkup'
  };


  /* ================= STATS ================= */

  get upcomingCount(): number {
    return this.appointments.filter(
      a => a.status !== 'cancelled'
    ).length;
  }

  get confirmedCount(): number {
    return this.appointments.filter(
      a => a.status === 'confirmed'
    ).length;
  }

  get pendingCount(): number {
    return this.appointments.filter(
      a => a.status === 'pending'
    ).length;
  }


  /* ================= LOAD ================= */

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {

    this.isLoading = true;

    this.docService.getDoctors().subscribe({

      next: (res) => {

        if (res.success && res.data) {
          this.doctors = res.data;

          if (this.doctors.length > 0) {
            this.newAppt.doctorId = this.doctors[0].id;
          }

        }

      }

    });


    this.apptService
      .getAppointments('patient', 'my_id')
      .subscribe({

        next: (res) => {

          this.isLoading = false;

          if (res.success && res.data) {
            this.appointments = res.data;
          }

        },

        error: () => {
          this.isLoading = false;
        }

      });

  }


  /* ================= BOOK ================= */

  bookAppointment(): void {

    this.isSubmitting = true;
    this.successMsg = '';

    this.apptService
      .bookAppointment(this.newAppt)
      .subscribe({

        next: () => {

          this.isSubmitting = false;
          this.showBookingForm = false;

          this.successMsg =
            'Appointment booked successfully! Doctor confirmation pending.';

          this.loadData();

        },

        error: () => {
          this.isSubmitting = false;
        }

      });

  }


  /* ================= CANCEL ================= */

  cancelAppt(id: string): void {

    if (
      confirm(
        'Are you sure you wish to cancel this appointment?'
      )
    ) {

      this.apptService
        .updateAppointmentStatus(
          id,
          'cancelled',
          'Cancelled by patient'
        )
        .subscribe({

          next: () => {
            this.loadData();
          }

        });

    }

  }

}