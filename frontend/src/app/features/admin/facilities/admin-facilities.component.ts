import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Facility {
  name: string;
  type: string;
  district: string;
  tier: string;
  beds: number;
  status: 'Operational' | 'Under Maintenance';
  emergency: boolean;
}

@Component({
  selector: 'app-admin-facilities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="facilities-page">

      <!-- Header -->
      <div class="page-header">
        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-hospital"></i>
            HEALTHCARE NETWORK
          </div>

          <h1>Healthcare Facilities</h1>

          <p>
            Manage and monitor registered hospitals, clinics and healthcare
            facilities across West Bengal.
          </p>
        </div>

        <button class="add-btn">
          <i class="fa-solid fa-plus"></i>
          Add Facility
        </button>
      </div>

      <!-- Statistics -->
      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon teal">
            <i class="fa-solid fa-hospital"></i>
          </div>

          <div>
            <span>Total Facilities</span>
            <strong>26</strong>
            <small>Across 23 districts</small>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon green">
            <i class="fa-solid fa-circle-check"></i>
          </div>

          <div>
            <span>Operational</span>
            <strong>24</strong>
            <small>92.3% availability</small>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon orange">
            <i class="fa-solid fa-bed"></i>
          </div>

          <div>
            <span>Total Beds</span>
            <strong>8,420</strong>
            <small>Registered capacity</small>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon purple">
            <i class="fa-solid fa-truck-medical"></i>
          </div>

          <div>
            <span>Emergency Services</span>
            <strong>21</strong>
            <small>24/7 facilities</small>
          </div>
        </div>

      </div>

      <!-- Filters -->
      <div class="filter-card">

        <div class="search-box">
          <i class="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            placeholder="Search hospital, clinic or district..."
          />
        </div>

        <select>
          <option>All Facility Types</option>
          <option>Government Hospital</option>
          <option>Private Hospital</option>
          <option>Clinic</option>
          <option>Diagnostic Centre</option>
        </select>

        <select>
          <option>All Districts</option>
          <option>Kolkata</option>
          <option>Howrah</option>
          <option>Nadia</option>
          <option>North 24 Parganas</option>
          <option>Hooghly</option>
        </select>

        <select>
          <option>All Status</option>
          <option>Operational</option>
          <option>Under Maintenance</option>
        </select>

      </div>

      <!-- Registry -->
      <div class="registry-card">

        <div class="registry-header">

          <div>
            <h2>
              <i class="fa-solid fa-building-columns"></i>
              Registered Facilities
            </h2>

            <p>
              Verified healthcare facilities currently listed in the system.
            </p>
          </div>

          <span class="count-badge">
            26 Facilities
          </span>

        </div>

        <!-- Table -->
        <div class="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>FACILITY</th>
                <th>TYPE</th>
                <th>DISTRICT</th>
                <th>TIER</th>
                <th>BEDS</th>
                <th>EMERGENCY</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              <tr *ngFor="let facility of facilities">

                <td>
                  <div class="facility-info">

                    <div class="facility-icon">
                      <i class="fa-solid fa-hospital"></i>
                    </div>

                    <div>
                      <strong>{{ facility.name }}</strong>
                      <span>WB Healthcare Registry</span>
                    </div>

                  </div>
                </td>

                <td>
                  <span class="type-text">
                    {{ facility.type }}
                  </span>
                </td>

                <td>
                  {{ facility.district }}
                </td>

                <td>
                  <span class="tier-badge">
                    {{ facility.tier }}
                  </span>
                </td>

                <td>
                  <strong>{{ facility.beds | number }}</strong>
                </td>

                <td>

                  <span
                    class="emergency"
                    [class.available]="facility.emergency"
                  >

                    <i
                      class="fa-solid"
                      [ngClass]="facility.emergency
                        ? 'fa-circle-check'
                        : 'fa-circle-xmark'"
                    ></i>

                    {{ facility.emergency ? '24/7' : 'No' }}

                  </span>

                </td>

                <td>

                  <span
                    class="status-badge"
                    [class.maintenance]="facility.status !== 'Operational'"
                  >

                    <span class="status-dot"></span>

                    {{ facility.status }}

                  </span>

                </td>

                <td>

                  <button class="view-btn">
                    View
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        <!-- Footer -->
        <div class="registry-footer">

          <span>
            Showing <strong>1–6</strong> of <strong>26</strong> facilities
          </span>

          <div class="pagination">

            <button disabled>
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>

            <button>
              <i class="fa-solid fa-chevron-right"></i>
            </button>

          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* ================================
       PAGE
    ================================= */

    .facilities-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    /* ================================
       HEADER
    ================================= */

    .page-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;

      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: .45rem;

      color: var(--accent, #0f9f95);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: .08em;

      margin-bottom: .45rem;
    }

    .page-header h1 {
      margin: 0;
      color: #082b3a;

      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -.03em;
    }

    .page-header p {
      margin: .45rem 0 0;

      color: #7890a0;
      font-size: .92rem;
    }

    .add-btn {
      border: none;
      border-radius: 12px;

      padding: .85rem 1.25rem;

      background: #0f9f95;
      color: white;

      font-size: .88rem;
      font-weight: 700;

      cursor: pointer;

      display: flex;
      align-items: center;
      gap: .55rem;

      box-shadow: 0 8px 20px rgba(15,159,149,.18);

      transition: .2s ease;
    }

    .add-btn:hover {
      transform: translateY(-1px);
      background: #078c83;
    }

    /* ================================
       STATISTICS
    ================================= */

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));

      gap: 1rem;

      margin-bottom: 1.25rem;
    }

    .stat-card {
      min-width: 0;

      background: #fff;

      border: 1px solid #e3ecef;
      border-radius: 16px;

      padding: 1.15rem;

      display: flex;
      align-items: center;
      gap: 1rem;

      box-shadow: 0 5px 18px rgba(20,50,60,.035);
    }

    .stat-icon {
      width: 46px;
      height: 46px;

      flex-shrink: 0;

      border-radius: 13px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.1rem;
    }

    .stat-icon.teal {
      background: #dff7f4;
      color: #0b9d92;
    }

    .stat-icon.green {
      background: #dcf8e8;
      color: #159447;
    }

    .stat-icon.orange {
      background: #fff0d4;
      color: #ed8b00;
    }

    .stat-icon.purple {
      background: #eee7ff;
      color: #7540d8;
    }

    .stat-card span {
      display: block;

      color: #78909e;

      font-size: .72rem;
      font-weight: 700;

      margin-bottom: .25rem;
    }

    .stat-card strong {
      display: block;

      color: #082b3a;

      font-size: 1.5rem;
      line-height: 1.1;
    }

    .stat-card small {
      display: block;

      color: #9aaeb9;

      font-size: .7rem;

      margin-top: .25rem;
    }

    /* ================================
       FILTERS
    ================================= */

    .filter-card {
      background: #fff;

      border: 1px solid #e3ecef;
      border-radius: 16px;

      padding: 1rem;

      display: grid;
      grid-template-columns: minmax(250px, 1fr) 200px 200px 180px;

      gap: .75rem;

      margin-bottom: 1.25rem;
    }

    .search-box {
      position: relative;
    }

    .search-box i {
      position: absolute;

      left: .9rem;
      top: 50%;

      transform: translateY(-50%);

      color: #91a5b0;
      font-size: .85rem;
    }

    .search-box input,
    .filter-card select {
      width: 100%;
      height: 42px;

      box-sizing: border-box;

      border: 1px solid #dce7ea;
      border-radius: 9px;

      background: #fbfdfd;

      color: #294b5b;

      font-size: .82rem;

      outline: none;
    }

    .search-box input {
      padding: 0 1rem 0 2.35rem;
    }

    .filter-card select {
      padding: 0 .75rem;
    }

    .search-box input:focus,
    .filter-card select:focus {
      border-color: #20aaa1;
      box-shadow: 0 0 0 3px rgba(32,170,161,.08);
    }

    /* ================================
       REGISTRY
    ================================= */

    .registry-card {
      background: #fff;

      border: 1px solid #e1eaed;
      border-radius: 18px;

      overflow: hidden;

      box-shadow: 0 6px 22px rgba(20,50,60,.035);
    }

    .registry-header {
      padding: 1.3rem 1.4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid #edf2f3;
    }

    .registry-header h2 {
      margin: 0;

      color: #082b3a;

      font-size: 1.05rem;
      font-weight: 800;

      display: flex;
      align-items: center;
      gap: .55rem;
    }

    .registry-header h2 i {
      color: #0fa197;
    }

    .registry-header p {
      margin: .3rem 0 0;

      color: #8ba0ab;

      font-size: .78rem;
    }

    .count-badge {
      background: #e8f8f6;
      color: #078d84;

      padding: .45rem .75rem;

      border-radius: 20px;

      font-size: .72rem;
      font-weight: 800;
    }

    /* ================================
       TABLE
    ================================= */

    .table-wrapper {
      width: 100%;
      overflow-x: auto;
    }

    table {
      width: 100%;
      min-width: 1050px;

      border-collapse: collapse;
    }

    thead {
      background: #f8fbfb;
    }

    th {
      padding: .85rem 1rem;

      text-align: left;

      color: #8298a4;

      font-size: .68rem;
      font-weight: 800;

      letter-spacing: .045em;

      white-space: nowrap;
    }

    td {
      padding: 1rem;

      color: #365767;

      font-size: .8rem;

      border-top: 1px solid #edf2f3;

      vertical-align: middle;
    }

    tbody tr {
      transition: background .15s ease;
    }

    tbody tr:hover {
      background: #fbfdfd;
    }

    /* Facility */

    .facility-info {
      display: flex;
      align-items: center;
      gap: .75rem;

      min-width: 240px;
    }

    .facility-icon {
      width: 38px;
      height: 38px;

      flex-shrink: 0;

      border-radius: 10px;

      background: #e6f7f5;
      color: #0c9c92;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .facility-info strong {
      display: block;

      color: #163b4c;

      font-size: .82rem;
    }

    .facility-info span {
      display: block;

      color: #9aacb5;

      font-size: .68rem;

      margin-top: .18rem;
    }

    .type-text {
      color: #527080;
      font-weight: 600;
    }

    .tier-badge {
      padding: .3rem .55rem;

      background: #f0f4f6;
      color: #607987;

      border-radius: 6px;

      font-size: .68rem;
      font-weight: 800;
    }

    /* Emergency */

    .emergency {
      color: #8b9da5;

      font-weight: 700;

      display: inline-flex;
      align-items: center;
      gap: .3rem;
    }

    .emergency.available {
      color: #119651;
    }

    /* Status */

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: .4rem;

      padding: .35rem .6rem;

      border-radius: 20px;

      background: #e5f9ed;
      color: #138e4b;

      font-size: .68rem;
      font-weight: 800;

      white-space: nowrap;
    }

    .status-dot {
      width: 6px;
      height: 6px;

      border-radius: 50%;

      background: currentColor;
    }

    .status-badge.maintenance {
      background: #fff1dc;
      color: #d77a00;
    }

    /* Action */

    .view-btn {
      border: 1px solid #dce8ea;

      background: white;

      color: #087f78;

      border-radius: 8px;

      padding: .48rem .7rem;

      font-size: .72rem;
      font-weight: 700;

      cursor: pointer;

      display: inline-flex;
      align-items: center;
      gap: .4rem;

      white-space: nowrap;

      transition: .2s ease;
    }

    .view-btn:hover {
      background: #eaf8f6;
      border-color: #bce4e0;
    }

    /* ================================
       FOOTER
    ================================= */

    .registry-footer {
      padding: .9rem 1.2rem;

      border-top: 1px solid #edf2f3;

      display: flex;
      align-items: center;
      justify-content: space-between;

      color: #8ba0aa;

      font-size: .72rem;
    }

    .registry-footer strong {
      color: #486675;
    }

    .pagination {
      display: flex;
      align-items: center;
      gap: .3rem;
    }

    .pagination button {
      width: 30px;
      height: 30px;

      border: 1px solid #dfe9eb;
      border-radius: 7px;

      background: white;
      color: #66808c;

      font-size: .72rem;
      font-weight: 700;

      cursor: pointer;
    }

    .pagination button:hover:not(:disabled) {
      background: #edf9f7;
      color: #078d84;
    }

    .pagination button.active {
      background: #0f9f95;
      border-color: #0f9f95;
      color: white;
    }

    .pagination button:disabled {
      opacity: .4;
      cursor: not-allowed;
    }

    /* ================================
       RESPONSIVE
    ================================= */

    @media (max-width: 1100px) {

      .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .filter-card {
        grid-template-columns: 1fr 1fr;
      }

    }

    @media (max-width: 700px) {

      .page-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .filter-card {
        grid-template-columns: 1fr;
      }

      .registry-footer {
        align-items: flex-start;
        flex-direction: column;
        gap: .75rem;
      }

    }

  `]
})
export class AdminFacilitiesComponent {

  facilities: Facility[] = [

    {
      name: 'SSKM Hospital',
      type: 'Government Hospital',
      district: 'Kolkata',
      tier: 'Tertiary',
      beds: 1950,
      emergency: true,
      status: 'Operational'
    },

    {
      name: 'R. G. Kar Medical College',
      type: 'Government Hospital',
      district: 'Kolkata',
      tier: 'Tertiary',
      beds: 1200,
      emergency: true,
      status: 'Operational'
    },

    {
      name: 'NRS Medical College',
      type: 'Government Hospital',
      district: 'Kolkata',
      tier: 'Tertiary',
      beds: 1500,
      emergency: true,
      status: 'Operational'
    },

    {
      name: 'Howrah District Hospital',
      type: 'Government Hospital',
      district: 'Howrah',
      tier: 'Secondary',
      beds: 450,
      emergency: true,
      status: 'Operational'
    },

    {
      name: 'Nadia District Hospital',
      type: 'Government Hospital',
      district: 'Nadia',
      tier: 'Secondary',
      beds: 380,
      emergency: true,
      status: 'Operational'
    },

    {
      name: 'North Bengal Medical Centre',
      type: 'Medical Centre',
      district: 'Darjeeling',
      tier: 'Tertiary',
      beds: 620,
      emergency: false,
      status: 'Under Maintenance'
    }

  ];

}