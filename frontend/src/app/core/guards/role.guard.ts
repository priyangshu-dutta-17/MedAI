import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

export const roleGuard = (expectedRoles: UserRole[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const currentUser = authService.currentUserValue;

    if (currentUser && expectedRoles.includes(currentUser.role)) {
      return true;
    }

    if (!authService.isAuthenticated()) {
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    } else {
      // Redirect to user's default dashboard based on their actual role
      if (currentUser?.role === 'patient') router.navigate(['/patient/dashboard']);
      else if (currentUser?.role === 'doctor') router.navigate(['/doctor/dashboard']);
      else if (currentUser?.role === 'admin') router.navigate(['/admin/dashboard']);
      else router.navigate(['/']);
    }
    return false;
  };
};
