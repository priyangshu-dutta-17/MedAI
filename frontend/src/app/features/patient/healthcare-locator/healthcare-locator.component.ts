import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LocationService } from '../../../core/services/location.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-healthcare-locator',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent
  ],

  template: `
    <div class="locator-page">

      <!-- PAGE HEADER -->
      <div class="page-heading">

        <div>
          <div class="eyebrow">
            <i class="fa-solid fa-location-dot"></i>
            WEST BENGAL HEALTH NETWORK
          </div>

          <h1>Healthcare Locator</h1>

          <p>
            Find hospitals, clinics, diagnostic centres and pharmacies
            across West Bengal.
          </p>
        </div>

        <button
          class="location-button"
          (click)="useCurrentLocation()"
          [disabled]="isLoading">

          <i class="fa-solid fa-location-crosshairs"></i>

          <span>Use My Location</span>

        </button>

      </div>


      <!-- FILTER CARD -->
      <div class="filter-card">

        <div class="filter-heading">

          <div class="filter-icon">
            <i class="fa-solid fa-sliders"></i>
          </div>

          <div>
            <h3>Find a Healthcare Facility</h3>

            <p>
              Filter facilities according to your requirements.
            </p>
          </div>

        </div>


        <div class="filters-grid">

          <!-- DISTRICT -->
          <div class="filter-field">

            <label>
              <i class="fa-solid fa-map"></i>
              District
            </label>

            <select
              [(ngModel)]="selectedDistrict"
              (change)="applyFilters()">

              <option value="">
                All West Bengal Districts
              </option>

              <option
                *ngFor="let district of districts"
                [value]="district">

                {{ district }}

              </option>

            </select>

          </div>


          <!-- FACILITY TYPE -->
          <div class="filter-field">

            <label>
              <i class="fa-solid fa-hospital"></i>
              Facility Type
            </label>

            <select
              [(ngModel)]="selectedType"
              (change)="applyFilters()">

              <option value="">
                All Facility Types
              </option>

              <option value="hospital">
                Hospitals & Medical Colleges
              </option>

              <option value="clinic">
                Clinics & OPD
              </option>

              <option value="diagnostic_centre">
                Diagnostic & Imaging Centres
              </option>

              <option value="pharmacy">
                24x7 Pharmacies
              </option>

            </select>

          </div>


          <!-- SPECIALTY -->
          <div class="filter-field">

            <label>
              <i class="fa-solid fa-stethoscope"></i>
              Specialty
            </label>

            <select
              [(ngModel)]="selectedSpecialty"
              (change)="applyFilters()">

              <option value="">
                All Specialties
              </option>

              <option value="Cardiology">
                Cardiology
              </option>

              <option value="Neurology">
                Neurology
              </option>

              <option value="Trauma">
                Trauma & Emergency ICU
              </option>

              <option value="Pediatrics">
                Pediatrics
              </option>

              <option value="Oncology">
                Oncology
              </option>

              <option value="General">
                General Medicine
              </option>

            </select>

          </div>


          <!-- RESET -->
          <div class="reset-wrapper">

            <button
              class="reset-button"
              (click)="resetFilters()">

              <i class="fa-solid fa-rotate-left"></i>

              Reset

            </button>

          </div>

        </div>

      </div>


      <!-- MAIN CONTENT -->
      <div class="locator-grid">

        <!-- FACILITY LIST -->
        <section class="facilities-section">

          <div class="section-top">

            <div>

              <h3>Nearby Facilities</h3>

              <p>
                {{ facilities.length }} healthcare facilities found
              </p>

            </div>

            <span class="live-badge">

              <span class="live-dot"></span>

              LIVE REGISTRY

            </span>

          </div>


          <!-- LOADING -->
          <div
            class="loading-box"
            *ngIf="isLoading">

            <app-loading-spinner
              text="Searching healthcare facilities...">
            </app-loading-spinner>

          </div>


          <!-- EMPTY -->
          <div
            class="empty-state"
            *ngIf="!isLoading && facilities.length === 0">

            <div class="empty-icon">
              <i class="fa-solid fa-hospital"></i>
            </div>

            <h3>No facilities found</h3>

            <p>
              Try changing your filters or search another district.
            </p>

            <button
              class="reset-button"
              (click)="resetFilters()">

              Reset Filters

            </button>

          </div>


          <!-- FACILITY CARDS -->
          <div
            class="facility-list"
            *ngIf="!isLoading && facilities.length > 0">

            <div
              *ngFor="let facility of facilities"
              class="facility-card"
              [class.selected]="selectedFacility?.id === facility.id"
              (click)="selectFacility(facility)">

              <!-- CARD TOP -->
              <div class="facility-top">

                <div
                  class="facility-icon"
                  [ngClass]="{
                    'hospital-icon': facility.type === 'hospital',
                    'clinic-icon': facility.type === 'clinic',
                    'diagnostic-icon': facility.type === 'diagnostic_centre',
                    'pharmacy-icon': facility.type === 'pharmacy'
                  }">

                  <i
                    class="fa-solid"
                    [ngClass]="{
                      'fa-hospital': facility.type === 'hospital',
                      'fa-stethoscope': facility.type === 'clinic',
                      'fa-vial': facility.type === 'diagnostic_centre',
                      'fa-prescription-bottle-medical': facility.type === 'pharmacy'
                    }">
                  </i>

                </div>


                <div class="facility-title">

                  <h4>
                    {{ facility.name }}
                  </h4>

                  <span class="facility-type">
                    {{ formatFacilityType(facility.type) }}
                  </span>

                </div>

              </div>


              <!-- ADDRESS -->
              <div class="facility-address">

                <i class="fa-solid fa-location-dot"></i>

                <span>
                  {{ facility.address }}
                </span>

              </div>


              <!-- META -->
              <div class="facility-meta">

                <span>

                  <i class="fa-solid fa-map-pin"></i>

                  {{ facility.district }}

                </span>


                <span
                  *ngIf="facility.distanceKm != null"
                  class="distance">

                  <i class="fa-solid fa-route"></i>

                  {{ facility.distanceKm }} km

                </span>

              </div>


              <!-- SPECIALTIES -->
              <div
                class="specialties"
                *ngIf="facility.specialties?.length">

                <span
                  *ngFor="
                    let specialty of facility.specialties.slice(0, 3)
                  "
                  class="specialty">

                  {{ specialty }}

                </span>

                <span
                  *ngIf="facility.specialties.length > 3"
                  class="specialty more">

                  +{{ facility.specialties.length - 3 }}

                </span>

              </div>


              <!-- SELECTED -->
              <div
                class="selected-indicator"
                *ngIf="selectedFacility?.id === facility.id">

                <i class="fa-solid fa-check"></i>

              </div>

            </div>

          </div>

        </section>


        <!-- MAP SECTION -->
        <section class="map-section">

          <div class="map-card">

            <!-- MAP HEADER -->
            <div class="map-header">

              <div class="map-title">

                <div class="map-icon">
                  <i class="fa-solid fa-map-location-dot"></i>
                </div>

                <div>

                  <h3>Healthcare Map</h3>

                  <p>
                    West Bengal Facility Network
                  </p>

                </div>

              </div>


              <div class="coordinates">

                <span class="coordinate-dot"></span>

                {{ currentLat.toFixed(2) }},
                {{ currentLng.toFixed(2) }}

              </div>

            </div>


            <!-- GOOGLE MAP -->
            <div class="map-visual">

              <div
                #googleMap
                class="google-map">
              </div>

            </div>


            <!-- MAP LEGEND -->
            <div class="map-legend">

              <div>
                <span class="legend-marker hospital"></span>
                Hospital
              </div>

              <div>
                <span class="legend-marker pharmacy"></span>
                Pharmacy
              </div>

              <div>
                <span class="legend-marker diagnostic"></span>
                Diagnostic
              </div>

            </div>


            <!-- FACILITY DETAILS -->
            <div
              class="facility-details"
              *ngIf="selectedFacility">

              <div class="details-header">

                <div class="details-title">

                  <div class="details-icon">
                    <i class="fa-solid fa-hospital-user"></i>
                  </div>

                  <div>

                    <span class="details-label">
                      SELECTED FACILITY
                    </span>

                    <h2>
                      {{ selectedFacility.name }}
                    </h2>

                  </div>

                </div>


                <a
                  [href]="getGoogleMapsUrl(selectedFacility)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="maps-button">

                  <i class="fa-solid fa-diamond-turn-right"></i>

                  Directions

                </a>

              </div>


              <div class="details-address">

                <i class="fa-solid fa-location-dot"></i>

                {{ selectedFacility.address }}

              </div>


              <div class="details-stats">

                <!-- PHONE -->
                <div class="detail-stat">

                  <div class="stat-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>

                  <div>

                    <span>PHONE</span>

                    <strong>
                      {{ selectedFacility.phone || 'Not available' }}
                    </strong>

                  </div>

                </div>


                <!-- EMERGENCY -->
                <div class="detail-stat">

                  <div class="stat-icon emergency">
                    <i class="fa-solid fa-truck-medical"></i>
                  </div>

                  <div>

                    <span>EMERGENCY</span>

                    <strong class="available">
                      24x7 Available
                    </strong>

                  </div>

                </div>


                <!-- RATING -->
                <div class="detail-stat">

                  <div class="stat-icon rating">
                    <i class="fa-solid fa-star"></i>
                  </div>

                  <div>

                    <span>RATING</span>

                    <strong>
                      {{ selectedFacility.rating || 4.8 }} / 5.0
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            <!-- NO SELECTION -->
            <div
              class="no-selection"
              *ngIf="!selectedFacility">

              <i class="fa-solid fa-hand-pointer"></i>

              <span>
                Select a facility from the list
              </span>

            </div>

          </div>

        </section>

      </div>

    </div>
  `,

  styles: [`

    .locator-page {
      width: 100%;
      max-width: 1500px;
      margin: 0 auto;
    }


    /* PAGE HEADER */

    .page-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1.5rem;
    }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: .45rem;
      font-size: .68rem;
      font-weight: 800;
      letter-spacing: .12em;
      color: var(--secondary);
      margin-bottom: .45rem;
    }

    .page-heading h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .page-heading p {
      margin: .35rem 0 0;
      color: var(--text-muted);
      font-size: .9rem;
    }


    /* LOCATION BUTTON */

    .location-button {
      border: none;
      background: var(--primary);
      color: white;
      padding: .75rem 1.1rem;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      gap: .55rem;
      font-weight: 700;
      cursor: pointer;
      transition: .2s ease;
      box-shadow: var(--shadow-sm);
      white-space: nowrap;
    }

    .location-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .location-button:disabled {
      opacity: .6;
      cursor: not-allowed;
    }


    /* FILTER CARD */

    .filter-card {
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-sm);
    }

    .filter-heading {
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-bottom: 1rem;
    }

    .filter-icon {
      width: 40px;
      height: 40px;
      border-radius: 11px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .filter-heading h3 {
      margin: 0;
      font-size: .95rem;
    }

    .filter-heading p {
      margin: .2rem 0 0;
      color: var(--text-muted);
      font-size: .75rem;
    }


    /* FILTERS */

    .filters-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr auto;
      gap: .8rem;
      align-items: end;
    }

    .filter-field label {
      display: block;
      font-size: .72rem;
      font-weight: 800;
      color: var(--text-muted);
      margin-bottom: .4rem;
    }

    .filter-field label i {
      margin-right: .3rem;
      color: var(--primary);
    }

    .filter-field select {
      width: 100%;
      min-height: 42px;
      padding: .65rem .75rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      background: #fff;
      color: var(--text-main);
      outline: none;
      font-size: .82rem;
      cursor: pointer;
    }

    .filter-field select:focus {
      border-color: var(--primary);
    }


    /* RESET */

    .reset-button {
      height: 42px;
      padding: 0 1rem;
      border: 1px solid var(--border-color);
      background: #fff;
      border-radius: var(--radius-md);
      color: var(--text-muted);
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .4rem;
    }

    .reset-button:hover {
      border-color: var(--primary);
      color: var(--primary);
    }


    /* MAIN GRID */

    .locator-grid {
      display: grid;
      grid-template-columns: minmax(320px, .9fr) minmax(500px, 1.8fr);
      gap: 1.25rem;
      align-items: start;
    }


    /* SECTION */

    .section-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .8rem;
    }

    .section-top h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 800;
    }

    .section-top p {
      margin: .2rem 0 0;
      font-size: .72rem;
      color: var(--text-muted);
    }


    /* LIVE BADGE */

    .live-badge {
      display: flex;
      align-items: center;
      gap: .35rem;
      padding: .3rem .55rem;
      border-radius: var(--radius-full);
      background: var(--success-light);
      color: var(--success);
      font-size: .63rem;
      font-weight: 800;
    }

    .live-dot {
      width: 6px;
      height: 6px;
      background: var(--success);
      border-radius: 50%;
    }


    /* FACILITY LIST */

    .facility-list {
      max-height: 650px;
      overflow-y: auto;
      padding-right: .35rem;
    }

    .facility-card {
      position: relative;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1rem;
      margin-bottom: .7rem;
      cursor: pointer;
      transition: .2s ease;
    }

    .facility-card:hover {
      border-color: var(--primary);
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }

    .facility-card.selected {
      border-color: var(--primary);
      background: var(--primary-light);
      box-shadow: 0 0 0 1px var(--primary);
    }


    /* FACILITY TOP */

    .facility-top {
      display: flex;
      gap: .75rem;
      align-items: flex-start;
    }

    .facility-icon {
      width: 42px;
      height: 42px;
      flex-shrink: 0;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hospital-icon {
      background: var(--primary-light);
      color: var(--primary);
    }

    .clinic-icon {
      background: #f3e8ff;
      color: #7e22ce;
    }

    .diagnostic-icon {
      background: var(--secondary-light);
      color: var(--secondary);
    }

    .pharmacy-icon {
      background: var(--success-light);
      color: var(--success);
    }

    .facility-title {
      min-width: 0;
      flex: 1;
    }

    .facility-title h4 {
      margin: 0;
      font-size: .88rem;
      line-height: 1.3;
      font-weight: 800;
    }

    .facility-type {
      display: inline-block;
      margin-top: .25rem;
      font-size: .65rem;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
    }


    /* ADDRESS */

    .facility-address {
      display: flex;
      gap: .45rem;
      margin-top: .8rem;
      font-size: .73rem;
      line-height: 1.4;
      color: var(--text-muted);
    }

    .facility-address i {
      color: var(--primary);
    }


    /* META */

    .facility-meta {
      display: flex;
      justify-content: space-between;
      margin-top: .7rem;
      font-size: .68rem;
      font-weight: 700;
      color: var(--text-muted);
    }

    .facility-meta span {
      display: flex;
      align-items: center;
      gap: .3rem;
    }

    .distance {
      color: var(--primary);
    }


    /* SPECIALTIES */

    .specialties {
      display: flex;
      gap: .3rem;
      flex-wrap: wrap;
      margin-top: .7rem;
    }

    .specialty {
      background: #f1f5f9;
      color: #475569;
      padding: .25rem .45rem;
      border-radius: 5px;
      font-size: .62rem;
      font-weight: 700;
    }

    .specialty.more {
      background: var(--primary);
      color: white;
    }


    /* SELECTED INDICATOR */

    .selected-indicator {
      position: absolute;
      right: .8rem;
      top: .8rem;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .6rem;
    }


    /* MAP */

    .map-card {
      position: relative;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .map-header {
      min-height: 70px;
      padding: .9rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
    }

    .map-title {
      display: flex;
      align-items: center;
      gap: .7rem;
    }

    .map-icon {
      width: 40px;
      height: 40px;
      border-radius: 11px;
      background: var(--secondary-light);
      color: var(--secondary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .map-title h3 {
      margin: 0;
      font-size: .95rem;
    }

    .map-title p {
      margin: .15rem 0 0;
      color: var(--text-muted);
      font-size: .68rem;
    }

    .coordinates {
      font-size: .67rem;
      font-weight: 700;
      color: var(--text-muted);
      background: #f8fafc;
      padding: .35rem .55rem;
      border-radius: var(--radius-full);
    }

    .coordinate-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: var(--success);
      border-radius: 50%;
      margin-right: .3rem;
    }


    /* MAP VISUAL */

    .map-visual {
      height: 430px;
      position: relative;
      overflow: hidden;
      background: #e8f1f5;
    }

    .google-map {
      width: 100%;
      height: 100%;
      min-height: 430px;
    }


    /* MAP LEGEND */

    .map-legend {
      position: absolute;
      bottom: 100px;
      left: 12px;
      display: flex;
      gap: .8rem;
      padding: .5rem .7rem;
      background: rgba(255, 255, 255, .94);
      border: 1px solid rgba(226, 232, 240, .9);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      font-size: .62rem;
      font-weight: 700;
      color: var(--text-muted);
      z-index: 10;
    }

    .map-legend > div {
      display: flex;
      align-items: center;
      gap: .3rem;
    }

    .legend-marker {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .legend-marker.hospital {
      background: var(--primary);
    }

    .legend-marker.pharmacy {
      background: var(--success);
    }

    .legend-marker.diagnostic {
      background: var(--secondary);
    }


    /* FACILITY DETAILS */

    .facility-details {
      padding: 1rem;
      border-top: 1px solid var(--border-color);
    }

    .details-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .details-title {
      display: flex;
      align-items: center;
      gap: .7rem;
      min-width: 0;
    }

    .details-icon {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      border-radius: 12px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .details-label {
      display: block;
      font-size: .58rem;
      color: var(--text-muted);
      font-weight: 800;
      letter-spacing: .08em;
    }

    .details-title h2 {
      margin: .15rem 0 0;
      font-size: 1rem;
      font-weight: 800;
    }

    .maps-button {
      display: flex;
      align-items: center;
      gap: .4rem;
      background: var(--primary);
      color: white;
      padding: .55rem .75rem;
      border-radius: var(--radius-md);
      font-size: .7rem;
      font-weight: 800;
      white-space: nowrap;
      text-decoration: none;
    }

    .maps-button:hover {
      opacity: .9;
    }

    .details-address {
      display: flex;
      align-items: flex-start;
      gap: .45rem;
      color: var(--text-muted);
      font-size: .72rem;
      margin: .8rem 0;
    }

    .details-address i {
      color: var(--primary);
    }


    /* DETAILS STATS */

    .details-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .6rem;
    }

    .detail-stat {
      display: flex;
      align-items: center;
      gap: .55rem;
      background: #f8fafc;
      border-radius: var(--radius-md);
      padding: .65rem;
    }

    .stat-icon {
      width: 32px;
      height: 32px;
      border-radius: 9px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: .75rem;
    }

    .stat-icon.emergency {
      background: var(--success-light);
      color: var(--success);
    }

    .stat-icon.rating {
      background: #fef3c7;
      color: #d97706;
    }

    .detail-stat span {
      display: block;
      font-size: .55rem;
      font-weight: 800;
      color: var(--text-muted);
    }

    .detail-stat strong {
      display: block;
      margin-top: .15rem;
      font-size: .7rem;
    }

    .available {
      color: var(--success);
    }


    /* LOADING / EMPTY */

    .loading-box,
    .empty-state {
      background: white;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem;
    }

    .empty-state {
      text-align: center;
    }

    .empty-icon {
      width: 55px;
      height: 55px;
      margin: 0 auto 1rem;
      border-radius: 16px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }

    .empty-state h3 {
      margin: 0;
      font-size: .95rem;
    }

    .empty-state p {
      font-size: .75rem;
      color: var(--text-muted);
      margin: .4rem 0 1rem;
    }


    /* NO SELECTION */

    .no-selection {
      padding: 1rem;
      border-top: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .4rem;
      color: var(--text-muted);
      font-size: .7rem;
    }


    /* RESPONSIVE */

    @media (max-width: 1100px) {

      .locator-grid {
        grid-template-columns: 1fr;
      }

      .facility-list {
        max-height: 500px;
      }

    }


    @media (max-width: 800px) {

      .page-heading {
        align-items: flex-start;
        flex-direction: column;
      }

      .filters-grid {
        grid-template-columns: 1fr 1fr;
      }

      .reset-wrapper {
        grid-column: span 2;
      }

      .reset-button {
        width: 100%;
      }

    }


    @media (max-width: 550px) {

      .filters-grid {
        grid-template-columns: 1fr;
      }

      .reset-wrapper {
        grid-column: span 1;
      }

      .map-visual {
        height: 350px;
      }

      .google-map {
        min-height: 350px;
      }

      .map-header {
        align-items: flex-start;
        gap: .5rem;
        flex-direction: column;
      }

      .coordinates {
        align-self: flex-start;
      }

      .details-header {
        align-items: flex-start;
        flex-direction: column;
      }

      .maps-button {
        width: 100%;
        justify-content: center;
      }

      .details-stats {
        grid-template-columns: 1fr;
      }

    }

  `]
})


