import { Component } from '@angular/core';
import { HeaderItemComponent } from "../header-item/header-item.component";
import { ButtonComponent } from '../components/button/button.component';
import { LogoTextComponent } from "../components/logo-text/logo-text.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent, ButtonComponent, LogoTextComponent]
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen:', this.menuOpen); // check if it's firing
  }
}
