import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-wrapper flex flex-col items-center justify-center text-center">
      <div class="error-code">404</div>
      <h2>Page Not Found</h2>
      <p class="text-muted mb-4">The healthcare page or record you are searching for does not exist.</p>
      <a routerLink="/" class="btn btn-primary">Return to Home</a>
    </div>
  `,
  styles: [`
    .not-found-wrapper { min-height: 80vh; padding: 2rem; }
    .error-code { font-size: 6rem; font-weight: 900; color: var(--primary); line-height: 1; }
  `]
})
export class NotFoundComponent {}
