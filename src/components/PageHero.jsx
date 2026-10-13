import Breadcrumbs from './Breadcrumbs.jsx'
import WaveLines from './WaveLines.jsx'
import { Container, Eyebrow } from './ui.jsx'

export default function PageHero({ path, eyebrow, title, intro, children, current }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white on-dark">
      <WaveLines className="pointer-events-none absolute -right-24 -top-10 h-[130%] w-auto opacity-70" />
      <Container className="relative py-12 md:py-16">
        <Breadcrumbs path={path} current={current} dark />
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl text-[2rem] font-bold leading-[1.12] text-white sm:text-[2.6rem] lg:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-3xl text-lg text-white/85 sm:text-xl">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  )
}
