import { Component, HostListener, NgZone, afterNextRender, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { HeaderItemComponent } from '../header-item/header-item.component';
import { LogoTextComponent } from '../logo-text/logo-text.component';
import { NAV_ITEMS } from '../../content';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { LANGS } from '../../i18n/translations';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent, LogoTextComponent, TranslatePipe, NgTemplateOutlet],
})
export class HeaderComponent {
  readonly navItems = NAV_ITEMS;
  readonly langs = LANGS;
  readonly i18n = inject(I18nService);
  menuOpen = false;
  activeSection = '';
  atHome = true;

  private readonly zone = inject(NgZone);

  constructor() {
    // If the page opens mid-way (e.g. rbclean.pt/#contacts), set the initial state.
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
