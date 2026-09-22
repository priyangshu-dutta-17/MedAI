import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],

  template: `
    <app-navbar></app-navbar>

    <main class="contact-page">

      <!-- =====================================================
           HERO
           ===================================================== -->

      <section class="contact-hero">

        <div class="hero-glow glow-one"></div>
        <div class="hero-glow glow-two"></div>

        <div class="container">

          <div class="hero-content">

            <div class="eyebrow">
              <span class="pulse-dot"></span>
              CONTACT MEDAI
            </div>

            <h1>
              Help is closer
              <span>than you think.</span>
            </h1>

            <p>
              Find important emergency contacts, healthcare support
              information and administrative resources for West Bengal.
            </p>

          </div>

        </div>

      </section>


      <!-- =====================================================
           EMERGENCY SECTION
           ===================================================== -->

      <section class="emergency-section">

        <div class="container">

          <div class="section-heading">

            <div class="eyebrow emergency-label">
              EMERGENCY SUPPORT
            </div>

            <h2>
              When every
              <span>second matters.</span>
            </h2>

            <p>
              If you are facing a medical emergency, contact the
              appropriate emergency service immediately.
            </p>

          </div>


          <div class="emergency-grid">

            <!-- NATIONAL EMERGENCY -->

            <a
              href="tel:112"
              class="emergency-card emergency-primary"
            >

              <div class="emergency-top">

                <div class="emergency-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>

                <span class="emergency-tag">
                  NATIONAL
                </span>

              </div>

              <div class="emergency-number">
                112
              </div>

              <h3>
                National Emergency
              </h3>

              <p>
                Emergency assistance for police, fire and medical
                emergencies.
              </p>

              <div class="call-action">
                Call now
                <i class="fa-solid fa-arrow-right"></i>
              </div>

            </a>


            <!-- AMBULANCE -->

            <a
              href="tel:108"
              class="emergency-card"
            >

              <div class="emergency-top">

                <div class="emergency-icon ambulance-icon">
                  <i class="fa-solid fa-truck-medical"></i>
                </div>

                <span class="emergency-tag">
                  AMBULANCE
                </span>

              </div>

              <div class="emergency-number">
                108
              </div>

              <h3>
                Ambulance Helpline
              </h3>

              <p>
                Emergency ambulance services for urgent medical
                transportation.
              </p>

              <div class="secondary-number">
                Also available: <strong>102</strong>
              </div>

              <div class="call-action">
                Call now
                <i class="fa-solid fa-arrow-right"></i>
              </div>

            </a>


            <!-- SWASTHYA BHAWAN -->

            <a
              href="tel:1800313444222"
              class="emergency-card"
            >

              <div class="emergency-top">

                <div class="emergency-icon support-icon">
                  <i class="fa-solid fa-headset"></i>
                </div>

                <span class="emergency-tag">
                  HEALTH SUPPORT
                </span>

              </div>

              <div class="emergency-number long-number">
                1800 313 444 222
              </div>

              <h3>
                Swasthya Bhawan Helpline
              </h3>

              <p>
                State healthcare support and assistance for West Bengal.
              </p>

              <div class="call-action">
                Call now
                <i class="fa-solid fa-arrow-right"></i>
              </div>

            </a>

          </div>

        </div>

      </section>


      <!-- =====================================================
           IMPORTANT NOTICE
           ===================================================== -->

      <section class="notice-section">

        <div class="container">

          <div class="notice-card">

            <div class="notice-icon">
              <i class="fa-solid fa-circle-info"></i>
            </div>

            <div class="notice-content">

              <span class="notice-label">
                IMPORTANT
              </span>

              <h3>
                For medical emergencies, seek immediate professional help.
              </h3>

              <p>
                MedAI provides digital healthcare assistance and
                information. It is not a replacement for emergency
                medical services or professional medical advice.
              </p>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           ADMINISTRATIVE CENTER
           ===================================================== -->

      <section class="admin-section">

        <div class="container">

          <div class="admin-layout">

            <div class="admin-intro">

              <div class="eyebrow">
                ADMINISTRATIVE CENTER
              </div>

              <h2>
                West Bengal
                <span>Health Administration.</span>
              </h2>

              <p>
                Official administrative information for the Department
                of Health & Family Welfare, Government of West Bengal.
              </p>

            </div>


            <div class="admin-card">

              <div class="admin-card-header">

                <div class="admin-icon">
                  <i class="fa-solid fa-building-columns"></i>
                </div>

                <div>

                  <span>
                    GOVERNMENT OF WEST BENGAL
                  </span>

                  <h3>
                    Department of Health
                    & Family Welfare
                  </h3>

                </div>

              </div>


              <div class="admin-divider"></div>


              <div class="address-row">

                <div class="address-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <div>

                  <span class="address-label">
                    ADDRESS
                  </span>

                  <p>
                    Swasthya Bhawan,<br>
                    GN-29, Sector-V,<br>
                    Salt Lake, Kolkata - 700091
                  </p>

                </div>

              </div>


              <div class="admin-divider"></div>


              <div class="project-row">

                <div class="project-icon">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>

                <div>

                  <span class="address-label">
                    PROJECT
                  </span>

                  <p>
                    MCA Minor Project Evaluation 2026
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           CONTACT CTA
           ===================================================== -->

      <section class="contact-cta">

        <div class="container">

          <div class="cta-card">

            <div class="cta-glow"></div>

            <div class="cta-icon">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div class="eyebrow">
              MEDAI HEALTHCARE PLATFORM
            </div>

            <h2>
              Your health.
              <span>Our priority.</span>
            </h2>

            <p>
              Explore MedAI and discover a smarter, more connected
              healthcare experience.
            </p>

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

    .contact-page {
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

    .contact-hero {
      position: relative;

      overflow: hidden;

      padding: 105px 0 85px;

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

      max-width: 820px;

      animation:
        fadeUp .8s ease both;
    }

    .eyebrow {
      display: inline-flex;

      align-items: center;

      gap: 9px;

      color: #087d76;

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
        0 0 0 6px
        rgba(20,170,159,.10);

      animation:
        pulse 2s infinite;
    }

    .hero-content h1 {
      margin: 20px 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          3.2rem,
          6vw,
          5.5rem
        );

      line-height: 1.08;

      letter-spacing: -.065em;

      font-weight: 800;
    }

    .hero-content h1 span {
      display: block;

      padding-bottom: .08em;

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
        gradientMove 5s linear infinite;
    }

    .hero-content p {
      max-width: 650px;

      color: #718b88;

      font-size: 16px;

      line-height: 1.85;
    }


    /* =====================================================
       EMERGENCY
       ===================================================== */

    .emergency-section {
      padding: 105px 0;

      background: white;
    }

    .section-heading {
      max-width: 680px;

      margin-bottom: 50px;
    }

    .emergency-label {
      color: #d0525d;
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

    .emergency-grid {
      display: grid;

      grid-template-columns:
        repeat(3, 1fr);

      gap: 18px;
    }

    .emergency-card {
      position: relative;

      min-height: 360px;

      padding: 30px;

      overflow: hidden;

      border:
        1px solid
        rgba(10,125,118,.08);

      border-radius: 23px;

      color: #153b39;

      background: #ffffff;

      text-decoration: none;

      box-shadow:
        0 15px 45px
        rgba(20,90,85,.055);

      transition:
        transform .4s ease,
        box-shadow .4s ease;
    }

    .emergency-card:hover {
      transform:
        translateY(-8px);

      box-shadow:
        0 25px 60px
        rgba(20,90,85,.11);
    }

    .emergency-primary {
      color: white;

      background:
        linear-gradient(
          145deg,
          #0b5a54,
          #087d76
        );

      box-shadow:
        0 20px 55px
        rgba(8,125,118,.16);
    }

    .emergency-top {
      display: flex;

      align-items: center;

      justify-content: space-between;
    }

    .emergency-icon {
      width: 54px;
      height: 54px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 15px;

      color: #087d76;

      background: #e3f6f3;

      font-size: 19px;
    }

    .emergency-primary .emergency-icon {
      color: white;

      background:
        rgba(255,255,255,.12);
    }

    .ambulance-icon {
      color: #d35b66;

      background: #fbe9eb;
    }

    .support-icon {
      color: #7059b7;

      background: #eeeafb;
    }

    .emergency-tag {
      color: #91a9a5;

      font-size: 8px;

      font-weight: 800;

      letter-spacing: .13em;
    }

    .emergency-primary .emergency-tag {
      color:
        rgba(255,255,255,.55);
    }

    .emergency-number {
      margin-top: 45px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 48px;

      line-height: 1;

      font-weight: 800;

      letter-spacing: -.05em;
    }

    .long-number {
      font-size: 28px;

      letter-spacing: -.035em;
    }

    .emergency-card h3 {
      margin: 14px 0 10px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 18px;

      letter-spacing: -.025em;
    }

    .emergency-card p {
      max-width: 340px;

      margin: 0;

      color: #78918e;

      font-size: 11px;

      line-height: 1.75;
    }

    .emergency-primary p {
      color:
        rgba(255,255,255,.65);
    }

    .secondary-number {
      margin-top: 12px;

      color: #94aaa7;

      font-size: 10px;
    }

    .secondary-number strong {
      color: #087d76;
    }

    .call-action {
      position: absolute;

      left: 30px;
      bottom: 27px;

      display: flex;

      align-items: center;

      gap: 9px;

      color: #087d76;

      font-size: 10px;

      font-weight: 800;
    }

    .emergency-primary .call-action {
      color: #8ee0d8;
    }

    .call-action i {
      transition:
        transform .3s ease;
    }

    .emergency-card:hover .call-action i {
      transform:
        translateX(4px);
    }


    /* =====================================================
       NOTICE
       ===================================================== */

    .notice-section {
      padding: 0 0 100px;

      background: white;
    }

    .notice-card {
      display: flex;

      align-items: flex-start;

      gap: 22px;

      padding: 28px;

      border:
        1px solid
        rgba(209,123,59,.12);

      border-radius: 20px;

      background: #fffaf4;
    }

    .notice-icon {
      flex: 0 0 auto;

      width: 45px;
      height: 45px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 13px;

      color: #c57636;

      background: #faeadb;
    }

    .notice-label {
      display: block;

      margin-bottom: 6px;

      color: #bd7338;

      font-size: 9px;

      font-weight: 800;

      letter-spacing: .12em;
    }

    .notice-content h3 {
      margin: 0 0 7px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 15px;
    }

    .notice-content p {
      margin: 0;

      color: #897b6e;

      font-size: 11px;

      line-height: 1.7;
    }


    /* =====================================================
       ADMIN
       ===================================================== */

    .admin-section {
      padding: 105px 0;

      background: #f7fbfa;
    }

    .admin-layout {
      display: grid;

      grid-template-columns:
        .85fr 1.15fr;

      gap: 80px;

      align-items: center;
    }

    .admin-intro h2 {
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

    .admin-intro h2 span {
      display: block;

      color: #0a948a;
    }

    .admin-intro p {
      max-width: 450px;

      color: #718b88;

      font-size: 13px;

      line-height: 1.8;
    }

    .admin-card {
      padding: 35px;

      border:
        1px solid
        rgba(10,125,118,.08);

      border-radius: 24px;

      background: white;

      box-shadow:
        0 20px 60px
        rgba(20,90,85,.07);
    }

    .admin-card-header {
      display: flex;

      align-items: center;

      gap: 18px;
    }

    .admin-icon {
      width: 58px;
      height: 58px;

      display: flex;

      align-items: center;
      justify-content: center;

      flex: 0 0 auto;

      border-radius: 15px;

      color: #087d76;

      background: #e2f5f2;

      font-size: 21px;
    }

    .admin-card-header > div:last-child > span {
      color: #92a8a5;

      font-size: 8px;

      font-weight: 800;

      letter-spacing: .13em;
    }

    .admin-card-header h3 {
      margin: 7px 0 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 17px;

      line-height: 1.35;
    }

    .admin-divider {
      height: 1px;

      margin: 27px 0;

      background:
        rgba(10,125,118,.08);
    }

    .address-row,
    .project-row {
      display: flex;

      gap: 16px;
    }

    .address-icon,
    .project-icon {
      width: 38px;
      height: 38px;

      display: flex;

      align-items: center;
      justify-content: center;

      flex: 0 0 auto;

      border-radius: 10px;

      color: #087d76;

      background: #eef8f6;

      font-size: 12px;
    }

    .address-label {
      display: block;

      margin-bottom: 5px;

      color: #9aafac;

      font-size: 8px;

      font-weight: 800;

      letter-spacing: .12em;
    }

    .address-row p,
    .project-row p {
      margin: 0;

      color: #627c78;

      font-size: 11px;

      line-height: 1.75;
    }


    /* =====================================================
       CTA
       ===================================================== */

    .contact-cta {
      padding: 0 0 110px;

      background: #f7fbfa;
    }

    .cta-card {
      position: relative;

      overflow: hidden;

      padding: 75px 25px;

      text-align: center;

      border-radius: 30px;

      background:
        linear-gradient(
          135deg,
          #e5f7f4,
          #f4fbfa
        );
    }

    .cta-icon {
      width: 55px;
      height: 55px;

      display: flex;

      align-items: center;
      justify-content: center;

      margin: 0 auto 20px;

      border-radius: 16px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa3
        );

      box-shadow:
        0 15px 30px
        rgba(8,125,118,.18);
    }

    .cta-card > *:not(.cta-glow) {
      position: relative;

      z-index: 2;
    }

    .cta-card h2 {
      margin: 17px auto;

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

    .cta-card h2 span {
      color: #0a948a;
    }

    .cta-card p {
      margin: 0 auto;

      max-width: 560px;

      color: #718b88;

      font-size: 13px;

      line-height: 1.8;
    }

    .cta-glow {
      position: absolute;

      width: 330px;
      height: 330px;

      left: 50%;
      top: 50%;

      transform:
        translate(-50%, -50%);

      border-radius: 50%;

      background:
        rgba(25,175,163,.08);

      filter: blur(55px);
    }


    /* =====================================================
       BACKGROUND
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
      top: 30px;

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


    /* =====================================================
       TABLET
       ===================================================== */

    @media (max-width: 1000px) {

      .emergency-grid {
        grid-template-columns:
          repeat(2, 1fr);
      }

      .admin-layout {
        gap: 45px;
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

      .contact-hero {
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
      }

      .hero-content h1 span {
        padding-bottom:
          .10em !important;
      }

      .emergency-section,
      .admin-section {
        padding:
          75px 0;
      }

      .section-heading h2,
      .admin-intro h2 {
        font-size: 2.6rem;
      }

      .emergency-grid {
        grid-template-columns: 1fr;
      }

      .emergency-card {
        min-height: 340px;
      }

      .notice-section {
        padding-bottom: 75px;
      }

      .notice-card {
        flex-direction: column;
      }

      .admin-layout {
        grid-template-columns: 1fr;

        gap: 45px;
      }

      .admin-card {
        padding: 25px;
      }

      .contact-cta {
        padding-bottom: 75px;
      }

      .cta-card {
        padding:
          60px 20px;
      }

      .cta-card h2 {
        font-size:
          2.6rem;
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

      .section-heading h2,
      .admin-intro h2,
      .cta-card h2 {
        font-size:
          2.35rem;
      }

      .emergency-number {
        font-size: 43px;
      }

      .long-number {
        font-size: 25px;
      }

    }

  `]
})
export class ContactComponent {}