import { Component } from '@angular/core';
import { LogoTextComponent } from '../logo-text/logo-text.component';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { CONTACTS, NAV_ITEMS } from '../../content';

@Component({
    selector: 'app-footer',
    imports: [LogoTextComponent, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly navItems = NAV_ITEMS;
  readonly contacts = CONTACTS;
  readonly year = new Date().getFullYear();
}
