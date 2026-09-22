import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="symptoms-page">

      <!-- Header -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-heart-pulse"></i>
            HEALTH ASSESSMENT
          </div>

          <h1>Symptom Triage</h1>

          <p>
            Record your current symptoms and get an initial health assessment
            before using the AI Disease Predictor.
          </p>
        </div>

        <div class="header-status">
          <span class="status-dot"></span>
          Assessment Ready
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="medical-notice">
        <div class="notice-icon">
          <i class="fa-solid fa-shield-heart"></i>
        </div>

        <div>
          <strong>Medical Information Notice</strong>
          <p>
            This assessment is for informational purposes only and does not
            replace professional medical advice or diagnosis.
          </p>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="assessment-grid">

        <!-- Symptom Selection -->
        <div class="card symptom-card">

          <div class="section-heading">
            <div class="section-icon">
              <i class="fa-solid fa-list-check"></i>
            </div>

            <div>
              <h2>Select Your Symptoms</h2>
              <p>Choose all symptoms you are currently experiencing.</p>
            </div>
          </div>

          <!-- Search -->
          <div class="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              [(ngModel)]="searchTerm"
              placeholder="Search symptoms..."
            />
          </div>

          <!-- Selected Count -->
          <div class="selection-info">
            <span>
              <strong>{{ selectedSymptoms.length }}</strong>
              symptoms selected
            </span>

            <button
              *ngIf="selectedSymptoms.length > 0"
              type="button"
              class="clear-btn"
              (click)="clearSymptoms()">
              Clear all
            </button>
          </div>

          <!-- Symptoms -->
          <div class="symptoms-grid">

            <button
              type="button"
              *ngFor="let symptom of filteredSymptoms"
              class="symptom-option"
              [class.selected]="selectedSymptoms.includes(symptom)"
              (click)="toggleSymptom(symptom)">

              <span class="symptom-check">
                <i
                  class="fa-solid"
                  [ngClass]="
                    selectedSymptoms.includes(symptom)
                      ? 'fa-check'
                      : 'fa-plus'
                  ">
                </i>
              </span>

              <span>{{ formatSymptomName(symptom) }}</span>

            </button>

          </div>

        </div>

        <!-- Right Panel -->
        <div class="right-column">

          <!-- Selected Symptoms -->
          <div class="card selected-card">

            <div class="section-heading small">
              <div class="section-icon purple">
                <i class="fa-solid fa-clipboard-check"></i>
              </div>

              <div>
                <h2>Current Symptoms</h2>
                <p>Your selected symptoms appear here.</p>
              </div>
            </div>

            <div
              class="empty-state"
              *ngIf="selectedSymptoms.length === 0">

              <i class="fa-solid fa-notes-medical"></i>

              <strong>No symptoms selected</strong>

              <span>
                Select symptoms from the panel to begin.
              </span>

            </div>

            <div
              class="selected-list"
              *ngIf="selectedSymptoms.length > 0">

              <div
                class="selected-item"
                *ngFor="let symptom of selectedSymptoms">

                <span>
                  <i class="fa-solid fa-circle-check"></i>
                  {{ formatSymptomName(symptom) }}
                </span>

                <button
                  type="button"
                  (click)="toggleSymptom(symptom)">
                  <i class="fa-solid fa-xmark"></i>
                </button>

              </div>

            </div>

          </div>

          <!-- Triage -->
          <div class="card triage-card">

            <div class="triage-top">
              <div class="section-icon orange">
                <i class="fa-solid fa-stethoscope"></i>
              </div>

              <div>
                <h2>What happens next?</h2>
                <p>Use your selected symptoms for further assessment.</p>
              </div>
            </div>

            <div class="steps">

              <div class="step">
                <div class="step-number">1</div>

                <div>
                  <strong>Select symptoms</strong>
                  <span>Choose everything you're currently experiencing.</span>
                </div>
              </div>

              <div class="step">
                <div class="step-number">2</div>

                <div>
                  <strong>Run AI analysis</strong>
                  <span>Use the Disease Predictor to analyze your symptoms.</span>
                </div>
              </div>

              <div class="step">
                <div class="step-number">3</div>

                <div>
                  <strong>Review results</strong>
                  <span>Review the predicted conditions and recommendations.</span>
                </div>
              </div>

            </div>

            <a
              routerLink="/patient/disease-prediction"
              [queryParams]="{ symptoms: selectedSymptoms.join(',') }"
              class="analyze-btn"
              [class.disabled]="selectedSymptoms.length === 0">

              <i class="fa-solid fa-brain"></i>

              Continue to AI Disease Predictor

              <i class="fa-solid fa-arrow-right arrow"></i>

            </a>

          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* PAGE */

    .symptoms-page {
      max-width: 1400px;
      margin: 0 auto;
    }

    /* HEADER */

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      color: var(--primary);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      margin-bottom: 0.45rem;
    }

    .eyebrow i {
      margin-right: 0.35rem;
    }

    .page-header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-header p {
      margin: 0.5rem 0 0;
      color: var(--text-muted);
      font-size: 0.9rem;
      max-width: 650px;
    }

    .header-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 0.9rem;
      border-radius: 999px;
      background: #ecfdf5;
      color: #047857;
      font-size: 0.78rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
    }

    /* NOTICE */

    .medical-notice {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 1rem 1.2rem;
      margin-bottom: 1.5rem;
      border: 1px solid #dbeafe;
      border-radius: 12px;
      background: #f8fbff;
    }

    .notice-icon {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #e0efff;
      color: var(--primary);
      font-size: 1.1rem;
    }

    .medical-notice strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    .medical-notice p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    /* GRID */

    .assessment-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(320px, 0.9fr);
      gap: 1.5rem;
      align-items: start;
    }

    .right-column {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      box-shadow: var(--shadow-sm);
    }

    /* SECTION HEADING */

    .section-heading {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      margin-bottom: 1.4rem;
    }

    .section-heading.small {
      margin-bottom: 1rem;
    }

    .section-heading h2,
    .triage-top h2 {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 800;
    }

    .section-heading p,
    .triage-top p {
      margin: 0.25rem 0 0;
      color: var(--text-muted);
      font-size: 0.76rem;
    }

    .section-icon {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
      background: var(--primary-light);
      color: var(--primary);
      flex-shrink: 0;
    }

    .section-icon.purple {
      background: #f1edff;
      color: #7c3aed;
    }

    .section-icon.orange {
      background: #fff4e6;
      color: #ea580c;
    }

    /* SYMPTOM CARD */

    .symptom-card {
      padding: 1.5rem;
    }

    .search-box {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      height: 45px;
      padding: 0 0.9rem;
      border: 1px solid var(--border-color);
      border-radius: 9px;
      background: #fafafa;
      margin-bottom: 1rem;
    }

    .search-box i {
      color: var(--text-light);
      font-size: 0.85rem;
    }

    .search-box input {
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: var(--text-main);
      font-size: 0.85rem;
    }

    .selection-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .selection-info strong {
      color: var(--primary);
    }

    .clear-btn {
      border: none;
      background: none;
      color: #dc2626;
      font-size: 0.73rem;
      font-weight: 700;
      cursor: pointer;
    }

    /* SYMPTOMS */

    .symptoms-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.55rem;
      max-height: 470px;
      overflow-y: auto;
      padding-right: 0.3rem;
    }

    .symptom-option {
      min-height: 44px;
      display: flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.6rem 0.7rem;
      border: 1px solid var(--border-color);
      border-radius: 9px;
      background: #ffffff;
      color: var(--text-main);
      text-align: left;
      font-size: 0.76rem;
      cursor: pointer;
      transition: 0.2s ease;
    }

    .symptom-option:hover {
      border-color: var(--primary);
      background: var(--primary-light);
    }

    .symptom-option.selected {
      border-color: var(--primary);
      background: var(--primary-light);
      color: var(--primary-dark);
      font-weight: 700;
    }

    .symptom-check {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      border: 1px solid #d1d5db;
      color: #9ca3af;
      font-size: 0.65rem;
    }

    .symptom-option.selected .symptom-check {
      border-color: var(--primary);
      background: var(--primary);
      color: #ffffff;
    }

    /* SELECTED */

    .selected-card {
      padding: 1.4rem;
    }

    .empty-state {
      min-height: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: var(--text-muted);
      border: 1px dashed var(--border-color);
      border-radius: 10px;
      background: #fafafa;
    }

    .empty-state i {
      font-size: 1.8rem;
      margin-bottom: 0.7rem;
      color: #cbd5e1;
    }

    .empty-state strong {
      color: var(--text-main);
      font-size: 0.82rem;
    }

    .empty-state span {
      margin-top: 0.25rem;
      font-size: 0.72rem;
    }

    .selected-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-height: 240px;
      overflow-y: auto;
    }

    .selected-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.65rem 0.75rem;
      border-radius: 8px;
      background: #f8fafc;
      font-size: 0.78rem;
    }

    .selected-item span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .selected-item span i {
      color: #10b981;
    }

    .selected-item button {
      border: none;
      background: transparent;
      color: #94a3b8;
      cursor: pointer;
    }

    .selected-item button:hover {
      color: #dc2626;
    }

    /* TRIAGE */

    .triage-card {
      padding: 1.4rem;
    }

    .triage-top {
      display: flex;
      gap: 0.85rem;
      margin-bottom: 1.2rem;
    }

    .steps {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.3rem;
    }

    .step {
      display: flex;
      gap: 0.75rem;
      align-items: flex-start;
    }

    .step-number {
      width: 27px;
      height: 27px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--primary-light);
      color: var(--primary);
      font-size: 0.72rem;
      font-weight: 800;
    }

    .step strong {
      display: block;
      font-size: 0.78rem;
    }

    .step span {
      display: block;
      margin-top: 0.15rem;
      color: var(--text-muted);
      font-size: 0.7rem;
      line-height: 1.4;
    }

    .analyze-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      width: 100%;
      padding: 0.85rem 1rem;
      border-radius: 9px;
      background: var(--primary);
      color: #ffffff;
      font-size: 0.8rem;
      font-weight: 700;
      text-decoration: none;
      transition: 0.2s ease;
    }

    .analyze-btn:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .analyze-btn .arrow {
      margin-left: auto;
    }

    .analyze-btn.disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    /* RESPONSIVE */

    @media (max-width: 1100px) {
      .assessment-grid {
        grid-template-columns: 1fr;
      }

      .symptoms-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (max-width: 800px) {
      .page-header {
        flex-direction: column;
      }

      .symptoms-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 500px) {
      .symptoms-grid {
        grid-template-columns: 1fr;
      }
    }

  `]
})
export class SymptomsComponent {

  searchTerm = '';

  selectedSymptoms: string[] = [];

  availableSymptoms: string[] = [
    'itching',
    'skin_rash',
    'continuous_sneezing',
    'shivering',
    'chills',
    'joint_pain',
    'stomach_pain',
    'acidity',
    'vomiting',
    'fatigue',
    'weight_gain',
    'anxiety',
    'weight_loss',
    'restlessness',
    'lethargy',
    'cough',
    'high_fever',
    'breathlessness',
    'sweating',
    'dehydration',
    'indigestion',
    'headache',
    'nausea',
    'loss_of_appetite',
    'back_pain',
    'constipation',
    'abdominal_pain',
    'diarrhoea',
    'mild_fever',
    'swelled_lymph_nodes',
    'malaise',
    'blurred_and_distorted_vision',
    'phlegm',
    'throat_irritation',
    'redness_of_eyes',
    'runny_nose',
    'congestion',
    'chest_pain',
    'weakness_in_limbs',
    'fast_heart_rate',
    'dizziness',
    'cramps',
    'bruising',
    'obesity',
    'swollen_legs',
    'puffy_face_and_eyes',
    'enlarged_thyroid',
    'brittle_nails',
    'excessive_hunger'
  ];

  get filteredSymptoms(): string[] {
    if (!this.searchTerm.trim()) {
      return this.availableSymptoms;
    }

    return this.availableSymptoms.filter(symptom =>
      symptom
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSymptom(symptom: string): void {
    if (this.selectedSymptoms.includes(symptom)) {
      this.selectedSymptoms =
        this.selectedSymptoms.filter(s => s !== symptom);
    } else {
      this.selectedSymptoms.push(symptom);
    }
  }

  clearSymptoms(): void {
    this.selectedSymptoms = [];
  }

  formatSymptomName(name: string): string {
    return name
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  }
}