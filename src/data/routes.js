// Central route table. Used by the router, page metadata, breadcrumbs and the sitemap script.
// parent = the breadcrumb parent (menu hierarchy), which differs from the URL for the root-level child pages.
import { SERVICES } from './services.js'
import { TOPICS } from './governance.js'
import { FRAMEWORKS } from './frameworks.js'

const S = (name) => `${name} | EDTC`

export const ROUTES = [
  { path: '/', name: 'Home', template: 'home', title: 'EDTC | European Digital Trust Council — AI Readiness and Digital Trust', description: 'Independent AI readiness assessments, governance guidance and voluntary certification for organisations in the EU and EEA.', status: 'published' },

  { path: '/services', name: 'Services', template: 'services', parent: '/', title: S('AI Services — Assessment, Certification, Assurance'), description: "Compare EDTC's AI readiness, risk, audit, assurance and security services and its voluntary AI Readiness Certification.", status: 'published' },
  { path: '/certification', name: 'AI Readiness Certification', template: 'certification', parent: '/services', title: S('AI Readiness Certification — AI Aware, AI Ready, AI Trusted'), description: 'A structured 6–8 week assessment with three fixed-price levels and a verifiable EDTC trust badge.', status: 'published' },
  ...SERVICES.map((s) => ({ path: s.path, name: s.name, template: 'service', parent: '/services', title: S(s.name), description: s.description, status: s.status, key: s.slug })),

  { path: '/ai-governance', name: 'AI Governance', template: 'governance', parent: '/', title: S('AI Governance'), description: 'How organisations govern AI in practice: accountability, risk, data, security, people and oversight.', status: 'published' },
  ...TOPICS.map((t) => ({ path: t.path, name: t.name, template: 'topic', parent: '/ai-governance', title: S(t.name), description: t.description, status: 'published', key: t.slug })),

  { path: '/frameworks', name: 'Frameworks', template: 'frameworks', parent: '/', title: S('Frameworks'), description: "EDTC's frameworks for AI readiness, AI governance, AI trust and agentic AI risk.", status: 'published' },
  ...FRAMEWORKS.map((f) => ({ path: f.path, name: f.name, template: f.slug === 'ai-readiness-framework' ? 'readiness-framework' : 'framework', parent: '/frameworks', title: S(f.name), description: f.description, status: f.status, key: f.slug })),

  { path: '/sycur', name: 'SYCUR', template: 'sycur', parent: '/', title: 'SYCUR | Trust Control Plane for Autonomous Systems | EDTC', description: "SYCUR is EDTC's operational Trust Control Plane for autonomous systems: trust decisions between AI intent and execution, with evidence of what happened.", status: 'published' },

  { path: '/knowledge', name: 'Knowledge', template: 'knowledge', parent: '/', title: S('Knowledge Hub'), description: 'Research, insights and practical resources on AI readiness, AI governance and digital trust.', status: 'published' },
  { path: '/research', name: 'Research', template: 'listing', parent: '/knowledge', title: S('Research'), description: 'EDTC research on AI adoption, governance and digital trust in Europe.', status: 'requires-confirmation', key: 'research' },
  { path: '/insights', name: 'Insights', template: 'listing', parent: '/knowledge', title: S('Insights'), description: 'Articles and commentary on AI governance and European digital developments.', status: 'requires-confirmation', key: 'insights' },
  { path: '/resources', name: 'Resources', template: 'resources', parent: '/knowledge', title: S('Resources'), description: 'EDTC tools and guides, official EU sources and standards on AI governance.', status: 'published' },
  { path: '/ai-readiness', name: 'AI Readiness Check', template: 'readiness-check', parent: '/resources', title: S('AI Readiness Check'), description: 'Preview how a website scores on the EDTC AI readiness checklist. Free and non-binding.', status: 'published' },

  { path: '/about', name: 'About EDTC', template: 'about', parent: '/', title: 'About EDTC | European Digital Trust Council', description: 'EDTC is an independent European body for AI readiness and digital trust, based in Essen and working across the EU and EEA.', status: 'published' },
  { path: '/partners', name: 'Partners', template: 'partners', parent: '/about', title: S('Become a Partner'), description: 'Referral, delivery and strategic partnerships to extend responsible AI adoption across Europe.', status: 'published' },
  { path: '/contact', name: 'Contact', template: 'contact', parent: '/', title: 'Contact EDTC', description: 'Contact EDTC about assessments, certification, partnerships or general questions.', status: 'published' },

  { path: '/privacy', name: 'Privacy policy', template: 'legal', parent: '/', title: S('Privacy policy'), description: 'Privacy policy for the European Digital Trust Council website.', status: 'needs-adaptation', key: 'privacy' },
  { path: '/cookies', name: 'Cookie policy', template: 'legal', parent: '/', title: S('Cookie policy'), description: 'Cookie policy for the European Digital Trust Council website.', status: 'needs-adaptation', key: 'cookies' },
  { path: '/terms', name: 'Terms of use', template: 'legal', parent: '/', title: S('Terms of use'), description: 'Terms of use for the European Digital Trust Council website.', status: 'needs-adaptation', key: 'terms' },
  { path: '/disclaimer', name: 'Disclaimer', template: 'legal', parent: '/', title: S('Disclaimer'), description: 'EDTC provides independent assessments, not legal or regulatory certification.', status: 'published', key: 'disclaimer' },
  { path: '/imprint', name: 'Imprint', template: 'legal', parent: '/', title: S('Imprint'), description: 'Legal notice and organisation details for the European Digital Trust Council.', status: 'needs-adaptation', key: 'imprint' },
]

// Article detail routes are dynamic: /insights/:slug and /research/:slug
export const REDIRECTS = [{ from: '/framework', to: '/frameworks/ai-readiness-framework' }]

export const routeByPath = Object.fromEntries(ROUTES.map((r) => [r.path, r]))

export function trail(path) {
  const out = []
  let r = routeByPath[path]
  while (r) {
    out.unshift(r)
    r = r.parent ? routeByPath[r.parent] : null
  }
  return out
}
