import { Injectable, NgZone, afterNextRender, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { LANGS, Lang, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'rbclean-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly zone = inject(NgZone);

  // Portuguese by default (also the language of the prerendered HTML).
  readonly lang = signal<Lang>('pt');

  private readonly meta = inject(Meta);

  constructor() {
    // Runs during prerender too, so the static HTML ships with the Portuguese meta tags.
    this.applyMeta();

    // In the browser, restore the language chosen on a previous visit.
    // afterNextRender runs outside the Angular zone; zone.run + setTimeout
    // apply the change after hydration and refresh the view.
    afterNextRender(() => {
      this.zone.run(() =>
        setTimeout(() => {
          const saved = this.readSaved();
          if (saved && saved !== this.lang()) this.setLang(saved);
        }),
      );
    });
  }

  setLang(lang: Lang) {
    this.lang.set(lang);
    this.applyMeta();
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // No localStorage access (private mode, etc.): the choice only lasts this visit.
    }
  }

  /** <html lang>, title, description and link-preview (Open Graph) tags in the current language. */
  private applyMeta() {
    const lang = this.lang();
    const title = this.t('meta.title');
    const description = this.t('meta.description');
    this.document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
    this.document.title = title;
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'pt' ? 'pt_PT' : 'en_GB' });
  }

  /** Number with one decimal place in the language format: 5 -> "5,0" (pt) / "5.0" (en). */
  formatRating(value: number): string {
    return value.toLocaleString(this.lang() === 'pt' ? 'pt-PT' : 'en', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  /** Returns the text for a key such as 'nav.services' in the current language. */
  t(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], TRANSLATIONS[this.lang()]);
    return typeof value === 'string' ? value : key;
  }

  private readSaved(): Lang | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return LANGS.includes(saved as Lang) ? (saved as Lang) : null;
    } catch {
      return null;
    }
  }
}
