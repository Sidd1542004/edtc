import { Check, X } from 'lucide-react'
import { Section, SectionHeading, CallToAction, FAQAccordion, Notice, PendingContent } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { Link } from 'react-router-dom'
import { LEVELS, COVERAGE, NOT_LIST } from '../data/certification.js'
import { ASSESSMENT_STEPS } from '../data/framework.js'
import { SITE } from '../lib/site.js'

const FAQS = [
  ['How long does certification take?', 'Certification is a structured assessment that takes 6–8 weeks.'],
  ['What do certified organisations receive?', 'An AI readiness certificate and an EDTC trust badge with a verification link.'],
  ['Is this EU AI Act certification?', 'No. EDTC certification is a voluntary trust badge. It is not EU AI Act conformity certification, legal or regulatory approval, or a software product.'],
  ['Which level is right for us?', 'Level 1 suits organisations at the start of their AI journey, Level 2 those using AI operationally with documented governance, and Level 3 mature organisations with advanced governance requirements. EDTC can advise during a discovery call.'],
]

export default function Certification() {
  return (
    <>
      <PageHero path="/certification" eyebrow="Service · Certification" title="AI Readiness Certification" intro="A structured 6–8 week assessment to demonstrate responsible, transparent and well-governed use of AI. Three levels, fixed-price packages and a verifiable trust badge." />

      <Section labelledBy="levels" id="levels">
        <SectionHeading id="levels-title" eyebrow="Choose your level" title="Three levels, fixed prices" />
        <div className="grid gap-5 lg:grid-cols-3">
          {LEVELS.map((l) => (
            <article key={l.level} aria-labelledby={`level-${l.level}`} className={`relative flex flex-col rounded-md border bg-white p-7 ${l.popular ? 'border-brand shadow-[0_16px_40px_rgba(10,39,68,0.12)]' : 'border-line'}`}>
              {l.popular && <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-0.5 text-xs font-semibold text-navy">Most popular</span>}
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-gold-ink">Level {l.level}</p>
              <h3 id={`level-${l.level}`} className="mt-1 text-2xl font-bold">{l.name}</h3>
              <p className="mt-4 font-heading text-3xl font-extrabold text-brand">{l.price}</p>
              <p className="text-sm text-muted">Fixed price</p>
              <p className="mt-4 text-[0.95rem]">{l.for}</p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5 text-[0.95rem]">
                {l.includes.map((i) => <li key={i} className="flex gap-2.5"><Check size={18} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />{i}</li>)}
              </ul>
              {SITE.showEditorial && <p className="mt-3 text-xs text-gold-ink">Editorial: migrate the full feature list from the current site.</p>}
              <Link to={`/contact?interest=certification&level=${l.level}`} className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-md font-semibold ${l.popular ? 'bg-brand text-white hover:bg-brand-hover' : 'border border-brand text-brand hover:bg-brand hover:text-white'}`}>
                Enquire about Level {l.level}
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <PendingContent title="Online ordering is not available on this site yet." note="The current site's payment checkout is not connected in this build">
            Choose a level above to send an enquiry. EDTC will confirm scope and next steps.
          </PendingContent>
        </div>
      </Section>

      <Section tone="mist" labelledBy="coverage">
        <SectionHeading id="coverage" eyebrow="Coverage" title="Six pillars of coverage" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COVERAGE.map((c, i) => <li key={c} className="flex items-center gap-4 rounded-md border border-line bg-white p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-heading text-sm font-bold text-white">{i + 1}</span><span className="font-semibold">{c}</span></li>)}
        </ul>
        {SITE.showEditorial && <p className="mt-4 text-sm text-gold-ink">Editorial: this list differs from the six pillars on the framework page. EDTC to confirm one list.</p>}
      </Section>

      <Section labelledBy="process">
        <SectionHeading id="process" eyebrow="Process" title="How certification works" />
        <ProcessSteps steps={ASSESSMENT_STEPS} label="Certification process" />
      </Section>

      <Section tone="mist" labelledBy="not">
        <SectionHeading id="not" eyebrow="Important clarifications" title="This certification is not" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {NOT_LIST.map((n) => <li key={n} className="flex items-center gap-3 rounded-md border border-line bg-white p-5"><X size={20} className="shrink-0 text-danger" aria-hidden="true" />{n}</li>)}
        </ul>
        <div className="mt-8"><Notice>Certified organisations receive an EDTC trust badge and a verification link. The certification is a voluntary trust badge and does not replace formal regulatory approvals or compliance requirements such as those under the EU AI Act.</Notice></div>
      </Section>

      <Section labelledBy="faq">
        <SectionHeading id="faq" eyebrow="FAQ" title="Frequently asked questions" />
        <FAQAccordion items={FAQS} />
      </Section>
      <RelatedResources paths={['/frameworks/ai-readiness-framework', '/ai-readiness-assessment', '/ai-readiness']} />
      <CallToAction title="Ready to get certified?" text="Choose a level or talk to EDTC about which one fits your organisation." primary={{ to: '/contact?interest=certification', label: 'Enquire about certification' }} secondary={{ to: '/partners', label: 'Become a partner' }} />
    </>
  )
}
