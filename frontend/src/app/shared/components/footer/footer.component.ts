import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],

  template: `
    <footer class="footer">

      <!-- Background glow -->
      <div class="footer-glow glow-left"></div>
      <div class="footer-glow glow-right"></div>

      <div class="container">

        <!-- Main Footer -->

        <div class="footer-main">

          <!-- Brand -->

          <div class="footer-brand">

            <a routerLink="/" class="brand">

              <div class="brand-icon">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>

              <div class="brand-text">
                <strong>MEDAI</strong>
                <span>AI Medical System</span>
              </div>

            </a>

            <p>
              Intelligent healthcare technology connecting
              patients, doctors and medical services across
              West Bengal.
            </p>

            <div class="status-badge">

              <span class="status-dot"></span>

              Healthcare Network Online

            </div>

          </div>


          <!-- Platform -->

          <div class="footer-column">

            <h4>Platform</h4>

            <a routerLink="/services">
              Services
            </a>

            <a routerLink="/patient/disease-prediction">
              AI Disease Prediction
            </a>

            <a routerLink="/patient/diabetes-risk">
              Diabetes Risk
            </a>

            <a routerLink="/patient/heart-risk">
              Heart Risk
            </a>

            <a routerLink="/patient/ai-assistant">
              AI Assistant
            </a>

          </div>


          <!-- Healthcare -->

          <div class="footer-column">

            <h4>Healthcare</h4>

            <a routerLink="/patient/healthcare-locator">
              Healthcare Locator
            </a>

            <a routerLink="/doctors">
              Find Doctors
            </a>

            <a routerLink="/appointments">
              Appointments
            </a>

            <a routerLink="/records">
              Medical Records
            </a>

          </div>


          <!-- Company -->

          <div class="footer-column">

            <h4>Company</h4>

            <a routerLink="/about">
              About MEDAI
            </a>

            <a routerLink="/contact">
              Contact
            </a>

            <a routerLink="/login">
              Login
            </a>

            <a routerLink="/register">
              Create Account
            </a>

          </div>

        </div>


        <!-- Network Strip -->

        <div class="network-strip">

          <div class="network-info">

            <div class="network-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>

            <div>
              <strong>West Bengal Health Network</strong>

              <span>
                Connecting healthcare across 23 districts
              </span>
            </div>

          </div>


          <div class="districts">

            <span>23 Districts</span>

            <span class="separator"></span>

            <span>AI Powered</span>

            <span class="separator"></span>

            <span>24/7 Assistance</span>

          </div>

        </div>


        <!-- Bottom -->

        <div class="footer-bottom">

          <span>
            © {{ currentYear }} MEDAI. All rights reserved.
          </span>

          <div class="bottom-links">

            <a href="javascript:void(0)">
              Privacy
            </a>

            <a href="javascript:void(0)">
              Terms
            </a>

            <a href="javascript:void(0)">
              Security
            </a>

          </div>


          <div class="social-links">

            <a
              href="javascript:void(0)"
              aria-label="GitHub">

              <i class="fa-brands fa-github"></i>

            </a>

            <a
              href="javascript:void(0)"
              aria-label="LinkedIn">

              <i class="fa-brands fa-linkedin-in"></i>

            </a>

            <a
              href="javascript:void(0)"
              aria-label="Email">

              <i class="fa-solid fa-envelope"></i>

            </a>

          </div>

        </div>

      </div>

    </footer>
  `,

  styles: [`

    /* =========================================
       FOOTER
    ========================================= */

    .footer {

      position: relative;

      overflow: hidden;

      background:
        #061f1f;

      color: #d8eeee;

      padding-top: 75px;

    }


    .footer-glow {

      position: absolute;

      width: 350px;
      height: 350px;

      border-radius: 50%;

      pointer-events: none;

      filter: blur(100px);

      opacity: .25;

    }


    .glow-left {

      left: -200px;
      top: -150px;

      background: #0f766e;

    }


    .glow-right {

      right: -200px;
      bottom: -200px;

      background: #0891b2;

    }


    /* =========================================
       MAIN
    ========================================= */

    .footer-main {

      position: relative;

      z-index: 2;

      display: grid;

      grid-template-columns:
        1.8fr
        1fr
        1fr
        1fr;

      gap: 70px;

      padding-bottom: 55px;

      border-bottom:
        1px solid rgba(255,255,255,.08);

    }


    /* =========================================
       BRAND
    ========================================= */

    .brand {

      display: inline-flex;

      align-items: center;

      gap: 12px;

      text-decoration: none;

      margin-bottom: 20px;

    }


    .brand-icon {

      width: 46px;
      height: 46px;

      display: grid;

      place-items: center;

      border-radius: 14px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #0f766e,
          #14b8a6
        );

      font-size: 18px;

      box-shadow:
        0 10px 30px
        rgba(20,184,166,.2);

      transition:
        transform .3s ease,
        box-shadow .3s ease;

    }


    .brand:hover .brand-icon {

      transform:
        rotate(-6deg)
        scale(1.05);

      box-shadow:
        0 14px 35px
        rgba(20,184,166,.3);

    }


    .brand-text strong {

      display: block;

      color: white;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 17px;

      font-weight: 800;

      letter-spacing: -.03em;

    }


    .brand-text span {

      display: block;

      margin-top: 2px;

      color: #65cfc4;

      font-size: 9px;

      font-weight: 700;

      text-transform: uppercase;

      letter-spacing: .1em;

    }


    .footer-brand p {

      max-width: 370px;

      margin: 0 0 20px;

      color: #88a8a7;

      font-size: 12px;

      line-height: 1.8;

    }


    /* =========================================
       STATUS
    ========================================= */

    .status-badge {

      width: fit-content;

      display: flex;

      align-items: center;

      gap: 8px;

      padding:
        7px 10px;

      border:
        1px solid
        rgba(94,234,212,.12);

      border-radius: 999px;

      background:
        rgba(94,234,212,.04);

      color: #8ccbc4;

      font-size: 9px;

      font-weight: 600;

    }


    .status-dot {

      width: 6px;
      height: 6px;

      border-radius: 50%;

      background: #2dd4bf;

      box-shadow:
        0 0 0 4px
        rgba(45,212,191,.08);

      animation:
        statusPulse 2s infinite;

    }


    /* =========================================
       COLUMNS
    ========================================= */

    .footer-column {

      display: flex;

      flex-direction: column;

      gap: 12px;

    }


    .footer-column h4 {

      margin:
        0 0 8px;

      color: white;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 11px;

      font-weight: 800;

      letter-spacing: .04em;

      text-transform: uppercase;

    }


    .footer-column a {

      width: fit-content;

      color: #789795;

      font-size: 11px;

      text-decoration: none;

      transition:
        color .25s ease,
        transform .25s ease;

    }


    .footer-column a:hover {

      color: #5eead4;

      transform:
        translateX(4px);

    }


    /* =========================================
       NETWORK STRIP
    ========================================= */

    .network-strip {

      position: relative;

      z-index: 2;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 30px;

      padding:
        25px 0;

      border-bottom:
        1px solid
        rgba(255,255,255,.08);

    }


    .network-info {

      display: flex;

      align-items: center;

      gap: 12px;

    }


    .network-icon {

      width: 38px;
      height: 38px;

      display: grid;

      place-items: center;

      border-radius: 11px;

      color: #5eead4;

      background:
        rgba(94,234,212,.07);

      border:
        1px solid
        rgba(94,234,212,.1);

    }


    .network-info strong {

      display: block;

      color: #d8eeee;

      font-size: 10px;

      font-weight: 700;

    }


    .network-info span {

      display: block;

      margin-top: 3px;

      color: #688584;

      font-size: 9px;

    }


    .districts {

      display: flex;

      align-items: center;

      gap: 12px;

      color: #789795;

      font-size: 9px;

      font-weight: 600;

    }


    .districts .separator {

      width: 3px;
      height: 3px;

      border-radius: 50%;

      background: #3b6663;

    }


    /* =========================================
       BOTTOM
    ========================================= */

    .footer-bottom {

      position: relative;

      z-index: 2;

      min-height: 70px;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 20px;

      color: #5f7c7b;

      font-size: 9px;

    }


    .bottom-links {

      display: flex;

      gap: 20px;

    }


    .bottom-links a {

      color: #668281;

      text-decoration: none;

      transition:
        color .25s ease;

    }


    .bottom-links a:hover {

      color: #5eead4;

    }


    .social-links {

      display: flex;

      gap: 7px;

    }


    .social-links a {

      width: 29px;
      height: 29px;

      display: grid;

      place-items: center;

      border:
        1px solid
        rgba(255,255,255,.08);

      border-radius: 9px;

      color: #789795;

      text-decoration: none;

      transition:
        transform .3s ease,
        color .3s ease,
        background .3s ease,
        border-color .3s ease;

    }


    .social-links a:hover {

      transform:
        translateY(-3px);

      color: #5eead4;

      background:
        rgba(94,234,212,.07);

      border-color:
        rgba(94,234,212,.2);

    }


    /* =========================================
       ANIMATION
    ========================================= */

    @keyframes statusPulse {

      0%,100% {

        box-shadow:
          0 0 0 3px
          rgba(45,212,191,.06);

      }

      50% {

        box-shadow:
          0 0 0 7px
          rgba(45,212,191,.015);

      }

    }


    /* =========================================
       RESPONSIVE
    ========================================= */

    @media (max-width: 900px) {

      .footer-main {

        grid-template-columns:
          1.5fr 1fr 1fr;

        gap: 45px;

      }


      .footer-brand {

        grid-column:
          1 / -1;

      }

    }


    @media (max-width: 650px) {

      .footer {

        padding-top: 55px;

      }


      .footer-main {

        grid-template-columns:
          repeat(2, 1fr);

        gap: 40px 25px;

      }


      .footer-brand {

        grid-column:
          1 / -1;

      }


      .network-strip {

        align-items:
          flex-start;

        flex-direction:
          column;

      }


      .districts {

        flex-wrap:
          wrap;

      }


      .footer-bottom {

        flex-direction:
          column;

        align-items:
          flex-start;

        justify-content:
          center;

        padding:
          22px 0;

      }


      .social-links {

        order:
          -1;

      }

    }


    @media (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {

        animation:
          none !important;

        transition:
          none !important;

      }

    }

  `]
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

}