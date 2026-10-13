export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    intro: 'Assessments, certification and assurance for responsible AI.',
    items: [
      { label: 'Services overview', to: '/services' },
      { label: 'AI Readiness Certification', to: '/certification' },
      { label: 'AI Readiness Assessment', to: '/ai-readiness-assessment' },
      { label: 'AI Risk Assessment', to: '/ai-risk-assessment' },
      { label: 'AI Audit', to: '/ai-audit' },
      { label: 'AI Assurance', to: '/ai-assurance' },
      { label: 'AI Security', to: '/ai-security' },
      { label: 'AI Governance', to: '/ai-governance' },
    ],
  },
  {
    label: 'AI Governance',
    to: '/ai-governance',
    intro: 'Practical guidance on governing AI responsibly.',
    items: [
      { label: 'AI Governance overview', to: '/ai-governance' },
      { label: 'Responsible AI', to: '/responsible-ai' },
      { label: 'Trustworthy AI', to: '/trustworthy-ai' },
      { label: 'EU AI Act', to: '/eu-ai-act' },
      { label: 'Agentic AI', to: '/agentic-ai' },
      { label: 'Shadow AI', to: '/shadow-ai' },
      { label: 'Generative AI Governance', to: '/generative-ai-governance' },
    ],
  },
  {
    label: 'Frameworks',
    to: '/frameworks',
    intro: 'The structured methods behind EDTC assessments.',
    items: [
      { label: 'Frameworks overview', to: '/frameworks' },
      { label: 'AI Readiness Framework', to: '/frameworks/ai-readiness-framework' },
      { label: 'EDTC AI Governance Framework', to: '/frameworks/ai-governance-framework' },
      { label: 'EDTC AI Trust Framework', to: '/frameworks/ai-trust-framework' },
      { label: 'Agentic AI Risk Framework', to: '/frameworks/agentic-ai-risk-framework' },
    ],
  },
  { label: 'SYCUR', to: '/sycur', flagship: true },
  {
    label: 'Knowledge',
    to: '/knowledge',
    intro: 'Research, insights and practical resources.',
    items: [
      { label: 'Knowledge hub', to: '/knowledge' },
      { label: 'Research', to: '/research' },
      { label: 'Insights', to: '/insights' },
      { label: 'Resources', to: '/resources' },
      { label: 'AI Readiness Check', to: '/ai-readiness' },
    ],
  },
  {
    label: 'About EDTC',
    to: '/about',
    intro: 'Who we are and how we work.',
    items: [
      { label: 'About EDTC', to: '/about' },
      { label: 'Partners', to: '/partners' },
    ],
  },
]

export const FOOTER_LEGAL = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' },
  { label: 'Terms', to: '/terms' },
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Imprint', to: '/imprint' },
]
