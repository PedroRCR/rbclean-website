import { Component } from '@angular/core';
import { LogoTextComponent } from '../../components/logo-text/logo-text.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [LogoTextComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
