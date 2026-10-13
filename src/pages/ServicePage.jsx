import { Check } from 'lucide-react'
import { Section, SectionHeading, CallToAction, FAQAccordion, PendingContent, Notice, ButtonLink } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { PillarCard, FrameworkCard } from '../components/Cards.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { SERVICES } from '../data/services.js'
import { PILLARS, ASSESSMENT_STEPS } from '../data/framework.js'
import { FRAMEWORKS } from '../data/frameworks.js'
import { DISCLAIMER } from '../lib/site.js'

/** Template for every individual service page. */
export default function ServicePage({ slug }) {
  const s = SERVICES.find((x) => x.slug === slug)
  const pillars = s.scope === 'pillars' ? PILLARS : PILLARS.filter((p) => s.scope.includes(p.id))
  const frameworks = FRAMEWORKS.filter((f) => s.frameworks.includes(f.slug))
  return (
    <>
      <PageHero path={s.path} eyebrow={`Service · ${s.type}`} title={s.name} intro={s.short}>
        <ButtonLink to="/contact?interest=assessment" variant="gold">Enquire about this service</ButtonLink>
      </PageHero>

      <Section labelledBy="overview">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeading id="overview" eyebrow="Overview" title="What this service does" className="mb-6" />
            <div className="prose-edtc text-lg text-ink">{s.overview.map((p) => <p key={p}>{p}</p>)}</div>
            <h3 className="mt-10 text-xl font-bold">The problem it addresses</h3>
            <p className="mt-3 text-muted">{s.problem}</p>
          </div>
          <aside className="h-fit rounded-md bg-sky p-7" aria-labelledby="audience">
            <h2 id="audience" className="font-heading text-lg font-bold">Who it is for</h2>
            <ul className="mt-4 space-y-2.5">{s.audience.map((a) => <li key={a} className="flex gap-2.5"><Check size={18} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{a}</li>)}</ul>
          </aside>
        </div>
      </Section>

      <Section tone="mist" labelledBy="scope">
        <SectionHeading id="scope" eyebrow="Scope" title={s.scope === 'pillars' ? 'Assessed across all six pillars' : 'Areas this service can cover'} intro={s.scope === 'pillars' ? 'Every assessment covers the six pillars of the EDTC AI Readiness Framework.' : 'These pillars of the EDTC AI Readiness Framework are most relevant to this service.'} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pillars.map((p) => <PillarCard key={p.id} pillar={p} linked />)}</div>
      </Section>

      <Section labelledBy="process">
        <SectionHeading id="process" eyebrow="How it works" title="Engagement process and deliverables" />
        {s.process === 'assessment' ? (
          <>
            <ProcessSteps steps={ASSESSMENT_STEPS} label="Assessment process" />
            <h3 className="mt-10 text-xl font-bold">What you receive</h3>
            <ul className="mt-4 space-y-2.5">{s.outputs.map((o) => <li key={o} className="flex gap-2.5"><Check size={18} className="mt-1 shrink-0 text-success" aria-hidden="true" />{o}</li>)}</ul>
          </>
        ) : (
          <PendingContent title="The detailed process, deliverables and pricing for this service are being finalised." note="Scope, process, deliverables and pricing require EDTC confirmation">
            Contact EDTC to discuss your needs and get a proposal.
          </PendingContent>
        )}
        <div className="mt-8"><Notice>{DISCLAIMER}</Notice></div>
      </Section>

      <Section tone="mist" labelledBy="frameworks">
        <SectionHeading id="frameworks" eyebrow="Frameworks" title="Frameworks behind this service" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{frameworks.map((f) => <FrameworkCard key={f.slug} framework={f} />)}</div>
      </Section>

      {s.faqs.length > 0 && (
        <Section labelledBy="faq">
          <SectionHeading id="faq" eyebrow="FAQ" title="Frequently asked questions" />
          <FAQAccordion items={s.faqs} />
        </Section>
      )}

      <RelatedResources paths={[...s.related, ...s.topics]} title="Related services and guidance" />
      <CallToAction title="Discuss this service with EDTC" primary={{ to: '/contact?interest=assessment', label: 'Contact EDTC' }} />
    </>
  )
}
