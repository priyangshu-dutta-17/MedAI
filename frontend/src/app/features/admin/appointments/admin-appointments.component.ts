import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-appointments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="appointments-page">

      <!-- ================= PAGE HEADER ================= -->
      <div class="page-header">

        <div>
          <div class="title-row">
            <div class="title-icon">
              <i class="fa-solid fa-calendar-check"></i>
            </div>

            <div>
              <h1>Appointment Monitoring</h1>
              <p>
                Monitor consultations, appointment status and healthcare activity
                across West Bengal.
              </p>
            </div>
          </div>
        </div>

        <div class="live-status">
          <span class="live-dot"></span>
          Live Monitoring
        </div>

      </div>


      <!-- ================= STATISTICS ================= -->
      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon blue">
              <i class="fa-solid fa-calendar-days"></i>
            </div>

            <span class="stat-label">TODAY</span>
          </div>

          <h2>186</h2>
          <p>Total Appointments</p>

          <span class="stat-change positive">
            <i class="fa-solid fa-arrow-up"></i>
            12% from yesterday
          </span>
        </div>


        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon green">
              <i class="fa-solid fa-circle-check"></i>
            </div>

            <span class="stat-label">CONFIRMED</span>
          </div>

          <h2>142</h2>
          <p>Confirmed Appointments</p>

          <span class="stat-change positive">
            <i class="fa-solid fa-check"></i>
            76.3% confirmation rate
          </span>
        </div>


        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon orange">
              <i class="fa-solid fa-clock"></i>
            </div>

            <span class="stat-label">PENDING</span>
          </div>

          <h2>28</h2>
          <p>Awaiting Confirmation</p>

          <span class="stat-change warning">
            <i class="fa-solid fa-triangle-exclamation"></i>
            Requires attention
          </span>
        </div>


        <div class="stat-card">
          <div class="stat-top">
            <div class="stat-icon red">
              <i class="fa-solid fa-ban"></i>
            </div>

            <span class="stat-label">CANCELLED</span>
          </div>

          <h2>16</h2>
          <p>Cancelled Appointments</p>

          <span class="stat-change negative">
            <i class="fa-solid fa-arrow-down"></i>
            8.6% cancellation rate
          </span>
        </div>

      </div>


      <!-- ================= MAIN GRID ================= -->
      <div class="content-grid">

        <!-- APPOINTMENT TABLE -->
        <div class="appointments-card">

          <div class="card-header">

            <div>
              <h2>
                <i class="fa-solid fa-list-check"></i>
                Appointment Activity
              </h2>

              <p>
                Recent consultations across registered facilities
              </p>
            </div>

            <button class="filter-button">
              <i class="fa-solid fa-filter"></i>
              Filter
            </button>

          </div>


          <div class="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PATIENT</th>
                  <th>DOCTOR</th>
                  <th>FACILITY</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <strong>17:30</strong>
                    <small>Today</small>
                  </td>

                  <td>
                    <div class="patient">
                      <div class="avatar teal">SD</div>

                      <div>
                        <strong>Sourav Das</strong>
                        <small>Male · 31 years</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>Dr. Anirban Mukherjee</strong>
                    <small>Cardiologist</small>
                  </td>

                  <td>
                    <span class="facility">
                      <i class="fa-solid fa-hospital"></i>
                      SSKM Hospital
                    </span>
                  </td>

                  <td>
                    <span class="status confirmed">
                      <span></span>
                      Confirmed
                    </span>
                  </td>

                  <td>
                    <button class="view-button">
                      View
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>


                <tr class="high-risk-row">

                  <td>
                    <strong>18:00</strong>
                    <small>Today</small>
                  </td>

                  <td>
                    <div class="patient">
                      <div class="avatar red">AS</div>

                      <div>
                        <strong>Ananya Sen</strong>
                        <small>Female · 54 years</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>Dr. Anirban Mukherjee</strong>
                    <small>Cardiologist</small>
                  </td>

                  <td>
                    <span class="facility">
                      <i class="fa-solid fa-hospital"></i>
                      SSKM Hospital
                    </span>
                  </td>

                  <td>
                    <span class="status confirmed">
                      <span></span>
                      Confirmed
                    </span>
                  </td>

                  <td>
                    <button class="view-button">
                      View
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>18:30</strong>
                    <small>Today</small>
                  </td>

                  <td>
                    <div class="patient">
                      <div class="avatar blue">RM</div>

                      <div>
                        <strong>Rahul Mondal</strong>
                        <small>Male · 46 years</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>Dr. Arindam Ghosh</strong>
                    <small>General Medicine</small>
                  </td>

                  <td>
                    <span class="facility">
                      <i class="fa-solid fa-hospital"></i>
                      NRS Medical College
                    </span>
                  </td>

                  <td>
                    <span class="status pending">
                      <span></span>
                      Pending
                    </span>
                  </td>

                  <td>
                    <button class="view-button">
                      View
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>19:00</strong>
                    <small>Today</small>
                  </td>

                  <td>
                    <div class="patient">
                      <div class="avatar purple">PM</div>

                      <div>
                        <strong>Priya Mukherjee</strong>
                        <small>Female · 39 years</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>Dr. S. Chatterjee</strong>
                    <small>Cardiology</small>
                  </td>

                  <td>
                    <span class="facility">
                      <i class="fa-solid fa-hospital"></i>
                      AMRI Hospital
                    </span>
                  </td>

                  <td>
                    <span class="status confirmed">
                      <span></span>
                      Confirmed
                    </span>
                  </td>

                  <td>
                    <button class="view-button">
                      View
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>

                </tr>


                <tr>

                  <td>
                    <strong>19:30</strong>
                    <small>Today</small>
                  </td>

                  <td>
                    <div class="patient">
                      <div class="avatar orange">RK</div>

                      <div>
                        <strong>Rakesh Kumar</strong>
                        <small>Male · 42 years</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>Dr. P. Roy</strong>
                    <small>Internal Medicine</small>
                  </td>

                  <td>
                    <span class="facility">
                      <i class="fa-solid fa-hospital"></i>
                      Fortis Anandapur
                    </span>
                  </td>

                  <td>
                    <span class="status cancelled">
                      <span></span>
                      Cancelled
                    </span>
                  </td>

                  <td>
                    <button class="view-button">
                      View
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>


        <!-- RIGHT PANEL -->
        <div class="side-panel">

          <!-- STATUS -->
          <div class="monitor-card">

            <div class="monitor-header">
              <div>
                <h3>
                  <i class="fa-solid fa-chart-line"></i>
                  Appointment Status
                </h3>

                <p>Today's distribution</p>
              </div>
            </div>

            <div class="status-chart">

              <div class="chart-circle">
                <strong>186</strong>
                <span>Total</span>
              </div>

              <div class="chart-legend">

                <div>
                  <span class="legend-dot green"></span>
                  <strong>142</strong>
                  <small>Confirmed</small>
                </div>

                <div>
                  <span class="legend-dot orange"></span>
                  <strong>28</strong>
                  <small>Pending</small>
                </div>

                <div>
                  <span class="legend-dot red"></span>
                  <strong>16</strong>
                  <small>Cancelled</small>
                </div>

              </div>

            </div>

          </div>


          <!-- DISTRICTS -->
          <div class="monitor-card">

            <div class="monitor-header">

              <div>
                <h3>
                  <i class="fa-solid fa-location-dot"></i>
                  District Activity
                </h3>

                <p>Appointments by region</p>
              </div>

              <span class="mini-badge">LIVE</span>

            </div>


            <div class="district-list">

              <div class="district">
                <div>
                  <strong>Kolkata</strong>
                  <small>Presidency Division</small>
                </div>

                <strong>68</strong>
              </div>

              <div class="progress">
                <span style="width: 78%;"></span>
              </div>


              <div class="district">
                <div>
                  <strong>Howrah</strong>
                  <small>Presidency Division</small>
                </div>

                <strong>42</strong>
              </div>

              <div class="progress">
                <span style="width: 52%;"></span>
              </div>


              <div class="district">
                <div>
                  <strong>North 24 Parganas</strong>
                  <small>Presidency Division</small>
                </div>

                <strong>31</strong>
              </div>

              <div class="progress">
                <span style="width: 40%;"></span>
              </div>


              <div class="district">
                <div>
                  <strong>Darjeeling</strong>
                  <small>Jalpaiguri Division</small>
                </div>

                <strong>19</strong>
              </div>

              <div class="progress">
                <span style="width: 28%;"></span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    :host {
      display: block;
      width: 100%;
    }

    * {
      box-sizing: border-box;
    }

    .appointments-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
    }


    /* ================= HEADER ================= */

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 26px 30px;

      background: #ffffff;
      border: 1px solid #e2eaed;
      border-radius: 18px;

      margin-bottom: 22px;
    }

    .title-row {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .title-icon {
      width: 52px;
      height: 52px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 14px;

      background: #e4f8f6;
      color: #0d9e98;

      font-size: 22px;
    }

    .page-header h1 {
      margin: 0 0 5px;

      color: #082d40;

      font-size: 26px;
      font-weight: 800;
    }

    .page-header p {
      margin: 0;

      color: #8197a5;

      font-size: 14px;
    }

    .live-status {
      display: flex;
      align-items: center;
      gap: 8px;

      padding: 10px 15px;

      border-radius: 999px;

      background: #ecfdf5;
      color: #07874c;

      font-size: 13px;
      font-weight: 700;
    }

    .live-dot {
      width: 9px;
      height: 9px;

      border-radius: 50%;

      background: #16b364;
    }


    /* ================= STATS ================= */

    .stats-grid {
      display: grid;

      grid-template-columns:
        repeat(4, minmax(0, 1fr));

      gap: 18px;

      margin-bottom: 22px;
    }

    .stat-card {
      padding: 22px;

      background: #ffffff;

      border: 1px solid #e2eaed;
      border-radius: 17px;

      box-shadow: 0 5px 20px rgba(12, 45, 64, 0.04);
    }

    .stat-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .stat-icon {
      width: 44px;
      height: 44px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 12px;

      font-size: 18px;
    }

    .stat-icon.blue {
      background: #e9f4ff;
      color: #3182ce;
    }

    .stat-icon.green {
      background: #e4faef;
      color: #159957;
    }

    .stat-icon.orange {
      background: #fff3dc;
      color: #d98200;
    }

    .stat-icon.red {
      background: #ffe9e9;
      color: #e33434;
    }

    .stat-label {
      color: #9aaeb9;

      font-size: 10px;
      font-weight: 800;

      letter-spacing: .06em;
    }

    .stat-card h2 {
      margin: 17px 0 4px;

      color: #082d40;

      font-size: 30px;
      font-weight: 800;
    }

    .stat-card p {
      margin: 0 0 12px;

      color: #718895;

      font-size: 13px;
    }

    .stat-change {
      font-size: 11px;
      font-weight: 700;
    }

    .positive {
      color: #159957;
    }

    .warning {
      color: #d98200;
    }

    .negative {
      color: #e33434;
    }


    /* ================= CONTENT ================= */

    .content-grid {
      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        340px;

      gap: 22px;

      align-items: start;
    }

    .appointments-card,
    .monitor-card {
      background: #ffffff;

      border: 1px solid #e2eaed;
      border-radius: 18px;

      overflow: hidden;

      box-shadow: 0 5px 20px rgba(12, 45, 64, 0.035);
    }


    /* ================= TABLE HEADER ================= */

    .card-header {
      padding: 23px 25px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: 1px solid #edf2f4;
    }

    .card-header h2 {
      margin: 0 0 5px;

      color: #092f43;

      font-size: 18px;
      font-weight: 750;
    }

    .card-header h2 i {
      margin-right: 8px;
      color: #0da39b;
    }

    .card-header p {
      margin: 0;

      color: #8ba0ad;

      font-size: 12px;
    }

    .filter-button {
      display: flex;
      align-items: center;
      gap: 7px;

      padding: 9px 14px;

      border: 1px solid #dce7eb;
      border-radius: 9px;

      background: #ffffff;

      color: #55717f;

      font-weight: 700;

      cursor: pointer;
    }

    .filter-button:hover {
      background: #f2faf9;
      color: #078f89;
    }


    /* ================= TABLE ================= */

    .table-wrapper {
      width: 100%;

      overflow-x: auto;
    }

    table {
      width: 100%;

      border-collapse: collapse;

      min-width: 850px;
    }

    thead {
      background: #f8fbfc;
    }

    th {
      padding: 13px 17px;

      text-align: left;

      color: #91a5b0;

      font-size: 10px;
      font-weight: 800;

      letter-spacing: .05em;

      white-space: nowrap;
    }

    td {
      padding: 18px 17px;

      border-top: 1px solid #edf2f4;

      color: #294d5f;

      font-size: 13px;

      vertical-align: middle;
    }

    td strong {
      display: block;

      color: #163b4e;

      font-size: 13px;
    }

    td small {
      display: block;

      margin-top: 4px;

      color: #8aa0ac;

      font-size: 11px;
    }

    .high-risk-row {
      background: #fffafa;
    }


    /* ================= PATIENT ================= */

    .patient {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .avatar {
      width: 38px;
      height: 38px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 50%;

      font-size: 11px;
      font-weight: 800;
    }

    .avatar.teal {
      background: #d8f5f2;
      color: #0b958e;
    }

    .avatar.red {
      background: #ffe0e0;
      color: #df3030;
    }

    .avatar.blue {
      background: #e0edff;
      color: #3974c6;
    }

    .avatar.purple {
      background: #ece4ff;
      color: #7750cf;
    }

    .avatar.orange {
      background: #fff0d7;
      color: #d47b00;
    }

    .facility {
      display: flex;
      align-items: center;
      gap: 7px;

      color: #567482;

      white-space: nowrap;
    }

    .facility i {
      color: #0d9f98;
    }


    /* ================= STATUS ================= */

    .status {
      display: inline-flex;
      align-items: center;
      gap: 6px;

      font-size: 11px;
      font-weight: 750;

      white-space: nowrap;
    }

    .status span {
      width: 7px;
      height: 7px;

      border-radius: 50%;
    }

    .status.confirmed {
      color: #13884e;
    }

    .status.confirmed span {
      background: #16b364;
    }

    .status.pending {
      color: #bd7200;
    }

    .status.pending span {
      background: #f59e0b;
    }

    .status.cancelled {
      color: #d82f2f;
    }

    .status.cancelled span {
      background: #ef4444;
    }


    /* ================= VIEW BUTTON ================= */

    .view-button {
      border: none;

      background: transparent;

      color: #078f89;

      font-size: 12px;
      font-weight: 750;

      cursor: pointer;
    }

    .view-button i {
      margin-left: 5px;
    }

    .view-button:hover {
      color: #056b67;
    }


    /* ================= RIGHT PANEL ================= */

    .side-panel {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .monitor-card {
      padding: 22px;
    }

    .monitor-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      padding-bottom: 18px;

      border-bottom: 1px solid #edf2f4;
    }

    .monitor-header h3 {
      margin: 0 0 5px;

      color: #11394c;

      font-size: 16px;
      font-weight: 750;
    }

    .monitor-header h3 i {
      color: #0ca099;
      margin-right: 7px;
    }

    .monitor-header p {
      margin: 0;

      color: #91a5b0;

      font-size: 11px;
    }

    .mini-badge {
      padding: 5px 8px;

      border-radius: 999px;

      background: #e8f9f1;
      color: #168a54;

      font-size: 9px;
      font-weight: 800;
    }


    /* ================= STATUS CHART ================= */

    .status-chart {
      display: flex;
      align-items: center;
      gap: 25px;

      padding-top: 24px;
    }

    .chart-circle {
      width: 125px;
      height: 125px;

      flex-shrink: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      border: 13px solid #d9f5ec;

      box-shadow:
        inset 0 0 0 8px #fff,
        0 0 0 1px #e3ecef;
    }

    .chart-circle strong {
      color: #10384a;

      font-size: 27px;
      font-weight: 800;
    }

    .chart-circle span {
      color: #91a5b0;

      font-size: 10px;
    }

    .chart-legend {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .chart-legend div {
      display: grid;

      grid-template-columns: 9px 35px auto;

      align-items: center;

      gap: 6px;
    }

    .legend-dot {
      width: 8px;
      height: 8px;

      border-radius: 50%;
    }

    .legend-dot.green {
      background: #16b364;
    }

    .legend-dot.orange {
      background: #f59e0b;
    }

    .legend-dot.red {
      background: #ef4444;
    }

    .chart-legend strong {
      color: #163b4e;
      font-size: 12px;
    }

    .chart-legend small {
      color: #91a5b0;
      font-size: 10px;
    }


    /* ================= DISTRICTS ================= */

    .district-list {
      padding-top: 20px;
    }

    .district {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 7px;
    }

    .district strong {
      color: #214558;
      font-size: 12px;
    }

    .district small {
      display: block;

      margin-top: 3px;

      color: #9aadb7;

      font-size: 9px;
    }

    .district > strong {
      font-size: 13px;
    }

    .progress {
      height: 6px;

      margin-bottom: 16px;

      overflow: hidden;

      border-radius: 999px;

      background: #edf2f4;
    }

    .progress span {
      display: block;

      height: 100%;

      border-radius: inherit;

      background: #11a39b;
    }


    /* ================= RESPONSIVE ================= */

    @media (max-width: 1250px) {

      .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .content-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .side-panel {
        display: grid;

        grid-template-columns:
          repeat(2, minmax(0, 1fr));
      }

    }


    @media (max-width: 750px) {

      .page-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .side-panel {
        grid-template-columns: 1fr;
      }

      .admin-content {
        padding: 18px;
      }

    }

  `]
})
export class AdminAppointmentsComponent {}