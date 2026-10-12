# Werkwijze & Prompting Handleiding: Succesvolle Zoekmachine-Indexering (SEO) met Google AI Studio

**Documentstatus:** Definitief (v1.0)  
**Doelgroep:** Ontwikkelteams, projectleiders & prompt-engineers  
**Beschikbare downloadformaten:**
- **PDF-document:** `/SEO-Briefing-Google-AI-Studio.pdf` (ook via `/downloads/SEO-Briefing-Google-AI-Studio.pdf`)
- **Word-document (.docx):** `/SEO-Briefing-Google-AI-Studio.docx` (ook via `/downloads/SEO-Briefing-Google-AI-Studio.docx`)

---

## 1. Inleiding: Het Probleem bij SPA’s & Onze Bewezen Oplossing

Wanneer websites worden ontwikkeld met moderne JavaScript-frameworks via Google AI Studio (zoals React met Vite), genereert de tool standaard een **Single Page Application (SPA)**. Bij een standaard SPA levert de server slechts een minimale HTML-container met:

```html
<div id="root"></div>
```

Alle pagina-inhoud, teksten, afbeeldingen, navigatiestructuren en links worden pas in de webbrowser opgebouwd via client-side JavaScript.

### Waarom dit riskant is voor zoekmachines
Hoewel Googlebot in staat is om JavaScript uit te voeren, gebeurt dit in een uitgesteld proces (*"two-wave indexing"*). In de praktijk:
1. Kan het weken tot maanden duren voordat Google de pagina's volledig 'rendert' en begrijpt.
2. Worden interne links en tabellen soms niet tijdig meegeïndexeerd.
3. Krijgen zoekmachines in eerste instantie een vrijwel lege pagina te zien.

### Onze bewezen oplossing
Binnen dit project (*Hogedruktrailerkeuren.eu* & *Highpressuresteaminspection.eu*) hebben we bewezen dat websites gebouwd met Google AI Studio **direct vanaf dag 1 compleet en foutloos worden geïndexeerd en hoog ranken**. Hieronder staan de 6 technische pijlers die dit mogelijk maken.

---

## 2. De 6 Technische Pijlers van onze SEO-Werkwijze

### Pijler 1: Build-Time Static Site Pre-Rendering (SSG Snapshotting)
Dit is de **belangrijkste succesfactor**. Tijdens de build-fase (`npm run build`) voert een script (`scripts/prerender.ts`) alle routes van de applicatie alvast virtueel uit via Vite SSR en slaat de resulterende HTML op als fysieke bestanden:
- `/dist/index.html` (Homepage)
- `/dist/regelgeving-wbda-2016/index.html`
- `/dist/2-liter-grens-ped/index.html`
- etc.

**Het effect:**
- **0 ms wachttijd voor crawlers:** Zodra Googlebot langskomt, staat de volledige tekst, alle H1/H2-koppen, FAQ-vragen en tabellen direct in de platte HTML-broncode.
- **Hydration:** Zodra een bezoeker in de browser arriveert, neemt React de pagina naadloos over (`hydrateRoot`) zonder knipperen, waardoor calculators en interactieve modules direct soepel functioneren.

