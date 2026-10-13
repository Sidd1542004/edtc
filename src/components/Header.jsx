import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import DesktopNavigation from './DesktopNavigation.jsx'
import MobileNavigation from './MobileNavigation.jsx'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <DesktopNavigation />
        <div className="flex items-center gap-3">
          <NavLink to="/contact" className="hidden min-h-11 items-center whitespace-nowrap rounded-md bg-brand px-4 text-sm font-semibold text-white hover:bg-brand-hover sm:inline-flex">
            Contact EDTC
          </NavLink>
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}
