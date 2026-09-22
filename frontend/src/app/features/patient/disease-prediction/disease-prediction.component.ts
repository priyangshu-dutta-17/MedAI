import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MLService } from '../../../core/services/ml.service';
import { DiseasePredictionResult } from '../../../core/models/ml-prediction.model';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-disease-prediction',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  template: `
    <div class="prediction-page">

      <!-- Page Header -->
      <section class="page-hero">
        <div class="hero-icon">
          <i class="fa-solid fa-brain"></i>
        </div>

        <div class="hero-content">
          <div class="eyebrow">
            <span class="status-dot"></span>
            AI HEALTH ANALYSIS
          </div>

          <h1>Disease Predictor</h1>

          <p>
            Analyze your symptoms using our machine learning model
            and explore possible health conditions.
          </p>
        </div>

        <div class="model-badge">
          <i class="fa-solid fa-microchip"></i>
          <span>
            <strong>Random Forest</strong>
            <small>ML Model v1.0</small>
          </span>
        </div>
      </section>

      <!-- Disclaimer -->
      <div class="disclaimer">
        <div class="disclaimer-icon">
          <i class="fa-solid fa-shield-heart"></i>
        </div>

        <div>
          <strong>Medical Disclaimer</strong>
          <p>
            This AI tool provides probabilistic health information for
            educational and informational purposes only. It is not a
            clinical diagnosis. Please consult a qualified healthcare
            professional for medical advice.
          </p>
        </div>
      </div>

      <!-- Main Prediction Card -->
      <section class="prediction-card">

        <!-- Card Header -->
        <div class="section-heading">
          <div>
            <span class="section-label">STEP 01</span>
            <h2>Select Your Symptoms</h2>
            <p>
              Choose the symptoms you are currently experiencing.
              You can select multiple symptoms.
            </p>
          </div>

          <div class="selected-count" [class.has-selection]="selectedSymptoms.length > 0">
            <i class="fa-solid fa-list-check"></i>
            <span>{{ selectedSymptoms.length }}</span>
            <small>Selected</small>
          </div>
        </div>

        <!-- Search -->
        <div class="search-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            [(ngModel)]="searchTerm"
            placeholder="Search symptoms like fever, cough, headache..."
          />

          <button
            *ngIf="searchTerm"
            type="button"
            class="clear-search"
            (click)="searchTerm = ''"
            aria-label="Clear search"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Selected Symptoms -->
        <div
          class="selected-section"
          *ngIf="selectedSymptoms.length > 0"
        >
          <div class="selected-title">
            <span>
              <i class="fa-solid fa-check-circle"></i>
              Selected Symptoms
            </span>

            <button
              type="button"
              class="clear-all"
              (click)="clearSymptoms()"
            >
              Clear all
            </button>
          </div>

          <div class="selected-list">
            <span
              class="selected-chip"
              *ngFor="let symptom of selectedSymptoms"
            >
              {{ formatSymptomName(symptom) }}

              <button
                type="button"
                (click)="toggleSymptom(symptom)"
                aria-label="Remove symptom"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </span>
          </div>
        </div>

        <!-- Available Symptoms -->
        <div class="available-section">

          <div class="available-header">
            <div>
              <span class="section-label">SYMPTOM LIBRARY</span>
              <h3>Available Symptoms</h3>
            </div>

            <span class="result-count">
              {{ filteredSymptoms.length }} symptoms
            </span>
          </div>

          <div
            class="symptoms-grid"
            *ngIf="filteredSymptoms.length > 0"
          >
            <button
              type="button"
              *ngFor="let symptom of filteredSymptoms"
              class="symptom-item"
              [class.active]="selectedSymptoms.includes(symptom)"
              (click)="toggleSymptom(symptom)"
            >
              <span class="symptom-icon">
                <i
                  class="fa-solid"
                  [ngClass]="
                    selectedSymptoms.includes(symptom)
                      ? 'fa-check'
                      : 'fa-plus'
                  "
                ></i>
              </span>

              <span class="symptom-name">
                {{ formatSymptomName(symptom) }}
              </span>
            </button>
          </div>

          <!-- Empty Search -->
          <div
            class="empty-search"
            *ngIf="filteredSymptoms.length === 0"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <strong>No symptoms found</strong>
            <span>Try searching for another symptom.</span>
          </div>

        </div>

        <!-- Action -->
        <div class="prediction-action">

          <div class="action-info">
            <i class="fa-solid fa-circle-info"></i>
            <span>
              Select at least one symptom to start the analysis.
            </span>
          </div>

          <button
            type="button"
            class="analyze-btn"
            (click)="runPrediction()"
            [disabled]="selectedSymptoms.length === 0 || isLoading"
          >
            <span *ngIf="!isLoading">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              Analyze Symptoms
            </span>

            <span *ngIf="isLoading">
              <i class="fa-solid fa-spinner fa-spin"></i>
              Analyzing...
            </span>
          </button>

        </div>

      </section>

      <!-- Loading -->
      <div
        class="loading-container"
        *ngIf="isLoading"
      >
        <app-loading-spinner
          text="Analyzing symptom patterns with the Random Forest model..."
        ></app-loading-spinner>
      </div>

      <!-- Results -->
      <section
        class="results-section"
        *ngIf="result && !isLoading"
      >

        <!-- Result Header -->
        <div class="results-header">
          <div>
            <span class="section-label">STEP 02</span>
            <h2>Predictive Analysis</h2>
            <p>
              Based on the symptoms you selected, the model generated
              the following prediction.
            </p>
          </div>

          <div class="confidence-badge">
            <i class="fa-solid fa-circle-check"></i>
            {{ (result.confidence * 100).toFixed(1) }}% Confidence
          </div>
        </div>

        <!-- Primary Result -->
        <div class="primary-result">

          <div class="result-icon">
            <i class="fa-solid fa-stethoscope"></i>
          </div>

          <div class="result-content">
            <span>Most Probable Condition</span>

            <h3>
              {{ result.prediction }}
            </h3>

            <div class="confidence-wrapper">

              <div class="confidence-label">
                <span>Model Confidence</span>
                <strong>
                  {{ (result.confidence * 100).toFixed(1) }}%
                </strong>
              </div>

              <div class="confidence-track">
                <div
                  class="confidence-progress"
                  [style.width.%]="result.confidence * 100"
                ></div>
              </div>

            </div>
          </div>

        </div>

        <!-- Differential Predictions -->
        <div
          class="differential-card"
          *ngIf="result.topPredictions"
        >

          <div class="differential-header">
            <div>
              <span class="section-label">MODEL OUTPUT</span>
              <h3>Probability Distribution</h3>
            </div>

            <i class="fa-solid fa-chart-simple"></i>
          </div>

          <div class="prediction-list">

            <div
              class="prediction-row"
              *ngFor="let prediction of result.topPredictions; let i = index"
            >

              <div class="prediction-rank">
                {{ i + 1 }}
              </div>

              <div class="prediction-name">
                {{ prediction.disease }}
              </div>

              <div class="prediction-bar">
                <div
                  class="prediction-fill"
                  [style.width.%]="prediction.probability * 100"
                ></div>
              </div>

              <strong class="prediction-percentage">
                {{ (prediction.probability * 100).toFixed(1) }}%
              </strong>

            </div>

          </div>

        </div>

        <!-- Recommendation -->
        <div class="recommendation">

          <div class="recommendation-icon">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div class="recommendation-content">
            <strong>Recommended Next Step</strong>

            <p>
              Consider consulting a General Physician or relevant
              specialist to correlate these symptoms with a proper
              clinical examination and diagnostic tests.
            </p>
          </div>

        </div>

      </section>

      <!-- Bottom Note -->
      <div class="bottom-note">
        <i class="fa-solid fa-lock"></i>
        <span>
          Your symptom selections are used only for this prediction request.
        </span>
      </div>

    </div>
  `,

  styles: [`

    /* =========================================================
       PAGE
    ========================================================= */

    .prediction-page {
      max-width: 1180px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }

    /* =========================================================
       HERO
    ========================================================= */

    .page-hero {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.75rem 1.9rem;
      margin-bottom: 1.25rem;
      background:
        linear-gradient(
          135deg,
          #ffffff 0%,
          #f4f9ff 55%,
          #eef7ff 100%
        );
      border: 1px solid #e3edf7;
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(15, 45, 75, 0.05);
    }

    .hero-icon {
      width: 62px;
      height: 62px;
      min-width: 62px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #e9f3ff, #d9ebff);
      color: var(--primary);
      font-size: 1.55rem;
    }

    .hero-content {
      flex: 1;
      min-width: 0;
    }

    .eyebrow,
    .section-label {
      display: block;
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      color: var(--primary);
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-bottom: 0.25rem;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 0 4px #dcfce7;
    }

    .hero-content h1 {
      margin: 0;
      font-size: 1.85rem;
      font-weight: 800;
      color: #172b42;
    }

    .hero-content p {
      margin: 0.35rem 0 0;
      color: #718096;
      font-size: 0.9rem;
    }

    .model-badge {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.7rem 0.85rem;
      background: #ffffff;
      border: 1px solid #e3edf7;
      border-radius: 12px;
      color: var(--primary);
    }

    .model-badge > i {
      font-size: 1.1rem;
    }

    .model-badge span {
      display: flex;
      flex-direction: column;
    }

    .model-badge strong {
      font-size: 0.78rem;
      color: #26384d;
    }

    .model-badge small {
      color: #8a98a9;
      font-size: 0.65rem;
      margin-top: 2px;
    }

    /* =========================================================
       DISCLAIMER
    ========================================================= */

    .disclaimer {
      display: flex;
      align-items: flex-start;
      gap: 0.9rem;
      padding: 1rem 1.15rem;
      margin-bottom: 1.25rem;
      background: #fffaf0;
      border: 1px solid #f5dfad;
      border-radius: 14px;
      color: #795b1d;
    }

    .disclaimer-icon {
      width: 35px;
      height: 35px;
      min-width: 35px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff1c7;
      color: #b7791f;
    }

    .disclaimer strong {
      font-size: 0.8rem;
    }

    .disclaimer p {
      margin: 0.2rem 0 0;
      font-size: 0.76rem;
      line-height: 1.5;
    }

    /* =========================================================
       MAIN CARD
    ========================================================= */

    .prediction-card {
      background: #ffffff;
      border: 1px solid #e5edf5;
      border-radius: 20px;
      padding: 1.6rem;
      box-shadow: 0 8px 30px rgba(15, 45, 75, 0.05);
    }

    .section-heading,
    .available-header,
    .results-header,
    .differential-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .section-heading {
      margin-bottom: 1.25rem;
    }

    .section-heading h2,
    .results-header h2 {
      margin: 0.2rem 0 0;
      font-size: 1.3rem;
      font-weight: 800;
      color: #172b42;
    }

    .section-heading p,
    .results-header p {
      margin: 0.3rem 0 0;
      color: #7b8999;
      font-size: 0.8rem;
    }

    .selected-count {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.65rem 0.85rem;
      border-radius: 12px;
      background: #f4f7fa;
      color: #8a98a9;
      white-space: nowrap;
    }

    .selected-count.has-selection {
      background: #edf7ff;
      color: var(--primary);
    }

    .selected-count i {
      font-size: 0.85rem;
    }

    .selected-count span {
      font-size: 1rem;
      font-weight: 800;
    }

    .selected-count small {
      font-size: 0.68rem;
      font-weight: 700;
    }

    /* =========================================================
       SEARCH
    ========================================================= */

    .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 1.2rem;
    }

    .search-wrapper > i {
      position: absolute;
      left: 1rem;
      color: #98a7b6;
      font-size: 0.85rem;
      pointer-events: none;
    }

    .search-wrapper input {
      width: 100%;
      height: 46px;
      padding: 0 3rem;
      border: 1px solid #dce6ef;
      border-radius: 12px;
      background: #f9fbfd;
      color: #26384d;
      font-size: 0.85rem;
      outline: none;
      transition: all 0.2s ease;
    }

    .search-wrapper input:focus {
      background: #ffffff;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
    }

    .clear-search {
      position: absolute;
      right: 0.7rem;
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 8px;
      background: #edf2f7;
      color: #718096;
      cursor: pointer;
    }

    /* =========================================================
       SELECTED
    ========================================================= */

    .selected-section {
      padding: 1rem;
      margin-bottom: 1.2rem;
      background: #f7fbff;
      border: 1px solid #dcecff;
      border-radius: 14px;
    }

    .selected-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.7rem;
    }

    .selected-title > span {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: #40546a;
      font-size: 0.75rem;
      font-weight: 800;
    }

    .selected-title i {
      color: #22a06b;
    }

    .clear-all {
      border: none;
      background: none;
      color: #e05b5b;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
    }

    .selected-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .selected-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.45rem 0.65rem 0.45rem 0.75rem;
      border-radius: 999px;
      background: #e7f2ff;
      color: #1d5fa7;
      font-size: 0.72rem;
      font-weight: 700;
    }

    .selected-chip button {
      width: 19px;
      height: 19px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: #cfe4fb;
      color: #24639d;
      cursor: pointer;
      font-size: 0.6rem;
    }

    /* =========================================================
       SYMPTOM LIBRARY
    ========================================================= */

    .available-section {
      margin-top: 0.5rem;
    }

    .available-header {
      margin-bottom: 0.75rem;
    }

    .available-header h3 {
      margin: 0.2rem 0 0;
      font-size: 0.95rem;
      color: #26384d;
    }

    .result-count {
      font-size: 0.7rem;
      color: #8997a6;
      font-weight: 700;
    }

    .symptoms-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.5rem;
      max-height: 300px;
      overflow-y: auto;
      padding: 0.2rem;
    }

    .symptom-item {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      min-height: 43px;
      padding: 0.5rem 0.65rem;
      background: #ffffff;
      border: 1px solid #e2e9f0;
      border-radius: 10px;
      color: #536477;
      text-align: left;
      cursor: pointer;
      transition: all 0.18s ease;
    }

    .symptom-item:hover {
      border-color: #a9cff2;
      background: #f6fbff;
      transform: translateY(-1px);
    }

    .symptom-item.active {
      border-color: var(--primary);
      background: #edf6ff;
      color: #145da0;
    }

    .symptom-icon {
      width: 25px;
      height: 25px;
      min-width: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      background: #f0f4f8;
      color: #8998a8;
      font-size: 0.62rem;
    }

    .symptom-item.active .symptom-icon {
      background: var(--primary);
      color: #ffffff;
    }

    .symptom-name {
      font-size: 0.72rem;
      font-weight: 600;
      line-height: 1.25;
    }

    .empty-search {
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.35rem;
      border: 1px dashed #d9e3ec;
      border-radius: 12px;
      color: #8997a6;
    }

    .empty-search i {
      font-size: 1.4rem;
      margin-bottom: 0.2rem;
    }

    .empty-search strong {
      color: #526477;
      font-size: 0.8rem;
    }

    .empty-search span {
      font-size: 0.7rem;
    }

    /* =========================================================
       ACTION
    ========================================================= */

    .prediction-action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1.35rem;
      padding-top: 1.15rem;
      border-top: 1px solid #edf1f5;
    }

    .action-info {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      color: #8997a6;
      font-size: 0.7rem;
    }

    .action-info i {
      color: #7ba7ce;
    }

    .analyze-btn {
      min-width: 190px;
      height: 45px;
      padding: 0 1.15rem;
      border: none;
      border-radius: 11px;
      background: linear-gradient(135deg, #1769aa, #2488d5);
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 6px 16px rgba(37, 99, 235, 0.18);
      transition: all 0.2s ease;
    }

    .analyze-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
    }

    .analyze-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: none;
    }

    /* =========================================================
       LOADING
    ========================================================= */

    .loading-container {
      margin-top: 1.25rem;
      padding: 1.5rem;
      background: #ffffff;
      border: 1px solid #e5edf5;
      border-radius: 18px;
    }

    /* =========================================================
       RESULTS
    ========================================================= */

    .results-section {
      margin-top: 1.25rem;
      padding: 1.6rem;
      background: #ffffff;
      border: 1px solid #e5edf5;
      border-radius: 20px;
      box-shadow: 0 8px 30px rgba(15, 45, 75, 0.05);
    }

    .results-header {
      margin-bottom: 1.2rem;
    }

    .confidence-badge {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 0.75rem;
      border-radius: 10px;
      background: #eafaf2;
      color: #198754;
      font-size: 0.72rem;
      font-weight: 800;
      white-space: nowrap;
    }

    /* =========================================================
       PRIMARY RESULT
    ========================================================= */

    .primary-result {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.2rem;
      background: linear-gradient(135deg, #f1fbf7, #f8fcfa);
      border: 1px solid #d8f0e3;
      border-radius: 15px;
      margin-bottom: 1.15rem;
    }

    .result-icon {
      width: 55px;
      height: 55px;
      min-width: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      background: #dff6e9;
      color: #15945c;
      font-size: 1.3rem;
    }

    .result-content {
      flex: 1;
    }

    .result-content > span {
      font-size: 0.7rem;
      color: #759081;
      font-weight: 700;
    }

    .result-content h3 {
      margin: 0.15rem 0 0.7rem;
      font-size: 1.45rem;
      font-weight: 800;
      color: #173d2c;
    }

    .confidence-wrapper {
      max-width: 550px;
    }

    .confidence-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.35rem;
      font-size: 0.67rem;
      color: #7c9185;
    }

    .confidence-label strong {
      color: #198754;
    }

    .confidence-track {
      height: 8px;
      overflow: hidden;
      background: #dfeee5;
      border-radius: 999px;
    }

    .confidence-progress {
      height: 100%;
      background: linear-gradient(90deg, #45b97c, #15945c);
      border-radius: inherit;
      transition: width 0.7s ease;
    }

    /* =========================================================
       DIFFERENTIAL
    ========================================================= */

    .differential-card {
      padding: 1.15rem;
      border: 1px solid #e5edf5;
      border-radius: 15px;
    }

    .differential-header {
      margin-bottom: 1rem;
    }

    .differential-header h3 {
      margin: 0.2rem 0 0;
      font-size: 0.95rem;
      color: #26384d;
    }

    .differential-header > i {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #eef5ff;
      color: var(--primary);
    }

    .prediction-list {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }

    .prediction-row {
      display: grid;
      grid-template-columns: 28px minmax(130px, 180px) 1fr 55px;
      align-items: center;
      gap: 0.7rem;
    }

    .prediction-rank {
      width: 26px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background: #f2f5f8;
      color: #788898;
      font-size: 0.68rem;
      font-weight: 800;
    }

    .prediction-name {
      color: #4e6073;
      font-size: 0.75rem;
      font-weight: 650;
    }

    .prediction-bar {
      height: 7px;
      overflow: hidden;
      background: #edf1f5;
      border-radius: 999px;
    }

    .prediction-fill {
      height: 100%;
      background: linear-gradient(90deg, #80b9e7, #2783c5);
      border-radius: inherit;
    }

    .prediction-percentage {
      text-align: right;
      color: #334b62;
      font-size: 0.72rem;
    }

    /* =========================================================
       RECOMMENDATION
    ========================================================= */

    .recommendation {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      margin-top: 1.15rem;
      padding: 1rem;
      border-radius: 13px;
      background: #f1f7ff;
      border: 1px solid #dbeaf8;
    }

    .recommendation-icon {
      width: 38px;
      height: 38px;
      min-width: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #dcecff;
      color: #2474b8;
    }

    .recommendation-content strong {
      display: block;
      margin-bottom: 0.2rem;
      color: #294761;
      font-size: 0.76rem;
    }

    .recommendation-content p {
      margin: 0;
      color: #6f8294;
      font-size: 0.72rem;
      line-height: 1.5;
    }

    /* =========================================================
       FOOT NOTE
    ========================================================= */

    .bottom-note {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      margin-top: 1rem;
      color: #9aa7b4;
      font-size: 0.67rem;
    }

    /* =========================================================
       RESPONSIVE
    ========================================================= */

    @media (max-width: 1000px) {

      .symptoms-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

    }

    @media (max-width: 750px) {

      .page-hero {
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 1.3rem;
      }

      .hero-content {
        min-width: calc(100% - 80px);
      }

      .model-badge {
        width: 100%;
      }

      .prediction-card,
      .results-section {
        padding: 1.2rem;
      }

      .symptoms-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .prediction-action {
        flex-direction: column;
        align-items: stretch;
      }

      .action-info {
        justify-content: center;
      }

      .analyze-btn {
        width: 100%;
      }

      .prediction-row {
        grid-template-columns: 28px 1fr 55px;
      }

      .prediction-bar {
        grid-column: 2 / 4;
        grid-row: 2;
      }

    }

    @media (max-width: 500px) {

      .hero-content h1 {
        font-size: 1.5rem;
      }

      .hero-content p {
        font-size: 0.78rem;
      }

      .hero-icon {
        width: 50px;
        height: 50px;
        min-width: 50px;
        font-size: 1.2rem;
      }

      .section-heading,
      .results-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .selected-count {
        align-self: flex-start;
      }

      .symptoms-grid {
        grid-template-columns: 1fr;
      }

      .primary-result {
        align-items: flex-start;
        flex-direction: column;
      }

      .result-content h3 {
        font-size: 1.2rem;
      }

    }

  `]
})
export class DiseasePredictionComponent {

  private mlService = inject(MLService);

  searchTerm = '';
  isLoading = false;
  result: DiseasePredictionResult | null = null;

  availableSymptoms: string[] = [
    'itching',
    'skin_rash',
    'nodal_skin_eruptions',
    'continuous_sneezing',
    'shivering',
    'chills',
    'joint_pain',
    'stomach_pain',
    'acidity',
    'ulcers_on_tongue',
    'muscle_wasting',
    'vomiting',
    'burning_micturition',
    'fatigue',
    'weight_gain',
    'anxiety',
    'cold_hands_and_feets',
    'mood_swings',
    'weight_loss',
    'restlessness',
    'lethargy',
    'patches_in_throat',
    'irregular_sugar_level',
    'cough',
    'high_fever',
    'sunken_eyes',
    'breathlessness',
    'sweating',
    'dehydration',
    'indigestion',
    'headache',
    'yellowish_skin',
    'dark_urine',
    'nausea',
    'loss_of_appetite',
    'pain_behind_the_eyes',
    'back_pain',
    'constipation',
    'abdominal_pain',
    'diarrhoea',
    'mild_fever',
    'yellow_urine',
    'yellowing_of_eyes',
    'swelled_lymph_nodes',
    'malaise',
    'blurred_and_distorted_vision',
    'phlegm',
    'throat_irritation',
    'redness_of_eyes',
    'sinus_pressure',
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
    'swollen_blood_vessels',
    'puffy_face_and_eyes',
    'enlarged_thyroid',
    'brittle_nails',
    'excessive_hunger'
  ];

  selectedSymptoms: string[] = [
    'fatigue',
    'high_fever',
    'cough'
  ];

  get filteredSymptoms(): string[] {
    if (!this.searchTerm.trim()) {
      return this.availableSymptoms;
    }

    return this.availableSymptoms.filter(
      symptom =>
        symptom
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSymptom(symptom: string): void {
    if (this.selectedSymptoms.includes(symptom)) {
      this.selectedSymptoms =
        this.selectedSymptoms.filter(
          s => s !== symptom
        );
    } else {
      this.selectedSymptoms.push(symptom);
    }
  }

  clearSymptoms(): void {
    this.selectedSymptoms = [];
    this.result = null;
  }

  formatSymptomName(name: string): string {
    return name
      .replace(/_/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  }

  runPrediction(): void {

    if (this.selectedSymptoms.length === 0) {
      return;
    }

    this.isLoading = true;
    this.result = null;

    this.mlService
      .predictDisease({
        symptoms: this.selectedSymptoms
      })
      .subscribe({

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