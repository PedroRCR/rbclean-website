import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { SplashScreenComponent } from './screens/splash-screen/splash-screen.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoTextComponent } from './components/logo-text/logo-text.component';
import { ServicesComponent } from './screens/services/services.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { EvaluationsComponent } from './screens/evaluations/evaluations.component';
import { GalleryComponent } from './screens/gallery/gallery.component';
import { ContactsComponent } from './screens/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    SplashScreenComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    LogoTextComponent,
    ServicesComponent,
    AboutUsComponent,
    EvaluationsComponent,
    GalleryComponent,
    ContactsComponent
  ],
})
export class AppComponent {
  title = 'rbclean-website';
  showSplash = true;

  onSplashFinished() {
    this.showSplash = false;
  }
}
