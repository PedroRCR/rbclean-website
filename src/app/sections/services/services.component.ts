import { Component, ElementRef, HostListener, NgZone, ViewChild, afterNextRender, inject } from '@angular/core';
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

  // Everything is derived from the real scroll position, so arrows and dots stay
  // correct whether the user clicks the arrows, swipes or uses a trackpad.
  canPrev = false;
  canNext = true;
  pages: number[] = []; // one dot per "page" (the cards that fit on screen)
  activePage = 0;

  private readonly zone = inject(NgZone);

  constructor() {
    // Measurements only exist in the browser; setTimeout applies them after hydration.
    afterNextRender(() => this.zone.run(() => setTimeout(() => this.update())));
  }

  private get track(): HTMLDivElement {
    return this.gridRef.nativeElement;
  }

  /** Width of one card + the gap between cards. */
  private get cardStep(): number {
    const cards = this.track.querySelectorAll<HTMLElement>('.service-card');
    if (cards.length < 2) return this.track.clientWidth;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  }

  /** How far one "page" scrolls: the cards that fully fit between the side margins. */
  private get pageWidth(): number {
    const step = this.cardStep;
    const style = getComputedStyle(this.track);
    const side = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const gap = parseFloat(style.columnGap) || 0;
    // n cards take n*step - gap; they fit while that is <= the visible width.
    const perPage = Math.max(1, Math.floor((this.track.clientWidth - side + gap) / step));
    return perPage * step;
  }

  private get maxScroll(): number {
    return this.track.scrollWidth - this.track.clientWidth;
  }

  next(): void {
    this.track.scrollBy({ left: this.pageWidth, behavior: 'smooth' });
  }

  prev(): void {
    this.track.scrollBy({ left: -this.pageWidth, behavior: 'smooth' });
  }

  goToPage(page: number): void {
    this.track.scrollTo({ left: Math.min(page * this.pageWidth, this.maxScroll), behavior: 'smooth' });
  }

  @HostListener('window:resize')
  update(): void {
    if (!this.gridRef) return;
    const left = this.track.scrollLeft;
    const max = this.maxScroll;
    this.canPrev = left > 1;
    this.canNext = left < max - 1;

    const pageCount = max > 0 ? Math.ceil(max / this.pageWidth) + 1 : 1;
    if (this.pages.length !== pageCount) {
      this.pages = Array.from({ length: pageCount }, (_, i) => i);
    }
    // At the end of the scroll the last dot is active, even if the last page is shorter.
    this.activePage = this.canNext ? Math.round(left / this.pageWidth) : pageCount - 1;
  }
}
