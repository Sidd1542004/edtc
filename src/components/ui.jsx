import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Plus, Minus, Clock } from 'lucide-react'
import { SITE } from '../lib/site.js'

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

const tones = { white: 'bg-paper', mist: 'bg-mist', sky: 'bg-sky', navy: 'bg-navy text-white on-dark' }

export function Section({ tone = 'white', id, className = '', children, labelledBy }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-20 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <p className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? 'text-gold-light' : 'text-gold-ink'}`}>
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, intro, dark = false, id, className = '' }) {
  return (
    <div className={`mb-10 max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={`text-[1.65rem] font-bold leading-tight sm:text-3xl lg:text-[2.1rem] ${dark ? 'text-white' : ''}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg ${dark ? 'text-white/80' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}

const btn = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  gold: 'bg-gold text-navy hover:bg-gold-light',
  outline: 'border border-brand text-brand hover:bg-brand hover:text-white',
  outlineLight: 'border border-white/60 text-white hover:bg-white hover:text-navy',
}

export function ButtonLink({ to, href, variant = 'primary', children, className = '' }) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-[0.95rem] font-semibold transition-colors ${btn[variant]} ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  )
}

export function TextLink({ to, children }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-hover hover:underline">
      {children}
      <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}

export function ExternalSource({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 text-brand underline underline-offset-2 hover:text-brand-hover">
      <span>{children}</span>
      <ExternalLink size={14} className="mt-1 shrink-0" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

/** Marks content that EDTC still has to supply. Visible to the public as a neutral note; the editorial label shows only in review builds. */
export function PendingContent({ title, children, note }) {
  return (
    <div className="rounded-md border border-dashed border-silver bg-mist p-5">
      {SITE.showEditorial && note && (
        <p className="mb-2 inline-block rounded-sm bg-gold-muted px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-gold-ink">Editorial · {note}</p>
      )}
      <p className="flex items-start gap-2.5 font-semibold text-ink">
        <Clock size={18} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden="true" />
        {title}
      </p>
      {children && <div className="mt-1.5 pl-7 text-sm text-muted">{children}</div>}
    </div>
  )
}

export function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  const base = useId()
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(([q, a], i) => {
        const isOpen = open === i
        return (
          <div key={q}>
            <h3 className="text-base">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-heading text-[1.02rem] font-semibold text-ink hover:text-brand"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                id={`${base}-q-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {q}
                {isOpen ? <Minus size={20} className="shrink-0 text-gold-dark" aria-hidden="true" /> : <Plus size={20} className="shrink-0 text-gold-dark" aria-hidden="true" />}
              </button>
            </h3>
            <div id={`${base}-${i}`} role="region" aria-labelledby={`${base}-q-${i}`} hidden={!isOpen}>
              <p className="max-w-3xl pb-6 text-muted">{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CallToAction({ title = 'Talk to EDTC about your AI readiness', text = 'Tell us where you are with AI and what you need. We will suggest the right starting point.', primary = { to: '/contact', label: 'Contact EDTC' }, secondary = { to: '/services', label: 'Explore services' } }) {
  return (
    <section className="bg-navy py-16 text-white on-dark md:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to={primary.to} variant="gold">{primary.label}</ButtonLink>
          {secondary && <ButtonLink to={secondary.to} variant="outlineLight">{secondary.label}</ButtonLink>}
        </div>
      </Container>
    </section>
  )
}

export function Notice({ children, title = 'Important' }) {
  return (
    <aside className="rounded-md border-l-4 border-gold bg-gold-muted/60 p-5">
      <p className="text-sm font-semibold uppercase tracking-wider text-gold-ink">{title}</p>
      <p className="mt-1.5 text-ink">{children}</p>
    </aside>
  )
}
