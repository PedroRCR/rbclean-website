import { Component } from '@angular/core';
import { HeaderItemComponent } from "../header-item/header-item.component";
import { LogoTextComponent } from '../logo-text/logo-text.component';
import { ButtonType } from '../../../shared/enums';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent, LogoTextComponent, ]
})
export class HeaderComponent {
  ButtonType = ButtonType;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen:', this.menuOpen); 
  }

  scrollTo(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}
}
