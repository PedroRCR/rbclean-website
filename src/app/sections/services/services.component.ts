import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { SERVICES } from '../../content';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @ViewChild('servicesGrid') gridRef!: ElementRef<HTMLDivElement>;

  readonly services = SERVICES;

  currentIndex = 0;

  private get cards(): HTMLElement[] {
    return Array.from(this.gridRef.nativeElement.querySelectorAll('.service-card'));
  }

  next(): void {
    const lastIndex = this.services.length - 1;
    this.currentIndex = Math.min(this.currentIndex + 1, lastIndex);
    this.scrollToCurrent();
  }

  prev(): void {
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
    this.scrollToCurrent();
  }

  private scrollToCurrent(): void {
    const card = this.cards[this.currentIndex];
    card?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  }
}
