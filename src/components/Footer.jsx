import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe } from 'lucide-react'
import { NAV, FOOTER_LEGAL } from '../data/nav.js'
import { SITE, DISCLAIMER } from '../lib/site.js'
import Logo from './Logo.jsx'
import { Container } from './ui.jsx'

export default function Footer() {
  const groups = NAV.filter((g) => g.items)
  return (
    <footer className="bg-navy text-white/80 on-dark">
      <Container className="grid gap-10 py-14 xl:grid-cols-[0.75fr_3fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs font-heading text-lg font-semibold text-white">{SITE.tagline}</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5"><Mail size={16} className="mt-0.5 text-gold" aria-hidden="true" /><a className="hover:text-white hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li className="flex items-start gap-2.5"><MapPin size={16} className="mt-0.5 text-gold" aria-hidden="true" />{SITE.city}</li>
            <li className="flex items-start gap-2.5"><Globe size={16} className="mt-0.5 text-gold" aria-hidden="true" />{SITE.coverage}</li>
          </ul>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">SYCUR</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/sycur" className="hover:text-white hover:underline">Trust Control Plane</Link></li>
              <li><Link to="/contact?interest=sycur" className="hover:text-white hover:underline">Discuss SYCUR</Link></li>
            </ul>
          </div>
          {groups.map((g) => (
            <div key={g.label}>
              <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">{g.label}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {g.items.filter((i, idx) => idx > 0 || g.label === 'About EDTC').map((i) => (
                  <li key={i.to + i.label}><Link to={i.to} className="hover:text-white hover:underline">{i.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-4 py-6 text-xs lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl">{DISCLAIMER}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LEGAL.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-white hover:underline">{l.label}</Link></li>)}
            <li><Link to="/contact" className="hover:text-white hover:underline">Contact</Link></li>
          </ul>
        </Container>
        <Container className="pb-8 text-xs text-white/60">© {new Date().getFullYear()} European Digital Trust Council. All rights reserved.</Container>
      </div>
    </footer>
  )
}
