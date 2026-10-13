import { Section, SectionHeading, CallToAction, PendingContent, ButtonLink, Notice } from '../components/ui.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedResources from '../components/RelatedResources.jsx'
import { SITE } from '../lib/site.js'

export default function ReadinessCheck() {
  return (
    <>
      <PageHero path="/ai-readiness" eyebrow="Prototype tool" title="Check your AI readiness" intro="Enter your website and preview how it scores on the EDTC AI readiness checklist." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading title="About the check" className="mb-5" />
            <p className="text-lg">This free preview shows a limited, non-binding summary based on the EDTC AI Readiness Framework. It looks only at what is publicly visible on your website, so it cannot replace an assessment of how AI is used inside your organisation.</p>
            <p className="mt-4 text-muted">Full reports and tailored recommendations are available by subscription.</p>
            <div className="mt-8">
              {SITE.readinessCheckUrl ? (
                <ButtonLink href={SITE.readinessCheckUrl}>Run the AI Readiness Check</ButtonLink>
              ) : (
                <PendingContent title="The checker is not available on this page yet." note="Set VITE_READINESS_CHECK_URL to connect the existing checker service">
                  For a full picture of your readiness, book an AI Readiness Assessment.
                </PendingContent>
              )}
            </div>
          </div>
          <div className="space-y-5">
            <Notice title="Prototype">The AI Readiness Check is a prototype. Its results are indicative only and are not an assessment, certification or legal opinion.</Notice>
          </div>
        </div>
      </Section>
      <RelatedResources paths={['/ai-readiness-assessment', '/frameworks/ai-readiness-framework', '/certification']} title="Go further" />
      <CallToAction />
    </>
  )
}
