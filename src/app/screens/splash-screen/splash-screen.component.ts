import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss'
})
export class SplashScreenComponent implements OnInit {
  @Output() finished = new EventEmitter<void>();
  hiding = false;

  ngOnInit() {
    setTimeout(() => {
      this.hiding = true;
      setTimeout(() => this.finished.emit(), 800);
    }, 2500);
  }
}