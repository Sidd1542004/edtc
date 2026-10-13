import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NAV } from '../data/nav.js'
import { routeByPath, trail } from '../data/routes.js'
import MegaMenu from './MegaMenu.jsx'

// A page shared by two menus (AI Governance) only marks the group whose own landing page it is.
const shared = new Set(NAV.filter((g) => g.items).map((g) => g.to))
function groupIsActive(group, pathname) {
  const chain = routeByPath[pathname] ? trail(pathname).map((r) => r.path) : [pathname]
  return group.items.some((i) => (i.to === group.to || !shared.has(i.to)) && chain.includes(i.to))
}

export default function DesktopNavigation() {
  const [open, setOpen] = useState(null)
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(null), [pathname])
  useEffect(() => {
    const onDoc = (e) => ref.current && !ref.current.contains(e.target) && setOpen(null)
    const onKey = (e) => {
      if (e.key === 'Escape' && open) {
        const btn = ref.current?.querySelector(`[data-group="${open}"]`)
        setOpen(null)
        btn?.focus()
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <nav aria-label="Main" ref={ref} className="hidden xl:block">
      <ul className="flex items-center gap-0.5">
        {NAV.map((group) => {
          if (!group.items) {
            return (
              <li key={group.label}>
                <NavLink to={group.to} end className={({ isActive }) => `block whitespace-nowrap rounded-md px-2.5 py-2 text-[0.92rem] font-medium ${isActive ? 'text-brand' : 'text-ink hover:text-brand'}`}>
                  {({ isActive }) => (
                    <span className={`inline-flex items-center gap-1.5 ${isActive ? 'border-b-2 border-gold pb-1' : ''} ${group.flagship ? 'font-semibold' : ''}`}>
                      {group.flagship && <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />}
                      {group.label}
                    </span>
                  )}
                </NavLink>
              </li>
            )
          }
          const active = groupIsActive(group, pathname)
          const isOpen = open === group.label
          const id = `menu-${group.label.replace(/\s+/g, '-').toLowerCase()}`
          return (
            <li key={group.label} className="relative" onMouseLeave={() => isOpen && setOpen(null)}>
              <button
                type="button"
                data-group={group.label}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : group.label)}
                onMouseEnter={() => setOpen(group.label)}
                className={`flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.92rem] font-medium ${active ? 'text-brand' : 'text-ink hover:text-brand'}`}
              >
                <span className={active ? 'border-b-2 border-gold pb-1' : ''}>{group.label}</span>
                <ChevronDown size={15} aria-hidden="true" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <>
                  <span className="absolute inset-x-0 top-full h-3" aria-hidden="true" />
                  <MegaMenu group={group} id={id} onNavigate={() => setOpen(null)} />
                </>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
