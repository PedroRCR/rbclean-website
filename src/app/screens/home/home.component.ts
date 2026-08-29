import { Component } from '@angular/core';
import { LogoTextComponent } from '../../components/logo-text/logo-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
