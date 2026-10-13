import { Link } from 'react-router-dom'
import { Section, ButtonLink } from '../components/ui.jsx'
import Seo from '../components/Seo.jsx'
import { NAV } from '../data/nav.js'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | EDTC" description="The page you were looking for could not be found." path="/404" noindex />
      <Section>
        <div className="mx-auto max-w-2xl py-10 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">Error 404</p>
          <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
          <p className="mt-4 text-lg text-muted">The page you were looking for does not exist or has moved. Try one of these sections instead.</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {NAV.filter((n) => n.items).map((n) => <li key={n.to}><Link to={n.to} className="inline-flex min-h-11 items-center rounded-full border border-line px-5 font-medium hover:border-brand hover:text-brand">{n.label}</Link></li>)}
          </ul>
          <div className="mt-10"><ButtonLink to="/">Go to the home page</ButtonLink></div>
        </div>
      </Section>
    </>
  )
}
