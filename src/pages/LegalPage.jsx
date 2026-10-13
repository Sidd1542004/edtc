import { Section, PendingContent } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { routeByPath } from '../data/routes.js'
import { SITE } from '../lib/site.js'

const INTRO = {
  privacy: 'How we collect, use and protect your personal data.',
  cookies: 'How we use cookies on this website.',
  terms: 'The terms for using our website and services.',
  disclaimer: 'Important clarifications about EDTC services and certification.',
  imprint: 'Legal notice and organisation details.',
}

function Disclaimer() {
  return (
    <ol className="space-y-8">
      <li><h2 className="text-xl font-bold">1. No legal advice</h2><p className="mt-2 text-muted">Information provided by EDTC, including assessments and certification results, is for guidance only and does not constitute legal or regulatory advice.</p></li>
      <li><h2 className="text-xl font-bold">2. Independent assessment</h2><p className="mt-2 text-muted">EDTC is an independent body. Our certification is a voluntary trust badge and does not replace formal regulatory approvals or compliance requirements, such as those under the EU AI Act.</p></li>
      <li><h2 className="text-xl font-bold">3. No warranty</h2><p className="mt-2 text-muted">Although we strive for accuracy, EDTC gives no guarantees or assurances as to the completeness or accuracy of the information provided.</p></li>
    </ol>
  )
}

function Imprint() {
  const rows = [['Organisation', 'European Digital Trust Council (EDTC)'], ['Email', SITE.email], ['Address', `${SITE.city} (street address to be confirmed)`], ['Management', 'Available on request'], ['Register', 'In formation, registered in Essen, Germany']]
  return (
    <>
      <p className="text-muted">Information required under German law.</p>
      <dl className="mt-6 divide-y divide-line border-y border-line">{rows.map(([k, v]) => <div key={k} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr]"><dt className="font-semibold">{k}</dt><dd>{v}</dd></div>)}</dl>
      <div className="mt-6"><PendingContent title="The registered address and the names of the managing directors will be added here." note="Imprint details require EDTC and legal confirmation" /></div>
    </>
  )
}

export default function LegalPage({ kind }) {
  const r = routeByPath[`/${kind}`]
  return (
    <>
      <PageHero path={r.path} eyebrow="Legal" title={r.name} intro={INTRO[kind]} />
      <Section>
        <div className="max-w-3xl">
          {kind === 'disclaimer' && <Disclaimer />}
          {kind === 'imprint' && <Imprint />}
          {['privacy', 'cookies', 'terms'].includes(kind) && (
            <PendingContent title={`The full ${r.name.toLowerCase()} is being moved from the current website and will appear here.`} note="Migrate the full legal text (last updated March 2026) before launch">
              For questions in the meantime, email <a className="text-brand underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </PendingContent>
          )}
        </div>
      </Section>
    </>
  )
}
