import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV } from '../data/nav.js'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const [group, setGroup] = useState(null)
  const { pathname } = useLocation()
  const toggle = useRef(null)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        ref={toggle}
        type="button"
        className="grid h-11 w-11 cursor-pointer place-items-center rounded-md border border-line text-navy"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-line bg-white px-4 pb-10 sm:px-6">
          <ul>
            {NAV.map((g) => (
              <li key={g.label} className="border-b border-line">
                {g.items ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between py-4 text-left font-heading text-[1.05rem] font-semibold text-ink"
                      aria-expanded={group === g.label}
                      onClick={() => setGroup(group === g.label ? null : g.label)}
                    >
                      {g.label}
                      <ChevronDown size={20} aria-hidden="true" className={`text-gold-dark transition-transform ${group === g.label ? 'rotate-180' : ''}`} />
                    </button>
                    {group === g.label && (
                      <ul className="pb-3">
                        {g.items.map((i) => (
                          <li key={i.to + i.label}>
                            <NavLink to={i.to} end className={({ isActive }) => `block rounded-md px-3 py-2.5 ${isActive ? 'bg-sky font-semibold text-brand' : 'text-ink'}`}>
                              {i.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to={g.to} end className="flex items-center gap-2 py-4 font-heading text-[1.05rem] font-semibold text-ink">
                    {g.flagship && <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />}
                    {g.label}
                    {g.flagship && <span className="ml-1 rounded-full bg-gold-muted px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-gold-ink">Flagship</span>}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="mt-6 flex min-h-12 items-center justify-center rounded-md bg-brand font-semibold text-white">Contact EDTC</NavLink>
        </nav>
      )}
    </div>
  )
}
