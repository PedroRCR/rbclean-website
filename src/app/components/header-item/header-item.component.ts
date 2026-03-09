import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'header-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-item.component.html',
  styleUrl: './header-item.component.scss'
})
export class HeaderItemComponent {
  @Input() text!: string;
  @Input() fragment!: string;

    scrollTo() {
    const element = document.getElementById(this.fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
