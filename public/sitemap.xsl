<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="nl">
      <head>
        <title>XML Sitemap | Hogedruktrailer keuren (Google Search Console)</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 30px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            padding: 32px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
            border-bottom: 3px solid #f59e0b;
          }
          .badge {
            display: inline-block;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            background: rgba(245, 158, 11, 0.2);
            color: #fbbf24;
            padding: 4px 10px;
            border-radius: 9999px;
            border: 1px solid rgba(245, 158, 11, 0.4);
            margin-bottom: 12px;
          }
          h1 {
            margin: 0 0 8px 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.02em;
          }
          .subtitle {
            margin: 0;
            color: #94a3b8;
            font-size: 14px;
          }
          .intro {
            padding: 20px 32px;
            background: #f1f5f9;
            border-bottom: 1px solid #e2e8f0;
            font-size: 13px;
            color: #475569;
          }
          .intro strong {
            color: #0f172a;
          }
          .table-wrapper {
            overflow-x: auto;
            padding: 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            text-align: left;
          }
          th {
            background: #f8fafc;
            color: #475569;
            font-weight: 600;
            padding: 12px 20px;
            border-bottom: 1px solid #e2e8f0;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.05em;
          }
          td {
            padding: 14px 20px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #0284c7;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            color: #0369a1;
            text-decoration: underline;
          }
          .priority-pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            background: #fef3c7;
            color: #92400e;
            border: 1px solid #fde68a;
          }
          .lang-tag {
            display: inline-block;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: 600;
            background: #e2e8f0;
            color: #334155;
            margin-right: 4px;
          }
          .footer {
            padding: 20px 32px;
            background: #ffffff;
            font-size: 12px;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">Google Search Console &amp; SEO</div>
            <h1>XML Sitemap — Hogedruktrailer keuren</h1>
            <p class="subtitle">Geoptimaliseerd voor zoekmachine-indexering, canonicalisatie en meertalige hreflang-tags (NL · FR · DE · EN)</p>
          </div>
          <div class="intro">
            Dit XML-bestand is speciaal geformatteerd voor crawlers zoals <strong>Googlebot</strong> en <strong>Bingbot</strong>. Deze stijlweergave toont alle <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> geïndexeerde URL's op het officiële domein <strong>https://www.hogedruktrailerkeuren.eu</strong>.
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style="width: 50px;">#</th>
                  <th>URL (Pagina)</th>
                  <th style="width: 140px;">Talen (Hreflang)</th>
                  <th style="width: 100px;">Prioriteit</th>
                  <th style="width: 120px;">Frequentie</th>
                  <th style="width: 120px;">Laatste update</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td style="color: #94a3b8; font-weight: 600;"><xsl:value-of select="position()"/></td>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="lang-tag">NL</span>
                      <xsl:if test="xhtml:link[@hreflang='fr']">
                        <span class="lang-tag">FR</span>
                      </xsl:if>
                      <xsl:if test="xhtml:link[@hreflang='de']">
                        <span class="lang-tag">DE</span>
                      </xsl:if>
                      <xsl:if test="xhtml:link[@hreflang='en']">
                        <span class="lang-tag">EN</span>
                      </xsl:if>
                    </td>
                    <td>
                      <span class="priority-pill">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td style="color: #64748b;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td style="color: #64748b; font-family: monospace;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <div class="footer">
            <div>Geverifieerd voor Google Search Console domein: <strong>https://www.hogedruktrailerkeuren.eu</strong></div>
            <div>Totaal aantal geïndexeerde pagina's: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
