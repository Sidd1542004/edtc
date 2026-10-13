import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { routeByPath } from '../data/routes.js'
import { SectionHeading, Section } from './ui.jsx'

/** Related pages, looked up by path in the central route table so every link is a real route. */
export default function RelatedResources({ paths, title = 'Related pages', tone = 'mist' }) {
  const items = [...new Set(paths)].map((p) => routeByPath[p]).filter(Boolean)
  if (!items.length) return null
  return (
    <Section tone={tone}>
      <SectionHeading title={title} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <li key={r.path}>
            <Link to={r.path} className="group flex h-full flex-col rounded-md border border-line bg-white p-5 hover:border-brand-muted hover:shadow-[0_10px_24px_rgba(10,39,68,0.08)]">
              <span className="font-heading font-bold text-ink group-hover:text-brand">{r.name}</span>
              <span className="mt-1.5 flex-1 text-sm text-muted">{r.description}</span>
              <ArrowRight size={16} className="mt-3 text-brand" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
