// Knowledge content. No research or insight articles have been supplied, so those lists are empty
// and their pages show an "awaiting publication" state. Add approved articles to ARTICLES.
//
// Article shape: { slug, section: 'insights' | 'research', title, summary, date: 'YYYY-MM-DD', author, category, body: [paragraphs], related: [paths] }
export const ARTICLES = []

export const RESOURCE_TYPES = ['EDTC tools and guides', 'Official EU sources', 'Standards and guidance']

export const RESOURCES = [
  { title: 'AI Readiness Check', type: 'EDTC tools and guides', text: 'Preview how a website scores on the EDTC AI readiness checklist. Prototype.', to: '/ai-readiness' },
  { title: 'AI Readiness Framework', type: 'EDTC tools and guides', text: 'The six pillars EDTC uses to assess AI readiness and digital trust.', to: '/frameworks/ai-readiness-framework' },
  { title: 'EU AI Act overview', type: 'EDTC tools and guides', text: 'Risk categories, roles and the amended timeline, in plain language.', to: '/eu-ai-act' },
  { title: 'AI Act: official text', type: 'Official EU sources', text: 'Regulation (EU) 2024/1689 on EUR-Lex.', href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng' },
  { title: 'AI Omnibus amending the AI Act', type: 'Official EU sources', text: 'Official Journal L 2026/1744, published 24 July 2026.', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744' },
  { title: 'Cyber Resilience Act', type: 'Official EU sources', text: 'European Commission overview of Regulation (EU) 2024/2847.', href: 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act' },
  { title: 'GDPR: official text', type: 'Official EU sources', text: 'Regulation (EU) 2016/679 on EUR-Lex.', href: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj' },
  { title: 'Ethics Guidelines for Trustworthy AI', type: 'Official EU sources', text: 'The seven requirements from the Commission\'s High-Level Expert Group (2019).', href: 'https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai' },
  { title: 'ISO/IEC 42001:2023', type: 'Standards and guidance', text: 'International standard for AI management systems (ISO).', href: 'https://www.iso.org/standard/42001' },
  { title: 'NIST AI Risk Management Framework', type: 'Standards and guidance', text: 'Voluntary US framework for managing AI risk (NIST).', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
]
