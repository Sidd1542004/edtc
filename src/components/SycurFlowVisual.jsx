import { useEffect, useState } from 'react'

const NODES = [
  { x: 70, y: 250, label: 'AI agent' },
  { x: 170, y: 140, label: 'Identity' },
  { x: 300, y: 92, label: 'Authority' },
  { x: 410, y: 170, label: 'Trust decision', key: true },
  { x: 430, y: 300, label: 'Action', key: true },
  { x: 300, y: 378, label: 'Evidence' },
]
const PATH = 'M70 250 C 100 180, 130 150, 170 140 S 260 80, 300 92 S 400 120, 410 170 S 450 260, 430 300 S 360 390, 300 378'

/* Conceptual illustration: an agent's proposed action passing through identity, authority and a trust decision
   before it acts, with evidence kept afterwards. The moving marker is hidden when reduced motion is preferred. */
export default function SycurFlowVisual() {
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    setMotion(!mq?.matches)
  }, [])
  return (
    <figure className="relative mx-auto w-full max-w-[520px]">
      <svg viewBox="0 0 500 460" className="h-auto w-full" role="img" aria-labelledby="sycur-vis-title sycur-vis-desc">
        <title id="sycur-vis-title">How SYCUR places a trust decision before an AI action</title>
        <desc id="sycur-vis-desc">An AI agent passes through identity, authority and a trust decision before its action, and evidence is preserved afterwards.</desc>
        <defs>
          <pattern id="sy-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fillOpacity="0.09" /></pattern>
        </defs>
        <rect x="0" y="0" width="500" height="460" rx="24" fill="#0a2744" />
        <rect x="0" y="0" width="500" height="460" rx="24" fill="url(#sy-grid)" />
        <circle cx="270" cy="235" r="168" fill="none" stroke="#ffffff" strokeOpacity="0.08" />
        <circle cx="270" cy="235" r="118" fill="none" stroke="#c4a85e" strokeOpacity="0.25" strokeDasharray="2 7" />
        <path id="sy-path" d={PATH} fill="none" stroke="#8fa9cc" strokeOpacity="0.55" strokeWidth="1.6" />
        <path d="M 410 170 S 450 260, 430 300" fill="none" stroke="#c4a85e" strokeWidth="2.4" />
        {NODES.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r={n.key ? 15 : 11} fill={n.key ? '#c4a85e' : '#0e3a77'} stroke={n.key ? '#f3ece0' : '#8fa9cc'} strokeWidth="2" />
            <text x={n.x + (n.x > 380 ? -24 : 20)} y={n.y + 5} textAnchor={n.x > 380 ? 'end' : 'start'} fontFamily="Inter, sans-serif" fontSize="15" fontWeight={n.key ? 700 : 500} fill={n.key ? '#d4bc7a' : '#ffffff'}>{n.label}</text>
          </g>
        ))}
        {motion && (
          <circle r="6" fill="#ffffff">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto"><mpath href="#sy-path" /></animateMotion>
          </circle>
        )}
        <text x="30" y="430" fontFamily="Inter, sans-serif" fontSize="12" fill="#ffffff" fillOpacity="0.6">Conceptual illustration</text>
      </svg>
    </figure>
  )
}
