import { PILLARS } from '../data/framework.js'

/* The six pillars of the EDTC AI Readiness Framework arranged around the framework name.
   Each pillar is also listed as text, so screen readers get the full content. */
const LINES = {
  'ai-usage-mapping': ['AI Usage', 'Mapping'],
  'risk-classification': ['Risk', 'Classification'],
  'data-privacy-awareness': ['Data & Privacy', 'Awareness'],
  'governance-accountability': ['Governance &', 'Accountability'],
  'security-resilience': ['Security &', 'Resilience'],
  'people-training': ['People &', 'Training'],
}

export default function PillarWheel({ dark = false, className = '' }) {
  const cx = 260, cy = 260, r = 178
  const ink = dark ? '#ffffff' : '#111b31'
  return (
    <figure className={className}>
      <svg viewBox="0 0 520 520" className="h-auto w-full" role="img" aria-labelledby="wheel-title wheel-desc">
        <title id="wheel-title">EDTC AI Readiness Framework</title>
        <desc id="wheel-desc">Six pillars: {PILLARS.map((p) => p.name).join(', ')}.</desc>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={dark ? 'rgba(255,255,255,0.22)' : '#e0e2e5'} strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={r - 46} fill="none" stroke="#c4a85e" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx={cx} cy={cy} r="86" fill={dark ? '#0e3a77' : '#e8eef6'} stroke="#c4a85e" strokeWidth="1.5" />
        <text x={cx} y={cy - 12} textAnchor="middle" fontFamily="Montserrat, Inter, sans-serif" fontSize="15" fontWeight="700" fill={ink}>AI Readiness</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fontFamily="Montserrat, Inter, sans-serif" fontSize="15" fontWeight="700" fill={ink}>Framework</text>
        <text x={cx} y={cy + 30} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11.5" fill={dark ? '#d4bc7a' : '#75632d'}>6 pillars</text>
        {PILLARS.map((p, i) => {
          const a = (-90 + i * 60) * (Math.PI / 180)
          const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a)
          const words = LINES[p.id]
          return (
            <g key={p.id}>
              <circle cx={x} cy={y} r="54" fill={dark ? '#0a2744' : '#ffffff'} stroke={dark ? 'rgba(255,255,255,0.35)' : '#0e3a77'} strokeWidth="1.5" />
              <text x={x} y={y - 22} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#c4a85e">{p.number}</text>
              {words.map((w, k) => (
                <text key={k} x={x} y={y - 2 + k * 16 - (words.length - 1) * 4} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill={ink}>{w}</text>
              ))}
            </g>
          )
        })}
      </svg>
    </figure>
  )
}
