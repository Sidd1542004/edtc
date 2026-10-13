import { Link } from 'react-router-dom'
import { Check, X, Building2, Users, Briefcase, Cpu, Landmark, Factory } from 'lucide-react'
import { Section, SectionHeading, ButtonLink, TextLink, CallToAction, Container, Eyebrow } from '../components/ui.jsx'
import { ServiceCard, FrameworkCard, PillarCard } from '../components/Cards.jsx'
import PillarWheel from '../components/PillarWheel.jsx'
import WaveLines from '../components/WaveLines.jsx'
import SycurFlowVisual from '../components/SycurFlowVisual.jsx'
import { STAGES } from '../data/sycur.js'
import { SERVICES, CERTIFICATION_CARD } from '../data/services.js'
import { TOPICS } from '../data/governance.js'
import { FRAMEWORKS } from '../data/frameworks.js'
import { PILLARS } from '../data/framework.js'
import { RESOURCES } from '../data/knowledge.js'

const FACTS = [['Independent', 'trust body'], ['3 levels', 'of certification'], ['EU & EEA', 'coverage'], ['6–8 weeks', 'certification process']]
const HELP = ['Understand how AI is used across the organisation', 'Identify governance, privacy and operational risks', 'Establish responsible AI policies and workflows', 'Demonstrate trust, credibility and readiness to customers and partners']
const FOCUS = [['Practical', 'not theoretical'], ['Business-friendly', 'not legal-heavy'], ['European', 'not country-specific'], ['Independent', 'not regulatory']]
const WHY = [['Independent credibility', 'Third-party validation that builds trust with customers and stakeholders.'], ['Practical guidance', 'Actionable recommendations, not just audit reports.'], ['European focus', 'A deep understanding of the European business and regulatory landscape.'], ['Scalable approach', 'Certification levels for different stages of AI maturity.']]
const WHO = [[Building2, 'SMEs (10–250 employees)'], [Factory, 'Mid-sized companies'], [Users, 'Enterprise teams using AI'], [Cpu, 'Technology and SaaS providers'], [Briefcase, 'Professional service firms'], [Landmark, 'Suppliers to the public sector']]
const IS = ['A readiness and trust body', 'A provider of frameworks and voluntary certification', 'An independent assessment organisation', 'A bridge between business needs and governance requirements']
const ISNOT = ['A regulator', 'A government authority', 'A law firm', 'A conformity assessment body']

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <WaveLines className="pointer-events-none absolute -left-40 top-0 h-full w-auto opacity-80" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow dark>Independent AI readiness and digital trust</Eyebrow>
            <h1 className="text-[2.4rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
              Build trust. <span className="text-gold-light">Enable innovation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              The European Digital Trust Council helps organisations in the EU and EEA adopt AI responsibly, through practical readiness assessments, governance guidance and voluntary certification.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/services" variant="gold">Explore our services</ButtonLink>
              <ButtonLink to="/contact" variant="outlineLight">Contact EDTC</ButtonLink>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
              {FACTS.map(([a, b]) => (
                <div key={a}>
                  <dt className="font-heading text-xl font-bold text-white">{a}</dt>
                  <dd className="text-sm text-white/70">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto w-full max-w-[460px]">
            <PillarWheel dark />
            <p className="mt-2 text-center text-sm text-white/70">The six pillars of the EDTC AI Readiness Framework</p>
          </div>
        </Container>
      </section>

      <Section tone="sky" labelledBy="sycur">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading id="sycur" eyebrow="Flagship technology · SYCUR" title="Trust Infrastructure for the Autonomous World" intro="Meet SYCUR, EDTC's operational Trust Control Plane for autonomous systems. Designed to place trust decisions between AI intent and execution, with evidence to support accountability." className="mb-6" />
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2" aria-label="SYCUR workflow">
              {STAGES.map((s, i) => (
                <li key={s.id} className="flex items-center gap-1.5">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${s.key ? 'bg-navy text-gold-light' : 'border border-brand-muted bg-white text-brand'}`}>{s.label}</span>
                  {i < STAGES.length - 1 && <span className="text-gold-dark" aria-hidden="true">›</span>}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted">EDTC is the brand. SYCUR is the technology. EDTC Assurance stays independent.</p>
            <div className="mt-8"><ButtonLink to="/sycur">Discover SYCUR</ButtonLink></div>
          </div>
          <Link to="/sycur" aria-label="Discover SYCUR" className="block rounded-[28px] transition-transform hover:-translate-y-1"><SycurFlowVisual /></Link>
        </div>
      </Section>

      <Section labelledBy="what-we-do">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="what-we-do" eyebrow="What we do" title="An independent European body for AI readiness and digital trust" intro="EDTC provides AI readiness and digital trust assessments and voluntary certification for organisations of every size." className="mb-6" />
            <h3 className="text-base font-bold">We help organisations:</h3>
            <ul className="mt-4 space-y-3">
              {HELP.map((h) => <li key={h} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{h}</li>)}
            </ul>
          </div>
          <div className="rounded-md bg-sky p-8">
            <h3 className="font-heading text-lg font-bold">Our focus</h3>
            <dl className="mt-5 divide-y divide-brand-muted">
              {FOCUS.map(([a, b]) => (
                <div key={a} className="flex items-baseline justify-between gap-4 py-4">
                  <dt className="font-heading text-lg font-bold text-brand">{a}</dt>
                  <dd className="text-muted">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="mist" labelledBy="services">
        <SectionHeading id="services" eyebrow="Services" title="Assessments, certification and assurance" intro="Start with an assessment, prove your progress with certification, or give customers independent assurance." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard service={CERTIFICATION_CARD} />
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
        <div className="mt-8"><TextLink to="/services">Compare all services</TextLink></div>
      </Section>

      <Section labelledBy="framework">
        <SectionHeading id="framework" eyebrow="AI Readiness Framework" title="Six pillars that make AI readiness measurable" intro="The framework translates complex regulation and standards into a clear, business-friendly checklist. It underpins EDTC assessments and certification." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => <PillarCard key={p.id} pillar={p} compact linked />)}
        </div>
        <div className="mt-8"><TextLink to="/frameworks/ai-readiness-framework">Explore the framework</TextLink></div>
      </Section>

      <Section tone="sky" labelledBy="governance">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading id="governance" eyebrow="AI governance" title="Practical guidance on governing AI" intro="Plain-language guidance on the governance questions organisations face, from shadow AI to the EU AI Act." className="mb-0" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {TOPICS.map((t) => (
              <li key={t.slug}>
                <Link to={t.path} className="block h-full rounded-md border border-brand-muted bg-white p-5 hover:border-brand">
                  <span className="font-heading font-bold text-ink">{t.name}</span>
                  <span className="mt-1 block text-sm text-muted">{t.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="frameworks">
        <SectionHeading id="frameworks" eyebrow="Frameworks" title="The methods behind our assessments" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FRAMEWORKS.map((f) => <FrameworkCard key={f.slug} framework={f} />)}
        </div>
      </Section>

      <Section tone="mist" labelledBy="why">
        <SectionHeading id="why" eyebrow="Why EDTC" title="Why organisations choose EDTC" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([t, d]) => (
            <div key={t} className="rounded-md border-t-[3px] border-gold bg-white p-6">
              <h3 className="text-lg font-bold">{t}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{d}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-14 font-heading text-xl font-bold">Who we support</h3>
        <p className="mt-2 text-muted">Organisations of every size adopting or scaling AI in the EU and EEA.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WHO.map(([Icon, t]) => <li key={t} className="flex items-center gap-3 rounded-md border border-line bg-white p-4"><Icon size={20} className="shrink-0 text-brand" aria-hidden="true" />{t}</li>)}
        </ul>
      </Section>

      <Section labelledBy="knowledge">
        <SectionHeading id="knowledge" eyebrow="Knowledge" title="Resources to get started" />
        <div className="grid gap-5 md:grid-cols-3">
          {RESOURCES.filter((r) => r.to).map((r) => (
            <Link key={r.title} to={r.to} className="rounded-md border border-line bg-white p-6 hover:shadow-[0_10px_24px_rgba(10,39,68,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-ink">{r.type}</p>
              <h3 className="mt-2 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">{r.text}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8"><TextLink to="/knowledge">Visit the knowledge hub</TextLink></div>
      </Section>

      <Section tone="mist" labelledBy="role">
        <SectionHeading id="role" eyebrow="Our role" title="What EDTC is, and what it is not" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-md border border-line bg-white p-7">
            <h3 className="text-lg font-bold">We are</h3>
            <ul className="mt-4 space-y-3">{IS.map((t) => <li key={t} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />{t}</li>)}</ul>
          </div>
          <div className="rounded-md border border-line bg-white p-7">
            <h3 className="text-lg font-bold">We are not</h3>
            <ul className="mt-4 space-y-3">{ISNOT.map((t) => <li key={t} className="flex gap-3"><X size={20} className="mt-0.5 shrink-0 text-danger" aria-hidden="true" />{t}</li>)}</ul>
          </div>
        </div>
      </Section>

      <CallToAction />
    </>
  )
}
