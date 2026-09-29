import { Component } from '@angular/core';
import { HeaderItemComponent } from '../header-item/header-item.component';
import { LogoTextComponent } from '../logo-text/logo-text.component';
import { NAV_ITEMS } from '../../content';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent, LogoTextComponent],
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
