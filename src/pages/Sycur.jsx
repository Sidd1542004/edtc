import { Link } from 'react-router-dom'
import { Cpu, Fingerprint, IdCard, KeyRound, Scale, Zap, Receipt, Archive, ArrowRight, ArrowDown, Ban, ShieldAlert, CircleCheck, Layers, Activity, Server, BadgeCheck, Check } from 'lucide-react'
import { Section, SectionHeading, Container, Eyebrow, Notice } from '../components/ui.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import WaveLines from '../components/WaveLines.jsx'
import SycurFlowVisual from '../components/SycurFlowVisual.jsx'
import { ECOSYSTEM, STAGES, OUTCOMES, COMMERCIAL, OBJECTIVES, SYCUR_ECOSYSTEM } from '../data/sycur.js'

const ICON = { cpu: Cpu, fingerprint: Fingerprint, idcard: IdCard, key: KeyRound, scale: Scale, zap: Zap, receipt: Receipt, archive: Archive }
const OUTCOME_STYLE = {
  deny: { icon: Ban, cls: 'border-danger/40', tag: 'bg-[#fdecea] text-danger' },
  stepup: { icon: ShieldAlert, cls: 'border-gold', tag: 'bg-gold-muted text-gold-ink' },
  allow: { icon: CircleCheck, cls: 'border-success/40', tag: 'bg-[#e7f3ec] text-success' },
}
const COMMERCIAL_ICON = { 'SYCUR Platform': Layers, 'Trust Usage': Activity, 'Edge & Expansion': Server, 'EDTC Assurance': BadgeCheck }

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

