import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
}

@Component({
  selector: 'app-doctor-prescriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="prescription-page">

      <!-- PAGE HEADER -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-prescription-bottle-medical"></i>
            CLINICAL PRESCRIPTION
          </div>

          <h1>Electronic Prescription Writer</h1>

          <p>
            Create and manage digital prescriptions for your patients.
          </p>
        </div>

        <div class="header-status">
          <span class="status-dot"></span>
          Secure Clinical Workspace
        </div>
      </div>


      <!-- PATIENT SELECTION -->
      <div class="card patient-card">

        <div class="section-heading">
          <div class="section-icon blue">
            <i class="fa-solid fa-user-injured"></i>
          </div>

          <div>
            <h3>Patient Information</h3>
            <p>Select the patient for this prescription</p>
          </div>
        </div>

        <div class="patient-grid">

          <div class="form-group">
            <label>Search / Select Patient</label>

            <select
              class="form-control"
              [(ngModel)]="selectedPatient"
              name="patient">

              <option value="">-- Select Patient --</option>
              <option value="Sourav Das">
                Sourav Das — PAT-1024
              </option>
              <option value="Ananya Sen">
                Ananya Sen — PAT-1087
              </option>
              <option value="Rahul Ghosh">
                Rahul Ghosh — PAT-1142
              </option>
              <option value="Priya Roy">
                Priya Roy — PAT-1198
              </option>

            </select>
          </div>

          <div class="patient-summary" *ngIf="selectedPatient">

            <div class="patient-avatar">
              {{ selectedPatient.charAt(0) }}
            </div>

            <div>
              <strong>{{ selectedPatient }}</strong>

              <span>
                <i class="fa-solid fa-id-card"></i>
                Patient ID:
                {{ getPatientId() }}
              </span>
            </div>

          </div>

        </div>
      </div>


      <!-- PRESCRIPTION -->
      <div class="card prescription-card">

        <div class="prescription-top">

          <div class="section-heading">
            <div class="section-icon green">
              <i class="fa-solid fa-file-prescription"></i>
            </div>

            <div>
              <h3>New Prescription</h3>
              <p>Add medicines and dosage instructions</p>
            </div>
          </div>

          <div class="rx-number">
            <span>Prescription No.</span>
            <strong>RX-2026-00482</strong>
          </div>

        </div>


        <!-- MEDICINE FORM -->
        <div class="medicine-entry">

          <div class="entry-title">
            <i class="fa-solid fa-pills"></i>
            Add Medicine
          </div>

          <div class="medicine-grid">

            <div class="form-group medicine-name">
              <label>Medicine Name</label>
              <input
                type="text"
                class="form-control"
                [(ngModel)]="newMedicine.name"
                name="medicineName"
                placeholder="e.g. Atorvastatin">
            </div>

            <div class="form-group">
              <label>Dosage</label>

              <select
                class="form-control"
                [(ngModel)]="newMedicine.dosage"
                name="dosage">

                <option value="">Select dosage</option>
                <option value="5 mg">5 mg</option>
                <option value="10 mg">10 mg</option>
                <option value="20 mg">20 mg</option>
                <option value="40 mg">40 mg</option>
                <option value="500 mg">500 mg</option>
                <option value="650 mg">650 mg</option>

              </select>
            </div>

            <div class="form-group">
              <label>Frequency</label>

              <select
                class="form-control"
                [(ngModel)]="newMedicine.frequency"
                name="frequency">

                <option value="">Select frequency</option>
                <option value="Once daily">Once daily</option>
                <option value="Twice daily">Twice daily</option>
                <option value="Three times daily">Three times daily</option>
                <option value="Every 8 hours">Every 8 hours</option>
                <option value="As required">As required</option>

              </select>
            </div>

            <div class="form-group">
              <label>Duration</label>

              <select
                class="form-control"
                [(ngModel)]="newMedicine.duration"
                name="duration">

                <option value="">Select duration</option>
                <option value="3 Days">3 Days</option>
                <option value="5 Days">5 Days</option>
                <option value="7 Days">7 Days</option>
                <option value="14 Days">14 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="Continue">Continue</option>

              </select>
            </div>

            <div class="form-group instructions">
              <label>Instructions</label>

              <input
                type="text"
                class="form-control"
                [(ngModel)]="newMedicine.instructions"
                name="instructions"
                placeholder="e.g. After food">

            </div>

            <div class="add-button-wrapper">
              <button
                class="btn btn-primary"
                type="button"
                (click)="addMedicine()"
                [disabled]="!newMedicine.name">

                <i class="fa-solid fa-plus"></i>
                Add Medicine

              </button>
            </div>

          </div>
        </div>


        <!-- MEDICINES TABLE -->
        <div class="medicines-section">

          <div class="table-heading">

            <div>
              <h3>Prescribed Medicines</h3>
              <span>
                {{ medicines.length }} medicine{{ medicines.length === 1 ? '' : 's' }} added
              </span>
            </div>

          </div>

          <div
            class="empty-state"
            *ngIf="medicines.length === 0">

            <div class="empty-icon">
              <i class="fa-solid fa-pills"></i>
            </div>

            <strong>No medicines added yet</strong>

            <span>
              Use the form above to add medicines to this prescription.
            </span>

          </div>


          <div
            class="medicine-list"
            *ngIf="medicines.length > 0">

            <div
              class="medicine-row"
              *ngFor="let medicine of medicines; let i = index">

              <div class="medicine-number">
                {{ i + 1 }}
              </div>

              <div class="medicine-info">
                <strong>{{ medicine.name }}</strong>
                <span>{{ medicine.dosage }}</span>
              </div>

              <div class="medicine-detail">
                <label>Frequency</label>
                <strong>{{ medicine.frequency || '—' }}</strong>
              </div>

              <div class="medicine-detail">
                <label>Duration</label>
                <strong>{{ medicine.duration || '—' }}</strong>
              </div>

              <div class="medicine-detail">
                <label>Instructions</label>
                <strong>{{ medicine.instructions || '—' }}</strong>
              </div>

              <button
                class="delete-btn"
                type="button"
                (click)="removeMedicine(i)"
                title="Remove medicine">

                <i class="fa-solid fa-trash"></i>

              </button>

            </div>

          </div>

        </div>

      </div>


      <!-- ADDITIONAL NOTES -->
      <div class="card notes-card">

        <div class="section-heading">

          <div class="section-icon orange">
            <i class="fa-solid fa-note-sticky"></i>
          </div>

          <div>
            <h3>Clinical Instructions</h3>
            <p>Additional advice for the patient</p>
          </div>

        </div>

        <textarea
          class="form-control notes-input"
          [(ngModel)]="clinicalNotes"
          name="clinicalNotes"
          rows="4"
          placeholder="Enter follow-up instructions, dietary advice, precautions, or other clinical notes...">
        </textarea>

      </div>


      <!-- ACTION BAR -->
      <div class="action-bar">

        <div class="security-note">
          <i class="fa-solid fa-shield-halved"></i>

          <div>
            <strong>Digital Prescription</strong>
            <span>
              Prescription will be securely recorded in the patient's EMR.
            </span>
          </div>
        </div>

        <div class="action-buttons">

          <button
            class="btn btn-outline"
            type="button"
            (click)="clearPrescription()">

            <i class="fa-solid fa-rotate-left"></i>
            Clear

          </button>

          <button
            class="btn btn-primary save-btn"
            type="button"
            (click)="savePrescription()"
            [disabled]="!selectedPatient || medicines.length === 0">

            <i class="fa-solid fa-file-circle-check"></i>
            Save Prescription

          </button>

        </div>

      </div>


      <!-- SUCCESS MESSAGE -->
      <div class="success-message" *ngIf="saved">

        <i class="fa-solid fa-circle-check"></i>

        <div>
          <strong>Prescription Saved Successfully</strong>
          <span>
            The prescription has been added to {{ selectedPatient }}'s medical record.
          </span>
        </div>

      </div>

    </div>
  `,

  styles: [`

    .prescription-page {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 8px 12px 40px;
      box-sizing: border-box;
    }

    /* HEADER */

    .page-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
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

    .header-status {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 13px;
      border-radius: 999px;
      background: #eefaf7;
      border: 1px solid #d7eee9;
      color: #087d76;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: #10a875;
      border-radius: 50%;
    }

    /* CARD */

    .card {
      background: #fff;
      border: 1px solid #eaf0f1;
      border-radius: 20px;
      box-shadow: 0 7px 25px rgba(22, 65, 75, .055);
    }

    /* PATIENT */

    .patient-card {
      padding: 21px;
      margin-bottom: 18px;
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .section-heading h3 {
      margin: 0;
      color: #163e48;
      font-size: 16px;
      font-weight: 800;
    }

    .section-heading p {
      margin: 4px 0 0;
      color: #8a9b9f;
      font-size: 11px;
    }

    .section-icon {
      width: 40px;
      height: 40px;
      border-radius: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .section-icon.blue {
      background: #eaf5ff;
      color: #147fc1;
    }

    .section-icon.green {
      background: #eafaf2;
      color: #0b9861;
    }

    .section-icon.orange {
      background: #fff4e8;
      color: #e5851b;
    }

    .patient-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      align-items: end;
      margin-top: 18px;
    }

    .form-group label {
      display: block;
      color: #526d74;
      font-size: 11px;
      font-weight: 800;
      margin-bottom: 7px;
    }

    .form-control {
      width: 100%;
      box-sizing: border-box;
      padding: 11px 12px;
      border: 1px solid #dce7e9;
      border-radius: 10px;
      background: #fbfdfd;
      color: #24444c;
      font-size: 12px;
      outline: none;
      transition: .2s;
    }

    .form-control:focus {
      border-color: #0b9a92;
      box-shadow: 0 0 0 3px rgba(11, 154, 146, .08);
      background: #fff;
    }

    .patient-summary {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 10px 13px;
      background: #f5faf9;
      border: 1px solid #dcefeb;
      border-radius: 12px;
    }

    .patient-avatar {
      width: 39px;
      height: 39px;
      border-radius: 10px;
      background: #0c938b;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
    }

    .patient-summary strong {
      display: block;
      color: #244850;
      font-size: 13px;
    }

    .patient-summary span {
      display: block;
      color: #819297;
      font-size: 10px;
      margin-top: 3px;
    }

    /* PRESCRIPTION */

    .prescription-card {
      padding: 21px;
      margin-bottom: 18px;
    }

    .prescription-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .rx-number {
      text-align: right;
    }

    .rx-number span {
      display: block;
      color: #98a7aa;
      font-size: 9px;
      text-transform: uppercase;
      font-weight: 800;
    }

    .rx-number strong {
      color: #0a837c;
      font-size: 13px;
    }

    /* MEDICINE ENTRY */

    .medicine-entry {
      padding: 17px;
      border-radius: 14px;
      background: #f7fafb;
      border: 1px solid #e8eff0;
      margin-bottom: 22px;
    }

    .entry-title {
      color: #31545c;
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 14px;
    }

    .entry-title i {
      color: #0a928a;
      margin-right: 6px;
    }

    .medicine-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1.1fr 1fr;
      gap: 12px;
      align-items: end;
    }

    .medicine-name {
      min-width: 0;
    }

    .instructions {
      grid-column: span 2;
    }

    .add-button-wrapper {
      grid-column: span 2;
    }

    .btn {
      border: none;
      border-radius: 10px;
      padding: 10px 15px;
      font-size: 11px;
      font-weight: 800;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      transition: .2s;
    }

    .btn-primary {
      background: #0b9189;
      color: white;
      box-shadow: 0 5px 14px rgba(11, 145, 137, .16);
    }

    .btn-primary:hover:not(:disabled) {
      background: #087b75;
      transform: translateY(-1px);
    }

    .btn:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    /* MEDICINE LIST */

    .table-heading {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .table-heading h3 {
      margin: 0;
      color: #23464e;
      font-size: 14px;
    }

    .table-heading span {
      color: #89999d;
      font-size: 10px;
    }

    .empty-state {
      border: 1px dashed #d7e3e5;
      border-radius: 13px;
      padding: 28px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .empty-icon {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #eff7f7;
      color: #0b928b;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 9px;
    }

    .empty-state strong {
      color: #48656c;
      font-size: 12px;
    }

    .empty-state span {
      color: #94a3a6;
      font-size: 10px;
      margin-top: 4px;
    }

    .medicine-list {
      border: 1px solid #e6edef;
      border-radius: 13px;
      overflow: hidden;
    }

    .medicine-row {
      display: grid;
      grid-template-columns: 35px 1.5fr 1fr 1fr 1.4fr 35px;
      align-items: center;
      gap: 12px;
      padding: 13px 14px;
      border-bottom: 1px solid #edf2f3;
    }

    .medicine-row:last-child {
      border-bottom: none;
    }

    .medicine-row:hover {
      background: #fbfdfd;
    }

    .medicine-number {
      width: 27px;
      height: 27px;
      border-radius: 8px;
      background: #eaf8f6;
      color: #087f79;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 800;
    }

    .medicine-info strong {
      display: block;
      color: #23454d;
      font-size: 12px;
    }

    .medicine-info span {
      color: #7d9297;
      font-size: 10px;
    }

    .medicine-detail label {
      display: block;
      color: #9aa8ab;
      font-size: 8px;
      text-transform: uppercase;
      font-weight: 800;
      margin-bottom: 3px;
    }

    .medicine-detail strong {
      color: #506b72;
      font-size: 10px;
    }

    .delete-btn {
      border: none;
      background: #fff1f1;
      color: #dc5555;
      width: 28px;
      height: 28px;
      border-radius: 8px;
      cursor: pointer;
    }

    .delete-btn:hover {
      background: #ffe1e1;
    }

    /* NOTES */

    .notes-card {
      padding: 21px;
      margin-bottom: 18px;
    }

    .notes-input {
      margin-top: 16px;
      resize: vertical;
      line-height: 1.5;
    }

    /* ACTION */

    .action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 16px 19px;
      border-radius: 16px;
      background: #f5faf9;
      border: 1px solid #dcefeb;
    }

    .security-note {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .security-note > i {
      color: #0a9189;
      font-size: 20px;
    }

    .security-note strong {
      display: block;
      color: #31535b;
      font-size: 11px;
    }

    .security-note span {
      display: block;
      color: #87989c;
      font-size: 9px;
      margin-top: 3px;
    }

    .action-buttons {
      display: flex;
      gap: 9px;
    }

    .btn-outline {
      background: white;
      color: #087f79;
      border: 1px solid #bddbd7;
    }

    .btn-outline:hover {
      background: #edf9f7;
    }

    .save-btn {
      padding-left: 19px;
      padding-right: 19px;
    }

    /* SUCCESS */

    .success-message {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 15px;
      padding: 13px 16px;
      border-radius: 12px;
      background: #eafaf2;
      border: 1px solid #cceedd;
      color: #087b4b;
    }

    .success-message > i {
      font-size: 20px;
    }

    .success-message strong {
      display: block;
      font-size: 12px;
    }

    .success-message span {
      display: block;
      font-size: 10px;
      margin-top: 3px;
      color: #64877a;
    }

    /* RESPONSIVE */

    @media (max-width: 1000px) {

      .medicine-grid {
        grid-template-columns: 1fr 1fr;
      }

      .instructions,
      .add-button-wrapper {
        grid-column: span 2;
      }

      .medicine-row {
        grid-template-columns: 35px 1.5fr 1fr 1fr 35px;
      }

      .medicine-detail:nth-of-type(2) {
        display: none;
      }

    }

    @media (max-width: 700px) {

      .page-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .patient-grid,
      .profile-grid {
        grid-template-columns: 1fr;
      }

      .medicine-grid {
        grid-template-columns: 1fr;
      }

      .instructions,
      .add-button-wrapper {
        grid-column: span 1;
      }

      .medicine-row {
        grid-template-columns: 35px 1fr 35px;
      }

      .medicine-detail {
        display: none;
      }

      .prescription-top {
        align-items: flex-start;
      }

      .action-bar {
        flex-direction: column;
        align-items: stretch;
      }

      .action-buttons {
        justify-content: flex-end;
      }

    }

  `]
})
export class DoctorPrescriptionsComponent {

  selectedPatient = '';

  clinicalNotes = '';

  saved = false;

  medicines: Medicine[] = [];

  newMedicine: Medicine = {
    name: '',
    dosage: '',
    frequency: '',
    duration: '',
    instructions: ''
  };


  getPatientId(): string {

    const ids: Record<string, string> = {
      'Sourav Das': 'PAT-1024',
      'Ananya Sen': 'PAT-1087',
      'Rahul Ghosh': 'PAT-1142',
      'Priya Roy': 'PAT-1198'
    };

    return ids[this.selectedPatient] || '—';
  }


  addMedicine(): void {

    if (!this.newMedicine.name.trim()) {
      return;
    }

    this.medicines.push({
      ...this.newMedicine
    });

    this.newMedicine = {
      name: '',
      dosage: '',
      frequency: '',
      duration: '',
      instructions: ''
    };

    this.saved = false;
  }


  removeMedicine(index: number): void {

    this.medicines.splice(index, 1);

    this.saved = false;
  }


  savePrescription(): void {

    if (!this.selectedPatient || this.medicines.length === 0) {
      return;
    }

    this.saved = true;
  }


  clearPrescription(): void {

    this.selectedPatient = '';
    this.clinicalNotes = '';
    this.medicines = [];

    this.newMedicine = {
      name: '',
      dosage: '',
      frequency: '',
      duration: '',
      instructions: ''
    };

    this.saved = false;
  }

}