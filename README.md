# European Digital Trust Council — website

React 19 + Vite + Tailwind CSS 4 + React Router 7 + Lucide icons. 34 routes, including the SYCUR product page at `/sycur`, built from the EDTC navigation PowerPoint and the content of edtc.ai.

## Run

```bash
npm install
cp .env.example .env    # then fill in the values you have
npm run dev             # http://localhost:5173
npm run build           # production build in dist/, plus dist/sitemap.xml and dist/robots.txt
npm run preview         # serve the production build
```

## Configuration (`.env`)

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Canonical domain for canonical links, Open Graph and the sitemap. Default `https://edtc.ai`. |
| `VITE_CONTACT_ENDPOINT` | URL that receives the contact form as a JSON POST. **Empty = the form validates, then tells the visitor the message was NOT sent and offers email.** |
| `VITE_READINESS_CHECK_URL` | URL of the existing AI Readiness Check service. Empty = the page explains the tool without a launch button. |
| `VITE_SHOW_EDITORIAL` | `true` shows gold "Editorial" labels on content awaiting EDTC confirmation. Use for review builds only. |
| `VITE_ROUTER` | `memory` for sandboxed previews only. Leave unset for the real site. |

Contact payload: `{ name, organisation, email, role, interest, country, message, consent }`. A hidden honeypot field (`website`) drops bot submissions in the browser; the receiving service must still validate input server-side and add rate limiting or CAPTCHA.

## Structure

```
src/
  data/routes.js        central route table: path, template, title, description, breadcrumb parent, content status
  data/nav.js           header and footer navigation
  data/services.js      service pages            data/governance.js  governance topic pages
  data/frameworks.js    framework pages          data/framework.js   six pillars, process, standards
  data/certification.js levels and prices        data/knowledge.js   resources and (empty) articles
  data/sycur.js         SYCUR positioning, workflow stages, outcomes and commercial model
  components/           Header, DesktopNavigation, MegaMenu, MobileNavigation, Footer, Breadcrumbs, PageHero,
                        SectionHeading, ServiceCard, FrameworkCard, PillarCard, ProcessSteps, RelatedResources,
                        CallToAction, FAQAccordion, ContactForm, PillarWheel, Seo, PendingContent
  pages/                one template per page type; App.jsx maps route templates to pages
scripts/generate-sitemap.mjs   writes sitemap.xml and robots.txt from the route table
```

To add an article, append it to `ARTICLES` in `src/data/knowledge.js`; it appears in its listing, the sitemap and at `/insights/<slug>` or `/research/<slug>`.

## Deployment

The site is a single-page app. The host must serve `index.html` for every path and redirect `/framework` permanently:

- Netlify: `public/_redirects` (included)
- Vercel: `vercel.json` (included)
- Nginx: `try_files $uri /index.html;` plus `location = /framework { return 301 /frameworks/ai-readiness-framework; }`

Page titles, descriptions and canonical links are set in the browser per route. For the strongest SEO, add prerendering (for example `vite-plugin-ssg` or a static export) so crawlers receive full HTML for each URL.

## Before launch

See the implementation report in the EDTC audit doc. In short: confirm service scope for AI Audit, Assurance, Security and Risk Assessment; publish the structure of the three new frameworks; migrate the full privacy, cookie and terms text; confirm the street address and imprint details; connect the contact form and the readiness checker; reconnect certification checkout if wanted; add the German version.