function Btn({ to, onClick, href, variant = 'gold', children }) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold transition-colors ${variant === 'gold' ? 'bg-gold text-navy hover:bg-gold-light' : variant === 'outlineLight' ? 'border border-white/60 text-white hover:bg-white hover:text-navy' : variant === 'outline' ? 'border border-brand text-brand hover:bg-brand hover:text-white' : 'bg-brand text-white hover:bg-brand-hover'}`
  if (href) return <a href={href} onClick={onClick} className={cls}>{children}<ArrowDown size={17} aria-hidden="true" /></a>
  return <Link to={to} className={cls}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>
}

export default function Sycur() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <WaveLines className="pointer-events-none absolute -left-40 top-0 h-full w-auto opacity-60" />
        <Container className="relative grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Breadcrumbs path="/sycur" dark />
            <Eyebrow dark>SYCUR · EDTC flagship technology</Eyebrow>
            <h1 className="text-[2.3rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Building Trust Infrastructure for the <span className="text-gold-light">Autonomous World.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              SYCUR is EDTC's operational Trust Control Plane for autonomous systems, designed to evaluate whether AI-driven actions should proceed and to preserve evidence of what happened.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Btn href="#workflow" onClick={scrollTo('workflow')}>Explore SYCUR</Btn>
              <Btn to="/contact?interest=sycur" variant="outlineLight">Discuss Enterprise Deployment</Btn>
            </div>
            <p className="mt-8 border-l-2 border-gold pl-4 text-sm text-white/80">Built for environments where AI agents and autonomous systems can execute actions, not only recommend them.</p>
          </div>
          <SycurFlowVisual />
        </Container>
      </section>

      {/* 2. EDTC and SYCUR */}
      <Section labelledBy="ecosystem">
        <SectionHeading id="ecosystem" eyebrow="One trust ecosystem" title="EDTC is the brand. SYCUR is the technology." intro={SYCUR_ECOSYSTEM} />
        <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:gap-0">
          {ECOSYSTEM.map((c, i) => {
            const core = c.key === 'sycur'
            const card = (
              <article key={c.key} className={`flex h-full flex-col rounded-lg p-7 ${core ? 'bg-navy text-white shadow-[0_20px_44px_rgba(10,39,68,0.28)] lg:-my-4 lg:py-11' : 'border border-line bg-white'}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${core ? 'text-gold-light' : 'text-gold-ink'}`}>{c.role}</p>
                <h3 className={`mt-2 text-2xl font-bold ${core ? 'text-white' : ''}`}>{c.name}</h3>
                <ul className={`mt-5 flex-1 space-y-3 ${core ? 'text-white/85' : 'text-muted'}`}>
                  {c.points.map((p) => <li key={p} className="flex gap-2.5"><Check size={18} className={`mt-1 shrink-0 ${core ? 'text-gold-light' : 'text-brand'}`} aria-hidden="true" />{p}</li>)}
                </ul>
                {c.to.startsWith('#') ? (
                  <a href={c.to} onClick={scrollTo(c.to.slice(1))} className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${core ? 'text-gold-light hover:text-white' : 'text-brand'} hover:underline`}>{c.link}<ArrowDown size={15} aria-hidden="true" /></a>
                ) : (
                  <Link to={c.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">{c.link}<ArrowRight size={15} aria-hidden="true" /></Link>
                )}
              </article>
            )
            if (i === 0) return card
            const separation = c.key === 'assurance'
            return [
              <div key={`j${i}`} className="flex items-center justify-center py-1 lg:w-16 lg:py-0" aria-hidden="true">
                {separation ? (
                  <div className="flex flex-col items-center gap-1.5 lg:h-full lg:justify-center">
                    <span className="h-6 w-px border-l-2 border-dashed border-gold lg:h-14" />
                    <span className="rounded-full bg-gold-muted px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-gold-ink">Separate</span>
                    <span className="h-6 w-px border-l-2 border-dashed border-gold lg:h-14" />
                  </div>
                ) : (
                  <span className="flex items-center text-brand"><span className="hidden h-px w-8 bg-brand lg:block" /><ArrowRight size={20} className="rotate-90 lg:rotate-0" /></span>
                )}
              </div>,
              card,
            ]
          })}
        </div>
        <p className="mt-10 max-w-3xl text-muted">The framework defines what trust means. SYCUR puts trust decisions into operation. EDTC Assurance assesses the evidence and controls independently, so the organisation that provides the technology is not the one marking its own work.</p>
      </Section>

      {/* 3. Workflow */}
      <section id="workflow" aria-labelledby="workflow-title" className="scroll-mt-24 bg-mist py-16 md:py-20">
        <Container>
          <SectionHeading id="workflow-title" eyebrow="The autonomous execution workflow" title="SYCUR sits between autonomous intent and execution." intro="The enterprise risk changes when AI can execute, not just recommend." />
          <ol className="grid gap-2 lg:grid-cols-8 lg:gap-0" aria-label="SYCUR workflow, eight stages">
            {STAGES.map((s, i) => {
              const Icon = ICON[s.icon]
              const isDecision = s.id === 'decision'
              const isAction = s.id === 'action'
              return (
                <li key={s.id} className="relative flex flex-col lg:items-stretch">
                  <div className={`flex w-full items-center gap-4 rounded-lg border p-4 lg:mx-1.5 lg:h-full lg:flex-col lg:gap-3 lg:px-2 lg:py-5 lg:text-center ${isDecision ? 'border-gold bg-navy text-white shadow-[0_12px_30px_rgba(10,39,68,0.25)]' : isAction ? 'border-gold bg-white ring-2 ring-gold/40' : 'border-line bg-white'}`}>
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${isDecision ? 'bg-gold text-navy' : isAction ? 'bg-gold-muted text-gold-ink' : 'bg-sky text-brand'}`}><Icon size={20} aria-hidden="true" /></span>
                    <div className="min-w-0">
                      <p className={`text-[0.7rem] font-bold tracking-wider ${isDecision ? 'text-gold-light' : 'text-gold-ink'}`}>STEP {i + 1}</p>
                      <h3 className={`text-[0.82rem] font-bold uppercase leading-tight tracking-[0.06em] ${isDecision ? 'text-white' : ''}`}>{s.label}</h3>
                    </div>
                  </div>
                  {i < STAGES.length - 1 && (
                    <>
                      <ArrowDown size={18} className="mx-auto my-0.5 text-brand lg:hidden" aria-hidden="true" />
                      <ArrowRight size={16} className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-mist text-brand lg:block" aria-hidden="true" />
                    </>
                  )}
                </li>
              )
            })}
          </ol>

          <div className="mt-10 rounded-lg border border-line bg-white p-6 sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy"><Scale size={18} className="text-gold-dark" aria-hidden="true" />Possible trust decision outcomes</p>
            <ul className="mt-5 grid gap-4 md:grid-cols-3">
              {OUTCOMES.map((o) => {
                const st = OUTCOME_STYLE[o.id]
                const Icon = st.icon
                return (
                  <li key={o.id} className={`rounded-md border-2 p-5 ${st.cls}`}>
                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold uppercase tracking-wider ${st.tag}`}><Icon size={16} aria-hidden="true" />{o.label}</span>
                    <p className="mt-3">{o.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <blockquote className="mt-10 border-l-4 border-gold pl-6">
            <p className="font-heading text-xl font-bold leading-snug text-navy sm:text-2xl">Before AI acts, SYCUR determines whether it should. After AI acts, SYCUR proves what happened.</p>
          </blockquote>
          <p className="mt-4 text-sm text-muted">Conceptual product workflow. Implementation details depend on the deployment.</p>
        </Container>
      </section>

      {/* 4. Concepts */}
      <Section labelledBy="concepts">
        <SectionHeading id="concepts" eyebrow="How SYCUR supports trust" title="Trust decisions must be governed, not assumed." />
        <dl className="grid gap-x-10 gap-y-2 md:grid-cols-2">
          {STAGES.slice(1).map((s) => {
            const Icon = ICON[s.icon]
            return (
              <div key={s.id} className="flex gap-4 border-t border-line py-5">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-md ${s.key ? 'bg-navy text-gold-light' : 'bg-sky text-brand'}`}><Icon size={19} aria-hidden="true" /></span>
                <div><dt className="font-heading text-lg font-bold">{s.label}</dt><dd className="mt-0.5 text-muted">{s.text}</dd></div>
              </div>
            )
          })}
        </dl>
      </Section>

      {/* 5. Commercial model */}
      <Section tone="sky" labelledBy="commercial">
        <SectionHeading id="commercial" eyebrow="Commercial model" title="Recurring software first. Assurance amplifies the platform." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMERCIAL.map((c) => {
            const Icon = COMMERCIAL_ICON[c.name]
            const assurance = c.kind === 'assurance'
            return (
              <article key={c.name} className={`flex flex-col rounded-lg p-6 ${assurance ? 'border-2 border-dashed border-gold bg-white' : 'border border-brand-muted bg-white'}`}>
                <p className={`text-[0.7rem] font-bold uppercase tracking-[0.14em] ${assurance ? 'text-gold-ink' : 'text-brand'}`}>{assurance ? 'Independent assurance' : 'SYCUR technology'}</p>
                <span className={`mt-4 grid h-11 w-11 place-items-center rounded-md ${assurance ? 'bg-gold-muted text-gold-ink' : 'bg-navy text-white'}`}><Icon size={20} aria-hidden="true" /></span>
                <h3 className="mt-4 text-xl font-bold">{c.name}</h3>
                <ul className="mt-4 space-y-2.5">{c.items.map((i) => <li key={i} className="flex gap-2.5"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${assurance ? 'bg-gold' : 'bg-brand'}`} aria-hidden="true" />{i}</li>)}</ul>
              </article>
            )
          })}
        </div>
        <p className="mt-8 max-w-3xl text-muted">The first three are SYCUR technology offerings. EDTC Assurance is delivered as an independent assessment, separate from the platform. Pricing is discussed per engagement.</p>
      </Section>

      {/* 6. Why */}
      <Section labelledBy="why">
        <SectionHeading id="why" eyebrow="Why it matters" title="When AI can act, trust becomes operational." />
        <ol className="grid gap-6 md:grid-cols-3">
          {OBJECTIVES.map((o) => (
            <li key={o.n} className="border-t-[3px] border-navy pt-6">
              <p className="font-heading text-4xl font-extrabold text-gold">0{o.n}</p>
              <h3 className="mt-3 text-xl font-bold">{o.name}</h3>
              <p className="mt-2 text-muted">{o.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12"><Notice>SYCUR supports an organisation's approach to trusted autonomous systems. Using SYCUR does not by itself guarantee regulatory compliance, and EDTC is not a regulator.</Notice></div>
      </Section>

      {/* 7. Enterprise CTA */}
      <section className="relative overflow-hidden bg-navy py-16 text-white on-dark md:py-20">
        <WaveLines className="pointer-events-none absolute -right-28 -top-16 h-[150%] w-auto opacity-50" />
        <Container className="relative">
          <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">Building autonomous systems? Build trust into the execution layer.</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/85">Explore how SYCUR and the EDTC Trust Framework can support your organisation's approach to trusted autonomous systems.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn to="/contact?interest=sycur">Discuss SYCUR</Btn>
            <Btn to="/services" variant="outlineLight">Explore EDTC Services</Btn>
          </div>
        </Container>
      </section>
    </>
  )
}
