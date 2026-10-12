import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
  WidthType,
  ShadingType,
  AlignmentType,
} from 'docx';

// Ensure output directories exist
const rootDir = process.cwd();
const publicDir = path.resolve(rootDir, 'public');
const downloadsDir = path.resolve(publicDir, 'downloads');

if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// ==========================================
// 1. GENERATE PDF DOCUMENT
// ==========================================
function generatePDF(): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfPath = path.resolve(downloadsDir, 'SEO-Briefing-Google-AI-Studio.pdf');
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 45, bottom: 45, left: 45, right: 45 },
      bufferPages: true,
      info: {
        Title: 'SEO & Indexering Werkwijze - Google AI Studio',
        Author: 'AI Studio Engineering Team',
        Subject: 'Handleiding & Prompting Templates voor Zoekmachine-indexering in Google AI Studio',
        Keywords: 'SEO, Google AI Studio, Indexering, SSG, Schema.org, Prompting, Web Development',
      },
    });

    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // Helpers
    const primaryColor = '#0F172A'; // Slate 900
    const secondaryColor = '#2563EB'; // Blue 600
    const bodyColor = '#334155'; // Slate 700
    const lightBgColor = '#F8FAFC'; // Slate 50
    const borderBoxColor = '#CBD5E1'; // Slate 300
    const accentGreen = '#0D9488'; // Teal 600

    function headerBadge(text: string) {
      doc.save();
      doc.roundedRect(45, doc.y, 220, 18, 3).fill('#EFF6FF');
      doc.fillColor(secondaryColor).fontSize(8.5).font('Helvetica-Bold');
      doc.text(text.toUpperCase(), 52, doc.y + 4, { characterSpacing: 0.5 });
      doc.restore();
      doc.y += 24;
    }

    function h1(title: string) {
      doc.fillColor(primaryColor).fontSize(20).font('Helvetica-Bold');
      doc.text(title, { lineGap: 3 });
      doc.y += 4;
    }

    function h2(title: string) {
      doc.moveDown(0.8);
      // Small accent line
      doc.save();
      doc.rect(45, doc.y, 3, 16).fill(secondaryColor);
      doc.restore();
      doc.fillColor(primaryColor).fontSize(13.5).font('Helvetica-Bold');
      doc.text(title, 55, doc.y + 1, { lineGap: 2 });
      doc.x = 45; // reset x
      doc.y += 5;
    }

    function h3(title: string) {
      doc.moveDown(0.5);
      doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold');
      doc.text(title, { lineGap: 2 });
      doc.y += 2;
    }

    function p(text: string) {
      doc.fillColor(bodyColor).fontSize(9.5).font('Helvetica');
      doc.text(text, { lineGap: 2.5, paragraphGap: 5 });
    }

    function bullet(title: string, desc: string) {
      doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold');
      doc.text(`• ${title}: `, { continued: true });
      doc.fillColor(bodyColor).font('Helvetica');
      doc.text(desc, { lineGap: 2 });
      doc.y += 2;
    }

    function calloutBox(title: string, content: string[], bgColor = '#F8FAFC', borderColor = '#CBD5E1') {
      const startY = doc.y;
      const width = doc.page.width - 90;
      doc.save();
      
      // Calculate height roughly or draw box after
      // In PDFKit we measure text
      let textHeight = 18; // title height
      doc.fontSize(8.5).font('Helvetica');
      for (const line of content) {
        textHeight += doc.heightOfString(line, { width: width - 24, lineGap: 2 }) + 3;
      }

      // Check page break
      if (startY + textHeight + 20 > doc.page.height - 45) {
        doc.addPage();
      }

      const boxY = doc.y;
      doc.roundedRect(45, boxY, width, textHeight + 14, 4)
         .fillAndStroke(bgColor, borderColor);

      doc.fillColor(primaryColor).fontSize(9.5).font('Helvetica-Bold');
      doc.text(title, 55, boxY + 8);

      let currentY = boxY + 22;
      doc.fontSize(8.5).font('Helvetica').fillColor(bodyColor);
      for (const line of content) {
        doc.text(line, 55, currentY, { width: width - 20, lineGap: 2 });
        currentY += doc.heightOfString(line, { width: width - 20, lineGap: 2 }) + 3;
      }
      doc.restore();
      doc.y = boxY + textHeight + 20;
    }

    function promptBox(title: string, promptText: string) {
      const width = doc.page.width - 90;
      doc.fontSize(8).font('Courier');
      const textHeight = doc.heightOfString(promptText, { width: width - 24, lineGap: 2 });

      if (doc.y + textHeight + 35 > doc.page.height - 45) {
        doc.addPage();
      }

      const boxY = doc.y;
      doc.save();
      doc.roundedRect(45, boxY, width, textHeight + 28, 4)
         .fillAndStroke('#0F172A', '#1E293B');

      doc.fillColor('#38BDF8').fontSize(9).font('Helvetica-Bold');
      doc.text(`> PROMPT TEMPLATE: ${title.toUpperCase()}`, 55, boxY + 7);

      doc.fillColor('#E2E8F0').fontSize(8).font('Courier');
      doc.text(promptText, 55, boxY + 22, { width: width - 20, lineGap: 2 });
      doc.restore();
      doc.y = boxY + textHeight + 35;
    }

    // --- COVER / HEADER ---
    headerBadge('Interne Briefing & AI Studio Gids');
    h1('Succesvolle Zoekmachine-Indexering (SEO)\nmet Google AI Studio');

    doc.fillColor('#64748B').fontSize(10).font('Helvetica-Oblique');
    doc.text('Geverifieerde werkwijze, technische pijlers en herbruikbare prompt-templates voor toekomstige webprojecten.', { lineGap: 3 });
    doc.moveDown(0.6);

    // Meta metadata row
    doc.save();
    doc.rect(45, doc.y, doc.page.width - 90, 24).fill('#F1F5F9');
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica');
    doc.text('Versie: 1.0 (Definitief)   |   Onderwerp: SEO Best-Practices in AI Studio   |   Toepassing: Productie-implementatie & Prompting', 55, doc.y + 7);
    doc.restore();
    doc.y += 32;

    // --- HOOFDSTUK 1 ---
    h2('1. Inleiding: Het Probleem bij SPA\'s & Onze Bewezen Oplossing');
    p('Wanneer websites worden gebouwd met moderne frameworks (zoals React, Vue of Vite via Google AI Studio), ontstaan standaard Single Page Applications (SPA\'s). In een standaard SPA levert de server slechts een lege HTML-pagina af met een <div id="root"></div>. De daadwerkelijke content wordt pas in de browser geladen via JavaScript.');
    p('Voor zoekmachines zoals Google vormt dit een groot risico: hoewel Googlebot JavaScript kan uitvoeren, gebeurt dit in een uitgesteld render-proces ("two-wave indexing"). Als gevolg duurt indexering vaak weken of maanden, of worden pagina\'s onvolledig geïndexeerd.');
    p('Binnen ons project (Hogedruktrailerkeuren.eu & Highpressuresteaminspection.eu) hebben we bewezen dat met een gerichte architectuur websites direct vanaf dag 1 foutloos en compleet in Google worden opgenomen. Dit document legt uit hoe we dat hebben gedaan en hoe dit replicabel is voor alle volgende projecten.');

    // --- HOOFDSTUK 2 ---
    h2('2. De 6 Technische Pijlers van onze SEO-Werkwijze');

    h3('Pijler 1: Build-Time Static Site Pre-Rendering (SSG)');
    p('De belangrijkste succesfactor is dat we de React-applicatie tijdens de build-fase al volledig omzetten naar statische HTML-bestanden. Dit hebben we gerealiseerd via een op maat gemaakt prerender-script (scripts/prerender.ts) dat draait op Vite SSR.');
    bullet('Wat er gebeurt', 'Voor elke route in de website wordt een unieke map met een statische index.html gegenereerd (bijv. /ped-wetgeving/index.html).');
    bullet('Crawl-snelheid', 'Wanneer Googlebot of een bezoeker de pagina opvraagt, is de volledige tekst, H1, H2, FAQ en interne links direct in de ruwe broncode aanwezig (0 ms wachttijd op JavaScript).');
    bullet('Hydration', 'In de browser neemt React de pagina naadloos over (hydrateRoot) zonder knipperen, waardoor alle interactieve elementen (zoals calculators) direct functioneren.');

    h3('Pijler 2: Granulaire & Commerciële Metadata per Pagina');
    p('Elke pagina heeft een unieke, handmatig geoptimaliseerde Title Tag en Meta Description. We hebben bewust gekozen voor een commerciële, actiegerichte toonzetting die zoekers aanzet tot klikken (hoge Click-Through Rate / CTR).');
    bullet('Meta Titles', 'Onder 60 tekens, primair zoekwoord vooraan, gevolgd door een dwingende vraag of belofte (bijv. "Hogedruktrailer Kopen? Check de Verborgen Keuringsplicht").');
    bullet('Meta Descriptions', 'Tussen 140 en 155 tekens, met urgentie en duidelijke Call-to-Action (bijv. "Let op bij aankoop: brander > 2L betekent keuringsplicht. Ontdek in 30 sec of uw trailer vrijgesteld is!").');
    bullet('Social Share Previews', 'Volledige OpenGraph (og:title, og:description, og:image) en Twitter Card tags voor professionele weergave op LinkedIn, WhatsApp en X.');

    h3('Pijler 3: Meertaligheid & Hreflang Tags (Geen Duplicate Content)');
    p('Bij websites met meerdere talen of domeinen (bijv. .eu BeNeLux en Engelstalig internationaal) is het cruciaal om zoekmachines te vertellen welke taalvariant voor welk publiek bedoeld is.');
    bullet('Hreflang-implementatie', 'In de HTML-head staan expliciete links: rel="alternate" hreflang="nl", hreflang="fr", hreflang="de", hreflang="en" en hreflang="x-default".');
    bullet('Canonical URL\'s', 'Elke pagina verwijst met rel="canonical" naar zijn eigen hoofdadres, zodat query-parameters (zoals ?lang=fr) nooit leiden tot duplicate-content straffen.');

    // Page break for clean flow
    doc.addPage();

    h3('Pijler 4: Geavanceerde Structured Data (Schema.org / JSON-LD)');
    p('Zoekmachines begrijpen platte tekst, maar zijn dol op gestructureerde data in JSON-LD formaat. We hebben een rijke @graph structuur opgenomen in de head:');
    bullet('FAQPage Schema', 'Alle veelgestelde vragen en antwoorden zijn als Question/Answer objecten opgenomen. Google toont deze direct in de zoekresultaten als inklapbare antwoorden.');
    bullet('WebApplication Schema', 'Voor tools (zoals de TCO Keuringskosten Calculator) zodat Google herkent dat het om een interactieve bedrijfsapplicatie gaat.');
    bullet('WebSite & Organization', 'Duidelijke autoriteit, naamgeving, taal en uitgever.');

    h3('Pijler 5: Technische Crawlbaarheid: Sitemap & Robots.txt');
    bullet('robots.txt', 'Directe en foutloze toegang voor alle User-agents (Allow: /) en een expliciete verwijzing naar de XML Sitemap.');
    bullet('sitemap.xml', 'Strikte standaard XML-indeling conform Google Search Console (loc, priority, changefreq, lastmod in ISO-formaat). Geen xml-stylesheet of cross-domain links die de GSC-parser kunnen blokkeren.');

    h3('Pijler 6: Semantische HTML & Core Web Vitals');
    bullet('HTML Hiërarchie', 'Slechts één <h1> per pagina, gevolgd door een logische structuur van <h2> en <h3>. Geen lege koppen of styling-pillen.');
    bullet('Core Web Vitals', 'Dankzij Tailwind CSS (geen zware externe bibliotheken), preconnect naar Google Fonts, en snelle SVG icons scoort de site 95-100 op PageSpeed Insights.');

    // --- HOOFDSTUK 3 ---
    h2('3. 10-Stappen Checklist vóór Livegang');
    const checklistItems = [
      '1. Bevat de HTML-broncode volledige tekst zonder dat JavaScript aan hoeft te staan? (Test met curl of View Source).',
      '2. Heeft elke route een unieke, commercieel aantrekkelijke <title> (onder 60 tekens)?',
      '3. Heeft elke route een unieke <meta name="description"> (140-155 tekens) met een duidelijke Call-to-Action?',
      '4. Staat in robots.txt een Allow: / en een werkende link naar sitemap.xml?',
      '5. Bevat sitemap.xml alle live URL\'s en kloppen de datums in <lastmod>?',
      '6. Zijn alle hreflang tags consistent over alle taalvarianten en domeinen verdeeld?',
      '7. Is er geldige Schema.org JSON-LD aanwezig (FAQPage, WebSite, WebApplication)? Test via schema.org validator.',
      '8. Hebben alle afbeeldingen een betekenisvol alt-attribuut en zijn favicon.svg + favicon.png ingesteld?',
      '9. Werkt de Canonical URL op elke pagina foutloos?',
      '10. Is er een 404-pagina aanwezig en blijven er geen gebroken interne links over?',
    ];
    calloutBox('Checklist voor Nieuwe Projecten', checklistItems, '#F0FDF4', '#86EFAC');

    // --- HOOFDSTUK 4 ---
    h2('4. Kant-en-Klare AI Studio Prompts (Direct te Kopiëren)');
    p('Gebruik onderstaande prompts letterlijk wanneer je een nieuw project start in Google AI Studio. Dit dwingt de assistent direct in de juiste architectuur:');

    promptBox(
      'Prompt 1: Initialisatie met SEO & SSG Fundament',
      `"Bouw deze website als een snelle React + Vite applicatie, maar met de nadruk op 100% zoekmachine-indexering.

Vereisten voor het SEO-fundament:
1. Zorg voor Static Site Generation (SSG) / Pre-rendering via een build-script, zodat alle routes statisch naar dist/ worden weggeschreven met volledige HTML-inhoud.
2. Schrijf semantische HTML (exact 1x H1 per pagina, logische H2/H3 structuur).
3. Voeg in index.html en per pagina unieke, commerciële Meta Titles (max 58 tekens) en Meta Descriptions (140-155 tekens) toe.
4. Genereer een complete sitemap.xml en robots.txt in /public.
5. Voeg Schema.org JSON-LD gestructureerde data toe (@graph met WebSite en FAQPage met concrete vragen en antwoorden)."`
    );

    promptBox(
      'Prompt 2: Commerciële Meta-Tags & FAQ Schema Verrijking',
      `"Bekijk alle pagina's van de applicatie. Optimaliseer de metadata:
1. Maak de Meta Titles en Descriptions commercieel pakkend: gebruik actieve werkwoorden, noem het belangrijkste pijnpunt van de bezoeker en voeg een trigger toe (bijv. 'Bereken in 30 sec', 'Check wettelijke eisen').
2. Voeg aan de FAQ-sectie een compleet Schema.org 'FAQPage' JSON-LD script toe, zodat Google de vragen direct toont in de zoekresultaten.
3. Controleer de hreflang tags en canonical links voor alle talen."`
    );

    // --- HOOFDSTUK 5 ---
    h2('5. Veelgemaakte Valkuilen in Google AI Studio');
    bullet('Valkuil 1: Alleen vertrouwen op client-side routing', 'Als je alleen react-router-dom gebruikt zonder SSG pre-render, ziet Googlebot alleen een witte pagina. Vraag AI Studio altijd om een SSG prerender-script in scripts/prerender.ts.');
    bullet('Valkuil 2: Vage of generieke meta-titels', 'Vermijd titels als "Home - Bedrijfsnaam". Gebruik altijd "Zoekwoord | Belofte | Merk".');
    bullet('Valkuil 3: Vergeten lastmod datums in de sitemap', 'Zoekmachines geven voorrang aan sitemaps met actuele lastmod timestamps in YYYY-MM-DD formaat.');

    // FOOTER ON ALL PAGES
    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      doc.save();
      doc.strokeColor('#E2E8F0').lineWidth(0.5);
      doc.moveTo(45, doc.page.height - 35).lineTo(doc.page.width - 45, doc.page.height - 35).stroke();
      doc.fillColor('#94A3B8').fontSize(7.5).font('Helvetica');
      doc.text(
        'SEO & Indexering Handleiding - Google AI Studio Projecten',
        45,
        doc.page.height - 28
      );
      doc.text(
        `Pagina ${i + 1} van ${range.count}`,
        doc.page.width - 120,
        doc.page.height - 28,
        { align: 'right' }
      );
      doc.restore();
    }

    doc.end();

    stream.on('finish', () => resolve(pdfPath));
    stream.on('error', (err) => reject(err));
  });
}

