import { Component, afterNextRender } from '@angular/core';
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

  constructor() {
    // Só no browser: evita que o pré-render fique à espera do timeout.
    afterNextRender(() => {
      setTimeout(() => {
        this.whatsappBtnVisible = true;
      }, 2000);
    });
  }
}
