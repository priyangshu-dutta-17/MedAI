import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],

  template: `
    <app-navbar></app-navbar>

    <main class="about-page">

      <!-- =====================================================
           HERO
           ===================================================== -->

      <section class="about-hero">

        <div class="hero-glow glow-one"></div>
        <div class="hero-glow glow-two"></div>

        <div class="container">

          <div class="hero-content">

            <div class="eyebrow">
              <span class="pulse-dot"></span>
              ABOUT MEDAI
            </div>

            <h1>
              Healthcare,
              <span>reimagined with intelligence.</span>
            </h1>

            <p>
              MedAI is a connected healthcare intelligence platform
              designed to make healthcare more accessible, organized
              and easier to navigate for patients and doctors.
            </p>

          </div>

          <!-- HERO STATS -->

          <div class="hero-stat-row">

            <div class="stat-card">

              <div class="stat-icon">
                <i class="fa-solid fa-brain"></i>
              </div>

              <strong>AI</strong>

              <span>
                Intelligent Assistance
              </span>

            </div>


            <div class="stat-card">

              <div class="stat-icon">
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <strong>Care</strong>

              <span>
                Connected Healthcare
              </span>

            </div>


            <div class="stat-card">

              <div class="stat-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>

              <strong>23</strong>

              <span>
                West Bengal Districts
              </span>

            </div>


            <div class="stat-card">

              <div class="stat-icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>

              <strong>Secure</strong>

              <span>
                Protected Information
              </span>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           WHY MEDAI
           ===================================================== -->

      <section class="why-section">

        <div class="container">

          <div class="section-heading">

            <div class="eyebrow">
              WHY MEDAI
            </div>

            <h2>
              Healthcare should be
              <span>simpler.</span>
            </h2>

            <p>
              MedAI brings the essential pieces of a modern healthcare
              experience together in one connected platform.
            </p>

          </div>


          <div class="why-grid">

            <!-- CARD 1 -->

            <article class="why-card">

              <div class="why-icon ai-icon">
                <i class="fa-solid fa-brain"></i>
              </div>

              <span class="card-number">
                01
              </span>

              <h3>
                Intelligent Assistance
              </h3>

              <p>
                AI-powered assistance helps users understand
                health-related information and navigate their
                healthcare journey more easily.
              </p>

            </article>


            <!-- CARD 2 -->

            <article class="why-card">

              <div class="why-icon care-icon">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <span class="card-number">
                02
              </span>

              <h3>
                Connected Care
              </h3>

              <p>
                Patients, doctors, appointments, prescriptions and
                medical records come together within one healthcare
                ecosystem.
              </p>

            </article>


            <!-- CARD 3 -->

            <article class="why-card">

              <div class="why-icon secure-icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>

              <span class="card-number">
                03
              </span>

              <h3>
                Secure Health Data
              </h3>

              <p>
                Authentication and controlled access help keep
                healthcare information organized and protected.
              </p>

            </article>


            <!-- CARD 4 -->

            <article class="why-card">

              <div class="why-icon location-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>

              <span class="card-number">
                04
              </span>

              <h3>
                Healthcare Near You
              </h3>

              <p>
                Location-based healthcare discovery helps users find
                relevant healthcare resources across West Bengal.
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- =====================================================
           WHAT MEDAI BRINGS TOGETHER
           ===================================================== -->

      <section class="features-section">

        <div class="container">

          <div class="features-layout">

            <div class="features-intro">

              <div class="eyebrow">
                THE MEDAI EXPERIENCE
              </div>

              <h2>
                Everything you need for a
                <span>connected healthcare experience.</span>
              </h2>

              <p>
                From discovering doctors to managing medical
                information, MedAI brings essential healthcare
                services together in one place.
              </p>

              <div class="feature-line"></div>

            </div>


            <div class="features-list">

              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  01
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-robot"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    AI Assistant
                  </h3>

                  <p>
                    Get intelligent assistance for understanding
                    health-related information.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>


              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  02
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    Doctor Discovery
                  </h3>

                  <p>
                    Find and connect with healthcare professionals.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>


              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  03
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    Appointments
                  </h3>

                  <p>
                    Simplify consultation scheduling and appointment
                    management.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>


              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  04
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-file-medical"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    Medical Records
                  </h3>

                  <p>
                    Keep important healthcare information organized
                    and accessible.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>


              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  05
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-prescription-bottle-medical"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    Prescriptions
                  </h3>

                  <p>
                    Access and manage prescription information
                    digitally.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>


              <!-- FEATURE -->

              <div class="feature-item">

                <div class="feature-number">
                  06
                </div>

                <div class="feature-icon">
                  <i class="fa-solid fa-map-location-dot"></i>
                </div>

                <div class="feature-text">

                  <h3>
                    Healthcare Locator
                  </h3>

                  <p>
                    Discover healthcare resources across West Bengal.
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right feature-arrow"></i>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           DESIGNED AROUND PEOPLE
           ===================================================== -->

      <section class="people-section">

        <div class="container">

          <div class="section-heading centered">

            <div class="eyebrow">
              DESIGNED AROUND PEOPLE
            </div>

            <h2>
              One platform.
              <span>Different experiences.</span>
            </h2>

            <p>
              MedAI is designed to support the people at the heart
              of healthcare.
            </p>

          </div>


          <div class="people-grid">

            <!-- PATIENT -->

            <article class="people-card patient-card">

              <div class="people-card-top">

                <div class="people-icon">
                  <i class="fa-solid fa-user"></i>
                </div>

                <span>
                  FOR PATIENTS
                </span>

              </div>

              <h3>
                Your healthcare,
                <br>
                <strong>all in one place.</strong>
              </h3>

              <p>
                Understand your health, discover doctors, manage
                appointments and access your medical information
                through a simple connected experience.
              </p>

              <div class="people-features">

                <span>
                  <i class="fa-solid fa-check"></i>
                  AI assistance
                </span>

                <span>
                  <i class="fa-solid fa-check"></i>
                  Doctor discovery
                </span>

                <span>
                  <i class="fa-solid fa-check"></i>
                  Medical records
                </span>

              </div>

            </article>


            <!-- DOCTOR -->

            <article class="people-card doctor-card">

              <div class="people-card-top">

                <div class="people-icon">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>

                <span>
                  FOR DOCTORS
                </span>

              </div>

              <h3>
                Better tools for
                <br>
                <strong>better care.</strong>
              </h3>

              <p>
                Manage patients, appointments, prescriptions and
                medical records through a centralized healthcare
                workspace.
              </p>

              <div class="people-features">

                <span>
                  <i class="fa-solid fa-check"></i>
                  Patient management
                </span>

                <span>
                  <i class="fa-solid fa-check"></i>
                  Appointment management
                </span>

                <span>
                  <i class="fa-solid fa-check"></i>
                  Digital prescriptions
                </span>

              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- =====================================================
           WEST BENGAL
           ===================================================== -->

      <section class="west-bengal-section">

        <div class="container">

          <div class="regional-card">

            <div class="regional-glow"></div>

            <div class="regional-content">

              <div class="eyebrow light">
                OUR REGION
              </div>

              <h2>
                Built for West Bengal.
                <span>Designed for connected healthcare.</span>
              </h2>

              <p>
                MedAI brings technology closer to communities by
                combining healthcare services with location-based
                discovery across the state.
              </p>

              <div class="regional-points">

                <div>
                  <i class="fa-solid fa-map-location-dot"></i>
                  <span>
                    Healthcare GIS
                  </span>
                </div>

                <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>
                    District-level discovery
                  </span>
                </div>

                <div>
                  <i class="fa-solid fa-network-wired"></i>
                  <span>
                    Connected healthcare
                  </span>
                </div>

              </div>

            </div>


            <div class="regional-visual">

              <div class="map-circle">

                <div class="map-ring ring-one"></div>
                <div class="map-ring ring-two"></div>
                <div class="map-ring ring-three"></div>

                <div class="map-center">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div class="map-pin pin-one">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div class="map-pin pin-two">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div class="map-pin pin-three">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           CTA
           ===================================================== -->

      <section class="cta-section">

        <div class="container">

          <div class="cta-card">

            <div class="cta-glow"></div>

            <div class="eyebrow">
              THE FUTURE OF HEALTHCARE
            </div>

            <h2>
              Healthcare shouldn't
              <span>feel complicated.</span>
            </h2>

            <p>
              Discover a smarter, more connected way to experience
              healthcare with MedAI.
            </p>

            <a
              routerLink="/services"
              class="cta-button"
            >
              Explore MedAI Services

              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>

      </section>

    </main>

    <app-footer></app-footer>
  `,

  styles: [`

    /* =====================================================
       BASE
       ===================================================== */

    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }

    .about-page {
      overflow: hidden;

      background: #f7fbfa;

      color: #153b39;

      font-family: 'Inter', sans-serif;
    }

    .container {
      width: min(
        1180px,
        calc(100% - 48px)
      );

      margin: 0 auto;
    }


    /* =====================================================
       HERO
       ===================================================== */

    .about-hero {
      position: relative;

      padding: 110px 0 90px;

      overflow: hidden;

      background:
        radial-gradient(
          circle at 85% 20%,
          rgba(20,174,162,.12),
          transparent 30%
        ),
        linear-gradient(
          135deg,
          #f2faf9,
          #ffffff
        );
    }

    .hero-content {
      position: relative;

      z-index: 2;

      max-width: 850px;

      animation:
        fadeUp .8s ease both;
    }

    .eyebrow {
      display: inline-flex;

      align-items: center;

      gap: 9px;

      color: #07877f;

      font-size: 11px;

      font-weight: 800;

      letter-spacing: .14em;
    }

    .eyebrow.light {
      color: #8ee0d8;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;

      border-radius: 50%;

      background: #14aa9f;

      box-shadow:
        0 0 0 6px
        rgba(20,170,159,.10);

      animation:
        pulse 2s infinite;
    }

    .hero-content h1 {
      margin: 22px 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          3.2rem,
          6vw,
          5.6rem
        );

      line-height: 1.08;

      letter-spacing: -.065em;

      font-weight: 800;

      overflow: visible;
    }

    .hero-content h1 span {
      display: block;

      padding-bottom: .08em;

      overflow: visible;

      background:
        linear-gradient(
          110deg,
          #087d76,
          #19b5a8,
          #087d76
        );

      background-size: 200% auto;

      -webkit-background-clip: text;

      background-clip: text;

      -webkit-text-fill-color: transparent;

      animation:
        gradientMove
        5s linear infinite;
    }

    .hero-content p {
      max-width: 700px;

      color: #6b8784;

      font-size: 17px;

      line-height: 1.85;
    }


    /* =====================================================
       HERO STATS
       ===================================================== */

    .hero-stat-row {
      position: relative;

      z-index: 2;

      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 16px;

      margin-top: 70px;
    }

    .stat-card {
      padding: 24px;

      border:
        1px solid
        rgba(8,125,118,.08);

      border-radius: 20px;

      background:
        rgba(255,255,255,.78);

      box-shadow:
        0 15px 45px
        rgba(20,90,85,.06);

      transition:
        transform .35s ease,
        box-shadow .35s ease;
    }

    .stat-card:hover {
      transform:
        translateY(-7px);

      box-shadow:
        0 25px 55px
        rgba(20,90,85,.11);
    }

    .stat-icon {
      width: 42px;
      height: 42px;

      display: flex;

      align-items: center;
      justify-content: center;

      margin-bottom: 18px;

      border-radius: 12px;

      color: #087d76;

      background: #e4f6f3;
    }

    .stat-card strong {
      display: block;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 25px;
    }

    .stat-card span {
      display: block;

      margin-top: 5px;

      color: #809a97;

      font-size: 10px;

      font-weight: 700;
    }


    /* =====================================================
       WHY MEDAI
       ===================================================== */

    .why-section {
      padding: 110px 0;

      background: white;
    }

    .section-heading {
      max-width: 700px;

      margin-bottom: 55px;
    }

    .section-heading.centered {
      margin-left: auto;
      margin-right: auto;

      text-align: center;
    }

    .section-heading h2 {
      margin: 16px 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          2.5rem,
          4vw,
          4rem
        );

      line-height: 1.08;

      letter-spacing: -.055em;
    }

    .section-heading h2 span {
      color: #0a948a;
    }

    .section-heading p {
      color: #718b88;

      font-size: 14px;

      line-height: 1.8;
    }

    .why-grid {
      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 18px;
    }

    .why-card {
      position: relative;

      min-height: 310px;

      padding: 28px;

      border:
        1px solid
        rgba(10,120,113,.08);

      border-radius: 22px;

      background: #ffffff;

      box-shadow:
        0 12px 40px
        rgba(20,90,85,.045);

      transition:
        transform .4s ease,
        box-shadow .4s ease;
    }

    .why-card:hover {
      transform:
        translateY(-8px);

      box-shadow:
        0 25px 60px
        rgba(20,100,95,.10);
    }

    .why-icon {
      width: 54px;
      height: 54px;

      display: flex;

      align-items: center;
      justify-content: center;

      margin-bottom: 22px;

      border-radius: 15px;

      font-size: 20px;
    }

    .ai-icon {
      color: #087d76;
      background: #e1f5f2;
    }

    .care-icon {
      color: #d45c67;
      background: #fbe9eb;
    }

    .secure-icon {
      color: #6e58b6;
      background: #eeeafb;
    }

    .location-icon {
      color: #d17b3b;
      background: #fbefe3;
    }

    .card-number {
      position: absolute;

      top: 28px;
      right: 28px;

      color: #a9bfbc;

      font-size: 9px;

      font-weight: 800;

      letter-spacing: .12em;
    }

    .why-card h3 {
      margin: 0 0 12px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 19px;

      letter-spacing: -.03em;
    }

    .why-card p {
      margin: 0;

      color: #718b88;

      font-size: 12px;

      line-height: 1.8;
    }


    /* =====================================================
       FEATURES
       ===================================================== */

    .features-section {
      padding: 110px 0;

      background: #f7fbfa;
    }

    .features-layout {
      display: grid;

      grid-template-columns:
        .85fr 1.15fr;

      gap: 90px;
    }

    .features-intro {
      position: sticky;

      top: 100px;

      height: fit-content;
    }

    .features-intro h2 {
      margin: 17px 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          2.5rem,
          4vw,
          4rem
        );

      line-height: 1.08;

      letter-spacing: -.055em;
    }

    .features-intro h2 span {
      color: #0a948a;
    }

    .features-intro p {
      max-width: 460px;

      color: #718b88;

      font-size: 14px;

      line-height: 1.85;
    }

    .feature-line {
      width: 70px;

      height: 3px;

      margin-top: 35px;

      border-radius: 3px;

      background: #0a948a;
    }

    .features-list {
      border-top:
        1px solid
        rgba(10,125,118,.10);
    }

    .feature-item {
      display: grid;

      grid-template-columns:
        35px 54px 1fr 25px;

      align-items: center;

      gap: 20px;

      padding: 25px 5px;

      border-bottom:
        1px solid
        rgba(10,125,118,.10);

      transition:
        padding .35s ease;
    }

    .feature-item:hover {
      padding-left: 12px;
      padding-right: 12px;
    }

    .feature-number {
      color: #9aafac;

      font-size: 9px;

      font-weight: 800;
    }

    .feature-icon {
      width: 54px;
      height: 54px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 14px;

      color: #087d76;

      background: #e3f6f3;

      transition:
        transform .3s ease;
    }

    .feature-item:hover .feature-icon {
      transform:
        scale(1.08)
        rotate(-4deg);
    }

    .feature-text h3 {
      margin: 0 0 6px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 17px;
    }

    .feature-text p {
      margin: 0;

      color: #78918e;

      font-size: 11px;

      line-height: 1.65;
    }

    .feature-arrow {
      color: #a1b5b2;

      font-size: 11px;

      transition:
        transform .3s ease,
        color .3s ease;
    }

    .feature-item:hover .feature-arrow {
      color: #087d76;

      transform:
        translateX(4px);
    }


    /* =====================================================
       PEOPLE
       ===================================================== */

    .people-section {
      padding: 110px 0;

      background: white;
    }

    .people-grid {
      display: grid;

      grid-template-columns:
        repeat(2, 1fr);

      gap: 20px;
    }

    .people-card {
      position: relative;

      overflow: hidden;

      min-height: 390px;

      padding: 40px;

      border-radius: 25px;

      transition:
        transform .4s ease,
        box-shadow .4s ease;
    }

    .people-card:hover {
      transform:
        translateY(-7px);
    }

    .patient-card {
      background:
        linear-gradient(
          145deg,
          #e9f8f5,
          #f8fcfb
        );

      box-shadow:
        0 20px 60px
        rgba(8,125,118,.07);
    }

    .doctor-card {
      color: white;

      background:
        linear-gradient(
          145deg,
          #0b5a54,
          #087d76
        );

      box-shadow:
        0 20px 60px
        rgba(8,125,118,.14);
    }

    .people-card-top {
      display: flex;

      align-items: center;

      justify-content: space-between;
    }

    .people-icon {
      width: 52px;
      height: 52px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 14px;

      color: #087d76;

      background: rgba(255,255,255,.8);
    }

    .people-card-top > span {
      font-size: 9px;

      font-weight: 800;

      letter-spacing: .13em;

      opacity: .65;
    }

    .people-card h3 {
      margin: 45px 0 17px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 29px;

      line-height: 1.15;

      letter-spacing: -.04em;
    }

    .people-card h3 strong {
      color: #087d76;
    }

    .doctor-card h3 strong {
      color: #8ee0d8;
    }

    .people-card p {
      max-width: 500px;

      color: #718b88;

      font-size: 12px;

      line-height: 1.8;
    }

    .doctor-card p {
      color:
        rgba(255,255,255,.65);
    }

    .people-features {
      display: flex;

      flex-wrap: wrap;

      gap: 8px;

      margin-top: 25px;
    }

    .people-features span {
      display: flex;

      align-items: center;

      gap: 7px;

      padding: 8px 10px;

      border-radius: 8px;

      color: #55716d;

      background: rgba(255,255,255,.75);

      font-size: 9px;

      font-weight: 700;
    }

    .doctor-card .people-features span {
      color: rgba(255,255,255,.78);

      background:
        rgba(255,255,255,.08);
    }

    .people-features i {
      color: #0a948a;
    }


    /* =====================================================
       WEST BENGAL
       ===================================================== */

    .west-bengal-section {
      padding: 0 0 110px;

      background: white;
    }

    .regional-card {
      position: relative;

      display: grid;

      grid-template-columns:
        1.15fr .85fr;

      min-height: 470px;

      overflow: hidden;

      padding: 65px;

      border-radius: 30px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #0a504b,
          #087d76
        );

      box-shadow:
        0 30px 80px
        rgba(7,96,90,.18);
    }

    .regional-content {
      position: relative;

      z-index: 2;

      max-width: 650px;
    }

    .regional-content h2 {
      margin: 18px 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          2.4rem,
          4vw,
          4rem
        );

      line-height: 1.08;

      letter-spacing: -.055em;
    }

    .regional-content h2 span {
      color: #8ee0d8;
    }

    .regional-content > p {
      max-width: 570px;

      color:
        rgba(255,255,255,.66);

      font-size: 13px;

      line-height: 1.8;
    }

    .regional-points {
      display: flex;

      flex-wrap: wrap;

      gap: 10px;

      margin-top: 35px;
    }

    .regional-points div {
      display: flex;

      align-items: center;

      gap: 9px;

      padding: 10px 12px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius: 9px;

      background:
        rgba(255,255,255,.06);

      color:
        rgba(255,255,255,.75);

      font-size: 9px;

      font-weight: 700;
    }

    .regional-points i {
      color: #8ee0d8;
    }

    .regional-visual {
      position: relative;

      display: flex;

      align-items: center;
      justify-content: center;
    }

    .map-circle {
      position: relative;

      width: 280px;
      height: 280px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background:
        rgba(255,255,255,.035);

      border:
        1px solid
        rgba(255,255,255,.10);

      animation:
        floatMap
        5s ease-in-out infinite;
    }

    .map-ring {
      position: absolute;

      border:
        1px solid
        rgba(142,224,216,.15);

      border-radius: 50%;
    }

    .ring-one {
      width: 210px;
      height: 210px;
    }

    .ring-two {
      width: 145px;
      height: 145px;
    }

    .ring-three {
      width: 80px;
      height: 80px;
    }

    .map-center {
      width: 58px;
      height: 58px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: #0a504b;

      background: #8ee0d8;

      box-shadow:
        0 0 40px
        rgba(142,224,216,.35);
    }

    .map-pin {
      position: absolute;

      width: 30px;
      height: 30px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: #8ee0d8;

      background:
        rgba(255,255,255,.08);

      font-size: 10px;

      animation:
        pinPulse
        2.5s infinite;
    }

    .pin-one {
      top: 48px;
      left: 80px;
    }

    .pin-two {
      right: 42px;
      top: 105px;

      animation-delay: .7s;
    }

    .pin-three {
      bottom: 48px;
      left: 105px;

      animation-delay: 1.2s;
    }

    .regional-glow {
      position: absolute;

      width: 350px;
      height: 350px;

      right: -100px;
      top: -100px;

      border-radius: 50%;

      background:
        rgba(142,224,216,.08);

      filter: blur(60px);
    }


    /* =====================================================
       CTA
       ===================================================== */

    .cta-section {
      padding: 0 0 110px;

      background: white;
    }

    .cta-card {
      position: relative;

      overflow: hidden;

      padding: 80px 30px;

      text-align: center;

      border-radius: 30px;

      background: #e7f7f4;

      border:
        1px solid
        rgba(10,125,118,.08);
    }

    .cta-card > *:not(.cta-glow) {
      position: relative;

      z-index: 2;
    }

    .cta-card h2 {
      max-width: 750px;

      margin: 17px auto;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          2.4rem,
          4vw,
          4rem
        );

      line-height: 1.08;

      letter-spacing: -.055em;
    }

    .cta-card h2 span {
      color: #0a948a;
    }

    .cta-card p {
      margin: 0 0 30px;

      color: #718b88;

      font-size: 14px;
    }

    .cta-button {
      display: inline-flex;

      align-items: center;
      justify-content: center;

      gap: 10px;

      min-height: 50px;

      padding: 0 24px;

      border-radius: 12px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa3
        );

      text-decoration: none;

      font-size: 12px;

      font-weight: 800;

      box-shadow:
        0 15px 30px
        rgba(8,125,118,.18);

      transition:
        transform .3s ease,
        box-shadow .3s ease;
    }

    .cta-button:hover {
      transform:
        translateY(-3px);

      box-shadow:
        0 20px 40px
        rgba(8,125,118,.25);
    }

    .cta-button i {
      transition:
        transform .3s ease;
    }

    .cta-button:hover i {
      transform:
        translateX(4px);
    }

    .cta-glow {
      position: absolute;

      width: 300px;
      height: 300px;

      left: 50%;
      top: 50%;

      transform:
        translate(-50%, -50%);

      border-radius: 50%;

      background:
        rgba(25,175,163,.08);

      filter: blur(40px);
    }


    /* =====================================================
       BACKGROUND GLOWS
       ===================================================== */

    .hero-glow {
      position: absolute;

      width: 330px;
      height: 330px;

      border-radius: 50%;

      filter: blur(70px);

      pointer-events: none;
    }

    .glow-one {
      right: -100px;
      top: 50px;

      background:
        rgba(20,174,162,.09);
    }

    .glow-two {
      left: -180px;
      bottom: -170px;

      background:
        rgba(8,125,118,.07);
    }


    /* =====================================================
       ANIMATIONS
       ===================================================== */

    @keyframes fadeUp {

      from {
        opacity: 0;

        transform:
          translateY(25px);
      }

      to {
        opacity: 1;

        transform:
          translateY(0);
      }

    }

    @keyframes pulse {

      0%, 100% {
        box-shadow:
          0 0 0 5px
          rgba(20,170,159,.10);
      }

      50% {
        box-shadow:
          0 0 0 10px
          rgba(20,170,159,.02);
      }

    }

    @keyframes gradientMove {

      0% {
        background-position:
          0% 50%;
      }

      100% {
        background-position:
          200% 50%;
      }

    }

    @keyframes floatMap {

      0%, 100% {
        transform:
          translateY(0);
      }

      50% {
        transform:
          translateY(-10px);
      }

    }

    @keyframes pinPulse {

      0%, 100% {
        transform:
          scale(1);

        opacity: .8;
      }

      50% {
        transform:
          scale(1.15);

        opacity: 1;
      }

    }


    /* =====================================================
       TABLET
       ===================================================== */

    @media (max-width: 1050px) {

      .hero-stat-row {
        grid-template-columns:
          repeat(2, 1fr);
      }

      .why-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }

      .features-layout {
        gap: 50px;
      }

      .regional-card {
        grid-template-columns:
          1fr .7fr;
      }

    }


    /* =====================================================
       MOBILE
       ===================================================== */

    @media (max-width: 700px) {

      .container {
        width:
          calc(100% - 32px);
      }

      .about-hero {
        padding:
          80px 0 65px;
      }

      .hero-content h1 {
        font-size:
          3.1rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .20em !important;

        overflow:
          visible !important;
      }

      .hero-content h1 span {
        padding-bottom:
          .10em !important;

        overflow:
          visible !important;
      }

      .hero-content p {
        font-size: 15px;
      }

      .hero-stat-row {
        grid-template-columns:
          1fr 1fr;

        gap: 10px;

        margin-top: 45px;
      }

      .stat-card {
        padding: 18px;
      }


      .why-section,
      .features-section,
      .people-section {
        padding: 75px 0;
      }

      .section-heading h2,
      .features-intro h2 {
        font-size: 2.6rem;
      }

      .why-grid {
        grid-template-columns: 1fr;
      }

      .why-card {
        min-height: 270px;
      }


      .features-layout {
        grid-template-columns:
          1fr;

        gap: 50px;
      }

      .features-intro {
        position: static;
      }

      .feature-item {
        grid-template-columns:
          25px 48px 1fr 15px;

        gap: 12px;
      }

      .feature-icon {
        width: 48px;
        height: 48px;
      }


      .people-grid {
        grid-template-columns:
          1fr;
      }

      .people-card {
        min-height: 370px;

        padding: 30px;
      }


      .regional-card {
        grid-template-columns:
          1fr;

        padding: 45px 25px;

        min-height: auto;
      }

      .regional-content h2 {
        font-size: 2.6rem;
      }

      .regional-visual {
        margin-top: 45px;
      }

      .map-circle {
        width: 230px;
        height: 230px;
      }

      .ring-one {
        width: 175px;
        height: 175px;
      }

      .ring-two {
        width: 120px;
        height: 120px;
      }

      .ring-three {
        width: 70px;
        height: 70px;
      }


      .cta-card {
        padding:
          60px 22px;
      }

      .cta-card h2 {
        font-size: 2.6rem;
      }

    }


    /* =====================================================
       VERY SMALL SCREENS
       ===================================================== */

    @media (max-width: 400px) {

      .hero-content h1 {
        font-size:
          2.7rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .22em !important;
      }

      .hero-content h1 span {
        padding-bottom:
          .12em !important;
      }

      .hero-stat-row {
        grid-template-columns:
          1fr;
      }

      .section-heading h2,
      .features-intro h2 {
        font-size:
          2.35rem;
      }

      .people-card h3 {
        font-size: 25px;
      }

      .regional-content h2 {
        font-size: 2.35rem;
      }

    }

  `]
})
export class AboutComponent {}