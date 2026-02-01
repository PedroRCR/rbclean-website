import { Component } from '@angular/core';
import { HeaderItemComponent } from "../header-item/header-item.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderItemComponent]
})
export class HeaderComponent {

}
