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

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < this.numberOfStars);
  }
}
