import { Check } from 'lucide-react'
import { Section, SectionHeading, CallToAction } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { SITE } from '../lib/site.js'

const WHO = ['MSPs and IT service providers', 'Cybersecurity companies', 'SME associations', 'Consultancies', 'Chambers of commerce', 'Technology partners']
const WHY = [['New revenue streams', 'Offer EDTC certification services to your client base.'], ['Co-branding programmes', 'Run assessments under your brand with EDTC support.'], ['Priority framework updates', 'Early access to methodology improvements.'], ['Level 1 and 2 delivery', 'Extend your portfolio with certified assessment capabilities.']]
const MODELS = [
  { name: 'Referral Partner', text: 'Refer clients and earn fees.', points: ['Refer clients to EDTC', 'Earn referral fees', 'No certification delivery', 'Marketing support'] },
  { name: 'Delivery Partner', text: 'Deliver assessments with EDTC certification.', points: ['Run Level 1 and 2 assessments', 'Training and certification required', 'Higher revenue share', 'Co-branded materials'], featured: true },
  { name: 'Strategic Partner', text: 'Full integration and joint go-to-market.', points: ['Full partnership integration', 'Joint go-to-market', 'Co-development of the framework', 'Individual terms'] },
]

export default function Partners() {
  return (
    <>
      <PageHero path="/partners" eyebrow="Partnerships" title="Become an EDTC partner" intro="We work with trusted partners to extend responsible AI adoption across Europe. Referral, delivery or strategic: choose the model that suits your organisation." />
      <Section labelledBy="who">
        <SectionHeading id="who" eyebrow="Who can partner" title="We work with organisations across Europe" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{WHO.map((w) => <li key={w} className="flex items-center gap-3 rounded-md border border-line p-4"><Check size={19} className="shrink-0 text-brand" aria-hidden="true" />{w}</li>)}</ul>
      </Section>
      <Section tone="mist" labelledBy="why">
        <SectionHeading id="why" eyebrow="Benefits" title="Why partner with EDTC" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{WHY.map(([t, d]) => <div key={t} className="rounded-md bg-white p-6"><h3 className="text-lg font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p></div>)}</div>
      </Section>
      <Section labelledBy="models">
        <SectionHeading id="models" eyebrow="Partnership models" title="Choose the model that fits" />
        <div className="grid gap-5 lg:grid-cols-3">
          {MODELS.map((m) => (
            <article key={m.name} className={`relative rounded-md border bg-white p-7 ${m.featured ? 'border-brand shadow-[0_16px_40px_rgba(10,39,68,0.12)]' : 'border-line'}`}>
              {m.featured && <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-0.5 text-xs font-semibold text-navy">Recommended</span>}
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="mt-2 text-muted">{m.text}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">{m.points.map((p) => <li key={p} className="flex gap-2.5"><Check size={18} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />{p}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-muted">Partnership enquiries: <a className="font-semibold text-brand underline" href={`mailto:${SITE.partnersEmail}`}>{SITE.partnersEmail}</a></p>
      </Section>
      <CallToAction title="Ready to partner?" text="Contact our partnership team to discuss working together." primary={{ to: '/contact?interest=partnership', label: 'Contact the partnership team' }} secondary={{ to: '/certification', label: 'See certification levels' }} />
    </>
  )
}
