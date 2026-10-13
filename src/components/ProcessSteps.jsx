/** Numbered process, horizontal on wide screens and vertical on small ones. */
export default function ProcessSteps({ steps, label }) {
  return (
    <ol aria-label={label} className={`grid gap-4 md:grid-cols-2 ${steps.length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>
      {steps.map((s, i) => (
        <li key={s.name} className="relative rounded-md border border-line bg-white p-5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand font-heading text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
          <h3 className="mt-4 text-base font-bold"><span className="sr-only">Step {i + 1}: </span>{s.name}</h3>
          <p className="mt-1.5 text-sm text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
