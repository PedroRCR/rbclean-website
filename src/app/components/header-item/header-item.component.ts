import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-item',
    imports: [],
    templateUrl: './header-item.component.html',
    styleUrl: './header-item.component.scss'
})
export class HeaderItemComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) sectionId!: string;
  @Input() active = false;
}
