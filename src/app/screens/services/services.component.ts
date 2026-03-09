import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

export interface ServiceItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: ServiceItem[] = [
    { title: 'Limpeza Sofás', image: '../../../assets/images/rbclean-home-img.png' },
    { title: 'Limpeza Carpetes', image: '../../../assets/images/rbclean-home-img.png' },
    { title: 'Limpeza Colchões', image: '../../../assets/images/rbclean-home-img.png' },
    { title: 'Limpeza Cadeiras', image: '../../../assets/images/rbclean-home-img.png' },
    { title: 'Limpeza Bancos de Carros', image: '../../../assets/images/rbclean-home-img.png' },
    { title: 'Impermeabilização', image: '../../../assets/images/rbclean-home-img.png' },
  ];
}