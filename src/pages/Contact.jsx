import { Mail, MapPin, Globe, Handshake } from 'lucide-react'
import { Section } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { SITE } from '../lib/site.js'

export default function Contact() {
  return (
    <>
      <PageHero path="/contact" eyebrow="Get in touch" title="Contact EDTC" intro="Interested in certification, an assessment, a partnership or working together? Use the form or email us directly." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside aria-labelledby="details">
            <h2 id="details" className="font-heading text-xl font-bold">Contact details</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-3"><Mail size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p><a href={`mailto:${SITE.email}`} className="break-all font-semibold text-brand underline">{SITE.email}</a></div></li>
              <li className="flex gap-3"><Handshake size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><p className="text-xs font-semibold uppercase tracking-wider text-muted">Partnership enquiries</p><a href={`mailto:${SITE.partnersEmail}`} className="break-all font-semibold text-brand underline">{SITE.partnersEmail}</a></div></li>
              <li className="flex gap-3"><MapPin size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><p className="text-xs font-semibold uppercase tracking-wider text-muted">Location</p><p>{SITE.city}</p>{SITE.showEditorial && <p className="text-xs text-gold-ink">Editorial: confirm the street address (three versions on the current site).</p>}</div></li>
              <li className="flex gap-3"><Globe size={20} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><div><p className="text-xs font-semibold uppercase tracking-wider text-muted">Coverage</p><p>{SITE.coverage}</p></div></li>
            </ul>
          </aside>
          <div>
            <h2 className="sr-only">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
