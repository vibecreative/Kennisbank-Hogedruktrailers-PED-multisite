import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';

async function prerender() {
  const target = (process.env.VITE_SITE_TARGET || process.env.BUILD_TARGET || 'benelux').toLowerCase();
  console.log(`🚀 Starting static site pre-rendering (SSG) for target profile: [${target.toUpperCase()}]...`);

  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, 'dist');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Please run "vite build" before prerendering.');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Start Vite dev server in middleware mode to load TypeScript / TSX modules cleanly
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { getSiteContent, beneluxContent, europeContent } = await vite.ssrLoadModule('/src/content/index.ts');

    const content = getSiteContent(target);
    const baseUrl = content.meta.baseUrl;

    console.log(`  🌐 Site Name: ${content.meta.name} (${content.meta.language})`);
    console.log(`  🌐 Base URL: ${baseUrl}`);

    for (const navItem of content.navItems) {
      const pageId = navItem.id;
      const slug = navItem.slug;
      const canonicalUrl = `${baseUrl}${slug === '/' ? '' : slug}`;

      console.log(`  📄 Pre-rendering [${pageId}] -> ${slug}...`);

      const appHtml = render(pageId, target);

      // Customize HTML with page-specific metadata
      let pageHtml = template;

      // Replace html lang attribute
      pageHtml = pageHtml.replace(
        /<html[^>]*lang="[^"]*"[^>]*>/i,
        `<html lang="${content.meta.language}">`
      );

      // Replace title
      pageHtml = pageHtml.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${navItem.seoTitle}</title>`
      );

      // Replace description
      pageHtml = pageHtml.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${navItem.seoDescription}" />`
      );

      // Replace OG Title & Description & URL & Site Name & Locale & Image
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:title" content="${navItem.seoTitle}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:description" content="${navItem.seoDescription}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:site_name" content="${content.meta.name}" />`
      );
      const ogLocale = target === 'europe' ? 'en_GB' : 'nl_NL';
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:locale" content="${ogLocale}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:image" content="${baseUrl}/images/hero_pressure_equipment_1790257548564.jpg" />`
      );

      // Replace Twitter Title & Description & Image
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:title" content="${navItem.seoTitle}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:description" content="${navItem.seoDescription}" />`
      );
      pageHtml = pageHtml.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:image" content="${baseUrl}/images/hero_pressure_equipment_1790257548564.jpg" />`
      );

      // Clean template alternate hreflang tags to prevent duplicates
      pageHtml = pageHtml.replace(
        /\s*<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>/gi,
        ''
      );

      // Replace Canonical link & inject multilingual hreflang links
      const beneluxItem = beneluxContent.navItems.find((i: { id: string }) => i.id === pageId);
      const europeItem = europeContent.navItems.find((i: { id: string }) => i.id === pageId);
      const beneluxAltUrl = `${beneluxContent.meta.baseUrl}${beneluxItem?.slug === '/' ? '' : (beneluxItem?.slug || '')}`;
      const europeAltUrl = `${europeContent.meta.baseUrl}${europeItem?.slug === '/' ? '' : (europeItem?.slug || '')}`;

      const hreflangMarkup = `
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="nl" href="${beneluxAltUrl}" />
    <link rel="alternate" hreflang="en" href="${europeAltUrl}" />
    <link rel="alternate" hreflang="x-default" href="${europeAltUrl}" />`;

      pageHtml = pageHtml.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
        hreflangMarkup.trim()
      );

      // Inject localized JSON-LD
      const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": `${baseUrl}/`,
            "name": content.meta.name,
            "description": content.meta.tagline,
            "inLanguage": content.meta.language
          },
          {
            "@type": "WebApplication",
            "@id": `${baseUrl}/#calculator`,
            "name": target === 'europe' ? "TCO Pressure Equipment Calculator" : "TCO Keuringskosten Calculator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "url": `${baseUrl}${content.navItems.find((item: { id: string }) => item.id === 'tco-calculator')?.slug || '/tco-keuringskosten-calculator'}`,
            "description": target === 'europe'
              ? "Interactive calculator for in-service inspections, pre-commissioning examinations, and operational downtime under PED 2014/68/EU."
              : "Interactieve rekenmodule om periodieke inspectiekosten, KvI en stilstandsderving bij industriële stoominstallaties te berekenen conform WBDA 2016.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${baseUrl}/#faq`,
            "mainEntity": content.faq.map((item: { question: string; answer: string }) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]
      };

      pageHtml = pageHtml.replace(
        /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script type="application/ld+json">\n${JSON.stringify(jsonLdData, null, 2)}\n    </script>`
      );

      // Inject rendered markup into root div
      pageHtml = pageHtml.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Output files
      if (slug === '/' || slug === '') {
        fs.writeFileSync(templatePath, pageHtml, 'utf-8');
      } else {
        const cleanSlug = slug.replace(/^\//, '');
        const targetDir = path.resolve(distDir, cleanSlug);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf-8');
        fs.writeFileSync(path.resolve(distDir, `${cleanSlug}.html`), pageHtml, 'utf-8');
      }
    }

    // Generate cross-language alias redirects for seamless preservation of legacy URLs
    const alternateContent = target === 'europe' ? beneluxContent : europeContent;
    for (const altItem of alternateContent.navItems) {
      if (altItem.slug === '/') continue;
      const cleanAltSlug = altItem.slug.replace(/^\//, '');
      const activeItem = content.navItems.find((i: { id: string }) => i.id === altItem.id);
      if (!activeItem || activeItem.slug === altItem.slug) continue;

      const destinationUrl = activeItem.slug;
      const redirectHtml = `<!DOCTYPE html>
<html lang="${content.meta.language}">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=${destinationUrl}">
  <link rel="canonical" href="${baseUrl}${destinationUrl}">
  <title>Redirecting to ${activeItem.seoTitle}...</title>
</head>
<body>
  <p>Redirecting to <a href="${destinationUrl}">${destinationUrl}</a>...</p>
</body>
</html>`;

      const targetDir = path.resolve(distDir, cleanAltSlug);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.resolve(targetDir, 'index.html'), redirectHtml, 'utf-8');
      fs.writeFileSync(path.resolve(distDir, `${cleanAltSlug}.html`), redirectHtml, 'utf-8');
      console.log(`  🔄 Created alias redirect: ${altItem.slug} -> ${destinationUrl}`);
    }

    // Generate sitemap.xml dynamically for this target with multi-regional hreflang annotations
    const alternateContentForSitemap = target === 'europe' ? beneluxContent : europeContent;
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${content.navItems
  .map((item: { id: string; slug: string }) => {
    const loc = `${baseUrl}${item.slug === '/' ? '' : item.slug}`;
    const altItem = alternateContentForSitemap.navItems.find((i: { id: string }) => i.id === item.id);
    const nlUrl = target === 'benelux' ? loc : `${beneluxContent.meta.baseUrl}${altItem?.slug === '/' ? '' : (altItem?.slug || '')}`;
    const enUrl = target === 'europe' ? loc : `${europeContent.meta.baseUrl}${altItem?.slug === '/' ? '' : (altItem?.slug || '')}`;
    const priority = item.slug === '/' ? '1.0' : item.id === 'wbda-2016' || item.id === 'two-liter-grens' || item.id === 'tco-calculator' ? '0.9' : '0.8';
    const changefreq = item.slug === '/' || item.id === 'faq' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="nl" href="${nlUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
    fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
    console.log(`  🗺️  Generated sitemap.xml with hreflang alternates for ${baseUrl}`);

    // Generate robots.txt dynamically for this target
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
    fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf-8');
    console.log(`  🤖 Generated robots.txt pointing to ${baseUrl}/sitemap.xml`);

    console.log(`✅ All routes and SEO files successfully pre-rendered for [${target.toUpperCase()}]!`);
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
