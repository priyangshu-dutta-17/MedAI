import {
  Component,
  HostListener,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router,
  RouterModule
} from '@angular/router';

import {
  AuthService
} from '../../../core/services/auth.service';

import {
  NotificationService
} from '../../../core/services/notification.service';


@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  template: `

    <!-- =====================================================
         NAVBAR
    ====================================================== -->

    <header
      class="navbar"
      [class.scrolled]="isScrolled"
    >

      <div class="navbar-container">


        <!-- =================================================
             LOGO
        ================================================== -->

        <a
          routerLink="/"
          class="brand"
          (click)="closeMenu()"
        >

          <div class="brand-icon">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>

          <div class="brand-text">

            <span class="brand-title">
              MedAI
            </span>

            <span class="brand-subtitle">
              West Bengal Health Network
            </span>

          </div>

        </a>


        <!-- =================================================
             DESKTOP NAVIGATION
        ================================================== -->

        <nav class="desktop-nav">

          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Home
          </a>

          <a
            routerLink="/services"
            routerLinkActive="active"
          >
            Services
          </a>

          <a
            routerLink="/about"
            routerLinkActive="active"
          >
            About
          </a>

          <a
            routerLink="/contact"
            routerLinkActive="active"
          >
            Contact
          </a>

        </nav>


        <!-- =================================================
             DESKTOP AUTH ACTIONS
        ================================================== -->

        <div class="desktop-actions">

          <ng-container
            *ngIf="
              !(authService.currentUser$ | async);
              else userMenu
            "
          >

            <a
              routerLink="/login"
              class="login-button"
            >
              Login
            </a>

            <a
              routerLink="/register"
              class="register-button"
            >
              Register
            </a>

          </ng-container>


          <!-- Logged-in user -->

          <ng-template #userMenu>

            <ng-container
              *ngIf="
                authService.currentUser$ | async as user
              "
            >

              <a
                [routerLink]="
                  getDashboardLink(user.role)
                "
                class="dashboard-button"
              >

                <i
                  class="fa-solid fa-gauge-high"
                ></i>

                <span>
                  {{ user.role | uppercase }}
                  Dashboard
                </span>

              </a>


              <button
                type="button"
                class="logout-button"
                (click)="logout()"
                title="Logout"
              >

                <i
                  class="fa-solid fa-arrow-right-from-bracket"
                ></i>

              </button>

            </ng-container>

          </ng-template>

        </div>


        <!-- =================================================
             MOBILE MENU BUTTON
        ================================================== -->

        <button
          type="button"
          class="mobile-menu-button"
          [class.open]="mobileMenuOpen"
          (click)="toggleMenu()"
          aria-label="Toggle navigation menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      <!-- ===================================================
           MOBILE NAVIGATION
      ==================================================== -->

      <div
        class="mobile-menu"
        [class.open]="mobileMenuOpen"
      >

        <nav class="mobile-nav">

          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{
              exact: true
            }"
            (click)="closeMenu()"
          >

            <i class="fa-solid fa-house"></i>

            <span>
              Home
            </span>

          </a>


          <a
            routerLink="/services"
            routerLinkActive="active"
            (click)="closeMenu()"
          >

            <i class="fa-solid fa-stethoscope"></i>

            <span>
              Services
            </span>

          </a>


          <a
            routerLink="/about"
            routerLinkActive="active"
            (click)="closeMenu()"
          >

            <i class="fa-solid fa-circle-info"></i>

            <span>
              About
            </span>

          </a>


          <a
            routerLink="/contact"
            routerLinkActive="active"
            (click)="closeMenu()"
          >

            <i class="fa-solid fa-envelope"></i>

            <span>
              Contact
            </span>

          </a>


          <!-- ===============================================
               MOBILE AUTH
          ================================================ -->

          <div class="mobile-auth">

            <ng-container
              *ngIf="
                !(authService.currentUser$ | async);
                else mobileUserMenu
              "
            >

              <a
                routerLink="/login"
                class="mobile-login"
                (click)="closeMenu()"
              >
                Login
              </a>

              <a
                routerLink="/register"
                class="mobile-register"
                (click)="closeMenu()"
              >
                Register
              </a>

            </ng-container>


            <ng-template #mobileUserMenu>

              <ng-container
                *ngIf="
                  authService.currentUser$ | async as user
                "
              >

                <a
                  [routerLink]="
                    getDashboardLink(user.role)
                  "
                  class="mobile-dashboard"
                  (click)="closeMenu()"
                >

                  <i
                    class="fa-solid fa-gauge-high"
                  ></i>

                  <span>
                    {{ user.role | uppercase }}
                    Dashboard
                  </span>

                </a>


                <button
                  type="button"
                  class="mobile-logout"
                  (click)="logout()"
                >

                  <i
                    class="fa-solid fa-arrow-right-from-bracket"
                  ></i>

                  Logout

                </button>

              </ng-container>

            </ng-template>

          </div>

        </nav>

      </div>

    </header>

  `,


  styles: [`

    /* =====================================================
       NAVBAR
    ===================================================== */

    :host {
      display: block;
    }


    .navbar {

      position: fixed;

      top: 0;
      left: 0;
      right: 0;

      width: 100%;

      height: 76px;

      z-index: 1000;

      background:
        rgba(
          255,
          255,
          255,
          0.88
        );

      border-bottom:
        1px solid
        rgba(
          15,
          118,
          110,
          0.08
        );

      backdrop-filter:
        blur(22px);

      -webkit-backdrop-filter:
        blur(22px);

      transition:
        background 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
    }


    .navbar.scrolled {

      background:
        rgba(
          255,
          255,
          255,
          0.96
        );

      box-shadow:
        0 10px 35px
        rgba(
          15,
          80,
          75,
          0.08
        );

      border-bottom-color:
        rgba(
          15,
          118,
          110,
          0.12
        );
    }


    /* =====================================================
       NAVBAR CONTAINER
    ===================================================== */

    .navbar-container {

      width:
        min(
          1500px,
          calc(100% - 48px)
        );

      height: 100%;

      margin: 0 auto;

      display: flex;

      align-items: center;

      justify-content: space-between;

      gap: 30px;
    }


    /* =====================================================
       BRAND
    ===================================================== */

    .brand {

      display: flex;

      align-items: center;

      gap: 12px;

      text-decoration: none;

      flex-shrink: 0;
    }


    .brand-icon {

      width: 44px;
      height: 44px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 14px;

      color: white;

      font-size: 20px;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #1bb8aa
        );

      box-shadow:
        0 10px 25px
        rgba(
          15,
          151,
          141,
          0.20
        );

      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }


    .brand:hover .brand-icon {

      transform:
        translateY(-2px)
        rotate(-3deg);

      box-shadow:
        0 15px 30px
        rgba(
          15,
          151,
          141,
          0.28
        );
    }


    .brand-text {

      display: flex;

      flex-direction: column;

      justify-content: center;

      line-height: 1;
    }


    .brand-title {

      color:
        #163c3a;

      font-family:
        'Plus Jakarta Sans',
        sans-serif;

      font-size:
        16px;

      font-weight:
        800;

      letter-spacing:
        -0.02em;

      white-space:
        nowrap;
    }


    .brand-subtitle {

      margin-top: 5px;

      color:
        #5f8985;

      font-size:
        9px;

      font-weight:
        700;

      letter-spacing:
        0.09em;

      text-transform:
        uppercase;

      white-space:
        nowrap;
    }


    /* =====================================================
       DESKTOP NAV
    ===================================================== */

    .desktop-nav {

      display: flex;

      align-items: center;

      gap: 34px;

      margin-left: auto;
    }


    .desktop-nav a {

      position: relative;

      padding:
        8px 0;

      color:
        #587572;

      text-decoration:
        none;

      font-size:
        15px;

      font-weight:
        600;

      transition:
        color 0.25s ease;
    }


    .desktop-nav a::after {

      content: '';

      position: absolute;

      left: 0;
      right: 0;

      bottom: 0;

      height: 2px;

      border-radius: 10px;

      background:
        linear-gradient(
          90deg,
          #0c948a,
          #1abaae
        );

      transform:
        scaleX(0);

      transform-origin:
        center;

      transition:
        transform 0.3s ease;
    }


    .desktop-nav a:hover,
    .desktop-nav a.active {

      color:
        #0b8f86;
    }


    .desktop-nav a:hover::after,
    .desktop-nav a.active::after {

      transform:
        scaleX(1);
    }


    /* =====================================================
       DESKTOP ACTIONS
    ===================================================== */

    .desktop-actions {

      display: flex;

      align-items: center;

      gap: 10px;
    }


    .login-button,
    .register-button,
    .dashboard-button {

      min-height: 42px;

      padding:
        0 18px;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      gap: 8px;

      border-radius: 11px;

      text-decoration:
        none;

      font-size:
        14px;

      font-weight:
        700;

      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease;
    }


    .login-button {

      color:
        #167c75;

      border:
        1px solid
        rgba(
          15,
          128,
          120,
          0.18
        );

      background:
        rgba(
          255,
          255,
          255,
          0.65
        );
    }


    .login-button:hover {

      transform:
        translateY(-2px);

      background:
        white;

      box-shadow:
        0 8px 20px
        rgba(
          20,
          100,
          95,
          0.08
        );
    }


    .register-button,
    .dashboard-button {

      color:
        white;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa4
        );

      box-shadow:
        0 8px 20px
        rgba(
          10,
          137,
          128,
          0.18
        );
    }


    .register-button:hover,
    .dashboard-button:hover {

      transform:
        translateY(-2px);

      box-shadow:
        0 13px 28px
        rgba(
          10,
          137,
          128,
          0.26
        );
    }


    .logout-button {

      width: 42px;
      height: 42px;

      border-radius: 11px;

      border:
        1px solid
        rgba(
          220,
          90,
          80,
          0.15
        );

      background:
        rgba(
          255,
          245,
          244,
          0.8
        );

      color:
        #c75f55;

      cursor:
        pointer;

      transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
    }


    .logout-button:hover {

      transform:
        translateY(-2px);

      background:
        #fff0ee;

      box-shadow:
        0 8px 20px
        rgba(
          190,
          80,
          70,
          0.1
        );
    }


    /* =====================================================
       MOBILE MENU BUTTON
    ===================================================== */

    .mobile-menu-button {

      display: none;

      width: 46px;
      height: 46px;

      padding: 0;

      border: none;

      border-radius: 12px;

      background:
        rgba(
          235,
          248,
          246,
          0.9
        );

      cursor:
        pointer;

      align-items:
        center;

      justify-content:
        center;

      flex-direction:
        column;

      gap: 5px;
    }


    .mobile-menu-button span {

      display: block;

      width: 21px;
      height: 2px;

      border-radius: 10px;

      background:
        #167c75;

      transition:
        transform 0.3s ease,
        opacity 0.3s ease;
    }


    .mobile-menu-button.open span:nth-child(1) {

      transform:
        translateY(7px)
        rotate(45deg);
    }


    .mobile-menu-button.open span:nth-child(2) {

      opacity: 0;
    }


    .mobile-menu-button.open span:nth-child(3) {

      transform:
        translateY(-7px)
        rotate(-45deg);
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    .mobile-menu {

      display: none;

      position: absolute;

      top: 76px;

      left: 0;
      right: 0;

      width: 100%;

      padding:
        12px 18px 22px;

      background:
        rgba(
          255,
          255,
          255,
          0.97
        );

      border-bottom:
        1px solid
        rgba(
          15,
          118,
          110,
          0.10
        );

      box-shadow:
        0 20px 40px
        rgba(
          20,
          90,
          85,
          0.10
        );

      backdrop-filter:
        blur(20px);

      -webkit-backdrop-filter:
        blur(20px);
    }


    .mobile-menu.open {

      display: block;

      animation:
        mobileMenuIn
        0.25s ease both;
    }


    .mobile-nav {

      display: flex;

      flex-direction:
        column;

      gap: 5px;
    }


    .mobile-nav > a {

      display: flex;

      align-items: center;

      gap: 14px;

      padding:
        14px 16px;

      border-radius: 12px;

      color:
        #4e716e;

      text-decoration:
        none;

      font-size:
        15px;

      font-weight:
        650;

      transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;
    }


    .mobile-nav > a i {

      width: 22px;

      color:
        #0b958b;

      text-align:
        center;
    }


    .mobile-nav > a:hover,
    .mobile-nav > a.active {

      color:
        #087d76;

      background:
        #edf9f7;

      transform:
        translateX(3px);
    }


    /* =====================================================
       MOBILE AUTH
    ===================================================== */

    .mobile-auth {

      display: flex;

      flex-direction:
        column;

      gap: 9px;

      margin-top:
        12px;

      padding-top:
        15px;

      border-top:
        1px solid
        #e5efed;
    }


    .mobile-login,
    .mobile-register,
    .mobile-dashboard,
    .mobile-logout {

      width: 100%;

      min-height: 48px;

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 9px;

      border-radius: 12px;

      text-decoration:
        none;

      font-size:
        14px;

      font-weight:
        700;

      cursor:
        pointer;
    }


    .mobile-login {

      color:
        #087d76;

      border:
        1px solid
        rgba(
          15,
          128,
          120,
          0.16
        );

      background:
        white;
    }


    .mobile-register,
    .mobile-dashboard {

      color:
        white;

      border:
        none;

      background:
        linear-gradient(
          135deg,
          #087d76,
          #18afa4
        );

      box-shadow:
        0 8px 20px
        rgba(
          10,
          137,
          128,
          0.15
        );
    }


    .mobile-logout {

      color:
        #c75f55;

      border:
        1px solid
        rgba(
          220,
          90,
          80,
          0.14
        );

      background:
        #fff7f6;
    }


    /* =====================================================
       ANIMATION
    ===================================================== */

    @keyframes mobileMenuIn {

      from {

        opacity: 0;

        transform:
          translateY(-10px);

      }

      to {

        opacity: 1;

        transform:
          translateY(0);

      }

    }


    /* =====================================================
       TABLET / MOBILE
    ===================================================== */

    @media (max-width: 900px) {

      .desktop-nav,
      .desktop-actions {

        display: none;
      }


      .mobile-menu-button {

        display: flex;
      }


      .navbar-container {

        width:
          calc(100% - 32px);

        gap: 15px;
      }


      .brand-title {

        font-size:
          15px;
      }


      .brand-subtitle {

        font-size:
          8px;
      }

    }


    /* =====================================================
       SMALL MOBILE
    ===================================================== */

    @media (max-width: 480px) {

      .navbar {

        height: 70px;
      }


      .navbar-container {

        width:
          calc(100% - 24px);
      }


      .brand-icon {

        width: 40px;
        height: 40px;

        border-radius: 12px;

        font-size: 18px;
      }


      .brand-title {

        font-size:
          13px;
      }


      .brand-subtitle {

        font-size:
          7px;

        letter-spacing:
          0.06em;
      }


      .mobile-menu {

        top: 70px;
      }

    }

  `]
})


export class NavbarComponent {

  authService =
    inject(AuthService);

  private router =
    inject(Router);

  private notificationService =
    inject(NotificationService);


  mobileMenuOpen =
    false;


  isScrolled =
    false;


  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  @HostListener(
    'window:scroll',
    []
  )

  onWindowScroll(): void {

    this.isScrolled =
      window.scrollY > 20;

  }


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  toggleMenu(): void {

    this.mobileMenuOpen =
      !this.mobileMenuOpen;

  }


  closeMenu(): void {

    this.mobileMenuOpen =
      false;

  }


  /* =====================================================
     DASHBOARD ROUTING
  ===================================================== */

  getDashboardLink(
    role: string
  ): string {

    if (role === 'patient') {

      return '/patient/dashboard';

    }

    if (role === 'doctor') {

      return '/doctor/dashboard';

    }

    if (role === 'admin') {

      return '/admin/dashboard';

    }

    return '/';

  }


  /* =====================================================
     LOGOUT
  ===================================================== */

  logout(): void {

    this.authService.logout();

    this.closeMenu();

    this.router.navigate([
      '/login'
    ]);

  }

}