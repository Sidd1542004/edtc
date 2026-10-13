// SYCUR content. Source: the SYCUR integration brief (positioning, workflow and commercial model, 12 Oct 2026).
// Keep descriptions conceptual: no technical guarantees, integrations, pricing or metrics unless EDTC documents them.

export const SYCUR_POSITIONING = 'Building Trust Infrastructure for the Autonomous World.'
export const SYCUR_ECOSYSTEM = 'One trust ecosystem with deliberate separation between technology and independent assurance.'

export const ECOSYSTEM = [
  {
    key: 'framework',
    role: 'Methodology',
    name: 'EDTC Trust Framework',
    points: ['Defines the methodology for digital trust.', 'Provides the foundation for evaluating trust-related requirements.'],
    to: '/frameworks/ai-trust-framework',
    link: 'About the framework',
  },
  {
    key: 'sycur',
    role: 'Technology',
    name: 'SYCUR',
    points: ['Operational Trust Control Plane for autonomous systems.', 'Places trust decisions between autonomous intent and execution.'],
    to: '#workflow',
    link: 'See the workflow',
  },
  {
    key: 'assurance',
    role: 'Independent assurance',
    name: 'EDTC Assurance',
    points: ['Independent assessment of evidence and controls.', 'Kept separate from the technology, so assessment stays independent.'],
    to: '/ai-assurance',
    link: 'About EDTC assurance',
  },
]

// Workflow stages, in the order given in the source material.
export const STAGES = [
  { id: 'agent', label: 'AI / Agent', icon: 'cpu', text: 'An AI agent or autonomous system proposes an action.' },
  { id: 'identity', label: 'Identity', icon: 'fingerprint', text: 'Establish which AI agent or actor is involved.' },
  { id: 'passport', label: 'Trust Passport', icon: 'idcard', text: 'Represent the trust information relevant to that agent.' },
  { id: 'authority', label: 'Delegated Authority', icon: 'key', text: 'Determine what the agent is authorised to do.' },
  { id: 'decision', label: 'Trust Decision', icon: 'scale', text: 'Evaluate whether the proposed action should proceed.', key: true },
  { id: 'action', label: 'Action', icon: 'zap', text: 'Represent the permitted execution.', key: true },
  { id: 'receipt', label: 'Receipt', icon: 'receipt', text: 'Capture a record of the action.' },
  { id: 'evidence', label: 'Evidence', icon: 'archive', text: 'Preserve information that supports later review.' },
]

export const OUTCOMES = [
  { id: 'deny', label: 'Deny', text: 'The action is not permitted.' },
  { id: 'stepup', label: 'Step-up', text: 'Additional checks or approval are required.' },
  { id: 'allow', label: 'Allow', text: 'The action is permitted under the applicable controls.' },
]

export const COMMERCIAL = [
  { name: 'SYCUR Platform', items: ['Enterprise subscription', 'Actor / asset tiers', 'Industry Trust Packs'], kind: 'technology' },
  { name: 'Trust Usage', items: ['Trust decisions', 'Trusted actions', 'Action receipts / verification'], kind: 'technology' },
  { name: 'Edge & Expansion', items: ['Edge / IoT runtime', 'Private deployment', 'Premium intelligence'], kind: 'technology' },
  { name: 'EDTC Assurance', items: ['Independent assessment', 'Re-assurance', 'Trust verification'], kind: 'assurance' },
]

export const OBJECTIVES = [
  { n: 1, name: 'Identity and authority', text: 'Understand which agent is acting and what it is permitted to do.' },
  { n: 2, name: 'Controlled execution', text: 'Evaluate actions before they proceed.' },
  { n: 3, name: 'Evidence and accountability', text: 'Preserve records that support review and assurance.' },
]
