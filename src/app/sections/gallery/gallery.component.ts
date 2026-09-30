import { Component, ElementRef, HostListener, ViewChild, inject, DOCUMENT } from '@angular/core';

import { GALLERY_IMAGES } from '../../content';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
    selector: 'app-gallery',
    imports: [TranslatePipe],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  // The current image is always images[0]; the arrows rotate the list.
  images: string[] = [...GALLERY_IMAGES];
  lightboxOpen = false;

  @ViewChild('lightbox') lightboxRef?: ElementRef<HTMLElement>;

  private readonly document = inject(DOCUMENT);
  // Element focused before the popup opened; focus goes back to it on close.
  private returnFocusTo: HTMLElement | null = null;

  nextImage() {
    const first = this.images.shift();
    this.images.push(first!);
  }

  previousImage() {
    const last = this.images.pop();
    this.images.unshift(last!);
  }

  goTo(img: string) {
    if (!this.images.includes(img)) return;
    while (this.images[0] !== img) {
      this.nextImage();
    }
  }

  openLightbox() {
    this.returnFocusTo = this.document.activeElement as HTMLElement | null;
    this.lightboxOpen = true;
    this.document.body.style.overflow = 'hidden';
    // Move keyboard focus into the popup once it is rendered.
    setTimeout(() => this.focusables()[0]?.focus());
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.document.body.style.overflow = '';
    this.returnFocusTo?.focus();
    this.returnFocusTo = null;
  }

  private focusables(): HTMLElement[] {
    return Array.from(this.lightboxRef?.nativeElement.querySelectorAll<HTMLElement>('button') ?? []);
  }

  // Keep Tab / Shift+Tab cycling inside the popup while it is open.
  private trapFocus(event: KeyboardEvent) {
    const items = this.focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = this.document.activeElement;
    if (event.shiftKey && (active === first || !items.includes(active as HTMLElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !items.includes(active as HTMLElement))) {
      event.preventDefault();
      first.focus();
    }
  }

  // Close when clicking the dark backdrop (but not the image, arrows or thumbnails).
  onBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('lightbox') || target.classList.contains('lightbox-stage')) {
      this.closeLightbox();
    }
  }

  // Keyboard in the popup: Esc closes, arrow keys change image, Tab stays inside.
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Tab') this.trapFocus(event);
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.previousImage();
  }
}
