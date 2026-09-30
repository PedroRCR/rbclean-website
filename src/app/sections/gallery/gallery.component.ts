import { Component, HostListener, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GALLERY_IMAGES } from '../../content';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-gallery',
  imports: [TranslatePipe],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  // The current image is always images[0]; the arrows rotate the list.
  images: string[] = [...GALLERY_IMAGES];
  lightboxOpen = false;

  private readonly document = inject(DOCUMENT);

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
    this.lightboxOpen = true;
    this.document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.document.body.style.overflow = '';
  }

  // Close when clicking the dark backdrop (but not the image, arrows or thumbnails).
  onBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('lightbox') || target.classList.contains('lightbox-stage')) {
      this.closeLightbox();
    }
  }

  // Keyboard in the popup: Esc closes, arrow keys change image.
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.previousImage();
  }
}
