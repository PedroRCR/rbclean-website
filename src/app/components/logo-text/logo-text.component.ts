import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-logo-text',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './logo-text.component.html',
  styleUrl: './logo-text.component.scss'
})
export class LogoTextComponent {
  @Input() homePage!: boolean;
  @Input() center!: boolean;
}
