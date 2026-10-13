import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { trail } from '../data/routes.js'

/** Breadcrumbs follow the menu hierarchy from the route table, not the URL segments. */
export default function Breadcrumbs({ path, current, dark = false }) {
  const items = trail(path)
  if (current) items.push({ path: null, name: current })
  if (items.length < 2) return null
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${dark ? 'text-white/70' : 'text-muted'}`}>
        {items.map((r, i) => {
          const last = i === items.length - 1
          return (
            <li key={(r.path || '') + r.name} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} aria-hidden="true" className="opacity-60" />}
              {last || !r.path ? (
                <span aria-current={last ? 'page' : undefined} className={dark ? 'text-white' : 'text-ink'}>{r.name}</span>
              ) : (
                <Link to={r.path} className={`hover:underline ${dark ? 'hover:text-white' : 'hover:text-brand'}`}>{r.name}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
