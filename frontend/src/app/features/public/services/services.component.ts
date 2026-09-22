import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  

  template: `

  <app-navbar></app-navbar>

  <div class="services-page">

      <!-- HERO -->
      <section class="services-hero">

        <div class="hero-orb orb-one"></div>
        <div class="hero-orb orb-two"></div>

        <div class="container hero-container">

          <div class="hero-content">

            <div class="eyebrow">
              <span class="pulse-dot"></span>
              SMART HEALTHCARE PLATFORM
            </div>

            <h1>
              Healthcare,
              <span>reimagined.</span>
            </h1>

            <p>
              AI-powered healthcare services designed to connect
              patients, doctors and medical resources through one
              intelligent platform.
            </p>

            <div class="hero-actions">
              <a routerLink="/register" class="primary-btn">
                Get Started
                <i class="fa-solid fa-arrow-right"></i>
              </a>

              <a routerLink="/about" class="secondary-btn">
                Discover MedAI
              </a>
            </div>

          </div>

          <div class="hero-visual">

            <div class="visual-card">

              <div class="visual-header">
                <div>
                  <span>MEDAI INTELLIGENCE</span>
                  <strong>Healthcare Overview</strong>
                </div>

                <div class="status">
                  <span></span>
                  LIVE
                </div>
              </div>

              <div class="health-score">
                <div class="score-circle">
                  <div>
                    <strong>98</strong>
                    <span>Health Score</span>
                  </div>
                </div>

                <div class="score-info">
                  <div class="info-line">
                    <span>AI Assistance</span>
                    <b>Active</b>
                  </div>

                  <div class="info-line">
                    <span>Appointments</span>
                    <b>Available</b>
                  </div>

                  <div class="info-line">
                    <span>Medical Records</span>
                    <b>Secure</b>
                  </div>
                </div>
              </div>

              <div class="visual-footer">
                <div class="mini-avatar">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>

                <span>
                  Connected healthcare network
                </span>

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>

            </div>

            <div class="floating-card floating-one">
              <i class="fa-solid fa-brain"></i>
              <div>
                <strong>AI Assistant</strong>
                <span>Ready to help</span>
              </div>
            </div>

            <div class="floating-card floating-two">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <strong>Nearby Care</strong>
                <span>West Bengal</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      <!-- SERVICES -->
      <section class="services-section">

        <div class="container">

          <div class="section-heading">

            <div class="eyebrow">
              OUR SERVICES
            </div>

            <h2>
              Everything you need for
              <span>better healthcare.</span>
            </h2>

            <p>
              MedAI brings essential healthcare services together
              into one simple, intelligent and connected experience.
            </p>

          </div>


          <div class="services-grid">

            <!-- AI -->
            <article class="service-card featured">

              <div class="card-top">
                <div class="service-icon ai">
                  <i class="fa-solid fa-brain"></i>
                </div>

                <span class="number">01</span>
              </div>

              <div class="card-body">

                <h3>AI Medical Assistant</h3>

                <p>
                  Interact with an intelligent medical assistant
                  for health information, symptom guidance and
                  personalized healthcare assistance.
                </p>

                <a routerLink="/ai" class="service-link">
                  Explore AI
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>


            <!-- DOCTOR -->
            <article class="service-card">

              <div class="card-top">
                <div class="service-icon doctor">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>

                <span class="number">02</span>
              </div>

              <div class="card-body">

                <h3>Doctor Consultation</h3>

                <p>
                  Discover doctors and healthcare professionals
                  based on speciality, availability and location.
                </p>

                <a routerLink="/doctors" class="service-link">
                  Find a Doctor
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>


            <!-- APPOINTMENT -->
            <article class="service-card">

              <div class="card-top">
                <div class="service-icon appointment">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>

                <span class="number">03</span>
              </div>

              <div class="card-body">

                <h3>Smart Appointments</h3>

                <p>
                  Book and manage appointments while keeping
                  your consultations organized in one place.
                </p>

                <a routerLink="/appointments" class="service-link">
                  Book Appointment
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>


            <!-- RECORDS -->
            <article class="service-card">

              <div class="card-top">
                <div class="service-icon records">
                  <i class="fa-solid fa-file-medical"></i>
                </div>

                <span class="number">04</span>
              </div>

              <div class="card-body">

                <h3>Digital Medical Records</h3>

                <p>
                  Keep prescriptions, reports, medical history
                  and healthcare documents organized digitally.
                </p>

                <a routerLink="/records" class="service-link">
                  View Records
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>


            <!-- ML -->
            <article class="service-card">

              <div class="card-top">
                <div class="service-icon ml">
                  <i class="fa-solid fa-microscope"></i>
                </div>

                <span class="number">05</span>
              </div>

              <div class="card-body">

                <h3>Predictive ML Diagnostics</h3>

                <p>
                  Machine learning models can analyse health
                  information and provide risk predictions to
                  support informed healthcare decisions.
                </p>

                <a routerLink="/ml" class="service-link">
                  Explore ML
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

              </div>

            </article>


            <!-- LOCATION -->
            <article class="service-card">

              <div class="card-top">
                <div class="service-icon location">
                  <i class="fa-solid fa-map-location-dot"></i>
                </div>

                <span class="number">06</span>
              </div>

              <div class="card-body">

                <h3>West Bengal Facility Locator</h3>

                <p>
                  Locate hospitals, clinics, pharmacies and
                  healthcare facilities across West Bengal.
                </p>

                <a routerLink="/patient/healthcare-locator" class="service-link">
                  Explore Locations
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>

            </article>

          </div>

        </div>

      </section>


      <!-- NETWORK -->
      <section class="network-section">

        <div class="container">

          <div class="network-card">

            <div class="network-content">

              <div class="eyebrow light">
                WEST BENGAL HEALTH NETWORK
              </div>

              <h2>
                Healthcare
                <span>closer to you.</span>
              </h2>

              <p>
                Connect with healthcare facilities and resources
                throughout West Bengal using intelligent location
                technology.
              </p>

              <div class="network-points">

                <div>
                  <i class="fa-solid fa-hospital"></i>
                  <span>Hospitals & Clinics</span>
                </div>

                <div>
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Nearby Facilities</span>
                </div>

                <div>
                  <i class="fa-solid fa-route"></i>
                  <span>Location Intelligence</span>
                </div>

              </div>

              <a routerLink="/patient/healthcare-locator" class="network-btn">
                Explore Health Network
                <i class="fa-solid fa-arrow-right"></i>
              </a>

            </div>


            <div class="network-visual">

              <div class="map-globe">

                <div class="map-ring ring-one"></div>
                <div class="map-ring ring-two"></div>
                <div class="map-ring ring-three"></div>

                <div class="map-center">
                  <i class="fa-solid fa-heart-pulse"></i>
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

                <div class="map-pin pin-four">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- CTA -->
      <section class="cta-section">

        <div class="container">

          <div class="cta-card">

            <div class="cta-glow"></div>

            <div class="eyebrow">
              START YOUR JOURNEY
            </div>

            <h2>
              A smarter way to
              <span>manage healthcare.</span>
            </h2>

            <p>
              Experience connected healthcare with MedAI.
            </p>

            <a routerLink="/register" class="primary-btn">
              Get Started
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>

        </div>

      </section>

    </div>
      

  <app-footer></app-footer>

`,
  

  styles: [`

    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }

    .services-page {
      min-height: 100vh;
      overflow: hidden;
      background: #f7fbfa;
      color: #153b39;
      font-family: 'Inter', sans-serif;
    }

    .container {
      width: min(1180px, calc(100% - 48px));
      margin: 0 auto;
    }


    /* HERO */

    .services-hero {
      position: relative;
      min-height: 650px;
      display: flex;
      align-items: center;
      padding: 90px 0;
      overflow: hidden;

      background:
        radial-gradient(
          circle at 85% 30%,
          rgba(20, 174, 162, .12),
          transparent 30%
        ),
        linear-gradient(
          135deg,
          #f4fbfa,
          #ffffff
        );
    }

    .hero-container {
      display: grid;
      grid-template-columns: 1fr .9fr;
      align-items: center;
      gap: 70px;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      animation: fadeUp .8s ease both;
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

    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #14aa9f;

      box-shadow:
        0 0 0 6px rgba(20,170,159,.10);

      animation: pulse 2s infinite;
    }

    .hero-content h1 {
      margin: 25px 0 20px;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(3.4rem, 6vw, 5.7rem);
      line-height: 1.02;
      letter-spacing: -.065em;
      font-weight: 800;
    }

    .hero-content h1 span {
      display: block;

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

      animation: gradientMove 5s linear infinite;
    }

    .hero-content p {
      max-width: 620px;

      color: #668481;
      font-size: 17px;
      line-height: 1.8;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      margin-top: 30px;
    }

    .primary-btn,
    .secondary-btn,
    .network-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;

      min-height: 48px;
      padding: 0 22px;

      border-radius: 12px;
      text-decoration: none;

      font-size: 13px;
      font-weight: 800;

      transition:
        transform .3s ease,
        box-shadow .3s ease;
    }

    .primary-btn {
      color: white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa3
        );

      box-shadow:
        0 14px 30px
        rgba(8,125,118,.18);
    }

    .secondary-btn {
      color: #087d76;
      background: white;
      border: 1px solid rgba(8,125,118,.12);
    }

    .primary-btn:hover,
    .secondary-btn:hover,
    .network-btn:hover {
      transform: translateY(-3px);
    }


    /* HERO VISUAL */

    .hero-visual {
      position: relative;
      min-height: 450px;

      display: flex;
      align-items: center;
      justify-content: center;

      animation:
        visualIn
        1s
        .15s
        ease
        both;
    }

    .visual-card {
      width: min(410px, 100%);

      padding: 25px;

      border:
        1px solid
        rgba(12,125,118,.10);

      border-radius: 28px;

      background:
        rgba(255,255,255,.78);

      backdrop-filter: blur(20px);

      box-shadow:
        0 35px 80px
        rgba(22,93,88,.12);

      transform:
        rotate(2deg);

      animation:
        cardFloat
        5s
        ease-in-out
        infinite;
    }

    .visual-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .visual-header span {
      display: block;

      color: #8aa4a1;
      font-size: 9px;
      font-weight: 800;
      letter-spacing: .12em;
    }

    .visual-header strong {
      display: block;

      margin-top: 5px;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 16px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 5px;

      color: #14998f;
      font-size: 9px;
      font-weight: 800;
    }

    .status span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #18afa3;
    }

    .health-score {
      display: flex;
      align-items: center;
      gap: 25px;

      margin-top: 30px;
      padding: 20px;

      border-radius: 20px;
      background: #f3faf9;
    }

    .score-circle {
      width: 125px;
      height: 125px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: 50%;

      background:
        conic-gradient(
          #12aa9f 0 98%,
          #dcefeb 98% 100%
        );

      position: relative;
    }

    .score-circle::after {
      content: '';

      position: absolute;
      inset: 9px;

      border-radius: 50%;
      background: white;
    }

    .score-circle div {
      position: relative;
      z-index: 2;
      text-align: center;
    }

    .score-circle strong {
      display: block;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 29px;
      color: #087d76;
    }

    .score-circle span {
      color: #78918e;
      font-size: 8px;
      font-weight: 700;
    }

    .score-info {
      flex: 1;
    }

    .info-line {
      display: flex;
      justify-content: space-between;

      padding: 9px 0;

      border-bottom:
        1px solid
        rgba(15,80,76,.07);

      font-size: 10px;
    }

    .info-line span {
      color: #819996;
    }

    .info-line b {
      color: #15998f;
      font-size: 9px;
    }

    .visual-footer {
      display: flex;
      align-items: center;
      gap: 10px;

      margin-top: 18px;

      color: #718b88;
      font-size: 10px;
    }

    .visual-footer > i {
      margin-left: auto;
      color: #0d9389;
    }

    .mini-avatar {
      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 9px;

      color: #087d76;
      background: #e5f6f3;
    }

    .floating-card {
      position: absolute;

      display: flex;
      align-items: center;
      gap: 10px;

      padding: 12px 15px;

      border-radius: 14px;

      background: rgba(255,255,255,.92);

      box-shadow:
        0 15px 40px
        rgba(30,90,86,.13);

      backdrop-filter: blur(12px);

      animation:
        floating
        4s
        ease-in-out
        infinite;
    }

    .floating-card > i {
      width: 32px;
      height: 32px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 9px;

      color: #087d76;
      background: #e6f7f4;
    }

    .floating-card strong {
      display: block;
      font-size: 10px;
    }

    .floating-card span {
      display: block;

      margin-top: 2px;

      color: #8aa19f;
      font-size: 8px;
    }

    .floating-one {
      left: -10px;
      top: 80px;
    }

    .floating-two {
      right: -20px;
      bottom: 70px;
      animation-delay: 1s;
    }


    /* ORBS */

    .hero-orb {
      position: absolute;

      width: 330px;
      height: 330px;

      border-radius: 50%;

      filter: blur(70px);

      pointer-events: none;
    }

    .orb-one {
      right: -100px;
      top: 80px;
      background: rgba(24,177,165,.09);
    }

    .orb-two {
      left: -180px;
      bottom: -170px;
      background: rgba(8,125,118,.07);
    }


    /* SERVICES */

    .services-section {
      padding: 110px 0;
      background: #f7fbfa;
    }

    .section-heading {
      max-width: 700px;
      margin-bottom: 55px;
    }

    .section-heading h2 {
      margin: 15px 0;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.4rem, 4vw, 3.8rem);
      line-height: 1.08;
      letter-spacing: -.055em;
    }

    .section-heading h2 span {
      color: #0a948a;
    }

    .section-heading p {
      margin: 0;

      color: #6d8986;
      line-height: 1.8;
      font-size: 15px;
    }

    .services-grid {
      display: grid;

      grid-template-columns:
        repeat(3, 1fr);

      gap: 20px;
    }

    .service-card {
      position: relative;

      min-height: 330px;

      padding: 28px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      overflow: hidden;

      border:
        1px solid
        rgba(14,115,109,.08);

      border-radius: 23px;

      background:
        rgba(255,255,255,.88);

      box-shadow:
        0 12px 40px
        rgba(20,90,85,.045);

      transition:
        transform .4s ease,
        box-shadow .4s ease,
        border-color .4s ease;
    }

    .service-card:hover {
      transform: translateY(-8px);

      border-color:
        rgba(13,148,138,.20);

      box-shadow:
        0 25px 60px
        rgba(20,100,95,.10);
    }

    .service-card.featured {
      background:
        linear-gradient(
          145deg,
          #e8f8f5,
          #ffffff
        );
    }

    .card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .service-icon {
      width: 55px;
      height: 55px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 16px;

      font-size: 21px;

      transition:
        transform .35s ease;
    }

    .service-card:hover .service-icon {
      transform:
        rotate(-7deg)
        scale(1.08);
    }

    .service-icon.ai {
      color: #087d76;
      background: #e0f6f2;
    }

    .service-icon.doctor {
      color: #287fc0;
      background: #e8f2fa;
    }

    .service-icon.appointment {
      color: #d27c3d;
      background: #fbefe3;
    }

    .service-icon.records {
      color: #c25c88;
      background: #f9eaf1;
    }

    .service-icon.ml {
      color: #7358b6;
      background: #eeeafb;
    }

    .service-icon.location {
      color: #3d9668;
      background: #e8f5ed;
    }

    .number {
      color: #a2b7b4;

      font-size: 11px;
      font-weight: 800;
      letter-spacing: .1em;
    }

    .card-body {
      margin-top: 30px;
    }

    .card-body h3 {
      margin: 0 0 12px;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 20px;
      letter-spacing: -.03em;
    }

    .card-body p {
      margin: 0 0 22px;

      color: #708b88;
      font-size: 13px;
      line-height: 1.75;
    }

    .service-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;

      color: #07877f;

      text-decoration: none;

      font-size: 12px;
      font-weight: 800;

      transition: gap .25s ease;
    }

    .service-link:hover {
      gap: 13px;
    }


    /* NETWORK */

    .network-section {
      padding: 0 0 110px;
      background: #f7fbfa;
    }

    .network-card {
      position: relative;

      min-height: 570px;

      display: grid;
      grid-template-columns: 1fr .8fr;
      align-items: center;

      gap: 50px;

      padding: 65px;

      overflow: hidden;

      border-radius: 32px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #0b4e4a,
          #087d76
        );

      box-shadow:
        0 30px 80px
        rgba(7,96,90,.20);
    }

    .network-content {
      position: relative;
      z-index: 2;
    }

    .light {
      color: #8ee0d8;
    }

    .network-content h2 {
      margin: 17px 0;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.7rem, 4vw, 4.5rem);
      line-height: 1.04;
      letter-spacing: -.055em;
    }

    .network-content h2 span {
      color: #8ee0d8;
    }

    .network-content > p {
      max-width: 540px;

      color: rgba(255,255,255,.70);

      font-size: 15px;
      line-height: 1.8;
    }

    .network-points {
      display: grid;
      gap: 13px;
      margin: 30px 0;
    }

    .network-points div {
      display: flex;
      align-items: center;
      gap: 12px;

      color: rgba(255,255,255,.82);

      font-size: 12px;
      font-weight: 700;
    }

    .network-points i {
      width: 34px;
      height: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 10px;

      color: #8ee0d8;
      background: rgba(255,255,255,.09);
    }

    .network-btn {
      color: #0b625c;
      background: white;
    }


    /* MAP */

    .network-visual {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .map-globe {
      position: relative;

      width: min(370px, 100%);
      aspect-ratio: 1;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background:
        radial-gradient(
          circle,
          rgba(143,229,220,.12),
          transparent 65%
        );

      border:
        1px solid
        rgba(255,255,255,.12);
    }

    .map-ring {
      position: absolute;

      border-radius: 50%;

      border:
        1px solid
        rgba(143,229,220,.16);

      animation:
        ringPulse
        4s
        ease-in-out
        infinite;
    }

    .ring-one {
      width: 40%;
      height: 40%;
    }

    .ring-two {
      width: 64%;
      height: 64%;
      animation-delay: .7s;
    }

    .ring-three {
      width: 88%;
      height: 88%;
      animation-delay: 1.4s;
    }

    .map-center {
      width: 72px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: white;

      background:
        linear-gradient(
          135deg,
          #16afa3,
          #087c75
        );

      box-shadow:
        0 15px 40px
        rgba(0,0,0,.20);

      font-size: 27px;

      z-index: 3;
    }

    .map-pin {
      position: absolute;

      width: 34px;
      height: 34px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      color: #8ee0d8;
      background: rgba(255,255,255,.09);

      font-size: 13px;

      animation:
        floating
        4s
        ease-in-out
        infinite;
    }

    .pin-one {
      top: 15%;
      left: 28%;
    }

    .pin-two {
      top: 29%;
      right: 14%;
      animation-delay: .8s;
    }

    .pin-three {
      bottom: 18%;
      left: 17%;
      animation-delay: 1.5s;
    }

    .pin-four {
      bottom: 24%;
      right: 25%;
      animation-delay: 2.2s;
    }


    /* CTA */

    .cta-section {
      padding: 0 0 100px;
      background: #f7fbfa;
    }

    .cta-card {
      position: relative;

      overflow: hidden;

      padding: 80px 30px;

      text-align: center;

      border-radius: 30px;

      background: #e8f7f5;

      border:
        1px solid
        rgba(13,125,118,.08);
    }

    .cta-card > *:not(.cta-glow) {
      position: relative;
      z-index: 2;
    }

    .cta-card h2 {
      max-width: 720px;

      margin: 17px auto;

      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(2.3rem, 4vw, 4rem);
      line-height: 1.08;
      letter-spacing: -.055em;
    }

    .cta-card h2 span {
      color: #0b958b;
    }

    .cta-card p {
      margin: 0 0 30px;

      color: #718a87;
      font-size: 14px;
    }

    .cta-glow {
      position: absolute;

      width: 300px;
      height: 300px;

      left: 50%;
      top: 50%;

      transform: translate(-50%, -50%);

      border-radius: 50%;

      background:
        rgba(25,175,163,.08);

      filter: blur(40px);
    }


    /* ANIMATIONS */

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes visualIn {
      from {
        opacity: 0;
        transform: translateX(30px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes cardFloat {
      0%, 100% {
        transform: rotate(2deg) translateY(0);
      }

      50% {
        transform: rotate(2deg) translateY(-10px);
      }
    }

    @keyframes floating {
      0%, 100% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-8px);
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
        background-position: 0% 50%;
      }

      100% {
        background-position: 200% 50%;
      }
    }

    @keyframes ringPulse {
      0%, 100% {
        transform: scale(1);
        opacity: .6;
      }

      50% {
        transform: scale(1.04);
        opacity: 1;
      }
    }


    /* TABLET */

    @media (max-width: 950px) {

      .hero-container {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-visual {
        min-height: 420px;
      }

      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .network-card {
        grid-template-columns: 1fr;
        padding: 55px;
      }

      .network-visual {
        min-height: 330px;
      }
    }


    /* MOBILE */

    @media (max-width: 700px) {

      .container {
        width: calc(100% - 32px);
      }

      .services-hero {
        min-height: auto;
        padding: 75px 0;
      }

      .hero-content h1 {
        font-size: 3.15rem;
      }

      .hero-content p {
        font-size: 15px;
      }

      .hero-actions {
        flex-direction: column;
      }

      .primary-btn,
      .secondary-btn {
        width: 100%;
      }

      .hero-visual {
        min-height: 390px;
      }

      .visual-card {
        width: 100%;
        transform: none;
      }

      .floating-one {
        left: -5px;
        top: 55px;
      }

      .floating-two {
        right: -5px;
        bottom: 45px;
      }

      .services-section {
        padding: 75px 0;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-card {
        min-height: 300px;
      }

      .network-card {
        padding: 40px 25px;
        border-radius: 25px;
      }

      .network-content h2 {
        font-size: 2.7rem;
      }

      .network-visual {
        min-height: 290px;
      }

      .map-globe {
        width: 285px;
      }

      .cta-card {
        padding: 60px 22px;
      }
    }


    @media (max-width: 400px) {

      .hero-content h1 {
        font-size: 2.7rem;
      }

      .floating-card {
        transform: scale(.85);
      }

      .floating-one {
        left: -20px;
      }

      .floating-two {
        right: -20px;
      }
    }
    /* =========================================================
   FIX: PREVENT GRADIENT TEXT DESCENDERS FROM BEING CUT
   ========================================================= */

.hero-content h1,
.hero-content h1 span {
  overflow: visible !important;
}

.hero-content h1 {
  line-height: 1.12 !important;
  padding-bottom: 0.12em !important;
}

.hero-content h1 span {
  padding-bottom: 0.08em !important;
  overflow: visible !important;
}


/* =========================
   MOBILE
   ========================= */

@media (max-width: 700px) {

  .hero-content h1 {
    font-size: 3.1rem !important;
    line-height: 1.08 !important;
    padding-bottom: 0.20em !important;
    overflow: visible !important;
  }

  .hero-content h1 span {
    padding-bottom: 0.10em !important;
    overflow: visible !important;
  }
}


/* =========================
   VERY SMALL SCREENS
   ========================= */

@media (max-width: 400px) {

  .hero-content h1 {
    font-size: 2.7rem !important;
    line-height: 1.08 !important;
    padding-bottom: 0.22em !important;
    overflow: visible !important;
  }

  .hero-content h1 span {
    padding-bottom: 0.12em !important;
  }
}

    

  `]
})
export class ServicesComponent {}