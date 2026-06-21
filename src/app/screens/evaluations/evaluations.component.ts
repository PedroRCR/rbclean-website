import { Component } from '@angular/core';
import { EvaluationComponent } from '../../components/evaluation/evaluation.component';

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [EvaluationComponent],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.scss',
})
export class EvaluationsComponent {
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
}
