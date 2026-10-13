import { Section, SectionHeading, CallToAction, ExternalSource, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { PillarCard } from '../components/Cards.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import PillarWheel from '../components/PillarWheel.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { PILLARS, ASSESSMENT_STEPS, STANDARDS, STANDARDS_NOTE } from '../data/framework.js'

export default function ReadinessFramework() {
  return (
    <>
      <PageHero path="/frameworks/ai-readiness-framework" eyebrow="Assessment framework" title="EDTC AI Readiness Framework" intro="A structured method for assessing AI readiness and digital trust in European organisations. Six pillars, from AI usage mapping to people and training, aligned with EU AI Act concepts and international standards." />
      <Section labelledBy="structure">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <PillarWheel className="mx-auto w-full max-w-[440px]" />
          <div>
            <SectionHeading id="structure" eyebrow="Structure" title="Six practical pillars" intro="Each pillar translates regulation and standards into questions a business can answer. Together they show how ready an organisation is to use AI responsibly." className="mb-0" />
            <p className="mt-4 text-muted"><strong className="text-ink">Who it is for:</strong> organisations of every size that are adopting or scaling AI in the EU and EEA, from SMEs to enterprise teams.</p>
          </div>
        </div>
      </Section>
      <Section tone="mist" labelledBy="pillars">
        <SectionHeading id="pillars" eyebrow="The pillars" title="What each pillar covers" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{PILLARS.map((p) => <PillarCard key={p.id} pillar={p} />)}</div>
      </Section>
      <Section labelledBy="apply">
        <SectionHeading id="apply" eyebrow="Applying the framework" title="How your assessment works" intro="A guided, fixed-scope process that fits around busy teams without becoming a months-long compliance project." />
        <ProcessSteps steps={ASSESSMENT_STEPS} label="Assessment process" />
        <p className="mt-6 text-muted"><strong className="text-ink">Output:</strong> a concise report with strengths, gaps and prioritised actions, and, for eligible organisations, optional verification and an EDTC trust badge.</p>
      </Section>
      <Section tone="sky" labelledBy="standards">
        <SectionHeading id="standards" eyebrow="Standards" title="Inspired by established standards" />
        <div className="grid gap-4 sm:grid-cols-2">
          {STANDARDS.map((s) => (
            <div key={s.name} className="rounded-md bg-white p-6">
              <h3 className="text-lg font-bold"><ExternalSource href={s.href}>{s.name}</ExternalSource></h3>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gold-ink">{s.kind}</p>
              <p className="mt-2 text-muted">{s.use}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><Notice>{STANDARDS_NOTE}</Notice></div>
      </Section>
      <RelatedResources paths={['/ai-readiness-assessment', '/certification', '/ai-governance', '/eu-ai-act']} title="Services and guidance that use this framework" tone="white" />
      <CallToAction title="Assess your organisation against the framework" primary={{ to: '/contact?interest=assessment', label: 'Contact EDTC' }} secondary={{ to: '/certification', label: 'See certification levels' }} />
    </>
  )
}
