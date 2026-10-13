import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading, CallToAction, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { PillarCard } from '../components/Cards.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { TOPICS, GOVERNANCE_APPROACH } from '../data/governance.js'
import { PILLARS } from '../data/framework.js'

const ROLES = [['Board and leadership', 'Set the AI policy and risk appetite; receive regular reporting.'], ['AI and use-case owners', 'Accountable for each system: its purpose, risks and controls.'], ['Risk, compliance and legal', 'Define controls, interpret obligations and check controls run.'], ['Security and IT', 'Access, logging, vendor checks and incident response.'], ['All staff', 'Use AI within policy and report concerns.']]

export default function GovernanceHub() {
  return (
    <>
      <PageHero path="/ai-governance" eyebrow="AI Governance" title="Governing AI in practice" intro="AI governance is how an organisation decides where AI is used, who is accountable, which risks it accepts, and how it shows that its controls work. EDTC's approach is practical and business-friendly rather than legal-heavy." />
      <Section labelledBy="chain">
        <SectionHeading id="chain" eyebrow="Our approach" title="From policy to proof" intro="Good governance links four things. Most organisations have the first; few can show the last." />
        <ol className="grid gap-4 md:grid-cols-4">
          {GOVERNANCE_APPROACH.map((g, i) => (
            <li key={g.step} className="relative rounded-md border border-line bg-white p-6">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-gold-ink">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-bold">{g.step}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{g.text}</p>
              {i < 3 && <ArrowRight size={20} className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-paper text-gold-dark md:block" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="mist" labelledBy="pillars">
        <SectionHeading id="pillars" eyebrow="Six pillars" title="What good AI governance covers" intro="EDTC structures governance around the six pillars of its AI Readiness Framework." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{PILLARS.map((p) => <PillarCard key={p.id} pillar={p} linked />)}</div>
      </Section>
      <Section labelledBy="topics">
        <SectionHeading id="topics" eyebrow="Topics" title="Governance topics" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <li key={t.slug}>
              <Link to={t.path} className="group flex h-full flex-col rounded-md border border-line bg-white p-6 hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]">
                <h3 className="text-lg font-bold group-hover:text-brand">{t.name}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] text-muted">{t.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">Read more <ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="sky" labelledBy="roles">
        <SectionHeading id="roles" eyebrow="Roles" title="Who does what" />
        <dl className="divide-y divide-brand-muted rounded-md bg-white px-6">
          {ROLES.map(([r, d]) => <div key={r} className="grid gap-1 py-4 sm:grid-cols-[260px_1fr]"><dt className="font-semibold">{r}</dt><dd className="text-muted">{d}</dd></div>)}
        </dl>
        <div className="mt-8"><Notice>Governance guidance on this site is general information, not legal advice. EDTC does not certify legal or regulatory compliance.</Notice></div>
      </Section>
      <RelatedResources paths={['/ai-readiness-assessment', '/ai-audit', '/frameworks/ai-governance-framework']} title="Put governance into practice" />
      <CallToAction />
    </>
  )
}
