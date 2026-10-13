import { Link } from 'react-router-dom'
import { Section, CallToAction, PendingContent } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { ARTICLES } from '../data/knowledge.js'

const COPY = {
  research: { title: 'Research', intro: 'EDTC research on AI adoption, governance and digital trust in Europe.', empty: 'EDTC research will be published here.' },
  insights: { title: 'Insights', intro: 'Articles and commentary on AI governance and European digital developments.', empty: 'EDTC articles and commentary will be published here.' },
}
const fmt = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function ListingPage({ section }) {
  const c = COPY[section]
  const items = ARTICLES.filter((a) => a.section === section).sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <PageHero path={`/${section}`} eyebrow="Knowledge" title={c.title} intro={c.intro} />
      <Section>
        {items.length ? (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((a) => (
              <li key={a.slug}>
                <Link to={`/${section}/${a.slug}`} className="flex h-full flex-col rounded-md border border-line bg-white p-6 hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-ink">{a.category}</p>
                  <h2 className="mt-2 text-lg font-bold">{a.title}</h2>
                  <p className="mt-2 flex-1 text-muted">{a.summary}</p>
                  <time dateTime={a.date} className="mt-4 text-sm text-muted">{fmt(a.date)}</time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <PendingContent title={`${c.empty} Nothing has been published yet.`} note="No approved articles supplied; add them to src/data/knowledge.js">
            In the meantime, the resources page lists EDTC tools and the official EU sources we refer to.
          </PendingContent>
        )}
      </Section>
      <RelatedResources paths={['/resources', '/eu-ai-act', '/frameworks/ai-readiness-framework']} title="Available now" />
      <CallToAction />
    </>
  )
}
