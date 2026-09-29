import { Component, NgZone, afterNextRender, inject } from '@angular/core';
import { LogoTextComponent } from '../../components/logo-text/logo-text.component';
import { CONTACTS } from '../../content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly whatsappUrl = CONTACTS.whatsapp;
  whatsappBtnVisible = false;

  private readonly zone = inject(NgZone);

  constructor() {
    // Só no browser: evita que o pré-render fique à espera do timeout.
    // O afterNextRender corre fora da zona do Angular; o zone.run garante
    // que a alteração atualiza o ecrã.
    afterNextRender(() => {
      this.zone.run(() => {
        setTimeout(() => {
          this.whatsappBtnVisible = true;
        }, 2000);
      });
    });
  }
}
