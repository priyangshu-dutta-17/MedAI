import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert alert-{{ type }}" *ngIf="message">
      <i class="fa-solid fa-circle-info" *ngIf="type === 'info'"></i>
      <i class="fa-solid fa-circle-check" *ngIf="type === 'success'"></i>
      <i class="fa-solid fa-triangle-exclamation" *ngIf="type === 'warning'"></i>
      <i class="fa-solid fa-circle-exclamation" *ngIf="type === 'danger'"></i>
      <div class="alert-content">
        <strong *ngIf="title">{{ title }}: </strong>
        <span>{{ message }}</span>
      </div>
    </div>
  `
})
export class AlertComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @Input() title: string = '';
  @Input() message: string = '';
}
