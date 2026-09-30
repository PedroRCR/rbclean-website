import { Component, Input, inject } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss',
})
export class EvaluationComponent {
  @Input({ required: true }) numberOfStars!: number;
  @Input({ required: true }) comment!: string;
  @Input({ required: true }) name!: string;

  private readonly i18n = inject(I18nService);

  // Sempre com uma casa decimal, no formato da língua: "5,0" (pt) / "5.0" (en).
  get ratingText(): string {
    return this.i18n.formatRating(this.numberOfStars);
  }
}
