import { Component, ElementRef, OnDestroy, ViewChild, afterNextRender } from '@angular/core';
import { EvaluationComponent } from '../../components/evaluation/evaluation.component';
import { EVALUATIONS, EVALUATIONS_SHOWN, Evaluation, STATS } from '../../content';

const COUNT_UP_DURATION_MS = 1500;

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [EvaluationComponent],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.scss',
})
export class EvaluationsComponent implements OnDestroy {
  @ViewChild('statsHeader') statsHeader?: ElementRef<HTMLElement>;

  // O HTML pré-renderizado mostra os números finais e as primeiras avaliações;
  // no browser a contagem é animada e as avaliações são sorteadas.
  clientesSatisfeitos = STATS.clientesSatisfeitos;
  servicosRealizados = STATS.servicosRealizados;
  evaluations: Evaluation[] = EVALUATIONS.slice(0, EVALUATIONS_SHOWN);

  private observer?: IntersectionObserver;

  constructor() {
    // O setTimeout aplica as alterações num novo ciclo, já depois da hidratação.
    afterNextRender(() => {
      setTimeout(() => {
        this.evaluations = [...EVALUATIONS]
          .sort(() => Math.random() - 0.5)
          .slice(0, EVALUATIONS_SHOWN);
        this.setupCountUp();
      });
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupCountUp(): void {
    if (typeof IntersectionObserver === 'undefined' || !this.statsHeader) {
      return;
    }

    this.clientesSatisfeitos = 0;
    this.servicosRealizados = 0;

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
      this.clientesSatisfeitos = Math.round(STATS.clientesSatisfeitos * eased);
      this.servicosRealizados = Math.round(STATS.servicosRealizados * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
