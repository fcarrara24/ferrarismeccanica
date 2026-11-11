# Piano di Implementazione: Sito Web Ferraris Meccanica

## 1. Obiettivo
Creare una presenza web istituzionale moderna, professionale e orientata alla conversione per Ferraris Meccanica, valorizzando l'esperienza ventennale e la precisione tecnica.

## 2. Tecnologie (Tech Stack)
- **Framework:** Vite + React + TypeScript (conforme setup precedente).
- **Styling:** Tailwind CSS.
- **Deployment:** GitHub Pages (automatizzato via `gh-pages`).

## 3. Struttura del Sito (Sitemap)
- **Home:** Hero, Chi Siamo (estratto), Servizi, Anteprima Macchine, Call to Action (Contatti).
- **Chi Siamo:** Storia aziendale, Focus Oil&Gas, Mission.
- **Parco Macchine:** Dettaglio tecnico strutturato.
- **Portfolio:** Gallery delle lavorazioni.
- **Contatti:** Form, mappa, info.

## 4. Strategia Asset Visivi e SEO
- **Asset:** Scontorno e ottimizzazione WebP delle foto (`da_scontornare/`).
- **SEO:**
  - Implementazione metatag dinamici (Title, Description, OpenGraph) per ogni pagina.
  - Struttura semantica HTML5 per migliore indicizzazione.
  - File `sitemap.xml` e `robots.txt`.

## 5. Fasi di Sviluppo
1.  **Fase 1: Setup** (Inizializzazione Vite, Configurazione TypeScript/Tailwind).
2.  **Fase 2: Struttura** (Sviluppo componenti e routing).
3.  **Fase 3: Contenuti & SEO** (Testi, immagini, tag SEO).
4.  **Fase 4: Deploy & Test** (Configurazione `gh-pages`, verifiche finali).

## 6. Deployment (GitHub Pages)
- Utilizzo dello script `deploy` (`npm run build && gh-pages -d dist --dotfiles`).
- Configurazione `homepage: "."` nel `package.json` per corretti path relativi.

## 7. Guida allo Sviluppo Futuro
- **Aggiornamento Contenuti:** Modificare i file JSON/componenti React nella cartella `src/`.
- **Aggiunta Foto:** Caricare in `public/assets/`, ottimizzare e aggiungere il riferimento nel componente gallery.
- **Deploy:** Eseguire `npm run deploy` per aggiornare il sito live su GitHub Pages.
- **SEO:** Mantenere aggiornati i metatag nel layout principale o nei componenti pagina.
