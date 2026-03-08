import { Component, Input } from '@angular/core';
import { ButtonType } from '../../../shared/enums';

@Component({
  selector: 'app-logo-text',
  standalone: true,
  imports: [],
  templateUrl: './logo-text.component.html',
  styleUrl: './logo-text.component.scss'
})
export class LogoTextComponent {
  @Input() homePage!: boolean;
}
