import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss',
})
export class EvaluationComponent {
  @Input({ required: true }) numberOfStars!: number;
  @Input({ required: true }) comment!: string;
  @Input({ required: true }) name!: string;

  get ratingText(): string {
    return this.numberOfStars.toLocaleString('pt-PT', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }
}
