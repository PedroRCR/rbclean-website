# RbcleanWebsite

Site de página única da RB Clean (limpeza e higienização de estofos), publicado em https://rbclean.pt/.

É um site **estático**: o `ng build` pré-renderiza a página para HTML e não é preciso servidor Node.

## Estrutura

- `src/app/content.ts`: dados do site (menu, serviços, avaliações, estatísticas, galeria, contactos).
- `src/app/i18n/translations.ts`: **todos os textos em PT e EN**. Nos templates usa-se `{{ 'nav.services' | t }}`. Para um texto novo: acrescentar a chave em `pt` e em `en` (o build falha se faltar numa das línguas).
- **Fontes alojadas no site** (sem pedidos ao Google): as de texto vêm dos pacotes `@fontsource/*` listados em `angular.json` → `styles`; os ícones são `src/assets/fonts/material-symbols-outlined.woff2`, só com os ícones usados. Para um ícone novo, ver o comentário no topo de `src/styles.scss`.
- `src/app/sections/`: uma pasta por secção da página (home, services, about-us, evaluations, gallery, contacts).
- `src/app/components/`: peças reutilizáveis (header, cartões, logótipo).
- `src/index.html`: título, descrição e metadados de SEO/partilha.
- `src/robots.txt`, `src/sitemap.xml`, `src/.htaccess`: copiados para a raiz do site no build.

## Desenvolvimento

```bash
npm start
```

Abre em `http://localhost:4200/` e recarrega sozinho ao guardar ficheiros.

## Build

```bash
npm run build
```

O site final fica em `dist/rbclean-website/browser/`. É esta pasta (e só esta) que se publica.

## Rotas

O site tem **uma única rota**: `/` (`index.html`, pré-renderizado). Não há Angular Router nem redirecionamentos.

Os itens do menu são âncoras na mesma página, não rotas: `#home`, `#services`, `#about-us`, `#evaluations`, `#gallery`, `#contacts`.

Ficheiros servidos na raiz: `/robots.txt`, `/sitemap.xml`, `/assets/images/*` e os bundles `main-*.js`, `polyfills-*.js`, `styles-*.css`.

## Publicar em rbclean.pt (cPanel)

1. `npm run build`.
2. No cPanel → *Gestor de Ficheiros*, abrir `public_html` e ativar *Definições → Mostrar ficheiros ocultos*.
3. Enviar **o conteúdo** de `dist/rbclean-website/browser/` para `public_html` (incluindo o ficheiro oculto `.htaccess`), por *Carregar* (`.zip` + *Extrair*) ou por FTP. `public_html` deve ficar só com estes ficheiros.
4. Abrir https://rbclean.pt/ e confirmar que a página aparece e que o menu desce até às secções.

Nas atualizações seguintes, repetir os mesmos passos; os ficheiros `.js` antigos com outro nome podem ser apagados.

### Depois de publicar (SEO)

- Registar o site na [Google Search Console](https://search.google.com/search-console) (propriedade de domínio `rbclean.pt`) e submeter `https://rbclean.pt/sitemap.xml`.
- Testar a pré-visualização de partilha em https://developers.facebook.com/tools/debug/ .

## Design

Figma https://www.figma.com/design/RlYLsSSGTm3p525twXmzOW/Sem-t%C3%ADtulo?node-id=0-1&p=f

##

All project and images are allowed to be public by the client.