// ==========================================
// 2. GENERATE WORD (.DOCX) DOCUMENT
// ==========================================
async function generateDocx(): Promise<string> {
  const docxPath = path.resolve(downloadsDir, 'SEO-Briefing-Google-AI-Studio.docx');

  const doc = new Document({
    creator: 'Google AI Studio Engineering Team',
    title: 'SEO & Indexering Werkwijze - Google AI Studio',
    description: 'Praktijkhandleiding en herbruikbare prompt-templates voor zoekmachine-indexering in Google AI Studio',
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 22, // 11pt
            color: '334155',
          },
        },
      },
      paragraphStyles: [
        {
          id: 'Heading1',
          name: 'Heading 1',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            font: 'Calibri',
            size: 36, // 18pt
            bold: true,
            color: '0F172A',
          },
          paragraph: {
            spacing: { before: 240, after: 120 },
          },
        },
        {
          id: 'Heading2',
          name: 'Heading 2',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            font: 'Calibri',
            size: 28, // 14pt
            bold: true,
            color: '2563EB',
          },
          paragraph: {
            spacing: { before: 200, after: 100 },
          },
        },
        {
          id: 'Heading3',
          name: 'Heading 3',
          basedOn: 'Normal',
          next: 'Normal',
          run: {
            font: 'Calibri',
            size: 24, // 12pt
            bold: true,
            color: '0F172A',
          },
          paragraph: {
            spacing: { before: 160, after: 80 },
          },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch
              bottom: 1440,
              left: 1440,
              right: 1440,
            },
          },
        },
        children: [
          // Title
          new Paragraph({
            text: 'Werkwijze & Prompting Handleiding: Succesvolle Zoekmachine-Indexering (SEO) met Google AI Studio',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Praktijkgids & Herbruikbare Prompt-Templates voor Toekomstige Webprojecten',
                italics: true,
                color: '64748B',
                size: 24, // 12pt
              }),
            ],
            spacing: { after: 200 },
          }),

          // Metadata Callout Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'EFF6FF' },
                    borders: {
                      top: { style: BorderStyle.SINGLE, size: 4, color: 'BFDBFE' },
                      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'BFDBFE' },
                      left: { style: BorderStyle.SINGLE, size: 16, color: '2563EB' },
                      right: { style: BorderStyle.SINGLE, size: 4, color: 'BFDBFE' },
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Status: ', bold: true, color: '1E3A8A' }),
                          new TextRun({ text: 'Definitieve Praktijkbriefing   |   ' }),
                          new TextRun({ text: 'Toepassing: ', bold: true, color: '1E3A8A' }),
                          new TextRun({ text: 'Ontwikkelteams & AI Studio Prompting' }),
                        ],
                      }),
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Doel: ', bold: true, color: '1E3A8A' }),
                          new TextRun({
                            text: '100% gegarandeerde zoekmachine-herkenning en snelle indexering in Google voor alle nieuwe webprojecten gebouwd met Google AI Studio.',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

          new Paragraph({ spacing: { before: 200 } }),

          // Hoofdstuk 1
          new Paragraph({
            text: '1. Inleiding: Het Probleem bij SPA’s & Onze Bewezen Oplossing',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Wanneer websites worden ontwikkeld met moderne JavaScript-frameworks via Google AI Studio (zoals React met Vite), genereert de tool standaard een Single Page Application (SPA). Bij een traditionele SPA levert de server slechts een lege HTML-pagina met een minimale container (zoals <div id="root"></div>). Alle teksten, afbeeldingen en navigatiestructuren worden pas in de browser opgebouwd via client-side JavaScript.',
              }),
            ],
            spacing: { after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Voor zoekmachines zoals Google, Bing en DuckDuckGo levert dit een aanzienlijk risico op. Hoewel Googlebot in staat is om JavaScript uit te voeren, gebeurt dit in een uitgesteld proces ("two-wave indexing"). In de praktijk kan het weken tot maanden duren voordat Google een client-side gerenderde pagina begrijpt, en vaak worden essentiële elementen (zoals interne links en rich content) gemist.',
              }),
            ],
            spacing: { after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Binnen ons project (Hogedruktrailerkeuren.eu & Highpressuresteaminspection.eu) hebben we bewezen dat het mogelijk is om websites binnen Google AI Studio te ontwikkelen die vanaf dag 1 foutloos en razendsnel worden opgepikt door Google. Dit document beschrijft de exacte 6 pijlers en levert herbruikbare templates voor uw volgende projecten.',
              }),
            ],
            spacing: { after: 200 },
          }),

          // Hoofdstuk 2
          new Paragraph({
            text: '2. De 6 Technische Pijlers van onze SEO-Werkwijze',
            heading: HeadingLevel.HEADING_2,
          }),

          new Paragraph({
            text: 'Pijler 1: Build-Time Static Site Pre-Rendering (SSG)',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'De allerbelangrijkste pijler is pre-rendering. Tijdens de build-stap (npm run build) voert een Node/Vite script (scripts/prerender.ts) alle routes van de applicatie alvast uit en slaat de resulterende HTML op als fysieke bestanden in de dist/-map (bijv. /ped-wetgeving/index.html).',
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: '• 0 ms wachttijd voor crawlers: Googlebot ontvangt bij het eerste verzoek direct de complete tekst, alle H1- en H2-koppen, tabellen en interne links.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Perfecte hydratatie: Zodra een bezoeker de pagina opent, activeert React de interactieve modules (zoals rekenmodules) naadloos via hydrateRoot.',
            bullet: { level: 0 },
          }),

          new Paragraph({
            text: 'Pijler 2: Granulaire & Commerciële Metadata per Pagina',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Geen statische overkoepelende titel voor de hele site, maar dynamische vervanging per route tijdens de pre-render:',
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: '• Meta Titles: Strikt onder de 60 tekens, primair zoekwoord vooraan, met een prikkelende vraag of duidelijke waardepropositie (bijv. "Hogedruktrailer Kopen? Check de Verborgen Keuringsplicht").',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Meta Descriptions: Tussen 140 en 155 tekens, met urgentie, risicovermijding en een dwingende Call-to-Action (bijv. "Ontdek in 30 sec of uw trailer vrijgesteld is!").',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• OpenGraph & Social Cards: Correcte og:title, og:description en og:image zodat links gedeeld op LinkedIn en WhatsApp direct een professionele preview tonen.',
            bullet: { level: 0 },
          }),

          new Paragraph({
            text: 'Pijler 3: Meertaligheid & Hreflang Tags (Geen Duplicate Content)',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: '• Hreflang tags (rel="alternate" hreflang="nl|fr|de|en|x-default") verbinden alle taal- en domeinvarianten aan elkaar. Zo weet Google exact welke pagina aan welke bezoeker getoond moet worden.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Canonical tags op elke pagina voorkomen dat query-parameters (zoals ?lang=fr of tracking-parameters) worden bestraft als duplicate content.',
            bullet: { level: 0 },
          }),

          new Paragraph({
            text: 'Pijler 4: Geavanceerde Structured Data (Schema.org / JSON-LD)',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Zoekmachines geven extra zichtbaarheid aan websites met geldige schema-markeringen. In de head is een complete @graph structuur opgenomen:',
              }),
            ],
            spacing: { after: 100 },
          }),
          new Paragraph({
            text: '• FAQPage Schema: Vragen en antwoorden worden door Google als interactieve uitklapmenu’s direct in de zoekresultatenpagina getoond.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• WebApplication & TechnicalArticle: Classificeert berekeningstools en wetgevingsartikelen als hoogwaardige informatiebronnen.',
            bullet: { level: 0 },
          }),

          new Paragraph({
            text: 'Pijler 5: Technische Crawlbaarheid: Sitemap & Robots.txt',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: '• robots.txt biedt volledige toegang (Allow: /) en verwijst direct naar de sitemap.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• sitemap.xml gebruikt de strikte standaard indeling conform Google Search Console (loc, priority, changefreq, lastmod). Bevat géén xml-stylesheet of cross-domain links die de GSC-parser kunnen verstoren.',
            bullet: { level: 0 },
          }),

          new Paragraph({
            text: 'Pijler 6: Semantische HTML & Core Web Vitals',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: '• Strikte semantiek: Slechts één <h1> per pagina, logische <h2> en <h3> volgorde, betekenisvolle paragrafen en alt-tags voor alle afbeeldingen.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Hoge Core Web Vitals: Laadtijd binnen 0.8s dankzij Tailwind CSS, preconnect naar lettertypen en geen onnodige JavaScript-ballast.',
            bullet: { level: 0 },
          }),

          new Paragraph({ spacing: { before: 200 } }),

          // Hoofdstuk 3
          new Paragraph({
            text: '3. 10-Stappen Checklist vóór Livegang',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: '[ ] 1. Bevat de HTML-broncode volledige tekst zonder JavaScript? (Test met curl of rechtermuisknop > Paginabron).',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 2. Heeft elke route een unieke, commercieel aantrekkelijke <title> (onder 60 tekens)?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 3. Heeft elke route een unieke <meta name="description"> (140-155 tekens) met duidelijke Call-to-Action?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 4. Staat in robots.txt een Allow: / en een werkende link naar sitemap.xml?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 5. Bevat sitemap.xml alle live URL’s met geldige <lastmod> timestamps?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 6. Zijn alle hreflang tags consistent over alle taalvarianten en domeinen verdeeld?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 7. Is er geldige Schema.org JSON-LD aanwezig (FAQPage, WebSite, WebApplication)?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 8. Hebben alle afbeeldingen een betekenisvol alt-attribuut en zijn favicon.svg + favicon.png ingesteld?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 9. Werkt de Canonical URL op elke pagina foutloos?',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '[ ] 10. Is er een nette 404-fallbackpagina en zijn er geen gebroken interne links?',
            bullet: { level: 0 },
          }),

          new Paragraph({ spacing: { before: 200 } }),

          // Hoofdstuk 4
          new Paragraph({
            text: '4. Kant-en-Klare AI Studio Prompts (Direct te Kopiëren)',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Kopieer onderstaande prompt-teksten direct in Google AI Studio bij het opstarten of uitbreiden van een nieuw webproject:',
              }),
            ],
            spacing: { after: 120 },
          }),

          // Prompt Box 1
          new Paragraph({
            text: 'Prompt 1: Initialisatie met SEO & SSG Fundament',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: '“Bouw deze website als een snelle React + Vite applicatie, maar met de hoogste prioriteit voor 100% zoekmachine-indexering.\n\nVereisten voor het SEO-fundament:\n1. Zorg voor Static Site Generation (SSG) / Pre-rendering via een build-script, zodat alle routes statisch naar dist/ worden weggeschreven met volledige HTML-inhoud.\n2. Schrijf semantische HTML (exact 1x H1 per pagina, logische H2/H3 structuur).\n3. Voeg in index.html en per pagina unieke, commerciële Meta Titles (max 58 tekens) en Meta Descriptions (140-155 tekens) toe.\n4. Genereer een complete sitemap.xml en robots.txt in /public.\n5. Voeg Schema.org JSON-LD gestructureerde data toe (@graph met WebSite en FAQPage met concrete vragen en antwoorden).”',
                font: 'Consolas',
                size: 19, // 9.5pt
                color: '1E293B',
              }),
            ],
            spacing: { after: 160 },
          }),

          // Prompt Box 2
          new Paragraph({
            text: 'Prompt 2: Commerciële Meta-Tags & FAQ Schema Verrijking',
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: '“Bekijk alle pagina’s van de applicatie. Optimaliseer de metadata:\n1. Maak de Meta Titles en Descriptions commercieel pakkend: gebruik actieve werkwoorden, noem het belangrijkste pijnpunt van de bezoeker en voeg een trigger toe (bijv. \'Bereken in 30 sec\', \'Check wettelijke eisen\').\n2. Voeg aan de FAQ-sectie een compleet Schema.org \'FAQPage\' JSON-LD script toe, zodat Google de vragen direct toont in de zoekresultaten.\n3. Controleer de hreflang tags en canonical links voor alle talen.”',
                font: 'Consolas',
                size: 19, // 9.5pt
                color: '1E293B',
              }),
            ],
            spacing: { after: 160 },
          }),

          // Hoofdstuk 5
          new Paragraph({
            text: '5. Veelgemaakte Valkuilen in Google AI Studio',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: '• Valkuil 1: Alleen vertrouwen op client-side routing. Vraag AI Studio altijd expliciet om een build-time SSG pre-render script.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Valkuil 2: Te late toevoeging van gestructureerde data. Laat AI Studio direct bij het maken van de FAQ ook het JSON-LD schema genereren.',
            bullet: { level: 0 },
          }),
          new Paragraph({
            text: '• Valkuil 3: Vergeten alt-teksten en meta descriptions. Controleer na elke grote sprint of nieuwe pagina’s hun eigen unieke meta-beschrijving hebben gekregen.',
            bullet: { level: 0 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(docxPath, buffer);
  return docxPath;
}

// ==========================================
// RUN GENERATION
// ==========================================
async function run() {
  console.log('Generating PDF and Word (.docx) briefing documents...');

  const pdfPath = await generatePDF();
  console.log('✅ PDF generated:', pdfPath);

  const docxPath = await generateDocx();
  console.log('✅ Word (.docx) generated:', docxPath);

  // Also copy to root and public root for maximum accessibility
  fs.copyFileSync(pdfPath, path.resolve(rootDir, 'SEO-Briefing-Google-AI-Studio.pdf'));
  fs.copyFileSync(pdfPath, path.resolve(publicDir, 'SEO-Briefing-Google-AI-Studio.pdf'));

  fs.copyFileSync(docxPath, path.resolve(rootDir, 'SEO-Briefing-Google-AI-Studio.docx'));
  fs.copyFileSync(docxPath, path.resolve(publicDir, 'SEO-Briefing-Google-AI-Studio.docx'));

  console.log('✅ Files successfully placed in:');
  console.log('   - /public/downloads/SEO-Briefing-Google-AI-Studio.pdf');
  console.log('   - /public/downloads/SEO-Briefing-Google-AI-Studio.docx');
  console.log('   - /public/SEO-Briefing-Google-AI-Studio.pdf');
  console.log('   - /public/SEO-Briefing-Google-AI-Studio.docx');
  console.log('   - /SEO-Briefing-Google-AI-Studio.pdf (Project Root)');
  console.log('   - /SEO-Briefing-Google-AI-Studio.docx (Project Root)');
}

run().catch((err) => {
  console.error('Error generating briefing documents:', err);
  process.exit(1);
});
