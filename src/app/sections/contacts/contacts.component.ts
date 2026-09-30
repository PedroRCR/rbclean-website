import { Component, inject } from '@angular/core';
import {
  CONTACTS,
  FAQ_KEYS,
  GOOGLE_REVIEWS,
  OPENING_HOURS,
  PAYMENT_METHODS,
  SERVICE_AREAS,
} from '../../content';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
    selector: 'app-contacts',
    imports: [TranslatePipe],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  readonly contacts = CONTACTS;
  readonly google = GOOGLE_REVIEWS;
  readonly serviceAreas = SERVICE_AREAS;
  readonly openingHours = OPENING_HOURS;
  readonly paymentMethods = PAYMENT_METHODS;
  readonly faqKeys = FAQ_KEYS;

  private readonly i18n = inject(I18nService);

  get whatsappUrl(): string {
    return `${CONTACTS.whatsapp}?text=${encodeURIComponent(this.i18n.t('contacts.whatsappMessage'))}`;
  }

  get ratingText(): string {
    return this.i18n.formatRating(GOOGLE_REVIEWS.rating);
  }

  get paymentsText(): string {
    return this.paymentMethods.map((m) => this.i18n.t(`contacts.payments.${m}`)).join(' · ');
  }
}
