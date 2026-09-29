import { Component } from '@angular/core';
import { GALLERY_IMAGES } from '../../content';

@Component({
  selector: 'app-gallery',
  imports: [],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images: string[] = [...GALLERY_IMAGES];

  nextImage() {
    const first = this.images.shift();
    this.images.push(first!);
  }

  previousImage() {
    const last = this.images.pop();
    this.images.unshift(last!);
  }
}
