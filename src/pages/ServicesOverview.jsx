import { Section, SectionHeading, CallToAction, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { ServiceCard } from '../components/Cards.jsx'
import { SERVICES, CERTIFICATION_CARD, GOVERNANCE_CARD, SERVICE_TYPES } from '../data/services.js'
import { DISCLAIMER } from '../lib/site.js'

export default function ServicesOverview() {
  return (
    <>
      <PageHero path="/services" eyebrow="Services" title="AI services for responsible adoption" intro="From a first view of your AI readiness to a verifiable trust badge, EDTC services help you understand, improve and demonstrate how you use AI." />
      <Section labelledBy="all-services">
        <SectionHeading id="all-services" title="Our services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard service={CERTIFICATION_CARD} />
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          <ServiceCard service={GOVERNANCE_CARD} />
        </div>
      </Section>
      <Section tone="mist" labelledBy="types">
        <SectionHeading id="types" eyebrow="Choosing a service" title="Assessment, advisory, certification and assurance are different things" intro="Each answers a different question. Knowing which one you need saves time." />
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_TYPES.map(({ term, text }) => (
            <div key={term} className="rounded-md border border-line bg-white p-6">
              <dt className="font-heading text-lg font-bold text-brand">{term}</dt>
              <dd className="mt-2 text-[0.95rem] text-muted">{text}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8"><Notice>{DISCLAIMER}</Notice></div>
      </Section>
      <CallToAction title="Not sure where to start?" text="Tell us about your organisation and how you use AI. We will recommend the right service." secondary={{ to: '/ai-readiness', label: 'Try the AI Readiness Check' }} />
    </>
  )
}
