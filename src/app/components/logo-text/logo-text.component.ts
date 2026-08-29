import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-text',
  standalone: true,
  imports: [],
  templateUrl: './logo-text.component.html',
  styleUrl: './logo-text.component.scss'
})
export class LogoTextComponent {
  @Input() homePage!: boolean;
  @Input() center!: boolean;
}
