import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EvaluationComponent } from '../../components/evaluation/evaluation.component';

const CLIENTES_SATISFEITOS_TARGET = 100;
const SERVICOS_REALIZADOS_TARGET = 300;
const COUNT_UP_DURATION_MS = 1500;

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [EvaluationComponent],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.scss',
})
export class EvaluationsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statsHeader') statsHeader?: ElementRef<HTMLElement>;

  clientesSatisfeitos = 0;
  servicosRealizados = 0;

  private observer?: IntersectionObserver;

  ListOfEvaluations = [
    {
      numberOfStars: 5,
      comment:
        'Excelente profissional, tinha tinta numas cadeiras e a minha criança tinha feito uma pintura no sofá e ficou tudo impecável! Recomendo!',
    },
    {
      numberOfStars: 5,
      comment: 'Limpeza bem feita, rápida e a um ótimo preço!',
    },
    {
      numberOfStars: 5,
      comment:
        'Excelente profissional...Trabalhou Com todo o cuidado durante todo o processo, não só com o mobiliário como com o espaço envolvente... Muito obrigado',
    },
    {
      numberOfStars: 5,
      comment:
        'O meu sofá estava com bastantes manchas. Posso dizer que ficou como novo. O Rui fez um excelente trabalho.',
    },
    {
      numberOfStars: 5,
      comment:
        'Atendimento espetacular, o sofá ficou impecável, MUITO cheiroso, todos elogiaram, ficou como novo! Recomendo a todos, serviços de confiança, 5 ⭐️',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Fiquei muito satisfeito com o serviço! O Rui foi extremamente profissional, pontual e rápido na limpeza dos bancos do meu carro. O resultado ficou excelente, os estofados parecem novos! Além disso, ainda teve o cuidado de limpar o tecido das portas, o que foi uma ótima surpresa. Atendimento de qualidade, com atenção aos detalhes. Recomendo sem dúvida!',
    },
    {
      numberOfStars: 5,
      comment:
        'Trabalho muito bem feito, ficou super limpo que até parecia novo como veio da loja',
    },
  ];

  ngOnInit() {
    this.ListOfEvaluations = [...this.ListOfEvaluations]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined' || !this.statsHeader) {
      return;
    }

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

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateCountUp(): void {
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / COUNT_UP_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.clientesSatisfeitos = Math.round(CLIENTES_SATISFEITOS_TARGET * eased);
      this.servicosRealizados = Math.round(SERVICOS_REALIZADOS_TARGET * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
