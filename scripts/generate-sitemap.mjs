// Writes dist/sitemap.xml and dist/robots.txt from the central route table.
import { writeFileSync, mkdirSync } from 'node:fs'
import { ROUTES } from '../src/data/routes.js'
import { ARTICLES } from '../src/data/knowledge.js'

const site = (process.env.VITE_SITE_URL || 'https://edtc.ai').replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)
const paths = [...ROUTES.map((r) => r.path), ...ARTICLES.map((a) => `/${a.section}/${a.slug}`)]
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`
mkdirSync('dist', { recursive: true })
writeFileSync('dist/sitemap.xml', xml)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /payment/success\nDisallow: /payment/cancel\n\nSitemap: ${site}/sitemap.xml\n`)
console.log(`sitemap.xml: ${paths.length} URLs`)
