import { useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CircleCheck, CircleAlert, Mail } from 'lucide-react'
import { SITE } from '../lib/site.js'

const INTERESTS = [
  ['sycur', 'SYCUR and enterprise deployment'],
  ['certification', 'AI Readiness Certification'],
  ['assessment', 'An assessment (readiness, risk, audit, security)'],
  ['assurance', 'AI assurance'],
  ['governance', 'AI governance guidance'],
  ['frameworks', 'EDTC frameworks'],
  ['partnership', 'Partnership'],
  ['general', 'General enquiry'],
]
const COUNTRIES = ['Germany', 'France', 'Netherlands', 'Belgium', 'Austria', 'Spain', 'Italy', 'Other EU or EEA country', 'Outside the EU and EEA']

const RULES = {
  name: (v) => (v.trim() ? '' : 'Enter your name.'),
  organisation: (v) => (v.trim() ? '' : 'Enter your organisation.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@company.eu.'),
  interest: (v) => (v ? '' : 'Choose an area of interest.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Write a message of at least 10 characters.'),
  consent: (v) => (v ? '' : 'Confirm that you have read the privacy policy.'),
}

const field = 'min-h-12 w-full rounded-md border bg-white px-3.5 py-2.5 text-base text-ink'

export default function ContactForm() {
  const [params] = useSearchParams()
  const presetInterest = INTERESTS.some(([k]) => k === params.get('interest')) ? params.get('interest') : ''
  const presetLevel = params.get('level')
  const [v, setV] = useState({
    name: '', organisation: '', email: '', role: '', interest: presetInterest, country: '',
    message: presetLevel ? `I am interested in AI Readiness Certification, Level ${presetLevel}.` : '',
    consent: false, website: '',
  })
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | sent | not-configured | failed
  const formRef = useRef(null)
  const statusRef = useRef(null)

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setV((s) => ({ ...s, [k]: val }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: RULES[k](val) }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = {}
    for (const k of Object.keys(RULES)) {
      const msg = RULES[k](v[k])
      if (msg) found[k] = msg
    }
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      formRef.current.querySelector(`[name="${first}"]`)?.focus()
      return
    }
    if (v.website) return // honeypot: silently ignore bots
    if (!SITE.contactEndpoint) {
      setState('not-configured')
      setTimeout(() => statusRef.current?.focus(), 0)
      return
    }
    setState('sending')
    try {
      const { website, ...payload } = v
      const res = await fetch(SITE.contactEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
    } catch {
      setState('failed')
    }
    setTimeout(() => statusRef.current?.focus(), 0)
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Enquiry: ' + (INTERESTS.find(([k]) => k === v.interest)?.[1] || 'General'))}&body=${encodeURIComponent(`${v.message}\n\n${v.name}\n${v.role ? v.role + ', ' : ''}${v.organisation}\n${v.email}`)}`

  if (state === 'sent') {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-md border border-line border-t-4 border-t-success bg-white p-8">
        <CircleCheck size={34} className="text-success" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold">Thank you, {v.name.trim().split(/\s+/)[0]}</h2>
        <p className="mt-2 text-muted">Your message has been sent to EDTC. We will reply to {v.email} as soon as we can.</p>
      </div>
    )
  }

  const err = (k) => errors[k] && <p id={`err-${k}`} className="mt-1.5 text-sm font-medium text-danger">{errors[k]}</p>
  const a = (k, extra = '') => ({ id: `f-${k}`, name: k, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `err-${k}` : undefined, className: `${field} ${errors[k] ? 'border-danger' : 'border-[#b8bfc8]'} ${extra}` })

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="grid gap-5 rounded-md border border-line bg-white p-6 sm:grid-cols-2 sm:p-8">
      {(state === 'not-configured' || state === 'failed') && (
        <div ref={statusRef} tabIndex={-1} role="alert" className="flex gap-3 rounded-md border border-gold bg-gold-muted p-4 sm:col-span-2">
          <CircleAlert size={20} className="mt-0.5 shrink-0 text-gold-ink" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold text-ink">{state === 'failed' ? 'Your message could not be sent.' : 'Your message has not been sent.'}</p>
            <p className="mt-1 text-ink">
              {state === 'failed' ? 'Something went wrong on our side. ' : 'Online sending is not connected on this site yet. '}
              Please email us at <a className="font-semibold text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
            <a href={mailto} className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-hover">
              <Mail size={16} aria-hidden="true" /> Open your email with this message
            </a>
          </div>
        </div>
      )}
      <div><label htmlFor="f-name" className="mb-1.5 block text-sm font-semibold">Name <span className="text-danger" aria-hidden="true">*</span></label><input type="text" autoComplete="name" value={v.name} onChange={set('name')} {...a('name')} />{err('name')}</div>
      <div><label htmlFor="f-organisation" className="mb-1.5 block text-sm font-semibold">Organisation <span className="text-danger" aria-hidden="true">*</span></label><input type="text" autoComplete="organization" value={v.organisation} onChange={set('organisation')} {...a('organisation')} />{err('organisation')}</div>
      <div><label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold">Work email <span className="text-danger" aria-hidden="true">*</span></label><input type="email" autoComplete="email" value={v.email} onChange={set('email')} {...a('email')} />{err('email')}</div>
      <div><label htmlFor="f-role" className="mb-1.5 block text-sm font-semibold">Role</label><input type="text" autoComplete="organization-title" value={v.role} onChange={set('role')} {...a('role')} /></div>
      <div><label htmlFor="f-interest" className="mb-1.5 block text-sm font-semibold">Area of interest <span className="text-danger" aria-hidden="true">*</span></label>
        <select value={v.interest} onChange={set('interest')} {...a('interest')}><option value="">Choose one</option>{INTERESTS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select>{err('interest')}</div>
      <div><label htmlFor="f-country" className="mb-1.5 block text-sm font-semibold">Country</label>
        <select value={v.country} onChange={set('country')} {...a('country')}><option value="">Choose a country</option>{COUNTRIES.map((c) => <option key={c}>{c}</option>)}</select></div>
      <div className="sm:col-span-2"><label htmlFor="f-message" className="mb-1.5 block text-sm font-semibold">Message <span className="text-danger" aria-hidden="true">*</span></label>
        <textarea rows={5} value={v.message} onChange={set('message')} {...a('message', 'min-h-32')} />{err('message')}</div>
      <div className="hidden" aria-hidden="true"><label htmlFor="f-website">Website</label><input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} /></div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" checked={v.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'err-consent' : undefined} className="mt-1 h-5 w-5 shrink-0 accent-brand" />
          <span>I have read the <Link to="/privacy" className="font-semibold text-brand underline">privacy policy</Link> and agree that EDTC may use these details to respond to my enquiry. <span className="text-danger" aria-hidden="true">*</span></span>
        </label>
        {err('consent')}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Fields marked * are required.</p>
        <button type="submit" disabled={state === 'sending'} className="min-h-12 cursor-pointer rounded-md bg-brand px-7 font-semibold text-white hover:bg-brand-hover disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
