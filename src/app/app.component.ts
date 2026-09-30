import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './sections/home/home.component';
import { ServicesComponent } from './sections/services/services.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { EvaluationsComponent } from './sections/evaluations/evaluations.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        HeaderComponent,
        HomeComponent,
        ServicesComponent,
        AboutUsComponent,
        EvaluationsComponent,
        GalleryComponent,
        ContactsComponent,
        FooterComponent,
    ]
})
export class AppComponent {}
