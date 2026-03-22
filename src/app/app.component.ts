import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./screens/home/home.component";
import { SplashScreenComponent } from "./screens/splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, HomeComponent, SplashScreenComponent]
})
export class AppComponent {
  title = 'rbclean-website';
  showSplash = true;

    onSplashFinished() {
    this.showSplash = false;
  }
}
