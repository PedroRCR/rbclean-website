import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-item',
  standalone: true,
  imports: [],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.scss',
})
export class HeaderItemComponent {
  @Input() text!: string;
  @Input() sectionId!: string;

  scrollTo() {
    const element = document.getElementById(this.sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
