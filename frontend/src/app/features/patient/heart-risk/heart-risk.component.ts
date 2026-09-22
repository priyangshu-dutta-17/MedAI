import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MLService } from '../../../core/services/ml.service';
import { HeartRiskResult } from '../../../core/models/ml-prediction.model';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-heart-risk',
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
            <i class="fa-solid fa-heart-pulse"></i>
            AI CARDIOVASCULAR ASSESSMENT
          </div>

          <h1>Heart Disease Risk</h1>

          <p>
            Evaluate cardiovascular risk using key clinical and cardiac
            indicators.
          </p>
        </div>

        <div class="model-badge">
          <i class="fa-solid fa-microchip"></i>
          Random Forest / Gradient Boost
        </div>
      </div>

      <!-- EMERGENCY NOTICE -->
      <div class="emergency-notice">
        <div class="emergency-icon">
          <i class="fa-solid fa-truck-medical"></i>
        </div>

        <div>
          <strong>Cardiology Emergency Notice</strong>

          <p>
            If you are experiencing severe chest pain, pain spreading to the
            arm or jaw, or severe difficulty breathing, seek emergency
            medical attention immediately.
          </p>

          <span class="emergency-number">
            <i class="fa-solid fa-phone"></i>
            Emergency: 108 / 112
          </span>
        </div>
      </div>

      <!-- ASSESSMENT CARD -->
      <div class="assessment-card">

        <div class="section-heading">
          <div class="section-icon">
            <i class="fa-solid fa-heart-circle-check"></i>
          </div>

          <div>
            <h2>Cardiovascular Information</h2>
            <p>
              Enter the available clinical measurements for risk evaluation.
            </p>
          </div>
        </div>

        <form
          (ngSubmit)="calculateRisk()"
          class="assessment-form"
        >

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
                  class="form-control"
                  [(ngModel)]="form.age"
                  name="age"
                  min="20"
                  max="95"
                  required
                />

                <span>years</span>

              </div>

            </div>

          </div>

          <!-- SEX -->
          <div class="field-card">

            <div class="field-icon user">
              <i class="fa-solid fa-venus-mars"></i>
            </div>

            <div class="field-content">

              <label>Biological Sex</label>

              <span class="field-description">
                Select the biological sex used by the prediction model
              </span>

              <select
                class="form-control"
                [(ngModel)]="form.sex"
                name="sex"
              >
                <option [ngValue]="1">Male</option>
                <option [ngValue]="0">Female</option>
              </select>

            </div>

          </div>

          <!-- CHEST PAIN -->
          <div class="field-card">

            <div class="field-icon pain">
              <i class="fa-solid fa-heart-crack"></i>
            </div>

            <div class="field-content">

              <label>Chest Pain Type</label>

              <span class="field-description">
                Select the type of chest discomfort
              </span>

              <select
                class="form-control"
                [(ngModel)]="form.chestPainType"
                name="cp"
              >
                <option [ngValue]="0">
                  Typical Angina
                </option>

                <option [ngValue]="1">
                  Atypical Angina
                </option>

                <option [ngValue]="2">
                  Non-Anginal Pain
                </option>

                <option [ngValue]="3">
                  Asymptomatic / No Chest Pain
                </option>
              </select>

            </div>

          </div>

          <!-- BLOOD PRESSURE -->
          <div class="field-card">

            <div class="field-icon pressure">
              <i class="fa-solid fa-gauge-high"></i>
            </div>

            <div class="field-content">

              <label>Resting Blood Pressure</label>

              <span class="field-description">
                Resting systolic blood pressure
              </span>

              <div class="input-wrapper">

                <input
                  type="number"
                  class="form-control"
                  [(ngModel)]="form.restingBP"
                  name="bp"
                  min="80"
                  max="220"
                  required
                />

                <span>mmHg</span>

              </div>

            </div>

          </div>

          <!-- CHOLESTEROL -->
          <div class="field-card">

            <div class="field-icon cholesterol">
              <i class="fa-solid fa-flask"></i>
            </div>

            <div class="field-content">

              <label>Serum Cholesterol</label>

              <span class="field-description">
                Total cholesterol level
              </span>

              <div class="input-wrapper">

                <input
                  type="number"
                  class="form-control"
                  [(ngModel)]="form.cholesterol"
                  name="chol"
                  min="100"
                  max="450"
                  required
                />

                <span>mg/dL</span>

              </div>

              <small>
                Desirable: below 200 mg/dL
              </small>

            </div>

          </div>

          <!-- MAX HEART RATE -->
          <div class="field-card">

            <div class="field-icon heart">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div class="field-content">

              <label>Maximum Heart Rate</label>

              <span class="field-description">
                Maximum heart rate achieved during activity
              </span>

              <div class="input-wrapper">

                <input
                  type="number"
                  class="form-control"
                  [(ngModel)]="form.maxHR"
                  name="maxhr"
                  min="60"
                  max="220"
                  required
                />

                <span>bpm</span>

              </div>

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
                <i class="fa-solid fa-heart-circle-check"></i>
                Evaluate Heart Risk
              </span>

              <span *ngIf="isLoading">
                <i class="fa-solid fa-spinner fa-spin"></i>
                Evaluating...
              </span>

            </button>

          </div>

        </form>

      </div>

      <!-- LOADING -->
      <app-loading-spinner
        *ngIf="isLoading"
        text="Running cardiovascular risk evaluation..."
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

            <h2>
              {{ result.riskLevel }}
            </h2>

          </div>

          <div
            class="score"
            [ngClass]="{
              'high': result.riskScore >= 0.5,
              'low': result.riskScore < 0.5
            }"
          >

            <span>Risk Probability</span>

            <strong>
              {{ (result.riskScore * 100).toFixed(0) }}%
            </strong>

          </div>

        </div>

        <!-- RISK VISUAL -->
        <div class="risk-meter">

          <div class="meter-label">

            <span>
              Cardiovascular Risk
            </span>

            <strong>
              {{ (result.riskScore * 100).toFixed(0) }}%
            </strong>

          </div>

          <div class="meter">

            <div
              class="meter-fill"
              [class.high]="result.riskScore >= 0.5"
              [class.low]="result.riskScore < 0.5"
              [style.width.%]="result.riskScore * 100"
            ></div>

          </div>

        </div>

        <!-- RECOMMENDATIONS -->
        <div class="recommendation">

          <div class="recommendation-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>

          <div>

            <strong>
              Recommended Next Steps
            </strong>

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
      color: var(--danger);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
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
      color: var(--danger);
    }

    /* EMERGENCY */

    .emergency-notice {
      display: flex;
      align-items: flex-start;
      gap: 0.9rem;
      padding: 1rem 1.1rem;
      margin-bottom: 1.5rem;
      border: 1px solid #fecaca;
      border-radius: var(--radius-md);
      background: #fef2f2;
    }

    .emergency-icon {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fee2e2;
      color: var(--danger);
    }

    .emergency-notice strong {
      display: block;
      color: #991b1b;
      font-size: 0.85rem;
    }

    .emergency-notice p {
      margin: 0.25rem 0 0.5rem;
      color: #991b1b;
      font-size: 0.78rem;
      line-height: 1.5;
    }

    .emergency-number {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: var(--danger);
      font-size: 0.78rem;
      font-weight: 800;
    }

    /* ASSESSMENT */

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
      background: var(--danger-light);
      color: var(--danger);
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
      border-color: var(--danger);
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
      background: var(--danger-light);
      color: var(--danger);
    }

    .field-content {
      flex: 1;
      min-width: 0;
    }

    .field-content label {
      display: block;
      margin-bottom: 0.15rem;
      color: var(--text-main);
      font-size: 0.85rem;
      font-weight: 800;
    }

    .field-description {
      display: block;
      margin-bottom: 0.65rem;
      color: var(--text-muted);
      font-size: 0.72rem;
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
      background: var(--danger);
      color: white;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.2s ease;
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
      min-width: 125px;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      text-align: center;
    }

    .score span {
      display: block;
      margin-bottom: 0.2rem;
      font-size: 0.65rem;
      font-weight: 700;
    }

    .score strong {
      font-size: 1.8rem;
      font-weight: 900;
    }

    .score.low {
      background: var(--success-light);
      color: var(--success);
    }

    .score.high {
      background: var(--danger-light);
      color: var(--danger);
    }

    /* METER */

    .risk-meter {
      padding: 1.25rem 0;
    }

    .meter-label {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .meter {
      height: 10px;
      overflow: hidden;
      border-radius: 10px;
      background: #e5e7eb;
    }

    .meter-fill {
      height: 100%;
      border-radius: inherit;
      transition: width 0.6s ease;
      background: var(--success);
    }

    .meter-fill.high {
      background: var(--danger);
    }

    .meter-fill.low {
      background: var(--success);
    }

    /* RECOMMENDATION */

    .recommendation {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background: var(--primary-light);
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
      margin-bottom: 0.25rem;
      font-size: 0.85rem;
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

    }

    @media (max-width: 500px) {

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
        flex-direction: column;
        align-items: flex-start;
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
export class HeartRiskComponent {

  private mlService = inject(MLService);

  isLoading = false;

  result: HeartRiskResult | null = null;

  form = {
    age: 52,
    sex: 1,
    chestPainType: 1,
    restingBP: 135,
    cholesterol: 230,
    fastingBS: 0,
    restingECG: 0,
    maxHR: 145,
    exerciseAngina: 0,
    oldpeak: 1.0,
    stSlope: 1
  };

  calculateRisk(): void {

    this.isLoading = true;
    this.result = null;

    this.mlService.predictHeartRisk(this.form).subscribe({

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