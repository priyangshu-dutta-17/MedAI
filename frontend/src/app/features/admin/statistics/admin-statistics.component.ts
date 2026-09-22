import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-statistics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="statistics-page">

      <!-- Page Header -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-chart-line"></i>
            MACHINE LEARNING ANALYTICS
          </div>

          <h1>ML Prediction Statistics</h1>

          <p>
            Monitor AI prediction activity, model performance and healthcare
            risk-analysis usage across West Bengal.
          </p>
        </div>

        <div class="status-pill">
          <span class="status-dot"></span>
          All Models Online
        </div>
      </div>

      <!-- Overview Cards -->
      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon purple">
              <i class="fa-solid fa-brain"></i>
            </div>
            <span class="trend positive">
              <i class="fa-solid fa-arrow-trend-up"></i>
              12.4%
            </span>
          </div>

          <span class="stat-label">TOTAL PREDICTIONS</span>
          <strong class="stat-value">3,490</strong>
          <span class="stat-subtitle">Predictions processed</span>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon green">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <span class="accuracy-badge">96.5%</span>
          </div>

          <span class="stat-label">OVERALL ACCURACY</span>
          <strong class="stat-value">96.5%</strong>
          <span class="stat-subtitle">Across active models</span>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon blue">
              <i class="fa-solid fa-chart-simple"></i>
            </div>
            <span class="trend positive">
              <i class="fa-solid fa-arrow-trend-up"></i>
              8.7%
            </span>
          </div>

          <span class="stat-label">PREDICTIONS TODAY</span>
          <strong class="stat-value">186</strong>
          <span class="stat-subtitle">Across all districts</span>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon orange">
              <i class="fa-solid fa-shield-heart"></i>
            </div>
            <span class="live-badge">LIVE</span>
          </div>

          <span class="stat-label">ACTIVE MODELS</span>
          <strong class="stat-value">03</strong>
          <span class="stat-subtitle">Prediction engines online</span>
        </div>

      </div>

      <!-- Main Analytics -->
      <div class="content-grid">

        <!-- Model Performance -->
        <div class="panel">

          <div class="panel-header">
            <div>
              <h2>
                <i class="fa-solid fa-microchip"></i>
                Model Performance
              </h2>
              <p>Current performance of deployed prediction models</p>
            </div>

            <span class="panel-status">
              <span></span>
              LIVE
            </span>
          </div>

          <div class="model-list">

            <!-- Random Forest -->
            <div class="model-row">
              <div class="model-icon purple">
                <i class="fa-solid fa-tree"></i>
              </div>

              <div class="model-info">
                <strong>Random Forest Disease Predictor</strong>
                <span>130+ clinical features</span>

                <div class="progress">
                  <div class="progress-fill" style="width: 96.5%;"></div>
                </div>
              </div>

              <div class="model-score">
                <strong>96.5%</strong>
                <span>Accuracy</span>
              </div>

              <span class="online-badge">Online</span>
            </div>

            <!-- Diabetes -->
            <div class="model-row">
              <div class="model-icon blue">
                <i class="fa-solid fa-droplet"></i>
              </div>

              <div class="model-info">
                <strong>Diabetes Risk Classifier</strong>
                <span>Metabolic risk analysis</span>

                <div class="progress">
                  <div class="progress-fill" style="width: 88.4%;"></div>
                </div>
              </div>

              <div class="model-score">
                <strong>88.4%</strong>
                <span>Accuracy</span>
              </div>

              <span class="online-badge">Online</span>
            </div>

            <!-- Cardiovascular -->
            <div class="model-row">
              <div class="model-icon red">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <div class="model-info">
                <strong>Cardiovascular Risk Engine</strong>
                <span>Cardiac risk prediction</span>

                <div class="progress">
                  <div class="progress-fill" style="width: 89.2%;"></div>
                </div>
              </div>

              <div class="model-score">
                <strong>89.2%</strong>
                <span>Accuracy</span>
              </div>

              <span class="online-badge">Online</span>
            </div>

          </div>
        </div>

        <!-- Prediction Distribution -->
        <div class="panel">

          <div class="panel-header">
            <div>
              <h2>
                <i class="fa-solid fa-chart-pie"></i>
                Prediction Distribution
              </h2>
              <p>AI prediction activity by model</p>
            </div>
          </div>

          <div class="distribution">

            <div class="distribution-item">
              <div class="distribution-label">
                <span class="legend purple"></span>
                <span>General Disease</span>
                <strong>1,840</strong>
              </div>

              <div class="distribution-bar">
                <div style="width: 53%;"></div>
              </div>

              <span class="percentage">53%</span>
            </div>

            <div class="distribution-item">
              <div class="distribution-label">
                <span class="legend blue"></span>
                <span>Diabetes Risk</span>
                <strong>920</strong>
              </div>

              <div class="distribution-bar">
                <div style="width: 26%;"></div>
              </div>

              <span class="percentage">26%</span>
            </div>

            <div class="distribution-item">
              <div class="distribution-label">
                <span class="legend red"></span>
                <span>Cardiovascular</span>
                <strong>730</strong>
              </div>

              <div class="distribution-bar">
                <div style="width: 21%;"></div>
              </div>

              <span class="percentage">21%</span>
            </div>

          </div>

          <div class="total-predictions">
            <span>Total Predictions</span>
            <strong>3,490</strong>
          </div>

        </div>

      </div>

      <!-- System Information -->
      <div class="panel system-panel">

        <div class="panel-header">
          <div>
            <h2>
              <i class="fa-solid fa-server"></i>
              Prediction System Health
            </h2>
            <p>Real-time status of AI/ML services</p>
          </div>

          <span class="healthy-pill">
            <span></span>
            System Healthy
          </span>
        </div>

        <div class="health-grid">

          <div class="health-item">
            <div class="health-icon">
              <i class="fa-solid fa-bolt"></i>
            </div>

            <div>
              <strong>Average Response Time</strong>
              <span>Prediction processing latency</span>
            </div>

            <b>142 ms</b>
          </div>

          <div class="health-item">
            <div class="health-icon">
              <i class="fa-solid fa-database"></i>
            </div>

            <div>
              <strong>Training Dataset</strong>
              <span>Latest model training data</span>
            </div>

            <b>130K+ Records</b>
          </div>

          <div class="health-item">
            <div class="health-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>

            <div>
              <strong>Service Availability</strong>
              <span>AI prediction infrastructure</span>
            </div>

            <b>99.8%</b>
          </div>

        </div>

      </div>

      <!-- Footer Note -->
      <div class="info-note">
        <i class="fa-solid fa-circle-info"></i>
        <div>
          <strong>Administrative Analytics</strong>
          <span>
            Statistics shown here represent system-level AI/ML activity and
            model performance. Prediction results are intended to support
            clinical workflows and should not replace professional medical
            judgement.
          </span>
        </div>
      </div>

    </div>
  `,

  styles: [`
    .statistics-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      color: #082b3a;
    }

    /* HEADER */

    .page-header {
      background: #ffffff;
      border: 1px solid #e2eaee;
      border-radius: 22px;
      padding: 30px 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
      margin-bottom: 22px;
      box-shadow: 0 4px 18px rgba(8, 43, 58, 0.035);
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #7b3ff2;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }

    .page-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
      color: #082b3a;
    }

    .page-header p {
      margin: 7px 0 0;
      color: #78909c;
      font-size: 14px;
    }

    .status-pill {
      display: flex;
      align-items: center;
      gap: 9px;
      padding: 11px 17px;
      border-radius: 30px;
      background: #effcf5;
      border: 1px solid #c8f0da;
      color: #07864d;
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
    }

    .status-dot,
    .healthy-pill span {
      width: 8px;
      height: 8px;
      background: #16a765;
      border-radius: 50%;
      display: inline-block;
    }

    /* STAT CARDS */

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-bottom: 22px;
    }

    .stat-card {
      background: #ffffff;
      border: 1px solid #e2eaee;
      border-radius: 20px;
      padding: 22px;
      min-height: 155px;
      box-shadow: 0 4px 18px rgba(8, 43, 58, 0.035);
    }

    .stat-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
    }

    .stat-icon,
    .model-icon {
      width: 44px;
      height: 44px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .purple {
      background: #f0eaff;
      color: #7b3ff2;
    }

    .green {
      background: #e0faeb;
      color: #099653;
    }

    .blue {
      background: #e5f2ff;
      color: #287fd1;
    }

    .orange {
      background: #fff0d9;
      color: #e88900;
    }

    .red {
      background: #ffe7e7;
      color: #e33b3b;
    }

    .trend {
      font-size: 12px;
      font-weight: 800;
    }

    .trend.positive {
      color: #0b9b59;
    }

    .accuracy-badge,
    .live-badge {
      background: #e8f9f0;
      color: #079052;
      border-radius: 20px;
      padding: 6px 10px;
      font-size: 11px;
      font-weight: 800;
    }

    .stat-label {
      display: block;
      color: #80949e;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.05em;
      margin-bottom: 5px;
    }

    .stat-value {
      display: block;
      font-size: 29px;
      line-height: 1.1;
      color: #082b3a;
    }

    .stat-subtitle {
      display: block;
      margin-top: 7px;
      color: #8ba0aa;
      font-size: 12px;
    }

    /* MAIN GRID */

    .content-grid {
      display: grid;
      grid-template-columns: 1.45fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .panel {
      background: #ffffff;
      border: 1px solid #e2eaee;
      border-radius: 22px;
      box-shadow: 0 4px 18px rgba(8, 43, 58, 0.035);
      overflow: hidden;
    }

    .panel-header {
      padding: 23px 25px;
      border-bottom: 1px solid #edf1f3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
    }

    .panel-header h2 {
      margin: 0;
      font-size: 17px;
      font-weight: 800;
      color: #082b3a;
    }

    .panel-header h2 i {
      color: #0da59c;
      margin-right: 8px;
    }

    .panel-header p {
      margin: 5px 0 0;
      color: #91a3ab;
      font-size: 12px;
    }

    .panel-status {
      font-size: 10px;
      font-weight: 800;
      color: #168d58;
      background: #effaf4;
      border-radius: 20px;
      padding: 7px 11px;
    }

    .panel-status span {
      width: 6px;
      height: 6px;
      display: inline-block;
      border-radius: 50%;
      background: #18a761;
      margin-right: 5px;
    }

    /* MODEL LIST */

    .model-list {
      padding: 8px 24px 18px;
    }

    .model-row {
      display: grid;
      grid-template-columns: 46px minmax(0, 1fr) 75px 65px;
      gap: 15px;
      align-items: center;
      padding: 17px 0;
      border-bottom: 1px solid #edf1f3;
    }

    .model-row:last-child {
      border-bottom: none;
    }

    .model-info strong {
      display: block;
      font-size: 13px;
      color: #173e4d;
    }

    .model-info span {
      display: block;
      font-size: 11px;
      color: #93a5ad;
      margin-top: 3px;
    }

    .progress {
      width: 100%;
      height: 6px;
      background: #edf1f3;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 9px;
    }

    .progress-fill {
      height: 100%;
      border-radius: 10px;
      background: #12a69d;
    }

    .model-score {
      text-align: right;
    }

    .model-score strong {
      display: block;
      font-size: 14px;
      color: #082b3a;
    }

    .model-score span {
      font-size: 9px;
      color: #98a8af;
    }

    .online-badge {
      background: #e8f9f0;
      color: #078d51;
      padding: 6px 8px;
      border-radius: 20px;
      text-align: center;
      font-size: 9px !important;
      font-weight: 800;
    }

    /* DISTRIBUTION */

    .distribution {
      padding: 20px 25px 10px;
    }

    .distribution-item {
      margin-bottom: 22px;
      position: relative;
    }

    .distribution-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: #526e7a;
      margin-bottom: 9px;
    }

    .distribution-label strong {
      margin-left: auto;
      color: #173e4d;
    }

    .legend {
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }

    .distribution-bar {
      height: 9px;
      background: #eef2f4;
      border-radius: 20px;
      overflow: hidden;
    }

    .distribution-bar div {
      height: 100%;
      background: #11a59c;
      border-radius: 20px;
    }

    .percentage {
      display: block;
      text-align: right;
      margin-top: 5px;
      color: #94a4ab;
      font-size: 10px;
      font-weight: 700;
    }

    .total-predictions {
      margin: 5px 25px 23px;
      padding-top: 16px;
      border-top: 1px solid #edf1f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #81959e;
      font-size: 12px;
    }

    .total-predictions strong {
      color: #082b3a;
      font-size: 18px;
    }

    /* SYSTEM HEALTH */

    .system-panel {
      margin-bottom: 20px;
    }

    .healthy-pill {
      display: flex;
      align-items: center;
      gap: 7px;
      background: #effaf4;
      color: #078b4e;
      padding: 8px 13px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 800;
    }

    .health-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 8px 25px 22px;
    }

    .health-item {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 16px 20px 10px 0;
      border-right: 1px solid #edf1f3;
      margin-right: 20px;
    }

    .health-item:last-child {
      border-right: none;
      margin-right: 0;
    }

    .health-icon {
      width: 38px;
      height: 38px;
      border-radius: 11px;
      background: #eaf8f7;
      color: #0b9f96;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .health-item div:nth-child(2) {
      flex: 1;
    }

    .health-item strong {
      display: block;
      font-size: 12px;
      color: #173e4d;
    }

    .health-item span {
      display: block;
      font-size: 10px;
      color: #94a5ad;
      margin-top: 3px;
    }

    .health-item b {
      font-size: 13px;
      color: #082b3a;
      white-space: nowrap;
    }

    /* INFO */

    .info-note {
      display: flex;
      gap: 13px;
      align-items: flex-start;
      background: #f3f8fa;
      border: 1px solid #e0ebef;
      border-radius: 16px;
      padding: 15px 18px;
      margin-bottom: 10px;
    }

    .info-note > i {
      color: #0b9e96;
      margin-top: 2px;
    }

    .info-note strong {
      display: block;
      font-size: 11px;
      color: #274b59;
      margin-bottom: 3px;
    }

    .info-note span {
      display: block;
      color: #8398a1;
      font-size: 10px;
      line-height: 1.5;
    }

    /* RESPONSIVE */

    @media (max-width: 1100px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .content-grid {
        grid-template-columns: 1fr;
      }

      .health-grid {
        grid-template-columns: 1fr;
      }

      .health-item {
        border-right: none;
        border-bottom: 1px solid #edf1f3;
        margin-right: 0;
      }

      .health-item:last-child {
        border-bottom: none;
      }
    }

    @media (max-width: 700px) {
      .page-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .model-row {
        grid-template-columns: 42px 1fr;
      }

      .model-score,
      .online-badge {
        display: none;
      }

      .page-header h1 {
        font-size: 23px;
      }
    }
  `]
})
export class AdminStatisticsComponent {}