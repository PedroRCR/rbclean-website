import { Component } from '@angular/core';
import { HeaderItemComponent } from "../header-item/header-item.component";
import { LogoTextComponent } from '../logo-text/logo-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent, LogoTextComponent, ]
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen:', this.menuOpen); 
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
