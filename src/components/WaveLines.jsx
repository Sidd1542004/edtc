/* Decorative flowing lines, echoing the wave motif in EDTC's brand template. Purely decorative. */
export default function WaveLines({ className = '' }) {
  const lines = Array.from({ length: 14 }, (_, i) => i)
  return (
    <svg className={className} viewBox="0 0 600 600" fill="none" aria-hidden="true" focusable="false">
      {lines.map((i) => (
        <path
          key={i}
          d={`M${-40 + i * 6} ${40 + i * 18} C ${160 + i * 10} ${-20 + i * 14}, ${120 + i * 8} ${300 + i * 6}, ${300 + i * 10} ${330 + i * 8} S ${520 + i * 4} ${480 + i * 6}, ${640} ${560 + i * 4}`}
          stroke="#8fa9cc"
          strokeOpacity={0.12 + (i % 4) * 0.04}
          strokeWidth="1"
        />
      ))}
      <path d="M-20 200 C 150 120, 140 380, 320 400 S 560 520, 640 600" stroke="#c4a85e" strokeOpacity="0.7" strokeWidth="1.4" />
      <circle cx="318" cy="399" r="5" fill="#c4a85e" fillOpacity="0.8" />
      <circle cx="104" cy="158" r="6" fill="#5c7fae" fillOpacity="0.7" />
    </svg>
  )
}
