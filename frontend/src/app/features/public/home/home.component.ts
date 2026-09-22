import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],

  template: `

    <app-navbar></app-navbar>

    <!-- =====================================================
         HERO SECTION
    ====================================================== -->

    <main>

      <section class="hero">

        <!-- Background -->

        <div class="hero-orb orb-one"></div>
        <div class="hero-orb orb-two"></div>
        <div class="hero-orb orb-three"></div>

        <div class="hero-grid"></div>

        <div class="container hero-container">

          <!-- ================= LEFT ================= -->

          <div class="hero-content">

            <div class="hero-eyebrow">

              <span class="status-dot"></span>

              <span>
                WEST BENGAL'S INTELLIGENT HEALTHCARE NETWORK
              </span>

            </div>


            <h1>

              Healthcare,

              <span class="gradient-text">
                reimagined
              </span>

              with AI.

            </h1>


            <p class="hero-description">

              One intelligent platform connecting patients,
              doctors, diagnostics and healthcare facilities
              across all 23 districts of West Bengal.

            </p>


            <div class="hero-actions">

              <a
                routerLink="/patient/disease-prediction"
                class="primary-action">

                <span>
                  Explore AI Healthcare
                </span>

                <i class="fa-solid fa-arrow-right"></i>

              </a>


              <a
                routerLink="/patient/healthcare-locator"
                class="secondary-action">

                <i class="fa-solid fa-location-dot"></i>

                Find Healthcare

              </a>

            </div>


            <!-- TRUST -->

            <div class="hero-trust">

              <div class="trust-icons">

                <span>
                  <i class="fa-solid fa-user-doctor"></i>
                </span>

                <span>
                  <i class="fa-solid fa-brain"></i>
                </span>

                <span>
                  <i class="fa-solid fa-hospital"></i>
                </span>

              </div>

              <div>

                <strong>
                  Intelligent healthcare,
                  connected.
                </strong>

                <small>
                  Built for West Bengal
                </small>

              </div>

            </div>

          </div>


          <!-- ================= RIGHT VISUAL ================= -->

          <div class="hero-visual">


            <!-- Floating prediction card -->

            <div class="floating-card prediction-card">

              <div class="floating-icon purple">

                <i class="fa-solid fa-brain"></i>

              </div>

              <div>

                <small>
                  AI ANALYSIS
                </small>

                <strong>
                  Prediction Ready
                </strong>

                <span>
                  94.2% confidence
                </span>

              </div>

            </div>


            <!-- Main AI visual -->

            <div class="ai-stage">

              <div class="stage-ring ring-one"></div>

              <div class="stage-ring ring-two"></div>

              <div class="stage-ring ring-three"></div>


              <!-- Central sphere -->

              <div class="ai-core">

                <div class="core-inner">

                  <i class="fa-solid fa-heart-pulse"></i>

                </div>

              </div>


              <!-- Orbit points -->

              <div class="orbit-point orbit-one">

                <i class="fa-solid fa-dna"></i>

              </div>

              <div class="orbit-point orbit-two">

                <i class="fa-solid fa-microscope"></i>

              </div>

              <div class="orbit-point orbit-three">

                <i class="fa-solid fa-chart-line"></i>

              </div>


              <!-- Connecting lines -->

              <div class="connection connection-one"></div>

              <div class="connection connection-two"></div>

              <div class="connection connection-three"></div>


              <!-- Central label -->

              <div class="ai-label">

                <span class="mini-dot"></span>

                <span>
                  MEDAI INTELLIGENCE
                </span>

              </div>

            </div>


            <!-- Floating location card -->

            <div class="floating-card location-card">

              <div class="floating-icon teal">

                <i class="fa-solid fa-location-dot"></i>

              </div>

              <div>

                <small>
                  HEALTHCARE NETWORK
                </small>

                <strong>
                  23 Districts Connected
                </strong>

                <span>
                  West Bengal
                </span>

              </div>

            </div>


            <!-- Small live card -->

            <div class="live-card">

              <span class="live-pulse"></span>

              <span>
                AI SYSTEM ACTIVE
              </span>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           STATS
      ====================================================== -->

      <section class="stats-section">

        <div class="container stats-grid">


          <div class="stat">

            <strong>
              23
            </strong>

            <span>
              West Bengal Districts
            </span>

          </div>


          <div class="stat">

            <strong>
              5<span>+</span>
            </strong>

            <span>
              AI / ML Models
            </span>

          </div>


          <div class="stat">

            <strong>
              24<span>/7</span>
            </strong>

            <span>
              AI Assistant
            </span>

          </div>


          <div class="stat">

            <strong>
              1
            </strong>

            <span>
              Connected Platform
            </span>

          </div>

        </div>

      </section>


      <!-- =====================================================
           FEATURES
      ====================================================== -->

      <section class="features-section">

        <div class="container">


          <div class="section-heading">

            <div class="section-label">
              INTELLIGENT HEALTHCARE
            </div>

            <h2>

              Everything you need,

              <span>
                in one place.
              </span>

            </h2>

            <p>

              From early risk detection to finding
              the right healthcare facility, MEDAI
              brings your healthcare journey together.

            </p>

          </div>


          <div class="feature-grid">


            <!-- DISEASE PREDICTION -->

            <a
              routerLink="/patient/disease-prediction"
              class="feature-card feature-large">

              <div class="feature-top">

                <div class="feature-icon purple">

                  <i class="fa-solid fa-virus"></i>

                </div>

                <span class="feature-arrow">
                  ↗
                </span>

              </div>


              <span class="feature-number">
                01
              </span>


              <h3>
                Disease Prediction
              </h3>


              <p>

                Analyze symptoms using intelligent
                machine learning models to estimate
                potential health conditions.

              </p>


              <div class="feature-footer">

                <span>
                  Explore model
                </span>

                <i class="fa-solid fa-arrow-right"></i>

              </div>

            </a>


            <!-- DIABETES -->

            <a
              routerLink="/patient/diabetes-risk"
              class="feature-card">

              <div class="feature-top">

                <div class="feature-icon orange">

                  <i class="fa-solid fa-droplet"></i>

                </div>

                <span class="feature-arrow">
                  ↗
                </span>

              </div>


              <span class="feature-number">
                02
              </span>


              <h3>
                Diabetes Risk
              </h3>


              <p>

                Evaluate diabetes risk using
                important clinical indicators
                such as glucose, BMI and insulin.

              </p>


              <div class="feature-footer">

                <span>
                  Evaluate risk
                </span>

                <i class="fa-solid fa-arrow-right"></i>

              </div>

            </a>


            <!-- HEART -->

            <a
              routerLink="/patient/heart-risk"
              class="feature-card">

              <div class="feature-top">

                <div class="feature-icon red">

                  <i class="fa-solid fa-heart-pulse"></i>

                </div>

                <span class="feature-arrow">
                  ↗
                </span>

              </div>


              <span class="feature-number">
                03
              </span>


              <h3>
                Heart Risk
              </h3>


              <p>

                Understand cardiovascular risk
                through intelligent analysis of
                important health parameters.

              </p>


              <div class="feature-footer">

                <span>
                  Check heart health
                </span>

                <i class="fa-solid fa-arrow-right"></i>

              </div>

            </a>


            <!-- AI ASSISTANT -->

            <a
              routerLink="/patient/ai-assistant"
              class="feature-card feature-ai">

              <div class="ai-card-pattern"></div>

              <div class="feature-top">

                <div class="feature-icon green">

                  <i class="fa-solid fa-robot"></i>

                </div>

                <span class="feature-arrow">
                  ↗
                </span>

              </div>


              <span class="feature-number">
                04
              </span>


              <h3>
                AI Medical Assistant
              </h3>


              <p>

                Ask questions, understand medical
                terminology and explore your health
                information with AI assistance.

              </p>


              <div class="feature-footer">

                <span>
                  Talk to MEDAI
                </span>

                <i class="fa-solid fa-arrow-right"></i>

              </div>

            </a>


          </div>

        </div>

      </section>


      <!-- =====================================================
           WEST BENGAL NETWORK
      ====================================================== -->

      <section class="network-section">

        <div class="network-glow"></div>

        <div class="container network-container">


          <div class="network-content">

            <div class="section-label light">
              CONNECTED HEALTHCARE
            </div>


            <h2>

              Healthcare,

              <span>
                closer to you.
              </span>

            </h2>


            <p>

              Discover hospitals, clinics,
              diagnostic centres, pharmacies
              and verified healthcare providers
              across every district of West Bengal.

            </p>


            <div class="network-stats">

              <div>

                <strong>
                  23
                </strong>

                <span>
                  Districts
                </span>

              </div>


              <div>

                <strong>
                  24/7
                </strong>

                <span>
                  Healthcare
                </span>

              </div>


              <div>

                <strong>
                  GIS
                </strong>

                <span>
                  Location
                </span>

              </div>

            </div>


            <a
              routerLink="/patient/healthcare-locator"
              class="network-button">

              Explore West Bengal Map

              <i class="fa-solid fa-arrow-right"></i>

            </a>

          </div>


          <!-- MAP VISUAL -->

          <div class="network-map">

            <div class="map-grid"></div>

            <div class="map-glow"></div>


            <!-- Network lines -->

            <div class="map-line line-one"></div>
            <div class="map-line line-two"></div>
            <div class="map-line line-three"></div>
            <div class="map-line line-four"></div>


            <!-- Locations -->

            <div class="map-point point-one">
              <span></span>
            </div>

            <div class="map-point point-two">
              <span></span>
            </div>

            <div class="map-point point-three">
              <span></span>
            </div>

            <div class="map-point point-four">
              <span></span>
            </div>

            <div class="map-point point-five">
              <span></span>
            </div>


            <div class="map-label">

              <i class="fa-solid fa-location-dot"></i>

              West Bengal

            </div>


            <div class="map-info">

              <i class="fa-solid fa-hospital"></i>

              <div>

                <small>
                  HEALTHCARE NETWORK
                </small>

                <strong>
                  Connected across WB
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           CTA
      ====================================================== -->

      <section class="cta-section">

        <div class="container">

          <div class="cta-card">


            <div class="cta-decoration decoration-one"></div>
            <div class="cta-decoration decoration-two"></div>


            <div class="cta-content">

              <div class="section-label">
                YOUR HEALTH. YOUR DATA. YOUR FUTURE.
              </div>


              <h2>

                Healthcare that

                <span>
                  thinks ahead.
                </span>

              </h2>


              <p>

                Explore intelligent healthcare tools
                designed to help you understand your
                health and make informed decisions.

              </p>

            </div>


            <a
              routerLink="/register"
              class="cta-button">

              Get Started

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
       GLOBAL
    ===================================================== */

    :host {

      display: block;

      overflow: hidden;

      color: #173838;

      background: #ffffff;

    }


    .container {

      width:
        min(1180px, calc(100% - 40px));

      margin:
        0 auto;

    }


    /* =====================================================
       HERO
    ===================================================== */

    .hero {

      position: relative;

      min-height:
        calc(100vh - 76px);

      display: flex;

      align-items: center;

      overflow: hidden;

      background:
        linear-gradient(
          135deg,
          #f7fcfb 0%,
          #f1faf8 48%,
          #f7fbff 100%
        );

    }


    .hero-grid {

      position: absolute;

      inset: 0;

      opacity: .45;

      background-image:
        linear-gradient(
          rgba(15, 118, 110, .055) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(15, 118, 110, .055) 1px,
          transparent 1px
        );

      background-size:
        52px 52px;

      mask-image:
        linear-gradient(
          to bottom,
          black,
          transparent 85%
        );

    }


    .hero-orb {

      position: absolute;

      border-radius: 50%;

      filter:
        blur(1px);

      pointer-events: none;

    }


    .orb-one {

      width: 480px;

      height: 480px;

      top: -240px;

      right: -100px;

      background:
        radial-gradient(
          circle,
          rgba(20,184,166,.16),
          transparent 68%
        );

      animation:
        floatOrb 9s ease-in-out infinite;

    }


    .orb-two {

      width: 360px;

      height: 360px;

      left: -180px;

      bottom: -160px;

      background:
        radial-gradient(
          circle,
          rgba(99,102,241,.10),
          transparent 68%
        );

      animation:
        floatOrb 11s ease-in-out infinite reverse;

    }


    .orb-three {

      width: 220px;

      height: 220px;

      top: 38%;

      left: 43%;

      background:
        radial-gradient(
          circle,
          rgba(45,212,191,.08),
          transparent 70%
        );

      animation:
        floatOrb 7s ease-in-out infinite;

    }


    .hero-container {

      position: relative;

      z-index: 2;

      display: grid;

      grid-template-columns:
        1.02fr .98fr;

      align-items: center;

      gap: 70px;

      padding:
        90px 0 100px;

    }


    /* =====================================================
       HERO CONTENT
    ===================================================== */

    .hero-content {

      animation:
        heroIn .8s
        cubic-bezier(.22,1,.36,1)
        both;

    }


    .hero-eyebrow {

      display: inline-flex;

      align-items: center;

      gap: 9px;

      padding:
        8px 13px;

      border:
        1px solid
        rgba(15,118,110,.13);

      border-radius:
        100px;

      color:
        #0f766e;

      background:
        rgba(255,255,255,.68);

      box-shadow:
        0 8px 24px
        rgba(15,118,110,.05);

      font-size: 11px;

      font-weight: 800;

      letter-spacing:
        .08em;

    }


    .status-dot {

      width: 7px;

      height: 7px;

      border-radius: 50%;

      background: #14b8a6;

      box-shadow:
        0 0 0 5px
        rgba(20,184,166,.10);

      animation:
        pulse 2s infinite;

    }

    .hero h1 {

  max-width:
    680px;

  margin:
    27px 0 20px;

  padding-bottom:
    0.12em;

  color:
    #163c3a;

  font-family:
    'Plus Jakarta Sans',
    sans-serif;

  font-size:
    clamp(3.7rem, 6vw, 5.7rem);

  font-weight:
    800;

  /* FIX: prevents the "g" from being cut */
  line-height:
    1.05;

  letter-spacing:
    -.065em;

  overflow:
    visible;

}


    .gradient-text {

      display: inline-block;

      background:
        linear-gradient(
          110deg,
          #0f766e,
          #14b8a6,
          #2dd4bf
        );

      -webkit-background-clip:
        text;

      background-clip:
        text;

      color: transparent;

      background-size:
        200% auto;

      animation:
        gradientMove 5s
        ease-in-out infinite;

    }


    .hero-description {

      max-width:
        610px;

      margin: 0;

      color:
        #617a79;

      font-size:
        17px;

      line-height:
        1.8;

    }


    /* =====================================================
       HERO ACTIONS
    ===================================================== */

    .hero-actions {

      display: flex;

      flex-wrap: wrap;

      align-items: center;

      gap: 12px;

      margin-top: 32px;

    }


    .primary-action,
    .secondary-action {

      min-height: 50px;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      gap: 11px;

      padding:
        0 20px;

      border-radius:
        12px;

      font-size: 14px;

      font-weight: 700;

      text-decoration: none;

      transition:
        transform .3s ease,
        box-shadow .3s ease,
        background .3s ease;

    }


    .primary-action {

      color: white;

      background:
        linear-gradient(
          135deg,
          #0f766e,
          #14b8a6
        );

      box-shadow:
        0 12px 30px
        rgba(15,118,110,.20);

    }


    .primary-action:hover {

      transform:
        translateY(-3px);

      box-shadow:
        0 17px 35px
        rgba(15,118,110,.28);

    }


    .primary-action i {

      transition:
        transform .3s ease;

    }


    .primary-action:hover i {

      transform:
        translateX(4px);

    }


    .secondary-action {

      color:
        #315957;

      border:
        1px solid
        #d5e6e3;

      background:
        rgba(255,255,255,.72);

    }


    .secondary-action:hover {

      transform:
        translateY(-3px);

      background:
        #ffffff;

      box-shadow:
        0 10px 25px
        rgba(15,118,110,.08);

    }


    .secondary-action i {

      color:
        #0f766e;

    }


    /* =====================================================
       TRUST
    ===================================================== */

    .hero-trust {

      display: flex;

      align-items: center;

      gap: 14px;

      margin-top: 35px;

    }


    .trust-icons {

      display: flex;

      padding-left: 4px;

    }


    .trust-icons span {

      width: 35px;

      height: 35px;

      display: grid;

      place-items: center;

      margin-left: -5px;

      border:
        2px solid
        #f5fbfa;

      border-radius: 50%;

      color:
        #0f766e;

      background:
        #e8f7f4;

      font-size: 12px;

    }


    .trust-icons span:nth-child(2) {

      color:
        #635bce;

      background:
        #efefff;

    }


    .trust-icons span:nth-child(3) {

      color:
        #db6b58;

      background:
        #fff1ed;

    }


    .hero-trust strong {

      display: block;

      color:
        #365755;

      font-size: 12px;

    }


    .hero-trust small {

      display: block;

      margin-top: 3px;

      color:
        #8a9b9a;

      font-size: 11px;

    }


    /* =====================================================
       HERO VISUAL
    ===================================================== */

    .hero-visual {

      position: relative;

      min-height:
        590px;

      display: grid;

      place-items: center;

      animation:
        visualIn 1s
        .15s
        cubic-bezier(.22,1,.36,1)
        both;

    }


    .ai-stage {

      position: relative;

      width: 470px;

      height: 470px;

      display: grid;

      place-items: center;

    }


    .stage-ring {

      position: absolute;

      border:
        1px solid
        rgba(15,118,110,.12);

      border-radius: 50%;

    }


    .ring-one {

      width: 470px;

      height: 470px;

      animation:
        rotateRing 25s
        linear infinite;

    }


    .ring-two {

      width: 365px;

      height: 365px;

      border-style: dashed;

      animation:
        rotateRing 20s
        linear infinite reverse;

    }


    .ring-three {

      width: 270px;

      height: 270px;

      background:
        radial-gradient(
          circle,
          rgba(20,184,166,.10),
          transparent 65%
        );

      box-shadow:
        0 0 90px
        rgba(20,184,166,.10);

      animation:
        breathe 4s ease-in-out infinite;

    }


    .ai-core {

      position: relative;

      width: 180px;

      height: 180px;

      display: grid;

      place-items: center;

      border-radius: 50%;

      background:
        linear-gradient(
          145deg,
          #0f766e,
          #14b8a6
        );

      box-shadow:
        0 25px 70px
        rgba(15,118,110,.27),
        inset 0 0 0 1px
        rgba(255,255,255,.25);

      animation:
        coreFloat 4s ease-in-out infinite;

    }


    .ai-core::before {

      content: '';

      position: absolute;

      inset: -12px;

      border-radius: 50%;

      border:
        1px solid
        rgba(20,184,166,.20);

      animation:
        pulseRing 2.5s
        ease-out infinite;

    }


    .core-inner {

      width: 135px;

      height: 135px;

      display: grid;

      place-items: center;

      border-radius: 50%;

      color: white;

      background:
        radial-gradient(
          circle at 35% 30%,
          rgba(255,255,255,.23),
          rgba(255,255,255,.04)
        );

      border:
        1px solid
        rgba(255,255,255,.22);

      box-shadow:
        inset 0 0 30px
        rgba(255,255,255,.08);

    }


    .core-inner i {

      font-size:
        55px;

      filter:
        drop-shadow(
          0 5px 15px
          rgba(0,0,0,.13)
        );

      animation:
        heartBeat 1.8s
        ease-in-out infinite;

    }


    /* =====================================================
       ORBIT POINTS
    ===================================================== */

    .orbit-point {

      position: absolute;

      width: 54px;

      height: 54px;

      display: grid;

      place-items: center;

      border:
        1px solid
        rgba(255,255,255,.75);

      border-radius: 50%;

      color:
        #0f766e;

      background:
        rgba(255,255,255,.85);

      box-shadow:
        0 12px 28px
        rgba(15,118,110,.11);

      backdrop-filter:
        blur(12px);

      font-size: 16px;

      animation:
        orbitFloat 4s
        ease-in-out infinite;

    }


    .orbit-one {

      top: 65px;

      right: 85px;

    }


    .orbit-two {

      left: 48px;

      top: 215px;

      color:
        #635bce;

      animation-delay:
        -1.3s;

    }


    .orbit-three {

      right: 85px;

      bottom: 72px;

      color:
        #d86a58;

      animation-delay:
        -2.3s;

    }


    /* =====================================================
       CONNECTIONS
    ===================================================== */

    .connection {

      position: absolute;

      width: 125px;

      height: 1px;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(20,184,166,.35),
          transparent
        );

      transform-origin:
        left center;

    }


    .connection-one {

      top: 135px;

      right: 115px;

      transform:
        rotate(125deg);

    }


    .connection-two {

      top: 240px;

      left: 85px;

      transform:
        rotate(-20deg);

    }


    .connection-three {

      right: 115px;

      bottom: 125px;

      transform:
        rotate(-125deg);

    }


    /* =====================================================
       AI LABEL
    ===================================================== */

    .ai-label {

      position: absolute;

      bottom: 30px;

      left: 50%;

      transform:
        translateX(-50%);

      display: flex;

      align-items: center;

      gap: 7px;

      padding:
        8px 13px;

      border:
        1px solid
        rgba(15,118,110,.12);

      border-radius:
        100px;

      color:
        #48706d;

      background:
        rgba(255,255,255,.72);

      box-shadow:
        0 10px 30px
        rgba(15,118,110,.07);

      backdrop-filter:
        blur(10px);

      font-size: 9px;

      font-weight: 800;

      letter-spacing:
        .12em;

    }


    .mini-dot {

      width: 5px;

      height: 5px;

      border-radius: 50%;

      background:
        #14b8a6;

      box-shadow:
        0 0 0 4px
        rgba(20,184,166,.09);

    }


    /* =====================================================
       FLOATING CARDS
    ===================================================== */

    .floating-card {

      position: absolute;

      z-index: 5;

      display: flex;

      align-items: center;

      gap: 11px;

      padding:
        13px 15px;

      border:
        1px solid
        rgba(255,255,255,.8);

      border-radius:
        14px;

      background:
        rgba(255,255,255,.84);

      box-shadow:
        0 18px 45px
        rgba(20,70,68,.11);

      backdrop-filter:
        blur(18px);

      animation:
        cardFloat 5s
        ease-in-out infinite;

    }


    .prediction-card {

      top: 80px;

      left: -5px;

    }


    .location-card {

      right: -5px;

      bottom: 85px;

      animation-delay:
        -2.2s;

    }


    .floating-icon {

      width: 38px;

      height: 38px;

      display: grid;

      place-items: center;

      border-radius: 11px;

      font-size: 14px;

    }


    .floating-icon.purple {

      color:
        #635bce;

      background:
        #efefff;

    }


    .floating-icon.teal {

      color:
        #0f766e;

      background:
        #e7f8f5;

    }


    .floating-card small {

      display: block;

      margin-bottom: 3px;

      color:
        #94a4a3;

      font-size: 8px;

      font-weight: 800;

      letter-spacing:
        .08em;

    }


    .floating-card strong {

      display: block;

      color:
        #294b49;

      font-size: 11px;

    }


    .floating-card span {

      display: block;

      margin-top: 3px;

      color:
        #0f8f85;

      font-size: 9px;

      font-weight: 600;

    }


    /* =====================================================
       LIVE CARD
    ===================================================== */

    .live-card {

      position: absolute;

      top: 25px;

      right: 40px;

      display: flex;

      align-items: center;

      gap: 7px;

      padding:
        7px 11px;

      border-radius:
        100px;

      color:
        #41817c;

      background:
        rgba(231,248,245,.85);

      font-size: 8px;

      font-weight: 800;

      letter-spacing:
        .08em;

    }


    .live-pulse {

      width: 6px;

      height: 6px;

      border-radius: 50%;

      background:
        #14b8a6;

      box-shadow:
        0 0 0 4px
        rgba(20,184,166,.10);

      animation:
        pulse 2s infinite;

    }


    /* =====================================================
       STATS
    ===================================================== */

    .stats-section {

      border-top:
        1px solid #e8f0ef;

      border-bottom:
        1px solid #e8f0ef;

      background:
        #ffffff;

    }


    .stats-grid {

      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

    }


    .stat {

      min-height:
        125px;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 6px;

      border-right:
        1px solid #e8f0ef;

      text-align: center;

    }


    .stat:last-child {

      border-right:
        none;

    }


    .stat strong {

      color:
        #174541;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        30px;

      font-weight: 800;

      letter-spacing:
        -.04em;

    }


    .stat strong span {

      color:
        #14a99d;

      font-size:
        20px;

    }


    .stat > span {

      color:
        #849594;

      font-size:
        11px;

      font-weight: 600;

    }


    /* =====================================================
       FEATURES
    ===================================================== */

    .features-section {

      padding:
        115px 0;

      background:
        #fbfdfd;

    }


    .section-heading {

      max-width:
        650px;

      margin-bottom:
        55px;

    }


    .section-heading h2 {

      margin:
        12px 0 15px;

      color:
        #183f3c;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(2.3rem, 4vw, 3.7rem);

      line-height:
        1.05;

      letter-spacing:
        -.055em;

    }


    .section-heading h2 span {

      color:
        #0f8f85;

    }


    .section-heading p {

      margin: 0;

      color:
        #718584;

      font-size:
        15px;

      line-height:
        1.75;

    }


    .section-label {

      color:
        #0f8f85;

      font-size:
        10px;

      font-weight:
        800;

      letter-spacing:
        .16em;

    }


    .feature-grid {

      display: grid;

      grid-template-columns:
        repeat(2, 1fr);

      gap: 18px;

    }


    .feature-card {

      position: relative;

      min-height:
        330px;

      overflow: hidden;

      display: flex;

      flex-direction: column;

      padding:
        30px;

      border:
        1px solid #e1ecea;

      border-radius:
        22px;

      color:
        inherit;

      background:
        #ffffff;

      text-decoration:
        none;

      box-shadow:
        0 5px 25px
        rgba(20,70,68,.035);

      transition:
        transform .4s
        cubic-bezier(.22,1,.36,1),
        box-shadow .4s ease,
        border-color .4s ease;

    }


    .feature-card:hover {

      transform:
        translateY(-8px);

      border-color:
        rgba(20,184,166,.25);

      box-shadow:
        0 22px 50px
        rgba(15,118,110,.10);

    }


    .feature-large {

      min-height:
        360px;

    }


    .feature-ai {

      background:
        linear-gradient(
          145deg,
          #f2fbf9,
          #ffffff
        );

    }


    .ai-card-pattern {

      position: absolute;

      width: 250px;

      height: 250px;

      right: -80px;

      bottom: -100px;

      border-radius: 50%;

      border:
        1px solid
        rgba(20,184,166,.10);

      box-shadow:
        0 0 0 30px
        rgba(20,184,166,.025),
        0 0 0 60px
        rgba(20,184,166,.018);

    }


    .feature-top {

      display: flex;

      align-items: center;

      justify-content: space-between;

    }


    .feature-icon {

      width: 52px;

      height: 52px;

      display: grid;

      place-items: center;

      border-radius:
        15px;

      font-size:
        18px;

    }


    .feature-icon.purple {

      color:
        #635bce;

      background:
        #f0efff;

    }


    .feature-icon.orange {

      color:
        #d88a35;

      background:
        #fff4e5;

    }


    .feature-icon.red {

      color:
        #d75e67;

      background:
        #fff0f1;

    }


    .feature-icon.green {

      color:
        #0f8f85;

      background:
        #e6f8f5;

    }


    .feature-arrow {

      width: 38px;

      height: 38px;

      display: grid;

      place-items: center;

      border:
        1px solid #e4eceb;

      border-radius: 50%;

      color:
        #6f8583;

      font-size:
        16px;

      transition:
        transform .3s ease,
        background .3s ease,
        color .3s ease;

    }


    .feature-card:hover .feature-arrow {

      transform:
        translate(3px,-3px);

      color:
        #0f766e;

      background:
        #effaf8;

    }


    .feature-number {

      margin-top:
        30px;

      color:
        #b0c0bf;

      font-size:
        10px;

      font-weight:
        800;

      letter-spacing:
        .1em;

    }


    .feature-card h3 {

      position: relative;

      z-index: 2;

      margin:
        8px 0 10px;

      color:
        #244744;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        23px;

      letter-spacing:
        -.035em;

    }


    .feature-card p {

      position: relative;

      z-index: 2;

      max-width:
        460px;

      margin: 0;

      color:
        #778a89;

      font-size:
        13px;

      line-height:
        1.75;

    }


    .feature-footer {

      position: relative;

      z-index: 2;

      display: flex;

      align-items: center;

      gap: 8px;

      margin-top: auto;

      padding-top:
        25px;

      color:
        #0f766e;

      font-size:
        11px;

      font-weight:
        800;

    }


    .feature-footer i {

      transition:
        transform .3s ease;

    }


    .feature-card:hover
    .feature-footer i {

      transform:
        translateX(5px);

    }


    /* =====================================================
       WEST BENGAL NETWORK
    ===================================================== */

    .network-section {

      position: relative;

      overflow: hidden;

      padding:
        115px 0;

      color: white;

      background:
        linear-gradient(
          135deg,
          #0b3f3b,
          #0d5650
        );

    }


    .network-section::before {

      content: '';

      position: absolute;

      inset: 0;

      opacity: .12;

      background-image:
        linear-gradient(
          rgba(255,255,255,.15) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(255,255,255,.15) 1px,
          transparent 1px
        );

      background-size:
        50px 50px;

    }


    .network-glow {

      position: absolute;

      width: 500px;

      height: 500px;

      right: -150px;

      top: -200px;

      border-radius: 50%;

      background:
        radial-gradient(
          circle,
          rgba(45,212,191,.20),
          transparent 70%
        );

    }


    .network-container {

      position: relative;

      z-index: 2;

      display: grid;

      grid-template-columns:
        .9fr 1.1fr;

      gap: 80px;

      align-items: center;

    }


    .section-label.light {

      color:
        #5ee1d1;

    }


    .network-content h2 {

      margin:
        15px 0 20px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(2.7rem, 5vw, 4.5rem);

      line-height:
        1;

      letter-spacing:
        -.06em;

    }


    .network-content h2 span {

      color:
        #66dfd0;

    }


    .network-content p {

      max-width:
        510px;

      margin: 0;

      color:
        rgba(255,255,255,.67);

      font-size:
        15px;

      line-height:
        1.8;

    }


    .network-stats {

      display: flex;

      gap: 35px;

      margin:
        35px 0;

    }


    .network-stats div {

      display: flex;

      flex-direction: column;

      gap: 4px;

    }


    .network-stats strong {

      color:
        white;

      font-size:
        22px;

    }


    .network-stats span {

      color:
        rgba(255,255,255,.48);

      font-size:
        10px;

      font-weight:
        700;

      text-transform:
        uppercase;

      letter-spacing:
        .08em;

    }


    .network-button {

      display: inline-flex;

      align-items: center;

      gap: 10px;

      min-height:
        48px;

      padding:
        0 19px;

      border:
        1px solid
        rgba(255,255,255,.18);

      border-radius:
        11px;

      color:
        white;

      background:
        rgba(255,255,255,.08);

      backdrop-filter:
        blur(10px);

      font-size:
        12px;

      font-weight:
        700;

      text-decoration:
        none;

      transition:
        transform .3s ease,
        background .3s ease;

    }


    .network-button:hover {

      transform:
        translateY(-3px);

      background:
        rgba(255,255,255,.14);

    }


    .network-button i {

      transition:
        transform .3s ease;

    }


    .network-button:hover i {

      transform:
        translateX(4px);

    }


    /* =====================================================
       MAP VISUAL
    ===================================================== */

    .network-map {

      position: relative;

      min-height:
        470px;

      overflow: hidden;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:
        28px;

      background:
        rgba(255,255,255,.045);

      box-shadow:
        inset 0 0 80px
        rgba(20,184,166,.04),
        0 25px 70px
        rgba(0,0,0,.10);

      backdrop-filter:
        blur(8px);

    }


    .map-grid {

      position: absolute;

      inset: 0;

      background-image:
        linear-gradient(
          rgba(94,225,209,.10) 1px,
          transparent 1px
        ),
        linear-gradient(
          90deg,
          rgba(94,225,209,.10) 1px,
          transparent 1px
        );

      background-size:
        40px 40px;

      opacity:
        .55;

    }


    .map-glow {

      position: absolute;

      width:
        280px;

      height:
        280px;

      left:
        50%;

      top:
        50%;

      transform:
        translate(-50%,-50%);

      border-radius:
        50%;

      background:
        radial-gradient(
          circle,
          rgba(45,212,191,.16),
          transparent 70%
        );

      animation:
        breathe 5s
        ease-in-out infinite;

    }


    .map-line {

      position: absolute;

      height: 1px;

      background:
        linear-gradient(
          90deg,
          transparent,
          rgba(94,225,209,.55),
          transparent
        );

      transform-origin:
        left center;

    }


    .line-one {

      width: 270px;

      left: 28%;

      top: 31%;

      transform:
        rotate(27deg);

    }


    .line-two {

      width: 230px;

      left: 38%;

      top: 50%;

      transform:
        rotate(-32deg);

    }


    .line-three {

      width: 220px;

      left: 42%;

      top: 58%;

      transform:
        rotate(25deg);

    }


    .line-four {

      width: 180px;

      left: 20%;

      top: 64%;

      transform:
        rotate(-15deg);

    }


    .map-point {

      position: absolute;

      width: 14px;

      height: 14px;

      display: grid;

      place-items: center;

      border-radius: 50%;

      background:
        #5ee1d1;

      box-shadow:
        0 0 0 5px
        rgba(94,225,209,.12),
        0 0 25px
        rgba(94,225,209,.35);

      animation:
        mapPulse 2.5s
        ease-in-out infinite;

    }


    .map-point span {

      width: 5px;

      height: 5px;

      border-radius: 50%;

      background: white;

    }


    .point-one {

      left: 29%;

      top: 29%;

    }


    .point-two {

      left: 56%;

      top: 42%;

      animation-delay:
        -.6s;

    }


    .point-three {

      left: 41%;

      top: 57%;

      animation-delay:
        -1.2s;

    }


    .point-four {

      left: 69%;

      top: 66%;

      animation-delay:
        -1.8s;

    }


    .point-five {

      left: 22%;

      top: 68%;

      animation-delay:
        -2.1s;

    }


    .map-label {

      position: absolute;

      left: 50%;

      top: 50%;

      transform:
        translate(-50%,-50%);

      display: flex;

      align-items: center;

      gap: 8px;

      padding:
        10px 15px;

      border:
        1px solid
        rgba(255,255,255,.12);

      border-radius:
        100px;

      color:
        rgba(255,255,255,.8);

      background:
        rgba(4,42,40,.60);

      backdrop-filter:
        blur(10px);

      font-size:
        11px;

      font-weight:
        700;

    }


    .map-label i {

      color:
        #5ee1d1;

    }


    .map-info {

      position: absolute;

      right: 20px;

      bottom: 20px;

      display: flex;

      align-items: center;

      gap: 10px;

      padding:
        12px 14px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:
        12px;

      background:
        rgba(0,30,29,.55);

      backdrop-filter:
        blur(12px);

    }


    .map-info > i {

      color:
        #5ee1d1;

    }


    .map-info small {

      display: block;

      color:
        rgba(255,255,255,.40);

      font-size:
        7px;

      font-weight:
        800;

      letter-spacing:
        .08em;

    }


    .map-info strong {

      display: block;

      margin-top: 3px;

      color:
        white;

      font-size:
        10px;

    }


    /* =====================================================
       CTA
    ===================================================== */

    .cta-section {

      padding:
        90px 0;

      background:
        #fbfdfd;

    }


    .cta-card {

      position: relative;

      overflow: hidden;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 40px;

      padding:
        55px 60px;

      border:
        1px solid
        #dcebe8;

      border-radius:
        26px;

      background:
        linear-gradient(
          135deg,
          #edf9f6,
          #f8fcfb
        );

      box-shadow:
        0 20px 60px
        rgba(15,118,110,.06);

    }


    .cta-content {

      position: relative;

      z-index: 2;

      max-width:
        700px;

    }


    .cta-card h2 {

      margin:
        10px 0 12px;

      color:
        #19423e;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(2.1rem, 4vw, 3.5rem);

      line-height:
        1;

      letter-spacing:
        -.055em;

    }


    .cta-card h2 span {

      color:
        #0f8f85;

    }


    .cta-card p {

      max-width:
        600px;

      margin: 0;

      color:
        #6f8583;

      font-size:
        14px;

      line-height:
        1.7;

    }


    .cta-button {

      position: relative;

      z-index: 2;

      display: inline-flex;

      align-items: center;

      gap: 10px;

      min-height:
        52px;

      padding:
        0 22px;

      flex-shrink: 0;

      color: white;

      border-radius:
        12px;

      background:
        linear-gradient(
          135deg,
          #0f766e,
          #14b8a6
        );

      box-shadow:
        0 12px 28px
        rgba(15,118,110,.20);

      font-size:
        13px;

      font-weight:
        700;

      text-decoration:
        none;

      transition:
        transform .3s ease,
        box-shadow .3s ease;

    }


    .cta-button:hover {

      transform:
        translateY(-3px);

      box-shadow:
        0 17px 35px
        rgba(15,118,110,.28);

    }


    .cta-button i {

      transition:
        transform .3s ease;

    }


    .cta-button:hover i {

      transform:
        translateX(4px);

    }


    .cta-decoration {

      position: absolute;

      border-radius:
        50%;

      border:
        1px solid
        rgba(20,184,166,.10);

    }


    .decoration-one {

      width:
        350px;

      height:
        350px;

      right:
        -160px;

      top:
        -190px;

    }


    .decoration-two {

      width:
        220px;

      height:
        220px;

      right:
        -70px;

      bottom:
        -150px;

    }


    /* =====================================================
       ANIMATIONS
    ===================================================== */

    @keyframes heroIn {

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


    @keyframes visualIn {

      from {

        opacity: 0;

        transform:
          translateX(35px)
          scale(.96);

      }

      to {

        opacity: 1;

        transform:
          translateX(0)
          scale(1);

      }

    }


    @keyframes gradientMove {

      0%,
      100% {

        background-position:
          0% 50%;

      }

      50% {

        background-position:
          100% 50%;

      }

    }


    @keyframes pulse {

      0%,
      100% {

        opacity: 1;

        transform:
          scale(1);

      }

      50% {

        opacity: .55;

        transform:
          scale(.82);

      }

    }


    @keyframes pulseRing {

      0% {

        opacity: .7;

        transform:
          scale(.92);

      }

      100% {

        opacity: 0;

        transform:
          scale(1.2);

      }

    }


    @keyframes heartBeat {

      0%,
      100% {

        transform:
          scale(1);

      }

      15% {

        transform:
          scale(1.08);

      }

      30% {

        transform:
          scale(1);

      }

      45% {

        transform:
          scale(1.08);

      }

    }


    @keyframes coreFloat {

      0%,
      100% {

        transform:
          translateY(0);

      }

      50% {

        transform:
          translateY(-10px);

      }

    }


    @keyframes cardFloat {

      0%,
      100% {

        transform:
          translateY(0);

      }

      50% {

        transform:
          translateY(-9px);

      }

    }


    @keyframes orbitFloat {

      0%,
      100% {

        transform:
          translateY(0);

      }

      50% {

        transform:
          translateY(-7px);

      }

    }


    @keyframes rotateRing {

      from {

        transform:
          rotate(0deg);

      }

      to {

        transform:
          rotate(360deg);

      }

    }


    @keyframes breathe {

      0%,
      100% {

        transform:
          scale(1);

        opacity: .7;

      }

      50% {

        transform:
          scale(1.05);

        opacity: 1;

      }

    }


    @keyframes mapPulse {

      0%,
      100% {

        box-shadow:
          0 0 0 5px
          rgba(94,225,209,.12),
          0 0 20px
          rgba(94,225,209,.25);

      }

      50% {

        box-shadow:
          0 0 0 12px
          rgba(94,225,209,.02),
          0 0 35px
          rgba(94,225,209,.45);

      }

    }


    @keyframes floatOrb {

      0%,
      100% {

        transform:
          translate(0,0);

      }

      50% {

        transform:
          translate(20px,-18px);

      }

    }


    /* =====================================================
       TABLET
    ===================================================== */

    @media (max-width: 1000px) {

      .hero-container {

        grid-template-columns:
          1fr;

        gap: 30px;

      }


      .hero-content {

        text-align: center;

      }


      .hero-eyebrow {

        justify-content:
          center;

      }


      .hero h1,
      .hero-description {

        margin-left:
          auto;

        margin-right:
          auto;

      }


      .hero-actions {

        justify-content:
          center;

      }


      .hero-trust {

        justify-content:
          center;

      }


      .hero-visual {

        min-height:
          530px;

      }


      .network-container {

        grid-template-columns:
          1fr;

      }


      .network-content {

        text-align:
          center;

      }


      .network-content p {

        margin-left:
          auto;

        margin-right:
          auto;

      }


      .network-stats {

        justify-content:
          center;

      }


      .network-button {

        margin:
          0 auto;

      }

    }


    /* =====================================================
       MOBILE
    ===================================================== */

    @media (max-width: 700px) {

      .container {

        width:
          calc(100% - 28px);

      }


      .hero {

        min-height:
          auto;

      }


      .hero-container {

        padding:
          65px 0 75px;

      }


      .hero h1 {

        font-size:
          3.1rem;
          line-height:
          1.05;

        padding-bottom:
         0.16em;

        overflow:
        visible;


      }


      .hero-description {

        font-size:
          14px;

        line-height:
          1.7;

      }


      .hero-eyebrow {

        font-size:
          8px;

      }


      .hero-actions {

        flex-direction:
          column;

        width:
          100%;

      }


      .primary-action,
      .secondary-action {

        width:
          100%;

      }


      .hero-visual {

        min-height:
          470px;

        margin-top:
          10px;

      }


      .ai-stage {

        width:
          340px;

        height:
          340px;

      }


      .ring-one {

        width:
          340px;

        height:
          340px;

      }


      .ring-two {

        width:
          275px;

        height:
          275px;

      }


      .ring-three {

        width:
          205px;

        height:
          205px;

      }


      .ai-core {

        width:
          130px;

        height:
          130px;

      }


      .core-inner {

        width:
          98px;

        height:
          98px;

      }


      .core-inner i {

        font-size:
          38px;

      }


      .orbit-point {

        width:
          43px;

        height:
          43px;

        font-size:
          13px;

      }


      .orbit-one {

        top:
          42px;

        right:
          48px;

      }


      .orbit-two {

        left:
          30px;

        top:
          150px;

      }


      .orbit-three {

        right:
          45px;

        bottom:
          43px;

      }


      .prediction-card {

        top:
          35px;

        left:
          -5px;

        transform:
          scale(.88);

      }


      .location-card {

        right:
          -5px;

        bottom:
          45px;

        transform:
          scale(.88);

      }


      .live-card {

        right:
          10px;

        top:
          8px;

      }


      .stats-grid {

        grid-template-columns:
          repeat(2,1fr);

      }


      .stat {

        min-height:
          100px;

        border-bottom:
          1px solid #e8f0ef;

      }


      .stat:nth-child(2) {

        border-right:
          none;

      }


      .stat:nth-child(3) {

        border-bottom:
          none;

      }


      .stat:nth-child(4) {

        border-right:
          none;

        border-bottom:
          none;

      }


      .features-section,
      .network-section {

        padding:
          80px 0;

      }


      .section-heading {

        margin-bottom:
          35px;

      }


      .section-heading h2 {

        font-size:
          2.45rem;

      }


      .feature-grid {

        grid-template-columns:
          1fr;

      }


      .feature-card,
      .feature-large {

        min-height:
          310px;

      }


      .network-container {

        gap:
          50px;

      }


      .network-content h2 {

        font-size:
          2.8rem;

      }


      .network-map {

        min-height:
          350px;

      }


      .cta-section {

        padding:
          65px 0;

      }


      .cta-card {

        flex-direction:
          column;

        align-items:
          flex-start;

        padding:
          35px 28px;

      }


      .cta-button {

        width:
          100%;

        justify-content:
          center;

      }

    }


    /* =====================================================
       VERY SMALL MOBILE
    ===================================================== */

    @media (max-width: 400px) {

      .hero h1 {

        font-size:
          2.7rem;

      }


      .ai-stage {

        transform:
          scale(.88);

      }


      .hero-visual {

        min-height:
          430px;

      }


      .floating-card {

        transform:
          scale(.78);

      }


      .prediction-card {

        left:
          -30px;

      }


      .location-card {

        right:
          -30px;

      }

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    @media (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {

        animation:
          none !important;

        scroll-behavior:
          auto !important;

        transition:
          none !important;

      }

    }
    /* =====================================================
   HERO HEADING DESCENDER FIX
   Fixes clipped "g" in "reimagined"
   ===================================================== */

.hero h1 {
  line-height: 1.08 !important;
  padding-bottom: 0.16em !important;
  overflow: visible !important;
  height: auto !important;
  max-height: none !important;
}

/* The gradient text itself can also clip descenders
   because it is inline-block. Give it extra space. */
.gradient-text {
  padding-bottom: 0.08em !important;
  overflow: visible !important;
}

/* Mobile */
@media (max-width: 700px) {
  .hero h1 {
    font-size: 3.1rem !important;
    line-height: 1.08 !important;
    padding-bottom: 0.20em !important;
    overflow: visible !important;
  }

  .gradient-text {
    padding-bottom: 0.10em !important;
  }
}

/* Very small screens */
@media (max-width: 400px) {
  .hero h1 {
    font-size: 2.7rem !important;
    line-height: 1.08 !important;
    padding-bottom: 0.22em !important;
  }
}

  `]
})
export class HomeComponent {}