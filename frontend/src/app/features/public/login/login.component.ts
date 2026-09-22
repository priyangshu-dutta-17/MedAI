import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router,
  RouterModule,
  ActivatedRoute
} from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    AlertComponent,
    LoadingSpinnerComponent
  ],

  template: `

    <app-navbar></app-navbar>


    <main class="login-page">

      <!-- Background decoration -->

      <div class="background-glow glow-one"></div>
      <div class="background-glow glow-two"></div>


      <div class="login-container">


        <!-- LEFT SIDE -->

        <section class="login-intro">

          <div class="intro-badge">
            <span class="pulse-dot"></span>
            SECURE HEALTHCARE ACCESS
          </div>


          <h1>
            Welcome back to
            <span>MedAI.</span>
          </h1>


          <p>
            Your intelligent healthcare platform for connecting
            patients, doctors and healthcare services through
            one secure digital ecosystem.
          </p>


          <div class="trust-points">

            <div class="trust-item">

              <div class="trust-icon">
                <i class="fa-solid fa-shield-halved"></i>
              </div>

              <div>
                <strong>Secure Access</strong>
                <span>Your account is protected</span>
              </div>

            </div>


            <div class="trust-item">

              <div class="trust-icon">
                <i class="fa-solid fa-user-doctor"></i>
              </div>

              <div>
                <strong>Connected Healthcare</strong>
                <span>Patients & doctors in one platform</span>
              </div>

            </div>


            <div class="trust-item">

              <div class="trust-icon">
                <i class="fa-solid fa-brain"></i>
              </div>

              <div>
                <strong>AI-Powered</strong>
                <span>Intelligent healthcare assistance</span>
              </div>

            </div>

          </div>

        </section>



        <!-- LOGIN CARD -->

        <section class="login-card">


          <div class="login-card-header">

            <div class="login-icon">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>


            <div>

              <span class="card-label">
                MEDAI ACCOUNT
              </span>

              <h2>
                Sign in
              </h2>

            </div>

          </div>


          <p class="login-subtitle">
            Access your personalized healthcare dashboard.
          </p>



          <!-- ERROR -->

          <app-alert
            [type]="'danger'"
            [message]="errorMessage"
            *ngIf="errorMessage">
          </app-alert>



          <!-- FORM -->

          <form
            [formGroup]="loginForm"
            (ngSubmit)="onSubmit()">


            <!-- EMAIL -->

            <div class="form-group">

              <label class="form-label">
                Email Address
              </label>


              <div class="input-wrapper">

                <i class="fa-regular fa-envelope input-icon"></i>

                <input
                  type="email"
                  class="form-control premium-input"
                  formControlName="email"
                  placeholder="you@example.com"
                  autocomplete="email">

              </div>


              <span
                class="form-error"
                *ngIf="
                  loginForm.get('email')?.touched &&
                  loginForm.get('email')?.invalid
                ">

                Valid email is required.

              </span>

            </div>



            <!-- PASSWORD -->

            <div class="form-group">

              <label class="form-label">
                Password
              </label>


              <div class="input-wrapper">

                <i class="fa-solid fa-lock input-icon"></i>

                <input
                  type="password"
                  class="form-control premium-input"
                  formControlName="password"
                  placeholder="Enter your password"
                  autocomplete="current-password">

              </div>


              <span
                class="form-error"
                *ngIf="
                  loginForm.get('password')?.touched &&
                  loginForm.get('password')?.invalid
                ">

                Password is required.

              </span>

            </div>



            <!-- DEMO CREDENTIALS -->

            <div class="demo-section">

              <div class="demo-heading">

                <i class="fa-solid fa-wand-magic-sparkles"></i>

                <span>
                  Quick Demo Access
                </span>

              </div>


              <p>
                Select a role to automatically fill demo credentials.
              </p>


              <div class="demo-buttons">

                <button
                  type="button"
                  class="demo-button"
                  (click)="fillDemo('patient')">

                  <i class="fa-solid fa-user"></i>

                  <span>
                    Patient
                  </span>

                </button>


                <button
                  type="button"
                  class="demo-button"
                  (click)="fillDemo('doctor')">

                  <i class="fa-solid fa-user-doctor"></i>

                  <span>
                    Doctor
                  </span>

                </button>


                <button
                  type="button"
                  class="demo-button"
                  (click)="fillDemo('admin')">

                  <i class="fa-solid fa-user-shield"></i>

                  <span>
                    Admin
                  </span>

                </button>

              </div>

            </div>



            <!-- LOGIN BUTTON -->

            <button
              type="submit"
              class="login-button"
              [disabled]="loginForm.invalid || isLoading">


              <span *ngIf="!isLoading">

                <i class="fa-solid fa-arrow-right-to-bracket"></i>

                Sign In

              </span>


              <span *ngIf="isLoading">

                <i class="fa-solid fa-spinner fa-spin"></i>

                Authenticating...

              </span>


            </button>


          </form>



          <!-- REGISTER -->

          <div class="register-section">

            <span>
              Don't have an account?
            </span>

            <a routerLink="/register">
              Create an account
              <i class="fa-solid fa-arrow-right"></i>
            </a>

          </div>


        </section>

      </div>

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


    .login-page {

      position: relative;

      min-height:
        calc(
          100vh -
          var(--header-height) -
          120px
        );

      overflow: hidden;

      display: flex;

      align-items: center;

      background:
        linear-gradient(
          135deg,
          #f5fbfa 0%,
          #ffffff 50%,
          #f2faf9 100%
        );

      color: #153b39;

      font-family:
        'Inter',
        sans-serif;

      padding:
        80px 24px;

    }



    /* =====================================================
       BACKGROUND GLOWS
       ===================================================== */

    .background-glow {

      position: absolute;

      width: 420px;
      height: 420px;

      border-radius: 50%;

      filter: blur(90px);

      pointer-events: none;

    }


    .glow-one {

      top: -180px;

      right: -120px;

      background:
        rgba(
          20,
          174,
          162,
          .10
        );

    }


    .glow-two {

      bottom: -220px;

      left: -150px;

      background:
        rgba(
          8,
          125,
          118,
          .08
        );

    }



    /* =====================================================
       MAIN CONTAINER
       ===================================================== */

    .login-container {

      position: relative;

      z-index: 2;

      width: min(
        1100px,
        100%
      );

      margin: auto;

      display: grid;

      grid-template-columns:
        1fr 460px;

      gap: 85px;

      align-items: center;

    }



    /* =====================================================
       INTRO
       ===================================================== */

    .login-intro {

      animation:
        fadeUp .8s ease both;

    }


    .intro-badge {

      display: inline-flex;

      align-items: center;

      gap: 10px;

      color: #087d76;

      font-size: 10px;

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
        rgba(
          20,
          170,
          159,
          .10
        );

      animation:
        pulse 2s infinite;

    }


    .login-intro h1 {

      margin:
        22px 0 20px;

      max-width: 650px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          3rem,
          5vw,
          5rem
        );

      line-height: 1.08;

      letter-spacing:
        -.065em;

      font-weight: 800;

    }


    .login-intro h1 span {

      display: block;

      padding-bottom: .10em;

      background:
        linear-gradient(
          110deg,
          #087d76,
          #1ab5a8,
          #087d76
        );

      background-size:
        200% auto;

      -webkit-background-clip:
        text;

      background-clip:
        text;

      -webkit-text-fill-color:
        transparent;

      animation:
        gradientMove 5s linear infinite;

    }


    .login-intro > p {

      max-width: 590px;

      margin: 0;

      color: #718b88;

      font-size: 14px;

      line-height: 1.85;

    }



    /* =====================================================
       TRUST POINTS
       ===================================================== */

    .trust-points {

      display: flex;

      flex-direction: column;

      gap: 18px;

      margin-top: 40px;

    }


    .trust-item {

      display: flex;

      align-items: center;

      gap: 14px;

    }


    .trust-icon {

      width: 43px;
      height: 43px;

      display: flex;

      align-items: center;
      justify-content: center;

      flex: 0 0 auto;

      border-radius: 12px;

      color: #087d76;

      background:
        #e5f7f4;

      font-size: 14px;

    }


    .trust-item strong {

      display: block;

      margin-bottom: 3px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 12px;

    }


    .trust-item span {

      display: block;

      color: #8aa09d;

      font-size: 10px;

    }



    /* =====================================================
       LOGIN CARD
       ===================================================== */

    .login-card {

      width: 100%;

      padding: 35px;

      border:
        1px solid
        rgba(
          10,
          125,
          118,
          .09
        );

      border-radius: 26px;

      background:
        rgba(
          255,
          255,
          255,
          .92
        );

      box-shadow:
        0 25px 80px
        rgba(
          20,
          90,
          85,
          .10
        );

      backdrop-filter:
        blur(20px);

      animation:
        cardIn .9s .1s ease both;

    }



    /* =====================================================
       CARD HEADER
       ===================================================== */

    .login-card-header {

      display: flex;

      align-items: center;

      gap: 15px;

    }


    .login-icon {

      width: 52px;
      height: 52px;

      display: flex;

      align-items: center;
      justify-content: center;

      flex: 0 0 auto;

      border-radius: 15px;

      color: white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa3
        );

      box-shadow:
        0 12px 25px
        rgba(
          8,
          125,
          118,
          .18
        );

      font-size: 19px;

    }


    .card-label {

      display: block;

      color: #9aafac;

      font-size: 8px;

      font-weight: 800;

      letter-spacing: .13em;

    }


    .login-card h2 {

      margin:
        5px 0 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size: 26px;

      letter-spacing: -.045em;

    }


    .login-subtitle {

      margin:
        17px 0 28px;

      color: #7b9290;

      font-size: 11px;

      line-height: 1.7;

    }



    /* =====================================================
       FORM
       ===================================================== */

    .form-group {

      margin-bottom: 20px;

    }


    .form-label {

      display: block;

      margin-bottom: 8px;

      color: #496864;

      font-size: 10px;

      font-weight: 700;

    }


    .input-wrapper {

      position: relative;

    }


    .input-icon {

      position: absolute;

      left: 15px;

      top: 50%;

      transform:
        translateY(-50%);

      color: #91aaa6;

      font-size: 13px;

      pointer-events: none;

      transition:
        color .25s ease;

    }


    .premium-input {

      width: 100%;

      height: 48px;

      padding:
        0 15px 0 43px;

      border:
        1px solid
        #e0ecea;

      border-radius: 12px;

      outline: none;

      background:
        #fbfdfd;

      color: #254845;

      font-family:
        'Inter',
        sans-serif;

      font-size: 12px;

      transition:
        border .25s ease,
        box-shadow .25s ease,
        background .25s ease;

    }


    .premium-input::placeholder {

      color: #a8b9b6;

    }


    .premium-input:focus {

      border-color:
        #16a79c;

      background: white;

      box-shadow:
        0 0 0 4px
        rgba(
          22,
          167,
          156,
          .08
        );

    }


    .input-wrapper:focus-within
    .input-icon {

      color: #087d76;

    }


    .form-error {

      display: block;

      margin-top: 6px;

      color: #d45c65;

      font-size: 9px;

    }



    /* =====================================================
       DEMO
       ===================================================== */

    .demo-section {

      margin:
        8px 0 20px;

      padding: 15px;

      border:
        1px solid
        rgba(
          10,
          125,
          118,
          .08
        );

      border-radius: 14px;

      background:
        #f7fbfa;

    }


    .demo-heading {

      display: flex;

      align-items: center;

      gap: 7px;

      color: #087d76;

      font-size: 10px;

      font-weight: 800;

    }


    .demo-heading i {

      font-size: 10px;

    }


    .demo-section > p {

      margin:
        5px 0 11px;

      color: #92a6a3;

      font-size: 9px;

    }


    .demo-buttons {

      display: grid;

      grid-template-columns:
        repeat(3, 1fr);

      gap: 7px;

    }


    .demo-button {

      height: 35px;

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 6px;

      border:
        1px solid
        #dceae8;

      border-radius: 9px;

      background: white;

      color: #54716d;

      cursor: pointer;

      font-family:
        'Inter',
        sans-serif;

      font-size: 9px;

      font-weight: 700;

      transition:
        transform .25s ease,
        border-color .25s ease,
        color .25s ease,
        box-shadow .25s ease;

    }


    .demo-button i {

      color: #0a958b;

      font-size: 9px;

    }


    .demo-button:hover {

      transform:
        translateY(-2px);

      border-color:
        #9edbd5;

      color: #087d76;

      box-shadow:
        0 8px 20px
        rgba(
          8,
          125,
          118,
          .08
        );

    }



    /* =====================================================
       LOGIN BUTTON
       ===================================================== */

    .login-button {

      position: relative;

      width: 100%;

      height: 50px;

      border: none;

      border-radius: 12px;

      color: white;

      background:
        linear-gradient(
          110deg,
          #087d76,
          #12a79b,
          #087d76
        );

      background-size:
        200% auto;

      cursor: pointer;

      font-family:
        'Inter',
        sans-serif;

      font-size: 11px;

      font-weight: 800;

      letter-spacing: .02em;

      box-shadow:
        0 12px 25px
        rgba(
          8,
          125,
          118,
          .17
        );

      transition:
        transform .25s ease,
        box-shadow .25s ease;

      animation:
        buttonGradient 5s linear infinite;

    }


    .login-button:hover:not(:disabled) {

      transform:
        translateY(-2px);

      box-shadow:
        0 17px 32px
        rgba(
          8,
          125,
          118,
          .23
        );

    }


    .login-button:active:not(:disabled) {

      transform:
        translateY(0);

    }


    .login-button:disabled {

      opacity: .55;

      cursor: not-allowed;

      box-shadow: none;

    }



    /* =====================================================
       REGISTER
       ===================================================== */

    .register-section {

      display: flex;

      align-items: center;

      justify-content: center;

      flex-wrap: wrap;

      gap: 5px;

      margin-top: 25px;

      padding-top: 20px;

      border-top:
        1px solid
        #edf2f1;

      color: #91a29f;

      font-size: 10px;

    }


    .register-section a {

      display: inline-flex;

      align-items: center;

      gap: 5px;

      color: #087d76;

      text-decoration: none;

      font-weight: 800;

      transition:
        color .2s ease;

    }


    .register-section a:hover {

      color: #075e59;

    }


    .register-section i {

      font-size: 8px;

      transition:
        transform .2s ease;

    }


    .register-section a:hover i {

      transform:
        translateX(3px);

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


    @keyframes cardIn {

      from {

        opacity: 0;

        transform:
          translateY(25px)
          scale(.98);

      }

      to {

        opacity: 1;

        transform:
          translateY(0)
          scale(1);

      }

    }


    @keyframes pulse {

      0%,
      100% {

        box-shadow:
          0 0 0 5px
          rgba(
            20,
            170,
            159,
            .10
          );

      }

      50% {

        box-shadow:
          0 0 0 10px
          rgba(
            20,
            170,
            159,
            .02
          );

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


    @keyframes buttonGradient {

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

    @media (max-width: 950px) {

      .login-container {

        grid-template-columns:
          1fr 430px;

        gap: 45px;

      }


      .login-intro h1 {

        font-size:
          3.5rem;

      }

    }



    /* =====================================================
       MOBILE
       ===================================================== */

    @media (max-width: 760px) {

      .login-page {

        min-height:
          auto;

        padding:
          65px 16px;

      }


      .login-container {

        grid-template-columns:
          1fr;

        gap: 45px;

        max-width:
          500px;

      }


      .login-intro {

        text-align: center;

      }


      .intro-badge {

        justify-content:
          center;

      }


      .login-intro h1 {

        font-size:
          3.1rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .20em !important;

      }


      .login-intro h1 span {

        padding-bottom:
          .10em !important;

      }


      .login-intro > p {

        margin:
          auto;

      }


      .trust-points {

        align-items:
          flex-start;

        width:
          fit-content;

        margin:
          35px auto 0;

        text-align:
          left;

      }


      .login-card {

        padding:
          28px 22px;

        border-radius:
          22px;

      }

    }



    /* =====================================================
       SMALL MOBILE
       ===================================================== */

    @media (max-width: 400px) {

      .login-page {

        padding:
          50px 12px;

      }


      .login-intro h1 {

        font-size:
          2.7rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .22em !important;

      }


      .login-intro h1 span {

        padding-bottom:
          .12em !important;

      }


      .login-card {

        padding:
          25px 18px;

      }


      .demo-buttons {

        grid-template-columns:
          1fr;

      }


      .demo-button {

        height:
          38px;

      }

    }

  `]
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  private route = inject(ActivatedRoute);


  isLoading = false;

  errorMessage = '';


  loginForm = this.fb.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });


  fillDemo(
    role:
      'patient'
      | 'doctor'
      | 'admin'
  ): void {

    if (role === 'patient') {

      this.loginForm.setValue({

        email:
          'patient@wbhealth.in',

        password:
          'Password123!'

      });

    }

    else if (role === 'doctor') {

      this.loginForm.setValue({

        email:
          'doctor@wbhealth.in',

        password:
          'Password123!'

      });

    }

    else {

      this.loginForm.setValue({

        email:
          'admin@wbhealth.in',

        password:
          'Password123!'

      });

    }

  }


  onSubmit(): void {

    if (this.loginForm.invalid) {
      return;
    }


    this.isLoading = true;

    this.errorMessage = '';


    const {
      email,
      password
    } = this.loginForm.value;


    this.authService
      .login({
        email: email!,
        password: password!
      })
      .subscribe({

        next: (res) => {

          this.isLoading = false;


          if (
            res.success &&
            res.data
          ) {

            const user =
              res.data.user;


            const returnUrl =
              this.route
                .snapshot
                .queryParams[
                  'returnUrl'
                ];


            if (returnUrl) {

              this.router
                .navigateByUrl(
                  returnUrl
                );

            }

            else {

              if (
                user.role ===
                'patient'
              ) {

                this.router.navigate([
                  '/patient/dashboard'
                ]);

              }

              else if (
                user.role ===
                'doctor'
              ) {

                this.router.navigate([
                  '/doctor/dashboard'
                ]);

              }

              else if (
                user.role ===
                'admin'
              ) {

                this.router.navigate([
                  '/admin/dashboard'
                ]);

              }

              else {

                this.router.navigate([
                  '/'
                ]);

              }

            }

          }

        },


        error: (err) => {

          this.isLoading = false;

          this.errorMessage =
            err.error?.error?.message ||
            'Login failed. Please check your credentials.';

        }

      });

  }

}