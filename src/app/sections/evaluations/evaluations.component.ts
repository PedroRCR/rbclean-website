import { Component, ElementRef, NgZone, OnDestroy, ViewChild, afterNextRender, inject } from '@angular/core';
import { EvaluationComponent } from '../../components/evaluation/evaluation.component';
import { EVALUATIONS_SHOWN, Evaluation, GOOGLE_REVIEWS, STATS } from '../../content';
import { REVIEWS } from '../../i18n/translations';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { I18nService } from '../../i18n/i18n.service';

const COUNT_UP_DURATION_MS = 1500;

@Component({
    selector: 'app-evaluations',
    imports: [EvaluationComponent, TranslatePipe],
    templateUrl: './evaluations.component.html',
    styleUrl: './evaluations.component.scss'
})
export class EvaluationsComponent implements OnDestroy {
  @ViewChild('statsHeader') statsHeader?: ElementRef<HTMLElement>;

  satisfiedClients = STATS.satisfiedClients;
  servicesDone = STATS.servicesDone;
  evaluations: Evaluation[] = REVIEWS.slice(0, EVALUATIONS_SHOWN);

  readonly google = GOOGLE_REVIEWS;
  private readonly i18n = inject(I18nService);

  get ratingText(): string {
    return this.i18n.formatRating(GOOGLE_REVIEWS.rating);
  }

  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver; 

  constructor() {
    afterNextRender(() => {
      this.zone.run(() =>
        setTimeout(() => {
          this.evaluations = [...REVIEWS]
            .sort(() => Math.random() - 0.5)
            .slice(0, EVALUATIONS_SHOWN);
          this.setupCountUp();
        }),
      );
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupCountUp(): void {
    // No count-up without IntersectionObserver or when the user prefers reduced motion:
    // the final numbers (already rendered) stay as they are.
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof IntersectionObserver === 'undefined' || !this.statsHeader || reduceMotion) {
      return;
    }

    this.satisfiedClients = 0;
    this.servicesDone = 0;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        this.observer?.disconnect();
        this.animateCountUp();
      },
      { threshold: 0.4 },
    );
    this.observer.observe(this.statsHeader.nativeElement);
  }

  private animateCountUp(): void {
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / COUNT_UP_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.satisfiedClients = Math.round(STATS.satisfiedClients * eased);
      this.servicesDone = Math.round(STATS.servicesDone * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
