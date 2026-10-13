import { useParams } from 'react-router-dom'
import { Section } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import Seo from '../components/Seo.jsx'
import NotFound from './NotFound.jsx'
import { ARTICLES } from '../data/knowledge.js'

const fmt = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

/** Article template for /insights/:slug and /research/:slug. Unknown slugs render the 404 page. */
export default function ArticlePage({ section }) {
  const { slug } = useParams()
  const a = ARTICLES.find((x) => x.section === section && x.slug === slug)
  if (!a) return <NotFound />
  const path = `/${section}/${a.slug}`
  return (
    <>
      <Seo title={`${a.title} | EDTC`} description={a.summary} path={path} />
      <PageHero path={`/${section}`} current={a.title} eyebrow={a.category} title={a.title} intro={a.summary}>
        <p className="text-sm text-white/75">{a.author && <>{a.author} · </>}<time dateTime={a.date}>{fmt(a.date)}</time></p>
      </PageHero>
      <Section>
        <article className="prose-edtc mx-auto max-w-[68ch] text-lg">{a.body.map((p) => <p key={p}>{p}</p>)}</article>
      </Section>
      <RelatedResources paths={a.related || []} />
    </>
  )
}
