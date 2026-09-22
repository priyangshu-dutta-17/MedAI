import { Routes } from '@angular/router';

// Public Pages
import { HomeComponent } from './features/public/home/home.component';
import { AboutComponent } from './features/public/about/about.component';
import { ServicesComponent } from './features/public/services/services.component';
import { LoginComponent } from './features/public/login/login.component';
import { RegisterComponent } from './features/public/register/register.component';
import { ContactComponent } from './features/public/contact/contact.component';
import { NotFoundComponent } from './features/public/not-found/not-found.component';

// Patient Portal Components
import { PatientLayoutComponent } from './features/patient/patient-layout/patient-layout.component';
import { PatientDashboardComponent } from './features/patient/dashboard/dashboard.component';
import { PatientProfileComponent } from './features/patient/profile/profile.component';
import { SymptomsComponent } from './features/patient/symptoms/symptoms.component';
import { DiseasePredictionComponent } from './features/patient/disease-prediction/disease-prediction.component';
import { DiabetesRiskComponent } from './features/patient/diabetes-risk/diabetes-risk.component';
import { HeartRiskComponent } from './features/patient/heart-risk/heart-risk.component';
import { PatientRiskComponent } from './features/patient/patient-risk/patient-risk.component';
import { MedicalRecordsComponent } from './features/patient/medical-records/medical-records.component';
import { PrescriptionsComponent } from './features/patient/prescriptions/prescriptions.component';
import { AppointmentsComponent } from './features/patient/appointments/appointments.component';
import { AiAssistantComponent } from './features/patient/ai-assistant/ai-assistant.component';
import { HealthcareLocatorComponent } from './features/patient/healthcare-locator/healthcare-locator.component';
import { NotificationsComponent } from './features/patient/notifications/notifications.component';

// Doctor Portal Components
import { DoctorLayoutComponent } from './features/doctor/doctor-layout/doctor-layout.component';
import { DoctorDashboardComponent } from './features/doctor/dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './features/doctor/profile/doctor-profile.component';
import { DoctorPatientsComponent } from './features/doctor/patients/doctor-patients.component';
import { DoctorAppointmentsComponent } from './features/doctor/appointments/doctor-appointments.component';
import { DoctorRecordsComponent } from './features/doctor/records/doctor-records.component';
import { DoctorPrescriptionsComponent } from './features/doctor/prescriptions/doctor-prescriptions.component';
import { DoctorHistoryComponent } from './features/doctor/history/doctor-history.component';

// Admin Portal Components
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './features/admin/users/admin-users.component';
import { AdminVerificationComponent } from './features/admin/verification/admin-verification.component';
import { AdminFacilitiesComponent } from './features/admin/facilities/admin-facilities.component';
import { AdminAppointmentsComponent } from './features/admin/appointments/admin-appointments.component';
import { AdminStatisticsComponent } from './features/admin/statistics/admin-statistics.component';


export const routes: Routes = [

  // =====================================================
  // PUBLIC ROUTES
  // =====================================================

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'services',
    component: ServicesComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },


  // =====================================================
  // PATIENT PORTAL
  // TEMPORARILY WITHOUT AUTH GUARDS
  // =====================================================

  {
    path: 'patient',

    component: PatientLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: PatientDashboardComponent
      },

      {
        path: 'profile',
        component: PatientProfileComponent
      },

      {
        path: 'symptoms',
        component: SymptomsComponent
      },

      {
        path: 'disease-prediction',
        component: DiseasePredictionComponent
      },

      {
        path: 'diabetes-risk',
        component: DiabetesRiskComponent
      },

      {
        path: 'heart-risk',
        component: HeartRiskComponent
      },

      {
        path: 'patient-risk',
        component: PatientRiskComponent
      },

      {
        path: 'medical-records',
        component: MedicalRecordsComponent
      },

      {
        path: 'prescriptions',
        component: PrescriptionsComponent
      },

      {
        path: 'appointments',
        component: AppointmentsComponent
      },

      {
        path: 'ai-assistant',
        component: AiAssistantComponent
      },

      {
        path: 'healthcare-locator',
        component: HealthcareLocatorComponent
      },

      {
        path: 'notifications',
        component: NotificationsComponent
      }

    ]
  },


  // =====================================================
  // DOCTOR PORTAL
  // TEMPORARILY WITHOUT AUTH GUARDS
  // =====================================================

  {
    path: 'doctor',

    component: DoctorLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: DoctorDashboardComponent
      },

      {
        path: 'profile',
        component: DoctorProfileComponent
      },

      {
        path: 'patients',
        component: DoctorPatientsComponent
      },

      {
        path: 'appointments',
        component: DoctorAppointmentsComponent
      },

      {
        path: 'records',
        component: DoctorRecordsComponent
      },

      {
        path: 'prescriptions',
        component: DoctorPrescriptionsComponent
      },

      {
        path: 'history',
        component: DoctorHistoryComponent
      }

    ]
  },


  // =====================================================
  // ADMIN PORTAL
  // TEMPORARILY WITHOUT AUTH GUARDS
  // =====================================================

  {
    path: 'admin',

    component: AdminLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },

      {
        path: 'users',
        component: AdminUsersComponent
      },

      {
        path: 'verification',
        component: AdminVerificationComponent
      },

      {
        path: 'facilities',
        component: AdminFacilitiesComponent
      },

      {
        path: 'appointments',
        component: AdminAppointmentsComponent
      },

      {
        path: 'statistics',
        component: AdminStatisticsComponent
      }

    ]
  },


  // =====================================================
  // 404
  // =====================================================

  {
    path: '**',
    component: NotFoundComponent
  }

];