import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="users-page">

      <!-- PAGE HEADER -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-users-gear"></i>
            USER MANAGEMENT
          </div>

          <h1>System User Registry</h1>

          <p>
            Manage registered patients, doctors and administrative accounts
            across the West Bengal healthcare network.
          </p>
        </div>

        <button class="add-user-btn">
          <i class="fa-solid fa-user-plus"></i>
          Add User
        </button>
      </div>

      <!-- SUMMARY -->
      <div class="summary-grid">

        <div class="summary-card">
          <div class="summary-icon blue">
            <i class="fa-solid fa-users"></i>
          </div>

          <div>
            <span>Total Users</span>
            <strong>1,248</strong>
            <small>+14% this week</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon green">
            <i class="fa-solid fa-user-injured"></i>
          </div>

          <div>
            <span>Patients</span>
            <strong>1,156</strong>
            <small>92.6% of users</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon purple">
            <i class="fa-solid fa-user-doctor"></i>
          </div>

          <div>
            <span>Doctors</span>
            <strong>84</strong>
            <small>WBMC verified</small>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-icon orange">
            <i class="fa-solid fa-user-shield"></i>
          </div>

          <div>
            <span>Administrators</span>
            <strong>08</strong>
            <small>System accounts</small>
          </div>
        </div>

      </div>

      <!-- USER TABLE -->
      <div class="users-panel">

        <div class="panel-header">

          <div>
            <h2>
              <i class="fa-solid fa-address-book"></i>
              Registered Users
            </h2>

            <p>Search and manage system accounts</p>
          </div>

          <div class="header-actions">

            <div class="search-box">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search users..."
              />
            </div>

            <button class="filter-btn">
              <i class="fa-solid fa-filter"></i>
              Filter
            </button>

          </div>

        </div>

        <div class="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>USER</th>
                <th>ROLE</th>
                <th>CONTACT</th>
                <th>STATUS</th>
                <th>LAST ACTIVE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              <!-- USER 1 -->
              <tr>
                <td>
                  <div class="user-cell">

                    <div class="avatar avatar-blue">
                      SD
                    </div>

                    <div>
                      <strong>Sourav Das</strong>
                      <span>ID: PAT-10248</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="role patient">
                    <i class="fa-solid fa-user"></i>
                    Patient
                  </span>
                </td>

                <td>
                  <strong>sourav.das&#64;email.com</strong>
                  <span class="secondary-text">+91 98765 43210</span>
                </td>

                <td>
                  <span class="status active">
                    <span></span>
                    Active
                  </span>
                </td>

                <td>
                  <span class="date">Today, 5:42 PM</span>
                </td>

                <td>
                  <button class="action-btn">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>
              </tr>

              <!-- USER 2 -->
              <tr>

                <td>
                  <div class="user-cell">

                    <div class="avatar avatar-purple">
                      AS
                    </div>

                    <div>
                      <strong>Ananya Sen</strong>
                      <span>ID: PAT-10249</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="role patient">
                    <i class="fa-solid fa-user"></i>
                    Patient
                  </span>
                </td>

                <td>
                  <strong>ananya.sen&#64;email.com</strong>
                  <span class="secondary-text">+91 98300 11223</span>
                </td>

                <td>
                  <span class="status active">
                    <span></span>
                    Active
                  </span>
                </td>

                <td>
                  <span class="date">Today, 4:18 PM</span>
                </td>

                <td>
                  <button class="action-btn">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>

              </tr>

              <!-- USER 3 -->
              <tr>

                <td>
                  <div class="user-cell">

                    <div class="avatar avatar-green">
                      AM
                    </div>

                    <div>
                      <strong>Dr. Anirban Mukherjee</strong>
                      <span>ID: DOC-00084</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="role doctor">
                    <i class="fa-solid fa-user-doctor"></i>
                    Doctor
                  </span>
                </td>

                <td>
                  <strong>doctor&#64;wbhealth.in</strong>
                  <span class="secondary-text">SSKM Hospital</span>
                </td>

                <td>
                  <span class="status verified">
                    <span></span>
                    Verified
                  </span>
                </td>

                <td>
                  <span class="date">Today, 3:57 PM</span>
                </td>

                <td>
                  <button class="action-btn">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>

              </tr>

              <!-- USER 4 -->
              <tr>

                <td>
                  <div class="user-cell">

                    <div class="avatar avatar-orange">
                      RM
                    </div>

                    <div>
                      <strong>Rahul Mondal</strong>
                      <span>ID: PAT-10250</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="role patient">
                    <i class="fa-solid fa-user"></i>
                    Patient
                  </span>
                </td>

                <td>
                  <strong>rahul.mondal&#64;email.com</strong>
                  <span class="secondary-text">+91 90070 44556</span>
                </td>

                <td>
                  <span class="status active">
                    <span></span>
                    Active
                  </span>
                </td>

                <td>
                  <span class="date">Yesterday, 8:32 PM</span>
                </td>

                <td>
                  <button class="action-btn">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>

              </tr>

              <!-- USER 5 -->
              <tr>

                <td>
                  <div class="user-cell">

                    <div class="avatar avatar-red">
                      PM
                    </div>

                    <div>
                      <strong>Priya Mukherjee</strong>
                      <span>ID: PAT-10251</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="role patient">
                    <i class="fa-solid fa-user"></i>
                    Patient
                  </span>
                </td>

                <td>
                  <strong>priya.m&#64;email.com</strong>
                  <span class="secondary-text">+91 98312 77881</span>
                </td>

                <td>
                  <span class="status inactive">
                    <span></span>
                    Inactive
                  </span>
                </td>

                <td>
                  <span class="date">Aug 28, 2026</span>
                </td>

                <td>
                  <button class="action-btn">
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <!-- PAGINATION -->
        <div class="pagination">

          <span>
            Showing <strong>1–5</strong> of <strong>1,248</strong> users
          </span>

          <div class="page-buttons">
            <button disabled>
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="current">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>250</button>

            <button>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    .users-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      color: #082b3a;
    }

    /* HEADER */

    .page-header {
      background: #fff;
      border: 1px solid #e2eaee;
      border-radius: 22px;
      padding: 28px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 18px rgba(8,43,58,.035);
    }

    .eyebrow {
      color: #0b9f96;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .08em;
      margin-bottom: 7px;
    }

    .eyebrow i {
      margin-right: 7px;
    }

    .page-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
    }

    .page-header p {
      margin: 7px 0 0;
      color: #7d929d;
      font-size: 14px;
    }

    .add-user-btn {
      border: none;
      background: #0da59c;
      color: white;
      padding: 13px 19px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      box-shadow: 0 8px 18px rgba(13,165,156,.18);
    }

    .add-user-btn i {
      margin-right: 7px;
    }

    /* SUMMARY */

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 18px;
      margin-bottom: 20px;
    }

    .summary-card {
      background: #fff;
      border: 1px solid #e2eaee;
      border-radius: 18px;
      padding: 19px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 4px 18px rgba(8,43,58,.035);
    }

    .summary-icon {
      width: 45px;
      height: 45px;
      border-radius: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .summary-icon.blue {
      background:#e7f3ff;
      color:#2784d2;
    }

    .summary-icon.green {
      background:#e1faec;
      color:#079653;
    }

    .summary-icon.purple {
      background:#f0eaff;
      color:#7b3ff2;
    }

    .summary-icon.orange {
      background:#fff0d9;
      color:#e88b00;
    }

    .summary-card span {
      display:block;
      color:#80949e;
      font-size:10px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.04em;
    }

    .summary-card strong {
      display:block;
      font-size:25px;
      margin-top:3px;
    }

    .summary-card small {
      display:block;
      color:#91a3ab;
      font-size:10px;
      margin-top:2px;
    }

    /* PANEL */

    .users-panel {
      background:#fff;
      border:1px solid #e2eaee;
      border-radius:22px;
      overflow:hidden;
      box-shadow:0 4px 18px rgba(8,43,58,.035);
    }

    .panel-header {
      padding:22px 25px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:20px;
      border-bottom:1px solid #edf1f3;
    }

    .panel-header h2 {
      margin:0;
      font-size:17px;
      font-weight:800;
    }

    .panel-header h2 i {
      color:#0da59c;
      margin-right:8px;
    }

    .panel-header p {
      margin:5px 0 0;
      color:#91a3ab;
      font-size:11px;
    }

    .header-actions {
      display:flex;
      gap:9px;
    }

    .search-box {
      height:38px;
      width:230px;
      border:1px solid #dce6ea;
      border-radius:10px;
      display:flex;
      align-items:center;
      gap:8px;
      padding:0 12px;
    }

    .search-box i {
      color:#91a4ac;
      font-size:12px;
    }

    .search-box input {
      border:none;
      outline:none;
      width:100%;
      font-size:12px;
      color:#173e4d;
    }

    .search-box input::placeholder {
      color:#a4b1b7;
    }

    .filter-btn {
      border:1px solid #dce6ea;
      background:white;
      border-radius:10px;
      padding:0 14px;
      font-size:12px;
      font-weight:700;
      color:#526e7a;
      cursor:pointer;
    }

    .filter-btn i {
      margin-right:5px;
    }

    /* TABLE */

    .table-wrapper {
      width:100%;
      overflow-x:auto;
    }

    table {
      width:100%;
      border-collapse:collapse;
      min-width:900px;
    }

    thead {
      background:#f8fafb;
    }

    th {
      text-align:left;
      padding:13px 20px;
      font-size:9px;
      color:#8498a1;
      letter-spacing:.07em;
      font-weight:800;
      border-bottom:1px solid #edf1f3;
    }

    td {
      padding:16px 20px;
      border-bottom:1px solid #edf1f3;
      font-size:12px;
      color:#45606c;
      vertical-align:middle;
    }

    tbody tr:hover {
      background:#fbfdfd;
    }

    .user-cell {
      display:flex;
      align-items:center;
      gap:11px;
    }

    .avatar {
      width:39px;
      height:39px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      font-size:11px;
      flex-shrink:0;
    }

    .avatar-blue {
      background:#dff2ff;
      color:#1682c8;
    }

    .avatar-purple {
      background:#eee5ff;
      color:#7950d8;
    }

    .avatar-green {
      background:#dcf8e9;
      color:#079456;
    }

    .avatar-orange {
      background:#fff0d8;
      color:#d67c00;
    }

    .avatar-red {
      background:#ffe3e3;
      color:#df3b3b;
    }

    .user-cell strong {
      display:block;
      color:#173e4d;
      font-size:12px;
    }

    .user-cell span {
      display:block;
      color:#98a9b0;
      font-size:9px;
      margin-top:3px;
    }

    .role {
      display:inline-flex;
      align-items:center;
      gap:5px;
      padding:6px 9px;
      border-radius:20px;
      font-size:9px;
      font-weight:800;
    }

    .role.patient {
      background:#eef7ff;
      color:#277bb9;
    }

    .role.doctor {
      background:#e9faef;
      color:#078c4d;
    }

    .secondary-text {
      display:block;
      color:#97a8af;
      font-size:9px;
      margin-top:4px;
    }

    .status {
      display:inline-flex;
      align-items:center;
      gap:6px;
      font-size:10px;
      font-weight:700;
    }

    .status span {
      width:7px;
      height:7px;
      border-radius:50%;
    }

    .status.active {
      color:#078c4d;
    }

    .status.active span,
    .status.verified span {
      background:#13a35d;
    }

    .status.verified {
      color:#078c4d;
    }

    .status.inactive {
      color:#9aa7ac;
    }

    .status.inactive span {
      background:#aab4b8;
    }

    .date {
      color:#657f8a;
      font-size:10px;
    }

    .action-btn {
      width:32px;
      height:32px;
      border:1px solid #e0e8eb;
      background:#fff;
      border-radius:9px;
      color:#68818c;
      cursor:pointer;
    }

    .action-btn:hover {
      background:#f2f8f8;
      color:#0b9f96;
    }

    /* PAGINATION */

    .pagination {
      padding:17px 22px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#8b9da5;
      font-size:10px;
    }

    .pagination strong {
      color:#526e7a;
    }

    .page-buttons {
      display:flex;
      align-items:center;
      gap:5px;
    }

    .page-buttons button {
      min-width:29px;
      height:29px;
      border:1px solid #e0e8eb;
      background:#fff;
      border-radius:7px;
      font-size:10px;
      color:#607b86;
      cursor:pointer;
    }

    .page-buttons button.current {
      background:#0da59c;
      border-color:#0da59c;
      color:#fff;
      font-weight:800;
    }

    .page-buttons button:disabled {
      opacity:.45;
      cursor:not-allowed;
    }

    .page-buttons span {
      padding:0 3px;
    }

    /* RESPONSIVE */

    @media (max-width:1100px) {

      .summary-grid {
        grid-template-columns:repeat(2,1fr);
      }

      .panel-header {
        align-items:flex-start;
        flex-direction:column;
      }

      .header-actions {
        width:100%;
      }

      .search-box {
        flex:1;
      }

    }

    @media (max-width:650px) {

      .page-header {
        flex-direction:column;
        align-items:flex-start;
      }

      .summary-grid {
        grid-template-columns:1fr;
      }

      .pagination {
        flex-direction:column;
        gap:12px;
        align-items:flex-start;
      }

    }

  `]
})
export class AdminUsersComponent {}