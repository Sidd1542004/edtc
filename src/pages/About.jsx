import { Check, X, Mail, MapPin, Globe } from 'lucide-react'
import { Section, SectionHeading, CallToAction, TextLink } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { SITE } from '../lib/site.js'

const PRINCIPLES = [['Independence', 'We act as an independent body, free from vendor or regulatory bias.'], ['Transparency', 'Clear methods and open communication throughout every assessment.'], ['Practicality', 'A focus on real-world use, not only theoretical conformity.'], ['European relevance', 'Aligned with European values and the European regulatory landscape.'], ['Responsible innovation', 'Helping organisations adopt AI safely and responsibly.'], ['Accessibility', 'Making AI governance achievable for organisations of every size.']]
const IS = ['A readiness and trust body', 'A provider of frameworks and voluntary certification', 'An independent assessment organisation', 'A bridge between business needs and governance requirements']
const ISNOT = ['A regulator', 'A government authority', 'A law firm', 'A conformity assessment body']
const WHY = [['Independent credibility', 'Third-party validation that builds trust with customers and stakeholders.'], ['Practical guidance', 'Actionable recommendations, not just audit reports.'], ['European focus', 'A deep understanding of the European business and regulatory landscape.'], ['Scalable approach', 'Certification levels for different stages of AI maturity.']]

export default function About() {
  return (
    <>
      <PageHero path="/about" eyebrow="About EDTC" title="European Digital Trust Council" intro="An independent body that helps organisations close the gap between AI adoption and governance, awareness and trust. Based in Essen, Germany, and working across the EU and EEA." />
      <Section labelledBy="mission">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading id="mission" eyebrow="Our mission" title="Closing the gap between AI adoption and trust" className="mb-5" />
            <p className="text-lg">EDTC was founded to address a growing challenge in Europe: AI adoption is accelerating faster than governance, awareness and trust. We help organisations close that gap with independent, practical and scalable readiness assessments.</p>
          </div>
          <aside className="h-fit rounded-md bg-sky p-7" aria-labelledby="where">
            <h2 id="where" className="font-heading text-lg font-bold">Where we are</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3"><MapPin size={19} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />Headquarters: {SITE.city}</li>
              <li className="flex gap-3"><Globe size={19} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />EU & EEA · remote delivery · multilingual support</li>
              <li className="flex gap-3"><Mail size={19} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" /><a href={`mailto:${SITE.email}`} className="break-all text-brand underline">{SITE.email}</a></li>
            </ul>
          </aside>
        </div>
      </Section>
      <Section tone="mist" labelledBy="principles">
        <SectionHeading id="principles" eyebrow="Our principles" title="The values that guide our work" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(([t, d]) => <div key={t} className="rounded-md border-t-[3px] border-brand bg-white p-6"><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p></div>)}
        </div>
      </Section>
      <Section labelledBy="role">
        <SectionHeading id="role" eyebrow="Our role" title="What we do, and what we do not" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-line p-7"><h3 className="text-lg font-bold">We are</h3><ul className="mt-4 space-y-3">{IS.map((t) => <li key={t} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul></div>
          <div className="rounded-md border border-line p-7"><h3 className="text-lg font-bold">We are not</h3><ul className="mt-4 space-y-3">{ISNOT.map((t) => <li key={t} className="flex gap-3"><X size={20} className="mt-0.5 shrink-0 text-danger" aria-hidden="true" />{t}</li>)}</ul></div>
        </div>
      </Section>
      <Section tone="sky" labelledBy="why">
        <SectionHeading id="why" eyebrow="Why EDTC" title="Why organisations choose EDTC" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{WHY.map(([t, d]) => <div key={t} className="rounded-md bg-white p-6"><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p></div>)}</div>
        <div className="mt-8"><TextLink to="/partners">Partner with EDTC</TextLink></div>
      </Section>
      <CallToAction title="Get in touch" text="Interested in certification, a partnership or working together? We are happy to talk." primary={{ to: '/contact', label: 'Contact EDTC' }} secondary={{ to: '/partners', label: 'Become a partner' }} />
    </>
  )
}
