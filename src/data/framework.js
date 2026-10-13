// AI Readiness Framework content, carried over from edtc.ai/framework (translated from the German version, 9 Oct 2026).
export const PILLARS = [
  {
    id: 'ai-usage-mapping',
    number: 1,
    name: 'AI Usage Mapping',
    summary: 'Where AI is used across products, services and internal workflows.',
    points: ['Inventory of AI systems and vendors', 'Business-critical versus experimental use cases', 'User impact and touchpoints'],
  },
  {
    id: 'risk-classification',
    number: 2,
    name: 'Risk Classification',
    summary: 'A high-level view of risk, inspired by the EU AI Act categories.',
    points: ['Intended purpose and the people affected', 'Potential for harm, bias or misuse', 'Criticality for the business and for society'],
  },
  {
    id: 'data-privacy-awareness',
    number: 3,
    name: 'Data & Privacy Awareness',
    summary: 'Understanding which data is processed, and why.',
    points: ['Indicators of personal or sensitive data', 'Sources, retention and access patterns', 'Transfers to third countries and vendors'],
  },
  {
    id: 'governance-accountability',
    number: 4,
    name: 'Governance & Accountability',
    summary: 'Who owns AI risk and how decisions are made.',
    points: ['Roles, responsibilities and escalation paths', 'Approval and change-management workflows', 'Alignment with existing governance bodies'],
  },
  {
    id: 'security-resilience',
    number: 5,
    name: 'Security & Resilience',
    summary: 'Operational safeguards around AI systems.',
    points: ['Access controls and logging', 'Business continuity and incident response', 'Vendor due diligence and contracts'],
  },
  {
    id: 'people-training',
    number: 6,
    name: 'People & Training',
    summary: 'How people are supported to use AI responsibly.',
    points: ['Guidance for staff and contractors', 'Awareness and training formats', 'Feedback and reporting channels'],
  },
]

export const ASSESSMENT_STEPS = [
  { name: 'Discovery call', text: 'Clarify your AI landscape, scope and priorities.' },
  { name: 'Evidence collection', text: 'Questionnaires, sample policies and walkthroughs of key systems.' },
  { name: 'Assessment workshop', text: 'A structured review across all six pillars with your core team.' },
  { name: 'Results and roadmap', text: 'A concise report with strengths, gaps and prioritised actions.' },
  { name: 'Verification and trust badge', text: 'Optional verification and EDTC trust badge for eligible organisations.' },
]

export const STANDARDS = [
  {
    name: 'EU AI Act principles',
    kind: 'EU regulation (binding)',
    use: 'Used as a high-level reference. EDTC does not give conformity or legal opinions on the EU AI Act.',
    href: 'https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng',
  },
  {
    name: 'GDPR concepts',
    kind: 'EU regulation (binding)',
    use: 'Data protection concepts underpin the Data & Privacy Awareness pillar.',
    href: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
  },
  {
    name: 'ISO/IEC 42001',
    kind: 'International standard (voluntary)',
    use: 'Selected management-system ideas about AI governance.',
    href: 'https://www.iso.org/standard/42001',
  },
  {
    name: 'NIST AI RMF',
    kind: 'US guidance (voluntary)',
    use: 'Risk-based thinking for trustworthy AI systems.',
    href: 'https://www.nist.gov/itl/ai-risk-management-framework',
  },
]

export const STANDARDS_NOTE =
  'EDTC does not certify compliance with the EU AI Act, the GDPR, ISO/IEC 42001, the NIST AI RMF or any other regulation or standard.'
