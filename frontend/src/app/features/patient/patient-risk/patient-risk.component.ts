import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-risk',
  standalone: true,
  imports: [CommonModule, RouterModule],

  template: `
    <div class="risk-page">

      <!-- =========================
           PAGE HERO
      ========================== -->
      <section class="risk-hero">

        <div class="hero-content">

          <div class="hero-icon">
            <i class="fa-solid fa-chart-line"></i>
          </div>

          <div>
            <span class="hero-label">
              AI HEALTH ANALYTICS
            </span>

            <h1>
              Patient Risk Score
            </h1>

            <p>
              A consolidated overview of your current health indicators
              and potential risk factors.
            </p>
          </div>

        </div>

        <!-- Score -->
        <div class="score-wrapper">

          <div class="score-ring">
            <div class="score-inner">
              <strong>24</strong>
              <span>/ 100</span>
            </div>
          </div>

          <span class="score-label">
            Overall Score
          </span>

        </div>

      </section>


      <!-- =========================
           OVERALL RISK
      ========================== -->
      <section class="overall-card">

        <div class="overall-main">

          <div class="health-icon">
            <i class="fa-solid fa-shield-heart"></i>
          </div>

          <div>
            <span class="small-label">
              CURRENT HEALTH STATUS
            </span>

            <h2>
              Low Risk
            </h2>

            <p>
              Your current health indicators are within a
              relatively low-risk range.
            </p>
          </div>

        </div>


        <div class="overall-progress">

          <div class="progress-heading">
            <div>
              <span>Overall Risk Score</span>
              <strong>24%</strong>
            </div>
          </div>

          <div class="large-progress">
            <div class="large-progress-fill"></div>
          </div>

          <div class="risk-scale">
            <span>
              <i class="fa-solid fa-circle"></i>
              Low
            </span>

            <span>
              Moderate
            </span>

            <span>
              High
            </span>
          </div>

        </div>

      </section>


      <!-- =========================
           RISK INDICATORS
      ========================== -->
      <section class="risk-section">

        <div class="section-heading">

          <div>
            <span class="section-label">
              HEALTH ANALYTICS
            </span>

            <h2>
              Risk Indicators
            </h2>

            <p>
              Individual health factors contributing to your
              overall risk assessment.
            </p>
          </div>

        </div>


        <div class="risk-grid">

          <!-- Diabetes -->
          <article class="risk-card diabetes-card">

            <div class="card-top">

              <div class="indicator-icon">
                <i class="fa-solid fa-droplet"></i>
              </div>

              <span class="status-pill low">
                <i class="fa-solid fa-circle"></i>
                Low
              </span>

            </div>

            <div class="indicator-title">
              <span>METABOLIC HEALTH</span>
              <h3>Diabetes Risk</h3>
            </div>

            <div class="risk-number">
              <strong>18%</strong>
              <span>risk score</span>
            </div>

            <div class="mini-progress">
              <div style="width: 18%"></div>
            </div>

            <p>
              Based on glucose, BMI and other metabolic
              indicators.
            </p>

            <a
              routerLink="/patient/diabetes-risk"
              class="card-action">

              <span>View Assessment</span>

              <i class="fa-solid fa-arrow-right"></i>

            </a>

          </article>


          <!-- Heart -->
          <article class="risk-card heart-card">

            <div class="card-top">

              <div class="indicator-icon">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <span class="status-pill low">
                <i class="fa-solid fa-circle"></i>
                Low
              </span>

            </div>

            <div class="indicator-title">
              <span>CARDIOVASCULAR HEALTH</span>
              <h3>Heart Disease Risk</h3>
            </div>

            <div class="risk-number">
              <strong>22%</strong>
              <span>risk score</span>
            </div>

            <div class="mini-progress">
              <div style="width: 22%"></div>
            </div>

            <p>
              Based on cardiovascular and clinical health
              indicators.
            </p>

            <a
              routerLink="/patient/heart-risk"
              class="card-action">

              <span>View Assessment</span>

              <i class="fa-solid fa-arrow-right"></i>

            </a>

          </article>


          <!-- Symptoms -->
          <article class="risk-card symptom-card">

            <div class="card-top">

              <div class="indicator-icon">
                <i class="fa-solid fa-notes-medical"></i>
              </div>

              <span class="status-pill stable">
                <i class="fa-solid fa-circle"></i>
                Stable
              </span>

            </div>

            <div class="indicator-title">
              <span>SYMPTOM ANALYSIS</span>
              <h3>Symptom Risk</h3>
            </div>

            <div class="risk-number">
              <strong>32%</strong>
              <span>risk score</span>
            </div>

            <div class="mini-progress">
              <div style="width: 32%"></div>
            </div>

            <p>
              Based on recently logged symptoms and
              AI-assisted analysis.
            </p>

            <a
              routerLink="/patient/symptoms"
              class="card-action">

              <span>Review Symptoms</span>

              <i class="fa-solid fa-arrow-right"></i>

            </a>

          </article>

        </div>

      </section>


      <!-- =========================
           RECOMMENDATIONS
      ========================== -->
      <section class="recommendations-card">

        <div class="recommendations-header">

          <div class="recommendation-title-icon">
            <i class="fa-solid fa-lightbulb"></i>
          </div>

          <div>
            <span class="section-label">
              PERSONALIZED GUIDANCE
            </span>

            <h2>
              Health Recommendations
            </h2>

            <p>
              General suggestions based on your current
              health indicators.
            </p>
          </div>

        </div>


        <div class="recommendation-grid">

          <!-- Activity -->
          <div class="recommendation-item">

            <div class="recommendation-icon">
              <i class="fa-solid fa-person-walking"></i>
            </div>

            <div>
              <h3>
                Stay Physically Active
              </h3>

              <p>
                Maintain regular physical activity and avoid
                prolonged periods of inactivity.
              </p>
            </div>

          </div>


          <!-- Diet -->
          <div class="recommendation-item">

            <div class="recommendation-icon">
              <i class="fa-solid fa-apple-whole"></i>
            </div>

            <div>
              <h3>
                Maintain a Balanced Diet
              </h3>

              <p>
                Prefer nutritious meals with appropriate
                portions and a healthy variety of foods.
              </p>
            </div>

          </div>


          <!-- Checkup -->
          <div class="recommendation-item">

            <div class="recommendation-icon">
              <i class="fa-solid fa-calendar-check"></i>
            </div>

            <div>
              <h3>
                Regular Check-ups
              </h3>

              <p>
                Follow recommended health screenings and
                medical consultations.
              </p>
            </div>

          </div>

        </div>

      </section>


      <!-- =========================
           DISCLAIMER
      ========================== -->
      <div class="medical-disclaimer">

        <div class="disclaimer-icon">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>

        <div>
          <strong>
            Medical Information Notice
          </strong>

          <p>
            This risk score is intended for informational purposes only.
            It does not constitute a medical diagnosis and should not
            replace professional medical advice.
          </p>
        </div>

      </div>

    </div>
  `,

  styles: [`

    /* =========================================
       MAIN PAGE
    ========================================= */

    .risk-page {
      width: 100%;
      max-width: 1450px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }


    /* =========================================
       HERO
    ========================================= */

    .risk-hero {
      position: relative;

      display: flex;
      align-items: center;
      justify-content: space-between;

      gap: 2rem;

      padding: 2rem 2.25rem;

      margin-bottom: 1.25rem;

      border-radius: var(--radius-lg);

      border: 1px solid var(--border-color);

      background:
        radial-gradient(
          circle at 85% 20%,
          rgba(37, 99, 235, 0.08),
          transparent 35%
        ),
        linear-gradient(
          135deg,
          #ffffff,
          #f7fbff
        );

      overflow: hidden;
    }


    .risk-hero::after {
      content: '';

      position: absolute;

      width: 240px;
      height: 240px;

      right: -120px;
      bottom: -150px;

      border-radius: 50%;

      background: rgba(37, 99, 235, 0.05);
    }


    .hero-content {
      display: flex;
      align-items: center;

      gap: 1rem;

      position: relative;
      z-index: 2;
    }


    .hero-icon {
      width: 58px;
      height: 58px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 16px;

      background: var(--primary-light);
      color: var(--primary);

      font-size: 1.35rem;
    }


    .hero-label {
      display: block;

      margin-bottom: 0.35rem;

      font-size: 0.68rem;
      font-weight: 800;

      letter-spacing: 0.12em;

      color: var(--primary);
    }


    .risk-hero h1 {
      margin: 0;

      font-size: 1.85rem;
      font-weight: 800;

      letter-spacing: -0.03em;
    }


    .risk-hero p {
      margin: 0.45rem 0 0;

      max-width: 620px;

      color: var(--text-muted);

      font-size: 0.85rem;

      line-height: 1.6;
    }


    /* =========================================
       SCORE
    ========================================= */

    .score-wrapper {
      position: relative;
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 0.35rem;
    }


    .score-ring {
      width: 112px;
      height: 112px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background:
        conic-gradient(
          var(--success) 0deg 86deg,
          #e9eef3 86deg 360deg
        );

      position: relative;
    }


    .score-ring::before {
      content: '';

      position: absolute;

      inset: 8px;

      border-radius: 50%;

      background: white;
    }


    .score-inner {
      position: relative;
      z-index: 2;

      display: flex;
      flex-direction: column;

      align-items: center;
    }


    .score-inner strong {
      font-size: 1.8rem;

      line-height: 1;

      color: var(--success);

      font-weight: 800;
    }


    .score-inner span {
      font-size: 0.68rem;

      color: var(--text-muted);

      margin-top: 0.25rem;
    }


    .score-label {
      font-size: 0.68rem;

      color: var(--text-muted);

      font-weight: 700;
    }


    /* =========================================
       OVERALL RISK
    ========================================= */

    .overall-card {
      display: grid;

      grid-template-columns: 0.9fr 1.1fr;

      align-items: center;

      gap: 3rem;

      padding: 1.5rem 1.75rem;

      margin-bottom: 2rem;

      border-radius: var(--radius-lg);

      border: 1px solid var(--border-color);

      background: white;

      box-shadow: var(--shadow-sm);
    }


    .overall-main {
      display: flex;
      align-items: center;

      gap: 1rem;
    }


    .health-icon {
      width: 56px;
      height: 56px;

      min-width: 56px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 15px;

      background: var(--success-light);

      color: var(--success);

      font-size: 1.3rem;
    }


    .small-label {
      font-size: 0.67rem;

      font-weight: 800;

      color: var(--text-muted);

      letter-spacing: 0.08em;
    }


    .overall-main h2 {
      margin: 0.15rem 0;

      font-size: 1.45rem;

      color: var(--success);

      font-weight: 800;
    }


    .overall-main p {
      margin: 0;

      color: var(--text-muted);

      font-size: 0.78rem;
    }


    /* =========================================
       PROGRESS
    ========================================= */

    .overall-progress {
      width: 100%;
    }


    .progress-heading > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 0.55rem;
    }


    .progress-heading span {
      font-size: 0.78rem;

      color: var(--text-muted);
    }


    .progress-heading strong {
      font-size: 0.9rem;
    }


    .large-progress {
      height: 11px;

      background: #edf1f4;

      border-radius: 999px;

      overflow: hidden;
    }


    .large-progress-fill {
      width: 24%;
      height: 100%;

      border-radius: 999px;

      background: linear-gradient(
        90deg,
        #22c55e,
        #4ade80
      );
    }


    .risk-scale {
      display: flex;
      justify-content: space-between;

      margin-top: 0.5rem;

      font-size: 0.65rem;

      color: var(--text-light);

      font-weight: 600;
    }


    .risk-scale span:first-child {
      color: var(--success);
    }


    .risk-scale i {
      font-size: 0.45rem;
    }


    /* =========================================
       SECTION
    ========================================= */

    .risk-section {
      margin-bottom: 1.5rem;
    }


    .section-heading {
      margin-bottom: 0.9rem;
    }


    .section-label {
      display: block;

      margin-bottom: 0.25rem;

      font-size: 0.65rem;

      font-weight: 800;

      letter-spacing: 0.1em;

      color: var(--primary);
    }


    .section-heading h2 {
      margin: 0;

      font-size: 1.2rem;

      font-weight: 800;
    }


    .section-heading p {
      margin: 0.25rem 0 0;

      font-size: 0.78rem;

      color: var(--text-muted);
    }


    /* =========================================
       RISK CARDS
    ========================================= */

    .risk-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 1rem;
    }


    .risk-card {
      position: relative;

      padding: 1.35rem;

      border: 1px solid var(--border-color);

      border-radius: var(--radius-lg);

      background: white;

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        border-color 0.2s ease;

      overflow: hidden;
    }


    .risk-card:hover {
      transform: translateY(-4px);

      box-shadow:
        0 12px 30px rgba(15, 23, 42, 0.08);

      border-color: rgba(37, 99, 235, 0.2);
    }


    .card-top {
      display: flex;

      justify-content: space-between;

      align-items: center;

      margin-bottom: 1.15rem;
    }


    .indicator-icon {
      width: 44px;
      height: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      font-size: 1.1rem;
    }


    .diabetes-card .indicator-icon {
      background: #eef2ff;
      color: var(--secondary);
    }


    .heart-card .indicator-icon {
      background: #fff1f2;
      color: var(--danger);
    }


    .symptom-card .indicator-icon {
      background: var(--primary-light);
      color: var(--primary);
    }


    .status-pill {
      display: inline-flex;

      align-items: center;

      gap: 0.35rem;

      padding: 0.3rem 0.6rem;

      border-radius: 999px;

      font-size: 0.65rem;

      font-weight: 800;
    }


    .status-pill i {
      font-size: 0.4rem;
    }


    .status-pill.low {
      color: var(--success);

      background: var(--success-light);
    }


    .status-pill.stable {
      color: var(--primary);

      background: var(--primary-light);
    }


    .indicator-title span {
      font-size: 0.6rem;

      font-weight: 800;

      letter-spacing: 0.08em;

      color: var(--text-light);
    }


    .indicator-title h3 {
      margin: 0.25rem 0 0;

      font-size: 0.98rem;

      font-weight: 800;
    }


    .risk-number {
      display: flex;

      align-items: baseline;

      gap: 0.35rem;

      margin: 1rem 0 0.55rem;
    }


    .risk-number strong {
      font-size: 1.65rem;

      font-weight: 800;

      letter-spacing: -0.04em;
    }


    .risk-number span {
      font-size: 0.65rem;

      color: var(--text-muted);
    }


    .mini-progress {
      height: 6px;

      margin-bottom: 0.8rem;

      border-radius: 999px;

      overflow: hidden;

      background: #edf1f4;
    }


    .mini-progress div {
      height: 100%;

      border-radius: 999px;

      background: var(--success);
    }


    .risk-card p {
      min-height: 38px;

      margin: 0;

      font-size: 0.72rem;

      line-height: 1.5;

      color: var(--text-muted);
    }


    .card-action {
      display: flex;

      justify-content: space-between;

      align-items: center;

      margin-top: 1rem;

      padding-top: 0.8rem;

      border-top: 1px solid var(--border-color);

      color: var(--primary);

      font-size: 0.72rem;

      font-weight: 800;
    }


    .card-action i {
      transition: transform 0.2s ease;
    }


    .card-action:hover i {
      transform: translateX(4px);
    }


    /* =========================================
       RECOMMENDATIONS
    ========================================= */

    .recommendations-card {
      padding: 1.5rem;

      margin-bottom: 1rem;

      border: 1px solid var(--border-color);

      border-radius: var(--radius-lg);

      background: white;
    }


    .recommendations-header {
      display: flex;

      align-items: center;

      gap: 0.9rem;

      margin-bottom: 1.2rem;
    }


    .recommendation-title-icon {
      width: 44px;
      height: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 13px;

      background: var(--primary-light);

      color: var(--primary);
    }


    .recommendations-header h2 {
      margin: 0;

      font-size: 1.05rem;

      font-weight: 800;
    }


    .recommendations-header p {
      margin: 0.2rem 0 0;

      font-size: 0.72rem;

      color: var(--text-muted);
    }


    .recommendation-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      gap: 0.8rem;
    }


    .recommendation-item {
      display: flex;

      gap: 0.75rem;

      padding: 1rem;

      border: 1px solid var(--border-color);

      border-radius: var(--radius-md);

      background: #fafbfc;

      transition:
        transform 0.2s ease,
        background 0.2s ease;
    }


    .recommendation-item:hover {
      transform: translateY(-2px);

      background: white;
    }


    .recommendation-icon {
      width: 38px;
      height: 38px;

      min-width: 38px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      background: var(--primary-light);

      color: var(--primary);
    }


    .recommendation-item h3 {
      margin: 0;

      font-size: 0.78rem;

      font-weight: 800;
    }


    .recommendation-item p {
      margin: 0.3rem 0 0;

      font-size: 0.68rem;

      line-height: 1.5;

      color: var(--text-muted);
    }


    /* =========================================
       DISCLAIMER
    ========================================= */

    .medical-disclaimer {
      display: flex;

      align-items: flex-start;

      gap: 0.8rem;

      padding: 1rem 1.15rem;

      border: 1px solid #f1e3b8;

      border-radius: var(--radius-md);

      background: #fffaf0;

      color: #785c12;
    }


    .disclaimer-icon {
      width: 30px;
      height: 30px;

      min-width: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 8px;

      background: #fff0c8;

      color: #b7791f;
    }


    .medical-disclaimer strong {
      display: block;

      font-size: 0.75rem;

      margin-bottom: 0.2rem;
    }


    .medical-disclaimer p {
      margin: 0;

      font-size: 0.68rem;

      line-height: 1.5;
    }


    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 1050px) {

      .overall-card {
        grid-template-columns: 1fr;

        gap: 1.5rem;
      }

      .risk-grid {
        grid-template-columns: 1fr;
      }

      .recommendation-grid {
        grid-template-columns: 1fr;
      }

    }


    @media (max-width: 700px) {

      .risk-hero {
        flex-direction: column;

        align-items: flex-start;

        padding: 1.5rem;
      }

      .score-wrapper {
        align-self: center;
      }

      .overall-card {
        padding: 1.25rem;
      }

      .overall-main {
        align-items: flex-start;
      }

      .recommendations-card {
        padding: 1.2rem;
      }

    }


    @media (max-width: 500px) {

      .hero-content {
        align-items: flex-start;
      }

      .hero-icon {
        width: 48px;
        height: 48px;
      }

      .risk-hero h1 {
        font-size: 1.5rem;
      }

      .medical-disclaimer {
        padding: 0.8rem;
      }

    }

  `]
})
export class PatientRiskComponent {}