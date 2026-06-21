import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images: string[] = [
    'https://picsum.photos/seed/1/800/600',
    'https://picsum.photos/seed/2/800/600',
    'https://picsum.photos/seed/3/800/600',
    'https://picsum.photos/seed/4/800/600',
    'https://picsum.photos/seed/5/800/600',
  ];

  nextImage() {
    const first = this.images.shift();
    this.images.push(first!);
  }

  previousImage() {
    const last = this.images.pop();
    this.images.unshift(last!);
  }
}
