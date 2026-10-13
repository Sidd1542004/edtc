import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Section, CallToAction } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { RESOURCES, RESOURCE_TYPES } from '../data/knowledge.js'
import { SITE } from '../lib/site.js'

export default function ResourcesPage() {
  const [type, setType] = useState('All')
  const shown = RESOURCES.filter((r) => type === 'All' || r.type === type)
  return (
    <>
      <PageHero path="/resources" eyebrow="Knowledge" title="Resources" intro="EDTC tools and guides, and the official EU sources and standards our frameworks refer to." />
      <Section>
        <div role="group" aria-label="Filter resources by type" className="mb-8 flex flex-wrap gap-2">
          {['All', ...RESOURCE_TYPES].map((t) => (
            <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={`min-h-10 cursor-pointer rounded-full border px-4 text-sm font-medium ${type === t ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink hover:border-brand'}`}>
              {t}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{shown.length} resources shown</p>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => {
            const inner = (
              <>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-ink">{r.type}</p>
                <h2 className="mt-2 text-lg font-bold">{r.title}</h2>
                <p className="mt-2 flex-1 text-muted">{r.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {r.href ? <>Open source <ExternalLink size={14} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></> : <>Open <ArrowRight size={14} aria-hidden="true" /></>}
                </span>
              </>
            )
            const cls = 'flex h-full flex-col rounded-md border border-line bg-white p-6 hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]'
            return <li key={r.title}>{r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a> : <Link to={r.to} className={cls}>{inner}</Link>}</li>
          })}
        </ul>
        <p className="mt-8 text-sm text-muted">External links were checked on {SITE.reviewDate}.</p>
      </Section>
      <CallToAction />
    </>
  )
}
