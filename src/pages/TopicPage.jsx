import { HelpCircle, Check } from 'lucide-react'
import { Section, SectionHeading, CallToAction, ExternalSource, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { PillarCard } from '../components/Cards.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { TOPICS } from '../data/governance.js'
import { PILLARS } from '../data/framework.js'
import { FRAMEWORKS } from '../data/frameworks.js'
import { SITE } from '../lib/site.js'

const fmt = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })

/** Template for AI governance topic pages. */
export default function TopicPage({ slug }) {
  const t = TOPICS.find((x) => x.slug === slug)
  const pillars = PILLARS.filter((p) => t.pillars.includes(p.id))
  const fw = FRAMEWORKS.filter((f) => t.frameworks.includes(f.slug)).map((f) => f.path)
  return (
    <>
      <PageHero path={t.path} eyebrow="AI Governance" title={t.name} intro={t.intro} />

      <Section labelledBy="why">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading id="why" eyebrow="Why it matters" title={`Why ${t.name.replace('EU AI Act', 'the EU AI Act')} matters`} className="mb-5" />
            <p className="text-lg">{t.why}</p>
            {t.requirements && (
              <>
                <h3 className="mt-10 text-xl font-bold">Seven requirements for trustworthy AI</h3>
                <ol className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {t.requirements.map((r, i) => <li key={r} className="flex gap-3 rounded-md border border-line bg-white p-3.5"><span className="font-heading font-bold text-gold-ink">{i + 1}</span>{r}</li>)}
                </ol>
              </>
            )}
          </div>
          <aside className="h-fit rounded-md bg-sky p-7" aria-labelledby="questions">
            <h2 id="questions" className="font-heading text-lg font-bold">Questions to ask</h2>
            <ul className="mt-4 space-y-3">{t.questions.map((q) => <li key={q} className="flex gap-2.5"><HelpCircle size={18} className="mt-1 shrink-0 text-brand" aria-hidden="true" />{q}</li>)}</ul>
          </aside>
        </div>
      </Section>

      {t.riskTiers && (
        <Section tone="mist" labelledBy="tiers">
          <SectionHeading id="tiers" eyebrow="Structure" title="Four levels of risk" />
          <ol className="grid gap-4 md:grid-cols-4">
            {t.riskTiers.map(([n, d], i) => (
              <li key={n} className={`rounded-md border bg-white p-6 ${i === 0 ? 'border-danger/40' : i === 1 ? 'border-gold' : 'border-line'}`}>
                <h3 className="text-lg font-bold">{n}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {t.timeline && (
        <Section labelledBy="timeline">
          <SectionHeading id="timeline" eyebrow="Timeline" title="When the rules apply" intro={`As amended in 2026. Checked against official sources on ${SITE.reviewDate}.`} />
          <ol className="relative border-l-2 border-brand-muted pl-8">
            {t.timeline.map(([d, text]) => {
              const past = d <= '2026-10-09'
              return (
                <li key={d + text} className="relative pb-7 last:pb-0">
                  <span className={`absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 ${past ? 'border-brand bg-brand' : 'border-gold bg-white'}`} aria-hidden="true" />
                  <time dateTime={d} className="font-heading font-bold text-brand">{fmt(d)}</time>
                  <p className="mt-0.5">{text}</p>
                  <p className="text-xs text-muted">{past ? 'In effect' : 'Upcoming'}</p>
                </li>
              )
            })}
          </ol>
        </Section>
      )}

      <Section tone={t.timeline ? 'mist' : 'mist'} labelledBy="practice">
        <SectionHeading id="practice" eyebrow="In practice" title="Practical governance considerations" />
        <ul className="grid gap-4 md:grid-cols-2">{t.considerations.map((c) => <li key={c} className="flex gap-3 rounded-md border border-line bg-white p-5"><Check size={20} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />{c}</li>)}</ul>
        <h3 className="mt-12 text-xl font-bold">Risks and controls</h3>
        <div className="mt-4 overflow-x-auto rounded-md border border-line bg-white">
          <table className="w-full min-w-[520px] text-left">
            <thead className="bg-sky text-sm"><tr><th scope="col" className="px-5 py-3 font-semibold">Risk</th><th scope="col" className="px-5 py-3 font-semibold">Control</th></tr></thead>
            <tbody>{t.risks.map(([r, c]) => <tr key={r} className="border-t border-line"><td className="px-5 py-3.5">{r}</td><td className="px-5 py-3.5 text-muted">{c}</td></tr>)}</tbody>
          </table>
        </div>
      </Section>

      <Section labelledBy="roles">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="roles" eyebrow="Roles" title="Roles and responsibilities" className="mb-6" />
            <dl className="divide-y divide-line border-y border-line">{t.roles.map(([r, d]) => <div key={r} className="py-4"><dt className="font-semibold">{r}</dt><dd className="text-muted">{d}</dd></div>)}</dl>
          </div>
          <div>
            <SectionHeading eyebrow="Evidence" title="Evidence to keep" className="mb-6" />
            <ul className="space-y-3">{t.evidence.map((e) => <li key={e} className="flex gap-3 rounded-md bg-mist p-4"><Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{e}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section tone="sky" labelledBy="eu">
        <SectionHeading id="eu" eyebrow="European context" title="Regulatory context" />
        <p className="max-w-3xl text-lg">{t.eu}</p>
        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted">Sources (reviewed {SITE.reviewDate})</h3>
        <ul className="mt-2 space-y-1.5">{t.sources.map((s) => <li key={s.href}><ExternalSource href={s.href}>{s.label}</ExternalSource></li>)}</ul>
        <div className="mt-8"><Notice>This page is general information, not legal advice. EDTC does not certify compliance with the EU AI Act or any other law.</Notice></div>
      </Section>

      <Section labelledBy="pillars">
        <SectionHeading id="pillars" eyebrow="EDTC framework" title="Related pillars of the AI Readiness Framework" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{pillars.map((p) => <PillarCard key={p.id} pillar={p} compact linked />)}</div>
      </Section>
      <RelatedResources paths={[...t.services, ...fw]} title="Next steps" />
      <CallToAction />
    </>
  )
}
