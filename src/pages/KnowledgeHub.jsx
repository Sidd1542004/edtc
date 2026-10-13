import { Link } from 'react-router-dom'
import { BookOpen, Lightbulb, Library, ArrowRight } from 'lucide-react'
import { Section, SectionHeading, CallToAction } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import { ARTICLES, RESOURCES } from '../data/knowledge.js'

const AREAS = [
  { to: '/research', icon: BookOpen, name: 'Research', text: 'EDTC research on AI adoption, governance and digital trust in Europe.', count: () => ARTICLES.filter((a) => a.section === 'research').length, unit: 'publications' },
  { to: '/insights', icon: Lightbulb, name: 'Insights', text: 'Articles and commentary on AI governance and European digital developments.', count: () => ARTICLES.filter((a) => a.section === 'insights').length, unit: 'articles' },
  { to: '/resources', icon: Library, name: 'Resources', text: 'EDTC tools and guides, official EU sources and standards.', count: () => RESOURCES.length, unit: 'resources' },
]

export default function KnowledgeHub() {
  return (
    <>
      <PageHero path="/knowledge" eyebrow="Knowledge" title="Knowledge hub" intro="Research, insights and practical resources on AI readiness, AI governance and digital trust." />
      <Section labelledBy="areas">
        <SectionHeading id="areas" title="Browse by type" />
        <ul className="grid gap-5 md:grid-cols-3">
          {AREAS.map(({ to, icon: Icon, name, text, count, unit }) => (
            <li key={to}>
              <Link to={to} className="group flex h-full flex-col rounded-md border border-line bg-white p-7 hover:shadow-[0_12px_30px_rgba(10,39,68,0.09)]">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-sky text-brand"><Icon size={21} aria-hidden="true" /></span>
                <h3 className="mt-5 text-xl font-bold group-hover:text-brand">{name}</h3>
                <p className="mt-2 flex-1 text-muted">{text}</p>
                <p className="mt-5 flex items-center justify-between text-sm"><span className="text-muted">{count() || 'No'} {unit} {count() ? '' : 'yet'}</span><ArrowRight size={16} className="text-brand" aria-hidden="true" /></p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="mist" labelledBy="start">
        <SectionHeading id="start" eyebrow="Featured" title="Good places to start" />
        <ul className="grid gap-5 md:grid-cols-3">
          {RESOURCES.filter((r) => r.to).map((r) => (
            <li key={r.title}><Link to={r.to} className="block h-full rounded-md border border-line bg-white p-6 hover:border-brand-muted"><h3 className="text-lg font-bold">{r.title}</h3><p className="mt-2 text-muted">{r.text}</p></Link></li>
          ))}
        </ul>
      </Section>
      <CallToAction title="Have a question we have not covered?" text="EDTC can point you to the right resource or service." />
    </>
  )
}
