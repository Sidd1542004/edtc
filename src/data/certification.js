// From edtc.ai/certification (9 Oct 2026). Prices are fixed-price packages as published there.
export const LEVELS = [
  {
    level: 1,
    name: 'AI Aware',
    price: '€3,999',
    for: 'For organisations at the start of their AI journey',
    includes: ['AI usage mapping', 'Basic gap analysis'],
  },
  {
    level: 2,
    name: 'AI Ready',
    price: '€7,999',
    for: 'For organisations using AI operationally with documented governance',
    includes: ['Full readiness assessment', 'Risk heatmap and gap analysis'],
    popular: true,
  },
  {
    level: 3,
    name: 'AI Trusted',
    price: '€14,999',
    for: 'For mature organisations with advanced governance requirements',
    includes: ['Extended risk and governance assessment', 'Lifecycle and vendor AI risk review'],
  },
]

export const COVERAGE = [
  'AI usage visibility',
  'Governance & accountability',
  'Data protection & privacy awareness',
  'Security & operational resilience',
  'Vendor & third-party AI use',
  'Staff readiness & training',
]

export const NOT_LIST = ['EU AI Act conformity certification', 'Legal or regulatory approval', 'A software product']
