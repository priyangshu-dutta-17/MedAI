import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router,
  RouterModule
} from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    AlertComponent
  ],

  template: `

    <app-navbar></app-navbar>


    <main class="register-page">

      <!-- Background decoration -->

      <div class="background-glow glow-one"></div>
      <div class="background-glow glow-two"></div>


      <div class="register-container">


        <!-- LEFT SIDE -->

        <section class="register-intro">

          <div class="intro-badge">

            <span class="pulse-dot"></span>

            JOIN THE HEALTHCARE NETWORK

          </div>


          <h1>

            Your health,
            <span>connected.</span>

          </h1>


          <p>

            Create your MedAI account and get connected
            to an intelligent healthcare ecosystem built
            for patients and medical professionals.

          </p>


          <div class="benefits">


            <div class="benefit-item">

              <div class="benefit-icon">

                <i class="fa-solid fa-user-shield"></i>

              </div>

              <div>

                <strong>Private & Secure</strong>

                <span>
                  Your information stays protected
                </span>

              </div>

            </div>


            <div class="benefit-item">

              <div class="benefit-icon">

                <i class="fa-solid fa-stethoscope"></i>

              </div>

              <div>

                <strong>Healthcare Access</strong>

                <span>
                  Connect with healthcare services
                </span>

              </div>

            </div>


            <div class="benefit-item">

              <div class="benefit-icon">

                <i class="fa-solid fa-brain"></i>

              </div>

              <div>

                <strong>Intelligent Assistance</strong>

                <span>
                  Experience AI-powered healthcare
                </span>

              </div>

            </div>


          </div>

        </section>



        <!-- REGISTER CARD -->

        <section class="register-card">


          <div class="register-card-header">

            <div class="register-icon">

              <i class="fa-solid fa-user-plus"></i>

            </div>


            <div>

              <span class="card-label">
                MEDAI ACCOUNT
              </span>

              <h2>
                Create account
              </h2>

            </div>

          </div>


          <p class="register-subtitle">

            Enter your details to get started.

          </p>



          <!-- ALERTS -->

          <app-alert
            [type]="'danger'"
            [message]="errorMessage"
            *ngIf="errorMessage">
          </app-alert>


          <app-alert
            [type]="'success'"
            [message]="successMessage"
            *ngIf="successMessage">
          </app-alert>



          <!-- FORM -->

          <form
            [formGroup]="registerForm"
            (ngSubmit)="onSubmit()">


            <!-- NAME -->

            <div class="form-group">

              <label class="form-label">
                Full Name
              </label>


              <div class="input-wrapper">

                <i class="fa-regular fa-user input-icon"></i>

                <input
                  type="text"
                  class="premium-input"
                  formControlName="name"
                  placeholder="Enter your full name"
                  autocomplete="name">

              </div>


              <span
                class="form-error"
                *ngIf="
                  registerForm.get('name')?.touched &&
                  registerForm.get('name')?.invalid
                ">

                Please enter a valid name.

              </span>

            </div>



            <!-- EMAIL -->

            <div class="form-group">

              <label class="form-label">
                Email Address
              </label>


              <div class="input-wrapper">

                <i class="fa-regular fa-envelope input-icon"></i>

                <input
                  type="email"
                  class="premium-input"
                  formControlName="email"
                  placeholder="you@example.com"
                  autocomplete="email">

              </div>


              <span
                class="form-error"
                *ngIf="
                  registerForm.get('email')?.touched &&
                  registerForm.get('email')?.invalid
                ">

                Please enter a valid email address.

              </span>

            </div>



            <!-- PHONE -->

            <div class="form-group">

              <label class="form-label">
                Phone Number
              </label>


              <div class="input-wrapper">

                <i class="fa-solid fa-phone input-icon"></i>

                <input
                  type="tel"
                  class="premium-input"
                  formControlName="phone"
                  placeholder="+91 98765 43210"
                  autocomplete="tel">

              </div>


              <span
                class="form-error"
                *ngIf="
                  registerForm.get('phone')?.touched &&
                  registerForm.get('phone')?.invalid
                ">

                Please enter a valid phone number.

              </span>

            </div>



            <!-- ROLE -->

            <div class="form-group">

              <label class="form-label">
                Register As
              </label>


              <div class="role-options">


                <label
                  class="role-option"
                  [class.selected]="
                    registerForm.get('role')?.value === 'patient'
                  ">

                  <input
                    type="radio"
                    value="patient"
                    formControlName="role">


                  <div class="role-icon">

                    <i class="fa-solid fa-user"></i>

                  </div>


                  <div class="role-text">

                    <strong>
                      Patient
                    </strong>

                    <span>
                      Citizen
                    </span>

                  </div>


                  <i
                    class="fa-solid fa-circle-check role-check">
                  </i>

                </label>



                <label
                  class="role-option"
                  [class.selected]="
                    registerForm.get('role')?.value === 'doctor'
                  ">

                  <input
                    type="radio"
                    value="doctor"
                    formControlName="role">


                  <div class="role-icon">

                    <i class="fa-solid fa-user-doctor"></i>

                  </div>


                  <div class="role-text">

                    <strong>
                      Doctor
                    </strong>

                    <span>
                      Practitioner
                    </span>

                  </div>


                  <i
                    class="fa-solid fa-circle-check role-check">
                  </i>

                </label>


              </div>

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
                  class="premium-input"
                  formControlName="password"
                  placeholder="Minimum 6 characters"
                  autocomplete="new-password">

              </div>


              <span
                class="form-error"
                *ngIf="
                  registerForm.get('password')?.touched &&
                  registerForm.get('password')?.invalid
                ">

                Password must contain at least 6 characters.

              </span>

            </div>



            <!-- SUBMIT -->

            <button
              type="submit"
              class="register-button"
              [disabled]="
                registerForm.invalid ||
                isLoading
              ">


              <span *ngIf="!isLoading">

                <i class="fa-solid fa-user-plus"></i>

                Create Account

              </span>


              <span *ngIf="isLoading">

                <i class="fa-solid fa-spinner fa-spin"></i>

                Creating Account...

              </span>


            </button>


          </form>



          <!-- LOGIN -->

          <div class="login-section">

            <span>
              Already have an account?
            </span>


            <a routerLink="/login">

              Sign in

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


    .register-page {

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
        65px 24px;

    }



    /* =====================================================
       BACKGROUND
       ===================================================== */

    .background-glow {

      position: absolute;

      width: 430px;
      height: 430px;

      border-radius: 50%;

      filter: blur(95px);

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

      bottom: -230px;

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
       CONTAINER
       ===================================================== */

    .register-container {

      position: relative;

      z-index: 2;

      width:
        min(
          1100px,
          100%
        );

      margin:
        auto;

      display: grid;

      grid-template-columns:
        1fr 480px;

      gap:
        80px;

      align-items:
        center;

    }



    /* =====================================================
       INTRO
       ===================================================== */

    .register-intro {

      animation:
        fadeUp .8s ease both;

    }


    .intro-badge {

      display: inline-flex;

      align-items: center;

      gap: 10px;

      color:
        #087d76;

      font-size:
        10px;

      font-weight:
        800;

      letter-spacing:
        .14em;

    }


    .pulse-dot {

      width:
        8px;

      height:
        8px;

      border-radius:
        50%;

      background:
        #14aa9f;

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


    .register-intro h1 {

      margin:
        22px 0 20px;

      max-width:
        620px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        clamp(
          3rem,
          5vw,
          5rem
        );

      line-height:
        1.08;

      letter-spacing:
        -.065em;

      font-weight:
        800;

    }


    .register-intro h1 span {

      display:
        block;

      padding-bottom:
        .10em;

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


    .register-intro > p {

      max-width:
        570px;

      margin:
        0;

      color:
        #718b88;

      font-size:
        14px;

      line-height:
        1.85;

    }



    /* =====================================================
       BENEFITS
       ===================================================== */

    .benefits {

      display:
        flex;

      flex-direction:
        column;

      gap:
        18px;

      margin-top:
        40px;

    }


    .benefit-item {

      display:
        flex;

      align-items:
        center;

      gap:
        14px;

    }


    .benefit-icon {

      width:
        43px;

      height:
        43px;

      display:
        flex;

      align-items:
        center;

      justify-content:
        center;

      flex:
        0 0 auto;

      border-radius:
        12px;

      color:
        #087d76;

      background:
        #e5f7f4;

      font-size:
        14px;

    }


    .benefit-item strong {

      display:
        block;

      margin-bottom:
        3px;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        12px;

    }


    .benefit-item span {

      display:
        block;

      color:
        #8aa09d;

      font-size:
        10px;

    }



    /* =====================================================
       CARD
       ===================================================== */

    .register-card {

      width:
        100%;

      padding:
        34px;

      border:
        1px solid
        rgba(
          10,
          125,
          118,
          .09
        );

      border-radius:
        26px;

      background:
        rgba(
          255,
          255,
          255,
          .94
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

    .register-card-header {

      display:
        flex;

      align-items:
        center;

      gap:
        15px;

    }


    .register-icon {

      width:
        52px;

      height:
        52px;

      display:
        flex;

      align-items:
        center;

      justify-content:
        center;

      flex:
        0 0 auto;

      border-radius:
        15px;

      color:
        white;

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

      font-size:
        18px;

    }


    .card-label {

      display:
        block;

      color:
        #9aafac;

      font-size:
        8px;

      font-weight:
        800;

      letter-spacing:
        .13em;

    }


    .register-card h2 {

      margin:
        5px 0 0;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        25px;

      letter-spacing:
        -.045em;

    }


    .register-subtitle {

      margin:
        16px 0 25px;

      color:
        #7b9290;

      font-size:
        11px;

      line-height:
        1.7;

    }



    /* =====================================================
       FORM
       ===================================================== */

    .form-group {

      margin-bottom:
        17px;

    }


    .form-label {

      display:
        block;

      margin-bottom:
        7px;

      color:
        #496864;

      font-size:
        10px;

      font-weight:
        700;

    }


    .input-wrapper {

      position:
        relative;

    }


    .input-icon {

      position:
        absolute;

      left:
        15px;

      top:
        50%;

      transform:
        translateY(-50%);

      color:
        #91aaa6;

      font-size:
        12px;

      pointer-events:
        none;

      transition:
        color .25s ease;

    }


    .premium-input {

      width:
        100%;

      height:
        45px;

      padding:
        0 15px 0 42px;

      border:
        1px solid
        #e0ecea;

      border-radius:
        11px;

      outline:
        none;

      background:
        #fbfdfd;

      color:
        #254845;

      font-family:
        'Inter',
        sans-serif;

      font-size:
        11px;

      transition:
        border .25s ease,
        box-shadow .25s ease,
        background .25s ease;

    }


    .premium-input::placeholder {

      color:
        #a8b9b6;

    }


    .premium-input:focus {

      border-color:
        #16a79c;

      background:
        white;

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

      color:
        #087d76;

    }


    .form-error {

      display:
        block;

      margin-top:
        5px;

      color:
        #d45c65;

      font-size:
        8px;

    }



    /* =====================================================
       ROLE
       ===================================================== */

    .role-options {

      display:
        grid;

      grid-template-columns:
        1fr 1fr;

      gap:
        9px;

    }


    .role-option {

      position:
        relative;

      display:
        flex;

      align-items:
        center;

      gap:
        9px;

      min-height:
        58px;

      padding:
        10px;

      border:
        1px solid
        #e1ecea;

      border-radius:
        12px;

      background:
        #fbfdfd;

      cursor:
        pointer;

      transition:
        border .25s ease,
        background .25s ease,
        box-shadow .25s ease,
        transform .25s ease;

    }


    .role-option:hover {

      transform:
        translateY(-1px);

      border-color:
        #b6dcd8;

    }


    .role-option.selected {

      border-color:
        #49b8ae;

      background:
        #f0faf8;

      box-shadow:
        0 6px 18px
        rgba(
          8,
          125,
          118,
          .07
        );

    }


    .role-option input {

      position:
        absolute;

      opacity:
        0;

      pointer-events:
        none;

    }


    .role-icon {

      width:
        32px;

      height:
        32px;

      display:
        flex;

      align-items:
        center;

      justify-content:
        center;

      flex:
        0 0 auto;

      border-radius:
        9px;

      color:
        #087d76;

      background:
        #e5f7f4;

      font-size:
        11px;

    }


    .role-text {

      min-width:
        0;

    }


    .role-text strong {

      display:
        block;

      color:
        #3d5e5a;

      font-size:
        9px;

      font-weight:
        800;

    }


    .role-text span {

      display:
        block;

      margin-top:
        2px;

      color:
        #91a5a2;

      font-size:
        8px;

    }


    .role-check {

      position:
        absolute;

      right:
        9px;

      top:
        9px;

      color:
        #18a79c;

      font-size:
        10px;

      opacity:
        0;

      transform:
        scale(.6);

      transition:
        opacity .2s ease,
        transform .2s ease;

    }


    .role-option.selected
    .role-check {

      opacity:
        1;

      transform:
        scale(1);

    }



    /* =====================================================
       REGISTER BUTTON
       ===================================================== */

    .register-button {

      width:
        100%;

      height:
        49px;

      border:
        none;

      border-radius:
        12px;

      color:
        white;

      background:
        linear-gradient(
          110deg,
          #087d76,
          #12a79b,
          #087d76
        );

      background-size:
        200% auto;

      cursor:
        pointer;

      font-family:
        'Inter',
        sans-serif;

      font-size:
        11px;

      font-weight:
        800;

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


    .register-button:hover:not(:disabled) {

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


    .register-button:disabled {

      opacity:
        .55;

      cursor:
        not-allowed;

      box-shadow:
        none;

    }



    /* =====================================================
       LOGIN LINK
       ===================================================== */

    .login-section {

      display:
        flex;

      align-items:
        center;

      justify-content:
        center;

      flex-wrap:
        wrap;

      gap:
        5px;

      margin-top:
        22px;

      padding-top:
        18px;

      border-top:
        1px solid
        #edf2f1;

      color:
        #91a29f;

      font-size:
        10px;

    }


    .login-section a {

      display:
        inline-flex;

      align-items:
        center;

      gap:
        5px;

      color:
        #087d76;

      text-decoration:
        none;

      font-weight:
        800;

    }


    .login-section a:hover {

      color:
        #075e59;

    }


    .login-section i {

      font-size:
        8px;

      transition:
        transform .2s ease;

    }


    .login-section a:hover i {

      transform:
        translateX(3px);

    }



    /* =====================================================
       ANIMATIONS
       ===================================================== */

    @keyframes fadeUp {

      from {

        opacity:
          0;

        transform:
          translateY(25px);

      }

      to {

        opacity:
          1;

        transform:
          translateY(0);

      }

    }


    @keyframes cardIn {

      from {

        opacity:
          0;

        transform:
          translateY(25px)
          scale(.98);

      }

      to {

        opacity:
          1;

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

      .register-container {

        grid-template-columns:
          1fr 430px;

        gap:
          45px;

      }


      .register-intro h1 {

        font-size:
          3.5rem;

      }

    }



    /* =====================================================
       MOBILE
       ===================================================== */

    @media (max-width: 760px) {

      .register-page {

        min-height:
          auto;

        padding:
          60px 16px;

      }


      .register-container {

        grid-template-columns:
          1fr;

        gap:
          45px;

        max-width:
          500px;

      }


      .register-intro {

        text-align:
          center;

      }


      .intro-badge {

        justify-content:
          center;

      }


      .register-intro h1 {

        font-size:
          3.1rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .20em !important;

      }


      .register-intro h1 span {

        padding-bottom:
          .10em !important;

      }


      .register-intro > p {

        margin:
          auto;

      }


      .benefits {

        align-items:
          flex-start;

        width:
          fit-content;

        margin:
          35px auto 0;

        text-align:
          left;

      }


      .register-card {

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

      .register-page {

        padding:
          50px 12px;

      }


      .register-intro h1 {

        font-size:
          2.7rem !important;

        line-height:
          1.08 !important;

        padding-bottom:
          .22em !important;

      }


      .register-intro h1 span {

        padding-bottom:
          .12em !important;

      }


      .register-card {

        padding:
          25px 18px;

      }


      .role-options {

        grid-template-columns:
          1fr;

      }

    }

  `]
})
export class RegisterComponent {

  private fb =
    inject(FormBuilder);

  private authService =
    inject(AuthService);

  private router =
    inject(Router);


  isLoading = false;

  errorMessage = '';

  successMessage = '';


  registerForm =
    this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[0-9+ ]{10,15}$/
          )
        ]
      ],

      role: [
        'patient',
        [
          Validators.required
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


  onSubmit(): void {

    if (
      this.registerForm.invalid
    ) {

      return;

    }


    this.isLoading = true;

    this.errorMessage = '';

    this.successMessage = '';


    this.authService
      .register(
        this.registerForm.value
      )
      .subscribe({

        next: (res) => {

          this.isLoading = false;


          if (
            res.success &&
            res.data
          ) {

            this.successMessage =
              'Registration successful! Redirecting to your dashboard...';


            setTimeout(() => {

              const role =
                res.data?.user.role;


              if (
                role === 'doctor'
              ) {

                this.router.navigate([
                  '/doctor/dashboard'
                ]);

              }

              else {

                this.router.navigate([
                  '/patient/dashboard'
                ]);

              }

            }, 1200);

          }

        },


        error: (err) => {

          this.isLoading = false;

          this.errorMessage =
            err.error?.error?.message ||
            'Registration failed. Please try again.';

        }

      });

  }

}