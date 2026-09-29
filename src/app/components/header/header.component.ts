import { Component, HostListener, NgZone, afterNextRender, inject } from '@angular/core';
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
  activeSection = '';
  atHome = true;

  private readonly zone = inject(NgZone);

  constructor() {
    // Se a página abrir já a meio (ex.: rbclean.pt/#contacts), acerta o estado inicial.
    afterNextRender(() => this.zone.run(() => this.onScroll()));
  }

  @HostListener('window:hashchange')
  onHashChange() {
    this.activeSection = location.hash.slice(1);
  }

  @HostListener('window:scroll')
  onScroll() {
    const home = document.getElementById('home');
    const headerHeight = 60;
    this.atHome = !!home && scrollY < home.offsetHeight - headerHeight;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