### Pijler 2: Granulaire & Commerciële Metadata per Pagina
Geen enkele algemene 'bedrijfsnaam' als titel, maar unieke metadata per route:
- **Meta Titles (max. 58 tekens):** Primair zoekwoord vooraan, gevolgd door een dwingende vraag of belofte (bijv. *"Hogedruktrailer Kopen? Check de Verborgen Keuringsplicht"*).
- **Meta Descriptions (140–155 tekens):** Sterke commerciële trigger, urgentie en een duidelijke Call-to-Action (bijv. *"Let op bij aankoop: brander > 2L betekent keuringsplicht. Ontdek in 30 sec of uw trailer vrijgesteld is!"*).
- **Social Previews:** Complete OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`) en Twitter Card tags voor previews op LinkedIn en WhatsApp.

### Pijler 3: Meertaligheid & Hreflang Tags (Geen Duplicate Content)
Bij meertalige of multi-domein websites (zoals onze BeNeLux-site in NL/FR/DE en de Europese Engelstalige site) moeten zoekmachines exact weten welke versie voor welk land/taal bedoeld is:
- **Hreflang-koppeling:** `<link rel="alternate" hreflang="nl" ... />`, `hreflang="fr"`, `hreflang="de"`, `hreflang="en"` en `hreflang="x-default"`.
- **Canonical tags:** Voorkomt dat URL-parameters (zoals `?lang=fr` of UTM-tags) door Google als dubbele content worden gezien.

### Pijler 4: Geavanceerde Structured Data (Schema.org / JSON-LD)
Zoekmachines worden gevoed met gestructureerde data in JSON-LD formaat via een `@graph` opzet:
- **FAQPage Schema:** Alle veelgestelde vragen en antwoorden zijn expliciet als `Question` en `Answer` gecodeerd. Google toont deze direct in de zoekresultatenpagina als interactieve accordeons.
- **WebApplication Schema:** Voor interactieve rekentools (zoals de TCO Keuringskosten Calculator).
- **WebSite & Organization Schema:** Voor officiële merkherkenning en sitelinks searchbox.

### Pijler 5: Technische Crawlbaarheid: Sitemap & Robots.txt
- **`robots.txt`:** Biedt expliciete toegang (`User-agent: *`, `Allow: /`) en verwijst direct naar de sitemap.
- **`sitemap.xml`:** Strikte standaard XML-indeling conform Google Search Console (met `<loc>`, `<priority>`, `<changefreq>`, `<lastmod>`). Zónder `xml-stylesheet` of cross-domain links die in Google Search Console tot de foutmelding *"Sitemap kan niet worden gelezen"* kunnen leiden.

### Pijler 6: Semantische HTML & Core Web Vitals
- **Semantische koppen:** Slechts één `<h1>` per pagina, logische `<h2>` en `<h3>` volgorde.
- **PageSpeed & Web Vitals:** Geen logge externe componentbibliotheken, maar strak Tailwind CSS, preconnect naar Google Fonts en lichtgewicht SVG-iconen. Laadtijd ligt onder de 1 seconde.

---

## 3. 10-Stappen Checklist vóór Livegang

1. [ ] **HTML-inspectie:** Bevat de ruwe HTML-broncode (via `curl` of *Paginabron weergeven*) alle teksten zónder JavaScript?
2. [ ] **Meta Titles:** Heeft elke pagina een unieke, commercieel aantrekkelijke `<title>` (onder 60 tekens)?
3. [ ] **Meta Descriptions:** Heeft elke pagina een actiegerichte `<meta name="description">` (140-155 tekens) met CTA?
4. [ ] **Robots.txt:** Bevat `robots.txt` een `Allow: /` en de juiste `Sitemap:` URL?
5. [ ] **Sitemap.xml:** Zijn alle routes opgenomen met actuele `<lastmod>` datums?
6. [ ] **Hreflang:** Zijn de taalvarianten en alternatieven consistent ingesteld?
7. [ ] **Schema.org:** Is er geldige JSON-LD aanwezig (FAQPage, WebSite)? (Check via [validator.schema.org](https://validator.schema.org/)).
8. [ ] **Afbeeldingen & Favicons:** Hebben alle afbeeldingen een `alt`-attribuut en zijn `favicon.svg` en `favicon.png` aanwezig?
9. [ ] **Canonical URL's:** Wijst elke pagina naar zijn eigen canonieke adres?
10. [ ] **404 & Interne Links:** Werkt de fallback-pagina en zijn er nul gebroken interne links?

---

## 4. Kant-en-Klare AI Studio Prompts (Direct te Kopiëren)

### Prompt 1: Initialisatie van een nieuw project met SEO-fundament
> "Bouw deze website als een snelle React + Vite applicatie, maar met de hoogste prioriteit voor 100% zoekmachine-indexering.
> 
> Vereisten voor het SEO-fundament:
> 1. Zorg voor Static Site Generation (SSG) / Pre-rendering via een build-script, zodat alle routes statisch naar dist/ worden weggeschreven met volledige HTML-inhoud.
> 2. Schrijf semantische HTML (exact 1x H1 per pagina, logische H2/H3 structuur).
> 3. Voeg in index.html en per pagina unieke, commerciële Meta Titles (max 58 tekens) en Meta Descriptions (140-155 tekens) toe.
> 4. Genereer een complete sitemap.xml en robots.txt in /public.
> 5. Voeg Schema.org JSON-LD gestructureerde data toe (@graph met WebSite en FAQPage met concrete vragen en antwoorden)."

### Prompt 2: Commerciële Meta-Tags & FAQ Schema Verrijking
> "Bekijk alle pagina’s van de applicatie. Optimaliseer de metadata:
> 1. Maak de Meta Titles en Descriptions commercieel pakkend: gebruik actieve werkwoorden, noem het belangrijkste pijnpunt van de bezoeker en voeg een trigger toe (bijv. 'Bereken in 30 sec', 'Check wettelijke eisen').
> 2. Voeg aan de FAQ-sectie een compleet Schema.org 'FAQPage' JSON-LD script toe, zodat Google de vragen direct toont in de zoekresultaten.
> 3. Controleer de hreflang tags en canonical links voor alle talen."

---

## 5. Veelgemaakte Valkuilen in Google AI Studio

1. **Alleen vertrouwen op client-side routing:** Vraag AI Studio altijd expliciet om een SSG pre-render build-stap.
2. **Generieke titels:** Vermijd titels als *"Home - Bedrijf"*. Gebruik altijd *"Zoekwoord | Belofte | Merk"*.
3. **Vergeten lastmod timestamps:** Zorg dat sitemaps altijd actuele datums bevatten in `YYYY-MM-DD` formaat.
