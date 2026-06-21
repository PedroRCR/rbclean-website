import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { LogoTextComponent } from "../../components/logo-text/logo-text.component";
import { ButtonType } from '../../../shared/enums';
import { ServicesComponent } from "../services/services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { EvaluationsComponent } from '../evaluations/evaluations.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, LogoTextComponent, ServicesComponent, AboutUsComponent, EvaluationsComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ButtonType = ButtonType;
}
