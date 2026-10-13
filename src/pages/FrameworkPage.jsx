import { Check } from 'lucide-react'
import { Section, SectionHeading, CallToAction, PendingContent } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { FRAMEWORKS } from '../data/frameworks.js'

/** Template for framework pages whose structure EDTC has not yet published. */
export default function FrameworkPage({ slug }) {
  const f = FRAMEWORKS.find((x) => x.slug === slug)
  return (
    <>
      <PageHero path={f.path} eyebrow="EDTC framework" title={f.name} intro={f.purpose} />
      <Section labelledBy="about">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading id="about" eyebrow="Structure" title="Framework structure" className="mb-6" />
            <PendingContent title="The full structure of this framework will be published here." note="Pillars or dimensions, stages, outputs and standards mapping require EDTC confirmation">
              Its components, assessment stages and expected outputs are being finalised. Contact EDTC to discuss how it can apply to your organisation.
            </PendingContent>
            <h3 className="mt-10 text-xl font-bold">Relationship to other EDTC frameworks</h3>
            <p className="mt-3 text-muted">The EDTC AI Readiness Framework is the foundation for EDTC assessments and certification. This framework applies to a specific area and is used alongside it in the services listed below.</p>
          </div>
          <aside className="h-fit rounded-md bg-sky p-7" aria-labelledby="for">
            <h2 id="for" className="font-heading text-lg font-bold">Designed for</h2>
            <ul className="mt-4 space-y-2.5">{f.audience.map((a) => <li key={a} className="flex gap-2.5"><Check size={18} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{a}</li>)}</ul>
          </aside>
        </div>
      </Section>
      <RelatedResources paths={[...f.services, ...f.topics, '/frameworks/ai-readiness-framework']} title="Related services, guidance and frameworks" />
      <CallToAction title="Discuss this framework with EDTC" primary={{ to: '/contact?interest=frameworks', label: 'Contact EDTC' }} secondary={{ to: '/frameworks', label: 'All frameworks' }} />
    </>
  )
}
