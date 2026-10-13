import { Link } from 'react-router-dom'

export default function Logo({ dark = false, compact = false }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="European Digital Trust Council, home">
      <img src="/edtc-logo.png" alt="" width="48" height="48" className={compact ? 'h-10 w-10' : 'h-11 w-11 lg:h-12 lg:w-12'} />
      <span className={`font-heading text-[0.72rem] font-bold uppercase leading-[1.15] tracking-[0.06em] sm:text-[0.78rem] ${dark ? 'text-white' : 'text-muted'}`}>
        <span className="block">European</span>
        <span className={`block ${dark ? 'text-gold-light' : 'text-brand'}`}>Digital Trust</span>
        <span className="block">Council</span>
      </span>
    </Link>
  )
}
