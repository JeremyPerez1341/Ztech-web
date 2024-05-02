import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-icons',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="icon-container">
      <mat-icon>thermostat</mat-icon>
      <span>{{ temperatura }}</span>
    </div>
    <div class="icon-container">
      <mat-icon>water</mat-icon>
      <span>{{ humedad }}</span>
    </div>
    <div class="icon-container">
      <mat-icon>brightness_high</mat-icon>
      <span>{{ luzSolar }}</span>
    </div>
  `,
  styles: [
    `
    .icon-container {
      display: flex;
      justify-content: space-between; 
      margin-bottom: 5px;
    }
    mat-icon {
      margin-right: 5px;
    }
    `
  ]
})
export class CardIconsComponent {
  @Input() temperatura!: string;
  @Input() humedad!: string;
  @Input() luzSolar!: string;
}