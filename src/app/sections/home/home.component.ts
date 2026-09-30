import { Component, NgZone, afterNextRender, inject } from '@angular/core';
import { LogoTextComponent } from '../../components/logo-text/logo-text.component';
import { CONTACTS } from '../../content';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
    selector: 'app-home',
    imports: [LogoTextComponent, TranslatePipe],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly whatsappUrl = CONTACTS.whatsapp;
  whatsappBtnVisible = false;

  private readonly zone = inject(NgZone);

  constructor() {
    // Browser only: keeps the prerender from waiting for the timeout.
    // afterNextRender runs outside the Angular zone; zone.run makes sure
    // the change refreshes the view.
    afterNextRender(() => {
      this.zone.run(() => {
        setTimeout(() => {
          this.whatsappBtnVisible = true;
        }, 2000);
      });
    });
  }
}
