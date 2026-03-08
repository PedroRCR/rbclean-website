// button.component.ts
import { Component, Input } from '@angular/core';
import { ButtonType } from '../../../shared/enums';

@Component({
  selector: 'app-button',
  standalone: true, 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input({required: true}) buttonType!: ButtonType;

  ButtonType = ButtonType;
}