export class HealthcareLocatorComponent
  implements OnInit, AfterViewInit {

  private locService = inject(LocationService);


  @ViewChild('googleMap')
  private googleMap!: ElementRef<HTMLDivElement>;


  districts: string[] = [];

  facilities: any[] = [];

  selectedFacility: any = null;

  isLoading = false;


  selectedDistrict = '';

  selectedType = '';

  selectedSpecialty = '';


  currentLat = 22.5726;

  currentLng = 88.3639;


  /*
   * Google Maps objects are kept as any.
   * This avoids TypeScript errors related
   * to the global Google Maps namespace.
   */

  private map: any = null;

  private facilityMarkers: any[] = [];

  private userMarker: any = null;

  private mapsReady = false;


  /*
   * INITIALIZE COMPONENT
   */

  ngOnInit(): void {

    this.districts =
      this.locService.westBengalDistricts;

    this.fetchFacilities();

  }


  /*
   * INITIALIZE MAP AFTER VIEW LOAD
   */

  async ngAfterViewInit(): Promise<void> {

    await this.initializeGoogleMaps();

  }


  /*
   * GOOGLE MAPS SCRIPT LOADER
   *
   * IMPORTANT:
   * We are NOT using:
   *
   * Loader
   * loader.load()
   * loader.importLibrary()
   *
   * We load the Google Maps JavaScript
   * API directly through a script element.
   */

  private async initializeGoogleMaps(): Promise<void> {

    try {

      if (!environment.googleMapsApiKey) {

        console.error(
          'Google Maps API key is missing.'
        );

        return;

      }


      /*
       * Google Maps already loaded
       */

      if (
        (window as any).google &&
        (window as any).google.maps
      ) {

        this.createGoogleMap();

        return;

      }


      /*
       * Check if another script is already
       * loading Google Maps.
       */

      const existingScript =
        document.querySelector(
          'script[data-google-maps="true"]'
        ) as HTMLScriptElement | null;


      if (existingScript) {

        await new Promise<void>(
          (resolve, reject) => {

            existingScript.addEventListener(
              'load',
              () => resolve(),
              { once: true }
            );

            existingScript.addEventListener(
              'error',
              () => reject(
                new Error(
                  'Google Maps script failed to load.'
                )
              ),
              { once: true }
            );

          }
        );


        this.createGoogleMap();

        return;

      }


      /*
       * Create Google Maps script
       */

      await new Promise<void>(
        (resolve, reject) => {

          const script =
            document.createElement('script');


          script.src =
            'https://maps.googleapis.com/maps/api/js?key=' +
            encodeURIComponent(
              environment.googleMapsApiKey
            );


          script.async = true;

          script.defer = true;


          /*
           * Correct TypeScript syntax:
           *
           * script.dataset['googleMaps']
           */

          script.dataset['googleMaps'] = 'true';


          script.onload = () => {

            resolve();

          };


          script.onerror = () => {

            reject(
              new Error(
                'Google Maps script failed to load.'
              )
            );

          };


          document.head.appendChild(script);

        }
      );


      /*
       * Create map after script loads
       */

      this.createGoogleMap();

    }

    catch (error) {

      console.error(
        'Google Maps initialization failed:',
        error
      );

    }

  }


  /*
   * CREATE GOOGLE MAP
   */

  private createGoogleMap(): void {

    const googleMaps =
      (window as any).google;


    if (
      !googleMaps ||
      !googleMaps.maps
    ) {

      console.error(
        'Google Maps API is not available.'
      );

      return;

    }


    if (
      !this.googleMap ||
      !this.googleMap.nativeElement
    ) {

      console.error(
        'Google Map container is not available.'
      );

      return;

    }


    /*
     * Create map
     */

    this.map =
      new googleMaps.maps.Map(
        this.googleMap.nativeElement,
        {

          center: {

            lat: this.currentLat,

            lng: this.currentLng

          },

          zoom: 7,

          mapTypeId: 'roadmap',

          streetViewControl: true,

          fullscreenControl: true,

          zoomControl: true,

          scaleControl: true,

          rotateControl: true,

          gestureHandling: 'greedy'

        }
      );


    this.mapsReady = true;


    /*
     * Add existing facility markers
     */

    this.updateMapMarkers();

  }


  /*
   * CREATE USER MARKER
   */

  private createUserMarker(): void {

    if (
      !this.mapsReady ||
      !this.map
    ) {

      return;

    }


    const googleMaps =
      (window as any).google;


    if (
      !googleMaps ||
      !googleMaps.maps
    ) {

      return;

    }


    /*
     * Remove old user marker
     */

    if (this.userMarker) {

      this.userMarker.setMap(null);

      this.userMarker = null;

    }


    /*
     * Create new user marker
     */

    this.userMarker =
      new googleMaps.maps.Marker({

        map: this.map,

        position: {

          lat: this.currentLat,

          lng: this.currentLng

        },

        title: 'Your current location',

        animation:
          googleMaps.maps.Animation.DROP

      });

  }


  /*
   * FETCH FACILITIES
   */

  fetchFacilities(): void {

    this.isLoading = true;


    const filters: any = {};


    if (this.selectedDistrict) {

      filters.district =
        this.selectedDistrict;

    }


    if (this.selectedType) {

      filters.type =
        this.selectedType;

    }


    if (this.selectedSpecialty) {

      filters.specialty =
        this.selectedSpecialty;

    }


    this.locService
      .getFacilities(filters)
      .subscribe({

        next: (res: any) => {

          this.isLoading = false;


          if (
            res &&
            res.success &&
            res.data
          ) {

            this.facilities =
              res.data;


            this.selectedFacility =
              this.facilities.length > 0
                ? this.facilities[0]
                : null;


            this.updateMapMarkers();

          }

          else {

            this.facilities = [];

            this.selectedFacility = null;

            this.updateMapMarkers();

          }

        },


        error: (error: any) => {

          console.error(
            'Facility loading failed:',
            error
          );


          this.isLoading = false;

          this.facilities = [];

          this.selectedFacility = null;

          this.updateMapMarkers();

        }

      });

  }


  /*
   * APPLY FILTERS
   */

  applyFilters(): void {

    this.fetchFacilities();

  }


  /*
   * RESET FILTERS
   */

  resetFilters(): void {

    this.selectedDistrict = '';

    this.selectedType = '';

    this.selectedSpecialty = '';

    this.fetchFacilities();

  }


  /*
   * SELECT FACILITY
   */

  selectFacility(
    facility: any
  ): void {

    this.selectedFacility =
      facility;


    if (
      !this.mapsReady ||
      !this.map
    ) {

      return;

    }


    const lat =
      Number(facility.lat);

    const lng =
      Number(facility.lng);


    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng)
    ) {

      return;

    }


    this.map.panTo({

      lat,

      lng

    });


    this.map.setZoom(15);

  }


  /*
   * UPDATE MAP MARKERS
   */

  private updateMapMarkers(): void {

    if (
      !this.mapsReady ||
      !this.map
    ) {

      return;

    }


    const googleMaps =
      (window as any).google;


    if (
      !googleMaps ||
      !googleMaps.maps
    ) {

      return;

    }


    /*
     * Remove old facility markers
     */

    this.facilityMarkers.forEach(
      (marker: any) => {

        if (marker) {

          marker.setMap(null);

        }

      }
    );


    this.facilityMarkers = [];


    /*
     * Create facility markers
     */

    this.facilities.forEach(
      (facility: any) => {

        const lat =
          Number(facility.lat);

        const lng =
          Number(facility.lng);


        if (
          !Number.isFinite(lat) ||
          !Number.isFinite(lng)
        ) {

          return;

        }


        const marker =
          new googleMaps.maps.Marker({

            map: this.map,

            position: {

              lat,

              lng

            },

            title:
              facility.name ||
              'Healthcare facility'

          });


        /*
         * Marker click
         */

        marker.addListener(
          'click',
          () => {

            this.selectFacility(
              facility
            );

          }
        );


        this.facilityMarkers.push(
          marker
        );

      }
    );

  }


  /*
   * USE CURRENT LOCATION
   */

  useCurrentLocation(): void {

    if (!navigator.geolocation) {

      alert(
        'GPS location is not supported by this browser.'
      );

      return;

    }


    this.isLoading = true;


    navigator.geolocation.getCurrentPosition(

      (position) => {

        this.currentLat =
          position.coords.latitude;

        this.currentLng =
          position.coords.longitude;


        /*
         * Update map
         */

        if (
          this.mapsReady &&
          this.map
        ) {

          this.map.panTo({

            lat: this.currentLat,

            lng: this.currentLng

          });


          this.map.setZoom(14);


          this.createUserMarker();

        }


        /*
         * Find nearby facilities
         */

        this.locService
          .getNearbyFacilities(

            this.currentLat,

            this.currentLng,

            25

          )
          .subscribe({

            next: (res: any) => {

              this.isLoading = false;


              if (
                res &&
                res.success &&
                res.data
              ) {

                this.facilities =
                  res.data;


                this.selectedFacility =
                  this.facilities.length > 0
                    ? this.facilities[0]
                    : null;


                this.updateMapMarkers();

              }

              else {

                this.facilities = [];

                this.selectedFacility = null;

                this.updateMapMarkers();

              }

            },


            error: (error: any) => {

              console.error(
                'Nearby facility loading failed:',
                error
              );


              this.isLoading = false;


              alert(
                'Could not load nearby facilities. Please try again.'
              );

            }

          });

      },


      (error) => {

        console.error(
          'GPS error:',
          error
        );


        this.isLoading = false;


        alert(
          'Could not access GPS location. Defaulting to Kolkata center.'
        );

      },

      {
        enableHighAccuracy: true,

        timeout: 10000,

        maximumAge: 0

      }

    );

  }


  /*
   * FORMAT FACILITY TYPE
   */

  formatFacilityType(
    type: string
  ): string {

    switch (type) {

      case 'hospital':

        return 'Hospital';


      case 'clinic':

        return 'Clinic';


      case 'diagnostic_centre':

        return 'Diagnostic Centre';


      case 'pharmacy':

        return '24x7 Pharmacy';


      default:

        return type ||
          'Healthcare Facility';

    }

  }


  /*
   * GOOGLE MAPS DIRECTIONS URL
   */

  getGoogleMapsUrl(
    facility: any
  ): string {

    if (!facility) {

      return '#';

    }


    const lat =
      Number(facility.lat);

    const lng =
      Number(facility.lng);


    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng)
    ) {

      return '#';

    }


    return (
      'https://www.google.com/maps/search/?api=1&query=' +
      lat +
      ',' +
      lng
    );

  }

}