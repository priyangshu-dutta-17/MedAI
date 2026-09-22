import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-wrapper" [class.overlay]="overlay">
      <div class="spinner"></div>
      <p class="spinner-text" *ngIf="text">{{ text }}</p>
    </div>
  `,
  styles: [`
    .spinner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      gap: 0.75rem;
    }
    .spinner-wrapper.overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(255, 255, 255, 0.85);
      z-index: 50;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid var(--border-color);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    .spinner-text {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-muted);
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() text: string = 'Loading...';
  @Input() overlay: boolean = false;
}
