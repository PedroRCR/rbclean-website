import { Injectable, NgZone, afterNextRender, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LANGS, Lang, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'rbclean-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly zone = inject(NgZone);

  // Português por omissão (é também a língua do HTML pré-renderizado).
  readonly lang = signal<Lang>('pt');

  constructor() {
    // No browser, recupera a língua escolhida numa visita anterior.
    // afterNextRender corre fora da zona do Angular; zone.run + setTimeout
    // aplicam a mudança já depois da hidratação e atualizam o ecrã.
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
    this.document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
    this.document.title = this.t('meta.title');
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Sem acesso ao localStorage (modo privado, etc.): a escolha só dura esta visita.
    }
  }

  /** Número com uma casa decimal no formato da língua: 5 -> "5,0" (pt) / "5.0" (en). */
  formatRating(value: number): string {
    return value.toLocaleString(this.lang() === 'pt' ? 'pt-PT' : 'en', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  /** Devolve o texto de uma chave como 'nav.services' na língua atual. */
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
