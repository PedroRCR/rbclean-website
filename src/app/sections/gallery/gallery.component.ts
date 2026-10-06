import { Component, ElementRef, HostListener, ViewChild, inject, DOCUMENT } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { GALLERY_IMAGES } from '../../content';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

// Horizontal distance (px) a finger/mouse must travel to count as a swipe.
const SWIPE_THRESHOLD = 40;

@Component({
    selector: 'app-gallery',
    imports: [TranslatePipe, NgTemplateOutlet],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  readonly images = GALLERY_IMAGES;
  // Index of the photo shown; the thumbnails keep their order and highlight this one.
  current = 0;
  lightboxOpen = false;

  @ViewChild('lightbox') lightboxRef?: ElementRef<HTMLElement>;

  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly i18n = inject(I18nService);
  // Element focused before the popup opened; focus goes back to it on close.
  private returnFocusTo: HTMLElement | null = null;
  private swipeStartX: number | null = null;
  // Set when a pointer gesture was a swipe, so the click that follows does not open the popup.
  private swiped = false;

  get image() {
    return this.images[this.current];
  }

  /** "Work done by RB Clean (3/9)": every photo gets its own alt / label. */
  altFor(index: number): string {
    return `${this.i18n.t('gallery.imageAlt')} (${index + 1}/${this.images.length})`;
  }

  show(index: number) {
    const count = this.images.length;
    this.current = ((index % count) + count) % count;
    // Once rendered, scroll the thumbnail strips so the active one is in view.
    setTimeout(() => this.centerActiveThumbs());
  }

  nextImage() {
    this.show(this.current + 1);
  }

  previousImage() {
    this.show(this.current - 1);
  }

  onPointerDown(event: PointerEvent) {
    this.swipeStartX = event.clientX;
    this.swiped = false;
  }

  onPointerUp(event: PointerEvent) {
    if (this.swipeStartX === null) return;
    const dx = event.clientX - this.swipeStartX;
    this.swipeStartX = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    this.swiped = true;
    if (dx < 0) this.nextImage();
    else this.previousImage();
  }

  openLightbox() {
    if (this.swiped) {
      this.swiped = false;
      return;
    }
    this.returnFocusTo = this.document.activeElement as HTMLElement | null;
    this.lightboxOpen = true;
    this.document.body.style.overflow = 'hidden';
    // Move keyboard focus into the popup once it is rendered.
    setTimeout(() => {
      this.focusables()[0]?.focus();
      this.centerActiveThumbs();
    });
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.document.body.style.overflow = '';
    this.returnFocusTo?.focus();
    this.returnFocusTo = null;
  }

  private centerActiveThumbs() {
    const behavior: ScrollBehavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    this.host.nativeElement.querySelectorAll<HTMLElement>('.thumbs').forEach((strip) => {
      const thumb = strip.querySelector<HTMLElement>('.thumb.active');
      if (!thumb) return;
      const left = thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2;
      strip.scrollTo({ left, behavior });
    });
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
