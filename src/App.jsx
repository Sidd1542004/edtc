import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Seo from './components/Seo.jsx'
import { ROUTES, REDIRECTS } from './data/routes.js'
import Home from './pages/Home.jsx'
import ServicesOverview from './pages/ServicesOverview.jsx'
import ServicePage from './pages/ServicePage.jsx'
import Certification from './pages/Certification.jsx'
import GovernanceHub from './pages/GovernanceHub.jsx'
import TopicPage from './pages/TopicPage.jsx'
import FrameworksOverview from './pages/FrameworksOverview.jsx'
import ReadinessFramework from './pages/ReadinessFramework.jsx'
import FrameworkPage from './pages/FrameworkPage.jsx'
import KnowledgeHub from './pages/KnowledgeHub.jsx'
import ListingPage from './pages/ListingPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import ReadinessCheck from './pages/ReadinessCheck.jsx'
import About from './pages/About.jsx'
import Partners from './pages/Partners.jsx'
import Contact from './pages/Contact.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Sycur from './pages/Sycur.jsx'

// Maps each template in the route table to its page component.
const TEMPLATES = {
  home: () => <Home />,
  services: () => <ServicesOverview />,
  service: (r) => <ServicePage slug={r.key} />,
  certification: () => <Certification />,
  governance: () => <GovernanceHub />,
  topic: (r) => <TopicPage slug={r.key} />,
  frameworks: () => <FrameworksOverview />,
  'readiness-framework': () => <ReadinessFramework />,
  framework: (r) => <FrameworkPage slug={r.key} />,
  knowledge: () => <KnowledgeHub />,
  listing: (r) => <ListingPage section={r.key} />,
  resources: () => <ResourcesPage />,
  'readiness-check': () => <ReadinessCheck />,
  about: () => <About />,
  partners: () => <Partners />,
  contact: () => <Contact />,
  legal: (r) => <LegalPage kind={r.key} />,
  sycur: () => <Sycur />,
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) return el.scrollIntoView()
    }
    window.scrollTo(0, 0)
    document.getElementById('main')?.focus({ preventScroll: true })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          {ROUTES.map((r) => (
            <Route key={r.path} path={r.path} element={<><Seo title={r.title} description={r.description} path={r.path} />{TEMPLATES[r.template](r)}</>} />
          ))}
          <Route path="/insights/:slug" element={<ArticlePage section="insights" />} />
          <Route path="/research/:slug" element={<ArticlePage section="research" />} />
          {REDIRECTS.map((x) => <Route key={x.from} path={x.from} element={<Navigate to={x.to} replace />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
