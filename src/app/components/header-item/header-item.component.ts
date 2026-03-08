import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-item',
  standalone: true,
  imports: [],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.scss'
})
export class HeaderItemComponent {
  @Input() text!: String;
}
