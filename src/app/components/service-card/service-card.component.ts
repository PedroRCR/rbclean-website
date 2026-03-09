import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) image!: string;
}