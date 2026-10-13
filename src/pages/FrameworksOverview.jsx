import { Section, SectionHeading, CallToAction, ExternalSource, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { FrameworkCard } from '../components/Cards.jsx'
import { FRAMEWORKS } from '../data/frameworks.js'
import { STANDARDS, STANDARDS_NOTE } from '../data/framework.js'

const LAYERS = [['Frameworks', 'Define what is assessed and how.'], ['Services', 'Apply a framework to your organisation.'], ['Certification', 'Recognises the result with a voluntary trust badge.']]

export default function FrameworksOverview() {
  return (
    <>
      <PageHero path="/frameworks" eyebrow="Frameworks" title="EDTC frameworks" intro="Structured methods that turn complex regulation and standards into clear, practical checklists for organisations of every size." />
      <Section labelledBy="list">
        <SectionHeading id="list" title="Our frameworks" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{FRAMEWORKS.map((f) => <FrameworkCard key={f.slug} framework={f} />)}</div>
      </Section>
      <Section tone="mist" labelledBy="relation">
        <SectionHeading id="relation" eyebrow="How they fit together" title="Frameworks, services and certification" />
        <ol className="grid gap-4 md:grid-cols-3">
          {LAYERS.map(([n, d], i) => (
            <li key={n} className="rounded-md border border-line bg-white p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-heading text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{n}</h3>
              <p className="mt-1.5 text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section labelledBy="standards">
        <SectionHeading id="standards" eyebrow="Standards context" title="Informed by established regulation and standards" intro="EDTC frameworks draw on leading references. They do not constitute legal advice or replace formal regulatory or accreditation processes." />
        <div className="overflow-x-auto rounded-md border border-line">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-sky text-sm"><tr><th scope="col" className="px-5 py-3 font-semibold">Reference</th><th scope="col" className="px-5 py-3 font-semibold">Type</th><th scope="col" className="px-5 py-3 font-semibold">How EDTC uses it</th></tr></thead>
            <tbody>{STANDARDS.map((s) => <tr key={s.name} className="border-t border-line"><td className="px-5 py-3.5 font-semibold"><ExternalSource href={s.href}>{s.name}</ExternalSource></td><td className="px-5 py-3.5 text-muted">{s.kind}</td><td className="px-5 py-3.5 text-muted">{s.use}</td></tr>)}</tbody>
          </table>
        </div>
        <div className="mt-8"><Notice>{STANDARDS_NOTE}</Notice></div>
      </Section>
      <CallToAction />
    </>
  )
}
