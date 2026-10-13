import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ICONS } from './icons.js'

export function ServiceCard({ service }) {
  const Icon = ICONS[service.icon]
  return (
    <Link to={service.path} className="group flex h-full flex-col rounded-md border border-line bg-white p-6 transition-shadow hover:border-brand-muted hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]">
      <div className="flex items-start justify-between gap-4">
        {Icon && <span className="grid h-11 w-11 place-items-center rounded-md bg-sky text-brand"><Icon size={21} aria-hidden="true" /></span>}
        {service.type && <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">{service.type}</span>}
      </div>
      <h3 className="mt-5 text-lg font-bold group-hover:text-brand">{service.name}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] text-muted">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Learn more <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}

export function FrameworkCard({ framework }) {
  const published = framework.status === 'published'
  return (
    <Link to={framework.path} className="group flex h-full flex-col rounded-md border border-line bg-white p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]">
      <span className={`self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${published ? 'bg-sky text-brand' : 'bg-mist text-muted'}`}>
        {published ? 'Published framework' : 'Details coming soon'}
      </span>
      <h3 className="mt-4 text-lg font-bold group-hover:text-brand">{framework.name}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] text-muted">{framework.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        View framework <ArrowRight size={15} aria-hidden="true" />
      </span>
    </Link>
  )
}

export function PillarCard({ pillar, compact = false, linked = false }) {
  const body = (
    <>
      <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-gold-ink">Pillar {pillar.number}</p>
      <h3 className="mt-2 text-[1.08rem] font-bold">{pillar.name}</h3>
      <p className="mt-2 text-[0.95rem] text-muted">{pillar.summary}</p>
      {!compact && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-[0.92rem]">
          {pillar.points.map((p) => (
            <li key={p} className="flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />{p}</li>
          ))}
        </ul>
      )}
    </>
  )
  const cls = 'block h-full rounded-md border border-line border-t-[3px] border-t-brand bg-white p-6'
  return linked ? (
    <Link to={`/frameworks/ai-readiness-framework#${pillar.id}`} className={`${cls} hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]`}>{body}</Link>
  ) : (
    <article id={pillar.id} className={`${cls} scroll-mt-28`}>{body}</article>
  )
}
