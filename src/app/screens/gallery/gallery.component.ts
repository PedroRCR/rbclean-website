import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  selectedImage: GalleryItem | null = null;

  photos: GalleryItem[] = [
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Sofá' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Carpete' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Sofá' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Carpete' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Sofá' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Carpete' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Sofá' },
    { src: '../../../assets/images/rbclean-home-img.png', alt: 'Limpeza de Carpete' },

  ];

  openLightbox(photo: GalleryItem): void {
    this.selectedImage = photo;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  navigate(direction: 1 | -1): void {
    if (!this.selectedImage) return;
    const index = this.photos.indexOf(this.selectedImage);
    const next = (index + direction + this.photos.length) % this.photos.length;
    this.selectedImage = this.photos[next];
  }
}