import { NavLink } from 'react-router-dom'

/** Dropdown panel for one navigation group. Wide groups lay their links out in two columns. */
export default function MegaMenu({ group, id, onNavigate }) {
  const wide = group.items.length > 5
  return (
    <div id={id} className={`absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 rounded-lg border border-line bg-white p-5 shadow-[0_18px_40px_rgba(10,39,68,0.14)] ${wide ? 'w-[560px]' : 'w-[320px]'}`}>
      <p className="mb-3 border-b border-line pb-3 text-sm text-muted">{group.intro}</p>
      <ul className={`grid gap-x-6 gap-y-0.5 ${wide ? 'grid-cols-2' : ''}`}>
        {group.items.map((item) => (
          <li key={item.to + item.label}>
            <NavLink
              to={item.to}
              end
              onClick={onNavigate}
              className={({ isActive }) => `block rounded-md px-3 py-2 text-[0.93rem] ${isActive ? 'bg-sky font-semibold text-brand' : 'text-ink hover:bg-mist hover:text-brand'}`}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
