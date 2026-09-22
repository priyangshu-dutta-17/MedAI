import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MLService } from '../../../core/services/ml.service';
import { DiabetesRiskResult } from '../../../core/models/ml-prediction.model';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-diabetes-risk',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent
  ],
  template: `
    <div class="page-container">

      <!-- HEADER -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-chart-simple"></i>
            AI HEALTH ASSESSMENT
          </div>

          <h1>Diabetes Risk Assessment</h1>

          <p>
            Evaluate your diabetes risk using clinical and metabolic indicators.
          </p>
        </div>

        <div class="model-badge">
          <i class="fa-solid fa-microchip"></i>
          Logistic Regression / SVM
        </div>
      </div>

      <!-- DISCLAIMER -->
      <div class="disclaimer">
        <div class="disclaimer-icon">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>

        <div>
          <strong>Medical Disclaimer</strong>
          <p>
            This AI assessment provides an estimated risk score for
            informational purposes only. It does not replace professional
            medical advice or laboratory tests such as HbA1c.
          </p>
        </div>
      </div>

      <!-- ASSESSMENT CARD -->
      <div class="assessment-card">

        <div class="section-heading">
          <div class="section-icon">
            <i class="fa-solid fa-clipboard-list"></i>
          </div>

          <div>
            <h2>Health Information</h2>
            <p>
              Enter your current clinical and metabolic measurements.
            </p>
          </div>
        </div>

        <form
          (ngSubmit)="calculateRisk()"
          class="assessment-form"
        >

          <!-- GLUCOSE -->
          <div class="field-card">
            <div class="field-icon glucose">
              <i class="fa-solid fa-droplet"></i>
            </div>

            <div class="field-content">
              <label>Fasting Glucose</label>

              <span class="field-description">
                Blood glucose level after fasting
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.glucose"
                  name="glucose"
                  min="50"
                  max="300"
                  required
                  class="form-control"
                />

                <span>mg/dL</span>
              </div>

              <small>
                Normal range: 70 – 99 mg/dL
              </small>
            </div>
          </div>

          <!-- BMI -->
          <div class="field-card">
            <div class="field-icon bmi">
              <i class="fa-solid fa-weight-scale"></i>
            </div>

            <div class="field-content">
              <label>Body Mass Index</label>

              <span class="field-description">
                Weight-to-height ratio
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.bmi"
                  name="bmi"
                  step="0.1"
                  min="15"
                  max="50"
                  required
                  class="form-control"
                />

                <span>BMI</span>
              </div>

              <small>
                Healthy range: 18.5 – 24.9
              </small>
            </div>
          </div>

          <!-- AGE -->
          <div class="field-card">
            <div class="field-icon age">
              <i class="fa-solid fa-user-clock"></i>
            </div>

            <div class="field-content">
              <label>Age</label>

              <span class="field-description">
                Your current age
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.age"
                  name="age"
                  min="18"
                  max="100"
                  required
                  class="form-control"
                />

                <span>years</span>
              </div>
            </div>
          </div>

          <!-- BLOOD PRESSURE -->
          <div class="field-card">
            <div class="field-icon pressure">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div class="field-content">
              <label>Diastolic Blood Pressure</label>

              <span class="field-description">
                Lower blood pressure value
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.bloodPressure"
                  name="bloodPressure"
                  min="40"
                  max="140"
                  required
                  class="form-control"
                />

                <span>mmHg</span>
              </div>
            </div>
          </div>

          <!-- INSULIN -->
          <div class="field-card">
            <div class="field-icon insulin">
              <i class="fa-solid fa-flask"></i>
            </div>

            <div class="field-content">
              <label>Serum Insulin</label>

              <span class="field-description">
                Insulin concentration in blood
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.insulin"
                  name="insulin"
                  min="10"
                  max="400"
                  required
                  class="form-control"
                />

                <span>μU/mL</span>
              </div>
            </div>
          </div>

          <!-- DPF -->
          <div class="field-card">
            <div class="field-icon genetic">
              <i class="fa-solid fa-dna"></i>
            </div>

            <div class="field-content">
              <label>Diabetes Pedigree Function</label>

              <span class="field-description">
                Genetic diabetes history indicator
              </span>

              <div class="input-wrapper">
                <input
                  type="number"
                  [(ngModel)]="form.diabetesPedigreeFunction"
                  name="dpf"
                  step="0.01"
                  min="0.05"
                  max="2.5"
                  required
                  class="form-control"
                />

                <span>Index</span>
              </div>

              <small>
                Expected range: 0.05 – 2.5
              </small>
            </div>
          </div>

          <!-- ACTION -->
          <div class="form-actions">

            <button
              type="submit"
              class="calculate-btn"
              [disabled]="isLoading"
            >
              <span *ngIf="!isLoading">
                <i class="fa-solid fa-calculator"></i>
                Calculate Risk
              </span>

              <span *ngIf="isLoading">
                <i class="fa-solid fa-spinner fa-spin"></i>
                Calculating...
              </span>
            </button>

          </div>

        </form>
      </div>

      <!-- LOADING -->
      <app-loading-spinner
        *ngIf="isLoading"
        text="Computing diabetes risk using the AI prediction pipeline..."
      ></app-loading-spinner>

      <!-- RESULT -->
      <div
        class="result-card"
        *ngIf="result && !isLoading"
      >

        <div class="result-header">

          <div>
            <div class="result-eyebrow">
              <i class="fa-solid fa-circle-check"></i>
              ASSESSMENT COMPLETE
            </div>

            <h2>{{ result.riskLevel }}</h2>
          </div>

          <div
            class="score"
            [ngClass]="{
              'high': result.riskLevel === 'High Risk',
              'moderate': result.riskLevel === 'Moderate Risk',
              'low': result.riskLevel !== 'High Risk' &&
                     result.riskLevel !== 'Moderate Risk'
            }"
          >
            <span>Risk Score</span>
            <strong>
              {{ (result.riskScore * 100).toFixed(0) }}
            </strong>
            <small>/ 100</small>
          </div>

        </div>

        <!-- FACTORS -->
        <div class="result-section">

          <div class="result-section-title">
            <i class="fa-solid fa-chart-line"></i>
            Contributing Risk Factors
          </div>

          <div class="factor-list">

            <div
              class="factor"
              *ngFor="let factor of result.keyContributingFactors"
            >
              <i class="fa-solid fa-circle-check"></i>
              <span>{{ factor }}</span>
            </div>

          </div>

        </div>

        <!-- RECOMMENDATION -->
        <div class="recommendation">

          <div class="recommendation-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>

          <div>
            <strong>Recommended Next Steps</strong>

            <p>
              {{ result.recommendations }}
            </p>
          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.5rem 0 3rem;
    }

    /* HEADER */

    .page-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: var(--secondary);
      margin-bottom: 0.45rem;
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
      font-size: 0.95rem;
    }

    .model-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 0.9rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-full);
      background: var(--bg-card);
      color: var(--text-muted);
      font-size: 0.75rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .model-badge i {
      color: var(--secondary);
    }

    /* DISCLAIMER */

    .disclaimer {
      display: flex;
      align-items: flex-start;
      gap: 0.9rem;
      padding: 1rem 1.1rem;
      margin-bottom: 1.5rem;
      border: 1px solid #fde68a;
      border-radius: var(--radius-md);
      background: #fffbeb;
    }

    .disclaimer-icon {
      width: 34px;
      height: 34px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fef3c7;
      color: #d97706;
    }

    .disclaimer strong {
      font-size: 0.85rem;
      color: #92400e;
    }

    .disclaimer p {
      margin: 0.2rem 0 0;
      color: #92400e;
      font-size: 0.78rem;
      line-height: 1.5;
    }

    /* MAIN CARD */

    .assessment-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1.5rem;
    }

    .section-icon {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      background: var(--secondary-light);
      color: var(--secondary);
      font-size: 1.1rem;
    }

    .section-heading h2 {
      margin: 0;
      font-size: 1.15rem;
      font-weight: 800;
    }

    .section-heading p {
      margin: 0.2rem 0 0;
      color: var(--text-muted);
      font-size: 0.78rem;
    }

    /* FORM */

    .assessment-form {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
    }

    .field-card {
      display: flex;
      gap: 0.8rem;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background: var(--bg-main);
      transition: all 0.2s ease;
    }

    .field-card:hover {
      border-color: var(--secondary);
      box-shadow: var(--shadow-sm);
    }

    .field-icon {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      background: var(--secondary-light);
      color: var(--secondary);
    }

    .field-content {
      flex: 1;
      min-width: 0;
    }

    .field-content label {
      display: block;
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--text-main);
      margin-bottom: 0.15rem;
    }

    .field-description {
      display: block;
      color: var(--text-muted);
      font-size: 0.72rem;
      margin-bottom: 0.65rem;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-wrapper .form-control {
      padding-right: 4rem;
    }

    .input-wrapper > span {
      position: absolute;
      right: 0.75rem;
      color: var(--text-muted);
      font-size: 0.72rem;
      font-weight: 700;
      pointer-events: none;
    }

    .field-content small {
      display: block;
      margin-top: 0.35rem;
      color: var(--text-light);
      font-size: 0.68rem;
    }

    /* ACTION */

    .form-actions {
      grid-column: span 2;
      display: flex;
      justify-content: flex-end;
      padding-top: 0.5rem;
    }

    .calculate-btn {
  min-width: 220px;
  padding: 0.8rem 1.3rem;
  border: none;
  border-radius: var(--radius-md);

  background: #2563eb !important;
  color: #ffffff !important;

  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
}

.calculate-btn:hover:not(:disabled) {
  background: #1d4ed8 !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
}

.calculate-btn:disabled {
  background: #93c5fd !important;
  color: #ffffff !important;
  opacity: 1;
  cursor: not-allowed;
}

    .calculate-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .calculate-btn:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }

    /* RESULT */

    .result-card {
      margin-top: 1.5rem;
      padding: 1.5rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      background: var(--bg-card);
      box-shadow: var(--shadow-sm);
    }

    .result-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 1.25rem;
      border-bottom: 1px solid var(--border-color);
    }

    .result-eyebrow {
      color: var(--success);
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      margin-bottom: 0.35rem;
    }

    .result-header h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 800;
    }

    .score {
      min-width: 110px;
      text-align: center;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
    }

    .score span {
      display: block;
      font-size: 0.65rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }

    .score strong {
      font-size: 1.8rem;
      font-weight: 900;
    }

    .score small {
      font-weight: 700;
    }

    .score.low {
      background: var(--success-light);
      color: var(--success);
    }

    .score.moderate {
      background: #fff7ed;
      color: #ea580c;
    }

    .score.high {
      background: var(--danger-light);
      color: var(--danger);
    }

    .result-section {
      padding: 1.25rem 0;
    }

    .result-section-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 800;
      font-size: 0.85rem;
      margin-bottom: 0.75rem;
    }

    .result-section-title i {
      color: var(--secondary);
    }

    .factor-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.5rem;
    }

    .factor {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 0.75rem;
      border-radius: var(--radius-md);
      background: var(--bg-main);
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .factor i {
      color: var(--secondary);
      font-size: 0.7rem;
    }

    .recommendation {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      padding: 1rem;
      border-radius: var(--radius-md);
      background: var(--primary-light);
      border: 1px solid var(--border-color);
    }

    .recommendation-icon {
      width: 34px;
      height: 34px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: white;
      color: var(--primary);
    }

    .recommendation strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.25rem;
    }

    .recommendation p {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    /* RESPONSIVE */

    @media (max-width: 800px) {

      .page-header {
        flex-direction: column;
      }

      .assessment-form {
        grid-template-columns: 1fr;
      }

      .form-actions {
        grid-column: span 1;
      }

      .factor-list {
        grid-template-columns: 1fr;
      }

    }

    @media (max-width: 500px) {

      .page-container {
        padding: 0 0 2rem;
      }

      .page-header h1 {
        font-size: 1.6rem;
      }

      .assessment-card,
      .result-card {
        padding: 1rem;
      }

      .model-badge {
        width: fit-content;
      }

      .result-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .score {
        width: 100%;
      }

      .calculate-btn {
        width: 100%;
      }

    }

  `]
})
export class DiabetesRiskComponent {

  private mlService = inject(MLService);

  isLoading = false;

  result: DiabetesRiskResult | null = null;

  form = {
    glucose: 120,
    bmi: 26.5,
    age: 38,
    bloodPressure: 80,
    insulin: 85,
    pregnancies: 0,
    skinThickness: 23,
    diabetesPedigreeFunction: 0.47
  };

  calculateRisk(): void {

    this.isLoading = true;
    this.result = null;

    this.mlService.predictDiabetesRisk(this.form).subscribe({

      next: (res) => {

        this.isLoading = false;

        if (res.success && res.data) {
          this.result = res.data;
        }

      },

      error: () => {
        this.isLoading = false;
      }

    });

  }

}